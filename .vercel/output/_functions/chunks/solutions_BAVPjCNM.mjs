import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { n as renderScript, t as $$BaseLayout } from "./BaseLayout_DKB0w0nI.mjs";
//#region src/pages/advertise/solutions.astro
var solutions_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Solutions,
	file: () => $$file,
	url: () => $$url
});
var $$Solutions = createComponent(($$result, $$props, $$slots) => {
	const categories = [
		{
			title: "Audio & Visual",
			items: [
				{
					name: "Radio & TV",
					desc: "Reach audiences across our radio and TV brands.",
					cta: "See more",
					href: "/brands"
				},
				{
					name: "Streaming Pre-Roll",
					desc: "Pre-roll inventory on streaming properties.",
					cta: "Find out more",
					href: "/contact?interest=streaming"
				},
				{
					name: "Production",
					desc: "In-house studio for spots, podcasts and branded content.",
					cta: "Find out more",
					href: "/contact?interest=production"
				}
			]
		},
		{
			title: "Digital",
			items: [{
				name: "Website Advertising",
				desc: "Display and sponsorship on Future Media digital properties.",
				cta: "Get rate card",
				href: "/about/company-profile"
			}, {
				name: "Specials.na",
				desc: "Deals audience for promotional campaigns.",
				cta: "Visit platform",
				href: "https://specials.na"
			}]
		},
		{
			title: "Experiential",
			items: [
				{
					name: "Activations",
					desc: "On-ground brand experiences that drive engagement.",
					cta: "Submit a brief",
					href: "/contact?interest=activations"
				},
				{
					name: "Sponsorships & Partnerships",
					desc: "Event and content sponsorship opportunities.",
					cta: "Submit a brief",
					href: "/contact?interest=sponsorship"
				},
				{
					name: "Events",
					desc: "Expos, open days and live media experiences.",
					cta: "View events",
					href: "/events"
				}
			]
		},
		{
			title: "Technology & Innovation",
			items: [{
				name: "Shop Beat",
				desc: "In-store retail media — Namibia-only product page.",
				cta: "Request a demo",
				href: "/shop-beat"
			}, {
				name: "Entryfy",
				desc: "B2B access and engagement technology.",
				cta: "Visit Entryfy",
				href: "https://entryfy.com"
			}]
		},
		{
			title: "Specialist Platforms",
			items: [{
				name: "Promobasket",
				desc: "Promotional basket media for shoppers.",
				cta: "Find out more",
				href: "/brands#promobasket"
			}, {
				name: "Property News",
				desc: "Property publishing audiences.",
				cta: "Find out more",
				href: "/brands#property-news"
			}]
		},
		{
			title: "Coming Soon",
			items: [{
				name: "Influencer Marketing",
				desc: "Creator partnerships for Namibian brands — launching soon.",
				cta: "Get notified",
				href: "/news/newsletter"
			}]
		}
	];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Advertise — Solutions",
		"description": "Advertising solutions from Future Media — audio, digital, experiential, technology and specialist platforms.",
		"data-astro-cid-mtbpkoiy": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="page-hero" data-astro-cid-mtbpkoiy><div class="container" data-astro-cid-mtbpkoiy><h1 data-astro-cid-mtbpkoiy>Advertise with Future Media</h1><p data-astro-cid-mtbpkoiy>Put your brand in front of Namibia's audiences — then get a free media audit tailored to your goals.</p><div class="proof-stats" data-astro-cid-mtbpkoiy><div data-astro-cid-mtbpkoiy><strong data-astro-cid-mtbpkoiy>2.5M+</strong><span data-astro-cid-mtbpkoiy>Weekly radio reach</span></div><div data-astro-cid-mtbpkoiy><strong data-astro-cid-mtbpkoiy>12+</strong><span data-astro-cid-mtbpkoiy>Brands &amp; platforms</span></div><div data-astro-cid-mtbpkoiy><strong data-astro-cid-mtbpkoiy>4.5M+</strong><span data-astro-cid-mtbpkoiy>Weekly outdoor impressions</span></div><div data-astro-cid-mtbpkoiy><strong data-astro-cid-mtbpkoiy>1.2M+</strong><span data-astro-cid-mtbpkoiy>Monthly digital views</span></div></div><p style="margin-top: 24px;" data-astro-cid-mtbpkoiy><a href="/contact" class="btn-primary" data-astro-cid-mtbpkoiy>Get a free media audit</a></p></div></div><div class="page-content" data-astro-cid-mtbpkoiy><div class="container" style="max-width: 900px;" data-astro-cid-mtbpkoiy><h2 style="text-align: center; margin-bottom: 32px;" data-astro-cid-mtbpkoiy>Solutions</h2><div class="accordion" id="solutions-accordion" data-astro-cid-mtbpkoiy>${categories.map((cat, i) => renderTemplate`<div${addAttribute(`accordion__item${i === 0 ? " is-open" : ""}`, "class")} data-astro-cid-mtbpkoiy><button type="button" class="accordion__trigger" data-accordion-trigger data-astro-cid-mtbpkoiy>${cat.title}<span class="accordion__arrow" data-astro-cid-mtbpkoiy>▾</span></button><div class="accordion__panel" data-astro-cid-mtbpkoiy><div class="accordion__cards" data-astro-cid-mtbpkoiy>${cat.items.map((item) => renderTemplate`<div class="accordion__card" data-astro-cid-mtbpkoiy><h3 data-astro-cid-mtbpkoiy>${item.name}</h3><p data-astro-cid-mtbpkoiy>${item.desc}</p><a${addAttribute(item.href, "href")} data-astro-cid-mtbpkoiy>${item.cta} →</a></div>`)}</div></div></div>`)}</div><div style="text-align: center; margin-top: 40px;" data-astro-cid-mtbpkoiy><a href="/contact" class="btn-primary" data-astro-cid-mtbpkoiy>Get a free media audit</a></div><div class="feature-grid" style="margin-top: 48px;" data-astro-cid-mtbpkoiy><a href="/advertise/latest-offers" class="feature-card" style="text-decoration: none;" data-astro-cid-mtbpkoiy><h3 data-astro-cid-mtbpkoiy>Latest Offers</h3><p data-astro-cid-mtbpkoiy>Time-limited deals — find out more on each offer.</p></a><a href="/advertise/audiences-insights" class="feature-card" style="text-decoration: none;" data-astro-cid-mtbpkoiy><h3 data-astro-cid-mtbpkoiy>See our results</h3><p data-astro-cid-mtbpkoiy>Audiences &amp; Insights — universe and brand teasers.</p></a><a href="/advertise/advertising-packages" class="feature-card" style="text-decoration: none;" data-astro-cid-mtbpkoiy><h3 data-astro-cid-mtbpkoiy>Packages</h3><p data-astro-cid-mtbpkoiy>Filterable advertising packages and webstore cards.</p></a></div></div></div>` })}${renderScript($$result, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/advertise/solutions.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/advertise/solutions.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/advertise/solutions.astro";
var $$url = "/advertise/solutions";
//#endregion
//#region \0virtual:astro:page:src/pages/advertise/solutions@_@astro
var page = () => solutions_exports;
//#endregion
export { page };
