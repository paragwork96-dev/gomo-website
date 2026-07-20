import Icon from "../ui/Icon";

type WhyChooseUsProps = {
  data: {
    sectionHeader: any;
    heading: string;
    subHeading?: string | null;
    features: {
      id: number;
      iconName: string;
      title: string;
      description: string;
    }[];
  };
};

export default function WhyChooseUs({ data }: WhyChooseUsProps) {
  return (
    <section className="  py-24 text-stone-900">
      <div className="container w-[80%] bg-green mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-6 text-center md:flex-row md:items-end md:justify-center">
          <div>
            <p className="mb-3 text-sm font-display uppercase tracking-wider text-stone-500">
              {data.sectionHeader.heading}
            </p>

            <h2 className="text-2xl font-display tracking-tight text-stone-900 md:text-2xl">
              {data.sectionHeader.description}
            </h2>
          </div>

          {data.sectionHeader.cta && (
            <a
              href={data.sectionHeader.cta.url}
              className="inline-block self-start rounded-full border border-stone-800 px-6 py-3 text-sm font-medium transition hover:bg-stone-800 hover:text-white"
            >
              {data.sectionHeader.cta.label}
            </a>
          )}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {data.features.map((feature) => (
            <div key={feature.id} className=" border border-black/10  p-8">
              <div className="mb-6">
                <Icon
                  iconName={feature.iconName}
                  type={"solid"}
                  className="h-8 w-8 text-ink"
                />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-ink">
                {feature.title}
              </h3>

              <p className="text-stone-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
