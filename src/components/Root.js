import { Suspense } from 'react';

import { AppRoutes } from "../context";

const FallbackLoader = () => (
  <div style={{ textAlign: "center" }}>Chargement de l'application..</div>
);

export const Root = () => {
  return (
    <Suspense fallback={<FallbackLoader />}>
      <AppRoutes />
    </Suspense>
  );
};
