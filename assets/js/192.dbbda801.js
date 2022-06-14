(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{703:function(t,a,e){"use strict";e.r(a);var s=e(65),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"migrating-from-0-6-to-1-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-0-6-to-1-0"}},[t._v("#")]),t._v(" Migrating from 0.6 to 1.0")]),t._v(" "),e("p",[t._v("To upgrade your HyperFormula version from 0.6.x to 1.0.x, follow this guide.")]),t._v(" "),e("h2",{attrs:{id:"step-1-change-your-license-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-change-your-license-key"}},[t._v("#")]),t._v(" Step 1: Change your license key")]),t._v(" "),e("p",[t._v("If you use the AGPLv3 license, or the free non-commercial license, you need to change your license key.")]),t._v(" "),e("p",[t._v("If you use a commercial license, you don't need to make any changes.")]),t._v(" "),e("h3",{attrs:{id:"open-source-license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#open-source-license"}},[t._v("#")]),t._v(" Open-source license")]),t._v(" "),e("p",[t._v("If you use the open-source version of HyperFormula, in your configuration options, pass the "),e("code",[t._v("gpl-v3")]),t._v(" string instead of the "),e("code",[t._v("agpl-v3")]),t._v(" string:")]),t._v(" "),e("p",[t._v("Before:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("licenseKey")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'agpl-v3'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("After:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use `gpl-v3` instead of `agpl-v3`")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("licenseKey")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gpl-v3'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"free-non-commercial-license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#free-non-commercial-license"}},[t._v("#")]),t._v(" Free non-commercial license")]),t._v(" "),e("p",[t._v("If you use the free non-commercial license, switch to the GPLv3 license or purchase a commercial license.")]),t._v(" "),e("p",[t._v("For more details on HyperFormula license keys, go "),e("RouterLink",{attrs:{to:"/guide/license-key.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),e("h2",{attrs:{id:"step-2-change-sheetname-to-sheetid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2-change-sheetname-to-sheetid"}},[t._v("#")]),t._v(" Step 2: Change "),e("code",[t._v("sheetName")]),t._v(" to "),e("code",[t._v("sheetId")])]),t._v(" "),e("p",[t._v("Most sheet-related methods now take the "),e("code",[t._v("sheetID")]),t._v(" number parameter instead of the "),e("code",[t._v("sheetName")]),t._v(" string parameter.")]),t._v(" "),e("p",[t._v("For example, use the "),e("code",[t._v("clearSheet()")]),t._v(" method in this way:")]),t._v(" "),e("p",[t._v("Before:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hfInstance "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HyperFormula"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildFromSheets")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("MySheet1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=SUM(MySheet2!A1:A2)'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("MySheet2")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" changes "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hfInstance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearSheet")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MySheet2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("After:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hfInstance "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HyperFormula"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildFromSheets")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("MySheet1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=SUM(MySheet2!A1:A2)'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("MySheet2")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'10'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use `sheetId` instead of `sheetName`")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" changes "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hfInstance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearSheet")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("The only methods still accepting the "),e("code",[t._v("sheetName")]),t._v(" string parameter are now:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("addSheet()")]),t._v(": needs "),e("code",[t._v("sheetName")]),t._v(" to give a name to  the new sheet. Generates the new sheet's "),e("code",[t._v("sheetId")])]),t._v(" "),e("li",[e("code",[t._v("isItPossibleToAddSheet()")]),t._v(": needs "),e("code",[t._v("sheetName")]),t._v(" to check if it's possible to add a new sheet with that name")]),t._v(" "),e("li",[e("code",[t._v("doesSheetExist()")]),t._v(": needs "),e("code",[t._v("sheetName")]),t._v(" to check if a sheet with that name exists")]),t._v(" "),e("li",[e("code",[t._v("getSheetId()")]),t._v(": needs "),e("code",[t._v("sheetName")]),t._v(" to get the sheet's "),e("code",[t._v("sheetId")])])]),t._v(" "),e("p",[t._v("Also, these methods still accept the "),e("code",[t._v("newName")]),t._v(" string parameter:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("renameSheet()")]),t._v(": needs "),e("code",[t._v("newName")]),t._v(" to give a new name to an existing sheet")]),t._v(" "),e("li",[e("code",[t._v("isItPossibleToRenameSheet()")]),t._v(": needs "),e("code",[t._v("newName")]),t._v(" to check if it's possible to give that new name to an existing sheet")])]),t._v(" "),e("h2",{attrs:{id:"step-3-adapt-to-the-matrix-array-name-changes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-3-adapt-to-the-matrix-array-name-changes"}},[t._v("#")]),t._v(" Step 3: Adapt to the "),e("code",[t._v("matrix")]),t._v("->"),e("code",[t._v("array")]),t._v(" name changes")]),t._v(" "),e("p",[t._v("Adapt to the following changes in configuration option names, API method names and exception names:")]),t._v(" "),e("h3",{attrs:{id:"configuration-option-names"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-option-names"}},[t._v("#")]),t._v(" Configuration option names")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Before")]),t._v(" "),e("th",[t._v("After")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("matrixColumnSeparator")])]),t._v(" "),e("td",[e("code",[t._v("arrayColumnSeparator")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("matrixRowSeparator")])]),t._v(" "),e("td",[e("code",[t._v("arrayRowSeparator")])])])])]),t._v(" "),e("h3",{attrs:{id:"api-method-names"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api-method-names"}},[t._v("#")]),t._v(" API method names")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Before")]),t._v(" "),e("th",[t._v("After")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("matrixMapping")])]),t._v(" "),e("td",[e("code",[t._v("arrrayMapping")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("isCellPartOfMatrix")])]),t._v(" "),e("td",[e("code",[t._v("isCellPartOfArray")])])])])]),t._v(" "),e("h3",{attrs:{id:"exception-names"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exception-names"}},[t._v("#")]),t._v(" Exception names")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Before")]),t._v(" "),e("th",[t._v("After")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("SourceLocationHasMatrixError")])]),t._v(" "),e("td",[e("code",[t._v("SourceLocationHasArrayError")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("TargetLocationHasMatrixError")])]),t._v(" "),e("td",[e("code",[t._v("TargetLocationHasArrayError")])])])])]),t._v(" "),e("h2",{attrs:{id:"step-4-drop-the-matrix-formula-notation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-4-drop-the-matrix-formula-notation"}},[t._v("#")]),t._v(" Step 4: Drop the matrix formula notation")]),t._v(" "),e("p",[t._v("Switch from the matrix formula notation to the array formula notation.")]),t._v(" "),e("p",[t._v("For more information on the array formula notation, go "),e("RouterLink",{attrs:{to:"/guide/arrays.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),e("p",[t._v("Before:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ISEVEN")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A2")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A5")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Now, if the "),e("code",[t._v("useArrayArithmetic")]),t._v(" configuration option is set to "),e("code",[t._v("false")]),t._v(", use the "),e("code",[t._v("ARRAYFORMULA")]),t._v(" function to "),e("RouterLink",{attrs:{to:"/guide/arrays.html#enabling-the-array-arithmetic-mode-locally"}},[t._v("enable the array arithmetic mode locally")]),t._v(":")],1),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ARRAYFORMULA")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ISEVEN")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A2")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A5")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("But when the "),e("code",[t._v("useArrayArithmetic")]),t._v(" configuration option is set to "),e("code",[t._v("true")]),t._v(", you don't need to use the "),e("code",[t._v("ARRAYFORMULA")]),t._v(" function, as the array arithmetic mode is "),e("RouterLink",{attrs:{to:"/guide/arrays.html#enabling-the-array-arithmetic-mode-globally"}},[t._v("enabled globally")]),t._v(":")],1),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ISEVEN")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A2")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A5")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"step-5-drop-the-matrixdetection-and-matrixdetectionthreshold-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-5-drop-the-matrixdetection-and-matrixdetectionthreshold-options"}},[t._v("#")]),t._v(" Step 5: Drop the "),e("code",[t._v("matrixDetection")]),t._v(" and "),e("code",[t._v("matrixDetectionThreshold")]),t._v(" options")]),t._v(" "),e("p",[t._v("Remove the "),e("code",[t._v("matrixDetection")]),t._v(" and "),e("code",[t._v("matrixDetectionThreshold")]),t._v(" options from your HyperFormula configuration.")]),t._v(" "),e("p",[t._v("Before:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// define options ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("licenseKey")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gpl-v3'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("matrixDetection")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("matrixDetectionThreshold")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("150")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("After:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// define options ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("licenseKey")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gpl-v3'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// remove `matrixDetection` and `matrixDetectionThreshold`")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"step-6-switch-to-the-simplecellrange-type-argument"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-6-switch-to-the-simplecellrange-type-argument"}},[t._v("#")]),t._v(" Step 6: Switch to the "),e("code",[t._v("SimpleCellRange")]),t._v(" type argument")]),t._v(" "),e("p",[t._v("If you use any of the following methods, update your code to take the "),e("code",[t._v("SimpleCellRange")]),t._v(" type argument:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("copy()")])]),t._v(" "),e("li",[e("code",[t._v("cut()")])]),t._v(" "),e("li",[e("code",[t._v("getCellDependents()")])]),t._v(" "),e("li",[e("code",[t._v("getCellPrecedents()")])]),t._v(" "),e("li",[e("code",[t._v("getFillRangeData()")])]),t._v(" "),e("li",[e("code",[t._v("getRangeFormulas()")])]),t._v(" "),e("li",[e("code",[t._v("getRangeSerialized()")])]),t._v(" "),e("li",[e("code",[t._v("getRangeValues()")])]),t._v(" "),e("li",[e("code",[t._v("isItPossibleToMoveCells()")])]),t._v(" "),e("li",[e("code",[t._v("isItPossibleToSetCellContents()")])]),t._v(" "),e("li",[e("code",[t._v("moveCells()")])])]),t._v(" "),e("p",[t._v("Before:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hfInstance "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HyperFormula"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildFromArray")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// takes `simpleCellAddress`, `width`, and `height`")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns: [ [ 2 ] ]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" clipboardContent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hfInstance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("copy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sheet")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("col")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("row")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("After:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hfInstance "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HyperFormula"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildFromArray")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// takes `simpleCellRange`")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// returns: [ [ 2 ] ]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" clipboardContent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hfInstance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("copy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("start")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sheet")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("col")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("row")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("end")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sheet")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("col")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("row")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"step-7-adapt-to-the-array-changes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-7-adapt-to-the-array-changes"}},[t._v("#")]),t._v(" Step 7: Adapt to the array changes")]),t._v(" "),e("p",[t._v("If you use any of the following methods, adjust your application to the changes in their behavior:")]),t._v(" "),e("h3",{attrs:{id:"setcellcontents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setcellcontents"}},[t._v("#")]),t._v(" "),e("code",[t._v("setCellContents()")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("setCellContents()")]),t._v(" method now can override space occupied by spilled arrays.")]),t._v(" "),e("h3",{attrs:{id:"addrows-and-removerows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#addrows-and-removerows"}},[t._v("#")]),t._v(" "),e("code",[t._v("addRows()")]),t._v(" and "),e("code",[t._v("removeRows()")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("addRows()")]),t._v(" method now can add rows across a spilled array, without changing the array size.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("removeRows()")]),t._v(" method now can remove rows from across a spilled array, without changing the array size.")]),t._v(" "),e("h3",{attrs:{id:"addcolumns-and-removecolumns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#addcolumns-and-removecolumns"}},[t._v("#")]),t._v(" "),e("code",[t._v("addColumns()")]),t._v(" and "),e("code",[t._v("removeColumns()")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("addColumns()")]),t._v(" method now can add columns across a spilled array, without changing the array size.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("removeColumns()")]),t._v(" method now can remove columns from across a spilled array, without changing the array size.")])])}),[],!1,null,null,null);a.default=n.exports}}]);