import IconLibrary from "../icons/IconLibrary";
import IconPlayGround from "../icons/IconPlayground";
import IconProject from "../icons/IconProject";

const menuVoice = [
  { icon: <IconProject />, value: "hub" },
  { icon: <IconLibrary />, value: "library" },
  { icon: <IconPlayGround />, value: "playground" },
];

export default function BaseSidebar() {
  return (
    <div className=" w-28 h-full bg-white text-slate-800 border-r border-gray-300 flex flex-col items-center py-10 gap-5">
      {menuVoice.map((voice) => (
        <button className="p-2" key={voice.value}>
          <div className="h-6 w-6 stroke-gray-400 hover:stroke-orange-500">{voice.icon}</div>
        </button>
      ))}
    </div>
  );
}
