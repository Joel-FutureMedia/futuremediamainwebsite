import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { _ as defineScriptVars, h as renderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
/* empty css                */
//#region src/pages/admin/index.astro
var admin_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Admin Login | Future Media</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"><link rel="icon" type="image/png" href="/assets/logo.png"><script>(function(){${defineScriptVars({ apiBase: "https://futurem.simplyfound.com.na" })}
      window.__API_BASE__ = apiBase;
    })();<\/script><script src="/admin/fm-admin.js"><\/script>${renderHead($$result)}</head><body class="admin-body"><div class="login-page"><div class="login-card"><img src="/assets/logo.png" alt="Future Media"><h1>Admin Panel</h1><p>Sign in with your Future Media account</p><div id="login-error" class="alert alert-error" hidden></div><form id="login-form"><div class="form-group" style="margin-bottom:14px;"><label for="email">Email</label><input type="email" id="email" name="email" required placeholder="joel@simplyfound.com.na"></div><div class="form-group" style="margin-bottom:14px;"><label for="password">Password</label><input type="password" id="password" name="password" required placeholder="••••••••"></div><button type="submit" class="btn btn-primary" id="login-btn">Sign in</button></form></div></div><script>
      (function () {
        if (window.FMAdmin.getToken()) {
          window.location.href = '/admin/dashboard';
          return;
        }
        const form = document.getElementById('login-form');
        const err = document.getElementById('login-error');
        const btn = document.getElementById('login-btn');
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          err.hidden = true;
          btn.disabled = true;
          btn.textContent = 'Signing in…';
          try {
            await window.FMAdmin.login(
              document.getElementById('email').value.trim(),
              document.getElementById('password').value
            );
            window.location.href = '/admin/dashboard';
          } catch (ex) {
            err.textContent = ex.message || 'Login failed';
            err.hidden = false;
            btn.disabled = false;
            btn.textContent = 'Sign in';
          }
        });
      })();
    <\/script></body></html>`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/index.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/admin/index.astro";
var $$url = "/admin";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/index@_@astro
var page = () => admin_exports;
//#endregion
export { page };
