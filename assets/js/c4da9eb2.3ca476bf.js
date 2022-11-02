"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[7818],{5633:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>r});var a=o(7462),i=(o(7294),o(3905));o(1839);const n={sidebar_position:110},l="Developer tools",s={unversionedId:"developer-tools",id:"developer-tools",title:"Developer tools",description:"This page lists tools for plugin developers. While they're not required for building plugins, they can simplify plugin development.",source:"@site/docs/developer-tools.md",sourceDirName:".",slug:"/developer-tools",permalink:"/obsidian-plugin-docs/developer-tools",draft:!1,editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/developer-tools.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{sidebar_position:110},sidebar:"docs",previous:{title:"Insert link",permalink:"/obsidian-plugin-docs/examples/insert-link"},next:{title:"Contribute to this site",permalink:"/obsidian-plugin-docs/contribute"}},d={},r=[{value:"Obsidian Tools",id:"obsidian-tools",level:2},{value:"Download all plugins locally",id:"download-all-plugins-locally",level:2},{value:"Beta testing",id:"beta-testing",level:2},{value:"Badges",id:"badges",level:2}],p={toc:r};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"developer-tools"},"Developer tools"),(0,i.kt)("p",null,"This page lists tools for plugin developers. While they're not required for building plugins, they can simplify plugin development."),(0,i.kt)("h2",{id:"obsidian-tools"},"Obsidian Tools"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/obsidian-tools/obsidian-tools"},"Obsidian Tools")," is a collection of tools for plugin developers."),(0,i.kt)("h2",{id:"download-all-plugins-locally"},"Download all plugins locally"),(0,i.kt)("p",null,"If you run into a problem, it can be helpful to see how others have solved it. By downloading the entire plugin library to your computer, you can search the source code to find inspiration."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/konhi/obsidian-repositories-downloader"},"konhi/obsidian-repositories-downloader")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/luckman212/obsidian-plugin-downloader"},"luckman212/obsidian-plugin-downloader")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/claremacrae/obsidian-repos-downloader"},"claremacrae/obsidian-repos-downloader"))),(0,i.kt)("h2",{id:"beta-testing"},"Beta testing"),(0,i.kt)("p",null,"Before you ",(0,i.kt)("a",{parentName:"p",href:"/obsidian-plugin-docs/publishing/submit-your-plugin"},"publish")," your plugin, you may want to let users try it out first."),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TfTHacker/obsidian42-brat"},"BRAT")," plugin, your beta testers can install the plugin even if it's not published yet."),(0,i.kt)("h2",{id:"badges"},"Badges"),(0,i.kt)("p",null,"To add a badge with the number of downloads for your plugin, paste the following in your README and replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<PLUGIN_ID>")," with your plugin id:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22<PLUGIN_ID>%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)\n")),(0,i.kt)("p",null,"For example, here's the download count for the Calendar plugin:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22calendar%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json",alt:"Obsidian Downloads"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you'd like to customize the badge, use ",(0,i.kt)("a",{parentName:"p",href:"https://shields.io/#dynamic-badge"},"Shields.io dynamic badge")," with the following values:"),(0,i.kt)("table",{parentName:"admonition"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"data type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"data url")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"query")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'$["your-plugin-id"].downloads'))))),(0,i.kt)("p",{parentName:"admonition"},"To add a logo, add ",(0,i.kt)("inlineCode",{parentName:"p"},"&logo=obsidian")," to the image URL.")))}u.isMDXComponent=!0}}]);