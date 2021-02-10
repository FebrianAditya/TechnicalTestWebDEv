import './App.css';
import { Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/index"
import { LoginPage, RgisterPage, TicketPage, OverviewPage } from "./pages"

function App() {

  return (
    <Provider store={ store }>
      <Switch>
        <Route path="/overview">
          <OverviewPage/>
        </Route>
        <Route path="/ticket">
          <TicketPage/>
        </Route>
        <Route path="/register">
          <RgisterPage/>
        </Route>
        <Route path="/">
          <LoginPage/>
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
