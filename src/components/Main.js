import React from "react"
import photo from "../images/headshot.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Main() {
    return (
        <div>
            <header>
                <img src={photo} className="photo"></img>
            </header>
            <div className="main-name">
                Nathan VanArendonk
            </div>
            <div className="main-job">
                Software Engineer
                  <FontAwesomeIcon icon={["far", "coffee"]} />
            </div>
            <div className="main-location">
                Bellingham, WA
            </div>
            <div className="main--buttons">
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
                        GitHub
                    </button>
                </a>
            </div>
        </div>
    )
}
