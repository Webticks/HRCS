(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3061],{227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9749:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageLoaderProps",{enumerable:!0,get:function(){return c.ImageLoaderProps}}),t.default=function(e){let t,o;var n,{src:l,sizes:m,unoptimized:b=!1,priority:y=!1,loading:w,className:C,quality:_,width:x,height:E,fill:j,style:S,onLoad:L,onLoadingComplete:R,placeholder:O="empty",blurDataURL:M}=e,P=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL"]);let k=i.useContext(f.ImageConfigContext),I=i.useMemo(()=>{let e=p||k||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),o=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:o})},[k]),z=P,A=z.loader||d.default;if(delete z.loader,"__next_img_default"in A){if("custom"===I.loader)throw Error('Image with src "'.concat(l,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let T=A;A=e=>{let{config:t}=e,o=a(e,["config"]);return T(o)}}let N="",D=h(x),B=h(E);if("object"==typeof(n=l)&&(g(n)||void 0!==n.src)){let U=g(l)?l.default:l;if(!U.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(U)));if(!U.height||!U.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(U)));if(t=U.blurWidth,o=U.blurHeight,M=M||U.blurDataURL,N=U.src,!j){if(D||B){if(D&&!B){let Z=D/U.width;B=Math.round(U.height*Z)}else if(!D&&B){let G=B/U.height;D=Math.round(U.width*G)}}else D=U.width,B=U.height}}let q=!y&&("lazy"===w||void 0===w);((l="string"==typeof l?l:N).startsWith("data:")||l.startsWith("blob:"))&&(b=!0,q=!1),I.unoptimized&&(b=!0);let[W,F]=i.useState(!1),[H,K]=i.useState(!1),V=h(_),J=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0}:{},H?{}:{color:"transparent"},S),$="blur"===O&&M&&!W?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(s.getImageBlurSvg({widthInt:D,heightInt:B,blurWidth:t,blurHeight:o,blurDataURL:M}),'")')}:{},Q=function(e){let{config:t,src:o,unoptimized:r,width:n,quality:l,sizes:a,loader:i}=e;if(r)return{src:o,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,o){let{deviceSizes:r,allSizes:n}=e;if(o){let l=/(^|\s)(1?\d?\d)vw/g,a=[];for(let i;i=l.exec(o);i)a.push(parseInt(i[2]));if(a.length){let u=.01*Math.min(...a);return{widths:n.filter(e=>e>=r[0]*u),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let s=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:s,kind:"x"}}(t,n,a),c=u.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:u.map((e,r)=>"".concat(i({config:t,src:o,quality:l,width:e})," ").concat("w"===s?e:r+1).concat(s)).join(", "),src:i({config:t,src:o,quality:l,width:u[c]})}}({config:I,src:l,unoptimized:b,width:D,quality:V,sizes:m,loader:A}),X=l,Y="imagesrcset",ee="imagesizes";Y="imageSrcSet",ee="imageSizes";let et={[Y]:Q.srcSet,[ee]:Q.sizes,crossOrigin:z.crossOrigin},eo=i.useRef(L);i.useEffect(()=>{eo.current=L},[L]);let er=i.useRef(R);i.useEffect(()=>{er.current=R},[R]);let en=r({isLazy:q,imgAttributes:Q,heightInt:B,widthInt:D,qualityInt:V,className:C,imgStyle:J,blurStyle:$,loading:w,config:I,fill:j,unoptimized:b,placeholder:O,loader:A,srcString:X,onLoadRef:eo,onLoadingCompleteRef:er,setBlurComplete:F,setShowAltText:K},z);return i.default.createElement(i.default.Fragment,null,i.default.createElement(v,Object.assign({},en)),y?i.default.createElement(u.default,null,i.default.createElement("link",Object.assign({key:"__nimg-"+Q.src+Q.srcSet+Q.sizes,rel:"preload",as:"image",href:Q.srcSet?void 0:Q.src},et))):null)};var r=o(6495).Z,n=o(2648).Z,l=o(1598).Z,a=o(7273).Z,i=l(o(7294)),u=n(o(3121)),s=o(2675),c=o(139),f=o(8730);o(670);var d=n(o(9824));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,o,n,l,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let i="decode"in e?e.decode():Promise.resolve();i.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===o&&a(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,u=!1;n.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>u,persist(){},preventDefault(){i=!0,t.preventDefault()},stopPropagation(){u=!0,t.stopPropagation()}}))}(null==l?void 0:l.current)&&l.current(e)}})}let v=e=>{var{imgAttributes:t,heightInt:o,widthInt:n,qualityInt:l,className:u,imgStyle:s,blurStyle:c,isLazy:f,fill:d,placeholder:p,loading:g,srcString:h,config:v,unoptimized:b,loader:y,onLoadRef:w,onLoadingCompleteRef:C,setBlurComplete:_,setShowAltText:x,onLoad:E,onError:j}=e,S=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=f?"lazy":g,i.default.createElement(i.default.Fragment,null,i.default.createElement("img",Object.assign({},S,t,{width:n,height:o,decoding:"async","data-nimg":d?"fill":"1",className:u,loading:g,style:r({},s,c),ref:i.useCallback(e=>{e&&(j&&(e.src=e.src),e.complete&&m(e,h,p,w,C,_))},[h,p,w,C,_,j]),onLoad(e){let t=e.currentTarget;m(t,h,p,w,C,_)},onError(e){x(!0),"blur"===p&&_(!0),j&&j(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,n=o(7273).Z,l=r(o(7294)),a=o(1003),i=o(4465),u=o(2692),s=o(8245),c=o(9246),f=o(227),d=o(3468);let p={};function g(e,t,o,r){if(!e||!a.isLocalURL(t))return;Promise.resolve(e.prefetch(t,o,r)).catch(e=>{});let n=r&&void 0!==r.locale?r.locale:e&&e.locale;p[t+"%"+o+(n?"%"+n:"")]=!0}let h=l.default.forwardRef(function(e,t){let o,r;let{href:h,as:m,children:v,prefetch:b,passHref:y,replace:w,shallow:C,scroll:_,locale:x,onClick:E,onMouseEnter:j,onTouchStart:S,legacyBehavior:L=!0!==Boolean(!0)}=e,R=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=v,L&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));let O=!1!==b,M=l.default.useContext(u.RouterContext),P=l.default.useContext(s.AppRouterContext);P&&(M=P);let{href:k,as:I}=l.default.useMemo(()=>{let[e,t]=a.resolveHref(M,h,!0);return{href:e,as:m?a.resolveHref(M,m):t||e}},[M,h,m]),z=l.default.useRef(k),A=l.default.useRef(I);L&&(r=l.default.Children.only(o));let T=L?r&&"object"==typeof r&&r.ref:t,[N,D,B]=c.useIntersection({rootMargin:"200px"}),U=l.default.useCallback(e=>{(A.current!==I||z.current!==k)&&(B(),A.current=I,z.current=k),N(e),T&&("function"==typeof T?T(e):"object"==typeof T&&(T.current=e))},[I,T,k,B,N]);l.default.useEffect(()=>{let e=D&&O&&a.isLocalURL(k),t=void 0!==x?x:M&&M.locale,o=p[k+"%"+I+(t?"%"+t:"")];e&&!o&&g(M,k,I,{locale:t})},[I,k,D,x,O,M]);let Z={ref:U,onClick(e){L||"function"!=typeof E||E(e),L&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,t,o,r,n,i,u,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(o)))return;e.preventDefault();let g=()=>{"beforePopState"in t?t[n?"replace":"push"](o,r,{shallow:i,locale:s,scroll:u}):t[n?"replace":"push"](r||o,{forceOptimisticNavigation:!f})};c?l.default.startTransition(g):g()}(e,M,k,I,w,C,_,x,Boolean(P),O)},onMouseEnter(e){L||"function"!=typeof j||j(e),L&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),!(!O&&P)&&a.isLocalURL(k)&&g(M,k,I,{priority:!0})},onTouchStart(e){L||"function"!=typeof S||S(e),L&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),!(!O&&P)&&a.isLocalURL(k)&&g(M,k,I,{priority:!0})}};if(!L||y||"a"===r.type&&!("href"in r.props)){let G=void 0!==x?x:M&&M.locale,q=M&&M.isLocaleDomain&&f.getDomainLocale(I,G,M.locales,M.domainLocales);Z.href=q||d.addBasePath(i.addLocale(I,G,M&&M.defaultLocale))}return L?l.default.cloneElement(r,Z):l.default.createElement("a",Object.assign({},R,Z),o)});t.default=h,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:u}=e,s=u||!l,[c,f]=r.useState(!1),[d,p]=r.useState(null);r.useEffect(()=>{if(l){if(!s&&!c&&d&&d.tagName){let e=function(e,t,o){let{id:r,observer:n,elements:l}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===o.root&&e.margin===o.margin);if(r&&(t=a.get(r)))return t;let n=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:l,elements:n},i.push(o),a.set(o,t),t}(o);return l.set(e,t),n.observe(e),function(){if(l.delete(e),n.unobserve(e),0===l.size){n.disconnect(),a.delete(r);let t=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&i.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:o});return e}}else if(!c){let r=n.requestIdleCallback(()=>f(!0));return()=>n.cancelIdleCallback(r)}},[d,s,o,t,c]);let g=r.useCallback(()=>{f(!1)},[]);return[p,c,g]};var r=o(7294),n=o(4686);let l="function"==typeof IntersectionObserver,a=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8245:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,o(2648).Z)(o(7294));let n=r.default.createContext(null);t.AppRouterContext=n;let l=r.default.createContext(null);t.LayoutRouterContext=l;let a=r.default.createContext(null);t.GlobalLayoutRouterContext=a;let i=r.default.createContext(null);t.TemplateContext=i},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:o,blurWidth:r,blurHeight:n,blurDataURL:l}=e,a=r||t,i=n||o,u=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&i?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(i,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&n?"1":"20","'/%3E").concat(u,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(l,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function o(e){let{config:t,src:o,width:r,quality:n}=e;return o.endsWith(".svg")&&!t.dangerouslyAllowSVG?o:"".concat(t.path,"?url=").concat(encodeURIComponent(o),"&w=").concat(r,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,o.__next_img_default=!0,t.default=o},5675:function(e,t,o){e.exports=o(9749)},1664:function(e,t,o){e.exports=o(1551)}}]);