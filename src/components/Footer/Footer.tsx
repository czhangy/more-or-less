// Stylesheet
import styles from "./Footer.module.scss";
// Next
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles["footer-container"]}>
                <div className={styles.credits}>
                    <div className={styles.headshot}>
                        <Image
                            src="/assets/images/headshot.jpeg"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className={styles["credits-text"]}>
                        Developed by
                        <br />
                        Charles Zhang
                    </div>
                </div>
                <div className={styles.links}>
                    <Link href="https://twitter.com/czhangy_">
                        <a className={styles.link}>
                            <Image
                                src="/assets/icons/twitter.svg"
                                alt="Twitter"
                                layout="fill"
                                objectFit="contain"
                            />
                        </a>
                    </Link>
                    <Link href="https://github.com/czhangy">
                        <a className={styles.link}>
                            <Image
                                src="/assets/icons/github.svg"
                                alt="GitHub"
                                layout="fill"
                                objectFit="contain"
                            />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
