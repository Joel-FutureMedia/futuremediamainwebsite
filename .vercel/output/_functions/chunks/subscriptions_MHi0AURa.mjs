import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$AdminLayout } from "./AdminLayout_CaJUnabj.mjs";
//#region src/pages/admin/subscriptions.astro
var subscriptions_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Subscriptions,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Subscriptions = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"title": "Subscriptions",
		"active": "subscriptions"
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="admin-card"><div class="admin-card__header"><h2>Newsletter subscribers</h2><button type="button" class="btn btn-ghost" id="btn-active">Active only</button></div><div id="alert"></div><div class="table-wrap"><table class="admin-table"><thead><tr><th>Name</th><th>Email</th><th>Language</th><th>Active</th><th>Subscribed</th><th>Actions</th></tr></thead><tbody id="tbody"></tbody></table></div></div><script>
    (async function () {
      const A = window.FMAdmin;
      if (!A.requireAuth()) return;
      const tbody = document.getElementById('tbody');
      const alertBox = document.getElementById('alert');
      let activeOnly = false;
      const show = (m, ok) => alertBox.innerHTML = \`<div class="alert \${ok?'alert-success':'alert-error'}">\${A.esc(m)}</div>\`;

      async function load() {
        const path = activeOnly ? '/api/subscriptions/active' : '/api/subscriptions';
        const rows = (await A.api(path)).data || [];
        tbody.innerHTML = rows.map((s) => \`
          <tr>
            <td>\${A.esc(s.fullName)}</td>
            <td>\${A.esc(s.email)}</td>
            <td>\${A.esc(s.language)}</td>
            <td>\${s.active ? 'Yes' : 'No'}</td>
            <td>\${A.formatDate(s.subscribedDate)}</td>
            <td class="actions">
              \${s.active ? \`<button class="btn btn-ghost btn-sm" data-unsub="\${s.id}">Unsubscribe</button>\` : ''}
              <button class="btn btn-danger btn-sm" data-del="\${s.id}">Delete</button>
            </td>
          </tr>\`).join('') || '<tr><td colspan="6">No subscribers yet</td></tr>';
      }

      document.getElementById('btn-active').onclick = () => {
        activeOnly = !activeOnly;
        document.getElementById('btn-active').textContent = activeOnly ? 'Show all' : 'Active only';
        load();
      };

      tbody.addEventListener('click', async (e) => {
        const t = e.target;
        try {
          if (t.dataset.unsub) {
            await A.api(\`/api/subscriptions/\${t.dataset.unsub}/unsubscribe\`, { method:'PUT' });
            show('Unsubscribed', true); load();
          }
          if (t.dataset.del) {
            if (!confirm('Delete subscriber?')) return;
            await A.api(\`/api/subscriptions/\${t.dataset.del}\`, { method:'DELETE' });
            show('Deleted', true); load();
          }
        } catch (ex) { show(ex.message,false); }
      });

      await load();
    })();
  <\/script>` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/subscriptions.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/subscriptions.astro";
var $$url = "/admin/subscriptions";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/subscriptions@_@astro
var page = () => subscriptions_exports;
//#endregion
export { page };
