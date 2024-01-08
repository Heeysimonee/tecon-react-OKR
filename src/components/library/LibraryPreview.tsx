import React, { Dispatch, SetStateAction } from "react";
import SearchBox from "../layout/SearchBox";
import { LibraryStatus } from "../enums/libraryStatus";
import { LibraryView } from "../enums/librabryView";
import { TableData } from "../../interfaces/TableData";
const Table = React.lazy(() => import("./Table"));

const LibraryPreview = ({
  currentView,
  tableData,
  setLibraryState,
}: {
  currentView: LibraryView;
  tableData: TableData[];
  setLibraryState: Dispatch<SetStateAction<LibraryStatus>>;
}) => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <SearchBox />{" "}
        <button
          className="bg-orange-500 text-white rounded-md p-2"
          onClick={() => setLibraryState(LibraryStatus.edit)}
        >
          {" "}
          Create {currentView}
        </button>
      </div>
      <div className="w-full border rounded-xl h-full">
        <Table
          tableData={tableData}
          currentView={currentView}
        />
      </div>
    </>
  );
};

export default LibraryPreview;
