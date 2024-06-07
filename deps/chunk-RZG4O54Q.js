import {
  __commonJS
} from "./chunk-ZC22LKFR.js";

// ../node_modules/refractor/lang/false.js
var require_false = __commonJS({
  "../node_modules/refractor/lang/false.js"(exports, module) {
    module.exports = $false;
    $false.displayName = "$false";
    $false.aliases = [];
    function $false(Prism) {
      ;
      (function(Prism2) {
        Prism2.languages["false"] = {
          comment: {
            pattern: /\{[^}]*\}/
          },
          string: {
            pattern: /"[^"]*"/,
            greedy: true
          },
          "character-code": {
            pattern: /'(?:[^\r]|\r\n?)/,
            alias: "number"
          },
          "assembler-code": {
            pattern: /\d+`/,
            alias: "important"
          },
          number: /\d+/,
          operator: /[-!#$%&'*+,./:;=>?@\\^_`|~ßø]/,
          punctuation: /\[|\]/,
          variable: /[a-z]/,
          "non-standard": {
            pattern: /[()<BDO®]/,
            alias: "bold"
          }
        };
      })(Prism);
    }
  }
});

export {
  require_false
};
//# sourceMappingURL=chunk-RZG4O54Q.js.map
