import React from 'react';
import { IntlProvider } from 'react-intl';
import moment from "moment";
moment.locale("fr");

import { useGlobalState } from "./state";

export const lang = navigator.language.split(/[-_]/)[0];

export const LocaleProvider = ({ children }) => {
  const { state } = useGlobalState();

  return (
    <IntlProvider locale={state.locale} messages={{}}>
      {children}
    </IntlProvider>
  );
};
