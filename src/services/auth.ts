const BASE_URL = "https://sinves.azurewebsites.net/api/";

export async function signIn(username: string, password: string) {
  const resp = await fetch(`${BASE_URL}user/signin`, {
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
    return resp.json();
  } else {
    return null;
  }
}
