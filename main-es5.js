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
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<app-navigation></app-navigation>\r\n\r\n<head>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <style>\r\n\r\n  </style>\r\n  <script src=\"http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js\"></script>\r\n\r\n</head>\r\n<body>\r\n<router-outlet></router-outlet>\r\n\r\n</body>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bio-info/bio-info.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bio-info/bio-info.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- News jumbotron -->\r\n<div class=\"jumbotron text-center p-4\" *ngIf=\"bio\">\r\n\r\n  <!-- Grid row -->\r\n  <div class=\"row\">\r\n\r\n    <!-- Grid column -->\r\n    <div class=\"col-md-3\">\r\n\r\n      <!-- Featured image -->\r\n      <div class=\"view overlay waves-light\">\r\n        <img src=\"{{'http://image.tmdb.org/t/p/original' + bio.profile_path}}\" class=\"img-fluid\" alt=\"Profile Picture of {{bio.name}}\">\r\n      </div>\r\n\r\n    </div>\r\n    <!-- Grid column -->\r\n\r\n    <!-- Grid column -->\r\n    <div class=\"col-md-8 text-md-left ml-3 mt-3\">\r\n      <h4 class=\"h4 mb-4\">{{bio.name}}</h4>\r\n      <h6 class=\"h6 mb-6\">{{bio.birthday}}</h6>\r\n      <h6 class=\"h6 mb-6\">{{bio.place_of_birth}}</h6>\r\n      <p class=\"font-weight-normal\">{{bio.biography}}</p>\r\n    </div>\r\n    <!-- Grid column -->\r\n\r\n  </div>\r\n  <!-- Grid row -->\r\n\r\n</div>\r\n<!-- News jumbotron -->\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bio/bio.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bio/bio.component.html ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <app-bio-info></app-bio-info>\r\n  <app-stared-in></app-stared-in>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cast/cast.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cast/cast.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-group\" style=\"height:700px;background-color:#fff;font-size:36px; margin-top: 5%; margin-left: 5vh; margin-right: 5vh; overflow: scroll\">\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let person of cast\" class=\"col-md-2\" style=\"padding-bottom: 5vh;\">\r\n      <!-- Card -->\r\n      <mdb-card class=\"h-100 view overlay zoom focus-card\" >\r\n\r\n        <div class=\"view rgba-white-slight waves-light\" mdbWavesEffect>\r\n          <!-- Card img -->\r\n\r\n          <mdb-card-img src=\"{{'http://image.tmdb.org/t/p/original' + person.profile_path}}\" alt=\"{{'Picture of ' + person.name}}\"></mdb-card-img>\r\n\r\n          <a href=\"/person/{{person.id}}\">\r\n            <div class=\"mask\"></div>\r\n          </a>\r\n        </div>\r\n        <!--Card content-->\r\n        <mdb-card-body>\r\n          <!--Title-->\r\n          <mdb-card-title>\r\n            <h4>{{person.name}}</h4>\r\n          </mdb-card-title>\r\n          <mdb-card-text>As {{person.character}}</mdb-card-text>\r\n<!--          <a href=\"/person/{{person.id}}\" mdbBtn color=\"primary\" mdbWavesEffect>Learn More</a>-->\r\n<!--          <a class=\"w-100\" type=\"button\" href=\"/person/{{person.id}}\" mdbBtn color=\"primary\" outline=\"true\" mdbWavesEffect>Learn More</a>-->\r\n<!--          <button  mdbBtn type=\"button\" color=\"primary\" outline=\"true\" mdbWavesEffect>Primary</button>-->\r\n        </mdb-card-body>\r\n      </mdb-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/grid-banner/grid-banner.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grid-banner/grid-banner.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"bannerURL\" style=\"height: 80vh;z-index: -1;\">\r\n  <!--Carousel Wrapper-->\r\n  <div id=\"carousel-example-2\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\r\n    <!--Slides-->\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n      <div class=\"carousel-item\">\r\n        <!--Mask color-->\r\n        <div class=\"view jarallax\" style=\"height: 80vh;\">\r\n          <img class=\"jarallax-img\"\r\n               [src]=\"bannerURL\" alt=\"\">\r\n          <div class=\"mask rgba-blue-slight\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"carousel-item active\">\r\n        <div class=\"view jarallax\" style=\"height: 80vh;\">\r\n          <img class=\"jarallax-img\" [src]=\"bannerURL\" alt=\"\">\r\n          <div class=\"mask rgba-blue-slight\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--/.Carousel Wrapper-->\r\n</div>\r\n\r\n<div *ngIf=\"isMovie; else tv\">\r\n<h1 *ngIf=\"bannerURL\" class=\"centered\" style=\"text-align:center;white-space:pre-wrap; z-index: 100\">Feature Films </h1>\r\n</div>\r\n<ng-template #tv>\r\n  <h1 *ngIf=\"bannerURL\" class=\"centered\" style=\"text-align:center;white-space:pre-wrap; z-index: 100\">Feature TV Shows </h1>\r\n</ng-template>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n  @import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Bowlby+One+SC|Oswald|Righteous&display=swap');\r\n</style>\r\n<!--</div>-->\r\n<img class=\"pixar\" src=\"../../assets/pixar_logo.png\">\r\n\r\n<img class=\"dreamworks\" src=\"../../assets/dreamworks-logo.png\">\r\n<h1>VS.</h1>\r\n\r\n<mdb-carousel class=\"carousel slide carousel-fade \" [animation]=\"'fade'\" [interval]=\"1500\" >\r\n<!--  <mdb-carousel-item>-->\r\n<!--    <img class=\"d-block w-100 our-slides\" src=\"../../assets/carousel_images/moviehomepage2.gif\" alt=\"First slide\">-->\r\n<!--    <div class=\"carousel-caption\">-->\r\n<!--      <h3 class=\"h3-responsive\">PIXAR vs. DREAMWORKS</h3>-->\r\n<!--    </div>-->\r\n<!--  </mdb-carousel-item>-->\r\n\r\n  <mdb-carousel-item>\r\n    <img class=\"d-block w-100 our-slides\" src=\"../../assets/carousel_images/shrek_vs_monster.gif\" alt=\"Second slide\">\r\n\r\n\r\n  </mdb-carousel-item>\r\n\r\n  <mdb-carousel-item>\r\n    <img class=\"d-block w-100 our-slides\" src=\"../../assets/carousel_images/rat_vs_squrrel.gif\" alt=\"Third slide\">\r\n\r\n  </mdb-carousel-item>\r\n\r\n  <mdb-carousel-item>\r\n    <img class=\"d-block w-100 our-slides\" src=\"../../assets/carousel_images/princess_vs_dragon.gif\" alt=\"Forth slide\">\r\n\r\n  </mdb-carousel-item>\r\n\r\n  <mdb-carousel-item>\r\n    <img class=\"d-block w-100 our-slides\" src=\"../../assets/carousel_images/mike_vs_abom.gif\" alt=\"Fifth slide\">\r\n\r\n  </mdb-carousel-item>\r\n\r\n<!--  <mdb-carousel-item>-->\r\n<!--    <img class=\"d-block w-100 our-slides\" src=\"../../assets/carousel_images/evil_vs_good.gif\" alt=\"Fifth slide\">-->\r\n\r\n<!--  </mdb-carousel-item>-->\r\n\r\n  <mdb-carousel-item>\r\n    <img class=\"d-block w-100 our-slides\" src=\"../../assets/carousel_images/blue_vs_purple.gif\" alt=\"Fifth slide\">\r\n\r\n  </mdb-carousel-item>\r\n\r\n  <mdb-carousel-item>\r\n    <img class=\"d-block w-100 our-slides\" src=\"../../assets/carousel_images/bee_vs_hair.gif\" alt=\"Fifth slide\">\r\n\r\n  </mdb-carousel-item>\r\n\r\n  <mdb-carousel-item>\r\n    <img class=\"d-block w-100 our-slides\" src=\"../../assets/carousel_images/baby_vs_woody.gif\" alt=\"Fifth slide\">\r\n\r\n  </mdb-carousel-item>\r\n</mdb-carousel>\r\n<!--<img class=\"pixar\" src=\"../../assets/pixar_logo.png\">-->\r\n\r\n<!--<img class=\"dreamworks\" src=\"../../assets/dreamworks-logo.png\">-->\r\n<!--<h1>VS.</h1>-->\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie-detail/movie-detail.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movie-detail/movie-detail.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isMovie; else tv\">\r\n<!-- Main navigation -->\r\n\r\n  <!-- Full Page Intro -->\r\n  <div *ngIf=\"movie\" class=\"view\" style=\"background-repeat: no-repeat; background-size: cover; background-position: center center;\"\r\n  [ngStyle]=\"{ 'background-image': 'url(' + 'http://image.tmdb.org/t/p/original' + movie.backdrop_path + ')'}\">\r\n    <!-- Mask & flexbox options-->\r\n    <div class=\"mask rgba-gradient d-flex justify-content-center align-items-center\">\r\n      <!-- Content -->\r\n      <div class=\"container\">\r\n        <!--Grid row-->\r\n        <div class=\"row\">\r\n          <!--Grid column-->\r\n          <div class=\"col-md-6 white-text text-center text-md-left mt-xl-5 mb-5 wow fadeInLeft\" data-wow-delay=\"0.3s\">\r\n            <h1 class=\"h1-responsive font-weight-bold mt-sm-5\">{{movie.original_title}} </h1>\r\n            <hr class=\"hr-light\">\r\n            <h6 class=\"mb-4\">{{movie.overview}}</h6>\r\n            <a mdbBtn color=\"white\" outline=\"true\" href=\"{{movie.homepage}}\" mdbWavesEffect>Show Website</a>\r\n          </div>\r\n          <!--Grid column-->\r\n          <!--Grid column-->\r\n          <div class=\"col-md-6 col-xl-5 mt-xl-5 wow fadeInRight\" data-wow-delay=\"0.3s\">\r\n            <img src=\"{{'http://image.tmdb.org/t/p/original' + movie.poster_path}}\" alt=\"\" class=\"img-fluid\">\r\n          </div>\r\n          <!--Grid column-->\r\n        </div>\r\n        <!--Grid row-->\r\n      </div>\r\n      <!-- Content -->\r\n    </div>\r\n    <!-- Mask & flexbox options-->\r\n  </div>\r\n  <!-- Full Page Intro -->\r\n\r\n<!-- Main navigation -->\r\n</div>\r\n<ng-template #tv>\r\n  <!-- Main navigation -->\r\n\r\n  <!-- Full Page Intro -->\r\n  <div *ngIf=\"movie\" class=\"view\" style=\"background-repeat: no-repeat; background-size: cover; background-position: center center;\"\r\n       [ngStyle]=\"{ 'background-image': 'url(' + 'http://image.tmdb.org/t/p/original' + movie.backdrop_path + ')'}\">\r\n    <!-- Mask & flexbox options-->\r\n    <div class=\"mask rgba-gradient d-flex justify-content-center align-items-center\">\r\n      <!-- Content -->\r\n      <div class=\"container\">\r\n        <!--Grid row-->\r\n        <div class=\"row\">\r\n          <!--Grid column-->\r\n          <div class=\"col-md-6 white-text text-center text-md-left mt-xl-5 mb-5 wow fadeInLeft\" data-wow-delay=\"0.3s\">\r\n            <h1 class=\"h1-responsive font-weight-bold mt-sm-5\">{{movie.name}} </h1>\r\n            <hr class=\"hr-light\">\r\n            <h6 class=\"mb-4\">{{movie.overview}}</h6>\r\n            <a mdbBtn color=\"white\" outline=\"true\" href=\"{{movie.homepage}}\" mdbWavesEffect>Show Website</a>\r\n          </div>\r\n          <!--Grid column-->\r\n          <!--Grid column-->\r\n          <div class=\"col-md-6 col-xl-5 mt-xl-5 wow fadeInRight\" data-wow-delay=\"0.3s\">\r\n            <img src=\"{{'http://image.tmdb.org/t/p/original' + movie.poster_path}}\" alt=\"\" class=\"img-fluid\">\r\n          </div>\r\n          <!--Grid column-->\r\n        </div>\r\n        <!--Grid row-->\r\n      </div>\r\n      <!-- Content -->\r\n    </div>\r\n    <!-- Mask & flexbox options-->\r\n  </div>\r\n  <!-- Full Page Intro -->\r\n\r\n  <!-- Main navigation -->\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n  <app-trailer></app-trailer>\r\n  <app-cast></app-cast>\r\n  <app-similar></app-similar>\r\n\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie-grid/movie-grid.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movie-grid/movie-grid.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div style=\"height:1000px;background-color:#fff;font-size:36px; margin-top: 5%; margin-left: 5vh; margin-right: 5vh\">\r\n  <div class=\"row\">\r\n\r\n    <div *ngFor=\"let movie of moviesList\" class=\"col-md-3\" style=\"padding-bottom: 5vh;\">\r\n      <!--Card-->\r\n      <mdb-card cascade=\"true\" wider=\"true\">\r\n\r\n        <!--Card image-->\r\n        <div class=\"view view-cascade overlay waves-light\" mdbWavesEffect>\r\n          <mdb-card-img src=\"{{'http://image.tmdb.org/t/p/original' + movie.poster_path}}\"></mdb-card-img>\r\n\r\n\r\n          <div *ngIf=\"isMovie; else notShow\">\r\n            <a href=\"/details/movie/{{movie.id}}\">\r\n              <div class=\"mask rgba-white-slight\"></div>\r\n            </a>\r\n          </div>\r\n\r\n          <ng-template #notShow>\r\n            <a href=\"/details/tv/{{movie.id}}\">\r\n              <div class=\"mask rgba-white-slight\"></div>\r\n            </a>\r\n          </ng-template>\r\n\r\n        </div>\r\n        <!--/Card image-->\r\n\r\n      </mdb-card>\r\n      <!--/.Card-->\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--Navbar-->\r\n<mdb-navbar class=\"Header-nav-pixar\" SideClass=\"navbar navbar-expand-lg navbar-light\" [containerInside]=\"false\">\r\n\r\n  <div *ngIf=\"url.match('/network/') || url.match('/tv/'); then vsTV else vsMovie\"></div>\r\n  <!-- Navbar brand -->\r\n  <ng-template #vsMovie>\r\n  <mdb-navbar-brand><a class=\"navbar-brand\" href=\"#\">PIXAR vs. DREAMWORKS</a></mdb-navbar-brand>\r\n  </ng-template>\r\n  <ng-template #vsTV>\r\n    <mdb-navbar-brand><a class=\"navbar-brand\" href=\"#\">FOX vs. CBS</a></mdb-navbar-brand>\r\n  </ng-template>\r\n\r\n  <!-- Collapsible content -->\r\n  <links>\r\n\r\n    <!-- Links -->\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li [class.active]=\"url == '' || url == '/home'\" class=\"nav-item\">\r\n        <a  class=\"nav-link waves-light\" href=\"/home\" mdbWavesEffect>Home<span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n\r\n      <div *ngIf=\"url.match('/network/') || url.match('/tv/'); then useTV else useMovie\"></div>\r\n      <ng-template #useMovie>\r\n      <li  class=\"nav-item\" [class.active]=\"url == '/studio/3'\">\r\n        <a  class=\"nav-link waves-light\" href=\"/studio/3\" mdbWavesEffect>Pixar</a>\r\n      </li>\r\n      <li [class.active]=\"url == '/studio/521'\" class=\"nav-item\" >\r\n        <a  class=\"nav-link waves-light\"  href=\"/studio/521\" mdbWavesEffect>Dreamworks</a>\r\n      </li>\r\n      </ng-template>\r\n      <ng-template #useTV>\r\n        <li  class=\"nav-item\" [class.active]=\"url == '/network/19'\">\r\n          <a  class=\"nav-link waves-light\" href=\"/network/19\" mdbWavesEffect>FOX</a>\r\n        </li>\r\n        <li [class.active]=\"url == '/network/16'\" class=\"nav-item\" >\r\n          <a  class=\"nav-link waves-light\"  href=\"/network/16\" mdbWavesEffect>CBS</a>\r\n        </li>\r\n      </ng-template>\r\n\r\n      <div *ngIf=\"url.match('/network/') || url.match('/tv/'); then dropTV else dropMovie\"></div>\r\n      <!-- Dropdown -->\r\n      <ng-template #dropMovie>\r\n      <li class=\"nav-item dropdown\" dropdown>\r\n        <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\r\n          Discover<span class=\"caret\"></span></a>\r\n        <div *dropdownMenu class=\"dropdown-menu dropdown dropdown-primary\" role=\"menu\">\r\n          <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"/movie/now_playing\">Now Playing</a>\r\n          <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"/movie/popular\">Popular Movies</a>\r\n          <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"/movie/top_rated\">Top Rated Movies</a>\r\n          <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"/movie/upcoming\">Upcoming Movies</a>\r\n        </div>\r\n      </li>\r\n        </ng-template>\r\n      <ng-template #dropTV>\r\n        <li class=\"nav-item dropdown\" dropdown>\r\n          <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\r\n            Discover<span class=\"caret\"></span></a>\r\n          <div *dropdownMenu class=\"dropdown-menu dropdown dropdown-primary\" role=\"menu\">\r\n            <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"/tv/airing_today\">Airing Today</a>\r\n            <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"/tv/popular\">Popular Shows</a>\r\n            <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"/tv/top_rated\">Top Rated Shows</a>\r\n            <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"/tv/on_the_air\">Currently on Air</a>\r\n          </div>\r\n        </li>\r\n      </ng-template>\r\n      <div *ngIf=\"url.match('/network/') || url.match('/tv/'); then switchTV else switchMovie\"></div>\r\n      <ng-template #switchMovie>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link waves-light\"  href=\"/network/19\" mdbWavesEffect>TV</a>\r\n      </li>\r\n      </ng-template>\r\n      <ng-template #switchTV>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-light\"  href=\"/studio/3\" mdbWavesEffect>Movie</a>\r\n        </li>\r\n      </ng-template>\r\n\r\n    </ul>\r\n\r\n  <app-search></app-search>\r\n\r\n</links>\r\n\r\n</mdb-navbar>\r\n<!--/.Navbar-->\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Search form -->\r\n<form id=\"search-component\" class=\"form-inline waves-light\" mdbWavesEffect\r\n      (submit)=\"submitForm(searchBox.value)\" (keypress.enter)=\"submitForm(searchBox.value)\" >\r\n  <div class=\"md-form my-0\">\r\n    <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\"\r\n    #searchBox id=\"search-box\" (input)=\"getMovieListByName(searchBox.value)\" >\r\n  </div>\r\n</form>\r\n\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/similar/similar.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/similar/similar.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"card-group\" style=\"height:1000px;background-color:#fff;font-size:36px; margin-top: 5%; margin-left: 5vh; margin-right: 5vh\">\r\n  <h1 style=\"position: relative; font-weight: 400; left: 45%\"> Related Movies </h1>\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let movie of moviesList\" class=\"col-md-3\" style=\"padding-bottom: 5vh;\">\r\n  <!-- Card -->\r\n  <mdb-card class=\"h-100 focus-card view overlay zoom\">\r\n    <div class=\"view rgba-white-slight waves-light\" mdbWavesEffect>\r\n      <!-- Card img -->\r\n      <mdb-card-img src=\"{{'http://image.tmdb.org/t/p/original' + movie.poster_path}}\" alt=\"{{movie.title + ' Movie Poster'}}\"></mdb-card-img>\r\n      <div *ngIf=\"isMovie; else tv\">\r\n      <a href=\"/details/movie/{{movie.id}}\">\r\n        <div class=\"mask\"></div>\r\n      </a>\r\n      </div>\r\n      <ng-template #tv>\r\n        <a href=\"/details/tv/{{movie.id}}\">\r\n          <div class=\"mask\"></div>\r\n        </a>\r\n      </ng-template>\r\n    </div>\r\n    <!--Card content-->\r\n    <mdb-card-body>\r\n      <!--Title-->\r\n      <mdb-card-title>\r\n        <h4>{{movie.title}}</h4>\r\n      </mdb-card-title>\r\n\r\n      <!--Text-->\r\n      <mdb-card-text> {{movie.overview}}\r\n      </mdb-card-text>\r\n\r\n      <div *ngIf=\"isMovie; else tvShow\">\r\n<!--      <a href=\"/details/movie/{{movie.id}}\" mdbBtn color=\"primary\" mdbWavesEffect>See Movie Details</a>-->\r\n      </div>\r\n      <ng-template #tvShow>\r\n        <a href=\"/details/tv/{{movie.id}}\" mdbBtn color=\"primary\" mdbWavesEffect>See Movie Details</a>\r\n      </ng-template>\r\n    </mdb-card-body>\r\n  </mdb-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stared-in/stared-in.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stared-in/stared-in.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- News jumbotron -->\r\n<div class=\"jumbotron text-center hoverable p-4\" *ngIf=\"cast\">\r\n\r\n  <div *ngFor=\"let movie of cast\" style=\"padding-bottom: 5vh;\">\r\n  <!-- Grid row -->\r\n  <div class=\"row\">\r\n    <!-- Grid column -->\r\n    <div class=\"col-md-7 text-md-left ml-3 mt-3\">\r\n      <div *ngIf=\"movie.title; else useName\">\r\n        <h4 class=\"h4 mb-4\">{{movie.title}}</h4>\r\n      </div>\r\n      <ng-template #useName>\r\n        <h4 class=\"h4 mb-4\">{{movie.name}}</h4>\r\n      </ng-template>\r\n      <div *ngIf=\"movie.character\"><h5 class=\"h5 mb-5\">As {{movie.character}} </h5></div>\r\n      <p class=\"font-weight-normal\">{{movie.overview}}</p>\r\n      <div *ngIf=\"movie.media_type === 'tv'; else notTVButton\">\r\n        <a mdbBtn color=\"success\" href=\"/details/tv/{{movie.id}}\" mdbWavesEffect>See TV Show</a>\r\n      </div>\r\n      <ng-template #notTVButton>\r\n        <a mdbBtn color=\"success\" href=\"/details/movie/{{movie.id}}\" mdbWavesEffect>See Movie</a>\r\n      </ng-template>\r\n    </div>\r\n    <!-- Grid column -->\r\n\r\n    <!-- Grid column -->\r\n    <div class=\"col-md-4 offset-md-1 mx-3 my-3\">\r\n\r\n      <!-- Featured image -->\r\n      <div class=\"view overlay waves-light\" mdbWavesEffect>\r\n        <img src=\"{{'http://image.tmdb.org/t/p/original' + movie.backdrop_path}}\" class=\"img-fluid\" alt=\"Image of {{movie.title}} Movie\">\r\n        <div *ngIf=\"movie.media_type === 'tv'; else notTV\">\r\n          <a href=\"/details/tv/{{movie.id}}\">\r\n            <div class=\"mask rgba-white-slight\"></div>\r\n          </a>\r\n        </div>\r\n        <ng-template #notTV>\r\n          <a href=\"/details/movie/{{movie.id}}\">\r\n            <div class=\"mask rgba-white-slight\"></div>\r\n          </a>\r\n        </ng-template>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- Grid column -->\r\n    </div>\r\n  </div>\r\n  <!-- Grid row -->\r\n\r\n</div>\r\n<!-- News jumbotron -->\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/studio/studio.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/studio/studio.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-grid-banner></app-grid-banner>\n<app-movie-grid></app-movie-grid>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trailer/trailer.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trailer/trailer.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"embed-responsive embed-responsive-16by9\" *ngIf=\"key\">\r\n  <iframe class=\"embed-responsive-item\" [src]=\"key\" allowfullscreen></iframe>\r\n</div>\r\n");
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
            /* harmony import */ var _studio_studio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./studio/studio.component */ "./src/app/studio/studio.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
            /* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/movie-detail/movie-detail.component.ts");
            /* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
            var routes = [
                { path: '', pathMatch: 'full', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"] },
                { path: 'home', redirectTo: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"] },
                { path: 'person/:id', component: _bio_bio_component__WEBPACK_IMPORTED_MODULE_6__["BioComponent"] },
                { path: 'details/:grid/:id', component: _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_5__["MovieDetailComponent"] },
                { path: ':grid/:id', component: _studio_studio_component__WEBPACK_IMPORTED_MODULE_2__["StudioComponent"] },
                { path: '', pathMatch: 'full', component: _studio_studio_component__WEBPACK_IMPORTED_MODULE_2__["StudioComponent"] },
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("body, html {\n  height: 100%;\n}\n\n.jarallax {\n  position: relative;\n  z-index: 0;\n}\n\n.jarallax > .jarallax-img {\n  position: relative;\n  -o-object-fit: cover;\n     object-fit: cover;\n  /* support for plugin https://github.com/bfred-it/object-fit-images */\n  font-family: \"object-fit: cover;\";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n.parallax {\n  /* The image used */\n  background-image: url(\"https://wallpaperaccess.com/full/331666.jpg\");\n  /* Full height */\n  height: 85vh;\n  background-size: cover;\n  /* Create the parallax scrolling effect */\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n  -webkit-animation-name: test;\n          animation-name: test;\n  -webkit-animation-delay: 10s;\n          animation-delay: 10s;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-duration: 20s;\n          animation-duration: 20s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes test {\n  100% {\n    background-image: url(\"https://images.squarespace-cdn.com/content/v1/5ae11809f93fd4f365d1d2c3/1561346511281-Y03EPI9AH7Y1YAEEKPHE/ke17ZwdGBToddI8pDm48kDxhhhwBddJ9fDxYAvV-2zp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ouw-8l5B_J38LMU7OZFvYfl9aEukiZdUWz0NUuu50q7UB1aqLpIyc_jzEDviFCoAA/Toy+Story+4.jpg?format=2500w\");\n  }\n}\n\n@keyframes test {\n  0% {\n    background-image: url(\"https://wallpaperaccess.com/full/331666.jpg\");\n  }\n  100% {\n    background-image: url(\"https://images.squarespace-cdn.com/content/v1/5ae11809f93fd4f365d1d2c3/1561346511281-Y03EPI9AH7Y1YAEEKPHE/ke17ZwdGBToddI8pDm48kDxhhhwBddJ9fDxYAvV-2zp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ouw-8l5B_J38LMU7OZFvYfl9aEukiZdUWz0NUuu50q7UB1aqLpIyc_jzEDviFCoAA/Toy+Story+4.jpg?format=2500w\");\n  }\n}\n\n.Header-nav-pixar {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0em;\n  font-family: brandon-grotesque, sans-serif;\n  font-weight: 500;\n  font-style: normal;\n  font-size: 15px;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n\n.navbar-brand {\n  padding-bottom: 20px;\n}\n\n.centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #fff;\n  font-family: brandon-grotesque, sans-serif;\n  font-weight: 900;\n  font-style: normal;\n  font-size: 51px;\n  letter-spacing: 0.29em;\n  line-height: 1em;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxuMDM0Mjk3N1xcRG9jdW1lbnRzXFxHaXRIdWJcXFBpeGFyLURyZWFtd29ya3MtQXBwL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EscUVBQUE7RUFDQSxpQ0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDR0Y7O0FEREE7RUFDRSxtQkFBQTtFQUNBLG9FQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtVQUFBLG9CQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtBQ0lGOztBREZBO0VBS0U7SUFDRSxzWEFBQTtFQ0NGO0FBQ0Y7O0FEQ0E7RUFDRTtJQUNFLG9FQUFBO0VDQ0Y7RURDQTtJQUNFLHNYQUFBO0VDQ0Y7QUFDRjs7QURDQTtFQUNFLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LCBodG1sIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmphcmFsbGF4IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG4uamFyYWxsYXggPiAuamFyYWxsYXgtaW1nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgLyogc3VwcG9ydCBmb3IgcGx1Z2luIGh0dHBzOi8vZ2l0aHViLmNvbS9iZnJlZC1pdC9vYmplY3QtZml0LWltYWdlcyAqL1xyXG4gIGZvbnQtZmFtaWx5OiAnb2JqZWN0LWZpdDogY292ZXI7JztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuLnBhcmFsbGF4IHtcclxuICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMzMxNjY2LmpwZycpO1xyXG4gIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgaGVpZ2h0OiA4NXZoO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLyogQ3JlYXRlIHRoZSBwYXJhbGxheCBzY3JvbGxpbmcgZWZmZWN0ICovXHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBhbmltYXRpb24tbmFtZTogdGVzdDtcclxuICBhbmltYXRpb24tZGVsYXk6IDEwcztcclxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMHM7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIHRlc3Qge1xyXG4gIDAlIHtcclxuXHJcblxyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZXMuc3F1YXJlc3BhY2UtY2RuLmNvbS9jb250ZW50L3YxLzVhZTExODA5ZjkzZmQ0ZjM2NWQxZDJjMy8xNTYxMzQ2NTExMjgxLVkwM0VQSTlBSDdZMVlBRUVLUEhFL2tlMTdad2RHQlRvZGRJOHBEbTQ4a0R4aGhod0JkZEo5ZkR4WUF2Vi0yenA3Z1FhM0g3OEgzWTB0eGphaXZfMGZEb092eGNkTW1NS2tEc3lVcU1Tc01XeEhrNzI1eWlpSENDTGZyaDhPMXo0WVR6SHZuS2h5cDZEYS1OWXJvT1czWkdqb0JLeTNhenFrdTgwQzc4OWwwb3V3LThsNUJfSjM4TE1VN09aRnZZZmw5YUV1a2laZFVXejBOVXV1NTBxN1VCMWFxTHBJeWNfanpFRHZpRkNvQUEvVG95K1N0b3J5KzQuanBnP2Zvcm1hdD0yNTAwdycpO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIHRlc3Qge1xyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMzMxNjY2LmpwZycpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZXMuc3F1YXJlc3BhY2UtY2RuLmNvbS9jb250ZW50L3YxLzVhZTExODA5ZjkzZmQ0ZjM2NWQxZDJjMy8xNTYxMzQ2NTExMjgxLVkwM0VQSTlBSDdZMVlBRUVLUEhFL2tlMTdad2RHQlRvZGRJOHBEbTQ4a0R4aGhod0JkZEo5ZkR4WUF2Vi0yenA3Z1FhM0g3OEgzWTB0eGphaXZfMGZEb092eGNkTW1NS2tEc3lVcU1Tc01XeEhrNzI1eWlpSENDTGZyaDhPMXo0WVR6SHZuS2h5cDZEYS1OWXJvT1czWkdqb0JLeTNhenFrdTgwQzc4OWwwb3V3LThsNUJfSjM4TE1VN09aRnZZZmw5YUV1a2laZFVXejBOVXV1NTBxN1VCMWFxTHBJeWNfanpFRHZpRkNvQUEvVG95K1N0b3J5KzQuanBnP2Zvcm1hdD0yNTAwdycpO1xyXG4gIH1cclxufVxyXG4uSGVhZGVyLW5hdi1waXhhciB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgZm9udC1mYW1pbHk6IGJyYW5kb24tZ3JvdGVzcXVlLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsZXR0ZXItc3BhY2luZzogLjE0ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4uY2VudGVyZWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1mYW1pbHk6IGJyYW5kb24tZ3JvdGVzcXVlLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogNTFweDtcclxuICBsZXR0ZXItc3BhY2luZzogLjI5ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiIsImJvZHksIGh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5qYXJhbGxheCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcbn1cblxuLmphcmFsbGF4ID4gLmphcmFsbGF4LWltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIC8qIHN1cHBvcnQgZm9yIHBsdWdpbiBodHRwczovL2dpdGh1Yi5jb20vYmZyZWQtaXQvb2JqZWN0LWZpdC1pbWFnZXMgKi9cbiAgZm9udC1mYW1pbHk6IFwib2JqZWN0LWZpdDogY292ZXI7XCI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5wYXJhbGxheCB7XG4gIC8qIFRoZSBpbWFnZSB1c2VkICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd2FsbHBhcGVyYWNjZXNzLmNvbS9mdWxsLzMzMTY2Ni5qcGdcIik7XG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIGhlaWdodDogODV2aDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLyogQ3JlYXRlIHRoZSBwYXJhbGxheCBzY3JvbGxpbmcgZWZmZWN0ICovXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbmltYXRpb24tbmFtZTogdGVzdDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxMHM7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgdGVzdCB7XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2VzLnNxdWFyZXNwYWNlLWNkbi5jb20vY29udGVudC92MS81YWUxMTgwOWY5M2ZkNGYzNjVkMWQyYzMvMTU2MTM0NjUxMTI4MS1ZMDNFUEk5QUg3WTFZQUVFS1BIRS9rZTE3WndkR0JUb2RkSThwRG00OGtEeGhoaHdCZGRKOWZEeFlBdlYtMnpwN2dRYTNINzhIM1kwdHhqYWl2XzBmRG9PdnhjZE1tTUtrRHN5VXFNU3NNV3hIazcyNXlpaUhDQ0xmcmg4TzF6NFlUekh2bktoeXA2RGEtTllyb09XM1pHam9CS3kzYXpxa3U4MEM3ODlsMG91dy04bDVCX0ozOExNVTdPWkZ2WWZsOWFFdWtpWmRVV3owTlV1dTUwcTdVQjFhcUxwSXljX2p6RUR2aUZDb0FBL1RveStTdG9yeSs0LmpwZz9mb3JtYXQ9MjUwMHdcIik7XG4gIH1cbn1cbkBrZXlmcmFtZXMgdGVzdCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3dhbGxwYXBlcmFjY2Vzcy5jb20vZnVsbC8zMzE2NjYuanBnXCIpO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2VzLnNxdWFyZXNwYWNlLWNkbi5jb20vY29udGVudC92MS81YWUxMTgwOWY5M2ZkNGYzNjVkMWQyYzMvMTU2MTM0NjUxMTI4MS1ZMDNFUEk5QUg3WTFZQUVFS1BIRS9rZTE3WndkR0JUb2RkSThwRG00OGtEeGhoaHdCZGRKOWZEeFlBdlYtMnpwN2dRYTNINzhIM1kwdHhqYWl2XzBmRG9PdnhjZE1tTUtrRHN5VXFNU3NNV3hIazcyNXlpaUhDQ0xmcmg4TzF6NFlUekh2bktoeXA2RGEtTllyb09XM1pHam9CS3kzYXpxa3U4MEM3ODlsMG91dy04bDVCX0ozOExNVTdPWkZ2WWZsOWFFdWtpWmRVV3owTlV1dTUwcTdVQjFhcUxwSXljX2p6RUR2aUZDb0FBL1RveStTdG9yeSs0LmpwZz9mb3JtYXQ9MjUwMHdcIik7XG4gIH1cbn1cbi5IZWFkZXItbmF2LXBpeGFyIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcbiAgZm9udC1mYW1pbHk6IGJyYW5kb24tZ3JvdGVzcXVlLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTRlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uY2VudGVyZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IGJyYW5kb24tZ3JvdGVzcXVlLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogNTFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjllbTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */");
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
            /* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jarallax */ "./node_modules/jarallax/index.js");
            /* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(jarallax__WEBPACK_IMPORTED_MODULE_2__);
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'Pixar-Dreamworks-App';
                }
                AppComponent.prototype.ngAfterViewInit = function () {
                    jarallax(document.querySelectorAll('.jarallax'), {
                        speed: 0.2
                    });
                };
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
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
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
            /* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
            /* harmony import */ var _movie_grid_movie_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movie-grid/movie-grid.component */ "./src/app/movie-grid/movie-grid.component.ts");
            /* harmony import */ var _grid_banner_grid_banner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grid-banner/grid-banner.component */ "./src/app/grid-banner/grid-banner.component.ts");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _studio_studio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./studio/studio.component */ "./src/app/studio/studio.component.ts");
            /* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
            /* harmony import */ var _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./movie-detail/movie-detail.component */ "./src/app/movie-detail/movie-detail.component.ts");
            /* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
            /* harmony import */ var _cast_cast_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cast/cast.component */ "./src/app/cast/cast.component.ts");
            /* harmony import */ var _trailer_trailer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./trailer/trailer.component */ "./src/app/trailer/trailer.component.ts");
            /* harmony import */ var _similar_similar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./similar/similar.component */ "./src/app/similar/similar.component.ts");
            /* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
            /* harmony import */ var _bio_info_bio_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bio-info/bio-info.component */ "./src/app/bio-info/bio-info.component.ts");
            /* harmony import */ var _stared_in_stared_in_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./stared-in/stared-in.component */ "./src/app/stared-in/stared-in.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                        _movie_grid_movie_grid_component__WEBPACK_IMPORTED_MODULE_7__["MovieGridComponent"],
                        _grid_banner_grid_banner_component__WEBPACK_IMPORTED_MODULE_8__["GridBannerComponent"],
                        _studio_studio_component__WEBPACK_IMPORTED_MODULE_10__["StudioComponent"],
                        _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_11__["HomePageComponent"],
                        _studio_studio_component__WEBPACK_IMPORTED_MODULE_10__["StudioComponent"],
                        _movie_detail_movie_detail_component__WEBPACK_IMPORTED_MODULE_12__["MovieDetailComponent"],
                        _studio_studio_component__WEBPACK_IMPORTED_MODULE_10__["StudioComponent"],
                        _search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
                        _cast_cast_component__WEBPACK_IMPORTED_MODULE_14__["CastComponent"],
                        _trailer_trailer_component__WEBPACK_IMPORTED_MODULE_15__["TrailerComponent"],
                        _similar_similar_component__WEBPACK_IMPORTED_MODULE_16__["SimilarComponent"],
                        _bio_bio_component__WEBPACK_IMPORTED_MODULE_17__["BioComponent"],
                        _bio_info_bio_info_component__WEBPACK_IMPORTED_MODULE_18__["BioInfoComponent"],
                        _stared_in_stared_in_component__WEBPACK_IMPORTED_MODULE_19__["StaredInComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(),
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/bio-info/bio-info.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/bio-info/bio-info.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".img-fluid, .video-fluid {\n  height: 500px !important;\n}\n\n.img-fluid {\n  height: 500px !important;\n}\n\n.col-md-3 {\n  padding-left: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlvLWluZm8vQzpcXFVzZXJzXFxuMDM0Mjk3N1xcRG9jdW1lbnRzXFxHaXRIdWJcXFBpeGFyLURyZWFtd29ya3MtQXBwL3NyY1xcYXBwXFxiaW8taW5mb1xcYmlvLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Jpby1pbmZvL2Jpby1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUNDRjs7QURDQTtFQUNFLHdCQUFBO0FDRUY7O0FEQUE7RUFDRSw2QkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvYmlvLWluZm8vYmlvLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWZsdWlkLCAudmlkZW8tZmx1aWQge1xyXG4gIGhlaWdodDogNTAwcHggIWltcG9ydGFudDtcclxufVxyXG4uaW1nLWZsdWlkIHtcclxuICBoZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbC1tZC0zIHtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG4iLCIuaW1nLWZsdWlkLCAudmlkZW8tZmx1aWQge1xuICBoZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbWctZmx1aWQge1xuICBoZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2wtbWQtMyB7XG4gIHBhZGRpbmctbGVmdDogNTBweCAhaW1wb3J0YW50O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/bio-info/bio-info.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/bio-info/bio-info.component.ts ***!
          \************************************************/
        /*! exports provided: BioInfoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioInfoComponent", function () { return BioInfoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tmdb.service */ "./src/app/tmdb.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var BioInfoComponent = /** @class */ (function () {
                function BioInfoComponent(tmdb, route) {
                    this.tmdb = tmdb;
                    this.route = route;
                    this.bioId = this.route.snapshot.paramMap.get('id');
                }
                BioInfoComponent.prototype.ngOnInit = function () {
                    this.getBioInfo();
                };
                BioInfoComponent.prototype.getBioInfo = function () {
                    var _this = this;
                    this.tmdb.getBioInfo(this.bioId).subscribe(function (response) { return _this.bio = response; });
                };
                return BioInfoComponent;
            }());
            BioInfoComponent.ctorParameters = function () { return [
                { type: _tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            BioInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bio-info',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bio-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bio-info/bio-info.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bio-info.component.scss */ "./src/app/bio-info/bio-info.component.scss")).default]
                })
            ], BioInfoComponent);
            /***/ 
        }),
        /***/ "./src/app/bio/bio.component.scss": 
        /*!****************************************!*\
          !*** ./src/app/bio/bio.component.scss ***!
          \****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jpby9iaW8uY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/bio/bio.component.ts": 
        /*!**************************************!*\
          !*** ./src/app/bio/bio.component.ts ***!
          \**************************************/
        /*! exports provided: BioComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function () { return BioComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BioComponent = /** @class */ (function () {
                function BioComponent() {
                }
                BioComponent.prototype.ngOnInit = function () {
                };
                return BioComponent;
            }());
            BioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-bio',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bio/bio.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bio.component.scss */ "./src/app/bio/bio.component.scss")).default]
                })
            ], BioComponent);
            /***/ 
        }),
        /***/ "./src/app/cast/cast.component.scss": 
        /*!******************************************!*\
          !*** ./src/app/cast/cast.component.scss ***!
          \******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".rgba-gradient {\n  background: linear-gradient(to 45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);\n  background: -webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);\n}\n\n.focus-card:hover {\n  background: #e1e1e1;\n  border: 5px solid #d0d0d0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdC9DOlxcVXNlcnNcXG4wMzQyOTc3XFxEb2N1bWVudHNcXEdpdEh1YlxcUGl4YXItRHJlYW13b3Jrcy1BcHAvc3JjXFxhcHBcXGNhc3RcXGNhc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nhc3QvY2FzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtFLDJGQUFBO0VBQ0EsZ0dBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2Nhc3QvY2FzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZ2JhLWdyYWRpZW50IHtcclxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg0MiwgMjcsIDE2MSwgMC43KSwgcmdiYSgyOSwgMjEwLCAxNzcsIDAuNykgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNDIsIDI3LCAxNjEsIDAuNyksIHJnYmEoMjksIDIxMCwgMTc3LCAwLjcpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCA0NWRlZywgZnJvbShyZ2JhKDQyLCAyNywgMTYxLCAwLjcpKSwgdG8ocmdiYSgyOSwgMjEwLCAxNzcsIDAuNykpKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNDIsIDI3LCAxNjEsIDAuNyksIHJnYmEoMjksIDIxMCwgMTc3LCAwLjcpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byA0NWRlZywgcmdiYSg0MiwgMjcsIDE2MSwgMC43KSwgcmdiYSgyOSwgMjEwLCAxNzcsIDAuNykgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNDIsIDI3LCAxNjEsIDAuNyksIHJnYmEoMjksIDIxMCwgMTc3LCAwLjcpIDEwMCUpXHJcbn1cclxuXHJcbi5mb2N1cy1jYXJkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTFlMWUxO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICNkMGQwZDA7XHJcbn1cclxuIiwiLnJnYmEtZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg0MiwgMjcsIDE2MSwgMC43KSwgcmdiYSgyOSwgMjEwLCAxNzcsIDAuNykgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDQyLCAyNywgMTYxLCAwLjcpLCByZ2JhKDI5LCAyMTAsIDE3NywgMC43KSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDQ1ZGVnLCBmcm9tKHJnYmEoNDIsIDI3LCAxNjEsIDAuNykpLCB0byhyZ2JhKDI5LCAyMTAsIDE3NywgMC43KSkpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNDIsIDI3LCAxNjEsIDAuNyksIHJnYmEoMjksIDIxMCwgMTc3LCAwLjcpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gNDVkZWcsIHJnYmEoNDIsIDI3LCAxNjEsIDAuNyksIHJnYmEoMjksIDIxMCwgMTc3LCAwLjcpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg0MiwgMjcsIDE2MSwgMC43KSwgcmdiYSgyOSwgMjEwLCAxNzcsIDAuNykgMTAwJSk7XG59XG5cbi5mb2N1cy1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2UxZTFlMTtcbiAgYm9yZGVyOiA1cHggc29saWQgI2QwZDBkMDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/cast/cast.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/cast/cast.component.ts ***!
          \****************************************/
        /*! exports provided: CastComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastComponent", function () { return CastComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tmdb.service */ "./src/app/tmdb.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CastComponent = /** @class */ (function () {
                function CastComponent(tmdb, route) {
                    this.tmdb = tmdb;
                    this.route = route;
                    this.cast = [];
                    this.movieId = this.route.snapshot.paramMap.get('id');
                    this.grid = this.route.snapshot.paramMap.get('grid');
                }
                CastComponent.prototype.ngOnInit = function () {
                    if (this.grid === 'tv') {
                        this.getTVCreditsById();
                    }
                    else {
                        this.getCreditsById();
                    }
                };
                CastComponent.prototype.getCreditsById = function () {
                    var _this = this;
                    /* tslint:disable:no-string-literal */
                    this.tmdb.getCreditsById(this.movieId).subscribe(function (response) { _this.cleanCast(response['cast']); });
                };
                CastComponent.prototype.getTVCreditsById = function () {
                    var _this = this;
                    this.tmdb.getTVCreditsById(this.movieId).subscribe(function (response) { return _this.cast = response['cast']; });
                };
                CastComponent.prototype.cleanCast = function (cast) {
                    var _this = this;
                    cast.forEach(function (person) {
                        if (person['profile_path']) {
                            _this.cast.push(person);
                        }
                    });
                };
                return CastComponent;
            }());
            CastComponent.ctorParameters = function () { return [
                { type: _tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            CastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cast',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cast.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cast/cast.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cast.component.scss */ "./src/app/cast/cast.component.scss")).default]
                })
            ], CastComponent);
            /***/ 
        }),
        /***/ "./src/app/grid-banner/grid-banner.component.scss": 
        /*!********************************************************!*\
          !*** ./src/app/grid-banner/grid-banner.component.scss ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #fff;\n  font-family: brandon-grotesque, sans-serif;\n  font-weight: 900;\n  font-style: normal;\n  font-size: 51px;\n  letter-spacing: 0.29em;\n  line-height: 1em;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZC1iYW5uZXIvQzpcXFVzZXJzXFxuMDM0Mjk3N1xcRG9jdW1lbnRzXFxHaXRIdWJcXFBpeGFyLURyZWFtd29ya3MtQXBwL3NyY1xcYXBwXFxncmlkLWJhbm5lclxcZ3JpZC1iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dyaWQtYmFubmVyL2dyaWQtYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2dyaWQtYmFubmVyL2dyaWQtYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlcmVkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBicmFuZG9uLWdyb3Rlc3F1ZSwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDUxcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC4yOWVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4iLCIuY2VudGVyZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IGJyYW5kb24tZ3JvdGVzcXVlLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogNTFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjllbTtcbiAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/grid-banner/grid-banner.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/grid-banner/grid-banner.component.ts ***!
          \******************************************************/
        /*! exports provided: GridBannerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridBannerComponent", function () { return GridBannerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var GridBannerComponent = /** @class */ (function () {
                function GridBannerComponent(route, location) {
                    this.route = route;
                    this.location = location;
                    this.studio = +this.route.snapshot.paramMap.get('id');
                    this.grid = this.route.snapshot.paramMap.get('grid');
                    this.isMovie = true;
                }
                GridBannerComponent.prototype.setBanner = function () {
                    switch (this.studio) {
                        case 3:
                            this.bannerURL = 'https://wallpaperaccess.com/full/331666.jpg';
                            break;
                        case 521:
                            this.bannerURL = 'https://images5.alphacoders.com/499/499486.jpg';
                            break;
                        default:
                            console.log(this.studio);
                            break;
                    }
                };
                GridBannerComponent.prototype.setTVBanner = function () {
                    switch (this.studio) {
                        case 16:
                            this.bannerURL = 'https://wallpaperaccess.com/full/265365.jpg';
                            break;
                        case 19:
                            this.bannerURL = 'https://wallpaperaccess.com/full/1202063.jpg';
                            break;
                        default:
                            console.log(this.studio);
                            break;
                    }
                };
                GridBannerComponent.prototype.ngOnInit = function () {
                    if (this.grid === 'network') {
                        this.setTVBanner();
                        this.isMovie = false;
                    }
                    else {
                        this.setBanner();
                        this.isMovie = true;
                    }
                };
                return GridBannerComponent;
            }());
            GridBannerComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
            ]; };
            GridBannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-grid-banner',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./grid-banner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/grid-banner/grid-banner.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./grid-banner.component.scss */ "./src/app/grid-banner/grid-banner.component.scss")).default]
                })
            ], GridBannerComponent);
            /***/ 
        }),
        /***/ "./src/app/home-page/home-page.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/home-page/home-page.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".our-slides {\n  height: 79.7vh;\n}\n\n.pixar {\n  padding-top: 3vh;\n  height: 10vh;\n  float: left;\n  padding-left: 10vh;\n}\n\n.dreamworks {\n  height: 15vh;\n  float: right;\n  padding-top: 3vh;\n  padding-right: 10vh;\n}\n\nh1 {\n  text-align: center;\n  padding-top: 5vh;\n  font-family: \"Righteous\", cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL0M6XFxVc2Vyc1xcbjAzNDI5NzdcXERvY3VtZW50c1xcR2l0SHViXFxQaXhhci1EcmVhbXdvcmtzLUFwcC9zcmNcXGFwcFxcaG9tZS1wYWdlXFxob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDRSxjQUFBO0FDUkY7O0FEWUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNURjs7QURZQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1RGOztBRFdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FDUkYiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8uY29udGFpbmVyIHtcclxuLy8gIGhlaWdodDogMTAwJTtcclxuLy8gIHdpZHRoOiAxMDAlO1xyXG4vLyAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL21vdmllaG9tZXBhZ2UyLmdpZlwiKTtcclxuLy8gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuLy8gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbi8vICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyIDtcclxuLy99XHJcblxyXG4ub3VyLXNsaWRlcyB7XHJcbiAgaGVpZ2h0OiA3OS43dmg7XHJcblxyXG59XHJcblxyXG4ucGl4YXIge1xyXG4gIHBhZGRpbmctdG9wOiAzdmg7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogMTB2aCA7XHJcbn1cclxuXHJcbi5kcmVhbXdvcmtzIHtcclxuICBoZWlnaHQ6IDE1dmg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmctdG9wOiAzdmg7XHJcbiAgcGFkZGluZy1yaWdodDogMTB2aDtcclxufVxyXG5oMXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDV2aDtcclxuICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIGN1cnNpdmU7XHJcblxyXG59XHJcblxyXG4iLCIub3VyLXNsaWRlcyB7XG4gIGhlaWdodDogNzkuN3ZoO1xufVxuXG4ucGl4YXIge1xuICBwYWRkaW5nLXRvcDogM3ZoO1xuICBoZWlnaHQ6IDEwdmg7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDEwdmg7XG59XG5cbi5kcmVhbXdvcmtzIHtcbiAgaGVpZ2h0OiAxNXZoO1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiAzdmg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwdmg7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNXZoO1xuICBmb250LWZhbWlseTogXCJSaWdodGVvdXNcIiwgY3Vyc2l2ZTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/home-page/home-page.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/home-page/home-page.component.ts ***!
          \**************************************************/
        /*! exports provided: HomePageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () { return HomePageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomePageComponent = /** @class */ (function () {
                function HomePageComponent() {
                }
                HomePageComponent.prototype.ngOnInit = function () {
                };
                return HomePageComponent;
            }());
            HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home-page',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home-page/home-page.component.scss")).default]
                })
            ], HomePageComponent);
            /***/ 
        }),
        /***/ "./src/app/movie-detail/movie-detail.component.scss": 
        /*!**********************************************************!*\
          !*** ./src/app/movie-detail/movie-detail.component.scss ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* Required for full background image */\nhtml,\nbody,\nheader,\n.view {\n  min-height: 100vh;\n}\n@media (max-width: 740px) {\n  html,\nbody,\nheader,\n.view {\n    height: 1000px;\n  }\n}\n@media (min-width: 800px) and (max-width: 850px) {\n  html,\nbody,\nheader,\n.view {\n    height: 600px;\n  }\n}\n.btn .fa {\n  margin-left: 3px;\n}\n.top-nav-collapse {\n  background-color: #424f95 !important;\n}\n.navbar:not(.top-nav-collapse) {\n  background: transparent !important;\n}\n@media (max-width: 991px) {\n  .navbar:not(.top-nav-collapse) {\n    background: #424f95 !important;\n  }\n}\n.btn-white {\n  color: black !important;\n}\nh6 {\n  line-height: 1.7;\n}\n.rgba-gradient {\n  background: linear-gradient(to 45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);\n  background: -webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);\n}\n.view.mask {\n  overflow: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZGV0YWlsL0M6XFxVc2Vyc1xcbjAzNDI5NzdcXERvY3VtZW50c1xcR2l0SHViXFxQaXhhci1EcmVhbXdvcmtzLUFwcC9zcmNcXGFwcFxcbW92aWUtZGV0YWlsXFxtb3ZpZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vdmllLWRldGFpbC9tb3ZpZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUNBQUE7QUFFQTs7OztFQUlFLGlCQUFBO0FDQUY7QURHQTtFQUNFOzs7O0lBSUUsY0FBQTtFQ0FGO0FBQ0Y7QURFQTtFQUNFOzs7O0lBSUUsYUFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFLGdCQUFBO0FDREY7QURJQTtFQUNFLG9DQUFBO0FDREY7QURJQTtFQUNFLGtDQUFBO0FDREY7QURJQTtFQUNFO0lBQ0UsOEJBQUE7RUNERjtBQUNGO0FESUE7RUFDRSx1QkFBQTtBQ0ZGO0FES0E7RUFDRSxnQkFBQTtBQ0ZGO0FES0E7RUFLRSwyRkFBQTtFQUNBLGdHQUFBO0FDRkY7QURLQTtFQUNFLHlCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZS1kZXRhaWwvbW92aWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUmVxdWlyZWQgZm9yIGZ1bGwgYmFja2dyb3VuZCBpbWFnZSAqL1xyXG5cclxuaHRtbCxcclxuYm9keSxcclxuaGVhZGVyLFxyXG4udmlldyB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NDBweCkge1xyXG4gIGh0bWwsXHJcbiAgYm9keSxcclxuICBoZWFkZXIsXHJcbiAgLnZpZXcge1xyXG4gICAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkgYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgaHRtbCxcclxuICBib2R5LFxyXG4gIGhlYWRlcixcclxuICAudmlldyB7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJ0biAuZmEge1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbn1cclxuXHJcbi50b3AtbmF2LWNvbGxhcHNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0Zjk1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXI6bm90KC50b3AtbmF2LWNvbGxhcHNlKSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLm5hdmJhcjpub3QoLnRvcC1uYXYtY29sbGFwc2UpIHtcclxuICAgIGJhY2tncm91bmQ6ICM0MjRmOTUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5idG4td2hpdGUge1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5oNiB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNztcclxufVxyXG5cclxuLnJnYmEtZ3JhZGllbnQge1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDQyLCAyNywgMTYxLCAwLjcpLCByZ2JhKDI5LCAyMTAsIDE3NywgMC43KSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg0MiwgMjcsIDE2MSwgMC43KSwgcmdiYSgyOSwgMjEwLCAxNzcsIDAuNykgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDQ1ZGVnLCBmcm9tKHJnYmEoNDIsIDI3LCAxNjEsIDAuNykpLCB0byhyZ2JhKDI5LCAyMTAsIDE3NywgMC43KSkpO1xyXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg0MiwgMjcsIDE2MSwgMC43KSwgcmdiYSgyOSwgMjEwLCAxNzcsIDAuNykgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIDQ1ZGVnLCByZ2JhKDQyLCAyNywgMTYxLCAwLjcpLCByZ2JhKDI5LCAyMTAsIDE3NywgMC43KSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg0MiwgMjcsIDE2MSwgMC43KSwgcmdiYSgyOSwgMjEwLCAxNzcsIDAuNykgMTAwJSlcclxufVxyXG5cclxuLnZpZXcubWFzayB7XHJcbiAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4iLCIvKiBSZXF1aXJlZCBmb3IgZnVsbCBiYWNrZ3JvdW5kIGltYWdlICovXG5odG1sLFxuYm9keSxcbmhlYWRlcixcbi52aWV3IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NDBweCkge1xuICBodG1sLFxuYm9keSxcbmhlYWRlcixcbi52aWV3IHtcbiAgICBoZWlnaHQ6IDEwMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgaHRtbCxcbmJvZHksXG5oZWFkZXIsXG4udmlldyB7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgfVxufVxuLmJ0biAuZmEge1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4udG9wLW5hdi1jb2xsYXBzZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjRmOTUgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhcjpub3QoLnRvcC1uYXYtY29sbGFwc2UpIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5uYXZiYXI6bm90KC50b3AtbmF2LWNvbGxhcHNlKSB7XG4gICAgYmFja2dyb3VuZDogIzQyNGY5NSAhaW1wb3J0YW50O1xuICB9XG59XG4uYnRuLXdoaXRlIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbmg2IHtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbn1cblxuLnJnYmEtZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg0MiwgMjcsIDE2MSwgMC43KSwgcmdiYSgyOSwgMjEwLCAxNzcsIDAuNykgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDQyLCAyNywgMTYxLCAwLjcpLCByZ2JhKDI5LCAyMTAsIDE3NywgMC43KSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDQ1ZGVnLCBmcm9tKHJnYmEoNDIsIDI3LCAxNjEsIDAuNykpLCB0byhyZ2JhKDI5LCAyMTAsIDE3NywgMC43KSkpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNDIsIDI3LCAxNjEsIDAuNyksIHJnYmEoMjksIDIxMCwgMTc3LCAwLjcpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gNDVkZWcsIHJnYmEoNDIsIDI3LCAxNjEsIDAuNyksIHJnYmEoMjksIDIxMCwgMTc3LCAwLjcpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg0MiwgMjcsIDE2MSwgMC43KSwgcmdiYSgyOSwgMjEwLCAxNzcsIDAuNykgMTAwJSk7XG59XG5cbi52aWV3Lm1hc2sge1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/movie-detail/movie-detail.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/movie-detail/movie-detail.component.ts ***!
          \********************************************************/
        /*! exports provided: MovieDetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailComponent", function () { return MovieDetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _tmdb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tmdb.service */ "./src/app/tmdb.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var MovieDetailComponent = /** @class */ (function () {
                function MovieDetailComponent(route, tmdbService, location) {
                    this.route = route;
                    this.tmdbService = tmdbService;
                    this.location = location;
                    this.isMovie = true;
                    this.movieID = this.route.snapshot.paramMap.get('id');
                    this.grid = this.route.snapshot.paramMap.get('grid');
                }
                MovieDetailComponent.prototype.ngOnInit = function () {
                    if (this.grid === 'tv') {
                        this.getTV();
                        this.isMovie = false;
                    }
                    else {
                        this.getMovie();
                        this.isMovie = true;
                        console.log(this.movie);
                    }
                };
                MovieDetailComponent.prototype.getMovie = function () {
                    var _this = this;
                    /* tslint:disable:no-string-literal */
                    this.tmdbService.getMovieById(this.movieID)
                        .subscribe(function (response) {
                        _this.movie = response;
                    });
                };
                MovieDetailComponent.prototype.getTV = function () {
                    var _this = this;
                    /* tslint:disable:no-string-literal */
                    this.tmdbService.getTVById(this.movieID)
                        .subscribe(function (response) {
                        _this.movie = response;
                    });
                };
                return MovieDetailComponent;
            }());
            MovieDetailComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _tmdb_service__WEBPACK_IMPORTED_MODULE_3__["TmdbService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
            ]; };
            MovieDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-movie-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie-detail/movie-detail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-detail.component.scss */ "./src/app/movie-detail/movie-detail.component.scss")).default]
                })
            ], MovieDetailComponent);
            /***/ 
        }),
        /***/ "./src/app/movie-grid/movie-grid.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/movie-grid/movie-grid.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllLWdyaWQvbW92aWUtZ3JpZC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/movie-grid/movie-grid.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/movie-grid/movie-grid.component.ts ***!
          \****************************************************/
        /*! exports provided: MovieGridComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieGridComponent", function () { return MovieGridComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tmdb.service */ "./src/app/tmdb.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var MovieGridComponent = /** @class */ (function () {
                function MovieGridComponent(tmdbService, route) {
                    this.tmdbService = tmdbService;
                    this.route = route;
                    this.isMovie = true;
                    this.moviesList = [];
                    this.gridPath = this.route.snapshot.paramMap.get('grid');
                    this.companyId = this.route.snapshot.paramMap.get('id');
                }
                MovieGridComponent.prototype.ngOnInit = function () {
                    switch (this.gridPath) {
                        case 'studio':
                            this.getStudioMovieList();
                            this.isMovie = true;
                            console.log(this.isMovie);
                            break;
                        case 'search':
                            this.getMovieListByQuery();
                            this.isMovie = true;
                            break;
                        case 'network':
                            this.getTVCompany();
                            this.isMovie = false;
                            break;
                        case 'movie':
                            this.getDetails();
                            this.isMovie = true;
                            break;
                        case 'tv':
                            this.getDetails();
                            this.isMovie = false;
                            break;
                        default:
                            console.log('URL did not specify search/studio');
                    }
                };
                MovieGridComponent.prototype.getTVCompany = function () {
                    var _this = this;
                    /* tslint:disable:no-string-literal */
                    this.tmdbService.getListByUrl('https://api.themoviedb.org/3/discover/tv?page=1&with_networks=' + this.companyId + '&api_key=')
                        .subscribe(function (response) {
                        _this.moviesList = response['results'];
                    });
                };
                MovieGridComponent.prototype.getStudioMovieList = function () {
                    var _this = this;
                    this.tmdbService.getListByUrl('https://api.themoviedb.org/3' + '/discover/movie?with_companies=' + this.companyId + '&page=1&include' +
                        '_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=')
                        .subscribe(function (response) {
                        _this.moviesList = response['results'];
                    });
                };
                MovieGridComponent.prototype.getDetails = function () {
                    var _this = this;
                    this.tmdbService.getListByUrl('https://api.themoviedb.org/3/' + this.gridPath + '/' + this.companyId + '?api_key=')
                        .subscribe(function (response) {
                        _this.moviesList = response['results'];
                    });
                };
                MovieGridComponent.prototype.getMovieListByQuery = function () {
                    var _this = this;
                    this.tmdbService.getMovieListByName(this.companyId)
                        .subscribe(function (response) {
                        _this.moviesList = response['results'];
                    });
                };
                return MovieGridComponent;
            }());
            MovieGridComponent.ctorParameters = function () { return [
                { type: _tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            MovieGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-movie-grid',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movie-grid/movie-grid.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-grid.component.scss */ "./src/app/movie-grid/movie-grid.component.scss")).default]
                })
            ], MovieGridComponent);
            /***/ 
        }),
        /***/ "./src/app/navigation/navigation.component.scss": 
        /*!******************************************************!*\
          !*** ./src/app/navigation/navigation.component.scss ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".movie-switch {\n  padding-right: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9DOlxcVXNlcnNcXG4wMzQyOTc3XFxEb2N1bWVudHNcXEdpdEh1YlxcUGl4YXItRHJlYW13b3Jrcy1BcHAvc3JjXFxhcHBcXG5hdmlnYXRpb25cXG5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW92aWUtc3dpdGNoIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xyXG59XHJcbiIsIi5tb3ZpZS1zd2l0Y2gge1xuICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/navigation/navigation.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/navigation/navigation.component.ts ***!
          \****************************************************/
        /*! exports provided: NavigationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () { return NavigationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var NavigationComponent = /** @class */ (function () {
                function NavigationComponent(location, route) {
                    this.location = location;
                    this.route = route;
                    this.url = this.location.path();
                    this.isMovie = true;
                    this.gridPath = this.route.snapshot.paramMap.get('grid');
                }
                NavigationComponent.prototype.ngOnInit = function () {
                    if (this.gridPath === 'network') {
                        this.isMovie = false;
                        console.log(this.isMovie);
                    }
                    else {
                        this.isMovie = true;
                        console.log(this.isMovie);
                        console.log(this.url);
                    }
                };
                return NavigationComponent;
            }());
            NavigationComponent.ctorParameters = function () { return [
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
            ]; };
            NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navigation',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")).default]
                })
            ], NavigationComponent);
            /***/ 
        }),
        /***/ "./src/app/search/search.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/search/search.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/search/search.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/search/search.component.ts ***!
          \********************************************/
        /*! exports provided: SearchComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function () { return SearchComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tmdb.service */ "./src/app/tmdb.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var SearchComponent = /** @class */ (function () {
                function SearchComponent(tmdb, route, router) {
                    this.tmdb = tmdb;
                    this.route = route;
                    this.router = router;
                    this.movies = [];
                }
                SearchComponent.prototype.ngOnInit = function () {
                };
                SearchComponent.prototype.getMovieListByName = function (movieName) {
                    var _this = this;
                    /* tslint:disable:no-string-literal */
                    this.tmdb.getMovieListByName(movieName).subscribe(function (response) { return _this.movies = response['results']; });
                };
                SearchComponent.prototype.submitForm = function (query) {
                    console.log('submit');
                    this.router.navigate(['/search/' + query]);
                };
                return SearchComponent;
            }());
            SearchComponent.ctorParameters = function () { return [
                { type: _tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-search',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")).default]
                })
            ], SearchComponent);
            /***/ 
        }),
        /***/ "./src/app/similar/similar.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/similar/similar.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".focus-card:hover {\n  background: #e1e1e1;\n  border: 5px solid #d0d0d0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2ltaWxhci9DOlxcVXNlcnNcXG4wMzQyOTc3XFxEb2N1bWVudHNcXEdpdEh1YlxcUGl4YXItRHJlYW13b3Jrcy1BcHAvc3JjXFxhcHBcXHNpbWlsYXJcXHNpbWlsYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpbWlsYXIvc2ltaWxhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NpbWlsYXIvc2ltaWxhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb2N1cy1jYXJkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTFlMWUxO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkICNkMGQwZDA7XHJcbn1cclxuIiwiLmZvY3VzLWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZTFlMWUxO1xuICBib3JkZXI6IDVweCBzb2xpZCAjZDBkMGQwO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/similar/similar.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/similar/similar.component.ts ***!
          \**********************************************/
        /*! exports provided: SimilarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarComponent", function () { return SimilarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tmdb.service */ "./src/app/tmdb.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var SimilarComponent = /** @class */ (function () {
                function SimilarComponent(tmdb, route) {
                    this.tmdb = tmdb;
                    this.route = route;
                    this.isMovie = true;
                    this.moviesList = [];
                    this.movieId = this.route.snapshot.paramMap.get('id');
                    this.grid = this.route.snapshot.paramMap.get('grid');
                }
                SimilarComponent.prototype.ngOnInit = function () {
                    if (this.grid === 'tv') {
                        this.getSimilarTV();
                        this.isMovie = false;
                    }
                    else {
                        this.getSimilarById();
                        this.isMovie = true;
                    }
                };
                SimilarComponent.prototype.getSimilarById = function () {
                    var _this = this;
                    /* tslint:disable:no-string-literal */
                    this.tmdb.getSimilarById(this.movieId).subscribe(function (response) { return _this.moviesList = response['results']; });
                };
                SimilarComponent.prototype.getSimilarTV = function () {
                    var _this = this;
                    /* tslint:disable:no-string-literal */
                    this.tmdb.getSimilarTV(this.movieId).subscribe(function (response) { return _this.moviesList = response['results']; });
                };
                return SimilarComponent;
            }());
            SimilarComponent.ctorParameters = function () { return [
                { type: _tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            SimilarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-similar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./similar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/similar/similar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./similar.component.scss */ "./src/app/similar/similar.component.scss")).default]
                })
            ], SimilarComponent);
            /***/ 
        }),
        /***/ "./src/app/stared-in/stared-in.component.scss": 
        /*!****************************************************!*\
          !*** ./src/app/stared-in/stared-in.component.scss ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJlZC1pbi9zdGFyZWQtaW4uY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/stared-in/stared-in.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/stared-in/stared-in.component.ts ***!
          \**************************************************/
        /*! exports provided: StaredInComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaredInComponent", function () { return StaredInComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tmdb.service */ "./src/app/tmdb.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var StaredInComponent = /** @class */ (function () {
                function StaredInComponent(tmdb, route) {
                    this.tmdb = tmdb;
                    this.route = route;
                    this.cast = [];
                    this.backdrops = [];
                    this.personId = this.route.snapshot.paramMap.get('id');
                }
                StaredInComponent.prototype.ngOnInit = function () {
                    this.getStaredIn();
                };
                StaredInComponent.prototype.getStaredIn = function () {
                    var _this = this;
                    /* tslint:disable:no-string-literal */
                    this.tmdb.getStaredIn(this.personId).subscribe(function (response) { return _this.cast = response['cast']; });
                };
                return StaredInComponent;
            }());
            StaredInComponent.ctorParameters = function () { return [
                { type: _tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            StaredInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-stared-in',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stared-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stared-in/stared-in.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stared-in.component.scss */ "./src/app/stared-in/stared-in.component.scss")).default]
                })
            ], StaredInComponent);
            /***/ 
        }),
        /***/ "./src/app/studio/studio.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/studio/studio.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".centered {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #fff;\n  font-family: brandon-grotesque, sans-serif;\n  font-weight: 900;\n  font-style: normal;\n  font-size: 51px;\n  letter-spacing: 0.29em;\n  line-height: 1em;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGlvL0M6XFxVc2Vyc1xcbjAzNDI5NzdcXERvY3VtZW50c1xcR2l0SHViXFxQaXhhci1EcmVhbXdvcmtzLUFwcC9zcmNcXGFwcFxcc3R1ZGlvXFxzdHVkaW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0dWRpby9zdHVkaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGlvL3N0dWRpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJlZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LWZhbWlseTogYnJhbmRvbi1ncm90ZXNxdWUsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiA1MXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMjllbTtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuIiwiLmNlbnRlcmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBicmFuZG9uLWdyb3Rlc3F1ZSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDUxcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI5ZW07XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/studio/studio.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/studio/studio.component.ts ***!
          \********************************************/
        /*! exports provided: StudioComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudioComponent", function () { return StudioComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jarallax */ "./node_modules/jarallax/index.js");
            /* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(jarallax__WEBPACK_IMPORTED_MODULE_2__);
            var StudioComponent = /** @class */ (function () {
                function StudioComponent() {
                }
                StudioComponent.prototype.ngAfterViewInit = function () {
                    jarallax(document.querySelectorAll('.jarallax'), {
                        speed: 0.2
                    });
                };
                StudioComponent.prototype.ngOnInit = function () {
                };
                return StudioComponent;
            }());
            StudioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-studio',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./studio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/studio/studio.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./studio.component.scss */ "./src/app/studio/studio.component.scss")).default]
                })
            ], StudioComponent);
            /***/ 
        }),
        /***/ "./src/app/tmdb.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/tmdb.service.ts ***!
          \*********************************/
        /*! exports provided: TmdbService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmdbService", function () { return TmdbService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var TmdbService = /** @class */ (function () {
                function TmdbService(http) {
                    this.http = http;
                    this.tmdbURL = 'https://api.themoviedb.org/'; // URL to web api
                    this.tmdbDiscover = '';
                    this.apiKEY = '2450bb1a282abe67567830ede1023579';
                }
                TmdbService.prototype.getList = function () {
                    return this.http.get(this.tmdbURL + '3/discover/movie?with_companies=3&page=1&include' +
                        '_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=' + this.apiKEY);
                };
                TmdbService.prototype.getListByUrl = function (url) {
                    return this.http.get(url + this.apiKEY);
                };
                TmdbService.prototype.getMovieListByName = function (movieName) {
                    return this.http.get(this.tmdbURL + '3/search/movie?api_key=' + this.apiKEY + '&query=' + movieName);
                };
                TmdbService.prototype.getMovieById = function (id) {
                    return this.http.get(this.tmdbURL + '3/movie/' + id + '?api_key=' + this.apiKEY + '&language=en-US');
                };
                TmdbService.prototype.getVideosById = function (id) {
                    return this.http.get(this.tmdbURL + '3/movie/' + id + '/videos?api_key=' + this.apiKEY + '&language=en-US');
                };
                TmdbService.prototype.getImagesById = function (id) {
                    return this.http.get(this.tmdbURL + '3/movie/' + id + '/images?api_key=' + this.apiKEY);
                };
                TmdbService.prototype.getCreditsById = function (id) {
                    return this.http.get(this.tmdbURL + '3/movie/' + id + '/credits?api_key=' + this.apiKEY);
                };
                TmdbService.prototype.getSimilarById = function (id) {
                    return this.http.get(this.tmdbURL + '3/movie/' + id + '/similar?api_key=' + this.apiKEY);
                };
                TmdbService.prototype.getBioInfo = function (id) {
                    return this.http.get(this.tmdbURL + '3/person/' + id + '?api_key=' + this.apiKEY);
                };
                TmdbService.prototype.getStaredIn = function (id) {
                    return this.http.get(this.tmdbURL + '3/person/' + id + '/combined_credits?api_key=' + this.apiKEY);
                };
                TmdbService.prototype.getTVShow = function (id) {
                    return this.http.get(this.tmdbURL + '3/tv/' + id + '/similar?api_key=' + this.apiKEY);
                };
                TmdbService.prototype.getSimilarTV = function (id) {
                    return this.http.get(this.tmdbURL + '3/tv/' + id + '/similar?api_key=' + this.apiKEY);
                };
                TmdbService.prototype.getTVById = function (id) {
                    return this.http.get(this.tmdbURL + '3/tv/' + id + '?api_key=' + this.apiKEY);
                };
                TmdbService.prototype.getTVCreditsById = function (id) {
                    return this.http.get(this.tmdbURL + '3/tv/' + id + '/credits?api_key=' + this.apiKEY);
                };
                TmdbService.prototype.getTVVideosById = function (id) {
                    return this.http.get(this.tmdbURL + '3/tv/' + id + '/videos?api_key=' + this.apiKEY + '&language=en-US');
                };
                return TmdbService;
            }());
            TmdbService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            TmdbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TmdbService);
            /***/ 
        }),
        /***/ "./src/app/trailer/trailer.component.scss": 
        /*!************************************************!*\
          !*** ./src/app/trailer/trailer.component.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWlsZXIvdHJhaWxlci5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/trailer/trailer.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/trailer/trailer.component.ts ***!
          \**********************************************/
        /*! exports provided: TrailerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailerComponent", function () { return TrailerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tmdb.service */ "./src/app/tmdb.service.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var TrailerComponent = /** @class */ (function () {
                function TrailerComponent(tmdb, sanitizer, route) {
                    this.tmdb = tmdb;
                    this.sanitizer = sanitizer;
                    this.route = route;
                    this.movieId = this.route.snapshot.paramMap.get('id');
                    this.grid = this.route.snapshot.paramMap.get('grid');
                }
                TrailerComponent.prototype.ngOnInit = function () {
                    if (this.grid === 'tv') {
                        this.getTVVideoById();
                    }
                    else {
                        this.getVideoById();
                    }
                };
                TrailerComponent.prototype.getVideoById = function () {
                    var _this = this;
                    /* tslint:disable:no-string-literal */
                    this.tmdb.getVideosById(this.movieId).subscribe(function (jsonData) { _this.getTrailer(jsonData['results']); });
                };
                TrailerComponent.prototype.getTrailer = function (jsonData) {
                    for (var _i = 0, jsonData_1 = jsonData; _i < jsonData_1.length; _i++) {
                        var video = jsonData_1[_i];
                        if (video.type === 'Trailer' && video.site === 'YouTube') {
                            this.key = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video.key);
                            console.log(this.key);
                            break;
                        }
                    }
                };
                TrailerComponent.prototype.getTVVideoById = function () {
                    var _this = this;
                    /* tslint:disable:no-string-literal */
                    this.tmdb.getTVVideosById(this.movieId).subscribe(function (jsonData) { _this.getTVTrailer(jsonData['results']); });
                };
                TrailerComponent.prototype.getTVTrailer = function (jsonData) {
                    for (var _i = 0, jsonData_2 = jsonData; _i < jsonData_2.length; _i++) {
                        var video = jsonData_2[_i];
                        if (video.site === 'YouTube') {
                            this.key = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video.key);
                            console.log(this.key);
                            break;
                        }
                    }
                };
                return TrailerComponent;
            }());
            TrailerComponent.ctorParameters = function () { return [
                { type: _tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"] },
                { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
            ]; };
            TrailerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-trailer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trailer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trailer/trailer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trailer.component.scss */ "./src/app/trailer/trailer.component.scss")).default]
                })
            ], TrailerComponent);
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
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\n0342977\Documents\GitHub\Pixar-Dreamworks-App\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map