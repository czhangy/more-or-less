// Prisma
import prisma from "@/lib/prisma";
// TS
import type { NextApiRequest, NextApiResponse } from "next";
import Player from "@/models/Player";

const updatePlayer = async (player: Player) => {
    const response = await prisma.player.upsert({
        where: {
            name: player.name,
        },
        update: {
            team: player.team,
            headshot: player.headshot,
            recentSeason: player.recentSeason,
            mpg: player.mpg,
            ppg: player.ppg,
            rpg: player.rpg,
            apg: player.apg,
            bpg: player.bpg,
            spg: player.spg,
        },
        create: {
            name: player.name,
            team: player.team,
            headshot: player.headshot,
            recentSeason: player.recentSeason,
            mpg: player.mpg,
            ppg: player.ppg,
            rpg: player.rpg,
            apg: player.apg,
            bpg: player.bpg,
            spg: player.spg,
        },
    });
    return response;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "PUT") {
        try {
            const response = updatePlayer(JSON.parse(req.body.player));
            res.json(response);
        } catch (e) {
            console.log(e);
            res.status(400).send({ success: false, message: e });
        }
    } else res.status(405).send({ success: false });
}
