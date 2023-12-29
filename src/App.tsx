import "./App.css";
import BaseSidebar from "./components/BaseSidebar";
import BaseHeader from "./components/BaseHeader";
import Library from "./components/Library";

function App() {
  return (
    <>
      <div className="w-full h-[100vh] bg-red-500">
        <BaseHeader />
        <div className="bg-green-500 h-[calc(100%-70px)]">
          <div className="w-full h-full flex">
            <BaseSidebar />
            <div className="w-11/12 bg-white">
              <Library/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
