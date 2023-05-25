import Link from 'next/link'
import React from 'react'

const menuItems = [
    { title: 'Home', url: '/' },
    { title: 'Leaderboard', url: '/leaderboard' },
]

const Navbar = () => {
    return (
        <nav className="flex gap-2 m-[1rem]">
            {menuItems.map((item) => (
                <Link href={item.url} key={item.title}>
                    <div className="border border-slate-200 cursor-pointer px-4 py-2 rounded-lg">{item.title}</div>
                </Link>
            ))}
        </nav>
    )
}

export default Navbar