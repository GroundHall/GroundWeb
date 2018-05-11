(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{367:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_apollo__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(29),react_apollo__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(32),graphql_tag__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(33),graphql_tag__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__),classnames__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(132),classnames__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__),_atlaskit_button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(126),_atlaskit_field_text__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(368),_atlaskit_spinner__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(35),_assets_groundFlame_png__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(371),_assets_groundFlame_png__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_assets_groundFlame_png__WEBPACK_IMPORTED_MODULE_8__),_style_css__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(370),_style_css__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_9__),_createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),_templateObject=_taggedTemplateLiteral(["\n  mutation authenticate($email: String!, $password: String!) {\n      authenticate(email: $email, password: $password)\n  }\n"],["\n  mutation authenticate($email: String!, $password: String!) {\n      authenticate(email: $email, password: $password)\n  }\n"]),enterModule;function _taggedTemplateLiteral(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function _defineProperty(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}enterModule=__webpack_require__(15).enterModule,enterModule&&enterModule(module);var Login=function(_Component){function Login(e){_classCallCheck(this,Login);var n=_possibleConstructorReturn(this,(Login.__proto__||Object.getPrototypeOf(Login)).call(this,e));return n.state={email:"",password:"",error:"",loading:!1},n.handleInputChange=n.handleInputChange.bind(n),n.handleLogin=n.handleLogin.bind(n),n.toggleLoding=n.toggleLoding.bind(n),n}return _inherits(Login,_Component),_createClass(Login,[{key:"toggleLoding",value:function(){this.setState({loading:!this.state.loading})}},{key:"handleLogin",value:function(){var e=this,n=this.state,t=n.email,a=n.password;t&&a?(this.toggleLoding(),this.props.authenticate({variables:{email:t,password:a}}).then(function(n){var t=n.data.authenticate;e.toggleLoding(),localStorage.setItem("authToken",t),e.props.history.push("/feed")}).catch(function(n){var t=n.graphQLErrors;e.setState({error:t[0].message,loading:!1})})):this.setState({error:"Please enter all the required fields!",loading:!1})}},{key:"handleInputChange",value:function(e){var n=this;return function(t){var a=t.target.value;n.setState(_defineProperty({},e,a))}}},{key:"render",value:function(){var e=this.state,n=e.email,t=e.password,a=e.error,r=e.loading;return r?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_style_css__WEBPACK_IMPORTED_MODULE_9___default.a.loginWrap},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:_assets_groundFlame_png__WEBPACK_IMPORTED_MODULE_8___default.a,alt:"GroundHall",style:{marginBottom:"-68px",zIndex:3}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_4___default()(_style_css__WEBPACK_IMPORTED_MODULE_9___default.a.contentWrap,_style_css__WEBPACK_IMPORTED_MODULE_9___default.a.spinnerWrap)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atlaskit_spinner__WEBPACK_IMPORTED_MODULE_7__.a,{size:"large"}))):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_style_css__WEBPACK_IMPORTED_MODULE_9___default.a.loginWrap},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:_assets_groundFlame_png__WEBPACK_IMPORTED_MODULE_8___default.a,alt:"GroundHall",style:{marginBottom:"-68px",zIndex:3}}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_style_css__WEBPACK_IMPORTED_MODULE_9___default.a.contentWrap},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atlaskit_field_text__WEBPACK_IMPORTED_MODULE_6__.a,{label:"E-Mail",placeholder:"Enter E-Mail here...",value:n,onChange:this.handleInputChange("email"),shouldFitContainer:!0,isInvalid:a,invalidMessage:a,required:!0,disabled:r}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atlaskit_field_text__WEBPACK_IMPORTED_MODULE_6__.a,{label:"Password",type:"password",placeholder:"Enter Password here...",value:t,onChange:this.handleInputChange("password"),shouldFitContainer:!0,isInvalid:a,invalidMessage:a,required:!0,disabled:r}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atlaskit_button__WEBPACK_IMPORTED_MODULE_5__.a,{type:"submit",onClick:this.handleLogin,appearance:"primary",className:_style_css__WEBPACK_IMPORTED_MODULE_9___default.a.loginButton,isDisabled:r},"Login")))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Login}(react__WEBPACK_IMPORTED_MODULE_0__.Component),authenticate=graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject),_default=Object(react_apollo__WEBPACK_IMPORTED_MODULE_1__.compose)(Object(react_apollo__WEBPACK_IMPORTED_MODULE_1__.graphql)(authenticate,{name:"authenticate"}))(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.e)(Login)),reactHotLoader,leaveModule;__webpack_exports__.default=_default,reactHotLoader=__webpack_require__(15).default,leaveModule=__webpack_require__(15).leaveModule,reactHotLoader&&(reactHotLoader.register(Login,"Login","C:/Users/Chris/GroundHall/GroundWeb/src/containers/Login/index.js"),reactHotLoader.register(authenticate,"authenticate","C:/Users/Chris/GroundHall/GroundWeb/src/containers/Login/index.js"),reactHotLoader.register(_default,"default","C:/Users/Chris/GroundHall/GroundWeb/src/containers/Login/index.js"),leaveModule(module))}.call(this,__webpack_require__(25)(module))},368:function(e,n,t){"use strict";var a,r=t(11),_=t.n(r),o=t(9),i=t.n(o),s=t(5),l=t.n(s),c=t(7),p=t.n(c),u=t(4),d=t.n(u),E=t(8),h=t.n(E),A=t(0),g=t.n(A),C=t(125),f=t(3),O=t.n(f),M=t(2),B=t(1),m=O()(["\n  &::-webkit-input-placeholder {\n    /* WebKit, Blink, Edge */\n    ",";\n  }\n  &::-moz-placeholder {\n    /* Mozilla Firefox 19+ */\n    "," opacity: 1;\n  }\n  &::-ms-input-placeholder {\n    /* Microsoft Edge */\n    ",";\n  }\n  &:-moz-placeholder {\n    /* Mozilla Firefox 4 to 18 */\n    "," opacity: 1;\n  }\n  &:-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    ",";\n  }\n"],["\n  &::-webkit-input-placeholder {\n    /* WebKit, Blink, Edge */\n    ",";\n  }\n  &::-moz-placeholder {\n    /* Mozilla Firefox 19+ */\n    "," opacity: 1;\n  }\n  &::-ms-input-placeholder {\n    /* Microsoft Edge */\n    ",";\n  }\n  &:-moz-placeholder {\n    /* Mozilla Firefox 4 to 18 */\n    "," opacity: 1;\n  }\n  &:-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    ",";\n  }\n"]),D=O()(["\n  color: ",";\n"],["\n  color: ",";\n"]),P=O()(["\n  background: transparent;\n  border: 0;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: inherit;\n  font-size: 14px;\n  outline: none;\n  width: 100%;\n\n  &::-ms-clear {\n    display: none;\n  }\n\n  &:invalid {\n    box-shadow: none;\n  }\n  ",";\n"],["\n  background: transparent;\n  border: 0;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: inherit;\n  font-size: 14px;\n  outline: none;\n  width: 100%;\n\n  &::-ms-clear {\n    display: none;\n  }\n\n  &:invalid {\n    box-shadow: none;\n  }\n  ",";\n"]),b=Object(M.css)(D,B.colors.placeholderText),L=M.default.input(P,(a=b,Object(M.css)(m,a,a,a,a,a))),I=function(e){function n(){var e,t,a,r;l()(this,n);for(var _=arguments.length,o=Array(_),s=0;s<_;s++)o[s]=arguments[s];return t=a=d()(this,(e=n.__proto__||i()(n)).call.apply(e,[this].concat(o))),a.handleInputRef=function(e){a.input=e},r=t,d()(a,r)}return h()(n,e),p()(n,[{key:"focus",value:function(){this.input&&this.input.focus()}},{key:"render",value:function(){return g.a.createElement("div",null,g.a.createElement(C.a,{htmlFor:this.props.id,isDisabled:this.props.disabled,isLabelHidden:this.props.isLabelHidden,isRequired:this.props.required,label:this.props.label||""}),g.a.createElement(C.b,{invalidMessage:this.props.invalidMessage,isCompact:this.props.compact,isDisabled:this.props.disabled,isFitContainerWidthEnabled:this.props.shouldFitContainer,isInvalid:this.props.isInvalid,isReadOnly:this.props.isReadOnly,isRequired:this.props.required},g.a.createElement(L,{autoComplete:this.props.autoComplete,autoFocus:this.props.autoFocus,disabled:this.props.disabled,form:this.props.form,id:this.props.id,innerRef:this.handleInputRef,maxLength:this.props.maxLength,min:this.props.min,max:this.props.max,name:this.props.name,onBlur:this.props.onBlur,onChange:this.props.onChange,onFocus:this.props.onFocus,onKeyDown:this.props.onKeyDown,onKeyPress:this.props.onKeyPress,onKeyUp:this.props.onKeyUp,pattern:this.props.pattern,placeholder:this.props.placeholder,readOnly:this.props.isReadOnly,required:this.props.required,spellCheck:this.props.isSpellCheckEnabled,type:this.props.type,value:this.props.value})))}}]),n}(A.Component);I.defaultProps={compact:!1,disabled:!1,isInvalid:!1,isReadOnly:!1,isSpellCheckEnabled:!0,onChange:function(){},required:!1,type:"text"};var y=I,R=function(e){function n(){var e,t,a,r;l()(this,n);for(var _=arguments.length,o=Array(_),s=0;s<_;s++)o[s]=arguments[s];return t=a=d()(this,(e=n.__proto__||i()(n)).call.apply(e,[this].concat(o))),a.state={value:a.props.value},a.handleOnChange=function(e){a.setState({value:e.target.value}),a.props.onChange&&a.props.onChange(e)},r=t,d()(a,r)}return h()(n,e),p()(n,[{key:"focus",value:function(){this.input&&this.input.focus()}},{key:"render",value:function(){var e=this;return g.a.createElement(y,_()({},this.props,{value:this.state.value,onChange:this.handleOnChange,ref:function(n){e.input=n}}))}}]),n}(A.Component);R.defaultProps={onChange:function(){}};var w=R;t.d(n,!1,function(){return y});n.a=w},369:function(e,n,t){(n=e.exports=t(63)(!0)).push([e.i,".src-containers-Login-style__loginWrap--SlUde{display:flex;height:100%;justify-content:center;align-items:center;flex-direction:column;background-color:#172b4d}.src-containers-Login-style__contentWrap--2sC2p{padding:56px 24px 24px;width:280px;height:220px;margin-bottom:280px;border-radius:3px;background-color:#fff}.src-containers-Login-style__loginButton--qxf2a{width:100%;justify-content:center;margin-top:24px;font-size:16px}.src-containers-Login-style__spinnerWrap--1tv5n{justify-content:center;display:flex;align-items:center}","",{version:3,sources:["C:/Users/Chris/GroundHall/GroundWeb/src/containers/Login/style.css"],names:[],mappings:"AAAA,8CACE,aAAc,AACd,YAAa,AACb,uBAAwB,AACxB,mBAAoB,AACpB,sBAAuB,AACvB,wBAA0B,CAC3B,AAED,gDACE,uBAAwB,AACxB,YAAa,AACb,aAAc,AACd,oBAAqB,AACrB,kBAAmB,AACnB,qBAAuB,CACxB,AAED,gDACE,WAAY,AACZ,uBAAwB,AACxB,gBAAiB,AACjB,cAAgB,CACjB,AAED,gDACE,uBAAwB,AACxB,aAAc,AACd,kBAAoB,CACrB",file:"style.css",sourcesContent:[".loginWrap {\r\n  display: flex;\r\n  height: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  background-color: #172B4D;\r\n}\r\n\r\n.contentWrap {\r\n  padding: 56px 24px 24px;\r\n  width: 280px;\r\n  height: 220px;\r\n  margin-bottom: 280px;\r\n  border-radius: 3px;\r\n  background-color:white;\r\n}\r\n\r\n.loginButton {\r\n  width: 100%;\r\n  justify-content: center;\r\n  margin-top: 24px;\r\n  font-size: 16px;\r\n}\r\n\r\n.spinnerWrap {\r\n  justify-content: center;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n"],sourceRoot:""}]),n.locals={loginWrap:"src-containers-Login-style__loginWrap--SlUde",contentWrap:"src-containers-Login-style__contentWrap--2sC2p",loginButton:"src-containers-Login-style__loginButton--qxf2a",spinnerWrap:"src-containers-Login-style__spinnerWrap--1tv5n"}},370:function(e,n,t){var a=t(369);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(62)(a,r);a.locals&&(e.exports=a.locals)},371:function(e,n){e.exports="data:image/png;base64,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"}}]);