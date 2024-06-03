"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-parse-selector";
exports.ids = ["vendor-chunks/hast-util-parse-selector"];
exports.modules = {

/***/ "(rsc)/./node_modules/hast-util-parse-selector/lib/index.js":
/*!************************************************************!*\
  !*** ./node_modules/hast-util-parse-selector/lib/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseSelector: () => (/* binding */ parseSelector)\n/* harmony export */ });\n/**\n * @typedef {import('hast').Element} Element\n * @typedef {import('hast').Properties} Properties\n */\n\n/**\n * @template {string} SimpleSelector\n *   Selector type.\n * @template {string} DefaultTagName\n *   Default tag name.\n * @typedef {(\n *   SimpleSelector extends ''\n *     ? DefaultTagName\n *     : SimpleSelector extends `${infer TagName}.${infer Rest}`\n *     ? ExtractTagName<TagName, DefaultTagName>\n *     : SimpleSelector extends `${infer TagName}#${infer Rest}`\n *     ? ExtractTagName<TagName, DefaultTagName>\n *     : SimpleSelector extends string\n *     ? SimpleSelector\n *     : DefaultTagName\n * )} ExtractTagName\n *   Extract tag name from a simple selector.\n */\n\nconst search = /[#.]/g\n\n/**\n * Create a hast element from a simple CSS selector.\n *\n * @template {string} Selector\n *   Type of selector.\n * @template {string} [DefaultTagName='div']\n *   Type of default tag name (default: `'div'`).\n * @param {Selector | null | undefined} [selector]\n *   Simple CSS selector (optional).\n *\n *   Can contain a tag name (`foo`), classes (`.bar`), and an ID (`#baz`).\n *   Multiple classes are allowed.\n *   Uses the last ID if multiple IDs are found.\n * @param {DefaultTagName | null | undefined} [defaultTagName='div']\n *   Tag name to use if `selector` does not specify one (default: `'div'`).\n * @returns {Element & {tagName: ExtractTagName<Selector, DefaultTagName>}}\n *   Built element.\n */\nfunction parseSelector(selector, defaultTagName) {\n  const value = selector || ''\n  /** @type {Properties} */\n  const props = {}\n  let start = 0\n  /** @type {string | undefined} */\n  let previous\n  /** @type {string | undefined} */\n  let tagName\n\n  while (start < value.length) {\n    search.lastIndex = start\n    const match = search.exec(value)\n    const subvalue = value.slice(start, match ? match.index : value.length)\n\n    if (subvalue) {\n      if (!previous) {\n        tagName = subvalue\n      } else if (previous === '#') {\n        props.id = subvalue\n      } else if (Array.isArray(props.className)) {\n        props.className.push(subvalue)\n      } else {\n        props.className = [subvalue]\n      }\n\n      start += subvalue.length\n    }\n\n    if (match) {\n      previous = match[0]\n      start++\n    }\n  }\n\n  return {\n    type: 'element',\n    // @ts-expect-error: tag name is parsed.\n    tagName: tagName || defaultTagName || 'div',\n    properties: props,\n    children: []\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXBhcnNlLXNlbGVjdG9yL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQSxhQUFhLHdCQUF3QjtBQUNyQyxhQUFhLDJCQUEyQjtBQUN4Qzs7QUFFQTtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsbUNBQW1DLGNBQWMsR0FBRyxXQUFXO0FBQy9EO0FBQ0EsbUNBQW1DLGNBQWMsR0FBRyxXQUFXO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0EsV0FBVyw2QkFBNkI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUNBQW1DO0FBQzlDO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCO0FBQ0E7QUFDTztBQUNQO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQSxhQUFhLG9CQUFvQjtBQUNqQztBQUNBLGFBQWEsb0JBQW9CO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmVhbWNvZGUvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLXBhcnNlLXNlbGVjdG9yL2xpYi9pbmRleC5qcz80NWZmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLkVsZW1lbnR9IEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Qcm9wZXJ0aWVzfSBQcm9wZXJ0aWVzXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUge3N0cmluZ30gU2ltcGxlU2VsZWN0b3JcbiAqICAgU2VsZWN0b3IgdHlwZS5cbiAqIEB0ZW1wbGF0ZSB7c3RyaW5nfSBEZWZhdWx0VGFnTmFtZVxuICogICBEZWZhdWx0IHRhZyBuYW1lLlxuICogQHR5cGVkZWYgeyhcbiAqICAgU2ltcGxlU2VsZWN0b3IgZXh0ZW5kcyAnJ1xuICogICAgID8gRGVmYXVsdFRhZ05hbWVcbiAqICAgICA6IFNpbXBsZVNlbGVjdG9yIGV4dGVuZHMgYCR7aW5mZXIgVGFnTmFtZX0uJHtpbmZlciBSZXN0fWBcbiAqICAgICA/IEV4dHJhY3RUYWdOYW1lPFRhZ05hbWUsIERlZmF1bHRUYWdOYW1lPlxuICogICAgIDogU2ltcGxlU2VsZWN0b3IgZXh0ZW5kcyBgJHtpbmZlciBUYWdOYW1lfSMke2luZmVyIFJlc3R9YFxuICogICAgID8gRXh0cmFjdFRhZ05hbWU8VGFnTmFtZSwgRGVmYXVsdFRhZ05hbWU+XG4gKiAgICAgOiBTaW1wbGVTZWxlY3RvciBleHRlbmRzIHN0cmluZ1xuICogICAgID8gU2ltcGxlU2VsZWN0b3JcbiAqICAgICA6IERlZmF1bHRUYWdOYW1lXG4gKiApfSBFeHRyYWN0VGFnTmFtZVxuICogICBFeHRyYWN0IHRhZyBuYW1lIGZyb20gYSBzaW1wbGUgc2VsZWN0b3IuXG4gKi9cblxuY29uc3Qgc2VhcmNoID0gL1sjLl0vZ1xuXG4vKipcbiAqIENyZWF0ZSBhIGhhc3QgZWxlbWVudCBmcm9tIGEgc2ltcGxlIENTUyBzZWxlY3Rvci5cbiAqXG4gKiBAdGVtcGxhdGUge3N0cmluZ30gU2VsZWN0b3JcbiAqICAgVHlwZSBvZiBzZWxlY3Rvci5cbiAqIEB0ZW1wbGF0ZSB7c3RyaW5nfSBbRGVmYXVsdFRhZ05hbWU9J2RpdiddXG4gKiAgIFR5cGUgb2YgZGVmYXVsdCB0YWcgbmFtZSAoZGVmYXVsdDogYCdkaXYnYCkuXG4gKiBAcGFyYW0ge1NlbGVjdG9yIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3NlbGVjdG9yXVxuICogICBTaW1wbGUgQ1NTIHNlbGVjdG9yIChvcHRpb25hbCkuXG4gKlxuICogICBDYW4gY29udGFpbiBhIHRhZyBuYW1lIChgZm9vYCksIGNsYXNzZXMgKGAuYmFyYCksIGFuZCBhbiBJRCAoYCNiYXpgKS5cbiAqICAgTXVsdGlwbGUgY2xhc3NlcyBhcmUgYWxsb3dlZC5cbiAqICAgVXNlcyB0aGUgbGFzdCBJRCBpZiBtdWx0aXBsZSBJRHMgYXJlIGZvdW5kLlxuICogQHBhcmFtIHtEZWZhdWx0VGFnTmFtZSB8IG51bGwgfCB1bmRlZmluZWR9IFtkZWZhdWx0VGFnTmFtZT0nZGl2J11cbiAqICAgVGFnIG5hbWUgdG8gdXNlIGlmIGBzZWxlY3RvcmAgZG9lcyBub3Qgc3BlY2lmeSBvbmUgKGRlZmF1bHQ6IGAnZGl2J2ApLlxuICogQHJldHVybnMge0VsZW1lbnQgJiB7dGFnTmFtZTogRXh0cmFjdFRhZ05hbWU8U2VsZWN0b3IsIERlZmF1bHRUYWdOYW1lPn19XG4gKiAgIEJ1aWx0IGVsZW1lbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVNlbGVjdG9yKHNlbGVjdG9yLCBkZWZhdWx0VGFnTmFtZSkge1xuICBjb25zdCB2YWx1ZSA9IHNlbGVjdG9yIHx8ICcnXG4gIC8qKiBAdHlwZSB7UHJvcGVydGllc30gKi9cbiAgY29uc3QgcHJvcHMgPSB7fVxuICBsZXQgc3RhcnQgPSAwXG4gIC8qKiBAdHlwZSB7c3RyaW5nIHwgdW5kZWZpbmVkfSAqL1xuICBsZXQgcHJldmlvdXNcbiAgLyoqIEB0eXBlIHtzdHJpbmcgfCB1bmRlZmluZWR9ICovXG4gIGxldCB0YWdOYW1lXG5cbiAgd2hpbGUgKHN0YXJ0IDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgc2VhcmNoLmxhc3RJbmRleCA9IHN0YXJ0XG4gICAgY29uc3QgbWF0Y2ggPSBzZWFyY2guZXhlYyh2YWx1ZSlcbiAgICBjb25zdCBzdWJ2YWx1ZSA9IHZhbHVlLnNsaWNlKHN0YXJ0LCBtYXRjaCA/IG1hdGNoLmluZGV4IDogdmFsdWUubGVuZ3RoKVxuXG4gICAgaWYgKHN1YnZhbHVlKSB7XG4gICAgICBpZiAoIXByZXZpb3VzKSB7XG4gICAgICAgIHRhZ05hbWUgPSBzdWJ2YWx1ZVxuICAgICAgfSBlbHNlIGlmIChwcmV2aW91cyA9PT0gJyMnKSB7XG4gICAgICAgIHByb3BzLmlkID0gc3VidmFsdWVcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwcm9wcy5jbGFzc05hbWUpKSB7XG4gICAgICAgIHByb3BzLmNsYXNzTmFtZS5wdXNoKHN1YnZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHMuY2xhc3NOYW1lID0gW3N1YnZhbHVlXVxuICAgICAgfVxuXG4gICAgICBzdGFydCArPSBzdWJ2YWx1ZS5sZW5ndGhcbiAgICB9XG5cbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHByZXZpb3VzID0gbWF0Y2hbMF1cbiAgICAgIHN0YXJ0KytcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiB0YWcgbmFtZSBpcyBwYXJzZWQuXG4gICAgdGFnTmFtZTogdGFnTmFtZSB8fCBkZWZhdWx0VGFnTmFtZSB8fCAnZGl2JyxcbiAgICBwcm9wZXJ0aWVzOiBwcm9wcyxcbiAgICBjaGlsZHJlbjogW11cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/hast-util-parse-selector/lib/index.js\n");

/***/ })

};
;