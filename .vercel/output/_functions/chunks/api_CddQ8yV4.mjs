//#region src/lib/api.ts
var API_BASE = "https://futurem.simplyfound.com.na";
function mediaUrl(path) {
	if (!path) return "";
	if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("/assets/")) return path;
	return `${API_BASE}/${path.replace(/^\//, "")}`;
}
function formatDate(value) {
	if (!value) return "";
	try {
		return new Date(value).toLocaleDateString("en-GB", {
			day: "numeric",
			month: "long",
			year: "numeric"
		});
	} catch {
		return value;
	}
}
function excerpt(text, max = 160) {
	if (!text) return "";
	const plain = text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
	if (plain.length <= max) return plain;
	return plain.slice(0, max).trimEnd() + "…";
}
async function request(path, init) {
	try {
		const res = await fetch(`${API_BASE}${path}`, {
			...init,
			headers: { ...init?.headers || {} }
		});
		if (!res.ok) return null;
		const json = await res.json();
		if (!json.success) return null;
		return json.data;
	} catch {
		return null;
	}
}
async function getApprovedNews() {
	return await request("/api/news/public") || [];
}
async function getApprovedNewsById(id) {
	return await request(`/api/news/public/${id}`);
}
async function getEvents() {
	return await request("/api/events/public") || [];
}
async function getEventById(id) {
	return await request(`/api/events/public/${id}`);
}
async function getGallery() {
	return await request("/api/gallery/public") || [];
}
async function getVacancies() {
	return await request("/api/vacancies/public") || [];
}
async function getLatestBanner() {
	return await request("/api/banners/public/latest");
}
async function getPublicBanners() {
	return await request("/api/banners/public") || [];
}
//#endregion
export { getEventById as a, getLatestBanner as c, mediaUrl as d, getApprovedNewsById as i, getPublicBanners as l, formatDate as n, getEvents as o, getApprovedNews as r, getGallery as s, excerpt as t, getVacancies as u };
