import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$AdminLayout } from "./AdminLayout_CaJUnabj.mjs";
//#region src/pages/admin/contact.astro
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contact,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Contact = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"title": "Contact Us",
		"active": "contact"
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="admin-card"><div class="admin-card__header"><h2>Incoming contact messages</h2></div><div id="alert"></div><div class="table-wrap"><table class="admin-table"><thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Subject</th><th>Message</th><th>Date</th><th>Emailed</th><th>Actions</th></tr></thead><tbody id="tbody"></tbody></table></div></div><script>
    (async function () {
      const A = window.FMAdmin;
      if (!A.requireAuth()) return;
      const tbody = document.getElementById('tbody');
      const alertBox = document.getElementById('alert');
      const show = (m, ok) => alertBox.innerHTML = \`<div class="alert \${ok?'alert-success':'alert-error'}">\${A.esc(m)}</div>\`;

      async function load() {
        const rows = (await A.api('/api/contact')).data || [];
        tbody.innerHTML = rows.map((c) => \`
          <tr>
            <td>\${A.esc(c.fullName)}</td>
            <td><a href="mailto:\${A.esc(c.email)}">\${A.esc(c.email)}</a></td>
            <td>\${A.esc(c.phone || '—')}</td>
            <td>\${A.esc(c.subject)}</td>
            <td style="max-width:280px;white-space:pre-wrap;">\${A.esc(c.message)}</td>
            <td>\${A.formatDate(c.submittedDate)}</td>
            <td>\${c.emailSent ? 'Yes' : 'No'}</td>
            <td><button class="btn btn-danger btn-sm" data-del="\${c.id}">Delete</button></td>
          </tr>\`).join('') || '<tr><td colspan="8">No messages yet</td></tr>';
      }

      tbody.addEventListener('click', async (e) => {
        if (e.target.dataset.del) {
          if (!confirm('Delete this message?')) return;
          try {
            await A.api(\`/api/contact/\${e.target.dataset.del}\`, { method:'DELETE' });
            show('Deleted', true); load();
          } catch (ex) { show(ex.message,false); }
        }
      });

      await load();
    })();
  <\/script>` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/contact.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/contact.astro";
var $$url = "/admin/contact";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/contact@_@astro
var page = () => contact_exports;
//#endregion
export { page };
