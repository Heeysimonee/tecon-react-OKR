import "./App.css";
import BaseSidebar from "./components/base/BaseSidebar";
import BaseHeader from "./components/base/BaseHeader";
import Library from "./components/library/Library";

function App() {
  return (
    <>
      <div className="w-full h-[100vh]">
        <BaseHeader />
        <div className="h-[calc(100%-70px)]">
          <div className="w-full h-full flex">
            <BaseSidebar />
            <div className="w-full bg-slate-100">
              <Library />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
