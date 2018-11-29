const DomNodeCollection = require("./dom_node_collection.js");

function $l (selector, ...otherArgs) {
  let htmlElements = [];

  if (typeof selector === "string") {
    const nodes = document.querySelectorAll(selector);
    console.dir(nodes);
    const nodesList = Array.from(nodes);
    console.dir(nodesList);
    return new DomNodeCollection(nodesList);
  } else if (selector instanceof HTMLElement) {
    htmlElements.push(selector);
    return new DomNodeCollection(htmlElements);
  }
}

window.$l = $l;
