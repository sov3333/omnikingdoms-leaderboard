import { Player, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Player[]> {
    // Fetch data from API here.
    return [
        {
            name: "Jura",
            wins: 655,
            losses: 16,
            winRatio: 0.976,
            strength: 1234,
            totalMatches: 671,
        },
        {
            name: "Elons",
            wins: 255,
            losses: 46,
            winRatio: 0.847,
            strength: 149,
            totalMatches: 301,
        },
        {
            name: "pjotrek",
            wins: 222,
            losses: 31,
            winRatio: 0.877,
            strength: 277,
            totalMatches: 253,
        },
        {
            name: "Gauz",
            wins: 205,
            losses: 34,
            winRatio: 0.858,
            strength: 256,
            totalMatches: 239,
        },
        {
            name: "Integer",
            wins: 142,
            losses: 8,
            winRatio: 0.946,
            strength: 333,
            totalMatches: 150,
        },
        {
            name: "Spartacus",
            wins: 106,
            losses: 46,
            winRatio: 0.696,
            strength: 123,
            totalMatches: 152,
        },
        {
            name: "SOV",
            wins: 67,
            losses: 0,
            winRatio: 1,
            strength: 888,
            totalMatches: 67,
        },
        {
            name: "paul585",
            wins: 66,
            losses: 36,
            winRatio: 0.647,
            strength: 98,
            totalMatches: 102,
        },
        {
            name: "Rektpleb",
            wins: 64,
            losses: 2,
            winRatio: 0.970,
            strength: 555,
            totalMatches: 66,
        },
        {
            name: "DAWID",
            wins: 63,
            losses: 31,
            winRatio: 0.670,
            strength: 87,
            totalMatches: 94,
        },
    ]
}

export default async function Leaderboard() {
    const data = await getData()

    return (
        <div className="container mx-auto py-[1rem]">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
