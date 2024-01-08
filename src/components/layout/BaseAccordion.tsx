import React, { useState } from "react";

export const BaseAccordion = ({
  title,
  children,
  defaultState = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultState?: boolean;
}) => {
  const [showChildren, setshowChildren] = useState(defaultState);

  const getArrow = () => {
    return showChildren ? <>&darr;</> : <>&uarr;</>;
  };
  return (
    <div className="border border-gray-300 w-full rounded-md">
      <button
        className="h-12 bg-blue-100 flex items-center px-5 justify-between w-full"
        onClick={() => setshowChildren((state) => !state)}
      >
        <h1 className="text-2xl text-slate-800">{title}</h1> <span className="text-xl">{getArrow()}</span>
      </button>
      {showChildren && <div className="p-5">{children} </div>}
    </div>
  );
};
