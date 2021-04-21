module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"date-fns\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/locale/pt-BR */ \"date-fns/locale/pt-BR\");\n/* harmony import */ var date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _utils_converDurationToTimeString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/converDurationToTimeString */ \"./src/utils/converDurationToTimeString.ts\");\n\nvar _jsxFileName = \"/home/joaopfa/Desktop/Cursos e imers\\xF5es/NLW 05 Podcastr/podcastrnext/src/pages/index.tsx\";\n//formas de consumo de uma api em next\n// SPA se precisamos que as infos sejam carregadas no momento q o user acessa a página,\n// aí se fazem melhores os outros métodos:\n// SSR Server Side Rendering\n// SSG\n\n\n\n\nfunction Home(props) {\n  // SPA: esse método n possibilita a iondexação por parte dos crowlers, \n  // por estes n aguardam a chamada completa da api finalizar para então \n  // coletar as infos disponíveis na página pra indexar no google e tals\n  // useEffect(() => {\n  //   fetch('http://localhost:3333/episodes')\n  //   .then(response => response.json())\n  //   .then(data => console.log(data))\n  // }, [])\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"index\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: JSON.stringify(props.episodes)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, this);\n} //SSG Static Server Generation\n\nconst getStaticProps = async () => {\n  const {\n    data\n  } = await _services_api__WEBPACK_IMPORTED_MODULE_3__[\"api\"].get('episodes', {\n    params: {\n      _limit: 12,\n      _sort: 'published_at',\n      _order: 'desc'\n    }\n  });\n  const episodes = data.map(episode => {\n    return {\n      id: episode.id,\n      title: episode.title,\n      thumbnail: episode.thumbnail,\n      members: episode.members,\n      publishedAt: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__[\"format\"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__[\"parseISO\"])(episode.published_at), 'd MMM yy', {\n        locale: date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_2___default.a\n      }),\n      duration: Number(episode.file.duration),\n      durationAsString: Object(_utils_converDurationToTimeString__WEBPACK_IMPORTED_MODULE_4__[\"convertDurationToTimeString\"])(Number(episode.file.duration)),\n      description: episode.description,\n      url: episode.file.url\n    };\n  });\n  return {\n    props: {\n      episodes: data\n    },\n    revalidate: 60 * 60 * 8 //a cada 8hras será ferada uma nova versão dessa página\n\n  };\n}; // // SSR p/ fzer SSR no next: \n// // dentro de qlqr página/arquivo na pasta pages\n// //exportar a seguinte função: \n// export async function getServerSideProps() {\n//   //fazendo isso, o next já entende q ele precisa executar essa função,\n//   //antes de exibir o conteudo da página pro usuário final\n//   const response = await fetch('http://localhost:3333/episodes')\n//   const data = await response.json()\n//   return{\n//     props: {\n//       episodes: data,\n//     }\n//   }//ao fazer isso, qdo a página carrega, no momento q a página é exibida,\n//   //os dados já vao estar ali, n será preciso fazr nenhuma requisição pro back end, \n//   // pq a requisição já é feita na camada do next, q é o servidor rodando a aplicação\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiSlNPTiIsInN0cmluZ2lmeSIsImVwaXNvZGVzIiwiZ2V0U3RhdGljUHJvcHMiLCJkYXRhIiwiYXBpIiwiZ2V0IiwicGFyYW1zIiwiX2xpbWl0IiwiX3NvcnQiLCJfb3JkZXIiLCJtYXAiLCJlcGlzb2RlIiwiaWQiLCJ0aXRsZSIsInRodW1ibmFpbCIsIm1lbWJlcnMiLCJwdWJsaXNoZWRBdCIsImZvcm1hdCIsInBhcnNlSVNPIiwicHVibGlzaGVkX2F0IiwibG9jYWxlIiwicHRCUiIsImR1cmF0aW9uIiwiTnVtYmVyIiwiZmlsZSIsImR1cmF0aW9uQXNTdHJpbmciLCJjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmciLCJkZXNjcmlwdGlvbiIsInVybCIsInJldmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFjZSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBZ0M7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsZ0JBQUlDLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixLQUFLLENBQUNHLFFBQXJCO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQsQyxDQUVEOztBQUNPLE1BQU1DLGNBQThCLEdBQUcsWUFBWTtBQUN4RCxRQUFNO0FBQUVDO0FBQUYsTUFBVyxNQUFNQyxpREFBRyxDQUFDQyxHQUFKLENBQVEsVUFBUixFQUFvQjtBQUN6Q0MsVUFBTSxFQUFFO0FBQ05DLFlBQU0sRUFBRSxFQURGO0FBRU5DLFdBQUssRUFBRSxjQUZEO0FBR05DLFlBQU0sRUFBRTtBQUhGO0FBRGlDLEdBQXBCLENBQXZCO0FBUUEsUUFBTVIsUUFBUSxHQUFHRSxJQUFJLENBQUNPLEdBQUwsQ0FBU0MsT0FBTyxJQUFJO0FBQ25DLFdBQU87QUFDTEMsUUFBRSxFQUFFRCxPQUFPLENBQUNDLEVBRFA7QUFFTEMsV0FBSyxFQUFFRixPQUFPLENBQUNFLEtBRlY7QUFHTEMsZUFBUyxFQUFFSCxPQUFPLENBQUNHLFNBSGQ7QUFJTEMsYUFBTyxFQUFFSixPQUFPLENBQUNJLE9BSlo7QUFLTEMsaUJBQVcsRUFBRUMsdURBQU0sQ0FBQ0MseURBQVEsQ0FBQ1AsT0FBTyxDQUFDUSxZQUFULENBQVQsRUFBaUMsVUFBakMsRUFBNkM7QUFBRUMsY0FBTSxFQUFFQyw0REFBSUE7QUFBZCxPQUE3QyxDQUxkO0FBTUxDLGNBQVEsRUFBRUMsTUFBTSxDQUFDWixPQUFPLENBQUNhLElBQVIsQ0FBYUYsUUFBZCxDQU5YO0FBT0xHLHNCQUFnQixFQUFFQyxxR0FBMkIsQ0FBQ0gsTUFBTSxDQUFDWixPQUFPLENBQUNhLElBQVIsQ0FBYUYsUUFBZCxDQUFQLENBUHhDO0FBUUxLLGlCQUFXLEVBQUVoQixPQUFPLENBQUNnQixXQVJoQjtBQVNMQyxTQUFHLEVBQUVqQixPQUFPLENBQUNhLElBQVIsQ0FBYUk7QUFUYixLQUFQO0FBV0QsR0FaZ0IsQ0FBakI7QUFjQSxTQUFNO0FBQ0o5QixTQUFLLEVBQUU7QUFDTEcsY0FBUSxFQUFFRTtBQURMLEtBREg7QUFJSjBCLGNBQVUsRUFBRSxLQUFLLEVBQUwsR0FBVSxDQUpsQixDQUlxQjs7QUFKckIsR0FBTjtBQU1ELENBN0JNLEMsQ0ErQlA7QUFDQTtBQUNBO0FBQ0E7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9mb3JtYXMgZGUgY29uc3VtbyBkZSB1bWEgYXBpIGVtIG5leHRcbi8vIFNQQSBzZSBwcmVjaXNhbW9zIHF1ZSBhcyBpbmZvcyBzZWphbSBjYXJyZWdhZGFzIG5vIG1vbWVudG8gcSBvIHVzZXIgYWNlc3NhIGEgcMOhZ2luYSxcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG4vLyBhw60gc2UgZmF6ZW0gbWVsaG9yZXMgb3Mgb3V0cm9zIG3DqXRvZG9zOlxuLy8gU1NSIFNlcnZlciBTaWRlIFJlbmRlcmluZ1xuLy8gU1NHXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBwdEJSIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9wdC1CUic7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XG5pbXBvcnQgeyBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbHMvY29udmVyRHVyYXRpb25Ub1RpbWVTdHJpbmdcIjtcblxudHlwZSBFcGlzb2RlID0ge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBtZW1iZXJzOiBzdHJpbmc7XG4gIC8vLi4uXG59XG5cbnR5cGUgSG9tZVByb3BzID0ge1xuICBlcGlzb2RlczogRXBpc29kZVtdO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHM6IEhvbWVQcm9wcykge1xuICAvLyBTUEE6IGVzc2UgbcOpdG9kbyBuIHBvc3NpYmlsaXRhIGEgaW9uZGV4YcOnw6NvIHBvciBwYXJ0ZSBkb3MgY3Jvd2xlcnMsIFxuICAvLyBwb3IgZXN0ZXMgbiBhZ3VhcmRhbSBhIGNoYW1hZGEgY29tcGxldGEgZGEgYXBpIGZpbmFsaXphciBwYXJhIGVudMOjbyBcbiAgLy8gY29sZXRhciBhcyBpbmZvcyBkaXNwb27DrXZlaXMgbmEgcMOhZ2luYSBwcmEgaW5kZXhhciBubyBnb29nbGUgZSB0YWxzXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9lcGlzb2RlcycpXG4gIC8vICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAvLyAgIC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG4gIC8vIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5pbmRleDwvaDE+XG4gICAgICA8cD57SlNPTi5zdHJpbmdpZnkocHJvcHMuZXBpc29kZXMpfTwvcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vL1NTRyBTdGF0aWMgU2VydmVyIEdlbmVyYXRpb25cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldCgnZXBpc29kZXMnLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICBfbGltaXQ6IDEyLFxuICAgICAgX3NvcnQ6ICdwdWJsaXNoZWRfYXQnLFxuICAgICAgX29yZGVyOiAnZGVzYydcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgZXBpc29kZXMgPSBkYXRhLm1hcChlcGlzb2RlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGVwaXNvZGUuaWQsXG4gICAgICB0aXRsZTogZXBpc29kZS50aXRsZSxcbiAgICAgIHRodW1ibmFpbDogZXBpc29kZS50aHVtYm5haWwsXG4gICAgICBtZW1iZXJzOiBlcGlzb2RlLm1lbWJlcnMsXG4gICAgICBwdWJsaXNoZWRBdDogZm9ybWF0KHBhcnNlSVNPKGVwaXNvZGUucHVibGlzaGVkX2F0KSwgJ2QgTU1NIHl5JywgeyBsb2NhbGU6IHB0QlIgfSksXG4gICAgICBkdXJhdGlvbjogTnVtYmVyKGVwaXNvZGUuZmlsZS5kdXJhdGlvbiksXG4gICAgICBkdXJhdGlvbkFzU3RyaW5nOiBjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmcoTnVtYmVyKGVwaXNvZGUuZmlsZS5kdXJhdGlvbikpLFxuICAgICAgZGVzY3JpcHRpb246IGVwaXNvZGUuZGVzY3JpcHRpb24sXG4gICAgICB1cmw6IGVwaXNvZGUuZmlsZS51cmxcbiAgICB9O1xuICB9KVxuXG4gIHJldHVybntcbiAgICBwcm9wczoge1xuICAgICAgZXBpc29kZXM6IGRhdGEsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogOCwgLy9hIGNhZGEgOGhyYXMgc2Vyw6EgZmVyYWRhIHVtYSBub3ZhIHZlcnPDo28gZGVzc2EgcMOhZ2luYVxuICB9XG59XG5cbi8vIC8vIFNTUiBwLyBmemVyIFNTUiBubyBuZXh0OiBcbi8vIC8vIGRlbnRybyBkZSBxbHFyIHDDoWdpbmEvYXJxdWl2byBuYSBwYXN0YSBwYWdlc1xuLy8gLy9leHBvcnRhciBhIHNlZ3VpbnRlIGZ1bsOnw6NvOiBcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIC8vICAgLy9mYXplbmRvIGlzc28sIG8gbmV4dCBqw6EgZW50ZW5kZSBxIGVsZSBwcmVjaXNhIGV4ZWN1dGFyIGVzc2EgZnVuw6fDo28sXG4gIC8vICAgLy9hbnRlcyBkZSBleGliaXIgbyBjb250ZXVkbyBkYSBww6FnaW5hIHBybyB1c3XDoXJpbyBmaW5hbFxuICAvLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMy9lcGlzb2RlcycpXG4gIC8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAvLyAgIHJldHVybntcbiAgICAvLyAgICAgcHJvcHM6IHtcbiAgICAgIC8vICAgICAgIGVwaXNvZGVzOiBkYXRhLFxuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgfS8vYW8gZmF6ZXIgaXNzbywgcWRvIGEgcMOhZ2luYSBjYXJyZWdhLCBubyBtb21lbnRvIHEgYSBww6FnaW5hIMOpIGV4aWJpZGEsXG4gICAgICAvLyAgIC8vb3MgZGFkb3MgasOhIHZhbyBlc3RhciBhbGksIG4gc2Vyw6EgcHJlY2lzbyBmYXpyIG5lbmh1bWEgcmVxdWlzacOnw6NvIHBybyBiYWNrIGVuZCwgXG4gICAgICAvLyAgIC8vIHBxIGEgcmVxdWlzacOnw6NvIGrDoSDDqSBmZWl0YSBuYSBjYW1hZGEgZG8gbmV4dCwgcSDDqSBvIHNlcnZpZG9yIHJvZGFuZG8gYSBhcGxpY2HDp8Ojb1xuICAgICAgLy8gfVxuICAgICAgXG4gICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/*! exports provided: api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"api\", function() { return api; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: 'http://localhost:3333/'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvYXBpLnRzPzBlOWQiXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsR0FBRyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDNUJDLFNBQU8sRUFBRTtBQURtQixDQUFiLENBQVoiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMy8nXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/utils/converDurationToTimeString.ts":
/*!*************************************************!*\
  !*** ./src/utils/converDurationToTimeString.ts ***!
  \*************************************************/
/*! exports provided: convertDurationToTimeString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertDurationToTimeString\", function() { return convertDurationToTimeString; });\nfunction convertDurationToTimeString(duration) {\n  const hours = Math.floor(duration / 3600);\n  const minutes = Math.floor(duration % 3600 / 60);\n  const seconds = duration % 60;\n  const timeString = [hours, minutes, seconds].map(unit => String(unit).padStart(2, '0')).join(':');\n  return timeString;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29udmVyRHVyYXRpb25Ub1RpbWVTdHJpbmcudHM/NTZiOSJdLCJuYW1lcyI6WyJjb252ZXJ0RHVyYXRpb25Ub1RpbWVTdHJpbmciLCJkdXJhdGlvbiIsImhvdXJzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJ0aW1lU3RyaW5nIiwibWFwIiwidW5pdCIsIlN0cmluZyIsInBhZFN0YXJ0Iiwiam9pbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPLFNBQVNBLDJCQUFULENBQXFDQyxRQUFyQyxFQUErRDtBQUNsRSxRQUFNQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxRQUFRLEdBQUcsSUFBdEIsQ0FBZDtBQUNBLFFBQU1JLE9BQU8sR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVlILFFBQVEsR0FBRyxJQUFaLEdBQW9CLEVBQS9CLENBQWhCO0FBQ0EsUUFBTUssT0FBTyxHQUFHTCxRQUFRLEdBQUcsRUFBM0I7QUFFQSxRQUFNTSxVQUFVLEdBQUcsQ0FBQ0wsS0FBRCxFQUFRRyxPQUFSLEVBQWlCQyxPQUFqQixFQUNkRSxHQURjLENBQ1ZDLElBQUksSUFBSUMsTUFBTSxDQUFDRCxJQUFELENBQU4sQ0FBYUUsUUFBYixDQUFzQixDQUF0QixFQUF5QixHQUF6QixDQURFLEVBRWRDLElBRmMsQ0FFVCxHQUZTLENBQW5CO0FBSUEsU0FBT0wsVUFBUDtBQUNIIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL2NvbnZlckR1cmF0aW9uVG9UaW1lU3RyaW5nLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREdXJhdGlvblRvVGltZVN0cmluZyhkdXJhdGlvbjogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoZHVyYXRpb24gLyAzNjAwKTtcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigoZHVyYXRpb24gJSAzNjAwKSAvIDYwKTtcbiAgICBjb25zdCBzZWNvbmRzID0gZHVyYXRpb24gJSA2MDtcblxuICAgIGNvbnN0IHRpbWVTdHJpbmcgPSBbaG91cnMsIG1pbnV0ZXMsIHNlY29uZHNdXG4gICAgICAgIC5tYXAodW5pdCA9PiBTdHJpbmcodW5pdCkucGFkU3RhcnQoMiwgJzAnKSlcbiAgICAgICAgLmpvaW4oJzonKVxuICAgIFxuICAgIHJldHVybiB0aW1lU3RyaW5nO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/converDurationToTimeString.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZuc1wiPzgwNTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZGF0ZS1mbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///date-fns\n");

/***/ }),

/***/ "date-fns/locale/pt-BR":
/*!****************************************!*\
  !*** external "date-fns/locale/pt-BR" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns/locale/pt-BR\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZucy9sb2NhbGUvcHQtQlJcIj81N2RkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImRhdGUtZm5zL2xvY2FsZS9wdC1CUi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zL2xvY2FsZS9wdC1CUlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///date-fns/locale/pt-BR\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });