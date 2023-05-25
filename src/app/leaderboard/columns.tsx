"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Player = {
    name: string
    wins: number
    losses: number
    winRatio: number
    strength: number
    totalMatches: number
}

export const columns: ColumnDef<Player>[] = [
    {
        accessorKey: "name",
        header: "Player",
    },
    {
        accessorKey: "wins",
        header: "Wins",
    },
    {
        accessorKey: "losses",
        header: "Losses",
    },
    {
        accessorKey: "winRatio",
        header: "Win Ratio",
    },
    {
        accessorKey: "strength",
        header: "Strength",
    },
    {
        accessorKey: "totalMatches",
        header: "Total Matches",
    },
]
