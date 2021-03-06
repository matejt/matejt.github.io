/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
define("esri/dijit/geoenrichment/lang",[],function(){return{arraysEqual:function(a,b){if(!a&&!b)return!0;if(!a||!b||a.length!=b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!=b[c])return!1;return!0},isNumber:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},startsWith:function(a,b){return 0===a.lastIndexOf(b,0)},endsWith:function(a,b){var c=a.length-b.length;return 0>c?!1:a.indexOf(b,c)===c},isBoolean:function(a){return"boolean"==typeof a||a instanceof Boolean}}});