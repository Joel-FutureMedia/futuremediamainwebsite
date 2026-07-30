import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$AdminLayout } from "./AdminLayout_CaJUnabj.mjs";
//#region src/pages/admin/applications.astro
var applications_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Applications,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Applications = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"title": "Applications",
		"active": "applications"
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="admin-card"><div class="admin-card__header"><h2>Job applications</h2><input type="search" id="search" placeholder="Search applicants…" style="padding:8px 12px;border:1px solid #e2e5e8;border-radius:4px;"></div><div id="alert"></div><div class="table-wrap"><table class="admin-table"><thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Location</th><th>Vacancy</th><th>Applied</th><th>CV</th><th>Actions</th></tr></thead><tbody id="tbody"></tbody></table></div></div><script>
    (async function () {
      const A = window.FMAdmin;
      if (!A.requireAuth()) return;
      const tbody = document.getElementById('tbody');
      const alertBox = document.getElementById('alert');
      const show = (m, ok) => alertBox.innerHTML = \`<div class="alert \${ok?'alert-success':'alert-error'}">\${A.esc(m)}</div>\`;

      async function load(keyword) {
        const path = keyword ? \`/api/applications/search?keyword=\${encodeURIComponent(keyword)}\` : '/api/applications';
        const rows = (await A.api(path)).data || [];
        tbody.innerHTML = rows.map((a) => \`
          <tr>
            <td>\${A.esc(a.fullName)}</td>
            <td>\${A.esc(a.email)}</td>
            <td>\${A.esc(a.phone || '—')}</td>
            <td>\${A.esc(a.location)}</td>
            <td>\${A.esc(a.vacancy?.title || '—')}</td>
            <td>\${A.formatDate(a.appliedDate)}</td>
            <td><a class="btn btn-ghost btn-sm" href="\${A.mediaUrl(a.cvPath)}" target="_blank">Download</a></td>
            <td><button class="btn btn-danger btn-sm" data-del="\${a.id}">Delete</button></td>
          </tr>\`).join('') || '<tr><td colspan="8">No applications yet</td></tr>';
      }

      tbody.addEventListener('click', async (e) => {
        if (e.target.dataset.del) {
          if (!confirm('Delete application?')) return;
          try {
            await A.api(\`/api/applications/\${e.target.dataset.del}\`, { method:'DELETE' });
            show('Application deleted', true); load();
          } catch (ex) { show(ex.message,false); }
        }
      });

      let timer;
      document.getElementById('search').addEventListener('input', (e) => {
        clearTimeout(timer);
        timer = setTimeout(() => load(e.target.value.trim()), 300);
      });

      await load();
    })();
  <\/script>` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/applications.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/applications.astro";
var $$url = "/admin/applications";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/applications@_@astro
var page = () => applications_exports;
//#endregion
export { page };
