"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

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
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} // sorts by asc first
                >
                    Wins
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "losses",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} // sorts by asc first
                >
                    Losses
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "winRatio",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() !== "desc")} // sorts by desc first
                >
                    Win Ratio
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const WIN_RATE: number = row.getValue("winRatio")
            return <div>{WIN_RATE * 100}%</div>
        },
    },
    {
        accessorKey: "strength",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() !== "desc")} // sorts by desc first
                >
                    Strength
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "totalMatches",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() !== "desc")} // sorts by desc first
                >
                    Total Matches
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
]
