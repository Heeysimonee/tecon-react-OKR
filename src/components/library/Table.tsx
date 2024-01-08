import IconFile from "../icons/IconFile";
import IconDelete from "../icons/IconDelete";
import IconEdit from "../icons/IconEdit";
import { LibraryView } from "../enums/librabryView";
import { TableData } from "../../interfaces/TableData";

export default function Table({ tableData, currentView }: { tableData: TableData[]; currentView: LibraryView }) {
  let tableHead = ["VARIABLE NAME", "TYPE", "LEVEL", "STATUS", "CREATED BY", "DATE ADDED", "LAST UPDATED"];
  currentView === LibraryView.variable
    ? null
    : (tableHead = [
        `${currentView === LibraryView.module ? "MODULE NAME" : "TEMPLATE NAME"}`,
        "TYPE",
        "CREATED BY",
        "DATE ADDED",
        "LAST UPDATED",
      ]);

  const getStatus = (status: string) => {
    return (
      <div
        className={`w-full h-full ${
          status === "draft" ? "bg-blue-100" : "bg-green-100"
        } flex justify-center items-center rounded-md gap-1 ${
          status === "draft" ? "text-blue-500" : "text-green-500"
        } py-1`}
      >
        <span>&#9679;</span> {status.toUpperCase()}
      </div>
    );
  };

  return (
    <table className="w-full text-sm text-slate-900">
      <thead>
        <tr>
          {tableHead.map((name) => (
            <th
              key={name}
              className="p-3 bg-gray-300 first:rounded-tl-md"
            >
              {name}
            </th>
          ))}
          <th className="bg-gray-300 rounded-tr-md"></th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(({ id, name, type, level, status, created_by, updated_at, created_at }: TableData) => (
          <tr key={id + name}>
            <td className="p-3">
              <div className="flex items-center gap-3">
                <div className="h-[30px] aspect-square bg-blue-300 rounded-full flex justify-center items-center">
                  <span className="fill-blue-800 h-5 w-5">
                    <IconFile />
                  </span>
                </div>
                {name}
              </div>
            </td>
            <td className="p-3 text-center">{type}</td>
            {currentView === LibraryView.variable && <td className="p-3 text-center">{level || "DOCUMENT"}</td>}
            {status && <td className="p-3">{getStatus(status.toLowerCase())}</td>}
            <td className="p-3 text-center">{created_by.name}</td>
            <td className="p-3 text-center">{new Date(created_at).toLocaleDateString()}</td>
            <td className="p-3 text-center">{new Date(updated_at).toLocaleDateString()}</td>
            <td className="p-3 flex justify-center">
              <div className="flex w-3/4 justify-between">
                <button className="stroke-gray-400 w-5 h-5">
                  <span>
                    <IconEdit />
                  </span>
                </button>
                <button className="stroke-red-500 w-5 h-5">
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
