import Image from "next/image";
import Link from "next/link";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

type Expert = {
  id: number;
  image?: {
    url: string;
    alternativeText?: string;
  };
  name: string;
  designation: string;
  about: string;
  phone: string;
  email: string;
  linkedin: string;
};

type Props = {
  data: {
    contactForm: {
      heading: string;
      name: string;
      phone: string;
      email: string;
      message?: string;
      ctaText: {
        label: string;
        url?: string;
      };
    };
    expertCard: Expert[];
  };
};

export default function ContactExpert({ data }: Props) {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
          {/* Contact Form */}

          <div className="rounded-xl bg-[#1F2D2F] p-10 text-white">
            <h2 className="mb-10 text-center font-display text-3xl">
              {data.contactForm.heading}
            </h2>

            <form className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder={data.contactForm.name}
                  className="border-b border-white/20 bg-transparent pb-3 text-sm outline-none placeholder:text-white/50"
                />

                <input
                  type="tel"
                  placeholder={data.contactForm.phone}
                  className="border-b border-white/20 bg-transparent pb-3 text-sm outline-none placeholder:text-white/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder={data.contactForm.email}
                  className="border-b border-white/20 bg-transparent pb-3 text-sm outline-none placeholder:text-white/50"
                />

                <input
                  type="text"
                  placeholder="Company name*"
                  className="border-b border-white/20 bg-transparent pb-3 text-sm outline-none placeholder:text-white/50"
                />
              </div>

              <textarea
                rows={3}
                placeholder={data.contactForm.message}
                className="w-full resize-none border-b border-white/20 bg-transparent pb-3 text-sm outline-none placeholder:text-white/50"
              />

              <button
                type="submit"
                className="rounded-full bg-white px-8 py-3 text-sm font-medium text-[#1F2D2F] transition hover:bg-stone-100"
              >
                {data.contactForm.ctaText.label}
              </button>
            </form>
          </div>

          {/* Experts */}

          <div className="rounded-xl border border-stone-300  p-6">
            <div className="grid gap-6 md:grid-cols-2">
              {data.expertCard?.map((expert) => (
                <div key={expert.id}>
                  {expert.image?.url && (
                    <img
                      src={`${STRAPI_URL}${expert.image.url}`}
                      alt={expert.image.alternativeText || expert.name}
                      width={120}
                      height={120}
                      className="mb-5 h-28 w-28 rounded object-cover"
                    />
                  )}

                  <h3 className="text-lg font-semibold text-[#1F2D2F]">
                    {expert.name}
                  </h3>

                  <p className="mb-4 text-xs uppercase tracking-wide text-stone-500">
                    {expert.designation}
                  </p>

                  <p className="mb-6 text-sm leading-6 text-stone-600">
                    {expert.about}
                  </p>

                  <div className="space-y-0 border-t border-stone-300">
                    <a
                      href={`tel:${expert.phone}`}
                      className="flex items-center justify-between border-b border-stone-300 py-3 text-sm text-[#1F2D2F] transition hover:pl-2"
                    >
                      <span>{expert.phone}</span>
                      <span>→</span>
                    </a>

                    <a
                      href={`mailto:${expert.email}`}
                      className="flex items-center justify-between border-b border-stone-300 py-3 text-sm text-[#1F2D2F] transition hover:pl-2"
                    >
                      <span>{expert.email}</span>
                      <span>→</span>
                    </a>

                    <Link
                      href={expert.linkedin}
                      target="_blank"
                      className="flex items-center justify-between py-3 text-sm font-medium text-[#1F2D2F] transition hover:pl-2"
                    >
                      <span>LinkedIn</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
