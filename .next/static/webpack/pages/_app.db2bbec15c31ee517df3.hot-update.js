webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Player/styles.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Player/styles.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".styles_playerContainer__2kTpC {\\n  width: 26.5rem;\\n  height: 100vh;\\n  padding: 3rem 4rem;\\n  background: var(--purple-500);\\n  color: var(--white);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n.styles_playerContainer__2kTpC header {\\n  display: flex;\\n  align-items: center;\\n  grid-gap: 1rem;\\n  gap: 1rem;\\n}\\n.styles_playerContainer__2kTpC strong {\\n  font-family: Lexend, sans-serif;\\n  font-weight: 600;\\n}\\n.styles_playerContainer__2kTpC footer {\\n  align-self: stretch;\\n}\\n.styles_playerContainer__2kTpC footer.styles_empty__XvMyC {\\n  opacity: 0.5;\\n}\\n\\n.styles_emptyPlayer__WHPi6 {\\n  width: 100%;\\n  height: 20rem;\\n  border: 1.5px dashed var(--purple-300);\\n  border-radius: 1.5rem;\\n  background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0, 0, 0, 0) 100%);\\n  padding: 4rem;\\n  text-align: center;\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.styles_progress__ULW9V {\\n  display: flex;\\n  align-items: center;\\n  grid-gap: 0.5rem;\\n  gap: 0.5rem;\\n  font-size: 0.875rem;\\n}\\n.styles_progress__ULW9V span {\\n  display: inline-block;\\n  width: 4rem;\\n  text-align: center;\\n}\\n\\n.styles_slider__3_Mkb {\\n  flex: 1 1;\\n}\\n.styles_slider__3_Mkb .styles_emptySlider__3p9Ad {\\n  width: 100%;\\n  height: 4px;\\n  background: var(--purple-300);\\n  border-radius: 2px;\\n}\\n\\n.styles_buttons__i4fo8 {\\n  display: flex;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACI,cAAA;EACA,aAAA;EACA,kBAAA;EAEA,6BAAA;EACA,mBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,8BAAA;AADJ;AAGI;EACI,aAAA;EACA,mBAAA;EACA,cAAA;EAAA,SAAA;AADR;AAII;EACI,+BAAA;EACA,gBAAA;AAFR;AAKI;EACI,mBAAA;AAHR;AAKQ;EACI,YAAA;AAHZ;;AAQA;EACI,WAAA;EACA,aAAA;EACA,sCAAA;EACA,qBAAA;EACA,yFAAA;EAEA,aAAA;EACA,kBAAA;EAEA,aAAA;EACA,mBAAA;AAPJ;;AAUA;EACI,aAAA;EACA,mBAAA;EACA,gBAAA;EAAA,WAAA;EACA,mBAAA;AAPJ;AAQI;EACI,qBAAA;EACA,WAAA;EACA,kBAAA;AANR;;AASA;EACI,SAAA;AANJ;AAOI;EACI,WAAA;EACA,WAAA;EACA,6BAAA;EACA,kBAAA;AALR;;AAQA;EACI,aAAA;AALJ\",\"sourcesContent\":[\".playerContainer {\\n    width: 26.5rem;\\n    height: 100vh;\\n    padding: 3rem 4rem;\\n\\n    background: var(--purple-500);\\n    color: var(--white);\\n    \\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: space-between;\\n\\n    header {\\n        display: flex;\\n        align-items: center;\\n        gap: 1rem; //tanto em flex qto em grid, colocar espaçamento entre elementos do header\\n    }\\n\\n    strong {\\n        font-family: Lexend, sans-serif;\\n        font-weight: 600;\\n    }\\n\\n    footer {\\n        align-self: stretch; //faz ocupar a largura toda em um container com align items center\\n\\n        &.empty {\\n            opacity: 0.5;\\n        }\\n    }\\n}\\n\\n.emptyPlayer {\\n    width: 100%;\\n    height: 20rem;\\n    border: 1.5px dashed var(--purple-300);\\n    border-radius: 1.5rem;\\n    background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0, 0, 0, 0) 100%);\\n\\n    padding: 4rem;\\n    text-align: center;\\n\\n    display: flex;\\n    align-items: center;\\n}\\n\\n.progress {\\n    display: flex;\\n    align-items: center;\\n    gap: 0.5rem;\\n    font-size: 0.875rem;   \\n    span {\\n        display: inline-block;\\n        width: 4rem;\\n        text-align: center;\\n    }\\n}\\n.slider {\\n    flex: 1;\\n    .emptySlider {\\n        width: 100%;\\n        height: 4px;\\n        background: var(--purple-300);\\n        border-radius: 2px;\\n    }\\n}\\n.buttons {\\n    display: flex;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"playerContainer\": \"styles_playerContainer__2kTpC\",\n\t\"empty\": \"styles_empty__XvMyC\",\n\t\"emptyPlayer\": \"styles_emptyPlayer__WHPi6\",\n\t\"progress\": \"styles_progress__ULW9V\",\n\t\"slider\": \"styles_slider__3_Mkb\",\n\t\"emptySlider\": \"styles_emptySlider__3p9Ad\",\n\t\"buttons\": \"styles_buttons__i4fo8\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGxheWVyL3N0eWxlcy5tb2R1bGUuc2Nzcz8yOWRkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUhBQTREO0FBQ3RHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxtQ0FBbUMsbUJBQW1CLGtCQUFrQix1QkFBdUIsa0NBQWtDLHdCQUF3QixrQkFBa0IsMkJBQTJCLHdCQUF3QixtQ0FBbUMsR0FBRyx5Q0FBeUMsa0JBQWtCLHdCQUF3QixtQkFBbUIsY0FBYyxHQUFHLHlDQUF5QyxvQ0FBb0MscUJBQXFCLEdBQUcseUNBQXlDLHdCQUF3QixHQUFHLDZEQUE2RCxpQkFBaUIsR0FBRyxnQ0FBZ0MsZ0JBQWdCLGtCQUFrQiwyQ0FBMkMsMEJBQTBCLDhGQUE4RixrQkFBa0IsdUJBQXVCLGtCQUFrQix3QkFBd0IsR0FBRyw2QkFBNkIsa0JBQWtCLHdCQUF3QixxQkFBcUIsZ0JBQWdCLHdCQUF3QixHQUFHLGdDQUFnQywwQkFBMEIsZ0JBQWdCLHVCQUF1QixHQUFHLDJCQUEyQixjQUFjLEdBQUcsb0RBQW9ELGdCQUFnQixnQkFBZ0Isa0NBQWtDLHVCQUF1QixHQUFHLDRCQUE0QixrQkFBa0IsR0FBRyxPQUFPLG1GQUFtRixVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSwyQ0FBMkMscUJBQXFCLG9CQUFvQix5QkFBeUIsc0NBQXNDLDBCQUEwQiwwQkFBMEIsNkJBQTZCLDBCQUEwQixxQ0FBcUMsZ0JBQWdCLHdCQUF3Qiw4QkFBOEIsb0JBQW9CLGtGQUFrRixnQkFBZ0IsMENBQTBDLDJCQUEyQixPQUFPLGdCQUFnQiw4QkFBOEIsd0ZBQXdGLDJCQUEyQixXQUFXLE9BQU8sR0FBRyxrQkFBa0Isa0JBQWtCLG9CQUFvQiw2Q0FBNkMsNEJBQTRCLGdHQUFnRyxzQkFBc0IseUJBQXlCLHNCQUFzQiwwQkFBMEIsR0FBRyxlQUFlLG9CQUFvQiwwQkFBMEIsa0JBQWtCLDBCQUEwQixlQUFlLGdDQUFnQyxzQkFBc0IsNkJBQTZCLE9BQU8sR0FBRyxXQUFXLGNBQWMsb0JBQW9CLHNCQUFzQixzQkFBc0Isd0NBQXdDLDZCQUE2QixPQUFPLEdBQUcsWUFBWSxvQkFBb0IsR0FBRyxtQkFBbUI7QUFDOStHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3NyYy9jb21wb25lbnRzL1BsYXllci9zdHlsZXMubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3R5bGVzX3BsYXllckNvbnRhaW5lcl9fMmtUcEMge1xcbiAgd2lkdGg6IDI2LjVyZW07XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogM3JlbSA0cmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLTUwMCk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uc3R5bGVzX3BsYXllckNvbnRhaW5lcl9fMmtUcEMgaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1nYXA6IDFyZW07XFxuICBnYXA6IDFyZW07XFxufVxcbi5zdHlsZXNfcGxheWVyQ29udGFpbmVyX18ya1RwQyBzdHJvbmcge1xcbiAgZm9udC1mYW1pbHk6IExleGVuZCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5zdHlsZXNfcGxheWVyQ29udGFpbmVyX18ya1RwQyBmb290ZXIge1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG59XFxuLnN0eWxlc19wbGF5ZXJDb250YWluZXJfXzJrVHBDIGZvb3Rlci5zdHlsZXNfZW1wdHlfX1h2TXlDIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnN0eWxlc19lbXB0eVBsYXllcl9fV0hQaTYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgYm9yZGVyOiAxLjVweCBkYXNoZWQgdmFyKC0tcHVycGxlLTMwMCk7XFxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQzLjhkZWcsIHJnYmEoMTQ1LCAxMDAsIDI1MCwgMC44KSAwJSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN0eWxlc19wcm9ncmVzc19fVUxXOVYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWdhcDogMC41cmVtO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbn1cXG4uc3R5bGVzX3Byb2dyZXNzX19VTFc5ViBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3R5bGVzX3NsaWRlcl9fM19Na2Ige1xcbiAgZmxleDogMSAxO1xcbn1cXG4uc3R5bGVzX3NsaWRlcl9fM19Na2IgLnN0eWxlc19lbXB0eVNsaWRlcl9fM3A5QWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS0zMDApO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG5cXG4uc3R5bGVzX2J1dHRvbnNfX2k0Zm84IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBRUEsNkJBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFESjtBQUdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUFEUjtBQUlJO0VBQ0ksK0JBQUE7RUFDQSxnQkFBQTtBQUZSO0FBS0k7RUFDSSxtQkFBQTtBQUhSO0FBS1E7RUFDSSxZQUFBO0FBSFo7O0FBUUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSx5RkFBQTtFQUVBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQVBKOztBQVVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFBQSxXQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVFJO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFOUjs7QUFTQTtFQUNJLFNBQUE7QUFOSjtBQU9JO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBTFI7O0FBUUE7RUFDSSxhQUFBO0FBTEpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBsYXllckNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAyNi41cmVtO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBwYWRkaW5nOiAzcmVtIDRyZW07XFxuXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS01MDApO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICBoZWFkZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDFyZW07IC8vdGFudG8gZW0gZmxleCBxdG8gZW0gZ3JpZCwgY29sb2NhciBlc3Bhw6dhbWVudG8gZW50cmUgZWxlbWVudG9zIGRvIGhlYWRlclxcbiAgICB9XFxuXFxuICAgIHN0cm9uZyB7XFxuICAgICAgICBmb250LWZhbWlseTogTGV4ZW5kLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgfVxcblxcbiAgICBmb290ZXIge1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDsgLy9mYXogb2N1cGFyIGEgbGFyZ3VyYSB0b2RhIGVtIHVtIGNvbnRhaW5lciBjb20gYWxpZ24gaXRlbXMgY2VudGVyXFxuXFxuICAgICAgICAmLmVtcHR5IHtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLmVtcHR5UGxheWVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjByZW07XFxuICAgIGJvcmRlcjogMS41cHggZGFzaGVkIHZhcigtLXB1cnBsZS0zMDApO1xcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDMuOGRlZywgcmdiYSgxNDUsIDEwMCwgMjUwLCAwLjgpIDAlLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xcblxcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9ncmVzcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcbiAgICBmb250LXNpemU6IDAuODc1cmVtOyAgIFxcbiAgICBzcGFuIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIHdpZHRoOiA0cmVtO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxufVxcbi5zbGlkZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICAuZW1wdHlTbGlkZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDRweDtcXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS0zMDApO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICB9XFxufVxcbi5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicGxheWVyQ29udGFpbmVyXCI6IFwic3R5bGVzX3BsYXllckNvbnRhaW5lcl9fMmtUcENcIixcblx0XCJlbXB0eVwiOiBcInN0eWxlc19lbXB0eV9fWHZNeUNcIixcblx0XCJlbXB0eVBsYXllclwiOiBcInN0eWxlc19lbXB0eVBsYXllcl9fV0hQaTZcIixcblx0XCJwcm9ncmVzc1wiOiBcInN0eWxlc19wcm9ncmVzc19fVUxXOVZcIixcblx0XCJzbGlkZXJcIjogXCJzdHlsZXNfc2xpZGVyX18zX01rYlwiLFxuXHRcImVtcHR5U2xpZGVyXCI6IFwic3R5bGVzX2VtcHR5U2xpZGVyX18zcDlBZFwiLFxuXHRcImJ1dHRvbnNcIjogXCJzdHlsZXNfYnV0dG9uc19faTRmbzhcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Player/styles.module.scss\n");

/***/ })

})