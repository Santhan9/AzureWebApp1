(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/getteachers/getteachers.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/getteachers/getteachers.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n  <div class=\"container-fluid body\">\n    <br>\n    <div *ngFor=\"let search of teacherresult\"  >\n        <div class=\"card card w-75\" >\n            <div class=\"row no-gutters\">\n              <div class=\"col-md-4\">\n                <img class=\"card-img-top\" src=\"assets/maleteacher.jpg\" alt=\"Card image\" style=\"width:50%\">\n              </div>\n              <div class=\"col-md-8\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">{{search.firstname}}</h5>\n                    <p >Email :{{search.email}}</p>\n                    \n                    <p  class=\"card-text\">Subject :{{search.subject}}</p>\n                    <p  class=\"card-text\">Experience :{{search.experience}}</p>\n                    <p  class=\"card-text\">City :{{search.city}}</p>\n                    <a  (click)=\"onConnect(search.email)\" class=\"btn btn-outline-primary btn-sm\">{{search.logged}}</a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <br>\n                \n      </div>\n\n     \n     \n\n     \n      \n\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid header\">\n    \n    <nav class=\"navbar navbar-custom navbar-expand-lg navbar-light header\">\n      <div class=\"main_head\">\n        <h3 class=\"main-heading\"><strong>\n            <a href=\"/profile\">TeachersHut</a>\n          </strong></h3>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      </div>\n      \n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n              <a class=\"nav-link\"(click)=\"profile()\">Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" *ngIf=\"student\" (click)=\"getTeachers()\">Teachers</a>\n            </li>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" *ngIf=\"teacher\" (click)=\"getStudents()\">Students</a>\n              </li>\n            \n            <li class=\"nav-item\">\n              <a class=\"nav-link \" (click)=\"profile()\">Friends</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link \" (click)=\"logout()\" href=\"\">logout</a>\n              </li>\n          </ul>\n          <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchtext\" placeholder=\"Search\" aria-label=\"Search\" [ngModelOptions]=\"{standalone: true}\">\n            <button class=\"btn btn-outline-warning my-2 my-sm-0\" (click)=\"searchTeacher()\" type=\"submit\">Search</button>\n          </form>\n        </div>\n      </nav>\n    \n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid header\">\n    \n    <h3 class=\"main-heading\"><strong>\n      <a href=\"\">TeachersHut</a>\n    </strong></h3>\n    \n  </div>\n  <div class=\"container-fluid body\">\n    <!-- Control the column width, and how they should appear on different devices -->\n\n    <div class=\"row\">\n      \n      <div class=\"col-sm-6 caption d-none d-lg-block\">\n         <p> Connect to Learn<br> \n            Learn to Teach <br> \n        Teach to Grow\n        </p>\n      </div>\n      \n    \n      \n      <div class=\"col-sm-6 login\" >\n          <div class=\"login-form\" style=\"width:auto\">\n            <h2>Login Here</h2>\n            <form action=\"/action_page.php\">\n              <div class=\"form-group form-control-inline\">\n                <label for=\"email\">Email:</label>\n                <input type=\"email\" class=\"form-control\" id=\"email\"[(ngModel)]=\"email\" placeholder=\"Enter email\" name=\"email\">\n                <div *ngIf=\"invalidEmail\" class=\"warning\">\n                  <p>Enter valid Email</p>\n                </div>\n              </div>\n              <div class=\"form-group form-control-inline\">\n                <label for=\"pwd\">Password:</label>\n                \n                <input type=\"password\" class=\"form-control\"  id=\"pwd\" [(ngModel)]=\"password\"placeholder=\"Enter password\" name=\"pswd\">\n                \n                <div *ngIf=\"invalidpassword\" class=\"warning\">\n                  <p>Enter valid password</p>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                 <a href=\"\">Forget Password</a>\n               \n              </div>\n              <div class=\"btn\">\n                <button type=\"button\" (click)=\"register()\" class=\"btn btn-primary\">Register</button>\n              </div>\n              \n              <div class=\"btn\"><button (click)=\"loginSubmit()\"type=\"submit\" class=\"btn btn-primary\">Submit</button></div>\n              \n            </form>\n\n          </div>\n\n      </div>\n    </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid header\">\n    \n    <nav class=\"navbar navbar-custom navbar-expand-lg navbar-light header\">\n      <div class=\"main_head\">\n        <h3 class=\"main-heading\"><strong>\n            <a href=\"/profile\">TeachersHut</a>\n          </strong></h3>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      </div>\n      \n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n              <a class=\"nav-link\" (click)=\"profile()\">Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" *ngIf=\"student\" (click)=\"getTeachers()\">Teachers</a>\n            </li>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" *ngIf=\"teacher\" (click)=\"getStudents()\">Students</a>\n              </li>\n            \n            <li class=\"nav-item\">\n              <a class=\"nav-link \" (click)=\"profile()\">Friends</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link \" (click)=\"logout()\" href=\"\">logout</a>\n              </li>\n          </ul>\n          <form class=\"form-inline my-2 my-lg-0\">\n            <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchtext\" placeholder=\"Search\" aria-label=\"Search\" [ngModelOptions]=\"{standalone: true}\">\n            <button class=\"btn btn-outline-warning my-2 my-sm-0\" (click)=\"searchTeacher()\" type=\"submit\">Search</button>\n          </form>\n        </div>\n      </nav>\n    \n  </div>\n  <div class=\"container-fluid body\">\n      <br>\n    <!-- Control the column width, and how they should appear on different devices -->\n\n    <div class=\"row\">\n      <div class=\"col-sm-3 details\">\n         <div class=\"container profile-card\">\n            <h2>Welcome</h2>\n            \n            <div class=\"card\" style=\"width:auto\">\n              <img class=\"card-img-top\" src=\"assets/maleteacher.jpg\" alt=\"Card image\" style=\"width:50%\">\n              <!--img class=\"card-img-top\" [src]=\"url\" alt=\"Card image\" style=\"width:50%\">\n\n              <input *ngIf=\"picstatus\" type='file' (change)=\"onSelectFile($event)\">\n              <button *ngIf=\"picstatus\" type=\"button\" class=\"btn btn-primary btn-sm\"style=\"width:50%\" (click)=\"onupload()\">Upload</button-->\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">{{name}}</h4>\n                <p class=\"card-text\">Email :{{email}}</p>\n                <p class=\"card-text\">Status :{{status}}</p>\n                <p *ngIf=\"teacher\" class=\"card-text\">Subject :{{subject}}</p>\n                <p *ngIf=\"teacher\" class=\"card-text\">Experience :{{experience}}</p>\n                <p *ngIf=\"teacher\" class=\"card-text\">City :{{city}}</p>\n                <p class=\"card-text\">Stay connected for new Posts and Events</p>\n                <a href=\"/profile\" class=\"btn btn-outline-primary btn-sm\">Edit Profile</a>\n                \n              </div>\n            </div>\n         \n          </div>\n      </div>\n    <div class=\"col-sm-6 posts\">\n        <div class=\"container profile-card\">\n            <h2>Posts</h2>\n\n            <div *ngIf=\"teacher\" class=\"card\" style=\"width:auto\">\n              \n                <div class=\"card-body\">\n                    <div class=\"form-group \">\n                        <label for=\"inputlg\">Heading</label>\n                        <input class=\"form-control input-lg\" [(ngModel)]=\"postheading\" id=\"inputlg\" type=\"text\">\n                      </div>\n                      <div class=\"form-group \">\n                        <label for=\"inputlg\">Content</label>\n                        <input class=\"form-control input-lg\" style=\"height: 70px;\"[(ngModel)]=\"postcontent\" id=\"inputlg\" type=\"text\">\n                      </div>\n                  <button (click)=\"createPost()\" class=\"btn btn-primary btn-sm\">Create Post</button>\n                </div>\n              </div>\n              <br>\n\n            <div *ngFor=\"let post of posts\">\n            <div class=\"card\" style=\"width:auto\">\n              \n              <div class=\"card-body\">\n                <h3 class=\"card-title\">{{post.heading}}</h3>\n                <p class=\"card-text\">{{post.content}}</p>\n                <a href=\"/profile\"  *ngIf=\"teacher\" class=\"btn btn-outline-primary btn-sm\">Delete Post</a>\n                <a href=\"/profile\" *ngIf=\"student\" class=\"btn btn-outline-primary btn-sm\">{{post.email}}</a>\n              </div>\n            </div>\n            <br>\n        </div>\n      \n      \n          \n\n      </div>\n    </div>\n    <div class=\"col-sm-3 events\" >\n        <div class=\"container profile-card\">\n            <h2>Events</h2>\n            \n            <div class=\"card\" style=\"width:auto\">\n             \n              <div class=\"card-body\">\n                <div class=\"form-group \">\n                <h4 class=\"card-title\">Event Name</h4>\n                <input class=\"form-control input-lg\" [(ngModel)]=\"postheading\" id=\"inputlg\" type=\"text\">\n              </div>\n              <div class=\"form-group \">\n                <label class=\"card-text\">Link</label>\n                <input class=\"form-control input-lg\" [(ngModel)]=\"postcontent\" id=\"inputlg\" type=\"text\">\n              </div>\n              <div class=\"form-group \">\n                <label class=\"card-text\">Description</label>\n                <input class=\"form-control input-lg\" style=\"height: 70px;\"[(ngModel)]=\"postcontent\" id=\"inputlg\" type=\"text\">\n              </div>\n                <a href=\"/profile\" class=\"btn btn-primary btn-sm\">Create Event</a>\n              </div>\n            </div>\n         \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid header\">\n    \n    <h3 class=\"main-heading\"><strong><a href=\"\">TeachersHut</a> </strong></h3>\n    \n  </div>\n  <div class=\"container-fluid body\">\n    <!-- Control the column width, and how they should appear on different devices -->\n\n    <div class=\"row\">\n        <div class=\"col-sm-6 caption d-none d-lg-block\">\n            <p> Connect to Learn<br> \n               Learn to Teach <br> \n           Teach to Grow\n           </p>\n         </div>\n     \n      \n      <div class=\"col-sm-6 register\" >\n          <div [className]=\"height\" style=\"width:auto\">\n            <h2>Register Here</h2>\n            <br>\n            <form action=\"/action_page.php\" >\n                <div class=\"form-group\">\n                <div class=\"form-check form-check-inline\">\n                    <input class=\"form-check-input\" (click)=\"addTeacherFields()\" [(ngModel)]=\"status\"type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"teacher\" >\n                    <label class=\"form-check-label\" for=\"inlineRadio1\">Teacher</label>\n                  </div>\n                  <div class=\"form-check form-check-inline\">\n                    <input class=\"form-check-input\" (click)=\"addStudentsFields()\" [(ngModel)]=\"status\"type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"student\">\n                    <label class=\"form-check-label\" for=\"inlineRadio2\">Student</label>\n                  </div>\n                  <div *ngIf=\"emptystatus\" class=\"warning\">\n                    <p>Enter Valid Option</p>\n                  </div>\n                </div>\n              <div class=\"form-group\">\n                <label for=\"firstname\">First Name:</label>\n                <input type=\"text\" class=\"form-control\" id=\"firstname\"[(ngModel)]=\"firstname\" placeholder=\"Enter First Name \" name=\"firstname\">\n                <div *ngIf=\"emptyfirstname\" class=\"warning\">\n                  <p>Enter First Name</p>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"lastname\">Last Name:</label>\n                <input type=\"text\" class=\"form-control\" id=\"lastname\"[(ngModel)]=\"lastname\" placeholder=\"Enter Last Name\" name=\"lastname\">\n                <div *ngIf=\"emptylastname\" class=\"warning\">\n                  <p>Enter Last Name</p>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"email\">Email:</label>\n                <input type=\"email\" class=\"form-control\" id=\"email\"[(ngModel)]=\"email\" placeholder=\"Enter Email\" name=\"email\">\n                <div *ngIf=\"invalidEmail\" class=\"warning\">\n                  <p>Enter Valid Email</p>\n                </div>\n              </div>\n              \n              <div *ngIf=\"rbtn\" class=\"form-group\">\n                <label for=\"firstname\">Subject:</label>\n                <!--input type=\"text\" class=\"form-control\" id=\"subject\"[(ngModel)]=\"subject\" placeholder=\"Enter Subject you teach \" name=\"subject\"-->\n                \n                <select [(ngModel)]=\"subject\"  class=\"form-control\" id=\"sel1\" name=\"subject\">\n                  <option *ngFor=\"let subject of subjects\" >\n                    {{subject}} \n                    </option>\n                 \n                </select>\n              </div>\n              <div *ngIf=\"rbtn\" class=\"form-group\">\n                <label for=\"firstname\">Experience:</label>\n                <input type=\"text\" class=\"form-control\" id=\"experience\"[(ngModel)]=\"experience\" placeholder=\"Enter Teaching experience in Years\" name=\"experience\">\n              </div>\n              <div *ngIf=\"rbtn\" class=\"form-group\">\n                <label for=\"firstname\">City:</label>\n                <input type=\"text\" class=\"form-control\" id=\"city\"[(ngModel)]=\"city\" placeholder=\"Enter City\" name=\"city\">\n              </div>\n              <!--div *ngIf=\"rbtn\" class=\"form-group\">\n                <label for=\"firstname\">Description:</label>\n                <textarea type=\"text\" class=\"form-control\" id=\"description\"[(ngModel)]=\"description\" placeholder=\"Enter your brief description\" name=\"description\"></textarea>\n              </div-->\n              <div class=\"form-group\">\n                <label for=\"pwd\">Password:</label>\n                <input type=\"password\" class=\"form-control\" id=\"pwd\" [(ngModel)]=\"password\"placeholder=\"Enter Password\" name=\"pswd\">\n                <div *ngIf=\"emptypassword\" class=\"warning\">\n                  <p>Enter password</p>\n                </div>\n                <div *ngIf=\"poorpassword\" class=\"warning\">\n                  <p>password should be more than 6 charecters</p>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"pwd\">ReEnter Password:</label>\n                <input type=\"password\" class=\"form-control\" id=\"repwd\" [(ngModel)]=\"repassword\"placeholder=\"ReEnter Password\" name=\"repswd\">\n                <div *ngIf=\"invalidatePassword\" class=\"warning\">\n                  <p>Password is not matching</p>\n                </div>\n              </div>\n              \n              <div class=\"btn\"><button type=\"submit\" (click)=\"onRegister()\"class=\"btn btn-primary\">Register</button></div>\n              \n            </form>\n\n          </div>\n\n      </div>\n    </div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/searchpage/searchpage.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/searchpage/searchpage.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n  <div class=\"container-fluid body\">\n    <br>\n    <div *ngFor=\"let search of searchresult\"  >\n        <div class=\"card card w-75\" >\n            <div class=\"row no-gutters\">\n              <div class=\"col-md-4\">\n                <img class=\"card-img-top\" src=\"assets/maleteacher.jpg\" alt=\"Card image\" style=\"width:50%\">\n              </div>\n              <div class=\"col-md-8\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">{{search.firstname}}</h5>\n                    <p >Email :{{search.email}}</p>\n                    \n                    <p *ngIf=\"teacher\" class=\"card-text\">Subject :{{search.subject}}</p>\n                    <p *ngIf=\"teacher\" class=\"card-text\">Experience :{{search.experience}}</p>\n                    <p *ngIf=\"teacher\" class=\"card-text\">City :{{search.city}}</p>\n                    <a  (click)=\"onConnect(search.email)\" class=\"btn btn-outline-primary btn-sm\">Connect</a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <br>\n                \n      </div>\n\n     \n     \n\n     \n      \n\n    </div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _searchpage_searchpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchpage/searchpage.component */ "./src/app/searchpage/searchpage.component.ts");
/* harmony import */ var _getteachers_getteachers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getteachers/getteachers.component */ "./src/app/getteachers/getteachers.component.ts");








var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'search', component: _searchpage_searchpage_component__WEBPACK_IMPORTED_MODULE_6__["SearchpageComponent"] },
    { path: 'teachers', component: _getteachers_getteachers_component__WEBPACK_IMPORTED_MODULE_7__["GetteachersComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'teachershuttest';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _searchpage_searchpage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./searchpage/searchpage.component */ "./src/app/searchpage/searchpage.component.ts");
/* harmony import */ var _getteachers_getteachers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getteachers/getteachers.component */ "./src/app/getteachers/getteachers.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _searchpage_searchpage_component__WEBPACK_IMPORTED_MODULE_11__["SearchpageComponent"],
                _getteachers_getteachers_component__WEBPACK_IMPORTED_MODULE_12__["GetteachersComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [_dataservice_service__WEBPACK_IMPORTED_MODULE_10__["DataserviceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/connectiondetails.ts":
/*!**************************************!*\
  !*** ./src/app/connectiondetails.ts ***!
  \**************************************/
/*! exports provided: connectiondetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectiondetails", function() { return connectiondetails; });
var connectiondetails = /** @class */ (function () {
    function connectiondetails(semail, temail) {
        this.studentEmail = semail;
        this.teacherEmail = temail;
    }
    connectiondetails.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return connectiondetails;
}());



/***/ }),

/***/ "./src/app/dataservice.service.ts":
/*!****************************************!*\
  !*** ./src/app/dataservice.service.ts ***!
  \****************************************/
/*! exports provided: DataserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataserviceService", function() { return DataserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _registerdetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registerdetails */ "./src/app/registerdetails.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _searchdetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchdetails */ "./src/app/searchdetails.ts");
/* harmony import */ var _connectiondetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connectiondetails */ "./src/app/connectiondetails.ts");
/* harmony import */ var _postdetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./postdetails */ "./src/app/postdetails.ts");








var DataserviceService = /** @class */ (function () {
    function DataserviceService(http, router) {
        this.http = http;
        this.router = router;
        this.user = new _registerdetails__WEBPACK_IMPORTED_MODULE_3__["registerdetails"]("", "", "", "", "", "", "", "", "", "");
    }
    DataserviceService.prototype.searchTeachers = function (t) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.search = new _searchdetails__WEBPACK_IMPORTED_MODULE_5__["searchDetails"](t, "", "");
                        console.log(t);
                        return [4 /*yield*/, this.http.get('http://localhost:8080/searchTeacher?id=' + t + '').toPromise().then(function (res) {
                                console.log(res);
                                _this.searchResults = res;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataserviceService.prototype.logout = function (t) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.search = new _searchdetails__WEBPACK_IMPORTED_MODULE_5__["searchDetails"](t, "", "");
                        console.log(t);
                        return [4 /*yield*/, this.http.get('http://localhost:8080/logout?id=' + t + '').toPromise().then(function (res) {
                                console.log(res);
                                _this.searchResults = res;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataserviceService.prototype.getTeachers = function (t) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.search = new _searchdetails__WEBPACK_IMPORTED_MODULE_5__["searchDetails"](t, "", "");
                        console.log(t);
                        return [4 /*yield*/, this.http.get('http://localhost:8080/getTeachers?id=' + t + '').toPromise().then(function (res) {
                                console.log(res);
                                _this.searchResults = res;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataserviceService.prototype.getprofilepic = function (t) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(t);
                        return [4 /*yield*/, this.http.get('http://localhost:8080/profilepic?id=' + t + '').subscribe(function (baseImage) {
                                //alert(JSON.stringify(data.image));
                                _this.objectURL = 'data:image/jpeg;base64,' + baseImage.image;
                                console.log(_this.objectURL + " image");
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataserviceService.prototype.getpicurl = function () {
        return this.objectURL;
    };
    DataserviceService.prototype.getStudents = function (t) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.search = new _searchdetails__WEBPACK_IMPORTED_MODULE_5__["searchDetails"](t, "", "");
                        console.log(t);
                        return [4 /*yield*/, this.http.get('http://localhost:8080/getStudents?id=' + t + '').toPromise().then(function (res) {
                                console.log(res);
                                _this.searchResults = res;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataserviceService.prototype.getTeacherPosts = function (t) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.search = new _searchdetails__WEBPACK_IMPORTED_MODULE_5__["searchDetails"](t, "", "");
                        console.log(t);
                        return [4 /*yield*/, this.http.get('http://localhost:8080/getTeacherPosts?id=' + t + '').toPromise().then(function (res) {
                                console.log(res);
                                _this.posts = res;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataserviceService.prototype.getStudentPosts = function (t) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.search = new _searchdetails__WEBPACK_IMPORTED_MODULE_5__["searchDetails"](t, "", "");
                        console.log(t);
                        return [4 /*yield*/, this.http.get('http://localhost:8080/getStudentPosts?id=' + t + '').toPromise().then(function (res) {
                                console.log(res);
                                _this.posts = res;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataserviceService.prototype.addConnection = function (semail, temail) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(semail + " student email");
                        this.cdetails = new _connectiondetails__WEBPACK_IMPORTED_MODULE_6__["connectiondetails"](semail, temail);
                        return [4 /*yield*/, this.http.post('http://localhost:8080/addConnection', this.cdetails, {
                                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                    'content-Type': 'application/json',
                                })
                            }).toPromise().then(function (data) {
                                console.log(data);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataserviceService.prototype.uploadFile = function (file) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("After upload");
                        localStorage.setItem('profilepic', "yes");
                        return [4 /*yield*/, this.http.post('http://localhost:8080/uploadImage', file).toPromise().then(function (data) {
                                console.log(data.toString() + " response data");
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataserviceService.prototype.CreatePost = function (pemail, pheading, pcontent) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(pemail + " post email");
                        this.post = new _postdetails__WEBPACK_IMPORTED_MODULE_7__["postdetails"](pemail, pheading, pcontent);
                        return [4 /*yield*/, this.http.post('http://localhost:8080/createPost', this.post, {
                                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                    'content-Type': 'application/json',
                                })
                            }).toPromise().then(function (data) {
                                console.log(data);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataserviceService.prototype.getSearchResults = function () {
        console.log(this.searchResults + "search results ");
        return this.searchResults;
    };
    DataserviceService.prototype.getpostResults = function () {
        console.log(this.posts + "search results ");
        return this.posts;
    };
    DataserviceService.prototype.createUser = function (user) {
        console.log(user.experience + " experience");
        this.http.post('http://localhost:8080/postAddUser', user, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'content-Type': 'application/json',
            })
        }).subscribe(function (data) {
            console.log(data.status);
        });
    };
    DataserviceService.prototype.validateLogin = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //console.log(user.email+" email")
                    return [4 /*yield*/, this.http.post('http://localhost:8080/validatelogin', user, {
                            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                                'content-Type': 'application/json',
                            })
                        }).toPromise().then(function (data) {
                            console.log(data);
                            _this.user = new _registerdetails__WEBPACK_IMPORTED_MODULE_3__["registerdetails"](data.status, data.firstname, data.lastname, data.email, data.subject, data.experience, data.city, data.password, data.logged, data.profilepic);
                        })];
                    case 1:
                        //console.log(user.email+" email")
                        _a.sent();
                        console.log(this.user.email + " email");
                        return [2 /*return*/];
                }
            });
        });
    };
    DataserviceService.prototype.upload = function (formData) {
        return this.http.post("", formData, {
            reportProgress: true,
            observe: 'events'
        });
    };
    DataserviceService.prototype.getUserDetails = function () {
        console.log(this.user.firstname);
        localStorage.setItem('email', this.user.email);
        localStorage.setItem('name', this.user.firstname + " " + this.user.lastname);
        localStorage.setItem('status', this.user.status);
        localStorage.setItem('subject', this.user.subject);
        localStorage.setItem('experience', this.user.experience);
        localStorage.setItem('city', this.user.city);
        localStorage.setItem('profilepic', this.user.profilepic);
        return this.user;
    };
    DataserviceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    DataserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DataserviceService);
    return DataserviceService;
}());



/***/ }),

/***/ "./src/app/getteachers/getteachers.component.css":
/*!*******************************************************!*\
  !*** ./src/app/getteachers/getteachers.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background-color: rgb(29, 129, 187);\r\n    min-height: 100px;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    margin: 0px;\r\n    \r\n}\r\n\r\n.navbar-custom{\r\n    background-color: rgb(29, 129, 187);\r\n    font-size: 20px;\r\n    \r\n\r\n}\r\n\r\n.body{\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    min-height: 650px;\r\n    \r\n    margin: 0px;\r\n    background-color: #e9ebee;\r\n    \r\n    \r\n}\r\n\r\na{\r\n    color: rgb(190, 49, 49);\r\n}\r\n\r\n.main-heading{\r\n    color: rgb(190, 49, 49);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 40px;\r\n    padding: 20px;\r\n    font-style: initial;\r\n    \r\n    margin-left: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0dGVhY2hlcnMvZ2V0dGVhY2hlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxlQUFlOzs7QUFHbkI7O0FBR0E7SUFDSSwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixpQkFBaUI7O0lBRWpCLFdBQVc7SUFDWCx5QkFBeUI7OztBQUc3Qjs7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2dldHRlYWNoZXJzL2dldHRlYWNoZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMjksIDE4Nyk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIFxyXG59XHJcblxyXG4ubmF2YmFyLWN1c3RvbXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTI5LCAxODcpO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgXHJcblxyXG59XHJcblxyXG5cclxuLmJvZHl7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgbWluLWhlaWdodDogNjUwcHg7XHJcbiAgICBcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWJlZTtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuYXtcclxuICAgIGNvbG9yOiByZ2IoMTkwLCA0OSwgNDkpO1xyXG59XHJcblxyXG4ubWFpbi1oZWFkaW5ne1xyXG4gICAgY29sb3I6IHJnYigxOTAsIDQ5LCA0OSk7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXN0eWxlOiBpbml0aWFsO1xyXG4gICAgXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/getteachers/getteachers.component.ts":
/*!******************************************************!*\
  !*** ./src/app/getteachers/getteachers.component.ts ***!
  \******************************************************/
/*! exports provided: GetteachersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetteachersComponent", function() { return GetteachersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var GetteachersComponent = /** @class */ (function () {
    function GetteachersComponent(service, router) {
        this.service = service;
        this.router = router;
        this.teacher = false;
        this.onlineStatus = "offline";
    }
    GetteachersComponent.prototype.ngOnInit = function () {
        this.teacherresult = this.service.getSearchResults();
    };
    GetteachersComponent.prototype.profile = function () {
        this.router.navigate(['/profile']);
    };
    GetteachersComponent.ctorParameters = function () { return [
        { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    GetteachersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-getteachers',
            template: __webpack_require__(/*! raw-loader!./getteachers.component.html */ "./node_modules/raw-loader/index.js!./src/app/getteachers/getteachers.component.html"),
            styles: [__webpack_require__(/*! ./getteachers.component.css */ "./src/app/getteachers/getteachers.component.css")]
        })
    ], GetteachersComponent);
    return GetteachersComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background-color: rgb(29, 129, 187);\r\n    min-height: 100px;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    margin: 0px;\r\n    \r\n}\r\n\r\n.navbar-custom{\r\n    background-color: rgb(29, 129, 187);\r\n    font-size: 20px;\r\n    \r\n\r\n}\r\n\r\n.body{\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    min-height: 650px;\r\n    \r\n    margin: 0px;\r\n    \r\n    \r\n}\r\n\r\na{\r\n    color: rgb(190, 49, 49);\r\n}\r\n\r\n.main-heading{\r\n    color: rgb(190, 49, 49);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 40px;\r\n    padding: 20px;\r\n    font-style: initial;\r\n    \r\n  \r\n}\r\n\r\n.profile-card{\r\n    width: auto;\r\n}\r\n\r\n.body{\r\n    background-color: #e9ebee;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixXQUFXOztBQUVmOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGVBQWU7OztBQUduQjs7QUFHQTtJQUNJLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGlCQUFpQjs7SUFFakIsV0FBVzs7O0FBR2Y7O0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1COzs7QUFHdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBSUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMjksIDE4Nyk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIFxyXG59XHJcblxyXG4ubmF2YmFyLWN1c3RvbXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTI5LCAxODcpO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgXHJcblxyXG59XHJcblxyXG5cclxuLmJvZHl7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgbWluLWhlaWdodDogNjUwcHg7XHJcbiAgICBcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5he1xyXG4gICAgY29sb3I6IHJnYigxOTAsIDQ5LCA0OSk7XHJcbn1cclxuXHJcbi5tYWluLWhlYWRpbmd7XHJcbiAgICBjb2xvcjogcmdiKDE5MCwgNDksIDQ5KTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZvbnQtc3R5bGU6IGluaXRpYWw7XHJcbiAgICBcclxuICBcclxufVxyXG5cclxuLnByb2ZpbGUtY2FyZHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG5cclxuXHJcbi5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWJlZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(service, router) {
        this.service = service;
        this.router = router;
        this.teacher = false;
        this.student = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.email = localStorage.getItem('email');
        this.status = localStorage.getItem('status');
        if (this.status == "teacher") {
            this.teacher = true;
        }
        else {
            this.student = true;
        }
    };
    HeaderComponent.prototype.getTeachers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getTeachers(this.email)];
                    case 1:
                        _a.sent();
                        this.router.navigate(['/teachers']);
                        return [2 /*return*/];
                }
            });
        });
    };
    HeaderComponent.prototype.getStudents = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getStudents(this.email)];
                    case 1:
                        _a.sent();
                        this.router.navigate(['/teachers']);
                        return [2 /*return*/];
                }
            });
        });
    };
    HeaderComponent.prototype.logout = function () {
        console.log(this.email + " loging out");
        this.service.logout(this.email);
    };
    HeaderComponent.prototype.profile = function () {
        this.router.navigate(['/profile']);
    };
    HeaderComponent.prototype.searchTeacher = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.searchtext + " search text");
                        return [4 /*yield*/, this.service.searchTeachers(this.searchtext)];
                    case 1:
                        _a.sent();
                        this.router.routeReuseStrategy.shouldReuseRoute = function () {
                            return false;
                        };
                        this.router.onSameUrlNavigation = 'reload';
                        this.router.navigate(['/search']);
                        return [2 /*return*/];
                }
            });
        });
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background-color: rgb(29, 129, 187);\r\n    height: 100px;\r\n    margin: 0px;\r\n    \r\n}\r\na{\r\n    color: rgb(190, 49, 49);\r\n}\r\n.main-heading{\r\n    color: rgb(190, 49, 49);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 40px;\r\n    padding: 20px;\r\n    font-style: initial;\r\n    \r\n    margin-left: 20px;\r\n}\r\n.form-control-inline {\r\n    min-width: 0;\r\n    width: auto;\r\n    display: inline;\r\n}\r\n.body{\r\n    width: 100%;\r\n    \r\n    \r\n}\r\n.warning{\r\n    color: red;\r\n}\r\n.caption{\r\n    color: rgb(61, 48, 90);\r\n    font-style: inherit;\r\n    font-size: 50px;\r\n    padding: 90px;\r\n}\r\n.login-form{\r\n   height: 550px;\r\n    width: 400px;\r\n    \r\n   \r\n}\r\n.formdata{\r\n    color: rgb(190, 49, 49);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 40px;\r\n    padding: 20px;\r\n\r\n}\r\n.login{\r\n    padding-top: 100px;\r\n    padding-left: 40px;\r\n\r\n}\r\n.body{\r\n    background-color: #e9ebee;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsV0FBVzs7QUFFZjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksV0FBVzs7O0FBR2Y7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtBQUNqQjtBQUNBO0dBQ0csYUFBYTtJQUNaLFlBQVk7OztBQUdoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlDQUF5QztJQUN6QyxlQUFlO0lBQ2YsYUFBYTs7QUFFakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTI5LCAxODcpO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgXHJcbn1cclxuYXtcclxuICAgIGNvbG9yOiByZ2IoMTkwLCA0OSwgNDkpO1xyXG59XHJcblxyXG4ubWFpbi1oZWFkaW5ne1xyXG4gICAgY29sb3I6IHJnYigxOTAsIDQ5LCA0OSk7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXN0eWxlOiBpbml0aWFsO1xyXG4gICAgXHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4uZm9ybS1jb250cm9sLWlubGluZSB7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLmJvZHl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuLndhcm5pbmd7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uY2FwdGlvbntcclxuICAgIGNvbG9yOiByZ2IoNjEsIDQ4LCA5MCk7XHJcbiAgICBmb250LXN0eWxlOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgcGFkZGluZzogOTBweDtcclxufVxyXG4ubG9naW4tZm9ybXtcclxuICAgaGVpZ2h0OiA1NTBweDtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIFxyXG4gICBcclxufVxyXG4uZm9ybWRhdGF7XHJcbiAgICBjb2xvcjogcmdiKDE5MCwgNDksIDQ5KTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuXHJcbn1cclxuLmxvZ2lue1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG5cclxufVxyXG4uYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWViZWU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _logindeatils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logindeatils */ "./src/app/logindeatils.ts");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, router) {
        this.service = service;
        this.router = router;
        this.email = "";
        this.password = "";
        this.invalidEmail = false;
        this.invalidpassword = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.validatefields = function () {
        if (!(this.email.includes("@") && this.email.includes(".com"))) {
            this.invalidEmail = true;
        }
        else {
            this.invalidEmail = false;
        }
        console.log("Invalid email" + this.invalidEmail);
    };
    LoginComponent.prototype.register = function () {
        console.log("clicked register");
        this.router.navigate(['/register']);
    };
    LoginComponent.prototype.loginSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.validatefields();
                        console.log(this.email + this.password);
                        this.lUser = new _logindeatils__WEBPACK_IMPORTED_MODULE_3__["loginDetails"](this.email, this.password);
                        return [4 /*yield*/, this.service.validateLogin(this.lUser)];
                    case 1:
                        _a.sent();
                        this.rUser = this.service.getUserDetails();
                        if (this.rUser.email.length == 0) {
                            this.invalidEmail = true;
                        }
                        if (!(this.invalidEmail || this.invalidpassword))
                            this.router.navigate(['/profile']);
                        console.log(this.rUser);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_4__["DataserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logindeatils.ts":
/*!*********************************!*\
  !*** ./src/app/logindeatils.ts ***!
  \*********************************/
/*! exports provided: loginDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginDetails", function() { return loginDetails; });
var loginDetails = /** @class */ (function () {
    function loginDetails(email, password) {
        this.email = email;
        this.password = password;
    }
    loginDetails.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return loginDetails;
}());



/***/ }),

/***/ "./src/app/postdetails.ts":
/*!********************************!*\
  !*** ./src/app/postdetails.ts ***!
  \********************************/
/*! exports provided: postdetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postdetails", function() { return postdetails; });
var postdetails = /** @class */ (function () {
    function postdetails(email, heading, content) {
        this.email = email;
        this.heading = heading;
        this.content = content;
    }
    postdetails.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return postdetails;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background-color: rgb(29, 129, 187);\r\n    min-height: 100px;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    margin: 0px;\r\n    \r\n}\r\n\r\n.navbar-custom{\r\n    background-color: rgb(29, 129, 187);\r\n    font-size: 20px;\r\n    \r\n\r\n}\r\n\r\n.body{\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    min-height: 650px;\r\n    \r\n    margin: 0px;\r\n    \r\n    \r\n}\r\n\r\na{\r\n    color: rgb(190, 49, 49);\r\n}\r\n\r\n.main-heading{\r\n    color: rgb(190, 49, 49);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 40px;\r\n    padding: 20px;\r\n    font-style: initial;\r\n    \r\n  \r\n}\r\n\r\n.profile-card{\r\n    width: auto;\r\n}\r\n\r\n.body{\r\n    background-color: #e9ebee;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsZUFBZTs7O0FBR25COztBQUdBO0lBQ0ksMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsaUJBQWlCOztJQUVqQixXQUFXOzs7QUFHZjs7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7OztBQUd2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFJQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTI5LCAxODcpO1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLm5hdmJhci1jdXN0b217XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEyOSwgMTg3KTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIFxyXG5cclxufVxyXG5cclxuXHJcbi5ib2R5e1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIG1pbi1oZWlnaHQ6IDY1MHB4O1xyXG4gICAgXHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuYXtcclxuICAgIGNvbG9yOiByZ2IoMTkwLCA0OSwgNDkpO1xyXG59XHJcblxyXG4ubWFpbi1oZWFkaW5ne1xyXG4gICAgY29sb3I6IHJnYigxOTAsIDQ5LCA0OSk7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXN0eWxlOiBpbml0aWFsO1xyXG4gICAgXHJcbiAgXHJcbn1cclxuXHJcbi5wcm9maWxlLWNhcmR7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuXHJcblxyXG4uYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWViZWU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(service, router) {
        this.service = service;
        this.router = router;
        this.teacher = false;
        this.student = false;
        this.picstatus = true;
        this.url = "assets/maleteacher.jpg";
        this.fileToUpload = null;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(localStorage.getItem('enteredemail'));
                        this.name = localStorage.getItem('name');
                        this.email = localStorage.getItem('email');
                        this.status = localStorage.getItem('status');
                        this.subject = localStorage.getItem('subject');
                        this.experience = localStorage.getItem('experience');
                        this.city = localStorage.getItem('city');
                        this.profilepic = localStorage.getItem('profilepic');
                        if (!(this.status == "teacher")) return [3 /*break*/, 2];
                        this.teacher = true;
                        this.statusText = "Students";
                        return [4 /*yield*/, this.service.getTeacherPosts(this.email)];
                    case 1:
                        _a.sent();
                        this.posts = this.service.getpostResults().reverse();
                        console.log();
                        return [3 /*break*/, 4];
                    case 2:
                        this.student = true;
                        return [4 /*yield*/, this.service.getStudentPosts(this.email)];
                    case 3:
                        _a.sent();
                        this.posts = this.service.getpostResults().reverse();
                        _a.label = 4;
                    case 4:
                        console.log(this.name);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.onSelectFile = function (event) {
        var _this = this;
        console.log(event);
        this.fileToUpload = event.target.files[0];
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = function (event) {
                _this.url = reader.result;
            };
        }
    };
    ProfileComponent.prototype.onupload = function () {
        var fd = new FormData();
        fd.append("file", this.fileToUpload);
        fd.append("name", this.email);
        this.service.uploadFile(fd);
        this.ngOnInit();
    };
    ProfileComponent.prototype.searchTeacher = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.searchtext + " search text");
                        return [4 /*yield*/, this.service.searchTeachers(this.searchtext)];
                    case 1:
                        _a.sent();
                        this.router.navigate(['/search']);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.getProfilePic = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getprofilepic(this.email)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.getTeachers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getTeachers(this.email)];
                    case 1:
                        _a.sent();
                        this.router.navigate(['/teachers']);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.getStudents = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getStudents(this.email)];
                    case 1:
                        _a.sent();
                        this.router.navigate(['/teachers']);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.createPost = function () {
        console.log(this.postheading + this.postcontent);
        this.service.CreatePost(this.email, this.postheading, this.postcontent);
        this.ngOnInit();
    };
    ProfileComponent.prototype.profile = function () {
        this.router.navigate(['/profile']);
    };
    ProfileComponent.prototype.logout = function () {
        console.log(this.email + " loging out");
        this.service.logout(this.email);
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background-color: rgb(29, 129, 187);\r\n    height: 100px;\r\n    margin: 0px;\r\n    \r\n}\r\na{\r\n    color: rgb(190, 49, 49);\r\n}\r\n.main-heading{\r\n    color: rgb(190, 49, 49);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 40px;\r\n    padding: 20px;\r\n    font-style: initial;\r\n    \r\n    margin-left: 20px;\r\n}\r\n.warning{\r\n    color: red;\r\n}\r\n.body{\r\n    \r\n    \r\n}\r\n.caption{\r\n    color: rgb(61, 48, 90);\r\n    font-style: inherit;\r\n    font-size: 50px;\r\n    padding: 90px;\r\n}\r\n.register-form{\r\n    \r\n    height : 700px;\r\n    width: 400px;\r\n    \r\n   \r\n}\r\n.register-form-teacher{\r\n    \r\n    height : 1000px;\r\n    width: 400px;\r\n    \r\n   \r\n}\r\n.formdata{\r\n    color: rgb(190, 49, 49);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 40px;\r\n    padding: 20px;\r\n\r\n}\r\n.register{\r\n    \r\n    padding-top: 40px;\r\n    padding-left: 40px;\r\n\r\n}\r\n.body{\r\n    background-color: #e9ebee;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsV0FBVzs7QUFFZjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUdBOzs7QUFHQTtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtBQUNqQjtBQUNBOztJQUVJLGNBQWM7SUFDZCxZQUFZOzs7QUFHaEI7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsWUFBWTs7O0FBR2hCO0FBR0E7SUFDSSx1QkFBdUI7SUFDdkIseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixhQUFhOztBQUVqQjtBQUNBOztJQUVJLGlCQUFpQjtJQUNqQixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTI5LCAxODcpO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgXHJcbn1cclxuYXtcclxuICAgIGNvbG9yOiByZ2IoMTkwLCA0OSwgNDkpO1xyXG59XHJcbi5tYWluLWhlYWRpbmd7XHJcbiAgICBjb2xvcjogcmdiKDE5MCwgNDksIDQ5KTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZvbnQtc3R5bGU6IGluaXRpYWw7XHJcbiAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi53YXJuaW5ne1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcbi5ib2R5e1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuLmNhcHRpb257XHJcbiAgICBjb2xvcjogcmdiKDYxLCA0OCwgOTApO1xyXG4gICAgZm9udC1zdHlsZTogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIHBhZGRpbmc6IDkwcHg7XHJcbn1cclxuLnJlZ2lzdGVyLWZvcm17XHJcbiAgICBcclxuICAgIGhlaWdodCA6IDcwMHB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgXHJcbiAgIFxyXG59XHJcblxyXG4ucmVnaXN0ZXItZm9ybS10ZWFjaGVye1xyXG4gICAgXHJcbiAgICBoZWlnaHQgOiAxMDAwcHg7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBcclxuICAgXHJcbn1cclxuXHJcblxyXG4uZm9ybWRhdGF7XHJcbiAgICBjb2xvcjogcmdiKDE5MCwgNDksIDQ5KTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuXHJcbn1cclxuLnJlZ2lzdGVye1xyXG4gICAgXHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuXHJcbn1cclxuLmJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllYmVlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _registerdetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../registerdetails */ "./src/app/registerdetails.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(service, router) {
        this.service = service;
        this.router = router;
        this.rbtn = false;
        this.emptystatus = false;
        this.emptypassword = false;
        this.poorpassword = false;
        this.emptyfirstname = false;
        this.emptylastname = false;
        this.invalidEmail = false;
        this.invalidatePassword = false;
        this.height = "register-form";
        this.status = "";
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.subject = "";
        this.experience = "";
        this.city = "";
        this.description = "";
        this.password = "";
        this.repassword = "";
        this.subjects = ["java", "selenium", ".Net", "python", "Maths 10th", "Maths 12th", "Maths UG", "Science 10th", "Science 12th", "Science UG", "Banking Exams", "Computer Science", "Electrican Engineering", "Electronins"];
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.validateFields = function () {
        if (!((this.email.includes("@")) && (this.email.includes(".com")))) {
            this.invalidEmail = true;
            console.log("invalid email" + this.invalidEmail);
        }
        else {
            this.invalidEmail = false;
        }
        console.log("invalid email" + this.invalidEmail);
        if ((this.password == "") || !(this.password == this.repassword)) {
            this.invalidatePassword = true;
            console.log("Invalid password" + this.invalidatePassword);
            this.height = "register-form-teacher";
        }
        else {
            this.invalidatePassword = false;
        }
        console.log("Invalid password" + this.invalidatePassword);
        if (this.password.length <= 6) {
            this.poorpassword = true;
        }
        else {
            this.poorpassword = false;
        }
        if (this.firstname == "") {
            this.emptyfirstname = true;
            console.log("empty first name" + this.emptyfirstname);
        }
        else {
            this.emptyfirstname = false;
        }
        console.log("empty first name" + this.emptyfirstname);
        if (this.lastname == "") {
            this.emptylastname = true;
            console.log("empty last name" + this.emptylastname);
        }
        else {
            this.emptylastname = false;
        }
        console.log("empty last name" + this.emptylastname);
        if (this.status == "") {
            this.emptystatus = true;
            console.log("empty status" + this.emptystatus);
        }
        else {
            this.emptystatus = false;
        }
        console.log("empty status" + this.emptystatus);
        if (this.password == "") {
            this.emptypassword = true;
            console.log("empty password" + this.emptypassword);
        }
        else {
            this.emptypassword = false;
        }
        console.log("empty password" + this.emptypassword);
        console.log("Fields validated");
    };
    RegisterComponent.prototype.addTeacherFields = function () {
        this.rbtn = true;
        this.height = "register-form-teacher";
    };
    RegisterComponent.prototype.addStudentsFields = function () {
        this.rbtn = false;
        // this.height="register-form";
    };
    RegisterComponent.prototype.onRegister = function () {
        this.validateFields();
        console.log(this.status + this.firstname + this.lastname + this.email + this.subject + this.experience + this.city + this.password + this.repassword);
        this.sendregisterRequest();
    };
    RegisterComponent.prototype.sendregisterRequest = function () {
        if (this.invalidEmail || this.invalidatePassword || this.emptyfirstname || this.emptylastname || this.emptystatus || this.emptypassword || this.poorpassword) {
            console.log("fields are missing");
            this.height = "register-form-teacher";
        }
        else {
            console.log("request sent");
            this.rUser = new _registerdetails__WEBPACK_IMPORTED_MODULE_2__["registerdetails"](this.status, this.firstname, this.lastname, this.email, this.subject, this.experience, this.city, this.password, "offline", "no");
            console.log(this.rUser.password);
            this.service.createUser(this.rUser);
            this.router.navigate(['']);
        }
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_4__["DataserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/registerdetails.ts":
/*!************************************!*\
  !*** ./src/app/registerdetails.ts ***!
  \************************************/
/*! exports provided: registerdetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerdetails", function() { return registerdetails; });
var registerdetails = /** @class */ (function () {
    function registerdetails(status, firstname, lastname, email, subject, experience, city, password, logged, profilepic) {
        this.status = status;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.subject = subject;
        this.experience = experience;
        this.city = city;
        this.password = password;
        this.logged = logged;
        this.profilepic = profilepic;
    }
    registerdetails.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return registerdetails;
}());



/***/ }),

/***/ "./src/app/searchdetails.ts":
/*!**********************************!*\
  !*** ./src/app/searchdetails.ts ***!
  \**********************************/
/*! exports provided: searchDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchDetails", function() { return searchDetails; });
var searchDetails = /** @class */ (function () {
    function searchDetails(fname, lname, subject) {
        this.fname = fname;
        this.lname = lname;
        this.subject = subject;
    }
    searchDetails.ctorParameters = function () { return [
        { type: String },
        { type: String },
        null
    ]; };
    return searchDetails;
}());



/***/ }),

/***/ "./src/app/searchpage/searchpage.component.css":
/*!*****************************************************!*\
  !*** ./src/app/searchpage/searchpage.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    background-color: rgb(29, 129, 187);\r\n    min-height: 100px;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    margin: 0px;\r\n    \r\n}\r\n\r\n.navbar-custom{\r\n    background-color: rgb(29, 129, 187);\r\n    font-size: 20px;\r\n    \r\n\r\n}\r\n\r\n.body{\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    min-height: 650px;\r\n    \r\n    margin: 0px;\r\n    background-color: #e9ebee;\r\n    \r\n    \r\n}\r\n\r\na{\r\n    color: rgb(190, 49, 49);\r\n}\r\n\r\n.main-heading{\r\n    color: rgb(190, 49, 49);\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 40px;\r\n    padding: 20px;\r\n    font-style: initial;\r\n    \r\n    margin-left: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNocGFnZS9zZWFyY2hwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsZUFBZTs7O0FBR25COztBQUdBO0lBQ0ksMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsaUJBQWlCOztJQUVqQixXQUFXO0lBQ1gseUJBQXlCOzs7QUFHN0I7O0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2hwYWdlL3NlYXJjaHBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDEyOSwgMTg3KTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5uYXZiYXItY3VzdG9te1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxMjksIDE4Nyk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcblxyXG4uYm9keXtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiA2NTBweDtcclxuICAgIFxyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllYmVlO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5he1xyXG4gICAgY29sb3I6IHJnYigxOTAsIDQ5LCA0OSk7XHJcbn1cclxuXHJcbi5tYWluLWhlYWRpbmd7XHJcbiAgICBjb2xvcjogcmdiKDE5MCwgNDksIDQ5KTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGZvbnQtc3R5bGU6IGluaXRpYWw7XHJcbiAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/searchpage/searchpage.component.ts":
/*!****************************************************!*\
  !*** ./src/app/searchpage/searchpage.component.ts ***!
  \****************************************************/
/*! exports provided: SearchpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchpageComponent", function() { return SearchpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dataservice.service */ "./src/app/dataservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SearchpageComponent = /** @class */ (function () {
    function SearchpageComponent(service, router) {
        this.service = service;
        this.router = router;
        this.teacher = true;
    }
    SearchpageComponent.prototype.ngOnInit = function () {
        this.searchresult = this.service.getSearchResults();
    };
    SearchpageComponent.prototype.onConnect = function (email) {
        console.log(email + " connect name");
        this.semail = localStorage.getItem('email');
        this.temail = email;
        this.service.addConnection(this.semail, this.temail);
    };
    SearchpageComponent.prototype.profile = function () {
        this.router.navigate(['/profile']);
    };
    SearchpageComponent.ctorParameters = function () { return [
        { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SearchpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchpage',
            template: __webpack_require__(/*! raw-loader!./searchpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/searchpage/searchpage.component.html"),
            styles: [__webpack_require__(/*! ./searchpage.component.css */ "./src/app/searchpage/searchpage.component.css")]
        })
    ], SearchpageComponent);
    return SearchpageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Santhan\Desktop\teachershut\teachershuttest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map