import {
  __commonJS
} from "./chunk-ZC22LKFR.js";

// ../node_modules/highlight.js/lib/languages/python-repl.js
var require_python_repl = __commonJS({
  "../node_modules/highlight.js/lib/languages/python-repl.js"(exports, module) {
    function pythonRepl(hljs) {
      return {
        aliases: ["pycon"],
        contains: [
          {
            className: "meta",
            starts: {
              // a space separates the REPL prefix from the actual code
              // this is purely for cleaner HTML output
              end: / |$/,
              starts: {
                end: "$",
                subLanguage: "python"
              }
            },
            variants: [
              {
                begin: /^>>>(?=[ ]|$)/
              },
              {
                begin: /^\.\.\.(?=[ ]|$)/
              }
            ]
          }
        ]
      };
    }
    module.exports = pythonRepl;
  }
});

export {
  require_python_repl
};
//# sourceMappingURL=chunk-OIGYGFD5.js.map
