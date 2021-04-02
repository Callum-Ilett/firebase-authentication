import { useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const ForgotPassword = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: { email: string }) => {
    const { email } = data;
    try {
      await auth.sendPasswordResetEmail(email);
      setMessage("Check your inbox for further instructions");
    } catch (error) {
      console.log(error);
      setError(true);
      setMessage("Error resetting password");
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {message && (
            <Alert variant={error ? "danger" : "success"}>{message}</Alert>
          )}

          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control {...register("email")} type="email" required />
            </Form.Group>

            <Button type="submit" block>
              Reset Password
            </Button>
          </Form>

          <div className="text-center mt-3">
            <Link to="/login">login</Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ForgotPassword;
