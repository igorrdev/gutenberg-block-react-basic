(()=>{"use strict";var e,r={616:()=>{const e=window.wp.blocks,r=window.wp.element,o=window.wp.blockEditor;(0,e.registerBlockType)("tst/myblock",{edit:function(){const e=(0,o.useBlockProps)();return(0,r.createElement)("h1",e,"Edit 6")},save:function(){const e=o.useBlockProps.save();return(0,r.createElement)("h1",e,"Save 2")}})}},o={};function t(e){var n=o[e];if(void 0!==n)return n.exports;var i=o[e]={exports:{}};return r[e](i,i.exports,t),i.exports}t.m=r,e=[],t.O=(r,o,n,i)=>{if(!o){var l=1/0;for(p=0;p<e.length;p++){for(var[o,n,i]=e[p],s=!0,c=0;c<o.length;c++)(!1&i||l>=i)&&Object.keys(t.O).every((e=>t.O[e](o[c])))?o.splice(c--,1):(s=!1,i<l&&(l=i));if(s){e.splice(p--,1);var a=n();void 0!==a&&(r=a)}}return r}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[o,n,i]},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={826:0,431:0};t.O.j=r=>0===e[r];var r=(r,o)=>{var n,i,[l,s,c]=o,a=0;if(l.some((r=>0!==e[r]))){for(n in s)t.o(s,n)&&(t.m[n]=s[n]);if(c)var p=c(t)}for(r&&r(o);a<l.length;a++)i=l[a],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(p)},o=globalThis.webpackChunkmyblock=globalThis.webpackChunkmyblock||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var n=t.O(void 0,[431],(()=>t(616)));n=t.O(n)})();