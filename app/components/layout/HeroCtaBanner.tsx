import Link from "next/link";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

type HeroCtaBannerProps = {
  data: {
    heading: string;
    subHeading?: string;
    backgroundImage: {
      url: string;
      alternativeText?: string;
    };
    logo: {
      url: string;
      alternativeText?: string;
    };
    primaryCTA: {
      label: string;
      url: string;
    };
  };
};

export default function HeroCtaBanner({ data }: HeroCtaBannerProps) {
  return (
    <section className="py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-[32px]">
          {/* Background Image */}
          <img
            src={`${STRAPI_URL}${data.backgroundImage.url}`}
            alt={data.backgroundImage.alternativeText ?? data.heading}
            className="h-[600px] w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex max-w-3xl flex-col items-center px-6 text-center text-white">
              {/* Logo */}
              {data.logo && (
                <img
                  src={`${STRAPI_URL}${data.logo.url}`}
                  alt={data.logo.alternativeText ?? "Logo"}
                  className="mb-8 h-20 w-auto"
                />
              )}

              {/* Heading */}
              <h2 className="mb-4 font-display text-display-lg">
                {data.heading}
              </h2>

              {/* Sub Heading */}
              {data.subHeading && (
                <p className="mb-8 max-w-xl text-lg text-white/90">
                  {data.subHeading}
                </p>
              )}

              {/* CTA */}
              <Link
                href={data.primaryCTA.url}
                className="rounded-pill bg-white px-8 py-4 font-medium text-ink transition hover:bg-white/90"
              >
                {data.primaryCTA.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
