"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[374,572],{52897:function(e,n,t){t.r(n),t.d(n,{HomepageFeatures:function(){return i},default:function(){return h}});t(87462);var a=t(39960),r=t(52263),c=t(54814),s=t(86010),l=t(67294),u="heroBanner_PAbV",o="buttons_2tNn";function i(){return null}function d(){var e=(0,r.Z)().siteConfig;return l.createElement("header",{className:(0,s.Z)("hero",u)},l.createElement("div",{className:"container"},l.createElement("h1",{className:"hero__title"},e.title),l.createElement("p",{className:"hero__subtitle"},e.tagline),l.createElement("div",{className:o},l.createElement(a.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Get Started \u2192"))))}function h(){var e=(0,r.Z)(),n=e.siteConfig,t=e.tagline;return l.createElement(c.Z,{title:n.title,description:t},l.createElement(d,null),l.createElement("main",null,l.createElement(i,null),l.createElement("div",{className:"container"})))}},6979:function(e,n,t){var a=t(76775),r=t(52263),c=t(28084),s=t(94184),l=t.n(s),u=t(67294);n.Z=function(e){var n=(0,u.useRef)(!1),s=(0,u.useRef)(null),o=(0,a.k6)(),i=(0,r.Z)().siteConfig,d=(void 0===i?{}:i).baseUrl;(0,u.useEffect)((function(){var e=function(e){"s"!==e.key&&"/"!==e.key||s.current&&e.srcElement===document.body&&(e.preventDefault(),s.current.focus())};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]);var h=(0,c.usePluginData)("docusaurus-lunr-search"),f=function(){n.current||(Promise.all([fetch(""+d+h.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+d+h.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([t.e(878),t.e(245)]).then(t.bind(t,24130)),Promise.all([t.e(532),t.e(343)]).then(t.bind(t,53343))]).then((function(e){var n=e[0],t=e[1],a=e[2].default;0!==n.length&&function(e,n,t){new t({searchDocs:e,searchIndex:n,inputSelector:"#search_input_react",handleSelected:function(e,n,t){var a=d+t.url;document.createElement("a").href=a,o.push(a)}})}(n,t,a)})),n.current=!0)},m=(0,u.useCallback)((function(n){s.current.contains(n.target)||s.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return u.createElement("div",{className:"navbar__search",key:"search-box"},u.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:m,onKeyDown:m,tabIndex:0}),u.createElement("input",{id:"search_input_react",type:"search",placeholder:"Press S to Search...","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:f,onMouseOver:f,onFocus:m,onBlur:m,ref:s}))}}}]);