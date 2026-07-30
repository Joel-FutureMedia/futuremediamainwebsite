import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$AdminLayout } from "./AdminLayout_CaJUnabj.mjs";
//#region src/pages/admin/dashboard.astro
var dashboard_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Dashboard,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Dashboard = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"title": "Dashboard",
		"active": "dashboard"
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="stats-grid" id="stats-grid"><div class="stat-card"><div class="stat-card__label">News</div><div class="stat-card__value" id="s-news">—</div></div><div class="stat-card"><div class="stat-card__label">Pending News</div><div class="stat-card__value" id="s-pending">—</div></div><div class="stat-card"><div class="stat-card__label">Events</div><div class="stat-card__value" id="s-events">—</div></div><div class="stat-card"><div class="stat-card__label">Gallery</div><div class="stat-card__value" id="s-gallery">—</div></div><div class="stat-card"><div class="stat-card__label">Vacancies</div><div class="stat-card__value" id="s-vacancies">—</div></div><div class="stat-card"><div class="stat-card__label">Applications</div><div class="stat-card__value" id="s-apps">—</div></div><div class="stat-card"><div class="stat-card__label">Contacts</div><div class="stat-card__value" id="s-contact">—</div></div><div class="stat-card"><div class="stat-card__label">Subscribers</div><div class="stat-card__value" id="s-subs">—</div></div></div><div class="admin-card"><div class="admin-card__header"><h2>Quick actions</h2></div><div class="actions"><a class="btn btn-primary" href="/admin/news">Manage News</a><a class="btn btn-dark" href="/admin/events">Manage Events</a><a class="btn btn-ghost" href="/admin/banners">Update Banner</a><a class="btn btn-ghost" href="/admin/vacancies">Post Vacancy</a></div></div><script>
    (async function () {
      const A = window.FMAdmin;
      if (!A.requireAuth()) return;
      try {
        const [news, pending, events, gallery, vacancies, apps, contact, subs] = await Promise.all([
          A.api('/api/news'),
          A.api('/api/news/pending'),
          A.api('/api/events'),
          A.api('/api/gallery'),
          A.api('/api/vacancies'),
          A.api('/api/applications'),
          A.api('/api/contact'),
          A.api('/api/subscriptions'),
        ]);
        document.getElementById('s-news').textContent = (news.data || []).length;
        document.getElementById('s-pending').textContent = (pending.data || []).length;
        document.getElementById('s-events').textContent = (events.data || []).length;
        document.getElementById('s-gallery').textContent = (gallery.data || []).length;
        document.getElementById('s-vacancies').textContent = (vacancies.data || []).length;
        document.getElementById('s-apps').textContent = (apps.data || []).length;
        document.getElementById('s-contact').textContent = (contact.data || []).length;
        document.getElementById('s-subs').textContent = (subs.data || []).length;
      } catch (e) {
        console.error(e);
      }
    })();
  <\/script>` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/dashboard.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/dashboard.astro";
var $$url = "/admin/dashboard";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/dashboard@_@astro
var page = () => dashboard_exports;
//#endregion
export { page };
