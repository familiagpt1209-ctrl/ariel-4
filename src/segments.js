import {districtAt} from './district-plan.js';
export const SEGMENT_TYPES=['avenue','plaza','bend-left','intersection','park','bridge','tunnel','station','narrow','market','landmark','rest'];
export function routeHash(seed,n=0){let h=2166136261;for(const c of String(seed)+':'+n)h=Math.imul(h^c.charCodeAt(0),16777619);h^=h>>>16;return h>>>0;}
export function segmentSpec(route,seed='volt'){
 const index=Math.floor(route/20),district=districtAt(Math.max(0,route),seed),block=Math.floor(Math.max(0,route)/400),local=((index%50)+50)%50;
 let template=((index+routeHash(seed,Math.floor(index/12)))%10+10)%10;
 const landmark=local>=39&&local<=42,transition=local<2?'entry':local>47?'exit':'inside';
 if(landmark)template=10;else if(local>=43&&local<=46)template=11;
 const variant=((routeHash(seed,0)+index)%4+4)%4;
 return {template,type:SEGMENT_TYPES[template],variant,district,theme:block%4,landmark,transition,tags:{district,difficulty:Math.min(4,Math.floor(Math.max(0,route)/1500)),floor:district==='coast'?'promenade':template===5?'bridge':template===6?'tunnel':'asphalt',traffic:['cross','parked','parallel','transit'][variant],obstacle:landmark?'event':template===11?'none':'controlled',event:landmark?'landmark':template===6?'lights':template===7?'station':'none'},safeLanes:3};
}
export class Segments {
 constructor(){this.items=Array.from({length:18},()=>({}));this.reset();}
 assign(s,route,id){Object.assign(s,segmentSpec(route,this.seed),{route,id});}
 reset(seed='volt',distance=0){this.seed=seed;this.distance=distance;this.nextId=18;this.recycled=0;for(let i=0;i<18;i++){const s=this.items[i];s.z=40-i*20;this.assign(s,distance-s.z,i);}}
 advance(delta){if(!Number.isFinite(delta)||delta<=0)return;this.distance+=delta;let min=Infinity;for(const s of this.items){s.z+=delta;if(s.z<min)min=s.z;}for(const s of this.items)while(s.z>60){s.z=min-=20;this.assign(s,this.distance-s.z,this.nextId++);this.recycled++;}}
}
