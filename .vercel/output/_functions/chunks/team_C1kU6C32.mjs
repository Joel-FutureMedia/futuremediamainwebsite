import { n as __exportAll, t as createComponent } from "./compiler_C2C07cjq.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_kq8-ajON.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DKB0w0nI.mjs";
//#region src/pages/about/team.astro
var team_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Team,
	file: () => $$file,
	url: () => $$url
});
var $$Team = createComponent(($$result, $$props, $$slots) => {
	const team = [
		{
			name: "David Nangolo",
			role: "Group CEO",
			initials: "DN"
		},
		{
			name: "Sarah //Hoeses",
			role: "Chief Operating Officer",
			initials: "SH"
		},
		{
			name: "Michael Shikongo",
			role: "Head of Radio",
			initials: "MS"
		},
		{
			name: "Linda Amutenya",
			role: "Head of Digital",
			initials: "LA"
		},
		{
			name: "Petrus //Gowaseb",
			role: "Head of Outdoor",
			initials: "PG"
		},
		{
			name: "Grace Mwiya",
			role: "Head of Sales",
			initials: "GM"
		},
		{
			name: "James Kauami",
			role: "Creative Director",
			initials: "JK"
		},
		{
			name: "Anna Shikwambi",
			role: "Head of Events",
			initials: "AS"
		}
	];
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Our Team",
		"description": "Meet the leadership team behind Future Media."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="page-hero"><div class="container"><h1>Our Team</h1><p>The people who make Future Media Namibia's most dynamic media organisation.</p></div></div><div class="page-content"><div class="container"><div class="team-grid">${team.map((member) => renderTemplate`<div class="team-member"><div class="team-member__photo"${addAttribute(`background: #313E4A; display: flex; align-items: center; justify-content: center; color: white; font-size: 32px; font-weight: 700;`, "style")}>${member.initials}</div><h3>${member.name}</h3><p>${member.role}</p></div>`)}</div></div></div>` })}`;
}, "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/about/team.astro", void 0);
var $$file = "C:/futuremediamainwebsite/futuremediamainwebsite/src/pages/about/team.astro";
var $$url = "/about/team";
//#endregion
//#region \0virtual:astro:page:src/pages/about/team@_@astro
var page = () => team_exports;
//#endregion
export { page };
