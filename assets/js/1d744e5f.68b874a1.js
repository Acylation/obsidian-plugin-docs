"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[2732],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=n(83117),o=(n(67294),n(3905));const r={sidebar_position:77},i="React",p={unversionedId:"advanced-guides/react",id:"advanced-guides/react",title:"React",description:"In this guide, you'll configure your plugin to use React. It assumes that you already have a plugin with a custom view that you want to convert to use React.",source:"@site/docs/advanced-guides/react.md",sourceDirName:"advanced-guides",slug:"/advanced-guides/react",permalink:"/obsidian-plugin-docs/advanced-guides/react",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/advanced-guides/react.md",tags:[],version:"current",sidebarPosition:77,frontMatter:{sidebar_position:77},sidebar:"docs",previous:{title:"Markdown post processing",permalink:"/obsidian-plugin-docs/guides/markdown-post-processing"},next:{title:"Svelte",permalink:"/obsidian-plugin-docs/advanced-guides/svelte"}},c={},l=[{value:"Configure your plugin",id:"configure-your-plugin",level:2},{value:"Create a React component",id:"create-a-react-component",level:2},{value:"Mount the React component",id:"mount-the-react-component",level:2},{value:"Create an App context",id:"create-an-app-context",level:2}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react"},"React"),(0,o.kt)("p",null,"In this guide, you'll configure your plugin to use ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),". It assumes that you already have a plugin with a ",(0,o.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/custom-views"},"custom view")," that you want to convert to use React."),(0,o.kt)("p",null,"While you don't need to use a separate framework to build a plugin, there are a few reasons why you'd want to use React:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have existing experience of React and want to use a familiar technology."),(0,o.kt)("li",{parentName:"ul"},"You have existing React components that you want to reuse in your plugin."),(0,o.kt)("li",{parentName:"ul"},"Your plugin requires complex state management or other features that can be cumbersome to implement with regular ",(0,o.kt)("a",{parentName:"li",href:"/obsidian-plugin-docs/guides/html-elements"},"HTML element"),".")),(0,o.kt)("h2",{id:"configure-your-plugin"},"Configure your plugin"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add React to your plugin dependencies:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react react-dom\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add type definitions for React:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @types/react @types/react-dom\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),", enable JSX support on the ",(0,o.kt)("inlineCode",{parentName:"p"},"compilerOptions")," object:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'},'{\n  "compilerOptions": {\n    "jsx": "react"\n  }\n}\n')))),(0,o.kt)("h2",{id:"create-a-react-component"},"Create a React component"),(0,o.kt)("p",null,"Create a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactView.tsx")," in the plugin root directory, with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ReactView.tsx"',title:'"ReactView.tsx"'},'import * as React from "react";\n\nexport const ReactView = () => {\n  return <h4>Hello, React!</h4>;\n};\n')),(0,o.kt)("h2",{id:"mount-the-react-component"},"Mount the React component"),(0,o.kt)("p",null,"To use the React component, it needs to be mounted on a ",(0,o.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/html-elements"},"HTML element"),". The following example mounts the ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactView")," component on the ",(0,o.kt)("inlineCode",{parentName:"p"},"this.containerEl.children[1]")," element:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="view.tsx"',title:'"view.tsx"'},'import { ItemView, WorkspaceLeaf } from "obsidian";\n// highlight-start\nimport * as React from "react";\nimport * as ReactDOM from "react-dom";\n// highlight-end\nimport { ReactView } from "./ReactView";\nimport { createRoot } from "react-dom/client";\n\nconst VIEW_TYPE_EXAMPLE = "example-view";\n\nclass ExampleView extends ItemView {\n  constructor(leaf: WorkspaceLeaf) {\n    super(leaf);\n  }\n\n  getViewType() {\n    return VIEW_TYPE_EXAMPLE;\n  }\n\n  getDisplayText() {\n    return "Example view";\n  }\n\n  async onOpen() {\n    // highlight-start\n    const root = createRoot(this.containerEl.children[1]);\n    root.render(\n      <React.StrictMode>\n        <ReactView />,\n      </React.StrictMode>\n    );\n    // highlight-end\n  }\n\n  async onClose() {\n    // highlight-next-line\n    ReactDOM.unmountComponentAtNode(this.containerEl.children[1]);\n  }\n}\n')),(0,o.kt)("p",null,"For more information on ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactDOM.render()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactDOM.unmountComponentAtNode()"),", refer to the documentation on ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-dom.html"},"ReactDOM"),"."),(0,o.kt)("p",null,"You can mount your React component on any ",(0,o.kt)("inlineCode",{parentName:"p"},"HTMLElement"),", for example ",(0,o.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/guides/status-bar"},"status bar items"),". Just make sure to clean up properly by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactDOM.unmountComponentAtNode()")," when you're done."),(0,o.kt)("h2",{id:"create-an-app-context"},"Create an App context"),(0,o.kt)("p",null,"If you want to access the ",(0,o.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/api/classes/App"},(0,o.kt)("inlineCode",{parentName:"a"},"App"))," object from one of your React components, you need to pass it as a dependency. As your plugin grows, even though you're only using the ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," object in a few places, you start passing it through the whole component tree."),(0,o.kt)("p",null,"Another alternative is to create a React context for the app to make it globally available to all components inside your React view."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"React.createContext()")," to create a new app context."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="context.ts"',title:'"context.ts"'},"import * as React from \"react\";\nimport { App } from 'obsidian';\n\nexport const AppContext = React.createContext<App>(undefined);\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wrap the ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactView")," with a context provider and pass the app as the value."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="view.tsx"',title:'"view.tsx"'},"const root = createRoot(this.containerEl.children[1]);\nroot.render(\n  <AppContext.Provider value={this.app}>\n    <ReactView />\n  </AppContext.Provider>,\n  this.containerEl.children[1]\n);\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a custom hook to make it easier to use the context in your components."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="hooks.ts"',title:'"hooks.ts"'},'import { AppContext } from "./context";\n\nexport const useApp = (): App | undefined => {\n  return React.useContext(AppContext);\n};\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the hook in any React component within ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactView")," to access the app."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ReactView.tsx"',title:'"ReactView.tsx"'},'import * as React from "react";\nimport { useApp } from "./hooks";\n\nexport const ReactView = () => {\n  const { vault } = useApp();\n\n  return <h4>{vault.getName()}</h4>;\n};\n')))),(0,o.kt)("p",null,"For more information, refer to the React documentation for ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"Context")," and ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-custom.html"},"Building Your Own Hooks"),"."))}u.isMDXComponent=!0}}]);