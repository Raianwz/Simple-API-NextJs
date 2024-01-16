import { Inter, Roboto } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})



export const metadata = {
  title: 'Dank API',
  description: 'One dank api for Twitch and more',

}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
