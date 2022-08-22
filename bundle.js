(()=>{"use strict";const t=document.getElementById("layer1");function e(){t.width=window.innerWidth,t.height=window.innerHeight,(()=>{const t=document.querySelector("meta[name='viewport']"),e=Math.round(visualViewport.scale*visualViewport.width),i=Math.round(visualViewport.scale*visualViewport.height);e<=460||i<=460?t.setAttribute("content","width=device-width, initial-scale=0.5, user-scalable=0"):e<=768||i<=768?t.setAttribute("content","width=device-width, initial-scale=0.725, user-scalable=0"):t.setAttribute("content","width=device-width, initial-scale=1.0, user-scalable=0")})()}const i=function(t){const e=t.getContext("2d");return i=>{e.save(),e.beginPath(),i(e,t),e.closePath(),e.restore()}}(t),s=function(t){const e=t.getContext("2d");return()=>{e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,t.width,t.height)}}(t);e(),window.addEventListener("resize",e);const a=t=>Math.PI/180*t,n=({time:t,start:e,duration:i})=>{const s=(t-e)/i<0?0:(t-e)/i;return{isProgressing:s<1&&s>0,progress:s,isReserved:(t-e)/i<0,isEnded:(t-e)/i>1}},h=(t=32,e="Arial Black, Arial, sans-serif")=>`bold ${t}pt ${e}`,l=(t,e)=>Math.random()*(e-t)+t;var o,r,c,f,d,m,p,w,u,v,y,M,g,S,x,T,k,W,b=function(t,e,i,s){if("a"===i&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?s:"a"===i?s.call(t):s?s.value:e.get(t)};const R=.4;class E{constructor(t=2){o.add(this),this.init=t=>{const{position:e}=t;this.position=e,this.move={position:{x:200,y:200,z:0},direction:{x:1,y:1,z:1}},this.intervals=[l(1e3,3e3),l(3e3,6e3),l(6e3,8e3),1e4],this.randomX=l(-1,R),this.randomY=l(-1,R),setInterval((()=>{this.randomX=l(-1,R),this.randomY=l(-1,R),this.intervals=[l(1e3,3e3),l(3e3,6e3),l(6e3,8e3),1e4]}),1e4),setInterval((()=>{l(-1,1)>0&&b(this,o,"m",W).call(this),l(-1,1)>0&&b(this,o,"m",k).call(this)}),8e3)},this.update=t=>{if(this.draw(t),t%1e4<this.intervals[0])b(this,r,"f").call(this);else if(t%1e4<this.intervals[1])b(this,c,"f").call(this);else if(t%1e4<this.intervals[2]){const e=this.intervals[1]+1e4*Math.floor(t/1e4),i=this.intervals[2]-this.intervals[1];b(this,d,"f").call(this,n({time:t,start:e,duration:i}).progress)}else if(t%1e4<this.intervals[3]){const e=this.intervals[2]+1e4*Math.floor(t/1e4),i=this.intervals[3]-this.intervals[2];b(this,m,"f").call(this,n({time:t,start:e,duration:i}).progress)}},r.set(this,(()=>{this.isMoving=!0,b(this,o,"m",x).call(this,this.defaultSpeed*(1+this.randomX)),b(this,o,"m",S).call(this,this.defaultSpeed*(1+this.randomY)),b(this,o,"m",T).call(this)})),c.set(this,(()=>{this.isMoving=!0,b(this,o,"m",x).call(this,this.defaultSpeed),b(this,o,"m",S).call(this,.2*this.defaultSpeed),b(this,o,"m",T).call(this)})),f.set(this,(()=>{this.isMoving=!0,b(this,o,"m",x).call(this,this.defaultSpeed),b(this,o,"m",S).call(this,1.2*this.defaultSpeed),b(this,o,"m",T).call(this)})),d.set(this,(t=>{if(this.isMoving=!0,1===t)return this.isMoving=!1;b(this,o,"m",x).call(this,this.defaultSpeed*(1-t)),b(this,o,"m",S).call(this,this.defaultSpeed*(1-t)),b(this,o,"m",T).call(this)})),m.set(this,(t=>{this.isMoving=!0,b(this,o,"m",x).call(this,this.defaultSpeed*t),b(this,o,"m",S).call(this,this.defaultSpeed*t),b(this,o,"m",T).call(this)})),this.remove=()=>{},this.draw=t=>{i(((e,i)=>{const{x:s,y:a,z:n}=this.position;this.isMoving?b(this,o,"m",w).call(this,e,i,t,this.position):b(this,o,"m",p).call(this,e,i,t,this.position)}))},u.set(this,(t=>{t.fillStyle="#ffefdb",t.fillRect(0,0,24,24),t.fillStyle="#00aeff",t.fillRect(4,8,4,4),t.fillRect(12,8,4,4),t.fillStyle="#ffcc00",t.fillRect(-4,-8,28,12),t.fillRect(20,-4,6,20)})),v.set(this,(t=>{t.fillStyle="#de0034",t.fillRect(0,0,8,38),t.fillStyle="#ffefdb",t.fillRect(0,38,8,8)})),y.set(this,(t=>{t.fillStyle="#de0034",t.fillRect(0,0,24,40)})),M.set(this,(t=>{t.fillStyle="#075aa3",t.fillRect(0,0,24,12)})),g.set(this,(t=>{t.fillStyle="#075aa3",t.fillRect(0,0,10,24),t.fillStyle="#000",t.fillRect(-2,23,12,8)})),this.defaultSpeed=t}}r=new WeakMap,c=new WeakMap,f=new WeakMap,d=new WeakMap,m=new WeakMap,u=new WeakMap,v=new WeakMap,y=new WeakMap,M=new WeakMap,g=new WeakMap,o=new WeakSet,p=function(t,e,i,s){t.setTransform(1,0,0,1,s.x-4,s.y+26+1*Math.sin(i/128)),b(this,v,"f").call(this,t),t.setTransform(1,0,0,1,s.x,s.y+24+1*Math.sin(i/128)),b(this,y,"f").call(this,t),t.setTransform(1,0,0,1,s.x,s.y+62),b(this,M,"f").call(this,t),t.setTransform(1,0,0,1,s.x,s.y+73),b(this,g,"f").call(this,t),t.setTransform(1,0,0,1,s.x+14,s.y+73),b(this,g,"f").call(this,t),t.setTransform(1,0,0,1,s.x+20,s.y+26+1*Math.sin(i/128)),b(this,v,"f").call(this,t),t.setTransform(1,0,0,1,s.x,s.y+2*Math.sin(i/128)),b(this,u,"f").call(this,t)},w=function(t,e,i,s){t.setTransform(1,0,0,1,s.x+-2,s.y+26+2*Math.sin(i/64)),t.rotate(a(-8*Math.sin(i/128))),b(this,v,"f").call(this,t),t.setTransform(1,0,0,1,s.x,s.y+24+2*Math.sin(i/128)),b(this,y,"f").call(this,t),t.setTransform(1,0,0,1,s.x,s.y+63+2*Math.sin(i/128)),b(this,M,"f").call(this,t),t.setTransform(1,0,0,1.1,s.x,s.y+70),t.rotate(a(14*Math.sin(i/128)-2)),b(this,g,"f").call(this,t),t.setTransform(1,0,0,1.1,s.x+14,s.y+70),t.rotate(a(5+-14*Math.sin(i/128))),b(this,g,"f").call(this,t),t.setTransform(1,0,0,1,s.x,s.y+2*Math.sin(i/128)),b(this,u,"f").call(this,t),t.setTransform(1,0,0,1,s.x+18,s.y+26+2*Math.sin(i/64)),t.rotate(a(8*Math.sin(i/128))),b(this,v,"f").call(this,t)},S=function(t){this.position.y=this.position.y+t*this.move.direction.y},x=function(t){this.position.x=this.position.x+t*this.move.direction.x},T=function(){(this.position.x<-20||this.position.x>=document.body.clientWidth)&&b(this,o,"m",W).call(this),(this.position.y<-10||this.position.y>=document.body.clientHeight)&&b(this,o,"m",k).call(this)},k=function(){this.move.direction.y=-1*this.move.direction.y},W=function(){this.move.direction.x=-1*this.move.direction.x};class P{constructor(){this.start=()=>{this.person.init({position:{x:300,y:300,z:0}})},this.update=t=>{this.person.update(t)},this.end=()=>{this.person.remove()},this.person=new E}}var A,z,C,I,L,V=function(t,e,i,s){if("a"===i&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?s:"a"===i?s.call(t):s?s.value:e.get(t)};class j{constructor(){this.start=()=>{V(this,A,"f").call(this)},this.update=t=>{V(this,I,"f").call(this),V(this,L,"f").call(this,t)},this.end=()=>{V(this,z,"f").call(this)},A.set(this,(()=>{window.addEventListener("keydown",V(this,C,"f"))})),z.set(this,(()=>{window.removeEventListener("keydown",V(this,C,"f"))})),C.set(this,(t=>{"Space"===t.code&&window.postMessage({type:"change-scene",payload:"game"},window.origin)})),I.set(this,(()=>{i(((t,e)=>{t.setTransform(1,0,0,1,e.width/2-120,e.height/2-200),t.font=h(24),t.fillText("Sample Game",0,0)}))})),L.set(this,(t=>{i(((e,i)=>{e.setTransform(1,0,0,1,i.width/2-100,i.height/2+2*Math.sin(t/60)),e.font=h(12),e.fillText("Press spacebar to start",0,0)}))}))}}A=new WeakMap,z=new WeakMap,C=new WeakMap,I=new WeakMap,L=new WeakMap;var q,X,Y,B=function(t,e,i,s){if("a"===i&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?s:"a"===i?s.call(t):s?s.value:e.get(t)};q=new WeakMap,X=new WeakMap,Y=new WeakMap,(new class{constructor(){this.start=()=>{this.scenes[this.activeScene].start(),requestAnimationFrame(B(this,X,"f")),B(this,Y,"f").call(this)},q.set(this,(t=>{this.scenes[this.activeScene].end(),this.activeScene=t,this.scenes[this.activeScene].start()})),X.set(this,(t=>{s(),this.scenes[this.activeScene].update(t),requestAnimationFrame(B(this,X,"f"))})),Y.set(this,(()=>{window.addEventListener("message",(t=>{if(!t.data)return;const{type:e,payload:i}=t.data;switch(e){case"change-scene":B(this,q,"f").call(this,i)}}))})),this.activeScene="game",this.scenes={game:new P,title:new j}}}).start()})();