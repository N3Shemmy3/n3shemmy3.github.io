import{k as g,l as m,m as b,o as s,c as l,a as t,F as u,j as h,b as d,i as x,n as $,q as p,d as f,s as B,v as P,t as y,h as v,w,e as A,x as C,p as L,f as j,_ as S}from"./entry.466d1d0a.js";import{_ as N}from"./ProjectSkeleton.d364fb28.js";const O={id:"about",class:"flex flex-col mb-2"},T={class:"space-y-4 flex flex-col justify-center m-auto"},U={ref:"info",class:"mt-20 select-text"},E=t("h1",{class:"text-[55px] sm:text-[70px] text-center text-colorPrimaryLight dark:text-colorPrimaryDark"}," Hello there,",-1),V=t("p",{class:"text-lg whitespace-normal sm:text-2xl text-center"}," I'm Shemmy Nyirenda a passionate web developer ",-1),F=[E,V],H={ref:"languages-div",class:"flex mx-auto mb-4 content-center p-4 space-x-8"},z={class:"flex mx-auto"},J=t("div",{class:"w-4"},null,-1),q=g({__name:"About",setup(c){const n=m([{title:"Java",icon:"nonicons:java-16"},{title:"JavaScript",icon:"nonicons:javascript-16"},{title:"Html",icon:"nonicons:html-16"},{title:"Css",icon:"nonicons:css-16"}]);function _(a,r){B("modal:event",{name:a,visible:r})}return(a,r)=>{const i=P,o=b("Ripple");return s(),l("div",O,[t("div",T,[t("div",U,F,512),t("div",H,[(s(!0),l(u,null,h(x(n),e=>(s(),l("div",{key:e.icon},[d(i,{title:e.title,name:e.icon,size:"30px",class:"transition-color noSelect duration-250 hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark"},null,8,["title","name"])]))),128))],512),t("div",z,[$("",!0),J,p((s(),l("button",{class:"flex-1 md:w-30 text-base sm:text-lg outline-none px-8 py-2 rounded-lg bg-colorPrimaryLight text-colorOnPrimaryLight",onClick:r[1]||(r[1]=e=>_("contact",!0))},[f("Contact me ")])),[[o]])])])])}}}),M={id:"card",class:"w-full break-words flex flex-col rounded-md shadow-sm border border-colorOutlineLight dark:border-colorOutlineDark"},W={id:"text-content",class:"p-4 space-y-2 flex-1"},X={class:"text-2xl sm:text-[22px] font-medium"},G={class:"text-sm font-light"},K={class:"flex p-4 pt-0 space-x-3"},Q={class:"min-w-[33.3%] outline-none px-4 py-1.5 rounded-lg bg-colorPrimaryLight text-colorOnPrimaryLight text-sm"},Y={class:"min-w-[33.3%] px-4 py-1.5 border border-colorOutlineLight rounded-lg outline-none text-sm hover:text-colorPrimaryLight hover:dark:text-colorPrimaryDark hover:border-colorPrimaryLight hover:dark:border-colorPrimaryDark"},Z=g({__name:"Project",props:["repo"],setup(c){const n=c;return(_,a)=>{const r=P,i=A,o=b("Ripple");return s(),l("div",M,[t("div",W,[t("h6",X,y(n.repo.name.charAt(0).toUpperCase()+n.repo.name.slice(1)),1),t("p",G,y(n.repo.description.replace("[pined]","")),1)]),t("div",K,[n.repo.homepage?p((s(),v(i,{key:0,to:n.repo.homepage,target:"_blank"},{default:w(()=>[p((s(),l("button",Q,[d(r,{class:"me-1",name:"ph:link"}),f(" live ")])),[[o]])]),_:1},8,["to"])),[[o]]):$("",!0),p((s(),v(i,{to:n.repo.html_url,target:"_blank"},{default:w(()=>[p((s(),l("button",Y,[d(r,{class:"me-1",name:"ph:github-logo"}),f(" code ")])),[[o]])]),_:1},8,["to"])),[[o]])])])}}}),D=c=>(L("data-v-d3977f58"),c=c(),j(),c),ee={id:"projects-title",class:"mt-24 content-center"},te=D(()=>t("h1",{class:"w-full text-start text-3xl m-0 sm:text-3xl"},"#Projects",-1)),oe=D(()=>t("p",{class:"text-base mt-1"},"Projects i have worked on:",-1)),se={class:"mx-auto grid gap-4 grid-responsive py-4"},ne="N3Shemmy3",re="fuck",ce=g({__name:"Projects",setup(c){const n=m(new Array);C(()=>{_(ne,re).then(a=>{if(a){const r=m(new Array);r.value=a,r.value.forEach(i=>{var o;(o=i.description)!=null&&o.includes("[pined]")&&n.value.push(i)})}})});async function _(a,r){const i=`https://api.github.com/users/${a}/repos`;try{new Headers().append("Authorization",`Bearer ${r}`);const e=await fetch(i);if(e.status===403){const I=parseInt(e.headers.get("X-RateLimit-Reset"),10)*1e3,R=new Date().getTime(),k=`Rate limit exceeded. Please wait for ${(I-R)/1e3} seconds before trying again.`;return console.warn(k),window.alert(k),null}if(!e.ok)throw new Error(`Failed to fetch user repos. Status: ${e.status}`);return await e.json()}catch(o){return console.error(o.message),null}}return(a,r)=>{const i=Z,o=N;return s(),l("div",ee,[te,oe,t("div",se,[x(n).length>0?(s(!0),l(u,{key:0},h(x(n),e=>(s(),v(i,{id:e.name,key:e.name,repo:e},null,8,["id","repo"]))),128)):(s(),l(u,{key:1},h(4,e=>d(o,{key:e})),64))])])}}});const ae=S(ce,[["__scopeId","data-v-d3977f58"]]);const ie={},le=c=>(L("data-v-4499885c"),c=c(),j(),c),_e={id:"content",class:"select-none min-h-screen noSelect overflow-auto flex flex-col mx-auto max-w-screen-lg bg-colorBackgroundLight text-colorOnBackgroundLight dark:bg-colorBackgroundDark dark:text-colorOnBackgroundDark"},de=le(()=>t("div",{class:"h-14 mt-4"},null,-1));function pe(c,n){const _=q,a=ae;return s(),l("div",_e,[de,d(_),d(a)])}const fe=S(ie,[["render",pe],["__scopeId","data-v-4499885c"]]);export{fe as default};
