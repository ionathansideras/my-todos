(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function K(){const e=s();if(localStorage.getItem("projects")){const t=JSON.parse(localStorage.getItem("projects"));e.push(...t)}else{const t=M();localStorage.setItem("projects",JSON.stringify(t)),e.push(...t)}}function m(){const e=s();localStorage.setItem("projects",JSON.stringify(e))}function M(){return[{id:"welcome-project",name:"General",todos:[{id:"1",name:"Welcome",details:"In this website you can create projects and add todo's to them, enjoy!",priority:"Not Important",deadline:new Date().getDate()+"-"+(new Date().getMonth()+1)+"-"+new Date().getFullYear()}],active:!0}]}function Y(e){const t=s(),n=t.filter(r=>r.id!==e);t.splice(0,t.length,...n),q(),m()}function F(){document.querySelector(".todo-form").classList.add("todo-form-visible")}function v(){document.querySelector(".todo-form").classList.remove("todo-form-visible")}function $(e,t){const r=s().find(o=>o.id===t);r.todos=r.todos.filter(o=>o.id!==e),v(),h(),m()}function C(e){document.querySelector(".cover").classList.add("cover-visible"),document.querySelector(".cover").style=`z-index: ${e}`}function S(){document.querySelector(".cover").classList.remove("cover-visible")}function k(e){const t=document.querySelector("#todo-name-input");t.value=e.name;const n=document.querySelector("#todo-details-input");n.value=e.details;const r=document.querySelector("#todo-priority-input");r.value=e.priority;const o=document.querySelector("#todo-deadline-input");o.value=e.deadline}const V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtUlEQVR4nO2VOwoCMRRFU2ltE9xDdiCKtu7I0tL1ODuYaDXTuQNdhxx5kCLE+eWpII6nCS8k95AfMWYUAHueOWjDzujxQwT+BUFpxgFKzLcKFsCyIW+d9qsEpmVVXWP/gt/boh0wB2YfEajIFQAnoAZsqG2o/bsEdei+AC60QtUrADbAKhXIK47G2yj0Hslsm+DGMApgGua4KFxa13UGW+DaE34EJqoV5JJ9BgqBfLNVcoukLh83rJzd5SYWqAAAAABJRU5ErkJggg==",H="/my-todos/assets/edit-cac372da.svg";function w(e){e.target.id==="todo-name-input"?b(e.target):e.target.id==="todo-details-input"&&I(e.target)}function b(e){!/\S/.test(e.value)||e.value.length>20?(e.style.outlineColor="rgb(255, 70, 70)",document.querySelector(".name-range").textContent=`${e.value.length} / 20`,document.querySelector(".name-range").style.color="rgb(255, 70, 70)",P(!1)):(e.style.outlineColor="rgb(70, 255, 70)",document.querySelector(".name-range").textContent=`${e.value.length} / 20`,document.querySelector(".name-range").style.color="rgb(70, 255, 70)",P(!0))}function I(e){!/\S/.test(e.value)||e.value.length>70?(e.style.outlineColor="rgb(255, 70, 70)",document.querySelector(".details-range").textContent=`${e.value.length} / 70`,document.querySelector(".details-range").style.color="rgb(255, 70, 70)",T(!1)):(e.style.outlineColor="rgb(70, 255, 70)",document.querySelector(".details-range").textContent=`${e.value.length} / 70`,document.querySelector(".details-range").style.color="rgb(70, 255, 70)",T(!0))}function h(){const t=s().find(o=>o.active===!0),n=t==null?void 0:t.todos,r=document.querySelector("main");r.innerHTML="",n==null||n.forEach(o=>{const c=document.createElement("section");c.classList.add("todo");const d=document.createElement("div");d.classList.add("todo-div");const p=document.createElement("h2");p.classList.add("todo-name"),p.textContent=o.name;const l=document.createElement("img");l.classList.add("delete-todo"),l.src=V,l.addEventListener("click",()=>{$(o.id,t.id)});const a=document.createElement("button");a.setAttribute("id","edit"),a.textContent="Edit",a.addEventListener("click",()=>{F(),C(50),document.querySelector(".todo-form").classList.add("edit"),ae({todoId:o.id,projectId:t.id}),k(o);const W=document.querySelector("#todo-name-input"),G=document.querySelector("#todo-details-input");b(W),I(G)});const f=document.createElement("p");f.classList.add("todo-deadline"),f.textContent=o.deadline;const u=document.createElement("img");u.src=H;const j=document.createElement("p");j.classList.add("todo-details"),j.textContent=o.details;const L=document.createElement("span"),J=o.priority.toLowerCase().replace(" ","-");L.classList.add("todo-priority"),L.classList.add(J),a.appendChild(u);const y=document.createElement("div");y.classList.add("todo-buttons-container"),y.appendChild(f),y.appendChild(a),d.appendChild(l),d.appendChild(L),d.appendChild(p),d.appendChild(j),d.appendChild(y),c.appendChild(d),r.appendChild(c)})}function q(){let e=s();z(e);const t=document.querySelector(".projects");t.innerHTML="",e.forEach(n=>{const r=document.createElement("div");r.setAttribute("data-id",n.id);const o=document.createElement("h2");o.classList.add("project-name");const c=document.createElement("img");c.classList.add("delete-project"),c.src=V,X(n,r),c.addEventListener("click",()=>{Y(n.id)}),o.textContent=n.name,r.appendChild(o),r.appendChild(c),t.appendChild(r)}),h()}function X(e,t){t.dataset.active=e.active}function z(e){e.every(t=>t.active===!1)&&e[0]&&(e[0].active=!0)}var g,Q=new Uint8Array(16);function Z(){if(!g&&(g=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!g))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(Q)}const _=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function ee(e){return typeof e=="string"&&_.test(e)}var i=[];for(var E=0;E<256;++E)i.push((E+256).toString(16).substr(1));function te(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+"-"+i[e[t+4]]+i[e[t+5]]+"-"+i[e[t+6]]+i[e[t+7]]+"-"+i[e[t+8]]+i[e[t+9]]+"-"+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]).toLowerCase();if(!ee(n))throw TypeError("Stringified UUID is invalid");return n}function O(e,t,n){e=e||{};var r=e.random||(e.rng||Z)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return te(r)}function oe(){let e=s(),t=document.querySelector("input");const n={id:O(),name:t.value,todos:[],active:!1};t.value="",e.push(n),q()}function D(){document.querySelector("#todo-name-input").value="",document.querySelector("#todo-details-input").value="",document.querySelector("#todo-priority-input").value="Not Important",document.querySelector("#todo-deadline-input").value=""}function ne(){const e=document.querySelector("#todo-name-input").value.trim(),t=document.querySelector("#todo-details-input").value.trim(),n=document.querySelector("#todo-priority-input").value,r=document.querySelector("#todo-deadline-input").value.trim();return{todoName:e,todoDetails:t,todoPriority:n,todoDeadline:r}}function re(){let e=s();const{todoName:t,todoDetails:n,todoPriority:r,todoDeadline:o}=ne(),c={id:O(),name:t,details:n,priority:r,deadline:o};e.forEach(d=>{d.active&&d.todos.push(c)}),h(),m(),D()}function ce(e,t){const c=s().find(u=>u.id===t).todos.find(u=>u.id===e),d=document.querySelector(".todo-form");d.classList.add("edit");const p=document.querySelector("#todo-name-input"),l=document.querySelector("#todo-details-input"),a=document.querySelector("#todo-priority-input"),f=document.querySelector("#todo-deadline-input");c.name=p.value,c.details=l.value,c.priority=a.value,c.deadline=f.value,h(),m(),D(),d.classList.remove("edit")}function de(e){s().forEach(n=>{n.id===e.target.parentNode.dataset.id?n.active=!0:n.active=!1}),q()}function ie(){const e=document.getElementById("mobile-menu");e.classList.contains("menu-open")?(e.classList.remove("menu-open"),S()):(e.classList.add("menu-open"),C(1))}function x(e){!/\S/.test(e.value)||e.value.length>20?(e.style.outlineColor="red",document.querySelector(".project-range").style.color="rgb(255, 70, 70)",document.querySelector(".project-range").textContent=`${e.value.length} / 20`,N(!1)):(e.style.outlineColor="rgb(70, 255, 70)",document.querySelector(".project-range").style.color="rgb(70, 255, 70)",document.querySelector(".project-range").textContent=`${e.value.length} / 20`,N(!0)),e.value.length===0?document.querySelector(".project-range").style.visibility="hidden":document.querySelector(".project-range").style.visibility="visible"}let se=[],A={todoId:"",projectId:""};function ae(e){A=e}let U=!1,R=!1,B=!1;K();q();function s(){return se}function N(e){U=e}function P(e){R=e}function T(e){B=e}document.querySelector(".todo-form").addEventListener("submit",e=>{e.preventDefault(),R&&B&&(e.target.classList.contains("edit")?ce(A.todoId,A.projectId):re(),v(),S())});document.querySelector("aside").addEventListener("click",e=>{e.target.classList.contains("project-name")&&(de(e),m()),(e.target.id==="mobile-menu"||e.target.classList.contains("bar"))&&ie()});document.querySelector(".project-input").addEventListener("focus",e=>{x(e.target)});document.querySelector(".project-input").addEventListener("input",e=>{x(e.target)});document.querySelector(".project-form").addEventListener("submit",e=>{e.preventDefault(),U&&(oe(),m());const t=document.querySelector(".project-input");x(t)});document.querySelector(".open-todo-form").addEventListener("click",()=>{D(),C(50),F();const e=document.querySelector("#todo-name-input"),t=document.querySelector("#todo-details-input");b(e),I(t)});document.querySelector(".hide-todo-form").addEventListener("click",()=>{var e,t;S(),v(),(t=(e=document.querySelector(".edit"))==null?void 0:e.classList)==null||t.remove("edit")});document.querySelector(".cover").addEventListener("click",()=>{var e,t,n,r;S(),v(),(t=(e=document.querySelector(".edit"))==null?void 0:e.classList)==null||t.remove("edit"),(r=(n=document.querySelector(".menu-open"))==null?void 0:n.classList)==null||r.remove("menu-open")});const le=document.querySelector("#todo-name-input"),ue=document.querySelector("#todo-details-input"),me=[le,ue];me.forEach(e=>{e.addEventListener("focus",t=>{w(t)}),e.addEventListener("input",t=>{w(t)})});
