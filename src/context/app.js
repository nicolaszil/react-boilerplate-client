import { GlobalStateProvider } from "./state";
import { LocaleProvider } from "./locale";
import { QueryProvider } from "./query";
import { ThemeProvider } from "./theme";
import { RouterProvider } from "./router";
import { ErrorCatcher } from "./error";

export const AppProvider = ({ children }) => {
  return (
    <GlobalStateProvider>
      <LocaleProvider>
        <QueryProvider>
          <ThemeProvider>
            <RouterProvider>
              <ErrorCatcher>{children}</ErrorCatcher>
            </RouterProvider>
          </ThemeProvider>
        </QueryProvider>
      </LocaleProvider>
    </GlobalStateProvider>
  );
};
