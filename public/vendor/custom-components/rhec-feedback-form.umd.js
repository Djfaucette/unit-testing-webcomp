(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./pfelement.umd')) :
    typeof define === 'function' && define.amd ? define(['./pfelement.umd'], factory) :
      (global.RhecFeedbackForm = factory(global.PFElement));
}(this, (function (PFElement) {
  'use strict';

  PFElement = PFElement && PFElement.hasOwnProperty('default') ? PFElement['default'] : PFElement;

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  /*!
   * PatternFly Elements: RhecFeedbackForm 1.0.0-prerelease.28
   * @license
   * Copyright 2019 Red Hat, Inc.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   * 
  */

  var RhecFeedbackForm = function (_PFElement) {
    inherits(RhecFeedbackForm, _PFElement);
    createClass(RhecFeedbackForm, [{
      key: "html",
      get: function get$$1() {
        return "<style>:host pfe-modal [slot=pfe-modal--trigger]{position:fixed;bottom:32px;right:32px;cursor:pointer;opacity:0;visibility:hidden;-webkit-transition:all 1s ease-in-out;transition:all 1s ease-in-out}:host .myClass{border-radius:3px;position:fixed;bottom:32px;right:32px;-webkit-transition:right 1s ease-in;transition:right 1s ease-in;visibility:hidden;-webkit-transition:all 1s ease-in-out;transition:all 1s ease-in-out}:host .cover-spinner__container{top:-9px;left:-8px;right:9px;bottom:0;position:absolute;height:100%;width:100%;background-color:rgba(255,255,255,.6);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:999999999;display:none;visibility:hidden}:host .cover-spinner__container pfe-progress-indicator{-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}:host #ecoFeedbackBtn{opacity:0;-webkit-transition:opacity 2s ease-in-out;transition:opacity 2s ease-in-out}:host pfe-toast{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;--pfe-toast__container--Padding:0;--pfe-toast--MaxWidth:425px;--pfe-toast__container--BoxShadow:var(--pf-global--BoxShadow--lg);--pfe-toast__close--svg--Height:10px;--pfe-toast__close--svg--Width:10px;--pfe-toast__close--svg--Fill:var(--pf-c-button--m-plain--Color);--pfe-toast__close--svg--hover--Fill:var(--pf-c-button--m-plain--hover--Color);--pfe-toast__close--PaddingTop:20px;--pfe-toast__close--PaddingRight:var(--pf-global--spacer--md);--pfe-toast__close--PaddingBottom:var(--pf-global--spacer--md);--pfe-toast__close--PaddingLeft:var(--pf-global--spacer--md)}:host .rhec-toast-feedback__container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}:host .rhec-toast-feedback__actions{margin:0 var(--pf-global--spacer--md) var(--pf-global--spacer--lg) var(--pf-global--spacer--md)}:host .rhec-toast-feedback__actions button{margin-right:var(--pf-global--spacer--xs)}:host .pf-c-alert{--pf-c-alert--BoxShadow:none;-webkit-box-shadow:none;box-shadow:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:absolute}:host .pf-c-alert__title{font-weight:var(--pf-global--FontWeight--bold);padding-bottom:0}:host .pf-c-alert__description{padding-top:var(--pf-global--spacer--sm)!important}:host .cover-spinner__container{top:-9px;left:-8px;right:9px;bottom:0;position:absolute;height:100%;width:100%;background-color:rgba(255,255,255,.6);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:999999999;display:none;visibility:hidden}:host .cover-spinner__container pfe-progress-indicator{-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}:host #ecoFeedbackBtn{opacity:0;-webkit-transition:opacity 2s ease-in-out;transition:opacity 2s ease-in-out}:host([hidden]){display:none}\n/*# sourceMappingURL=rhec-feedback-form.min.css.map */\n</style><slot></slot>";
      }
    }, {
      key: "templateUrl",
      get: function get$$1() {
        return "rhec-feedback-form.html";
      }
    }, {
      key: "styleUrl",
      get: function get$$1() {
        return "rhec-feedback-form.scss";
      }

      // static get observedAttributes() {
      //   return [];
      // }

    }], [{
      key: "version",
      get: function get$$1() {
        return "1.0.0-prerelease.28";
      }
    }, {
      key: "tag",
      get: function get$$1() {
        return "rhec-feedback-form";
      }
    }]);

    function RhecFeedbackForm() {
      classCallCheck(this, RhecFeedbackForm);

      var _this = possibleConstructorReturn(this, (RhecFeedbackForm.__proto__ || Object.getPrototypeOf(RhecFeedbackForm)).call(this, RhecFeedbackForm));

      _this.init = _this.init.bind(_this);
      return _this;
    }

    createClass(RhecFeedbackForm, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        get(RhecFeedbackForm.prototype.__proto__ || Object.getPrototypeOf(RhecFeedbackForm.prototype), "connectedCallback", this).call(this);
        this.init();
      }

      // disconnectedCallback() {}

      // attributeChangedCallback(attr, oldValue, newValue) {}

    }, {
      key: "init",
      value: function init() {
        function ecoFeedbackFormSubmit(e) {
          e.preventDefault();
          var form = ecoFeedbackForm;
          showElement(spinner);
          sendEcoFeedbackFormData(form);
        }

        function sendEcoFeedbackFormData(form) {
          fetch("https://access.redhat.com/eform/submit/rhec-feedback", {
            method: "POST",
            mode: "no-cors",
            body: new FormData(form)
          })
          .then(ecoFeedbackFormCallback())
          .catch(e => console.error(e));
        }

        function ecoFeedbackFormCallback() {
          hideElement(spinner);
          dismissModal(formModal);
          setTimeout(function () {
            // alert("ecofeedbackformcallback!");
            // alert("toast triggrd");
            hideElement(ecoFeedbackBtn);
          }, 500);
          triggerSuccessToast(toast);
        }

        function showElement(el) {
          el.style.display = "flex";
          el.style.visibility = "visible";
          el.style.opacity = "1";
        }

        function hideElement(el) {
          el.style.display = "none";
          el.style.visibility = 'hidden';
        }

        function dismissModal() {
          if(!formModal) {
            let modal = this.querySelector("pfe-modal");
            modal.close();
            return;
          }
          formModal.close();
        }

        function triggerSuccessToast(el) {
          el.open();
        }

        function watchTextInputs() {
          if (workingWell.value.length > 0 || toImprove.value.length > 0) {
            ecoFeedbackFormSubmitBtn.removeAttribute("disabled");
          } else if (workingWell.value.length < 1 && toImprove.value.length < 1) {
            ecoFeedbackFormSubmitBtn.setAttribute("disabled", "true");
          }
        }

        var toast = this.querySelector("pfe-toast");
        var ecoFeedbackBtn = this.querySelector("#ecoFeedbackBtn");
        var ecoFeedbackFormSubmitBtn = this.querySelector("#ecoFeedbackFormSubmitBtn");
        var ecoFeedbackFormCancelBtn = this.querySelector("#modalClose")
        var spinner = this.querySelector(".cover-spinner__container");
        var formModal = this.querySelector("pfe-modal");
        var ecoFeedbackForm = this.querySelector("#ecoFeedbackForm");
        ecoFeedbackFormCancelBtn.addEventListener("click", dismissModal);
        ecoFeedbackForm.addEventListener("submit", ecoFeedbackFormSubmit);
        var workingWell = ecoFeedbackForm.elements["field_eco_what_is_working_well[und][0][value]"];
        var toImprove = ecoFeedbackForm.elements["field_eco_how_can_we_improve[und][0][value]"];
        workingWell.addEventListener("input", watchTextInputs);
        toImprove.addEventListener("input", watchTextInputs);

        setTimeout(function () {
          showElement(ecoFeedbackBtn);
        }, 1000);
      }
    }]);
    return RhecFeedbackForm;
  }(PFElement);

  PFElement.create(RhecFeedbackForm);

  return RhecFeedbackForm;

})));
//# sourceMappingURL=rhec-feedback-form.umd.js.map
