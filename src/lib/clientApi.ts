/** Browser-side API helper (uses PUBLIC_API_URL injected at build, or localhost). */
export const API_BASE =
  (typeof window !== 'undefined' && (window as any).__API_BASE__) ||
  'https://futurem.simplyfound.com.na';

export async function apiFetch(path: string, options: RequestInit = {}) {
  const headers = new Headers(options.headers || {});
  if (!(options.body instanceof FormData) && !headers.has('Content-Type') && options.body) {
    headers.set('Content-Type', 'application/json');
  }
  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });
  const json = await res.json().catch(() => ({ success: false, message: 'Invalid response' }));
  if (!res.ok || json.success === false) {
    throw new Error(json.message || `Request failed (${res.status})`);
  }
  return json;
}

export function mediaUrl(path?: string | null) {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('/assets/')) return path;
  return `${API_BASE}/${path.replace(/^\//, '')}`;
}
