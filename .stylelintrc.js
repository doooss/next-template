module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-prettier/recommended",
    "stylelint-config-css-modules"
  ],
  plugins:[
    "stylelint-order"
  ],
  rules:{
    "selector-class-pattern": "^([a-z][a-z0-9]*(_[a-z0-9]+)*$)",
    "order/order":[
      "custom-properties",
      "declarations"
    ],
    "order/properties-order":[
      "display",
      "list-style",
      "position",
      "float",
      "clear",
      "width",
      "height",
      "padding",
      "margin",
      "border",
      "background",
      "color",
      "font",
      "text-decoration",
      "text-align",
      "vertical-align",
      "white-space",
      "content"
    ],
    "at-rule-name-space-after": "always-single-line"
  }
}