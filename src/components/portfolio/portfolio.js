// TODO: MOVE THIS DATA TO GRAPHQL

const items = [
  {
    id: 1,
    title: 'DeepDive.ML',
    synopsis:
      'DeepDive is a site to supplement the Madden Online CFM experience. The game itself does not offer advanced statistics, player rankings, fantasy data or automatically generated user content. DeepDive had many of the intended features (and some the beginnings of some new ones) in place I ultimately lost interest in Madden and abandoned the project. I am in the process of open-sourcing the code and looking for someone to take over the project.',
    tech: [
      'React',
      'Redux',
      'Semantic UI',
      'Express.js',
      'MongoDB',
      'Socket.io',
      'Victory Charts',
    ],
    private: true,
    date: 'August 2018',
    siteLink: 'https://m538.herokuapp.com/revo',
    repoLink: '',
  },
  {
    id: 2,
    title: 'CFMScout',
    synopsis:
      'CFMScout is a Companion App for the Madden NFL Video Game. It is built in React-Native and is available for download on the Google Play Store. CFMScout allows users to add their league and prospect combine data, the app will then calculate estimates for speed, acceleration, agility, strength and jumping attributes, along with a SPARQ score. Users can also see how the prospects combine scores compare with prospects entered by other users',
    tech: [
      'React Native',
      'Redux',
      'MongoDB',
      'MongoDB Stitch',
      'Styled-Components',
      'AdMob',
    ],
    private: true,
    date: 'August 2018',
    siteLink:
      'https://play.google.com/store/apps/details?id=com.cfmscout&hl=en_US',
  },
  {
    id: 3,
    title: 'Draw-Dash',
    synopsis:
      'Draw-Dash is a competitive, 1v1 drawing competition. Authenticated users are given a prompt for what to draw, a timer begins to countdown and the 60 second Draw Dash begins!',
    tech: ['React', 'React-Redux', 'Express', 'Socket.io', 'MongoDB'],
    repoLink: 'https://github.com/ReeceLangerock/draw-dash',
    siteLink: 'https://draw-dash.herokuapp.com/',
    private: false,
    date: '2017',
    images: [
      'https://reecelangerock.ml/static/media/Draw-Dash.f3ed75ba.png',
      'https://reecelangerock.ml/static/media/Draw-Dash-Preview.24c2f723.png',
    ],
  },
  {
    id: 4,
    title: 'Mansion Men',
    synopsis:
      'This website was built for a long-running fantasy football league that I am a member of. It provides visualization of user and league statistical data, tracking of league trophy records, and reference for league rules and previous draft results',
    tech: ['React', 'Redux', 'Create-React-App', 'D3', 'Victory Charts'],
    private: false,
    date: '2017',

    siteLink: 'http://mansion-men.surge.sh/',
    repoLink: 'https://github.com/ReeceLangerock/MMFantasyLeague',
  },
  {
    id: 5,
    title: 'Libru',
    synopsis:
      'Libru is a programming resource library built to allow self-taught developers to find, rate and review resources as well as track what courses, books, guides, etc they have completed, are working on, or want to do.',
    tech: ['React', 'Redux', 'Create-React-App', 'D3', 'Victory Charts'],
    private: false,
    date: '2017',

    siteLink: 'http://mansion-men.surge.sh/',
    repoLink: 'https://github.com/ReeceLangerock/MMFantasyLeague',
  },
  {
    id: 6,
    title: 'Game of Life',
    synopsis: `This was built as a part of the FreeCodeCamp data visualization certification course. The goal was to build a React application that is functionally similar to`,
    tech: [
      'React',
      'Create-React-App',
      'Styled-Components',
      'Jest',
      'Travis CI',
    ],
    private: false,
    date: '2017',
    fcc: 'https://codepen.io/FreeCodeCamp/full/reGdqx/',
    siteLink: 'http://game-of-life-rl.surge.sh/',
    repoLink: 'https://github.com/ReeceLangerock/game-of-life',
  },
]
export default items
