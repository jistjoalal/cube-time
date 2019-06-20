import React from "react";

import GithubIcon from "./GithubIcon";
import InstallButton from "./InstallButton";

import "../styles/components/Title.css";

export default () => (
  <div className="title">
    <a href="/">
      <h1 className="title__text">Cube Time</h1>
    </a>
    <InstallButton />
    <a
      href="https://github.com/jistjoalal/cube-time"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubIcon />
    </a>
  </div>
);
