webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Player/styles.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Player/styles.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".styles_playerContainer__2kTpC {\\n  width: 26.5rem;\\n  height: 100vh;\\n  padding: 3rem 4rem;\\n  background: var(--purple-500);\\n  color: var(--white);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n.styles_playerContainer__2kTpC header {\\n  display: flex;\\n  align-items: center;\\n  grid-gap: 1rem;\\n  gap: 1rem;\\n}\\n.styles_playerContainer__2kTpC strong {\\n  font-family: Lexend, sans-serif;\\n  font-weight: 600;\\n}\\n.styles_playerContainer__2kTpC footer {\\n  align-self: stretch;\\n}\\n.styles_playerContainer__2kTpC footer.styles_empty__XvMyC {\\n  opacity: 0.5;\\n}\\n\\n.styles_emptyPlayer__WHPi6 {\\n  width: 100%;\\n  height: 20rem;\\n  border: 1.5px dashed var(--purple-300);\\n  border-radius: 1.5rem;\\n  background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0, 0, 0, 0) 100%);\\n  padding: 4rem;\\n  text-align: center;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.styles_progress__ULW9V {\\n  display: flex;\\n  align-items: center;\\n  grid-gap: 0.5rem;\\n  gap: 0.5rem;\\n  font-size: 0.875rem;\\n}\\n.styles_progress__ULW9V span {\\n  display: inline-block;\\n  width: 4rem;\\n  text-align: center;\\n}\\n\\n.styles_slider__3_Mkb {\\n  flex: 1 1;\\n}\\n.styles_slider__3_Mkb .styles_emptySlider__3p9Ad {\\n  width: 100%;\\n  height: 4px;\\n  background: var(--purple-300);\\n  border-radius: 2px;\\n}\\n\\n.styles_buttons__i4fo8 {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  margin-top: 2.5rem;\\n  grid-gap: 1.5rem;\\n  gap: 1.5rem;\\n}\\n.styles_buttons__i4fo8 button {\\n  background: transparent;\\n  border: 0;\\n  font-size: 0;\\n}\\n.styles_buttons__i4fo8 button.styles_playButton__fmvI6 {\\n  width: 4rem;\\n  height: 4rem;\\n  border-radius: 1rem;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,cAAA;EACA,aAAA;EACA,kBAAA;EAEA,6BAAA;EACA,mBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,8BAAA;AADJ;AAGI;EACI,aAAA;EACA,mBAAA;EACA,cAAA;EAAA,SAAA;AADR;AAII;EACI,+BAAA;EACA,gBAAA;AAFR;AAKI;EACI,mBAAA;AAHR;AAKQ;EACI,YAAA;AAHZ;;AAQA;EACI,WAAA;EACA,aAAA;EACA,sCAAA;EACA,qBAAA;EACA,yFAAA;EAEA,aAAA;EACA,kBAAA;EAEA,aAAA;EACA,mBAAA;AAPJ;;AAUA;EACI,aAAA;EACA,mBAAA;EACA,gBAAA;EAAA,WAAA;EACA,mBAAA;AAPJ;AAQI;EACI,qBAAA;EACA,WAAA;EACA,kBAAA;AANR;;AASA;EACI,SAAA;AANJ;AAOI;EACI,WAAA;EACA,WAAA;EACA,6BAAA;EACA,kBAAA;AALR;;AAQA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,gBAAA;EAAA,WAAA;AALJ;AAMI;EACI,uBAAA;EACA,SAAA;EACA,YAAA;AAJR;AAKQ;EACI,WAAA;EACA,YAAA;EACA,mBAAA;AAHZ\",\"sourcesContent\":[\".playerContainer {\\n    width: 26.5rem;\\n    height: 100vh;\\n    padding: 3rem 4rem;\\n\\n    background: var(--purple-500);\\n    color: var(--white);\\n    \\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: space-between;\\n\\n    header {\\n        display: flex;\\n        align-items: center;\\n        gap: 1rem; //tanto em flex qto em grid, colocar espaçamento entre elementos do header\\n    }\\n\\n    strong {\\n        font-family: Lexend, sans-serif;\\n        font-weight: 600;\\n    }\\n\\n    footer {\\n        align-self: stretch; //faz ocupar a largura toda em um container com align items center\\n\\n        &.empty {\\n            opacity: 0.5;\\n        }\\n    }\\n}\\n\\n.emptyPlayer {\\n    width: 100%;\\n    height: 20rem;\\n    border: 1.5px dashed var(--purple-300);\\n    border-radius: 1.5rem;\\n    background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0, 0, 0, 0) 100%);\\n\\n    padding: 4rem;\\n    text-align: center;\\n\\n    display: flex;\\n    align-items: center;\\n}\\n\\n.progress {\\n    display: flex;\\n    align-items: center;\\n    gap: 0.5rem;\\n    font-size: 0.875rem;   \\n    span {\\n        display: inline-block;\\n        width: 4rem;\\n        text-align: center;\\n    }\\n}\\n.slider {\\n    flex: 1;\\n    .emptySlider {\\n        width: 100%;\\n        height: 4px;\\n        background: var(--purple-300);\\n        border-radius: 2px;\\n    }\\n}\\n.buttons {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    margin-top: 2.5rem;\\n    gap: 1.5rem;\\n    button {\\n        background: transparent;\\n        border: 0;\\n        font-size: 0;//por conter uma img no button, centraliza ela\\n        &.playButton {\\n            width: 4rem;\\n            height: 4rem;\\n            border-radius: 1rem;\\n        }        \\n\\n    }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"playerContainer\": \"styles_playerContainer__2kTpC\",\n\t\"empty\": \"styles_empty__XvMyC\",\n\t\"emptyPlayer\": \"styles_emptyPlayer__WHPi6\",\n\t\"progress\": \"styles_progress__ULW9V\",\n\t\"slider\": \"styles_slider__3_Mkb\",\n\t\"emptySlider\": \"styles_emptySlider__3p9Ad\",\n\t\"buttons\": \"styles_buttons__i4fo8\",\n\t\"playButton\": \"styles_playButton__fmvI6\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL3N0eWxlcy5tb2R1bGUuc2Nzcz8yOWRkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxtQ0FBbUMsbUJBQW1CLGtCQUFrQix1QkFBdUIsa0NBQWtDLHdCQUF3QixrQkFBa0IsMkJBQTJCLHdCQUF3QixtQ0FBbUMsR0FBRyx5Q0FBeUMsa0JBQWtCLHdCQUF3QixtQkFBbUIsY0FBYyxHQUFHLHlDQUF5QyxvQ0FBb0MscUJBQXFCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLDZEQUE2RCxpQkFBaUIsR0FBRyxnQ0FBZ0MsZ0JBQWdCLGtCQUFrQiwyQ0FBMkMsMEJBQTBCLDhGQUE4RixrQkFBa0IsdUJBQXVCLGtCQUFrQix3QkFBd0IsR0FBRyw2QkFBNkIsa0JBQWtCLHdCQUF3QixxQkFBcUIsZ0JBQWdCLHdCQUF3QixHQUFHLGdDQUFnQywwQkFBMEIsZ0JBQWdCLHVCQUF1QixHQUFHLDJCQUEyQixjQUFjLEdBQUcsb0RBQW9ELGdCQUFnQixnQkFBZ0Isa0NBQWtDLHVCQUF1QixHQUFHLDRCQUE0QixrQkFBa0Isd0JBQXdCLDRCQUE0Qix1QkFBdUIscUJBQXFCLGdCQUFnQixHQUFHLGlDQUFpQyw0QkFBNEIsY0FBYyxpQkFBaUIsR0FBRywwREFBMEQsZ0JBQWdCLGlCQUFpQix3QkFBd0IsR0FBRyxPQUFPLG1GQUFtRixVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVywyQ0FBMkMscUJBQXFCLG9CQUFvQix5QkFBeUIsc0NBQXNDLDBCQUEwQiwwQkFBMEIsNkJBQTZCLDBCQUEwQixxQ0FBcUMsZ0JBQWdCLHdCQUF3Qiw4QkFBOEIsb0JBQW9CLGtGQUFrRixnQkFBZ0IsMENBQTBDLDJCQUEyQixPQUFPLGdCQUFnQiw4QkFBOEIsd0ZBQXdGLDJCQUEyQixXQUFXLE9BQU8sR0FBRyxrQkFBa0Isa0JBQWtCLG9CQUFvQiw2Q0FBNkMsNEJBQTRCLGdHQUFnRyxzQkFBc0IseUJBQXlCLHNCQUFzQiwwQkFBMEIsR0FBRyxlQUFlLG9CQUFvQiwwQkFBMEIsa0JBQWtCLDBCQUEwQixlQUFlLGdDQUFnQyxzQkFBc0IsNkJBQTZCLE9BQU8sR0FBRyxXQUFXLGNBQWMsb0JBQW9CLHNCQUFzQixzQkFBc0Isd0NBQXdDLDZCQUE2QixPQUFPLEdBQUcsWUFBWSxvQkFBb0IsMEJBQTBCLDhCQUE4Qix5QkFBeUIsa0JBQWtCLGNBQWMsa0NBQWtDLG9CQUFvQix1QkFBdUIsc0VBQXNFLDBCQUEwQiwyQkFBMkIsa0NBQWtDLFdBQVcsaUJBQWlCLEdBQUcsbUJBQW1CO0FBQ2x6STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3NyYy9jb21wb25lbnRzL1BsYXllci9zdHlsZXMubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3R5bGVzX3BsYXllckNvbnRhaW5lcl9fMmtUcEMge1xcbiAgd2lkdGg6IDI2LjVyZW07XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogM3JlbSA0cmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLTUwMCk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uc3R5bGVzX3BsYXllckNvbnRhaW5lcl9fMmtUcEMgaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1nYXA6IDFyZW07XFxuICBnYXA6IDFyZW07XFxufVxcbi5zdHlsZXNfcGxheWVyQ29udGFpbmVyX18ya1RwQyBzdHJvbmcge1xcbiAgZm9udC1mYW1pbHk6IExleGVuZCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5zdHlsZXNfcGxheWVyQ29udGFpbmVyX18ya1RwQyBmb290ZXIge1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XFxuLnN0eWxlc19wbGF5ZXJDb250YWluZXJfXzJrVHBDIGZvb3Rlci5zdHlsZXNfZW1wdHlfX1h2TXlDIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnN0eWxlc19lbXB0eVBsYXllcl9fV0hQaTYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgYm9yZGVyOiAxLjVweCBkYXNoZWQgdmFyKC0tcHVycGxlLTMwMCk7XFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQzLjhkZWcsIHJnYmEoMTQ1LCAxMDAsIDI1MCwgMC44KSAwJSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN0eWxlc19wcm9ncmVzc19fVUxXOVYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWdhcDogMC41cmVtO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbn1cXG4uc3R5bGVzX3Byb2dyZXNzX19VTFc5ViBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3R5bGVzX3NsaWRlcl9fM19Na2Ige1xcbiAgZmxleDogMSAxO1xcbn1cXG4uc3R5bGVzX3NsaWRlcl9fM19Na2IgLnN0eWxlc19lbXB0eVNsaWRlcl9fM3A5QWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS0zMDApO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4uc3R5bGVzX2J1dHRvbnNfX2k0Zm84IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyLjVyZW07XFxuICBncmlkLWdhcDogMS41cmVtO1xcbiAgZ2FwOiAxLjVyZW07XFxufVxcbi5zdHlsZXNfYnV0dG9uc19faTRmbzggYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAwO1xcbn1cXG4uc3R5bGVzX2J1dHRvbnNfX2k0Zm84IGJ1dHRvbi5zdHlsZXNfcGxheUJ1dHRvbl9fZm12STYge1xcbiAgd2lkdGg6IDRyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLDZCQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBREo7QUFHSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBRFI7QUFJSTtFQUNJLCtCQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUtJO0VBQ0ksbUJBQUE7QUFIUjtBQUtRO0VBQ0ksWUFBQTtBQUhaOztBQVFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLHFCQUFBO0VBQ0EseUZBQUE7RUFFQSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFVQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQUEsV0FBQTtFQUNBLG1CQUFBO0FBUEo7QUFRSTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBTlI7O0FBU0E7RUFDSSxTQUFBO0FBTko7QUFPSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUxSOztBQVFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQUEsV0FBQTtBQUxKO0FBTUk7RUFDSSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBSlI7QUFLUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFIWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucGxheWVyQ29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDI2LjVyZW07XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHBhZGRpbmc6IDNyZW0gNHJlbTtcXG5cXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLTUwMCk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIGhlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMXJlbTsgLy90YW50byBlbSBmbGV4IHF0byBlbSBncmlkLCBjb2xvY2FyIGVzcGHDp2FtZW50byBlbnRyZSBlbGVtZW50b3MgZG8gaGVhZGVyXFxuICAgIH1cXG5cXG4gICAgc3Ryb25nIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBMZXhlbmQsIHNhbnMtc2VyaWY7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB9XFxuXFxuICAgIGZvb3RlciB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoOyAvL2ZheiBvY3VwYXIgYSBsYXJndXJhIHRvZGEgZW0gdW0gY29udGFpbmVyIGNvbSBhbGlnbiBpdGVtcyBjZW50ZXJcXG5cXG4gICAgICAgICYuZW1wdHkge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4uZW1wdHlQbGF5ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyMHJlbTtcXG4gICAgYm9yZGVyOiAxLjVweCBkYXNoZWQgdmFyKC0tcHVycGxlLTMwMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0My44ZGVnLCByZ2JhKDE0NSwgMTAwLCAyNTAsIDAuOCkgMCUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XFxuXFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2dyZXNzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07ICAgXFxuICAgIHNwYW4ge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDRyZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuLnNsaWRlciB7XFxuICAgIGZsZXg6IDE7XFxuICAgIC5lbXB0eVNsaWRlciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogNHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLTMwMCk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIH1cXG59XFxuLmJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgZm9udC1zaXplOiAwOy8vcG9yIGNvbnRlciB1bWEgaW1nIG5vIGJ1dHRvbiwgY2VudHJhbGl6YSBlbGFcXG4gICAgICAgICYucGxheUJ1dHRvbiB7XFxuICAgICAgICAgICAgd2lkdGg6IDRyZW07XFxuICAgICAgICAgICAgaGVpZ2h0OiA0cmVtO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgICAgICB9ICAgICAgICBcXG5cXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJwbGF5ZXJDb250YWluZXJcIjogXCJzdHlsZXNfcGxheWVyQ29udGFpbmVyX18ya1RwQ1wiLFxuXHRcImVtcHR5XCI6IFwic3R5bGVzX2VtcHR5X19Ydk15Q1wiLFxuXHRcImVtcHR5UGxheWVyXCI6IFwic3R5bGVzX2VtcHR5UGxheWVyX19XSFBpNlwiLFxuXHRcInByb2dyZXNzXCI6IFwic3R5bGVzX3Byb2dyZXNzX19VTFc5VlwiLFxuXHRcInNsaWRlclwiOiBcInN0eWxlc19zbGlkZXJfXzNfTWtiXCIsXG5cdFwiZW1wdHlTbGlkZXJcIjogXCJzdHlsZXNfZW1wdHlTbGlkZXJfXzNwOUFkXCIsXG5cdFwiYnV0dG9uc1wiOiBcInN0eWxlc19idXR0b25zX19pNGZvOFwiLFxuXHRcInBsYXlCdXR0b25cIjogXCJzdHlsZXNfcGxheUJ1dHRvbl9fZm12STZcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Player/styles.module.scss\n");

/***/ })

})