type HeroBannerProps = {
  data: {
    heading: string;
    subHeading: any;
    scrollText: string;
    backgroundVideo: {
      url: string;
      alternativeText: string | null;
    };
  };
};

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

export default function HeroBanner({ data }: HeroBannerProps) {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="relative h-[90%] w-[95%] overflow-hidden rounded-lg">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover flex justify-center items-center"
        >
          <source
            src={`${STRAPI_URL}${data.backgroundVideo.url}`}
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 z-10 flex items-center justify-center ">
          <div className="flex items-center text-center">
            <div className="max-w-2xl text-cream">
              <p className="mb-4">{data.heading}</p>

              <h1 className="font-display text-display-xl text-[10rem]">
                {data.subHeading?.[0]?.children?.[0]?.text}
              </h1>

              <p className="mt-10 max-w-md">{data.scrollText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
