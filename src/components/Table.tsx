import React from "react";

export default function Table() {
  const getStatus = (status: string) => {
    switch (status) {
      case "active":
        return (
          <div className="w-full h-full bg-green-100 flex justify-center items-center rounded-md gap-1 text-green-500">
            <span>&#9679;</span> Active
          </div>
        );
    }
  };
  return (
    <table className="w-full text-sm">
      {[1, 2, 3, 4, 5, 6, 7].map(() => (
        <tr className="flex w-full">
          <td className="w-full p-3 flex justify-center items-center gap-3">
            <div className="h-[30px] aspect-square bg-blue-300 rounded-full"></div>
            SACS_Table_Cyber
          </td>
          <td className="w-full p-3 flex justify-center items-center">
            SACS_TABLE
          </td>
          <td className="w-full p-3 flex justify-center items-center">
            {getStatus("active")}
          </td>
          <td className="w-full p-3 flex justify-center items-center">
            11/12/2023
          </td>
          <td className="w-full p-3 flex justify-center items-center">
            19/12/2023
          </td>
          <td className="w-full p-3 flex justify-center items-center">Admin</td>
          <td className="w-full p-3 flex justify-center items-center">edit</td>
          <td className="w-full p-3 flex justify-center items-center">de;</td>
        </tr>
      ))}
    </table>
  );
}
