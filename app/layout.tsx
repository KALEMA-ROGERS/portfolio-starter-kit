import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import ThemeToggle from './components/theme-toggle'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Kalema Rogers - AI/ML Developer',
    template: '%s | Kalema Rogers',
  },
  description: 'AI/ML Developer specializing in chatbots, RAG systems, custom AI agents, and machine learning model deployment. Creating intelligent solutions for real-world problems.',
  openGraph: {
    title: 'Kalema Rogers - AI/ML Developer',
    description: 'AI/ML Developer specializing in chatbots, RAG systems, custom AI agents, and machine learning model deployment.',
    url: baseUrl,
    siteName: 'Kalema Rogers Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <main className="flex-auto min-w-0 flex flex-col">
            <div className="flex justify-end py-2">
              <ThemeToggle />
            </div>
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
      </body>
    </html>
  )
}