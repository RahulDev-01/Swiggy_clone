// Centralized API base configuration
// In production/deployment, set VITE_API_BASE_URL to your deployed API origin, e.g. https://your-api.vercel.app
// If not set, we default to the deployed API origin (Option B).
const RAW_BASE = import.meta?.env?.VITE_API_BASE_URL || "https://swiggy-api-edrs.vercel.app";
export const API_BASE = RAW_BASE.replace(/\/$/, "");

export const apiUrl = (path) => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  if (API_BASE) {
    return `${API_BASE}${cleanPath}`;
  }
  return `/api${cleanPath}`;
};
