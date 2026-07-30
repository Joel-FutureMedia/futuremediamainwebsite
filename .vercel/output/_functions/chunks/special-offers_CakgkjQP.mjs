import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DKB0w0nI.mjs";
//#region src/pages/special-offers.astro
var special_offers_exports = /* @__PURE__ */ __exportAll({
	default: () => $$SpecialOffers,
	file: () => $$file,
	url: () => $$url
});
var $$SpecialOffers = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Special Offers",
		"description": "Current promotions and special advertising offers from Future Media."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="page-hero"><div class="container"><h1>Special Offers</h1><p>Limited-time promotions and exclusive packages for advertisers.</p></div></div><div class="page-content"><div class="container page-content__inner"><div class="feature-grid"><div class="feature-card"><div class="feature-card__icon" style="background: #E3564E; color: white; font-size: 13px; font-weight: 700; border-radius: 8px; width: auto; height: auto; padding: 8px 12px;">SAVE 20%</div><h3>Summer Radio Blast</h3><p>Book 100+ radio spots across any station and save 20%. Includes free creative production for your ad.</p></div><div class="feature-card"><div class="feature-card__icon" style="background: #313E4A; color: white; font-size: 13px; font-weight: 700; border-radius: 8px; width: auto; height: auto; padding: 8px 12px;">3 FOR 2</div><h3>Billboard Bundle</h3><p>Book 2 billboard sites for 3 months and get a third site free for the same period. Windhoek locations.</p></div><div class="feature-card"><div class="feature-card__icon" style="background: #E3564E; color: white; font-size: 13px; font-weight: 700; border-radius: 8px; width: auto; height: auto; padding: 8px 12px;">FREE</div><h3>Podcast Pilot</h3><p>Advertisers booking integrated campaigns receive a complimentary branded podcast episode produced in our studio.</p></div></div><p style="margin-top: 32px;"><a href="/advertise/latest-offers" class="btn-primary" style="display: inline-flex;">View all offers</a></p></div></div>` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/special-offers.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/special-offers.astro";
var $$url = "/special-offers";
//#endregion
//#region \0virtual:astro:page:src/pages/special-offers@_@astro
var page = () => special_offers_exports;
//#endregion
export { page };
