import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { n as renderScript, t as $$BaseLayout } from "./BaseLayout_DKB0w0nI.mjs";
import { d as mediaUrl, n as formatDate, u as getVacancies } from "./api_CddQ8yV4.mjs";
//#region src/pages/vacancies.astro
var vacancies_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Vacancies,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Vacancies = createComponent(async ($$result, $$props, $$slots) => {
	const apiVacancies = await getVacancies();
	const vacancies = apiVacancies.length ? apiVacancies.map((v) => ({
		id: v.id,
		title: v.title,
		meta: v.closingDate ? `Closing: ${formatDate(v.closingDate)}` : "Open application",
		description: v.description,
		image: mediaUrl(v.mediaPath),
		closingDate: v.closingDate
	})) : [
		{
			id: null,
			title: "Senior Radio Producer",
			meta: "99 FM · Windhoek · Full-time",
			description: "Lead content production for one of Namibia's top-rated radio stations. You'll manage daily show segments, coordinate with presenters, and develop creative concepts that engage our audience.",
			image: null,
			closingDate: null
		},
		{
			id: null,
			title: "Digital Marketing Specialist",
			meta: "Future Media Group · Windhoek · Full-time",
			description: "Drive digital campaign strategy across our portfolio of brands. Experience with social media management, content creation, and analytics platforms is essential.",
			image: null,
			closingDate: null
		},
		{
			id: null,
			title: "Outdoor Sales Executive",
			meta: "Future Media Outdoor · Windhoek · Full-time",
			description: "Manage client relationships and sell outdoor advertising inventory across our national billboard and transit network. Proven sales track record required.",
			image: null,
			closingDate: null
		},
		{
			id: null,
			title: "Broadcast Engineer",
			meta: "Radio Omulunga · Oshakati · Full-time",
			description: "Maintain and optimise broadcast transmission systems. Technical certification in broadcast engineering and experience with digital audio workflows preferred.",
			image: null,
			closingDate: null
		}
	];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Vacancies",
		"description": "Career opportunities at Future Media — join Namibia's leading media group.",
		"data-astro-cid-sgxryyil": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="page-hero" data-astro-cid-sgxryyil><div class="container" data-astro-cid-sgxryyil><h1 data-astro-cid-sgxryyil>Vacancies</h1><p data-astro-cid-sgxryyil>Build your career with Namibia's most dynamic media organisation.</p></div></div><div class="page-content" data-astro-cid-sgxryyil><div class="container" data-astro-cid-sgxryyil><div class="vacancy-list" data-astro-cid-sgxryyil>${vacancies.map((v) => renderTemplate`<div class="vacancy-item"${addAttribute(v.id ?? "", "data-vacancy-id")} data-astro-cid-sgxryyil>${v.image && renderTemplate`<div style="margin-bottom:16px;border-radius:8px;overflow:hidden;max-height:220px;" data-astro-cid-sgxryyil><img${addAttribute(v.image, "src")}${addAttribute(v.title, "alt")} style="width:100%;height:220px;object-fit:cover;" data-astro-cid-sgxryyil></div>`}<h3 data-astro-cid-sgxryyil>${v.title}</h3><div class="vacancy-meta" data-astro-cid-sgxryyil>${v.meta}</div><p data-astro-cid-sgxryyil>${v.description}</p>${v.id && renderTemplate`<button type="button" class="btn-primary apply-btn"${addAttribute(v.id, "data-id")}${addAttribute(v.title, "data-title")} style="margin-top:12px;" data-astro-cid-sgxryyil>Apply now</button>`}</div>`)}</div><div id="apply-modal" class="apply-modal" hidden data-astro-cid-sgxryyil><div class="apply-modal__backdrop" data-close data-astro-cid-sgxryyil></div><div class="apply-modal__panel gated-form" style="margin:0;max-width:520px;" data-astro-cid-sgxryyil><h3 id="apply-title" data-astro-cid-sgxryyil>Apply for position</h3><form id="apply-form" data-astro-cid-sgxryyil><input type="hidden" id="apply-vacancy-id" name="vacancyId" data-astro-cid-sgxryyil><div class="form-group" data-astro-cid-sgxryyil><label for="apply-name" data-astro-cid-sgxryyil>Full Name</label><input type="text" id="apply-name" required data-astro-cid-sgxryyil></div><div class="form-group" data-astro-cid-sgxryyil><label for="apply-email" data-astro-cid-sgxryyil>Email</label><input type="email" id="apply-email" required data-astro-cid-sgxryyil></div><div class="form-group" data-astro-cid-sgxryyil><label for="apply-phone" data-astro-cid-sgxryyil>Phone</label><input type="tel" id="apply-phone" data-astro-cid-sgxryyil></div><div class="form-group" data-astro-cid-sgxryyil><label for="apply-location" data-astro-cid-sgxryyil>Location</label><input type="text" id="apply-location" required data-astro-cid-sgxryyil></div><div class="form-group" data-astro-cid-sgxryyil><label for="apply-cv" data-astro-cid-sgxryyil>CV (PDF, DOC, DOCX)</label><input type="file" id="apply-cv" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" required data-astro-cid-sgxryyil></div><p id="apply-error" style="display:none;color:#E3564E;font-size:13px;margin-bottom:8px;" data-astro-cid-sgxryyil></p><div style="display:flex;gap:10px;" data-astro-cid-sgxryyil><button type="button" class="btn-primary" data-close style="background:#5a6570;" data-astro-cid-sgxryyil>Cancel</button><button type="submit" class="btn-primary" data-astro-cid-sgxryyil>Submit application</button></div></form><div id="apply-success" hidden data-astro-cid-sgxryyil><p style="font-weight:600;color:#313E4A;" data-astro-cid-sgxryyil>Application submitted successfully. We will be in touch.</p></div></div></div></div></div>` })}${renderScript($$result, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/vacancies.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/vacancies.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/vacancies.astro";
var $$url = "/vacancies";
//#endregion
//#region \0virtual:astro:page:src/pages/vacancies@_@astro
var page = () => vacancies_exports;
//#endregion
export { page };
