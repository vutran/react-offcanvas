# React Off-Canvas

Off-canvas menus for React.

## Installation

```bash
$ npm install --save react-offcanvas
```

## Usage

### Basic Usage

```jsx
<OffCanvas
  width={300}
  transitionDuration={300}
  isMenuOpened={false}
  position={"left"}
  effect={"overlay"}
>
  <OffCanvasBody className={"my-body-class"} style={{ fontSize: "18px" }}>
    This is the canvas body.
  </OffCanvasBody>
  <OffCanvasMenu className={"my-menu-class"} style={{ fontWeight: "bold" }}>
    This is the canvas menu.
  </OffCanvasMenu>
</OffCanvas>
```

### Within An Application

You'll need to hook up your application to handle the state for toggling the menu. Check out the basic example below:

```js
"use strict";

import React, { Component } from "react";
import { OffCanvas, OffCanvasMenu, OffCanvasBody } from "react-offcanvas";

export default class App extends Component {
  componentWillMount() {
    // sets the initial state
    this.setState({
      isMenuOpened: false
    });
  }

  render() {
    return (
      <OffCanvas
        width={300}
        transitionDuration={300}
        effect={"parallax"}
        isMenuOpened={this.state.isMenuOpened}
        position={"right"}
      >
        <OffCanvasBody
          className={styles.bodyClass}
          style={{ fontSize: "30px" }}
        >
          <p>This is the main body container.</p>
          <p>
            <a href="#" onClick={this.handleClick.bind(this)}>
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
              <a href="#" onClick={this.handleClick.bind(this)}>
                Toggle Menu
              </a>
            </li>
          </ul>
        </OffCanvasMenu>
      </OffCanvas>
    );
  }

  handleClick() {
    // toggles the menu opened state
    this.setState({ isMenuOpened: !this.state.isMenuOpened });
  }
}
```

## Components

### `OffCanvas`

This is the main component you will be using to compose your body and menu.

| Prop                 | Type     | Default | Description                                          |
| :------------------- | :------- | :------ | :--------------------------------------------------- |
| `width`              | `number` | 250     | The width of the menu and off-canvas transition.     |
| `transitionDuration` | `number` | 250     | The time in ms for the transition.                   |
| `isMenuOpened`       | `bool`   | false   | Is the menu opened or not.                           |
| `position`           | `string` | "left"  | Position the menu to the "left" or "right".          |
| `effect`             | `string` | "push"  | Choose menu effect. "push", "overlay" or "parallax". |

### `OffCanvasBody`

| Prop                 | Type     | Default | Description                                      |
| :------------------- | :------- | :------ | :----------------------------------------------- |
| `width`              | `number` | 250     | The width of the menu and off-canvas transition. |
| `transitionDuration` | `number` | 250     | The time in ms for the transition.               |
| `isMenuOpened`       | `bool`   | false   | Is the menu opened or not.                       |
| `position`           | `string` | "left"  | Position the menu to the "left" or "right".      |
| `className`          | `string` |         | Custom className for the element.                |
| `style`              | `object` |         | CSS style object for the element.                |

### `OffCanvasMenu`

| Prop                 | Type     | Default | Description                                      |
| :------------------- | :------- | :------ | :----------------------------------------------- |
| `width`              | `number` | 250     | The width of the menu and off-canvas transition. |
| `transitionDuration` | `number` | 250     | The time in ms for the transition.               |
| `isMenuOpened`       | `bool`   | false   | Is the menu opened or not.                       |
| `position`           | `string` | "left"  | Position the menu to the "left" or "right".      |
| `className`          | `string` |         | Custom className for the element.                |
| `style`              | `object` |         | CSS style object for the element.                |
