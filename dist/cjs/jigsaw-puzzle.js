"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=e=>t=>(e(t),t),t=(e=Math.random())=>.5*(Math.cos(6669.1337*Math.sin(1337.1337*(e+69)))+1),i=e=>t=>i=>("function"==typeof t?t(i):t)?e(i):i,n=(...e)=>t=>[...e].reduce(((e,t)=>t(e)),t),o=e=>JSON.parse(JSON.stringify(e)),s=(e,t,i)=>{const n=e+1,o={top:n>i?e-i:void 0,right:n%i!=0?e+1:void 0,bottom:n<=(t-1)*i?e+i:void 0,left:n%i!=(i>1?1:0)?e-1:void 0};return JSON.parse(JSON.stringify(o))},a=["top","right","bottom","left"],r=({shape:e,size:t})=>({shape:"out"===e?"in":"out",size:t}),c=["top","right","bottom","left"],d=(e,t)=>c.indexOf(e[0])>c.indexOf(t[0])?1:-1,p=(e,i)=>[...Array(e.y*e.x)].map(((t,i)=>({id:i,origin:{x:i%e.x,y:Math.floor(i/e.x)},pos:{x:0,y:0},neighbors:s(i,e.y,e.x),active:!1,connections:[]}))).reduce((e=>(i,n)=>{const o=(e,t)=>i.find((t=>t.id===e))?.sides[{top:"bottom",right:"left",bottom:"top",left:"right"}[t]],s=[...Object.entries({...(({neighbors:i})=>Object.keys(i).reduce(((n,s)=>{const a=o(i[s],s);return{[s]:a?r(a):t()>=.5?{shape:"out",size:e?Math.random():1}:{shape:"in",size:e?Math.random():1},...n}}),{}))(n),...(({neighbors:e})=>a.filter((t=>!Object.keys(e).includes(t))).reduce(((e,t)=>({[t]:{shape:"flat",size:1},...e})),{}))(n)})].sort(d).reduce(((e,[t,i])=>({...e,[t]:i})),{});return[{...n,sides:s},...i]})(i),[]),l=e=>[...new Set(e)],h=(e,t)=>t.active?-1:1,u=e=>t=>t.reduceRight(((t,i,n,o)=>[...t,e(i,n,o,t)]),[]);function x(e){const t=[...e];let i=t.length;for(;i>0;){let e=Math.floor(Math.random()*i);i--;let n=t[i];t[i]=t[e],t[e]=n}return t}const y=e=>Math.random()*(e- -1*e)+-1*e,f=(e=!1)=>i=>({...i,pieces:e?x(i.pieces).map(((e,t)=>({...e,connections:[],pos:{x:t%i.size.x/i.size.x*2-.4+y(.03),y:Math.floor(t/i.size.x)/i.size.y*2-.4+y(.03)}}))):i.pieces.map((e=>({...e,connections:[],pos:{x:2*t()-.5,y:2*t()-.5}})))}),m=(e,{x:t,y:i,width:n,height:o})=>t>=e.pos.x&&t<=e.pos.x+n&&i>=e.pos.y&&i<=e.pos.y+o,g=(e,{x:t,y:i})=>({x:t-e.pos.x,y:i-e.pos.y}),z=e((e=>{e.pieces=e.pieces.map((e=>({...e,active:!1})))})),v=(e,t)=>i=>i[e]===t,w=e((e=>{const t=e.pieces.filter((e=>e.active)),{size:i}=e;t.length&&t.length!==e.pieces.length&&t.forEach((t=>{Object.entries(t.neighbors).forEach((([n,o])=>{const s=e.pieces.find(v("id",o));if(((e,t,i,n)=>{const{attraction:o,size:s}=i,a=o/100,r=(e=>"top"===e||"bottom"===e)(n)?"y":"x",c="x"===r?"y":"x",d=!(e=>"top"===e||"left"===e)(n),p="y"===r?1/s.y:1/s.x,l=d?t.pos[r]+p:t.pos[r]-p;return e.pos[r]<=l+a&&e.pos[r]>=l-a&&e.pos[c]<=t.pos[c]+a&&e.pos[c]>=t.pos[c]-a})(s,t,e,n)){const o={x:s.pos.x+("right"===n?-1/i.x:"left"===n?1/i.x:0),y:s.pos.y+("top"===n?1/i.y:"bottom"===n?-1/i.y:0)};((e,[...t],i)=>{t.forEach((t=>{const n=e.pieces.find(v("id",t));n.pos={x:n.pos.x+i.x,y:n.pos.y+i.y}}))})(e,t.connections,{x:o.x-t.pos.x,y:o.y-t.pos.y}),t.pos=o,((e,t,i)=>{t.connections=l([t.id,i.id,...t.connections,...i.connections]),t.connections.forEach((i=>{const n=e.pieces.find((e=>e.id===i));n.connections=l(t.connections)})),i.connections.forEach((i=>{const n=e.pieces.find((e=>e.id===i));n.connections=l(t.connections)}))})(e,t,s)}}))}))})),b=e((e=>{"active"===e.status&&(e.moves=e.moves+1),e.pieces[0].connections.length!==e.size.y*e.size.x||e.done||(e.done=!0)})),M=({x:t,y:i})=>e((e=>{const n=e.pieces.find((e=>e.active));if(n)return void(e.status="active");!e.pieces.find((n=>m(n,{x:t,y:i,width:1/e.size.x,height:1/e.size.y})))||n?e.status="idle":e.status="ready"}));(()=>{if(!function(){const e=document.createElement("canvas").getContext("2d");e.fillRect(0,0,40,40),e.drawImage(e.canvas,-40,-40,80,80,50,50,20,20);const t=e.getImageData(50,50,30,30),i=new Uint32Array(t.data.buffer),n=(e,n)=>i[n*t.width+e];return[[9,9],[20,9],[9,20],[20,20]].some((([e,t])=>0!==n(e,t)))||[[10,10],[19,10],[10,19],[19,19]].some((([e,t])=>0===n(e,t)))}())return;const e=CanvasRenderingContext2D.prototype,t=e.drawImage;function i(e,t,i,n,o,s,a,r,c){const{width:d,height:p}=function(e){const t=t=>{const i=globalThis[t];return i&&e instanceof i};if(t("HTMLImageElement"))return{width:e.naturalWidth,height:e.naturalHeight};if(t("HTMLVideoElement"))return{width:e.videoWidth,height:e.videoHeight};if(t("SVGImageElement"))throw new TypeError("SVGImageElement isn't yet supported as source image.","UnsupportedError");if(t("HTMLCanvasElement")||t("ImageBitmap"))return e}(e);n<0&&(t+=n,n=Math.abs(n)),o<0&&(i+=o,o=Math.abs(o)),r<0&&(s+=r,r=Math.abs(r)),c<0&&(a+=c,c=Math.abs(c));const l=Math.max(t,0),h=Math.min(t+n,d),u=Math.max(i,0),x=Math.min(i+o,p),y=r/n,f=c/o;return[e,l,u,h-l,x-u,t<0?s-t*y:s,i<0?a-i*f:a,(h-l)*y,(x-u)*f]}function n(e){return[3,4,7,8].some((t=>!e[t]))}t&&(e.drawImage=function(e,o,s){const a=9===arguments.length;if(!a)return t.apply(this,[...arguments]);const r=i(...arguments);return n(r)?void 0:t.apply(this,r)})})();let E=1;const I={x:window.innerWidth/2,y:window.innerHeight/2},S=({x:e,y:t,bounding:i={x:1/0,y:1/0}})=>(I.x=I.x+e,I.y=I.y+t,{position:I,scale:E}),O=({focal:e,zoom:t,max:i=1e4,min:n=.05})=>{const o=E===i||E===n;E=((e,t,i)=>Math.max(t,Math.min(i,e)))(E*t,n,i);const s=o?I.x:e.x,a=o?I.y:e.y;return I.x=s-(s-I.x)*t,I.y=a-(a-I.y)*t,{position:I,scale:E}};var C=(e,{dpi:t=Math.min(2,window.devicePixelRatio),bounding:i=null,initScale:n=1,zoomable:o=!0}={})=>{e.style.touchAction="none",e.style.userSelect="none",e.style.webkitUserSelect="none",e.style.overscrollBehavior="contain";let s={},a=null;E=n;const r=t=>{e.dispatchEvent(new CustomEvent("pan",{detail:t,bubbles:!0,cancelable:!0,composed:!1}))};setTimeout((()=>r({scale:E,position:I})));const c=t=>{t.preventDefault(),s[t.pointerId]={x:t.offsetX,y:t.offsetY,deltaX:0,deltaY:0},e.addEventListener("pointerleave",p,{once:!0})},d=e=>{if(e.preventDefault(),!s[e.pointerId])return;s[e.pointerId]={x:e.offsetX,y:e.offsetY,deltaX:e.offsetX-s[e.pointerId].x,deltaY:e.offsetY-s[e.pointerId].y};const i=Object.values(s),{position:n}=S({x:s[e.pointerId].deltaX*t*.7,y:s[e.pointerId].deltaY*t*.7}),c=2!==Object.keys(s).length?1:Math.sqrt(Math.pow(i[1].x-i[0].x,2)+Math.pow(i[1].y-i[0].y,2));if(!o)return void r({position:n});const{scale:d}=O({focal:{x:e.offsetX*t,y:e.offsetY*t},zoom:2===Object.keys(s).length&&a?1+(c-a)/200:1});a=c,r({scale:d,position:n})},p=e=>{e.preventDefault(),delete s[e.pointerId],a=null};return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?(e.addEventListener("pointerdown",c),e.addEventListener("pointermove",d),e.addEventListener("pointerup",p),e.addEventListener("pointercancel",p)):e.addEventListener("wheel",(e=>{if(e.preventDefault(),e.ctrlKey){if(!o)return;r(O({focal:{x:e.offsetX*t,y:e.offsetY*t},zoom:1-e.deltaY/100}))}else r(S({x:-e.deltaX,y:-e.deltaY}))})),{zoom:e=>{O({focal:{x:window.innerWidth/2*t,y:window.innerHeight/2*t},zoom:e}),r({scale:E,position:I})},restore:()=>{I.x=window.innerWidth/2*Math.min(2,window.devicePixelRatio),I.y=window.innerHeight/2*Math.min(2,window.devicePixelRatio),r({scale:E,position:I})}}};const T=e=>{const{height:t,width:i}=getComputedStyle(e.parentElement),n=Math.min(2,window.devicePixelRatio);e.width=parseInt(i,0)*n,e.height=parseInt(t,0)*n},L=e((e=>{const{canvas:t,ctx:i}=e;i.save(),i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,window.innerWidth,window.innerHeight),i.restore()})),P=t=>e((e=>{L(e),t.pieces.map(Y(t,e))})),Y=(e,t)=>i=>{const n={x:t.size.x/e.size.x,y:t.size.y/e.size.y},{ctx:o,image:s}=t,a=t.shapes[i.id],r=Math.max(n.x,n.y);o.save(),o.translate(i.pos.x*t.size.x,i.pos.y*t.size.y);const c=!e.done&&(i.active||i.alsoActive),d=8/Math.max(t.zoom,4);o.lineWidth=c?2*d:d,o.shadowOffsetX=o.shadowOffsetY=-d/2,o.shadowBlur=d,o.shadowColor=c?"rgba(100, 100, 100, 1)":"rgba(50, 50, 50, 1)",o.stroke(a),o.clip(a),o.drawImage(s,i.origin.x*n.x-r,i.origin.y*n.y-r,n.x+r*t.dpi,n.y+r*t.dpi,i.pos.x/t.size.x-r,i.pos.y/t.size.y-r,n.x+r*t.dpi,n.y+r*t.dpi),o.restore()},X=(e,t,...i)=>{const n=t*Math.PI/180,{sin:o,cos:s}=Math;return i.map((([t,i])=>[(t-e.x)*s(n)-(i-e.y)*o(n)+e.x,(t-e.x)*o(n)+(i-e.y)*s(n)+e.y])).flat()},k=(e,t)=>{const[i]=e[0];return e.map((e=>X({x:i[0],y:i[1]},t,...e)))},R=(e,t)=>e.map((e=>e.map((e=>[e[0]+t.x,e[1]+t.y])))),A=({size:e,shapes:t,knobsize:i})=>{const n=new Path2D;if(4===!t.length)return;return[{x:0,y:0,angle:0},{x:e.x,y:0,angle:90},{x:e.x,y:e.y,angle:180},{x:0,y:e.y,angle:270}].forEach(((o,s)=>{const a=s%2==1?e.y:e.x,r=t[s];if("flat"===r){const e=X(o,o.angle,[o.x+a,o.y]);n.lineTo(...e)}else{const e=(({knobsize:e=1,length:t=100})=>{const i=t/2;return[[[0,0],[i-20*e,4*e],[i-13*e,0]],[[i-13*e,0],[i-10*e,-2*e],[i-12*e,-5*e]],[[i-12*e,-5*e],[i-30*e,-30*e],[i,-30*e]],[[i,-30*e],[i- -30*e,-30*e],[i- -12*e,-5*e]],[[i- -12*e,-5*e],[i- -10*e,-2*e],[i- -13*e,0]],[[i- -13*e,0],[i- -20*e,4*e],[t,0]]]})({length:a,knobsize:i[s]});k(R("in"===r?(e=>e.map((e=>e.map((e=>[e[0],-1*e[1]])))))(e):e,o),o.angle).forEach((e=>n.bezierCurveTo(...e.flat())))}})),n.closePath(),n},H=(e,t,i)=>i.reduce(((i,n)=>{const o=Object.values(n.sides),s=o.map((({shape:e})=>e)),a=o.map((({size:i})=>(.6+.4*i)*Math.min(e,t)/110));return{...i,[n.id]:A({size:{x:e,y:t},shapes:s,knobsize:a})}}),{});exports.puzzle=async({element:t,image:s="",pieces:a={x:6,y:4},attraction:r=5,aligned:c=!0,individualize:d=!1,zoom:l,zoomable:x=!0,beforeInit:y=(()=>{}),onInit:v=(()=>{}),onComplete:S=(()=>{}),onChange:O=(()=>{})})=>{const L="string"==typeof t?document.querySelector(t):t;if(!L)return;const{canvas:Y,ctx:X}=(e=>{const t=e&&"CANVAS"===e.tagName?e:document.createElement("canvas"),i=t.getContext("2d");return e&&"CANVAS"!==e.tagName&&(e.appendChild(t),t.style.width="100%",t.style.height="100%",T(t)),i.strokeStyle="rgba(220, 220, 220, 1)",i.lineCap="round",i.lineJoin="round",{canvas:t,ctx:i}})(L);y(Y);const{image:k,width:R,height:A}=await(N=s,new Promise((e=>{const t=new Image;t.onload=()=>{e({image:t,width:t.width,height:t.height})},t.src=N})));var N;const j={moves:0,status:"idle",done:!1,startTime:Date.now(),attraction:r,size:a,pieces:p(a,d)},D={url:s,zoom:1,position:{x:0,y:0},size:{x:R,y:A},canvas:Y,ctx:X,image:k,dpi:Math.min(2,window.devicePixelRatio),shapes:H(R/a.x,A/a.y,j.pieces)};let W={};W.puzzle=n(f(c))(j),W.ui=P(W.puzzle)(D);const{zoom:V,restore:J}=C(Y,{dpi:Math.min(2,window.devicePixelRatio),zoomable:x,initScale:l||Math.min(window.innerWidth/W.ui.size.x*.9,window.innerHeight/W.ui.size.y*.9)}),B=()=>{W.ui=n(P(W.puzzle),(t=>e((e=>{e.canvas.style.cursor="active"===t.status?"grabbing":"ready"===t.status?"grab":"default"})))(W.puzzle))(W.ui)};Y.addEventListener("pan",(e=>{e.preventDefault();const{detail:{scale:t,position:i}}=e;W.ui.zoom=t,W.ui.position=i,W.ui.ctx.setTransform(t,0,0,t,i.x,i.y),B()})),setTimeout((()=>v(W)));const G=({x:e,y:t})=>{const[i,n]=(({x:e,y:t},i=Math.min(2,window.devicePixelRatio))=>[(e*i-I.x)/E,(t*i-I.y)/E])({x:e,y:t},W.ui.dpi);return{x:i/W.ui.size.x,y:n/W.ui.size.y}};return W.ui.canvas.addEventListener("pointerdown",(({offsetX:e,offsetY:t})=>{const o=G({x:e,y:t});W.puzzle=n((({x:e,y:t})=>o=>{return{...o,pieces:n(u(((i,n,s,a)=>{return{...i,active:!(a.find((r="active",e=>e[r]))||!m(i,{x:e,y:t,width:1/o.size.x,height:1/o.size.y}))&&g(i,{x:e,y:t})};var r})),u(((i,n,o)=>({...i,active:o.find((e=>e.active&&e.connections.includes(i.id)))?g(i,{x:e,y:t}):i.active}))),i((s=h,e=>e.sort(s)))((e=>!o.done&&e.filter((e=>e.active)).length!==o.pieces.length)))(o.pieces)};var s})(o),M(o))(W.puzzle),B()})),W.ui.canvas.addEventListener("pointermove",(({offsetX:e,offsetY:t})=>{const i=G({x:e,y:t});W.puzzle=n((({x:e,y:t})=>i=>({...i,pieces:"idle"===i.status?i.pieces:i.pieces.map((i=>({...i,pos:i.active?{x:e-i.active.x,y:t-i.active.y}:i.pos})))}))(i),M(i))(W.puzzle),B()})),W.ui.canvas.addEventListener("pointerup",(({offsetX:e,offsetY:t})=>{const i=G({x:e,y:t});W.puzzle=n(w,z,b,M(i))(W.puzzle),B(),O({ui:W.ui,puzzle:o(W.puzzle)}),W.puzzle.done&&S(W)})),window.addEventListener("resize",(()=>{const{zoom:e,position:t}=W.ui;T(W.ui.canvas),X.setTransform(e,0,0,e,t.x,t.y),B()})),{newGame:()=>{W.puzzle=n(f(c))(j),B()},getState:()=>o(W.puzzle),setState:e=>{W.puzzle=e,B()},destroy:()=>{"CANVAS"!==t.tagName&&W.ui.canvas.remove(),W=null},setZoom:V,getZoom:()=>W.ui.zoom,centralize:J}};
