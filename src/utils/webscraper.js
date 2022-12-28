// Boilerplate
const axios = require("axios");
const puppeteer = require("puppeteer");
const options = {
    button: "middle",
};

const fetchPlayers = async (pageOffset, playerOffset) => {
    // Boilerplate
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    try {
        // Don't load fonts/images
        await page.setRequestInterception(true);
        page.on("request", (req) => {
            if (req.resourceType() == "font" || req.resourceType() == "image") {
                req.abort();
            } else {
                req.continue();
            }
        });
        await page.goto("https://www.nba.com/players");
        // Get rid of cookies overlay
        const [acceptCookies] = await page.$x("//button[text()='I Accept']");
        if (acceptCookies) {
            await acceptCookies.click();
            await page.waitForTimeout(1000);
        }
        // Navigate to correct page
        const [nextPage] = await page.$x("//button[@title='Next Page Button']");
        for (let i = 0; i < pageOffset; i++) {
            await nextPage.click();
        }
        // Parse players on current page
        for (let i = pageOffset; i < 11; i++) {
            const names = await page.$$("td.primary p");
            for (let j = playerOffset * 2; j < names.length; j += 2) {
                try {
                    const fullName = `${await names[j].evaluate(
                        (t) => t.innerText
                    )} ${await names[j + 1].evaluate((t) => t.innerText)}`;
                    let player = {
                        name: fullName.trim(),
                    };
                    // Open player profile
                    await names[j].click(options);
                    await page.waitForTimeout(3000);
                    const profilePage = (await browser.pages())[2];
                    await profilePage.bringToFront();
                    // Open player stats
                    await profilePage.waitForXPath(
                        "//a[contains(text(), 'Stats') and contains(@class, 'InnerNavTab')]"
                    );
                    const [statsButton] = await profilePage.$x(
                        "//a[contains(text(), 'Stats') and contains(@class, 'InnerNavTab')]"
                    );
                    await statsButton.click();
                    const statsPage = (await browser.pages())[2];
                    await statsPage.waitForXPath(
                        "//p[contains(text(), 'Per Mode')]"
                    );
                    await statsPage.waitForXPath("//td");
                    // Extract player stats
                    const data = await statsPage.$$("td");
                    player.team = await data[1].evaluate((t) => t.innerText);
                    player.recentSeason = await data[0].evaluate(
                        (t) => t.innerText
                    );
                    player.mpg = parseFloat(
                        await data[3].evaluate((t) => t.innerText)
                    );
                    player.ppg = parseFloat(
                        await data[4].evaluate((t) => t.innerText)
                    );
                    player.rpg = parseFloat(
                        await data[16].evaluate((t) => t.innerText)
                    );
                    player.apg = parseFloat(
                        await data[17].evaluate((t) => t.innerText)
                    );
                    player.spg = parseFloat(
                        await data[19].evaluate((t) => t.innerText)
                    );
                    player.bpg = parseFloat(
                        await data[20].evaluate((t) => t.innerText)
                    );
                    // Extract player headshot
                    const [headshot] = await statsPage.$x(
                        "//img[contains(@alt, 'Headshot')]"
                    );
                    if (!headshot) {
                        await statsPage.close();
                        await page.waitForTimeout(1000);
                        continue;
                    } else {
                        const src = await headshot.getProperty("src");
                        player.headshot = await src.jsonValue();
                    }
                    // Save player to DB
                    if (
                        player.recentSeason === "2022-23" &&
                        player.team !== "TOT"
                    ) {
                        await axios({
                            method: "PUT",
                            url: "http://localhost:3000//api/players",
                            data: {
                                player: JSON.stringify({ ...player }),
                            },
                        }).catch((err) => {
                            throw err;
                        });
                        console.log(player);
                    }
                    // Close tab
                    await statsPage.close();
                    await page.waitForTimeout(1000);
                } catch (e) {
                    console.log(e);
                    browser.close();
                    return { pageOffset: i, playerOffset: j / 2, done: false };
                }
            }
            // Go to next page
            if (i + 1 < 11) {
                await nextPage.click();
                playerOffset = 0;
                await page.waitForTimeout(1000);
            }
        }
        return { done: true };
    } catch {
        return {
            pageOffset: pageOffset,
            playerOffset: playerOffset,
            done: false,
        };
    } finally {
        browser.close();
    }
};

const scrape = async (pageOffset = 0, playerOffset = 0) => {
    let offset = {
        pageOffset: pageOffset,
        playerOffset: playerOffset,
        done: false,
    };
    while (!offset.done) {
        console.log(
            `Fetching with page offset: ${offset.pageOffset} and player offset: ${offset.playerOffset}`
        );
        offset = await fetchPlayers(offset.pageOffset, offset.playerOffset);
    }
};

scrape(9, 0);
