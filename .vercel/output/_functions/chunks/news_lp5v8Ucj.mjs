import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$AdminLayout } from "./AdminLayout_CaJUnabj.mjs";
//#region src/pages/admin/news.astro
var news_exports = /* @__PURE__ */ __exportAll({
	default: () => $$News,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$News = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"title": "News",
		"active": "news"
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="admin-card"><div class="admin-card__header"><h2>Latest news</h2><button type="button" class="btn btn-primary" id="btn-add-news">Post news</button></div><div id="news-alert"></div><div class="table-wrap"><table class="admin-table"><thead><tr><th>Media</th><th>Title</th><th>Status</th><th>Created</th><th>Actions</th></tr></thead><tbody id="news-body"></tbody></table></div></div><div class="modal" id="news-modal" hidden><div class="modal__backdrop" data-close></div><div class="modal__panel"><h3 id="news-modal-title">Post news</h3><form id="news-form"><input type="hidden" id="news-id"><div class="form-group full" style="margin-bottom:12px;"><label>Title</label><input id="n-title" required></div><div class="form-group full" style="margin-bottom:12px;"><label>Description</label><textarea id="n-desc" required></textarea></div><div class="form-group full" style="margin-bottom:12px;"><label>Image or Video</label><input type="file" id="n-media" accept="image/jpeg,image/png,image/webp,video/mp4,video/quicktime,video/x-msvideo,.jpg,.jpeg,.png,.webp,.mp4,.mov,.avi"></div><div class="actions"><button type="button" class="btn btn-ghost" data-close>Cancel</button><button type="submit" class="btn btn-primary">Save</button></div></form></div></div><script>
    (async function () {
      const A = window.FMAdmin;
      if (!A.requireAuth()) return;
      const body = document.getElementById('news-body');
      const modal = document.getElementById('news-modal');
      const form = document.getElementById('news-form');
      const alertBox = document.getElementById('news-alert');
      const user = A.getUser();

      function showAlert(msg, ok) {
        alertBox.innerHTML = \`<div class="alert \${ok ? 'alert-success' : 'alert-error'}">\${A.esc(msg)}</div>\`;
      }

      function statusBadge(s) {
        const c = s === 'APPROVED' ? 'badge-approved' : s === 'REJECTED' ? 'badge-rejected' : 'badge-pending';
        return \`<span class="badge \${c}">\${A.esc(s)}</span>\`;
      }

      async function load() {
        const json = await A.api('/api/news');
        const rows = json.data || [];
        body.innerHTML = rows.map((n) => \`
          <tr>
            <td>\${n.mediaType === 'IMAGE' ? \`<img class="thumb" src="\${A.mediaUrl(n.mediaPath)}" alt="" />\` : A.esc(n.mediaType)}</td>
            <td>\${A.esc(n.title)}</td>
            <td>\${statusBadge(n.approvalStatus)}</td>
            <td>\${A.formatDate(n.createdDate)}</td>
            <td class="actions">
              <button class="btn btn-ghost btn-sm" data-edit="\${n.id}">Edit</button>
              \${user?.role === 'SUPER_ADMIN' && n.approvalStatus === 'PENDING' ? \`
                <button class="btn btn-primary btn-sm" data-approve="\${n.id}">Approve</button>
                <button class="btn btn-ghost btn-sm" data-reject="\${n.id}">Reject</button>\` : ''}
              <button class="btn btn-danger btn-sm" data-del="\${n.id}">Delete</button>
            </td>
          </tr>\`).join('') || '<tr><td colspan="5">No news yet</td></tr>';
      }

      document.getElementById('btn-add-news').onclick = () => {
        form.reset();
        document.getElementById('news-id').value = '';
        document.getElementById('news-modal-title').textContent = 'Post news';
        document.getElementById('n-media').required = true;
        modal.hidden = false;
      };
      modal.querySelectorAll('[data-close]').forEach((el) => el.onclick = () => modal.hidden = true);

      body.addEventListener('click', async (e) => {
        const t = e.target;
        try {
          if (t.dataset.edit) {
            const item = (await A.api(\`/api/news/\${t.dataset.edit}\`)).data;
            document.getElementById('news-id').value = item.id;
            document.getElementById('n-title').value = item.title;
            document.getElementById('n-desc').value = item.description;
            document.getElementById('n-media').required = false;
            document.getElementById('news-modal-title').textContent = 'Update news';
            modal.hidden = false;
          }
          if (t.dataset.approve) {
            await A.api(\`/api/news/\${t.dataset.approve}/approve\`, { method: 'PUT' });
            showAlert('News approved — newsletter sending in background', true);
            load();
          }
          if (t.dataset.reject) {
            await A.api(\`/api/news/\${t.dataset.reject}/reject\`, { method: 'PUT' });
            showAlert('News rejected', true);
            load();
          }
          if (t.dataset.del) {
            if (!confirm('Delete this news item?')) return;
            await A.api(\`/api/news/\${t.dataset.del}\`, { method: 'DELETE' });
            showAlert('News deleted', true);
            load();
          }
        } catch (ex) { showAlert(ex.message, false); }
      });

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const id = document.getElementById('news-id').value;
        const fd = new FormData();
        fd.append('title', document.getElementById('n-title').value);
        fd.append('description', document.getElementById('n-desc').value);
        const file = document.getElementById('n-media').files[0];
        if (file) fd.append('media', file);
        try {
          if (id) await A.api(\`/api/news/\${id}\`, { method: 'PUT', body: fd });
          else await A.api('/api/news', { method: 'POST', body: fd });
          showAlert(id ? 'News updated' : 'News created', true);
          modal.hidden = true;
          load();
        } catch (ex) { showAlert(ex.message, false); }
      });

      await load();
    })();
  <\/script>` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/news.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/news.astro";
var $$url = "/admin/news";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/news@_@astro
var page = () => news_exports;
//#endregion
export { page };
