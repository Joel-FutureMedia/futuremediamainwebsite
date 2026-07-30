import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DKB0w0nI.mjs";
//#region src/pages/about/company-overview.astro
var company_overview_exports = /* @__PURE__ */ __exportAll({
	default: () => $$CompanyOverview,
	file: () => $$file,
	url: () => $$url
});
var $$CompanyOverview = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Company Overview",
		"description": "About Future Media — Namibia's most connected media partner."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="page-hero"><div class="container"><h1>About Future Media</h1><p>Namibia's most connected media partner across radio, TV, digital, retail media, activations and technology.</p></div></div><div class="page-content"><div class="container page-content__inner"><p>Future Media operates across radio, TV, digital publishing, retail media, activations and technology. We serve two primary audiences: local Namibian businesses who want guidance, and media buying agencies who need inventory data and audience intelligence.</p><p>Our homepage, Advertise hub and Contact form are built around one principle: convert visitors into qualified leads — not just page views. Every document download is gated; every enquiry is routed to sales@futuremedia.com.na.</p><h2>What we offer</h2><ul><li>Audio &amp; visual — radio, TV, streaming pre-roll and production</li><li>Digital — website advertising and Specials.na</li><li>Experiential — activations, sponsorships and events</li><li>Technology — Shop Beat (Namibia) and Entryfy</li><li>Specialist platforms — Promobasket and Property News</li></ul><div class="feature-grid"><a href="/about/team" class="feature-card" style="text-decoration:none;"><h3>Team</h3><p>Meet the people behind the group.</p></a><a href="/about/vision-mission" class="feature-card" style="text-decoration:none;"><h3>Vision &amp; Mission</h3><p>Namibia-first, data-led and partnership-focused.</p></a><a href="/about/company-profile" class="feature-card" style="text-decoration:none;"><h3>Company Profile</h3><p>Gated download — email capture required.</p></a></div><p style="margin-top: 24px;"><a href="/about/company-profile" class="btn-primary">Download our company profile</a></p></div></div>` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/about/company-overview.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/about/company-overview.astro";
var $$url = "/about/company-overview";
//#endregion
//#region \0virtual:astro:page:src/pages/about/company-overview@_@astro
var page = () => company_overview_exports;
//#endregion
export { page };
