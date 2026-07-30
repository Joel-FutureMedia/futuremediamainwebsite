import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$AdminLayout } from "./AdminLayout_CaJUnabj.mjs";
//#region src/pages/admin/gallery.astro
var gallery_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Gallery,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Gallery = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"title": "Gallery",
		"active": "gallery"
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="admin-card"><div class="admin-card__header"><h2>Gallery photos</h2><div class="actions"><button type="button" class="btn btn-ghost" id="btn-single">Upload single</button><button type="button" class="btn btn-primary" id="btn-multi">Upload multiple</button></div></div><div id="alert"></div><div class="table-wrap"><table class="admin-table"><thead><tr><th>Image</th><th>Title</th><th>Created</th><th>Actions</th></tr></thead><tbody id="tbody"></tbody></table></div></div><div class="modal" id="modal" hidden><div class="modal__backdrop" data-close></div><div class="modal__panel"><h3 id="modal-title">Upload</h3><form id="form"><input type="hidden" id="mode" value="single"><input type="hidden" id="item-id"><div class="form-group" style="margin-bottom:12px;"><label>Title (optional)</label><input id="title"></div><div class="form-group" style="margin-bottom:12px;" id="single-wrap"><label>Image</label><input type="file" id="image" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp"></div><div class="form-group" style="margin-bottom:12px;" id="multi-wrap" hidden><label>Images</label><input type="file" id="images" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp" multiple></div><div class="actions"><button type="button" class="btn btn-ghost" data-close>Cancel</button><button type="submit" class="btn btn-primary">Upload</button></div></form></div></div><script>
    (async function () {
      const A = window.FMAdmin;
      if (!A.requireAuth()) return;
      const tbody = document.getElementById('tbody');
      const modal = document.getElementById('modal');
      const form = document.getElementById('form');
      const alertBox = document.getElementById('alert');
      const show = (m, ok) => alertBox.innerHTML = \`<div class="alert \${ok?'alert-success':'alert-error'}">\${A.esc(m)}</div>\`;

      async function load() {
        const rows = (await A.api('/api/gallery')).data || [];
        tbody.innerHTML = rows.map((g) => \`
          <tr>
            <td><img class="thumb" src="\${A.mediaUrl(g.imagePath)}" alt="" /></td>
            <td>\${A.esc(g.title || '—')}</td>
            <td>\${A.formatDate(g.createdDate)}</td>
            <td class="actions">
              <button class="btn btn-ghost btn-sm" data-edit="\${g.id}">Update</button>
              <button class="btn btn-danger btn-sm" data-del="\${g.id}">Delete</button>
            </td>
          </tr>\`).join('') || '<tr><td colspan="4">No gallery images yet</td></tr>';
      }

      function openModal(mode, item) {
        form.reset();
        document.getElementById('mode').value = mode;
        document.getElementById('item-id').value = item?.id || '';
        document.getElementById('title').value = item?.title || '';
        document.getElementById('single-wrap').hidden = mode === 'multi';
        document.getElementById('multi-wrap').hidden = mode !== 'multi';
        document.getElementById('modal-title').textContent =
          mode === 'edit' ? 'Update image' : mode === 'multi' ? 'Upload multiple photos' : 'Upload single photo';
        document.getElementById('image').required = mode === 'single';
        document.getElementById('images').required = mode === 'multi';
        modal.hidden = false;
      }

      document.getElementById('btn-single').onclick = () => openModal('single');
      document.getElementById('btn-multi').onclick = () => openModal('multi');
      modal.querySelectorAll('[data-close]').forEach((el)=>el.onclick=()=>modal.hidden=true);

      tbody.addEventListener('click', async (e) => {
        const t=e.target;
        try {
          if (t.dataset.edit) {
            const item=(await A.api(\`/api/gallery/\${t.dataset.edit}\`)).data;
            openModal('edit', item);
            document.getElementById('mode').value='edit';
            document.getElementById('single-wrap').hidden=false;
            document.getElementById('multi-wrap').hidden=true;
            document.getElementById('image').required=false;
          }
          if (t.dataset.del) {
            if (!confirm('Delete image?')) return;
            await A.api(\`/api/gallery/\${t.dataset.del}\`, { method:'DELETE' });
            show('Image deleted', true); load();
          }
        } catch (ex) { show(ex.message,false); }
      });

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const mode=document.getElementById('mode').value;
        const id=document.getElementById('item-id').value;
        const title=document.getElementById('title').value;
        try {
          if (mode === 'multi') {
            const fd=new FormData();
            if (title) fd.append('title', title);
            Array.from(document.getElementById('images').files).forEach((f)=>fd.append('images', f));
            await A.api('/api/gallery/multiple', { method:'POST', body:fd });
            show('Images uploaded', true);
          } else if (mode === 'edit') {
            const fd=new FormData();
            if (title) fd.append('title', title);
            const file=document.getElementById('image').files[0];
            if (file) fd.append('image', file);
            await A.api(\`/api/gallery/\${id}\`, { method:'PUT', body:fd });
            show('Image updated', true);
          } else {
            const fd=new FormData();
            if (title) fd.append('title', title);
            fd.append('image', document.getElementById('image').files[0]);
            await A.api('/api/gallery/single', { method:'POST', body:fd });
            show('Image uploaded', true);
          }
          modal.hidden=true; load();
        } catch (ex) { show(ex.message,false); }
      });

      await load();
    })();
  <\/script>` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/gallery.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/gallery.astro";
var $$url = "/admin/gallery";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/gallery@_@astro
var page = () => gallery_exports;
//#endregion
export { page };
