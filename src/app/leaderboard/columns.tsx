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
        cell: ({ row }) => {
            const NAME: string = row.getValue("name")
            return <div className="font-semibold">{NAME}</div>
        },
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
        cell: ({ row }) => {
            const WIN_RATE: number = row.getValue("winRatio")
            return <div>{WIN_RATE * 100}%</div>
        },
    },
    {
        accessorKey: "strength",
        header: "Strength",
    },
    {
        accessorKey: "totalMatches",
        header: () => <div className="text-right">Total Matches</div>,
        cell: ({ row }) => {
            const TOTAL_MATCHES: number = row.getValue("totalMatches")
            return <div className="text-right">{TOTAL_MATCHES}</div>
        },
    },
]
