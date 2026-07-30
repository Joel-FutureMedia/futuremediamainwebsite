import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DKB0w0nI.mjs";
//#region src/pages/about/values.astro
var values_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Values,
	file: () => $$file,
	url: () => $$url
});
var $$Values = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Our Values",
		"description": "The values that guide everything we do at Future Media."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="page-hero"><div class="container"><h1>Our Values</h1><p>The principles that define who we are and how we work.</p></div></div><div class="page-content"><div class="container page-content__inner"><div class="feature-grid"><div class="feature-card"><div class="feature-card__icon">🎯</div><h3>Audience First</h3><p>Everything we create starts with understanding our audience. We listen, engage, and deliver content that resonates with Namibian communities.</p></div><div class="feature-card"><div class="feature-card__icon">💡</div><h3>Innovation</h3><p>We embrace new technologies and creative approaches, constantly evolving our platforms to stay ahead of changing media consumption habits.</p></div><div class="feature-card"><div class="feature-card__icon">🤝</div><h3>Partnership</h3><p>We build lasting relationships with our advertisers, treating every campaign as a partnership invested in mutual success.</p></div><div class="feature-card"><div class="feature-card__icon">🌍</div><h3>Local Pride</h3><p>We are proudly Namibian. Our content celebrates local culture, languages, and stories that connect us as a nation.</p></div><div class="feature-card"><div class="feature-card__icon">⚡</div><h3>Excellence</h3><p>We hold ourselves to the highest standards in broadcasting, production, and client service — because our audience and partners deserve nothing less.</p></div><div class="feature-card"><div class="feature-card__icon">📊</div><h3>Integrity</h3><p>We operate with transparency and honesty in all our business dealings, from rate cards to campaign reporting.</p></div></div></div></div>` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/about/values.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/about/values.astro";
var $$url = "/about/values";
//#endregion
//#region \0virtual:astro:page:src/pages/about/values@_@astro
var page = () => values_exports;
//#endregion
export { page };
