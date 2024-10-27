'use client'

import { useState } from 'react'
import clsx from 'clsx'

import { TinyWaveFormIcon } from '@/components/TinyWaveFormIcon'

export function AboutSection(props: React.ComponentPropsWithoutRef<'section'>) {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section {...props}>
      <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
        <TinyWaveFormIcon
          colors={['fill-violet-300', 'fill-pink-300']}
          className="h-2.5 w-2.5"
        />
        <span className="ml-2.5">About</span>
      </h2>
      <p
        className={clsx(
          'mt-2 text-base leading-7 text-slate-700',
          !isExpanded && 'lg:line-clamp-4',
        )}
      >
Sono una manciata di filastrocche messe in musica, nove piccole canzoni scritte e pensate per addormentare i bambini. Nascono in Basilicata scrutando l'orizzonte, annusando l'aria ed assimilando i luoghi. None é una negazione, quasi a voler dire che non sono vere ninne nanne, non a caso il sottotitolo recita proprio per bambini che non vogliono dormire.
La musica é un gioco, anche la vita può essere uno splendido gioco ed i bambini amano giocare

        {/* Fabio Andreoni nel vivere in Lucania ha preso l&apos;ispirazione per riassumere l&apos;essenza di quelle terre in 9 piccole canzoni per bambini e per sognatori. Ogni canzone contiene dei piccoli riferimenti alla storia e alle persone della Basilicata. */}
      </p>
      {!isExpanded && (
        <button
          type="button"
          className="mt-2 hidden text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900 lg:inline-block"
          onClick={() => setIsExpanded(true)}
        >
          Show more
        </button>
      )}
    </section>
  )
}
