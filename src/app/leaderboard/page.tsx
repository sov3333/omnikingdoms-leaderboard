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
        {
            name: "MRGN",
            wins: 54,
            losses: 14,
            winRatio: 0.794,
            strength: 55,
            totalMatches: 68,
        },
        {
            name: "joXii",
            wins: 53,
            losses: 5,
            winRatio: 0.914,
            strength: 133,
            totalMatches: 58,
        },
        {
            name: "Galatic",
            wins: 49,
            losses: 0,
            winRatio: 1,
            strength: 777,
            totalMatches: 49,
        },
        {
            name: "Jax",
            wins: 49,
            losses: 5,
            winRatio: 0.907,
            strength: 420,
            totalMatches: 54,
        },
        {
            name: "Ruthgar",
            wins: 45,
            losses: 3,
            winRatio: 0.938,
            strength: 690,
            totalMatches: 48,
        },
        {
            name: "TonyStark",
            wins: 42,
            losses: 11,
            winRatio: 0.792,
            strength: 505,
            totalMatches: 53,
        },
        {
            name: "Aristokrat",
            wins: 40,
            losses: 19,
            winRatio: 0.677,
            strength: 850,
            totalMatches: 59,
        },
        {
            name: "Yuki",
            wins: 39,
            losses: 30,
            winRatio: 0.568,
            strength: 98,
            totalMatches: 69,
        },
        {
            name: "0xkay",
            wins: 35,
            losses: 7,
            winRatio: 0.833,
            strength: 399,
            totalMatches: 42,
        },
        {
            name: "Vito",
            wins: 32,
            losses: 45,
            winRatio: 0.416,
            strength: 69,
            totalMatches: 77,
        },
        {
            name: "Eustace",
            wins: 30,
            losses: 12,
            winRatio: 0.714,
            strength: 404,
            totalMatches: 42,
        },
        {
            name: "TryLuck",
            wins: 26,
            losses: 0,
            winRatio: 1,
            strength: 789,
            totalMatches: 26,
        },
        {
            name: "Gburu",
            wins: 25,
            losses: 4,
            winRatio: 0.862,
            strength: 168,
            totalMatches: 29,
        },
        {
            name: "scrollebol",
            wins: 25,
            losses: 38,
            winRatio: 0.397,
            strength: 76,
            totalMatches: 63,
        },
        {
            name: "ko888",
            wins: 22,
            losses: 2,
            winRatio: 0.916,
            strength: 222,
            totalMatches: 24,
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
