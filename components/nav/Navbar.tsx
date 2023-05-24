import Link from 'next/link'
import React from 'react'

const menuItems = [
    { title: 'Home', url: '/' },
    { title: 'Leaderboard', url: '/leaderboard' },
]

const Navbar = () => {
    return (
        <nav>
            {menuItems.map((item) => (
                <Link href={item.url} key={item.title}>
                    <div>{item.title}</div>
                </Link>
            ))}
        </nav>
    )
}

export default Navbar