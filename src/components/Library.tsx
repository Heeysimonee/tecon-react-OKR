import React from "react";
const Table = React.lazy(() => import("./Table"));

export default function Library() {
  return (
    <>
      <div className="w-full bg-gray-800 h-[60px]">var Modyules Templates</div>
      <div className="h-[calc(100% - 60px)] py-8 px-14">
        <div>filtri</div>
        <div className="w-full border rounded-xl h-full">
          <Table />
        </div>
      </div>
    </>
  );
}
