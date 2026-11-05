// fetchApi.ts
// GET-only client. Set your base URL once, then call it with just the endpoint.

const BASE_URL = "https://gdgoc-ugm-api.vercel.app/api"; // <- your base URL (e.g. "https://myserver.com/api")

interface FetchOptions {
  headers?: Record<string, string>; // e.g. { Authorization: "Bearer xxx" }
  query?: Record<string, string | number | boolean>; // e.g. { page: 1, limit: 10 }
}

export async function fetchData<T>(
  endpoint: string, // e.g. "users" or "/users/5"
  options: FetchOptions = {}
): Promise<T> {
  const path = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const url = new URL(`${BASE_URL}${path}`);

  for (const [key, value] of Object.entries(options.query ?? {})) {
    url.searchParams.set(key, String(value));
  }

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: { Accept: "application/json", ...options.headers },
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as T;
}

/* ---------------- Example usage ---------------- */

// interface User { id: number; name: string }
//
// const users = await fetchData<User[]>("users");
// const user  = await fetchData<User>("users/5");
// const page  = await fetchData<User[]>("users", { query: { page: 1, limit: 10 } });
// const mine  = await fetchData<User>("me", { headers: { Authorization: "Bearer TOKEN" } });