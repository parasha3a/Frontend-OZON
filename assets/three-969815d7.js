import{r as m,a as c}from"./vendor-534dd5cb.js";var i={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=m,y=Symbol.for("react.element"),x=Symbol.for("react.fragment"),R=Object.prototype.hasOwnProperty,v=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(t,r,a){var e,o={},s=null,p=null;a!==void 0&&(s=""+a),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(p=r.ref);for(e in r)R.call(r,e)&&!d.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:y,type:t,key:s,ref:p,props:o,_owner:v.current}}n.Fragment=x;n.jsx=l;n.jsxs=l;i.exports=n;var O=i.exports,_={},f=c;_.createRoot=f.createRoot,_.hydrateRoot=f.hydrateRoot;export{_ as c,O as j};
//# sourceMappingURL=three-969815d7.js.map
