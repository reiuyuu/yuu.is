export const getHeadingId = (heading: string): string =>
  heading.toLowerCase().replace(/\s+/g, '-')

export default function getHeadings(html: string): {
  level: 'h2' | 'h3'
  text: string
  href: string
}[] {
  const regex = /<(h2|h3)>(.+?)<\/\1>/g

  const match = html.match(regex) || []

  const headings = match.map((m) => {
    const level = m.slice(1, 3) as 'h2' | 'h3'
    const text = m.slice(4, -5)
    const href = '#' + getHeadingId(text)

    return { level, text, href }
  })

  return headings
}
