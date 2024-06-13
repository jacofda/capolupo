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
      title: '5: Canzone del maggio',
      slug: 'canzone-del-maggio',
      published: '2022-02-24T00:00:00.000Z',
      description:
        'He’s going to need you to go ahead and come in on Saturday, but there’s a lot more to the story than you think.',
      content:
        '<h2 id="topics">Topics</h2>\n' +
        '<ul>\n' +
        '<li>What are TPS reports exactly, and what’s the motivation for adding the cover sheet?</li>\n' +
        '<li>How Bill preserves such a cool and calm demeanor, despite the extreme consequences Initech faces for not finishing their Y2K upgrades on time, and why it’s important to protect the staff from that stress</li>\n' +
        '<li>Why suspenders and belts aren’t enough on their own, and should be used together</li>\n' +
        '<li>The backstory behind how Bill purchased his Porsche 911</li>\n' +
        '<li>The real reason he needed the red stapler for himself</li>\n' +
        '</ul>\n' +
        '<h2 id="sponsors">Sponsors</h2>\n' +
        '<ul>\n' +
        '<li><a href="#">Initech</a> — Pioneers of the TPS report, Initech is actively looking for job-seekers with people skills who can work with customers to gather specifications and deliver them to the software people.</li>\n' +
        '<li><a href="#">Globex Corporation</a> — Just a friendly and innocent high-tech company, with a casual work environment and an office without walls. Anything you’ve heard about a “doomsday device” is pure conjecture and not based in fact.</li>\n' +
        '</ul>\n' +
        '<h2 id="links">Links</h2>\n' +
        '<ul>\n' +
        '<li>Bill Lumbergh’s <a href="#">Twitter profile</a></li>\n' +
        '<li>Bill Lumbergh’s <a href="#">personal website</a></li>\n' +
        '<li>“What’s happening?”, Bill’s new book on effective management <a href="#">on Amazon</a></li>\n' +
        '</ul>\n',
      audio: {
        src: cdn + 'audio/test.mp3',
        type: 'audio/mpeg',
      },
    },
    {
      id: 4,
      title: '4: Filastrocca impertinente',
      slug: 'filastrocca-impertinente',
      published: '2022-02-17T00:00:00.000Z',
      description:
        'When golf-obsessed terrorists kidnapped his family and held them hostage in exchange for a Golden Jacket, Shooter had no choice but to win the tour at any cost.',
      content:
        '<h2 id="topics">Topics</h2>\n' +
        '<ul>\n' +
        '<li>Quibusdam saepe veritatis unde ea omnis repudiandae neque unde sapiente</li>\n' +
        '<li>Praesentium velit ratione</li>\n' +
        '<li>Deserunt ullam sit perspiciatis</li>\n' +
        '<li>Omnis occaecati tempore numquam delectus iste iste odio</li>\n' +
        '<li>Est qui consequuntur quis quia quod ipsum consectetur ad aperiam</li>\n' +
        '<li>Voluptate laborum cum dignissimos esse debitis incidunt tempore</li>\n' +
        '</ul>\n' +
        '<h2 id="sponsors">Sponsors</h2>\n' +
        '<ul>\n' +
        '<li><a href="#">Initech</a> — Pioneers of the TPS report, Initech is actively looking for job-seekers with people skills who can work with customers to gather specifications and deliver them to the software people.</li>\n' +
        '<li><a href="#">Globex Corporation</a> — Just a friendly and innocent high-tech company, with a casual work environment and an office without walls. Anything you’ve heard about a “doomsday device” is pure conjecture and not based in fact.</li>\n' +
        '</ul>\n' +
        '<h2 id="links">Links</h2>\n' +
        '<ul>\n' +
        '<li><a href="#">Quis laboriosam</a> molestiae tempore necessitatibus</li>\n' +
        '<li><a href="#">Sit autem</a> neque minima itaque sit commodi</li>\n' +
        '<li>Eos ratione <a href="#">blanditiis</a></li>\n' +
        '<li>Eius a <a href="#">qui quasi</a></li>\n' +
        '<li>Laborum laudantium sunt <a href="#">mollitia aliquam</a> corporis</li>\n' +
        '</ul>\n',
      audio: {
        src: cdn + 'audio/test.mp3',
        type: 'audio/mpeg',
      },
    },
    {
      id: 3,
      title: '3: Cane bianco',
      slug: 'cane-bianco',
      published: '2022-02-10T00:00:00.000Z',
      description:
        'The Christmas of 1989 wasn’t the first time Harry and Marv crossed paths with the McCallisters. The real story starts in 1973, when Peter tripped Marv in the highschool locker room.',
      content:
        '<h2 id="topics">Topics</h2>\n' +
        '<ul>\n' +
        '<li>Quibusdam saepe veritatis unde ea omnis repudiandae neque unde sapiente</li>\n' +
        '<li>Praesentium velit ratione</li>\n' +
        '<li>Deserunt ullam sit perspiciatis</li>\n' +
        '<li>Omnis occaecati tempore numquam delectus iste iste odio</li>\n' +
        '<li>Est qui consequuntur quis quia quod ipsum consectetur ad aperiam</li>\n' +
        '<li>Voluptate laborum cum dignissimos esse debitis incidunt tempore</li>\n' +
        '</ul>\n' +
        '<h2 id="sponsors">Sponsors</h2>\n' +
        '<ul>\n' +
        '<li><a href="#">Initech</a> — Pioneers of the TPS report, Initech is actively looking for job-seekers with people skills who can work with customers to gather specifications and deliver them to the software people.</li>\n' +
        '<li><a href="#">Globex Corporation</a> — Just a friendly and innocent high-tech company, with a casual work environment and an office without walls. Anything you’ve heard about a “doomsday device” is pure conjecture and not based in fact.</li>\n' +
        '</ul>\n' +
        '<h2 id="links">Links</h2>\n' +
        '<ul>\n' +
        '<li><a href="#">Quis laboriosam</a> molestiae tempore necessitatibus</li>\n' +
        '<li><a href="#">Sit autem</a> neque minima itaque sit commodi</li>\n' +
        '<li>Eos ratione <a href="#">blanditiis</a></li>\n' +
        '<li>Eius a <a href="#">qui quasi</a></li>\n' +
        '<li>Laborum laudantium sunt <a href="#">mollitia aliquam</a> corporis</li>\n' +
        '</ul>\n',
      audio: {
        src: cdn + 'audio/test.mp3',
        type: 'audio/mpeg',
      },
    },
    {
      id: 2,
      title: '2: Oh mio leandro',
      slug: 'oh-mio-leandro',
      published: '2022-02-03T00:00:00.000Z',
      description:
        'What looks to outsiders like a malicious plan to conquer the east coast, was actually a story of liberation and freedom if you get it straight from the source.',
      content:
        '<h2 id="topics">Topics</h2>\n' +
        '<ul>\n' +
        '<li>Quibusdam saepe veritatis unde ea omnis repudiandae neque unde sapiente</li>\n' +
        '<li>Praesentium velit ratione</li>\n' +
        '<li>Deserunt ullam sit perspiciatis</li>\n' +
        '<li>Omnis occaecati tempore numquam delectus iste iste odio</li>\n' +
        '<li>Est qui consequuntur quis quia quod ipsum consectetur ad aperiam</li>\n' +
        '<li>Voluptate laborum cum dignissimos esse debitis incidunt tempore</li>\n' +
        '</ul>\n' +
        '<h2 id="sponsors">Sponsors</h2>\n' +
        '<ul>\n' +
        '<li><a href="#">Initech</a> — Pioneers of the TPS report, Initech is actively looking for job-seekers with people skills who can work with customers to gather specifications and deliver them to the software people.</li>\n' +
        '<li><a href="#">Globex Corporation</a> — Just a friendly and innocent high-tech company, with a casual work environment and an office without walls. Anything you’ve heard about a “doomsday device” is pure conjecture and not based in fact.</li>\n' +
        '</ul>\n' +
        '<h2 id="links">Links</h2>\n' +
        '<ul>\n' +
        '<li><a href="#">Quis laboriosam</a> molestiae tempore necessitatibus</li>\n' +
        '<li><a href="#">Sit autem</a> neque minima itaque sit commodi</li>\n' +
        '<li>Eos ratione <a href="#">blanditiis</a></li>\n' +
        '<li>Eius a <a href="#">qui quasi</a></li>\n' +
        '<li>Laborum laudantium sunt <a href="#">mollitia aliquam</a> corporis</li>\n' +
        '</ul>\n',
      audio: {
        src: cdn + 'audio/test.mp3',
        type: 'audio/mpeg',
      },
    },
    {
      id: 1,
      title: '1: Gastone',
      slug: 'gastone',
      published: '2022-01-27T00:00:00.000Z',
      description:
        "You know him as an evil supervillain, but his closest friends call him Jeff, and he's just doing his best to find his way in a world that doesn't know what to do with a talking skeleton.",
      content:
        '<h2 id="topics">Topics</h2>\n' +
        '<ul>\n' +
        '<li>Quibusdam saepe veritatis unde ea omnis repudiandae neque unde sapiente</li>\n' +
        '<li>Praesentium velit ratione</li>\n' +
        '<li>Deserunt ullam sit perspiciatis</li>\n' +
        '<li>Omnis occaecati tempore numquam delectus iste iste odio</li>\n' +
        '<li>Est qui consequuntur quis quia quod ipsum consectetur ad aperiam</li>\n' +
        '<li>Voluptate laborum cum dignissimos esse debitis incidunt tempore</li>\n' +
        '</ul>\n' +
        '<h2 id="sponsors">Sponsors</h2>\n' +
        '<ul>\n' +
        '<li><a href="#">Initech</a> — Pioneers of the TPS report, Initech is actively looking for job-seekers with people skills who can work with customers to gather specifications and deliver them to the software people.</li>\n' +
        '<li><a href="#">Globex Corporation</a> — Just a friendly and innocent high-tech company, with a casual work environment and an office without walls. Anything you’ve heard about a “doomsday device” is pure conjecture and not based in fact.</li>\n' +
        '</ul>\n' +
        '<h2 id="links">Links</h2>\n' +
        '<ul>\n' +
        '<li><a href="#">Quis laboriosam</a> molestiae tempore necessitatibus</li>\n' +
        '<li><a href="#">Sit autem</a> neque minima itaque sit commodi</li>\n' +
        '<li>Eos ratione <a href="#">blanditiis</a></li>\n' +
        '<li>Eius a <a href="#">qui quasi</a></li>\n' +
        '<li>Laborum laudantium sunt <a href="#">mollitia aliquam</a> corporis</li>\n' +
        '</ul>\n',
      audio: {
        src: cdn + 'audio/test.mp3',
        type: 'audio/mpeg',
      },
    },
  ]
}
