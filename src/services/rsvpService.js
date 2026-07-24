export async function submitRSVP(data) {
  return fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}