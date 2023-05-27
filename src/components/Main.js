import React from "react"
import photo from "../images/headshot.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Main() {
    return (
    <div className="info">
      <img className="info--photo" src={photo} alt="emanuele del monte" />
      <h1 className="info--fullname">Nathan VanArendonk</h1>
      <h5 className="info--role">Software Engineer</h5>
      <p className="info--website">
        <a
          className="info--websiteLink"
          href="https://www.emanueledelmonte.it"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bellingham, WA
        </a>
      </p>
      <div className="info--buttons">
        <address>
          <a href="mailto:nathan.vanarendonk@gmail.com">
            {" "}
            <button className="button button--email">
              <FontAwesomeIcon icon={faEnvelope} className="info--icon" />
              Email
            </button>
          </a>
        </address>
        <a
          href="https://github.com/NateVanArendonk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button button--github">
            <FontAwesomeIcon icon={faGithub} className="info--icon" />
            Github
          </button>
        </a>
      </div>
    </div>
    )
}
