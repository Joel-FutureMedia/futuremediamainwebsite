import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { n as renderScript, t as $$BaseLayout } from "./BaseLayout_DKB0w0nI.mjs";
//#region src/pages/advertise/advertising-packages.astro
var advertising_packages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$AdvertisingPackages,
	file: () => $$file,
	url: () => $$url
});
var $$AdvertisingPackages = createComponent(($$result, $$props, $$slots) => {
	const packages = [
		{
			name: "Starter Radio",
			type: "Radio",
			price: "From N$15,000/mo",
			desc: "50 spots/month — ideal for SMEs building local awareness."
		},
		{
			name: "Growth Radio",
			type: "Radio",
			price: "From N$45,000/mo",
			desc: "150 spots/month with presenter endorsements available."
		},
		{
			name: "Digital Presence",
			type: "Digital",
			price: "From N$5,000/mo",
			desc: "Social + display on Future Media digital properties."
		},
		{
			name: "Outdoor 3-Month",
			type: "Outdoor",
			price: "Custom",
			desc: "Billboard packages in Windhoek and major centres."
		},
		{
			name: "Integrated Campaign",
			type: "Integrated",
			price: "Custom",
			desc: "Radio + digital + outdoor with dedicated account manager."
		},
		{
			name: "Shop Beat Retail",
			type: "Retail",
			price: "Custom",
			desc: "In-store audio packages for Namibia retailers and malls."
		}
	];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Advertising Packages",
		"description": "Filterable advertising packages — radio, digital, outdoor, integrated and retail media.",
		"data-astro-cid-foautpwm": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="page-hero" data-astro-cid-foautpwm><div class="container" data-astro-cid-foautpwm><h1 data-astro-cid-foautpwm>Advertising Packages</h1><p data-astro-cid-foautpwm>Redesigned webstore — filterable package cards for businesses of every size.</p></div></div><div class="page-content" data-astro-cid-foautpwm><div class="container" data-astro-cid-foautpwm><div class="pkg-filters" id="pkg-filters" data-astro-cid-foautpwm>${[
		"All",
		"Radio",
		"Digital",
		"Outdoor",
		"Integrated",
		"Retail"
	].map((f) => renderTemplate`<button type="button"${addAttribute(`pkg-filter${f === "All" ? " is-active" : ""}`, "class")}${addAttribute(f, "data-filter")} data-astro-cid-foautpwm>${f}</button>`)}</div><div class="card-grid" id="pkg-grid" style="max-width: 1100px;" data-astro-cid-foautpwm>${packages.map((pkg) => renderTemplate`<article class="card"${addAttribute(pkg.type, "data-type")} data-astro-cid-foautpwm><div class="card__body" data-astro-cid-foautpwm><span class="card__date" data-astro-cid-foautpwm>${pkg.type}</span><h3 class="card__title" data-astro-cid-foautpwm>${pkg.name}</h3><p style="font-weight: 700; color: #E3564E; margin-bottom: 8px;" data-astro-cid-foautpwm>${pkg.price}</p><p class="card__excerpt" data-astro-cid-foautpwm>${pkg.desc}</p><a${addAttribute(`/contact?package=${encodeURIComponent(pkg.name)}`, "href")} class="card__link" data-astro-cid-foautpwm>Enquire</a></div></article>`)}</div></div></div>` })}${renderScript($$result, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/advertise/advertising-packages.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/advertise/advertising-packages.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/advertise/advertising-packages.astro";
var $$url = "/advertise/advertising-packages";
//#endregion
//#region \0virtual:astro:page:src/pages/advertise/advertising-packages@_@astro
var page = () => advertising_packages_exports;
//#endregion
export { page };
