import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$AdminLayout } from "./AdminLayout_CaJUnabj.mjs";
//#region src/pages/admin/users.astro
var users_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Users,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Users = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, {
		"title": "Users",
		"active": "users"
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="admin-card"><div class="admin-card__header"><h2>All users</h2><div class="actions"><input type="search" id="user-search" placeholder="Search users…" style="padding:8px 12px;border:1px solid #e2e5e8;border-radius:4px;"><button type="button" class="btn btn-primary" id="btn-add-user">Add user</button></div></div><div id="users-alert"></div><div class="table-wrap"><table class="admin-table"><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Created</th><th>Actions</th></tr></thead><tbody id="users-body"></tbody></table></div></div><div class="modal" id="user-modal" hidden><div class="modal__backdrop" data-close></div><div class="modal__panel"><h3 id="user-modal-title">Add user</h3><form id="user-form"><input type="hidden" id="user-id"><div class="form-grid"><div class="form-group"><label>Full name</label><input id="u-name" required></div><div class="form-group"><label>Email</label><input type="email" id="u-email" required></div><div class="form-group"><label>Password</label><input type="password" id="u-password" placeholder="Min 6 characters"></div><div class="form-group"><label>Role</label><select id="u-role"><option value="USER">USER</option><option value="SUPER_ADMIN">SUPER_ADMIN</option></select></div><div class="form-group"><label>Enabled</label><select id="u-enabled"><option value="true">Yes</option><option value="false">No</option></select></div></div><div class="actions" style="margin-top:16px;"><button type="button" class="btn btn-ghost" data-close>Cancel</button><button type="submit" class="btn btn-primary">Save</button></div></form></div></div><script>
    (async function () {
      const A = window.FMAdmin;
      if (!A.requireAuth()) return;
      const user = A.getUser();
      if (user?.role !== 'SUPER_ADMIN') {
        document.querySelector('.admin-content').innerHTML = '<div class="alert alert-error">Only Super Admins can manage users.</div>';
        return;
      }

      const body = document.getElementById('users-body');
      const modal = document.getElementById('user-modal');
      const form = document.getElementById('user-form');
      const alertBox = document.getElementById('users-alert');

      function showAlert(msg, ok) {
        alertBox.innerHTML = \`<div class="alert \${ok ? 'alert-success' : 'alert-error'}">\${A.esc(msg)}</div>\`;
      }

      async function load(keyword) {
        const path = keyword ? \`/api/users/search?keyword=\${encodeURIComponent(keyword)}\` : '/api/users';
        const json = await A.api(path);
        const rows = json.data || [];
        body.innerHTML = rows.map((u) => \`
          <tr>
            <td>\${A.esc(u.fullName)}</td>
            <td>\${A.esc(u.email)}</td>
            <td><span class="badge badge-role">\${A.esc(u.role)}</span></td>
            <td>\${u.enabled ? 'Enabled' : 'Disabled'}</td>
            <td>\${A.formatDate(u.createdAt)}</td>
            <td class="actions">
              <button class="btn btn-ghost btn-sm" data-edit='\${JSON.stringify(u).replace(/'/g, "&apos;")}'>Edit</button>
              <button class="btn btn-ghost btn-sm" data-toggle="\${u.id}" data-enabled="\${u.enabled}">\${u.enabled ? 'Disable' : 'Enable'}</button>
              <button class="btn btn-danger btn-sm" data-del="\${u.id}">Delete</button>
            </td>
          </tr>\`).join('') || '<tr><td colspan="6">No users found</td></tr>';
      }

      document.getElementById('btn-add-user').onclick = () => {
        form.reset();
        document.getElementById('user-id').value = '';
        document.getElementById('user-modal-title').textContent = 'Add user';
        document.getElementById('u-password').required = true;
        modal.hidden = false;
      };
      modal.querySelectorAll('[data-close]').forEach((el) => el.onclick = () => modal.hidden = true);

      body.addEventListener('click', async (e) => {
        const t = e.target;
        if (t.dataset.edit) {
          const u = JSON.parse(t.dataset.edit.replace(/&apos;/g, "'"));
          document.getElementById('user-id').value = u.id;
          document.getElementById('u-name').value = u.fullName;
          document.getElementById('u-email').value = u.email;
          document.getElementById('u-password').value = '';
          document.getElementById('u-password').required = false;
          document.getElementById('u-role').value = u.role;
          document.getElementById('u-enabled').value = String(u.enabled);
          document.getElementById('user-modal-title').textContent = 'Edit user';
          modal.hidden = false;
        }
        if (t.dataset.toggle) {
          const enabled = t.dataset.enabled === 'true';
          try {
            await A.api(\`/api/users/\${t.dataset.toggle}/\${enabled ? 'disable' : 'enable'}\`, { method: 'PUT' });
            showAlert(enabled ? 'User disabled' : 'User enabled', true);
            load();
          } catch (ex) { showAlert(ex.message, false); }
        }
        if (t.dataset.del) {
          if (!confirm('Delete this user?')) return;
          try {
            await A.api(\`/api/users/\${t.dataset.del}\`, { method: 'DELETE' });
            showAlert('User deleted', true);
            load();
          } catch (ex) { showAlert(ex.message, false); }
        }
      });

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const id = document.getElementById('user-id').value;
        const payload = {
          fullName: document.getElementById('u-name').value,
          email: document.getElementById('u-email').value,
          role: document.getElementById('u-role').value,
          enabled: document.getElementById('u-enabled').value === 'true',
        };
        const password = document.getElementById('u-password').value;
        if (password) payload.password = password;
        try {
          if (id) {
            await A.api(\`/api/users/\${id}\`, { method: 'PUT', body: JSON.stringify(payload) });
            showAlert('User updated', true);
          } else {
            if (!password) throw new Error('Password is required');
            await A.api('/api/users', { method: 'POST', body: JSON.stringify(payload) });
            showAlert('User created', true);
          }
          modal.hidden = true;
          load();
        } catch (ex) { showAlert(ex.message, false); }
      });

      let timer;
      document.getElementById('user-search').addEventListener('input', (e) => {
        clearTimeout(timer);
        timer = setTimeout(() => load(e.target.value.trim()), 300);
      });

      await load();
    })();
  <\/script>` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/users.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/users.astro";
var $$url = "/admin/users";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/users@_@astro
var page = () => users_exports;
//#endregion
export { page };
