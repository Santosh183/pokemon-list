(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{81:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(39),o=a.n(s),l=(a(81),a(12)),r=a(29),c=a(6),d=a(2);const p=Object(i.createContext)({layout:{navCollapsed:!1},setLayout:()=>null}),x=e=>{let{children:t}=e;const[a,n]=Object(i.useState)({navCollapsed:!0});return Object(d.jsx)(p.Provider,{value:{layout:a,setLayout:n},children:t})};var m=a(36);const h=e=>{let{to:t,icon:a,name:i,children:n}=e;const s=b();return Object(d.jsxs)(r.b,{to:t,className:e=>{let{isActive:t}=e;return Object(m.a)(s.root,{[s.active]:t})},title:i,children:[Object(d.jsx)("span",{className:Object(m.a)(s.icon,"material-icons"),children:a}),Object(d.jsx)("span",{className:s.text,children:n})]})},b=Object(l.a)({root:{width:"100%",display:"flex",alignItems:"center",boxSizing:"border-box",height:"56px",textDecoration:"none",overflow:"hidden",background:"#131924","&:hover":{filter:"brightness(120%)"},"&:active":{filter:"brightness(130%)"}},text:{marginLeft:"18px"},active:{background:"#171E2b","&:hover":{filter:"brightness(110%)"},"&:active":{filter:"brightness(120%)"}},icon:{boxSizing:"border-box",width:"45px",minWidth:"45px",display:"flex",alignItems:"center",justifyContent:"center"}},{name:"NavOption"}),j=()=>{const{navCollapsed:e}=(()=>{const{layout:e}=Object(i.useContext)(p);return e})(),t=g({navCollapsed:e}),a=(()=>{const{setLayout:e}=Object(i.useContext)(p);return()=>e((e=>({...e,navCollapsed:!e.navCollapsed})))})();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:t.root,children:[Object(d.jsxs)("div",{className:t.main,children:[Object(d.jsxs)("div",{className:t.title,children:[Object(d.jsx)("img",{src:"/pokeball-white.png",className:t.img}),Object(d.jsx)("h3",{children:"Pok\xe9mon"})]}),Object(d.jsx)(h,{to:"/pokemon-list",icon:"home",name:"Home",children:"Home"}),Object(d.jsx)(h,{to:"/pokemon-list/pokemon",icon:"list",name:"List",children:"List"})]}),Object(d.jsx)("div",{className:t.bottom,children:Object(d.jsxs)("button",{className:t.expandBtn,onClick:()=>a(),children:[Object(d.jsx)("span",{title:e?"Expand":"Collapse",className:Object(m.a)(t.btnIcon,"material-icons"),children:e?"unfold_more":"unfold_less"}),Object(d.jsx)("span",{className:t.btnTxt,children:"Collapse"})]})})]}),Object(d.jsx)("div",{className:t.spacer})]})},g=Object(l.a)({root:{zIndex:100,background:"#131924",position:"fixed",left:0,top:0,bottom:0,width:e=>e.navCollapsed?"81px":"320px",display:"flex",flexDirection:"column",transition:"width .2s ease-in-out",overflow:"hidden"},spacer:{height:"100%",width:e=>e.navCollapsed?"81px":"320px",transition:"width .2s ease-in-out"},main:{flex:"1","& > *":{paddingLeft:"18px",paddingRight:"18px"}},title:{display:"flex",alignItems:"center","& h3":{marginLeft:"18px"}},img:{width:"48px",paddingTop:"12px",paddingBottom:"12px",filter:"brightness(75%)"},bottom:{display:"flex",alignItems:"center",justifyContent:"flex-start",padding:"12px 18px",borderTop:"2px solid rgba(255, 255, 255, .1)"},expandBtn:{background:"transparent",position:"relative",display:"flex",alignItems:"center",justifyContent:"flex-start",width:"100%",cursor:"pointer","&:hover":{background:"rgba(255,255,255,.04)"},"&:active":{background:"rgba(255,255,255,.06)"},overflow:"hidden"},btnIcon:{transform:"rotate(90deg)"},btnTxt:{marginLeft:"18px",transition:"all 0s ease-in-out .2s"}},{name:"Nav"});var u=a(120),O=a(44);const v=O.a`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      number
      types
      image
    }
  }
`,f=()=>{const e=w();return Object(d.jsx)("div",{className:e.spinnerContainer,children:Object(d.jsxs)("div",{className:e.spinner,children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})})},w=Object(l.a)({"@global":{"@keyframes spinner":{"0%":{opacity:"1"},"100%":{opacity:"0"}}},spinnerContainer:{width:"100%",height:"100%",position:"relative"},spinner:{display:"inline-block",position:"absolute",width:"80px",height:"80px",top:"50%",left:"50%",transform:"translate(-50%, -50%)","& div":{transformOrigin:"40px 40px",animation:"spinner 1.2s linear infinite","&:after":{content:'" "',display:"block",position:"absolute",top:"3px",left:"37px",width:"5px",height:"15px",borderRadius:"20%",background:"#fff"},"&:nth-child(1)":{transform:"rotate(0deg)",animationDelay:"-1.1s"},"&:nth-child(2)":{transform:"rotate(30deg)",animationDelay:"-1s"},"&:nth-child(3)":{transform:"rotate(60deg)",animationDelay:"-0.9s"},"&:nth-child(4)":{transform:"rotate(90deg)",animationDelay:"-0.8s"},"&:nth-child(5)":{transform:"rotate(120deg)",animationDelay:"-0.7s"},"&:nth-child(6)":{transform:"rotate(150deg)",animationDelay:"-0.6s"},"&:nth-child(7)":{transform:"rotate(180deg)",animationDelay:"-0.5s"},"&:nth-child(8)":{transform:"rotate(210deg)",animationDelay:"-0.4s"},"&:nth-child(9)":{transform:"rotate(240deg)",animationDelay:"-0.3s"},"&:nth-child(10)":{transform:"rotate(270deg)",animationDelay:"-0.2s"},"&:nth-child(11)":{transform:"rotate(300deg)",animationDelay:"-0.1s"},"&:nth-child(12)":{transform:"rotate(330deg)",animationDelay:"-0.0s"}}}},{name:"Loader"}),y=e=>{let{pkmn:t}=e;const a=k();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:a.avatar,children:Object(d.jsx)("img",{src:t.image})}),Object(d.jsxs)("div",{className:a.info,children:[Object(d.jsx)("div",{className:a.name,children:t.name}),Object(d.jsxs)("div",{className:a.number,children:["Number:",Object(d.jsx)("span",{children:t.number})]}),Object(d.jsxs)("div",{className:a.types,children:["Types:",Object(d.jsx)("span",{children:t.types.join(", ")})]})]})]})},k=Object(l.a)({avatar:{"& img":{width:"100px",height:"100px",borderRadius:"50%"}},info:{display:"flex",alignItems:"flex-start",flexDirection:"column",fontSize:"15px"},name:{fontSize:"20px",fontFamily:"cursive",paddingBottom:"10px"},number:{display:"flex",color:"#00acc1",gap:"10px",alignItems:"center","& span":{color:"rgba(255,255,255,.68)",fontSize:"13px"}},types:{extend:"number"},"@media only screen and (max-width: 768px)":{avatar:{"& img":{width:"50px",height:"50px",borderRadius:"50%"}},info:{fontSize:"12px"},name:{fontSize:"15px",paddingBottom:"5px"}}},{name:"PokemonListItem"}),N=e=>{let{handleSearch:t}=e;const a=C();return Object(d.jsxs)("div",{className:a.searchContainer,children:[Object(d.jsx)("span",{className:"material-icons",children:"search"}),Object(d.jsx)("input",{onInput:e=>t(e.currentTarget.value),type:"search",name:"search",id:"search"})]})},C=Object(l.a)({searchContainer:{padding:"20px 32px",display:"flex",alignItems:"center",justifyContent:"center",height:"40px",gap:"10px","& span":{width:"20px",height:"20px"},"& input":{padding:"5px",background:"inherit",border:"none",boxShadow:"0px 0px 1px 1px rgb(255 255 255 / 10%)",height:"100%",width:"calc( 30% - 20px )"}},"@media only screen and (max-width: 768px)":{searchContainer:{padding:"10px",gap:"10px","& span":{width:"15px",height:"15px"},"& input":{padding:"5px",background:"inherit",border:"none",boxShadow:"0px 0px 1px 1px rgb(255 255 255 / 10%)",height:"100%",width:"calc( 90% - 20px )"}}}},{name:"Search"}),S=()=>{const e=D(),{pokemons:t,loading:a}=(()=>{const{data:e,...t}=Object(u.a)(v,{variables:{first:151}}),a=Object(i.useMemo)((()=>(null===e||void 0===e?void 0:e.pokemons)||[]),[e]),n=Object(i.useMemo)((()=>a.map((e=>({value:e.id,label:e.name})))),[a]);return{pokemons:a,pokemonOptions:n,...t}})(),n=t,[s,o]=Object(i.useState)(n),[l,r]=Object(i.useState)(!1),p=Object(c.r)();return Object(i.useEffect)((()=>{o(t)}),[t]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(N,{handleSearch:e=>{const a=t.filter((t=>t.name.toLowerCase().includes(e.trim().toLowerCase())));r(!0),o(a)}}),Object(d.jsxs)("div",{className:`${e.root} ${e.list}`,children:[a&&Object(d.jsx)(f,{}),!a&&0===s.length&&l&&Object(d.jsx)("div",{children:" No Pokemans available!"}),s.map((t=>Object(d.jsx)("div",{onClick:()=>p(`${t.id}`,{state:{id:t.id,name:t.name}}),className:e.listItem,children:Object(d.jsx)(y,{pkmn:t})},t.id)))]}),Object(d.jsx)(c.b,{})]})},D=Object(l.a)({root:{width:"100%",textAlign:"center",padding:"32px",boxSizing:"border-box"},list:{display:"flex",flexDirection:"column",alignItems:"center",gap:"30px",height:"calc( 100% - 80px)",overflow:"auto",paddingTop:"25px"},listItem:{width:"25%",display:"flex",alignItems:"center",gap:"20px",boxShadow:"0px 0px 1px 1px rgb(255 255 255 / 10%)",padding:"15px","&:hover":{background:"#171e2b",filter:"brightness(120%)",cursor:"pointer"}},"@media only screen and (max-width: 768px)":{list:{padding:"10px",gap:"10px"},listItem:{width:"100%",padding:"5px"}}},{name:"PokemonList"});var I=a(115),L=a(118),z=a(66),P=a(117),F=a(119);const $=new L.a({link:z.a.from([new P.a({uri:"https://graphql-pokemon2.vercel.app"})]),cache:new F.a({})}),T=()=>{const e=B();return Object(d.jsx)("div",{className:e.root,children:Object(d.jsx)(S,{})})},B=Object(l.a)({root:{width:"100%",height:"100%"}},{name:"ListPage"});var H=a(116),R=a.p+"static/media/README.39430bf8.md";const E=()=>{const e=M(),[t,a]=Object(i.useState)("");return Object(i.useEffect)((()=>{fetch(R).then((e=>e.text())).then((e=>{a(e)}))}),[]),Object(d.jsx)("div",{className:e.root,children:Object(d.jsx)(H.a,{children:t})})},M=Object(l.a)({root:{minWidth:"100%",minHeight:"100%",padding:"24px 20%",boxSizing:"border-box","& p":{color:"rgba(255,255,255,.68)"},"& hr":{margin:"24px 0px",borderTop:"1px solid rgba(255,255,255,.3)",borderBottom:"0px",borderLeft:"0px",borderRight:"0px"},"& p, & li":{lineHeight:"24px"},"& li":{marginTop:"12px"}},"@media (min-width: 1024px)":{root:{padding:"24px 32px"}}},{name:"Home"}),A=O.a`
query pokemon($id: String, $name: String){
    pokemon(id: $id, name: $name){
      id
      number
      name
      weight{
        minimum
        maximum
      }
      height{
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
}
`,W=e=>{let{pokemonDetails:t}=e;const a=q(),i=[{label:"Number",value:t.number},{label:"Weight Range",value:`${t.weight.minimum} - ${t.weight.maximum}`},{label:"Height Range",value:`${t.height.minimum} - ${t.height.maximum}`},{label:"Classification",value:t.classification},{label:"Types",value:t.types.join(", ")},{label:"Resistant",value:t.resistant.join(", ")},{label:"Weaknesses",value:t.weaknesses.join(", ")},{label:"Max-Cp",value:t.maxCP},{label:"Max-Hp",value:t.maxHP}];return Object(d.jsx)(d.Fragment,{children:i.map((e=>{let{label:t,value:i}=e;return Object(d.jsxs)("div",{className:a.field,children:[Object(d.jsxs)("span",{className:a.label,children:[" ",t," : "]}),Object(d.jsx)("span",{className:a.value,children:i})]},t)}))})},q=Object(l.a)({field:{display:"flex",gap:"10px"},label:{color:"#00acc1",width:"40%"},value:{width:"60%",color:"rgba(255,255,255,.68)"}},{name:"Field"}),J=()=>{var e,t;const a=_(),n=Object(c.p)(),s=Object(c.r)(),o=Object(c.t)(),l=(null===(e=n.state)||void 0===e?void 0:e.id)||o.id,r=null===(t=n.state)||void 0===t?void 0:t.name,{pokemonDetails:p,loading:x}=((e,t)=>{const{data:a,...n}=Object(u.a)(A,{variables:{id:e,name:t}});return{pokemonDetails:Object(i.useMemo)((()=>(null===a||void 0===a?void 0:a.pokemon)||{}),[a]),...n}})(l,r);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{onClick:()=>s("/pokemon"),className:a.modalContainer,children:Object(d.jsxs)("div",{onClick:e=>e.stopPropagation(),className:a.modalBody,children:[Object(d.jsx)("span",{onClick:()=>s("/pokemon"),className:"material-icons",children:"close"}),x&&Object(d.jsx)(f,{}),!x&&!p.id&&Object(d.jsx)("h3",{children:" Details Not Found!"}),Object(d.jsx)(d.Fragment,{children:!x&&p.id&&Object(d.jsxs)("div",{className:a.details,children:[Object(d.jsx)("div",{className:a.avatar,children:Object(d.jsx)("img",{src:p.image,alt:p.name})}),Object(d.jsx)("div",{className:a.divider}),Object(d.jsxs)("div",{className:a.info,children:[Object(d.jsx)("h2",{children:p.name}),Object(d.jsx)(W,{pokemonDetails:p})]})]})})]})})})},_=Object(l.a)({modalContainer:{width:"100vw",height:"100vh",position:"fixed",background:"rgba(0,0,0,0.5)",top:"0",left:"0",overflow:"auto",zIndex:"101"},modalBody:{position:"absolute",top:"50%",left:"50%",width:"50vw",height:"400px",transform:"translate(-50%,-50%)",background:"#171e2b",boxShadow:"0px 0px 1px 1px rgb(255 255 255 / 10%)",padding:"35px","& span.material-icons":{position:"absolute",top:"7px",right:"7px",cursor:"pointer"}},details:{boxShadow:"0px 0px 1px 1px rgb(255 255 255 / 10%)",display:"flex",gap:"10px",height:"100%"},avatar:{display:"flex",alignItems:"center",justifyContent:"center","& img":{width:"90%",height:"90%"}},divider:{boxShadow:"0px 0px 1px 1px rgb(255 255 255 / 10%)",width:"0px",height:"100%"},info:{display:"flex",flexDirection:"column",gap:"10px",padding:"10px"},"@media only screen and (max-width: 768px)":{modalBody:{width:"80vw",zIndex:"101",padding:"20px",top:"35%",height:"60%","& span.material-icons":{fontSize:"18px",top:"0",right:"0"}},details:{boxShadow:"0px 0px 1px 1px rgb(255 255 255 / 10%)",display:"flex",flexDirection:"column",gap:"10px",height:"100%"},avatar:{display:"flex",alignItems:"center",justifyContent:"center","& img":{width:"60%"}},info:{gap:"5px",padding:"10px","& h2":{fontSize:"18px"},fontSize:"14px"},divider:{width:"100%",height:"0px"}}},{name:"PokemonDetails"});const G=Object(l.a)({root:{background:"#171E2b",minHeight:"100vh",minWidth:"100vw",height:"100%",width:"100%",display:"flex"},content:{flex:"1",overflow:"hidden",position:"relative"},scrollableArea:{position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"auto"}},{name:"App"});var K=function(){const e=G();return Object(d.jsx)(I.a,{client:$,children:Object(d.jsx)(x,{children:Object(d.jsx)("div",{className:e.root,children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(j,{}),Object(d.jsx)("div",{className:e.content,children:Object(d.jsx)("div",{className:e.scrollableArea,children:Object(d.jsxs)(c.e,{children:[Object(d.jsx)(c.c,{path:"/",element:Object(d.jsx)(c.a,{to:"/pokemon-list"})}),Object(d.jsx)(c.c,{path:"/pokemon-list",element:Object(d.jsx)(E,{})}),Object(d.jsx)(c.c,{path:"/pokemon-list/pokemon",element:Object(d.jsx)(T,{}),children:Object(d.jsx)(c.c,{path:"/pokemon-list/pokemon/:id",element:Object(d.jsx)(J,{})})})]})})})]})})})})};var Q=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,122)).then((t=>{let{getCLS:a,getFID:i,getFCP:n,getLCP:s,getTTFB:o}=t;a(e),i(e),n(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(K,{})}),document.getElementById("root")),Q()}},[[91,1,2]]]);
//# sourceMappingURL=main.9c7bf692.chunk.js.map