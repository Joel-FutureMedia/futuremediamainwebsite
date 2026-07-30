const API_BASE = import.meta.env.PUBLIC_API_URL || 'https://futurem.simplyfound.com.na';

export { API_BASE };

export function mediaUrl(path?: string | null): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('/assets/')) {
    return path;
  }
  const clean = path.replace(/^\//, '');
  return `${API_BASE}/${clean}`;
}

export function formatDate(value?: string | null): string {
  if (!value) return '';
  try {
    return new Date(value).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return value;
  }
}

export function excerpt(text?: string | null, max = 160): string {
  if (!text) return '';
  const plain = text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  if (plain.length <= max) return plain;
  return plain.slice(0, max).trimEnd() + '…';
}

type ApiEnvelope<T> = {
  success: boolean;
  message?: string;
  data: T;
};

async function request<T>(path: string, init?: RequestInit): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      ...init,
      headers: {
        ...(init?.headers || {}),
      },
    });
    if (!res.ok) return null;
    const json = (await res.json()) as ApiEnvelope<T>;
    if (!json.success) return null;
    return json.data;
  } catch {
    return null;
  }
}

export async function getApprovedNews() {
  return (await request<any[]>('/api/news/public')) || [];
}

export async function getApprovedNewsById(id: string | number) {
  return await request<any>(`/api/news/public/${id}`);
}

export async function getEvents() {
  return (await request<any[]>('/api/events/public')) || [];
}

export async function getEventById(id: string | number) {
  return await request<any>(`/api/events/public/${id}`);
}

export async function getGallery() {
  return (await request<any[]>('/api/gallery/public')) || [];
}

export async function getVacancies() {
  return (await request<any[]>('/api/vacancies/public')) || [];
}

export async function getVacancyById(id: string | number) {
  return await request<any>(`/api/vacancies/public/${id}`);
}

export async function getLatestBanner() {
  return await request<any>('/api/banners/public/latest');
}

export async function getPublicBanners() {
  return (await request<any[]>('/api/banners/public')) || [];
}
