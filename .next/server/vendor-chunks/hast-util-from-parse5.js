"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-from-parse5";
exports.ids = ["vendor-chunks/hast-util-from-parse5"];
exports.modules = {

/***/ "(rsc)/./node_modules/hast-util-from-parse5/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/hast-util-from-parse5/lib/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromParse5: () => (/* binding */ fromParse5)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devlop */ \"(rsc)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var hastscript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hastscript */ \"(rsc)/./node_modules/hastscript/lib/index.js\");\n/* harmony import */ var property_information__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! property-information */ \"(rsc)/./node_modules/property-information/index.js\");\n/* harmony import */ var property_information__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! property-information */ \"(rsc)/./node_modules/property-information/lib/find.js\");\n/* harmony import */ var vfile_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vfile-location */ \"(rsc)/./node_modules/vfile-location/lib/index.js\");\n/* harmony import */ var web_namespaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web-namespaces */ \"(rsc)/./node_modules/web-namespaces/index.js\");\n/**\n * @typedef {import('hast').Element} Element\n * @typedef {import('hast').ElementData} ElementData\n * @typedef {import('hast').Nodes} Nodes\n * @typedef {import('hast').Root} Root\n * @typedef {import('hast').RootContent} RootContent\n *\n * @typedef {import('parse5').DefaultTreeAdapterMap} DefaultTreeAdapterMap\n * @typedef {import('parse5').Token.ElementLocation} P5ElementLocation\n * @typedef {import('parse5').Token.Location} P5Location\n *\n * @typedef {import('property-information').Schema} Schema\n *\n * @typedef {import('unist').Point} Point\n * @typedef {import('unist').Position} Position\n *\n * @typedef {import('vfile').VFile} VFile\n */\n\n/**\n * @typedef {DefaultTreeAdapterMap['document']} P5Document\n * @typedef {DefaultTreeAdapterMap['documentFragment']} P5DocumentFragment\n * @typedef {DefaultTreeAdapterMap['documentType']} P5DocumentType\n * @typedef {DefaultTreeAdapterMap['commentNode']} P5Comment\n * @typedef {DefaultTreeAdapterMap['textNode']} P5Text\n * @typedef {DefaultTreeAdapterMap['element']} P5Element\n * @typedef {DefaultTreeAdapterMap['node']} P5Node\n * @typedef {DefaultTreeAdapterMap['template']} P5Template\n */\n\n/**\n * @typedef Options\n *   Configuration.\n * @property {Space | null | undefined} [space='html']\n *   Which space the document is in (default: `'html'`).\n *\n *   When an `<svg>` element is found in the HTML space, this package already\n *   automatically switches to and from the SVG space when entering and exiting\n *   it.\n * @property {VFile | null | undefined} [file]\n *   File used to add positional info to nodes (optional).\n *\n *   If given, the file should represent the original HTML source.\n * @property {boolean | null | undefined} [verbose=false]\n *   Whether to add extra positional info about starting tags, closing tags,\n *   and attributes to elements (default: `false`).\n *\n *   > 👉 **Note**: only used when `file` is given.\n *\n * @typedef {'html' | 'svg'} Space\n *   Namespace.\n *\n * @typedef State\n *   Info passed around about the current state.\n * @property {VFile | undefined} file\n *   Corresponding file.\n * @property {boolean} location\n *   Whether location info was found.\n * @property {Schema} schema\n *   Current schema.\n * @property {boolean | undefined} verbose\n *   Add extra positional info.\n */\n\n\n\n\n\n\n\nconst own = {}.hasOwnProperty\n/** @type {unknown} */\n// type-coverage:ignore-next-line\nconst proto = Object.prototype\n\n/**\n * Transform a `parse5` AST to hast.\n *\n * @param {P5Node} tree\n *   `parse5` tree to transform.\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n * @returns {Nodes}\n *   hast tree.\n */\nfunction fromParse5(tree, options) {\n  const settings = options || {}\n\n  return one(\n    {\n      file: settings.file || undefined,\n      location: false,\n      schema: settings.space === 'svg' ? property_information__WEBPACK_IMPORTED_MODULE_0__.svg : property_information__WEBPACK_IMPORTED_MODULE_0__.html,\n      verbose: settings.verbose || false\n    },\n    tree\n  )\n}\n\n/**\n * Transform a node.\n *\n * @param {State} state\n *   Info passed around about the current state.\n * @param {P5Node} node\n *   p5 node.\n * @returns {Nodes}\n *   hast node.\n */\nfunction one(state, node) {\n  /** @type {Nodes} */\n  let result\n\n  switch (node.nodeName) {\n    case '#comment': {\n      const reference = /** @type {P5Comment} */ (node)\n      result = {type: 'comment', value: reference.data}\n      patch(state, reference, result)\n      return result\n    }\n\n    case '#document':\n    case '#document-fragment': {\n      const reference = /** @type {P5Document | P5DocumentFragment} */ (node)\n      const quirksMode =\n        'mode' in reference\n          ? reference.mode === 'quirks' || reference.mode === 'limited-quirks'\n          : false\n\n      result = {\n        type: 'root',\n        children: all(state, node.childNodes),\n        data: {quirksMode}\n      }\n\n      if (state.file && state.location) {\n        const doc = String(state.file)\n        const loc = (0,vfile_location__WEBPACK_IMPORTED_MODULE_1__.location)(doc)\n        const start = loc.toPoint(0)\n        const end = loc.toPoint(doc.length)\n        // Always defined as we give valid input.\n        ;(0,devlop__WEBPACK_IMPORTED_MODULE_2__.ok)(start, 'expected `start`')\n        ;(0,devlop__WEBPACK_IMPORTED_MODULE_2__.ok)(end, 'expected `end`')\n        result.position = {start, end}\n      }\n\n      return result\n    }\n\n    case '#documentType': {\n      const reference = /** @type {P5DocumentType} */ (node)\n      result = {type: 'doctype'}\n      patch(state, reference, result)\n      return result\n    }\n\n    case '#text': {\n      const reference = /** @type {P5Text} */ (node)\n      result = {type: 'text', value: reference.value}\n      patch(state, reference, result)\n      return result\n    }\n\n    // Element.\n    default: {\n      const reference = /** @type {P5Element} */ (node)\n      result = element(state, reference)\n      return result\n    }\n  }\n}\n\n/**\n * Transform children.\n *\n * @param {State} state\n *   Info passed around about the current state.\n * @param {Array<P5Node>} nodes\n *   Nodes.\n * @returns {Array<RootContent>}\n *   hast nodes.\n */\nfunction all(state, nodes) {\n  let index = -1\n  /** @type {Array<RootContent>} */\n  const results = []\n\n  while (++index < nodes.length) {\n    // Assume no roots in `nodes`.\n    const result = /** @type {RootContent} */ (one(state, nodes[index]))\n    results.push(result)\n  }\n\n  return results\n}\n\n/**\n * Transform an element.\n *\n * @param {State} state\n *   Info passed around about the current state.\n * @param {P5Element} node\n *   `parse5` node to transform.\n * @returns {Element}\n *   hast node.\n */\nfunction element(state, node) {\n  const schema = state.schema\n\n  state.schema = node.namespaceURI === web_namespaces__WEBPACK_IMPORTED_MODULE_3__.webNamespaces.svg ? property_information__WEBPACK_IMPORTED_MODULE_0__.svg : property_information__WEBPACK_IMPORTED_MODULE_0__.html\n\n  // Props.\n  let index = -1\n  /** @type {Record<string, string>} */\n  const props = {}\n\n  while (++index < node.attrs.length) {\n    const attribute = node.attrs[index]\n    const name =\n      (attribute.prefix ? attribute.prefix + ':' : '') + attribute.name\n    if (!own.call(proto, name)) {\n      props[name] = attribute.value\n    }\n  }\n\n  // Build.\n  const fn = state.schema.space === 'svg' ? hastscript__WEBPACK_IMPORTED_MODULE_4__.s : hastscript__WEBPACK_IMPORTED_MODULE_4__.h\n  const result = fn(node.tagName, props, all(state, node.childNodes))\n  patch(state, node, result)\n\n  // Switch content.\n  if (result.tagName === 'template') {\n    const reference = /** @type {P5Template} */ (node)\n    const pos = reference.sourceCodeLocation\n    const startTag = pos && pos.startTag && position(pos.startTag)\n    const endTag = pos && pos.endTag && position(pos.endTag)\n\n    // Root in, root out.\n    const content = /** @type {Root} */ (one(state, reference.content))\n\n    if (startTag && endTag && state.file) {\n      content.position = {start: startTag.end, end: endTag.start}\n    }\n\n    result.content = content\n  }\n\n  state.schema = schema\n\n  return result\n}\n\n/**\n * Patch positional info from `from` onto `to`.\n *\n * @param {State} state\n *   Info passed around about the current state.\n * @param {P5Node} from\n *   p5 node.\n * @param {Nodes} to\n *   hast node.\n * @returns {undefined}\n *   Nothing.\n */\nfunction patch(state, from, to) {\n  if ('sourceCodeLocation' in from && from.sourceCodeLocation && state.file) {\n    const position = createLocation(state, to, from.sourceCodeLocation)\n\n    if (position) {\n      state.location = true\n      to.position = position\n    }\n  }\n}\n\n/**\n * Create clean positional information.\n *\n * @param {State} state\n *   Info passed around about the current state.\n * @param {Nodes} node\n *   hast node.\n * @param {P5ElementLocation} location\n *   p5 location info.\n * @returns {Position | undefined}\n *   Position, or nothing.\n */\nfunction createLocation(state, node, location) {\n  const result = position(location)\n\n  if (node.type === 'element') {\n    const tail = node.children[node.children.length - 1]\n\n    // Bug for unclosed with children.\n    // See: <https://github.com/inikulin/parse5/issues/109>.\n    if (\n      result &&\n      !location.endTag &&\n      tail &&\n      tail.position &&\n      tail.position.end\n    ) {\n      result.end = Object.assign({}, tail.position.end)\n    }\n\n    if (state.verbose) {\n      /** @type {Record<string, Position | undefined>} */\n      const props = {}\n      /** @type {string} */\n      let key\n\n      if (location.attrs) {\n        for (key in location.attrs) {\n          if (own.call(location.attrs, key)) {\n            props[(0,property_information__WEBPACK_IMPORTED_MODULE_5__.find)(state.schema, key).property] = position(\n              location.attrs[key]\n            )\n          }\n        }\n      }\n\n      (0,devlop__WEBPACK_IMPORTED_MODULE_2__.ok)(location.startTag, 'a start tag should exist')\n      const opening = position(location.startTag)\n      const closing = location.endTag ? position(location.endTag) : undefined\n      /** @type {ElementData['position']} */\n      const data = {opening}\n      if (closing) data.closing = closing\n      data.properties = props\n\n      node.data = {position: data}\n    }\n  }\n\n  return result\n}\n\n/**\n * Turn a p5 location into a position.\n *\n * @param {P5Location} loc\n *   Location.\n * @returns {Position | undefined}\n *   Position or nothing.\n */\nfunction position(loc) {\n  const start = point({\n    line: loc.startLine,\n    column: loc.startCol,\n    offset: loc.startOffset\n  })\n  const end = point({\n    line: loc.endLine,\n    column: loc.endCol,\n    offset: loc.endOffset\n  })\n\n  // @ts-expect-error: we do use `undefined` for points if one or the other\n  // exists.\n  return start || end ? {start, end} : undefined\n}\n\n/**\n * Filter out invalid points.\n *\n * @param {Point} point\n *   Point with potentially `undefined` values.\n * @returns {Point | undefined}\n *   Point or nothing.\n */\nfunction point(point) {\n  return point.line && point.column ? point : undefined\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWZyb20tcGFyc2U1L2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQSxhQUFhLHdCQUF3QjtBQUNyQyxhQUFhLDRCQUE0QjtBQUN6QyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHFCQUFxQjtBQUNsQyxhQUFhLDRCQUE0QjtBQUN6QztBQUNBLGFBQWEsd0NBQXdDO0FBQ3JELGFBQWEsd0NBQXdDO0FBQ3JELGFBQWEsaUNBQWlDO0FBQzlDO0FBQ0EsYUFBYSx1Q0FBdUM7QUFDcEQ7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhLDBCQUEwQjtBQUN2QztBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDOztBQUVBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQsYUFBYSwyQ0FBMkM7QUFDeEQsYUFBYSx1Q0FBdUM7QUFDcEQsYUFBYSxzQ0FBc0M7QUFDbkQsYUFBYSxtQ0FBbUM7QUFDaEQsYUFBYSxrQ0FBa0M7QUFDL0MsYUFBYSwrQkFBK0I7QUFDNUMsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYywwQkFBMEI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMEJBQTBCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNEJBQTRCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGdCQUFnQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbUJBQW1CO0FBQ2pDO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0EsY0FBYyxxQkFBcUI7QUFDbkM7QUFDQTs7QUFFbUM7QUFDSjtBQUNxQjtBQUNiO0FBQ0s7O0FBRTVDLGNBQWM7QUFDZCxXQUFXLFNBQVM7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLDRCQUE0QjtBQUN2QztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxxREFBRyxHQUFHLHNEQUFJO0FBQ25EO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsV0FBVztBQUM5QyxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsaUNBQWlDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHdEQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkNBQU07QUFDZCxRQUFRLDJDQUFNO0FBQ2QsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsZ0JBQWdCO0FBQ25ELGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsUUFBUTtBQUMzQyxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsV0FBVztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBLFdBQVcsZUFBZTtBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0JBQW9CO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsYUFBYTtBQUMzQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxXQUFXO0FBQ3RCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1Qyx5REFBYSxPQUFPLHFEQUFHLEdBQUcsc0RBQUk7O0FBRXJFO0FBQ0E7QUFDQSxhQUFhLHdCQUF3QjtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHlDQUFDLEdBQUcseUNBQUM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLFlBQVk7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLE1BQU07O0FBRXJDO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQSxpQkFBaUIsc0NBQXNDO0FBQ3ZEO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDBEQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSwwQ0FBTTtBQUNaO0FBQ0E7QUFDQSxpQkFBaUIseUJBQXlCO0FBQzFDLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EseUJBQXlCLFlBQVk7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZWFtY29kZS8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtZnJvbS1wYXJzZTUvbGliL2luZGV4LmpzPzRlMTMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuRWxlbWVudH0gRWxlbWVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLkVsZW1lbnREYXRhfSBFbGVtZW50RGF0YVxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLk5vZGVzfSBOb2Rlc1xuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlJvb3R9IFJvb3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ2hhc3QnKS5Sb290Q29udGVudH0gUm9vdENvbnRlbnRcbiAqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdwYXJzZTUnKS5EZWZhdWx0VHJlZUFkYXB0ZXJNYXB9IERlZmF1bHRUcmVlQWRhcHRlck1hcFxuICogQHR5cGVkZWYge2ltcG9ydCgncGFyc2U1JykuVG9rZW4uRWxlbWVudExvY2F0aW9ufSBQNUVsZW1lbnRMb2NhdGlvblxuICogQHR5cGVkZWYge2ltcG9ydCgncGFyc2U1JykuVG9rZW4uTG9jYXRpb259IFA1TG9jYXRpb25cbiAqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdwcm9wZXJ0eS1pbmZvcm1hdGlvbicpLlNjaGVtYX0gU2NoZW1hXG4gKlxuICogQHR5cGVkZWYge2ltcG9ydCgndW5pc3QnKS5Qb2ludH0gUG9pbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuUG9zaXRpb259IFBvc2l0aW9uXG4gKlxuICogQHR5cGVkZWYge2ltcG9ydCgndmZpbGUnKS5WRmlsZX0gVkZpbGVcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtEZWZhdWx0VHJlZUFkYXB0ZXJNYXBbJ2RvY3VtZW50J119IFA1RG9jdW1lbnRcbiAqIEB0eXBlZGVmIHtEZWZhdWx0VHJlZUFkYXB0ZXJNYXBbJ2RvY3VtZW50RnJhZ21lbnQnXX0gUDVEb2N1bWVudEZyYWdtZW50XG4gKiBAdHlwZWRlZiB7RGVmYXVsdFRyZWVBZGFwdGVyTWFwWydkb2N1bWVudFR5cGUnXX0gUDVEb2N1bWVudFR5cGVcbiAqIEB0eXBlZGVmIHtEZWZhdWx0VHJlZUFkYXB0ZXJNYXBbJ2NvbW1lbnROb2RlJ119IFA1Q29tbWVudFxuICogQHR5cGVkZWYge0RlZmF1bHRUcmVlQWRhcHRlck1hcFsndGV4dE5vZGUnXX0gUDVUZXh0XG4gKiBAdHlwZWRlZiB7RGVmYXVsdFRyZWVBZGFwdGVyTWFwWydlbGVtZW50J119IFA1RWxlbWVudFxuICogQHR5cGVkZWYge0RlZmF1bHRUcmVlQWRhcHRlck1hcFsnbm9kZSddfSBQNU5vZGVcbiAqIEB0eXBlZGVmIHtEZWZhdWx0VHJlZUFkYXB0ZXJNYXBbJ3RlbXBsYXRlJ119IFA1VGVtcGxhdGVcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIE9wdGlvbnNcbiAqICAgQ29uZmlndXJhdGlvbi5cbiAqIEBwcm9wZXJ0eSB7U3BhY2UgfCBudWxsIHwgdW5kZWZpbmVkfSBbc3BhY2U9J2h0bWwnXVxuICogICBXaGljaCBzcGFjZSB0aGUgZG9jdW1lbnQgaXMgaW4gKGRlZmF1bHQ6IGAnaHRtbCdgKS5cbiAqXG4gKiAgIFdoZW4gYW4gYDxzdmc+YCBlbGVtZW50IGlzIGZvdW5kIGluIHRoZSBIVE1MIHNwYWNlLCB0aGlzIHBhY2thZ2UgYWxyZWFkeVxuICogICBhdXRvbWF0aWNhbGx5IHN3aXRjaGVzIHRvIGFuZCBmcm9tIHRoZSBTVkcgc3BhY2Ugd2hlbiBlbnRlcmluZyBhbmQgZXhpdGluZ1xuICogICBpdC5cbiAqIEBwcm9wZXJ0eSB7VkZpbGUgfCBudWxsIHwgdW5kZWZpbmVkfSBbZmlsZV1cbiAqICAgRmlsZSB1c2VkIHRvIGFkZCBwb3NpdGlvbmFsIGluZm8gdG8gbm9kZXMgKG9wdGlvbmFsKS5cbiAqXG4gKiAgIElmIGdpdmVuLCB0aGUgZmlsZSBzaG91bGQgcmVwcmVzZW50IHRoZSBvcmlnaW5hbCBIVE1MIHNvdXJjZS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFt2ZXJib3NlPWZhbHNlXVxuICogICBXaGV0aGVyIHRvIGFkZCBleHRyYSBwb3NpdGlvbmFsIGluZm8gYWJvdXQgc3RhcnRpbmcgdGFncywgY2xvc2luZyB0YWdzLFxuICogICBhbmQgYXR0cmlidXRlcyB0byBlbGVtZW50cyAoZGVmYXVsdDogYGZhbHNlYCkuXG4gKlxuICogICA+IPCfkYkgKipOb3RlKio6IG9ubHkgdXNlZCB3aGVuIGBmaWxlYCBpcyBnaXZlbi5cbiAqXG4gKiBAdHlwZWRlZiB7J2h0bWwnIHwgJ3N2Zyd9IFNwYWNlXG4gKiAgIE5hbWVzcGFjZS5cbiAqXG4gKiBAdHlwZWRlZiBTdGF0ZVxuICogICBJbmZvIHBhc3NlZCBhcm91bmQgYWJvdXQgdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBAcHJvcGVydHkge1ZGaWxlIHwgdW5kZWZpbmVkfSBmaWxlXG4gKiAgIENvcnJlc3BvbmRpbmcgZmlsZS5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbG9jYXRpb25cbiAqICAgV2hldGhlciBsb2NhdGlvbiBpbmZvIHdhcyBmb3VuZC5cbiAqIEBwcm9wZXJ0eSB7U2NoZW1hfSBzY2hlbWFcbiAqICAgQ3VycmVudCBzY2hlbWEuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCB1bmRlZmluZWR9IHZlcmJvc2VcbiAqICAgQWRkIGV4dHJhIHBvc2l0aW9uYWwgaW5mby5cbiAqL1xuXG5pbXBvcnQge29rIGFzIGFzc2VydH0gZnJvbSAnZGV2bG9wJ1xuaW1wb3J0IHtoLCBzfSBmcm9tICdoYXN0c2NyaXB0J1xuaW1wb3J0IHtmaW5kLCBodG1sLCBzdmd9IGZyb20gJ3Byb3BlcnR5LWluZm9ybWF0aW9uJ1xuaW1wb3J0IHtsb2NhdGlvbn0gZnJvbSAndmZpbGUtbG9jYXRpb24nXG5pbXBvcnQge3dlYk5hbWVzcGFjZXN9IGZyb20gJ3dlYi1uYW1lc3BhY2VzJ1xuXG5jb25zdCBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuLyoqIEB0eXBlIHt1bmtub3dufSAqL1xuLy8gdHlwZS1jb3ZlcmFnZTppZ25vcmUtbmV4dC1saW5lXG5jb25zdCBwcm90byA9IE9iamVjdC5wcm90b3R5cGVcblxuLyoqXG4gKiBUcmFuc2Zvcm0gYSBgcGFyc2U1YCBBU1QgdG8gaGFzdC5cbiAqXG4gKiBAcGFyYW0ge1A1Tm9kZX0gdHJlZVxuICogICBgcGFyc2U1YCB0cmVlIHRvIHRyYW5zZm9ybS5cbiAqIEBwYXJhbSB7T3B0aW9ucyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zXVxuICogICBDb25maWd1cmF0aW9uIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7Tm9kZXN9XG4gKiAgIGhhc3QgdHJlZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21QYXJzZTUodHJlZSwgb3B0aW9ucykge1xuICBjb25zdCBzZXR0aW5ncyA9IG9wdGlvbnMgfHwge31cblxuICByZXR1cm4gb25lKFxuICAgIHtcbiAgICAgIGZpbGU6IHNldHRpbmdzLmZpbGUgfHwgdW5kZWZpbmVkLFxuICAgICAgbG9jYXRpb246IGZhbHNlLFxuICAgICAgc2NoZW1hOiBzZXR0aW5ncy5zcGFjZSA9PT0gJ3N2ZycgPyBzdmcgOiBodG1sLFxuICAgICAgdmVyYm9zZTogc2V0dGluZ3MudmVyYm9zZSB8fCBmYWxzZVxuICAgIH0sXG4gICAgdHJlZVxuICApXG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGEgbm9kZS5cbiAqXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZVxuICogICBJbmZvIHBhc3NlZCBhcm91bmQgYWJvdXQgdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0ge1A1Tm9kZX0gbm9kZVxuICogICBwNSBub2RlLlxuICogQHJldHVybnMge05vZGVzfVxuICogICBoYXN0IG5vZGUuXG4gKi9cbmZ1bmN0aW9uIG9uZShzdGF0ZSwgbm9kZSkge1xuICAvKiogQHR5cGUge05vZGVzfSAqL1xuICBsZXQgcmVzdWx0XG5cbiAgc3dpdGNoIChub2RlLm5vZGVOYW1lKSB7XG4gICAgY2FzZSAnI2NvbW1lbnQnOiB7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSAvKiogQHR5cGUge1A1Q29tbWVudH0gKi8gKG5vZGUpXG4gICAgICByZXN1bHQgPSB7dHlwZTogJ2NvbW1lbnQnLCB2YWx1ZTogcmVmZXJlbmNlLmRhdGF9XG4gICAgICBwYXRjaChzdGF0ZSwgcmVmZXJlbmNlLCByZXN1bHQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgY2FzZSAnI2RvY3VtZW50JzpcbiAgICBjYXNlICcjZG9jdW1lbnQtZnJhZ21lbnQnOiB7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSAvKiogQHR5cGUge1A1RG9jdW1lbnQgfCBQNURvY3VtZW50RnJhZ21lbnR9ICovIChub2RlKVxuICAgICAgY29uc3QgcXVpcmtzTW9kZSA9XG4gICAgICAgICdtb2RlJyBpbiByZWZlcmVuY2VcbiAgICAgICAgICA/IHJlZmVyZW5jZS5tb2RlID09PSAncXVpcmtzJyB8fCByZWZlcmVuY2UubW9kZSA9PT0gJ2xpbWl0ZWQtcXVpcmtzJ1xuICAgICAgICAgIDogZmFsc2VcblxuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICB0eXBlOiAncm9vdCcsXG4gICAgICAgIGNoaWxkcmVuOiBhbGwoc3RhdGUsIG5vZGUuY2hpbGROb2RlcyksXG4gICAgICAgIGRhdGE6IHtxdWlya3NNb2RlfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUuZmlsZSAmJiBzdGF0ZS5sb2NhdGlvbikge1xuICAgICAgICBjb25zdCBkb2MgPSBTdHJpbmcoc3RhdGUuZmlsZSlcbiAgICAgICAgY29uc3QgbG9jID0gbG9jYXRpb24oZG9jKVxuICAgICAgICBjb25zdCBzdGFydCA9IGxvYy50b1BvaW50KDApXG4gICAgICAgIGNvbnN0IGVuZCA9IGxvYy50b1BvaW50KGRvYy5sZW5ndGgpXG4gICAgICAgIC8vIEFsd2F5cyBkZWZpbmVkIGFzIHdlIGdpdmUgdmFsaWQgaW5wdXQuXG4gICAgICAgIGFzc2VydChzdGFydCwgJ2V4cGVjdGVkIGBzdGFydGAnKVxuICAgICAgICBhc3NlcnQoZW5kLCAnZXhwZWN0ZWQgYGVuZGAnKVxuICAgICAgICByZXN1bHQucG9zaXRpb24gPSB7c3RhcnQsIGVuZH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIGNhc2UgJyNkb2N1bWVudFR5cGUnOiB7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSAvKiogQHR5cGUge1A1RG9jdW1lbnRUeXBlfSAqLyAobm9kZSlcbiAgICAgIHJlc3VsdCA9IHt0eXBlOiAnZG9jdHlwZSd9XG4gICAgICBwYXRjaChzdGF0ZSwgcmVmZXJlbmNlLCByZXN1bHQpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgY2FzZSAnI3RleHQnOiB7XG4gICAgICBjb25zdCByZWZlcmVuY2UgPSAvKiogQHR5cGUge1A1VGV4dH0gKi8gKG5vZGUpXG4gICAgICByZXN1bHQgPSB7dHlwZTogJ3RleHQnLCB2YWx1ZTogcmVmZXJlbmNlLnZhbHVlfVxuICAgICAgcGF0Y2goc3RhdGUsIHJlZmVyZW5jZSwgcmVzdWx0KVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIC8vIEVsZW1lbnQuXG4gICAgZGVmYXVsdDoge1xuICAgICAgY29uc3QgcmVmZXJlbmNlID0gLyoqIEB0eXBlIHtQNUVsZW1lbnR9ICovIChub2RlKVxuICAgICAgcmVzdWx0ID0gZWxlbWVudChzdGF0ZSwgcmVmZXJlbmNlKVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRyYW5zZm9ybSBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZVxuICogICBJbmZvIHBhc3NlZCBhcm91bmQgYWJvdXQgdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0ge0FycmF5PFA1Tm9kZT59IG5vZGVzXG4gKiAgIE5vZGVzLlxuICogQHJldHVybnMge0FycmF5PFJvb3RDb250ZW50Pn1cbiAqICAgaGFzdCBub2Rlcy5cbiAqL1xuZnVuY3Rpb24gYWxsKHN0YXRlLCBub2Rlcykge1xuICBsZXQgaW5kZXggPSAtMVxuICAvKiogQHR5cGUge0FycmF5PFJvb3RDb250ZW50Pn0gKi9cbiAgY29uc3QgcmVzdWx0cyA9IFtdXG5cbiAgd2hpbGUgKCsraW5kZXggPCBub2Rlcy5sZW5ndGgpIHtcbiAgICAvLyBBc3N1bWUgbm8gcm9vdHMgaW4gYG5vZGVzYC5cbiAgICBjb25zdCByZXN1bHQgPSAvKiogQHR5cGUge1Jvb3RDb250ZW50fSAqLyAob25lKHN0YXRlLCBub2Rlc1tpbmRleF0pKVxuICAgIHJlc3VsdHMucHVzaChyZXN1bHQpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0c1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybSBhbiBlbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlXG4gKiAgIEluZm8gcGFzc2VkIGFyb3VuZCBhYm91dCB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7UDVFbGVtZW50fSBub2RlXG4gKiAgIGBwYXJzZTVgIG5vZGUgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybnMge0VsZW1lbnR9XG4gKiAgIGhhc3Qgbm9kZS5cbiAqL1xuZnVuY3Rpb24gZWxlbWVudChzdGF0ZSwgbm9kZSkge1xuICBjb25zdCBzY2hlbWEgPSBzdGF0ZS5zY2hlbWFcblxuICBzdGF0ZS5zY2hlbWEgPSBub2RlLm5hbWVzcGFjZVVSSSA9PT0gd2ViTmFtZXNwYWNlcy5zdmcgPyBzdmcgOiBodG1sXG5cbiAgLy8gUHJvcHMuXG4gIGxldCBpbmRleCA9IC0xXG4gIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgc3RyaW5nPn0gKi9cbiAgY29uc3QgcHJvcHMgPSB7fVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbm9kZS5hdHRycy5sZW5ndGgpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGUgPSBub2RlLmF0dHJzW2luZGV4XVxuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgKGF0dHJpYnV0ZS5wcmVmaXggPyBhdHRyaWJ1dGUucHJlZml4ICsgJzonIDogJycpICsgYXR0cmlidXRlLm5hbWVcbiAgICBpZiAoIW93bi5jYWxsKHByb3RvLCBuYW1lKSkge1xuICAgICAgcHJvcHNbbmFtZV0gPSBhdHRyaWJ1dGUudmFsdWVcbiAgICB9XG4gIH1cblxuICAvLyBCdWlsZC5cbiAgY29uc3QgZm4gPSBzdGF0ZS5zY2hlbWEuc3BhY2UgPT09ICdzdmcnID8gcyA6IGhcbiAgY29uc3QgcmVzdWx0ID0gZm4obm9kZS50YWdOYW1lLCBwcm9wcywgYWxsKHN0YXRlLCBub2RlLmNoaWxkTm9kZXMpKVxuICBwYXRjaChzdGF0ZSwgbm9kZSwgcmVzdWx0KVxuXG4gIC8vIFN3aXRjaCBjb250ZW50LlxuICBpZiAocmVzdWx0LnRhZ05hbWUgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSAvKiogQHR5cGUge1A1VGVtcGxhdGV9ICovIChub2RlKVxuICAgIGNvbnN0IHBvcyA9IHJlZmVyZW5jZS5zb3VyY2VDb2RlTG9jYXRpb25cbiAgICBjb25zdCBzdGFydFRhZyA9IHBvcyAmJiBwb3Muc3RhcnRUYWcgJiYgcG9zaXRpb24ocG9zLnN0YXJ0VGFnKVxuICAgIGNvbnN0IGVuZFRhZyA9IHBvcyAmJiBwb3MuZW5kVGFnICYmIHBvc2l0aW9uKHBvcy5lbmRUYWcpXG5cbiAgICAvLyBSb290IGluLCByb290IG91dC5cbiAgICBjb25zdCBjb250ZW50ID0gLyoqIEB0eXBlIHtSb290fSAqLyAob25lKHN0YXRlLCByZWZlcmVuY2UuY29udGVudCkpXG5cbiAgICBpZiAoc3RhcnRUYWcgJiYgZW5kVGFnICYmIHN0YXRlLmZpbGUpIHtcbiAgICAgIGNvbnRlbnQucG9zaXRpb24gPSB7c3RhcnQ6IHN0YXJ0VGFnLmVuZCwgZW5kOiBlbmRUYWcuc3RhcnR9XG4gICAgfVxuXG4gICAgcmVzdWx0LmNvbnRlbnQgPSBjb250ZW50XG4gIH1cblxuICBzdGF0ZS5zY2hlbWEgPSBzY2hlbWFcblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogUGF0Y2ggcG9zaXRpb25hbCBpbmZvIGZyb20gYGZyb21gIG9udG8gYHRvYC5cbiAqXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZVxuICogICBJbmZvIHBhc3NlZCBhcm91bmQgYWJvdXQgdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0ge1A1Tm9kZX0gZnJvbVxuICogICBwNSBub2RlLlxuICogQHBhcmFtIHtOb2Rlc30gdG9cbiAqICAgaGFzdCBub2RlLlxuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqICAgTm90aGluZy5cbiAqL1xuZnVuY3Rpb24gcGF0Y2goc3RhdGUsIGZyb20sIHRvKSB7XG4gIGlmICgnc291cmNlQ29kZUxvY2F0aW9uJyBpbiBmcm9tICYmIGZyb20uc291cmNlQ29kZUxvY2F0aW9uICYmIHN0YXRlLmZpbGUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHN0YXRlLCB0bywgZnJvbS5zb3VyY2VDb2RlTG9jYXRpb24pXG5cbiAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgIHN0YXRlLmxvY2F0aW9uID0gdHJ1ZVxuICAgICAgdG8ucG9zaXRpb24gPSBwb3NpdGlvblxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBjbGVhbiBwb3NpdGlvbmFsIGluZm9ybWF0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlXG4gKiAgIEluZm8gcGFzc2VkIGFyb3VuZCBhYm91dCB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7Tm9kZXN9IG5vZGVcbiAqICAgaGFzdCBub2RlLlxuICogQHBhcmFtIHtQNUVsZW1lbnRMb2NhdGlvbn0gbG9jYXRpb25cbiAqICAgcDUgbG9jYXRpb24gaW5mby5cbiAqIEByZXR1cm5zIHtQb3NpdGlvbiB8IHVuZGVmaW5lZH1cbiAqICAgUG9zaXRpb24sIG9yIG5vdGhpbmcuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKHN0YXRlLCBub2RlLCBsb2NhdGlvbikge1xuICBjb25zdCByZXN1bHQgPSBwb3NpdGlvbihsb2NhdGlvbilcblxuICBpZiAobm9kZS50eXBlID09PSAnZWxlbWVudCcpIHtcbiAgICBjb25zdCB0YWlsID0gbm9kZS5jaGlsZHJlbltub2RlLmNoaWxkcmVuLmxlbmd0aCAtIDFdXG5cbiAgICAvLyBCdWcgZm9yIHVuY2xvc2VkIHdpdGggY2hpbGRyZW4uXG4gICAgLy8gU2VlOiA8aHR0cHM6Ly9naXRodWIuY29tL2luaWt1bGluL3BhcnNlNS9pc3N1ZXMvMTA5Pi5cbiAgICBpZiAoXG4gICAgICByZXN1bHQgJiZcbiAgICAgICFsb2NhdGlvbi5lbmRUYWcgJiZcbiAgICAgIHRhaWwgJiZcbiAgICAgIHRhaWwucG9zaXRpb24gJiZcbiAgICAgIHRhaWwucG9zaXRpb24uZW5kXG4gICAgKSB7XG4gICAgICByZXN1bHQuZW5kID0gT2JqZWN0LmFzc2lnbih7fSwgdGFpbC5wb3NpdGlvbi5lbmQpXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLnZlcmJvc2UpIHtcbiAgICAgIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgUG9zaXRpb24gfCB1bmRlZmluZWQ+fSAqL1xuICAgICAgY29uc3QgcHJvcHMgPSB7fVxuICAgICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgICBsZXQga2V5XG5cbiAgICAgIGlmIChsb2NhdGlvbi5hdHRycykge1xuICAgICAgICBmb3IgKGtleSBpbiBsb2NhdGlvbi5hdHRycykge1xuICAgICAgICAgIGlmIChvd24uY2FsbChsb2NhdGlvbi5hdHRycywga2V5KSkge1xuICAgICAgICAgICAgcHJvcHNbZmluZChzdGF0ZS5zY2hlbWEsIGtleSkucHJvcGVydHldID0gcG9zaXRpb24oXG4gICAgICAgICAgICAgIGxvY2F0aW9uLmF0dHJzW2tleV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYXNzZXJ0KGxvY2F0aW9uLnN0YXJ0VGFnLCAnYSBzdGFydCB0YWcgc2hvdWxkIGV4aXN0JylcbiAgICAgIGNvbnN0IG9wZW5pbmcgPSBwb3NpdGlvbihsb2NhdGlvbi5zdGFydFRhZylcbiAgICAgIGNvbnN0IGNsb3NpbmcgPSBsb2NhdGlvbi5lbmRUYWcgPyBwb3NpdGlvbihsb2NhdGlvbi5lbmRUYWcpIDogdW5kZWZpbmVkXG4gICAgICAvKiogQHR5cGUge0VsZW1lbnREYXRhWydwb3NpdGlvbiddfSAqL1xuICAgICAgY29uc3QgZGF0YSA9IHtvcGVuaW5nfVxuICAgICAgaWYgKGNsb3NpbmcpIGRhdGEuY2xvc2luZyA9IGNsb3NpbmdcbiAgICAgIGRhdGEucHJvcGVydGllcyA9IHByb3BzXG5cbiAgICAgIG5vZGUuZGF0YSA9IHtwb3NpdGlvbjogZGF0YX1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8qKlxuICogVHVybiBhIHA1IGxvY2F0aW9uIGludG8gYSBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1A1TG9jYXRpb259IGxvY1xuICogICBMb2NhdGlvbi5cbiAqIEByZXR1cm5zIHtQb3NpdGlvbiB8IHVuZGVmaW5lZH1cbiAqICAgUG9zaXRpb24gb3Igbm90aGluZy5cbiAqL1xuZnVuY3Rpb24gcG9zaXRpb24obG9jKSB7XG4gIGNvbnN0IHN0YXJ0ID0gcG9pbnQoe1xuICAgIGxpbmU6IGxvYy5zdGFydExpbmUsXG4gICAgY29sdW1uOiBsb2Muc3RhcnRDb2wsXG4gICAgb2Zmc2V0OiBsb2Muc3RhcnRPZmZzZXRcbiAgfSlcbiAgY29uc3QgZW5kID0gcG9pbnQoe1xuICAgIGxpbmU6IGxvYy5lbmRMaW5lLFxuICAgIGNvbHVtbjogbG9jLmVuZENvbCxcbiAgICBvZmZzZXQ6IGxvYy5lbmRPZmZzZXRcbiAgfSlcblxuICAvLyBAdHMtZXhwZWN0LWVycm9yOiB3ZSBkbyB1c2UgYHVuZGVmaW5lZGAgZm9yIHBvaW50cyBpZiBvbmUgb3IgdGhlIG90aGVyXG4gIC8vIGV4aXN0cy5cbiAgcmV0dXJuIHN0YXJ0IHx8IGVuZCA/IHtzdGFydCwgZW5kfSA6IHVuZGVmaW5lZFxufVxuXG4vKipcbiAqIEZpbHRlciBvdXQgaW52YWxpZCBwb2ludHMuXG4gKlxuICogQHBhcmFtIHtQb2ludH0gcG9pbnRcbiAqICAgUG9pbnQgd2l0aCBwb3RlbnRpYWxseSBgdW5kZWZpbmVkYCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7UG9pbnQgfCB1bmRlZmluZWR9XG4gKiAgIFBvaW50IG9yIG5vdGhpbmcuXG4gKi9cbmZ1bmN0aW9uIHBvaW50KHBvaW50KSB7XG4gIHJldHVybiBwb2ludC5saW5lICYmIHBvaW50LmNvbHVtbiA/IHBvaW50IDogdW5kZWZpbmVkXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/hast-util-from-parse5/lib/index.js\n");

/***/ })

};
;