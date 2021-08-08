import { CheckIcon } from "@heroicons/react/outline";

export const Card = ({
  selected,
  onChange,
  title,
  price,
  frequency,
  description,
  feature,
  cta,
}) => {
  const mode = selected ? "border-red-300 border-8" : "border-gray-400";
  return (
    <div className="mt-4 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div
        className={[
          "relative p-8 bg-white border-gray-200 rounded-2xl shadow-sm flex flex-col border-2",
          mode,
        ].join(" ")}
        selected={selected}
        onClick={onChange}
      >
        <div className="flex-1 ">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-4 flex items-baseline text-gray-900">
            <span className="text-5xl font-extrabold tracking-tight">
              €{price}
            </span>
            <span className="ml-1 text-xl font-semibold">{frequency}</span>
          </p>
          <p className="mt-6 text-gray-500">{description}</p>
          {/* Feature list */}
          <ul role="list" className="mt-6 space-y-6">
            <li className="flex">
              <CheckIcon
                className="flex-shrink-0 w-6 h-6 text-yellow-500"
                aria-hidden="true"
              />
              <span className="ml-3 text-gray-500">{feature}</span>
            </li>
          </ul>
        </div>
        <div>{cta}</div>
      </div>
    </div>
  );
};
