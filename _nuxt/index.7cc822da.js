import{a as f,r as g,k,o as t,h as n,l as e,F as b,m as y,u as P,w as _,p as m,q as S,s as p,t as w,v as B,x as u,c as h,y as v,z as I,A as $,B as L,C,j as D}from"./entry.9c9feaff.js";const N={id:"about",class:"flex flex-col mb-2"},O={class:"space-y-1 flex flex-col justify-center m-auto"},A={ref:"info",class:"mt-20"},R=e("h1",{class:"text-[55px] sm:text-[70px] text-center text-colorPrimaryLight dark:text-colorPrimaryDark"}," Hello there,",-1),V=e("p",{class:"text-lg sm:text-2xl text-center"}," I'm Shemmy Nyirenda a passionate web developer ",-1),H=[R,V],z={ref:"languages-div",class:"flex mx-auto mb-4 content-center p-4 space-x-8"},E={class:"flex mx-auto"},F=e("div",{class:"w-4"},null,-1),J=f({__name:"About",setup(o){const d=g([{title:"Java",icon:"nonicons:java-16"},{title:"JavaScript",icon:"nonicons:javascript-16"},{title:"Html",icon:"nonicons:html-16"},{title:"Css",icon:"nonicons:css-16"}]);function i(c,r){S("modal:event",{name:c,visible:r})}return(c,r)=>{const l=w,x=k("Ripple");return t(),n("div",N,[e("div",O,[e("div",A,H,512),e("div",z,[(t(!0),n(b,null,y(P(d),s=>(t(),n("div",{key:s.icon},[p(l,{title:s.title,name:s.icon,size:"30px",class:"transition-color noSelect duration-250 hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark"},null,8,["title","name"])]))),128))],512),e("div",E,[e("button",{class:"text-base sm:text-lg outline-none px-8 py-2 rounded-lg border hover:text-colorPrimaryLight hover:dark:text-colorPrimaryDark hover:border-colorPrimaryLight hover:dark:border-colorPrimaryDark",onClick:r[0]||(r[0]=s=>i("contact",!0))},"Resume "),F,_((t(),n("button",{class:"text-base sm:text-lg outline-none px-8 py-2 rounded-lg bg-colorPrimaryLight text-colorOnPrimaryLight",onClick:r[1]||(r[1]=s=>i("contact",!0))},[m("Hire me ")])),[[x]])])])])}}}),j=o=>($("data-v-09f1fefa"),o=o(),L(),o),M={id:"projects-title",class:"mt-24 content-center"},q=j(()=>e("h1",{class:"w-full text-start text-3xl m-0 sm:text-3xl"},"#Projects",-1)),T=j(()=>e("p",{class:"text-base mt-1"},"Projects iv'e worked on.",-1)),U={class:"mx-auto grid gap-4 grid-responsive py-4"},G={id:"text-content",class:"p-4 space-y-2 flex-1"},K={class:"text-2xl sm:text-[22px] font-medium"},Q={class:"text-base font-light"},W={class:"flex p-4 pt-0 space-x-3"},X={class:"text-base outline-none px-4 py-2 rounded-lg bg-colorPrimaryLight text-colorOnPrimaryLight"},Y={class:"text-base outline-none px-4 py-2 rounded-lg border border-colorOutlineLight hover:text-colorPrimaryLight hover:dark:text-colorPrimaryDark hover:border-colorPrimaryLight hover:dark:border-colorPrimaryDark"},Z="https://gh-pinned-repos.egoist.dev/?username=N3Shemmy3",ee=f({__name:"Projects",setup(o){const d=g(new Array);async function i(c){try{const l=await(await fetch(c)).json();d.value=l}catch{}}return B(()=>{i(Z)}),(c,r)=>{const l=w,x=C,s=k("Ripple");return t(),n("div",M,[q,T,e("div",U,[(t(!0),n(b,null,y(P(d),a=>(t(),n("div",{key:a.repo,id:"card",class:"w-full break-words flex flex-col rounded-md shadow-sm border border-colorOutlineLight dark:border-colorOutlineDark"},[e("div",G,[e("h6",K,u(a.repo.charAt(0).toUpperCase()+a.repo.slice(1)),1),e("p",Q,u(a.description),1)]),e("div",W,[a.website?_((t(),h(x,{key:0,to:a.website,target:"_blank"},{default:v(()=>[_((t(),n("button",X,[p(l,{class:"me-1",name:"ph:link"}),m(" live ")])),[[s]])]),_:2},1032,["to"])),[[s]]):I("",!0),_((t(),h(x,{to:a.link,target:"_blank"},{default:v(()=>[_((t(),n("button",Y,[p(l,{class:"me-1",name:"ph:github-logo"}),m(" code ")])),[[s]])]),_:2},1032,["to"])),[[s]])])]))),128))])])}}});const te=D(ee,[["__scopeId","data-v-09f1fefa"]]);const oe={},se=o=>($("data-v-20132fe0"),o=o(),L(),o),ne={id:"content",class:"select-none min-h-screen noSelect overflow-auto flex flex-col mx-auto max-w-screen-lg bg-colorBackgroundLight text-colorOnBackgroundLight dark:bg-colorBackgroundDark dark:text-colorOnBackgroundDark"},re=se(()=>e("div",{class:"h-14 mt-4"},null,-1));function ce(o,d){const i=J,c=te;return t(),n("div",ne,[re,p(i),p(c)])}const ie=D(oe,[["render",ce],["__scopeId","data-v-20132fe0"]]);export{ie as default};
