const BASE_URL = "https://localhost:7185/api/";
export async function getAllBusiness() {
  const resp = await fetch(`${BASE_URL}business/getAll`, {
    method: "GET",
    credentials: "include",
  });

  if (resp.ok) {
    console.log(await resp.json());
  } else {
    console.log(resp);
    throw new Error("failed to fetch");
  }
}
