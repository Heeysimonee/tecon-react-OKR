import { useEffect, useState } from "react";
import LibraryMenu from "./LibraryMenu";
import { LibraryView } from "../enums/librabryView";
import { loadTableData } from "../../utils/api";
import LibraryPreview from "./LibraryPreview";
import { LibraryStatus } from "../enums/libraryStatus";
import { VariableEditor } from "./VariableCreation/VariableEditor";

const Library = () => {
  const [currentView, setCurrentView] = useState(LibraryView.variable);
  const [tableData, setTableData] = useState([]);
  const [libraryState, setLibraryState] = useState(LibraryStatus.preview);

  useEffect(() => {
    loadTableData(currentView, setTableData);
  }, [currentView]);

  return (
    <>
      <LibraryMenu
        currentView={currentView}
        setCurrentView={setCurrentView}
        libraryState={libraryState}
        setLibraryState={setLibraryState}
      />
      <div className="h-[calc(100% - 60px)] py-8 px-14">
        {libraryState === LibraryStatus.preview ? (
          <LibraryPreview
            setLibraryState={setLibraryState}
            currentView={currentView}
            tableData={tableData}
          />
        ) : (
          <VariableEditor />
        )}
      </div>
    </>
  );
};

export default Library;
