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
    private: false,
    date: 'August 2018',
    siteLink: 'https://m538.herokuapp.com/revo',
    repoLink: 'https://gitlab.com/JetsweepStudios/MaddenAnalytics',
    images: ['deepdive_dashboard', 'deepdive_fantasy', 'deepdive_rushing'],
    imageAltTexts: [
      'Dashboard',
      'Fantasy Page View',
      'Rushing Statistics View',
    ],
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
    images: ['main', 'add', 'prospect'],
    imageAltTexts: [
      'Landing View and add draftboard',
      'Add Prospect View',
      'Prospect View',
    ],
  },
  {
    id: 3,
    title: 'K12Jobspot Web Scraper',
    synopsis:
      'This is a Node application built for my wife to help automate her job search. It is hosted on Heroku and runs daily with the Heroku Scheduler plugin. Using puppeteer, it checks her favorite job posting site for any new jobs posted that meet her criteria and creates and email and sends them to her via NodeMailer. ',
    tech: ['Node.js', 'Puppeteer', 'MongoDB', 'NodeMailer'],
    private: false,
    date: 'April 2019',
    repoLink: 'https://github.com/ReeceLangerock/job-scraper',
  },
  {
    id: 4,
    title: 'Dungeoneer',
    synopsis:
      'Dungeoneer is a roguelike dungeon crawler with randomly generated levels. This was built as a part of the FreeCodeCamp data visualization certification course. The goal was to build a React application that is functionally similar to',
    tech: [
      'React',
      'Redux',
      'Create-React-App',
      'Styled-Components',
      'Jest / Enzyme',
    ],
    private: false,
    date: 'October 2017',
    fcc: 'https://codepen.io/freeCodeCamp/full/apLXEJ/',
    siteLink: 'http://dungeoneer.surge.sh/',
    repoLink: 'https://github.com/ReeceLangerock/dungeoneer',
    images: ['dungeoneer', 'dungeoneer_hidden', 'dungeoneer_visible'],
    imageAltTexts: [
      'Responsive Landing View',
      'User Stats Page',
      'Head To Head View',
    ],
  },
  {
    id: 5,
    title: 'Draw-Dash',
    synopsis:
      'Draw-Dash is a competitive, 1v1 drawing competition. Authenticated users are given a prompt for what to draw, a timer begins to countdown and the 60 second Draw Dash begins!',
    tech: ['React', 'React-Redux', 'Express', 'Socket.io', 'MongoDB'],
    repoLink: 'https://github.com/ReeceLangerock/draw-dash',
    siteLink: 'https://draw-dash.herokuapp.com/',
    private: false,
    date: '2017',
    images: ['draw_dash', 'draw_dash_landing', 'draw_dash_room'],
    imageAltTexts: ['Responsive View', 'Landing Page View', 'Game Room View'],
  },
  {
    id: 6,
    title: 'Mansion Men',
    synopsis:
      'This website was built for a long-running fantasy football league that I am a member of. It provides visualization of user and league statistical data, tracking of league trophy records, and reference for league rules and previous draft results',
    tech: ['React', 'Redux', 'Create-React-App', 'D3', 'Victory Charts'],
    private: false,
    date: '2017',

    siteLink: 'http://mansion-men.surge.sh/',
    repoLink: 'https://github.com/ReeceLangerock/MMFantasyLeague',
    images: ['mm', 'mm_stats', 'mm_h2h'],
    imageAltTexts: [
      'Responsive Landing View',
      'User Stats Page',
      'Head To Head View',
    ],
  },

  {
    id: 7,
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
    images: ['gol_preview', 'gol'],
    imageAltTexts: [
      'Responsive Landing View',
      'User Stats Page',
      'Head To Head View',
    ],
  },
]
export default items
