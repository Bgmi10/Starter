import {
  __commonJS
} from "./chunk-ZC22LKFR.js";

// ../node_modules/highlight.js/lib/languages/openscad.js
var require_openscad = __commonJS({
  "../node_modules/highlight.js/lib/languages/openscad.js"(exports, module) {
    function openscad(hljs) {
      const SPECIAL_VARS = {
        className: "keyword",
        begin: "\\$(f[asn]|t|vp[rtd]|children)"
      };
      const LITERALS = {
        className: "literal",
        begin: "false|true|PI|undef"
      };
      const NUMBERS = {
        className: "number",
        begin: "\\b\\d+(\\.\\d+)?(e-?\\d+)?",
        // adds 1e5, 1e-10
        relevance: 0
      };
      const STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {
        illegal: null
      });
      const PREPRO = {
        className: "meta",
        keywords: {
          "meta-keyword": "include use"
        },
        begin: "include|use <",
        end: ">"
      };
      const PARAMS = {
        className: "params",
        begin: "\\(",
        end: "\\)",
        contains: [
          "self",
          NUMBERS,
          STRING,
          SPECIAL_VARS,
          LITERALS
        ]
      };
      const MODIFIERS = {
        begin: "[*!#%]",
        relevance: 0
      };
      const FUNCTIONS = {
        className: "function",
        beginKeywords: "module function",
        end: /=|\{/,
        contains: [
          PARAMS,
          hljs.UNDERSCORE_TITLE_MODE
        ]
      };
      return {
        name: "OpenSCAD",
        aliases: ["scad"],
        keywords: {
          keyword: "function module include use for intersection_for if else \\%",
          literal: "false true PI undef",
          built_in: "circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign"
        },
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          NUMBERS,
          PREPRO,
          STRING,
          SPECIAL_VARS,
          MODIFIERS,
          FUNCTIONS
        ]
      };
    }
    module.exports = openscad;
  }
});

export {
  require_openscad
};
//# sourceMappingURL=chunk-HGBEZIOG.js.map
