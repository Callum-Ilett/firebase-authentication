import { useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const [error, setError] = useState("");

  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FormData) => {
    const { email, password } = data;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      console.log(error);
      setError("Email or password is incorrect");
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control {...register("email")} type="email" required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                {...register("password")}
                type="password"
                required
              />
            </Form.Group>

            <Button type="submit" block>
              Login
            </Button>
          </Form>

          <div className="text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="text-center mt-2">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};

export default Login;
