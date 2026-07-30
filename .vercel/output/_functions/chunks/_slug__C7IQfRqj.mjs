import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { C as unescapeHTML, T as createAstro, g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DKB0w0nI.mjs";
import { a as getEventById, d as mediaUrl, n as formatDate } from "./api_CddQ8yV4.mjs";
import { t as events } from "./events_D-iMPoX3.mjs";
//#region src/pages/events/[slug].astro
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
	const isNumeric = slug && /^\d+$/.test(slug);
	let event = null;
	if (isNumeric) {
		const e = await getEventById(slug);
		if (e) event = {
			title: e.title,
			excerpt: e.description,
			date: formatDate(e.createdDate),
			image: mediaUrl(e.mediaPath),
			content: `<p>${String(e.description || "").replace(/\n/g, "</p><p>")}</p>`
		};
	} else {
		const found = events.find((a) => a.slug === slug);
		if (found) event = {
			title: found.title,
			excerpt: found.excerpt,
			date: found.date,
			location: found.location,
			image: found.image,
			content: found.content
		};
	}
	if (!event) return Astro.redirect("/");
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": event.title,
		"description": event.excerpt
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="article-hero"><img${addAttribute(event.image, "src")}${addAttribute(event.title, "alt")}></div><div class="article-meta"><span class="article-meta__date">${event.date}${event.location ? ` · ${event.location}` : ""}</span><h1>${event.title}</h1></div><div class="article-body">${unescapeHTML(event.content)}</div>` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/events/[slug].astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/events/[slug].astro";
var $$url = "/events/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/events/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
