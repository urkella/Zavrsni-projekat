import { Image } from "../../components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import "./Hero.css";

import chevron from "./images/chevron.svg";

function Hero(props) {
  const { id, title, image } = props;
  const history = useHistory();

  const isHomepage = history.location.pathname === "/";
  return (
    <div className="Hero">
      <div
        className="Hero-bg"
        style={{
          backgroundImage: `linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.5) 0%,
            rgba(0, 0, 0, 0.6) 100%
          ),
          url(${image})`,
        }}
      >
        <div className="Hero-content">
          <h2 className="Hero-title">{title}</h2>
          {isHomepage ? (
            <Link className="Hero-button" to="/gallery">
              Gallery
            </Link>
          ) : null}
        </div>
        <a href={`#${id}`}>
          <Image className="Chevron" src={chevron} alt="Scroll down" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
