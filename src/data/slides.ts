export interface Slide {
  heading: string;
  subheading: string;
  cta: string;
  ctaLink: string;
  secondaryCta?: string;
  secondaryCtaLink?: string;
  image: string;
}

export const slides: Slide[] = [
  {
    heading: 'Your Brand. Every Screen. Every Audience.',
    subheading:
      'From radio and digital to outdoor and live experiences, we create advertising campaigns that connect your brand with millions across Namibia.',
    cta: 'Get a free media audit',
    ctaLink: '/contact',
    secondaryCta: 'Explore our solutions',
    secondaryCtaLink: '/advertise/solutions',
    image: '/assets/slide1.png?v=3',
  },
  {
    heading: 'Reach Listeners Who Matter Most.',
    subheading:
      'Connect with engaged radio audiences across Namibia\'s most trusted stations — from breakfast shows to drive-time moments that drive real results.',
    cta: 'Explore our solutions',
    ctaLink: '/advertise/solutions',
    image: '/assets/slide2.png?v=3',
  },
  {
    heading: 'Sports. Stories. Spectacle.',
    subheading:
      'From cricket to community sport, Future Media brings live coverage and branded content to fans who show up, stay engaged, and remember your brand.',
    cta: 'Explore our solutions',
    ctaLink: '/advertise/solutions',
    image: '/assets/slider3.png?v=3',
  },
];
