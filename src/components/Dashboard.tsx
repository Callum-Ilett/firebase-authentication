import { Button, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase";

const Dashboard = () => {
  const currentUser = useAuth();
  const history = useHistory();

  const handleLogout: React.MouseEventHandler = async (e) => {
    try {
      await auth.signOut();
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>

          <strong>Email:</strong>
          <span> {currentUser?.email}</span>

          <Button className="mt-3" as={Link} to="/update-profile" block>
            Update Profile
          </Button>
        </Card.Body>
      </Card>
      <div className="text-center mt-2">
        <Button onClick={handleLogout} variant="link">
          Logout
        </Button>
      </div>
    </>
  );
};

export default Dashboard;
