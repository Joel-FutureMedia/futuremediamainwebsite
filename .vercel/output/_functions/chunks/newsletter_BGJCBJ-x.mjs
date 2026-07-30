import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { n as renderScript, t as $$BaseLayout } from "./BaseLayout_DKB0w0nI.mjs";
//#region src/pages/news/newsletter.astro
var newsletter_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Newsletter,
	file: () => $$file,
	url: () => $$url
});
var $$Newsletter = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Newsletter",
		"description": "Subscribe to the Future Media newsletter for industry insights and updates."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="page-hero"><div class="container"><h1>Newsletter</h1><p>Stay informed with the latest media trends, campaign insights, and Future Media news.</p></div></div><div class="page-content"><div class="container"><div class="gated-form" style="max-width: 560px;"><h3>Subscribe to Our Newsletter</h3><p>Get monthly insights on Namibia's media landscape, advertising best practices, and exclusive offers delivered to your inbox.</p><form id="newsletter-form"><div class="form-group"><label for="nl-name">Full Name</label><input type="text" id="nl-name" name="name" required></div><div class="form-group"><label for="nl-email">Email Address</label><input type="email" id="nl-email" name="email" required></div><div class="form-group"><label for="nl-language">Language</label><select id="nl-language" name="language" required style="width:100%;padding:10px 14px;border:1px solid #e2e5e8;border-radius:4px;font-family:inherit;"><option value="ENGLISH">English</option><option value="AFRIKAANS">Afrikaans</option></select></div><p id="nl-error" style="display:none;color:#E3564E;font-size:13px;margin-bottom:8px;"></p><button type="submit" class="btn-primary">Subscribe</button></form><div id="nl-success" style="display: none; text-align: center; padding: 20px 0;"><p style="color: #313E4A; font-weight: 600; font-size: 16px;">You're subscribed! Check your inbox for a confirmation email.</p></div></div></div></div>` })}${renderScript($$result, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/news/newsletter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/news/newsletter.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/news/newsletter.astro";
var $$url = "/news/newsletter";
//#endregion
//#region \0virtual:astro:page:src/pages/news/newsletter@_@astro
var page = () => newsletter_exports;
//#endregion
export { page };
