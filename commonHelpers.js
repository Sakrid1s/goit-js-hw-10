import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as S,i as C}from"./assets/vendor-651d7991.js";let c;const n=document.querySelector("[data-start]");n.disabled=!0;const a=document.querySelector("#datetime-picker"),d=document.querySelector("[data-days]"),u=document.querySelector("[data-hours]"),l=document.querySelector("[data-minutes]"),m=document.querySelector("[data-seconds]"),v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]>Date.now()?(c=e[0],n.disabled=!1):(n.disabled=!0,C.error({message:"Please choose a date in the future",position:"topRight"}))}};let r;class x{constructor(t){this.intervalId=null,this.tick=t}start(){this.intervalId=setInterval(()=>{r=c-Date.now();const t=this.convertMs(r);this.tick(t),r<=0&&this.stop()},1e3),n.disabled=!0,a.disabled=!0}stop(){clearInterval(this.intervalId),d.textContent="00",u.textContent="00",l.textContent="00",m.textContent="00",a.disabled=!1}convertMs(t){const h=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),y=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:h,hours:f,minutes:y,seconds:p}}}const b=new x(k);n.addEventListener("click",()=>{b.start()});function k({days:e,hours:t,minutes:s,seconds:i}){d.textContent=o(e),u.textContent=o(t),l.textContent=o(s),m.textContent=o(i)}function o(e){return String(e).padStart(2,"0")}S("#datetime-picker",v);
//# sourceMappingURL=commonHelpers.js.map