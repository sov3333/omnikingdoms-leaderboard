import { Player, columns } from "./columns"
import { DataTable } from "./data-table"

const siteUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000'

export default async function Leaderboard() {
    const data = await getData()

    async function getData(): Promise<Player[]> {
        // Fetch data from API here.
        try {
            const players = await fetch(`${siteUrl}/api`, { method: "GET" })

            if (players.status !== 200) {
                console.log("Error getting players")
                return []
            } else {
                const playersJson = players.json()
                return playersJson
            }

        } catch (error) {
            console.log(error)
            return []
        }
    }

    return (
        <div className="container mx-auto py-[1rem]">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
