import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { auth, UserInterface } from "../firebase";
import Dashboard from "./Dashboard";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Signup from "./Signup";

const App = () => {
  const [currentUser, setCurrentUser] = useState<UserInterface | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setCurrentUser(user));

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>
      <Container className="d-flex min-vh-100 align-items-center justify-content-center">
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <BrowserRouter>
            <Switch>
              <PrivateRoute path="/" component={Dashboard} exact />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </BrowserRouter>
        </div>
      </Container>
    </AuthContext.Provider>
  );
};

export default App;
