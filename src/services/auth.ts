const BASE_URL = "https://foodtruckbackend-production.up.railway.app/api/v1/";

export async function signIn(username: string, password: string) {
  const resp = await fetch(`${BASE_URL}admin/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
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

export async function signUp(username: string, password: string) {
  const resp = await fetch(`${BASE_URL}admin/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
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
