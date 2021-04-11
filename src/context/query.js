import React from 'react';
import { ReactQueryConfigProvider } from 'react-query';

const queryConfig = {
  queries: { refetchOnWindowFocus: false },
};

export const QueryProvider = ({ children }) => (
  <ReactQueryConfigProvider config={queryConfig}>{children}</ReactQueryConfigProvider>
);
