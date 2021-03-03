import { Hero, Foods, FoodsByPrice } from "../../components";

import homeImage from "../../assets/hero-home.jpg";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="App">
      <Hero
        id="home"
        title="Life's too short for boring food"
        image={homeImage}
      />
      <ul className="App-main" id="home">
        <li className="App-section">
          <Foods limit={4} />
        </li>
        <li className="App-section">
          <FoodsByPrice limit={4} />
        </li>
      </ul>
    </div>
  );
}

export default LandingPage;
