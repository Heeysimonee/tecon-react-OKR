import { Dispatch, SetStateAction, useState } from "react";

export const BaseDropdown = <T,>({
  value,
  updateValue,
  list,
  title,
}: {
  value: string;
  updateValue: Dispatch<SetStateAction<T>>;
  list: { label: string; value: string }[];
  title: string;
}) => {
  const [showList, setShowList] = useState(false);

  const getArrow = () => {
    return showList ? <>&uarr;</> : <>&darr;</>;
  };

  const onSelectedValue = (value: string) => {
    setShowList(false);
    updateValue(value);
  };
  return (
    <div className="relative">
      <button
        className=" w-full border border-gray-300 rounded-md bg-white p-2 text-sm flex justify-between"
        onClick={() => setShowList((state) => !state)}
      >
        {value.trim().length ? list.find((el) => el.value = value)?.label : title}
        <span>{getArrow()}</span>
      </button>

      {showList && (
        <div className="absolute left-0 top-12 w-full bg-white z-50 rounded-md flex flex-col gap-1 border border-gra-300">
          {list.map(({ value, label }) => (
            <button
              className="border-b border-gray-300 last:border-none py-1 text-sm hover:bg-slate-50"
              key={value}
              onClick={() => onSelectedValue(value)}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
