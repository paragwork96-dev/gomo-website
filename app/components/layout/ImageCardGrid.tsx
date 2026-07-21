import Link from "next/link";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

type ImageCardGridProps = {
  data: {
    sectionHeader: {
      heading: string;
      description: string;
      cta?: {
        label: string;
        url: string;
      };
    };
    cards: {
      id: number;
      title: string;
      description?: string;
      image: {
        url: string;
        alternativeText?: string;
      };
      cta?: {
        label: string;
        url: string;
      };
    }[];
  };
};

export default function ImageCardGrid({ data }: ImageCardGridProps) {
  return (
    <section className="bg-cream py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-6 items-center text-center justify-center">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-widest text-stone-muted">
              {data.sectionHeader.heading}
            </p>

            <h2 className="text-2xl font-display tracking-tight text-stone-900 md:text-2xl">
              {data.sectionHeader.description}
            </h2>
          </div>

          {data.sectionHeader.cta && (
            <Link
              href={data.sectionHeader.cta.url}
              className="rounded-pill border border-ink px-6 py-3 text-ink transition hover:bg-ink hover:text-cream"
            >
              {data.sectionHeader.cta.label}
            </Link>
          )}
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.cards.map((card) => (
            <article
              key={card.id}
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl"
            >
              {/* Background Image */}
              <img
                src={`${STRAPI_URL}${card.image.url}`}
                alt={card.image.alternativeText ?? card.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              {/* Glass Morphism */}
              <div className="absolute bottom-0 left-0 right-0 border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
                <h3 className="mb-4 font-display text-2xl text-white">
                  {card.title}
                </h3>

                {card.description && (
                  <p className="mb-5 text-sm leading-6 text-white/80">
                    {card.description}
                  </p>
                )}

                <div className="flex items-center justify-between border-t border-white/20 pt-4">
                  <Link
                    href={card.cta?.url ?? "#"}
                    className="text-sm font-medium text-white"
                  >
                    {card.cta?.label ?? "Read more"}
                  </Link>

                  <span className="text-xl text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
