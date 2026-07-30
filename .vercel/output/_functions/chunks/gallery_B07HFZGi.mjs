import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DKB0w0nI.mjs";
import { d as mediaUrl, s as getGallery } from "./api_CddQ8yV4.mjs";
//#region src/pages/news/gallery.astro
var gallery_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Gallery,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
	const apiGallery = await getGallery();
	const galleryImages = apiGallery.length ? apiGallery.map((g) => ({
		src: mediaUrl(g.imagePath),
		alt: g.title || "Gallery image"
	})) : [
		{
			src: "/assets/images/events/event-1.png",
			alt: "Windhoek Media Expo"
		},
		{
			src: "/assets/images/events/event-2.png",
			alt: "99 FM Open Day"
		},
		{
			src: "/assets/images/events/event-3.png",
			alt: "Outdoor Masterclass"
		},
		{
			src: "/assets/images/news/news-1.png",
			alt: "Media Landscape 2026"
		},
		{
			src: "/assets/images/news/news-2.png",
			alt: "Digital Studio Launch"
		},
		{
			src: "/assets/images/news/news-3.png",
			alt: "Cricket Season"
		},
		{
			src: "/assets/slide1.png",
			alt: "Campaign Showcase"
		},
		{
			src: "/assets/slide2.png",
			alt: "Radio Production"
		},
		{
			src: "/assets/slider3.png",
			alt: "Sports Coverage"
		}
	];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Gallery",
		"description": "Photo gallery from Future Media events, productions, and campaigns."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="page-hero"><div class="container"><h1>Gallery</h1><p>Moments from our events, studio productions, and live broadcasts.</p></div></div><div class="page-content"><div class="container"><div class="gallery-grid">${galleryImages.map((img) => renderTemplate`<div class="gallery-item"><img${addAttribute(img.src, "src")}${addAttribute(img.alt, "alt")} loading="lazy"></div>`)}</div></div></div>` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/news/gallery.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/news/gallery.astro";
var $$url = "/news/gallery";
//#endregion
//#region \0virtual:astro:page:src/pages/news/gallery@_@astro
var page = () => gallery_exports;
//#endregion
export { page };
