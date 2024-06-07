import {
  __commonJS
} from "./chunk-ZC22LKFR.js";

// ../node_modules/refractor/lang/latex.js
var require_latex = __commonJS({
  "../node_modules/refractor/lang/latex.js"(exports, module) {
    module.exports = latex;
    latex.displayName = "latex";
    latex.aliases = ["tex", "context"];
    function latex(Prism) {
      ;
      (function(Prism2) {
        var funcPattern = /\\(?:[^a-z()[\]]|[a-z*]+)/i;
        var insideEqu = {
          "equation-command": {
            pattern: funcPattern,
            alias: "regex"
          }
        };
        Prism2.languages.latex = {
          comment: /%.*/,
          // the verbatim environment prints whitespace to the document
          cdata: {
            pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
            lookbehind: true
          },
          /*
           * equations can be between $$ $$ or $ $ or \( \) or \[ \]
           * (all are multiline)
           */
          equation: [
            {
              pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
              inside: insideEqu,
              alias: "string"
            },
            {
              pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
              lookbehind: true,
              inside: insideEqu,
              alias: "string"
            }
          ],
          /*
           * arguments which are keywords or references are highlighted
           * as keywords
           */
          keyword: {
            pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
            lookbehind: true
          },
          url: {
            pattern: /(\\url\{)[^}]+(?=\})/,
            lookbehind: true
          },
          /*
           * section or chapter headlines are highlighted as bold so that
           * they stand out more
           */
          headline: {
            pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
            lookbehind: true,
            alias: "class-name"
          },
          function: {
            pattern: funcPattern,
            alias: "selector"
          },
          punctuation: /[[\]{}&]/
        };
        Prism2.languages.tex = Prism2.languages.latex;
        Prism2.languages.context = Prism2.languages.latex;
      })(Prism);
    }
  }
});

export {
  require_latex
};
//# sourceMappingURL=chunk-6SSXMXTZ.js.map
