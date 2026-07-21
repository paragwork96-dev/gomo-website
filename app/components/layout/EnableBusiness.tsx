import React from "react";
import SectionHeader from "../ui/SectionHeader";

interface ComponentProps {
  data: {
    sectionHeader: {
      heading: string;
      description: string;
      cta?: {
        label: string;
        url: string;
      };
    };
    categories: string[];
    categoryCard: {
      title: string;
      chips: string[];
      description: string;
      image: {
        url: string;
        alternativeText?: string;
      };
    };
  };
}

export default function IndustrySolutionsSection({ data }: ComponentProps) {
  const { sectionHeader, categories, categoryCard } = data;

  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;
  const imageUrl = `${STRAPI_URL}${categoryCard.image.url}`;

  return (
    <section className="bg-bedge p-24 text-stone-900">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <SectionHeader
          eyebrow={sectionHeader.heading}
          title={sectionHeader.description}
          cta={sectionHeader.cta}
          className="mb-16 flex flex-col gap-6 text-center md:flex-row md:items-end md:justify-between"
          contentClassName=""
          titleClassName="text-2xl font-display tracking-tight text-stone-900 md:text-2xl"
          eyebrowClassName="mb-3 text-sm font-display uppercase tracking-wider text-stone-500"
          ctaClassName="inline-block self-start rounded-full border border-stone-800 px-6 py-3 text-sm font-medium transition hover:bg-stone-800 hover:text-white"
        />

        {/* Content */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Categories */}
          <div className="flex flex-col justify-center rounded-2xl bg-[#1a2527] p-8 md:p-12 lg:col-span-5">
            <ul className="space-y-6">
              {categories.map((category, index) => (
                <li
                  key={category}
                  className={`flex items-center justify-between text-2xl font-medium tracking-wide md:text-3xl ${
                    index === 0 ? "text-white" : "text-stone-500/80"
                  }`}
                >
                  <span>{category}</span>

                  {index === 0 && <span className="text-xl text-white">→</span>}
                </li>
              ))}
            </ul>
          </div>

          {/* Card */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-900 text-white shadow-xl lg:col-span-7">
            <img
              src={imageUrl}
              alt={categoryCard.image.alternativeText ?? categoryCard.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 flex flex-col justify-between border-t border-white/10 bg-black/20 p-6 backdrop-blur-xl md:p-8">
              <div>
                <h3 className="mb-3 text-2xl font-semibold tracking-wide">
                  {categoryCard.title}
                </h3>

                <div className="mb-4 flex flex-wrap gap-2">
                  {categoryCard.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-stone-200 backdrop-blur-sm"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <p className="max-w-xl text-sm leading-relaxed text-stone-200/90 md:text-base">
                  {categoryCard.description}
                </p>
              </div>

              <div className="mt-4 flex justify-end border-t border-white/15 pt-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/90">
                  Explore solutions <span>↗</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
