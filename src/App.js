import CalendarData from "./LandingPage/data/CalendarData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import MetaDecoratorEn from "./MetaDecorator/MetaDecoratorEn";
import MetaDecoratorKa from "./MetaDecorator/MetaDecoratorKa";
import { HelmetProvider } from 'react-helmet-async';
import Census from "./Census/Census";
import PageNotFound from "./PageNotFound/PageNotFound";

function App() {
  let curUrl = window.location.pathname;
  return (
    <HelmetProvider>
      <Provider store={store}>
        {curUrl === "/en" ? <MetaDecoratorEn /> : <MetaDecoratorKa />}
        <Router>
          <Routes>
            <Route path="/">
              <Route index element={<CalendarData />} />
              <Route path=":lang/">
                <Route index element={<CalendarData />} />
                <Route path="census" element={<Census />} />
              </Route>
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
