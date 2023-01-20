const BASE_URL = "https://foodtruckbackend-production.up.railway.app/api/v1/";
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

export async function postBusiness(
  name: string,
  categories: Array<string>,
  links: Array<string>,
  imageLinks: Array<string>
) {
  const resp = await fetch(`${BASE_URL}business/new`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      categories,
      links,
      imageLinks,
    }),
    credentials: "include",
  });

  if (resp.ok) {
    const data = await resp.json();
    return data;
  } else {
    return null;
  }
}
