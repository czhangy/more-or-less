const teamData = {
    ATL: {
        color: "#C8102E",
        logo: "https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg",
    },
    BOS: {
        color: "#007A33",
        logo: "https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg",
    },
    BKN: {
        color: "#000000",
        logo: "https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg",
    },
    CHA: {
        color: "#00788C",
        logo: "https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg",
    },
    CHI: {
        color: "#CE1141",
        logo: "https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg",
    },
    CLE: {
        color: "#860038",
        logo: "https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg",
    },
    DAL: {
        color: "#00538C",
        logo: "https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg",
    },
    DEN: {
        color: "#0E2240",
        logo: "https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg",
    },
    DET: {
        color: "#C8102E",
        logo: "https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg",
    },
    GSW: {
        color: "#1D428A",
        logo: "https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg",
    },
    HOU: {
        color: "#CE1141",
        logo: "https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg",
    },
    IND: {
        color: "#FDBB30",
        logo: "https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg",
    },
    LAC: {
        color: "#1D428A",
        logo: "https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg",
    },
    LAL: {
        color: "#552583",
        logo: "https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg",
    },
    MEM: {
        color: "#5D76A9",
        logo: "https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg",
    },
    MIA: {
        color: "#98002E",
        logo: "https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg",
    },
    MIL: {
        color: "#00471B",
        logo: "https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg",
    },
    MIN: {
        color: "#0C2340",
        logo: "https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg",
    },
    NOP: {
        color: "#0C2340",
        logo: "https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg",
    },
    NYK: {
        color: "#F58426",
        logo: "https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg",
    },
    OKC: {
        color: "#007AC1",
        logo: "https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg",
    },
    ORL: {
        color: "#0077C0",
        logo: "https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg",
    },
    PHI: {
        color: "#006BB6",
        logo: "https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg",
    },
    PHX: {
        color: "#1D1160",
        logo: "https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg",
    },
    POR: {
        color: "#E03A3E",
        logo: "https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg",
    },
    SAC: {
        color: "#5A2D81",
        logo: "https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg",
    },
    SAS: {
        color: "#C4CED4",
        logo: "https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg",
    },
    TOR: {
        color: "#CE1141",
        logo: "https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg",
    },
    UTA: {
        color: "#002B5C",
        logo: "https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg",
    },
    WAS: {
        color: "#002B5C",
        logo: "https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg",
    },
};

export const getTeamData = (tag) => {
    return teamData[tag];
};
