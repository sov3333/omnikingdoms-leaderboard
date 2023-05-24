import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../../components/nav/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OmniKingdoms Leaderboard',
  description: 'OmniKingdoms Leaderboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
