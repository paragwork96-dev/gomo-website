"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Brands from "@fortawesome/free-brands-svg-icons";
import * as Solid from "@fortawesome/free-solid-svg-icons";
import * as Regular from "@fortawesome/free-regular-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type IconType = "brands" | "solid" | "regular";

interface IconProps {
  iconName: string;
  type: IconType;
  className?: string;
}

export default function Icon({ iconName, type, className }: IconProps) {
  const iconPacks = {
    brands: Brands,
    solid: Solid,
    regular: Regular,
  };

  const icon = iconPacks[type][
    iconName as keyof (typeof iconPacks)[typeof type]
  ] as IconDefinition | undefined;

  if (!icon) {
    console.warn(`FontAwesome icon "${iconName}" not found in "${type}"`);
    return null;
  }

  return <FontAwesomeIcon icon={icon} className={className} />;
}
