"use strict";

import React, { Component } from "react";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";

import styles from "./styles.css";

export default class App extends Component {
  state = {
    isMenuOpened: false,
  }

  toggle = () => {
    this.setState(state => ({ isMenuOpened: !state.isMenuOpened }));
  }

  render() {
    return (
      <OffCanvas
        width={300}
        height={300}
        transitionDuration={300}
        isMenuOpened={this.state.isMenuOpened}
        position={"top"}
        effect={"parallax"}
      >
        <OffCanvasBody
          className={styles.bodyClass}
          style={{ fontSize: "30px" }}
        >
          <p>This is the main body container.</p>
          <p>
            <a href="#" onClick={this.toggle}>
              Click here
            </a>{" "}
            to toggle the menu.
          </p>
        </OffCanvasBody>
        <OffCanvasMenu className={styles.menuClass}>
          <p>Placeholder content.</p>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
            <li>Link 5</li>
            <li>
              <a href="#" onClick={this.toggle}>
                Toggle Menu
              </a>
            </li>
          </ul>
        </OffCanvasMenu>
      </OffCanvas>
    );
  }
}
