import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DKB0w0nI.mjs";
import { d as mediaUrl, n as formatDate, o as getEvents, t as excerpt } from "./api_CddQ8yV4.mjs";
import { t as events } from "./events_D-iMPoX3.mjs";
//#region src/pages/events.astro
var events_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Events,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Events = createComponent(async ($$result, $$props, $$slots) => {
	const apiEvents = await getEvents();
	const events$1 = apiEvents.length ? apiEvents.map((e) => ({
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
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Events",
		"description": "Upcoming events from Future Media."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="page-hero"><div class="container"><h1>Events</h1><p>Live experiences, expos, and community events from Future Media.</p></div></div><div class="page-content"><div class="container"><div class="card-grid">${events$1.map((event) => renderTemplate`<article class="card"><div class="card__image"><img${addAttribute(event.image, "src")}${addAttribute(event.title, "alt")}></div><div class="card__body"><span class="card__date">${event.date}</span><h3 class="card__title">${event.title}</h3><p class="card__excerpt">${event.excerpt}</p><a${addAttribute(event.href, "href")} class="card__link">Read more</a></div></article>`)}</div></div></div>` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/events.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/events.astro";
var $$url = "/events";
//#endregion
//#region \0virtual:astro:page:src/pages/events@_@astro
var page = () => events_exports;
//#endregion
export { page };
