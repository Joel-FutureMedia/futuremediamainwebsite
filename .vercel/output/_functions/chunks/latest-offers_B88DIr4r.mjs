import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DKB0w0nI.mjs";
//#region src/pages/advertise/latest-offers.astro
var latest_offers_exports = /* @__PURE__ */ __exportAll({
	default: () => $$LatestOffers,
	file: () => $$file,
	url: () => $$url
});
var $$LatestOffers = createComponent(($$result, $$props, $$slots) => {
	const offers = [
		{
			title: "New Client Welcome",
			type: "Seasonal",
			expiry: "30 September 2026",
			description: "First-time advertisers receive 20% off their initial radio campaign package."
		},
		{
			title: "Radio + Digital Combo",
			type: "Bundle",
			expiry: "31 August 2026",
			description: "Book any radio flight and add a digital social package at 30% reduced rate."
		},
		{
			title: "Billboard Bundle",
			type: "Bundle",
			expiry: "15 October 2026",
			description: "Book 2 Windhoek billboard sites for 3 months and get a third site free."
		}
	];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Latest Offers",
		"description": "Time-limited advertising offers from Future Media — max 3 active curated deals."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="page-hero"><div class="container"><h1>Latest Offers</h1><p>Time-limited, curated offers only. Designed to create urgency — not a product catalogue.</p></div></div><div class="page-content"><div class="container" style="max-width: 720px;">${offers.map((offer) => renderTemplate`<article class="vacancy-item" style="margin-bottom: 20px;"><div class="vacancy-meta">${offer.type} · Expires ${offer.expiry}</div><h3>${offer.title}</h3><p>${offer.description}</p><p style="margin-top: 16px;"><a${addAttribute(`/contact?offer=${encodeURIComponent(offer.title)}`, "href")} class="btn-primary">Find out more</a></p></article>`)}<p style="font-size: 13px; color: #5a6570; margin-top: 24px;">Offers auto-unpublish when the expiry date is reached. “Find out more” opens our contact / media audit form pre-tagged with the offer name.</p></div></div>` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/advertise/latest-offers.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/advertise/latest-offers.astro";
var $$url = "/advertise/latest-offers";
//#endregion
//#region \0virtual:astro:page:src/pages/advertise/latest-offers@_@astro
var page = () => latest_offers_exports;
//#endregion
export { page };
