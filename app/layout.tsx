import '../styles/globals.css'
import { LoadingProvider } from './components/LoadingContext'
import Loader from './components/Loader'
import { Sidebar } from './components/Sidebar'
import {
  Bricolage_Grotesque,
  Space_Mono,
} from 'next/font/google'
import { ScrollerProvider } from './components/ScrollContext'

const grot = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bg',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',  
})

const space = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
})

export const metadata = {
  title: 'anshbhagania | Portfolio',
  description: 'Dragging pixels & building code',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${grot.variable} ${space.variable} `}
    >
      <body className="min-h-screen max-w-full bg-[var(--color-bg)] text-[var(--color-text)]">
      <LoadingProvider>
        <Loader />
        <div className="grid grid-cols-7 gap-[10px] min-h-screen">
          <div className="col-span-2 flex">
            <Sidebar />
          </div>
          <ScrollerProvider>
            <main className="col-span-5 p-8 scroller">
              {children}
            </main>
          </ScrollerProvider>
        </div>
      </LoadingProvider>  
      </body>

    </html>
  )
}
