import Head from 'next/head'
import Navbar from './components/Navbar'
import './globals.css'
import { Rock_Salt, Outfit, Roboto_Slab, Playfair_Display, Bad_Script } from 'next/font/google'
import { PropsWithChildren } from 'react';

export const metadata = {
  title: 'Gerald Elias',
  description: 'Hello :)',
}

const rock_salt = Rock_Salt({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rock-salt'
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit'
})

const roboto_slab = Roboto_Slab({
  weight: ['300', '500'],
  subsets: ['latin'],
  variable: '--font-roboto-slab'
})

const playfair_display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-playfair-display'
})

const bad_script = Bad_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bad-script'
})

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html className={`${rock_salt.variable} ${outfit.variable} ${roboto_slab.variable} ${playfair_display.variable} ${bad_script.variable}`} lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300&family=Roboto+Slab:wght@300;500&family=Rock+Salt&display=swap" rel="stylesheet"/>
      </Head>
      <body className="">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
