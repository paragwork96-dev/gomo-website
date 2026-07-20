import qs from "qs";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

export async function fetchAPI(path: string) {
  const query = qs.stringify(
    {
      populate: {
        pageBuilder: {
          on: {
            "blocks.hero-banner": {
              populate: "*",
            },
            "blocks.start-with-us": {
              populate: {
                image: true,
                sectionHeader: {
                  populate: {
                    cta: true,
                  },
                },
              },
            },
            "blocks.stats-row": {
              populate: "*",
            },
            "blocks.brand-logo-grid": {
              populate: {
                logos: {
                  populate: {
                    logo: true,
                  },
                },
                sectionHeader: {
                  populate: {
                    cta: true,
                  },
                },
              },
            },
            "blocks.enable-business": {
              populate: {
                sectionHeader: {
                  populate: {
                    cta: true,
                  },
                },
                categoryCard: {
                  populate: {
                    image: true,
                    cta: true,
                  },
                },
              },
            },
            "blocks.why-choose-us": {
              populate: "*",
            },
            "blocks.content-carousel": {
              populate: "*",
            },
            "blocks.image-card-grid": {
              populate: "*",
            },
            "blocks.hero-cta-banner": {
              populate: "*",
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );

  const res = await fetch(`${STRAPI_URL}${path}?${query}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}
