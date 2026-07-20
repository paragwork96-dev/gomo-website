type StatsRowProps = {
  data: {
    heading?: string | null;
    stats: {
      id: number;
      value: number;
      suffix: string | null;
      lable: string;
    }[];
  };
};

export default function StatsRow({ data }: StatsRowProps) {
  return (
    <section className="py-5 flex flex-col items-center justify-center">
      <hr className="w-[90%] border-t-1 border-solid border-[#1E2E31] py-2" />
      <div className="container">
        {data.heading && (
          <h2 className="mb-12 text-center font-display text-display-lg">
            {data.heading}
          </h2>
        )}

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {data.stats.map((stat, index) => (
            <div key={`${stat.id || "stat"}-${index}`} className="text-center">
              <h3 className="mb-2 font-display text-6xl">
                {stat.value}
                {stat.suffix}
              </h3>

              <p className="text-stone-muted">{stat.lable}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
