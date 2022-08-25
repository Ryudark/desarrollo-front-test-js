import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import NavBar from "../../components/navBar/NavBar";
import "./About.css";

export default function About() {
  const isLoged = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoged) {
      navigate("/login", { replace: true });
    }
  });

  return (
    <div className="fondoAbout">
      <NavBar />
      <div className="about">
        <h4>¡Hola!</h4>
        <h4>Soy Steven</h4>
        <h4>Puedes encontrarme en las siguientes páginas</h4>
        <p align="center">
          <a
            href="https://www.linkedin.com/in/steven-jaimes-galeano/"
            target="blank"
          >
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
              alt="Steven Jaimes Galeano"
              height="30"
              width="40"
            />
          </a>
          <a href="https://www.facebook.com/suteben/" target="blank">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg"
              alt="https://www.facebook.com/suteben/"
              height="30"
              width="40"
            />
          </a>
          <a
            href="https://www.instagram.com/steven_jaimes_galeano/"
            target="blank"
          >
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
              alt="@Steven_jaimes"
              height="30"
              width="40"
            />
          </a>
          <a href="https://github.com/Ryudark" target="blank">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
              alt="@Steven_jaimes"
              height="30"
              width="40"
            />
          </a>
        </p>
      </div>
    </div>
  );
}
