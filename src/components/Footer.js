import React from "react"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Footer() {
    return (
        <footer>
            <a
                href="https://github.com/xdelmo"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faGithub} className="info--icon" />
            </a>
            <a
                href="https://www.linkedin.com/in/emanueledelmonte/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faLinkedin} className="info--icon" />
            </a>
        </footer>
    )
}
