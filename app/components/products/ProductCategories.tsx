import React, { useId } from "react";

type Props = {
  data: {
    allCategories: {
      category: string;
      dropdowns: {
        label: string;
        options: {
          label: string;
          value: string;
          selected: boolean;
        }[];
      }[];
    }[];
  };
};

export default function ProductCategories({ data }: Props) {
  // Generates a stable, unique string prefix for this specific component instance
  const instanceId = useId();

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center gap-6">
          {data.allCategories.map((item, categoryIndex) => (
            <div
              key={`${instanceId}-cat-${categoryIndex}`}
              className="flex items-center gap-3"
            >
              <button>{item.category}</button>

              {item.dropdowns?.map((dropdown, dropdownIndex) => {
                // Pre-calculate selection to keep the JSX clean
                const defaultSelectValue =
                  dropdown.options.find((o) => o.selected)?.value ?? "";

                return (
                  <select
                    key={`${instanceId}-dd-${categoryIndex}-${dropdownIndex}`}
                    defaultValue={defaultSelectValue}
                  >
                    {dropdown.options.length === 0 ? (
                      <option
                        key={`${instanceId}-empty-${categoryIndex}-${dropdownIndex}`}
                        value=""
                      >
                        {dropdown.label}
                      </option>
                    ) : (
                      dropdown.options.map((option, optionIndex) => (
                        <option
                          /* Combine global ID, hierarchy index, and loop index to strictly enforce uniqueness */
                          key={`${instanceId}-opt-${categoryIndex}-${dropdownIndex}-${optionIndex}`}
                          value={option.value}
                        >
                          {option.label}
                        </option>
                      ))
                    )}
                  </select>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
