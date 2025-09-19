// Centralized API base configuration
// In production/deployment, set VITE_API_BASE_URL to your deployed API origin, e.g. https://your-api.vercel.app
// If not set, we default to a '/api' prefix and let Vite devServer proxy handle it locally.
const RAW_BASE = import.meta?.env?.VITE_API_BASE_URL || "";
export const API_BASE = RAW_BASE.replace(/\/$/, "");

export const apiUrl = (path) => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (API_BASE) {
    return `${API_BASE}${cleanPath}`;
  }
  return `/api${cleanPath}`;
};
