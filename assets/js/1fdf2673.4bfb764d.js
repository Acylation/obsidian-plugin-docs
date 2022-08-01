"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[9264],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),b=i,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||r;return t?o.createElement(f,a(a({ref:n},p),{},{components:t})):o.createElement(f,a({ref:n},p))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},97011:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=t(83117),i=(t(67294),t(3905));const r={sidebar_position:30},a="Ribbon actions",s={unversionedId:"guides/ribbon-actions",id:"guides/ribbon-actions",title:"Ribbon actions",description:"The sidebar on the left side of the Obsidian interface is mainly known as the ribbon. In addition to system operations, such as opening the preferences or another vault, the ribbon can also host actions defined by plugins.",source:"@site/docs/guides/ribbon-actions.md",sourceDirName:"guides",slug:"/guides/ribbon-actions",permalink:"/obsidian-plugin-docs/guides/ribbon-actions",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/guides/ribbon-actions.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"docs",previous:{title:"Workspace",permalink:"/obsidian-plugin-docs/concepts/workspace"},next:{title:"Commands",permalink:"/obsidian-plugin-docs/guides/commands"}},c={},l=[],p={toc:l};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ribbon-actions"},"Ribbon actions"),(0,i.kt)("p",null,"The sidebar on the left side of the Obsidian interface is mainly known as the ",(0,i.kt)("em",{parentName:"p"},"ribbon"),". In addition to system operations, such as opening the preferences or another vault, the ribbon can also host actions defined by plugins."),(0,i.kt)("p",null,"To add a action to the ribbon, use the ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/Plugin_2#addribbonicon"},(0,i.kt)("inlineCode",{parentName:"a"},"addRibbonIcon()"))," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="main.ts"',title:'"main.ts"'},'import { Plugin } from "obsidian";\n\nexport default class ExamplePlugin extends Plugin {\n  async onload() {\n    // highlight-start\n    this.addRibbonIcon("dice", "Print to console", () => {\n      console.log("Hello, you!");\n    });\n    // highlight-end\n  }\n}\n')),(0,i.kt)("p",null,"The first argument specifies which icon to use. For more information on the available icons, and how to add your own, refer to ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/icons"},"Icons"),"."))}d.isMDXComponent=!0}}]);