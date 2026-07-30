import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { n as renderScript, t as $$BaseLayout } from "./BaseLayout_DKB0w0nI.mjs";
//#region src/pages/about/company-profile.astro
var company_profile_exports = /* @__PURE__ */ __exportAll({
	default: () => $$CompanyProfile,
	file: () => $$file,
	url: () => $$url
});
var $$CompanyProfile = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Company Profile",
		"description": "Download the Future Media company profile."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="page-hero"><div class="container"><h1>Company Profile</h1><p>Download our comprehensive company profile with audience data, platform overview, and case studies.</p></div></div><div class="page-content"><div class="container"><div class="gated-form" id="profile-form"><h3>Download Company Profile</h3><p>Please complete the form below to access our company profile document. This helps us understand who's interested in partnering with Future Media.</p><form id="download-form"><div class="form-group"><label for="company">Company Name</label><input type="text" id="company" name="company" required></div><div class="form-group"><label for="fullname">Full Name</label><input type="text" id="fullname" name="fullname" required></div><div class="form-group"><label for="profile-email">Email Address</label><input type="email" id="profile-email" name="email" required></div><div class="form-group"><label for="phone">Phone Number</label><input type="tel" id="phone" name="phone" required></div><button type="submit" class="btn-primary">Download Profile</button></form><div id="download-success" style="display: none; text-align: center; padding: 20px 0;"><p style="color: #313E4A; font-weight: 600; font-size: 16px; margin-bottom: 12px;">Thank you! Your download is ready.</p><p style="font-size: 14px; color: #5a6570;">Our team will also be in touch shortly to discuss how Future Media can support your brand.</p></div></div></div></div>` })}${renderScript($$result, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/about/company-profile.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/about/company-profile.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/about/company-profile.astro";
var $$url = "/about/company-profile";
//#endregion
//#region \0virtual:astro:page:src/pages/about/company-profile@_@astro
var page = () => company_profile_exports;
//#endregion
export { page };
