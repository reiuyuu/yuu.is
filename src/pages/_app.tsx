import { A, H2, H3 } from '@/components/mdx-blocks'
import '@/styles/globals.css'
import { MDXProvider } from '@mdx-js/react'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import { Recursive } from 'next/font/google'

const recursive = Recursive({
  subsets: ['latin'],
  variable: '--font-rec',
  axes: ['MONO', 'CRSV'],
})

const components = {
  h2: H2,
  h3: H3,
  a: A,
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/*
      // @ts-ignore */}
      <MDXProvider components={components}>
        <main className={`${recursive.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </MDXProvider>
      <Analytics />
    </>
  )
}
