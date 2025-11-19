import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'

import './globals.css'

import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
	display: 'swap'
})

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap'
})

export const metadata: Metadata = {
	title: 'Племінне господарство. Мальки та товарна риба',
	description:
		'Провідне українське племінне господарство з вирощування малька та товарної риби. 30+ років досвіду, 10+ видів риб.',
	keywords: 'мальки, товарна риба, племінне господарство, рибництво, аквакультура, Україна',
	openGraph: {
		title: 'Племінне господарство. Мальки та товарна риба',
		description:
			'Провідне українське племінне господарство з вирощування малька та товарної риби. 30+ років досвіду, 10+ видів риб.'
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${montserrat.variable} ${inter.variable} antialiased bg-background text-white relative`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
