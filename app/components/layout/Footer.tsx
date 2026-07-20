import Link from "next/link";
import Icon from "../ui/Icon";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

type FooterProps = {
  data: {
    heading: string;
    email: string | null;
    footerMenu: {
      id: number;
      heading: string;
      navigationLink: {
        id: number;
        label: string;
        url: string;
      }[];
    }[];
    socailLinks: {
      id: number;
      socialIcon: string;
      iconType: "brands" | "solid" | "regular";
      socialUrl: string | null;
    }[];
    certificationLogo: {
      id: number;
      url: string;
      alternativeText: string | null;
      width: number;
      height: number;
    }[];
  };
};

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="flex py-16 gap-10 py-0 px-4">
        {/* Footer Menu */}
        <div className="mb-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {data.footerMenu.map((menu) => (
            <div key={menu.id}>
              <h3 className="mb-4 text-lg font-semibold">{menu.heading}</h3>

              <ul className="space-y-3">
                {menu.navigationLink.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.url}
                      className="text-stone-muted transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mb-16 max-w-lg">
          <h2 className="mb-6 text-4xl font-display">{data.heading}</h2>

          <form className="flex max-w-lg items-center gap-4">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 rounded-pill border border-border-dark bg-transparent px-6 py-3 text-cream placeholder:text-stone-muted focus:outline-none"
            />

            <button
              type="submit"
              className="rounded-pill bg-cream px-6 py-3 font-medium text-ink"
            >
              Subscribe
            </button>
          </form>

          {/* Bottom */}
          <div className="flex flex-col gap-8 border-t border-border-dark pt-8 md:flex-row md:items-center md:justify-between">
            {/* Certification Logos */}
            <div className="flex items-center gap-4">
              {data.certificationLogo.map((logo) => (
                <img
                  key={logo.id}
                  src={`${STRAPI_URL}${logo.url}`}
                  alt={logo.alternativeText ?? ""}
                  width={logo.width}
                  height={logo.height}
                  className="h-12 w-auto object-contain"
                />
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {data.socailLinks.map((item) => (
                <Link
                  key={item.id}
                  href={item.socialUrl ?? "#"}
                  aria-label={item.socialIcon}
                  className="capitalize text-stone-muted transition-colors hover:text-cream"
                >
                  <Icon
                    iconName={item.socialIcon}
                    type={"brands"}
                    className="h-5 w-5"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
