"use strict";

const _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", { value: true });

const _components = {
  Footer: _interopRequireDefault(require("./footer")),
  Header: _interopRequireDefault(require("./header")),
  HeaderHome: _interopRequireDefault(require("./header-home")),
  HeaderMenu: _interopRequireDefault(require("./header-menu")),
  InfoArea: _interopRequireDefault(require("./info-area")),
  PageChange: _interopRequireDefault(require("./page-change")),
  Parallax: _interopRequireDefault(require("./parallax")),
  styles: _interopRequireDefault(require("./styles"))
};

Object.entries(_components).forEach(entry => {
  Object.defineProperty(exports, entry[0], {
    enumerable: true,
    get: () => entry[1].default
  });
});
