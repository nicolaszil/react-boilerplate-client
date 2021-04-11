import React from "react";
import { createOvermind } from "overmind";
import { createHook, Provider as OvermindProvider } from "overmind-react";

import { lang } from "./locale";

const initialState = {
  previousPath: undefined,
  locale: lang,
};

const actions = {
  setPreviousPath: ({ state }, path) => {
    state.previousPath = path;
  },
};

const overmind = createOvermind( { state: initialState, actions }, { devtools: false });

export const useGlobalState = createHook();

export const GlobalStateProvider = ({ children }) => {
  return <OvermindProvider value={overmind}>{children}</OvermindProvider>;
};
