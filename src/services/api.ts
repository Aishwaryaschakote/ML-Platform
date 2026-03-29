export async function predictIrrigation(data: any) {
  const res = await fetch("http://127.0.0.1:8000/api/irrigation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error("API Error");
  }

  return res.json();
}