window.FMAdmin = (function () {
  const API = window.__API_BASE__ || 'http://localhost:8080';
  const TOKEN_KEY = 'fm_admin_token';
  const USER_KEY = 'fm_admin_user';

  function getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  function getUser() {
    try {
      return JSON.parse(localStorage.getItem(USER_KEY) || 'null');
    } catch {
      return null;
    }
  }

  function setSession(token, user) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  function clearSession() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }

  function requireAuth() {
    if (!getToken()) {
      window.location.href = '/admin';
      return false;
    }
    return true;
  }

  function mediaUrl(path) {
    if (!path) return '';
    if (path.startsWith('http') || path.startsWith('/assets/')) return path;
    return `${API}/${String(path).replace(/^\//, '')}`;
  }

  async function api(path, options = {}) {
    const headers = new Headers(options.headers || {});
    const token = getToken();
    if (token) headers.set('Authorization', `Bearer ${token}`);
    if (!(options.body instanceof FormData) && options.body && !headers.has('Content-Type')) {
      headers.set('Content-Type', 'application/json');
    }
    const res = await fetch(`${API}${path}`, { ...options, headers });
    const json = await res.json().catch(() => ({ success: false, message: 'Invalid server response' }));
    if (res.status === 401 || res.status === 403) {
      if (!path.includes('/auth/login')) {
        clearSession();
        window.location.href = '/admin';
      }
    }
    if (!res.ok || json.success === false) {
      throw new Error(json.message || `Request failed (${res.status})`);
    }
    return json;
  }

  async function login(email, password) {
    const json = await api('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    const data = json.data;
    setSession(data.token, {
      id: data.id,
      fullName: data.fullName,
      email: data.email,
      role: data.role,
    });
    return data;
  }

  function logout() {
    clearSession();
    window.location.href = '/admin';
  }

  function formatDate(v) {
    if (!v) return '—';
    try {
      return new Date(v).toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return v;
    }
  }

  function esc(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  return {
    API,
    getToken,
    getUser,
    setSession,
    clearSession,
    requireAuth,
    mediaUrl,
    api,
    login,
    logout,
    formatDate,
    esc,
  };
})();
