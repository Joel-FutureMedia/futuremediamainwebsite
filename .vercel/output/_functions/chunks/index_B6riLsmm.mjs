import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, t as spreadAttributes, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { n as renderScript, t as $$BaseLayout } from "./BaseLayout_DKB0w0nI.mjs";
import { c as getLatestBanner, d as mediaUrl, l as getPublicBanners, n as formatDate, o as getEvents, r as getApprovedNews, t as excerpt } from "./api_CddQ8yV4.mjs";
import { t as events } from "./events_D-iMPoX3.mjs";
import { t as newsArticles } from "./news_DECUZIc4.mjs";
//#region src/data/slides.ts
var slides = [
	{
		heading: "Your Brand. Every Screen. Every Audience.",
		subheading: "From radio and digital to outdoor and live experiences, we create advertising campaigns that connect your brand with millions across Namibia.",
		cta: "Get a free media audit",
		ctaLink: "/contact",
		secondaryCta: "Explore our solutions",
		secondaryCtaLink: "/advertise/solutions",
		image: "/assets/slide1.png?v=3"
	},
	{
		heading: "Reach Listeners Who Matter Most.",
		subheading: "Connect with engaged radio audiences across Namibia's most trusted stations — from breakfast shows to drive-time moments that drive real results.",
		cta: "Explore our solutions",
		ctaLink: "/advertise/solutions",
		image: "/assets/slide2.png?v=3"
	},
	{
		heading: "Sports. Stories. Spectacle.",
		subheading: "From cricket to community sport, Future Media brings live coverage and branded content to fans who show up, stay engaged, and remember your brand.",
		cta: "Explore our solutions",
		ctaLink: "/advertise/solutions",
		image: "/assets/slider3.png?v=3"
	}
];
//#endregion
//#region src/components/HeroSlider.astro
var $$HeroSlider = createComponent(async ($$result, $$props, $$slots) => {
	const banners = await getPublicBanners();
	const latest = banners.length ? null : await getLatestBanner();
	const activeBanners = (banners.length ? banners : latest ? [latest] : []).filter((b) => b && b.active !== false);
	const slides$1 = activeBanners.length ? activeBanners.map((b) => ({
		heading: b.title,
		subheading: b.description,
		cta: "Get a free media audit",
		ctaLink: "/contact",
		secondaryCta: "Explore our solutions",
		secondaryCtaLink: "/advertise/solutions",
		image: mediaUrl(b.imagePath)
	})) : slides;
	return renderTemplate`${maybeRenderHead($$result)}<section class="hero" id="hero-slider" aria-roledescription="carousel"><div class="hero__viewport"><div class="hero__track" id="hero-track">${slides$1.map((slide, i) => renderTemplate`<article${addAttribute(`hero__banner-slide${i === 0 ? " is-active" : ""}`, "class")}${addAttribute(i, "data-slide")}${addAttribute(i !== 0, "aria-hidden")}><div class="hero__banner-inner"><div class="hero__content"><h1 class="hero__heading">${slide.heading}</h1><p class="hero__subheading">${slide.subheading}</p><div class="hero__cta-row"><a${addAttribute(slide.ctaLink, "href")} class="hero__cta">${slide.cta}</a>${slide.secondaryCta && renderTemplate`<a${addAttribute(slide.secondaryCtaLink, "href")} class="hero__cta hero__cta--ghost">${slide.secondaryCta}</a>`}</div></div><div class="hero__media"><img${addAttribute(slide.image, "src")} alt="" loading="eager" decoding="async"${addAttribute(i === 0 ? "high" : "low", "fetchpriority")}></div></div></article>`)}</div></div><div class="hero__controls"><div class="hero__indicators">${slides$1.map((_, i) => renderTemplate`<button type="button"${addAttribute(`hero__indicator${i === 0 ? " active" : ""}`, "class")}${addAttribute(i, "data-indicator")}${addAttribute(`Go to slide ${i + 1}`, "aria-label")}></button>`)}</div></div></section>${renderScript($$result, "C:/futuremediamainwebsite/futuremediamainwebsite/src/components/HeroSlider.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/components/HeroSlider.astro", void 0);
//#endregion
//#region src/components/IconBar.astro
var $$IconBar = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="icon-bar"><div class="icon-bar__inner">${[
		{
			label: "Studio",
			icon: "/assets/icons/Studio.png",
			href: "http://studio.winterknights.com.na/",
			external: true
		},
		{
			label: "Solutions",
			icon: "/assets/icons/solutions.png",
			href: "/solutions"
		},
		{
			label: "Special Offers",
			icon: "/assets/icons/Special Offer.png",
			href: "/special-offers"
		},
		{
			label: "Shop Beat",
			icon: "/assets/icons/Shop Beat.png",
			href: "/shop-beat"
		},
		{
			label: "Brands",
			icon: "/assets/icons/brand.png",
			href: "/brands"
		},
		{
			label: "Events",
			icon: "/assets/icons/Events.png",
			href: "/events"
		},
		{
			label: "Live Chat",
			icon: "/assets/icons/live-chat.png",
			href: "#",
			chat: true
		}
	].map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="icon-bar__item"${spreadAttributes(item.external ? {
		target: "_blank",
		rel: "noopener noreferrer"
	} : {})}${spreadAttributes(item.chat ? { "data-open-chat": true } : {})}><img${addAttribute(item.icon, "src")}${addAttribute(item.label, "alt")} width="48" height="48"><span>${item.label}</span></a>`)}</div></section>`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/components/IconBar.astro", void 0);
//#endregion
//#region src/components/HomeCtaBlocks.astro
var $$HomeCtaBlocks = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="cta-blocks" data-astro-cid-5q5qbac6><div class="container" data-astro-cid-5q5qbac6><div class="cta-blocks__grid" data-astro-cid-5q5qbac6><a href="/advertise/solutions" class="cta-block" data-astro-cid-5q5qbac6><h3 data-astro-cid-5q5qbac6>Explore Solutions</h3><p data-astro-cid-5q5qbac6>Radio, TV, digital, experiential and technology solutions for every campaign goal.</p><span data-astro-cid-5q5qbac6>View solutions →</span></a><a href="/advertise/audiences-insights" class="cta-block" data-astro-cid-5q5qbac6><h3 data-astro-cid-5q5qbac6>Audiences &amp; Insights</h3><p data-astro-cid-5q5qbac6>Universe reach numbers and brand audience teasers — download full data with email capture.</p><span data-astro-cid-5q5qbac6>See our results →</span></a><a href="/advertise/latest-offers" class="cta-block" data-astro-cid-5q5qbac6><h3 data-astro-cid-5q5qbac6>Explore Deals</h3><p data-astro-cid-5q5qbac6>Time-limited offers curated for urgency — not a product catalogue.</p><span data-astro-cid-5q5qbac6>View offers →</span></a></div></div></section>`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/components/HomeCtaBlocks.astro", void 0);
//#endregion
//#region src/components/LogoScroller.astro
var $$LogoScroller = createComponent(($$result, $$props, $$slots) => {
	const brands = [
		{
			src: "/assets/companieslogos/logo-99fm.jpg",
			name: "99 FM"
		},
		{
			src: "/assets/companieslogos/logo-omulunga.jpg",
			name: "Radio Omulunga"
		},
		{
			src: "/assets/companieslogos/logo-one.jpg",
			name: "One Africa"
		},
		{
			src: "/assets/companieslogos/logo-nova.jpg",
			name: "Nova 103.5 FM"
		},
		{
			src: "/assets/companieslogos/logo-wave.jpg",
			name: "Radio Wave 96.7"
		},
		{
			src: "/assets/companieslogos/logo-freshfm.jpg",
			name: "Fresh FM"
		},
		{
			src: "/assets/companieslogos/logo-fmnews.jpg",
			name: "Future Media News"
		},
		{
			src: "/assets/companieslogos/logo-learnon.jpg",
			name: "LearnOn One"
		}
	];
	const topics = [
		"Advertising enquiry",
		"Sponsorship / partnership",
		"Media kit / brand info",
		"Make an appointment",
		"General question"
	];
	const track = [...brands, ...brands];
	return renderTemplate`${maybeRenderHead($$result)}<section class="logo-scroller" aria-label="Our brands" data-astro-cid-fq7skmog><div class="logo-scroller__inner" data-astro-cid-fq7skmog><div class="logo-scroller__heading" data-astro-cid-fq7skmog><p class="logo-scroller__label" data-astro-cid-fq7skmog>Our Brands</p><button type="button" class="btn-primary" id="brand-contact-open" data-astro-cid-fq7skmog>Contact Us</button></div><div class="logo-scroller__viewport" data-astro-cid-fq7skmog><div class="logo-scroller__track" data-astro-cid-fq7skmog>${track.map((brand, i) => renderTemplate`<div class="logo-scroller__item"${addAttribute(i >= brands.length ? "true" : void 0, "aria-hidden")} data-astro-cid-fq7skmog><img${addAttribute(brand.src, "src")}${addAttribute(i >= brands.length ? "" : brand.name, "alt")} width="96" height="96" loading="lazy" data-astro-cid-fq7skmog></div>`)}</div></div></div></section><dialog class="brand-contact-dialog" id="brand-contact-dialog" aria-labelledby="brand-contact-title" data-astro-cid-fq7skmog><div class="brand-contact-dialog__panel" data-astro-cid-fq7skmog><header class="brand-contact-dialog__header" data-astro-cid-fq7skmog><div data-astro-cid-fq7skmog><h2 id="brand-contact-title" data-astro-cid-fq7skmog>Contact a brand</h2><p data-astro-cid-fq7skmog>Choose which brand you’d like to reach, and tell us what you need.</p></div><button type="button" class="brand-contact-dialog__close" id="brand-contact-close" aria-label="Close dialog" data-astro-cid-fq7skmog>×</button></header><form class="brand-contact-form" id="brand-contact-form" data-astro-cid-fq7skmog><fieldset class="brand-contact-form__fieldset" data-astro-cid-fq7skmog><legend data-astro-cid-fq7skmog>Which brand?</legend><div class="brand-contact-form__brands" role="radiogroup" aria-label="Select a brand" data-astro-cid-fq7skmog>${brands.map((brand, i) => renderTemplate`<label class="brand-contact-form__brand" data-astro-cid-fq7skmog><input type="radio" name="brand"${addAttribute(brand.name, "value")} required${addAttribute(i === 0, "checked")} data-astro-cid-fq7skmog><span class="brand-contact-form__brand-tile" data-astro-cid-fq7skmog><img${addAttribute(brand.src, "src")} alt="" width="64" height="64" data-astro-cid-fq7skmog><span data-astro-cid-fq7skmog>${brand.name}</span></span></label>`)}</div></fieldset><div class="form-group" data-astro-cid-fq7skmog><label for="brand-contact-topic" data-astro-cid-fq7skmog>What do you need?</label><select id="brand-contact-topic" name="topic" required data-astro-cid-fq7skmog><option value="" disabled selected data-astro-cid-fq7skmog>Select…</option>${topics.map((topic) => renderTemplate`<option${addAttribute(topic, "value")} data-astro-cid-fq7skmog>${topic}</option>`)}</select></div><div class="form-group" data-astro-cid-fq7skmog><label for="brand-contact-message" data-astro-cid-fq7skmog>Tell us more</label><textarea id="brand-contact-message" name="message" rows="3" placeholder="Briefly describe your enquiry…" required data-astro-cid-fq7skmog></textarea></div><div class="brand-contact-form__row" data-astro-cid-fq7skmog><div class="form-group" data-astro-cid-fq7skmog><label for="brand-contact-name" data-astro-cid-fq7skmog>Your name</label><input type="text" id="brand-contact-name" name="name" required autocomplete="name" data-astro-cid-fq7skmog></div><div class="form-group" data-astro-cid-fq7skmog><label for="brand-contact-email" data-astro-cid-fq7skmog>Email</label><input type="email" id="brand-contact-email" name="email" required autocomplete="email" data-astro-cid-fq7skmog></div></div><div class="brand-contact-form__actions" data-astro-cid-fq7skmog><button type="button" class="brand-contact-form__cancel" id="brand-contact-cancel" data-astro-cid-fq7skmog>Cancel</button><button type="submit" class="btn-primary" data-astro-cid-fq7skmog>Send enquiry</button></div></form><div class="brand-contact-success" id="brand-contact-success" hidden data-astro-cid-fq7skmog><p class="brand-contact-success__title" data-astro-cid-fq7skmog>Thanks — we’ve got your enquiry.</p><p data-astro-cid-fq7skmog>A Future Media team member will follow up about <strong id="brand-contact-success-brand" data-astro-cid-fq7skmog></strong>.</p><button type="button" class="btn-primary" id="brand-contact-done" data-astro-cid-fq7skmog>Close</button></div></div></dialog>${renderScript($$result, "C:/futuremediamainwebsite/futuremediamainwebsite/src/components/LogoScroller.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/components/LogoScroller.astro", void 0);
//#endregion
//#region src/components/NewsSection.astro
var $$NewsSection = createComponent(async ($$result, $$props, $$slots) => {
	const apiNews = await getApprovedNews();
	const newsArticles$1 = apiNews.length ? apiNews.slice(0, 3).map((n) => ({
		id: n.id,
		title: n.title,
		excerpt: excerpt(n.description),
		date: formatDate(n.createdDate),
		image: mediaUrl(n.mediaPath),
		href: `/news/${n.id}`
	})) : newsArticles.map((a) => ({
		id: a.slug,
		title: a.title,
		excerpt: a.excerpt,
		date: a.date,
		image: a.image,
		href: `/news/${a.slug}`
	}));
	return renderTemplate`${maybeRenderHead($$result)}<section class="section"><div class="container"><h2 class="section__title">Latest News</h2><div class="card-grid">${newsArticles$1.map((article) => renderTemplate`<article class="card"><div class="card__image"><img${addAttribute(article.image, "src")}${addAttribute(article.title, "alt")}></div><div class="card__body"><span class="card__date">${article.date}</span><h3 class="card__title">${article.title}</h3><p class="card__excerpt">${article.excerpt}</p><a${addAttribute(article.href, "href")} class="card__link">Read more</a></div></article>`)}</div></div></section>`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/components/NewsSection.astro", void 0);
//#endregion
//#region src/components/EventsSection.astro
var $$EventsSection = createComponent(async ($$result, $$props, $$slots) => {
	const apiEvents = await getEvents();
	const events$1 = apiEvents.length ? apiEvents.slice(0, 3).map((e) => ({
		title: e.title,
		excerpt: excerpt(e.description),
		date: formatDate(e.createdDate),
		image: mediaUrl(e.mediaPath),
		href: `/events/${e.id}`
	})) : events.map((e) => ({
		title: e.title,
		excerpt: e.excerpt,
		date: e.date,
		image: e.image,
		href: `/events/${e.slug}`
	}));
	return renderTemplate`${maybeRenderHead($$result)}<section class="section section--light"><div class="container"><h2 class="section__title">Latest Events</h2><div class="card-grid">${events$1.map((event) => renderTemplate`<article class="card"><div class="card__image"><img${addAttribute(event.image, "src")}${addAttribute(event.title, "alt")}></div><div class="card__body"><span class="card__date">${event.date}</span><h3 class="card__title">${event.title}</h3><p class="card__excerpt">${event.excerpt}</p><a${addAttribute(event.href, "href")} class="card__link">Read more</a></div></article>`)}</div></div></section>`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/components/EventsSection.astro", void 0);
//#endregion
//#region src/components/BrandStrip.astro
var $$BrandStrip = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="brand-strip" data-astro-cid-yrxwubdq><div class="container" data-astro-cid-yrxwubdq><p class="brand-strip__label" data-astro-cid-yrxwubdq>Our brands</p><div class="brand-strip__logos" data-astro-cid-yrxwubdq><a href="/brands#99-fm" data-astro-cid-yrxwubdq>99 FM</a><a href="/brands#omulunga" data-astro-cid-yrxwubdq>Radio Omulunga</a><a href="/brands#one-africa" data-astro-cid-yrxwubdq>One Africa</a><a href="/brands#on-one" data-astro-cid-yrxwubdq>On One Sports</a><a href="/brands#entryfy" data-astro-cid-yrxwubdq>Entryfy</a><a href="/brands#specials" data-astro-cid-yrxwubdq>Specials.na</a><a href="/brands#promobasket" data-astro-cid-yrxwubdq>Promobasket</a><a href="/brands#property-news" data-astro-cid-yrxwubdq>Property News</a><a href="/shop-beat" data-astro-cid-yrxwubdq>Shop Beat</a></div></div></section>`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/components/BrandStrip.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Home",
		"description": "Future Media — Namibia's most connected media partner. Get a free media audit or explore our solutions."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "HeroSlider", $$HeroSlider, {})}${renderComponent($$result, "IconBar", $$IconBar, {})}${renderComponent($$result, "HomeCtaBlocks", $$HomeCtaBlocks, {})}${renderComponent($$result, "LogoScroller", $$LogoScroller, {})}${renderComponent($$result, "NewsSection", $$NewsSection, {})}${renderComponent($$result, "EventsSection", $$EventsSection, {})}${renderComponent($$result, "BrandStrip", $$BrandStrip, {})}` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/index.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
