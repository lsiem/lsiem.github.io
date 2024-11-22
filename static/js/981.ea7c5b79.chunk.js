"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[981],{9981:(e,a,t)=>{t.r(a),t.d(a,{default:()=>B});var o=t(5043),n=t(6446),r=t(7872),i=t(5865),l=t(8587),s=t(8168),c=t(8387),d=t(3030),p=t(8610),u=t(7266),h=t(4535),m=t(1542),v=t(8206),x=t(6236),b=t(6803),g=t(2532),f=t(2372);function S(e){return(0,f.Ay)("MuiButton",e)}const y=(0,g.A)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const z=o.createContext({});const A=o.createContext(void 0);var w=t(579);const C=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],k=e=>(0,s.A)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),$=(0,h.Ay)(x.A,{shouldForwardProp:e=>(0,m.A)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],a[`${t.variant}${(0,b.A)(t.color)}`],a[`size${(0,b.A)(t.size)}`],a[`${t.variant}Size${(0,b.A)(t.size)}`],"inherit"===t.color&&a.colorInherit,t.disableElevation&&a.disableElevation,t.fullWidth&&a.fullWidth]}})((e=>{let{theme:a,ownerState:t}=e;var o,n;const r="light"===a.palette.mode?a.palette.grey[300]:a.palette.grey[800],i="light"===a.palette.mode?a.palette.grey.A100:a.palette.grey[700];return(0,s.A)({},a.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(a.vars||a).shape.borderRadius,transition:a.transitions.create(["background-color","box-shadow","border-color","color"],{duration:a.transitions.duration.short}),"&:hover":(0,s.A)({textDecoration:"none",backgroundColor:a.vars?`rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})`:(0,u.X4)(a.palette.text.primary,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:(0,u.X4)(a.palette[t.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(a.vars||a).palette[t.color].main}`,backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:(0,u.X4)(a.palette[t.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:a.vars?a.vars.palette.Button.inheritContainedHoverBg:i,boxShadow:(a.vars||a).shadows[4],"@media (hover: none)":{boxShadow:(a.vars||a).shadows[2],backgroundColor:(a.vars||a).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(a.vars||a).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[t.color].main}}),"&:active":(0,s.A)({},"contained"===t.variant&&{boxShadow:(a.vars||a).shadows[8]}),[`&.${y.focusVisible}`]:(0,s.A)({},"contained"===t.variant&&{boxShadow:(a.vars||a).shadows[6]}),[`&.${y.disabled}`]:(0,s.A)({color:(a.vars||a).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(a.vars||a).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(a.vars||a).palette.action.disabled,boxShadow:(a.vars||a).shadows[0],backgroundColor:(a.vars||a).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(a.vars||a).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(a.vars||a).palette[t.color].main,border:a.vars?`1px solid rgba(${a.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,u.X4)(a.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:a.vars?a.vars.palette.text.primary:null==(o=(n=a.palette).getContrastText)?void 0:o.call(n,a.palette.grey[300]),backgroundColor:a.vars?a.vars.palette.Button.inheritContainedBg:r,boxShadow:(a.vars||a).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(a.vars||a).palette[t.color].contrastText,backgroundColor:(a.vars||a).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:a.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:a.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:a.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:a.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:a.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:a.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(e=>{let{ownerState:a}=e;return a.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${y.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${y.disabled}`]:{boxShadow:"none"}}})),I=(0,h.Ay)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.startIcon,a[`iconSize${(0,b.A)(t.size)}`]]}})((e=>{let{ownerState:a}=e;return(0,s.A)({display:"inherit",marginRight:8,marginLeft:-4},"small"===a.size&&{marginLeft:-2},k(a))})),N=(0,h.Ay)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.endIcon,a[`iconSize${(0,b.A)(t.size)}`]]}})((e=>{let{ownerState:a}=e;return(0,s.A)({display:"inherit",marginRight:-4,marginLeft:8},"small"===a.size&&{marginRight:-2},k(a))})),j=o.forwardRef((function(e,a){const t=o.useContext(z),n=o.useContext(A),r=(0,d.A)(t,e),i=(0,v.b)({props:r,name:"MuiButton"}),{children:u,color:h="primary",component:m="button",className:x,disabled:g=!1,disableElevation:f=!1,disableFocusRipple:y=!1,endIcon:k,focusVisibleClassName:j,fullWidth:R=!1,size:W="medium",startIcon:E,type:B,variant:M="text"}=i,L=(0,l.A)(i,C),T=(0,s.A)({},i,{color:h,component:m,disabled:g,disableElevation:f,disableFocusRipple:y,fullWidth:R,size:W,type:B,variant:M}),V=(e=>{const{color:a,disableElevation:t,fullWidth:o,size:n,variant:r,classes:i}=e,l={root:["root",r,`${r}${(0,b.A)(a)}`,`size${(0,b.A)(n)}`,`${r}Size${(0,b.A)(n)}`,`color${(0,b.A)(a)}`,t&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${(0,b.A)(n)}`],endIcon:["icon","endIcon",`iconSize${(0,b.A)(n)}`]},c=(0,p.A)(l,S,i);return(0,s.A)({},i,c)})(T),O=E&&(0,w.jsx)(I,{className:V.startIcon,ownerState:T,children:E}),P=k&&(0,w.jsx)(N,{className:V.endIcon,ownerState:T,children:k}),_=n||"";return(0,w.jsxs)($,(0,s.A)({ownerState:T,className:(0,c.A)(t.className,V.root,x,_),component:m,disabled:g,focusRipple:!y,focusVisibleClassName:(0,c.A)(V.focusVisible,j),ref:a,type:B},L,{classes:V,children:[O,u,P]}))}));var R=t(1547),W=t(954);const E=(0,R.CS)(n.A);const B=function(){const e=(0,R.zh)({from:{opacity:0,transform:"translateY(20px)"},to:{opacity:1,transform:"translateY(0)"},config:{duration:1e3}});return(0,w.jsx)(r.A,{maxWidth:"lg",className:"contact-container",children:(0,w.jsxs)(n.A,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8,minHeight:"100vh",py:4},children:[(0,w.jsx)(n.A,{sx:{flex:1},children:(0,w.jsx)("div",{className:"profile-image-container",children:(0,w.jsx)("img",{src:"https://lsiem.de/lasse_profile.webp",alt:"Lasse Siemoneit",className:"profile-image"})})}),(0,w.jsxs)(E,{style:e,sx:{flex:1,textAlign:"center"},children:[(0,w.jsx)(i.A,{variant:"h2",className:"contact-title",gutterBottom:!0,children:"Kontaktiere mich"}),(0,w.jsx)(i.A,{variant:"h6",className:"contact-subtitle",sx:{mb:4},children:"Interessiert an meiner Arbeit? Ich freue mich auf deine Kontaktaufnahme f\xfcr einen pers\xf6nlichen Austausch."}),(0,w.jsxs)(n.A,{className:"social-links",sx:{mb:4},children:[(0,w.jsx)("a",{href:W.ze.github,target:"_blank",rel:"noopener noreferrer",className:"social-icon github",children:(0,w.jsx)("i",{className:"fab fa-github"})}),(0,w.jsx)("a",{href:W.ze.linkedin,target:"_blank",rel:"noopener noreferrer",className:"social-icon linkedin",children:(0,w.jsx)("i",{className:"fab fa-linkedin-in"})}),(0,w.jsx)("a",{href:`mailto:${W.ze.gmail}`,className:"social-icon google",children:(0,w.jsx)("i",{className:"fab fa-google"})}),(0,w.jsx)("a",{href:W.ze.instagram,target:"_blank",rel:"noopener noreferrer",className:"social-icon instagram",children:(0,w.jsx)("i",{className:"fab fa-instagram"})})]}),(0,w.jsx)(j,{variant:"contained",className:"resume-button",href:"/path/to/your/resume.pdf",target:"_blank",children:"Zu meinem Lebenslauf"})]})]})})}}}]);
//# sourceMappingURL=981.ea7c5b79.chunk.js.map