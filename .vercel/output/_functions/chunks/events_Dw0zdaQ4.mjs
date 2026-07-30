import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$AdminLayout } from "./AdminLayout_CaJUnabj.mjs";
//#region src/pages/admin/events.astro
var events_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Events,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Events = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"title": "Events",
		"active": "events"
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="admin-card"><div class="admin-card__header"><h2>Latest events</h2><button type="button" class="btn btn-primary" id="btn-add">Post event</button></div><div id="alert"></div><div class="table-wrap"><table class="admin-table"><thead><tr><th>Media</th><th>Title</th><th>Created</th><th>Actions</th></tr></thead><tbody id="tbody"></tbody></table></div></div><div class="modal" id="modal" hidden><div class="modal__backdrop" data-close></div><div class="modal__panel"><h3 id="modal-title">Post event</h3><form id="form"><input type="hidden" id="item-id"><div class="form-group" style="margin-bottom:12px;"><label>Title</label><input id="title" required></div><div class="form-group" style="margin-bottom:12px;"><label>Description</label><textarea id="desc" required></textarea></div><div class="form-group" style="margin-bottom:12px;"><label>Image or Video</label><input type="file" id="media" accept="image/*,video/*,.jpg,.jpeg,.png,.webp,.mp4,.mov,.avi"></div><div class="actions"><button type="button" class="btn btn-ghost" data-close>Cancel</button><button type="submit" class="btn btn-primary">Save</button></div></form></div></div><script>
    (async function () {
      const A = window.FMAdmin;
      if (!A.requireAuth()) return;
      const tbody = document.getElementById('tbody');
      const modal = document.getElementById('modal');
      const form = document.getElementById('form');
      const alertBox = document.getElementById('alert');
      const show = (m, ok) => alertBox.innerHTML = \`<div class="alert \${ok?'alert-success':'alert-error'}">\${A.esc(m)}</div>\`;

      async function load() {
        const rows = (await A.api('/api/events')).data || [];
        tbody.innerHTML = rows.map((e) => \`
          <tr>
            <td>\${e.mediaType==='IMAGE'?\`<img class="thumb" src="\${A.mediaUrl(e.mediaPath)}" alt=""/>\`:A.esc(e.mediaType)}</td>
            <td>\${A.esc(e.title)}</td>
            <td>\${A.formatDate(e.createdDate)}</td>
            <td class="actions">
              <button class="btn btn-ghost btn-sm" data-edit="\${e.id}">Edit</button>
              <button class="btn btn-danger btn-sm" data-del="\${e.id}">Delete</button>
            </td>
          </tr>\`).join('') || '<tr><td colspan="4">No events yet</td></tr>';
      }

      document.getElementById('btn-add').onclick = () => {
        form.reset(); document.getElementById('item-id').value='';
        document.getElementById('modal-title').textContent='Post event';
        document.getElementById('media').required=true; modal.hidden=false;
      };
      modal.querySelectorAll('[data-close]').forEach((el)=>el.onclick=()=>modal.hidden=true);

      tbody.addEventListener('click', async (e) => {
        const t=e.target;
        try {
          if (t.dataset.edit) {
            const item=(await A.api(\`/api/events/\${t.dataset.edit}\`)).data;
            document.getElementById('item-id').value=item.id;
            document.getElementById('title').value=item.title;
            document.getElementById('desc').value=item.description;
            document.getElementById('media').required=false;
            document.getElementById('modal-title').textContent='Update event';
            modal.hidden=false;
          }
          if (t.dataset.del) {
            if (!confirm('Delete event?')) return;
            await A.api(\`/api/events/\${t.dataset.del}\`, { method:'DELETE' });
            show('Event deleted', true); load();
          }
        } catch (ex) { show(ex.message,false); }
      });

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const id=document.getElementById('item-id').value;
        const fd=new FormData();
        fd.append('title', document.getElementById('title').value);
        fd.append('description', document.getElementById('desc').value);
        const file=document.getElementById('media').files[0];
        if (file) fd.append('media', file);
        try {
          if (id) await A.api(\`/api/events/\${id}\`, { method:'PUT', body:fd });
          else await A.api('/api/events', { method:'POST', body:fd });
          show(id?'Event updated':'Event created', true); modal.hidden=true; load();
        } catch (ex) { show(ex.message,false); }
      });

      await load();
    })();
  <\/script>` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/events.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/events.astro";
var $$url = "/admin/events";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/events@_@astro
var page = () => events_exports;
//#endregion
export { page };
