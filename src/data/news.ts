export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content: string;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'namibia-media-landscape-2026',
    title: 'Namibia\'s Media Landscape in 2026: What Brands Need to Know',
    excerpt:
      'A comprehensive look at how consumer habits are shifting across radio, digital, and outdoor channels — and what it means for your next campaign.',
    date: '15 July 2026',
    image: '/assets/images/news/news-1.png',
    content: `
      <p>The Namibian media landscape continues to evolve at a remarkable pace. As we move through 2026, brands are finding that the most effective campaigns are those that blend traditional reach with digital precision.</p>
      <p>Radio remains the dominant medium for daily engagement, with stations like 99 FM, Radio Omulunga, and One Africa reaching millions of listeners during peak drive-time slots. Meanwhile, digital platforms are capturing younger demographics who consume content on mobile devices throughout the day.</p>
      <p>Outdoor advertising, particularly along major highways and in urban centres like Windhoek and Walvis Bay, continues to deliver strong brand recall. The key insight for marketers is integration — campaigns that tell a consistent story across all touchpoints outperform single-channel efforts by a significant margin.</p>
      <p>At Future Media, we're helping brands navigate this complexity with data-driven media planning, creative production through our in-house studio, and real-time campaign optimisation across every channel we operate.</p>
    `,
  },
  {
    slug: 'future-media-expands-digital',
    title: 'Future Media Expands Digital Offering with New Content Studio',
    excerpt:
      'Our upgraded production facility now supports podcast creation, social video, and branded content at scale for advertisers across the group.',
    date: '8 July 2026',
    image: '/assets/images/news/news-2.png',
    content: `
      <p>Future Media is proud to announce the expansion of our digital content studio, a move that significantly strengthens our ability to deliver integrated campaigns for advertisers.</p>
      <p>The new facility features state-of-the-art podcast recording suites, a multi-camera video production area, and a dedicated social media content team. This means our advertising partners can now access end-to-end campaign production — from radio spots and outdoor creative to TikTok-ready video and long-form podcast sponsorships — all under one roof.</p>
      <p>"Brands want content that feels native to each platform," says our Head of Digital. "This studio gives us the capability to produce platform-specific creative without compromising on quality or turnaround time."</p>
      <p>The studio is already producing content for several major campaigns, including branded podcasts for financial services clients and social video series for retail partners. Contact our team to schedule a studio tour.</p>
    `,
  },
  {
    slug: 'cricket-season-sponsorship',
    title: 'Cricket Season Kicks Off with Record Sponsorship Interest',
    excerpt:
      'The upcoming domestic cricket season has attracted unprecedented advertiser interest, with packages selling out weeks ahead of the opening match.',
    date: '1 July 2026',
    image: '/assets/images/news/news-3.png',
    content: `
      <p>As Namibia's cricket season approaches, Future Media's sports division reports record-breaking sponsorship interest from brands eager to connect with one of the country's most passionate fan bases.</p>
      <p>Our "Sports on One" platform delivers live match coverage, highlight packages, and behind-the-scenes content across radio and digital channels. Last season's viewership figures exceeded projections by 34%, prompting many advertisers to secure their spots early this year.</p>
      <p>Available packages range from match-day sponsorships and player endorsements to integrated content series that follow teams throughout the season. Brands in the FMCG, telecommunications, and financial services sectors have been particularly active.</p>
      <p>With limited inventory remaining, we encourage interested advertisers to contact our sports partnerships team as soon as possible to discuss available opportunities.</p>
    `,
  },
];
