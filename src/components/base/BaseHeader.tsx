import IconHeader from "../icons/IconHeader";

export default function BaseHeader() {
  return (
    <div className="bg-slate-900 h-[70px] flex items-center px-5">
      <div className=" h-5/6 w-24 flex justify-between items-center border-r border-white">
        <span className="h-12 w-12">
          <IconHeader />
        </span>
      </div>
    </div>
  );
}
