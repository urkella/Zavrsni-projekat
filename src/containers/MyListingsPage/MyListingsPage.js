import { Foods } from "../../components";
import { Redirect } from "react-router-dom";
import { MyListings } from "../../components";
import "./MyListingsPage.css";

function MyListingsPage(props) {
  const { user } = props;

  if (!user) {
    return <Redirect to="/" />;
  }

  const userId = user && user.id;
  return (
    <div className="MyListings">
      <ul className="MyListings-main">
        <li className="MyListings-section">
          <MyListings title="My Listings" cards={3} userId={userId} />
        </li>
      </ul>
    </div>
  );
}

export default MyListingsPage;
