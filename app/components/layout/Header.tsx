import Link from "next/link";
import Icon from "../ui/Icon";

type NavigationLink = {
  id: number;
  label: string;
  url: string;
};

type CTA = {
  id: number;
  label: string;
  url: string;
  variant: string;
};

type HeaderProps = {
  data: {
    Logo: string;
    navigationLink: NavigationLink[];
    contactCta: CTA[];
  };
};

export default function Header({ data }: HeaderProps) {
  return (
    <header className="border-b border-border bg-cream">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-display">
          {data.Logo}
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8">
            {data.navigationLink.map((item) => {
              const href =
                item.label.trim().toLowerCase() === "food industry"
                  ? "/products"
                  : item.url;

              return (
                <li key={item.id}>
                  <Link
                    href={href}
                    className="text-sm font-medium text-stone hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          {data.contactCta.map((cta) => (
            <Link
              key={cta.id}
              href={cta.url}
              aria-label={cta.label}
              className={
                cta.variant === "icon"
                  ? "text-ink transition-colors hover:text-cream"
                  : "rounded-pill bg-ink px-5 py-2 text-sm text-cream transition-colors hover:bg-opacity-90"
              }
            >
              {cta.variant === "icon" ? (
                <Icon
                  iconName="faCartArrowDown"
                  type="solid"
                  className="h-6 w-6"
                />
              ) : (
                cta.label
              )}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
