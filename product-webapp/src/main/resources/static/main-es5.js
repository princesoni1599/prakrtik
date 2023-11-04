(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/princesoni/git/prakritik/product-webapp/webapp/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0lyN":
    /*!*************************************************************!*\
      !*** ./src/app/components/seedslist/seedslist.component.ts ***!
      \*************************************************************/

    /*! exports provided: SeedslistComponent */

    /***/
    function lyN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SeedslistComponent", function () {
        return SeedslistComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_plantmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/plantmodel */
      "2wgd");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var src_app_services_notifier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/notifier.service */
      "8ZCa");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");

      var _c0 = ["stepper"];

      function SeedslistComponent_form_6_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Profile");
        }
      }

      function SeedslistComponent_form_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SeedslistComponent_form_6_ng_template_1_Template, 1, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Email Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Shop Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contact Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Quantity(.in No's)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Product Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Upload Product Images");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SeedslistComponent_form_6_Template_input_change_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onFileChanged($event.target.files);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Next ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.profileFormGroup);
        }
      }

      function SeedslistComponent_form_11_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Requirements");
        }
      }

      function SeedslistComponent_form_11_mat_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var age_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", age_r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", age_r12, " ");
        }
      }

      function SeedslistComponent_form_11_mat_option_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", day_r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", day_r13, " ");
        }
      }

      function SeedslistComponent_form_11_mat_option_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var part_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", part_r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", part_r14, " ");
        }
      }

      function SeedslistComponent_form_11_mat_option_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var size_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", size_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", size_r15, " ");
        }
      }

      function SeedslistComponent_form_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SeedslistComponent_form_11_ng_template_1_Template, 1, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Product Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-hint", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*Enter in Numbers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Product Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Product Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SeedslistComponent_form_11_mat_option_16_Template, 2, 2, "mat-option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Water Requirement for the Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "--Select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SeedslistComponent_form_11_mat_option_23_Template, 2, 2, "mat-option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sunlight Requirement for the Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-select", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "--Select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SeedslistComponent_form_11_mat_option_30_Template, 2, 2, "mat-option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Size of the Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-select", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, SeedslistComponent_form_11_mat_option_35_Template, 2, 2, "mat-option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.profileFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("align", "end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.ages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.days);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.parts);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.sizes);
        }
      }

      function SeedslistComponent_form_16_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "You are almost done....");
        }
      }

      function SeedslistComponent_form_16_mat_radio_button_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var result_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", result_r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", result_r18, " ");
        }
      }

      function SeedslistComponent_form_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SeedslistComponent_form_16_ng_template_1_Template, 1, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "State Whether the Product is toxic to pets, kids: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-radio-group", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SeedslistComponent_form_16_Template_mat_radio_group_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.toxicity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SeedslistComponent_form_16_mat_radio_button_5_Template, 2, 2, "mat-radio-button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description of the Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-hint", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Max 255 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.profileFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.toxicity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.results);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("align", "end");
        }
      }

      var SeedslistComponent = /*#__PURE__*/function () {
        function SeedslistComponent(fb, service, notifierService, router) {
          _classCallCheck(this, SeedslistComponent);

          this.fb = fb;
          this.service = service;
          this.notifierService = notifierService;
          this.router = router;
          this.productObject = new src_app_plantmodel__WEBPACK_IMPORTED_MODULE_2__["PlantModel"]();
          this.files = [];
          this.days = ['Once a week', 'Twice a week', 'Thrice a week', 'Everyday'];
          this.ages = ['null'];
          this.parts = ['Full sun - Plants need at least 6 hours of direct sun daily', 'Part sun – Plants thrive with between 3 and 6 hours of direct sun per day', 'Part shade – Plants require between 3 and 6 hours of sun per day, but need protection from intense mid-day sun', 'Full shade – Plants require less than 3 hours of direct sun per day'];
          this.sizes = ['NA'];
          this.results = ['Yes', 'No'];
          this.urllink = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnbY-fLcMMqyKqZ8kBk9vTtboqfE_mvHAzbyoWvi39-Bz5P0LlBU7_FtB6iFCzGWM6rEo&usqp=CAU';
        }

        _createClass(SeedslistComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.profileFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              ownerEmailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](window.localStorage.getItem('loginEmail'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              shopName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              ownerContactNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
              productsAvailable: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
              productAge: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              sizeOfProduct: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              waterRequirement: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              sunlightRequirement: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              toxicity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
            console.log(this.profileFormGroup.value);
          }
        }, {
          key: "OnSubmit",
          value: function OnSubmit() {
            var _this = this;

            console.log('formValue', this.profileFormGroup.value);
            this.productObject.productName = this.profileFormGroup.value.productName;
            this.productObject.shopName = this.profileFormGroup.value.shopName;
            this.productObject.productsAvailable = this.profileFormGroup.value.productsAvailable;
            this.productObject.ownerContactNo = this.profileFormGroup.value.ownerContactNo;
            this.productObject.productPrice = this.profileFormGroup.value.productPrice;
            this.productObject.ownerEmailId = this.profileFormGroup.value.ownerEmailId;
            this.productObject.productAddress = this.profileFormGroup.value.productAddress;
            this.productObject.productAge = this.profileFormGroup.value.productAge;
            this.productObject.sizeOfProduct = this.profileFormGroup.value.sizeOfProduct;
            this.productObject.waterRequirement = this.profileFormGroup.value.waterRequirement;
            this.productObject.sunlightRequirement = this.profileFormGroup.value.sunlightRequirement;
            this.productObject.toxicity = this.profileFormGroup.value.toxicity;
            this.productObject.description = this.profileFormGroup.value.description;
            this.productObject.productId = this.profileFormGroup.value.productId;
            this.service.savePlantModel(this.productObject, this.files[0]).subscribe(function (result) {
              _this.notifierService.showNotification('Product Added Succesfully', 'OK');

              _this.profileFormGroup.reset();

              _this.router.navigate(['/sellerhomepage/home']);
            });
          } // image input

        }, {
          key: "onFileChanged",
          value: function onFileChanged(files) {
            this.prepareFilesList(files);
          }
        }, {
          key: "prepareFilesList",
          value: function prepareFilesList(files) {
            var _iterator = _createForOfIteratorHelper(files),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                item.progress = 0;
                this.files.push(item);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.uploadFilesSimulator(0);
          }
        }, {
          key: "uploadFilesSimulator",
          value: function uploadFilesSimulator(index) {
            var _this2 = this;

            setTimeout(function () {
              if (index === _this2.files.length) {
                return;
              } else {
                var progressInterval = setInterval(function () {
                  if (_this2.files[index].progress === 100) {
                    clearInterval(progressInterval);

                    _this2.uploadFilesSimulator(index + 1);
                  } else {
                    _this2.files[index].progress += 5;
                  }
                }, 200);
              }
            }, 1000);
          }
        }, {
          key: "formatBytes",
          value: function formatBytes(bytes, decimals) {
            if (bytes === 0) {
              return '0 Bytes';
            }

            var k = 1024;
            var dm = decimals <= 0 ? 0 : decimals || 2;
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
          }
        }]);

        return SeedslistComponent;
      }();

      SeedslistComponent.ɵfac = function SeedslistComponent_Factory(t) {
        return new (t || SeedslistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notifier_service__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      SeedslistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SeedslistComponent,
        selectors: [["app-seedslist"]],
        viewQuery: function SeedslistComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
          }
        },
        decls: 22,
        vars: 6,
        consts: [[1, "container-fluid"], ["completed", "false", 3, "stepControl"], [1, "profile"], [3, "formGroup", 4, "ngIf"], ["mat-raised-button", "", "id", "back", "color", "primary", "matStepperPrevious", "", 2, "margin-left", "5px"], ["mat-raised-button", "", "color", "primary", 1, "submit", 2, "margin-left", "530px", 3, "click"], [3, "formGroup"], ["matStepLabel", ""], ["appearance", "outline"], ["matInput", "", "formControlName", "ownerEmailId", "required", "", 1, "plantId", "w-100"], ["matInput", "", "formControlName", "shopName", "required", "", 1, "productId", "w-100"], ["matInput", "", "formControlName", "ownerContactNo", "required", "", 1, "productId", "w-100"], ["matInput", "", "formControlName", "productsAvailable", "required", "", 1, "plantId", "w-100"], ["matInput", "", "formControlName", "productName", "required", ""], [1, "img_container"], ["for", "choose-file", 2, "color", "#089975"], ["type", "file", "id", "choose-file", "size", "80", "multiple", "", "formControlName", "productImage", "required", "", 3, "change"], ["fileInput", ""], ["mat-raised-button", "", "color", "primary", "matStepperNext", "", 2, "margin-left", "600px"], ["matInput", "", "type", "number", "formControlName", "productPrice", "required", ""], [3, "align"], ["appearance", "outline", 2, "margin-top", "7px"], ["matInput", "", "formControlName", "productAddress", "required", ""], ["for", "productAge"], ["name", "productAge", "id", "productAge", "formControlName", "productAge"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "waterRequirement"], ["name", "waterRequirement", "id", "waterRequirement", "formControlName", "waterRequirement", "required", ""], ["for", "sunlightRequirement"], ["name", "sunlightRequirement", "id", "sunlightRequirement", "formControlName", "sunlightRequirement", "required", ""], ["for", "sizeOfPlant"], ["name", "sizeOfProduct", "id", "sizeOfProduct", "formControlName", "sizeOfProduct"], ["mat-raised-button", "", "color", "primary", "id", "previous", "matStepperPrevious", "", 2, "margin-left", "5px"], ["mat-raised-button", "", "id", "next", "color", "primary", "matStepperNext", "", 2, "margin-left", "540px"], [3, "value"], ["id", "toxicity"], ["aria-labelledby", "toxicity", "formControlName", "toxicity", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["class", "example-radio-button block", 3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "rows", "10", "col", "50", "formControlName", "description", "required", ""], [1, "example-radio-button", "block", 3, "value"]],
        template: function SeedslistComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-horizontal-stepper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-step", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profile of the seeds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SeedslistComponent_form_6_Template, 34, 1, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-step", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Requirements of seeds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SeedslistComponent_form_11_Template, 41, 6, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-step", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About Seeds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SeedslistComponent_form_16_Template, 12, 4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SeedslistComponent_Template_button_click_20_listener() {
              return ctx.OnSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileFormGroup);
          }
        },
        directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStep"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperPrevious"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperNext"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatHint"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioButton"]],
        styles: ["mat-card[_ngcontent-%COMP%]{\n    width:800px;\n    height:800px;\n    margin-left: 40px;\n    margin-right:50px;\n    border-radius: 20px;\n    margin-top:15px;\n    display:flex;\n    justify-content: flex-start;\n  }\n  .example-radio-button[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .profile[_ngcontent-%COMP%]{\n    display:flex;\n    border-radius:20px ;\n    flex-direction: column;\n    width:700px;\n  \n    height:650px;\n    justify-content: flex-start;\n  \n  }\n  mat-form-field[_ngcontent-%COMP%]{\n    width:100%;\n    margin-top: 10px;\n  }\n  .Image[_ngcontent-%COMP%]{\n    background-color: rgb(255,255,255);\n    border: solid 4px black;\n    border-radius: 10px;\n    color:black;\n    padding:10px 20px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size:16px;\n    font-weight:bold;\n    margin-top:6px;\n    margin-bottom: 6px;\n    cursor:pointer;\n    width:150px;\n    height:45px\n  }\n  .img_container[_ngcontent-%COMP%]{\n  \n    display: flex;\n    flex-direction: column;\n  }\n  mat-card-title[_ngcontent-%COMP%]{\n    text-align: center;\n  }\n  .block[_ngcontent-%COMP%]{\n    display: block;\n  }\n  .form-control[_ngcontent-%COMP%]{\n    margin-top:5px;\n  \n  }\n  label[_ngcontent-%COMP%]{\n    margin-top:20px;\n  }\n  textarea[_ngcontent-%COMP%]{\n    margin-top:25px;\n  }\n  #Toxicity[_ngcontent-%COMP%]{\n    font-weight: bold;\n  }\n  mat-card-title[_ngcontent-%COMP%]{\n    background-color: #f6d8ac;\n    height:50px;\n    padding: 15px;\n  }\n  .container-fluid[_ngcontent-%COMP%]{\n\n   display: flex;\n   justify-content: center;\n   \n  }\n  .submit[_ngcontent-%COMP%]{\n    margin-left:450px;\n  }\n  mat-horizontal-stepper[_ngcontent-%COMP%]{\n \n    margin-top: 70px;\n    margin-bottom: 10px;\n    background-color: rgb(241, 235, 235);\n  \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlZWRzbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixXQUFXOztJQUVYLFlBQVk7SUFDWiwyQkFBMkI7O0VBRTdCO0VBRUE7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYO0VBQ0Y7RUFDQTs7SUFFRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCO0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFFQTtJQUNFLGNBQWM7O0VBRWhCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBSUE7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFHQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsYUFBYTtFQUNmO0VBR0E7O0dBRUMsYUFBYTtHQUNiLHVCQUF1Qjs7RUFFeEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBOztJQUVFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsb0NBQW9DOztFQUV0QyIsImZpbGUiOiJzZWVkc2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xuICAgIHdpZHRoOjgwMHB4O1xuICAgIGhlaWdodDo4MDBweDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6NTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6MTVweDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cbiAgLnByb2ZpbGV7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6MjBweCA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDo3MDBweDtcbiAgXG4gICAgaGVpZ2h0OjY1MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgXG4gIH1cbiAgXG4gIG1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAuSW1hZ2V7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwyNTUsMjU1KTtcbiAgICBib3JkZXI6IHNvbGlkIDRweCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIHBhZGRpbmc6MTBweCAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgbWFyZ2luLXRvcDo2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIHdpZHRoOjE1MHB4O1xuICAgIGhlaWdodDo0NXB4XG4gIH1cbiAgLmltZ19jb250YWluZXJ7XG4gIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgbWF0LWNhcmQtdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5ibG9ja3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLmZvcm0tY29udHJvbHtcbiAgICBtYXJnaW4tdG9wOjVweDtcbiAgXG4gIH1cbiAgbGFiZWx7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICB9XG4gIFxuICBcbiAgXG4gIHRleHRhcmVhe1xuICAgIG1hcmdpbi10b3A6MjVweDtcbiAgfVxuICAjVG94aWNpdHl7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIFxuICBtYXQtY2FyZC10aXRsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZkOGFjO1xuICAgIGhlaWdodDo1MHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgXG4gIFxuICAuY29udGFpbmVyLWZsdWlke1xuXG4gICBkaXNwbGF5OiBmbGV4O1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBcbiAgfVxuICAuc3VibWl0e1xuICAgIG1hcmdpbi1sZWZ0OjQ1MHB4O1xuICB9XG4gIG1hdC1ob3Jpem9udGFsLXN0ZXBwZXJ7XG4gXG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDIzNSwgMjM1KTtcbiAgXG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeedslistComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-seedslist',
            templateUrl: './seedslist.component.html',
            styleUrls: ['./seedslist.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: src_app_services_notifier_service__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, {
          stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stepper']
          }]
        });
      })();
      /***/

    },

    /***/
    "2wgd":
    /*!*******************************!*\
      !*** ./src/app/plantmodel.ts ***!
      \*******************************/

    /*! exports provided: PlantModel */

    /***/
    function wgd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlantModel", function () {
        return PlantModel;
      });

      var PlantModel = function PlantModel() {
        _classCallCheck(this, PlantModel);
      };
      /***/

    },

    /***/
    "33fC":
    /*!******************************************************!*\
      !*** ./src/app/models/register/user-registration.ts ***!
      \******************************************************/

    /*! exports provided: UserRegistration */

    /***/
    function fC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRegistration", function () {
        return UserRegistration;
      });

      var UserRegistration = function UserRegistration() {
        _classCallCheck(this, UserRegistration);

        this.email = "";
        this.password = "";
        this.userRole = "";
      };
      /***/

    },

    /***/
    "4Xht":
    /*!*********************************************************************!*\
      !*** ./src/app/components/register-user/register-user.component.ts ***!
      \*********************************************************************/

    /*! exports provided: RegisterUserComponent */

    /***/
    function Xht(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function () {
        return RegisterUserComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _models_register_user_registration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../models/register/user-registration */
      "33fC");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _models_login_user_dao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../models/login/user-dao */
      "cKIH");
      /* harmony import */


      var _services_register_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/register/register.service */
      "mzw/");
      /* harmony import */


      var _services_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/login/login.service */
      "XXEo");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_services_notifier_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/notifier.service */
      "8ZCa");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function RegisterUserComponent_mat_error_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterUserComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterUserComponent_mat_error_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be of length 6 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterUserComponent_mat_error_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "userRole is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterUserComponent_mat_error_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterUserComponent_mat_error_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterUserComponent_mat_error_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be of length 6 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterUserComponent_mat_error_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "userRole is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var RegisterUserComponent = /*#__PURE__*/function () {
        function RegisterUserComponent(registerService, formBuilder, loginService, router, snackBar, notifier) {
          _classCallCheck(this, RegisterUserComponent);

          this.registerService = registerService;
          this.formBuilder = formBuilder;
          this.loginService = loginService;
          this.router = router;
          this.snackBar = snackBar;
          this.notifier = notifier;
          this.user = new _models_register_user_registration__WEBPACK_IMPORTED_MODULE_1__["UserRegistration"]();
          this.errorMessage1 = "";
          this.submitted = false;
          this.roles = ['Buyer', 'Seller'];
          this.loginObj = new _models_login_user_dao__WEBPACK_IMPORTED_MODULE_3__["UserDao"]();
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
            userRole: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("")
          });
        }

        _createClass(RegisterUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "SaveData",
          value: function SaveData() {
            var _this3 = this;

            console.log("FORMDATA", this.form.value);
            this.loginObj.email = this.form.value.email;
            this.loginObj.password = this.form.value.password;
            this.loginObj.userRole = this.form.value.userRole;
            this.loginService.loginUser(this.loginObj).subscribe(function (data) {
              console.log("validated", data);
              localStorage.setItem("loginEmail", _this3.loginObj.email);
              localStorage.setItem("userRole", _this3.loginObj.userRole);

              if (_this3.form.value.userRole == 'buyer') {
                _this3.router.navigate(['/navbar/customerhomepage']);
              } else if (_this3.form.value.userRole == 'seller') {
                _this3.router.navigate(['/sellerhomepage/home']);
              }

              _this3.form.reset();
            }, function (error) {
              _this3.notifier.showNotification("Incorrect Email/Password", "Dismiss"); // console.log(error);


              _this3.errorMessage = error.error;
            });
          }
        }, {
          key: "SaveData1",
          value: function SaveData1() {
            var _this4 = this;

            this.registerService.registerUserMySQL(this.user).subscribe(function (res) {
              console.log(_this4.user);
            }); //console.log(this.favoriteSeason);

            if (this.user.email == "" || this.user.password == "" || this.userRole == "") {
              // this.snackBar.open( "Fields cannot be empty!","Dissmiss");
              this.notifier.showNotification("Fields cannot be empty!", "Dissmiss");
            } else {
              this.registerService.registerUser(this.user).subscribe(function (data) {
                // this.snackBar.open("Successfully done !!","success");
                _this4.notifier.showNotification("Successfully done !!", "success");
              }, function (error) {
                return (// this.snackBar.open("User Already Exist!","error")
                  _this4.notifier.showNotification("User Already Exist!", "error")
                );
              });
            }
          }
        }]);

        return RegisterUserComponent;
      }();

      RegisterUserComponent.ɵfac = function RegisterUserComponent_Factory(t) {
        return new (t || RegisterUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_register_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notifier_service__WEBPACK_IMPORTED_MODULE_8__["NotifierService"]));
      };

      RegisterUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterUserComponent,
        selectors: [["app-register-user"]],
        decls: 52,
        vars: 14,
        consts: [[1, "login-page"], [1, "mat-elevation-z12"], [2, "text-align", "center"], ["mat-stretch-tabs", "", 1, "example-stretched-tabs"], ["label", "Sign In"], ["action", "", 3, "formGroup"], ["userForm1", "ngForm"], ["email", "", "matInput", "", "placeholder", "Email", "required", "", "name", "email", "formControlName", "email"], [4, "ngIf"], ["matSuffix", ""], ["matInput", "", "placeholder", "Password", "type", "password", "required", "", "minlength", "6", "name", "password", "formControlName", "password"], ["matInput", "", "placeholder", "Enter User Role (Buyer or Seller)", "required", "", "id", "userRole", "name", "userRole", "formControlName", "userRole"], ["mat-raised-button", "", "color", "primary", 1, "login-button", 3, "disabled", "click"], ["mat-raised-button", "", 1, "login-button"], ["label", "Sign Up"], ["action", ""], ["userForm", "ngForm"], ["email", "", "matInput", "", "placeholder", "Email", "required", "", "id", "email", "name", "email", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["matInput", "", "placeholder", "Password", "type", "password", "required", "", "minlength", "6", "id", "password", "name", "password", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["matInput", "", "placeholder", "Enter User Role (Buyer or Seller)", "required", "", "id", "userRole", "name", "userRole", 3, "ngModel", "ngModelChange"], ["userRole", "ngModel"]],
        template: function RegisterUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SignIn/SignUp");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab-group", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RegisterUserComponent_mat_error_11_Template, 2, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegisterUserComponent_mat_error_16_Template, 2, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RegisterUserComponent_mat_error_17_Template, 2, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "lock");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RegisterUserComponent_mat_error_22_Template, 2, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-checkbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Remember Me!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterUserComponent_Template_button_click_25_listener() {
              return ctx.SaveData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Sign In ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Login with Google ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-tab", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "form", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterUserComponent_Template_input_ngModelChange_34_listener($event) {
              return ctx.user.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RegisterUserComponent_mat_error_36_Template, 2, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 19, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterUserComponent_Template_input_ngModelChange_40_listener($event) {
              return ctx.user.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, RegisterUserComponent_mat_error_42_Template, 2, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, RegisterUserComponent_mat_error_43_Template, 2, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "lock");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 21, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterUserComponent_Template_input_ngModelChange_47_listener($event) {
              return ctx.user.userRole = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, RegisterUserComponent_mat_error_49_Template, 2, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterUserComponent_Template_button_click_50_listener() {
              return ctx.SaveData1();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Sign Up ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors && _r8.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors && _r8.errors.minlength);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r6.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors && _r8.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r8.errors && _r8.errors.minlength);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.userRole);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r11.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r5.invalid);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckbox"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]],
        styles: [".login-page[_ngcontent-%COMP%] {\n    top: 0;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    display: block;\n    background-image:url(https://static.vecteezy.com/system/resources/previews/007/360/354/non_2x/close-up-of-nature-view-green-leaf-on-blurred-greenery-background-under-sunlight-with-bokeh-and-copy-space-using-as-background-natural-plants-landscape-ecology-wallpaper-concept-free-photo.jpg); \n    background-repeat: no-repeat;\n     background-attachment: fixed;\n  background-size: cover;\n   \n    \n    overflow: hidden;\n  }\n  \n  mat-card[_ngcontent-%COMP%] {\n    width: 40%;\n    margin: 10% auto;\n    border-radius: 8px;\n  }\n  \n  mat-form-field[_ngcontent-%COMP%], mat-checkbox[_ngcontent-%COMP%], mat-radio-group[_ngcontent-%COMP%] {\n    width: 80%;\n    display: block;\n    margin: auto;\n  }\n  \n  mat-card-content[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  \n  .login-button[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    display: block;\n    width: 80%;\n    margin: 20px auto;\n  }\n  \n  .alert[_ngcontent-%COMP%]\n  {\n    margin-top:20px;\n    margin-left: 1000px;\n    background-color:rgb(214, 214, 235);\n    height: 4%;\n    width:20%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLE1BQU07SUFDTixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLCtSQUErUjtJQUMvUiw0QkFBNEI7S0FDM0IsNEJBQTRCO0VBQy9CLHNCQUFzQjs7O0lBR3BCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0UsVUFBVTtJQUNWLGNBQWM7SUFDZCxZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7O0VBQ0E7O0lBRUUsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQ0FBbUM7SUFDbkMsVUFBVTtJQUNWLFNBQVM7RUFDWCIsImZpbGUiOiJyZWdpc3Rlci11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tcGFnZSB7XG4gICAgdG9wOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChodHRwczovL3N0YXRpYy52ZWN0ZWV6eS5jb20vc3lzdGVtL3Jlc291cmNlcy9wcmV2aWV3cy8wMDcvMzYwLzM1NC9ub25fMngvY2xvc2UtdXAtb2YtbmF0dXJlLXZpZXctZ3JlZW4tbGVhZi1vbi1ibHVycmVkLWdyZWVuZXJ5LWJhY2tncm91bmQtdW5kZXItc3VubGlnaHQtd2l0aC1ib2tlaC1hbmQtY29weS1zcGFjZS11c2luZy1hcy1iYWNrZ3JvdW5kLW5hdHVyYWwtcGxhbnRzLWxhbmRzY2FwZS1lY29sb2d5LXdhbGxwYXBlci1jb25jZXB0LWZyZWUtcGhvdG8uanBnKTsgXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgIFxuICAgIFxuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIG1hdC1jYXJkIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1hcmdpbjogMTAlIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG4gIG1hdC1mb3JtLWZpZWxkLCBtYXQtY2hlY2tib3gsbWF0LXJhZGlvLWdyb3VwIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuICBtYXQtY2FyZC1jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIFxuICAubG9naW4tYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIH1cbiAgLmFsZXJ0XG4gIHtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMTQsIDIxNCwgMjM1KTtcbiAgICBoZWlnaHQ6IDQlO1xuICAgIHdpZHRoOjIwJTtcbiAgfVxuXG4gIFxuICAiXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterUserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register-user',
            templateUrl: './register-user.component.html',
            styleUrls: ['./register-user.component.css']
          }]
        }], function () {
          return [{
            type: _services_register_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _services_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]
          }, {
            type: src_app_services_notifier_service__WEBPACK_IMPORTED_MODULE_8__["NotifierService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8ZCa":
    /*!**********************************************!*\
      !*** ./src/app/services/notifier.service.ts ***!
      \**********************************************/

    /*! exports provided: NotifierService */

    /***/
    function ZCa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotifierService", function () {
        return NotifierService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");

      var NotifierService = /*#__PURE__*/function () {
        function NotifierService(snackBar) {
          _classCallCheck(this, NotifierService);

          this.snackBar = snackBar;
        }

        _createClass(NotifierService, [{
          key: "showNotification",
          value: function showNotification(displayMessage, buttonText) {
            this.snackBar.open(displayMessage, buttonText, {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom'
            });
          }
        }]);

        return NotifierService;
      }();

      NotifierService.ɵfac = function NotifierService_Factory(t) {
        return new (t || NotifierService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]));
      };

      NotifierService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NotifierService,
        factory: NotifierService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifierService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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
    },

    /***/
    "BuFo":
    /*!***************************************************!*\
      !*** ./src/app/components/home/home.component.ts ***!
      \***************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function BuFo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../home.service */
      "Ol7V");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(formBuilder, home) {
          _classCallCheck(this, HomeComponent);

          this.formBuilder = formBuilder;
          this.home = home;
          this.items = [{
            name: "Tom",
            price: 500
          }, {
            name: "ram",
            price: 500
          }];
          this.checkoutForm = this.formBuilder.group({
            name: '',
            address: ''
          });
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.home.saveUser(this.items).subscribe(function (result) {
              console.warn(result);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            // Process checkout data here
            console.warn('Your order has been submitted', this.checkoutForm.value);
            var x = this.checkoutForm.value;
            this.checkoutForm.reset();
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 18,
        vars: 0,
        consts: [[0, "xmlns", "th", "http://www.thymeleaf.org"], [1, "bg-light", "pt-5"], [1, "py-5"], [1, "container"], [1, "row"], [1, "col-lg-7", "col-md-10", "col-12", "my-auto", "mx-auto", "text-center"], [1, "lead", "mb-4"], [0, "th", "href", "@{/subscription}", 1, "btn", "btn-primary"], [0, "th", "href", "@{/charge}", 1, "btn", "btn-success"], [1, "mt-5", "text-muted"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Homepage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Stripe Payment ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " What would you like to do? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Create Recurring Subscription");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Create One-Time Charge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "EjdT":
    /*!*******************************************************************!*\
      !*** ./src/app/components/profile-user/profile-user.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ProfileUserComponent */

    /***/
    function EjdT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileUserComponent", function () {
        return ProfileUserComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_notifier_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../services/notifier.service */
      "8ZCa");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function ProfileUserComponent_form_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "DOB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "FirstName");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact No.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "LastName");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Female");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Others");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileUserComponent_form_7_Template_button_click_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.Updated();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.ngForm);
        }
      }

      var ProfileUserComponent = /*#__PURE__*/function () {
        function ProfileUserComponent(fb, notifier, http, service, route) {
          _classCallCheck(this, ProfileUserComponent);

          this.fb = fb;
          this.notifier = notifier;
          this.http = http;
          this.service = service;
          this.route = route;
          this.email = window.localStorage.getItem('loginEmail');
        }

        _createClass(ProfileUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.ngForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              contactNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              userRole: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
            this.service.getCurrentUserDetails(this.email).subscribe(function (data) {
              _this5.ngForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data['name']),
                firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data['firstName']),
                lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data['lastName']),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data['email']),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data['password']),
                userRole: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data['userRole']),
                dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data['dob']),
                gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data['gender']),
                contactNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data['contactNumber']),
                address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data['address'])
              });
            }); // this.getMethod();
          }
        }, {
          key: "Updated",
          // public getMethod(){
          //   this.http.get('http://localhost:8083/api/v1/get/').subscribe((data) => {
          //     console.log(data);
          //     this.getJsonValue = data;
          //   })
          // }
          // Updated(){
          //   this.notifier.showNotification('Upadated Successfully', 'ok')
          // }
          value: function Updated() {
            var _this6 = this;

            this.service.UpdateUserDetails(this.ngForm.value, this.email).subscribe(function (res) {
              return _this6.notifier.showNotification('Details Updated Succesfully', 'OK');
            });
          }
        }]);

        return ProfileUserComponent;
      }();

      ProfileUserComponent.ɵfac = function ProfileUserComponent_Factory(t) {
        return new (t || ProfileUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_notifier_service__WEBPACK_IMPORTED_MODULE_2__["NotifierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      ProfileUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileUserComponent,
        selectors: [["app-profile-user"]],
        decls: 8,
        vars: 1,
        consts: [[1, "container", 2, "width", "100rem"], [1, "row", 2, "display", "block"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "col-4", 2, "display", "inline-block", "float", "left", "height", "30rem", "width", "40rem", "align-items", "flex-start"], ["src", "../assets/profile-icon.png", 2, "height", "150px", "width", "150px", "margin-left", "30%", "margin-bottom", "5px"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", "formControlName", "name", "required", "", 1, "plantId", "w-100"], ["appearance", "outline"], ["matInput", "", "formControlName", "dob", "type", "date", "required", ""], [1, "col-4", 2, "display", "inline-block", "float", "inline-start"], ["matInput", "", "formControlName", "firstName", "required", "", 1, "plantId", "w-100"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "contactNumber", "required", ""], ["matInput", "", "formControlName", "address", "required", ""], [1, "col-4", 2, "display", "inline-block"], ["matInput", "", "formControlName", "lastName", "required", ""], ["matInput", "", "formControlName", "password", "required", ""], ["formControlName", "gender", "required", ""], ["value", "male"], ["value", "female"], ["value", "others"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
        template: function ProfileUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "WELCOME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "MY DASHBOARD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileUserComponent_form_7_Template, 49, 1, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ngForm);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]],
        styles: [".container[_ngcontent-%COMP%]{ \n    \n    display: inline-block;\n    background-color:rgba(118, 250, 118, 0.879);\n    color:#000000;\n    margin-top: 130px;\n    height: 510px;\n    width: 800px;\n    border-top-right-radius:  60px;\n    border-bottom-left-radius: 60px;\n    border-bottom-right-radius: 60px; \n    margin-left:100px;\n}\n\nh1[_ngcontent-%COMP%]{\n  font-weight: bold;\n  text-align: center;\n  margin-top: 12px;\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n\nmat-form-field[_ngcontent-%COMP%]{\n    width:100%;\n    \n}\n\nmat-label[_ngcontent-%COMP%]{\n    font-weight: bold;\n   font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n   color: black;\n  }\n\nbutton[_ngcontent-%COMP%]{\n    text-align: center;\n    margin-left: 150px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHFCQUFxQjtJQUNyQiwyQ0FBMkM7SUFDM0MsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNFQUFzRTtBQUN4RTs7QUFFQTtJQUNJLFVBQVU7O0FBRWQ7O0FBRUU7SUFDRSxpQkFBaUI7R0FDbEIsc0VBQXNFO0dBQ3RFLFlBQVk7RUFDYjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEIiLCJmaWxlIjoicHJvZmlsZS11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyeyBcbiAgICBcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDExOCwgMjUwLCAxMTgsIDAuODc5KTtcbiAgICBjb2xvcjojMDAwMDAwO1xuICAgIG1hcmdpbi10b3A6IDEzMHB4O1xuICAgIGhlaWdodDogNTEwcHg7XG4gICAgd2lkdGg6IDgwMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAgNjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2MHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2MHB4OyBcbiAgICBtYXJnaW4tbGVmdDoxMDBweDtcbn1cblxuaDF7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XG59XG5cbm1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOjEwMCU7XG4gICAgXG59XG5cbiAgbWF0LWxhYmVse1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbiAgIGNvbG9yOiBibGFjaztcbiAgfVxuXG4gIGJ1dHRvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xuICB9XG5cblxuICAiXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileUserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-profile-user',
            templateUrl: './profile-user.component.html',
            styleUrls: ['./profile-user.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_notifier_service__WEBPACK_IMPORTED_MODULE_2__["NotifierService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "FjYH":
    /*!**********************************************************!*\
      !*** ./src/app/product-image/product-image.component.ts ***!
      \**********************************************************/

    /*! exports provided: ProductImageComponent */

    /***/
    function FjYH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductImageComponent", function () {
        return ProductImageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var ProductImageComponent = /*#__PURE__*/function () {
        function ProductImageComponent(_sanitizer) {
          _classCallCheck(this, ProductImageComponent);

          this._sanitizer = _sanitizer;
        }

        _createClass(ProductImageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.retrivedImage = 'data:image/jpg;base64,' + this.plantmodel.productImage;
          }
        }]);

        return ProductImageComponent;
      }();

      ProductImageComponent.ɵfac = function ProductImageComponent_Factory(t) {
        return new (t || ProductImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
      };

      ProductImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductImageComponent,
        selectors: [["app-product-image"]],
        inputs: {
          plantmodel: "plantmodel"
        },
        decls: 1,
        vars: 1,
        consts: [["alt", "Plant_Image", 2, "height", "150px", "width", "150px", 3, "src"]],
        template: function ProductImageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.retrivedImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWltYWdlLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductImageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-image',
            templateUrl: './product-image.component.html',
            styleUrls: ['./product-image.component.css']
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
          }];
        }, {
          plantmodel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "H+bZ":
    /*!*****************************************!*\
      !*** ./src/app/services/api.service.ts ***!
      \*****************************************/

    /*! exports provided: ApiService */

    /***/
    function HBZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http) {
          _classCallCheck(this, ApiService);

          this.http = http; // baseUrl = "http://localhost:8080";

          this.baseUrl = "https://prakritik.stackroute.io";
        }

        _createClass(ApiService, [{
          key: "getUserByEmail",
          value: function getUserByEmail(email) {
            return this.http.get(this.baseUrl + "/registration-service/api/v1/get/" + email);
          }
        }, {
          key: "postProduct",
          value: function postProduct(data) {
            return this.http.post(this.baseUrl + "/plant-service/api/v1/addproduct", data);
          } //post-data

        }, {
          key: "savePlantModel",
          value: function savePlantModel(productObj, productImage) {
            var data = new FormData();
            data.append('file', productImage);
            data.append('plantModel', JSON.stringify(productObj));
            return this.http.post(this.baseUrl + "/plant-service/api/v1/addproduct", data);
          } // return this.http.post<any>("http://localhost:3000/seller/",data);

        }, {
          key: "getProduct",
          value: function getProduct() {
            return this.http.get(this.baseUrl + "/plant-service/api/v1/listofAllProduct");
          } // putProduct(data:any,productId:string){
          //   return this.http.put<any>("http://localhost:8082/api/v1/update/"+productId,data);
          //  }

        }, {
          key: "updatePlantModel",
          value: function updatePlantModel(productObj, productImage) {
            var data = new FormData();
            data.append('file', productImage);
            data.append('plantModel', JSON.stringify(productObj));
            return this.http.post(this.baseUrl + "/plant-service/api/v1/update/{productId}", data);
          }
        }, {
          key: "putProduct",
          value: function putProduct(data, productId) {
            return this.http.put(this.baseUrl + "/plant-service/api/v1/update/" + productId, data);
          }
        }, {
          key: "deleteProduct",
          value: function deleteProduct(productId) {
            return this.http["delete"](this.baseUrl + "/plant-service/api/v1//delete/" + productId);
          }
        }, {
          key: "getOrderedlist",
          value: function getOrderedlist(customerEmailId) {
            return this.http.get(this.baseUrl + "/customer-service/api/v1/customerBookingDetails/" + customerEmailId);
          }
        }, {
          key: "getCurrentData",
          value: function getCurrentData(productId) {
            return this.http.get(this.baseUrl + "/plant-service/api/v1/get/" + productId);
          } // getEmailid(){
          //   return this.http.get<any>("http://localhost:3000/emailid/");
          // }

        }, {
          key: "getProductById",
          value: function getProductById(productId) {
            this.details = this.http.get(this.baseUrl + "/plant-service/api/v1/get/" + productId);
          }
        }, {
          key: "getProductDetails",
          value: function getProductDetails() {
            return this.details;
          }
        }, {
          key: "getProductImageById",
          value: function getProductImageById(productId) {
            return this.details = this.http.get(this.baseUrl + "/plant-service/api/v1/get/" + productId);
          }
        }, {
          key: "postPaymentPage",
          value: function postPaymentPage(data) {
            return this.http.post(this.baseUrl + "/payment-service/paymentData", data);
          }
        }, {
          key: "getCurrentUserDetails",
          value: function getCurrentUserDetails(email) {
            return this.http.get(this.baseUrl + "/registration-service/api/v1/get/" + email);
          }
        }, {
          key: "getSellerList",
          value: function getSellerList(ownerEmailId) {
            return this.http.get(this.baseUrl + "/customer-service/api/v1/ownerProductDetail/" + ownerEmailId);
          }
        }, {
          key: "CancelOrder",
          value: function CancelOrder(data, orderId) {
            return this.http.put(this.baseUrl + "/customer-service/api/v1/CancelOrder/" + orderId, data);
          }
        }, {
          key: "getOrderedlistByorderId",
          value: function getOrderedlistByorderId(orderId) {
            return this.http.get(this.baseUrl + "/customer-service/api/v1/getOrder/" + orderId);
          }
        }, {
          key: "getPictureById",
          value: function getPictureById(productId) {
            return this.http.get(this.baseUrl + "/plant-service/api/v1/get/" + productId);
          }
        }, {
          key: "UpdateUserDetails",
          value: function UpdateUserDetails(data, email) {
            return this.http.put(this.baseUrl + "/registration-service/api/v1/update/" + email, data);
          } // getOrderedlistByorderId(orderId:string){
          //   return this.http.get<any>("http://localhost:8032/api/v1/customerBookingDetails/"+orderId);
          // }

        }, {
          key: "getProductListByownerEmailID",
          value: function getProductListByownerEmailID(ownerEmailId) {
            return this.http.get(this.baseUrl + "/plant-service/api/v1//ProductList/" + ownerEmailId);
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "IeRB":
    /*!*************************************************************************!*\
      !*** ./src/app/components/sellerorderlist/sellerorderlist.component.ts ***!
      \*************************************************************************/

    /*! exports provided: SellerorderlistComponent */

    /***/
    function IeRB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerorderlistComponent", function () {
        return SellerorderlistComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function SellerorderlistComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "spa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Save earth save life");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "#picker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "loupe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "calendar_today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "person");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\xA0\xA0Customer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "person");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "mail_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "call");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\xA0\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var OrderDetails_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", OrderDetails_r1.productName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", OrderDetails_r1 == null ? null : OrderDetails_r1.orderId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Quantity:\xA0\xA0", OrderDetails_r1 == null ? null : OrderDetails_r1.Quantity, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9\xA0\xA0\xA0\xA0\xA0\xA0\xA0", OrderDetails_r1 == null ? null : OrderDetails_r1.productPrice, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", OrderDetails_r1 == null ? null : OrderDetails_r1.orderDate, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", OrderDetails_r1 == null ? null : OrderDetails_r1.customerName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", OrderDetails_r1 == null ? null : OrderDetails_r1.customerEmailId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", OrderDetails_r1 == null ? null : OrderDetails_r1.cutomerContactNo, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", OrderDetails_r1 == null ? null : OrderDetails_r1.customerAddress, "");
        }
      }

      var SellerorderlistComponent = /*#__PURE__*/function () {
        function SellerorderlistComponent(httpClient, service) {
          _classCallCheck(this, SellerorderlistComponent);

          this.httpClient = httpClient;
          this.service = service;
          this.ownerEmailId = window.localStorage.getItem('loginEmail');
          this.SellerList = [];
        }

        _createClass(SellerorderlistComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getSellerList(this.ownerEmailId);
          }
        }, {
          key: "getSellerList",
          value: function getSellerList(ownerEmailId) {
            var _this7 = this;

            this.service.getSellerList(ownerEmailId).subscribe(function (response) {
              console.log(response);
              _this7.SellerList = response;
            });
          }
        }]);

        return SellerorderlistComponent;
      }();

      SellerorderlistComponent.ɵfac = function SellerorderlistComponent_Factory(t) {
        return new (t || SellerorderlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
      };

      SellerorderlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SellerorderlistComponent,
        selectors: [["app-sellerorderlist"]],
        decls: 5,
        vars: 1,
        consts: [[1, "container", 2, "margin-top", "70px", "margin-left", "150px"], [1, "text", 2, "font-weight", "bold", "width", "20rem", "height", "30px", "margin-left", "20px", "color", "rgb(9, 1, 1)"], [1, "text", 2, "font-weight", "bold", "color", "rgb(187, 208, 212)"], ["class", "card-text-center", "style", " padding-bottom: 1%;", 4, "ngFor", "ngForOf"], [1, "card-text-center", 2, "padding-bottom", "1%"], [1, "card-body"], [1, "row", 2, "width", "66rem", "display", "block", "height", "20rem"], ["fxLayout", "column", 1, "col-4", 2, "width", "20rem", "height", "20rem", "margin-left", "20px", "display", "inline-block", "float", "left"], ["src", "https://us.123rf.com/450wm/fillvector/fillvector2005/fillvector200503920/fillvector200503920.jpg?ver=6", "alt", "Plant_Image", 1, "card-img-bottom", 2, "height", "300px"], ["fxLayout", "column", 1, "col-4", 2, "width", "20rem", "height", "20rem", "margin-left", "20px", "display", "inline-block", "float", "inline-start"], [1, "card-header", 2, "margin-bottom", "20px"], [1, "card-title"], ["fxLayout", "column", 1, "col-4", 2, "width", "20rem", "height", "20rem", "margin-left", "20px", "display", "inline-block", "float", "inline-end"], [1, "card-header", 2, "margin-bottom", "3px"]],
        template: function SellerorderlistComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Booking History");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SellerorderlistComponent_div_4_Template, 52, 9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.SellerList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
        styles: [".card-title[_ngcontent-%COMP%]{\n  font-style: normal;\n  font-weight: bold;\n}\n.mat-card[_ngcontent-%COMP%]{\n  background-color: rgba(245, 222, 179, 0.59)\n}\n.container[_ngcontent-%COMP%]{\n  margin-top:65px;\n  width: -moz-max-content;\n  width: max-content;\n  display: inline-block;\n  \n  flex: content;\n  font-size: small;\n}\n.mat-card[_ngcontent-%COMP%]{\n  background-color:whitesmoke\n}\nbutton[_ngcontent-%COMP%]{\n  background-color: rgba(218, 75, 75, 0.603);\n  border-radius: 5px;\n  color: rgb(13, 13, 13);\n  \n}\nbutton[_ngcontent-%COMP%]:hover{\n  background-color: yellowgreen;\n}\n.card-header[_ngcontent-%COMP%]{\n  font-size: 20px;\n  font-family:'Times New Roman', Times, serif;\n  font-weight: bold;\n background-color: rgba(86, 222, 86, 0.656);\n  \n}\n.card-body[_ngcontent-%COMP%]{\n font-family: 'Franklin Gothic Medium', 'Arial Narrow', Ar\n}\n.card-title[_ngcontent-%COMP%]{\nfont-family: 'Times New Roman', Times, serif;\n}\n.card-img-bottom[_ngcontent-%COMP%]:hover{\n  border-radius: 2px;\n}\n.mat-icon[_ngcontent-%COMP%]{\n  color: rgb(177, 78, 188);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGxlcm9yZGVybGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0UsZUFBZTtFQUNmLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIscUJBQXFCOztFQUVyQixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRSwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLHNCQUFzQjs7QUFFeEI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDJDQUEyQztFQUMzQyxpQkFBaUI7Q0FDbEIsMENBQTBDOztBQUUzQztBQUNBO0NBQ0M7QUFDRDtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzZWxsZXJvcmRlcmxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRpdGxle1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1hdC1jYXJke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjIyLCAxNzksIDAuNTkpXG59XG4uY29udGFpbmVye1xuICBtYXJnaW4tdG9wOjY1cHg7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBcbiAgZmxleDogY29udGVudDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cbi5tYXQtY2FyZHtcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlXG59XG5idXR0b257XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE4LCA3NSwgNzUsIDAuNjAzKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogcmdiKDEzLCAxMywgMTMpO1xuICBcbn1cbmJ1dHRvbjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XG59XG4uY2FyZC1oZWFkZXJ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6J1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NiwgMjIyLCA4NiwgMC42NTYpO1xuICBcbn1cbi5jYXJkLWJvZHl7XG4gZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyXG59XG4uY2FyZC10aXRsZXtcbmZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xufVxuLmNhcmQtaW1nLWJvdHRvbTpob3ZlcntcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLm1hdC1pY29ue1xuICBjb2xvcjogcmdiKDE3NywgNzgsIDE4OCk7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellerorderlistComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sellerorderlist',
            templateUrl: './sellerorderlist.component.html',
            styleUrls: ['./sellerorderlist.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Jc6U":
    /*!*****************************************************************!*\
      !*** ./src/app/components/updateseeds/updateseeds.component.ts ***!
      \*****************************************************************/

    /*! exports provided: UpdateseedsComponent */

    /***/
    function Jc6U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateseedsComponent", function () {
        return UpdateseedsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_plantmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/plantmodel */
      "2wgd");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var src_app_services_notifier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/notifier.service */
      "8ZCa");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");

      var _c0 = ["stepper"];

      function UpdateseedsComponent_form_6_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Profile");
        }
      }

      function UpdateseedsComponent_form_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateseedsComponent_form_6_ng_template_1_Template, 1, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Email Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Quantity(.in No's)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Product Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Product Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-hint", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*Enter in Numbers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Upload Product Images");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdateseedsComponent_form_6_Template_input_change_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onFileChanged($event.target.files);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Next ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.profileFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("align", "end");
        }
      }

      function UpdateseedsComponent_form_11_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Requirements");
        }
      }

      function UpdateseedsComponent_form_11_mat_option_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var age_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", age_r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", age_r12, " ");
        }
      }

      function UpdateseedsComponent_form_11_mat_option_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", day_r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", day_r13, " ");
        }
      }

      function UpdateseedsComponent_form_11_mat_option_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var part_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", part_r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", part_r14, " ");
        }
      }

      function UpdateseedsComponent_form_11_mat_option_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var size_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", size_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", size_r15, " ");
        }
      }

      function UpdateseedsComponent_form_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateseedsComponent_form_11_ng_template_1_Template, 1, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Product Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Product Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UpdateseedsComponent_form_11_mat_option_10_Template, 2, 2, "mat-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Water Requirement for the Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "--Select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UpdateseedsComponent_form_11_mat_option_17_Template, 2, 2, "mat-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sunlight Requirement for the Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "--Select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UpdateseedsComponent_form_11_mat_option_24_Template, 2, 2, "mat-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Size of the Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-select", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UpdateseedsComponent_form_11_mat_option_29_Template, 2, 2, "mat-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.profileFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.ages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.days);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.parts);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.sizes);
        }
      }

      function UpdateseedsComponent_form_16_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "You are almost done....");
        }
      }

      function UpdateseedsComponent_form_16_mat_radio_button_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var result_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", result_r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", result_r18, " ");
        }
      }

      function UpdateseedsComponent_form_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateseedsComponent_form_16_ng_template_1_Template, 1, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "State Whether the Product is toxic to pets, kids: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-radio-group", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateseedsComponent_form_16_Template_mat_radio_group_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.toxicity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UpdateseedsComponent_form_16_mat_radio_button_5_Template, 2, 2, "mat-radio-button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description of the Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-hint", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Max 255 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.profileFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.toxicity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.results);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("align", "end");
        }
      }

      var UpdateseedsComponent = /*#__PURE__*/function () {
        function UpdateseedsComponent(fb, service, notifierService, router, route) {
          _classCallCheck(this, UpdateseedsComponent);

          this.fb = fb;
          this.service = service;
          this.notifierService = notifierService;
          this.router = router;
          this.route = route;
          this.productObject = new src_app_plantmodel__WEBPACK_IMPORTED_MODULE_2__["PlantModel"]();
          this.files = []; // OnSubmit(){
          //   console.log('formValue', this.profileFormGroup.value);
          //   this.productObject.productName = this.profileFormGroup.value.productName;
          //   this.productObject.productsAvailable = this.profileFormGroup.value.productsAvailable;
          //   this.productObject.productPrice = this.profileFormGroup.value.productPrice;
          //   this.productObject.sellerEmailId= this.profileFormGroup.value.sellerEmailId;
          //   this.productObject.productAddress= this.profileFormGroup.value.productAddress;
          //   this.productObject.productAge= this.profileFormGroup.value.productAge;
          //   this.productObject.sizeOfProduct= this.profileFormGroup.value.sizeOfProduct;
          //   this.productObject.waterRequirement= this.profileFormGroup.value.waterRequirement;
          //   this.productObject.sunlightRequirement= this.profileFormGroup.value.sunlightRequirement;
          //   this.productObject.toxicity= this.profileFormGroup.value.toxicity;
          //   this.productObject.description= this.profileFormGroup.value.description;
          //   this.productObject.productId=this.profileFormGroup.value.productId;
          //   this.service.updatePlantModel(this.productObject, this.files[0]).subscribe((result) => {
          //     console.warn("result is here", result)
          //        this.profileFormGroup.reset();
          //        this.router.navigate(['/home']);
          //   })
          // }   

          this.days = ['Once a week', 'Twice a week', 'Thrice a week', 'Everyday'];
          this.parts = ['Full sun - Plants need at least 6 hours of direct sun daily', 'Part sun – Plants thrive with between 3 and 6 hours of direct sun per day', 'Part shade – Plants require between 3 and 6 hours of sun per day, but need protection from intense mid-day sun', 'Full shade – Plants require less than 3 hours of direct sun per day'];
          this.sizes = ['----'];
          this.results = ['Yes', 'No'];
          this.urllink = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnbY-fLcMMqyKqZ8kBk9vTtboqfE_mvHAzbyoWvi39-Bz5P0LlBU7_FtB6iFCzGWM6rEo&usqp=CAU';
        }

        _createClass(UpdateseedsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.profileFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              sellerEmailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              //productId:new FormControl(""),
              productsAvailable: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
              productAge: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
              sizeOfProduct: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
              waterRequirement: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              sunlightRequirement: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              toxicity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
            this.service.getCurrentData(this.route.snapshot.params.id).subscribe(function (res) {
              _this8.profileFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                sellerEmailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['sellerEmailId']),
                productsAvailable: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['productsAvailable']),
                productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['productName']),
                productPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['productPrice']),
                productImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['productImage']),
                productAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['productAddress']),
                //productAge:new FormControl(res['productAge']),
                // sizeOfProduct:new FormControl(res['sizeOfProduct']),
                waterRequirement: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['waterRequirement']),
                sunlightRequirement: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['sunlightRequirement']),
                toxicity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['toxicity']),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['description'])
              });
            });
          }
        }, {
          key: "onFileChanged",
          value: function onFileChanged(files) {
            this.prepareFilesList(files);
          }
        }, {
          key: "prepareFilesList",
          value: function prepareFilesList(files) {
            var _iterator2 = _createForOfIteratorHelper(files),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var item = _step2.value;
                item.progress = 0;
                this.files.push(item);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.uploadFilesSimulator(0);
          }
        }, {
          key: "uploadFilesSimulator",
          value: function uploadFilesSimulator(index) {
            var _this9 = this;

            setTimeout(function () {
              if (index === _this9.files.length) {
                return;
              } else {
                var progressInterval = setInterval(function () {
                  if (_this9.files[index].progress === 100) {
                    clearInterval(progressInterval);

                    _this9.uploadFilesSimulator(index + 1);
                  } else {
                    _this9.files[index].progress += 5;
                  }
                }, 200);
              }
            }, 1000);
          }
        }, {
          key: "formatBytes",
          value: function formatBytes(bytes, decimals) {
            if (bytes === 0) {
              return '0 Bytes';
            }

            var k = 1024;
            var dm = decimals <= 0 ? 0 : decimals || 2;
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
          }
        }, {
          key: "OnSubmit",
          value: function OnSubmit() {
            var _this10 = this;

            this.service.putProduct(this.profileFormGroup.value, this.route.snapshot.params.id).subscribe(function (res) {
              _this10.notifierService.showNotification('Product Data Updated succesfully', 'OK'), _this10.router.navigate(['/home']);
            });
          }
        }]);

        return UpdateseedsComponent;
      }();

      UpdateseedsComponent.ɵfac = function UpdateseedsComponent_Factory(t) {
        return new (t || UpdateseedsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notifier_service__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
      };

      UpdateseedsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UpdateseedsComponent,
        selectors: [["app-updateseeds"]],
        viewQuery: function UpdateseedsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
          }
        },
        decls: 22,
        vars: 6,
        consts: [[1, "container-fluid"], ["completed", "false", 3, "stepControl"], [1, "profile"], [3, "formGroup", 4, "ngIf"], ["mat-raised-button", "", "id", "back", "color", "primary", "matStepperPrevious", "", 2, "margin-left", "5px"], ["mat-raised-button", "", "color", "primary", 1, "submit", 2, "margin-left", "530px", 3, "click"], [3, "formGroup"], ["matStepLabel", ""], ["appearance", "outline"], ["matInput", "", "formControlName", "sellerEmailId", "required", "", 1, "plantId", "w-100"], ["matInput", "", "formControlName", "productsAvailable", "required", "", 1, "plantId", "w-100"], ["matInput", "", "formControlName", "productName", "required", ""], ["matInput", "", "type", "number", "formControlName", "productPrice", "required", ""], [3, "align"], [1, "img_container"], ["for", "choose-file", 2, "color", "#089975"], ["type", "file", "id", "choose-file", "size", "80", "multiple", "", "formControlName", "productImage", "required", "", 3, "change"], ["fileInput", ""], ["mat-raised-button", "", "color", "primary", "matStepperNext", "", 2, "margin-left", "600px"], ["appearance", "outline", 2, "margin-top", "7px"], ["matInput", "", "formControlName", "productAddress", "required", ""], ["for", "productAge"], ["name", "productAge", "id", "productAge", "formControlName", "productAge"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "waterRequirement"], ["name", "waterRequirement", "id", "waterRequirement", "formControlName", "waterRequirement", "required", ""], ["for", "sunlightRequirement"], ["name", "sunlightRequirement", "id", "sunlightRequirement", "formControlName", "sunlightRequirement", "required", ""], ["for", "sizeOfPlant"], ["name", "sizeOfProduct", "id", "sizeOfProduct", "formControlName", "sizeOfProduct"], ["mat-raised-button", "", "color", "primary", "id", "previous", "matStepperPrevious", "", 2, "margin-left", "5px"], ["mat-raised-button", "", "id", "next", "color", "primary", "matStepperNext", "", 2, "margin-left", "540px"], [3, "value"], ["id", "toxicity"], ["aria-labelledby", "toxicity", "formControlName", "toxicity", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["class", "example-radio-button block", 3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "rows", "10", "col", "50", "formControlName", "description", "required", ""], [1, "example-radio-button", "block", 3, "value"]],
        template: function UpdateseedsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-horizontal-stepper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-step", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profile of the seeds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UpdateseedsComponent_form_6_Template, 32, 2, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-step", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Requirements of seeds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UpdateseedsComponent_form_11_Template, 35, 5, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-step", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About Seeds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UpdateseedsComponent_form_16_Template, 12, 4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateseedsComponent_Template_button_click_20_listener() {
              return ctx.OnSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileFormGroup);
          }
        },
        directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStep"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperPrevious"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatHint"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperNext"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGVzZWVkcy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateseedsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-updateseeds',
            templateUrl: './updateseeds.component.html',
            styleUrls: ['./updateseeds.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: src_app_services_notifier_service__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }];
        }, {
          stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stepper']
          }]
        });
      })();
      /***/

    },

    /***/
    "L5rU":
    /*!****************************************!*\
      !*** ./src/app/search-by-name.pipe.ts ***!
      \****************************************/

    /*! exports provided: SearchByNamePipe */

    /***/
    function L5rU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchByNamePipe", function () {
        return SearchByNamePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SearchByNamePipe = /*#__PURE__*/function () {
        function SearchByNamePipe() {
          _classCallCheck(this, SearchByNamePipe);
        }

        _createClass(SearchByNamePipe, [{
          key: "transform",
          value: function transform(value, psearch) {
            return value.filter(function (plant) {
              return plant.productName.toLowerCase().indexOf(psearch.toLowerCase()) !== -1;
            });
          }
        }]);

        return SearchByNamePipe;
      }();

      SearchByNamePipe.ɵfac = function SearchByNamePipe_Factory(t) {
        return new (t || SearchByNamePipe)();
      };

      SearchByNamePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "searchByName",
        type: SearchByNamePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchByNamePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'searchByName'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "LmEr":
    /*!*******************************************************!*\
      !*** ./src/app/components/footer/footer.component.ts ***!
      \*******************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function LmEr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 2,
        vars: 0,
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Ninj":
    /*!*************************************************************************!*\
      !*** ./src/app/components/updatemedicines/updatemedicines.component.ts ***!
      \*************************************************************************/

    /*! exports provided: UpdatemedicinesComponent */

    /***/
    function Ninj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdatemedicinesComponent", function () {
        return UpdatemedicinesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UpdatemedicinesComponent = /*#__PURE__*/function () {
        function UpdatemedicinesComponent() {
          _classCallCheck(this, UpdatemedicinesComponent);
        }

        _createClass(UpdatemedicinesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UpdatemedicinesComponent;
      }();

      UpdatemedicinesComponent.ɵfac = function UpdatemedicinesComponent_Factory(t) {
        return new (t || UpdatemedicinesComponent)();
      };

      UpdatemedicinesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UpdatemedicinesComponent,
        selectors: [["app-updatemedicines"]],
        decls: 2,
        vars: 0,
        template: function UpdatemedicinesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "updatemedicines works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGVtZWRpY2luZXMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdatemedicinesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-updatemedicines',
            templateUrl: './updatemedicines.component.html',
            styleUrls: ['./updatemedicines.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "OHJo":
    /*!*************************************************************!*\
      !*** ./src/app/components/medicines/medicines.component.ts ***!
      \*************************************************************/

    /*! exports provided: MedicinesComponent */

    /***/
    function OHJo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicinesComponent", function () {
        return MedicinesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_plantmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/plantmodel */
      "2wgd");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var src_app_services_notifier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/notifier.service */
      "8ZCa");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");

      var _c0 = ["stepper"];

      function MedicinesComponent_form_6_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Profile");
        }
      }

      function MedicinesComponent_form_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MedicinesComponent_form_6_ng_template_1_Template, 1, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Email Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Shop Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contact Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Quantity(.in No's)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Product Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Upload Product Images");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MedicinesComponent_form_6_Template_input_change_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onFileChanged($event.target.files);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Next ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.profileFormGroup);
        }
      }

      function MedicinesComponent_form_11_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Requirements");
        }
      }

      function MedicinesComponent_form_11_mat_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var age_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", age_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", age_r9, " ");
        }
      }

      function MedicinesComponent_form_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MedicinesComponent_form_11_ng_template_1_Template, 1, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Product Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-hint", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*Enter in Numbers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Product Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Product Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MedicinesComponent_form_11_mat_option_16_Template, 2, 2, "mat-option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.profileFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("align", "end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.ages);
        }
      }

      function MedicinesComponent_form_16_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "You are almost done....");
        }
      }

      function MedicinesComponent_form_16_mat_radio_button_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var result_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", result_r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", result_r12, " ");
        }
      }

      function MedicinesComponent_form_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MedicinesComponent_form_16_ng_template_1_Template, 1, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "State Whether the Product is toxic to pets, kids: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-radio-group", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MedicinesComponent_form_16_Template_mat_radio_group_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.toxicity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MedicinesComponent_form_16_mat_radio_button_5_Template, 2, 2, "mat-radio-button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Description of the Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-hint", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Max 255 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.profileFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.toxicity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.results);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("align", "end");
        }
      }

      var MedicinesComponent = /*#__PURE__*/function () {
        function MedicinesComponent(fb, service, notifierService, router) {
          _classCallCheck(this, MedicinesComponent);

          this.fb = fb;
          this.service = service;
          this.notifierService = notifierService;
          this.router = router;
          this.productObject = new src_app_plantmodel__WEBPACK_IMPORTED_MODULE_2__["PlantModel"]();
          this.files = [];
          this.days = ['Once a week', 'Twice a week', 'Thrice a week', 'Everyday'];
          this.ages = ['null'];
          this.parts = ['Full sun - Plants need at least 6 hours of direct sun daily', 'Part sun – Plants thrive with between 3 and 6 hours of direct sun per day', 'Part shade – Plants require between 3 and 6 hours of sun per day, but need protection from intense mid-day sun', 'Full shade – Plants require less than 3 hours of direct sun per day'];
          this.sizes = ['NA'];
          this.results = ['Yes', 'No'];
          this.urllink = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnbY-fLcMMqyKqZ8kBk9vTtboqfE_mvHAzbyoWvi39-Bz5P0LlBU7_FtB6iFCzGWM6rEo&usqp=CAU';
        }

        _createClass(MedicinesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.profileFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              ownerEmailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](window.localStorage.getItem('loginEmail'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              shopName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              ownerContactNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
              productsAvailable: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
              productAge: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              sizeOfProduct: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              waterRequirement: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              sunlightRequirement: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              toxicity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
            console.log(this.profileFormGroup.value);
          }
        }, {
          key: "OnSubmit",
          value: function OnSubmit() {
            var _this11 = this;

            console.log('formValue', this.profileFormGroup.value);
            this.productObject.productName = this.profileFormGroup.value.productName;
            this.productObject.shopName = this.profileFormGroup.value.shopName;
            this.productObject.productsAvailable = this.profileFormGroup.value.productsAvailable;
            this.productObject.ownerContactNo = this.profileFormGroup.value.ownerContactNo;
            this.productObject.productPrice = this.profileFormGroup.value.productPrice;
            this.productObject.ownerEmailId = this.profileFormGroup.value.ownerEmailId;
            this.productObject.productAddress = this.profileFormGroup.value.productAddress;
            this.productObject.productAge = this.profileFormGroup.value.productAge;
            this.productObject.sizeOfProduct = this.profileFormGroup.value.sizeOfProduct;
            this.productObject.waterRequirement = this.profileFormGroup.value.waterRequirement;
            this.productObject.sunlightRequirement = this.profileFormGroup.value.sunlightRequirement;
            this.productObject.toxicity = this.profileFormGroup.value.toxicity;
            this.productObject.description = this.profileFormGroup.value.description;
            this.productObject.productId = this.profileFormGroup.value.productId;
            this.service.savePlantModel(this.productObject, this.files[0]).subscribe(function (result) {
              _this11.notifierService.showNotification('Product Added Succesfully', 'OK');

              _this11.profileFormGroup.reset();

              _this11.router.navigate(['/sellerhomepage/home']);
            });
          } // image input

        }, {
          key: "onFileChanged",
          value: function onFileChanged(files) {
            this.prepareFilesList(files);
          }
        }, {
          key: "prepareFilesList",
          value: function prepareFilesList(files) {
            var _iterator3 = _createForOfIteratorHelper(files),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var item = _step3.value;
                item.progress = 0;
                this.files.push(item);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            this.uploadFilesSimulator(0);
          }
        }, {
          key: "uploadFilesSimulator",
          value: function uploadFilesSimulator(index) {
            var _this12 = this;

            setTimeout(function () {
              if (index === _this12.files.length) {
                return;
              } else {
                var progressInterval = setInterval(function () {
                  if (_this12.files[index].progress === 100) {
                    clearInterval(progressInterval);

                    _this12.uploadFilesSimulator(index + 1);
                  } else {
                    _this12.files[index].progress += 5;
                  }
                }, 200);
              }
            }, 1000);
          }
        }, {
          key: "formatBytes",
          value: function formatBytes(bytes, decimals) {
            if (bytes === 0) {
              return '0 Bytes';
            }

            var k = 1024;
            var dm = decimals <= 0 ? 0 : decimals || 2;
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
          }
        }]);

        return MedicinesComponent;
      }();

      MedicinesComponent.ɵfac = function MedicinesComponent_Factory(t) {
        return new (t || MedicinesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notifier_service__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      MedicinesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MedicinesComponent,
        selectors: [["app-medicines"]],
        viewQuery: function MedicinesComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
          }
        },
        decls: 22,
        vars: 6,
        consts: [[1, "container-fluid"], ["completed", "false", 3, "stepControl"], [1, "profile"], [3, "formGroup", 4, "ngIf"], ["mat-raised-button", "", "id", "back", "color", "primary", "matStepperPrevious", "", 2, "margin-left", "5px"], ["mat-raised-button", "", "color", "primary", 1, "submit", 2, "margin-left", "530px", 3, "click"], [3, "formGroup"], ["matStepLabel", ""], ["appearance", "outline"], ["matInput", "", "formControlName", "ownerEmailId", "required", "", 1, "plantId", "w-100"], ["matInput", "", "formControlName", "shopName", "required", "", 1, "productId", "w-100"], ["matInput", "", "formControlName", "ownerContactNo", "required", "", 1, "productId", "w-100"], ["matInput", "", "formControlName", "productsAvailable", "required", "", 1, "plantId", "w-100"], ["matInput", "", "formControlName", "productName", "required", ""], [1, "img_container"], ["for", "choose-file", 2, "color", "#089975"], ["type", "file", "id", "choose-file", "size", "80", "multiple", "", "formControlName", "productImage", "required", "", 3, "change"], ["fileInput", ""], ["mat-raised-button", "", "color", "primary", "matStepperNext", "", 2, "margin-left", "600px"], ["matInput", "", "type", "number", "formControlName", "productPrice", "required", ""], [3, "align"], ["appearance", "outline", 2, "margin-top", "7px"], ["matInput", "", "formControlName", "productAddress", "required", ""], ["for", "productAge"], ["name", "productAge", "id", "productAge", "formControlName", "productAge"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", "id", "previous", "matStepperPrevious", "", 2, "margin-left", "5px"], ["mat-raised-button", "", "id", "next", "color", "primary", "matStepperNext", "", 2, "margin-left", "540px"], [3, "value"], ["id", "toxicity"], ["aria-labelledby", "toxicity", "formControlName", "toxicity", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["class", "example-radio-button block", 3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "rows", "10", "col", "50", "formControlName", "description", "required", ""], [1, "example-radio-button", "block", 3, "value"]],
        template: function MedicinesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-horizontal-stepper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-step", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profile of the Medicines");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MedicinesComponent_form_6_Template, 34, 1, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-step", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Requirements of Medicines");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MedicinesComponent_form_11_Template, 22, 3, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-step", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About Medicines");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MedicinesComponent_form_16_Template, 12, 4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MedicinesComponent_Template_button_click_20_listener() {
              return ctx.OnSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileFormGroup);
          }
        },
        directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStep"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperPrevious"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperNext"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatHint"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioButton"]],
        styles: ["mat-card[_ngcontent-%COMP%]{\n  width:800px;\n  height:800px;\n  margin-left: 40px;\n  margin-right:50px;\n  border-radius: 20px;\n  margin-top:15px;\n  display:flex;\n  justify-content: flex-start;\n}\n.example-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.profile[_ngcontent-%COMP%]{\n  display:flex;\n  border-radius:20px ;\n  flex-direction: column;\n  width:700px;\n\n  height:650px;\n  justify-content: flex-start;\n\n}\nmat-form-field[_ngcontent-%COMP%]{\n  width:100%;\n  margin-top: 10px;\n}\n.Image[_ngcontent-%COMP%]{\n  background-color: rgb(255,255,255);\n  border: solid 4px black;\n  border-radius: 10px;\n  color:black;\n  padding:10px 20px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size:16px;\n  font-weight:bold;\n  margin-top:6px;\n  margin-bottom: 6px;\n  cursor:pointer;\n  width:150px;\n  height:45px\n}\n.img_container[_ngcontent-%COMP%]{\n\n  display: flex;\n  flex-direction: column;\n}\nmat-card-title[_ngcontent-%COMP%]{\n  text-align: center;\n}\n.block[_ngcontent-%COMP%]{\n  display: block;\n}\n.form-control[_ngcontent-%COMP%]{\n  margin-top:5px;\n\n}\nlabel[_ngcontent-%COMP%]{\n  margin-top:20px;\n}\ntextarea[_ngcontent-%COMP%]{\n  margin-top:25px;\n}\n#Toxicity[_ngcontent-%COMP%]{\n  font-weight: bold;\n}\nmat-card-title[_ngcontent-%COMP%]{\n  background-color: #f6d8ac;\n  height:50px;\n  padding: 15px;\n}\n.container-fluid[_ngcontent-%COMP%]{\n\n display: flex;\n justify-content: center;\n \n}\n.submit[_ngcontent-%COMP%]{\n  margin-left:450px;\n}\nmat-horizontal-stepper[_ngcontent-%COMP%]{\n\n  margin-top: 70px;\n  margin-bottom: 10px;\n  background-color: rgb(241, 235, 235);\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGljaW5lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixXQUFXOztFQUVYLFlBQVk7RUFDWiwyQkFBMkI7O0FBRTdCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYO0FBQ0Y7QUFDQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7O0FBRWhCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBSUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFHQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBR0E7O0NBRUMsYUFBYTtDQUNiLHVCQUF1Qjs7QUFFeEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsb0NBQW9DOztBQUV0QyIsImZpbGUiOiJtZWRpY2luZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xuICB3aWR0aDo4MDBweDtcbiAgaGVpZ2h0OjgwMHB4O1xuICBtYXJnaW4tbGVmdDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OjUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi10b3A6MTVweDtcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uZXhhbXBsZS1yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbn1cbi5wcm9maWxle1xuICBkaXNwbGF5OmZsZXg7XG4gIGJvcmRlci1yYWRpdXM6MjBweCA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOjcwMHB4O1xuXG4gIGhlaWdodDo2NTBweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG59XG5cbm1hdC1mb3JtLWZpZWxke1xuICB3aWR0aDoxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLkltYWdle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xuICBib3JkZXI6IHNvbGlkIDRweCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6YmxhY2s7XG4gIHBhZGRpbmc6MTBweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6MTZweDtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgbWFyZ2luLXRvcDo2cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgY3Vyc29yOnBvaW50ZXI7XG4gIHdpZHRoOjE1MHB4O1xuICBoZWlnaHQ6NDVweFxufVxuLmltZ19jb250YWluZXJ7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxubWF0LWNhcmQtdGl0bGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ibG9ja3tcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5mb3JtLWNvbnRyb2x7XG4gIG1hcmdpbi10b3A6NXB4O1xuXG59XG5sYWJlbHtcbiAgbWFyZ2luLXRvcDoyMHB4O1xufVxuXG5cblxudGV4dGFyZWF7XG4gIG1hcmdpbi10b3A6MjVweDtcbn1cbiNUb3hpY2l0eXtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxubWF0LWNhcmQtdGl0bGV7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmQ4YWM7XG4gIGhlaWdodDo1MHB4O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG5cbi5jb250YWluZXItZmx1aWR7XG5cbiBkaXNwbGF5OiBmbGV4O1xuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuIFxufVxuLnN1Ym1pdHtcbiAgbWFyZ2luLWxlZnQ6NDUwcHg7XG59XG5tYXQtaG9yaXpvbnRhbC1zdGVwcGVye1xuXG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDIzNSwgMjM1KTtcblxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MedicinesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-medicines',
            templateUrl: './medicines.component.html',
            styleUrls: ['./medicines.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: src_app_services_notifier_service__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, {
          stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stepper']
          }]
        });
      })();
      /***/

    },

    /***/
    "OWaM":
    /*!*******************************************************************!*\
      !*** ./src/app/components/sellernavbar/sellernavbar.component.ts ***!
      \*******************************************************************/

    /*! exports provided: SellernavbarComponent */

    /***/
    function OWaM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellernavbarComponent", function () {
        return SellernavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");

      function SellernavbarComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SellernavbarComponent_span_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SellernavbarComponent_span_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Order List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SellernavbarComponent_span_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          rotated: a0
        };
      };

      var SellernavbarComponent = /*#__PURE__*/function () {
        function SellernavbarComponent(service, httpClient, route) {
          _classCallCheck(this, SellernavbarComponent);

          this.service = service;
          this.httpClient = httpClient;
          this.route = route;
          this.isExpanded = false;
        }

        _createClass(SellernavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.emailid = window.localStorage.getItem('loginEmail');
            console.log(this.emailid);
          }
        }, {
          key: "LogOut",
          value: function LogOut() {
            this.route.navigate(['/']);
            localStorage.clear();
          }
        }]);

        return SellernavbarComponent;
      }();

      SellernavbarComponent.ɵfac = function SellernavbarComponent_Factory(t) {
        return new (t || SellernavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      SellernavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SellernavbarComponent,
        selectors: [["app-sellernavbar"]],
        decls: 54,
        vars: 10,
        consts: [["autosize", ""], ["mode", "side", "opened", "isExpanded"], ["sidenav", ""], ["mat-button", "", 2, "margin-top", "15px", 3, "click"], ["mat-list-icon", "", 1, "chevron-button", 3, "ngClass"], ["mat-button", "", "routerLink", "/sellerhomepage/home", 2, "margin-top", "30px"], ["mat-list-icon", ""], ["class", "menu-item", "style", "margin-left:8px;", 4, "ngIf"], ["mat-button", "", 2, "margin-top", "16px", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/sellerhomepage/seller", 1, "menu", 2, "width", "160px", "font-weight", "bold", "font-size", "16px"], ["mat-menu-item", "", "routerLink", "/sellerhomepage/seedslist", 1, "menu", 2, "width", "160px", "font-size", "16px", "font-weight", "bold"], ["mat-menu-item", "", "routerLink", "/sellerhomepage/medicines", 1, "menu", 2, "width", "160px", "font-size", "16px", "font-weight", "bold"], ["mat-button", "", "routerLink", "/sellerhomepage/orderList", 2, "margin-top", "16px"], ["mat-button", "", "routerLink", "/sellerhomepage/Editprofile", 2, "margin-top", "16px"], [1, "example-spacer"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [2, "position", "relative", "right", "5"], [2, "margin-right", "160px"], [1, "card-header", 2, "font-size", "small"], ["menuitem", "matMenu"], ["mat-menu-item", "", "routerLink", "/sellerhomepage/profile"], ["mat-menu-item", "", 3, "click"], [1, "menu-item", 2, "margin-left", "8px"]],
        template: function SellernavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SellernavbarComponent_Template_button_click_3_listener() {
              return ctx.isExpanded = !ctx.isExpanded;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SellernavbarComponent_span_10_Template, 2, 0, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "add_box");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SellernavbarComponent_span_15_Template, 2, 0, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-menu", null, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add Plants");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add Seeds");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Add Medicines");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "supervisor_account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SellernavbarComponent_span_28_Template, 2, 0, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "create");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, SellernavbarComponent_span_33_Template, 2, 0, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-sidenav-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Prakritik");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-menu", null, 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "My Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SellernavbarComponent_Template_button_click_51_listener() {
              return ctx.LogOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Log Out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.isExpanded));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.emailid);
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListIconCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: [".example-spacer[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n  }\n  mat-toolbar[_ngcontent-%COMP%]{\n    \n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: rgb(3,3,41);\n    position: fixed ;\n    z-index: 5;\n   color: white;\n  }\n  \n  \n  \n  .menu-button[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n   \n  }\n  .card-header[_ngcontent-%COMP%]{\n    padding-left:0px;\n  }\n  mat-sidenav-container[_ngcontent-%COMP%] {\n    height: 100%;\n      \n  }\n  .chevron-button[_ngcontent-%COMP%] {\n          transition: 300ms ease-in-out;\n          transform: rotate(0deg);\n        }\n  .chevron-button.rotated[_ngcontent-%COMP%] {\n          transform: rotate(180deg);\n        }\n  mat-sidenav-content[_ngcontent-%COMP%]{\n    \n    background-image: url(https://static.vecteezy.com/system/resources/previews/007/360/354/non_2x/close-up-of-nature-view-green-leaf-on-blurred-greenery-background-under-sunlight-with-bokeh-and-copy-space-using-as-background-natural-plants-landscape-ecology-wallpaper-concept-free-photo.jpg);\n \n    background-repeat: no-repeat;\n    background-attachment: fixed;\n background-size: cover;\n overflow: auto;\n position:sticky;\n\n}\n  mat-sidenav[_ngcontent-%COMP%]{\nbackground-color: rgb(3, 3, 41);\ncolor: white;\ndisplay: flex;\nflex-direction: column;\n\npadding-left:10px;\npadding-right: 10px;\npadding-bottom: 16px;\n\n}\n  button[_ngcontent-%COMP%]:hover{\n  background-color: black;\n  border-radius: 5px;\n\n}\n  mat-icon[_ngcontent-%COMP%]{\ncolor: white;\n}\n  .menu[_ngcontent-%COMP%]:hover{\n  background-color:rgb(3, 3, 41) ;\n  color:white;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGxlcm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGNBQWM7RUFDaEI7RUFDQTs7SUFFRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLFVBQVU7R0FDWCxZQUFZO0VBQ2I7RUFDQTs7Ozs7Ozs7OztJQVVFO0VBRUY7Ozs7Ozs7Ozs7Ozs7O0tBY0c7RUFFSDs7Ozs7Ozs7O0lBU0U7RUFDRjtJQUNFLGFBQWE7SUFDYixzQkFBc0I7O0VBRXhCO0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7RUFFQTtJQUNFLFlBQVk7O0VBRWQ7RUFHRjtVQUNVLDZCQUE2QjtVQUM3Qix1QkFBdUI7UUFDekI7RUFFUjtVQUNVLHlCQUF5QjtRQUMzQjtFQUNOO0lBQ0UsK0JBQStCO0lBQy9CLGdTQUFnUzs7SUFFaFMsNEJBQTRCO0lBQzVCLDRCQUE0QjtDQUMvQixzQkFBc0I7Q0FDdEIsY0FBYztDQUNkLGVBQWU7O0FBRWhCO0VBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsWUFBWTtBQUNaLGFBQWE7QUFDYixzQkFBc0I7O0FBRXRCLGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkIsb0JBQW9COztBQUVwQjtFQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjs7QUFFcEI7RUFFQTtBQUNBLFlBQVk7QUFDWjtFQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFdBQVc7O0FBRWIiLCJmaWxlIjoic2VsbGVybmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5leGFtcGxlLXNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cbiAgbWF0LXRvb2xiYXJ7XG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywzLDQxKTtcbiAgICBwb3NpdGlvbjogZml4ZWQgO1xuICAgIHotaW5kZXg6IDU7XG4gICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLyogbWF0LXNpZGVuYXZ7XG4gIG1hcmdpbjoxNnB4O1xuICB3aWR0aDoyMDBweDtcbiAgY29sb3I6d2hpdGU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MDQ0ODtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzoxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDo4MDBweDtcbiAgfSovXG5cbiAgLyogLmNvbnRlbnR7XG4gICBcbiAgICBtYXJnaW46IDE2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZTlhOWE7XG4gICAgY29sb3I6IzdlOWE5YTtcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoaHR0cHM6Ly9zdGF0aWMudmVjdGVlenkuY29tL3N5c3RlbS9yZXNvdXJjZXMvcHJldmlld3MvMDA3LzM2MC8zNTQvbm9uXzJ4L2Nsb3NlLXVwLW9mLW5hdHVyZS12aWV3LWdyZWVuLWxlYWYtb24tYmx1cnJlZC1ncmVlbmVyeS1iYWNrZ3JvdW5kLXVuZGVyLXN1bmxpZ2h0LXdpdGgtYm9rZWgtYW5kLWNvcHktc3BhY2UtdXNpbmctYXMtYmFja2dyb3VuZC1uYXR1cmFsLXBsYW50cy1sYW5kc2NhcGUtZWNvbG9neS13YWxscGFwZXItY29uY2VwdC1mcmVlLXBob3RvLmpwZyk7IFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH0gKi9cbiAgXG4gIC8qIG1hdC1zaWRlbmF2LWNvbnRhaW5lcntcbiAgaGVpZ2h0OjkwMHB4O1xuICB9XG4gIFxuICAuYXZhdGFye1xuICAgIHdpZHRoOjEzMHB4O1xuICAgIGhlaWdodDoxMzBweDtcbiAgICBtYXJnaW46MTBweDtcbiAgXG4gIH0qL1xuICAubWVudS1idXR0b257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgXG4gIH1cbiAgXG4gIC5jYXJkLWhlYWRlcntcbiAgICBwYWRkaW5nLWxlZnQ6MHB4O1xuICB9IFxuXG4gIG1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgXG4gIH1cblxuICBcbi5jaGV2cm9uLWJ1dHRvbiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIH1cbiAgXG4uY2hldnJvbi1idXR0b24ucm90YXRlZCB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgfVxuICBtYXQtc2lkZW5hdi1jb250ZW50e1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM0MjYyODM7ICovXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RhdGljLnZlY3RlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3ByZXZpZXdzLzAwNy8zNjAvMzU0L25vbl8yeC9jbG9zZS11cC1vZi1uYXR1cmUtdmlldy1ncmVlbi1sZWFmLW9uLWJsdXJyZWQtZ3JlZW5lcnktYmFja2dyb3VuZC11bmRlci1zdW5saWdodC13aXRoLWJva2VoLWFuZC1jb3B5LXNwYWNlLXVzaW5nLWFzLWJhY2tncm91bmQtbmF0dXJhbC1wbGFudHMtbGFuZHNjYXBlLWVjb2xvZ3ktd2FsbHBhcGVyLWNvbmNlcHQtZnJlZS1waG90by5qcGcpO1xuIFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuIG92ZXJmbG93OiBhdXRvO1xuIHBvc2l0aW9uOnN0aWNreTtcblxufVxubWF0LXNpZGVuYXZ7XG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMywgMywgNDEpO1xuY29sb3I6IHdoaXRlO1xuZGlzcGxheTogZmxleDtcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbnBhZGRpbmctbGVmdDoxMHB4O1xucGFkZGluZy1yaWdodDogMTBweDtcbnBhZGRpbmctYm90dG9tOiAxNnB4O1xuXG59XG5cbmJ1dHRvbjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxufVxuXG5tYXQtaWNvbntcbmNvbG9yOiB3aGl0ZTtcbn1cblxuLm1lbnU6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDMsIDMsIDQxKSA7XG4gIGNvbG9yOndoaXRlO1xuICBcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellernavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sellernavbar',
            templateUrl: './sellernavbar.component.html',
            styleUrls: ['./sellernavbar.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Ol7V":
    /*!*********************************!*\
      !*** ./src/app/home.service.ts ***!
      \*********************************/

    /*! exports provided: HomeService */

    /***/
    function Ol7V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeService", function () {
        return HomeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var HomeService = /*#__PURE__*/function () {
        function HomeService(http) {
          _classCallCheck(this, HomeService);

          this.http = http;
          this.url = "http://localhost:8004/user/create_order";
        }

        _createClass(HomeService, [{
          key: "saveUser",
          value: function saveUser(data) {
            console.log(JSON.stringify(data));
            return this.http.post(this.url, JSON.stringify(data));
          }
        }]);

        return HomeService;
      }();

      HomeService.ɵfac = function HomeService_Factory(t) {
        return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HomeService,
        factory: HomeService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "P1Wc":
    /*!*****************************************************************!*\
      !*** ./src/app/components/userprofile/userprofile.component.ts ***!
      \*****************************************************************/

    /*! exports provided: UserprofileComponent */

    /***/
    function P1Wc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function () {
        return UserprofileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function UserprofileComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function UserprofileComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var UserprofileComponent = /*#__PURE__*/function () {
        function UserprofileComponent(service) {
          _classCallCheck(this, UserprofileComponent);

          this.service = service;
          this.gender_bool = false;
          this.email = window.localStorage.getItem('loginEmail');
        }

        _createClass(UserprofileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.service.getUserByEmail(this.email).subscribe(function (val) {
              _this13.user = val, _this13.gender();
            });
          }
        }, {
          key: "gender",
          value: function gender() {
            if (this.user.gender == "female") {
              this.gender_bool = true;
              console.warn(this.gender_bool);
            }
          }
        }]);

        return UserprofileComponent;
      }();

      UserprofileComponent.ɵfac = function UserprofileComponent_Factory(t) {
        return new (t || UserprofileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      UserprofileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserprofileComponent,
        selectors: [["app-userprofile"]],
        decls: 70,
        vars: 9,
        consts: [["href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"), "rel", "stylesheet", "id", "bootstrap-css"], [1, "navbar-top"], [1, "title"], [1, "container", "emp-profile"], [1, "row"], [1, "col-md-4"], ["class", "profile-img", 4, "ngIf", "ngIfElse"], ["other_content", ""], [1, "col-md-8"], ["id", "myTabContent", 1, "tab-content", "profile-tab"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "col-md-6"], [1, "profile-img"], ["src", "https://cdn-icons-png.flaticon.com/512/65/65581.png", "alt", ""], ["src", "https://cdn-icons-png.flaticon.com/512/0/93.png", "alt", ""]],
        template: function UserprofileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserprofileComponent_div_8_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserprofileComponent_ng_template_9_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "First name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Last name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Gender");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Contact no.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "UserRole");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gender_bool)("ngIfElse", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.firstName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.lastName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.gender);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.address);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.contactNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.userRole);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["@import url(https://fonts.googleapis.com/css?family=Dancing+Script);\n\n*[_ngcontent-%COMP%] {\n    margin: 0;\n}\n\n.navbar-top[_ngcontent-%COMP%] {\n    background-color: rgba(172, 240, 195, 0.338);\n    color: rgb(51, 51, 51);\n    box-shadow: 0px 4px 8px 0px grey;\n    height: 70px;\n}\n.title[_ngcontent-%COMP%] {\n    font-family: 'Dancing Script', cursive;\n    padding-top: 15px;\n    position: absolute;\n    left: 45%;\n}\n\n.emp-profile[_ngcontent-%COMP%]{\n    padding: 3%;\n    margin-top: 3%;\n    margin-bottom: 3%;\n    border-radius: 0.5rem;\n    background: rgb(255, 255, 255);\n}\n.profile-img[_ngcontent-%COMP%]{\n    text-align: center;\n}\n.profile-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 70%;\n    height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJwcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG1FQUFtRTtBQURuRSwrQkFBK0I7QUFHL0I7SUFDSSxTQUFTO0FBQ2I7QUFFQSxjQUFjO0FBQ2Q7SUFDSSw0Q0FBNEM7SUFDNUMsc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7QUFDQTs7R0FFRztBQUNIO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQiIsImZpbGUiOiJ1c2VycHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSW1wb3J0IEZvbnQgRGFuY2luZyBTY3JpcHQgKi9cbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1EYW5jaW5nK1NjcmlwdCk7XG5cbioge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLyogTmF2YmFyVG9wICovXG4ubmF2YmFyLXRvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzIsIDI0MCwgMTk1LCAwLjMzOCk7XG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCAwcHggZ3JleTtcbiAgICBoZWlnaHQ6IDcwcHg7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDQ1JTtcbn1cbi8qIGJvZHl7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzM5MzFhZiwgIzAwYzZmZik7XG59ICovXG4uZW1wLXByb2ZpbGV7XG4gICAgcGFkZGluZzogMyU7XG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cbi5wcm9maWxlLWltZ3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZmlsZS1pbWcgaW1ne1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserprofileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-userprofile',
            templateUrl: './userprofile.component.html',
            styleUrls: ['./userprofile.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RwY5":
    /*!*****************************************************************!*\
      !*** ./src/app/components/landingpage/landingpage.component.ts ***!
      \*****************************************************************/

    /*! exports provided: LandingpageComponent */

    /***/
    function RwY5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingpageComponent", function () {
        return LandingpageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      var LandingpageComponent = /*#__PURE__*/function () {
        function LandingpageComponent(service, httpClient) {
          _classCallCheck(this, LandingpageComponent);

          this.service = service;
          this.httpClient = httpClient;
        }

        _createClass(LandingpageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.service.getProduct().subscribe({
              next: function next(result) {
                return _this14.cards = result;
              }
            });
          }
        }, {
          key: "login",
          value: function login() {
            window.location.href = "https://www.example.com";
          }
        }, {
          key: "register",
          value: function register() {
            window.location.href = "https://www.example.com";
          }
        }]);

        return LandingpageComponent;
      }();

      LandingpageComponent.ɵfac = function LandingpageComponent_Factory(t) {
        return new (t || LandingpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      LandingpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LandingpageComponent,
        selectors: [["app-landingpage"]],
        decls: 166,
        vars: 0,
        consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"), "integrity", "sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css")], ["href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"), "rel", "stylesheet"], [1, "navbar", "navbar-expand-sm", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], [1, "d-flex", "align-items-center", "navbar-nav", "ml-auto"], ["type", "button", "routerLink", "/register", 1, "btn", "btn-link", "px-3", "me-2"], ["type", "button", "routerLink", "/register", 1, "btn", "btn-primary", "me-3"], ["id", "carouselExampleIndicators", "data-bs-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "0", 1, "active"], ["data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "1"], [1, "carousel-inner", 2, "max-height", "40vh"], ["data-bs-interval", "10000", 1, "carousel-item", "active"], ["src", "https://www.flowerpower.com.au/wordpress/wp-content/uploads/2018/10/Wide-crop-Bora-bora-hanging-planters-with-string-of-beans-and-rhipsalis-DSC_8805.jpg", "alt", "...", 1, "d-block", "w-100", 2, "height", "300px"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "display-4", 2, "font-size", "x-large"], [1, "carousel-item"], ["src", "https://www.pixelstalk.net/wp-content/uploads/images5/Aesthetic-Minimalist-Plant-Wallpaper-HD-1080p.jpg", "alt", "...", 1, "d-block", "w-100", 2, "height", "300px"], [2, "font-size", "x-large"], ["href", "#carouselExampleIndicators", "role", "button", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["href", "#carouselExampleIndicators", "role", "button", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["id", "features", 1, "features"], [1, "heading"], [1, "box-container"], [1, "row"], [1, "box", "col-4"], ["src", "/assets/feature-img-1.png", "alt", ""], ["href", "#", 1, "btn"], ["src", "/assets/feature-img-2.png", "alt", ""], ["src", "/assets/feature-img-3.png", "alt", ""], ["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRieKfpLWxIJZGXslh9Zj05ykb3P_zU0dHUJQsVUJcdknc4-fS7zyjHIMfM30SGd52OS5w&usqp=CAU", "alt", ""], ["src", "https://static.vecteezy.com/system/resources/thumbnails/003/184/173/small/vendor-or-seller-line-icon-vector.jpg", "alt", ""], ["src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_7hAIuOstuZkRP3skmOB0ia2P8JvctL-0E0_AjXLWk85ieGmdq7FdPgJkdp7b4wYUqDk&usqp=CAU", "alt", ""], [1, "bg-white", "border-b", "py-8"], [1, "container", "mx-auto", "flex", "flex-wrap", "pt-4", "pb-12"], [1, "w-full", "my-2", "text-5xl", "font-bold", "leading-tight", "text-center", "text-gray-800"], [1, "w-full", "mb-4"], [1, "h-1", "mx-auto", "gradient", "w-64", "opacity-25", "my-0", "py-0", "rounded-t"], [1, "w-full", "md:w-1/3", "p-6", "flex", "flex-col", "flex-grow", "flex-shrink"], [1, "flex-1", "bg-white", "rounded-t", "rounded-b-none", "overflow-hidden", "shadow"], ["href", "#", 1, "flex", "flex-wrap", "no-underline", "hover:no-underline"], [1, "w-full", "text-gray-600", "text-xs", "md:text-sm", "px-6"], [1, "w-full", "font-bold", "text-xl", "text-gray-800", "px-6"], [1, "text-gray-800", "text-base", "px-6", "mb-5"], [1, "flex-none", "mt-auto", "bg-white", "rounded-b", "rounded-t-none", "overflow-hidden", "shadow", "p-6"], [1, "flex", "items-center", "justify-start"], [1, "mx-auto", "lg:mx-0", "hover:underline", "gradient", "text-white", "font-bold", "rounded-full", "my-6", "py-4", "px-8", "shadow-lg", "focus:outline-none", "focus:shadow-outline", "transform", "transition", "hover:scale-105", "duration-300", "ease-in-out"], [1, "flex", "items-center", "justify-center"], [1, "flex", "items-center", "justify-end"], ["id", "sticky-footer", 1, "bg-dark", "text-center", "text-white-50"], [1, "container", "p-4", "pb-0"], [1, "mb-4"], ["href", "#!", "role", "button", 1, "btn", "btn-outline-light", "btn-floating", "m-1"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-google"], [1, "fab", "fa-instagram"], [1, "fab", "fa-linkedin-in"], [1, "fab", "fa-github"], [1, "text-center", "p-3", 2, "background-color", "rgba(0, 0, 0, 0.2)"]],
        template: function LandingpageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Document");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "link", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Prakrtik");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Login ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Sign up for free ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ol", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "li", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Plants give us oxygen for the lungs and for the soul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "If you plant a tree, you plant a life");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h1", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Our ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Features");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Customer UI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Easy to understand and detailed UI.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Read more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Easy Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Customer can order a product by just one click. After completion of Payment. It will redirect to order page. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Read more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Easy Payment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Payment done by adding thir card details.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Read more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Update Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Customer can update their profile after registration.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Read more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Seller Convenience");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "We provide add product functionality for the seller. So seller can easily post their product.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Read more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Receipt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "We provide receipt after confirmation of payment.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Read more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "section", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h2", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " About us ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Plants, simplified ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Easy to plug ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Order plants ready to be placed in your home, office or garden. Just Unpack, Relax and Enjoy your green buddies ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Action ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Secure Shipping ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Fresh & Safe ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " Our unique packaging will hold the plants in place and let the plant breathe so that it reaches you fresh without any mess. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "button", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Action ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Detailed Guidance ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " 24x7 Guidance ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Get detailed plant care instructions from the website as well as real-time guidance from our Garden Experts on Whatsapp. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "button", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Action ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "footer", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "section", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "i", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "i", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "i", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "i", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " Copyright \xA9 Prakrtik ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"]],
        styles: [".features[_ngcontent-%COMP%]   .box-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{\n  padding: 1rem .5rem;\n  outline:var(--outline);\n  outline-offset: -1rem;\n  box-shadow: var(--box-shadow);\n}\n\n.features[_ngcontent-%COMP%]   .box-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover{\n  outline: var(--outline-hover);\n  outline-offset: 0rem;\n}\n\n#features[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n  display: flex;\n  flex-direction: column;\n}\n\n\n\n#features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ff8c00;\n}\n\n#features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin-left: 3rem;\n}\n\n#features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n\n#sticky-footer[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\na[_ngcontent-%COMP%]:link {\n  text-decoration: none;\n}\n\n.container[_ngcontent-%COMP%]{\n  text-align: center;\n  font-size: larger;\n}\n\n.card-body[_ngcontent-%COMP%]:hover{\n  outline: var(--outline-hover);\n  outline-offset: 0rem; \n  color: blue;\n  background-color: gainsboro;\n  \n}\n\n.heading[_ngcontent-%COMP%]{\n  text-align: center;\n  padding: 1rem 0;\n  padding-bottom: 1rem;\n  font-size: 2.5rem;\n  color: rgb(122, 168, 191); \n}\n\n.heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  background: orange;\n  color: #fff;\n  display: inline-block;\n  padding: .2rem 3rem;\n  -webkit-clip-path: polygon(100% 0, 93% 50%, 100% 99%, 0% 100%, 7% 50%, 0% 0% );\n          clip-path: polygon(100% 0, 93% 50%, 100% 99%, 0% 100%, 7% 50%, 0% 0% );\n}\n\n.carousel[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.carousel.pointer-event[_ngcontent-%COMP%] {\n  touch-action: pan-y;\n}\n\n.carousel-inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n\n.carousel-inner[_ngcontent-%COMP%]::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n\n.carousel-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: transform 0.6s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmdwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBOzs7O0dBSUc7O0FBRUg7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsMkJBQTJCOztBQUU3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsOEVBQXNFO1VBQXRFLHNFQUFzRTtBQUN4RTs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0Isc0NBQXNDO0FBQ3hDIiwiZmlsZSI6ImxhbmRpbmdwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmZlYXR1cmVzIC5ib3gtY29udGFpbmVyIC5ib3h7XG4gIHBhZGRpbmc6IDFyZW0gLjVyZW07XG4gIG91dGxpbmU6dmFyKC0tb3V0bGluZSk7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMXJlbTtcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG59XG5cbi5mZWF0dXJlcyAuYm94LWNvbnRhaW5lciAuYm94OmhvdmVye1xuICBvdXRsaW5lOiB2YXIoLS1vdXRsaW5lLWhvdmVyKTtcbiAgb3V0bGluZS1vZmZzZXQ6IDByZW07XG59XG5cbiNmZWF0dXJlcyB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi8qICNmZWF0dXJlcyAuZmVhdHVyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSAqL1xuXG4jZmVhdHVyZXMgLmZlYXR1cmUgaSB7XG4gIGNvbG9yOiAjZmY4YzAwO1xufVxuXG4jZmVhdHVyZXMgLmZlYXR1cmUgZGl2IHtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XG59XG5cbiNmZWF0dXJlcyAuZmVhdHVyZSBkaXYgaDIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4jc3RpY2t5LWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG5hOmxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250YWluZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59IFxuXG4uY2FyZC1ib2R5OmhvdmVye1xuICBvdXRsaW5lOiB2YXIoLS1vdXRsaW5lLWhvdmVyKTtcbiAgb3V0bGluZS1vZmZzZXQ6IDByZW07IFxuICBjb2xvcjogYmx1ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xuICBcbn1cblxuLmhlYWRpbmd7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbSAwO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGNvbG9yOiByZ2IoMTIyLCAxNjgsIDE5MSk7IFxufVxuXG4uaGVhZGluZyBzcGFue1xuICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IC4ycmVtIDNyZW07XG4gIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAsIDkzJSA1MCUsIDEwMCUgOTklLCAwJSAxMDAlLCA3JSA1MCUsIDAlIDAlICk7XG59XG5cblxuLmNhcm91c2VsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2Fyb3VzZWwucG9pbnRlci1ldmVudCB7XG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XG59XG5cbi5jYXJvdXNlbC1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uY2Fyb3VzZWwtaW5uZXI6OmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xuICBjb250ZW50OiBcIlwiO1xufVxuXG5cbi5jYXJvdXNlbC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogLTEwMCU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xufSJdfQ== */", "", ".gradient[_ngcontent-%COMP%] {\n          background: linear-gradient(90deg, #d53369 0%, #daae51 100%);\n        }"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingpageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-landingpage',
            templateUrl: './landingpage.component.html',
            styleUrls: ['./landingpage.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'Learnzilla';
        }

        _createClass(AppComponent, [{
          key: "parentUpdate",
          value: function parentUpdate(sellerData) {
            this.sellerData = sellerData;
            console.warn(sellerData);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        inputs: {
          childMessage: "childMessage"
        },
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, {
          childMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Tcck":
    /*!***********************************************************************!*\
      !*** ./src/app/components/productdetails/productdetails.component.ts ***!
      \***********************************************************************/

    /*! exports provided: ProductdetailsComponent */

    /***/
    function Tcck(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductdetailsComponent", function () {
        return ProductdetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      var ProductdetailsComponent = /*#__PURE__*/function () {
        function ProductdetailsComponent(service) {
          _classCallCheck(this, ProductdetailsComponent);

          this.service = service;
          this.pageTitle = "plant details"; // this.details=this.service.getProductDetails();
        }

        _createClass(ProductdetailsComponent, [{
          key: "addToCart",
          value: function addToCart() {
            throw new Error('Method not implemented.');
          } //to call from service method

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.service.getProductDetails().subscribe(function (val) {
              return _this15.details = val;
            }); // console.warn(this.details);
          }
        }]);

        return ProductdetailsComponent;
      }();

      ProductdetailsComponent.ɵfac = function ProductdetailsComponent_Factory(t) {
        return new (t || ProductdetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      ProductdetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductdetailsComponent,
        selectors: [["app-productdetails"]],
        decls: 45,
        vars: 10,
        consts: [[1, "card"], [1, "card-header"], ["width", "auto", "alt", "Image", 3, "src"], [1, "card-body"], [2, "width", "30%", "float", "left"], ["matTooltip", "Price"], ["matTooltip", "Quantity of plant available"], ["matTooltip", "Plant name"], ["matTooltip", "Address of seller"], [2, "width", "50%", "float", "right"], ["matTooltip", "Toxicity"], ["matTooltip", "Size of plant"], ["matTooltip", "Sunlight requirement"], ["matTooltip", "Water requirement"], ["matTooltip", "Plant description"]],
        template: function ProductdetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Featured ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "currency_rupee");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "production_quantity_limits");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "yard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "location_on");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "fullscreen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "wb_sunny");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "water_drop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", ctx.details.productImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", ctx.details.productPrice, "/item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", ctx.details.productsAvailable, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", ctx.details.productName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", ctx.details.productAddress, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", ctx.details.toxicity, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", ctx.details.sizeOfProduct, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", ctx.details.sunlightRequirement, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", ctx.details.waterRequirement, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", ctx.details.description, "");
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltip"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0ZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductdetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-productdetails',
            templateUrl: './productdetails.component.html',
            styleUrls: ['./productdetails.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "UEPd":
    /*!*******************************************************!*\
      !*** ./src/app/components/seller/seller.component.ts ***!
      \*******************************************************/

    /*! exports provided: SellerComponent */

    /***/
    function UEPd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerComponent", function () {
        return SellerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_plantmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/plantmodel */
      "2wgd");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var src_app_services_notifier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/notifier.service */
      "8ZCa");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");

      var _c0 = ["stepper"];

      function SellerComponent_form_6_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Profile");
        }
      }

      function SellerComponent_form_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SellerComponent_form_6_ng_template_1_Template, 1, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Email Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Shop Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contact Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Quantity(.in No's)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Product Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Upload Product Images");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SellerComponent_form_6_Template_input_change_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onFileChanged($event.target.files);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Next ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.profileFormGroup);
        }
      }

      function SellerComponent_form_11_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Requirements");
        }
      }

      function SellerComponent_form_11_mat_option_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", day_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", day_r10, " ");
        }
      }

      function SellerComponent_form_11_mat_option_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var part_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", part_r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", part_r11, " ");
        }
      }

      function SellerComponent_form_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SellerComponent_form_11_ng_template_1_Template, 1, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Product Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-hint", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "*Enter in Numbers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Product Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Product Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-hint", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*Number of Days Old");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Water Requirement for the Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "--Select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SellerComponent_form_11_mat_option_25_Template, 2, 2, "mat-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sunlight Requirement for the Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "--Select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SellerComponent_form_11_mat_option_32_Template, 2, 2, "mat-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.profileFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, ctx_r1.productPrice));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("align", "end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("align", "end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.days);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.parts);
        }
      }

      function SellerComponent_form_16_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "You are almost done....");
        }
      }

      function SellerComponent_form_16_mat_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var size_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", size_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", size_r15, " ");
        }
      }

      function SellerComponent_form_16_mat_radio_button_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var result_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", result_r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", result_r16, " ");
        }
      }

      function SellerComponent_form_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SellerComponent_form_16_ng_template_1_Template, 1, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Size of the Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SellerComponent_form_16_mat_option_6_Template, 2, 2, "mat-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "State Whether the Product is toxic to pets, kids: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-radio-group", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SellerComponent_form_16_Template_mat_radio_group_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.toxicity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SellerComponent_form_16_mat_radio_button_10_Template, 2, 2, "mat-radio-button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Description of the Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "textarea", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-hint", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Max 255 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.profileFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.sizes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.toxicity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.results);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("align", "end");
        }
      }

      var SellerComponent = /*#__PURE__*/function () {
        function SellerComponent(fb, service, notifierService, router) {
          _classCallCheck(this, SellerComponent);

          this.fb = fb;
          this.service = service;
          this.notifierService = notifierService;
          this.router = router;
          this.productObject = new src_app_plantmodel__WEBPACK_IMPORTED_MODULE_2__["PlantModel"]();
          this.files = [];
          this.days = ['Once a week', 'Twice a week', 'Thrice a week', 'Everyday'];
          this.parts = ['Full sun - Plants need at least 6 hours of direct sun daily', 'Part sun – Plants thrive with between 3 and 6 hours of direct sun per day', 'Part shade – Plants require between 3 and 6 hours of sun per day, but need protection from intense mid-day sun', 'Full shade – Plants require less than 3 hours of direct sun per day'];
          this.sizes = ['Small', 'Medium', 'Big'];
          this.results = ['Yes', 'No'];
          this.urllink = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnbY-fLcMMqyKqZ8kBk9vTtboqfE_mvHAzbyoWvi39-Bz5P0LlBU7_FtB6iFCzGWM6rEo&usqp=CAU';
        }

        _createClass(SellerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.profileFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              ownerEmailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](window.localStorage.getItem('loginEmail'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              shopName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              ownerContactNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
              productsAvailable: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
              productAge: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              sizeOfProduct: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              waterRequirement: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              sunlightRequirement: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              toxicity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
            console.log(this.profileFormGroup.value);
          }
        }, {
          key: "OnSubmit",
          value: function OnSubmit() {
            var _this16 = this;

            console.log('formValue', this.profileFormGroup.value);
            this.productObject.productName = this.profileFormGroup.value.productName;
            this.productObject.shopName = this.profileFormGroup.value.shopName;
            this.productObject.productsAvailable = this.profileFormGroup.value.productsAvailable;
            this.productObject.ownerContactNo = this.profileFormGroup.value.ownerContactNo;
            this.productObject.productPrice = this.profileFormGroup.value.productPrice;
            this.productObject.ownerEmailId = this.profileFormGroup.value.ownerEmailId;
            this.productObject.productAddress = this.profileFormGroup.value.productAddress;
            this.productObject.productAge = this.profileFormGroup.value.productAge;
            this.productObject.sizeOfProduct = this.profileFormGroup.value.sizeOfProduct;
            this.productObject.waterRequirement = this.profileFormGroup.value.waterRequirement;
            this.productObject.sunlightRequirement = this.profileFormGroup.value.sunlightRequirement;
            this.productObject.toxicity = this.profileFormGroup.value.toxicity;
            this.productObject.description = this.profileFormGroup.value.description;
            this.productObject.productId = this.profileFormGroup.value.productId;
            this.service.savePlantModel(this.productObject, this.files[0]).subscribe(function (result) {
              _this16.notifierService.showNotification('Product Added Succesfully', 'OK');

              _this16.profileFormGroup.reset();

              _this16.router.navigate(['/sellerhomepage/home']);
            });
          } // image input

        }, {
          key: "onFileChanged",
          value: function onFileChanged(files) {
            this.prepareFilesList(files);
          }
        }, {
          key: "prepareFilesList",
          value: function prepareFilesList(files) {
            var _iterator4 = _createForOfIteratorHelper(files),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var item = _step4.value;
                item.progress = 0;
                this.files.push(item);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            this.uploadFilesSimulator(0);
          }
        }, {
          key: "uploadFilesSimulator",
          value: function uploadFilesSimulator(index) {
            var _this17 = this;

            setTimeout(function () {
              if (index === _this17.files.length) {
                return;
              } else {
                var progressInterval = setInterval(function () {
                  if (_this17.files[index].progress === 100) {
                    clearInterval(progressInterval);

                    _this17.uploadFilesSimulator(index + 1);
                  } else {
                    _this17.files[index].progress += 5;
                  }
                }, 200);
              }
            }, 1000);
          }
        }, {
          key: "formatBytes",
          value: function formatBytes(bytes, decimals) {
            if (bytes === 0) {
              return '0 Bytes';
            }

            var k = 1024;
            var dm = decimals <= 0 ? 0 : decimals || 2;
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
          }
        }]);

        return SellerComponent;
      }();

      SellerComponent.ɵfac = function SellerComponent_Factory(t) {
        return new (t || SellerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notifier_service__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      SellerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SellerComponent,
        selectors: [["app-seller"]],
        viewQuery: function SellerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
          }
        },
        decls: 22,
        vars: 6,
        consts: [[1, "container-fluid"], ["completed", "false", 3, "stepControl"], [1, "profile"], [3, "formGroup", 4, "ngIf"], ["mat-raised-button", "", "id", "back", "color", "primary", "matStepperPrevious", "", 2, "margin-left", "5px"], ["mat-raised-button", "", "color", "primary", 1, "submit", 2, "margin-left", "530px", 3, "click"], [3, "formGroup"], ["matStepLabel", ""], ["appearance", "outline"], ["matInput", "", "formControlName", "ownerEmailId", "required", "", 1, "plantId", "w-100"], ["matInput", "", "formControlName", "shopName", "required", "", 1, "productId", "w-100"], ["matInput", "", "formControlName", "ownerContactNo", "required", "", 1, "productId", "w-100"], ["matInput", "", "formControlName", "productsAvailable", "required", "", 1, "plantId", "w-100"], ["matInput", "", "formControlName", "productName", "required", ""], [1, "img_container"], ["for", "choose-file", 2, "color", "#089975"], ["type", "file", "id", "choose-file", "size", "80", "multiple", "", "formControlName", "productImage", "required", "", 3, "change"], ["fileInput", ""], ["mat-raised-button", "", "color", "primary", "matStepperNext", "", 2, "margin-left", "600px"], ["matInput", "", "type", "number", "formControlName", "productPrice", "required", "", 3, "ngModel"], [3, "align"], ["appearance", "outline", 2, "margin-top", "7px"], ["matInput", "", "formControlName", "productAddress", "required", ""], ["appearance", "outline", 1, "productage"], [2, "width", "50%"], ["matInput", "", "formControlName", "productAge", "type", "number", "required", ""], ["for", "waterRequirement"], ["name", "waterRequirement", "id", "waterRequirement", "formControlName", "waterRequirement", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "sunlightRequirement"], ["name", "sunlightRequirement", "id", "sunlightRequirement", "formControlName", "sunlightRequirement", "required", ""], ["mat-raised-button", "", "color", "primary", "id", "previous", "matStepperPrevious", "", 2, "margin-left", "5px"], ["mat-raised-button", "", "id", "next", "color", "primary", "matStepperNext", "", 2, "margin-left", "540px"], [3, "value"], ["for", "sizeOfPlant"], ["name", "sizeOfProduct", "id", "sizeOfProduct", "formControlName", "sizeOfProduct", "required", ""], ["id", "toxicity"], ["aria-labelledby", "toxicity", "formControlName", "toxicity", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["class", "example-radio-button block", 3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "rows", "10", "col", "50", "formControlName", "description", "required", ""], [1, "example-radio-button", "block", 3, "value"]],
        template: function SellerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-horizontal-stepper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-step", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profile of the Plants");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SellerComponent_form_6_Template, 34, 1, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-step", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Requirements of Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SellerComponent_form_11_Template, 38, 8, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-step", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SellerComponent_form_16_Template, 17, 5, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SellerComponent_Template_button_click_20_listener() {
              return ctx.OnSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileFormGroup);
          }
        },
        directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStep"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperPrevious"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperNext"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatHint"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioButton"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]],
        styles: ["mat-card[_ngcontent-%COMP%]{\n    width:800px;\n    height:800px;\n    margin-left: 40px;\n    margin-right:50px;\n    border-radius: 20px;\n    margin-top:15px;\n    display:flex;\n    justify-content: flex-start;\n  }\n  .example-radio-button[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .profile[_ngcontent-%COMP%]{\n    display:flex;\n    border-radius:20px ;\n    flex-direction: column;\n    width:700px;\n  \n    height:650px;\n    justify-content: flex-start;\n  \n  }\n  mat-form-field[_ngcontent-%COMP%]{\n    width:100%;\n    margin-top: 10px;\n  }\n  .Image[_ngcontent-%COMP%]{\n    background-color: rgb(255,255,255);\n    border: solid 4px black;\n    border-radius: 10px;\n    color:black;\n    padding:10px 20px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size:16px;\n    font-weight:bold;\n    margin-top:6px;\n    margin-bottom: 6px;\n    cursor:pointer;\n    width:150px;\n    height:45px\n  }\n  .img_container[_ngcontent-%COMP%]{\n  \n    display: flex;\n    flex-direction: column;\n  }\n  mat-card-title[_ngcontent-%COMP%]{\n    text-align: center;\n  }\n  .block[_ngcontent-%COMP%]{\n    display: block;\n  }\n  .form-control[_ngcontent-%COMP%]{\n    margin-top:5px;\n  \n  }\n  label[_ngcontent-%COMP%]{\n    margin-top:20px;\n  }\n  textarea[_ngcontent-%COMP%]{\n    margin-top:25px;\n  }\n  #Toxicity[_ngcontent-%COMP%]{\n    font-weight: bold;\n  }\n  mat-card-title[_ngcontent-%COMP%]{\n    background-color: #f6d8ac;\n    height:50px;\n    padding: 15px;\n  }\n  .container-fluid[_ngcontent-%COMP%]{\n\n   display: flex;\n   justify-content: center;\n   \n  }\n  .submit[_ngcontent-%COMP%]{\n    margin-left:450px;\n  }\n  mat-horizontal-stepper[_ngcontent-%COMP%]{\n \n    margin-top: 70px;\n    margin-bottom: 10px;\n    background-color: rgb(241, 235, 235);\n  \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGxlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixXQUFXOztJQUVYLFlBQVk7SUFDWiwyQkFBMkI7O0VBRTdCO0VBRUE7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYO0VBQ0Y7RUFDQTs7SUFFRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCO0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFFQTtJQUNFLGNBQWM7O0VBRWhCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBSUE7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFHQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsYUFBYTtFQUNmO0VBR0E7O0dBRUMsYUFBYTtHQUNiLHVCQUF1Qjs7RUFFeEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBOztJQUVFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsb0NBQW9DOztFQUV0QyIsImZpbGUiOiJzZWxsZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xuICAgIHdpZHRoOjgwMHB4O1xuICAgIGhlaWdodDo4MDBweDtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6NTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6MTVweDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB9XG4gIC5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cbiAgLnByb2ZpbGV7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6MjBweCA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDo3MDBweDtcbiAgXG4gICAgaGVpZ2h0OjY1MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgXG4gIH1cbiAgXG4gIG1hdC1mb3JtLWZpZWxke1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAuSW1hZ2V7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwyNTUsMjU1KTtcbiAgICBib3JkZXI6IHNvbGlkIDRweCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIHBhZGRpbmc6MTBweCAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgbWFyZ2luLXRvcDo2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIHdpZHRoOjE1MHB4O1xuICAgIGhlaWdodDo0NXB4XG4gIH1cbiAgLmltZ19jb250YWluZXJ7XG4gIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgbWF0LWNhcmQtdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5ibG9ja3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLmZvcm0tY29udHJvbHtcbiAgICBtYXJnaW4tdG9wOjVweDtcbiAgXG4gIH1cbiAgbGFiZWx7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICB9XG4gIFxuICBcbiAgXG4gIHRleHRhcmVhe1xuICAgIG1hcmdpbi10b3A6MjVweDtcbiAgfVxuICAjVG94aWNpdHl7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgXG4gIFxuICBtYXQtY2FyZC10aXRsZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZkOGFjO1xuICAgIGhlaWdodDo1MHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgXG4gIFxuICAuY29udGFpbmVyLWZsdWlke1xuXG4gICBkaXNwbGF5OiBmbGV4O1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICBcbiAgfVxuICAuc3VibWl0e1xuICAgIG1hcmdpbi1sZWZ0OjQ1MHB4O1xuICB9XG4gIG1hdC1ob3Jpem9udGFsLXN0ZXBwZXJ7XG4gXG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDIzNSwgMjM1KTtcbiAgXG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SellerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-seller',
            templateUrl: './seller.component.html',
            styleUrls: ['./seller.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: src_app_services_notifier_service__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, {
          stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stepper']
          }]
        });
      })();
      /***/

    },

    /***/
    "XXEo":
    /*!*************************************************!*\
      !*** ./src/app/services/login/login.service.ts ***!
      \*************************************************/

    /*! exports provided: LoginService */

    /***/
    function XXEo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginService", function () {
        return LoginService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var LoginService = /*#__PURE__*/function () {
        function LoginService(httpClient) {
          _classCallCheck(this, LoginService);

          this.httpClient = httpClient; // baseUrl = "http://localhost:8080"

          this.baseUrl = "https://prakritik.stackroute.io";
        }

        _createClass(LoginService, [{
          key: "loginUser",
          value: function loginUser(user) {
            console.log("user", user);
            return this.httpClient.post(this.baseUrl + "/authentication-service/validate", user);
          }
        }, {
          key: "validate",
          value: function validate(user) {
            return this.httpClient.get(this.baseUrl + "/authentication-service/validate", user);
          }
        }]);

        return LoginService;
      }();

      LoginService.ɵfac = function LoginService_Factory(t) {
        return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoginService,
        factory: LoginService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/home/home.component */
      "BuFo");
      /* harmony import */


      var _home_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./home.service */
      "Ol7V");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      "hrlM");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "LmEr");
      /* harmony import */


      var _components_sellernavbar_sellernavbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/sellernavbar/sellernavbar.component */
      "OWaM");
      /* harmony import */


      var _components_sellerhomepage_sellerhomepage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/sellerhomepage/sellerhomepage.component */
      "fDP4");
      /* harmony import */


      var _components_sellerorderlist_sellerorderlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/sellerorderlist/sellerorderlist.component */
      "IeRB");
      /* harmony import */


      var _components_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/productdetails/productdetails.component */
      "Tcck");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _components_seller_seller_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./components/seller/seller.component */
      "UEPd");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _components_profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./components/profile-user/profile-user.component */
      "EjdT");
      /* harmony import */


      var _components_updateproductlist_updateproductlist_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./components/updateproductlist/updateproductlist.component */
      "p0Ii");
      /* harmony import */


      var _customerhomepage_customerhomepage_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./customerhomepage/customerhomepage.component */
      "rI5D");
      /* harmony import */


      var _components_customerorderlist_customerorderlist_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./components/customerorderlist/customerorderlist.component */
      "ujPY");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _components_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./components/register-user/register-user.component */
      "4Xht");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _components_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./components/userprofile/userprofile.component */
      "P1Wc");
      /* harmony import */


      var _components_cusproductdetails_cusproductdetails_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./components/cusproductdetails/cusproductdetails.component */
      "qaH8");
      /* harmony import */


      var _components_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./components/landingpage/landingpage.component */
      "RwY5");
      /* harmony import */


      var _search_by_name_pipe__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./search-by-name.pipe */
      "L5rU");
      /* harmony import */


      var _components_seedslist_seedslist_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ./components/seedslist/seedslist.component */
      "0lyN");
      /* harmony import */


      var _components_medicines_medicines_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ./components/medicines/medicines.component */
      "OHJo");
      /* harmony import */


      var _components_updateseeds_updateseeds_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ./components/updateseeds/updateseeds.component */
      "Jc6U");
      /* harmony import */


      var _components_updatemedicines_updatemedicines_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ./components/updatemedicines/updatemedicines.component */
      "Ninj");
      /* harmony import */


      var _product_image_product_image_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ./product-image/product-image.component */
      "FjYH"); //import {MatGridListModule} from '@angular/material/grid-list';
      //import {NgxPaginationModule} from 'ngx-pagination';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_home_service__WEBPACK_IMPORTED_MODULE_7__["HomeService"]],
        imports: [[_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], //MatGridListModule,
        // NgxPaginationModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_37__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__["MatMenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_39__["MatGridListModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_43__["MatNativeDateModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"] // NgxPaginationModule, 
        ]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _components_sellernavbar_sellernavbar_component__WEBPACK_IMPORTED_MODULE_10__["SellernavbarComponent"], _components_sellerhomepage_sellerhomepage_component__WEBPACK_IMPORTED_MODULE_11__["SellerhomepageComponent"], _components_seller_seller_component__WEBPACK_IMPORTED_MODULE_30__["SellerComponent"], _components_sellerorderlist_sellerorderlist_component__WEBPACK_IMPORTED_MODULE_12__["SellerorderlistComponent"], _components_profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_33__["ProfileUserComponent"], _components_customerorderlist_customerorderlist_component__WEBPACK_IMPORTED_MODULE_36__["CustomerorderlistComponent"], _components_updateproductlist_updateproductlist_component__WEBPACK_IMPORTED_MODULE_34__["UpdateproductlistComponent"], _customerhomepage_customerhomepage_component__WEBPACK_IMPORTED_MODULE_35__["CustomerhomepageComponent"], _components_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_13__["ProductdetailsComponent"], _components_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_42__["RegisterUserComponent"], _components_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_44__["UserprofileComponent"], _components_cusproductdetails_cusproductdetails_component__WEBPACK_IMPORTED_MODULE_45__["CusproductdetailsComponent"], _components_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_46__["LandingpageComponent"], _search_by_name_pipe__WEBPACK_IMPORTED_MODULE_47__["SearchByNamePipe"], _components_seedslist_seedslist_component__WEBPACK_IMPORTED_MODULE_48__["SeedslistComponent"], _components_medicines_medicines_component__WEBPACK_IMPORTED_MODULE_49__["MedicinesComponent"], _components_updateseeds_updateseeds_component__WEBPACK_IMPORTED_MODULE_50__["UpdateseedsComponent"], _components_updatemedicines_updatemedicines_component__WEBPACK_IMPORTED_MODULE_51__["UpdatemedicinesComponent"], _product_image_product_image_component__WEBPACK_IMPORTED_MODULE_52__["ProductImageComponent"]],
          imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], //MatGridListModule,
          // NgxPaginationModule,
          _angular_material_list__WEBPACK_IMPORTED_MODULE_37__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__["MatMenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_39__["MatGridListModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_43__["MatNativeDateModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"] // NgxPaginationModule, 
          ]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _components_sellernavbar_sellernavbar_component__WEBPACK_IMPORTED_MODULE_10__["SellernavbarComponent"], _components_sellerhomepage_sellerhomepage_component__WEBPACK_IMPORTED_MODULE_11__["SellerhomepageComponent"], _components_seller_seller_component__WEBPACK_IMPORTED_MODULE_30__["SellerComponent"], _components_sellerorderlist_sellerorderlist_component__WEBPACK_IMPORTED_MODULE_12__["SellerorderlistComponent"], _components_profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_33__["ProfileUserComponent"], _components_customerorderlist_customerorderlist_component__WEBPACK_IMPORTED_MODULE_36__["CustomerorderlistComponent"], _components_updateproductlist_updateproductlist_component__WEBPACK_IMPORTED_MODULE_34__["UpdateproductlistComponent"], _customerhomepage_customerhomepage_component__WEBPACK_IMPORTED_MODULE_35__["CustomerhomepageComponent"], _components_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_13__["ProductdetailsComponent"], _components_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_42__["RegisterUserComponent"], _components_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_44__["UserprofileComponent"], _components_cusproductdetails_cusproductdetails_component__WEBPACK_IMPORTED_MODULE_45__["CusproductdetailsComponent"], _components_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_46__["LandingpageComponent"], _search_by_name_pipe__WEBPACK_IMPORTED_MODULE_47__["SearchByNamePipe"], _components_seedslist_seedslist_component__WEBPACK_IMPORTED_MODULE_48__["SeedslistComponent"], _components_medicines_medicines_component__WEBPACK_IMPORTED_MODULE_49__["MedicinesComponent"], _components_updateseeds_updateseeds_component__WEBPACK_IMPORTED_MODULE_50__["UpdateseedsComponent"], _components_updatemedicines_updatemedicines_component__WEBPACK_IMPORTED_MODULE_51__["UpdatemedicinesComponent"], _product_image_product_image_component__WEBPACK_IMPORTED_MODULE_52__["ProductImageComponent"]],
            imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButtonModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_24__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], //MatGridListModule,
            // NgxPaginationModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_37__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_38__["MatMenuModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_39__["MatGridListModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_43__["MatNativeDateModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"] // NgxPaginationModule, 
            ],
            providers: [_home_service__WEBPACK_IMPORTED_MODULE_7__["HomeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "cKIH":
    /*!******************************************!*\
      !*** ./src/app/models/login/user-dao.ts ***!
      \******************************************/

    /*! exports provided: UserDao */

    /***/
    function cKIH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDao", function () {
        return UserDao;
      });

      var UserDao = function UserDao() {
        _classCallCheck(this, UserDao);
      };
      /***/

    },

    /***/
    "fDP4":
    /*!***********************************************************************!*\
      !*** ./src/app/components/sellerhomepage/sellerhomepage.component.ts ***!
      \***********************************************************************/

    /*! exports provided: SellerhomepageComponent */

    /***/
    function fDP4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellerhomepageComponent", function () {
        return SellerhomepageComponent;
      });
      /* harmony import */


      var _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../productdetails/productdetails.component */
      "Tcck");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var src_app_services_notifier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/notifier.service */
      "8ZCa");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _product_image_product_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../product-image/product-image.component */
      "FjYH");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function SellerhomepageComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-product-image", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Name of Product ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Quantity in No's ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Product Price ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Product Age ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Product Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Size Of Product ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SellerhomepageComponent_div_4_Template_button_click_35_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var plantmodel_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.deleteProduct(plantmodel_r1.productId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SellerhomepageComponent_div_4_Template_button_click_38_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var plantmodel_r1 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.openDialog(plantmodel_r1.productId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "info");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var plantmodel_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("plantmodel", plantmodel_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", plantmodel_r1 == null ? null : plantmodel_r1.productName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", plantmodel_r1 == null ? null : plantmodel_r1.productsAvailable, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", plantmodel_r1 == null ? null : plantmodel_r1.productPrice, "/item ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", plantmodel_r1 == null ? null : plantmodel_r1.productAge, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", plantmodel_r1 == null ? null : plantmodel_r1.productAddress, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", plantmodel_r1 == null ? null : plantmodel_r1.sizeOfProduct, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/sellerhomepage/seller/update/", plantmodel_r1.productId, "");
        }
      }

      var SellerhomepageComponent = /*#__PURE__*/function () {
        function SellerhomepageComponent(service, notifierService, router, route, dialog, http) {
          _classCallCheck(this, SellerhomepageComponent);

          this.service = service;
          this.notifierService = notifierService;
          this.router = router;
          this.route = route;
          this.dialog = dialog;
          this.http = http;
          this.ownerEmailId = window.localStorage.getItem('loginEmail');
          this.displayedColumns = ['productsAvailable', 'productName', 'productPrice', 'productAddress', 'productAge', 'sizeOfProduct', 'action'];
          this.plantmodels = [];
        }

        _createClass(SellerhomepageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllProducts(this.ownerEmailId);
          }
        }, {
          key: "getAllProducts",
          value: function getAllProducts(ownerEmailId) {
            var _this18 = this;

            this.service.getProductListByownerEmailID(ownerEmailId).subscribe(function (res) {
              _this18.plantmodels = res;
              console.log(_this18.plantmodels);
            });
          }
        }, {
          key: "deleteProduct",
          value: function deleteProduct(productId) {
            var _this19 = this;

            this.service.deleteProduct(productId).subscribe(function () {
              _this19.notifierService.showNotification('Product Deleted Succesfully', 'OK');

              _this19.getAllProducts(_this19.ownerEmailId); //,error:()=>{
              //    this.notifierService.showNotification('error while deleting the record','OK');
              //  }

            });
            location.reload();
          } // deleteProduct(productId:string){
          //   this.http.delete("http://localhost:8082/api/v1//delete/"+productId).subscribe(()=>{
          //     this.notifierService.showNotification('Product deleted successfully','ok');
          //   });
          // }
          // display = false;

        }, {
          key: "openDialog",
          value: function openDialog(productId) {
            this.service.getProductById(productId);
            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
            dialogConfig.disableClose = false;
            dialogConfig.autoFocus = true; // dialogConfig.maxHeight='90vh';

            dialogConfig.maxWidth = '60vh';
            this.dialog.open(_productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_0__["ProductdetailsComponent"], dialogConfig);
          }
        }]);

        return SellerhomepageComponent;
      }();

      SellerhomepageComponent.ɵfac = function SellerhomepageComponent_Factory(t) {
        return new (t || SellerhomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_notifier_service__WEBPACK_IMPORTED_MODULE_6__["NotifierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]));
      };

      SellerhomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SellerhomepageComponent,
        selectors: [["app-sellerhomepage"]],
        viewQuery: function SellerhomepageComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          }
        },
        decls: 5,
        vars: 1,
        consts: [["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "container", 2, "width", "100%"], [1, "row"], [1, "col"], [2, "width", "50px", "height", "50px", 3, "plantmodel"], [2, "font-weight", "bold", "font-size", "medium", "padding-bottom", "16px", "margin-top", "5px"], [1, "col-2"], [2, "font-weight", "bold", "font-size", "medium", "padding-bottom", "25px", "margin-top", "5px"], ["mat-icon-button", "", "color", "primary", 3, "routerLink"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["mat-icon-button", "", "color", "accent", "mat-raised-button", "", 3, "click"]],
        template: function SellerhomepageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "List of Your Products");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SellerhomepageComponent_div_4_Template, 41, 8, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.plantmodels);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _product_image_product_image_component__WEBPACK_IMPORTED_MODULE_11__["ProductImageComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"]],
        styles: [".container[_ngcontent-%COMP%]{\n    width:100%;\n    \n  }\n\n\n  mat-card[_ngcontent-%COMP%]{\n    height:-moz-fit-content;\n    height:fit-content;\n    border-radius: 15px;\n    margin: 70px;\n    padding-bottom: 40px;\n    background-color: #dedcdc;\n  \n   \n  }\n\n\n  mat-card-title[_ngcontent-%COMP%]{\n    text-align: center;\n  }\n\n\n  .card[_ngcontent-%COMP%] {\n   \n    width: 83%;\n    margin-left: 1%;\n    margin-top: 1%;\n    border: 1px solid #cccccc;\n    display: inline-block;\n    margin-left: 100px;\n}\n\n\n  .img[_ngcontent-%COMP%]{\n  width:50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGxlcmhvbWVwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVOztFQUVaOzs7RUFHQTtJQUNFLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIseUJBQXlCOzs7RUFHM0I7OztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOzs7RUFLRjs7SUFFSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7O0VBS0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkIiwiZmlsZSI6InNlbGxlcmhvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIHdpZHRoOjEwMCU7XG4gICAgXG4gIH1cblxuXG4gIG1hdC1jYXJke1xuICAgIGhlaWdodDpmaXQtY29udGVudDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbjogNzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkY2RjO1xuICBcbiAgIFxuICB9XG4gXG4gIG1hdC1jYXJkLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuIFxuXG5cblxuLmNhcmQge1xuICAgXG4gICAgd2lkdGg6IDgzJTtcbiAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgbWFyZ2luLXRvcDogMSU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuXG5cblxuXG4uaW1ne1xuICB3aWR0aDo1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SellerhomepageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-sellerhomepage',
            templateUrl: './sellerhomepage.component.html',
            styleUrls: ['./sellerhomepage.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
          }, {
            type: src_app_services_notifier_service__WEBPACK_IMPORTED_MODULE_6__["NotifierService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
          }],
          sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "hrlM":
    /*!*******************************************************!*\
      !*** ./src/app/components/navbar/navbar.component.ts ***!
      \*******************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function hrlM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");

      function NavbarComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavbarComponent_span_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Order List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function NavbarComponent_span_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          rotated: a0
        };
      };

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(service, httpClient, route) {
          _classCallCheck(this, NavbarComponent);

          this.service = service;
          this.httpClient = httpClient;
          this.route = route;
          this.isExpanded = false;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.emailid = window.localStorage.getItem('loginEmail');
            console.log(this.emailid);
          }
        }, {
          key: "LogOut",
          value: function LogOut() {
            this.route.navigate(['/register']);
            localStorage.clear();
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 41,
        vars: 8,
        consts: [["autosize", ""], ["mode", "side", "opened", "isExpanded"], ["sidenav", ""], ["mat-button", "", 2, "margin-top", "15px", 3, "click"], ["mat-list-icon", "", 1, "chevron-button", 3, "ngClass"], ["mat-button", "", "routerLink", "/navbar/customerhomepage", 2, "margin-top", "30px"], ["mat-list-icon", ""], ["class", "menu-item", 4, "ngIf"], ["mat-button", "", "routerLink", "/navbar/customerorderlist", 2, "margin-top", "16px"], ["mat-button", "", "routerLink", "/navbar/Editprofile", 2, "margin-top", "16px"], [1, "example-spacer"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [2, "position", "relative", "right", "5"], [2, "margin-right", "160px"], [1, "card-header", 2, "font-size", "small"], ["menu", "matMenu"], ["mat-menu-item", "", "routerLink", "/navbar/profile"], ["mat-menu-item", "", 3, "click"], [1, "menu-item"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_3_listener() {
              return ctx.isExpanded = !ctx.isExpanded;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_span_10_Template, 2, 0, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "supervisor_account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavbarComponent_span_15_Template, 2, 0, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "create");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavbarComponent_span_20_Template, 2, 0, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-sidenav-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Prakritik");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "account_circle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-menu", null, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "My Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_38_listener() {
              return ctx.LogOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Log Out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.isExpanded));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.emailid);
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListIconCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbar"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\nmat-toolbar[_ngcontent-%COMP%]{\n  \n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgb(3,3,41);\n  position: fixed ;\n  z-index: 5;\n color: white;\n}\n\n\n\n.menu-button[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: column;\n \n}\n.card-header[_ngcontent-%COMP%]{\n  padding-left:0px;\n}\nmat-sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n    \n}\n.chevron-button[_ngcontent-%COMP%] {\n        transition: 300ms ease-in-out;\n        transform: rotate(0deg);\n      }\n.chevron-button.rotated[_ngcontent-%COMP%] {\n        transform: rotate(180deg);\n      }\nmat-sidenav-content[_ngcontent-%COMP%]{\n  \n  background-image: url(https://static.vecteezy.com/system/resources/previews/007/360/354/non_2x/close-up-of-nature-view-green-leaf-on-blurred-greenery-background-under-sunlight-with-bokeh-and-copy-space-using-as-background-natural-plants-landscape-ecology-wallpaper-concept-free-photo.jpg);\n\n  background-repeat: no-repeat;\n  background-attachment: fixed;\nbackground-size: cover;\noverflow: auto;\nposition:sticky;\n\n}\nmat-sidenav[_ngcontent-%COMP%]{\nbackground-color: rgb(3, 3, 41);\ncolor: white;\ndisplay: flex;\nflex-direction: column;\n\npadding-left:10px;\npadding-right: 5px;\npadding-bottom: 16px;\n\n}\nbutton[_ngcontent-%COMP%]:hover{\nbackground-color: black;\nborder-radius: 5px;\n\n}\n.menu-item[_ngcontent-%COMP%]{\nmargin-left:5px;\nwidth: 150px;\ncolor: white;\n}\nmat-icon[_ngcontent-%COMP%]{\ncolor: white;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  background-color:;\n  border: none;\n  border-bottom: 1px solid white;\n  width: 450px;\n  border-radius: 25px;\n}\n.input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: crimson;\n}\n.input[_ngcontent-%COMP%]::placeholder {\n  color: crimson;\n}\n.btn-search[_ngcontent-%COMP%] {\n  box-shadow: none;\n  outline: none;\n}\ninput[type=\"search\"][_ngcontent-%COMP%] {\n  color: #411530;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  background-color: white;\n  box-shadow: none;\n  border-bottom: 1px solid white;\n  width: 450px;\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLFVBQVU7Q0FDWCxZQUFZO0FBQ2I7QUFDQTs7Ozs7Ozs7OztFQVVFO0FBRUY7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFFSDs7Ozs7Ozs7O0VBU0U7QUFDRjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7O0FBRXhCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7O0FBRWQ7QUFHQTtRQUNRLDZCQUE2QjtRQUM3Qix1QkFBdUI7TUFDekI7QUFFTjtRQUNRLHlCQUF5QjtNQUMzQjtBQUNOO0VBQ0UsK0JBQStCO0VBQy9CLGdTQUFnUzs7RUFFaFMsNEJBQTRCO0VBQzVCLDRCQUE0QjtBQUM5QixzQkFBc0I7QUFDdEIsY0FBYztBQUNkLGVBQWU7O0FBRWY7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixZQUFZO0FBQ1osYUFBYTtBQUNiLHNCQUFzQjs7QUFFdEIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixvQkFBb0I7O0FBRXBCO0FBRUE7QUFDQSx1QkFBdUI7QUFDdkIsa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0EsZUFBZTtBQUNmLFlBQVk7QUFDWixZQUFZO0FBQ1o7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUVBLGdDQUFnQztBQUNoQztFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFGQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUdFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHVCQUF1QjtFQUV2QixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixtQkFBbUI7QUFDckIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxubWF0LXRvb2xiYXJ7XG4gIFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzLDMsNDEpO1xuICBwb3NpdGlvbjogZml4ZWQgO1xuICB6LWluZGV4OiA1O1xuIGNvbG9yOiB3aGl0ZTtcbn1cbi8qIG1hdC1zaWRlbmF2e1xubWFyZ2luOjE2cHg7XG53aWR0aDoyMDBweDtcbmNvbG9yOndoaXRlO1xuYm9yZGVyLXJpZ2h0OiBub25lO1xuYmFja2dyb3VuZC1jb2xvcjogIzA1MDQ0ODtcbmJvcmRlci1yYWRpdXM6IDEwcHg7XG5wYWRkaW5nOjE2cHg7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5oZWlnaHQ6ODAwcHg7XG59Ki9cblxuLyogLmNvbnRlbnR7XG4gXG4gIG1hcmdpbjogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjN2U5YTlhO1xuICBjb2xvcjojN2U5YTlhO1xuICBib3JkZXItcmFkaXVzOjEwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKGh0dHBzOi8vc3RhdGljLnZlY3RlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3ByZXZpZXdzLzAwNy8zNjAvMzU0L25vbl8yeC9jbG9zZS11cC1vZi1uYXR1cmUtdmlldy1ncmVlbi1sZWFmLW9uLWJsdXJyZWQtZ3JlZW5lcnktYmFja2dyb3VuZC11bmRlci1zdW5saWdodC13aXRoLWJva2VoLWFuZC1jb3B5LXNwYWNlLXVzaW5nLWFzLWJhY2tncm91bmQtbmF0dXJhbC1wbGFudHMtbGFuZHNjYXBlLWVjb2xvZ3ktd2FsbHBhcGVyLWNvbmNlcHQtZnJlZS1waG90by5qcGcpOyBcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSAqL1xuXG4vKiBtYXQtc2lkZW5hdi1jb250YWluZXJ7XG5oZWlnaHQ6OTAwcHg7XG59XG5cbi5hdmF0YXJ7XG4gIHdpZHRoOjEzMHB4O1xuICBoZWlnaHQ6MTMwcHg7XG4gIG1hcmdpbjoxMHB4O1xuXG59Ki9cbi5tZW51LWJ1dHRvbntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiBcbn1cblxuLmNhcmQtaGVhZGVye1xuICBwYWRkaW5nLWxlZnQ6MHB4O1xufSBcblxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICAgIFxufVxuXG5cbi5jaGV2cm9uLWJ1dHRvbiB7XG4gICAgICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIH1cblxuLmNoZXZyb24tYnV0dG9uLnJvdGF0ZWQge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgfVxubWF0LXNpZGVuYXYtY29udGVudHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzQyNjI4MzsgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vc3RhdGljLnZlY3RlZXp5LmNvbS9zeXN0ZW0vcmVzb3VyY2VzL3ByZXZpZXdzLzAwNy8zNjAvMzU0L25vbl8yeC9jbG9zZS11cC1vZi1uYXR1cmUtdmlldy1ncmVlbi1sZWFmLW9uLWJsdXJyZWQtZ3JlZW5lcnktYmFja2dyb3VuZC11bmRlci1zdW5saWdodC13aXRoLWJva2VoLWFuZC1jb3B5LXNwYWNlLXVzaW5nLWFzLWJhY2tncm91bmQtbmF0dXJhbC1wbGFudHMtbGFuZHNjYXBlLWVjb2xvZ3ktd2FsbHBhcGVyLWNvbmNlcHQtZnJlZS1waG90by5qcGcpO1xuXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xub3ZlcmZsb3c6IGF1dG87XG5wb3NpdGlvbjpzdGlja3k7XG5cbn1cbm1hdC1zaWRlbmF2e1xuYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDMsIDQxKTtcbmNvbG9yOiB3aGl0ZTtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5wYWRkaW5nLWxlZnQ6MTBweDtcbnBhZGRpbmctcmlnaHQ6IDVweDtcbnBhZGRpbmctYm90dG9tOiAxNnB4O1xuXG59XG5cbmJ1dHRvbjpob3ZlcntcbmJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuYm9yZGVyLXJhZGl1czogNXB4O1xuXG59XG4ubWVudS1pdGVte1xubWFyZ2luLWxlZnQ6NXB4O1xud2lkdGg6IDE1MHB4O1xuY29sb3I6IHdoaXRlO1xufVxubWF0LWljb257XG5jb2xvcjogd2hpdGU7XG59XG5cbi8qIGhlcmUgc3RhcnQgZm9yIHNlYXJjaCBidXR0b24qL1xuLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgd2lkdGg6IDQ1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGNyaW1zb247XG59XG5cbi5idG4tc2VhcmNoIHtcbiAgXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XG4gIGNvbG9yOiAjNDExNTMwO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICB3aWR0aDogNDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "mzw/":
    /*!*******************************************************!*\
      !*** ./src/app/services/register/register.service.ts ***!
      \*******************************************************/

    /*! exports provided: RegisterService */

    /***/
    function mzw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterService", function () {
        return RegisterService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var RegisterService = /*#__PURE__*/function () {
        function RegisterService(httpClient) {
          _classCallCheck(this, RegisterService);

          this.httpClient = httpClient; // baseUrl = "http://localhost:8080" 

          this.baseUrl = "https://prakritik.stackroute.io";
        }

        _createClass(RegisterService, [{
          key: "registerUser",
          value: function registerUser(user) {
            console.log(user);
            return this.httpClient.post(this.baseUrl + "/registration-service/api/v1/registeruser", user);
          }
        }, {
          key: "registerUserMySQL",
          value: function registerUserMySQL(user) {
            console.log(user);
            return this.httpClient.post(this.baseUrl + "/authentication-service/create", user);
          }
        }]);

        return RegisterService;
      }();

      RegisterService.ɵfac = function RegisterService_Factory(t) {
        return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      RegisterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RegisterService,
        factory: RegisterService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "p0Ii":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/updateproductlist/updateproductlist.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: UpdateproductlistComponent */

    /***/
    function p0Ii(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateproductlistComponent", function () {
        return UpdateproductlistComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_plantmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/plantmodel */
      "2wgd");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var src_app_services_notifier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/notifier.service */
      "8ZCa");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");

      var _c0 = ["stepper"];

      function UpdateproductlistComponent_form_6_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Profile");
        }
      }

      function UpdateproductlistComponent_form_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateproductlistComponent_form_6_ng_template_1_Template, 1, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Email Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Shop Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contact Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Quantity(.in No's)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Product Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Upload Product Images");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdateproductlistComponent_form_6_Template_input_change_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onFileChanged($event.target.files);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Next ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.profileFormGroup);
        }
      }

      function UpdateproductlistComponent_form_11_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Requirements");
        }
      }

      function UpdateproductlistComponent_form_11_mat_option_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", day_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", day_r10, " ");
        }
      }

      function UpdateproductlistComponent_form_11_mat_option_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var part_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", part_r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", part_r11, " ");
        }
      }

      function UpdateproductlistComponent_form_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateproductlistComponent_form_11_ng_template_1_Template, 1, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Product Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-hint", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "*Enter in Numbers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Product Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Product Age");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-hint", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "*Number of Days Old");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Water Requirement for the Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "--Select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UpdateproductlistComponent_form_11_mat_option_25_Template, 2, 2, "mat-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sunlight Requirement for the Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "--Select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UpdateproductlistComponent_form_11_mat_option_32_Template, 2, 2, "mat-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.profileFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, ctx_r1.productPrice));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("align", "end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("align", "end");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.days);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.parts);
        }
      }

      function UpdateproductlistComponent_form_16_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "You are almost done....");
        }
      }

      function UpdateproductlistComponent_form_16_mat_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var size_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", size_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", size_r15, " ");
        }
      }

      function UpdateproductlistComponent_form_16_mat_radio_button_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var result_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", result_r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", result_r16, " ");
        }
      }

      function UpdateproductlistComponent_form_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateproductlistComponent_form_16_ng_template_1_Template, 1, 0, "ng-template", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Size of the Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UpdateproductlistComponent_form_16_mat_option_6_Template, 2, 2, "mat-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "State Whether the Product is toxic to pets, kids: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-radio-group", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateproductlistComponent_form_16_Template_mat_radio_group_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.toxicity = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UpdateproductlistComponent_form_16_mat_radio_button_10_Template, 2, 2, "mat-radio-button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Description of the Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "textarea", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-hint", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Max 255 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.profileFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.sizes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.toxicity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.results);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("align", "end");
        }
      }

      var UpdateproductlistComponent = /*#__PURE__*/function () {
        function UpdateproductlistComponent(fb, service, notifierService, router, route) {
          _classCallCheck(this, UpdateproductlistComponent);

          this.fb = fb;
          this.service = service;
          this.notifierService = notifierService;
          this.router = router;
          this.route = route;
          this.productObject = new src_app_plantmodel__WEBPACK_IMPORTED_MODULE_2__["PlantModel"]();
          this.files = []; // OnSubmit(){
          //   console.log('formValue', this.profileFormGroup.value);
          //   this.productObject.productName = this.profileFormGroup.value.productName;
          //   this.productObject.productsAvailable = this.profileFormGroup.value.productsAvailable;
          //   this.productObject.productPrice = this.profileFormGroup.value.productPrice;
          //   this.productObject.sellerEmailId= this.profileFormGroup.value.sellerEmailId;
          //   this.productObject.productAddress= this.profileFormGroup.value.productAddress;
          //   this.productObject.productAge= this.profileFormGroup.value.productAge;
          //   this.productObject.sizeOfProduct= this.profileFormGroup.value.sizeOfProduct;
          //   this.productObject.waterRequirement= this.profileFormGroup.value.waterRequirement;
          //   this.productObject.sunlightRequirement= this.profileFormGroup.value.sunlightRequirement;
          //   this.productObject.toxicity= this.profileFormGroup.value.toxicity;
          //   this.productObject.description= this.profileFormGroup.value.description;
          //   this.productObject.productId=this.profileFormGroup.value.productId;
          //   this.service.updatePlantModel(this.productObject, this.files[0]).subscribe((result) => {
          //     console.warn("result is here", result)
          //        this.profileFormGroup.reset();
          //        this.router.navigate(['/home']);
          //   })
          // }

          this.days = ['Once a week', 'Twice a week', 'Thrice a week', 'Everyday'];
          this.parts = ['Full sun - Plants need at least 6 hours of direct sun daily', 'Part sun – Plants thrive with between 3 and 6 hours of direct sun per day', 'Part shade – Plants require between 3 and 6 hours of sun per day, but need protection from intense mid-day sun', 'Full shade – Plants require less than 3 hours of direct sun per day'];
          this.sizes = ['Small', 'Medium', 'Big'];
          this.results = ['Yes', 'No'];
          this.urllink = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnbY-fLcMMqyKqZ8kBk9vTtboqfE_mvHAzbyoWvi39-Bz5P0LlBU7_FtB6iFCzGWM6rEo&usqp=CAU';
        }

        _createClass(UpdateproductlistComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.profileFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              ownerEmailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](window.localStorage.getItem['loginEmail'], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              shopName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              ownerContactNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
              productsAvailable: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              productImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
              productAge: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              sizeOfProduct: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              waterRequirement: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              sunlightRequirement: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              toxicity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
            });
            this.service.getCurrentData(this.route.snapshot.params.id).subscribe(function (res) {
              _this20.profileFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                ownerEmailId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['ownerEmailId']),
                shopName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['shopName']),
                ownerContactNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['ownerContactNo']),
                productsAvailable: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['productsAvailable']),
                productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['productName']),
                productPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['productPrice']),
                productImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['productImage']),
                productAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['productAddress']),
                productAge: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['productAge']),
                sizeOfProduct: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['sizeOfProduct']),
                waterRequirement: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['waterRequirement']),
                sunlightRequirement: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['sunlightRequirement']),
                toxicity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['toxicity']),
                description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](res['description'])
              });
            });
          }
        }, {
          key: "onFileChanged",
          value: function onFileChanged(files) {
            this.prepareFilesList(files);
          }
        }, {
          key: "prepareFilesList",
          value: function prepareFilesList(files) {
            var _iterator5 = _createForOfIteratorHelper(files),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var item = _step5.value;
                item.progress = 0;
                this.files.push(item);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            this.uploadFilesSimulator(0);
          }
        }, {
          key: "uploadFilesSimulator",
          value: function uploadFilesSimulator(index) {
            var _this21 = this;

            setTimeout(function () {
              if (index === _this21.files.length) {
                return;
              } else {
                var progressInterval = setInterval(function () {
                  if (_this21.files[index].progress === 100) {
                    clearInterval(progressInterval);

                    _this21.uploadFilesSimulator(index + 1);
                  } else {
                    _this21.files[index].progress += 5;
                  }
                }, 200);
              }
            }, 1000);
          }
        }, {
          key: "formatBytes",
          value: function formatBytes(bytes, decimals) {
            if (bytes === 0) {
              return '0 Bytes';
            }

            var k = 1024;
            var dm = decimals <= 0 ? 0 : decimals || 2;
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
          }
        }, {
          key: "OnSubmit",
          value: function OnSubmit() {
            var _this22 = this;

            this.service.putProduct(this.profileFormGroup.value, this.route.snapshot.params.id).subscribe(function (res) {
              _this22.notifierService.showNotification('Product Data Updated succesfully', 'OK'), _this22.router.navigate(['/sellerhomepage/home']);
            });
          }
        }]);

        return UpdateproductlistComponent;
      }();

      UpdateproductlistComponent.ɵfac = function UpdateproductlistComponent_Factory(t) {
        return new (t || UpdateproductlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notifier_service__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
      };

      UpdateproductlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UpdateproductlistComponent,
        selectors: [["app-updateproductlist"]],
        viewQuery: function UpdateproductlistComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
          }
        },
        decls: 22,
        vars: 6,
        consts: [[1, "container-fluid"], ["completed", "false", 3, "stepControl"], [1, "profile"], [3, "formGroup", 4, "ngIf"], ["mat-raised-button", "", "id", "back", "color", "primary", "matStepperPrevious", "", 2, "margin-left", "5px"], ["mat-raised-button", "", "color", "primary", 1, "submit", 2, "margin-left", "530px", 3, "click"], [3, "formGroup"], ["matStepLabel", ""], ["appearance", "outline"], ["matInput", "", "formControlName", "ownerEmailId", "required", "", 1, "plantId", "w-100"], ["matInput", "", "formControlName", "shopName", "required", "", 1, "productId", "w-100"], ["matInput", "", "formControlName", "ownerContactNo", "required", "", 1, "productId", "w-100"], ["matInput", "", "formControlName", "productsAvailable", "required", "", 1, "plantId", "w-100"], ["matInput", "", "formControlName", "productName", "required", ""], [1, "img_container"], ["for", "choose-file", 2, "color", "#089975"], ["type", "file", "id", "choose-file", "size", "80", "multiple", "", "formControlName", "productImage", "required", "", 3, "change"], ["fileInput", ""], ["mat-raised-button", "", "color", "primary", "matStepperNext", "", 2, "margin-left", "600px"], ["matInput", "", "type", "number", "formControlName", "productPrice", "required", "", 3, "ngModel"], [3, "align"], ["appearance", "outline", 2, "margin-top", "7px"], ["matInput", "", "formControlName", "productAddress", "required", ""], ["appearance", "outline", 1, "productage"], [2, "width", "50%"], ["matInput", "", "formControlName", "productAge", "type", "number", "required", ""], ["for", "waterRequirement"], ["name", "waterRequirement", "id", "waterRequirement", "formControlName", "waterRequirement", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "sunlightRequirement"], ["name", "sunlightRequirement", "id", "sunlightRequirement", "formControlName", "sunlightRequirement", "required", ""], ["mat-raised-button", "", "color", "primary", "id", "previous", "matStepperPrevious", "", 2, "margin-left", "5px"], ["mat-raised-button", "", "id", "next", "color", "primary", "matStepperNext", "", 2, "margin-left", "540px"], [3, "value"], ["for", "sizeOfPlant"], ["name", "sizeOfProduct", "id", "sizeOfProduct", "formControlName", "sizeOfProduct", "required", ""], ["id", "toxicity"], ["aria-labelledby", "toxicity", "formControlName", "toxicity", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["class", "example-radio-button block", 3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "rows", "10", "col", "50", "formControlName", "description", "required", ""], [1, "example-radio-button", "block", 3, "value"]],
        template: function UpdateproductlistComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-horizontal-stepper");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-step", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profile of the Plants");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UpdateproductlistComponent_form_6_Template, 34, 1, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-step", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Requirements of Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UpdateproductlistComponent_form_11_Template, 38, 8, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-step", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UpdateproductlistComponent_form_16_Template, 17, 5, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateproductlistComponent_Template_button_click_20_listener() {
              return ctx.OnSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Update");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.profileFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileFormGroup);
          }
        },
        directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStep"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperPrevious"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperNext"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatHint"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioButton"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]],
        styles: ["mat-card[_ngcontent-%COMP%]{\n    width:800px;\n    height:800px;\n    margin-left: 40px;\n    margin-right:50px;\n    border-radius: 20px;\n    margin-top:15px;\n    display:flex;\n    justify-content: flex-start;\n  }\n  .example-radio-button[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .profile[_ngcontent-%COMP%]{\n    display:flex;\n    border-radius:20px ;\n    flex-direction: column;\n    width:700px;\n  \n    height:650px;\n    justify-content: flex-start;\n  \n  }\n  mat-form-field[_ngcontent-%COMP%]{\n    width:100%;\n    margin-top: 10px;\n  }\n  .Image[_ngcontent-%COMP%]{\n    background-color: rgb(255,255,255);\n    border: solid 4px black;\n    border-radius: 10px;\n    color:black;\n    padding:10px 20px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size:16px;\n    font-weight:bold;\n    margin-top:6px;\n    margin-bottom: 6px;\n    cursor:pointer;\n    width:150px;\n    height:45px\n  }\n  .img_container[_ngcontent-%COMP%]{\n  \n    display: flex;\n    flex-direction: column;\n  }\n  mat-card-title[_ngcontent-%COMP%]{\n    text-align: center;\n  }\n  .block[_ngcontent-%COMP%]{\n    display: block;\n  }\n  .form-control[_ngcontent-%COMP%]{\n    margin-top:5px;\n  \n  }\n  label[_ngcontent-%COMP%]{\n    margin-top:20px;\n  }\n  textarea[_ngcontent-%COMP%]{\n    margin-top:25px;\n  }\n  #Toxicity[_ngcontent-%COMP%]{\n    font-weight: bold;\n  }\n  mat-card-title[_ngcontent-%COMP%]{\n    background-color: #f6d8ac;\n    height:50px;\n    padding: 15px;\n  }\n  .container-fluid[_ngcontent-%COMP%]{\n  \n   display: flex;\n   justify-content: center;\n  }\n  .submit[_ngcontent-%COMP%]{\n    margin-left:300px;\n  }\n  mat-horizontal-stepper[_ngcontent-%COMP%]{\n    background-color: #f6d8ac;\n    margin-top: 70px;\n    margin-bottom: 10px;\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZXByb2R1Y3RsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0lBQ1osMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFdBQVc7O0lBRVgsWUFBWTtJQUNaLDJCQUEyQjs7RUFFN0I7RUFFQTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1g7RUFDRjtFQUNBOztJQUVFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUVBO0lBQ0UsY0FBYzs7RUFFaEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFJQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUdBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7RUFHQTs7R0FFQyxhQUFhO0dBQ2IsdUJBQXVCO0VBQ3hCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1COztFQUVyQiIsImZpbGUiOiJ1cGRhdGVwcm9kdWN0bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmR7XG4gICAgd2lkdGg6ODAwcHg7XG4gICAgaGVpZ2h0OjgwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIG1hcmdpbi1yaWdodDo1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDoxNXB4O1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cbiAgLmV4YW1wbGUtcmFkaW8tYnV0dG9uIHtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuICAucHJvZmlsZXtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czoyMHB4IDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOjcwMHB4O1xuICBcbiAgICBoZWlnaHQ6NjUwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBcbiAgfVxuICBcbiAgbWF0LWZvcm0tZmllbGR7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC5JbWFnZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LDI1NSwyNTUpO1xuICAgIGJvcmRlcjogc29saWQgNHB4IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgcGFkZGluZzoxMHB4IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOjE2cHg7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICBtYXJnaW4tdG9wOjZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgd2lkdGg6MTUwcHg7XG4gICAgaGVpZ2h0OjQ1cHhcbiAgfVxuICAuaW1nX2NvbnRhaW5lcntcbiAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIFxuICBtYXQtY2FyZC10aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmJsb2Nre1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAuZm9ybS1jb250cm9se1xuICAgIG1hcmdpbi10b3A6NXB4O1xuICBcbiAgfVxuICBsYWJlbHtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gIH1cbiAgXG4gIFxuICBcbiAgdGV4dGFyZWF7XG4gICAgbWFyZ2luLXRvcDoyNXB4O1xuICB9XG4gICNUb3hpY2l0eXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgXG4gIG1hdC1jYXJkLXRpdGxle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmQ4YWM7XG4gICAgaGVpZ2h0OjUwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICBcbiAgXG4gIC5jb250YWluZXItZmx1aWR7XG4gIFxuICAgZGlzcGxheTogZmxleDtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5zdWJtaXR7XG4gICAgbWFyZ2luLWxlZnQ6MzAwcHg7XG4gIH1cbiAgbWF0LWhvcml6b250YWwtc3RlcHBlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZkOGFjO1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateproductlistComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-updateproductlist',
            templateUrl: './updateproductlist.component.html',
            styleUrls: ['./updateproductlist.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: src_app_services_notifier_service__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }];
        }, {
          stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['stepper']
          }]
        });
      })();
      /***/

    },

    /***/
    "qaH8":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/cusproductdetails/cusproductdetails.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: CusproductdetailsComponent */

    /***/
    function qaH8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CusproductdetailsComponent", function () {
        return CusproductdetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      var CusproductdetailsComponent = /*#__PURE__*/function () {
        function CusproductdetailsComponent(service) {
          _classCallCheck(this, CusproductdetailsComponent);

          this.service = service;
        }

        _createClass(CusproductdetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this23 = this;

            this.service.getProductDetails().subscribe(function (val) {
              _this23.details = val;
            });
          }
        }, {
          key: "buyNow",
          value: function buyNow() {
            // this.wnd = window.open("about:blank", "");
            // this.service.getPaymentPage().subscribe(val => console.warn(val));
            // this.service.postPaymentPage(this.details);
            // this.service.postProduct(this.data);
            window.open("https://prakritik.stackroute.io/payment-service/" + this.details.productPrice + "/" + this.details.productName + "/" + this.details.productId);
            console.log(this.details);
          }
        }]);

        return CusproductdetailsComponent;
      }();

      CusproductdetailsComponent.ɵfac = function CusproductdetailsComponent_Factory(t) {
        return new (t || CusproductdetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]));
      };

      CusproductdetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CusproductdetailsComponent,
        selectors: [["app-cusproductdetails"]],
        decls: 47,
        vars: 10,
        consts: [[1, "card"], [1, "card-header"], ["alt", "Image", 2, "width", "auto", "height", "300px", 3, "src"], [1, "card-body"], [2, "width", "30%", "float", "left"], ["matTooltip", "Price"], ["matTooltip", "Quantity of plant available"], ["matTooltip", "Plant name"], ["matTooltip", "Address of seller"], [2, "width", "50%", "float", "right"], ["matTooltip", "Toxicity"], ["matTooltip", "Size of plant"], ["matTooltip", "Sunlight requirement"], ["matTooltip", "Water requirement"], ["matTooltip", "Plant description"], [1, "btn", "btn-primary", 3, "click"]],
        template: function CusproductdetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Featured ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "currency_rupee");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "production_quantity_limits");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "yard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "location_on");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "fullscreen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "wb_sunny");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-icon", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "water_drop");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CusproductdetailsComponent_Template_button_click_45_listener() {
              return ctx.buyNow();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "PayNow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/png;base64,", ctx.details.productImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", ctx.details.productPrice, "/item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", ctx.details.productsAvailable, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", ctx.details.productName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", ctx.details.productAddress, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", ctx.details.toxicity, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", ctx.details.sizeOfProduct, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", ctx.details.sunlightRequirement, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", ctx.details.waterRequirement, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", ctx.details.description, "");
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltip"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXNwcm9kdWN0ZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CusproductdetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cusproductdetails',
            templateUrl: './cusproductdetails.component.html',
            styleUrls: ['./cusproductdetails.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rI5D":
    /*!****************************************************************!*\
      !*** ./src/app/customerhomepage/customerhomepage.component.ts ***!
      \****************************************************************/

    /*! exports provided: CustomerhomepageComponent */

    /***/
    function rI5D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerhomepageComponent", function () {
        return CustomerhomepageComponent;
      });
      /* harmony import */


      var _components_cusproductdetails_cusproductdetails_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../components/cusproductdetails/cusproductdetails.component */
      "qaH8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/api.service */
      "H+bZ");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _product_image_product_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../product-image/product-image.component */
      "FjYH");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _search_by_name_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../search-by-name.pipe */
      "L5rU");

      function CustomerhomepageComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerhomepageComponent_div_17_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var plantmodel_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.openDialog(plantmodel_r1.productId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-product-image", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Buy Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var plantmodel_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("plantmodel", plantmodel_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", plantmodel_r1.productName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](plantmodel_r1.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20B9\xA0\xA0\xA0\xA0\xA0\xA0\xA0", plantmodel_r1.productPrice, "");
        }
      }

      var CustomerhomepageComponent = /*#__PURE__*/function () {
        function CustomerhomepageComponent(service, httpClient, dialog) {
          _classCallCheck(this, CustomerhomepageComponent);

          this.service = service;
          this.httpClient = httpClient;
          this.dialog = dialog;
          this.psearch = '';
          this.cards = [];
        }

        _createClass(CustomerhomepageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.retrivedImage='data:image/jpg;base64,'+this.plantModel.productImage;
            this.getAllProducts(); // this.service.getProduct().subscribe(data=>{
            //   this.plant=data;
            // })
          }
        }, {
          key: "getAllProducts",
          value: function getAllProducts() {
            var _this24 = this;

            this.service.getProduct().subscribe({
              next: function next(response) {
                return _this24.cards = response;
              }
            });
          }
        }, {
          key: "openDialog",
          value: function openDialog(productId) {
            this.service.getProductById(productId);
            var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
            dialogConfig.disableClose = false;
            dialogConfig.autoFocus = true; // dialogConfig.maxHeight='90vh';

            dialogConfig.maxWidth = '60vh';
            this.dialog.open(_components_cusproductdetails_cusproductdetails_component__WEBPACK_IMPORTED_MODULE_0__["CusproductdetailsComponent"], dialogConfig);
          }
        }]);

        return CustomerhomepageComponent;
      }();

      CustomerhomepageComponent.ɵfac = function CustomerhomepageComponent_Factory(t) {
        return new (t || CustomerhomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
      };

      CustomerhomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CustomerhomepageComponent,
        selectors: [["app-customerhomepage"]],
        decls: 19,
        vars: 5,
        consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtrustConstantResourceUrl"]("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css")], ["id", "home", 1, "home"], [1, "content"], [2, "font-weight", "bold", "font-size", "22px"], [1, "search-hero", 2, "justify-content", "center"], ["type", "text", "name", "search", "autocomplete", "off", "placeholder", "\uF002   Start searching for a products", 1, "form-control", 2, "width", "700px", "margin-left", "300px", 3, "ngModel", "ngModelChange"], [1, "heading"], ["class", "container", "style", "height: 20rem; margin-left: 20px;display: inline-block;justify-content: space-between; width: 300px;padding-top: 3%;", 3, "click", 4, "ngFor", "ngForOf"], [1, "container", 2, "height", "20rem", "margin-left", "20px", "display", "inline-block", "justify-content", "space-between", "width", "300px", "padding-top", "3%", 3, "click"], [1, "card-body", 2, "width", "300px", "margin-top", "10px"], [3, "plantmodel"], [2, "font-weight", "bold"], ["href", "#", 1, "btn"]],
        template: function CustomerhomepageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "link", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Fresh and ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Organic");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Products For You");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Keeping indoor plants has become a trend nowadays. Buy Cactus and Succulents online from Nurserylive at lowest price. Exciting Gifts & more. Get 6 Plants Free Buy Now. Diwali Offers. Shop Now. Plants worth \u20B9 1500 Free. Types: Get 6 Plants Free, Diwali Offers.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomerhomepageComponent_Template_input_ngModelChange_12_listener($event) {
              return ctx.psearch = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Our ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Products");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CustomerhomepageComponent_div_17_Template, 13, 4, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "searchByName");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.psearch);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](18, 2, ctx.cards, ctx.psearch));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _product_image_product_image_component__WEBPACK_IMPORTED_MODULE_8__["ProductImageComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]],
        pipes: [_search_by_name_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchByNamePipe"]],
        styles: ["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap');\n\nsection[_ngcontent-%COMP%]{\n    padding: 1.5rem;\n}\n.home[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: url('banner-bg.jpg') no-repeat;\n    margin-top: 65px;\n    background-position: center;\n    background-size: cover;\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{\n    text-align: center;\n    width: 100%;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    color: var(--black);\n    font-size: 3rem;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    color: orange;\n    \n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color:rgb(25, 57, 119);\n    font-size: 1rem;\n    padding: 1rem;\n    line-height: 1.8;\n\n}\n.btn[_ngcontent-%COMP%]{\n    border-radius: .5rem;\n    color: blue;\n    border: 2px solid black;\n}\n.btn[_ngcontent-%COMP%]:hover{\n    color: red;\n    background-color: black;\n}\n.heading[_ngcontent-%COMP%]{\n    text-align: center;\n    padding: 1rem 0;\n    padding-bottom: 1rem;\n    font-size: 2.5rem;\n    color: rgb(122, 168, 191); \n}\n.heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    background: orange;\n    color: #fff;\n    display: inline-block;\n    padding: .2rem 3rem;\n    -webkit-clip-path: polygon(100% 0, 93% 50%, 100% 99%, 0% 100%, 7% 50%, 0% 0% );\n            clip-path: polygon(100% 0, 93% 50%, 100% 99%, 0% 100%, 7% 50%, 0% 0% );\n}\n.features[_ngcontent-%COMP%]   .box-container[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\n    gap: 20px;\n   justify-content: center;\n   text-align: center; \n}\n.features[_ngcontent-%COMP%]   .box-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{\n    padding: 1rem .5rem;\n    outline:var(--outline);\n    outline-offset: -1rem;\n    box-shadow: var(--box-shadow);\n}\n.features[_ngcontent-%COMP%]   .box-container[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover{\n    outline: var(--outline-hover);\n    outline-offset: 0rem;\n}\n.container[_ngcontent-%COMP%]{\n    text-align: center;\n    font-size: larger;\n}\n.card-body[_ngcontent-%COMP%]:hover{\n    outline: var(--outline-hover);\n    outline-offset: 0rem; \n    color: blue;\n    background-color: gainsboro;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQyxxR0FBcUc7QUFDdEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BNkhPO0FBQ1A7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwwQ0FBMEM7SUFDMUMsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGFBQWE7O0FBRWpCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7O0FBRXBCO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLDhFQUFzRTtZQUF0RSxzRUFBc0U7QUFDMUU7QUFHQTtJQUNJLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QsU0FBUztHQUNWLHVCQUF1QjtHQUN2QixrQkFBa0I7QUFDckI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsMkJBQTJCOztBQUUvQiIsImZpbGUiOiJjdXN0b21lcmhvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDszMDA7NDAwOzUwMDs2MDAmZGlzcGxheT1zd2FwJyk7XG4vKiBcbjpyb290e1xuICAgIC0tb3JhbmdlOiNmZjc4MDA7XG4gICAgLS1ibGFjazojMTMwZjQwO1xuICAgIC0tbGlnaHQtY29sb3I6IzY2NjtcbiAgICAtLWJveC1zaGFkb3c6MCAuNXJlbSAxcmVtIHJnYmEoMCwwLDAsLjEpO1xuICAgIC0tYm9yZGVyOi4ycmVtIHNvbGlkIHJnYmEoMCwwLDAsLjEpO1xuICAgIC0tb3V0bGluZTouMXJlbSBzb2xpZCByZ2JhKDAsMCwwLC4xKTtcbiAgICAtLW91dGxpbmUtaG92ZXI6LjJyZW0gc29saWQgdmFyKC0tYmxhY2spO1xuIH1cbip7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7IHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBvdXRsaW5lOiBub25lOyBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xufVxuXG5odG1se1xuICAgIGZvbnQtc2l6ZTogMjAuNSU7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAgIHNjcm9sbC1wYWRkaW5nLXRvcDogN3JlbTtcbn1cblxuYm9keXtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuXG4gLmhlYWRlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOjA7IGxlZnQ6MDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcbiAgICBcbiAgICBcbn1cblxuXG4gXG4uaGVhZGVyIC5sb2dve1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbn1cblxuIC5oZWFkZXIgLmxvZ28gaXtcbmNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuaGVpZ2h0OiAxMCU7XG53aWR0aDogMTAlO1xuXG59ICAgXG4uaGVhZGVyIC5uYXZiYXIgYXtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luOjAgMXJlbTtcbiAgICBjb2xvcjp2YXIoLS1ibGFjaylcbn1cbi5oZWFkZXIgLm5hdmJhciBhOmhvdmVye1xuICAgIGNvbG9yOnZhcigtLW9yYW5nZSlcbn1cblxuIC5oZWFkZXIgLmljb25zIGRpdntcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICB3aWR0aDogMi41cmVtO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhlYWRlciAuaWNvbnMgZGl2OmhvdmVye1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW9yYW5nZSk7XG4gICAgY29sb3I6ICNmZmY7XG59XG4jbWVudS1idG57XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhlYWRlciAuc2VhcmNoLWZvcm17XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDoxMTAlOyByaWdodDotMTEwJTtcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xuICAgIGhlaWdodDozcmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG59XG5cbi5oZWFkZXIgLnNlYXJjaC1mb3JtLmFjdGl2ZXtcbiAgICByaWdodDogMTBweDtcbiAgICB0cmFuc2l0aW9uOiAuM3MgbGluZWFyO1xuXG59XG5cbi5oZWFkZXIgLnNlYXJjaC1mb3JtIGlucHV0e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgcGFkZGluZzogMCAxLjVyZW07XG59XG5cbi5oZWFkZXIgLnNlYXJjaC1mb3JtIGxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XG4gICAgY29sb3I6dmFyKC0tYmxhY2spO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxufVxuXG4uaGVhZGVyIC5zZWFyY2gtZm9ybSBsYWJlbDpob3ZlcntcbiAgICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcbn0gICAgICovXG5zZWN0aW9ue1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbn1cblxuLmhvbWV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHVybCguL2Jhbm5lci1iZy5qcGcpIG5vLXJlcGVhdDtcbiAgICBtYXJnaW4tdG9wOiA2NXB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xufVxuXG4uaG9tZSAuY29udGVudHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5ob21lIC5jb250ZW50IGgze1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4uaG9tZSAuY29udGVudCBoMyBzcGFue1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgXG59XG5cbi5ob21lIC5jb250ZW50IHB7XG4gICAgY29sb3I6cmdiKDI1LCA1NywgMTE5KTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS44O1xuXG59XG5cbi5idG57XG4gICAgYm9yZGVyLXJhZGl1czogLjVyZW07XG4gICAgY29sb3I6IGJsdWU7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG4uYnRuOmhvdmVye1xuICAgIGNvbG9yOiByZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5oZWFkaW5ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgY29sb3I6IHJnYigxMjIsIDE2OCwgMTkxKTsgXG59XG5cbi5oZWFkaW5nIHNwYW57XG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAuMnJlbSAzcmVtO1xuICAgIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAsIDkzJSA1MCUsIDEwMCUgOTklLCAwJSAxMDAlLCA3JSA1MCUsIDAlIDAlICk7XG59XG5cblxuLmZlYXR1cmVzIC5ib3gtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMHJlbSwgMWZyKSk7XG4gICAgZ2FwOiAyMHB4O1xuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxufVxuXG4uZmVhdHVyZXMgLmJveC1jb250YWluZXIgLmJveHtcbiAgICBwYWRkaW5nOiAxcmVtIC41cmVtO1xuICAgIG91dGxpbmU6dmFyKC0tb3V0bGluZSk7XG4gICAgb3V0bGluZS1vZmZzZXQ6IC0xcmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xufVxuXG4uZmVhdHVyZXMgLmJveC1jb250YWluZXIgLmJveDpob3ZlcntcbiAgICBvdXRsaW5lOiB2YXIoLS1vdXRsaW5lLWhvdmVyKTtcbiAgICBvdXRsaW5lLW9mZnNldDogMHJlbTtcbn1cblxuLmNvbnRhaW5lcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiBsYXJnZXI7XG59IFxuXG4uY2FyZC1ib2R5OmhvdmVye1xuICAgIG91dGxpbmU6IHZhcigtLW91dGxpbmUtaG92ZXIpO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAwcmVtOyBcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG4gICAgXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomerhomepageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-customerhomepage',
            templateUrl: './customerhomepage.component.html',
            styleUrls: ['./customerhomepage.component.css']
          }]
        }], function () {
          return [{
            type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ujPY":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/customerorderlist/customerorderlist.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: CustomerorderlistComponent */

    /***/
    function ujPY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomerorderlistComponent", function () {
        return CustomerorderlistComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function CustomerorderlistComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "spa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "person");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "loupe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "contact_support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "mail_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "calendar_today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerorderlistComponent_div_4_Template_button_click_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var OrderDetails_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.CancelOrderById(OrderDetails_r1.orderId, ctx_r2.message, ctx_r2.action);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Cancel Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "person");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\xA0\xA0 Shop Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Special service Available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "store alt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "mail_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "call");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "#picker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var OrderDetails_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", OrderDetails_r1 == null ? null : OrderDetails_r1.productName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", OrderDetails_r1 == null ? null : OrderDetails_r1.customerName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Quantity:\xA0\xA0", OrderDetails_r1 == null ? null : OrderDetails_r1.Quantity, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9\xA0\xA0\xA0\xA0\xA0\xA0\xA0", OrderDetails_r1 == null ? null : OrderDetails_r1.productPrice, "\xA0/item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", OrderDetails_r1 == null ? null : OrderDetails_r1.orderStatus, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", OrderDetails_r1 == null ? null : OrderDetails_r1.customerEmailId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", OrderDetails_r1 == null ? null : OrderDetails_r1.orderDate, " \xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", OrderDetails_r1 == null ? null : OrderDetails_r1.shopName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", OrderDetails_r1 == null ? null : OrderDetails_r1.ownerEmailId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", OrderDetails_r1 == null ? null : OrderDetails_r1.ownerContactNo, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", OrderDetails_r1 == null ? null : OrderDetails_r1.orderId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0\xA0", OrderDetails_r1 == null ? null : OrderDetails_r1.ownerAddress, "");
        }
      }

      var CustomerorderlistComponent = /*#__PURE__*/function () {
        function CustomerorderlistComponent(httpClient, _snackBar, service) {
          _classCallCheck(this, CustomerorderlistComponent);

          this.httpClient = httpClient;
          this._snackBar = _snackBar;
          this.service = service;
          this.customerEmailId = window.localStorage.getItem('loginEmail');
          this.orderList = [];
          this.cards = [];
          this.orderedData = [];
        } //  for (var index in imageList) {
        //   console.log(val); // prints values: 10, 20, 30, 40
        // }


        _createClass(CustomerorderlistComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getorderList(this.customerEmailId);
            this.getAllProducts(this.productId);
          }
        }, {
          key: "getorderedData",
          value: function getorderedData(orderId) {
            var _this25 = this;

            this.service.getOrderedlistByorderId(orderId).subscribe(function (result) {
              _this25.orderedData = result;
              console.log(result);
            });
          } //  this.service.testCallback.subscribe(this.request, this.success(r), this.error());

        }, {
          key: "getorderList",
          value: function getorderList(customerEmailId) {
            var _this26 = this;

            this.service.getOrderedlist(customerEmailId).subscribe(function (result) {
              _this26.orderList = result;
            }, this.callImage); //console.log(this.image(result[0].productId));    
          }
        }, {
          key: "callImage",
          value: function callImage() {
            this.orderList.forEach(function (value) {
              console.log(value.productId); //    // this.image(value.productId);
              //     // this.service.getPictureById(value.productId).subscribe((res:any)=>{
              //     //   value.image = res.productImage;
              //     //   console.log(value);
              //     // })

              localStorage.setItem("productId", value.productId);
            });
          } //   image(value:any) {
          //     this.service.getPictureById(value).subscribe((res:any)=>{
          //          //  value.image = res.productImage;
          //            console.log(res.productImage);
          //          }) 
          //  }
          // getImage(productId:string){
          //   this.service.getCurrentData(productId).subscribe((result:any)=>{
          //     this.cards=result;
          //     console.log(result);
          //   })
          // }

        }, {
          key: "getAllProducts",
          value: function getAllProducts(productId) {
            var _this27 = this;

            this.service.getPictureById(productId).subscribe(function (res) {
              console.log(res);
              _this27.cards = res;
            });
          }
        }, {
          key: "CancelOrderById",
          value: function CancelOrderById(orderId, message, action) {
            var _this28 = this;

            this.service.CancelOrder(this.orderedData, orderId).subscribe(function (result) {
              console.log(result);
              message = 'Order Cancelled', action = 'Successfully done !!';

              _this28._snackBar.open(message, action);
            });
            location.reload();
          }
        }]);

        return CustomerorderlistComponent;
      }();

      CustomerorderlistComponent.ɵfac = function CustomerorderlistComponent_Factory(t) {
        return new (t || CustomerorderlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      CustomerorderlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CustomerorderlistComponent,
        selectors: [["app-customerorderlist"]],
        decls: 5,
        vars: 1,
        consts: [[1, "container", 2, "margin-top", "70px", "margin-left", "150px"], [1, "text", 2, "font-weight", "bold", "width", "20rem", "height", "30px", "margin-left", "20px", "color", "rgb(9, 1, 1)"], [1, "text", 2, "font-weight", "bold", "color", "rgb(187, 208, 212)"], ["class", "card-text-center", "style", " padding-bottom: 1%;", 4, "ngFor", "ngForOf"], [1, "card-text-center", 2, "padding-bottom", "1%"], [1, "card-body"], [1, "row", 2, "width", "66rem", "display", "block", "height", "20rem"], ["fxLayout", "column", 1, "col-4", 2, "width", "20rem", "height", "20rem", "margin-left", "20px", "display", "inline-block", "float", "left"], ["src", "https://us.123rf.com/450wm/fillvector/fillvector2005/fillvector200503920/fillvector200503920.jpg?ver=6", "alt", "Plant_Image", 1, "card-img-bottom", 2, "height", "300px"], ["fxLayout", "column", 1, "col-4", 2, "width", "20rem", "height", "20rem", "margin-left", "20px", "display", "inline-block", "float", "inline-start"], [1, "card-header", 2, "margin-top", "10px"], ["mat-stroked-button", "", 3, "click"], ["fxLayout", "column", 1, "col-4", 2, "width", "20rem", "height", "20rem", "margin-left", "20px", "display", "inline-block", "float", "inline-end"], [1, "card-header"], [1, "card-title"]],
        template: function CustomerorderlistComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Booking History");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CustomerorderlistComponent_div_4_Template, 63, 12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orderList);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
        styles: ["host[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.container[_ngcontent-%COMP%]{\n  width: -moz-max-content;\n  width: max-content;\n  display: inline-block;\n  flex: content;\n  font-size: small;\n}\n.mat-card[_ngcontent-%COMP%]{\n  background-color:whitesmoke\n}\nbutton[_ngcontent-%COMP%]{\n  background-color: rgba(218, 75, 75, 0.603);\n  border-radius: 5px;\n  color: rgb(13, 13, 13);\n  width: 100px;\n  text-align: center;\n  \n}\nbutton[_ngcontent-%COMP%]:hover{\n  background-color: yellowgreen;\n}\n.card-header[_ngcontent-%COMP%]{\n  font-size: 20px;\n  font-family:'Times New Roman', Times, serif;\n  font-weight: bold;\n background-color: rgba(66, 219, 66, 0.656);\n  \n}\n.card-body[_ngcontent-%COMP%]{\n font-family: 'Franklin Gothic Medium', 'Arial Narrow', Ar\n}\n.card-title[_ngcontent-%COMP%]{\nfont-family: 'Times New Roman', Times, serif;\n}\n.card-img-bottom[_ngcontent-%COMP%]:hover{\n  border-radius: 2px;\n}\n.h1[_ngcontent-%COMP%]{\n  font-weight: bold;\n  font-family: 'Times New Roman', Times, serif;\n}\n.mat-icon[_ngcontent-%COMP%]{\n  color: rgb(177, 78, 188);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyb3JkZXJsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0UsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjs7QUFFcEI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDJDQUEyQztFQUMzQyxpQkFBaUI7Q0FDbEIsMENBQTBDOztBQUUzQztBQUNBO0NBQ0M7QUFDRDtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJjdXN0b21lcm9yZGVybGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmNvbnRhaW5lcntcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsZXg6IGNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG4ubWF0LWNhcmR7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZVxufVxuYnV0dG9ue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxOCwgNzUsIDc1LCAwLjYwMyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHJnYigxMywgMTMsIDEzKTtcbiAgd2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxufVxuYnV0dG9uOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3dncmVlbjtcbn1cbi5jYXJkLWhlYWRlcntcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY2LCAyMTksIDY2LCAwLjY1Nik7XG4gIFxufVxuLmNhcmQtYm9keXtcbiBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJcbn1cbi5jYXJkLXRpdGxle1xuZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG59XG4uY2FyZC1pbWctYm90dG9tOmhvdmVye1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uaDF7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbn1cbi5tYXQtaWNvbntcbiAgY29sb3I6IHJnYigxNzcsIDc4LCAxODgpO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerorderlistComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-customerorderlist',
            templateUrl: './customerorderlist.component.html',
            styleUrls: ['./customerorderlist.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
          }, {
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }];
        }, null);
      })();

      function mergeMap(arg0) {
        throw new Error('Function not implemented.');
      }
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _customerhomepage_customerhomepage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./customerhomepage/customerhomepage.component */
      "rI5D");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_customerorderlist_customerorderlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/customerorderlist/customerorderlist.component */
      "ujPY");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      "hrlM");
      /* harmony import */


      var _components_profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/profile-user/profile-user.component */
      "EjdT");
      /* harmony import */


      var _components_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/register-user/register-user.component */
      "4Xht");
      /* harmony import */


      var _components_seller_seller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/seller/seller.component */
      "UEPd");
      /* harmony import */


      var _components_sellerhomepage_sellerhomepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/sellerhomepage/sellerhomepage.component */
      "fDP4");
      /* harmony import */


      var _components_sellernavbar_sellernavbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/sellernavbar/sellernavbar.component */
      "OWaM");
      /* harmony import */


      var _components_sellerorderlist_sellerorderlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/sellerorderlist/sellerorderlist.component */
      "IeRB");
      /* harmony import */


      var _components_updateproductlist_updateproductlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/updateproductlist/updateproductlist.component */
      "p0Ii");
      /* harmony import */


      var _components_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/userprofile/userprofile.component */
      "P1Wc");
      /* harmony import */


      var _components_seedslist_seedslist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/seedslist/seedslist.component */
      "0lyN");
      /* harmony import */


      var _components_medicines_medicines_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/medicines/medicines.component */
      "OHJo");
      /* harmony import */


      var _components_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/landingpage/landingpage.component */
      "RwY5");

      var routes = [{
        path: 'register',
        component: _components_register_user_register_user_component__WEBPACK_IMPORTED_MODULE_6__["RegisterUserComponent"]
      }, {
        path: '',
        component: _components_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_15__["LandingpageComponent"]
      }, {
        path: 'sellerhomepage',
        component: _components_sellernavbar_sellernavbar_component__WEBPACK_IMPORTED_MODULE_9__["SellernavbarComponent"],
        children: [{
          path: 'home',
          component: _components_sellerhomepage_sellerhomepage_component__WEBPACK_IMPORTED_MODULE_8__["SellerhomepageComponent"]
        }, {
          path: 'Editprofile',
          component: _components_profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_5__["ProfileUserComponent"]
        }, {
          path: 'seller',
          component: _components_seller_seller_component__WEBPACK_IMPORTED_MODULE_7__["SellerComponent"]
        }, {
          path: 'seedslist',
          component: _components_seedslist_seedslist_component__WEBPACK_IMPORTED_MODULE_13__["SeedslistComponent"]
        }, {
          path: 'medicines',
          component: _components_medicines_medicines_component__WEBPACK_IMPORTED_MODULE_14__["MedicinesComponent"]
        }, {
          path: 'orderList',
          component: _components_sellerorderlist_sellerorderlist_component__WEBPACK_IMPORTED_MODULE_10__["SellerorderlistComponent"]
        }, {
          path: 'seller/update/:id',
          component: _components_updateproductlist_updateproductlist_component__WEBPACK_IMPORTED_MODULE_11__["UpdateproductlistComponent"]
        }, {
          path: 'profile',
          component: _components_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_12__["UserprofileComponent"]
        }, {
          path: 'custhome',
          component: _customerhomepage_customerhomepage_component__WEBPACK_IMPORTED_MODULE_0__["CustomerhomepageComponent"]
        }]
      }, {
        path: 'navbar',
        component: _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        children: [{
          path: 'customerhomepage',
          component: _customerhomepage_customerhomepage_component__WEBPACK_IMPORTED_MODULE_0__["CustomerhomepageComponent"]
        }, {
          path: 'customerorderlist',
          component: _components_customerorderlist_customerorderlist_component__WEBPACK_IMPORTED_MODULE_3__["CustomerorderlistComponent"]
        }, {
          path: 'Editprofile',
          component: _components_profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_5__["ProfileUserComponent"]
        }, {
          path: 'profile',
          component: _components_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_12__["UserprofileComponent"]
        }]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map