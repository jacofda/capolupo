'use client'

import { TinyWaveFormIcon } from '@/components/TinyWaveFormIcon'
import Link from 'next/link'


function PlayIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path opacity="0.4" fill="#ec4899" d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm176-88c0-8.7 4.7-16.7 12.3-20.9c3.7-2 7.7-3.1 11.7-3.1c4.3 0 8.7 1.2 12.5 3.5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176z"/>
      <path d="M212.5 147.5c-7.4-4.5-16.7-4.7-24.3-.5s-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88z"/>
    </svg>
  )
}


function SpotifyIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" {...props}>
      <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/>
    </svg>
  )
}



function ZipIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
      <path  opacity=".4" fill="#ec4899" d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM96 48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM66.1 335.9c-1.4 5.4-2.1 10.9-2.1 16.4c0 35.2 28.8 63.7 64 63.7s64-28.5 64-63.7c0-5.5-.7-11.1-2.1-16.4l-23.5-88.2c-3.7-14-16.4-23.8-30.9-23.8H120.6c-14.5 0-27.2 9.7-30.9 23.8L66.1 335.9z"/>
      <path  d="M384 160L224 0V128c0 17.7 14.3 32 32 32H384zM96 48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zm-6.3 71.8L66.1 335.9c-1.4 5.4-2.1 10.9-2.1 16.4c0 35.2 28.8 63.7 64 63.7s64-28.5 64-63.7c0-5.5-.7-11.1-2.1-16.4l-23.5-88.2c-3.7-14-16.4-23.8-30.9-23.8H120.6c-14.5 0-27.2 9.7-30.9 23.8zM112 336h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
    </svg>
    )
  }
  
  function PDFIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
  <path  opacity=".4" fill="#ec4899" d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64z"/>
  <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM176 352c-8.8 0-16 7.2-16 16l0 80 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 16 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-32 0zm32 80l-16 0 0-48 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24zm96-80c-8.8 0-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16l32 0c26.5 0 48-21.5 48-48l0-64c0-26.5-21.5-48-48-48l-32 0zm32 128l-16 0 0-96 16 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16zm80-112l0 64 0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-32 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16z"/>
  </svg>
    )
  }

export function DownloadSection(props: React.ComponentPropsWithoutRef<'section'>) {
return (
    <section {...props} >
    <p className="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only">
      <TinyWaveFormIcon
        colors={['fill-indigo-300', 'fill-blue-300']}
        className="h-2.5 w-2.5"
      />
      <span className="ml-2.5">Ascolta</span>
    </p>

    <div className="h-0 lg:h-px  bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 " />
    <ul
      role="list"
      className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
    >


    <li className='flex flex-col gap-8 lg:gap-4 justify-start items-start'>
      
    <Link
        href="https://open.spotify.com/track/3xw1czNeukWmminNH82kCB?si=fN6SqJ1NSE-chpbKcN1fSA&context=spotify%3Aalbum%3A0D7O2pc80kLHaxdYprxnK0"
  target="_blank"
        className="group flex items-center"
        aria-label="Scarica l'intero album"
      >
        <SpotifyIcon className="h-8 w-8 fill-green-600 group-hover:fill-green-600" />
        <span className="ml-3 sm:block">Spotify</span>
      </Link>

      <Link
        href="https://ik.imagekit.io/2gweb/noneninenane/audio/demo.zip?updatedAt=1730478427828"
        className="group flex items-center"
        aria-label="Scarica l'intero album"
      >
        <ZipIcon className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
        <span className="ml-3 sm:block">Scarica album</span>
      </Link>


      <Link
        href="https://ik.imagekit.io/2gweb/noneninenane/audio/album.m4a?updatedAt=1734428736330"
        target='_blank'
        className="group flex items-center"
        aria-label="Ascolta l'intero album"
      >
        <PlayIcon className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
        <span className="ml-3 sm:block">Play album</span>
      </Link>

      <Link
        href="https://ik.imagekit.io/2gweb/noneninenane/Capolupo.pdf"
        className="group flex items-center"
        target='_blank'
        aria-label="Scarica l'intero album"
      >
        <PDFIcon className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
        <span className="ml-3 sm:block">Scarica gli accordi</span>
      </Link>

    </li>

    </ul>
  </section>
)
}