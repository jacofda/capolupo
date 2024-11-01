import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { AboutSection } from '@/components/AboutSection'
import { AudioProvider } from '@/components/AudioProvider'
import { AudioPlayer } from '@/components/player/AudioPlayer'
import { TinyWaveFormIcon } from '@/components/TinyWaveFormIcon'
import { Waveform } from '@/components/Waveform'
import caneImage from '@/images/cane.webp'

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





function PersonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 11 12" {...props}>
      <path d="M5.019 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm3.29 7c1.175 0 2.12-1.046 1.567-2.083A5.5 5.5 0 0 0 5.019 7 5.5 5.5 0 0 0 .162 9.917C-.39 10.954.554 12 1.73 12h6.578Z" />
    </svg>
  )
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let hosts = ['Fabio Andreoni']
  let siteName = 'NoneNineNane';
  let slogan = 'Nove piccole canzoni per bambini che non vogliono dormire'

  return (
    <AudioProvider>
      <header className="bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120">
        <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
          <span className="font-mono text-slate-500">Musica e testi scritti da</span>
          <span className="mt-6 flex gap-6 font-bold text-slate-900">
            {hosts.map((host, hostIndex) => (
              <Fragment key={host}>
                {hostIndex !== 0 && (
                  <span aria-hidden="true" className="text-slate-400">
                    /
                  </span>
                )}
                {host}
              </Fragment>
            ))}
          </span>
        </div>
        <div className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:px-8 lg:py-12 xl:px-12">
          <Link
            href="/"
            title="home"
            className="group relative mx-auto block w-48 overflow-hidden rounded-lg bg-transparent shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
            aria-label="Homepage"
          >
            <div className="m-1.5 bg-slate-50 rounded-lg">
              <Image
                className="w-full"
                src={caneImage}
                alt=""
                sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
                priority
              />
            </div>
            <div className="p-2 -z-20 absolute inset-0 rounded-lg sm:rounded-xl lg:rounded-2xl transition duration-500 rainbow -m-2 group-hover:scale-150 group-hover:rotate-45" />
          </Link>
          <div className="mt-10 text-center lg:mt-12 lg:text-left">
            <p className="text-xl font-bold text-slate-900">
              <Link href="/" title="home">{siteName}</Link>
            </p>
            <p className="mt-3 text-lg font-medium leading-8 text-slate-700">
              {slogan}.
            </p>
          </div>
          {/* hidden lg:block */}
          <AboutSection className="mt-2 " />
          <section className="mt-10 lg:mt-12">
            <p className="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only">
              <TinyWaveFormIcon
                colors={['fill-indigo-300', 'fill-blue-300']}
                className="h-2.5 w-2.5"
              />
              <span className="ml-2.5">Ascolta</span>
            </p>
            <div className="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" />
            <ul
              role="list"
              className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
            >


            <li className='flex lg:flex-col gap-4 justify-start items-start'>
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
        </div>
      </header>
      <main className="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
        <Waveform className="absolute left-0 top-0 h-20 w-full" />
        <div className="relative">{children}</div>
      </main>
      <footer className="border-t border-slate-200 bg-slate-50 py-10 pb-40 sm:py-16 sm:pb-32 lg:hidden">
        <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4">
          {/* <AboutSection /> */}
          <p
        className="mt-2 text-base leading-7 text-slate-700">
          Fabio Andreoni, aka capolupo, é un medico, amante della musica, della libertà e dei sogni che ancora fanno i bambini
          </p>
          <h3 className="mt-8 flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
            <PersonIcon className="h-3 w-auto fill-slate-300" />
            <span className="ml-2.5">Musica e testi scritti da</span>
          </h3>
          <div className="mt-2 flex gap-6 text-sm font-bold leading-7 text-slate-900">
            {hosts.map((host, hostIndex) => (
              <Fragment key={host}>
                {hostIndex !== 0 && (
                  <span aria-hidden="true" className="text-slate-400">
                    /
                  </span>
                )}
                {host}
              </Fragment>
            ))}
          </div>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120">
        <AudioPlayer />
      </div>
    </AudioProvider>
  )
}
