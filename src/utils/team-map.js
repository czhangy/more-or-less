const teamData = [
    {
        color: "#C8102E",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2022/08/Atlanta-Hawks-Logo-300x300.png?ezimgfmt=ngcb9/notWebP",
    },
    {
        color: "#007A33",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2015/02/boston_celtics_logo-270x300.jpg?ezimgfmt=ngcb9/notWebP",
    },
    {
        color: "#000000",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2017/03/brooklyn_nets_logo-227x300.jpg?ezimgfmt=ngcb9/notWebP",
    },
    {
        color: "#00788C",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2017/02/charlotte_hornets_logo.jpg?ezimgfmt=ng%3Awebp%2Fngcb9%2Frs%3Adevice%2Frscb9-1",
    },
    {
        color: "#CE1141",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2017/02/chicago_bulls_logo.jpg?ezimgfmt=ng%3Awebp%2Fngcb9%2Frs%3Adevice%2Frscb9-1",
    },
    {
        color: "#860038",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2017/02/2017_cavaliers_logo-208x300.png?ezimgfmt=ngcb9/notWebP",
    },
    {
        color: "#00538C",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2017/03/dallas_mavericks_logo.jpg?ezimgfmt=ng%3Awebp%2Fngcb9%2Frs%3Adevice%2Frscb9-1",
    },
    {
        color: "#0E2240",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2017/03/nuggets_logo_colors.png?ezimgfmt=ngcb9/notWebP",
    },
    {
        color: "#C8102E",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2017/03/detroit_pistons_logo-1.jpg?ezimgfmt=ng%3Awebp%2Fngcb9%2Frs%3Adevice%2Frscb9-1",
    },
    {
        color: "#1D428A",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2017/03/GSW-1-248x300.png?ezimgfmt=ngcb9/notWebP",
    },
    {
        color: "#CE1141",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2017/03/houston_rockets_logo.jpg?ezimgfmt=ngcb9/notWebP",
    },
    {
        color: "#FDBB30",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2017/03/indiana_pacers_logo.jpg?ezimgfmt=ng%3Awebp%2Fngcb9%2Frs%3Adevice%2Frscb9-1",
    },
    {
        color: "#1D428A",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2017/03/los_angeles_clippers_logo-300x228.jpg?ezimgfmt=ngcb9/notWebP",
    },
    {
        color: "#552583",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2017/03/los_angeles_lakers_logo-300x185.jpg?ezimgfmt=ngcb9/notWebP",
    },
    {
        color: "#5D76A9",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2017/03/Memphis_Grizzlies_logo_2018-249x300.png?ezimgfmt=ngcb9/notWebP",
    },
    {
        color: "#98002E",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2017/03/miami_heat_logo_colors.png?ezimgfmt=ng%3Awebp%2Fngcb9%2Frs%3Adevice%2Frscb9-1",
    },
    {
        color: "#00471B",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2017/03/milwaukee_bucks_logo.jpg?ezimgfmt=ng%3Awebp%2Fngcb9%2Frs%3Adevice%2Frscb9-1",
    },
    {
        color: "#0C2340",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2017/03/minnesota_timberwolves_logo-300x300.jpg?ezimgfmt=ngcb9/notWebP",
    },
    {
        color: "#0C2340",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2015/06/new_orleans_pelicans_logo-300x224.jpg?ezimgfmt=ngcb9/notWebP",
    },
    {
        color: "#F58426",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2017/03/knicks_logo_colors-300x244.png?ezimgfmt=ngcb9/notWebP",
    },
    {
        color: "#007AC1",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2017/03/oklahoma_city_thunder_logo-300x276.jpg?ezimgfmt=ngcb9/notWebP",
    },
    {
        color: "#0077C0",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2017/03/orlando_magic_logo.jpg?ezimgfmt=ng%3Awebp%2Fngcb9%2Frs%3Adevice%2Frscb9-1",
    },
    {
        color: "#006BB6",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2017/03/sixers_logo_colors.png?ezimgfmt=ng%3Awebp%2Fngcb9%2Frs%3Adevice%2Frscb9-1",
    },
    {
        color: "#1D1160",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2015/03/phoenix_suns_logo.jpg?ezimgfmt=ng%3Awebp%2Fngcb9%2Frs%3Adevice%2Frscb9-1",
    },
    {
        color: "#E03A3E",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2015/03/trailblazers_logo_colors-300x257.jpg?ezimgfmt=ngcb9/notWebP",
    },
    {
        color: "#5A2D81",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2015/03/sacramento_kings_logo-263x300.jpg?ezimgfmt=ngcb9/notWebP",
    },
    {
        color: "#C4CED4",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2015/03/san_antonio_spurs_logo.jpg?ezimgfmt=ng%3Awebp%2Fngcb9%2Frs%3Adevice%2Frscb9-1",
    },
    {
        color: "#CE1141",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2015/03/Toronto-Raptors-Logo.png?ezimgfmt=ng%3Awebp%2Fngcb9%2Frs%3Adevice%2Frscb9-1",
    },
    {
        color: "#002B5C",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2015/03/utah_jazz_logo-300x137.jpg?ezimgfmt=ngcb9/notWebP",
    },
    {
        color: "#002B5C",
        logo: "https://teamcolorcodes.com/wp-content/uploads/2015/03/washington_wizards_logo.jpg?ezimgfmt=ng%3Awebp%2Fngcb9%2Frs%3Adevice%2Frscb9-1",
    },
];

export const getTeamData = (id) => {
    return teamData[id - 1];
};
