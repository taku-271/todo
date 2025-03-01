export const sendGraphql = async (query: string) => {
  try {
    const res = await fetch(process.env.API_URL_FOR_TEST, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: `query { ${query} }` }),
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return await res.json();
  } catch (e) {
    console.error(e);
    return null;
  }
};
