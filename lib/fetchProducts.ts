import qs from "qs";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

export async function fetchProducts() {
  const query = qs.stringify(
    {},
    {
      encodeValuesOnly: true,
    }
  );

  const url = `${STRAPI_URL}/api/products${query ? `?${query}` : ""}`;

  const res = await fetch(url, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    console.error(await res.text());
    throw new Error("Failed to fetch Products");
  }

  return res.json();
}