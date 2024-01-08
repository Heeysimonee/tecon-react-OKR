import { useState } from "react";
import { BaseAccordion } from "../../layout/BaseAccordion";
import { InputDescriptions } from "../../layout/InputDescriptions";
import { VariablesType } from "../../enums/variablesType";
const variableName = [
  "Select Variable Name",
  "Name must include at least one letter. Only A-z, 0-9, and (_) or (-) are allowed.",
  "Label",
];
const variableType = ["Select Variable Type", "Choose the data type (number, text, image, table) for your variable."];
const variableLevel = [
  "Select Variable Level",
  "Specify the scope (document or project) for your variable.",
  "Variable level",
];

const typeList = [
  { label: "Text", value: VariablesType.text },
  { label: "Number", value: VariablesType.number },
  { label: "Image", value: VariablesType.image },
  { label: "Table", value: VariablesType.customTable },
  { label: "Sacs Table", value: VariablesType.sacsTable },
];

const levelList = [
  { label: "Document", value: "document" },
  { label: "Project", value: "project" },
];

export const VariableEditor = () => {
  const [label, setLabel] = useState("");
  const [type, setType] = useState("");
  const [level, setLevel] = useState("");
  return (
    <div className="text-slate-800">
      <h1 className="text-3xl pb-2">Variables Settings</h1>
      <p className="text-gray-500 font-light pb-5">Variables can be used while creating the project </p>
      <BaseAccordion title={"General Information"}>
        <InputDescriptions
          texts={variableName}
          updateValue={setLabel}
          value={label}
        />
        <InputDescriptions
          texts={variableType}
          updateValue={setType}
          value={type}
          inputType="select"
          list={typeList}
          title="Select Type"
        />
        <InputDescriptions
          texts={variableLevel}
          updateValue={setLevel}
          value={level}
          inputType="select"
          list={levelList}
          title="Select Level"
        />
      </BaseAccordion>
    </div>
  );
};
