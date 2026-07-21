import SectionHeader from "../ui/SectionHeader";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

type StartWithUsProps = {
  data: {
    paragraph: Array<{
      children?: Array<{
        text?: string;
      }>;
    }>;
    image: {
      url: string;
      alternativeText: string | null;
      width: number;
      height: number;
    };
    sectionHeader: {
      heading: string;
      description: string;
      cta?: {
        label: string;
        url: string;
        variant?: string;
      };
    };
  };
};

export default function StartWithUs({ data }: StartWithUsProps) {
  return (
    <section className="py-10">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          eyebrow={data.sectionHeader.heading}
          title={data.sectionHeader.description}
          cta={data.sectionHeader.cta}
          className="mb-16 flex flex-col items-center text-center justify-center"
          titleClassName="mb-6 font-display text-2xl"
          eyebrowClassName="mb-3 text-sm uppercase tracking-wider text-stone-muted"
          ctaClassName="inline-flex rounded-pill bg-ink px-6 py-3 text-cream"
        />

        {/* Content */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={`${STRAPI_URL}${data.image.url}`}
              alt={data.image.alternativeText ?? ""}
              width={data.image.width}
              height={data.image.height}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-stone">
              {data.paragraph?.[0]?.children?.[0]?.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
