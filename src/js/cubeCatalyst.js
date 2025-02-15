const $$ = (selector, parent = document) => {
  return parent.querySelectorAll(selector);
}

const $ = (selector, parent) => {
  const node = parent || document;
  return node.querySelector(selector);
}


var btn = $('#ccTest');
