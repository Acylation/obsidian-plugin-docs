"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[8467],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||s;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=d;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},30065:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=t(87462),o=t(63366),s=(t(67294),t(3905)),i=["components"],a={},c="MarkdownPostProcessor",p={unversionedId:"api/interfaces/MarkdownPostProcessor",id:"api/interfaces/MarkdownPostProcessor",isDocsHomePage:!1,title:"MarkdownPostProcessor",description:"A post processor receives an element which is a section of the preview.",source:"@site/docs/api/interfaces/MarkdownPostProcessor.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/MarkdownPostProcessor",permalink:"/obsidian-plugin-docs/api/interfaces/MarkdownPostProcessor",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/interfaces/MarkdownPostProcessor.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Loc",permalink:"/obsidian-plugin-docs/api/interfaces/Loc"},next:{title:"MarkdownPostProcessorContext",permalink:"/obsidian-plugin-docs/api/interfaces/MarkdownPostProcessorContext"}},u=[{value:"Properties",id:"properties",children:[{value:"sortOrder",id:"sortorder",children:[]}]}],l={toc:u};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"markdownpostprocessor"},"MarkdownPostProcessor"),(0,s.kt)("p",null,"A post processor receives an element which is a section of the preview."),(0,s.kt)("p",null,"Post processors can mutate the DOM to render various things, such as mermaid graphs, latex equations, or custom controls."),(0,s.kt)("p",null,"If your post processor requires lifecycle management, for example, to clear an interval, kill a subprocess, etc when this element is\nremoved from the app, look into {@link MarkdownPostProcessorContext#addChild}"),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("h3",{id:"sortorder"},"sortOrder"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"sortOrder: number\n")),(0,s.kt)("p",null,"An optional integer sort order. Defaults to 0. Lower number runs before higher numbers."))}d.isMDXComponent=!0}}]);