/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { cache } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { EpisodePlayButton } from '@/components/EpisodePlayButton'
// import { FormattedDate } from '@/components/FormattedDate'
import { PauseIcon } from '@/components/PauseIcon'
import { PlayIcon } from '@/components/PlayIcon'
import { getAllEpisodes } from '@/lib/episodes'

const getEpisode = cache(async (slug: string) => {
  let allEpisodes = await getAllEpisodes()
  let episode = allEpisodes.find((episode) => episode.slug.toString() === slug)

  if (!episode) {
    notFound()
  }


  return episode
})

export async function generateMetadata({
  params,
}: {
  params: { episode: string }
}) {
  let episode = await getEpisode(params.episode)

  return {
    title: episode.title,
  }
}

export default async function Episode({
  params,
}: {
  params: { episode: string }
}) {
  let episode = await getEpisode(params.episode)
  // let date = new Date(episode.published)

  return (
    <article className="py-16 lg:py-36">
      <Container>
        <header className="flex flex-col">
          <div className="flex items-center gap-6">
            <EpisodePlayButton
              episode={episode}
              className="group relative flex h-18 w-18 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring focus:ring-slate-700 focus:ring-offset-4"
              playing={
                <PauseIcon className="h-9 w-9 fill-white group-active:fill-white/80" />
              }
              paused={
                <PlayIcon className="h-9 w-9 fill-white group-active:fill-white/80" />
              }
            />
            <div className="flex flex-col">
              <h1 className="mt-2 text-4xl font-bold text-slate-900">
                {episode.title}
              </h1>
              <span
                
                className="order-first font-mono text-sm leading-7 text-slate-500"
              ><Link href="/">ALBUM</Link> {'>'} {episode.title}</span>
            </div>
          </div>
          <p className="ml-24 mt-3 text-lg font-medium leading-8 text-slate-700">
            {episode.description}
          </p>
        </header>
        <hr className="my-12 border-gray-200" />
        <div className="flex flex-col gap-y-4 gap-x-20 xl:flex-row justify-between">
            <div
              className="order-2 xl:order-1 prose prose-slate mt-14 [&>h2:nth-of-type(3n)]:before:bg-violet-200 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5"
              dangerouslySetInnerHTML={{ __html: episode.content }}>
            </div>
            <div className='mx-auto order-1 text-center text-gray-500 xl:order-2 xl:mt-28 xl:-mr-16 2xl:-mr-32'>
                {typeof episode.img === 'object' && episode.img !== null && 'url' in episode.img && 'alt' in episode.img && (
                  <>
                    <img src={episode.img.url} className="object-cover max-h-128" alt={episode.img.alt} />
                    <small>{episode.img.alt}</small>
                  </>
                )}
            </div>
          </div>
      </Container>
    </article>
  )
}
