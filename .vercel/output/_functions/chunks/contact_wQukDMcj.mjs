import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { n as renderScript, t as $$BaseLayout } from "./BaseLayout_DKB0w0nI.mjs";
//#region src/pages/contact.astro
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Contact,
	file: () => $$file,
	url: () => $$url
});
var $$Contact = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Contact Us",
		"description": "Contact Future Media — address, multi-step media audit enquiry form, sales@futuremedia.com.na",
		"data-astro-cid-6bfsojfh": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="page-hero" data-astro-cid-6bfsojfh><div class="container" data-astro-cid-6bfsojfh><h1 data-astro-cid-6bfsojfh>Contact Us</h1><p data-astro-cid-6bfsojfh>Address, map and our multi-step enquiry form — same structure as the free media audit.</p></div></div><div class="page-content" data-astro-cid-6bfsojfh><div class="container" data-astro-cid-6bfsojfh><div class="contact-grid" data-astro-cid-6bfsojfh><div class="contact-info" data-astro-cid-6bfsojfh><h3 data-astro-cid-6bfsojfh>Get in Touch</h3><div class="contact-info__item" data-astro-cid-6bfsojfh><div data-astro-cid-6bfsojfh><strong data-astro-cid-6bfsojfh>Address</strong><span data-astro-cid-6bfsojfh>42 &amp; 44 Hyper Motor City Path, Windhoek, Namibia</span></div></div><div class="contact-info__item" data-astro-cid-6bfsojfh><div data-astro-cid-6bfsojfh><strong data-astro-cid-6bfsojfh>Telephone</strong><span data-astro-cid-6bfsojfh><a href="tel:+27830001000" data-astro-cid-6bfsojfh>083 000 1000</a></span></div></div><div class="contact-info__item" data-astro-cid-6bfsojfh><div data-astro-cid-6bfsojfh><strong data-astro-cid-6bfsojfh>Sales</strong><span data-astro-cid-6bfsojfh><a href="mailto:sales@futuremedia.com.na" data-astro-cid-6bfsojfh>sales@futuremedia.com.na</a></span></div></div><div class="contact-info__item" data-astro-cid-6bfsojfh><div data-astro-cid-6bfsojfh><strong data-astro-cid-6bfsojfh>General</strong><span data-astro-cid-6bfsojfh><a href="mailto:info@futuremedia.com.na" data-astro-cid-6bfsojfh>info@futuremedia.com.na</a></span></div></div><div class="contact-info__item" data-astro-cid-6bfsojfh><div data-astro-cid-6bfsojfh><strong data-astro-cid-6bfsojfh>Office Hours</strong><span data-astro-cid-6bfsojfh>Monday – Friday, 08:00 – 17:00</span></div></div><div style="margin-top: 24px; border-radius: 8px; overflow: hidden; border: 1px solid #e2e5e8;" data-astro-cid-6bfsojfh><iframe title="Future Media location" src="https://maps.google.com/maps?q=Hyper%20Motor%20City%20Windhoek&t=&z=14&ie=UTF8&iwloc=&output=embed" width="100%" height="220" style="border:0; display:block;" loading="lazy" data-astro-cid-6bfsojfh></iframe></div></div><div class="gated-form" style="margin: 0; max-width: none;" id="media-audit-form" data-astro-cid-6bfsojfh><h3 data-astro-cid-6bfsojfh>Free Media Audit</h3><p style="font-size: 12px; color: #5a6570; margin-bottom: 16px;" data-astro-cid-6bfsojfh>By clicking submit you acknowledge your data may be shared with a Future Media sales representative to fulfil your request, and agree to our Privacy Policy and Terms &amp; Conditions.</p><div class="audit-progress" id="audit-progress" data-astro-cid-6bfsojfh>Step 1 of 4</div><div class="audit-step" data-step="1" data-astro-cid-6bfsojfh><label style="font-weight: 600; display: block; margin-bottom: 12px;" data-astro-cid-6bfsojfh>What type of campaign are you planning?</label><div class="option-tiles" data-multi="true" data-astro-cid-6bfsojfh>${[
		"Brand awareness",
		"Product Launch",
		"Promotions & specials",
		"Event promotion",
		"Retail / In-store",
		"Digital",
		"Not sure yet"
	].map((o) => renderTemplate`<button type="button" class="option-tile" data-astro-cid-6bfsojfh>${o}</button>`)}</div></div><div class="audit-step" data-step="2" hidden data-astro-cid-6bfsojfh><label style="font-weight: 600; display: block; margin-bottom: 12px;" data-astro-cid-6bfsojfh>Where are you located?</label><div class="form-group" data-astro-cid-6bfsojfh><select id="audit-location" style="width:100%; padding:10px 14px; border:1px solid #e2e5e8; border-radius:4px; font-family:inherit;" data-astro-cid-6bfsojfh><option value="" data-astro-cid-6bfsojfh>Select…</option><option data-astro-cid-6bfsojfh>Windhoek</option><option data-astro-cid-6bfsojfh>Swakopmund</option><option data-astro-cid-6bfsojfh>Walvis Bay</option><option data-astro-cid-6bfsojfh>Oshakati</option><option data-astro-cid-6bfsojfh>Rundu</option><option data-astro-cid-6bfsojfh>Lüderitz</option><option data-astro-cid-6bfsojfh>Other Namibia</option><option data-astro-cid-6bfsojfh>South Africa</option><option data-astro-cid-6bfsojfh>Other country</option></select></div><label style="font-weight: 600; display: block; margin: 16px 0 12px;" data-astro-cid-6bfsojfh>Primary audience</label><div class="option-tiles" data-astro-cid-6bfsojfh>${[
		"Mass market consumers",
		"Working adults (Middle income)",
		"Affluent consumers",
		"Youth & Young Adults (18-25)",
		"Families & households",
		"Business owners",
		"Not sure yet"
	].map((o) => renderTemplate`<button type="button" class="option-tile" data-astro-cid-6bfsojfh>${o}</button>`)}</div></div><div class="audit-step" data-step="3" hidden data-astro-cid-6bfsojfh><label style="font-weight: 600; display: block; margin-bottom: 12px;" data-astro-cid-6bfsojfh>When are you looking to advertise?</label><div class="option-tiles" data-astro-cid-6bfsojfh>${[
		"As soon as possible",
		"Within 1-3 months",
		"3-6 months",
		"Planning for next year",
		"Not sure yet"
	].map((o) => renderTemplate`<button type="button" class="option-tile" data-astro-cid-6bfsojfh>${o}</button>`)}</div><label style="font-weight: 600; display: block; margin: 16px 0 12px;" data-astro-cid-6bfsojfh>Approximate budget (optional)</label><div class="option-tiles" data-astro-cid-6bfsojfh>${[
		"Under N$20,000",
		"N$20,000 – N$50,000",
		"N$50,000 – N$150,000",
		"N$150,000+",
		"Prefer not to say"
	].map((o) => renderTemplate`<button type="button" class="option-tile" data-astro-cid-6bfsojfh>${o}</button>`)}</div></div><div class="audit-step" data-step="4" hidden data-astro-cid-6bfsojfh><div class="form-group" data-astro-cid-6bfsojfh><label for="a-name" data-astro-cid-6bfsojfh>Full Name</label><input type="text" id="a-name" required data-astro-cid-6bfsojfh></div><div class="form-group" data-astro-cid-6bfsojfh><label for="a-email" data-astro-cid-6bfsojfh>Email</label><input type="email" id="a-email" required data-astro-cid-6bfsojfh></div><div class="form-group" data-astro-cid-6bfsojfh><label for="a-phone" data-astro-cid-6bfsojfh>Phone</label><input type="tel" id="a-phone" required data-astro-cid-6bfsojfh></div><div class="form-group" data-astro-cid-6bfsojfh><label for="a-company" data-astro-cid-6bfsojfh>Company</label><input type="text" id="a-company" required data-astro-cid-6bfsojfh></div><div class="form-group" data-astro-cid-6bfsojfh><label for="a-notes" data-astro-cid-6bfsojfh>Anything else? (optional)</label><textarea id="a-notes" rows="3" style="width:100%;padding:10px 14px;border:1px solid #e2e5e8;border-radius:4px;font-family:inherit;" data-astro-cid-6bfsojfh></textarea></div></div><div class="audit-step" data-step="done" hidden data-astro-cid-6bfsojfh><p style="font-weight: 600; color: #313E4A;" data-astro-cid-6bfsojfh>Thank you — one of our media experts will be in touch to discuss the best solutions for you.</p><p style="font-size: 14px; color: #5a6570; margin-top: 8px;" data-astro-cid-6bfsojfh>A confirmation will also be sent to sales@futuremedia.com.na.</p></div><div class="audit-nav" id="audit-nav" style="display: flex; gap: 12px; margin-top: 20px;" data-astro-cid-6bfsojfh><button type="button" class="btn-primary" id="audit-back" style="background:#5a6570;" hidden data-astro-cid-6bfsojfh>Back</button><button type="button" class="btn-primary" id="audit-next" data-astro-cid-6bfsojfh>Next</button></div></div></div></div></div>` })}${renderScript($$result, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/contact.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/contact.astro";
var $$url = "/contact";
//#endregion
//#region \0virtual:astro:page:src/pages/contact@_@astro
var page = () => contact_exports;
//#endregion
export { page };
