import { t as createComponent } from "./compiler_C2C07cjq.mjs";
import { T as createAstro, _ as defineScriptVars, g as addAttribute, h as renderHead, s as renderSlot, u as renderTemplate } from "./server_kq8-ajON.mjs";
/* empty css                */
//#region src/layouts/AdminLayout.astro
createAstro("https://astro.build");
var $$AdminLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$AdminLayout;
	const { title, active = "" } = Astro2.props;
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} | Future Media Admin</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"><link rel="icon" type="image/png" href="/assets/logo.png"><script>(function(){${defineScriptVars({ apiBase: "https://futurem.simplyfound.com.na" })}
      window.__API_BASE__ = apiBase;
    })();<\/script><script src="/admin/fm-admin.js"><\/script>${renderHead($$result)}</head><body class="admin-body"><div class="admin-shell"><aside class="admin-sidebar"><div class="admin-sidebar__brand"><img src="/assets/logo.png" alt="Future Media"><span>Admin Panel</span></div><nav class="admin-nav">${[
		{
			href: "/admin/dashboard",
			key: "dashboard",
			label: "Dashboard"
		},
		{
			href: "/admin/users",
			key: "users",
			label: "Users"
		},
		{
			href: "/admin/news",
			key: "news",
			label: "News"
		},
		{
			href: "/admin/events",
			key: "events",
			label: "Events"
		},
		{
			href: "/admin/gallery",
			key: "gallery",
			label: "Gallery"
		},
		{
			href: "/admin/vacancies",
			key: "vacancies",
			label: "Vacancies"
		},
		{
			href: "/admin/applications",
			key: "applications",
			label: "Applications"
		},
		{
			href: "/admin/contact",
			key: "contact",
			label: "Contact Us"
		},
		{
			href: "/admin/subscriptions",
			key: "subscriptions",
			label: "Subscriptions"
		},
		{
			href: "/admin/banners",
			key: "banners",
			label: "Banners"
		}
	].map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(active === item.key ? "active" : "", "class")}>${item.label}</a>`)}</nav><div class="admin-sidebar__footer"><a href="/" style="color:rgba(255,255,255,0.7);text-decoration:none;">← View website</a></div></aside><div class="admin-main"><header class="admin-topbar"><h1>${title}</h1><div class="admin-user"><span id="admin-user-label">Loading…</span><button type="button" class="btn btn-ghost btn-sm" id="admin-logout">Logout</button></div></header><div class="admin-content">${renderSlot($$result, $$slots["default"])}</div></div></div><script>
      (function () {
        if (!window.FMAdmin.requireAuth()) return;
        const user = window.FMAdmin.getUser();
        const label = document.getElementById('admin-user-label');
        if (label && user) label.textContent = user.fullName + ' · ' + user.role;
        document.getElementById('admin-logout')?.addEventListener('click', () => window.FMAdmin.logout());
      })();
    <\/script></body></html>`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/layouts/AdminLayout.astro", void 0);
//#endregion
export { $$AdminLayout as t };
