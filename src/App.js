import CalendarData from "./LandingPage/data/CalendarData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import MetaDecoratorEn from "./MetaDecorator/MetaDecoratorEn";
import MetaDecoratorKa from "./MetaDecorator/MetaDecoratorKa";
import {HelmetProvider } from 'react-helmet-async';

function App() {
  let curUrl = window.location.pathname;
  return (
    <HelmetProvider>
    <Provider store={store}>
      {curUrl === "/en" ? <MetaDecoratorEn /> : <MetaDecoratorKa />}
      <Router>
        <Routes>
          <Route path="/" element={<CalendarData />}>
            <Route index element={<CalendarData />} />
            <Route path=":lang" element={<CalendarData />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
    </HelmetProvider>
  );
}

export default App;
