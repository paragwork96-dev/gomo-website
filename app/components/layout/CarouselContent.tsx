import SectionHeader from "../ui/SectionHeader";

type ContentCarouselProps = {
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
      description: string;
      image: {
        url: string;
        alternativeText?: string;
      };
    }[];
  };
};

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

export default function ContentCarousel({ data }: ContentCarouselProps) {
  return (
    <section className="py-24 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          eyebrow={data.sectionHeader.heading}
          title={data.sectionHeader.description}
          cta={data.sectionHeader.cta}
          className="mb-16 flex flex-col items-center gap-6 text-center md:justify-center"
          contentClassName="max-w-3xl"
          titleClassName="text-2xl font-display tracking-tight text-stone-900 md:text-2xl"
          eyebrowClassName="mb-3 text-sm font-display uppercase tracking-wider text-stone-500"
          ctaClassName="rounded-pill border border-stone-900 px-6 py-3 text-stone-900 transition hover:bg-stone-900 hover:text-white"
        />

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.cards.map((card) => (
            <article
              key={card.id}
              className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-stone-950"
            >
              <div className="absolute inset-0 h-full w-full">
                <img
                  src={`${STRAPI_URL}${card.image.url}`}
                  alt={card.image.alternativeText ?? card.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 border-t border-white/20 bg-stone-950/40 p-6 backdrop-blur-xl">
                <h3 className="mb-4 font-display text-2xl text-white">
                  {card.title}
                </h3>

                <div className="flex items-center justify-between border-t border-white/10 pt-4 text-sm font-light">
                  <p className="text-stone-300">{card.description}</p>

                  <span className="flex items-center gap-1 whitespace-nowrap text-white">
                    Read case
                    <span className="inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
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
