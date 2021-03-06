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
define("esri/layerUtils",["dojo/_base/lang","dojo/_base/array","dojo/_base/json","dojo/has","esri/kernel"],function(m,f,k,n,p){var l={_serializeLayerDefinitions:function(a){var b=[],c=!1,e=/[:;]/;if(a&&(f.forEach(a,function(a,d){a&&(b.push([d,a]),!c&&e.test(a)&&(c=!0))}),0<b.length)){var d;c?(d={},f.forEach(b,function(a){d[a[0]]=a[1]}),d=k.toJson(d)):(d=[],f.forEach(b,function(a){d.push(a[0]+":"+a[1])}),d=d.join(";"));return d}return null},_serializeTimeOptions:function(a,b){if(a){var c=[];f.forEach(a,
function(a,d){if(a){var g=a.toJson();b&&-1!==f.indexOf(b,d)&&(g.useTime=!1);c.push('"'+d+'":'+k.toJson(g))}});if(c.length)return"{"+c.join(",")+"}"}},_getDefaultVisibleLayers:function(a){var b=[],c;if(!a)return b;for(c=0;c<a.length;c++)0<=a[c].parentLayerId&&-1===f.indexOf(b,a[c].parentLayerId)&&f.some(a,function(b){return b.id===a[c].parentLayerId})||a[c].defaultVisibility&&b.push(a[c].id);return b},_getLayersForScale:function(a,b){var c=[];if(0<a&&b){var e;for(e=0;e<b.length;e++)if(!(0<=b[e].parentLayerId&&
-1===f.indexOf(c,b[e].parentLayerId)&&f.some(b,function(a){return a.id===b[e].parentLayerId}))&&0<=b[e].id){var d=!0,g=b[e].maxScale,h=b[e].minScale;if(0<g||0<h)0<g&&0<h?d=g<=a&&a<=h:0<g?d=g<=a:0<h&&(d=a<=h);d&&c.push(b[e].id)}}return c}};n("extend-esri")&&m.mixin(p,l);return l});