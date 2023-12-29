import React from "react";
import IconFile from "./icons/IconFile";
import IconDelete from "./icons/IconDelete";
import IconEdit from "./icons/IconEdit";

const tableHead = ["VARIABLE NAME", "TYPE", "LEVEL", "STATUS", "CREATED BY", "DATE ADDED", "LAST UPDATED"];

export default function Table() {
  const getStatus = (status: string) => {
    switch (status) {
      case "draft":
        return (
          <div className="w-full h-full bg-blue-100 flex justify-center items-center rounded-md gap-1 text-blue-500 py-1">
            <span>&#9679;</span> Draft
          </div>
        );
    }
  };
  return (
    <table className="w-full text-sm text-slate-900">
      <thead>
        <tr>
          {tableHead.map((name) => (
            <th className="p-3 bg-gray-300 first:rounded-tl-md">{name}</th>
          ))}
          <th className="bg-gray-300 rounded-tr-md"></th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
          <tr>
            <td className="p-3">
              <div className="flex items-center gap-3">
                <div className="h-[30px] aspect-square bg-blue-300 rounded-full flex justify-center items-center">
                  <span className="fill-blue-800 h-5 w-5">
                    <IconFile />
                  </span>
                </div>
                SACS_Table_Cyber
              </div>
            </td>
            <td className="p-3 text-center">SACS_TABLE</td>
            <td className="p-3 text-center">DOCUMENT</td>
            <td className="p-3">{getStatus("draft")}</td>
            <td className="p-3 text-center">Admin</td>
            <td className="p-3 text-center">11/12/2023</td>
            <td className="p-3 text-center">19/12/2023</td>
            <td className="p-3 flex justify-center">
              <div className="flex w-3/4 gap-2">
                <button className="fill-gray-400 w-6 h-6">
                  <IconEdit />
                </button>
                <button className="fill-red-500 w-6 h-6">
                  <IconDelete />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
