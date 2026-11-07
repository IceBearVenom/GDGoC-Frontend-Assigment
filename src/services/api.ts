import type { Endpoints } from "../types/types";

const BASE_URL = "https://gdgoc-ugm-api.vercel.app/api";

interface FetchOptions {
  headers?: Record<string, string>;
  query?: Record<string, string | number | boolean>;
}

// Thrown for non-2xx responses; carries the status and the server's field errors
export class ApiError extends Error {
  status: number;
  errors?: Record<string, string[]>;

  constructor(status: number, message: string, errors?: Record<string, string[]>) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.errors = errors;
  }
}

const toPath = (endpoint: string) => (endpoint.startsWith("/") ? endpoint : `/${endpoint}`);

export async function fetchData<T>(
  endpoint: Endpoints,
  options: FetchOptions = {}
): Promise<T> {
  const url = new URL(`${BASE_URL}${toPath(endpoint)}`);

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

export async function postData<TResponse, TBody = unknown>(
  endpoint: Endpoints,
  body: TBody,
  options: Pick<FetchOptions, "headers"> = {}
): Promise<TResponse> {
  const response = await fetch(`${BASE_URL}${toPath(endpoint)}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: JSON.stringify(body),
  });

  // The body may be empty or not JSON on some errors, so don't let parsing throw
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new ApiError(
      response.status,
      data?.message ?? `Request failed: ${response.status} ${response.statusText}`,
      data?.errors
    );
  }

  return data as TResponse;
}