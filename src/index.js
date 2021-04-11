import ReactDOM from "react-dom";
import { AppProvider } from './context';

import { Root } from './components/Root';

ReactDOM.render(
  <AppProvider>
    <Root />
  </AppProvider>,
  document.getElementById('react-boilerplate-client')
);
