class DomNodeCollection {
  constructor(htmlElements) {
    this.els = htmlElements;
  }

  html (string) {
    if (string) {
      for (var i = 0; i < this.els.length; i++) {
        this.els[i].innerHTML = string;
      }
    } else {
      return this.els[0].innerHTML;
    }
  }


  empty () {
    for (var i = 0; i < this.els.length; i++) {
      this.els[i].innerHTML = "";
    }
  }

  append (...elements) {
    // console.log("WE are in append!");
    console.dir(this.els);
    for (var i = 0; i < elements.length; i++) {
      this.els.push(elements[i]);
    }
    console.dir(this.els);
  }

  attr (name, value) {
    // let attr = Array.from(this.attributes);
    this.els.forEach( (el) => {
      el.setAttribute(name, value);
    });
    // console.log(attr);
  }

  addClass (name, value) {
    this.els.forEach( (el) => {
      el.attr(name, value);
    });
  }

  removeClass (name, value = "") {
    this.els.forEach( (el) => {
      el.attr(name, value);
    });
  }

  children () {
    let childNodes = [];
    for (var i = 0; i < this.els.length; i++) {
      if (this.els[i].children === null) {
        continue;
      } else {
        childNodes.push(this.els[i].children);
      }
    }

    return new DomNodeCollection(childNodes);
  }

  parent () {
    let parentNodes = [];
    for (var i = 0; i < this.els.length; i++) {
      if (this.els[i].parentNode === null) {
        continue;
      } else {
        parentNodes.push(this.els[i].parentNode);
      }
    }

    return new DomNodeCollection(parentNodes);
  }

  find (selector) {
    let select = document.querySelectorAll(selector);
    let selectedArray = Array.from(select);
    return new DomNodeCollection(selectedArray);
  }

  remove () {
    this.empty();
    for (var i = 0; i < this.els.length; i++) {
      this.els = [];
    }
  }
}

module.exports = DomNodeCollection;

// let body = $l("body");
// body.append("<h1> Hello </h1>");
