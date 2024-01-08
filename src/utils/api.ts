import { Dispatch, SetStateAction } from "react";
import { LibraryView } from "../components/enums/librabryView";

export const getVariables = async () => {
  const { variables } = await (await fetch("/api/variables")).json();
  const { sacsVariables } = await (await fetch("/api/sacsVariables")).json();
  return [...variables, ...sacsVariables];
};

export const getModules = async () => {
  const { modules } = await (await fetch("/api/modules")).json();
  return modules;
};

export const getTemplates = async () => {
  const { templates } = await (await fetch("/api/templates")).json();
  return templates.slice(0, 12);
};

export const loadTableData = async <T>(currentView: LibraryView, setTableData: Dispatch<SetStateAction<T>>) => {
  switch (currentView) {
    case LibraryView.variable: {
      const variables = await getVariables();
      setTableData(variables);
      break;
    }
    case LibraryView.module: {
      const modules = await getModules();
      setTableData(modules);
      break;
    }
    case LibraryView.template: {
      const templates = await getTemplates();
      setTableData(templates);
      break;
    }
  }
};
