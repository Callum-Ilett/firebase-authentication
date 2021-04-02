import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { AuthContext } from "../contexts/AuthContext";
import { auth, UserInterface } from "../firebase";
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
          <Signup />
        </div>
      </Container>
    </AuthContext.Provider>
  );
};

export default App;
