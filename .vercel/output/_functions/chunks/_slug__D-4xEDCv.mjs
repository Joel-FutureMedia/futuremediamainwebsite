import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { C as unescapeHTML, T as createAstro, g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DKB0w0nI.mjs";
import { i as mediaUrl, n as getApprovedNewsById, t as formatDate } from "./api_CjZzL0-2.mjs";
//#region src/data/news.ts
var newsArticles = [
	{
		slug: "namibia-media-landscape-2026",
		title: "Namibia's Media Landscape in 2026: What Brands Need to Know",
		excerpt: "A comprehensive look at how consumer habits are shifting across radio, digital, and outdoor channels — and what it means for your next campaign.",
		date: "15 July 2026",
		image: "/assets/images/news/news-1.png",
		content: `
      <p>The Namibian media landscape continues to evolve at a remarkable pace. As we move through 2026, brands are finding that the most effective campaigns are those that blend traditional reach with digital precision.</p>
      <p>Radio remains the dominant medium for daily engagement, with stations like 99 FM, Radio Omulunga, and One Africa reaching millions of listeners during peak drive-time slots. Meanwhile, digital platforms are capturing younger demographics who consume content on mobile devices throughout the day.</p>
      <p>Outdoor advertising, particularly along major highways and in urban centres like Windhoek and Walvis Bay, continues to deliver strong brand recall. The key insight for marketers is integration — campaigns that tell a consistent story across all touchpoints outperform single-channel efforts by a significant margin.</p>
      <p>At Future Media, we're helping brands navigate this complexity with data-driven media planning, creative production through our in-house studio, and real-time campaign optimisation across every channel we operate.</p>
    `
	},
	{
		slug: "future-media-expands-digital",
		title: "Future Media Expands Digital Offering with New Content Studio",
		excerpt: "Our upgraded production facility now supports podcast creation, social video, and branded content at scale for advertisers across the group.",
		date: "8 July 2026",
		image: "/assets/images/news/news-2.png",
		content: `
      <p>Future Media is proud to announce the expansion of our digital content studio, a move that significantly strengthens our ability to deliver integrated campaigns for advertisers.</p>
      <p>The new facility features state-of-the-art podcast recording suites, a multi-camera video production area, and a dedicated social media content team. This means our advertising partners can now access end-to-end campaign production — from radio spots and outdoor creative to TikTok-ready video and long-form podcast sponsorships — all under one roof.</p>
      <p>"Brands want content that feels native to each platform," says our Head of Digital. "This studio gives us the capability to produce platform-specific creative without compromising on quality or turnaround time."</p>
      <p>The studio is already producing content for several major campaigns, including branded podcasts for financial services clients and social video series for retail partners. Contact our team to schedule a studio tour.</p>
    `
	},
	{
		slug: "cricket-season-sponsorship",
		title: "Cricket Season Kicks Off with Record Sponsorship Interest",
		excerpt: "The upcoming domestic cricket season has attracted unprecedented advertiser interest, with packages selling out weeks ahead of the opening match.",
		date: "1 July 2026",
		image: "/assets/images/news/news-3.png",
		content: `
      <p>As Namibia's cricket season approaches, Future Media's sports division reports record-breaking sponsorship interest from brands eager to connect with one of the country's most passionate fan bases.</p>
      <p>Our "Sports on One" platform delivers live match coverage, highlight packages, and behind-the-scenes content across radio and digital channels. Last season's viewership figures exceeded projections by 34%, prompting many advertisers to secure their spots early this year.</p>
      <p>Available packages range from match-day sponsorships and player endorsements to integrated content series that follow teams throughout the season. Brands in the FMCG, telecommunications, and financial services sectors have been particularly active.</p>
      <p>With limited inventory remaining, we encourage interested advertisers to contact our sports partnerships team as soon as possible to discuss available opportunities.</p>
    `
	}
];
//#endregion
//#region src/pages/news/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { slug } = Astro.params;
	let article = null;
	try {
		if (slug && /^\d+$/.test(slug)) {
			const n = await getApprovedNewsById(slug);
			if (n) article = {
				title: n.title,
				excerpt: n.description,
				date: formatDate(n.createdDate),
				image: mediaUrl(n.mediaPath),
				content: `<p>${String(n.description || "").replace(/\n/g, "</p><p>")}</p>`
			};
		} else {
			const found = newsArticles.find((a) => a.slug === slug);
			if (found) article = {
				title: found.title,
				excerpt: found.excerpt,
				date: found.date,
				image: found.image,
				content: found.content
			};
		}
	} catch (e) {
		console.error("News detail error:", e);
	}
	if (!article) return Astro.redirect("/");
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": article.title,
		"description": article.excerpt
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="article-hero"><img${addAttribute(article.image, "src")}${addAttribute(article.title, "alt")}></div><div class="article-meta"><span class="article-meta__date">${article.date}</span><h1>${article.title}</h1></div><div class="article-body">${unescapeHTML(article.content)}</div>` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/news/[slug].astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/news/[slug].astro";
var $$url = "/news/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/news/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
