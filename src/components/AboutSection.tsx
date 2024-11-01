'use client'

import { useState } from 'react'
import clsx from 'clsx'


export function AboutSection(props: React.ComponentPropsWithoutRef<'section'>) {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section {...props}>
      <p
        className={clsx('mt-2 text-base leading-7 text-slate-700')}
      >
Sono una manciata di filastrocche messe in musica, nove piccole canzoni scritte e pensate per addormentare i bambini. Nascono in Basilicata scrutando l&apos;orizzonte, annusando l&apos;aria ed assimilando i luoghi. None é una negazione, quasi a voler dire che non sono vere ninne nanne, non a caso il sottotitolo recita proprio per bambini che non vogliono dormire.
La musica é un gioco, anche la vita può essere uno splendido gioco ed i bambini amano giocare.

      </p>

    </section>
  )
}
