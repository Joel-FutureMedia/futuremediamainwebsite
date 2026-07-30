import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$AdminLayout } from "./AdminLayout_CaJUnabj.mjs";
//#region src/pages/admin/banners.astro
var banners_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Banners,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Banners = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"title": "Banners",
		"active": "banners"
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="admin-card"><div class="admin-card__header"><h2>Landing page banners</h2><button type="button" class="btn btn-primary" id="btn-add">Add banner</button></div><div id="alert"></div><div class="table-wrap"><table class="admin-table"><thead><tr><th>Image</th><th>Title</th><th>Description</th><th>Active</th><th>Updated</th><th>Actions</th></tr></thead><tbody id="tbody"></tbody></table></div></div><div class="modal" id="modal" hidden><div class="modal__backdrop" data-close></div><div class="modal__panel"><h3 id="modal-title">Add banner</h3><form id="form"><input type="hidden" id="item-id"><div class="form-group" style="margin-bottom:12px;"><label>Title</label><input id="title" required></div><div class="form-group" style="margin-bottom:12px;"><label>Description</label><textarea id="desc" required></textarea></div><div class="form-group" style="margin-bottom:12px;"><label>Active</label><select id="active"><option value="true">Yes</option><option value="false">No</option></select></div><div class="form-group" style="margin-bottom:12px;"><label>Banner image</label><input type="file" id="image" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"></div><div class="actions"><button type="button" class="btn btn-ghost" data-close>Cancel</button><button type="submit" class="btn btn-primary">Save</button></div></form></div></div><script>
    (async function () {
      const A = window.FMAdmin;
      if (!A.requireAuth()) return;
      const tbody = document.getElementById('tbody');
      const modal = document.getElementById('modal');
      const form = document.getElementById('form');
      const alertBox = document.getElementById('alert');
      const show = (m, ok) => alertBox.innerHTML = \`<div class="alert \${ok?'alert-success':'alert-error'}">\${A.esc(m)}</div>\`;

      async function load() {
        const rows = (await A.api('/api/banners')).data || [];
        tbody.innerHTML = rows.map((b) => \`
          <tr>
            <td><img class="thumb" src="\${A.mediaUrl(b.imagePath)}" alt="" /></td>
            <td>\${A.esc(b.title)}</td>
            <td style="max-width:260px;">\${A.esc(b.description)}</td>
            <td>\${b.active ? 'Yes' : 'No'}</td>
            <td>\${A.formatDate(b.updatedDate || b.createdDate)}</td>
            <td class="actions">
              <button class="btn btn-ghost btn-sm" data-edit="\${b.id}">Edit</button>
              <button class="btn btn-danger btn-sm" data-del="\${b.id}">Delete</button>
            </td>
          </tr>\`).join('') || '<tr><td colspan="6">No banners yet</td></tr>';
      }

      document.getElementById('btn-add').onclick = () => {
        form.reset(); document.getElementById('item-id').value='';
        document.getElementById('modal-title').textContent='Add banner';
        document.getElementById('image').required=true; modal.hidden=false;
      };
      modal.querySelectorAll('[data-close]').forEach((el)=>el.onclick=()=>modal.hidden=true);

      tbody.addEventListener('click', async (e) => {
        const t=e.target;
        try {
          if (t.dataset.edit) {
            const item=(await A.api(\`/api/banners/\${t.dataset.edit}\`)).data;
            document.getElementById('item-id').value=item.id;
            document.getElementById('title').value=item.title;
            document.getElementById('desc').value=item.description;
            document.getElementById('active').value=String(item.active);
            document.getElementById('image').required=false;
            document.getElementById('modal-title').textContent='Update banner';
            modal.hidden=false;
          }
          if (t.dataset.del) {
            if (!confirm('Delete banner?')) return;
            await A.api(\`/api/banners/\${t.dataset.del}\`, { method:'DELETE' });
            show('Banner deleted', true); load();
          }
        } catch (ex) { show(ex.message,false); }
      });

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const id=document.getElementById('item-id').value;
        const fd=new FormData();
        fd.append('title', document.getElementById('title').value);
        fd.append('description', document.getElementById('desc').value);
        if (id) fd.append('active', document.getElementById('active').value);
        const file=document.getElementById('image').files[0];
        if (file) fd.append('image', file);
        try {
          if (id) await A.api(\`/api/banners/\${id}\`, { method:'PUT', body:fd });
          else await A.api('/api/banners', { method:'POST', body:fd });
          show(id?'Banner updated':'Banner created', true); modal.hidden=true; load();
        } catch (ex) { show(ex.message,false); }
      });

      await load();
    })();
  <\/script>` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/banners.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/banners.astro";
var $$url = "/admin/banners";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/banners@_@astro
var page = () => banners_exports;
//#endregion
export { page };
