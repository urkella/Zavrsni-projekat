import { useState } from "react";
import {
  LandingPage,
  GalleryPage,
  ContactPage,
  MyListingsPage,
} from "./containers";
import { Header, Footer, Food } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Router>
        <Header setUser={setUser} isLogged={user} user={user} />
        <div className="App-content">
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/gallery">
              <GalleryPage />
            </Route>
            <Route exact path="/contact">
              <ContactPage />
            </Route>
            <Route exact path="/my-listings">
              <MyListingsPage user={user} />
            </Route>
            <Route path="/food/:slug/:id">
              <Food />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
