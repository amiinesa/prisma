/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/prisma.js":
/*!***********************!*\
  !*** ./src/prisma.js ***!
  \***********************/
/***/ (() => {

eval("function createTable(data) {\n  // Récupération des paramètres de filtrage dans l'URL\n  var queryParams = new URLSearchParams(window.location.search);\n  var eyeColorFilter = queryParams.get('eyeColor');\n  var ageFilter = queryParams.get('age');\n\n  // Filtrage des données en fonction des paramètres\n  var filteredData = data;\n  if (eyeColorFilter) {\n    filteredData = filteredData.filter(function (person) {\n      return person.eyeColor === eyeColorFilter;\n    });\n  }\n  if (ageFilter) {\n    var ageRanges = [{\n      query: \"20-25\",\n      min: 20,\n      max: 25\n    }, {\n      query: \"26-30\",\n      min: 26,\n      max: 30\n    }, {\n      query: \"31-35\",\n      min: 31,\n      max: 35\n    }, {\n      query: \"36-41\",\n      min: 36,\n      max: 41\n    }];\n    var ageRange = ageRanges.find(function (range) {\n      return range.query === ageFilter;\n    });\n    filteredData = ageRange ? filteredData.filter(function (person) {\n      return person.age >= ageRange.min && person.age <= ageRange.max;\n    }) : [];\n  }\n\n  // Création du tableau HTML\n  var table = document.createElement('table');\n  var tableHTML;\n  if (filteredData.length === 0) {\n    tableHTML = \"\\n      <tbody>\\n        <tr>\\n          <td colspan=\\\"5\\\">No data found</td>\\n        </tr>\\n      </tbody>\\n    \";\n  } else {\n    tableHTML = \"\\n      <thead>\\n        <tr>\\n          <th>Nom</th>\\n          <th>Pr\\xE9nom</th>\\n          <th>\\xC2ge</th>\\n          <th>Couleur des yeux</th>\\n          <th>Email</th>\\n        </tr>\\n      </thead>\\n      <tbody>\\n        \".concat(filteredData.map(function (person) {\n      return \"\\n          <tr>\\n            <td>\".concat(person.name.last, \"</td>\\n            <td>\").concat(person.name.first, \"</td>\\n            <td>\").concat(person.age, \"</td>\\n            <td>\").concat(person.eyeColor, \"</td>\\n            <td>\").concat(person.email, \"</td>\\n          </tr>\\n        \");\n    }).join(''), \"\\n      </tbody>\\n    \");\n  }\n  table.innerHTML = tableHTML;\n  document.body.appendChild(table);\n}\nfetch('datas.json').then(function (response) {\n  return response.json();\n}).then(function (data) {\n  createTable(data);\n})[\"catch\"](function (error) {\n  console.error(error);\n});\n\n//# sourceURL=webpack:///./src/prisma.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/prisma.js"]();
/******/ 	
/******/ })()
;