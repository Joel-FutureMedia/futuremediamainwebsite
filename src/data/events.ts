export interface EventItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  location: string;
  image: string;
  content: string;
}

export const events: EventItem[] = [
  {
    slug: 'windhoek-media-expo-2026',
    title: 'Windhoek Media Expo 2026',
    excerpt:
      'Join industry leaders, advertisers, and media professionals for two days of insights, networking, and live demonstrations at Namibia\'s premier media event.',
    date: '22–23 August 2026',
    location: 'Windhoek Showgrounds',
    image: '/assets/images/events/event-1.png',
    content: `
      <p>The Windhoek Media Expo returns for its fifth edition, bringing together the brightest minds in Namibian media, advertising, and communications.</p>
      <p>This year's programme features keynote presentations from regional media leaders, panel discussions on the future of digital advertising in Southern Africa, and live demonstrations of Future Media's latest production capabilities.</p>
      <p>Attendees will have the opportunity to tour our mobile broadcasting unit, experience immersive audio demonstrations in our pop-up studio, and network with over 200 industry professionals.</p>
      <p>Registration is free for advertising clients and media partners. General admission tickets are available at N$150 per day. Secure your spot early — last year's event sold out within three weeks.</p>
    `,
  },
  {
    slug: 'radio-open-day-99fm',
    title: '99 FM Radio Open Day',
    excerpt:
      'Go behind the scenes at 99 FM — meet the presenters, tour the studios, and experience live radio production firsthand.',
    date: '12 September 2026',
    location: '99 FM Studios, Windhoek',
    image: '/assets/images/events/event-2.png',
    content: `
      <p>Ever wondered what happens behind the microphone? 99 FM is opening its doors to the public for an exclusive behind-the-scenes experience.</p>
      <p>Visitors will tour the main on-air studio, meet popular presenters including the #Friyay Request team, and watch a live broadcast in action. Our technical team will demonstrate how modern radio production works, from audio mixing to live streaming.</p>
      <p>The event also features a special live edition of our popular request show, where attendees can participate as the studio audience. Food and refreshments will be available throughout the day.</p>
      <p>Spaces are limited to 80 guests per session. Two sessions are available: 10:00 AM and 2:00 PM. Register through our events page to reserve your place.</p>
    `,
  },
  {
    slug: 'outdoor-advertising-workshop',
    title: 'Outdoor Advertising Masterclass',
    excerpt:
      'A half-day workshop for marketing teams on maximising impact with billboard, transit, and street furniture campaigns.',
    date: '5 October 2026',
    location: 'Future Media HQ, Hyper Motor City',
    image: '/assets/images/events/event-3.png',
    content: `
      <p>Outdoor advertising remains one of the most powerful tools in the Namibian marketer's toolkit — but only when executed strategically. This masterclass covers everything you need to know.</p>
      <p>Topics include site selection and audience mapping, creative best practices for large-format displays, measuring campaign effectiveness, and integrating outdoor with radio and digital channels for maximum impact.</p>
      <p>The session includes a guided tour of our top-performing billboard locations in the Windhoek metropolitan area, with real data on traffic patterns and audience demographics.</p>
      <p>This workshop is designed for marketing managers, brand strategists, and agency planners. Registration is N$500 per person, with a 20% discount for Future Media advertising clients.</p>
    `,
  },
];
