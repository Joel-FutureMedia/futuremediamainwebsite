import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$AdminLayout } from "./AdminLayout_CaJUnabj.mjs";
//#region src/pages/admin/vacancies.astro
var vacancies_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Vacancies,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Vacancies = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"title": "Vacancies",
		"active": "vacancies"
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="admin-card"><div class="admin-card__header"><h2>Job vacancies</h2><button type="button" class="btn btn-primary" id="btn-add">Post vacancy</button></div><div id="alert"></div><div class="table-wrap"><table class="admin-table"><thead><tr><th>Media</th><th>Title</th><th>Closing</th><th>Published</th><th>Actions</th></tr></thead><tbody id="tbody"></tbody></table></div></div><div class="modal" id="modal" hidden><div class="modal__backdrop" data-close></div><div class="modal__panel"><h3 id="modal-title">Post vacancy</h3><form id="form"><input type="hidden" id="item-id"><div class="form-group" style="margin-bottom:12px;"><label>Title</label><input id="title" required></div><div class="form-group" style="margin-bottom:12px;"><label>Description</label><textarea id="desc" required></textarea></div><div class="form-grid"><div class="form-group"><label>Closing date</label><input type="date" id="closing"></div><div class="form-group"><label>Published</label><select id="published"><option value="true">Yes</option><option value="false">No</option></select></div></div><div class="form-group" style="margin:12px 0;"><label>Image or PDF</label><input type="file" id="media" accept="image/jpeg,image/png,image/webp,application/pdf,.jpg,.jpeg,.png,.webp,.pdf"></div><div class="actions"><button type="button" class="btn btn-ghost" data-close>Cancel</button><button type="submit" class="btn btn-primary">Save</button></div></form></div></div><script>
    (async function () {
      const A = window.FMAdmin;
      if (!A.requireAuth()) return;
      const tbody = document.getElementById('tbody');
      const modal = document.getElementById('modal');
      const form = document.getElementById('form');
      const alertBox = document.getElementById('alert');
      const show = (m, ok) => alertBox.innerHTML = \`<div class="alert \${ok?'alert-success':'alert-error'}">\${A.esc(m)}</div>\`;

      async function load() {
        const rows = (await A.api('/api/vacancies')).data || [];
        tbody.innerHTML = rows.map((v) => \`
          <tr>
            <td>\${v.mediaType==='IMAGE'?\`<img class="thumb" src="\${A.mediaUrl(v.mediaPath)}" alt=""/>\`:\`<a href="\${A.mediaUrl(v.mediaPath)}" target="_blank">\${A.esc(v.mediaType)}</a>\`}</td>
            <td>\${A.esc(v.title)}</td>
            <td>\${v.closingDate || '—'}</td>
            <td>\${v.published ? 'Yes' : 'No'}</td>
            <td class="actions">
              <button class="btn btn-ghost btn-sm" data-edit="\${v.id}">Edit</button>
              <button class="btn btn-ghost btn-sm" data-pub="\${v.id}" data-on="\${v.published}">\${v.published?'Unpublish':'Publish'}</button>
              <button class="btn btn-danger btn-sm" data-del="\${v.id}">Delete</button>
            </td>
          </tr>\`).join('') || '<tr><td colspan="5">No vacancies yet</td></tr>';
      }

      document.getElementById('btn-add').onclick = () => {
        form.reset(); document.getElementById('item-id').value='';
        document.getElementById('modal-title').textContent='Post vacancy';
        document.getElementById('media').required=true; modal.hidden=false;
      };
      modal.querySelectorAll('[data-close]').forEach((el)=>el.onclick=()=>modal.hidden=true);

      tbody.addEventListener('click', async (e) => {
        const t=e.target;
        try {
          if (t.dataset.edit) {
            const item=(await A.api(\`/api/vacancies/\${t.dataset.edit}\`)).data;
            document.getElementById('item-id').value=item.id;
            document.getElementById('title').value=item.title;
            document.getElementById('desc').value=item.description;
            document.getElementById('closing').value=item.closingDate||'';
            document.getElementById('published').value=String(item.published);
            document.getElementById('media').required=false;
            document.getElementById('modal-title').textContent='Update vacancy';
            modal.hidden=false;
          }
          if (t.dataset.pub) {
            const on = t.dataset.on === 'true';
            await A.api(\`/api/vacancies/\${t.dataset.pub}/\${on?'unpublish':'publish'}\`, { method:'PUT' });
            show(on?'Unpublished':'Published', true); load();
          }
          if (t.dataset.del) {
            if (!confirm('Delete vacancy?')) return;
            await A.api(\`/api/vacancies/\${t.dataset.del}\`, { method:'DELETE' });
            show('Vacancy deleted', true); load();
          }
        } catch (ex) { show(ex.message,false); }
      });

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const id=document.getElementById('item-id').value;
        const fd=new FormData();
        fd.append('title', document.getElementById('title').value);
        fd.append('description', document.getElementById('desc').value);
        const closing=document.getElementById('closing').value;
        if (closing) fd.append('closingDate', closing);
        fd.append('published', document.getElementById('published').value);
        const file=document.getElementById('media').files[0];
        if (file) fd.append('media', file);
        try {
          if (id) await A.api(\`/api/vacancies/\${id}\`, { method:'PUT', body:fd });
          else await A.api('/api/vacancies', { method:'POST', body:fd });
          show(id?'Vacancy updated':'Vacancy created', true); modal.hidden=true; load();
        } catch (ex) { show(ex.message,false); }
      });

      await load();
    })();
  <\/script>` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/vacancies.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/vacancies.astro";
var $$url = "/admin/vacancies";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/vacancies@_@astro
var page = () => vacancies_exports;
//#endregion
export { page };
