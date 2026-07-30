import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, t as spreadAttributes, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DKB0w0nI.mjs";
//#region src/pages/brands.astro
var brands_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Brands,
	file: () => $$file,
	url: () => $$url
});
var $$Brands = createComponent(($$result, $$props, $$slots) => {
	const brands = [
		{
			id: "99-fm",
			name: "99 FM",
			blurb: "Windhoek's favourite hit music station — youthful, energetic, and always on trend.",
			image: "/assets/images/brands/99fm.png",
			website: "#"
		},
		{
			id: "omulunga",
			name: "Radio Omulunga",
			blurb: "Northern Namibia's voice — broadcasting in Oshiwambo and celebrating regional culture.",
			image: "/assets/images/brands/omulunga.png",
			website: "#"
		},
		{
			id: "one-africa",
			name: "One Africa",
			blurb: "Contemporary African entertainment across radio and digital for a new generation.",
			image: "/assets/images/brands/oneafrica.png",
			website: "#"
		},
		{
			id: "on-one",
			name: "On One Sports",
			blurb: "Namibia's home for sports — cricket, rugby, football coverage and sports talk.",
			image: "/assets/images/brands/onone.png",
			website: "#"
		},
		{
			id: "entryfy",
			name: "Entryfy",
			blurb: "B2B technology sub-brand for access and engagement solutions.",
			image: "/assets/images/brands/entryfy.png",
			website: "https://entryfy.com"
		},
		{
			id: "specials",
			name: "Specials.na",
			blurb: "B2C deals platform — helps advertisers evaluate the consumer deals audience.",
			image: "/assets/images/brands/specials.png",
			website: "https://specials.na"
		},
		{
			id: "promobasket",
			name: "Promobasket",
			blurb: "Promotional and basket media brand connecting shoppers with offers.",
			image: "/assets/images/brands/promobasket.png",
			website: "#"
		},
		{
			id: "property-news",
			name: "Property News",
			blurb: "Property publishing brand for listings, insights and real-estate audiences.",
			image: "/assets/images/brands/propertynews.png",
			website: "#"
		},
		{
			id: "shop-beat",
			name: "Shop Beat",
			blurb: "Exclusive local retail media partner — in-store audio for Namibia. No SA redirect.",
			image: "/assets/images/brands/shopbeat.png",
			website: "/shop-beat"
		}
	];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Our Brands",
		"description": "Future Media brand portfolio — radio, TV, digital, retail media and specialist platforms."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="page-hero"><div class="container"><h1>Our Brands</h1><p>8–12 brand cards across radio, digital, retail media and specialist platforms. Request profiles by email — documents are gated.</p></div></div><div class="page-content"><div class="container"><div class="card-grid" style="grid-template-columns: repeat(3, 1fr); max-width: 1100px;">${brands.map((brand) => renderTemplate`<article class="card"${addAttribute(brand.id, "id")}><div class="card__image"><img${addAttribute(brand.image, "src")}${addAttribute(brand.name, "alt")}></div><div class="card__body"><h3 class="card__title">${brand.name}</h3><p class="card__excerpt">${brand.blurb}</p><div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;"><a href="/about/company-profile" class="card__link">Request brand profile</a>${brand.website !== "#" && renderTemplate`<a${addAttribute(brand.website, "href")} class="card__link" style="color: #313E4A;"${spreadAttributes(brand.website.startsWith("http") ? {
		target: "_blank",
		rel: "noopener"
	} : {})}>Visit website</a>`}</div></div></article>`)}</div><div class="feature-grid" style="max-width: 900px; margin: 48px auto 0;"><a href="/advertise/latest-offers" class="feature-card" style="text-decoration: none;"><h3>Explore our deals</h3><p>Time-limited offers curated for urgency.</p></a><a href="/advertise/solutions" class="feature-card" style="text-decoration: none;"><h3>Explore solutions</h3><p>Audio, digital, experiential and technology.</p></a><a href="/contact" class="feature-card" style="text-decoration: none;"><h3>Get a free media audit</h3><p>Tell us your goals — we recommend the mix.</p></a></div></div></div>` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/brands.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/brands.astro";
var $$url = "/brands";
//#endregion
//#region \0virtual:astro:page:src/pages/brands@_@astro
var page = () => brands_exports;
//#endregion
export { page };
