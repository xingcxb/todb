import{u as C,m as x,a as _,o as y,b as N,e as a,f as n,F as I,p as R,q as S,d as i,s,h as p}from"./vendor.js";import{_ as P}from"./index.js";const f=d=>(R("data-v-84a2a150"),d=d(),S(),d),V=f(()=>i("br",null,null,-1)),j=p("\u8FDE\u63A5\u540D:"),J=f(()=>i("br",null,null,-1)),O=p("\u4E3B\u673A:"),B=p("\u7AEF\u53E3"),L=p("\u7528\u6237\u540D:"),A=p("\u5BC6\u7801:"),E=p("\u4FDD\u5B58\u5BC6\u7801"),F=f(()=>i("br",null,null,-1)),H=p("\u6D4B\u8BD5\u8FDE\u63A5"),T=p("\u786E\u5B9A"),Z=p("\u53D6\u6D88"),q={setup(d){const m=C();let t=x({alias:"",hostURL:"",port:"",username:"",password:"",savePassword:!1});function h(){window.go.main.App.TestConnection(JSON.stringify(t)).then(()=>{})}function w(){window.go.main.App.Ok(JSON.stringify(t)).then(v=>{var o=JSON.parse(v);o.code===200&&m.push({name:"Home"})})}function k(){m.push({name:"Home"})}return(v,o)=>{const g=_("a-image"),e=_("a-col"),u=_("a-row"),r=_("a-input"),U=_("a-input-password"),b=_("a-checkbox"),c=_("a-button");return y(),N(I,null,[a(u,null,{default:n(()=>[a(e,{span:24,class:"imageRow"},{default:n(()=>[a(g,{width:100,height:72,src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"})]),_:1})]),_:1}),V,a(u,null,{default:n(()=>[a(e,{span:1}),a(e,{span:4},{default:n(()=>[j]),_:1}),a(e,{span:18},{default:n(()=>[a(r,{value:s(t).alias,"onUpdate:value":o[0]||(o[0]=l=>s(t).alias=l),placeholder:"\u8FDE\u63A5\u522B\u540D"},null,8,["value"])]),_:1}),a(e,{span:1})]),_:1}),J,a(u,null,{default:n(()=>[a(e,{span:1}),a(e,{span:4},{default:n(()=>[O]),_:1}),a(e,{span:18},{default:n(()=>[a(r,{value:s(t).hostURL,"onUpdate:value":o[1]||(o[1]=l=>s(t).hostURL=l),placeholder:"\u8FDE\u63A5\u5730\u5740"},null,8,["value"])]),_:1}),a(e,{span:1})]),_:1}),a(u,null,{default:n(()=>[a(e,{span:1}),a(e,{span:4},{default:n(()=>[B]),_:1}),a(e,{span:5},{default:n(()=>[a(r,{value:s(t).port,"onUpdate:value":o[2]||(o[2]=l=>s(t).port=l),placeholder:"\u8FDE\u63A5\u7AEF\u53E3"},null,8,["value"])]),_:1}),a(e,{span:14})]),_:1}),a(u,null,{default:n(()=>[a(e,{span:1}),a(e,{span:4},{default:n(()=>[L]),_:1}),a(e,{span:10},{default:n(()=>[a(r,{value:s(t).username,"onUpdate:value":o[3]||(o[3]=l=>s(t).username=l),placeholder:"\u7528\u6237\u540D"},null,8,["value"])]),_:1}),a(e,{span:9})]),_:1}),a(u,null,{default:n(()=>[a(e,{span:1}),a(e,{span:4},{default:n(()=>[A]),_:1}),a(e,{span:10},{default:n(()=>[a(U,{value:s(t).password,"onUpdate:value":o[4]||(o[4]=l=>s(t).password=l),placeholder:"\u5BC6\u7801"},null,8,["value"])]),_:1}),a(e,{span:9})]),_:1}),a(u,null,{default:n(()=>[a(e,{span:5}),a(e,{span:18},{default:n(()=>[a(b,{checked:s(t).savePassword,"onUpdate:checked":o[5]||(o[5]=l=>s(t).savePassword=l)},{default:n(()=>[E]),_:1},8,["checked"])]),_:1}),a(e,{span:1})]),_:1}),F,a(u,null,{default:n(()=>[a(e,{span:1}),a(e,{span:3},{default:n(()=>[a(c,{type:"primary",onClick:h},{default:n(()=>[H]),_:1})]),_:1}),a(e,{span:13}),a(e,{span:3},{default:n(()=>[a(c,{onClick:w},{default:n(()=>[T]),_:1})]),_:1}),a(e,{span:3},{default:n(()=>[a(c,{onClick:k},{default:n(()=>[Z]),_:1})]),_:1})]),_:1})],64)}}};var D=P(q,[["__scopeId","data-v-84a2a150"]]);export{D as default};
