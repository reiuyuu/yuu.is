import Head from 'next/head'

type MetaProps = {
  title?: string
  description?: string
}

export default function Meta({ title, description = 'reiuyuu' }: MetaProps) {
  const fullTitle = title ? `${title} - yuu.is` : 'yuu.is'

  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:site_name' content='yuu.is' />
      <meta name='description' content={description} />
      <link rel='shortcut icon' href='/favicon.ico' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <title>{fullTitle}</title>
    </Head>
  )
}
