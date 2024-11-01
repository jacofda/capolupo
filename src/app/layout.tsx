import { type Metadata } from 'next'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - NoneNineNane',
    default:
      'NoneNineNane - Nove piccole canzoni per bambini che non vogliono dormire',
  },
  description:
    'Nove piccole canzoni per bambini che non vogliono dormire',
    openGraph: {
      type: 'website',
      title: 'NoneNineNane',
      description: 'Sono una manciata di filastrocche messe in musica, nove piccole canzoni scritte e pensate per addormentare i bambini da Fabio Andreoni.',

      images: [
        {
          url: 'https://ik.imagekit.io/2gweb/noneninenane/cane.webp?updatedAt=1716839505656',
          alt: 'NoneNineNane',
        },
      ],
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="h-full bg-white antialiased">
      <head>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap"
        />
      </head>
      <body className="flex min-h-full">
        <div className="w-full">{children}</div>
      </body>
    </html>
  )
}
