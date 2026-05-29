import { API_BASE_URL, ADMIN_URL } from "./config";

async function parseApiError(res) {
  try {
    const data = await res.json();
    const { message } = data;

    if (Array.isArray(message)) {
      return message.join(", ");
    }

    return message || "Request failed";
  } catch {
    return "Request failed";
  }
}

export function saveAuthSession(data) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);
  localStorage.setItem("user", JSON.stringify(data.user));
}

export function clearAuthSession() {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("user");
}

export async function login(email, password) {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error(await parseApiError(res));
  }

  const data = await res.json();
  saveAuthSession(data);
  return data;
}

export async function register(payload) {
  const res = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(await parseApiError(res));
  }

  const data = await res.json();
  saveAuthSession(data);
  return data;
}

export async function registerCompany(payload) {
  const res = await fetch(`${API_BASE_URL}/auth/register-company`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(await parseApiError(res));
  }

  return res.json();
}

export function redirectToAdmin(data) {
  if (typeof window === "undefined") {
    return;
  }

  const params = new URLSearchParams({
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    user: JSON.stringify(data.user),
  });

  window.location.href = `${ADMIN_URL}/auth/callback#${params.toString()}`;
}
