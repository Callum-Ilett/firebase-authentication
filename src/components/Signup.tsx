import { useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase";

interface FormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

const Signup = () => {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const currentUser = useAuth();

  const onSubmit = async (data: FormData) => {
    const { email, password } = data;

    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  console.log(currentUser?.email);

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group id="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control {...register("firstName")} type="text" required />
            </Form.Group>

            <Form.Group id="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control {...register("lastName")} type="text" required />
            </Form.Group>

            <Form.Group id="username">
              <Form.Label>Username</Form.Label>
              <Form.Control {...register("username")} type="text" required />
            </Form.Group>

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
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="text-center mt-2">Already have an account? Login</div>
    </>
  );
};

export default Signup;
