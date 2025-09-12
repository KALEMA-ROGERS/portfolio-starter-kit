import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import ThemeToggle from './components/theme-toggle'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { StructuredData } from './components/structured-data'
import { ScrollToTop } from './components/scroll-to-top'
import { PerformanceOptimizer } from './components/performance-optimizer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Kalema Rogers - AI/ML Developer & Full Stack Engineer',
    template: '%s | Kalema Rogers',
  },
  description: 'AI/ML Developer specializing in chatbots, RAG systems, custom AI agents, and machine learning model deployment. Creating intelligent solutions for real-world problems with 2+ years of experience.',
  keywords: [
    'AI Developer',
    'Machine Learning Engineer',
    'Full Stack Developer',
    'Chatbot Development',
    'RAG Systems',
    'AI Agents',
    'ML Model Deployment',
    'Python Developer',
    'React Developer',
    'Next.js Developer',
    'OpenAI',
    'LangChain',
    'TensorFlow',
    'PyTorch'
  ],
  authors: [{ name: 'Kalema Rogers', url: baseUrl }],
  creator: 'Kalema Rogers',
  publisher: 'Kalema Rogers',
  openGraph: {
    title: 'Kalema Rogers - AI/ML Developer & Full Stack Engineer',
    description: 'AI/ML Developer specializing in chatbots, RAG systems, custom AI agents, and machine learning model deployment. Creating intelligent solutions for real-world problems.',
    url: baseUrl,
    siteName: 'Kalema Rogers Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/DSC_3472.JPG',
        width: 1200,
        height: 630,
        alt: 'Kalema Rogers - AI/ML Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalema Rogers - AI/ML Developer & Full Stack Engineer',
    description: 'AI/ML Developer specializing in chatbots, RAG systems, custom AI agents, and machine learning model deployment.',
    images: ['/DSC_3472.JPG'],
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
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
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
          <StructuredData />
          <PerformanceOptimizer />
          <main className="flex-auto min-w-0 flex flex-col">
            <div className="flex justify-end py-2">
              <ThemeToggle />
            </div>
            <Navbar />
            {children}
            <Footer />
            <ScrollToTop />
            <Analytics />
            <SpeedInsights />
          </main>
      </body>
    </html>
  )
}