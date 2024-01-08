import { Dispatch, SetStateAction } from "react";
import { LibraryView } from "../enums/librabryView";
import { LibraryStatus } from "../enums/libraryStatus";

const menuVoices = [
  { label: "Variables", value: LibraryView.variable },
  { label: "Modules", value: LibraryView.module },
  { label: "Templates", value: LibraryView.template },
];

const LibraryMenu = ({
  currentView,
  setCurrentView,
  libraryState,
  setLibraryState,
}: {
  currentView: LibraryView;
  setCurrentView: Dispatch<SetStateAction<LibraryView>>;
  libraryState: LibraryStatus;
  setLibraryState: Dispatch<SetStateAction<LibraryStatus>>;
}) => {
  return (
    <div className={`w-full ${libraryState === LibraryStatus.preview && "border-b border-gray-300 bg-white"} h-10 `}>
      {libraryState === LibraryStatus.preview ? (
        <div className="h-full flex items-end gap-3">
          {menuVoices.map(({ label, value }) => (
            <button
              key={value}
              className="w-24 h-full flex flex-col justify-between items-center pt-2"
              onClick={() => setCurrentView(value)}
            >
              {label} {currentView === value && <div className="w-full h-2 rounded-t-md bg-orange-500"></div>}
            </button>
          ))}
        </div>
      ) : (
        <button
          className="text-orange-500 h-full flex items-center px-2"
          onClick={() => setLibraryState(LibraryStatus.preview)}
        >
          &larr; Back to library
        </button>
      )}
    </div>
  );
};

export default LibraryMenu;
