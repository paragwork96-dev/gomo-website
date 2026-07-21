import qs from "qs";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

export async function fetchProductsPage() {
  const query = qs.stringify(
    {
      populate: {
        pageBuilder: {
          on: {
            "blocks.product-hero": {
              populate: {
                brandLogos: {
                  populate: {
                    logo: true,
                  },
                },
                cta: true,
              },
            },

            "blocks.product-categories": {
              populate: "*",
            },

            "blocks.products-grid": {
              populate: {
                productCard: {
                  populate: {
                    productImage: true,
                    requestQouteCta: true,
                    readMoreCta: true,
                  },
                },
              },
            },

            "blocks.hero-cta-banner": {
              populate: "*",
            },

            "blocks.contact-expert": {
              populate: {
                contactForm: {
                  populate: {
                    ctaText: true,
                  },
                },
                expertCard: {
                  populate: {
                    image: true,
                  },
                },
              },
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );

  const res = await fetch(`${STRAPI_URL}/api/products-page?${query}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    const error = await res.text();
    console.error(error);
    throw new Error(error);
  }

  return res.json();
}
