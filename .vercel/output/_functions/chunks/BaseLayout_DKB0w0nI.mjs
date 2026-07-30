import { t as createComponent } from "./compiler_C2C07cjq.mjs";
import { T as createAstro, _ as defineScriptVars, g as addAttribute, h as renderHead, i as renderComponent, m as maybeRenderHead, s as renderSlot, u as renderTemplate, v as createRenderInstruction } from "./server_kq8-ajON.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/components/Header.astro
var $$Header = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<header class="site-header"><div class="top-bar"><div class="top-bar__inner"><div class="top-bar__item top-bar__item--address"><img src="/assets/icons/address.png" alt="" width="16" height="16"><span>42 &amp; 44 Hyper Motor City Path, Windhoek</span></div><div class="top-bar__item top-bar__tel"><span>Tel: <a href="tel:+27830001000">083 000 1000</a></span></div></div></div><nav class="main-nav" id="main-nav"><div class="main-nav__inner"><a href="/" class="main-nav__logo"><img src="/assets/logo.png" alt="Future Media" width="225" height="94"></a><button type="button" class="main-nav__toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav-panel"><span></span><span></span><span></span></button><div class="main-nav__panel" id="nav-panel"><ul class="main-nav__links"><li class="main-nav__item"><a href="/" class="main-nav__link">Home</a></li><li class="main-nav__item main-nav__item--dropdown"><div class="main-nav__row"><a href="/about/company-profile" class="main-nav__link">About Us</a><button type="button" class="main-nav__subtoggle" data-submenu-toggle aria-label="About Us submenu">▾</button></div><div class="main-nav__dropdown">${[
		{
			label: "Company Profile",
			href: "/about/company-profile"
		},
		{
			label: "Team",
			href: "/about/team"
		},
		{
			label: "Vision & Mission",
			href: "/about/vision-mission"
		}
	].map((link) => renderTemplate`<a${addAttribute(link.href, "href")}>${link.label}</a>`)}</div></li><li class="main-nav__item main-nav__item--dropdown"><div class="main-nav__row"><a href="/advertise/solutions" class="main-nav__link">Advertise</a><button type="button" class="main-nav__subtoggle" data-submenu-toggle aria-label="Advertise submenu">▾</button></div><div class="main-nav__dropdown">${[
		{
			label: "Solutions",
			href: "/advertise/solutions"
		},
		{
			label: "Latest Offers",
			href: "/advertise/latest-offers"
		},
		{
			label: "Advertising Packages",
			href: "/advertise/advertising-packages"
		},
		{
			label: "Audiences & Insights",
			href: "/advertise/audiences-insights"
		},
		{
			label: "Advertising T&Cs",
			href: "/advertise/terms"
		}
	].map((link) => renderTemplate`<a${addAttribute(link.href, "href")}>${link.label}</a>`)}</div></li><li class="main-nav__item main-nav__item--dropdown"><div class="main-nav__row"><a href="/news/events" class="main-nav__link">Latest News</a><button type="button" class="main-nav__subtoggle" data-submenu-toggle aria-label="Latest News submenu">▾</button></div><div class="main-nav__dropdown">${[
		{
			label: "Events",
			href: "/news/events"
		},
		{
			label: "Newsletter",
			href: "/news/newsletter"
		},
		{
			label: "Gallery",
			href: "/news/gallery"
		}
	].map((link) => renderTemplate`<a${addAttribute(link.href, "href")}>${link.label}</a>`)}</div></li><li class="main-nav__item"><a href="/vacancies" class="main-nav__link">Vacancies</a></li><li class="main-nav__item"><a href="/contact" class="main-nav__link">Contact Us</a></li></ul></div></div></nav></header>${renderScript($$result, "C:/futuremediamainwebsite/futuremediamainwebsite/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/components/Header.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	return renderTemplate`${maybeRenderHead($$result)}<footer class="site-footer" data-astro-cid-jo6i4kqk><div class="container" data-astro-cid-jo6i4kqk><div class="site-footer__grid" data-astro-cid-jo6i4kqk><div class="site-footer__brand" data-astro-cid-jo6i4kqk><img src="/assets/logo.png" alt="Future Media" data-astro-cid-jo6i4kqk><p data-astro-cid-jo6i4kqk>Namibia's most connected media partner — radio, TV, digital publishing, retail media, activations and technology.</p></div><div data-astro-cid-jo6i4kqk><h4 data-astro-cid-jo6i4kqk>Explore</h4><ul data-astro-cid-jo6i4kqk><li data-astro-cid-jo6i4kqk><a href="/about/company-profile" data-astro-cid-jo6i4kqk>About Us</a></li><li data-astro-cid-jo6i4kqk><a href="/advertise/solutions" data-astro-cid-jo6i4kqk>Advertise</a></li><li data-astro-cid-jo6i4kqk><a href="/brands" data-astro-cid-jo6i4kqk>Brands</a></li><li data-astro-cid-jo6i4kqk><a href="/shop-beat" data-astro-cid-jo6i4kqk>Shop Beat</a></li><li data-astro-cid-jo6i4kqk><a href="/vacancies" data-astro-cid-jo6i4kqk>Vacancies</a></li><li data-astro-cid-jo6i4kqk><a href="/contact" data-astro-cid-jo6i4kqk>Contact</a></li></ul></div><div data-astro-cid-jo6i4kqk><h4 data-astro-cid-jo6i4kqk>Advertise</h4><ul data-astro-cid-jo6i4kqk><li data-astro-cid-jo6i4kqk><a href="/advertise/solutions" data-astro-cid-jo6i4kqk>Solutions</a></li><li data-astro-cid-jo6i4kqk><a href="/advertise/latest-offers" data-astro-cid-jo6i4kqk>Latest Offers</a></li><li data-astro-cid-jo6i4kqk><a href="/advertise/advertising-packages" data-astro-cid-jo6i4kqk>Packages</a></li><li data-astro-cid-jo6i4kqk><a href="/advertise/audiences-insights" data-astro-cid-jo6i4kqk>Audiences &amp; Insights</a></li><li data-astro-cid-jo6i4kqk><a href="/advertise/terms" data-astro-cid-jo6i4kqk>Advertising T&amp;Cs</a></li></ul></div><div data-astro-cid-jo6i4kqk><h4 data-astro-cid-jo6i4kqk>Newsletter</h4><form class="footer-newsletter" id="footer-newsletter" onsubmit="return false;" data-astro-cid-jo6i4kqk><input type="text" name="name" placeholder="Full name" required data-astro-cid-jo6i4kqk><input type="email" name="email" placeholder="Email address" required data-astro-cid-jo6i4kqk><select name="language" data-astro-cid-jo6i4kqk><option value="ENGLISH" data-astro-cid-jo6i4kqk>English</option><option value="AFRIKAANS" data-astro-cid-jo6i4kqk>Afrikaans</option></select><button type="submit" class="btn-primary" style="width: 100%; border-radius: 4px;" data-astro-cid-jo6i4kqk>Subscribe</button></form><p id="footer-nl-ok" style="display:none; font-size: 13px; color: #E3564E; margin-top: 8px;" data-astro-cid-jo6i4kqk>You're subscribed — check your inbox.</p><p id="footer-nl-err" style="display:none; font-size: 13px; color: #E3564E; margin-top: 8px;" data-astro-cid-jo6i4kqk></p></div></div><div class="site-footer__bottom" data-astro-cid-jo6i4kqk><span data-astro-cid-jo6i4kqk>&copy; ${currentYear} Future Media. All rights reserved.</span><span data-astro-cid-jo6i4kqk><a href="/advertise/terms" data-astro-cid-jo6i4kqk>Terms</a> ·<a href="/about/company-profile" data-astro-cid-jo6i4kqk>Privacy / POPIA</a> ·<a href="mailto:info@futuremedia.com.na" data-astro-cid-jo6i4kqk>info@futuremedia.com.na</a></span></div></div></footer>${renderScript($$result, "C:/futuremediamainwebsite/futuremediamainwebsite/src/components/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/components/Footer.astro", void 0);
//#endregion
//#region src/components/WhatsAppChat.astro
var $$WhatsAppChat = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<div class="wa-fab" id="wa-fab" data-astro-cid-pukizaii><button class="wa-fab__btn" id="wa-open" aria-label="Open live chat" type="button" data-astro-cid-pukizaii><img src="/assets/icons/live-chat.png" alt="" width="28" height="28" data-astro-cid-pukizaii></button><div class="wa-popup" id="wa-popup" hidden data-astro-cid-pukizaii><div class="wa-popup__panel" data-astro-cid-pukizaii><div class="whatsapp-header" data-astro-cid-pukizaii><div class="whatsapp-header__avatar" data-astro-cid-pukizaii>FM</div><div class="whatsapp-header__info" data-astro-cid-pukizaii><h3 data-astro-cid-pukizaii>Future Media</h3><span data-astro-cid-pukizaii>Online · Typically replies instantly</span></div><button class="wa-popup__close" id="wa-close" type="button" aria-label="Close chat" data-astro-cid-pukizaii>×</button></div><div class="whatsapp-messages" id="chat-messages" data-astro-cid-pukizaii><div class="whatsapp-msg whatsapp-msg--bot" data-astro-cid-pukizaii>Welcome to Future Media! By continuing, you agree to Future Media collecting and using your information to respond to your enquiry, in accordance with our privacy policy.<div class="whatsapp-msg__time" data-astro-cid-pukizaii>Now</div></div><div class="whatsapp-msg whatsapp-msg--bot" data-astro-cid-pukizaii>How can we help you today? Reply with a number or tap an option below:<br data-astro-cid-pukizaii><br data-astro-cid-pukizaii>1️⃣ Free media audit<br data-astro-cid-pukizaii>2️⃣ Brand information<br data-astro-cid-pukizaii>3️⃣ Latest offers<br data-astro-cid-pukizaii>4️⃣ Company profile<br data-astro-cid-pukizaii>5️⃣ Make an appointment<br data-astro-cid-pukizaii>6️⃣ Sponsorship / partnership<br data-astro-cid-pukizaii>7️⃣ Newsletter sign-up<br data-astro-cid-pukizaii>8️⃣ Speak to someone urgently<div class="whatsapp-msg__time" data-astro-cid-pukizaii>Now</div></div></div><div class="whatsapp-quick-replies" id="quick-replies" data-astro-cid-pukizaii><button type="button" data-reply="1" data-astro-cid-pukizaii>1️⃣ Media audit</button><button type="button" data-reply="2" data-astro-cid-pukizaii>2️⃣ Brands</button><button type="button" data-reply="3" data-astro-cid-pukizaii>3️⃣ Offers</button><button type="button" data-reply="4" data-astro-cid-pukizaii>4️⃣ Company profile</button><button type="button" data-reply="5" data-astro-cid-pukizaii>5️⃣ Appointment</button><button type="button" data-reply="6" data-astro-cid-pukizaii>6️⃣ Partnership</button><button type="button" data-reply="7" data-astro-cid-pukizaii>7️⃣ Newsletter</button><button type="button" data-reply="8" data-astro-cid-pukizaii>8️⃣ Speak urgently</button></div><div class="whatsapp-input" data-astro-cid-pukizaii><input type="text" id="chat-input" placeholder="Type a message or number..." autocomplete="off" data-astro-cid-pukizaii><button type="button" id="chat-send" aria-label="Send" data-astro-cid-pukizaii>➤</button></div></div></div></div>${renderScript($$result, "C:/futuremediamainwebsite/futuremediamainwebsite/src/components/WhatsAppChat.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/components/WhatsAppChat.astro", void 0);
//#endregion
//#region src/layouts/BaseLayout.astro
createAstro("https://astro.build");
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$BaseLayout;
	const { title, description = "Future Media — Namibia's most connected media partner across radio, TV, digital, retail media, activations, and technology." } = Astro2.props;
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"><link rel="icon" type="image/png" href="/assets/logo.png"><title>${title} | Future Media</title>${renderHead($$result)}</head><body><script>(function(){${defineScriptVars({ apiBase: "https://futurem.simplyfound.com.na" })}
      window.__API_BASE__ = apiBase;
    })();<\/script>${renderComponent($$result, "Header", $$Header, {})}<main>${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {})}${renderComponent($$result, "WhatsAppChat", $$WhatsAppChat, {})}</body></html>`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/layouts/BaseLayout.astro", void 0);
//#endregion
export { renderScript as n, $$BaseLayout as t };
