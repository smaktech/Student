(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[130],{2405:function(e,t,n){"use strict";function r(e,t,n){if(null!==e)for(var i,o,l,a,u,g,f,s,c=0,m=0,y=e.type,h="FeatureCollection"===y,k="Feature"===y,p=h?e.features.length:1,P=0;P<p;P++){u=(s=!!(f=h?e.features[P].geometry:k?e.geometry:e)&&"GeometryCollection"===f.type)?f.geometries.length:1;for(var b=0;b<u;b++){var w=0,M=0;if(null!==(a=s?f.geometries[b]:f)){g=a.coordinates;var v=a.type;switch(c=!n||"Polygon"!==v&&"MultiPolygon"!==v?0:1,v){case null:break;case"Point":if(!1===t(g,m,P,w,M))return!1;m++,w++;break;case"LineString":case"MultiPoint":for(i=0;i<g.length;i++){if(!1===t(g[i],m,P,w,M))return!1;m++,"MultiPoint"===v&&w++}"LineString"===v&&w++;break;case"Polygon":case"MultiLineString":for(i=0;i<g.length;i++){for(o=0;o<g[i].length-c;o++){if(!1===t(g[i][o],m,P,w,M))return!1;m++}"MultiLineString"===v&&w++,"Polygon"===v&&M++}"Polygon"===v&&w++;break;case"MultiPolygon":for(i=0;i<g.length;i++){for(M=0,o=0;o<g[i].length;o++){for(l=0;l<g[i][o].length-c;l++){if(!1===t(g[i][o][l],m,P,w,M))return!1;m++}M++}w++}break;case"GeometryCollection":for(i=0;i<a.geometries.length;i++)if(!1===r(a.geometries[i],t,n))return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function i(e){var t=[1/0,1/0,-1/0,-1/0];return r(e,(function(e){t[0]>e[0]&&(t[0]=e[0]),t[1]>e[1]&&(t[1]=e[1]),t[2]<e[0]&&(t[2]=e[0]),t[3]<e[1]&&(t[3]=e[1])})),t}i.default=i;t.a=i}}]);
//# sourceMappingURL=130.b4c4b674.chunk.js.map