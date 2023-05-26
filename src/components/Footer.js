import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer>
            <a
                href="https://github.com/NateVanArendonk/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faGithubSquare} className="footer-icon" />
            </a>
            <a
                href="https://www.linkedin.com/in/nathan-vanarendonk-18329889/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
            </a>
        </footer>
    )
}
