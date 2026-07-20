type BrandLogoGridProps = {
  data: {
    sectionHeader: {
      heading: string;
      description: string | null;
    };
    logos: {
      id: number;
      logo?: {
        url: string;
        alternativeText: string | null;
        width: number;
        height: number;
      };
      altText: string;
    }[];
  };
};

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

export default function BrandLogoGrid({ data }: BrandLogoGridProps) {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-display-lg">
            {data.sectionHeader.heading}
          </h2>

          {data.sectionHeader.description && (
            <p className="mx-auto max-w-2xl text-stone-muted">
              {data.sectionHeader.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {data.logos.map((item) => (
            <div
              key={item.id}
              className="flex h-28 items-center justify-center rounded-lg border border-border grayscale p-6"
            >
              {item.logo ? (
                <img
                  src={`${STRAPI_URL}${item.logo.url}`}
                  alt={item.logo.alternativeText ?? item.altText}
                  width={item.logo.width}
                  height={item.logo.height}
                  className="max-h-16 w-auto object-contain"
                />
              ) : (
                <span className="text-center text-sm text-stone-muted">
                  {item.altText}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
