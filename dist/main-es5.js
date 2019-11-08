(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>About Us</h1>\r\n<div class=\"\">\r\n    <p>Angular 8 with Node js API and Deployement in heroku</p>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<!-- Toolbar -->\n\n<div class=\"header\">\n  <app-header></app-header>\n</div>\n<div class=\"navbar\">\n  <!--<a href=\"#\" class=\"active\">Home</a>\n        <a href=\"#\">Link</a>\n        <a href=\"#\">Link</a>\n        <a href=\"#\" class=\"right\">Link</a>-->\n</div>\n<div class=\"row\">\n  <div class=\"side\">\n    <div class=\"tab\">\n      <app-menu></app-menu>\n    </div>\n  </div>\n  <div class=\"main\">    \n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n<div class=\"footer\">\n  <app-footer></app-footer>\n</div>\n\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.footer.component.html": 
        /*!*********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.footer.component.html ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<footer>\r\n    <a href=\"#\"> @copy right info by {{Name}} </a>\r\n</footer>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.header.component.html": 
        /*!*********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.header.component.html ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n  .login-container {\r\n    float: right;\r\n    display: flex;\r\n    margin-left: 700px;\r\n  }\r\n\r\n  input[type=\"text\"],\r\n  input[type=\"password\"] {\r\n    padding: 6px;\r\n    margin-top: 8px;\r\n    margin-left: 5px;\r\n    font-size: 17px;\r\n    border: none;\r\n    width: 150px; /* adjust as needed (as long as it doesn't break the topnav) */\r\n  }\r\n\r\n  .login-container button {\r\n    float: right;\r\n    padding: 6px;\r\n    margin-top: 8px;\r\n    margin-left: 5px;\r\n    margin-right: 16px;\r\n    background: #ddd;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .login-container button:hover {\r\n    background: #ccc;\r\n  }\r\n\r\n  .head-div {\r\n    display: flex;\r\n    width: 50%;\r\n  }\r\n\r\n  .logout{\r\n      float: right;\r\n      padding-right: 100px;\r\n      margin-left: 700px;\r\n  }\r\n\r\n  /* Add responsiveness - On small screens, display the navbar vertically instead of horizontally */\r\n  @media screen and (max-width: 600px) {\r\n    .login-container {\r\n      float: none;\r\n    }\r\n    input[type=\"text\"],\r\n    input[type=\"password\"],\r\n    .login-container button {\r\n      float: none;\r\n      display: block;\r\n      text-align: left;\r\n      width: 100%;\r\n      margin: 0;\r\n      padding: 14px;\r\n    }\r\n    input[type=\"text\"],\r\n    input[type=\"password\"] {\r\n      border: 1px solid #ccc;\r\n    }\r\n  }\r\n</style>\r\n<div>\r\n  <img\r\n    width=\"40\"\r\n    alt=\"Angular Logo\"\r\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\r\n  />\r\n  <span>{{ Heading }}</span>\r\n  <div class=\"login-container\">     \r\n      <form *ngIf=\"!isAuth\">\r\n        <input\r\n          type=\"text\"\r\n          [(ngModel)]=\"model.userId\"\r\n          placeholder=\"Username\"\r\n          name=\"username\"\r\n        />\r\n        <input\r\n          type=\"password\"\r\n          [(ngModel)]=\"model.password\"\r\n          placeholder=\"Password\"\r\n          name=\"psw\"\r\n        />\r\n        <button type=\"button\" (click)=\"login()\">Login</button>\r\n      </form>\r\n    \r\n    <div>\r\n        <button *ngIf=\"isAuth\" type=\"button\" (click)=\"logout()\">Logout</button>\r\n    </div>    \r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.menu.component.html": 
        /*!*******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.menu.component.html ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("       \r\n    <a [routerLink]=\"'/customers'\" [routerLinkActive]=\"'active'\">Customer</a>\r\n    <a [routerLink]=\"'/orders'\" [routerLinkActive]=\"'active'\">Orders</a>\r\n    <a [routerLink]=\"'/about'\" [routerLinkActive]=\"'active'\">About Us</a>\r\n    <a [routerLink]=\"'/contact'\" [routerLinkActive]=\"'active'\">Contact Us</a>     ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n        input[type=text], select, textarea {\r\n          width: 100%;\r\n          padding: 12px;\r\n          border: 1px solid #ccc;\r\n          border-radius: 4px;\r\n          box-sizing: border-box;\r\n          margin-top: 6px;\r\n          margin-bottom: 16px;\r\n          resize: vertical;\r\n        }\r\n        \r\n        input[type=submit] {\r\n          background-color: #4CAF50;\r\n          color: white;\r\n          padding: 12px 20px;\r\n          border: none;\r\n          border-radius: 4px;\r\n          cursor: pointer;\r\n        }\r\n        \r\n        input[type=submit]:hover {\r\n          background-color: #45a049;\r\n        }\r\n        \r\n        .container {\r\n          border-radius: 5px;\r\n          background-color: #f2f2f2;\r\n          padding: 20px;\r\n        }\r\n        </style>\r\n<h3>Contact Form</h3>\r\n\r\n<div class=\"container\">\r\n  <form>\r\n    <label for=\"fname\">First Name</label>\r\n    <input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"Your name..\">\r\n\r\n    <label for=\"lname\">Last Name</label>\r\n    <input type=\"text\" id=\"lname\" name=\"lastname\" placeholder=\"Your last name..\">\r\n\r\n    <label for=\"country\">Country</label>\r\n    <select id=\"country\" name=\"country\">\r\n      <option value=\"australia\">Australia</option>\r\n      <option value=\"canada\">Canada</option>\r\n      <option value=\"usa\">USA</option>\r\n    </select>\r\n\r\n    <label for=\"subject\">Subject</label>\r\n    <textarea id=\"subject\" name=\"subject\" placeholder=\"Write something..\" style=\"height:100px\"></textarea>\r\n\r\n    <input type=\"submit\" value=\"Submit\">\r\n  </form>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>Customers</h1>\r\n<hr>\r\n<router-outlet></router-outlet>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer.new/customer.new.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer.new/customer.new.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n  /* Full-width input fields */\r\n  input[type=\"text\"],\r\n  input[type=\"password\"],\r\n  input[type=\"date\"],\r\n  select {\r\n    width: 100%;\r\n    padding: 15px;\r\n    margin: 5px 0 22px 0;\r\n    display: inline-block;\r\n    border: none;\r\n    background: #f1f1f1;\r\n  }\r\n\r\n  input[type=\"text\"]:focus,\r\n  input[type=\"password\"]:focus {\r\n    background-color: #ddd;\r\n    outline: none;\r\n  }\r\n</style>\r\n\r\n<form>\r\n  <div class=\"form-container\">\r\n    <h1>New Customer</h1>\r\n    <p>Please fill in this form to create an Customer.</p>\r\n    <hr />\r\n    <label for=\"name\"><b>Name</b></label>\r\n    <input type=\"text\" placeholder=\"Enter Name\" name=\"name\" required />\r\n\r\n    <label for=\"city\"><b>City</b></label>\r\n    <select name=\"city\" id=\"city\" required>\r\n      <option value=\"\">Select City</option>\r\n      <option value=\"Chennai\">Chennai</option>\r\n      <option value=\"Mumbai\">Mumbai</option>\r\n      <option value=\"Hyderabad\">Hyderabad</option>\r\n      <option value=\"New York\">New York</option>\r\n    </select>\r\n    <label for=\"since\"><b>Customer Since</b></label>\r\n    <input type=\"date\" placeholder=\"Customer Since\" name=\"since\" required />\r\n    <hr />\r\n\r\n    <p>\r\n      By creating an account you agree to our <a href=\"#\">Terms & Privacy</a>.\r\n    </p>\r\n    <button type=\"submit\" class=\"btn-submit\" (click)=\"Save()\">\r\n      <i class=\"fa fa-save\"></i> Save\r\n    </button>\r\n    <button type=\"submit\" class=\"btn-cancel\">\r\n      <i class=\"fa fa-eraser\"></i> Cancel\r\n    </button>\r\n  </div>\r\n</form>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/cutsomer.list/customer.list.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/cutsomer.list/customer.list.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"component-heading\">\r\n        <h1>{{title}}</h1>\r\n        <!--<button class=\"btn\" (click)=\"toogleCustomer()\"><i class=\"fa fa-bars\"></i> {{toogleText}}</button>-->\r\n        <a [routerLink]=\"[ '/customers/new']\"><i class=\"fa fa-bars\"></i> New Customer</a>        \r\n</div>\r\n<div *ngIf=\"isOpen\" [@shrinkOut]=\"isOpen ? 'in' : 'void'\">\r\n        <customer-table [customers]=\"lstCustomers\"></customer-table>\r\n</div>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/cutsomer.list/table/table.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/cutsomer.list/table/table.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"save\">\r\n   Save Search List : <input type=\"text\" [(ngModel)]=\"keyword\"/>\r\n   <button (click)=\"saveList()\">Save</button>|<button (click)=\"loadSavedList()\">Load</button>\r\n   \r\n</div>\r\n<div class=\"filter\" style=\"width: 50%;float: right\">\r\n    <app-list-filiter (changed)=\"applyFilter($event)\"></app-list-filiter>\r\n</div>\r\n<br>\r\n<table>\r\n    <thead>\r\n        <th (click)='sortCustomers(\"id\")'>Id</th>\r\n        <th (click)='sortCustomers(\"name\")'>Name</th>\r\n        <th (click)='sortCustomers(\"city\")'>City</th>\r\n        <th (click)='sortCustomers(\"customerSince\")'>Customer Since</th>\r\n        <th (click)='sortCustomers(\"orderTotal\")'>Order Total</th>\r\n    </thead>\r\n    <tbody>\r\n        <!--List of Customer-->        \r\n        <tr *ngFor=\"let customer of filtertedCustomers\" class=\"hero\" [@filterAnimation]=\"customersOrderTotal-1\">\r\n            <td>{{customer.id}}</td>\r\n            <td> <a [routerLink]=\"[ '/orders/list', customer.id ]\">{{customer.name | NameFormatter}}</a> </td>\r\n            <td>{{customer.city}}</td>\r\n            <td>{{customer.customerSince | date:\"dd-MMM-yyyy\"}}</td>\r\n            <td class=\"td-right\">{{customer.orderTotal | currency:\"INR\"}}</td>\r\n        </tr>\r\n        <!-- Total Amount -->\r\n        <tr *ngIf=\"customersOrderTotal > 0\" class=\"tr-total\">\r\n            <td colspan=\"4\">Total Amount</td>\r\n            <td class=\"td-right\">{{customersOrderTotal | currency: 'INR'}}</td>\r\n        </tr>\r\n        <!--No of Records-->\r\n        <tr *ngIf=\"(filtertedCustomers.length > 0)\">\r\n            <td colspan=\"5\">Total Record: {{filtertedCustomers.length}}</td>\r\n        </tr>\r\n        <tr *ngIf=\"!(filtertedCustomers.length > 0)\">\r\n            <td colspan=\"5\">No Record Found</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/list/order.list.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/list/order.list.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"component-heading\">\r\n        <h1>Orders for Customer Id : {{customerId}}</h1>\r\n        <button class=\"btn\" (click)=\"goBack()\"><i class=\"fa fa-rotate-left\"></i> Back</button>             \r\n</div>\r\n<table>\r\n    <tr>\r\n        <th>Order Id</th>\r\n        <th>Product</th>\r\n        <th>Unit Price</th>\r\n        <th>Order Quantity</th>\r\n    </tr>\r\n    <tr *ngFor=\"let order of orders\">\r\n        <td>{{order.orderId}}</td>\r\n        <td>{{order.product}}</td>\r\n        <td class=\"td-center\">{{order.unitPrice}}</td>\r\n        <td class=\"td-center\">{{order.orderQty}}</td>\r\n    </tr>\r\n</table>\r\n<div style=\"padding: 10px 10px;\">\r\n    <a [routerLink]=\"[ '/orders/new', customerId ]\"><i class=\"fa fa-edit\"></i> Add Order</a>  \r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/new/order.new.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/new/order.new.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n  /* Full-width input fields */\r\n  input[type=\"text\"],\r\n  input[type=\"number\"],\r\n  input[type=\"date\"],\r\n  select {\r\n    width: 100%;\r\n    padding: 15px;\r\n    margin: 5px 0 22px 0;\r\n    display: inline-block;\r\n    border: none;\r\n    background: #f1f1f1;\r\n  }\r\n\r\n  input[type=\"text\"]:focus,\r\n  input[type=\"number\"]:focus {\r\n    background-color: #ddd;\r\n    outline: none;\r\n  }\r\n\r\n  .error{\r\n      color: red;\r\n      padding: 50px 50px;\r\n  }\r\n</style>\r\n<div class=\"component-heading\">\r\n  <h1>Order for Customer : {{ customerId }}</h1>\r\n  <button class=\"btn\" (click)=\"goBack()\">\r\n    <i class=\"fa fa-rotate-left\"></i> Back\r\n  </button>\r\n</div>\r\n<div>\r\n  <form [formGroup]=\"orderForm\">\r\n    <div class=\"form-container\">\r\n      <h1>New Order</h1>\r\n      <p>Please fill in this form to create an Order.</p>\r\n      <hr />\r\n      <label for=\"qty\"><b>Total Quatity</b></label>\r\n      <input type=\"number\" formControlName=\"orderQty\" placeholder=\"Enter Quatity\" name=\"qty\" required />\r\n      <label for=\"product\"><b>Product</b></label>\r\n      <select name=\"product\" formControlName=\"product\" id=\"product\" required>\r\n        <option value=\"\">Select Product</option>\r\n        <option value=\"Footware\">Footware</option>\r\n        <option value=\"Fruit\">Fruit</option>\r\n        <option value=\"Grocery\">Grocery</option>\r\n        <option value=\"Vegitable\">Vegitable</option>\r\n        <option value=\"NonVegitable\">Non - Vegitable</option>\r\n      </select>\r\n      <label for=\"price\"><b>Price</b></label>\r\n      <input type=\"number\" formControlName=\"unitPrice\" placeholder=\"Price\" name=\"price\" required />\r\n      <button type=\"submit\" class=\"btn-submit\" (click)=\"submitOrder()\">\r\n        <i class=\"fa fa-save\"></i> Save\r\n      </button>\r\n      <button type=\"submit\" class=\"btn-cancel\">\r\n        <i class=\"fa fa-eraser\"></i> Cancel\r\n      </button>\r\n    </div>\r\n    <div class=\"error\">\r\n\r\n    </div>\r\n  </form>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/order.component.html": 
        /*!***********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/order.component.html ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h3>Orders</h3>\r\n<hr>\r\n<router-outlet></router-outlet>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/product/product.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/product/product.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h1>Product List</h1>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./node_modules/zone.js/dist/zone-evergreen.js": 
        /*!*****************************************************!*\
          !*** ./node_modules/zone.js/dist/zone-evergreen.js ***!
          \*****************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /**
            * @license
            * Copyright Google Inc. All Rights Reserved.
            *
            * Use of this source code is governed by an MIT-style license that can be
            * found in the LICENSE file at https://angular.io/license
            */
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            var Zone$1 = (function (global) {
                var performance = global['performance'];
                function mark(name) {
                    performance && performance['mark'] && performance['mark'](name);
                }
                function performanceMeasure(name, label) {
                    performance && performance['measure'] && performance['measure'](name, label);
                }
                mark('Zone');
                var checkDuplicate = global[('__zone_symbol__forceDuplicateZoneCheck')] === true;
                if (global['Zone']) {
                    // if global['Zone'] already exists (maybe zone.js was already loaded or
                    // some other lib also registered a global object named Zone), we may need
                    // to throw an error, but sometimes user may not want this error.
                    // For example,
                    // we have two web pages, page1 includes zone.js, page2 doesn't.
                    // and the 1st time user load page1 and page2, everything work fine,
                    // but when user load page2 again, error occurs because global['Zone'] already exists.
                    // so we add a flag to let user choose whether to throw this error or not.
                    // By default, if existing Zone is from zone.js, we will not throw the error.
                    if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
                        throw new Error('Zone already loaded.');
                    }
                    else {
                        return global['Zone'];
                    }
                }
                var Zone = /** @class */ (function () {
                    function Zone(parent, zoneSpec) {
                        this._parent = parent;
                        this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
                        this._properties = zoneSpec && zoneSpec.properties || {};
                        this._zoneDelegate =
                            new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
                    }
                    Zone.assertZonePatched = function () {
                        if (global['Promise'] !== patches['ZoneAwarePromise']) {
                            throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                                'has been overwritten.\n' +
                                'Most likely cause is that a Promise polyfill has been loaded ' +
                                'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                                'If you must load one, do so before loading zone.js.)');
                        }
                    };
                    Object.defineProperty(Zone, "root", {
                        get: function () {
                            var zone = Zone.current;
                            while (zone.parent) {
                                zone = zone.parent;
                            }
                            return zone;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Zone, "current", {
                        get: function () {
                            return _currentZoneFrame.zone;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Zone, "currentTask", {
                        get: function () {
                            return _currentTask;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Zone.__load_patch = function (name, fn) {
                        if (patches.hasOwnProperty(name)) {
                            if (checkDuplicate) {
                                throw Error('Already loaded patch: ' + name);
                            }
                        }
                        else if (!global['__Zone_disable_' + name]) {
                            var perfName = 'Zone:' + name;
                            mark(perfName);
                            patches[name] = fn(global, Zone, _api);
                            performanceMeasure(perfName, perfName);
                        }
                    };
                    Object.defineProperty(Zone.prototype, "parent", {
                        get: function () {
                            return this._parent;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Zone.prototype, "name", {
                        get: function () {
                            return this._name;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Zone.prototype.get = function (key) {
                        var zone = this.getZoneWith(key);
                        if (zone)
                            return zone._properties[key];
                    };
                    Zone.prototype.getZoneWith = function (key) {
                        var current = this;
                        while (current) {
                            if (current._properties.hasOwnProperty(key)) {
                                return current;
                            }
                            current = current._parent;
                        }
                        return null;
                    };
                    Zone.prototype.fork = function (zoneSpec) {
                        if (!zoneSpec)
                            throw new Error('ZoneSpec required!');
                        return this._zoneDelegate.fork(this, zoneSpec);
                    };
                    Zone.prototype.wrap = function (callback, source) {
                        if (typeof callback !== 'function') {
                            throw new Error('Expecting function got: ' + callback);
                        }
                        var _callback = this._zoneDelegate.intercept(this, callback, source);
                        var zone = this;
                        return function () {
                            return zone.runGuarded(_callback, this, arguments, source);
                        };
                    };
                    Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
                        _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
                        try {
                            return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                        }
                        finally {
                            _currentZoneFrame = _currentZoneFrame.parent;
                        }
                    };
                    Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
                        if (applyThis === void 0) { applyThis = null; }
                        _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
                        try {
                            try {
                                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                            }
                            catch (error) {
                                if (this._zoneDelegate.handleError(this, error)) {
                                    throw error;
                                }
                            }
                        }
                        finally {
                            _currentZoneFrame = _currentZoneFrame.parent;
                        }
                    };
                    Zone.prototype.runTask = function (task, applyThis, applyArgs) {
                        if (task.zone != this) {
                            throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                                (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
                        }
                        // https://github.com/angular/zone.js/issues/778, sometimes eventTask
                        // will run in notScheduled(canceled) state, we should not try to
                        // run such kind of task but just return
                        if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                            return;
                        }
                        var reEntryGuard = task.state != running;
                        reEntryGuard && task._transitionTo(running, scheduled);
                        task.runCount++;
                        var previousTask = _currentTask;
                        _currentTask = task;
                        _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
                        try {
                            if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                                task.cancelFn = undefined;
                            }
                            try {
                                return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                            }
                            catch (error) {
                                if (this._zoneDelegate.handleError(this, error)) {
                                    throw error;
                                }
                            }
                        }
                        finally {
                            // if the task's state is notScheduled or unknown, then it has already been cancelled
                            // we should not reset the state to scheduled
                            if (task.state !== notScheduled && task.state !== unknown) {
                                if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                                    reEntryGuard && task._transitionTo(scheduled, running);
                                }
                                else {
                                    task.runCount = 0;
                                    this._updateTaskCount(task, -1);
                                    reEntryGuard &&
                                        task._transitionTo(notScheduled, running, notScheduled);
                                }
                            }
                            _currentZoneFrame = _currentZoneFrame.parent;
                            _currentTask = previousTask;
                        }
                    };
                    Zone.prototype.scheduleTask = function (task) {
                        if (task.zone && task.zone !== this) {
                            // check if the task was rescheduled, the newZone
                            // should not be the children of the original zone
                            var newZone = this;
                            while (newZone) {
                                if (newZone === task.zone) {
                                    throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
                                }
                                newZone = newZone.parent;
                            }
                        }
                        task._transitionTo(scheduling, notScheduled);
                        var zoneDelegates = [];
                        task._zoneDelegates = zoneDelegates;
                        task._zone = this;
                        try {
                            task = this._zoneDelegate.scheduleTask(this, task);
                        }
                        catch (err) {
                            // should set task's state to unknown when scheduleTask throw error
                            // because the err may from reschedule, so the fromState maybe notScheduled
                            task._transitionTo(unknown, scheduling, notScheduled);
                            // TODO: @JiaLiPassion, should we check the result from handleError?
                            this._zoneDelegate.handleError(this, err);
                            throw err;
                        }
                        if (task._zoneDelegates === zoneDelegates) {
                            // we have to check because internally the delegate can reschedule the task.
                            this._updateTaskCount(task, 1);
                        }
                        if (task.state == scheduling) {
                            task._transitionTo(scheduled, scheduling);
                        }
                        return task;
                    };
                    Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
                        return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
                    };
                    Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
                        return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
                    };
                    Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
                        return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
                    };
                    Zone.prototype.cancelTask = function (task) {
                        if (task.zone != this)
                            throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                                (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
                        task._transitionTo(canceling, scheduled, running);
                        try {
                            this._zoneDelegate.cancelTask(this, task);
                        }
                        catch (err) {
                            // if error occurs when cancelTask, transit the state to unknown
                            task._transitionTo(unknown, canceling);
                            this._zoneDelegate.handleError(this, err);
                            throw err;
                        }
                        this._updateTaskCount(task, -1);
                        task._transitionTo(notScheduled, canceling);
                        task.runCount = 0;
                        return task;
                    };
                    Zone.prototype._updateTaskCount = function (task, count) {
                        var zoneDelegates = task._zoneDelegates;
                        if (count == -1) {
                            task._zoneDelegates = null;
                        }
                        for (var i = 0; i < zoneDelegates.length; i++) {
                            zoneDelegates[i]._updateTaskCount(task.type, count);
                        }
                    };
                    return Zone;
                }());
                Zone.__symbol__ = __symbol__;
                var DELEGATE_ZS = {
                    name: '',
                    onHasTask: function (delegate, _, target, hasTaskState) { return delegate.hasTask(target, hasTaskState); },
                    onScheduleTask: function (delegate, _, target, task) { return delegate.scheduleTask(target, task); },
                    onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) { return delegate.invokeTask(target, task, applyThis, applyArgs); },
                    onCancelTask: function (delegate, _, target, task) { return delegate.cancelTask(target, task); }
                };
                var ZoneDelegate = /** @class */ (function () {
                    function ZoneDelegate(zone, parentDelegate, zoneSpec) {
                        this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
                        this.zone = zone;
                        this._parentDelegate = parentDelegate;
                        this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
                        this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
                        this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
                        this._interceptZS =
                            zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
                        this._interceptDlgt =
                            zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
                        this._interceptCurrZone =
                            zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
                        this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
                        this._invokeDlgt =
                            zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
                        this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
                        this._handleErrorZS =
                            zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
                        this._handleErrorDlgt =
                            zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
                        this._handleErrorCurrZone =
                            zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
                        this._scheduleTaskZS =
                            zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
                        this._scheduleTaskDlgt = zoneSpec &&
                            (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
                        this._scheduleTaskCurrZone =
                            zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
                        this._invokeTaskZS =
                            zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
                        this._invokeTaskDlgt =
                            zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
                        this._invokeTaskCurrZone =
                            zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
                        this._cancelTaskZS =
                            zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
                        this._cancelTaskDlgt =
                            zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
                        this._cancelTaskCurrZone =
                            zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
                        this._hasTaskZS = null;
                        this._hasTaskDlgt = null;
                        this._hasTaskDlgtOwner = null;
                        this._hasTaskCurrZone = null;
                        var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
                        var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
                        if (zoneSpecHasTask || parentHasTask) {
                            // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                            // a case all task related interceptors must go through this ZD. We can't short circuit it.
                            this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                            this._hasTaskDlgt = parentDelegate;
                            this._hasTaskDlgtOwner = this;
                            this._hasTaskCurrZone = zone;
                            if (!zoneSpec.onScheduleTask) {
                                this._scheduleTaskZS = DELEGATE_ZS;
                                this._scheduleTaskDlgt = parentDelegate;
                                this._scheduleTaskCurrZone = this.zone;
                            }
                            if (!zoneSpec.onInvokeTask) {
                                this._invokeTaskZS = DELEGATE_ZS;
                                this._invokeTaskDlgt = parentDelegate;
                                this._invokeTaskCurrZone = this.zone;
                            }
                            if (!zoneSpec.onCancelTask) {
                                this._cancelTaskZS = DELEGATE_ZS;
                                this._cancelTaskDlgt = parentDelegate;
                                this._cancelTaskCurrZone = this.zone;
                            }
                        }
                    }
                    ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
                        return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                            new Zone(targetZone, zoneSpec);
                    };
                    ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
                        return this._interceptZS ?
                            this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                            callback;
                    };
                    ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
                        return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                            callback.apply(applyThis, applyArgs);
                    };
                    ZoneDelegate.prototype.handleError = function (targetZone, error) {
                        return this._handleErrorZS ?
                            this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                            true;
                    };
                    ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
                        var returnTask = task;
                        if (this._scheduleTaskZS) {
                            if (this._hasTaskZS) {
                                returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                            }
                            returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                            if (!returnTask)
                                returnTask = task;
                        }
                        else {
                            if (task.scheduleFn) {
                                task.scheduleFn(task);
                            }
                            else if (task.type == microTask) {
                                scheduleMicroTask(task);
                            }
                            else {
                                throw new Error('Task is missing scheduleFn.');
                            }
                        }
                        return returnTask;
                    };
                    ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
                        return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                            task.callback.apply(applyThis, applyArgs);
                    };
                    ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
                        var value;
                        if (this._cancelTaskZS) {
                            value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
                        }
                        else {
                            if (!task.cancelFn) {
                                throw Error('Task is not cancelable');
                            }
                            value = task.cancelFn(task);
                        }
                        return value;
                    };
                    ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
                        // hasTask should not throw error so other ZoneDelegate
                        // can still trigger hasTask callback
                        try {
                            this._hasTaskZS &&
                                this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
                        }
                        catch (err) {
                            this.handleError(targetZone, err);
                        }
                    };
                    ZoneDelegate.prototype._updateTaskCount = function (type, count) {
                        var counts = this._taskCounts;
                        var prev = counts[type];
                        var next = counts[type] = prev + count;
                        if (next < 0) {
                            throw new Error('More tasks executed then were scheduled.');
                        }
                        if (prev == 0 || next == 0) {
                            var isEmpty = {
                                microTask: counts['microTask'] > 0,
                                macroTask: counts['macroTask'] > 0,
                                eventTask: counts['eventTask'] > 0,
                                change: type
                            };
                            this.hasTask(this.zone, isEmpty);
                        }
                    };
                    return ZoneDelegate;
                }());
                var ZoneTask = /** @class */ (function () {
                    function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
                        this._zone = null;
                        this.runCount = 0;
                        this._zoneDelegates = null;
                        this._state = 'notScheduled';
                        this.type = type;
                        this.source = source;
                        this.data = options;
                        this.scheduleFn = scheduleFn;
                        this.cancelFn = cancelFn;
                        this.callback = callback;
                        var self = this;
                        // TODO: @JiaLiPassion options should have interface
                        if (type === eventTask && options && options.useG) {
                            this.invoke = ZoneTask.invokeTask;
                        }
                        else {
                            this.invoke = function () {
                                return ZoneTask.invokeTask.call(global, self, this, arguments);
                            };
                        }
                    }
                    ZoneTask.invokeTask = function (task, target, args) {
                        if (!task) {
                            task = this;
                        }
                        _numberOfNestedTaskFrames++;
                        try {
                            task.runCount++;
                            return task.zone.runTask(task, target, args);
                        }
                        finally {
                            if (_numberOfNestedTaskFrames == 1) {
                                drainMicroTaskQueue();
                            }
                            _numberOfNestedTaskFrames--;
                        }
                    };
                    Object.defineProperty(ZoneTask.prototype, "zone", {
                        get: function () {
                            return this._zone;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ZoneTask.prototype, "state", {
                        get: function () {
                            return this._state;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    ZoneTask.prototype.cancelScheduleRequest = function () {
                        this._transitionTo(notScheduled, scheduling);
                    };
                    ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
                        if (this._state === fromState1 || this._state === fromState2) {
                            this._state = toState;
                            if (toState == notScheduled) {
                                this._zoneDelegates = null;
                            }
                        }
                        else {
                            throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? ' or \'' + fromState2 + '\'' : '') + ", was '" + this._state + "'.");
                        }
                    };
                    ZoneTask.prototype.toString = function () {
                        if (this.data && typeof this.data.handleId !== 'undefined') {
                            return this.data.handleId.toString();
                        }
                        else {
                            return Object.prototype.toString.call(this);
                        }
                    };
                    // add toJSON method to prevent cyclic error when
                    // call JSON.stringify(zoneTask)
                    ZoneTask.prototype.toJSON = function () {
                        return {
                            type: this.type,
                            state: this.state,
                            source: this.source,
                            zone: this.zone.name,
                            runCount: this.runCount
                        };
                    };
                    return ZoneTask;
                }());
                //////////////////////////////////////////////////////
                //////////////////////////////////////////////////////
                ///  MICROTASK QUEUE
                //////////////////////////////////////////////////////
                //////////////////////////////////////////////////////
                var symbolSetTimeout = __symbol__('setTimeout');
                var symbolPromise = __symbol__('Promise');
                var symbolThen = __symbol__('then');
                var _microTaskQueue = [];
                var _isDrainingMicrotaskQueue = false;
                var nativeMicroTaskQueuePromise;
                function scheduleMicroTask(task) {
                    // if we are not running in any task, and there has not been anything scheduled
                    // we must bootstrap the initial task creation by manually scheduling the drain
                    if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
                        // We are not running in Task, so we need to kickstart the microtask queue.
                        if (!nativeMicroTaskQueuePromise) {
                            if (global[symbolPromise]) {
                                nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                            }
                        }
                        if (nativeMicroTaskQueuePromise) {
                            var nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                            if (!nativeThen) {
                                // native Promise is not patchable, we need to use `then` directly
                                // issue 1078
                                nativeThen = nativeMicroTaskQueuePromise['then'];
                            }
                            nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
                        }
                        else {
                            global[symbolSetTimeout](drainMicroTaskQueue, 0);
                        }
                    }
                    task && _microTaskQueue.push(task);
                }
                function drainMicroTaskQueue() {
                    if (!_isDrainingMicrotaskQueue) {
                        _isDrainingMicrotaskQueue = true;
                        while (_microTaskQueue.length) {
                            var queue = _microTaskQueue;
                            _microTaskQueue = [];
                            for (var i = 0; i < queue.length; i++) {
                                var task = queue[i];
                                try {
                                    task.zone.runTask(task, null, null);
                                }
                                catch (error) {
                                    _api.onUnhandledError(error);
                                }
                            }
                        }
                        _api.microtaskDrainDone();
                        _isDrainingMicrotaskQueue = false;
                    }
                }
                //////////////////////////////////////////////////////
                //////////////////////////////////////////////////////
                ///  BOOTSTRAP
                //////////////////////////////////////////////////////
                //////////////////////////////////////////////////////
                var NO_ZONE = { name: 'NO ZONE' };
                var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
                var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
                var patches = {};
                var _api = {
                    symbol: __symbol__,
                    currentZoneFrame: function () { return _currentZoneFrame; },
                    onUnhandledError: noop,
                    microtaskDrainDone: noop,
                    scheduleMicroTask: scheduleMicroTask,
                    showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
                    patchEventTarget: function () { return []; },
                    patchOnProperties: noop,
                    patchMethod: function () { return noop; },
                    bindArguments: function () { return []; },
                    patchThen: function () { return noop; },
                    patchMacroTask: function () { return noop; },
                    setNativePromise: function (NativePromise) {
                        // sometimes NativePromise.resolve static function
                        // is not ready yet, (such as core-js/es6.promise)
                        // so we need to check here.
                        if (NativePromise && typeof NativePromise.resolve === 'function') {
                            nativeMicroTaskQueuePromise = NativePromise.resolve(0);
                        }
                    },
                    patchEventPrototype: function () { return noop; },
                    isIEOrEdge: function () { return false; },
                    getGlobalObjects: function () { return undefined; },
                    ObjectDefineProperty: function () { return noop; },
                    ObjectGetOwnPropertyDescriptor: function () { return undefined; },
                    ObjectCreate: function () { return undefined; },
                    ArraySlice: function () { return []; },
                    patchClass: function () { return noop; },
                    wrapWithCurrentZone: function () { return noop; },
                    filterProperties: function () { return []; },
                    attachOriginToPatched: function () { return noop; },
                    _redefineProperty: function () { return noop; },
                    patchCallbacks: function () { return noop; }
                };
                var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
                var _currentTask = null;
                var _numberOfNestedTaskFrames = 0;
                function noop() { }
                function __symbol__(name) {
                    return '__zone_symbol__' + name;
                }
                performanceMeasure('Zone', 'Zone');
                return global['Zone'] = Zone;
            })(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
                var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
                var ObjectDefineProperty = Object.defineProperty;
                function readableObjectToString(obj) {
                    if (obj && obj.toString === Object.prototype.toString) {
                        var className = obj.constructor && obj.constructor.name;
                        return (className ? className : '') + ': ' + JSON.stringify(obj);
                    }
                    return obj ? obj.toString() : Object.prototype.toString.call(obj);
                }
                var __symbol__ = api.symbol;
                var _uncaughtPromiseErrors = [];
                var symbolPromise = __symbol__('Promise');
                var symbolThen = __symbol__('then');
                var creationTrace = '__creationTrace__';
                api.onUnhandledError = function (e) {
                    if (api.showUncaughtError()) {
                        var rejection = e && e.rejection;
                        if (rejection) {
                            console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
                        }
                        else {
                            console.error(e);
                        }
                    }
                };
                api.microtaskDrainDone = function () {
                    while (_uncaughtPromiseErrors.length) {
                        var _loop_1 = function () {
                            var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                            try {
                                uncaughtPromiseError.zone.runGuarded(function () {
                                    throw uncaughtPromiseError;
                                });
                            }
                            catch (error) {
                                handleUnhandledRejection(error);
                            }
                        };
                        while (_uncaughtPromiseErrors.length) {
                            _loop_1();
                        }
                    }
                };
                var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
                function handleUnhandledRejection(e) {
                    api.onUnhandledError(e);
                    try {
                        var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
                        if (handler && typeof handler === 'function') {
                            handler.call(this, e);
                        }
                    }
                    catch (err) {
                    }
                }
                function isThenable(value) {
                    return value && value.then;
                }
                function forwardResolution(value) {
                    return value;
                }
                function forwardRejection(rejection) {
                    return ZoneAwarePromise.reject(rejection);
                }
                var symbolState = __symbol__('state');
                var symbolValue = __symbol__('value');
                var symbolFinally = __symbol__('finally');
                var symbolParentPromiseValue = __symbol__('parentPromiseValue');
                var symbolParentPromiseState = __symbol__('parentPromiseState');
                var source = 'Promise.then';
                var UNRESOLVED = null;
                var RESOLVED = true;
                var REJECTED = false;
                var REJECTED_NO_CATCH = 0;
                function makeResolver(promise, state) {
                    return function (v) {
                        try {
                            resolvePromise(promise, state, v);
                        }
                        catch (err) {
                            resolvePromise(promise, false, err);
                        }
                        // Do not return value or you will break the Promise spec.
                    };
                }
                var once = function () {
                    var wasCalled = false;
                    return function wrapper(wrappedFunction) {
                        return function () {
                            if (wasCalled) {
                                return;
                            }
                            wasCalled = true;
                            wrappedFunction.apply(null, arguments);
                        };
                    };
                };
                var TYPE_ERROR = 'Promise resolved with itself';
                var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
                // Promise Resolution
                function resolvePromise(promise, state, value) {
                    var onceWrapper = once();
                    if (promise === value) {
                        throw new TypeError(TYPE_ERROR);
                    }
                    if (promise[symbolState] === UNRESOLVED) {
                        // should only get value.then once based on promise spec.
                        var then = null;
                        try {
                            if (typeof value === 'object' || typeof value === 'function') {
                                then = value && value.then;
                            }
                        }
                        catch (err) {
                            onceWrapper(function () {
                                resolvePromise(promise, false, err);
                            })();
                            return promise;
                        }
                        // if (value instanceof ZoneAwarePromise) {
                        if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                            value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                            value[symbolState] !== UNRESOLVED) {
                            clearRejectedNoCatch(value);
                            resolvePromise(promise, value[symbolState], value[symbolValue]);
                        }
                        else if (state !== REJECTED && typeof then === 'function') {
                            try {
                                then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                            }
                            catch (err) {
                                onceWrapper(function () {
                                    resolvePromise(promise, false, err);
                                })();
                            }
                        }
                        else {
                            promise[symbolState] = state;
                            var queue = promise[symbolValue];
                            promise[symbolValue] = value;
                            if (promise[symbolFinally] === symbolFinally) {
                                // the promise is generated by Promise.prototype.finally
                                if (state === RESOLVED) {
                                    // the state is resolved, should ignore the value
                                    // and use parent promise value
                                    promise[symbolState] = promise[symbolParentPromiseState];
                                    promise[symbolValue] = promise[symbolParentPromiseValue];
                                }
                            }
                            // record task information in value when error occurs, so we can
                            // do some additional work such as render longStackTrace
                            if (state === REJECTED && value instanceof Error) {
                                // check if longStackTraceZone is here
                                var trace = Zone.currentTask && Zone.currentTask.data &&
                                    Zone.currentTask.data[creationTrace];
                                if (trace) {
                                    // only keep the long stack trace into error when in longStackTraceZone
                                    ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                                }
                            }
                            for (var i = 0; i < queue.length;) {
                                scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                            }
                            if (queue.length == 0 && state == REJECTED) {
                                promise[symbolState] = REJECTED_NO_CATCH;
                                try {
                                    // try to print more readable error log
                                    throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                                        (value && value.stack ? '\n' + value.stack : ''));
                                }
                                catch (err) {
                                    var error = err;
                                    error.rejection = value;
                                    error.promise = promise;
                                    error.zone = Zone.current;
                                    error.task = Zone.currentTask;
                                    _uncaughtPromiseErrors.push(error);
                                    api.scheduleMicroTask(); // to make sure that it is running
                                }
                            }
                        }
                    }
                    // Resolving an already resolved promise is a noop.
                    return promise;
                }
                var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
                function clearRejectedNoCatch(promise) {
                    if (promise[symbolState] === REJECTED_NO_CATCH) {
                        // if the promise is rejected no catch status
                        // and queue.length > 0, means there is a error handler
                        // here to handle the rejected promise, we should trigger
                        // windows.rejectionhandled eventHandler or nodejs rejectionHandled
                        // eventHandler
                        try {
                            var handler = Zone[REJECTION_HANDLED_HANDLER];
                            if (handler && typeof handler === 'function') {
                                handler.call(this, { rejection: promise[symbolValue], promise: promise });
                            }
                        }
                        catch (err) {
                        }
                        promise[symbolState] = REJECTED;
                        for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                            if (promise === _uncaughtPromiseErrors[i].promise) {
                                _uncaughtPromiseErrors.splice(i, 1);
                            }
                        }
                    }
                }
                function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
                    clearRejectedNoCatch(promise);
                    var promiseState = promise[symbolState];
                    var delegate = promiseState ?
                        (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
                        (typeof onRejected === 'function') ? onRejected : forwardRejection;
                    zone.scheduleMicroTask(source, function () {
                        try {
                            var parentPromiseValue = promise[symbolValue];
                            var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                            if (isFinallyPromise) {
                                // if the promise is generated from finally call, keep parent promise's state and value
                                chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                                chainPromise[symbolParentPromiseState] = promiseState;
                            }
                            // should not pass value to finally callback
                            var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                                [] :
                                [parentPromiseValue]);
                            resolvePromise(chainPromise, true, value);
                        }
                        catch (error) {
                            // if error occurs, should always return this error
                            resolvePromise(chainPromise, false, error);
                        }
                    }, chainPromise);
                }
                var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
                var ZoneAwarePromise = /** @class */ (function () {
                    function ZoneAwarePromise(executor) {
                        var promise = this;
                        if (!(promise instanceof ZoneAwarePromise)) {
                            throw new Error('Must be an instanceof Promise.');
                        }
                        promise[symbolState] = UNRESOLVED;
                        promise[symbolValue] = []; // queue;
                        try {
                            executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
                        }
                        catch (error) {
                            resolvePromise(promise, false, error);
                        }
                    }
                    ZoneAwarePromise.toString = function () {
                        return ZONE_AWARE_PROMISE_TO_STRING;
                    };
                    ZoneAwarePromise.resolve = function (value) {
                        return resolvePromise(new this(null), RESOLVED, value);
                    };
                    ZoneAwarePromise.reject = function (error) {
                        return resolvePromise(new this(null), REJECTED, error);
                    };
                    ZoneAwarePromise.race = function (values) {
                        var resolve;
                        var reject;
                        var promise = new this(function (res, rej) {
                            resolve = res;
                            reject = rej;
                        });
                        function onResolve(value) {
                            resolve(value);
                        }
                        function onReject(error) {
                            reject(error);
                        }
                        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                            var value = values_1[_i];
                            if (!isThenable(value)) {
                                value = this.resolve(value);
                            }
                            value.then(onResolve, onReject);
                        }
                        return promise;
                    };
                    ZoneAwarePromise.all = function (values) {
                        var resolve;
                        var reject;
                        var promise = new this(function (res, rej) {
                            resolve = res;
                            reject = rej;
                        });
                        // Start at 2 to prevent prematurely resolving if .then is called immediately.
                        var unresolvedCount = 2;
                        var valueIndex = 0;
                        var resolvedValues = [];
                        var _loop_2 = function (value) {
                            if (!isThenable(value)) {
                                value = this_1.resolve(value);
                            }
                            var curValueIndex = valueIndex;
                            value.then(function (value) {
                                resolvedValues[curValueIndex] = value;
                                unresolvedCount--;
                                if (unresolvedCount === 0) {
                                    resolve(resolvedValues);
                                }
                            }, reject);
                            unresolvedCount++;
                            valueIndex++;
                        };
                        var this_1 = this;
                        for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
                            var value = values_2[_i];
                            _loop_2(value);
                        }
                        // Make the unresolvedCount zero-based again.
                        unresolvedCount -= 2;
                        if (unresolvedCount === 0) {
                            resolve(resolvedValues);
                        }
                        return promise;
                    };
                    Object.defineProperty(ZoneAwarePromise.prototype, Symbol.toStringTag, {
                        get: function () {
                            return 'Promise';
                        },
                        enumerable: true,
                        configurable: true
                    });
                    ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
                        var chainPromise = new this.constructor(null);
                        var zone = Zone.current;
                        if (this[symbolState] == UNRESOLVED) {
                            this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
                        }
                        else {
                            scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
                        }
                        return chainPromise;
                    };
                    ZoneAwarePromise.prototype.catch = function (onRejected) {
                        return this.then(null, onRejected);
                    };
                    ZoneAwarePromise.prototype.finally = function (onFinally) {
                        var chainPromise = new this.constructor(null);
                        chainPromise[symbolFinally] = symbolFinally;
                        var zone = Zone.current;
                        if (this[symbolState] == UNRESOLVED) {
                            this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
                        }
                        else {
                            scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
                        }
                        return chainPromise;
                    };
                    return ZoneAwarePromise;
                }());
                // Protect against aggressive optimizers dropping seemingly unused properties.
                // E.g. Closure Compiler in advanced mode.
                ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
                ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
                ZoneAwarePromise['race'] = ZoneAwarePromise.race;
                ZoneAwarePromise['all'] = ZoneAwarePromise.all;
                var NativePromise = global[symbolPromise] = global['Promise'];
                var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
                var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
                if (!desc || desc.configurable) {
                    desc && delete desc.writable;
                    desc && delete desc.value;
                    if (!desc) {
                        desc = { configurable: true, enumerable: true };
                    }
                    desc.get = function () {
                        // if we already set ZoneAwarePromise, use patched one
                        // otherwise return native one.
                        return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
                    };
                    desc.set = function (NewNativePromise) {
                        if (NewNativePromise === ZoneAwarePromise) {
                            // if the NewNativePromise is ZoneAwarePromise
                            // save to global
                            global[ZONE_AWARE_PROMISE] = NewNativePromise;
                        }
                        else {
                            // if the NewNativePromise is not ZoneAwarePromise
                            // for example: after load zone.js, some library just
                            // set es6-promise to global, if we set it to global
                            // directly, assertZonePatched will fail and angular
                            // will not loaded, so we just set the NewNativePromise
                            // to global[symbolPromise], so the result is just like
                            // we load ES6 Promise before zone.js
                            global[symbolPromise] = NewNativePromise;
                            if (!NewNativePromise.prototype[symbolThen]) {
                                patchThen(NewNativePromise);
                            }
                            api.setNativePromise(NewNativePromise);
                        }
                    };
                    ObjectDefineProperty(global, 'Promise', desc);
                }
                global['Promise'] = ZoneAwarePromise;
                var symbolThenPatched = __symbol__('thenPatched');
                function patchThen(Ctor) {
                    var proto = Ctor.prototype;
                    var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
                    if (prop && (prop.writable === false || !prop.configurable)) {
                        // check Ctor.prototype.then propertyDescriptor is writable or not
                        // in meteor env, writable is false, we should ignore such case
                        return;
                    }
                    var originalThen = proto.then;
                    // Keep a reference to the original method.
                    proto[symbolThen] = originalThen;
                    Ctor.prototype.then = function (onResolve, onReject) {
                        var _this = this;
                        var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                            originalThen.call(_this, resolve, reject);
                        });
                        return wrapped.then(onResolve, onReject);
                    };
                    Ctor[symbolThenPatched] = true;
                }
                api.patchThen = patchThen;
                function zoneify(fn) {
                    return function () {
                        var resultPromise = fn.apply(this, arguments);
                        if (resultPromise instanceof ZoneAwarePromise) {
                            return resultPromise;
                        }
                        var ctor = resultPromise.constructor;
                        if (!ctor[symbolThenPatched]) {
                            patchThen(ctor);
                        }
                        return resultPromise;
                    };
                }
                if (NativePromise) {
                    patchThen(NativePromise);
                    var fetch = global['fetch'];
                    if (typeof fetch == 'function') {
                        global[api.symbol('fetch')] = fetch;
                        global['fetch'] = zoneify(fetch);
                    }
                }
                // This is not part of public API, but it is useful for tests, so we expose it.
                Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
                return ZoneAwarePromise;
            });
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * Suppress closure compiler errors about unknown 'Zone' variable
             * @fileoverview
             * @suppress {undefinedVars,globalThis,missingRequire}
             */
            // issue #989, to reduce bundle size, use short name
            /** Object.getOwnPropertyDescriptor */
            var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            /** Object.defineProperty */
            var ObjectDefineProperty = Object.defineProperty;
            /** Object.getPrototypeOf */
            var ObjectGetPrototypeOf = Object.getPrototypeOf;
            /** Object.create */
            var ObjectCreate = Object.create;
            /** Array.prototype.slice */
            var ArraySlice = Array.prototype.slice;
            /** addEventListener string const */
            var ADD_EVENT_LISTENER_STR = 'addEventListener';
            /** removeEventListener string const */
            var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
            /** zoneSymbol addEventListener */
            var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
            /** zoneSymbol removeEventListener */
            var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
            /** true string const */
            var TRUE_STR = 'true';
            /** false string const */
            var FALSE_STR = 'false';
            /** __zone_symbol__ string const */
            var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
            function wrapWithCurrentZone(callback, source) {
                return Zone.current.wrap(callback, source);
            }
            function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
                return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
            }
            var zoneSymbol = Zone.__symbol__;
            var isWindowExists = typeof window !== 'undefined';
            var internalWindow = isWindowExists ? window : undefined;
            var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
            var REMOVE_ATTRIBUTE = 'removeAttribute';
            var NULL_ON_PROP_VALUE = [null];
            function bindArguments(args, source) {
                for (var i = args.length - 1; i >= 0; i--) {
                    if (typeof args[i] === 'function') {
                        args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
                    }
                }
                return args;
            }
            function patchPrototype(prototype, fnNames) {
                var source = prototype.constructor['name'];
                var _loop_3 = function (i) {
                    var name = fnNames[i];
                    var delegate = prototype[name];
                    if (delegate) {
                        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
                        if (!isPropertyWritable(prototypeDesc)) {
                            return "continue";
                        }
                        prototype[name] = (function (delegate) {
                            var patched = function () {
                                return delegate.apply(this, bindArguments(arguments, source + '.' + name));
                            };
                            attachOriginToPatched(patched, delegate);
                            return patched;
                        })(delegate);
                    }
                };
                for (var i = 0; i < fnNames.length; i++) {
                    _loop_3(i);
                }
            }
            function isPropertyWritable(propertyDesc) {
                if (!propertyDesc) {
                    return true;
                }
                if (propertyDesc.writable === false) {
                    return false;
                }
                return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
            }
            var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
            // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
            // this code.
            var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
                {}.toString.call(_global.process) === '[object process]');
            var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
            // we are in electron of nw, so we are both browser and nodejs
            // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
            // this code.
            var isMix = typeof _global.process !== 'undefined' &&
                {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
                !!(isWindowExists && internalWindow['HTMLElement']);
            var zoneSymbolEventNames = {};
            var wrapFn = function (event) {
                // https://github.com/angular/zone.js/issues/911, in IE, sometimes
                // event will be undefined, so we need to use window.event
                event = event || _global.event;
                if (!event) {
                    return;
                }
                var eventNameSymbol = zoneSymbolEventNames[event.type];
                if (!eventNameSymbol) {
                    eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
                }
                var target = this || event.target || _global;
                var listener = target[eventNameSymbol];
                var result;
                if (isBrowser && target === internalWindow && event.type === 'error') {
                    // window.onerror have different signiture
                    // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
                    // and onerror callback will prevent default when callback return true
                    var errorEvent = event;
                    result = listener &&
                        listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
                    if (result === true) {
                        event.preventDefault();
                    }
                }
                else {
                    result = listener && listener.apply(this, arguments);
                    if (result != undefined && !result) {
                        event.preventDefault();
                    }
                }
                return result;
            };
            function patchProperty(obj, prop, prototype) {
                var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
                if (!desc && prototype) {
                    // when patch window object, use prototype to check prop exist or not
                    var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
                    if (prototypeDesc) {
                        desc = { enumerable: true, configurable: true };
                    }
                }
                // if the descriptor not exists or is not configurable
                // just return
                if (!desc || !desc.configurable) {
                    return;
                }
                var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
                if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
                    return;
                }
                // A property descriptor cannot have getter/setter and be writable
                // deleting the writable and value properties avoids this error:
                //
                // TypeError: property descriptors must not specify a value or be writable when a
                // getter or setter has been specified
                delete desc.writable;
                delete desc.value;
                var originalDescGet = desc.get;
                var originalDescSet = desc.set;
                // substr(2) cuz 'onclick' -> 'click', etc
                var eventName = prop.substr(2);
                var eventNameSymbol = zoneSymbolEventNames[eventName];
                if (!eventNameSymbol) {
                    eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
                }
                desc.set = function (newValue) {
                    // in some of windows's onproperty callback, this is undefined
                    // so we need to check it
                    var target = this;
                    if (!target && obj === _global) {
                        target = _global;
                    }
                    if (!target) {
                        return;
                    }
                    var previousValue = target[eventNameSymbol];
                    if (previousValue) {
                        target.removeEventListener(eventName, wrapFn);
                    }
                    // issue #978, when onload handler was added before loading zone.js
                    // we should remove it with originalDescSet
                    if (originalDescSet) {
                        originalDescSet.apply(target, NULL_ON_PROP_VALUE);
                    }
                    if (typeof newValue === 'function') {
                        target[eventNameSymbol] = newValue;
                        target.addEventListener(eventName, wrapFn, false);
                    }
                    else {
                        target[eventNameSymbol] = null;
                    }
                };
                // The getter would return undefined for unassigned properties but the default value of an
                // unassigned property is null
                desc.get = function () {
                    // in some of windows's onproperty callback, this is undefined
                    // so we need to check it
                    var target = this;
                    if (!target && obj === _global) {
                        target = _global;
                    }
                    if (!target) {
                        return null;
                    }
                    var listener = target[eventNameSymbol];
                    if (listener) {
                        return listener;
                    }
                    else if (originalDescGet) {
                        // result will be null when use inline event attribute,
                        // such as <button onclick="func();">OK</button>
                        // because the onclick function is internal raw uncompiled handler
                        // the onclick will be evaluated when first time event was triggered or
                        // the property is accessed, https://github.com/angular/zone.js/issues/525
                        // so we should use original native get to retrieve the handler
                        var value = originalDescGet && originalDescGet.call(this);
                        if (value) {
                            desc.set.call(this, value);
                            if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                                target.removeAttribute(prop);
                            }
                            return value;
                        }
                    }
                    return null;
                };
                ObjectDefineProperty(obj, prop, desc);
                obj[onPropPatchedSymbol] = true;
            }
            function patchOnProperties(obj, properties, prototype) {
                if (properties) {
                    for (var i = 0; i < properties.length; i++) {
                        patchProperty(obj, 'on' + properties[i], prototype);
                    }
                }
                else {
                    var onProperties = [];
                    for (var prop in obj) {
                        if (prop.substr(0, 2) == 'on') {
                            onProperties.push(prop);
                        }
                    }
                    for (var j = 0; j < onProperties.length; j++) {
                        patchProperty(obj, onProperties[j], prototype);
                    }
                }
            }
            var originalInstanceKey = zoneSymbol('originalInstance');
            // wrap some native API on `window`
            function patchClass(className) {
                var OriginalClass = _global[className];
                if (!OriginalClass)
                    return;
                // keep original class in global
                _global[zoneSymbol(className)] = OriginalClass;
                _global[className] = function () {
                    var a = bindArguments(arguments, className);
                    switch (a.length) {
                        case 0:
                            this[originalInstanceKey] = new OriginalClass();
                            break;
                        case 1:
                            this[originalInstanceKey] = new OriginalClass(a[0]);
                            break;
                        case 2:
                            this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                            break;
                        case 3:
                            this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                            break;
                        case 4:
                            this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                            break;
                        default:
                            throw new Error('Arg list too long.');
                    }
                };
                // attach original delegate to patched function
                attachOriginToPatched(_global[className], OriginalClass);
                var instance = new OriginalClass(function () { });
                var prop;
                for (prop in instance) {
                    // https://bugs.webkit.org/show_bug.cgi?id=44721
                    if (className === 'XMLHttpRequest' && prop === 'responseBlob')
                        continue;
                    (function (prop) {
                        if (typeof instance[prop] === 'function') {
                            _global[className].prototype[prop] = function () {
                                return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                            };
                        }
                        else {
                            ObjectDefineProperty(_global[className].prototype, prop, {
                                set: function (fn) {
                                    if (typeof fn === 'function') {
                                        this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                                        // keep callback in wrapped function so we can
                                        // use it in Function.prototype.toString to return
                                        // the native one.
                                        attachOriginToPatched(this[originalInstanceKey][prop], fn);
                                    }
                                    else {
                                        this[originalInstanceKey][prop] = fn;
                                    }
                                },
                                get: function () {
                                    return this[originalInstanceKey][prop];
                                }
                            });
                        }
                    }(prop));
                }
                for (prop in OriginalClass) {
                    if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
                        _global[className][prop] = OriginalClass[prop];
                    }
                }
            }
            function copySymbolProperties(src, dest) {
                if (typeof Object.getOwnPropertySymbols !== 'function') {
                    return;
                }
                var symbols = Object.getOwnPropertySymbols(src);
                symbols.forEach(function (symbol) {
                    var desc = Object.getOwnPropertyDescriptor(src, symbol);
                    Object.defineProperty(dest, symbol, {
                        get: function () {
                            return src[symbol];
                        },
                        set: function (value) {
                            if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                                // if src[symbol] is not writable or not have a setter, just return
                                return;
                            }
                            src[symbol] = value;
                        },
                        enumerable: desc ? desc.enumerable : true,
                        configurable: desc ? desc.configurable : true
                    });
                });
            }
            var shouldCopySymbolProperties = false;
            function patchMethod(target, name, patchFn) {
                var proto = target;
                while (proto && !proto.hasOwnProperty(name)) {
                    proto = ObjectGetPrototypeOf(proto);
                }
                if (!proto && target[name]) {
                    // somehow we did not find it, but we can see it. This happens on IE for Window properties.
                    proto = target;
                }
                var delegateName = zoneSymbol(name);
                var delegate = null;
                if (proto && !(delegate = proto[delegateName])) {
                    delegate = proto[delegateName] = proto[name];
                    // check whether proto[name] is writable
                    // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
                    var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
                    if (isPropertyWritable(desc)) {
                        var patchDelegate_1 = patchFn(delegate, delegateName, name);
                        proto[name] = function () {
                            return patchDelegate_1(this, arguments);
                        };
                        attachOriginToPatched(proto[name], delegate);
                        if (shouldCopySymbolProperties) {
                            copySymbolProperties(delegate, proto[name]);
                        }
                    }
                }
                return delegate;
            }
            // TODO: @JiaLiPassion, support cancel task later if necessary
            function patchMacroTask(obj, funcName, metaCreator) {
                var setNative = null;
                function scheduleTask(task) {
                    var data = task.data;
                    data.args[data.cbIdx] = function () {
                        task.invoke.apply(this, arguments);
                    };
                    setNative.apply(data.target, data.args);
                    return task;
                }
                setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
                    var meta = metaCreator(self, args);
                    if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
                        return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
                    }
                    else {
                        // cause an error by calling it directly.
                        return delegate.apply(self, args);
                    }
                }; });
            }
            function attachOriginToPatched(patched, original) {
                patched[zoneSymbol('OriginalDelegate')] = original;
            }
            var isDetectedIEOrEdge = false;
            var ieOrEdge = false;
            function isIE() {
                try {
                    var ua = internalWindow.navigator.userAgent;
                    if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
                        return true;
                    }
                }
                catch (error) {
                }
                return false;
            }
            function isIEOrEdge() {
                if (isDetectedIEOrEdge) {
                    return ieOrEdge;
                }
                isDetectedIEOrEdge = true;
                try {
                    var ua = internalWindow.navigator.userAgent;
                    if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
                        ieOrEdge = true;
                    }
                }
                catch (error) {
                }
                return ieOrEdge;
            }
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            // override Function.prototype.toString to make zone.js patched function
            // look like native function
            Zone.__load_patch('toString', function (global) {
                // patch Func.prototype.toString to let them look like native
                var originalFunctionToString = Function.prototype.toString;
                var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
                var PROMISE_SYMBOL = zoneSymbol('Promise');
                var ERROR_SYMBOL = zoneSymbol('Error');
                var newFunctionToString = function toString() {
                    if (typeof this === 'function') {
                        var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
                        if (originalDelegate) {
                            if (typeof originalDelegate === 'function') {
                                return originalFunctionToString.call(originalDelegate);
                            }
                            else {
                                return Object.prototype.toString.call(originalDelegate);
                            }
                        }
                        if (this === Promise) {
                            var nativePromise = global[PROMISE_SYMBOL];
                            if (nativePromise) {
                                return originalFunctionToString.call(nativePromise);
                            }
                        }
                        if (this === Error) {
                            var nativeError = global[ERROR_SYMBOL];
                            if (nativeError) {
                                return originalFunctionToString.call(nativeError);
                            }
                        }
                    }
                    return originalFunctionToString.call(this);
                };
                newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
                Function.prototype.toString = newFunctionToString;
                // patch Object.prototype.toString to let them look like native
                var originalObjectToString = Object.prototype.toString;
                var PROMISE_OBJECT_TO_STRING = '[object Promise]';
                Object.prototype.toString = function () {
                    if (this instanceof Promise) {
                        return PROMISE_OBJECT_TO_STRING;
                    }
                    return originalObjectToString.call(this);
                };
            });
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @fileoverview
             * @suppress {missingRequire}
             */
            var passiveSupported = false;
            if (typeof window !== 'undefined') {
                try {
                    var options = Object.defineProperty({}, 'passive', {
                        get: function () {
                            passiveSupported = true;
                        }
                    });
                    window.addEventListener('test', options, options);
                    window.removeEventListener('test', options, options);
                }
                catch (err) {
                    passiveSupported = false;
                }
            }
            // an identifier to tell ZoneTask do not create a new invoke closure
            var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
                useG: true
            };
            var zoneSymbolEventNames$1 = {};
            var globalSources = {};
            var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
            var IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
            function patchEventTarget(_global, apis, patchOptions) {
                var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
                var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
                var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
                var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
                var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
                var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
                var PREPEND_EVENT_LISTENER = 'prependListener';
                var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
                var invokeTask = function (task, target, event) {
                    // for better performance, check isRemoved which is set
                    // by removeEventListener
                    if (task.isRemoved) {
                        return;
                    }
                    var delegate = task.callback;
                    if (typeof delegate === 'object' && delegate.handleEvent) {
                        // create the bind version of handleEvent when invoke
                        task.callback = function (event) { return delegate.handleEvent(event); };
                        task.originalDelegate = delegate;
                    }
                    // invoke static task.invoke
                    task.invoke(task, target, [event]);
                    var options = task.options;
                    if (options && typeof options === 'object' && options.once) {
                        // if options.once is true, after invoke once remove listener here
                        // only browser need to do this, nodejs eventEmitter will cal removeListener
                        // inside EventEmitter.once
                        var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
                        target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
                    }
                };
                // global shared zoneAwareCallback to handle all event callback with capture = false
                var globalZoneAwareCallback = function (event) {
                    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
                    // event will be undefined, so we need to use window.event
                    event = event || _global.event;
                    if (!event) {
                        return;
                    }
                    // event.target is needed for Samsung TV and SourceBuffer
                    // || global is needed https://github.com/angular/zone.js/issues/190
                    var target = this || event.target || _global;
                    var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
                    if (tasks) {
                        // invoke all tasks which attached to current target with given event.type and capture = false
                        // for performance concern, if task.length === 1, just invoke
                        if (tasks.length === 1) {
                            invokeTask(tasks[0], target, event);
                        }
                        else {
                            // https://github.com/angular/zone.js/issues/836
                            // copy the tasks array before invoke, to avoid
                            // the callback will remove itself or other listener
                            var copyTasks = tasks.slice();
                            for (var i = 0; i < copyTasks.length; i++) {
                                if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                                    break;
                                }
                                invokeTask(copyTasks[i], target, event);
                            }
                        }
                    }
                };
                // global shared zoneAwareCallback to handle all event callback with capture = true
                var globalZoneAwareCaptureCallback = function (event) {
                    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
                    // event will be undefined, so we need to use window.event
                    event = event || _global.event;
                    if (!event) {
                        return;
                    }
                    // event.target is needed for Samsung TV and SourceBuffer
                    // || global is needed https://github.com/angular/zone.js/issues/190
                    var target = this || event.target || _global;
                    var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
                    if (tasks) {
                        // invoke all tasks which attached to current target with given event.type and capture = false
                        // for performance concern, if task.length === 1, just invoke
                        if (tasks.length === 1) {
                            invokeTask(tasks[0], target, event);
                        }
                        else {
                            // https://github.com/angular/zone.js/issues/836
                            // copy the tasks array before invoke, to avoid
                            // the callback will remove itself or other listener
                            var copyTasks = tasks.slice();
                            for (var i = 0; i < copyTasks.length; i++) {
                                if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                                    break;
                                }
                                invokeTask(copyTasks[i], target, event);
                            }
                        }
                    }
                };
                function patchEventTargetMethods(obj, patchOptions) {
                    if (!obj) {
                        return false;
                    }
                    var useGlobalCallback = true;
                    if (patchOptions && patchOptions.useG !== undefined) {
                        useGlobalCallback = patchOptions.useG;
                    }
                    var validateHandler = patchOptions && patchOptions.vh;
                    var checkDuplicate = true;
                    if (patchOptions && patchOptions.chkDup !== undefined) {
                        checkDuplicate = patchOptions.chkDup;
                    }
                    var returnTarget = false;
                    if (patchOptions && patchOptions.rt !== undefined) {
                        returnTarget = patchOptions.rt;
                    }
                    var proto = obj;
                    while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
                        proto = ObjectGetPrototypeOf(proto);
                    }
                    if (!proto && obj[ADD_EVENT_LISTENER]) {
                        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
                        proto = obj;
                    }
                    if (!proto) {
                        return false;
                    }
                    if (proto[zoneSymbolAddEventListener]) {
                        return false;
                    }
                    var eventNameToString = patchOptions && patchOptions.eventNameToString;
                    // a shared global taskData to pass data for scheduleEventTask
                    // so we do not need to create a new object just for pass some data
                    var taskData = {};
                    var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
                    var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
                        proto[REMOVE_EVENT_LISTENER];
                    var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
                        proto[LISTENERS_EVENT_LISTENER];
                    var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
                        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
                    var nativePrependEventListener;
                    if (patchOptions && patchOptions.prepend) {
                        nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                            proto[patchOptions.prepend];
                    }
                    function checkIsPassive(task) {
                        if (!passiveSupported && typeof taskData.options !== 'boolean' &&
                            typeof taskData.options !== 'undefined' && taskData.options !== null) {
                            // options is a non-null non-undefined object
                            // passive is not supported
                            // don't pass options as object
                            // just pass capture as a boolean
                            task.options = !!taskData.options.capture;
                            taskData.options = task.options;
                        }
                    }
                    var customScheduleGlobal = function (task) {
                        // if there is already a task for the eventName + capture,
                        // just return, because we use the shared globalZoneAwareCallback here.
                        if (taskData.isExisting) {
                            return;
                        }
                        checkIsPassive(task);
                        return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
                    };
                    var customCancelGlobal = function (task) {
                        // if task is not marked as isRemoved, this call is directly
                        // from Zone.prototype.cancelTask, we should remove the task
                        // from tasksList of target first
                        if (!task.isRemoved) {
                            var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                            var symbolEventName = void 0;
                            if (symbolEventNames) {
                                symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                            }
                            var existingTasks = symbolEventName && task.target[symbolEventName];
                            if (existingTasks) {
                                for (var i = 0; i < existingTasks.length; i++) {
                                    var existingTask = existingTasks[i];
                                    if (existingTask === task) {
                                        existingTasks.splice(i, 1);
                                        // set isRemoved to data for faster invokeTask check
                                        task.isRemoved = true;
                                        if (existingTasks.length === 0) {
                                            // all tasks for the eventName + capture have gone,
                                            // remove globalZoneAwareCallback and remove the task cache from target
                                            task.allRemoved = true;
                                            task.target[symbolEventName] = null;
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                        // if all tasks for the eventName + capture have gone,
                        // we will really remove the global event callback,
                        // if not, return
                        if (!task.allRemoved) {
                            return;
                        }
                        return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
                    };
                    var customScheduleNonGlobal = function (task) {
                        checkIsPassive(task);
                        return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
                    };
                    var customSchedulePrepend = function (task) {
                        return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
                    };
                    var customCancelNonGlobal = function (task) {
                        return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
                    };
                    var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
                    var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
                    var compareTaskCallbackVsDelegate = function (task, delegate) {
                        var typeOfDelegate = typeof delegate;
                        return (typeOfDelegate === 'function' && task.callback === delegate) ||
                            (typeOfDelegate === 'object' && task.originalDelegate === delegate);
                    };
                    var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
                    var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
                    var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
                        if (returnTarget === void 0) { returnTarget = false; }
                        if (prepend === void 0) { prepend = false; }
                        return function () {
                            var target = this || _global;
                            var eventName = arguments[0];
                            var delegate = arguments[1];
                            if (!delegate) {
                                return nativeListener.apply(this, arguments);
                            }
                            if (isNode && eventName === 'uncaughtException') {
                                // don't patch uncaughtException of nodejs to prevent endless loop
                                return nativeListener.apply(this, arguments);
                            }
                            // don't create the bind delegate function for handleEvent
                            // case here to improve addEventListener performance
                            // we will create the bind delegate when invoke
                            var isHandleEvent = false;
                            if (typeof delegate !== 'function') {
                                if (!delegate.handleEvent) {
                                    return nativeListener.apply(this, arguments);
                                }
                                isHandleEvent = true;
                            }
                            if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                                return;
                            }
                            var options = arguments[2];
                            if (blackListedEvents) {
                                // check black list
                                for (var i = 0; i < blackListedEvents.length; i++) {
                                    if (eventName === blackListedEvents[i]) {
                                        return nativeListener.apply(this, arguments);
                                    }
                                }
                            }
                            var capture;
                            var once = false;
                            if (options === undefined) {
                                capture = false;
                            }
                            else if (options === true) {
                                capture = true;
                            }
                            else if (options === false) {
                                capture = false;
                            }
                            else {
                                capture = options ? !!options.capture : false;
                                once = options ? !!options.once : false;
                            }
                            var zone = Zone.current;
                            var symbolEventNames = zoneSymbolEventNames$1[eventName];
                            var symbolEventName;
                            if (!symbolEventNames) {
                                // the code is duplicate, but I just want to get some better performance
                                var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
                                var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
                                var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                                var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                                zoneSymbolEventNames$1[eventName] = {};
                                zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                                zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                                symbolEventName = capture ? symbolCapture : symbol;
                            }
                            else {
                                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                            }
                            var existingTasks = target[symbolEventName];
                            var isExisting = false;
                            if (existingTasks) {
                                // already have task registered
                                isExisting = true;
                                if (checkDuplicate) {
                                    for (var i = 0; i < existingTasks.length; i++) {
                                        if (compare(existingTasks[i], delegate)) {
                                            // same callback, same capture, same event name, just return
                                            return;
                                        }
                                    }
                                }
                            }
                            else {
                                existingTasks = target[symbolEventName] = [];
                            }
                            var source;
                            var constructorName = target.constructor['name'];
                            var targetSource = globalSources[constructorName];
                            if (targetSource) {
                                source = targetSource[eventName];
                            }
                            if (!source) {
                                source = constructorName + addSource +
                                    (eventNameToString ? eventNameToString(eventName) : eventName);
                            }
                            // do not create a new object as task.data to pass those things
                            // just use the global shared one
                            taskData.options = options;
                            if (once) {
                                // if addEventListener with once options, we don't pass it to
                                // native addEventListener, instead we keep the once setting
                                // and handle ourselves.
                                taskData.options.once = false;
                            }
                            taskData.target = target;
                            taskData.capture = capture;
                            taskData.eventName = eventName;
                            taskData.isExisting = isExisting;
                            var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                            // keep taskData into data to allow onScheduleEventTask to access the task information
                            if (data) {
                                data.taskData = taskData;
                            }
                            var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                            // should clear taskData.target to avoid memory leak
                            // issue, https://github.com/angular/angular/issues/20442
                            taskData.target = null;
                            // need to clear up taskData because it is a global object
                            if (data) {
                                data.taskData = null;
                            }
                            // have to save those information to task in case
                            // application may call task.zone.cancelTask() directly
                            if (once) {
                                options.once = true;
                            }
                            if (!(!passiveSupported && typeof task.options === 'boolean')) {
                                // if not support passive, and we pass an option object
                                // to addEventListener, we should save the options to task
                                task.options = options;
                            }
                            task.target = target;
                            task.capture = capture;
                            task.eventName = eventName;
                            if (isHandleEvent) {
                                // save original delegate for compare to check duplicate
                                task.originalDelegate = delegate;
                            }
                            if (!prepend) {
                                existingTasks.push(task);
                            }
                            else {
                                existingTasks.unshift(task);
                            }
                            if (returnTarget) {
                                return target;
                            }
                        };
                    };
                    proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
                    if (nativePrependEventListener) {
                        proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
                    }
                    proto[REMOVE_EVENT_LISTENER] = function () {
                        var target = this || _global;
                        var eventName = arguments[0];
                        var options = arguments[2];
                        var capture;
                        if (options === undefined) {
                            capture = false;
                        }
                        else if (options === true) {
                            capture = true;
                        }
                        else if (options === false) {
                            capture = false;
                        }
                        else {
                            capture = options ? !!options.capture : false;
                        }
                        var delegate = arguments[1];
                        if (!delegate) {
                            return nativeRemoveEventListener.apply(this, arguments);
                        }
                        if (validateHandler &&
                            !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                            return;
                        }
                        var symbolEventNames = zoneSymbolEventNames$1[eventName];
                        var symbolEventName;
                        if (symbolEventNames) {
                            symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                        }
                        var existingTasks = symbolEventName && target[symbolEventName];
                        if (existingTasks) {
                            for (var i = 0; i < existingTasks.length; i++) {
                                var existingTask = existingTasks[i];
                                if (compare(existingTask, delegate)) {
                                    existingTasks.splice(i, 1);
                                    // set isRemoved to data for faster invokeTask check
                                    existingTask.isRemoved = true;
                                    if (existingTasks.length === 0) {
                                        // all tasks for the eventName + capture have gone,
                                        // remove globalZoneAwareCallback and remove the task cache from target
                                        existingTask.allRemoved = true;
                                        target[symbolEventName] = null;
                                    }
                                    existingTask.zone.cancelTask(existingTask);
                                    if (returnTarget) {
                                        return target;
                                    }
                                    return;
                                }
                            }
                        }
                        // issue 930, didn't find the event name or callback
                        // from zone kept existingTasks, the callback maybe
                        // added outside of zone, we need to call native removeEventListener
                        // to try to remove it.
                        return nativeRemoveEventListener.apply(this, arguments);
                    };
                    proto[LISTENERS_EVENT_LISTENER] = function () {
                        var target = this || _global;
                        var eventName = arguments[0];
                        var listeners = [];
                        var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
                        for (var i = 0; i < tasks.length; i++) {
                            var task = tasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            listeners.push(delegate);
                        }
                        return listeners;
                    };
                    proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
                        var target = this || _global;
                        var eventName = arguments[0];
                        if (!eventName) {
                            var keys = Object.keys(target);
                            for (var i = 0; i < keys.length; i++) {
                                var prop = keys[i];
                                var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                                var evtName = match && match[1];
                                // in nodejs EventEmitter, removeListener event is
                                // used for monitoring the removeListener call,
                                // so just keep removeListener eventListener until
                                // all other eventListeners are removed
                                if (evtName && evtName !== 'removeListener') {
                                    this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                                }
                            }
                            // remove removeListener listener finally
                            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
                        }
                        else {
                            var symbolEventNames = zoneSymbolEventNames$1[eventName];
                            if (symbolEventNames) {
                                var symbolEventName = symbolEventNames[FALSE_STR];
                                var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                                var tasks = target[symbolEventName];
                                var captureTasks = target[symbolCaptureEventName];
                                if (tasks) {
                                    var removeTasks = tasks.slice();
                                    for (var i = 0; i < removeTasks.length; i++) {
                                        var task = removeTasks[i];
                                        var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                                        this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                                    }
                                }
                                if (captureTasks) {
                                    var removeTasks = captureTasks.slice();
                                    for (var i = 0; i < removeTasks.length; i++) {
                                        var task = removeTasks[i];
                                        var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                                        this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                                    }
                                }
                            }
                        }
                        if (returnTarget) {
                            return this;
                        }
                    };
                    // for native toString patch
                    attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
                    attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
                    if (nativeRemoveAllListeners) {
                        attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
                    }
                    if (nativeListeners) {
                        attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
                    }
                    return true;
                }
                var results = [];
                for (var i = 0; i < apis.length; i++) {
                    results[i] = patchEventTargetMethods(apis[i], patchOptions);
                }
                return results;
            }
            function findEventTasks(target, eventName) {
                var foundTasks = [];
                for (var prop in target) {
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    if (evtName && (!eventName || evtName === eventName)) {
                        var tasks = target[prop];
                        if (tasks) {
                            for (var i = 0; i < tasks.length; i++) {
                                foundTasks.push(tasks[i]);
                            }
                        }
                    }
                }
                return foundTasks;
            }
            function patchEventPrototype(global, api) {
                var Event = global['Event'];
                if (Event && Event.prototype) {
                    api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
                        self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
                        // we need to call the native stopImmediatePropagation
                        // in case in some hybrid application, some part of
                        // application will be controlled by zone, some are not
                        delegate && delegate.apply(self, args);
                    }; });
                }
            }
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            function patchCallbacks(api, target, targetName, method, callbacks) {
                var symbol = Zone.__symbol__(method);
                if (target[symbol]) {
                    return;
                }
                var nativeDelegate = target[symbol] = target[method];
                target[method] = function (name, opts, options) {
                    if (opts && opts.prototype) {
                        callbacks.forEach(function (callback) {
                            var source = targetName + "." + method + "::" + callback;
                            var prototype = opts.prototype;
                            if (prototype.hasOwnProperty(callback)) {
                                var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                                if (descriptor && descriptor.value) {
                                    descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                                    api._redefineProperty(opts.prototype, callback, descriptor);
                                }
                                else if (prototype[callback]) {
                                    prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                                }
                            }
                            else if (prototype[callback]) {
                                prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                            }
                        });
                    }
                    return nativeDelegate.call(target, name, opts, options);
                };
                api.attachOriginToPatched(target[method], nativeDelegate);
            }
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /*
             * This is necessary for Chrome and Chrome mobile, to enable
             * things like redefining `createdCallback` on an element.
             */
            var zoneSymbol$1 = Zone.__symbol__;
            var _defineProperty = Object[zoneSymbol$1('defineProperty')] = Object.defineProperty;
            var _getOwnPropertyDescriptor = Object[zoneSymbol$1('getOwnPropertyDescriptor')] =
                Object.getOwnPropertyDescriptor;
            var _create = Object.create;
            var unconfigurablesKey = zoneSymbol$1('unconfigurables');
            function propertyPatch() {
                Object.defineProperty = function (obj, prop, desc) {
                    if (isUnconfigurable(obj, prop)) {
                        throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
                    }
                    var originalConfigurableFlag = desc.configurable;
                    if (prop !== 'prototype') {
                        desc = rewriteDescriptor(obj, prop, desc);
                    }
                    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
                };
                Object.defineProperties = function (obj, props) {
                    Object.keys(props).forEach(function (prop) {
                        Object.defineProperty(obj, prop, props[prop]);
                    });
                    return obj;
                };
                Object.create = function (obj, proto) {
                    if (typeof proto === 'object' && !Object.isFrozen(proto)) {
                        Object.keys(proto).forEach(function (prop) {
                            proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
                        });
                    }
                    return _create(obj, proto);
                };
                Object.getOwnPropertyDescriptor = function (obj, prop) {
                    var desc = _getOwnPropertyDescriptor(obj, prop);
                    if (desc && isUnconfigurable(obj, prop)) {
                        desc.configurable = false;
                    }
                    return desc;
                };
            }
            function _redefineProperty(obj, prop, desc) {
                var originalConfigurableFlag = desc.configurable;
                desc = rewriteDescriptor(obj, prop, desc);
                return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
            }
            function isUnconfigurable(obj, prop) {
                return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
            }
            function rewriteDescriptor(obj, prop, desc) {
                // issue-927, if the desc is frozen, don't try to change the desc
                if (!Object.isFrozen(desc)) {
                    desc.configurable = true;
                }
                if (!desc.configurable) {
                    // issue-927, if the obj is frozen, don't try to set the desc to obj
                    if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
                        _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
                    }
                    if (obj[unconfigurablesKey]) {
                        obj[unconfigurablesKey][prop] = true;
                    }
                }
                return desc;
            }
            function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
                try {
                    return _defineProperty(obj, prop, desc);
                }
                catch (error) {
                    if (desc.configurable) {
                        // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
                        // retry with the original flag value
                        if (typeof originalConfigurableFlag == 'undefined') {
                            delete desc.configurable;
                        }
                        else {
                            desc.configurable = originalConfigurableFlag;
                        }
                        try {
                            return _defineProperty(obj, prop, desc);
                        }
                        catch (error) {
                            var descJson = null;
                            try {
                                descJson = JSON.stringify(desc);
                            }
                            catch (error) {
                                descJson = desc.toString();
                            }
                            console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
                        }
                    }
                    else {
                        throw error;
                    }
                }
            }
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @fileoverview
             * @suppress {globalThis}
             */
            var globalEventHandlersEventNames = [
                'abort',
                'animationcancel',
                'animationend',
                'animationiteration',
                'auxclick',
                'beforeinput',
                'blur',
                'cancel',
                'canplay',
                'canplaythrough',
                'change',
                'compositionstart',
                'compositionupdate',
                'compositionend',
                'cuechange',
                'click',
                'close',
                'contextmenu',
                'curechange',
                'dblclick',
                'drag',
                'dragend',
                'dragenter',
                'dragexit',
                'dragleave',
                'dragover',
                'drop',
                'durationchange',
                'emptied',
                'ended',
                'error',
                'focus',
                'focusin',
                'focusout',
                'gotpointercapture',
                'input',
                'invalid',
                'keydown',
                'keypress',
                'keyup',
                'load',
                'loadstart',
                'loadeddata',
                'loadedmetadata',
                'lostpointercapture',
                'mousedown',
                'mouseenter',
                'mouseleave',
                'mousemove',
                'mouseout',
                'mouseover',
                'mouseup',
                'mousewheel',
                'orientationchange',
                'pause',
                'play',
                'playing',
                'pointercancel',
                'pointerdown',
                'pointerenter',
                'pointerleave',
                'pointerlockchange',
                'mozpointerlockchange',
                'webkitpointerlockerchange',
                'pointerlockerror',
                'mozpointerlockerror',
                'webkitpointerlockerror',
                'pointermove',
                'pointout',
                'pointerover',
                'pointerup',
                'progress',
                'ratechange',
                'reset',
                'resize',
                'scroll',
                'seeked',
                'seeking',
                'select',
                'selectionchange',
                'selectstart',
                'show',
                'sort',
                'stalled',
                'submit',
                'suspend',
                'timeupdate',
                'volumechange',
                'touchcancel',
                'touchmove',
                'touchstart',
                'touchend',
                'transitioncancel',
                'transitionend',
                'waiting',
                'wheel'
            ];
            var documentEventNames = [
                'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
                'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
                'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
                'visibilitychange', 'resume'
            ];
            var windowEventNames = [
                'absolutedeviceorientation',
                'afterinput',
                'afterprint',
                'appinstalled',
                'beforeinstallprompt',
                'beforeprint',
                'beforeunload',
                'devicelight',
                'devicemotion',
                'deviceorientation',
                'deviceorientationabsolute',
                'deviceproximity',
                'hashchange',
                'languagechange',
                'message',
                'mozbeforepaint',
                'offline',
                'online',
                'paint',
                'pageshow',
                'pagehide',
                'popstate',
                'rejectionhandled',
                'storage',
                'unhandledrejection',
                'unload',
                'userproximity',
                'vrdisplyconnected',
                'vrdisplaydisconnected',
                'vrdisplaypresentchange'
            ];
            var htmlElementEventNames = [
                'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
                'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
                'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
            ];
            var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
            var ieElementEventNames = [
                'activate',
                'afterupdate',
                'ariarequest',
                'beforeactivate',
                'beforedeactivate',
                'beforeeditfocus',
                'beforeupdate',
                'cellchange',
                'controlselect',
                'dataavailable',
                'datasetchanged',
                'datasetcomplete',
                'errorupdate',
                'filterchange',
                'layoutcomplete',
                'losecapture',
                'move',
                'moveend',
                'movestart',
                'propertychange',
                'resizeend',
                'resizestart',
                'rowenter',
                'rowexit',
                'rowsdelete',
                'rowsinserted',
                'command',
                'compassneedscalibration',
                'deactivate',
                'help',
                'mscontentzoom',
                'msmanipulationstatechanged',
                'msgesturechange',
                'msgesturedoubletap',
                'msgestureend',
                'msgesturehold',
                'msgesturestart',
                'msgesturetap',
                'msgotpointercapture',
                'msinertiastart',
                'mslostpointercapture',
                'mspointercancel',
                'mspointerdown',
                'mspointerenter',
                'mspointerhover',
                'mspointerleave',
                'mspointermove',
                'mspointerout',
                'mspointerover',
                'mspointerup',
                'pointerout',
                'mssitemodejumplistitemremoved',
                'msthumbnailclick',
                'stop',
                'storagecommit'
            ];
            var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
            var formEventNames = ['autocomplete', 'autocompleteerror'];
            var detailEventNames = ['toggle'];
            var frameEventNames = ['load'];
            var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
            var marqueeEventNames = ['bounce', 'finish', 'start'];
            var XMLHttpRequestEventNames = [
                'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
                'readystatechange'
            ];
            var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
            var websocketEventNames = ['close', 'error', 'open', 'message'];
            var workerEventNames = ['error', 'message'];
            var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
            function filterProperties(target, onProperties, ignoreProperties) {
                if (!ignoreProperties || ignoreProperties.length === 0) {
                    return onProperties;
                }
                var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
                if (!tip || tip.length === 0) {
                    return onProperties;
                }
                var targetIgnoreProperties = tip[0].ignoreProperties;
                return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
            }
            function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
                // check whether target is available, sometimes target will be undefined
                // because different browser or some 3rd party plugin.
                if (!target) {
                    return;
                }
                var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
                patchOnProperties(target, filteredProperties, prototype);
            }
            function propertyDescriptorPatch(api, _global) {
                if (isNode && !isMix) {
                    return;
                }
                if (Zone[api.symbol('patchEvents')]) {
                    // events are already been patched by legacy patch.
                    return;
                }
                var supportsWebSocket = typeof WebSocket !== 'undefined';
                var ignoreProperties = _global['__Zone_ignore_on_properties'];
                // for browsers that we can patch the descriptor:  Chrome & Firefox
                if (isBrowser) {
                    var internalWindow_1 = window;
                    var ignoreErrorProperties = isIE ? [{ target: internalWindow_1, ignoreProperties: ['error'] }] : [];
                    // in IE/Edge, onProp not exist in window object, but in WindowPrototype
                    // so we need to pass WindowPrototype to check onProp exist or not
                    patchFilteredProperties(internalWindow_1, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow_1));
                    patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
                    if (typeof internalWindow_1['SVGElement'] !== 'undefined') {
                        patchFilteredProperties(internalWindow_1['SVGElement'].prototype, eventNames, ignoreProperties);
                    }
                    patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
                    patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
                    patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
                    patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
                    patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
                    patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
                    patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
                    var HTMLMarqueeElement = internalWindow_1['HTMLMarqueeElement'];
                    if (HTMLMarqueeElement) {
                        patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
                    }
                    var Worker = internalWindow_1['Worker'];
                    if (Worker) {
                        patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
                    }
                }
                var XMLHttpRequest = _global['XMLHttpRequest'];
                if (XMLHttpRequest) {
                    // XMLHttpRequest is not available in ServiceWorker, so we need to check here
                    patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
                }
                var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
                if (XMLHttpRequestEventTarget) {
                    patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
                }
                if (typeof IDBIndex !== 'undefined') {
                    patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
                    patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
                    patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
                    patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
                    patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
                    patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
                }
                if (supportsWebSocket) {
                    patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
                }
            }
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            Zone.__load_patch('util', function (global, Zone, api) {
                api.patchOnProperties = patchOnProperties;
                api.patchMethod = patchMethod;
                api.bindArguments = bindArguments;
                api.patchMacroTask = patchMacroTask;
                // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
                // define which events will not be patched by `Zone.js`.
                // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
                // the name consistent with angular repo.
                // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
                // backwards compatibility.
                var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
                var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
                if (global[SYMBOL_UNPATCHED_EVENTS]) {
                    global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
                }
                if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
                    Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] =
                        global[SYMBOL_BLACK_LISTED_EVENTS];
                }
                api.patchEventPrototype = patchEventPrototype;
                api.patchEventTarget = patchEventTarget;
                api.isIEOrEdge = isIEOrEdge;
                api.ObjectDefineProperty = ObjectDefineProperty;
                api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
                api.ObjectCreate = ObjectCreate;
                api.ArraySlice = ArraySlice;
                api.patchClass = patchClass;
                api.wrapWithCurrentZone = wrapWithCurrentZone;
                api.filterProperties = filterProperties;
                api.attachOriginToPatched = attachOriginToPatched;
                api._redefineProperty = _redefineProperty;
                api.patchCallbacks = patchCallbacks;
                api.getGlobalObjects = function () { return ({
                    globalSources: globalSources,
                    zoneSymbolEventNames: zoneSymbolEventNames$1,
                    eventNames: eventNames,
                    isBrowser: isBrowser,
                    isMix: isMix,
                    isNode: isNode,
                    TRUE_STR: TRUE_STR,
                    FALSE_STR: FALSE_STR,
                    ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
                    ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
                    REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
                }); };
            });
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @fileoverview
             * @suppress {missingRequire}
             */
            var taskSymbol = zoneSymbol('zoneTask');
            function patchTimer(window, setName, cancelName, nameSuffix) {
                var setNative = null;
                var clearNative = null;
                setName += nameSuffix;
                cancelName += nameSuffix;
                var tasksByHandleId = {};
                function scheduleTask(task) {
                    var data = task.data;
                    function timer() {
                        try {
                            task.invoke.apply(this, arguments);
                        }
                        finally {
                            // issue-934, task will be cancelled
                            // even it is a periodic task such as
                            // setInterval
                            if (!(task.data && task.data.isPeriodic)) {
                                if (typeof data.handleId === 'number') {
                                    // in non-nodejs env, we remove timerId
                                    // from local cache
                                    delete tasksByHandleId[data.handleId];
                                }
                                else if (data.handleId) {
                                    // Node returns complex objects as handleIds
                                    // we remove task reference from timer object
                                    data.handleId[taskSymbol] = null;
                                }
                            }
                        }
                    }
                    data.args[0] = timer;
                    data.handleId = setNative.apply(window, data.args);
                    return task;
                }
                function clearTask(task) {
                    return clearNative(task.data.handleId);
                }
                setNative =
                    patchMethod(window, setName, function (delegate) { return function (self, args) {
                        if (typeof args[0] === 'function') {
                            var options = {
                                isPeriodic: nameSuffix === 'Interval',
                                delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                                    undefined,
                                args: args
                            };
                            var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                            if (!task) {
                                return task;
                            }
                            // Node.js must additionally support the ref and unref functions.
                            var handle = task.data.handleId;
                            if (typeof handle === 'number') {
                                // for non nodejs env, we save handleId: task
                                // mapping in local cache for clearTimeout
                                tasksByHandleId[handle] = task;
                            }
                            else if (handle) {
                                // for nodejs env, we save task
                                // reference in timerId Object for clearTimeout
                                handle[taskSymbol] = task;
                            }
                            // check whether handle is null, because some polyfill or browser
                            // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                            if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                                typeof handle.unref === 'function') {
                                task.ref = handle.ref.bind(handle);
                                task.unref = handle.unref.bind(handle);
                            }
                            if (typeof handle === 'number' || handle) {
                                return handle;
                            }
                            return task;
                        }
                        else {
                            // cause an error by calling it directly.
                            return delegate.apply(window, args);
                        }
                    }; });
                clearNative =
                    patchMethod(window, cancelName, function (delegate) { return function (self, args) {
                        var id = args[0];
                        var task;
                        if (typeof id === 'number') {
                            // non nodejs env.
                            task = tasksByHandleId[id];
                        }
                        else {
                            // nodejs env.
                            task = id && id[taskSymbol];
                            // other environments.
                            if (!task) {
                                task = id;
                            }
                        }
                        if (task && typeof task.type === 'string') {
                            if (task.state !== 'notScheduled' &&
                                (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                                if (typeof id === 'number') {
                                    delete tasksByHandleId[id];
                                }
                                else if (id) {
                                    id[taskSymbol] = null;
                                }
                                // Do not cancel already canceled functions
                                task.zone.cancelTask(task);
                            }
                        }
                        else {
                            // cause an error by calling it directly.
                            delegate.apply(window, args);
                        }
                    }; });
            }
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            function patchCustomElements(_global, api) {
                var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
                if ((!isBrowser && !isMix) || !_global['customElements'] || !('customElements' in _global)) {
                    return;
                }
                var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
                api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
            }
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            function eventTargetPatch(_global, api) {
                if (Zone[api.symbol('patchEventTarget')]) {
                    // EventTarget is already patched.
                    return;
                }
                var _a = api.getGlobalObjects(), eventNames = _a.eventNames, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
                //  predefine all __zone_symbol__ + eventName + true/false string
                for (var i = 0; i < eventNames.length; i++) {
                    var eventName = eventNames[i];
                    var falseEventName = eventName + FALSE_STR;
                    var trueEventName = eventName + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames[eventName] = {};
                    zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
                }
                var EVENT_TARGET = _global['EventTarget'];
                if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
                    return;
                }
                api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
                return true;
            }
            function patchEvent(global, api) {
                api.patchEventPrototype(global, api);
            }
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /**
             * @fileoverview
             * @suppress {missingRequire}
             */
            Zone.__load_patch('legacy', function (global) {
                var legacyPatch = global[Zone.__symbol__('legacyPatch')];
                if (legacyPatch) {
                    legacyPatch();
                }
            });
            Zone.__load_patch('timers', function (global) {
                var set = 'set';
                var clear = 'clear';
                patchTimer(global, set, clear, 'Timeout');
                patchTimer(global, set, clear, 'Interval');
                patchTimer(global, set, clear, 'Immediate');
            });
            Zone.__load_patch('requestAnimationFrame', function (global) {
                patchTimer(global, 'request', 'cancel', 'AnimationFrame');
                patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
                patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
            });
            Zone.__load_patch('blocking', function (global, Zone) {
                var blockingMethods = ['alert', 'prompt', 'confirm'];
                for (var i = 0; i < blockingMethods.length; i++) {
                    var name = blockingMethods[i];
                    patchMethod(global, name, function (delegate, symbol, name) {
                        return function (s, args) {
                            return Zone.current.run(delegate, global, args, name);
                        };
                    });
                }
            });
            Zone.__load_patch('EventTarget', function (global, Zone, api) {
                patchEvent(global, api);
                eventTargetPatch(global, api);
                // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
                var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
                if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
                    api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
                }
                patchClass('MutationObserver');
                patchClass('WebKitMutationObserver');
                patchClass('IntersectionObserver');
                patchClass('FileReader');
            });
            Zone.__load_patch('on_property', function (global, Zone, api) {
                propertyDescriptorPatch(api, global);
                propertyPatch();
            });
            Zone.__load_patch('customElements', function (global, Zone, api) {
                patchCustomElements(global, api);
            });
            Zone.__load_patch('XHR', function (global, Zone) {
                // Treat XMLHttpRequest as a macrotask.
                patchXHR(global);
                var XHR_TASK = zoneSymbol('xhrTask');
                var XHR_SYNC = zoneSymbol('xhrSync');
                var XHR_LISTENER = zoneSymbol('xhrListener');
                var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
                var XHR_URL = zoneSymbol('xhrURL');
                var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
                function patchXHR(window) {
                    var XMLHttpRequest = window['XMLHttpRequest'];
                    if (!XMLHttpRequest) {
                        // XMLHttpRequest is not available in service worker
                        return;
                    }
                    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
                    function findPendingTask(target) {
                        return target[XHR_TASK];
                    }
                    var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                    var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                    if (!oriAddListener) {
                        var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
                        if (XMLHttpRequestEventTarget) {
                            var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                            oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                            oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                        }
                    }
                    var READY_STATE_CHANGE = 'readystatechange';
                    var SCHEDULED = 'scheduled';
                    function scheduleTask(task) {
                        var data = task.data;
                        var target = data.target;
                        target[XHR_SCHEDULED] = false;
                        target[XHR_ERROR_BEFORE_SCHEDULED] = false;
                        // remove existing event listener
                        var listener = target[XHR_LISTENER];
                        if (!oriAddListener) {
                            oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                            oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                        }
                        if (listener) {
                            oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
                        }
                        var newListener = target[XHR_LISTENER] = function () {
                            if (target.readyState === target.DONE) {
                                // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                                // readyState=4 multiple times, so we need to check task state here
                                if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                                    // check whether the xhr has registered onload listener
                                    // if that is the case, the task should invoke after all
                                    // onload listeners finish.
                                    var loadTasks = target['__zone_symbol__loadfalse'];
                                    if (loadTasks && loadTasks.length > 0) {
                                        var oriInvoke_1 = task.invoke;
                                        task.invoke = function () {
                                            // need to load the tasks again, because in other
                                            // load listener, they may remove themselves
                                            var loadTasks = target['__zone_symbol__loadfalse'];
                                            for (var i = 0; i < loadTasks.length; i++) {
                                                if (loadTasks[i] === task) {
                                                    loadTasks.splice(i, 1);
                                                }
                                            }
                                            if (!data.aborted && task.state === SCHEDULED) {
                                                oriInvoke_1.call(task);
                                            }
                                        };
                                        loadTasks.push(task);
                                    }
                                    else {
                                        task.invoke();
                                    }
                                }
                                else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                                    // error occurs when xhr.send()
                                    target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                                }
                            }
                        };
                        oriAddListener.call(target, READY_STATE_CHANGE, newListener);
                        var storedTask = target[XHR_TASK];
                        if (!storedTask) {
                            target[XHR_TASK] = task;
                        }
                        sendNative.apply(target, data.args);
                        target[XHR_SCHEDULED] = true;
                        return task;
                    }
                    function placeholderCallback() { }
                    function clearTask(task) {
                        var data = task.data;
                        // Note - ideally, we would call data.target.removeEventListener here, but it's too late
                        // to prevent it from firing. So instead, we store info for the event listener.
                        data.aborted = true;
                        return abortNative.apply(data.target, data.args);
                    }
                    var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
                        self[XHR_SYNC] = args[2] == false;
                        self[XHR_URL] = args[1];
                        return openNative.apply(self, args);
                    }; });
                    var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
                    var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
                    var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
                    var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
                        if (Zone.current[fetchTaskScheduling] === true) {
                            // a fetch is scheduling, so we are using xhr to polyfill fetch
                            // and because we already schedule macroTask for fetch, we should
                            // not schedule a macroTask for xhr again
                            return sendNative.apply(self, args);
                        }
                        if (self[XHR_SYNC]) {
                            // if the XHR is sync there is no task to schedule, just execute the code.
                            return sendNative.apply(self, args);
                        }
                        else {
                            var options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                            var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                            if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                                task.state === SCHEDULED) {
                                // xhr request throw error when send
                                // we should invoke task instead of leaving a scheduled
                                // pending macroTask
                                task.invoke();
                            }
                        }
                    }; });
                    var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self, args) {
                        var task = findPendingTask(self);
                        if (task && typeof task.type == 'string') {
                            // If the XHR has already completed, do nothing.
                            // If the XHR has already been aborted, do nothing.
                            // Fix #569, call abort multiple times before done will cause
                            // macroTask task count be negative number
                            if (task.cancelFn == null || (task.data && task.data.aborted)) {
                                return;
                            }
                            task.zone.cancelTask(task);
                        }
                        else if (Zone.current[fetchTaskAborting] === true) {
                            // the abort is called from fetch polyfill, we need to call native abort of XHR.
                            return abortNative.apply(self, args);
                        }
                        // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
                        // task
                        // to cancel. Do nothing.
                    }; });
                }
            });
            Zone.__load_patch('geolocation', function (global) {
                /// GEO_LOCATION
                if (global['navigator'] && global['navigator'].geolocation) {
                    patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
                }
            });
            Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
                // handle unhandled promise rejection
                function findPromiseRejectionHandler(evtName) {
                    return function (e) {
                        var eventTasks = findEventTasks(global, evtName);
                        eventTasks.forEach(function (eventTask) {
                            // windows has added unhandledrejection event listener
                            // trigger the event listener
                            var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                            if (PromiseRejectionEvent) {
                                var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                                eventTask.invoke(evt);
                            }
                        });
                    };
                }
                if (global['PromiseRejectionEvent']) {
                    Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
                        findPromiseRejectionHandler('unhandledrejection');
                    Zone[zoneSymbol('rejectionHandledHandler')] =
                        findPromiseRejectionHandler('rejectionhandled');
                }
            });
            /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            /***/ 
        }),
        /***/ "./src/app/about/about.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/about/about.component.ts ***!
          \******************************************/
        /*! exports provided: AboutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function () { return AboutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutComponent = /** @class */ (function () {
                function AboutComponent() {
                }
                AboutComponent.prototype.ngOnInit = function () { };
                return AboutComponent;
            }());
            AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default
                })
            ], AboutComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.component */ "./src/app/error.component.ts");
            /* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
            /* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
            /* harmony import */ var _unauthorize_unauthorize_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unauthorize/unauthorize.component */ "./src/app/unauthorize/unauthorize.component.ts");
            var routes = [
                { path: 'customers', loadChildren: function () { return Promise.resolve( /*! import() */).then(__webpack_require__.bind(null, /*! ./customers/customer.module */ "./src/app/customers/customer.module.ts")).then(function (mod) { return mod.CustomerModule; }); } },
                { path: 'orders', loadChildren: function () { return Promise.resolve( /*! import() */).then(__webpack_require__.bind(null, /*! ./orders/order.module */ "./src/app/orders/order.module.ts")).then(function (mod) { return mod.OrdersModule; }); } },
                { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
                { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
                { path: 'unauth', component: _unauthorize_unauthorize_component__WEBPACK_IMPORTED_MODULE_6__["UnAuthorizeComponent"] },
                { path: '*', redirectTo: '/customers', pathMatch: 'full' },
                { path: '', component: _error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'Angular App 8';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.footer.component.ts": 
        /*!*****************************************!*\
          !*** ./src/app/app.footer.component.ts ***!
          \*****************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                    this.Name = "www.venky.com";
                }
                FooterComponent.prototype.ngOnInit = function () { };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.footer.component.html")).default
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/app.header.component.ts": 
        /*!*****************************************!*\
          !*** ./src/app/app.header.component.ts ***!
          \*****************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(service) {
                    this.service = service;
                    this.model = { password: '', userId: '', role: '' };
                    this.isAuth = false;
                    this.Heading = "Angular 8 Training";
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    this.checkStorage();
                };
                HeaderComponent.prototype.checkStorage = function () {
                    if (localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userInfo)) {
                        this.isAuth = true;
                    }
                    else {
                        this.isAuth = false;
                    }
                };
                HeaderComponent.prototype.logout = function () {
                    localStorage.removeItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userInfo);
                    this.model = { password: '', userId: '', role: '' };
                    this.isAuth = false;
                };
                HeaderComponent.prototype.login = function () {
                    var _this = this;
                    if (this.model.userId != "" && this.model.password != "") {
                        this.service.getUser().subscribe(function (data) {
                            data.forEach(function (val, index) {
                                if (_this.model.userId == val.userId && _this.model.password == val.password) {
                                    _this.model.role = val.role;
                                    var _user = JSON.stringify(_this.model);
                                    localStorage.setItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userInfo, _user);
                                    _this.isAuth = true;
                                    console.log('User Autheticated');
                                }
                            });
                            if (_this.isAuth == false) {
                                alert('Invalid Login');
                            }
                        });
                    }
                    else {
                        alert('Enter Login Details');
                    }
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _services__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.header.component.html")).default,
                    animations: []
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/app.menu.component.ts": 
        /*!***************************************!*\
          !*** ./src/app/app.menu.component.ts ***!
          \***************************************/
        /*! exports provided: MenuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function () { return MenuComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var MenuComponent = /** @class */ (function () {
                function MenuComponent() {
                }
                MenuComponent.prototype.ngOnInit = function () { };
                return MenuComponent;
            }());
            MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-menu',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.menu.component.html")).default
                })
            ], MenuComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _app_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.header.component */ "./src/app/app.header.component.ts");
            /* harmony import */ var _app_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.footer.component */ "./src/app/app.footer.component.ts");
            /* harmony import */ var _app_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.menu.component */ "./src/app/app.menu.component.ts");
            /* harmony import */ var _customers_customer_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customers/customer.module */ "./src/app/customers/customer.module.ts");
            /* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
            /* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
            /* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./error.component */ "./src/app/error.component.ts");
            /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
            /* harmony import */ var _orders_order_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./orders/order.module */ "./src/app/orders/order.module.ts");
            /* harmony import */ var _unauthorize_unauthorize_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./unauthorize/unauthorize.component */ "./src/app/unauthorize/unauthorize.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _services_logger_intercepter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/logger.intercepter */ "./src/app/services/logger.intercepter.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                        _app_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                        _app_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                        _app_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
                        _error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"],
                        _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                        _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                        _unauthorize_unauthorize_component__WEBPACK_IMPORTED_MODULE_17__["UnAuthorizeComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _customers_customer_module__WEBPACK_IMPORTED_MODULE_10__["CustomerModule"],
                        _orders_order_module__WEBPACK_IMPORTED_MODULE_16__["OrdersModule"],
                        _shared__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                        _services__WEBPACK_IMPORTED_MODULE_15__["ServicesModule"]
                    ],
                    providers: [{
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"],
                            useClass: _services_logger_intercepter__WEBPACK_IMPORTED_MODULE_19__["LoggerInterceptor"],
                            multi: true
                        }],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/contact/contact.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/contact/contact.component.ts ***!
          \**********************************************/
        /*! exports provided: ContactComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function () { return ContactComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ContactComponent = /** @class */ (function () {
                function ContactComponent() {
                }
                ContactComponent.prototype.ngOnInit = function () { };
                return ContactComponent;
            }());
            ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default
                })
            ], ContactComponent);
            /***/ 
        }),
        /***/ "./src/app/customers/customer.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/customers/customer.component.ts ***!
          \*************************************************/
        /*! exports provided: CustomerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function () { return CustomerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CustomerComponent = /** @class */ (function () {
                function CustomerComponent() {
                }
                CustomerComponent.prototype.ngOnInit = function () {
                };
                return CustomerComponent;
            }());
            CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-customers',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer.component.html")).default
                })
            ], CustomerComponent);
            /***/ 
        }),
        /***/ "./src/app/customers/customer.module.ts": 
        /*!**********************************************!*\
          !*** ./src/app/customers/customer.module.ts ***!
          \**********************************************/
        /*! exports provided: CustomerModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function () { return CustomerModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer.component */ "./src/app/customers/customer.component.ts");
            /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/customer.service */ "./src/app/services/customer.service.ts");
            /* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer.routing.module */ "./src/app/customers/customer.routing.module.ts");
            /* harmony import */ var _customer_new_customer_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer.new/customer.new.component */ "./src/app/customers/customer.new/customer.new.component.ts");
            /* harmony import */ var _cutsomer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cutsomer.list/customer.list.component */ "./src/app/customers/cutsomer.list/customer.list.component.ts");
            /* harmony import */ var _cutsomer_list_filiter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cutsomer.list/filiter.component */ "./src/app/customers/cutsomer.list/filiter.component.ts");
            /* harmony import */ var _cutsomer_list_table_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cutsomer.list/table/table.component */ "./src/app/customers/cutsomer.list/table/table.component.ts");
            var CustomerModule = /** @class */ (function () {
                function CustomerModule() {
                }
                return CustomerModule;
            }());
            CustomerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_customer_component__WEBPACK_IMPORTED_MODULE_4__["CustomerComponent"], _cutsomer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_9__["CustomerListComponent"], _cutsomer_list_filiter_component__WEBPACK_IMPORTED_MODULE_10__["FiliterTextComponent"], _customer_new_customer_new_component__WEBPACK_IMPORTED_MODULE_8__["CustomerNewComponent"], _cutsomer_list_table_table_component__WEBPACK_IMPORTED_MODULE_11__["CustomerTableComponent"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _customer_routing_module__WEBPACK_IMPORTED_MODULE_7__["CustomerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
                    exports: [_customer_component__WEBPACK_IMPORTED_MODULE_4__["CustomerComponent"], _cutsomer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_9__["CustomerListComponent"], _cutsomer_list_filiter_component__WEBPACK_IMPORTED_MODULE_10__["FiliterTextComponent"], _customer_new_customer_new_component__WEBPACK_IMPORTED_MODULE_8__["CustomerNewComponent"], _cutsomer_list_table_table_component__WEBPACK_IMPORTED_MODULE_11__["CustomerTableComponent"]],
                    providers: [_services_customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"]],
                })
            ], CustomerModule);
            /***/ 
        }),
        /***/ "./src/app/customers/customer.new/customer.new.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/customers/customer.new/customer.new.component.ts ***!
          \******************************************************************/
        /*! exports provided: CustomerNewComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerNewComponent", function () { return CustomerNewComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
            var CustomerNewComponent = /** @class */ (function () {
                function CustomerNewComponent(service) {
                    this.service = service;
                    this.customer = { city: '', name: '', customerSince: null, id: 0, orderTotal: 0 };
                }
                CustomerNewComponent.prototype.ngOnInit = function () { };
                CustomerNewComponent.prototype.Save = function () {
                    this.service.saveCustomer(this.customer).subscribe(function (data) {
                        console.log('Customer Saved');
                    }, function (error) {
                        console.log('Error Occured ' + error);
                    });
                };
                return CustomerNewComponent;
            }());
            CustomerNewComponent.ctorParameters = function () { return [
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] }
            ]; };
            CustomerNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-customer.new',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer.new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer.new/customer.new.component.html")).default
                })
            ], CustomerNewComponent);
            /***/ 
        }),
        /***/ "./src/app/customers/customer.routing.module.ts": 
        /*!******************************************************!*\
          !*** ./src/app/customers/customer.routing.module.ts ***!
          \******************************************************/
        /*! exports provided: CustomerRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRoutingModule", function () { return CustomerRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _customer_new_customer_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.new/customer.new.component */ "./src/app/customers/customer.new/customer.new.component.ts");
            /* harmony import */ var _cutsomer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cutsomer.list/customer.list.component */ "./src/app/customers/cutsomer.list/customer.list.component.ts");
            var routes = [
                { path: 'new', component: _customer_new_customer_new_component__WEBPACK_IMPORTED_MODULE_3__["CustomerNewComponent"] },
                { path: '**', component: _cutsomer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_4__["CustomerListComponent"] }
            ];
            var CustomerRoutingModule = /** @class */ (function () {
                function CustomerRoutingModule() {
                }
                return CustomerRoutingModule;
            }());
            CustomerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                })
            ], CustomerRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/customers/cutsomer.list/customer.list.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/customers/cutsomer.list/customer.list.component.ts ***!
          \********************************************************************/
        /*! exports provided: CustomerListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function () { return CustomerListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
            var CustomerListComponent = /** @class */ (function () {
                function CustomerListComponent(service) {
                    this.isOpen = true;
                    this.toogleText = "Hide";
                    this.service = service;
                }
                CustomerListComponent.prototype.toogleCustomer = function () {
                    this.isOpen = !this.isOpen;
                    this.toogleText = this.isOpen == true ? "Hide" : "Show";
                };
                CustomerListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.title = "List of Customers";
                    this.service.getAllCustomer().subscribe(function (customers) {
                        _this.lstCustomers = customers;
                    }, function (error) {
                        console.log('Error Occured Customer Get All : ', error);
                    });
                };
                return CustomerListComponent;
            }());
            CustomerListComponent.ctorParameters = function () { return [
                { type: _services__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] }
            ]; };
            CustomerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-customer-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer.list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/cutsomer.list/customer.list.component.html")).default,
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('shrinkOut', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*', opacity: 0.5 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(550, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: 0 }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: 0, opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(550, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*' }))
                            ])
                        ])
                    ]
                })
            ], CustomerListComponent);
            /***/ 
        }),
        /***/ "./src/app/customers/cutsomer.list/filiter.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/customers/cutsomer.list/filiter.component.ts ***!
          \**************************************************************/
        /*! exports provided: FiliterTextComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiliterTextComponent", function () { return FiliterTextComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FiliterTextComponent = /** @class */ (function () {
                function FiliterTextComponent() {
                    this._filiter = "";
                    this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                Object.defineProperty(FiliterTextComponent.prototype, "filiter", {
                    get: function () {
                        return this._filiter;
                    },
                    set: function (val) {
                        this._filiter = val;
                        this.changed.emit(val);
                    },
                    enumerable: true,
                    configurable: true
                });
                FiliterTextComponent.prototype.ngOnInit = function () { };
                return FiliterTextComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], FiliterTextComponent.prototype, "filiter", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], FiliterTextComponent.prototype, "changed", void 0);
            FiliterTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-list-filiter',
                    template: "\n        Filter : <input type='text' [(ngModel)]='filiter'/>\n    "
                })
            ], FiliterTextComponent);
            /***/ 
        }),
        /***/ "./src/app/customers/cutsomer.list/table/table.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/customers/cutsomer.list/table/table.component.ts ***!
          \******************************************************************/
        /*! exports provided: CustomerTableComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerTableComponent", function () { return CustomerTableComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            var CustomerTableComponent = /** @class */ (function () {
                function CustomerTableComponent() {
                    this.animatePage = true;
                    this._customers = [];
                    this.filtertedCustomers = [];
                    this.customersOrderTotal = 0;
                    this.isAscendingSort = true;
                    this.keyword = "";
                }
                Object.defineProperty(CustomerTableComponent.prototype, "customers", {
                    get: function () {
                        return this._customers;
                    },
                    set: function (value) {
                        this._customers = value;
                        if (value) {
                            this.filtertedCustomers = value;
                            this.calcualteOrderTotal();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                CustomerTableComponent.prototype.saveList = function () {
                    if (this.keyword) {
                        localStorage.setItem(this.keyword, JSON.stringify(this.filtertedCustomers));
                    }
                };
                CustomerTableComponent.prototype.loadSavedList = function () {
                    if (localStorage.getItem(this.keyword)) {
                        var strCachedDate = localStorage.getItem(this.keyword);
                        this.filtertedCustomers = JSON.parse(strCachedDate);
                    }
                };
                CustomerTableComponent.prototype.calcualteOrderTotal = function () {
                    var _this = this;
                    this.customersOrderTotal = 0;
                    if (this.filtertedCustomers) {
                        this.filtertedCustomers.forEach(function (cust) {
                            _this.customersOrderTotal += cust.orderTotal;
                        });
                    }
                };
                CustomerTableComponent.prototype.sortCustomers = function (columnName) {
                    if (this.isAscendingSort)
                        this.filtertedCustomers.sort(function (a, b) { return a[columnName] > b[columnName] ? 1 : -1; });
                    else
                        this.filtertedCustomers.sort(function (a, b) { return a[columnName] < b[columnName] ? 1 : -1; });
                    this.isAscendingSort = !this.isAscendingSort;
                };
                CustomerTableComponent.prototype.applyFilter = function (data) {
                    if (data) {
                        this.filtertedCustomers = this.filtertedCustomers.filter(function (cust) {
                            return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                                cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                                cust.id.toString().indexOf(data.toLowerCase()) > -1 ||
                                cust.customerSince.toString().indexOf(data.toLowerCase()) > -1 ||
                                cust.orderTotal.toString().indexOf(data.toLowerCase()) > -1;
                        });
                    }
                    else {
                        this.filtertedCustomers = this.customers;
                    }
                    this.calcualteOrderTotal();
                };
                CustomerTableComponent.prototype.ngOnInit = function () {
                };
                return CustomerTableComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('@pageAnimations')
            ], CustomerTableComponent.prototype, "animatePage", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('customers')
            ], CustomerTableComponent.prototype, "customers", null);
            CustomerTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'customer-table',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/cutsomer.list/table/table.component.html")).default,
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('pageAnimations', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('tr, form', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateY(-100px)' }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(-30, [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms cubic-bezier(0.35, 0, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'none' }))
                                    ])
                                ])
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('filterAnimation', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter, * => 0, * => -1', []),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':increment', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, width: '0px' }),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(50, [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, width: '*' })),
                                    ]),
                                ], { optional: true })
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':decrement', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(50, [
                                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, width: '0px' })),
                                    ]),
                                ])
                            ]),
                        ]),
                    ]
                })
            ], CustomerTableComponent);
            /***/ 
        }),
        /***/ "./src/app/error.component.ts": 
        /*!************************************!*\
          !*** ./src/app/error.component.ts ***!
          \************************************/
        /*! exports provided: ErrorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () { return ErrorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ErrorComponent = /** @class */ (function () {
                function ErrorComponent() {
                }
                ErrorComponent.prototype.ngOnInit = function () { };
                return ErrorComponent;
            }());
            ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-error',
                    template: "Please contact admin"
                })
            ], ErrorComponent);
            /***/ 
        }),
        /***/ "./src/app/orders/list/order.list.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/orders/list/order.list.component.ts ***!
          \*****************************************************/
        /*! exports provided: OrderListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function () { return OrderListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
            var OrderListComponent = /** @class */ (function () {
                function OrderListComponent(service, route, location) {
                    this.service = service;
                    this.route = route;
                    this.location = location;
                    this.orders = [];
                }
                OrderListComponent.prototype.ngOnInit = function () {
                    this.getOrders();
                };
                OrderListComponent.prototype.getOrders = function () {
                    var _this = this;
                    this.customerId = +this.route.snapshot.paramMap.get("id");
                    this.service
                        .get(this.customerId)
                        .subscribe(function (orders) { return (_this.orders = orders); });
                };
                OrderListComponent.prototype.goBack = function () {
                    this.location.back();
                };
                return OrderListComponent;
            }());
            OrderListComponent.ctorParameters = function () { return [
                { type: _services__WEBPACK_IMPORTED_MODULE_4__["OrderService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            OrderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-order-list",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order.list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/list/order.list.component.html")).default
                })
            ], OrderListComponent);
            /***/ 
        }),
        /***/ "./src/app/orders/new/order.new.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/orders/new/order.new.component.ts ***!
          \***************************************************/
        /*! exports provided: OrderNewComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderNewComponent", function () { return OrderNewComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var OrderNewComponent = /** @class */ (function () {
                function OrderNewComponent(service, route, router, formBuilder, location) {
                    this.service = service;
                    this.route = route;
                    this.router = router;
                    this.formBuilder = formBuilder;
                    this.location = location;
                    this.isValid = false;
                }
                OrderNewComponent.prototype.ngOnInit = function () {
                    this.getParamter();
                    this.orderForm = this.formBuilder.group({
                        orderId: [0],
                        customerId: [this.customerId],
                        orderQty: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                        product: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                        unitPrice: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
                    });
                };
                OrderNewComponent.prototype.submitOrder = function () {
                    var _this = this;
                    this.isValid = true;
                    console.log(this.orderForm.value);
                    if (this.orderForm.valid) {
                        this.service.save(this.orderForm.value).subscribe(function (data) {
                            console.log('Order Saved');
                            _this.router.navigateByUrl('/orders/list/' + _this.customerId);
                        }, function (error) {
                            console.log('Error Occured ' + error);
                        });
                    }
                    else {
                    }
                };
                OrderNewComponent.prototype.getParamter = function () {
                    this.customerId = +this.route.snapshot.paramMap.get("id");
                };
                OrderNewComponent.prototype.goBack = function () {
                    this.location.back();
                };
                return OrderNewComponent;
            }());
            OrderNewComponent.ctorParameters = function () { return [
                { type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["OrderService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            OrderNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-order-new",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order.new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/new/order.new.component.html")).default
                })
            ], OrderNewComponent);
            /***/ 
        }),
        /***/ "./src/app/orders/order.component.ts": 
        /*!*******************************************!*\
          !*** ./src/app/orders/order.component.ts ***!
          \*******************************************/
        /*! exports provided: OrderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function () { return OrderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var OrderComponent = /** @class */ (function () {
                function OrderComponent() {
                }
                OrderComponent.prototype.ngOnInit = function () {
                };
                return OrderComponent;
            }());
            OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-order',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/order.component.html")).default
                })
            ], OrderComponent);
            /***/ 
        }),
        /***/ "./src/app/orders/order.module.ts": 
        /*!****************************************!*\
          !*** ./src/app/orders/order.module.ts ***!
          \****************************************/
        /*! exports provided: OrdersModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function () { return OrdersModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order.component */ "./src/app/orders/order.component.ts");
            /* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/order.service */ "./src/app/services/order.service.ts");
            /* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order.routing.module */ "./src/app/orders/order.routing.module.ts");
            /* harmony import */ var _new_order_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new/order.new.component */ "./src/app/orders/new/order.new.component.ts");
            /* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product/product.component */ "./src/app/orders/product/product.component.ts");
            /* harmony import */ var _list_order_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list/order.list.component */ "./src/app/orders/list/order.list.component.ts");
            /* harmony import */ var _services_authorzie_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/authorzie.guard */ "./src/app/services/authorzie.guard.ts");
            var OrdersModule = /** @class */ (function () {
                function OrdersModule() {
                }
                return OrdersModule;
            }());
            OrdersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_order_component__WEBPACK_IMPORTED_MODULE_4__["OrderComponent"], _new_order_new_component__WEBPACK_IMPORTED_MODULE_7__["OrderNewComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"], _list_order_list_component__WEBPACK_IMPORTED_MODULE_9__["OrderListComponent"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _order_routing_module__WEBPACK_IMPORTED_MODULE_6__["OrderRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
                    exports: [_new_order_new_component__WEBPACK_IMPORTED_MODULE_7__["OrderNewComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_8__["ProductComponent"], _list_order_list_component__WEBPACK_IMPORTED_MODULE_9__["OrderListComponent"]],
                    providers: [_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"], _services_authorzie_guard__WEBPACK_IMPORTED_MODULE_10__["AuthorizeGuard"]],
                })
            ], OrdersModule);
            /***/ 
        }),
        /***/ "./src/app/orders/order.routing.module.ts": 
        /*!************************************************!*\
          !*** ./src/app/orders/order.routing.module.ts ***!
          \************************************************/
        /*! exports provided: OrderRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function () { return OrderRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _list_order_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/order.list.component */ "./src/app/orders/list/order.list.component.ts");
            /* harmony import */ var _new_order_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new/order.new.component */ "./src/app/orders/new/order.new.component.ts");
            /* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.component */ "./src/app/orders/product/product.component.ts");
            /* harmony import */ var _services_authorzie_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authorzie.guard */ "./src/app/services/authorzie.guard.ts");
            var routes = [
                { path: 'list/:id', component: _list_order_list_component__WEBPACK_IMPORTED_MODULE_3__["OrderListComponent"] },
                { path: 'new/:id', component: _new_order_new_component__WEBPACK_IMPORTED_MODULE_4__["OrderNewComponent"] },
                { path: '', component: _product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"], canActivate: [_services_authorzie_guard__WEBPACK_IMPORTED_MODULE_6__["AuthorizeGuard"]] }
            ];
            var OrderRoutingModule = /** @class */ (function () {
                function OrderRoutingModule() {
                }
                return OrderRoutingModule;
            }());
            OrderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                })
            ], OrderRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/orders/product/product.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/orders/product/product.component.ts ***!
          \*****************************************************/
        /*! exports provided: ProductComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function () { return ProductComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ProductComponent = /** @class */ (function () {
                function ProductComponent() {
                }
                ProductComponent.prototype.ngOnInit = function () { };
                return ProductComponent;
            }());
            ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-product',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/product/product.component.html")).default
                })
            ], ProductComponent);
            /***/ 
        }),
        /***/ "./src/app/services/authorzie.guard.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/authorzie.guard.ts ***!
          \*********************************************/
        /*! exports provided: AuthorizeGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeGuard", function () { return AuthorizeGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var AuthorizeGuard = /** @class */ (function () {
                function AuthorizeGuard() {
                    this.isAuth = false;
                }
                AuthorizeGuard.prototype.canActivate = function (route, state) {
                    if (localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].userInfo)) {
                        var userInfo = JSON.parse(localStorage.getItem(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].userInfo));
                        if (userInfo.role == src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].admin) {
                            this.isAuth = true;
                        }
                        else {
                            this.isAuth = false;
                        }
                    }
                    return this.isAuth;
                };
                return AuthorizeGuard;
            }());
            AuthorizeGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: "root"
                })
            ], AuthorizeGuard);
            /***/ 
        }),
        /***/ "./src/app/services/customer.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/services/customer.service.ts ***!
          \**********************************************/
        /*! exports provided: CustomerService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function () { return CustomerService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var CustomerService = /** @class */ (function () {
                function CustomerService(httpScoket) {
                    this.customerUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + 'customer'; // 'assets/customer.json';
                    this.httpScoket = httpScoket;
                }
                CustomerService.prototype.getAllCustomer = function () {
                    return this.httpScoket.get(this.customerUrl)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                CustomerService.prototype.saveCustomer = function (customer) {
                    return this.httpScoket.post(this.customerUrl, customer)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                CustomerService.prototype.handleError = function (error) {
                    return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'Error from API');
                };
                return CustomerService;
            }());
            CustomerService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], CustomerService);
            /***/ 
        }),
        /***/ "./src/app/services/index.ts": 
        /*!***********************************!*\
          !*** ./src/app/services/index.ts ***!
          \***********************************/
        /*! exports provided: CustomerService, OrderService, UserService, ServicesModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer.service */ "./src/app/services/customer.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function () { return _customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"]; });
            /* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.service */ "./src/app/services/order.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderService", function () { return _order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]; });
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]; });
            /* harmony import */ var _services_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services.module */ "./src/app/services/services.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function () { return _services_module__WEBPACK_IMPORTED_MODULE_4__["ServicesModule"]; });
            /***/ 
        }),
        /***/ "./src/app/services/logger.intercepter.ts": 
        /*!************************************************!*\
          !*** ./src/app/services/logger.intercepter.ts ***!
          \************************************************/
        /*! exports provided: LoggerInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerInterceptor", function () { return LoggerInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LoggerInterceptor = /** @class */ (function () {
                function LoggerInterceptor() {
                }
                LoggerInterceptor.prototype.intercept = function (req, next) {
                    console.log("Intercepted the call to :" + req.url);
                    return next.handle(req);
                };
                return LoggerInterceptor;
            }());
            LoggerInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], LoggerInterceptor);
            /***/ 
        }),
        /***/ "./src/app/services/order.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/order.service.ts ***!
          \*******************************************/
        /*! exports provided: OrderService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function () { return OrderService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var OrderService = /** @class */ (function () {
                function OrderService(httpScoket) {
                    this.orderUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + 'order'; // 'assets/customer.json';
                    this.httpScoket = httpScoket;
                }
                OrderService.prototype.get = function (id) {
                    var url = this.orderUrl + '?id=' + id;
                    return this.httpScoket.get(url)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                OrderService.prototype.save = function (order) {
                    return this.httpScoket.post(this.orderUrl, order)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                OrderService.prototype.handleError = function (error) {
                    return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'Error from API');
                };
                return OrderService;
            }());
            OrderService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], OrderService);
            /***/ 
        }),
        /***/ "./src/app/services/services.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/services.module.ts ***!
          \*********************************************/
        /*! exports provided: ServicesModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function () { return ServicesModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.service */ "./src/app/services/customer.service.ts");
            /* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order.service */ "./src/app/services/order.service.ts");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
            var ServicesModule = /** @class */ (function () {
                function ServicesModule() {
                }
                return ServicesModule;
            }());
            ServicesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [],
                    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
                    exports: [],
                    providers: [_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"], _order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]],
                })
            ], ServicesModule);
            /***/ 
        }),
        /***/ "./src/app/services/user.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/user.service.ts ***!
          \******************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var UserService = /** @class */ (function () {
                function UserService(http) {
                    this.http = http;
                    this.userUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + 'user';
                }
                UserService.prototype.getUser = function () {
                    return this.http.get(this.userUrl)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
                };
                UserService.prototype.handleError = function (error) {
                    return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'Error from API');
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/shared/index.ts": 
        /*!*********************************!*\
          !*** ./src/app/shared/index.ts ***!
          \*********************************/
        /*! exports provided: NameFormatterPipe, SharedModule, Order */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order */ "./src/app/shared/order.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Order", function () { return _order__WEBPACK_IMPORTED_MODULE_1__["Order"]; });
            /* harmony import */ var _nameformatter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nameformatter.pipe */ "./src/app/shared/nameformatter.pipe.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NameFormatterPipe", function () { return _nameformatter_pipe__WEBPACK_IMPORTED_MODULE_2__["NameFormatterPipe"]; });
            /* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
            /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function () { return _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]; });
            /***/ 
        }),
        /***/ "./src/app/shared/nameformatter.pipe.ts": 
        /*!**********************************************!*\
          !*** ./src/app/shared/nameformatter.pipe.ts ***!
          \**********************************************/
        /*! exports provided: NameFormatterPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameFormatterPipe", function () { return NameFormatterPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NameFormatterPipe = /** @class */ (function () {
                function NameFormatterPipe() {
                }
                NameFormatterPipe.prototype.transform = function (value) {
                    var fullName;
                    if (value) {
                        var nameSplit = value.toString().split(' ');
                        var firstName = void 0;
                        var lastName = void 0;
                        if (nameSplit.length > 0 && nameSplit[0] != null) {
                            firstName = nameSplit[0];
                            firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
                        }
                        else {
                            firstName = "";
                        }
                        if (nameSplit.length > 1 && nameSplit[1] != null) {
                            lastName = value.toString().split(' ')[1];
                            lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
                        }
                        else {
                            lastName = "";
                        }
                        fullName = lastName + ',' + firstName;
                    }
                    return fullName;
                };
                return NameFormatterPipe;
            }());
            NameFormatterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'NameFormatter' })
            ], NameFormatterPipe);
            /***/ 
        }),
        /***/ "./src/app/shared/order.ts": 
        /*!*********************************!*\
          !*** ./src/app/shared/order.ts ***!
          \*********************************/
        /*! exports provided: Order */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function () { return Order; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Order = /** @class */ (function () {
                function Order(orderId, customerId, product, orderOty, unitPrice) {
                    this.orderId = orderId;
                    this.customerId = customerId;
                    this.product = product;
                    this.orderOty = orderOty;
                    this.unitPrice = unitPrice;
                }
                return Order;
            }());
            /***/ 
        }),
        /***/ "./src/app/shared/shared.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/shared/shared.module.ts ***!
          \*****************************************/
        /*! exports provided: SharedModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function () { return SharedModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _nameformatter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nameformatter.pipe */ "./src/app/shared/nameformatter.pipe.ts");
            var SharedModule = /** @class */ (function () {
                function SharedModule() {
                }
                return SharedModule;
            }());
            SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_nameformatter_pipe__WEBPACK_IMPORTED_MODULE_3__["NameFormatterPipe"]],
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                    exports: [_nameformatter_pipe__WEBPACK_IMPORTED_MODULE_3__["NameFormatterPipe"]]
                })
            ], SharedModule);
            /***/ 
        }),
        /***/ "./src/app/unauthorize/unauthorize.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/unauthorize/unauthorize.component.ts ***!
          \******************************************************/
        /*! exports provided: UnAuthorizeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnAuthorizeComponent", function () { return UnAuthorizeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var UnAuthorizeComponent = /** @class */ (function () {
                function UnAuthorizeComponent() {
                }
                UnAuthorizeComponent.prototype.ngOnInit = function () { };
                return UnAuthorizeComponent;
            }());
            UnAuthorizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-unauthorize',
                    template: "\n        Your Unauthorize to access :-(\n    "
                })
            ], UnAuthorizeComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                api: 'http://localhost:5200/api/',
                userInfo: 'userInfo',
                admin: 'admin'
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _polyfills_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfills.ts */ "./src/polyfills.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ "./src/polyfills.ts": 
        /*!**************************!*\
          !*** ./src/polyfills.ts ***!
          \**************************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone-evergreen.js");
            /* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__);
            /**
             * This file includes polyfills needed by Angular and is loaded before the app.
             * You can add your own extra polyfills to this file.
             *
             * This file is divided into 2 sections:
             *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
             *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
             *      file.
             *
             * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
             * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
             * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
             *
             * Learn more in https://angular.io/guide/browser-support
             */
            /***************************************************************************************************
             * BROWSER POLYFILLS
             */
            /** IE10 and IE11 requires the following for NgClass support on SVG elements */
            // import 'classlist.js';  // Run `npm install --save classlist.js`.
            /**
             * Web Animations `@angular/platform-browser/animations`
             * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
             * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
             */
            // import 'web-animations-js';  // Run `npm install --save web-animations-js`.
            /**
             * By default, zone.js will patch all possible macroTask and DomEvents
             * user can disable parts of macroTask/DomEvents patch by setting following flags
             * because those flags need to be set before `zone.js` being loaded, and webpack
             * will put import in the top of bundle, so user need to create a separate file
             * in this directory (for example: zone-flags.ts), and put the following flags
             * into that file, and then add the following code before importing zone.js.
             * import './zone-flags.ts';
             *
             * The flags allowed in zone-flags.ts are listed here.
             *
             * The following flags will work for all browsers.
             *
             * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
             * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
             * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
             *
             *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
             *  with the following flag, it will bypass `zone.js` patch for IE/Edge
             *
             *  (window as any).__Zone_enable_cross_context_check = true;
             *
             */
            /***************************************************************************************************
             * Zone JS is required by default for Angular itself.
             */
            // Included with Angular CLI.
            /***************************************************************************************************
             * APPLICATION IMPORTS
             */
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! F:\Projects\training\day2\myapp\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map