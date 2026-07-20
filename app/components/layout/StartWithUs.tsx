import Image from "next/image";
import Link from "next/link";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

type StartWithUsProps = {
  data: {
    paragraph: any;
    image: {
      url: string;
      alternativeText: string | null;
      width: number;
      height: number;
    };
    sectionHeader: {
      heading: string;
      description: string;
      cta: {
        label: string;
        url: string;
        variant: string;
      };
    };
  };
};

export default function StartWithUs({ data }: StartWithUsProps) {
  return (
    <section className="py-10">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center justify-center">
          <p className="mb-3 text-sm uppercase tracking-wider text-stone-muted">
            {data.sectionHeader.heading}
          </p>

          <h2 className="mb-6 font-display text-2xl">
            {data.sectionHeader.description}
          </h2>

          {data.sectionHeader.cta && (
            <Link
              href={data.sectionHeader.cta.url}
              className="inline-flex rounded-pill bg-ink px-6 py-3 text-cream"
            >
              {data.sectionHeader.cta.label}
            </Link>
          )}
        </div>

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
