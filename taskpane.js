!function(){var e={77325:function(e,t,n){"use strict";e.exports=n.p+"assets/spin.gif"},54058:function(e,t,n){"use strict";e.exports=n.p+"cac61f972a622d75c86e.js"},58394:function(e,t,n){"use strict";e.exports=n.p+"1fda685b81e1123773f6.css"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n.b=document.baseURI||self.location.href,function(){Office.onReady((t=>{console.log(`%c Flex365x Outlook Addin: ${e()} A`,"background: #555; color: #fff; padding: 3px;"),console.log("taskpane ready"),Office.context.mailbox.addHandlerAsync(Office.EventType.ItemChanged,i),document.querySelector("#flex-init").style.display="none",o()}));const e=()=>{const e=new Date(111111);return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]+" "+e.getDate().toString()+" "+e.getFullYear().toString()+" "+(e.getHours()<10?"0":"")+e.getHours().toString()+":"+(e.getMinutes()<10?"0":"")+e.getMinutes().toString()},t=e=>{window.open(`https://44g7q3.sharepoint.com/sites/Flex/SitePages/CollabHome.aspx?sw=bypass&search=${e}`)},n=e=>{let t="";const n=(e,t)=>{let n="";const r=[];let a=0,o="";do{o=e.substr(a,t),""!==o&&r.push(o),a+=t}while(""!==o);return r.length>-1&&(n=r.join("\r\n")),n};t+=`To: ${e.to}\r\nFrom: ${e.sender}\r\nCC: ${e.cc}\r\nSubject: ${e.subject}\r\nDate: ${e.date}\r\n`,t+="Content-Type: multipart/mixed; boundary=--boundary_text_string\r\n",t+="\r\n----boundary_text_string\r\nContent-Type: text/html; charset=ISO-8859-1\r\n",t+="Content-Transfer-Encoding: quoted-printable\r\n\r\n",t+=`<html><head></head><body>${e.body}</body></html>`;for(const r of e.attachments)t+="\r\n\r\n----boundary_text_string\r\n",t+=`Content-Type: ${r.contentType}; name="${r.name}"\r\n`,t+=`Content-Disposition: attachment; filename="${r.name}"; size=${r.size.toString()}\r\n`,t+="Content-Transfer-Encoding: base64\r\n\r\n",t+=`${n(r.base64Content,76)}`;return t+="\r\n\r\n----boundary_text_string--",t},r=e=>{e.dataTransfer.setData("text",JSON.stringify({to:theMailItem.to,sender:theMailItem.sender,subject:theMailItem.subject,date:theMailItem.date,cc:theMailItem.cc,body:theMailItem.body,numAttachments:theMailItem.attachments.length.toString(),filename:`${theMailItem.subject.replace(/[^a-z0-9+]+/gi,"_")}_${(new Date).getMilliseconds().toString()}${Math.floor(1e3*Math.random())}.eml`,eml:n(theMailItem)}))},a=(e,t)=>new Promise<Office.AsyncResult<Office.AttachmentContent>>((n,r)=>{e.getAttachmentContentAsync(t,null,(e=>{e.status===Office.AsyncResultStatus.Succeeded?n(e):r(e)}))}),o=()=>{console.log("updateReadUI called");const e=document.querySelector("#flex-app-body"),n=document.querySelector("#flex-select-item-prompt"),o=document.querySelector("#flex-wait"),i=document.querySelector("#flex-search-to-container"),c=document.querySelector("#flex-search-link-sender-name"),l=document.querySelector("#flex-search-link-sender-address");if(!(i&&c&&l&&e&&n&&o))return;e.style.display="none",n.style.display="none",o.style.display="flex",i.replaceChildren(),c.replaceChildren(),l.replaceChildren();const d=Office.context.mailbox.item,u={to:"",sender:"",subject:"",date:"",cc:"",body:"",attachments:[]};if(!d)return o.style.display="none",void(n.style.display="flex");u.sender=s(d.sender),u.date=`${d.dateTimeCreated.toUTCString()}`,d.to.forEach((e=>{u.to+=(u.to.length>0?"; ":"")+s(e)})),d.cc.forEach((e=>{u.cc+=(u.cc.length>0?"; ":"")+s(e)})),u.subject=d.subject,d.body.getAsync(Office.CoercionType.Html,null,(async s=>{u.body=s.value;for(const e of d.attachments)try{const t=await a(d,e.id);u.attachments.push({id:e.id,name:e.name,contentType:e.contentType,size:e.size,base64Content:t.value.content})}catch(e){console.log("error caught"),console.log(e)}theMailItem=Object.assign({},u);const i=document.querySelector("#flex-drag-envelope");i&&i.addEventListener("dragstart",r);const p=document.createElement("a");p.href="javascript:void(0)",p.innerText=d.sender.displayName,p.addEventListener("click",(()=>t(`${d.sender.displayName}`))),c.replaceChildren(),c.append(p);const m=document.createElement("a");m.href="javascript:void(0)",m.innerText=d.sender.emailAddress,m.addEventListener("click",(()=>t(`${d.sender.emailAddress}`))),l.replaceChildren(),l.append(m);const y=document.querySelector("#flex-search-to-container");y&&(y.replaceChildren(),d.to.forEach((e=>{if(e.emailAddress!==d.sender.emailAddress){const n=document.createElement("div"),r=document.createElement("a");if(r.href="javascript:void(0)",r.innerHTML=`${e.displayName}`,r.addEventListener("click",(()=>t(`${r.innerHTML}`))),n.appendChild(r),y.children.length>0&&(n.style.paddingTop="10px"),y.appendChild(n),e.displayName!==e.emailAddress){const n=document.createElement("div"),r=document.createElement("a");r.href="javascript:void(0)",r.innerHTML=`${e.emailAddress}`,r.addEventListener("click",(()=>t(`${r.innerHTML}`))),n.appendChild(r),y.appendChild(n)}}}))),o.style.display="none",n.style.display="none",e.style.visibility="hidden",e.style.display="flex";const h=y;h.style.resize="",h.style.overflow="",h.style.height="auto",h.getBoundingClientRect().height>120&&(h.style.resize="vertical",h.style.overflow="auto",h.style.height="120px"),e.style.visibility=""}))},s=e=>`${e.displayName}${-1===e.displayName.indexOf("@")?` (${e.emailAddress})`:""}`;function i(e){console.log("hit2"),o()}}(),function(){"use strict";new URL(n(54058),n.b),new URL(n(58394),n.b),new URL(n(77325),n.b)}()}();
//# sourceMappingURL=taskpane.js.map