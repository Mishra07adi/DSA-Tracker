import React from "react";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import "./footer.css";
export default function Footer({ dark, setDark }) {
  return (
    <div>
      <footer
        className="footer"
        style={{ backgroundColor: dark ? "#393E46" : "" }}
      >
        <div className="d-flex bd-highlight">
          <div className="p-2 bd-highlight">
            <a href="https://github.com/AsishRaju/450-DSA">
              <h4>
                <Badge pill variant="light" className="hvr-grow">
                  <span role="img" aria-label="star" className="emojiFix">
                    ⭐
                  </span>{" "}
                  This project
                </Badge>
              </h4>
            </a>
          </div>
          <div className="p-2 bd-highlight">
            <a
              href="https://drive.google.com/file/d/1BFZu06gZ2_wQkTsuMSbbljLVhA08vOiX/view?usp=sharing"
              target="_blank"
            >
              <h4>
                <Badge pill variant="light" className="hvr-grow">
                  <span role="img" aria-label="book" className="emojiFix">
                    📚
                  </span>{" "}
                  My Resume
                </Badge>
              </h4>
            </a>
          </div>

          <div className="p-2 bd-highlight">
            <a href="https://www.linkedin.com/in/mishra07adi/" target="_blank">
              <h4>
                <Badge pill variant="light" className="hvr-grow">
                  <span role="img" aria-label="book" className="emojiFix">
                    😎
                  </span>{" "}
                  Linked In
                </Badge>
              </h4>
            </a>
          </div>

          <div className="p-2 bd-highlight">
            <a href="https://www.instagram.com/mishra07adi/" target="_blank">
              <h4>
                <Badge pill variant="light" className="hvr-grow">
                  <span role="img" aria-label="face" className="emojiFix">
                    😍
                  </span>{" "}
                  Instagram
                </Badge>
              </h4>
            </a>
          </div>

          <div className="p-2 bd-highlight">
            <a
              href="https://wa.me/+919709176622/?text=Hello Developer, "
              target="_blank"
            >
              <h4>
                <Badge pill variant="light" className="hvr-grow">
                  <span role="img" aria-label="face" className="emojiFix">
                    👦
                  </span>{" "}
                  WhatsApp
                </Badge>
              </h4>
            </a>
          </div>

          <div className="ml-auto p-2 bd-highlight footer-toggle">
            <h4>
              {/* toggle dark mode */}
              <Badge
                pill
                variant="light"
                className="hvr-grow"
                onClick={() => {
                  setDark(!dark);
                  window.localStorage["isDark"] = !dark;
                }}
                style={{ cursor: "pointer" }}
              >
                {dark ? (
                  <span role="img" aria-label="sun-emoji" className="emojiFix">
                    ☀️
                  </span>
                ) : (
                  <span role="img" aria-label="moon-emoji" className="emojiFix">
                    🌙
                  </span>
                )}
              </Badge>{" "}
              <Link to="/about">
                <Badge pill variant="light" className="hvr-grow">
                  About{" "}
                  <span
                    role="img"
                    aria-label="face-with-monocole"
                    className="emojiFix"
                  >
                    🧐
                  </span>
                </Badge>
              </Link>
            </h4>
          </div>
        </div>
      </footer>
    </div>
  );
}
