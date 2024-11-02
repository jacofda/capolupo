'use client'

import { TinyWaveFormIcon } from '@/components/TinyWaveFormIcon'
import Link from 'next/link'

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
        href="https://ik.imagekit.io/2gweb/noneninenane/audio/demo.zip?updatedAt=1730478427828"
        className="group flex items-center"
        aria-label="Scarica l'intero album"
      >
        <ZipIcon className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600" />
        <span className="ml-3 sm:block">Scarica album</span>
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