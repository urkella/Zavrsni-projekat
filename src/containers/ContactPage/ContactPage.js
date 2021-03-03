import { GoogleMap, Image } from "../../components";

import phoneImage from "./images/phone.png";
import emailImage from "./images/email.png";
import addressImage from "./images/address.png";

import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="Contact">
      <GoogleMap className="Contact-map" />
      <div className="Contact-main">
        <h1 className="Title">Contact</h1>
        <ul className="Contact-info">
          <li>
            <Image src={phoneImage} alt="Phone" />
            Phone: +381 65 33 23 33
          </li>
          <li>
            <Image src={emailImage} alt="Email" />
            Email: support@diamond.com
          </li>
          <li>
            <Image src={addressImage} alt="Address" />
            Address: 510 Main St, East York, ON M4C 4Y2, Canada
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
