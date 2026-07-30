//#region src/lib/api.ts
var API_BASE = "https://futurem.simplyfound.com.na".replace(/\/$/, "");
var FETCH_TIMEOUT_MS = 4e3;
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
async function request(path, init) {
	const controller = new AbortController();
	const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
	try {
		const res = await fetch(`${API_BASE}${path}`, {
			...init,
			signal: controller.signal,
			headers: {
				Accept: "application/json",
				...init?.headers || {}
			}
		});
		if (!res.ok) return null;
		const json = await res.json();
		if (!json || json.success === false) return null;
		return json.data ?? null;
	} catch (err) {
		console.error(`[api] ${path} failed:`, err instanceof Error ? err.message : err);
		return null;
	} finally {
		clearTimeout(timer);
	}
}
async function getApprovedNewsById(id) {
	return await request(`/api/news/public/${id}`);
}
async function getEventById(id) {
	return await request(`/api/events/public/${id}`);
}
//#endregion
export { mediaUrl as i, getApprovedNewsById as n, getEventById as r, formatDate as t };
