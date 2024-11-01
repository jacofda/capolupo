export interface Episode {
  id: number
  title: string
  slug: string
  published: Date | string
  img?: {
    url: string
    alt: string
  }
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
      id: 1,
      title: '1: Gastone, leone mattacchione',
      slug: 'gastone',
      published: '2022-01-27T00:00:00.000Z',
      img: {
        url: cdn + '01-gastone.webp?updatedAt=1729867911550',
        alt: 'Gemeine Schopfhyazinthe, Muscari comosum.',
      },
      description:
        'Leone mattacchione, mangia solo lampascione ed é proprio un dormiglione. Il lampascione é un piccolo bulbo assai gustoso, molto diffuso nelle aree mediterannee.',
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
        src:
          cdn +
          'audio/1-%20Gastone,%20leone%20mattacchione.m4a?updatedAt=1730454364899',
        type: 'audio/mpeg',
      },
    },
    {
      id: 2,
      title: '2: Oh (mio) Leandro',
      slug: 'oh-mio-leandro',
      published: '2022-02-03T00:00:00.000Z',
      img: {
        url: cdn + '/02-oh-mio-leandro.webp?updatedAt=1729867911550',
        alt: 'Prunus mahaleb L. - Ciliegio Canino',
      },
      description:
        'Via Lanera a Matera parte dal Castello ed arriva in pieno centro, ed é tutta sotto il sole. Un tempo era una zona di campi, rigogliosa di alberi di prugna, prugne piccole e nere...prugne lanera',
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
        src:
          cdn + 'audio/2-%20Oh%20(mio)%20Leandro.m4a?updatedAt=1730454364907',
        type: 'audio/mpeg',
      },
    },
    {
      id: 3,
      title: '3: C’era una nonna a Salvia di L',
      slug: 'filastrocca-impertinente',
      published: '2022-02-10T00:00:00.000Z',
      img: {
        url: cdn + '03-filastrocca-impertinente.webp?updatedAt=1729867911550',
        alt: '',
      },
      description:
        'Salvia di Lucania, era il paese di Passannante. In quanto anarchico e profondamente solidario, il povero Antonio fece una brutta fine, decisamente ingiusta. Lascio a voi trarre le conclusioni ma ricordatevi che senza pane si fa la fame.',
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
        src:
          cdn +
          'audio/3-%20Filastrocca%20impertinente.m4a?updatedAt=1730477951212',
        type: 'audio/mpeg',
      },
    },
    {
      id: 4,
      title: '4: Canzone del Maggio (di Accettura)',
      slug: 'canzone-del-maggio',
      published: '2022-02-17T00:00:00.000Z',
      img: {
        url: cdn + '04-canzone-del-maggio.webp?updatedAt=1729867911550',
        alt: '',
      },
      description:
        'Il maggio di accettura è un rito pagano risalente a tempi molto antichi, durante il quale due alberi (una cima e un fusto) vengono uniti a rappresentare simbolicamente la forza e la ciclicità della vita e della natura il maggio di accettura è ancora oggi una festa indimenticabile',
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
        src:
          cdn +
          'audio/4-%20Canzone%20del%20Maggio%20(di%20Accettura).m4a?updatedAt=1730478110420',
        type: 'audio/mpeg',
      },
    },

    {
      id: 5,
      title: '5: Un cane bianco della Lucania',
      slug: 'un-cane-bianco-della-lucania',
      published: '2022-02-24T00:00:00.000Z',
      img: {
        url: cdn + '05-cane-bianco.webp?updatedAt=1730028595254',
        alt: '',
      },
      description:
        "Cane bianco della Lucania, parla di libertà riferendosi a tutti quei cani randagi che ancora vagano liberi per i campi della Basilicata. Che cos'è un brigante se non un randagio, inteso come ribelle, e chi é più brigante di Carmine?",
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
        src:
          cdn +
          'audio/5-%20Un%20cane%20bianco%20della%20Lucania.m4a?updatedAt=1730478030798',
        type: 'audio/mpeg',
      },
    },
    {
      id: 6,
      title: "6: L'elefante (non dorme mai)",
      slug: 'l-elefante-non-dorme-mai',
      published: '2022-02-24T00:00:00.000Z',
      img: {
        url: 'https://ik.imagekit.io/2gweb/noneninenane/06-elefante.webp?updatedAt=1729867911550',
        alt: 'Il grande elefante di Annnibale',
      },
      description:
        'Che Annibale arrivò in Italia lo dice la storia, e con lui Surus il suo Elefante. Prima di arrivare a Canne sono sicuro che il nostro condottiero si fermò anche a Grumentum.',
      content:
        '<h2 id="topics">Testo</h2>' +
        `<p class="my-0">L'elefante non dorme mai</p>
      <p class="my-0">mangia sempre e non cerca guai</p>
      <p class="my-0">se lo cerchi lo troverai</p>
      <p class="my-0">tra i cespugli, dentro ai granai</p>
      <p class="my-0">a Grumentum qualche anno fa</p>
      <p class="my-0">c'erano Surus e il suo papà</p>
      <p class="my-0">chi li ha visti ricorderà</p>
      <p class="my-0">che mangiavano a volontà</p>
      <p class="my-0">l'elefante che gigante, un birbante roboante</p>
      <p class="my-0">l'elefante col turbante, un gigante disarmante</p>
        <h2 id="topics">Accordi</h2>
        <p class="mb-0 w-36 flex justify-between text-gray-500"><span>do</span><span>sol</span></p>
        <p class="my-0">L'elefante non dorme mai</p>
        <p class="my-0 w-44 flex justify-between text-gray-500"><span class="text-transparent">do</span><span>do</span></p>
        <p class="my-0">mangia sempre e non cerca guai</p>
        <p class="my-0 w-32 flex justify-between text-gray-500"><span class="text-transparent">do</span><span>fa</span></p>
        <p class="my-0">se lo cerchi lo troverai</p>
        <p class="my-0 w-36 ml-4 flex justify-between text-gray-500"><span>do</span><span>sol</span><span>do</span></p>
        <p class="my-0">tra i cespugli, dentro ai granai</p>
        <p class="my-0 w-36 flex justify-between text-gray-500"><span class="text-transparent">do</span><span>sol</span></p>
        <p class="my-0">a Grumentum qualche anno fa</p>
        <p class="my-0 w-32 flex justify-between text-gray-500"><span class="text-transparent">do</span><span>do</span></p>
        <p class="my-0">c'erano Surus e il suo papà</p>
        <p class="my-0 w-32 flex justify-between text-gray-500"><span class="text-transparent">do</span><span>fa</span></p>
        <p class="my-0">chi li ha visti ricorderà</p>
        <p class="my-0 w-36 flex justify-between text-gray-500"><span>do</span><span>sol</span><span>do</span></p>
        <p class="my-0">che mangiavano a volontà</p>
        <p class="my-0 w-72 flex justify-between text-gray-500"><span>sol</span><span>do</span><span>sol</span><span>do</span></p>
        <p class="my-0">l'elefante che gigante, un birbante roboante</p>
        <p class="my-0 w-72 flex justify-between text-gray-500"><span>fa</span><span>sol</span><span>do</span><span>fa</span><span>sol</span><span>do</span></p>
        <p class="my-0">l'elefante col turbante, un gigante disarmante</p>`,
      audio: {
        src:
          cdn +
          'audio/6-%20L_elefante%20non%20dorme%20mai.m4a?updatedAt=1730478166477',
        type: 'audio/mpeg',
      },
    },
    {
      id: 7,
      title: '7: Il canto del monachicchio',
      slug: 'il-canto-del-monachicchio',
      published: '2022-02-24T00:00:00.000Z',
      img: {
        url: cdn + '07-il-canto-del-monachino.webp',
        alt: '',
      },
      description:
        'Il monachicchio è un folletto dispettoso che compare soprattutto ai bambini la prima volta che ho sentito parlare del monachicchio è stato leggendo “cristo si è fermato a eboli” di carlo levi, solo dopo ho scoperto che il monachicchio appartiene alla tradizione folclorica sia lucana che pugliese',
      content:
        '<h2 id="topics">Testo</h2>' +
        `<p class="my-0">Due mille mucche al pascolo</p>
        <p class="my-0">chissà se mi capiscono</p>
        <p class="my-0">se salgo sopra un mandorlo</p>
        <p class="my-0">e a tutte proferisco</p>
        <p class="my-0">mie care mucche al pascolo</p>
        <p class="my-0">vorrei essere Patroclo</p>
        <p class="my-0">parlare come un oracolo</p>
        <p class="my-0">ed essere meno discolo</p>
        <p class="my-0">se avessi un obelisco-o</p>
        <p class="my-0">se fossi un odalisco-o</p>
        <p class="my-0">mie care mucche al pascolo</p>
        <p class="my-0">sarei un po’ meno bischero</p>
        <p class="my-0">due mille mucche al pascolo</p>
        <p class="my-0">visioni che stordiscono</p>
        <p class="my-0">disteso sul mio mandorlo</p>
        <p class="my-0">mi guardi e riverisco</p>
        <p class="my-0">mi guardi e ti colpsco</p>
        <p class="my-0">attento al monachicchio</p>
        <p class="my-0">attenta al monachicchio</p>
        <h2 id="topics">Accordi</h2>
        <p class="my-0">Do sol do</p>
        <p class="my-0">Fa do</p>
        <p class="my-0">Fa do</p>
        <p class="my-0">Do sol do</p>`,
      audio: {
        src:
          cdn +
          'audio/7-%20Il%20canto%20del%20monachicchio.m4a?updatedAt=1730478375231',
        type: 'audio/mpeg',
      },
    },
    {
      id: 8,
      title: "8: L'editto di Rodari",
      slug: 'l-editto-di-rodari',
      published: '2022-02-24T00:00:00.000Z',
      img: {
        url: cdn + '08-editto-di-rodari.webp',
        alt: '',
      },
      description:
        "L'editto di Rodari, prende spunto da un testo di Rodari e fa il verso a l'editto di Rotari, famoso Re Longobardo che arrivò sino in Basilicata e naturalmente anche a Tricarico terra di Scotellaro",
      content:
        '<h2 id="topics">Testo</h2>' +
        `<p class="my-0">Io chiedo venia alla formica</p>
        <p class="my-0">se faccio il tifo per la sua amica</p>
        <p class="my-0">sì faccio il tifo per la cicala</p>
        <p class="my-0">che il più bel canto a noi regala</p>
        <p class="my-0">se il più bel canto a noi non vende</p>
        <p class="my-0">che sia beata nel suo far niente</p>
        <p class="my-0">che sia beato chi non si vende</p>
        <p class="my-0">chi ha il cuore puro e non si arrende</p>
        <p class="my-0">che sia beato chi non è avaro</p>
        <p class="my-0">evviva evviva il Sig. Scotellaro</p>
        <h2 id="topics">Accordi</h2>
        <p class="my-0">Do fa do sol</p>`,
      audio: {
        src:
          cdn + 'audio/8-%20L_Editto%20di%20Rodari.m4a?updatedAt=1730478321354',
        type: 'audio/mpeg',
      },
    },
    {
      id: 9,
      title: '9: Sommo poeta',
      slug: 'somm-poeta',
      published: '2022-02-24T00:00:00.000Z',
      img: {
        url: cdn + '09-sommo-poeta.webp',
        alt: '',
      },
      description:
        "Carpe Diem, cogli l'attimo, non esitare, non temere, lasciati andare...come Ulisse, come Eumeo, come la capra sotto la panca, come la Magna Grecia che ci ha reso più liberi e come Orazio che ci ha reso piu sognatori.",
      content:
        '<h2 id="topics">Testo</h2>' +
        `<p class="my-0">L’anacoreta, non è un atleta</p>
          <p class="my-0">e l’esegeta, non è un profeta</p>
          <p class="my-0">mi chiamo Orazio, sommo poeta</p>
          <p class="my-0">nacqui a Venosa, vestivo seta</p>
          <p class="my-0">vestito a seta, sommo è il poeta</p>
          <p class="my-0">senza una meta, la vita è lieta</p>
          <p class="my-0">sotto la panca, la capra crepa</p>
          <p class="my-0">e senza latte, non fa la feta</p>
          <p class="my-0">povero Ulisse, Eumeo lo disse</p>
          <p class="my-0">la vita è tetra, senza la feta</p>
          <p class="my-0">senza la feta, senza una meta</p>
          <p class="my-0">sommo è il poeta, la vita allieta</p>
        <h2 id="topics">Accordi</h2>
        <p class="my-0">L’anacoreta, non è un atleta</p>
          <p class="my-0">e l’esegeta, non è un profeta</p>
          <p class="my-0">mi chiamo Orazio, sommo poeta</p>
          <p class="my-0">nacqui a Venosa, vestivo seta</p>
          <p class="my-0">vestito a seta, sommo è il poeta</p>
          <p class="my-0">senza una meta, la vita è lieta</p>
          <p class="my-0">sotto la panca, la capra crepa</p>
          <p class="my-0">e senza latte, non fa la feta</p>
          <p class="my-0">povero Ulisse, Eumeo lo disse</p>
          <p class="my-0">la vita è tetra, senza la feta</p>
          <p class="my-0">senza la feta, senza una meta</p>
          <p class="my-0">sommo è il poeta, la vita allieta</p>`,
      audio: {
        src: cdn + 'audio/9%20-%20Orazio.m4a?updatedAt=1730478269118',
        type: 'audio/mpeg',
      },
    },
  ]
}
