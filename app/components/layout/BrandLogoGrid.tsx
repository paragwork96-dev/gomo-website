"use client";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
  const marqueeLogos = [...data.logos, ...data.logos];
  const swiperRef = useRef<SwiperType | null>(null);

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

        <div
          className="overflow-hidden py-4 sm:py-6"
          onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay?.start()}
        >
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView="auto"
            loop
            loopAdditionalSlides={2}
            speed={3000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            allowTouchMove={false}
            grabCursor={false}
            className="!overflow-hidden"
          >
            {marqueeLogos.map((item, index) => (
              <SwiperSlide key={`${item.id}-${index}`} className="!w-auto">
                <div className="flex h-24 w-44 items-center justify-center rounded-lg border border-border/70 bg-transparent p-4 grayscale transition duration-300 hover:grayscale-0 sm:w-52">
                  {item.logo ? (
                    <img
                      src={`${STRAPI_URL}${item.logo.url}`}
                      alt={item.logo.alternativeText ?? item.altText}
                      width={item.logo.width}
                      height={item.logo.height}
                      className="max-h-12 w-full object-contain sm:max-h-14"
                    />
                  ) : (
                    <span className="text-center text-sm text-stone-muted">
                      {item.altText}
                    </span>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
