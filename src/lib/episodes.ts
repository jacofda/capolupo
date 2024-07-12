export interface Episode {
  id: number
  title: string
  slug: string
  published: Date | string
  description: string
  content: string
  audio: {
    src: string
    type: string
  }
}

export async function getAllEpisodes() {
  const cdn = 'https://ik.imagekit.io/2gweb/noneninenane/'
  return [
    {
      id: 5,
      title: '5: Un cane bianco della Lucania',
      slug: 'un-cane-bianco-della-lucania',
      published: '2022-02-24T00:00:00.000Z',
      description:
        'He’s going to need you to go ahead and come in on Saturday, but there’s a lot more to the story than you think.',
      content:
        '<h2 id="topics">Testo</h2>\n' +
        '<p>Ieri ho visto un cane bianco<br>\n' +
        'camminare a muso alto<br>\n' +
        'un cane bianco della Lucania<br>\n' +
        'era sera e stavo ad Agna<br>\n' +
        'cane bianco che mistero<br>\n' +
        'il tuo sguardo brigantiero<br>\n' +
        'il tuo sguardo così fiero<br>\n' +
        'sembri Crocco da Rionero<br>\n' +
        'come Crocco sulla montagna<br>\n' +
        'non hai tempo per fare la nanna<br>\n' +
        'come Crocco sulla montagna<br>\n' +
        'il tuo letto sarà di paglia<br>\n' +
        'come Crocco sulla montagna<br>\n' +
        'quando dormi pensi alla mamma<br>\n' +
        'come Crocco sulla montagna<br>\n' +
        'la giustizia è la tua manna<br>\n' +
        'la giustizia non fa la nanna<br>\n' +
        '<h2 id="links" class="text-2xl">Accordi</h2>\n' +
        '<p class="mb-0 w-40 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        'Ieri ho visto un cane bianco<br>\n' +
        '<p class="my-0 w-40 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        'camminare a muso alto<br>\n' +
        '<p class="my-0 w-40 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        'un cane bianco della Lucania<br>\n' +
        '<p class="my-0 w-40 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        'era sera e stavo ad Agna<br>\n' +
        '<p class="my-0 w-40 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        'cane bianco che mistero<br>\n' +
        '<p class="my-0 w-40 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        'il tuo sguardo brigantiero<br>\n' +
        '<p class="my-0 w-40 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        'il tuo sguardo così fiero<br>\n' +
        '<p class="my-0 w-40 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        'sembri Crocco da Rionero<br>\n' +
        '<p class="my-0 w-40 flex  justify-between text-gray-500"><span>fa</span><span>do</span></p>' +
        'come Crocco sulla montagna<br>\n' +
        '<p class="my-0 w-40 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        'non hai tempo per fare la nanna<br>\n' +
        '<p class="my-0 w-40 flex  justify-between text-gray-500"><span>fa</span><span>do</span></p>' +
        'come Crocco sulla montagna<br>\n' +
        '<p class="my-0 w-40 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        'il tuo letto sarà di paglia<br>\n' +
        '<p class="my-0 w-40 flex  justify-between text-gray-500"><span>fa</span><span>do</span></p>' +
        'come Crocco sulla montagna<br>\n' +
        '<p class="my-0 w-40 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        'se ti addormenti pensi alla mamma<br>\n' +
        '<p class="my-0 w-40 flex  justify-between text-gray-500"><span>fa</span><span>do</span></p>' +
        'come Crocco sulla montagna<br>\n' +
        '<p class="my-0 w-40 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        'la giustizia è la tua manna<br>\n' +
        '<p class="my-0 w-40 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        'la giustizia non fa la nanna<br>\n',
      audio: {
        src: cdn + 'audio/5-%20Un%20cane%20bianco%20della%20Lucania.m4a',
        type: 'audio/mpeg',
      },
    },
    {
      id: 4,
      title: '4: Canzone del Maggio (di Accettura)',
      slug: 'canzone-del-maggio',
      published: '2022-02-17T00:00:00.000Z',
      description:
        'When golf-obsessed terrorists kidnapped his family and held them hostage in exchange for a Golden Jacket, Shooter had no choice but to win the tour at any cost.',
      content:
        '<h2 id="topics">Testo</h2>\n' +
        '<p class="my-0">Bisogna aver coraggio</p>' +
        '<p class="my-0">gridare all’arrembaggio</p>' +
        '<p class="my-0">tuffarsi in un miraggio</p>' +
        '<p class="my-0">opporsi ad un oltraggio</p>' +
        '<p class="my-0">bisogna aver coraggio</p>' +
        '<p class="my-0">dormire fino a maggio</p>' +
        '<p class="my-0">svegliarsi sotto a un faggio</p>' +
        '<p class="my-0">partire per un viaggio</p>' +
        '<p class="my-0">che voglia d’avventura</p>' +
        '<p class="my-0">tra i boschi di Accettura</p>' +
        '<p class="my-0">che bella è la natura</p>' +
        '<p class="my-0">non devi aver paura</p>' +
        '<h2 id="sponsors">Accordi</h2>\n' +
        '<p class="mb-0 w-32 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        '<p class="my-0">Bisogna aver coraggio</p>' +
        '<p class="my-0 w-32 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        '<p class="my-0">gridare all’arrembaggio</p>' +
        '<p class="my-0 w-32 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        '<p class="my-0">tuffarsi in un miraggio</p>' +
        '<p class="my-0 w-32 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        '<p class="my-0">opporsi ad un oltraggio</p>' +
        '<p class="my-0 w-32 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        '<p class="my-0">bisogna aver coraggio</p>' +
        '<p class="my-0 w-32 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        '<p class="my-0">dormire fino a maggio</p>' +
        '<p class="my-0 w-32 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        '<p class="my-0">svegliarsi sotto a un faggio</p>' +
        '<p class="my-0 w-32 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        '<p class="my-0">partire per un viaggio</p>' +
        '<p class="my-0 w-32 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        '<p class="my-0">che voglia d’avventura</p>' +
        '<p class="my-0 w-32 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        '<p class="my-0">tra i boschi di Accettura</p>' +
        '<p class="my-0 w-32 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        '<p class="my-0">che bella è la natura</p>' +
        '<p class="my-0 w-32 flex  justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        '<p class="my-0">non devi aver paura</p>',
      audio: {
        src: cdn + 'audio/4-%20Canzone%20del%20Maggio%20(di%20Accettura).m4a',
        type: 'audio/mpeg',
      },
    },
    {
      id: 3,
      title: '3: C’era una nonna a Salvia di L',
      slug: 'filastrocca-impertinente',
      published: '2022-02-10T00:00:00.000Z',
      description:
        'Passannante l’aveva detto - Senza un dente non sei perfetto -  Ma senza pane si fa la fame -  Girotondo casca il reame',
      content:
        '<h2 id="topics">Testo</h2>\n' +
        '<p class="my-0">Fila-filastrocca impertinente</p>' +
        '<p class="my-0">la mia nonna ha perso un dente</p>' +
        '<p class="my-0">ed ha chiesto al topolino</p>' +
        '<p class="my-0">di portarle un bel soldino</p>' +
        '<p class="my-0">ma il topino ’sto disgraziato</p>' +
        '<p class="my-0">il soldino s’è intascato</p>' +
        '<p class="my-0">e la nonna poverina</p>' +
        '<p class="mt-0">è rimasta come prima</p>' +
        '<p class="mb-0">senza un dente è la nonnina</p>' +
        '<p class="my-0">poverina, poverina</p>' +
        '<p class="my-0">filastrocca impertinente</p>' +
        '<p class="my-0">c’è una nonna senza un dente</p>' +
        '<p class="my-0">c’è un topino ch’è un gran fetente</p>' +
        '<p class="my-0">ed a noi non frega niente</p>' +
        '<h2 id="sponsors">Accordi</h2>' +
        '<p class="my-0 w-40 flex justify-between text-gray-500"><span>do</span><span class="ml-16">fa</span><span>do</span></p>' +
        '<p class="my-0">Fila-filastrocca impertinente</p>' +
        '<p class="my-0 w-40 flex justify-between text-gray-500"><span class="text-transparent">do</span><span class="ml-16">fa</span><span>do</span></p>' +
        '<p class="my-0">la mia nonna ha perso un dente</p>' +
        '<p class="my-0 w-48 flex justify-between text-gray-500"><span>fa</span><span>do</span><span class="ml-5">sol</span><span>do</span><span>fa</span></p>' +
        '<p class="my-0">ed ha chiesto al topolino</p>' +
        '<p class="my-0 w-40 flex justify-between text-gray-500"><span class="pl-8">do</span><span>fa</span><span>do</span></p>' +
        '<p class="my-0">di portarle un bel soldino</p>' +
        '<p class="my-0 w-48 flex justify-between text-gray-500"><span class="text-transparent">do</span><span>fa</span><span>do</span></p>' +
        '<p class="my-0">ma il topino ’sto disgraziato</p>' +
        '<p class="my-0 w-36 flex justify-between text-gray-500"><span class="text-transparent">do</span><span>fa</span><span>do</span></p>' +
        '<p class="my-0">il soldino s’è intascato</p>' +
        '<p class="my-0 w-32 flex justify-between text-gray-500"><span>fa</span><span>do</span><span>sol</span><span>do</span></p>' +
        '<p class="my-0">e la nonna poverina</p>' +
        '<p class="my-0 w-32 flex justify-between text-gray-500"><span>fa</span><span>do</span><span>sol</span><span>do</span></p>' +
        '<p class="my-0">è rimasta come prima</p>' +
        '<p class="my-0 w-32 flex justify-between text-gray-500"><span>fa</span><span>do</span><span>sol</span><span>do</span></p>' +
        '<p class="my-0">senza un dente è la nonnina</p>' +
        '<p class="my-0 w-32 flex justify-between text-gray-500"><span>fa</span><span>do</span><span>sol</span><span>do</span></p>' +
        '<p class="my-0">poverina, poverina</p>' +
        '<p class="my-0 w-32 flex justify-between text-gray-500"><span>fa</span><span>do</span><span>sol</span><span>do</span></p>' +
        '<p class="my-0">filastrocca impertinente</p>' +
        '<p class="my-0 w-40 flex justify-between text-gray-500"><span>fa</span><span>do</span><span>sol</span><span>do</span></p>' +
        '<p class="my-0">c’è una nonna senza un dente</p>' +
        '<p class="my-0 w-44 flex justify-between text-gray-500"><span>fa</span><span>do</span><span>sol</span><span>do</span></p>' +
        '<p class="my-0">c’è un topino ch’è un gran fetente</p>' +
        '<p class="my-0 w-36 flex justify-between text-gray-500"><span>fa</span><span>do</span><span>sol</span><span>do</span></p>' +
        '<p class="my-0">ed a noi non frega niente</p>',
      audio: {
        src: cdn + 'audio/3-%20Filastrocca%20impertinente.m4a',
        type: 'audio/mpeg',
      },
    },
    {
      id: 2,
      title: '2: Oh (mio) Leandro',
      slug: 'oh-mio-leandro',
      published: '2022-02-03T00:00:00.000Z',
      description:
        'What looks to outsiders like a malicious plan to conquer the east coast, was actually a story of liberation and freedom if you get it straight from the source.',
      content:
        '<h2 id="topics">Testo</h2>\n' +
        '<p class="my-0"> Oh mio Leandro</p>' +
        '<p class="my-0">se tu fossi un fiore</p>' +
        '<p class="my-0">di rosso colore</p>' +
        '<p class="my-0">ed io viandante</p>' +
        '<p class="my-0"> dall’animo raggiante</p>' +
        '<p class="my-0">ti coglierei all’istante</p>' +
        '<p class="my-0">ti coglierei in flagrante</p>' +
        '<p class="my-0">lo so lo so lo sai l’amore ci dispera</p>' +
        '<p class="my-0">e brucia come il sole d’estate in Via Lanera</p>' +
        '<p class="my-0"> Viva Guantanamera</p>' +
        '<h2 id="sponsors">Accordi</h2>' +
        '<p class="my-0 w-32 flex pl-16 justify-between text-gray-500"><span>do</span><span>re-</span></p>' +
        '<p class="my-0"> Oh mio Leandro</p>' +
        '<p class="my-0 w-40 flex pl-5 justify-between text-gray-500"><span>sol</span><span>do</span><span>re-</span></p>' +
        '<p class="my-0">se tu fossi un fiore</p>' +
        '<p class="my-0 w-40 flex pl-5 justify-between text-gray-500"><span>sol</span><span>do</span><span>re-</span><span>sol</span></p>' +
        '<p class="my-0">di rosso colore</p>' +
        '<p class="my-0 w-24 flex pl-5 justify-between text-gray-500"><span>do</span><span>re-</span></p>' +
        '<p class="my-0">ed io viandante</p>' +
        '<p class="my-0 w-40 flex pl-5 justify-between text-gray-500"><span>sol</span><span>do</span><span>re-</span></p>' +
        '<p class="my-0"> dall’animo raggiante</p>' +
        '<p class="my-0 w-40 flex pl-5 justify-between text-gray-500"><span>sol</span><span>do</span><span>re-</span></p>' +
        '<p class="my-0">ti coglierei all’istante</p>' +
        '<p class="my-0 w-28 flex pl-5 justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        '<p class="my-0">ti coglierei in flagrante</p>' +
        '<p class="my-0 w-52 flex pl-5 justify-between text-gray-500"><span>fa</span><span>sol</span><span>do</span></p>' +
        '<p class="my-0">lo so lo so lo sai l’amore ci dispera</p>' +
        '<p class="my-0 w-52 flex pl-5 justify-between text-gray-500"><span>fa</span><span>sol</span><span>do</span></p>' +
        '<p class="my-0">e brucia come il sole d’estate in Via Lanera</p>' +
        '<p class="my-0 w-28 flex pl-5 justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        '<p class="my-0"> Viva Guantanamera</p>' +
        '<p class="my-0 w-28 flex pl-5 justify-between text-gray-500"><span>sol</span><span>do</span></p>' +
        '<p class="my-0"> Oh mio Leandro!!!!!</p>',

      audio: {
        src: cdn + 'audio/2-%20Oh%20(mio)%20Leandro.m4a',
        type: 'audio/mpeg',
      },
    },
    {
      id: 1,
      title: '1: Gastone, leone mattacchione',
      slug: 'gastone',
      published: '2022-01-27T00:00:00.000Z',
      description:
        "You know him as an evil supervillain, but his closest friends call him Jeff, and he's just doing his best to find his way in a world that doesn't know what to do with a talking skeleton.",
      content:
        '<h2 id="topics">Testo</h2>\n' +
        '<p class="my-0">C’è un leone</p>' +
        '<p class="my-0">che mangia frutta a colazione</p>' +
        '<p class="my-0">si chiama Gastone</p>' +
        '<p class="my-0">leone mattacchione</p>' +
        '<p class="my-0">e alla sera</p>' +
        '<p class="my-0">lui mangia solo lampascione</p>' +
        '<p class="my-0">si chiama Gastone</p>' +
        '<p class="my-0">leone mattacchione</p>' +
        '<h2 id="sponsors">Accordi</h2>' +
        '<p class="mb-0 w-32 flex  justify-between text-gray-500"><span>do</span></p>' +
        '<p class="my-0">C’è un leone</p>' +
        '<p class="my-0 pl-8 w-32 flex  justify-between text-gray-500"><span>fa</span><span>do</span></p>' +
        '<p class="my-0">che mangia frutta a colazione</p>' +
        '<p class="my-0">e alla sera</p>' +
        '<p class="my-0 pl-8 w-32 flex  justify-between text-gray-500"><span>fa</span><span>do</span></p>' +
        '<p class="my-0">lui mangia solo lampascione</p>' +
        '<p class="my-0 pl-20 w-32 flex  justify-between text-gray-500"><span>sol</span></p>' +
        '<p class="my-0">si chiama Gastone</p>' +
        '<p class="my-0 pl-20 w-60 flex  justify-between text-gray-500"><span>do</span><span class="flex gap-2"><span>sol</span><span>fa</span><span>do</span></span></p>' +
        '<p class="my-0">leone mattacchione</p>' +
        '',
      audio: {
        src: cdn + 'audio/1-%20Gastone,%20leone%20mattacchione.m4a',
        type: 'audio/mpeg',
      },
    },
  ]
}
