import type { Endpoints } from "../types/types";

const BASE_URL = "https://gdgoc-ugm-api.vercel.app/api";

interface FetchOptions {
  headers?: Record<string, string>;
  query?: Record<string, string | number | boolean>;
}

export async function fetchData<T>(
  endpoint: Endpoints,
  options: FetchOptions = {}
): Promise<T> {
  const path = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const url = new URL(`${BASE_URL}${path}`);

  for (const [key, value] of Object.entries(options.query ?? {})) {
    url.searchParams.set(key, String(value));
  }

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      Accept: "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Request failed: ${response.status} ${response.statusText}`
    );
  }

  return (await response.json()) as T;
}