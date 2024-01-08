import IconSearch from "../icons/IconSearch";

const SearchBox = () => {
  return (
    <div className="rounded-md border border-gray-400 w-64 overflow-hidden bg-white flex items-center justify-between pr-2">
      <input
        type="text"
        className="focus:outline-none p-1 w-5/6 text-sm text-slate-800"
      />
      <button className="h-5 w-5 stroke-gray-400">
        <IconSearch />
      </button>
    </div>
  );
};

export default SearchBox;
