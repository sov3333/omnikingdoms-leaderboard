import { Player, columns } from "./columns"
import { DataTable } from "./data-table"

const siteUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000'

async function getData(): Promise<Player[]> {
    // Fetch data from API here.
    const players = await fetch(`${siteUrl}/api`, { method: "GET" })
    return players.json()
}

export default async function Leaderboard() {
    const data = await getData()

    return (
        <div className="container mx-auto py-[1rem]">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
