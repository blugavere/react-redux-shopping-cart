"use strict";

exports.__esModule = true;
exports.only = only;
exports.except = except;
function only(item, items) {
  if (item) {
    return items.filter(function (i) {
      return i.id === item.id;
    })[0];
  }
  return items;
}

function except(item, items) {
  if (item) {
    return items.filter(function (i) {
      return i.id !== item.id;
    });
  }
  return items;
}