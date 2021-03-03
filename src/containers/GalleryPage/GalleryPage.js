import { Hero, Foods } from "../../components";

import GalleryPageImage from "../../assets/hero-gallery.jpg";
import "./GalleryPage.css";

function GalleryPage() {
  return (
    <div className="GalleryPage">
      <Hero
        id="GalleryPage"
        title="List of dishes posted on our website"
        image={GalleryPageImage}
      />
      <ul className="Gallery-main" id="gallery">
        <li className="Gallery-section">
          <Foods title="All dishes" cards={3} />
        </li>
      </ul>
    </div>
  );
}

export default GalleryPage;
