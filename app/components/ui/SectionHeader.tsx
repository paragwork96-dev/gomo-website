import Link from "next/link";

type SectionHeaderCta = {
  label: string;
  url: string;
};

type SectionHeaderProps = {
  eyebrow?: string | null;
  title?: string | null;
  description?: string | null;
  cta?: SectionHeaderCta | null;
  className?: string;
  contentClassName?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  ctaClassName?: string;
  variant?: "default" | "simple";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  cta,
  className,
  contentClassName,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
  ctaClassName,
  variant = "default",
}: SectionHeaderProps) {
  const rootClassName =
    className ??
    (variant === "simple"
      ? "mb-12 text-center"
      : "mb-16 flex flex-col gap-6 text-center md:flex-row md:items-end md:justify-center");

  const contentWrapperClassName =
    contentClassName ?? (variant === "simple" ? "max-w-3xl" : "max-w-3xl");

  if (variant === "simple") {
    return (
      <div className={rootClassName}>
        {title && <h2 className={titleClassName}>{title}</h2>}

        {description && <p className={descriptionClassName}>{description}</p>}
      </div>
    );
  }

  return (
    <div className={rootClassName}>
      <div className={contentWrapperClassName}>
        {eyebrow && (
          <p
            className={
              eyebrowClassName ??
              "mb-3 text-sm font-display uppercase tracking-wider text-stone-500"
            }
          >
            {eyebrow}
          </p>
        )}

        {title && (
          <h2
            className={
              titleClassName ??
              "text-2xl font-display tracking-tight text-stone-900 md:text-2xl"
            }
          >
            {title}
          </h2>
        )}

        {description && <p className={descriptionClassName}>{description}</p>}
      </div>

      {cta && (
        <Link
          href={cta.url}
          className={
            ctaClassName ??
            "inline-block self-start rounded-full border border-stone-800 px-6 py-3 text-sm font-medium transition hover:bg-stone-800 hover:text-white"
          }
        >
          {cta.label}
        </Link>
      )}
    </div>
  );
}
