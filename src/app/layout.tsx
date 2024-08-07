import { type Metadata } from 'next'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - NoneNineNane',
    default:
      'NoneNineNane - Nove piccole canzoni per bimbi che non vogliono dormire',
  },
  description:
    'Nove piccole canzoni per bimbi che non vogliono dormire',
    openGraph: {
      type: 'website',
      title: 'NoneNineNane',
      description: 'Nove piccole canzoni per bimbi che non vogliono dormire',

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
    <html lang="en" className="h-full bg-white antialiased">
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
