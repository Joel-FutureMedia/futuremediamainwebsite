import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DKB0w0nI.mjs";
//#region src/pages/live-chat.astro
var live_chat_exports = /* @__PURE__ */ __exportAll({
	default: () => $$LiveChat,
	file: () => $$file,
	url: () => $$url
});
var $$LiveChat = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<script>
  window.location.replace('/');
<\/script>${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Live Chat" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="page-hero"><div class="container"><h1>Live Chat</h1><p>Opening chat… Use the green button at the bottom right on any page.</p><p style="margin-top: 20px;"><button type="button" class="btn-primary" data-open-chat>Open chat</button></p></div></div>` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/live-chat.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/live-chat.astro";
var $$url = "/live-chat";
//#endregion
//#region \0virtual:astro:page:src/pages/live-chat@_@astro
var page = () => live_chat_exports;
//#endregion
export { page };
