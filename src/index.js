// import module
import DomJsonTree from "dom-json-tree";
import json from "./sample.json";

const app = document.getElementById("app");

const vis = new DomJsonTree(json, app, {
  colors: {
    key: "#008080",
    type: "#546778",
    typeNumber: "#000080",
    typeString: "#dd1144",
    typeBoolean: "#000080"
  }
});

vis.render();
