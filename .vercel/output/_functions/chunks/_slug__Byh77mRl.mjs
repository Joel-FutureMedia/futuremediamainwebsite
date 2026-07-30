import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { C as unescapeHTML, T as createAstro, g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DKB0w0nI.mjs";
import { d as mediaUrl, i as getApprovedNewsById, n as formatDate } from "./api_CddQ8yV4.mjs";
import { t as newsArticles } from "./news_DECUZIc4.mjs";
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
	const isNumeric = slug && /^\d+$/.test(slug);
	let article = null;
	if (isNumeric) {
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
