(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica,\n    Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 8px 0;\n}\np {\n  margin: 0;\n}\n.spacer {\n  flex: 1;\n}\n/* Style the body */\n/* Header/logo Title */\n.header {\n  padding: 10px;\n  text-align: center;\n  background-color: #1976d2;\n  color: white;\n  height: 60px;\n  margin: 0px;\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n}\n/* Increase the font size of the heading */\n.header h1 {\n  font-size: 24px;\n}\n.filter {\n  padding: 5px 5px;\n  float: right;\n  flex: auto;\n  flex-direction: row;\n  font-weight: bold;\n  font-size: 16px;\n}\n.filter input {\n  width: 350px !important;\n}\n/* Sticky navbar - toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it \"sticks\" in place (like position:fixed). The sticky value is not supported in IE or Edge 15 and earlier versions. However, for these versions the navbar will inherit default position */\n.navbar {\n  overflow: hidden;\n  background-color: #333;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n}\n/* Style the navigation bar links */\n.navbar a {\n  float: left;\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 20px;\n  text-decoration: none;\n}\n/* Right-aligned link */\n.navbar a.right {\n  float: right;\n}\n/* Change color on hover */\n.navbar a:hover {\n  background-color: #ddd;\n  color: black;\n}\n/* Active/current link */\n.navbar a.active {\n  background-color: #666;\n  color: white;\n}\n/* Column container */\n.row { /* IE10 */\n  display: flex; /* IE10 */\n  flex-wrap: wrap;\n}\n/* Create two unequal columns that sits next to each other */\n/* Sidebar/left column */\n.side { /* IE10 */\n  flex: 20%;\n  background-color: #f1f1f1;\n  padding: 20px;\n}\n/* Main column */\n.main { /* IE10 */\n  flex: 80%;\n  background-color: white;\n  padding: 20px;\n}\n/* Fake image, just for this example */\n.fakeimg {\n  background-color: #aaa;\n  width: 100%;\n  padding: 20px;\n}\n/* Footer */\n.footer {\n  padding: 20px;\n  text-align: center;\n  background: #ddd;\n}\n.header img {\n  margin: 0 16px;\n}\n.tab {\n  float: left;\n  border: 1px solid #ccc;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n}\n/* Style the buttons inside the tab */\n.tab a {\n  display: block;\n  background-color: inherit;\n  color: #0e0d0d;\n  padding: 15px 10px;\n  width: 100%;\n  border: none;\n  outline: none;\n  text-align: left;\n  cursor: pointer;\n  transition: 0.3s;\n  font-size: 14px;\n}\n/* Change background color of buttons on hover */\n.tab a:hover {\n  color: #888;\n}\n/* Create an active/current \"tab button\" class */\n.tab a.active {\n  background-color: #ccc;\n}\n/* Style the tab content */\n.tabcontent {\n  float: left;\n  padding: 0px 5px;\n  border: 1px solid #ccc;\n  width: 85%;\n  border-left: none;\n  height: 100%;\n}\n.btn {\n  background-color: DodgerBlue; /* Blue background */\n  border: none; /* Remove borders */\n  color: white; /* White text */\n  padding: 12px 16px; /* Some padding */\n  font-size: 16px; /* Set a font size */\n  cursor: pointer; /* Mouse pointer on hover */\n}\n/* Darker background on mouse-over */\n.btn:hover {\n  background-color: RoyalBlue;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  border: 1px solid #ddd;\n}\ntd {\n  text-align: left;\n  padding: 16px;\n}\nth {\n  text-align: center;\n  padding: 16px;\n  color: rgb(212, 212, 212);\n  background-color: rgb(12, 12, 12);\n  cursor: pointer;\n  font-weight: bold;\n}\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n.tr-total {\n  background-color: lightblue !important;\n}\n.td-right {\n  text-align: right;\n  padding-right: 15px;\n}\n.td-center {\n  text-align: center;\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.save {\n  display: flex;\n  width: 50%;\n  float: left;\n}\n.component-heading {\n  display: flex;\n  margin: 5px 5px;\n}\n.component-heading h1 {\n  width: 80%;\n  flex: auto;\n  font-size: 20px;\n}\n.component-heading button {\n  text-align: right;\n}\n.form-container {\n    padding: 16px;    \n  }\n/* Full-width input fields */\n.form input[type=text], input[type=password] {\n    width: 100%;\n    padding: 15px;\n    margin: 5px 0 22px 0;\n    display: inline-block;\n    border: none;\n    background: #f1f1f1;\n  }\n.form input[type=text]:focus, input[type=password]:focus {\n    background-color: #ddd;\n    outline: none;\n  }\n/* Overwrite default styles of hr */\nhr {\n    border: 1px solid #f1f1f1;\n    margin-bottom: 25px;\n  }\n/* Set a style for the submit/register button */\n.btn-submit {\n    background-color: #4CAF50;\n    color: white;\n    padding: 16px 20px;\n    margin: 10px 0;\n    border: none;\n    cursor: pointer;\n    width: 15%;\n    opacity: 0.9;\n  }\n.btn-submit:hover {\n    opacity:1;\n  }\n.btn-cancel {\n    background-color: rgba(250, 152, 86, 0.904);\n    color: white;\n    padding: 16px 20px;\n    margin: 10px 10px;\n    border: none;\n    cursor: pointer;\n    width: 20%;\n    opacity: 0.9;\n  }\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px;\n  }\n  .sidenav a {\n    font-size: 18px;\n  }\n}\n/* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 700px) {\n  .row {\n    flex-direction: column;\n  }\n}\n/* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */\n@media screen and (max-width: 400px) {\n  .navbar a {\n    float: none;\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,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b0pBQW9KO0FBQ3BKO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJvZHkge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLFxuICAgIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxO1xufVxuXG4vKiBTdHlsZSB0aGUgYm9keSAqL1xuXG4vKiBIZWFkZXIvbG9nbyBUaXRsZSAqL1xuLmhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4vKiBJbmNyZWFzZSB0aGUgZm9udCBzaXplIG9mIHRoZSBoZWFkaW5nICovXG4uaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZmlsdGVyIHtcbiAgcGFkZGluZzogNXB4IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmbGV4OiBhdXRvO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZmlsdGVyIGlucHV0IHtcbiAgd2lkdGg6IDM1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIFN0aWNreSBuYXZiYXIgLSB0b2dnbGVzIGJldHdlZW4gcmVsYXRpdmUgYW5kIGZpeGVkLCBkZXBlbmRpbmcgb24gdGhlIHNjcm9sbCBwb3NpdGlvbi4gSXQgaXMgcG9zaXRpb25lZCByZWxhdGl2ZSB1bnRpbCBhIGdpdmVuIG9mZnNldCBwb3NpdGlvbiBpcyBtZXQgaW4gdGhlIHZpZXdwb3J0IC0gdGhlbiBpdCBcInN0aWNrc1wiIGluIHBsYWNlIChsaWtlIHBvc2l0aW9uOmZpeGVkKS4gVGhlIHN0aWNreSB2YWx1ZSBpcyBub3Qgc3VwcG9ydGVkIGluIElFIG9yIEVkZ2UgMTUgYW5kIGVhcmxpZXIgdmVyc2lvbnMuIEhvd2V2ZXIsIGZvciB0aGVzZSB2ZXJzaW9ucyB0aGUgbmF2YmFyIHdpbGwgaW5oZXJpdCBkZWZhdWx0IHBvc2l0aW9uICovXG4ubmF2YmFyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICB0b3A6IDA7XG59XG5cbi8qIFN0eWxlIHRoZSBuYXZpZ2F0aW9uIGJhciBsaW5rcyAqL1xuLm5hdmJhciBhIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIFJpZ2h0LWFsaWduZWQgbGluayAqL1xuLm5hdmJhciBhLnJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4vKiBDaGFuZ2UgY29sb3Igb24gaG92ZXIgKi9cbi5uYXZiYXIgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogQWN0aXZlL2N1cnJlbnQgbGluayAqL1xuLm5hdmJhciBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogQ29sdW1uIGNvbnRhaW5lciAqL1xuLnJvdyB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94OyAvKiBJRTEwICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7IC8qIElFMTAgKi9cbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4vKiBDcmVhdGUgdHdvIHVuZXF1YWwgY29sdW1ucyB0aGF0IHNpdHMgbmV4dCB0byBlYWNoIG90aGVyICovXG4vKiBTaWRlYmFyL2xlZnQgY29sdW1uICovXG4uc2lkZSB7XG4gIC1tcy1mbGV4OiAyMCU7IC8qIElFMTAgKi9cbiAgZmxleDogMjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4vKiBNYWluIGNvbHVtbiAqL1xuLm1haW4ge1xuICAtbXMtZmxleDogODAlOyAvKiBJRTEwICovXG4gIGZsZXg6IDgwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi8qIEZha2UgaW1hZ2UsIGp1c3QgZm9yIHRoaXMgZXhhbXBsZSAqL1xuLmZha2VpbWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLyogRm9vdGVyICovXG4uZm9vdGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xufVxuXG4uaGVhZGVyIGltZyB7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG4udGFiIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLyogU3R5bGUgdGhlIGJ1dHRvbnMgaW5zaWRlIHRoZSB0YWIgKi9cbi50YWIgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBjb2xvcjogIzBlMGQwZDtcbiAgcGFkZGluZzogMTVweCAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLyogQ2hhbmdlIGJhY2tncm91bmQgY29sb3Igb2YgYnV0dG9ucyBvbiBob3ZlciAqL1xuLnRhYiBhOmhvdmVyIHtcbiAgY29sb3I6ICM4ODg7XG59XG5cbi8qIENyZWF0ZSBhbiBhY3RpdmUvY3VycmVudCBcInRhYiBidXR0b25cIiBjbGFzcyAqL1xuLnRhYiBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi8qIFN0eWxlIHRoZSB0YWIgY29udGVudCAqL1xuLnRhYmNvbnRlbnQge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgd2lkdGg6IDg1JTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IERvZGdlckJsdWU7IC8qIEJsdWUgYmFja2dyb3VuZCAqL1xuICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSBib3JkZXJzICovXG4gIGNvbG9yOiB3aGl0ZTsgLyogV2hpdGUgdGV4dCAqL1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7IC8qIFNvbWUgcGFkZGluZyAqL1xuICBmb250LXNpemU6IDE2cHg7IC8qIFNldCBhIGZvbnQgc2l6ZSAqL1xuICBjdXJzb3I6IHBvaW50ZXI7IC8qIE1vdXNlIHBvaW50ZXIgb24gaG92ZXIgKi9cbn1cblxuLyogRGFya2VyIGJhY2tncm91bmQgb24gbW91c2Utb3ZlciAqL1xuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IFJveWFsQmx1ZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG59XG5cbnRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTZweDtcbn1cblxudGgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGNvbG9yOiByZ2IoMjEyLCAyMTIsIDIxMik7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMTIsIDEyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuLnRyLXRvdGFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlICFpbXBvcnRhbnQ7XG59XG5cbi50ZC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4udGQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4uc2F2ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA1MCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY29tcG9uZW50LWhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDVweCA1cHg7XG59XG4uY29tcG9uZW50LWhlYWRpbmcgaDEge1xuICB3aWR0aDogODAlO1xuICBmbGV4OiBhdXRvO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jb21wb25lbnQtaGVhZGluZyBidXR0b24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNnB4OyAgICBcbiAgfVxuICBcbiAgLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cbiAuZm9ybSBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW46IDVweCAwIDIycHggMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gIH1cbiAgXG4gLmZvcm0gaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBcbiAgLyogT3ZlcndyaXRlIGRlZmF1bHQgc3R5bGVzIG9mIGhyICovXG4gIGhyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIH1cbiAgXG4gIC8qIFNldCBhIHN0eWxlIGZvciB0aGUgc3VibWl0L3JlZ2lzdGVyIGJ1dHRvbiAqL1xuICAuYnRuLXN1Ym1pdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cbiAgXG4gIC5idG4tc3VibWl0OmhvdmVyIHtcbiAgICBvcGFjaXR5OjE7XG4gIH1cblxuICAuYnRuLWNhbmNlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDE1MiwgODYsIDAuOTA0KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgIG1hcmdpbjogMTBweCAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xuICAuc2lkZW5hdiB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gIH1cbiAgLnNpZGVuYXYgYSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG5cbi8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gd2hlbiB0aGUgc2NyZWVuIGlzIGxlc3MgdGhhbiA3MDBweCB3aWRlLCBtYWtlIHRoZSB0d28gY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLnJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNDAwcHggd2lkZSwgbWFrZSB0aGUgbmF2aWdhdGlvbiBsaW5rcyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLm5hdmJhciBhIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Projects\training\day2\myapp\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map