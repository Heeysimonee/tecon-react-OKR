import React, { Dispatch, SetStateAction } from "react";
import { BaseDropdown } from "./dropdown/BaseDropdown";

export const InputDescriptions = ({
  inputType = "text",
  texts,
  updateValue,
  value,
  title,
  list,
}: {
  inputType?: string;
  texts: string[];
  updateValue: Dispatch<SetStateAction<string>>;
  value: string;
  title?: string;
  list?: { label: string; value: string }[];
}) => {
  return (
    <div className="flex text-slate-800 my-5">
      <div className=" w-2/6 bg-red">
        <h1 className="text-xl">{texts[0]}</h1>
        <p className="py-2 text-sm">{texts[1]}</p>
      </div>
      <div className="w-4/6 flex justify-center items-center">
        {inputType === "text" ? (
          <div className="w-3/6 flex flex-col items-center">
            <p className="text-sm w-full">{texts[2]}</p>
            <input
              value={value}
              type="text"
              className="focus:outline-none rounded-md border border-gray-300 py-2 text-sm pl-1 w-full"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateValue(e.target.value)}
            />
          </div>
        ) : (
          <div className="w-3/6">
            <BaseDropdown
              value={value}
              updateValue={updateValue}
              list={list!}
              title={title!}
            />
          </div>
        )}
      </div>
    </div>
  );
};
