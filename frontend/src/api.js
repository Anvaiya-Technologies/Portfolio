// Central place for all outgoing requests.
// REACT_APP_API_BASE_URL comes from frontend/.env (local) or from Vercel env (production).
const API_BASE = process.env.REACT_APP_API_BASE_URL;

export async function getHealth() {
  // This will work once backend exposes /health
  const res = await fetch(`${API_BASE}/health`);
  if (!res.ok) {
    throw new Error(`Health check failed with status ${res.status}`);
  }
  return res.json();
}

// Add more API wrappers here as you implement endpoints.