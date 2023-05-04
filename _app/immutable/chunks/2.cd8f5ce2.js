import{J as zs,K as Tt,t as Dr,L as Ln,M as Xn,S as ft,i as ht,s as dt,C as Nt,D as Bt,E as kt,F as Gt,g as Le,d as De,I as St,y as We,z as Xe,A as je,B as Ye,k as Vn,l as Hn,m as ni,h as st,n as Rn,b as pt,N as gu,O as ii,v as Vs,f as Hs,P as _u,o as vu,Q as Ya,w as sn,R as Or,T as un,a as mt,c as gt,U as fn,V as Fe,W as vo,e as ya,X as Su,H as Ot,Y as Mu,q as Mr,r as br,G as Ut}from"./index.5d156d1c.js";import{d as bu,w as nn,r as xu}from"./index.157bd6d4.js";const Eu=!0,v0=Object.freeze(Object.defineProperty({__proto__:null,prerender:Eu},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ws="152",Ri={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yu=0,So=1,wu=2,Sc=1,Mc=2,Wn=3,jn=0,Yt=1,bn=2,ri=0,Ji=1,Mo=2,bo=3,xo=4,Tu=5,qi=100,Au=101,Cu=102,Eo=103,yo=104,Ru=200,Pu=201,Lu=202,Du=203,bc=204,xc=205,Uu=206,Iu=207,Fu=208,Ou=209,Nu=210,Bu=0,ku=1,Gu=2,Cs=3,zu=4,Vu=5,Hu=6,Wu=7,Ec=0,Xu=1,ju=2,Dn=0,Yu=1,qu=2,Ku=3,yc=4,Zu=5,wc=300,er=301,tr=302,Rs=303,Ps=304,Ta=306,Ls=1e3,xn=1001,Ds=1002,Xt=1003,wo=1004,qa=1005,Jt=1006,Ju=1007,Ur=1008,xi=1009,Qu=1010,$u=1011,Tc=1012,ef=1013,_i=1014,vi=1015,Ir=1016,tf=1017,nf=1018,Qi=1020,rf=1021,En=1023,af=1024,sf=1025,Mi=1026,nr=1027,of=1028,lf=1029,cf=1030,uf=1031,ff=1033,Ka=33776,Za=33777,Ja=33778,Qa=33779,To=35840,Ao=35841,Co=35842,Ro=35843,hf=36196,Po=37492,Lo=37496,Do=37808,Uo=37809,Io=37810,Fo=37811,Oo=37812,No=37813,Bo=37814,ko=37815,Go=37816,zo=37817,Vo=37818,Ho=37819,Wo=37820,Xo=37821,$a=36492,df=36283,jo=36284,Yo=36285,qo=36286,Xs=3e3,ai=3001,pf=3200,Ac=3201,Cc=0,mf=1,bi="",Ze="srgb",Un="srgb-linear",Rc="display-p3",es=7680,gf=519,Ko=35044,Zo="300 es",Us=1035;class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ts=Math.PI/180,Is=180/Math.PI;function Nr(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[a&255]+It[a>>8&255]+It[a>>16&255]+It[a>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function jt(a,e,t){return Math.max(e,Math.min(t,a))}function _f(a,e){return(a%e+e)%e}function ns(a,e,t){return(1-t)*a+t*e}function Jo(a){return(a&a-1)===0&&a!==0}function vf(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Qr(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function $t(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],v=n[8],g=i[0],m=i[3],d=i[6],_=i[1],S=i[4],b=i[7],M=i[2],x=i[5],D=i[8];return r[0]=o*g+s*_+l*M,r[3]=o*m+s*S+l*x,r[6]=o*d+s*b+l*D,r[1]=c*g+u*_+f*M,r[4]=c*m+u*S+f*x,r[7]=c*d+u*b+f*D,r[2]=h*g+p*_+v*M,r[5]=h*m+p*S+v*x,r[8]=h*d+p*b+v*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-n*r*u+n*s*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*o-s*c,h=s*l-u*r,p=c*r-o*l,v=t*f+n*h+i*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(i*c-u*n)*g,e[2]=(s*n-i*o)*g,e[3]=h*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-s*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*s)+o+e,-i*c,i*l,-i*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(is.makeScale(e,t)),this}rotate(e){return this.premultiply(is.makeRotation(-e)),this}translate(e,t){return this.premultiply(is.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const is=new tt;function Pc(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Fr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}const Qo={};function Rr(a){a in Qo||(Qo[a]=!0,console.warn(a))}function $i(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function rs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Sf=new tt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Mf=new tt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function bf(a){return a.convertSRGBToLinear().applyMatrix3(Mf)}function xf(a){return a.applyMatrix3(Sf).convertLinearToSRGB()}const Ef={[Un]:a=>a,[Ze]:a=>a.convertSRGBToLinear(),[Rc]:bf},yf={[Un]:a=>a,[Ze]:a=>a.convertLinearToSRGB(),[Rc]:xf},gn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return Un},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=Ef[e],i=yf[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}};let Li;class Lc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Li===void 0&&(Li=Fr("canvas")),Li.width=e.width,Li.height=e.height;const n=Li.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=$i(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($i(t[n]/255)*255):t[n]=$i(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Dc{constructor(e=null){this.isSource=!0,this.uuid=Nr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,s=i.length;o<s;o++)i[o].isDataTexture?r.push(as(i[o].image)):r.push(as(i[o]))}else r=as(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function as(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Lc.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wf=0;class qt extends yi{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=xn,i=xn,r=Jt,o=Ur,s=En,l=xi,c=qt.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Nr(),this.name="",this.source=new Dc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ai?Ze:bi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ls:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case Ds:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ls:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case Ds:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ze?ai:Xs}set encoding(e){Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ai?Ze:bi}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=wc;qt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,n=0,i=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,b=(p+1)/2,M=(d+1)/2,x=(u+h)/4,D=(f+g)/4,L=(v+m)/4;return S>b&&S>M?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=x/n,r=D/n):b>M?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=x/i,r=L/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=D/r,i=L/r),this.set(n,i,r,t),this}let _=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(f-g)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oi extends yi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Rr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ai?Ze:bi),this.texture=new qt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Jt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Uc extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tf extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ei{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,s){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=r[o+0],p=r[o+1],v=r[o+2],g=r[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(s===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(f!==g||l!==h||c!==p||u!==v){let m=1-s;const d=l*h+c*p+u*v+f*g,_=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const M=Math.sqrt(S),x=Math.atan2(M,d*_);m=Math.sin(m*x)/M,s=Math.sin(s*x)/M}const b=s*_;if(l=l*m+h*b,c=c*m+p*b,u=u*m+v*b,f=f*m+g*b,m===1-s){const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[o],h=r[o+1],p=r[o+2],v=r[o+3];return e[t]=s*v+u*f+l*p-c*h,e[t+1]=l*v+u*h+c*f-s*p,e[t+2]=c*v+u*p+s*h-l*f,e[t+3]=u*v-s*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),f=s(r/2),h=l(n/2),p=l(i/2),v=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+s+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>s&&n>f){const p=2*Math.sqrt(1+n-s-f);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(s>f){const p=2*Math.sqrt(1+s-n-f);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-s);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*s+i*c-r*l,this._y=i*u+o*l+r*s-n*c,this._z=r*u+o*c+n*l-i*s,this._w=o*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let s=o*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,n=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($o.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($o.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,s=e.z,l=e.w,c=l*t+o*i-s*n,u=l*n+s*t-r*i,f=l*i+r*n-o*t,h=-r*t-o*n-s*i;return this.x=c*l+h*-r+u*-s-f*-o,this.y=u*l+h*-o+f*-r-c*-s,this.z=f*l+h*-s+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,s=t.y,l=t.z;return this.x=i*l-r*s,this.y=r*o-n*l,this.z=n*s-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ss.copy(this).projectOnVector(e),this.sub(ss)}reflect(e){return this.sub(ss.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ss=new J,$o=new Ei;class ar{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Di.copy(e.boundingBox),Di.applyMatrix4(e.matrixWorld),this.union(Di);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,s=r.count;o<s;o++)Nn.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Nn)}else i.boundingBox===null&&i.computeBoundingBox(),Di.copy(i.boundingBox),Di.applyMatrix4(e.matrixWorld),this.union(Di)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),$r.subVectors(this.max,xr),Ui.subVectors(e.a,xr),Ii.subVectors(e.b,xr),Fi.subVectors(e.c,xr),Qn.subVectors(Ii,Ui),$n.subVectors(Fi,Ii),ui.subVectors(Ui,Fi);let t=[0,-Qn.z,Qn.y,0,-$n.z,$n.y,0,-ui.z,ui.y,Qn.z,0,-Qn.x,$n.z,0,-$n.x,ui.z,0,-ui.x,-Qn.y,Qn.x,0,-$n.y,$n.x,0,-ui.y,ui.x,0];return!os(t,Ui,Ii,Fi,$r)||(t=[1,0,0,0,1,0,0,0,1],!os(t,Ui,Ii,Fi,$r))?!1:(ea.crossVectors(Qn,$n),t=[ea.x,ea.y,ea.z],os(t,Ui,Ii,Fi,$r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new J,new J,new J,new J,new J,new J,new J,new J],Nn=new J,Di=new ar,Ui=new J,Ii=new J,Fi=new J,Qn=new J,$n=new J,ui=new J,xr=new J,$r=new J,ea=new J,fi=new J;function os(a,e,t,n,i){for(let r=0,o=a.length-3;r<=o;r+=3){fi.fromArray(a,r);const s=i.x*Math.abs(fi.x)+i.y*Math.abs(fi.y)+i.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),u=n.dot(fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Af=new ar,Er=new J,ls=new J;class Br{constructor(e=new J,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Af.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Er.subVectors(e,this.center);const t=Er.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Er,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ls.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Er.copy(e.center).add(ls)),this.expandByPoint(Er.copy(e.center).sub(ls))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new J,cs=new J,ta=new J,ei=new J,us=new J,na=new J,fs=new J;class js{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){cs.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(cs);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ta),s=ei.dot(this.direction),l=-ei.dot(ta),c=ei.lengthSq(),u=Math.abs(1-o*o);let f,h,p,v;if(u>0)if(f=o*l-s,h=o*s-l,v=r*u,f>=0)if(h>=-v)if(h<=v){const g=1/u;f*=g,h*=g,p=f*(f+o*h+2*s)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+s)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+s)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-o*r+s)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(o*r+s)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+s)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(cs).addScaledVector(ta,h),p}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),i=Bn.dot(Bn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),s=n-o,l=n+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(s=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(s=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,i,r){us.subVectors(t,e),na.subVectors(n,e),fs.crossVectors(us,na);let o=this.direction.dot(fs),s;if(o>0){if(i)return null;s=1}else if(o<0)s=-1,o=-o;else return null;ei.subVectors(this.origin,e);const l=s*this.direction.dot(na.crossVectors(ei,na));if(l<0)return null;const c=s*this.direction.dot(us.cross(ei));if(c<0||l+c>o)return null;const u=-s*ei.dot(fs);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,s,l,c,u,f,h,p,v,g,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=s,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Oi.setFromMatrixColumn(e,0).length(),r=1/Oi.setFromMatrixColumn(e,1).length(),o=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*f,v=s*u,g=s*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=h-g*c,t[9]=-s*l,t[2]=g-h*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,g=c*f;t[0]=h+g*s,t[4]=v*s-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-s,t[2]=p*s-v,t[6]=g+h*s,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,g=c*f;t[0]=h-g*s,t[4]=-o*f,t[8]=v+p*s,t[1]=p+v*s,t[5]=o*u,t[9]=g-h*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,v=s*u,g=s*f;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=p*c-v,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=s*l,g=s*c;t[0]=l*u,t[4]=g-h*f,t[8]=v*f+p,t[1]=f,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=p*f+v,t[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,p=o*c,v=s*l,g=s*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=o*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=s*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cf,e,Rf)}lookAt(e,t,n){const i=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),ti.crossVectors(n,en),ti.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ti.crossVectors(n,en)),ti.normalize(),ia.crossVectors(en,ti),i[0]=ti.x,i[4]=ia.x,i[8]=en.x,i[1]=ti.y,i[5]=ia.y,i[9]=en.y,i[2]=ti.z,i[6]=ia.z,i[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],v=n[2],g=n[6],m=n[10],d=n[14],_=n[3],S=n[7],b=n[11],M=n[15],x=i[0],D=i[4],L=i[8],E=i[12],T=i[1],B=i[5],U=i[9],C=i[13],N=i[2],R=i[6],k=i[10],K=i[14],q=i[3],z=i[7],X=i[11],A=i[15];return r[0]=o*x+s*T+l*N+c*q,r[4]=o*D+s*B+l*R+c*z,r[8]=o*L+s*U+l*k+c*X,r[12]=o*E+s*C+l*K+c*A,r[1]=u*x+f*T+h*N+p*q,r[5]=u*D+f*B+h*R+p*z,r[9]=u*L+f*U+h*k+p*X,r[13]=u*E+f*C+h*K+p*A,r[2]=v*x+g*T+m*N+d*q,r[6]=v*D+g*B+m*R+d*z,r[10]=v*L+g*U+m*k+d*X,r[14]=v*E+g*C+m*K+d*A,r[3]=_*x+S*T+b*N+M*q,r[7]=_*D+S*B+b*R+M*z,r[11]=_*L+S*U+b*k+M*X,r[15]=_*E+S*C+b*K+M*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],g=e[7],m=e[11],d=e[15];return v*(+r*l*f-i*c*f-r*s*h+n*c*h+i*s*p-n*l*p)+g*(+t*l*p-t*c*h+r*o*h-i*o*p+i*c*u-r*l*u)+m*(+t*c*f-t*s*p-r*o*f+n*o*p+r*s*u-n*c*u)+d*(-i*s*u-t*l*f+t*s*h+i*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],g=e[13],m=e[14],d=e[15],_=f*m*c-g*h*c+g*l*p-s*m*p-f*l*d+s*h*d,S=v*h*c-u*m*c-v*l*p+o*m*p+u*l*d-o*h*d,b=u*g*c-v*f*c+v*s*p-o*g*p-u*s*d+o*f*d,M=v*f*l-u*g*l-v*s*h+o*g*h+u*s*m-o*f*m,x=t*_+n*S+i*b+r*M;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/x;return e[0]=_*D,e[1]=(g*h*r-f*m*r-g*i*p+n*m*p+f*i*d-n*h*d)*D,e[2]=(s*m*r-g*l*r+g*i*c-n*m*c-s*i*d+n*l*d)*D,e[3]=(f*l*r-s*h*r-f*i*c+n*h*c+s*i*p-n*l*p)*D,e[4]=S*D,e[5]=(u*m*r-v*h*r+v*i*p-t*m*p-u*i*d+t*h*d)*D,e[6]=(v*l*r-o*m*r-v*i*c+t*m*c+o*i*d-t*l*d)*D,e[7]=(o*h*r-u*l*r+u*i*c-t*h*c-o*i*p+t*l*p)*D,e[8]=b*D,e[9]=(v*f*r-u*g*r-v*n*p+t*g*p+u*n*d-t*f*d)*D,e[10]=(o*g*r-v*s*r+v*n*c-t*g*c-o*n*d+t*s*d)*D,e[11]=(u*s*r-o*f*r-u*n*c+t*f*c+o*n*p-t*s*p)*D,e[12]=M*D,e[13]=(u*g*i-v*f*i+v*n*h-t*g*h-u*n*m+t*f*m)*D,e[14]=(v*s*i-o*g*i-v*n*l+t*g*l+o*n*m-t*s*m)*D,e[15]=(o*f*i-u*s*i+u*n*l-t*f*l-o*n*h+t*s*h)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,s=e.y,l=e.z,c=r*o,u=r*s;return this.set(c*o+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*o,0,c*l-i*s,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,s=t._z,l=t._w,c=r+r,u=o+o,f=s+s,h=r*c,p=r*u,v=r*f,g=o*u,m=o*f,d=s*f,_=l*c,S=l*u,b=l*f,M=n.x,x=n.y,D=n.z;return i[0]=(1-(g+d))*M,i[1]=(p+b)*M,i[2]=(v-S)*M,i[3]=0,i[4]=(p-b)*x,i[5]=(1-(h+d))*x,i[6]=(m+_)*x,i[7]=0,i[8]=(v+S)*D,i[9]=(m-_)*D,i[10]=(1-(h+g))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Oi.set(i[0],i[1],i[2]).length();const o=Oi.set(i[4],i[5],i[6]).length(),s=Oi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],_n.copy(this);const c=1/r,u=1/o,f=1/s;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=f,_n.elements[9]*=f,_n.elements[10]*=f,t.setFromRotationMatrix(_n),n.x=r,n.y=o,n.z=s,this}makePerspective(e,t,n,i,r,o){const s=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(o+r)/(o-r),p=-2*o*r/(o-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=f,s[13]=0,s[2]=0,s[6]=0,s[10]=h,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,o){const s=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-r),f=(t+e)*l,h=(n+i)*c,p=(o+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-f,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-h,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Oi=new J,_n=new _t,Cf=new J(0,0,0),Rf=new J(1,1,1),ti=new J,ia=new J,en=new J,el=new _t,tl=new Ei;class Aa{constructor(e=0,t=0,n=0,i=Aa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],s=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(jt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return el.makeRotationFromQuaternion(e),this.setFromRotationMatrix(el,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tl.setFromEuler(this),this.setFromQuaternion(tl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Aa.DEFAULT_ORDER="XYZ";class Ys{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pf=0;const nl=new J,Ni=new Ei,kn=new _t,ra=new J,yr=new J,Lf=new J,Df=new Ei,il=new J(1,0,0),rl=new J(0,1,0),al=new J(0,0,1),Uf={type:"added"},sl={type:"removed"};class ut extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new J,t=new Aa,n=new Ei,i=new J(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _t},normalMatrix:{value:new tt}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.premultiply(Ni),this}rotateX(e){return this.rotateOnAxis(il,e)}rotateY(e){return this.rotateOnAxis(rl,e)}rotateZ(e){return this.rotateOnAxis(al,e)}translateOnAxis(e,t){return nl.copy(e).applyQuaternion(this.quaternion),this.position.add(nl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(il,e)}translateY(e){return this.translateOnAxis(rl,e)}translateZ(e){return this.translateOnAxis(al,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ra.copy(e):ra.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(yr,ra,this.up):kn.lookAt(ra,yr,this.up),this.quaternion.setFromRotationMatrix(kn),i&&(kn.extractRotation(i.matrixWorld),Ni.setFromRotationMatrix(kn),this.quaternion.premultiply(Ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Uf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(sl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,Lf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,Df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(e.materials,this.material[l]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=i,n;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ut.DEFAULT_UP=new J(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new J,Gn=new J,hs=new J,zn=new J,Bi=new J,ki=new J,ol=new J,ds=new J,ps=new J,ms=new J;let aa=!1;class Mn{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vn.subVectors(e,t),i.cross(vn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){vn.subVectors(i,t),Gn.subVectors(n,t),hs.subVectors(e,t);const o=vn.dot(vn),s=vn.dot(Gn),l=vn.dot(hs),c=Gn.dot(Gn),u=Gn.dot(hs),f=o*c-s*s;if(f===0)return r.set(-2,-1,-1);const h=1/f,p=(c*l-s*u)*h,v=(o*u-s*l)*h;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,zn),zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getUV(e,t,n,i,r,o,s,l){return aa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),aa=!0),this.getInterpolation(e,t,n,i,r,o,s,l)}static getInterpolation(e,t,n,i,r,o,s,l){return this.getBarycoord(e,t,n,i,zn),l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(s,zn.z),l}static isFrontFacing(e,t,n,i){return vn.subVectors(n,t),Gn.subVectors(e,t),vn.cross(Gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),vn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return aa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),aa=!0),Mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,s;Bi.subVectors(i,n),ki.subVectors(r,n),ds.subVectors(e,n);const l=Bi.dot(ds),c=ki.dot(ds);if(l<=0&&c<=0)return t.copy(n);ps.subVectors(e,i);const u=Bi.dot(ps),f=ki.dot(ps);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Bi,o);ms.subVectors(e,r);const p=Bi.dot(ms),v=ki.dot(ms);if(v>=0&&p<=v)return t.copy(r);const g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return s=c/(c-v),t.copy(n).addScaledVector(ki,s);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return ol.subVectors(r,i),s=(f-u)/(f-u+(p-v)),t.copy(i).addScaledVector(ol,s);const d=1/(m+g+h);return o=g*d,s=h*d,t.copy(n).addScaledVector(Bi,o).addScaledVector(ki,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let If=0;class sr extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=Ji,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=bc,this.blendDst=xc,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const s in r){const l=r[s];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},sa={h:0,s:0,l:0};function gs(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=gn.workingColorSpace){return this.r=e,this.g=t,this.b=n,gn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=gn.workingColorSpace){if(e=_f(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=gs(o,r,e+1/3),this.g=gs(o,r,e),this.b=gs(o,r,e-1/3)}return gn.toWorkingColorSpace(this,i),this}setStyle(e,t=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],s=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ze){const n=Ic[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ze){return gn.fromWorkingColorSpace(Ft.copy(this),e),Math.round(jt(Ft.r*255,0,255))*65536+Math.round(jt(Ft.g*255,0,255))*256+Math.round(jt(Ft.b*255,0,255))}getHexString(e=Ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gn.workingColorSpace){gn.fromWorkingColorSpace(Ft.copy(this),t);const n=Ft.r,i=Ft.g,r=Ft.b,o=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=u<=.5?f/(o+s):f/(2-o-s),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gn.workingColorSpace){return gn.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Ze){gn.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,i=Ft.b;return e!==Ze?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Sn),Sn.h+=e,Sn.s+=t,Sn.l+=n,this.setHSL(Sn.h,Sn.s,Sn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(sa);const n=ns(Sn.h,sa.h,t),i=ns(Sn.s,sa.s,t),r=ns(Sn.l,sa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ve;Ve.NAMES=Ic;class qs extends sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new J,oa=new ze;class yn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ko,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oa.fromBufferAttribute(this,t),oa.applyMatrix3(e),this.setXY(t,oa.x,oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qr(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qr(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qr(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ko&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Fc extends yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Oc extends yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class cn extends yn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ff=0;const on=new _t,_s=new ut,Gi=new J,tn=new ar,wr=new ar,Rt=new J;class hn extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pc(e)?Oc:Fc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return _s.lookAt(e),_s.updateMatrix(),this.applyMatrix4(_s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new cn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new J,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const s=t[r];wr.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(tn.min,wr.min),tn.expandByPoint(Rt),Rt.addVectors(tn.max,wr.max),tn.expandByPoint(Rt)):(tn.expandByPoint(wr.min),tn.expandByPoint(wr.max))}tn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){const s=t[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)Rt.fromBufferAttribute(s,c),l&&(Gi.fromBufferAttribute(e,c),Rt.add(Gi)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<s;T++)c[T]=new J,u[T]=new J;const f=new J,h=new J,p=new J,v=new ze,g=new ze,m=new ze,d=new J,_=new J;function S(T,B,U){f.fromArray(i,T*3),h.fromArray(i,B*3),p.fromArray(i,U*3),v.fromArray(o,T*2),g.fromArray(o,B*2),m.fromArray(o,U*2),h.sub(f),p.sub(f),g.sub(v),m.sub(v);const C=1/(g.x*m.y-m.x*g.y);isFinite(C)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(C),_.copy(p).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(C),c[T].add(d),c[B].add(d),c[U].add(d),u[T].add(_),u[B].add(_),u[U].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let T=0,B=b.length;T<B;++T){const U=b[T],C=U.start,N=U.count;for(let R=C,k=C+N;R<k;R+=3)S(n[R+0],n[R+1],n[R+2])}const M=new J,x=new J,D=new J,L=new J;function E(T){D.fromArray(r,T*3),L.copy(D);const B=c[T];M.copy(B),M.sub(D.multiplyScalar(D.dot(B))).normalize(),x.crossVectors(L,B);const C=x.dot(u[T])<0?-1:1;l[T*4]=M.x,l[T*4+1]=M.y,l[T*4+2]=M.z,l[T*4+3]=C}for(let T=0,B=b.length;T<B;++T){const U=b[T],C=U.start,N=U.count;for(let R=C,k=C+N;R<k;R+=3)E(n[R+0]),E(n[R+1]),E(n[R+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new J,r=new J,o=new J,s=new J,l=new J,c=new J,u=new J,f=new J;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),s.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),s.add(u),l.add(u),c.add(u),n.setXYZ(v,s.x,s.y,s.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){s.isInterleavedBufferAttribute?p=l[g]*s.data.stride+s.offset:p=l[g]*u;for(let d=0;d<u;d++)h[v++]=c[p++]}return new yn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=e(l,n);t.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ll=new _t,Cn=new js,la=new Br,cl=new J,zi=new J,Vi=new J,Hi=new J,vs=new J,ca=new J,ua=new ze,fa=new ze,ha=new ze,ul=new J,fl=new J,hl=new J,da=new J,pa=new J;let an=class extends ut{constructor(e=new hn,t=new qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(r&&s){ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=s[l],f=r[l];u!==0&&(vs.fromBufferAttribute(f,e),o?ca.addScaledVector(vs,u):ca.addScaledVector(vs.sub(t),u))}t.add(ca)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),Cn.copy(e.ray).recast(e.near),!(la.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(la,cl)===null||Cn.origin.distanceToSquared(cl)>(e.far-e.near)**2))&&(ll.copy(r).invert(),Cn.copy(e.ray).applyMatrix4(ll),!(n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const i=this.geometry,r=this.material,o=i.index,s=i.attributes.position,l=i.attributes.uv,c=i.attributes.uv1,u=i.attributes.normal,f=i.groups,h=i.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,v=f.length;p<v;p++){const g=f[p],m=r[g.materialIndex],d=Math.max(g.start,h.start),_=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let S=d,b=_;S<b;S+=3){const M=o.getX(S),x=o.getX(S+1),D=o.getX(S+2);n=ma(this,m,e,Cn,l,c,u,M,x,D),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const p=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let g=p,m=v;g<m;g+=3){const d=o.getX(g),_=o.getX(g+1),S=o.getX(g+2);n=ma(this,r,e,Cn,l,c,u,d,_,S),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}else if(s!==void 0)if(Array.isArray(r))for(let p=0,v=f.length;p<v;p++){const g=f[p],m=r[g.materialIndex],d=Math.max(g.start,h.start),_=Math.min(s.count,Math.min(g.start+g.count,h.start+h.count));for(let S=d,b=_;S<b;S+=3){const M=S,x=S+1,D=S+2;n=ma(this,m,e,Cn,l,c,u,M,x,D),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const p=Math.max(0,h.start),v=Math.min(s.count,h.start+h.count);for(let g=p,m=v;g<m;g+=3){const d=g,_=g+1,S=g+2;n=ma(this,r,e,Cn,l,c,u,d,_,S),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}}};function Of(a,e,t,n,i,r,o,s){let l;if(e.side===Yt?l=n.intersectTriangle(o,r,i,!0,s):l=n.intersectTriangle(i,r,o,e.side===jn,s),l===null)return null;pa.copy(s),pa.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(pa);return c<t.near||c>t.far?null:{distance:c,point:pa.clone(),object:a}}function ma(a,e,t,n,i,r,o,s,l,c){a.getVertexPosition(s,zi),a.getVertexPosition(l,Vi),a.getVertexPosition(c,Hi);const u=Of(a,e,t,n,zi,Vi,Hi,da);if(u){i&&(ua.fromBufferAttribute(i,s),fa.fromBufferAttribute(i,l),ha.fromBufferAttribute(i,c),u.uv=Mn.getInterpolation(da,zi,Vi,Hi,ua,fa,ha,new ze)),r&&(ua.fromBufferAttribute(r,s),fa.fromBufferAttribute(r,l),ha.fromBufferAttribute(r,c),u.uv1=Mn.getInterpolation(da,zi,Vi,Hi,ua,fa,ha,new ze),u.uv2=u.uv1),o&&(ul.fromBufferAttribute(o,s),fl.fromBufferAttribute(o,l),hl.fromBufferAttribute(o,c),u.normal=Mn.getInterpolation(da,zi,Vi,Hi,ul,fl,hl,new J),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new J,materialIndex:0};Mn.getNormal(zi,Vi,Hi,f.normal),u.face=f}return u}class kr extends hn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const s=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,i,o,2),v("x","z","y",1,-1,e,n,-t,i,o,3),v("x","y","z",1,-1,e,t,n,i,r,4),v("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new cn(c,3)),this.setAttribute("normal",new cn(u,3)),this.setAttribute("uv",new cn(f,2));function v(g,m,d,_,S,b,M,x,D,L,E){const T=b/D,B=M/L,U=b/2,C=M/2,N=x/2,R=D+1,k=L+1;let K=0,q=0;const z=new J;for(let X=0;X<k;X++){const A=X*B-C;for(let Y=0;Y<R;Y++){const G=Y*T-U;z[g]=G*_,z[m]=A*S,z[d]=N,c.push(z.x,z.y,z.z),z[g]=0,z[m]=0,z[d]=x>0?1:-1,u.push(z.x,z.y,z.z),f.push(Y/D),f.push(1-X/L),K+=1}}for(let X=0;X<L;X++)for(let A=0;A<D;A++){const Y=h+A+R*X,G=h+A+R*(X+1),H=h+(A+1)+R*(X+1),W=h+(A+1)+R*X;l.push(Y,G,W),l.push(G,H,W),q+=6}s.addGroup(p,q,E),p+=q,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ir(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wt(a){const e={};for(let t=0;t<a.length;t++){const n=ir(a[t]);for(const i in n)e[i]=n[i]}return e}function Nf(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Nc(a){return a.getRenderTarget()===null?a.outputColorSpace:Un}const Ks={clone:ir,merge:Wt};var Bf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bf,this.fragmentShader=kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=Nf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zs extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}let rn=class extends Zs{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ts*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};const Wi=-90,Xi=1;class Gf extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new rn(Wi,Xi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new rn(Wi,Xi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new rn(Wi,Xi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const s=new rn(Wi,Xi,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new rn(Wi,Xi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new rn(Wi,Xi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,s,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Dn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Bc extends qt{constructor(e,t,n,i,r,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,n,i,r,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zf extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Rr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ai?Ze:bi),this.texture=new Bc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new kr(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:ri});r.uniforms.tEquirect.value=t;const o=new an(i,r),s=t.minFilter;return t.minFilter===Ur&&(t.minFilter=Jt),new Gf(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ss=new J,Vf=new J,Hf=new tt;class pi{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ss.subVectors(n,t).cross(Vf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ss),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hf.getNormalMatrix(e),i=this.coplanarPoint(Ss).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new Br,ga=new J;class Ca{constructor(e=new pi,t=new pi,n=new pi,i=new pi,r=new pi,o=new pi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],s=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],p=n[9],v=n[10],g=n[11],m=n[12],d=n[13],_=n[14],S=n[15];return t[0].setComponents(s-i,f-l,g-h,S-m).normalize(),t[1].setComponents(s+i,f+l,g+h,S+m).normalize(),t[2].setComponents(s+r,f+c,g+p,S+d).normalize(),t[3].setComponents(s-r,f-c,g-p,S-d).normalize(),t[4].setComponents(s-o,f-u,g-v,S-_).normalize(),t[5].setComponents(s+o,f+u,g+v,S+_).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ga.x=i.normal.x>0?e.max.x:e.min.x,ga.y=i.normal.y>0?e.max.y:e.min.y,ga.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function kc(){let a=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function Wf(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,p=a.createBuffer();a.bindBuffer(u,p),a.bufferData(u,f,h),c.onUploadCallback();let v;if(f instanceof Float32Array)v=a.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=a.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=a.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=a.SHORT;else if(f instanceof Uint32Array)v=a.UNSIGNED_INT;else if(f instanceof Int32Array)v=a.INT;else if(f instanceof Int8Array)v=a.BYTE;else if(f instanceof Uint8Array)v=a.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const h=u.array,p=u.updateRange;a.bindBuffer(f,c),p.count===-1?a.bufferSubData(f,0,h):(t?a.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):a.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:o,remove:s,update:l}}class rr extends hn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,f=e/s,h=t/l,p=[],v=[],g=[],m=[];for(let d=0;d<u;d++){const _=d*h-o;for(let S=0;S<c;S++){const b=S*f-r;v.push(b,-_,0),g.push(0,0,1),m.push(S/s),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<s;_++){const S=_+c*d,b=_+c*(d+1),M=_+1+c*(d+1),x=_+1+c*d;p.push(S,b,x),p.push(b,M,x)}this.setIndex(p),this.setAttribute("position",new cn(v,3)),this.setAttribute("normal",new cn(g,3)),this.setAttribute("uv",new cn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jf="vec3 transformed = vec3( position );",Qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$f=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,th=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ah=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ch=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ph=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_h="gl_FragColor = linearToOutputTexel( gl_FragColor );",vh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Th=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ah=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ch=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ph=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ih=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Fh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Oh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Gh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Wh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qh=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Kh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$h=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ed=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,td=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,nd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,id=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,ad=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ld=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,md=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_d=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Md=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ed=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Td=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ad=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Pd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ld=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ud=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Id=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Fd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Od=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nd=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bd=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$d=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ep=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ip=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ap=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,op=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,vp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ke={alphamap_fragment:Xf,alphamap_pars_fragment:jf,alphatest_fragment:Yf,alphatest_pars_fragment:qf,aomap_fragment:Kf,aomap_pars_fragment:Zf,begin_vertex:Jf,beginnormal_vertex:Qf,bsdfs:$f,iridescence_fragment:eh,bumpmap_pars_fragment:th,clipping_planes_fragment:nh,clipping_planes_pars_fragment:ih,clipping_planes_pars_vertex:rh,clipping_planes_vertex:ah,color_fragment:sh,color_pars_fragment:oh,color_pars_vertex:lh,color_vertex:ch,common:uh,cube_uv_reflection_fragment:fh,defaultnormal_vertex:hh,displacementmap_pars_vertex:dh,displacementmap_vertex:ph,emissivemap_fragment:mh,emissivemap_pars_fragment:gh,encodings_fragment:_h,encodings_pars_fragment:vh,envmap_fragment:Sh,envmap_common_pars_fragment:Mh,envmap_pars_fragment:bh,envmap_pars_vertex:xh,envmap_physical_pars_fragment:Ih,envmap_vertex:Eh,fog_vertex:yh,fog_pars_vertex:wh,fog_fragment:Th,fog_pars_fragment:Ah,gradientmap_pars_fragment:Ch,lightmap_fragment:Rh,lightmap_pars_fragment:Ph,lights_lambert_fragment:Lh,lights_lambert_pars_fragment:Dh,lights_pars_begin:Uh,lights_toon_fragment:Fh,lights_toon_pars_fragment:Oh,lights_phong_fragment:Nh,lights_phong_pars_fragment:Bh,lights_physical_fragment:kh,lights_physical_pars_fragment:Gh,lights_fragment_begin:zh,lights_fragment_maps:Vh,lights_fragment_end:Hh,logdepthbuf_fragment:Wh,logdepthbuf_pars_fragment:Xh,logdepthbuf_pars_vertex:jh,logdepthbuf_vertex:Yh,map_fragment:qh,map_pars_fragment:Kh,map_particle_fragment:Zh,map_particle_pars_fragment:Jh,metalnessmap_fragment:Qh,metalnessmap_pars_fragment:$h,morphcolor_vertex:ed,morphnormal_vertex:td,morphtarget_pars_vertex:nd,morphtarget_vertex:id,normal_fragment_begin:rd,normal_fragment_maps:ad,normal_pars_fragment:sd,normal_pars_vertex:od,normal_vertex:ld,normalmap_pars_fragment:cd,clearcoat_normal_fragment_begin:ud,clearcoat_normal_fragment_maps:fd,clearcoat_pars_fragment:hd,iridescence_pars_fragment:dd,output_fragment:pd,packing:md,premultiplied_alpha_fragment:gd,project_vertex:_d,dithering_fragment:vd,dithering_pars_fragment:Sd,roughnessmap_fragment:Md,roughnessmap_pars_fragment:bd,shadowmap_pars_fragment:xd,shadowmap_pars_vertex:Ed,shadowmap_vertex:yd,shadowmask_pars_fragment:wd,skinbase_vertex:Td,skinning_pars_vertex:Ad,skinning_vertex:Cd,skinnormal_vertex:Rd,specularmap_fragment:Pd,specularmap_pars_fragment:Ld,tonemapping_fragment:Dd,tonemapping_pars_fragment:Ud,transmission_fragment:Id,transmission_pars_fragment:Fd,uv_pars_fragment:Od,uv_pars_vertex:Nd,uv_vertex:Bd,worldpos_vertex:kd,background_vert:Gd,background_frag:zd,backgroundCube_vert:Vd,backgroundCube_frag:Hd,cube_vert:Wd,cube_frag:Xd,depth_vert:jd,depth_frag:Yd,distanceRGBA_vert:qd,distanceRGBA_frag:Kd,equirect_vert:Zd,equirect_frag:Jd,linedashed_vert:Qd,linedashed_frag:$d,meshbasic_vert:ep,meshbasic_frag:tp,meshlambert_vert:np,meshlambert_frag:ip,meshmatcap_vert:rp,meshmatcap_frag:ap,meshnormal_vert:sp,meshnormal_frag:op,meshphong_vert:lp,meshphong_frag:cp,meshphysical_vert:up,meshphysical_frag:fp,meshtoon_vert:hp,meshtoon_frag:dp,points_vert:pp,points_frag:mp,shadow_vert:gp,shadow_frag:_p,sprite_vert:vp,sprite_frag:Sp},Te={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaTest:{value:0}}},Pn={basic:{uniforms:Wt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Wt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Wt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Wt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Wt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Wt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Wt([Te.points,Te.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Wt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Wt([Te.common,Te.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Wt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Wt([Te.sprite,Te.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Wt([Te.common,Te.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Wt([Te.lights,Te.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Pn.physical={uniforms:Wt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const _a={r:0,b:0,g:0};function Mp(a,e,t,n,i,r,o){const s=new Ve(0);let l=r===!0?0:1,c,u,f=null,h=0,p=null;function v(m,d){let _=!1,S=d.isScene===!0?d.background:null;switch(S&&S.isTexture&&(S=(d.backgroundBlurriness>0?t:e).get(S)),S===null?g(s,l):S&&S.isColor&&(g(S,1),_=!0),a.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),_=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),_=!0;break}(a.autoClear||_)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Ta)?(u===void 0&&(u=new an(new kr(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:ir(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(x,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=S.colorSpace!==Ze,(f!==S||h!==S.version||p!==a.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,p=a.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new an(new rr(2,2),new Yn({name:"BackgroundMaterial",uniforms:ir(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=S.colorSpace!==Ze,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||p!==a.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,p=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,d){m.getRGB(_a,Nc(a)),n.buffers.color.setClear(_a.r,_a.g,_a.b,d,o)}return{getClearColor:function(){return s},setClearColor:function(m,d=1){s.set(m),l=d,g(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(s,l)},render:v}}function bp(a,e,t,n){const i=a.getParameter(a.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,s={},l=m(null);let c=l,u=!1;function f(N,R,k,K,q){let z=!1;if(o){const X=g(K,k,R);c!==X&&(c=X,p(c.object)),z=d(N,K,k,q),z&&_(N,K,k,q)}else{const X=R.wireframe===!0;(c.geometry!==K.id||c.program!==k.id||c.wireframe!==X)&&(c.geometry=K.id,c.program=k.id,c.wireframe=X,z=!0)}q!==null&&t.update(q,a.ELEMENT_ARRAY_BUFFER),(z||u)&&(u=!1,L(N,R,k,K),q!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function h(){return n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function p(N){return n.isWebGL2?a.bindVertexArray(N):r.bindVertexArrayOES(N)}function v(N){return n.isWebGL2?a.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function g(N,R,k){const K=k.wireframe===!0;let q=s[N.id];q===void 0&&(q={},s[N.id]=q);let z=q[R.id];z===void 0&&(z={},q[R.id]=z);let X=z[K];return X===void 0&&(X=m(h()),z[K]=X),X}function m(N){const R=[],k=[],K=[];for(let q=0;q<i;q++)R[q]=0,k[q]=0,K[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:k,attributeDivisors:K,object:N,attributes:{},index:null}}function d(N,R,k,K){const q=c.attributes,z=R.attributes;let X=0;const A=k.getAttributes();for(const Y in A)if(A[Y].location>=0){const H=q[Y];let W=z[Y];if(W===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(W=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(W=N.instanceColor)),H===void 0||H.attribute!==W||W&&H.data!==W.data)return!0;X++}return c.attributesNum!==X||c.index!==K}function _(N,R,k,K){const q={},z=R.attributes;let X=0;const A=k.getAttributes();for(const Y in A)if(A[Y].location>=0){let H=z[Y];H===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(H=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(H=N.instanceColor));const W={};W.attribute=H,H&&H.data&&(W.data=H.data),q[Y]=W,X++}c.attributes=q,c.attributesNum=X,c.index=K}function S(){const N=c.newAttributes;for(let R=0,k=N.length;R<k;R++)N[R]=0}function b(N){M(N,0)}function M(N,R){const k=c.newAttributes,K=c.enabledAttributes,q=c.attributeDivisors;k[N]=1,K[N]===0&&(a.enableVertexAttribArray(N),K[N]=1),q[N]!==R&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,R),q[N]=R)}function x(){const N=c.newAttributes,R=c.enabledAttributes;for(let k=0,K=R.length;k<K;k++)R[k]!==N[k]&&(a.disableVertexAttribArray(k),R[k]=0)}function D(N,R,k,K,q,z){n.isWebGL2===!0&&(k===a.INT||k===a.UNSIGNED_INT)?a.vertexAttribIPointer(N,R,k,q,z):a.vertexAttribPointer(N,R,k,K,q,z)}function L(N,R,k,K){if(n.isWebGL2===!1&&(N.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const q=K.attributes,z=k.getAttributes(),X=R.defaultAttributeValues;for(const A in z){const Y=z[A];if(Y.location>=0){let G=q[A];if(G===void 0&&(A==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),A==="instanceColor"&&N.instanceColor&&(G=N.instanceColor)),G!==void 0){const H=G.normalized,W=G.itemSize,O=t.get(G);if(O===void 0)continue;const P=O.buffer,ne=O.type,oe=O.bytesPerElement;if(G.isInterleavedBufferAttribute){const re=G.data,le=re.stride,fe=G.offset;if(re.isInstancedInterleavedBuffer){for(let ve=0;ve<Y.locationSize;ve++)M(Y.location+ve,re.meshPerAttribute);N.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ve=0;ve<Y.locationSize;ve++)b(Y.location+ve);a.bindBuffer(a.ARRAY_BUFFER,P);for(let ve=0;ve<Y.locationSize;ve++)D(Y.location+ve,W/Y.locationSize,ne,H,le*oe,(fe+W/Y.locationSize*ve)*oe)}else{if(G.isInstancedBufferAttribute){for(let re=0;re<Y.locationSize;re++)M(Y.location+re,G.meshPerAttribute);N.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let re=0;re<Y.locationSize;re++)b(Y.location+re);a.bindBuffer(a.ARRAY_BUFFER,P);for(let re=0;re<Y.locationSize;re++)D(Y.location+re,W/Y.locationSize,ne,H,W*oe,W/Y.locationSize*re*oe)}}else if(X!==void 0){const H=X[A];if(H!==void 0)switch(H.length){case 2:a.vertexAttrib2fv(Y.location,H);break;case 3:a.vertexAttrib3fv(Y.location,H);break;case 4:a.vertexAttrib4fv(Y.location,H);break;default:a.vertexAttrib1fv(Y.location,H)}}}}x()}function E(){U();for(const N in s){const R=s[N];for(const k in R){const K=R[k];for(const q in K)v(K[q].object),delete K[q];delete R[k]}delete s[N]}}function T(N){if(s[N.id]===void 0)return;const R=s[N.id];for(const k in R){const K=R[k];for(const q in K)v(K[q].object),delete K[q];delete R[k]}delete s[N.id]}function B(N){for(const R in s){const k=s[R];if(k[N.id]===void 0)continue;const K=k[N.id];for(const q in K)v(K[q].object),delete K[q];delete k[N.id]}}function U(){C(),u=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:U,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:B,initAttributes:S,enableAttribute:b,disableUnusedAttributes:x}}function xp(a,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function s(c,u){a.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let h,p;if(i)h=a,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](r,c,u,f),t.update(u,r,f)}this.setMode=o,this.render=s,this.renderInstances=l}function Ep(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(D){if(D==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),h=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=a.getParameter(a.MAX_TEXTURE_SIZE),v=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),g=a.getParameter(a.MAX_VERTEX_ATTRIBS),m=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),d=a.getParameter(a.MAX_VARYING_VECTORS),_=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),S=h>0,b=o||e.has("OES_texture_float"),M=S&&b,x=o?a.getParameter(a.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:_,vertexTextures:S,floatFragmentTextures:b,floatVertexTextures:M,maxSamples:x}}function yp(a){const e=this;let t=null,n=0,i=!1,r=!1;const o=new pi,s=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||i;return i=h,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,d=a.get(f);if(!i||v===null||v.length===0||r&&!m)r?u(null):c();else{const _=r?0:n,S=_*4;let b=d.clippingState||null;l.value=b,b=u(v,h,S,p);for(let M=0;M!==S;++M)b[M]=t[M];d.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const d=p+g*4,_=h.matrixWorldInverse;s.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,b=p;S!==g;++S,b+=4)o.copy(f[S]).applyMatrix4(_,s),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function wp(a){let e=new WeakMap;function t(o,s){return s===Rs?o.mapping=er:s===Ps&&(o.mapping=tr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===Rs||s===Ps)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zf(l.height/2);return c.fromEquirectangularTexture(a,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const s=o.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Js extends Zs{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,s=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ki=4,dl=[.125,.215,.35,.446,.526,.582],gi=20,Ms=new Js,pl=new Ve;let bs=null;const mi=(1+Math.sqrt(5))/2,ji=1/mi,ml=[new J(1,1,1),new J(-1,1,1),new J(1,1,-1),new J(-1,1,-1),new J(0,mi,ji),new J(0,mi,-ji),new J(ji,0,mi),new J(-ji,0,mi),new J(mi,ji,0),new J(-mi,ji,0)];class gl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){bs=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bs),e.scissorTest=!1,va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Ir,format:En,colorSpace:Un,depthBuffer:!1},i=_l(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_l(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tp(r)),this._blurMaterial=Ap(r,e,t)}return i}_compileMaterial(e){const t=new an(this._lodPlanes[0],e);this._renderer.compile(t,Ms)}_sceneToCubeUV(e,t,n,i){const s=new rn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(pl),u.toneMapping=Dn,u.autoClear=!1;const p=new qs({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),v=new an(new kr,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(pl),g=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(s.up.set(0,l[d],0),s.lookAt(c[d],0,0)):_===1?(s.up.set(0,0,l[d]),s.lookAt(0,c[d],0)):(s.up.set(0,l[d],0),s.lookAt(0,0,c[d]));const S=this._cubeSize;va(i,_*S,d>2?S:0,S,S),u.setRenderTarget(i),g&&u.render(v,s),u.render(e,s)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===er||e.mapping===tr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new an(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;va(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ms)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ml[(i-1)%ml.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new an(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*gi-1),g=r/v,m=isFinite(r)?1+Math.floor(u*g):gi;m>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const d=[];let _=0;for(let D=0;D<gi;++D){const L=D/g,E=Math.exp(-L*L/2);d.push(E),D===0?_+=E:D<m&&(_+=2*E)}for(let D=0;D<d.length;D++)d[D]=d[D]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:S}=this;h.dTheta.value=v,h.mipInt.value=S-n;const b=this._sizeLods[i],M=3*b*(i>S-Ki?i-S+Ki:0),x=4*(this._cubeSize-b);va(t,M,x,3*b,2*b),l.setRenderTarget(t),l.render(f,Ms)}}function Tp(a){const e=[],t=[],n=[];let i=a;const r=a-Ki+1+dl.length;for(let o=0;o<r;o++){const s=Math.pow(2,i);t.push(s);let l=1/s;o>a-Ki?l=dl[o-a+Ki-1]:o===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,g=3,m=2,d=1,_=new Float32Array(g*v*p),S=new Float32Array(m*v*p),b=new Float32Array(d*v*p);for(let x=0;x<p;x++){const D=x%3*2/3-1,L=x>2?0:-1,E=[D,L,0,D+2/3,L,0,D+2/3,L+1,0,D,L,0,D+2/3,L+1,0,D,L+1,0];_.set(E,g*v*x),S.set(h,m*v*x);const T=[x,x,x,x,x,x];b.set(T,d*v*x)}const M=new hn;M.setAttribute("position",new yn(_,g)),M.setAttribute("uv",new yn(S,m)),M.setAttribute("faceIndex",new yn(b,d)),e.push(M),i>Ki&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _l(a,e,t){const n=new oi(a,e,t);return n.texture.mapping=Ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function va(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function Ap(a,e,t){const n=new Float32Array(gi),i=new J(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function vl(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Sl(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Qs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cp(a){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===Rs||l===Ps,u=l===er||l===tr;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new gl(a)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new gl(a));const h=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",r),h.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Rp(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Pp(a,e,t,n){const i={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",o),delete i[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],a.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const g=p[v];for(let m=0,d=g.length;m<d;m++)e.update(g[m],a.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,v=f.attributes.position;let g=0;if(p!==null){const _=p.array;g=p.version;for(let S=0,b=_.length;S<b;S+=3){const M=_[S+0],x=_[S+1],D=_[S+2];h.push(M,x,x,D,D,M)}}else{const _=v.array;g=v.version;for(let S=0,b=_.length/3-1;S<b;S+=3){const M=S+0,x=S+1,D=S+2;h.push(M,x,x,D,D,M)}}const m=new(Pc(h)?Oc:Fc)(h,1);m.version=g;const d=r.get(f);d&&e.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function Lp(a,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}let s,l;function c(h){s=h.type,l=h.bytesPerElement}function u(h,p){a.drawElements(r,p,s,h*l),t.update(p,r,1)}function f(h,p,v){if(v===0)return;let g,m;if(i)g=a,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,p,s,h*l,v),t.update(p,r,v)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function Dp(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,s){switch(t.calls++,o){case a.TRIANGLES:t.triangles+=s*(r/3);break;case a.LINES:t.lines+=s*(r/2);break;case a.LINE_STRIP:t.lines+=s*(r-1);break;case a.LINE_LOOP:t.lines+=s*r;break;case a.POINTS:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Up(a,e){return a[0]-e[0]}function Ip(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Fp(a,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new yt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=p!==void 0?p.length:0;let g=r.get(u);if(g===void 0||g.count!==v){let N=function(){U.dispose(),r.delete(u),u.removeEventListener("dispose",N)};g!==void 0&&g.texture.dispose();const _=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let L=0;_===!0&&(L=1),S===!0&&(L=2),b===!0&&(L=3);let E=u.attributes.position.count*L,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const B=new Float32Array(E*T*4*v),U=new Uc(B,E,T,v);U.type=vi,U.needsUpdate=!0;const C=L*4;for(let R=0;R<v;R++){const k=M[R],K=x[R],q=D[R],z=E*T*4*R;for(let X=0;X<k.count;X++){const A=X*C;_===!0&&(o.fromBufferAttribute(k,X),B[z+A+0]=o.x,B[z+A+1]=o.y,B[z+A+2]=o.z,B[z+A+3]=0),S===!0&&(o.fromBufferAttribute(K,X),B[z+A+4]=o.x,B[z+A+5]=o.y,B[z+A+6]=o.z,B[z+A+7]=0),b===!0&&(o.fromBufferAttribute(q,X),B[z+A+8]=o.x,B[z+A+9]=o.y,B[z+A+10]=o.z,B[z+A+11]=q.itemSize===4?o.w:1)}}g={count:v,texture:U,size:new ze(E,T)},r.set(u,g),u.addEventListener("dispose",N)}let m=0;for(let _=0;_<h.length;_++)m+=h[_];const d=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(a,"morphTargetBaseInfluence",d),f.getUniforms().setValue(a,"morphTargetInfluences",h),f.getUniforms().setValue(a,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",g.size)}else{const p=h===void 0?0:h.length;let v=n[u.id];if(v===void 0||v.length!==p){v=[];for(let S=0;S<p;S++)v[S]=[S,0];n[u.id]=v}for(let S=0;S<p;S++){const b=v[S];b[0]=S,b[1]=h[S]}v.sort(Ip);for(let S=0;S<8;S++)S<p&&v[S][1]?(s[S][0]=v[S][0],s[S][1]=v[S][1]):(s[S][0]=Number.MAX_SAFE_INTEGER,s[S][1]=0);s.sort(Up);const g=u.morphAttributes.position,m=u.morphAttributes.normal;let d=0;for(let S=0;S<8;S++){const b=s[S],M=b[0],x=b[1];M!==Number.MAX_SAFE_INTEGER&&x?(g&&u.getAttribute("morphTarget"+S)!==g[M]&&u.setAttribute("morphTarget"+S,g[M]),m&&u.getAttribute("morphNormal"+S)!==m[M]&&u.setAttribute("morphNormal"+S,m[M]),i[S]=x,d+=x):(g&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),m&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const _=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(a,"morphTargetBaseInfluence",_),f.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function Op(a,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER)),f}function o(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Gc=new qt,zc=new Uc,Vc=new Tf,Hc=new Bc,Ml=[],bl=[],xl=new Float32Array(16),El=new Float32Array(9),yl=new Float32Array(4);function or(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=Ml[i];if(r===void 0&&(r=new Float32Array(i),Ml[i]=r),e!==0){n.toArray(r,0);for(let o=1,s=0;o!==e;++o)s+=t,a[o].toArray(r,s)}return r}function At(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Ct(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Ra(a,e){let t=bl[e];t===void 0&&(t=new Int32Array(e),bl[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Np(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Bp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;a.uniform2fv(this.addr,e),Ct(t,e)}}function kp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;a.uniform3fv(this.addr,e),Ct(t,e)}}function Gp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;a.uniform4fv(this.addr,e),Ct(t,e)}}function zp(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;yl.set(n),a.uniformMatrix2fv(this.addr,!1,yl),Ct(t,n)}}function Vp(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;El.set(n),a.uniformMatrix3fv(this.addr,!1,El),Ct(t,n)}}function Hp(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;xl.set(n),a.uniformMatrix4fv(this.addr,!1,xl),Ct(t,n)}}function Wp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Xp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;a.uniform2iv(this.addr,e),Ct(t,e)}}function jp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;a.uniform3iv(this.addr,e),Ct(t,e)}}function Yp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;a.uniform4iv(this.addr,e),Ct(t,e)}}function qp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Kp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;a.uniform2uiv(this.addr,e),Ct(t,e)}}function Zp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;a.uniform3uiv(this.addr,e),Ct(t,e)}}function Jp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;a.uniform4uiv(this.addr,e),Ct(t,e)}}function Qp(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Gc,i)}function $p(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Vc,i)}function em(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Hc,i)}function tm(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||zc,i)}function nm(a){switch(a){case 5126:return Np;case 35664:return Bp;case 35665:return kp;case 35666:return Gp;case 35674:return zp;case 35675:return Vp;case 35676:return Hp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return jp;case 35669:case 35673:return Yp;case 5125:return qp;case 36294:return Kp;case 36295:return Zp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return em;case 36289:case 36303:case 36311:case 36292:return tm}}function im(a,e){a.uniform1fv(this.addr,e)}function rm(a,e){const t=or(e,this.size,2);a.uniform2fv(this.addr,t)}function am(a,e){const t=or(e,this.size,3);a.uniform3fv(this.addr,t)}function sm(a,e){const t=or(e,this.size,4);a.uniform4fv(this.addr,t)}function om(a,e){const t=or(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function lm(a,e){const t=or(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function cm(a,e){const t=or(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function um(a,e){a.uniform1iv(this.addr,e)}function fm(a,e){a.uniform2iv(this.addr,e)}function hm(a,e){a.uniform3iv(this.addr,e)}function dm(a,e){a.uniform4iv(this.addr,e)}function pm(a,e){a.uniform1uiv(this.addr,e)}function mm(a,e){a.uniform2uiv(this.addr,e)}function gm(a,e){a.uniform3uiv(this.addr,e)}function _m(a,e){a.uniform4uiv(this.addr,e)}function vm(a,e,t){const n=this.cache,i=e.length,r=Ra(t,i);At(n,r)||(a.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Gc,r[o])}function Sm(a,e,t){const n=this.cache,i=e.length,r=Ra(t,i);At(n,r)||(a.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Vc,r[o])}function Mm(a,e,t){const n=this.cache,i=e.length,r=Ra(t,i);At(n,r)||(a.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Hc,r[o])}function bm(a,e,t){const n=this.cache,i=e.length,r=Ra(t,i);At(n,r)||(a.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||zc,r[o])}function xm(a){switch(a){case 5126:return im;case 35664:return rm;case 35665:return am;case 35666:return sm;case 35674:return om;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return um;case 35667:case 35671:return fm;case 35668:case 35672:return hm;case 35669:case 35673:return dm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return bm}}class Em{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=nm(t.type)}}class ym{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=xm(t.type)}}class wm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const xs=/(\w+)(\])?(\[|\.)?/g;function wl(a,e){a.seq.push(e),a.map[e.id]=e}function Tm(a,e,t){const n=a.name,i=n.length;for(xs.lastIndex=0;;){const r=xs.exec(n),o=xs.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===i){wl(t,c===void 0?new Em(s,a,e):new ym(s,a,e));break}else{let f=t.map[s];f===void 0&&(f=new wm(s),wl(t,f)),t=f}}}class xa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Tm(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const s=t[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Tl(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let Am=0;function Cm(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}function Rm(a){switch(a){case Un:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",a),["Linear","( value )"]}}function Al(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Cm(a.getShaderSource(e),o)}else return i}function Pm(a,e){const t=Rm(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Lm(a,e){let t;switch(e){case Yu:t="Linear";break;case qu:t="Reinhard";break;case Ku:t="OptimizedCineon";break;case yc:t="ACESFilmic";break;case Zu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Dm(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ar).join(`
`)}function Um(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Im(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),o=r.name;let s=1;r.type===a.FLOAT_MAT2&&(s=2),r.type===a.FLOAT_MAT3&&(s=3),r.type===a.FLOAT_MAT4&&(s=4),t[o]={type:r.type,location:a.getAttribLocation(e,o),locationSize:s}}return t}function Ar(a){return a!==""}function Cl(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rl(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fs(a){return a.replace(Fm,Om)}function Om(a,e){const t=Ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Fs(t)}const Nm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pl(a){return a.replace(Nm,Bm)}function Bm(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ll(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function km(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Sc?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Mc?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function Gm(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case Ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zm(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case tr:e="ENVMAP_MODE_REFRACTION";break}return e}function Vm(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Ec:e="ENVMAP_BLENDING_MULTIPLY";break;case Xu:e="ENVMAP_BLENDING_MIX";break;case ju:e="ENVMAP_BLENDING_ADD";break}return e}function Hm(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wm(a,e,t,n){const i=a.getContext(),r=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=km(t),c=Gm(t),u=zm(t),f=Vm(t),h=Hm(t),p=t.isWebGL2?"":Dm(t),v=Um(r),g=i.createProgram();let m,d,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[v].filter(Ar).join(`
`),m.length>0&&(m+=`
`),d=[p,v].filter(Ar).join(`
`),d.length>0&&(d+=`
`)):(m=[Ll(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),d=[p,Ll(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Dn?Lm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.encodings_pars_fragment,Pm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ar).join(`
`)),o=Fs(o),o=Cl(o,t),o=Rl(o,t),s=Fs(s),s=Cl(s,t),s=Rl(s,t),o=Pl(o),s=Pl(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=_+m+o,b=_+d+s,M=Tl(i,i.VERTEX_SHADER,S),x=Tl(i,i.FRAGMENT_SHADER,b);if(i.attachShader(g,M),i.attachShader(g,x),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),a.debug.checkShaderErrors){const E=i.getProgramInfoLog(g).trim(),T=i.getShaderInfoLog(M).trim(),B=i.getShaderInfoLog(x).trim();let U=!0,C=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(U=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,g,M,x);else{const N=Al(i,M,"vertex"),R=Al(i,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+E+`
`+N+`
`+R)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(T===""||B==="")&&(C=!1);C&&(this.diagnostics={runnable:U,programLog:E,vertexShader:{log:T,prefix:m},fragmentShader:{log:B,prefix:d}})}i.deleteShader(M),i.deleteShader(x);let D;this.getUniforms=function(){return D===void 0&&(D=new xa(i,g)),D};let L;return this.getAttributes=function(){return L===void 0&&(L=Im(i,g)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=Am++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=x,this}let Xm=0;class jm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ym(e),t.set(e,n)),n}}class Ym{constructor(e){this.id=Xm++,this.code=e,this.usedTimes=0}}function qm(a,e,t,n,i,r,o){const s=new Ys,l=new jm,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return E===1?"uv1":E===2?"uv2":E===3?"uv3":"uv"}function m(E,T,B,U,C){const N=U.fog,R=C.geometry,k=E.isMeshStandardMaterial?U.environment:null,K=(E.isMeshStandardMaterial?t:e).get(E.envMap||k),q=K&&K.mapping===Ta?K.image.height:null,z=v[E.type];E.precision!==null&&(p=i.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const X=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,A=X!==void 0?X.length:0;let Y=0;R.morphAttributes.position!==void 0&&(Y=1),R.morphAttributes.normal!==void 0&&(Y=2),R.morphAttributes.color!==void 0&&(Y=3);let G,H,W,O;if(z){const rt=Pn[z];G=rt.vertexShader,H=rt.fragmentShader}else G=E.vertexShader,H=E.fragmentShader,l.update(E),W=l.getVertexShaderID(E),O=l.getFragmentShaderID(E);const P=a.getRenderTarget(),ne=C.isInstancedMesh===!0,oe=!!E.map,re=!!E.matcap,le=!!K,fe=!!E.aoMap,ve=!!E.lightMap,Ee=!!E.bumpMap,xe=!!E.normalMap,ye=!!E.displacementMap,Ie=!!E.emissiveMap,ue=!!E.metalnessMap,Me=!!E.roughnessMap,Se=E.clearcoat>0,pe=E.iridescence>0,I=E.sheen>0,w=E.transmission>0,j=Se&&!!E.clearcoatMap,$=Se&&!!E.clearcoatNormalMap,ae=Se&&!!E.clearcoatRoughnessMap,me=pe&&!!E.iridescenceMap,y=pe&&!!E.iridescenceThicknessMap,ee=I&&!!E.sheenColorMap,Z=I&&!!E.sheenRoughnessMap,_e=!!E.specularMap,be=!!E.specularColorMap,we=!!E.specularIntensityMap,he=w&&!!E.transmissionMap,de=w&&!!E.thicknessMap,Re=!!E.gradientMap,Pe=!!E.alphaMap,nt=E.alphaTest>0,V=!!E.extensions,ie=!!R.attributes.uv1,ge=!!R.attributes.uv2,Ce=!!R.attributes.uv3;return{isWebGL2:u,shaderID:z,shaderName:E.type,vertexShader:G,fragmentShader:H,defines:E.defines,customVertexShaderID:W,customFragmentShaderID:O,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,instancing:ne,instancingColor:ne&&C.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:P===null?a.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Un,map:oe,matcap:re,envMap:le,envMapMode:le&&K.mapping,envMapCubeUVHeight:q,aoMap:fe,lightMap:ve,bumpMap:Ee,normalMap:xe,displacementMap:h&&ye,emissiveMap:Ie,normalMapObjectSpace:xe&&E.normalMapType===mf,normalMapTangentSpace:xe&&E.normalMapType===Cc,metalnessMap:ue,roughnessMap:Me,clearcoat:Se,clearcoatMap:j,clearcoatNormalMap:$,clearcoatRoughnessMap:ae,iridescence:pe,iridescenceMap:me,iridescenceThicknessMap:y,sheen:I,sheenColorMap:ee,sheenRoughnessMap:Z,specularMap:_e,specularColorMap:be,specularIntensityMap:we,transmission:w,transmissionMap:he,thicknessMap:de,gradientMap:Re,opaque:E.transparent===!1&&E.blending===Ji,alphaMap:Pe,alphaTest:nt,combine:E.combine,mapUv:oe&&g(E.map.channel),aoMapUv:fe&&g(E.aoMap.channel),lightMapUv:ve&&g(E.lightMap.channel),bumpMapUv:Ee&&g(E.bumpMap.channel),normalMapUv:xe&&g(E.normalMap.channel),displacementMapUv:ye&&g(E.displacementMap.channel),emissiveMapUv:Ie&&g(E.emissiveMap.channel),metalnessMapUv:ue&&g(E.metalnessMap.channel),roughnessMapUv:Me&&g(E.roughnessMap.channel),clearcoatMapUv:j&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:$&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:y&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:Z&&g(E.sheenRoughnessMap.channel),specularMapUv:_e&&g(E.specularMap.channel),specularColorMapUv:be&&g(E.specularColorMap.channel),specularIntensityMapUv:we&&g(E.specularIntensityMap.channel),transmissionMapUv:he&&g(E.transmissionMap.channel),thicknessMapUv:de&&g(E.thicknessMap.channel),alphaMapUv:Pe&&g(E.alphaMap.channel),vertexTangents:xe&&!!R.attributes.tangent,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUv1s:ie,vertexUv2s:ge,vertexUv3s:Ce,pointsUvs:C.isPoints===!0&&!!R.attributes.uv&&(oe||Pe),fog:!!N,useFog:E.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:C.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:A,morphTextureStride:Y,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:a.shadowMap.enabled&&B.length>0,shadowMapType:a.shadowMap.type,toneMapping:E.toneMapped?a.toneMapping:Dn,useLegacyLights:a.useLegacyLights,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bn,flipSided:E.side===Yt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:V&&E.extensions.derivatives===!0,extensionFragDepth:V&&E.extensions.fragDepth===!0,extensionDrawBuffers:V&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:V&&E.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)T.push(B),T.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(_(T,E),S(T,E),T.push(a.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function _(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function S(E,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.matcap&&s.enable(4),T.envMap&&s.enable(5),T.normalMapObjectSpace&&s.enable(6),T.normalMapTangentSpace&&s.enable(7),T.clearcoat&&s.enable(8),T.iridescence&&s.enable(9),T.alphaTest&&s.enable(10),T.vertexColors&&s.enable(11),T.vertexAlphas&&s.enable(12),T.vertexUv1s&&s.enable(13),T.vertexUv2s&&s.enable(14),T.vertexUv3s&&s.enable(15),T.vertexTangents&&s.enable(16),E.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.useLegacyLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),E.push(s.mask)}function b(E){const T=v[E.type];let B;if(T){const U=Pn[T];B=Ks.clone(U.uniforms)}else B=E.uniforms;return B}function M(E,T){let B;for(let U=0,C=c.length;U<C;U++){const N=c[U];if(N.cacheKey===T){B=N,++B.usedTimes;break}}return B===void 0&&(B=new Wm(a,T,E,r),c.push(B)),B}function x(E){if(--E.usedTimes===0){const T=c.indexOf(E);c[T]=c[c.length-1],c.pop(),E.destroy()}}function D(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:M,releaseProgram:x,releaseShaderCache:D,programs:c,dispose:L}}function Km(){let a=new WeakMap;function e(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function t(r){a.delete(r)}function n(r,o,s){a.get(r)[o]=s}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Zm(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Dl(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Ul(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,p,v,g,m){let d=a[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},a[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=g,d.group=m),e++,d}function s(f,h,p,v,g,m){const d=o(f,h,p,v,g,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function l(f,h,p,v,g,m){const d=o(f,h,p,v,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||Zm),n.length>1&&n.sort(h||Dl),i.length>1&&i.sort(h||Dl)}function u(){for(let f=e,h=a.length;f<h;f++){const p=a[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function Jm(){let a=new WeakMap;function e(n,i){const r=a.get(n);let o;return r===void 0?(o=new Ul,a.set(n,[o])):i>=r.length?(o=new Ul,r.push(o)):o=r[i],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function Qm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new Ve};break;case"SpotLight":t={position:new J,direction:new J,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new J,halfWidth:new J,halfHeight:new J};break}return a[e.id]=t,t}}}function $m(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let eg=0;function tg(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function ng(a,e){const t=new Qm,n=$m(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new J);const r=new J,o=new _t,s=new _t;function l(u,f){let h=0,p=0,v=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let g=0,m=0,d=0,_=0,S=0,b=0,M=0,x=0,D=0,L=0;u.sort(tg);const E=f===!0?Math.PI:1;for(let B=0,U=u.length;B<U;B++){const C=u[B],N=C.color,R=C.intensity,k=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=N.r*R*E,p+=N.g*R*E,v+=N.b*R*E;else if(C.isLightProbe)for(let q=0;q<9;q++)i.probe[q].addScaledVector(C.sh.coefficients[q],R);else if(C.isDirectionalLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity*E),C.castShadow){const z=C.shadow,X=n.get(C);X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,i.directionalShadow[g]=X,i.directionalShadowMap[g]=K,i.directionalShadowMatrix[g]=C.shadow.matrix,b++}i.directional[g]=q,g++}else if(C.isSpotLight){const q=t.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(N).multiplyScalar(R*E),q.distance=k,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,i.spot[d]=q;const z=C.shadow;if(C.map&&(i.spotLightMap[D]=C.map,D++,z.updateMatrices(C),C.castShadow&&L++),i.spotLightMatrix[d]=z.matrix,C.castShadow){const X=n.get(C);X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,i.spotShadow[d]=X,i.spotShadowMap[d]=K,x++}d++}else if(C.isRectAreaLight){const q=t.get(C);q.color.copy(N).multiplyScalar(R),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),i.rectArea[_]=q,_++}else if(C.isPointLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity*E),q.distance=C.distance,q.decay=C.decay,C.castShadow){const z=C.shadow,X=n.get(C);X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,X.shadowCameraNear=z.camera.near,X.shadowCameraFar=z.camera.far,i.pointShadow[m]=X,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=C.shadow.matrix,M++}i.point[m]=q,m++}else if(C.isHemisphereLight){const q=t.get(C);q.skyColor.copy(C.color).multiplyScalar(R*E),q.groundColor.copy(C.groundColor).multiplyScalar(R*E),i.hemi[S]=q,S++}}_>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=v;const T=i.hash;(T.directionalLength!==g||T.pointLength!==m||T.spotLength!==d||T.rectAreaLength!==_||T.hemiLength!==S||T.numDirectionalShadows!==b||T.numPointShadows!==M||T.numSpotShadows!==x||T.numSpotMaps!==D)&&(i.directional.length=g,i.spot.length=d,i.rectArea.length=_,i.point.length=m,i.hemi.length=S,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=x+D-L,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=L,T.directionalLength=g,T.pointLength=m,T.spotLength=d,T.rectAreaLength=_,T.hemiLength=S,T.numDirectionalShadows=b,T.numPointShadows=M,T.numSpotShadows=x,T.numSpotMaps=D,i.version=eg++)}function c(u,f){let h=0,p=0,v=0,g=0,m=0;const d=f.matrixWorldInverse;for(let _=0,S=u.length;_<S;_++){const b=u[_];if(b.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(d),h++}else if(b.isSpotLight){const M=i.spot[v];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(d),v++}else if(b.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),s.identity(),o.copy(b.matrixWorld),o.premultiply(d),s.extractRotation(o),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),g++}else if(b.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(d),p++}else if(b.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function Il(a,e){const t=new ng(a,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function s(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function ig(a,e){let t=new WeakMap;function n(r,o=0){const s=t.get(r);let l;return s===void 0?(l=new Il(a,e),t.set(r,[l])):o>=s.length?(l=new Il(a,e),s.push(l)):l=s[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Wc extends sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xc extends sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ag=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sg(a,e,t){let n=new Ca;const i=new ze,r=new ze,o=new yt,s=new Wc({depthPacking:Ac}),l=new Xc,c={},u=t.maxTextureSize,f={[jn]:Yt,[Yt]:jn,[bn]:bn},h=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:rg,fragmentShader:ag}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new hn;v.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new an(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sc;let d=this.type;this.render=function(M,x,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const L=a.getRenderTarget(),E=a.getActiveCubeFace(),T=a.getActiveMipmapLevel(),B=a.state;B.setBlending(ri),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const U=d!==Wn&&this.type===Wn,C=d===Wn&&this.type!==Wn;for(let N=0,R=M.length;N<R;N++){const k=M[N],K=k.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const q=K.getFrameExtents();if(i.multiply(q),r.copy(K.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/q.x),i.x=r.x*q.x,K.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/q.y),i.y=r.y*q.y,K.mapSize.y=r.y)),K.map===null||U===!0||C===!0){const X=this.type!==Wn?{minFilter:Xt,magFilter:Xt}:{};K.map!==null&&K.map.dispose(),K.map=new oi(i.x,i.y,X),K.map.texture.name=k.name+".shadowMap",K.camera.updateProjectionMatrix()}a.setRenderTarget(K.map),a.clear();const z=K.getViewportCount();for(let X=0;X<z;X++){const A=K.getViewport(X);o.set(r.x*A.x,r.y*A.y,r.x*A.z,r.y*A.w),B.viewport(o),K.updateMatrices(k,X),n=K.getFrustum(),b(x,D,K.camera,k,this.type)}K.isPointLightShadow!==!0&&this.type===Wn&&_(K,D),K.needsUpdate=!1}d=this.type,m.needsUpdate=!1,a.setRenderTarget(L,E,T)};function _(M,x){const D=e.update(g);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new oi(i.x,i.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,a.setRenderTarget(M.mapPass),a.clear(),a.renderBufferDirect(x,null,D,h,g,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,a.setRenderTarget(M.map),a.clear(),a.renderBufferDirect(x,null,D,p,g,null)}function S(M,x,D,L){let E=null;const T=D.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(T!==void 0)E=T;else if(E=D.isPointLight===!0?l:s,a.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const B=E.uuid,U=x.uuid;let C=c[B];C===void 0&&(C={},c[B]=C);let N=C[U];N===void 0&&(N=E.clone(),C[U]=N),E=N}if(E.visible=x.visible,E.wireframe=x.wireframe,L===Wn?E.side=x.shadowSide!==null?x.shadowSide:x.side:E.side=x.shadowSide!==null?x.shadowSide:f[x.side],E.alphaMap=x.alphaMap,E.alphaTest=x.alphaTest,E.map=x.map,E.clipShadows=x.clipShadows,E.clippingPlanes=x.clippingPlanes,E.clipIntersection=x.clipIntersection,E.displacementMap=x.displacementMap,E.displacementScale=x.displacementScale,E.displacementBias=x.displacementBias,E.wireframeLinewidth=x.wireframeLinewidth,E.linewidth=x.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const B=a.properties.get(E);B.light=D}return E}function b(M,x,D,L,E){if(M.visible===!1)return;if(M.layers.test(x.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===Wn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld);const U=e.update(M),C=M.material;if(Array.isArray(C)){const N=U.groups;for(let R=0,k=N.length;R<k;R++){const K=N[R],q=C[K.materialIndex];if(q&&q.visible){const z=S(M,q,L,E);a.renderBufferDirect(D,null,U,z,M,K)}}}else if(C.visible){const N=S(M,C,L,E);a.renderBufferDirect(D,null,U,N,M,null)}}const B=M.children;for(let U=0,C=B.length;U<C;U++)b(B[U],x,D,L,E)}}function og(a,e,t){const n=t.isWebGL2;function i(){let V=!1;const ie=new yt;let ge=null;const Ce=new yt(0,0,0,0);return{setMask:function(Ae){ge!==Ae&&!V&&(a.colorMask(Ae,Ae,Ae,Ae),ge=Ae)},setLocked:function(Ae){V=Ae},setClear:function(Ae,rt,Ne,ke,ot){ot===!0&&(Ae*=ke,rt*=ke,Ne*=ke),ie.set(Ae,rt,Ne,ke),Ce.equals(ie)===!1&&(a.clearColor(Ae,rt,Ne,ke),Ce.copy(ie))},reset:function(){V=!1,ge=null,Ce.set(-1,0,0,0)}}}function r(){let V=!1,ie=null,ge=null,Ce=null;return{setTest:function(Ae){Ae?P(a.DEPTH_TEST):ne(a.DEPTH_TEST)},setMask:function(Ae){ie!==Ae&&!V&&(a.depthMask(Ae),ie=Ae)},setFunc:function(Ae){if(ge!==Ae){switch(Ae){case Bu:a.depthFunc(a.NEVER);break;case ku:a.depthFunc(a.ALWAYS);break;case Gu:a.depthFunc(a.LESS);break;case Cs:a.depthFunc(a.LEQUAL);break;case zu:a.depthFunc(a.EQUAL);break;case Vu:a.depthFunc(a.GEQUAL);break;case Hu:a.depthFunc(a.GREATER);break;case Wu:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}ge=Ae}},setLocked:function(Ae){V=Ae},setClear:function(Ae){Ce!==Ae&&(a.clearDepth(Ae),Ce=Ae)},reset:function(){V=!1,ie=null,ge=null,Ce=null}}}function o(){let V=!1,ie=null,ge=null,Ce=null,Ae=null,rt=null,Ne=null,ke=null,ot=null;return{setTest:function(it){V||(it?P(a.STENCIL_TEST):ne(a.STENCIL_TEST))},setMask:function(it){ie!==it&&!V&&(a.stencilMask(it),ie=it)},setFunc:function(it,$e,lt){(ge!==it||Ce!==$e||Ae!==lt)&&(a.stencilFunc(it,$e,lt),ge=it,Ce=$e,Ae=lt)},setOp:function(it,$e,lt){(rt!==it||Ne!==$e||ke!==lt)&&(a.stencilOp(it,$e,lt),rt=it,Ne=$e,ke=lt)},setLocked:function(it){V=it},setClear:function(it){ot!==it&&(a.clearStencil(it),ot=it)},reset:function(){V=!1,ie=null,ge=null,Ce=null,Ae=null,rt=null,Ne=null,ke=null,ot=null}}}const s=new i,l=new r,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},v=new WeakMap,g=[],m=null,d=!1,_=null,S=null,b=null,M=null,x=null,D=null,L=null,E=!1,T=null,B=null,U=null,C=null,N=null;const R=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,K=0;const q=a.getParameter(a.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),k=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),k=K>=2);let z=null,X={};const A=a.getParameter(a.SCISSOR_BOX),Y=a.getParameter(a.VIEWPORT),G=new yt().fromArray(A),H=new yt().fromArray(Y);function W(V,ie,ge,Ce){const Ae=new Uint8Array(4),rt=a.createTexture();a.bindTexture(V,rt),a.texParameteri(V,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(V,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ne=0;Ne<ge;Ne++)n&&(V===a.TEXTURE_3D||V===a.TEXTURE_2D_ARRAY)?a.texImage3D(ie,0,a.RGBA,1,1,Ce,0,a.RGBA,a.UNSIGNED_BYTE,Ae):a.texImage2D(ie+Ne,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ae);return rt}const O={};O[a.TEXTURE_2D]=W(a.TEXTURE_2D,a.TEXTURE_2D,1),O[a.TEXTURE_CUBE_MAP]=W(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(O[a.TEXTURE_2D_ARRAY]=W(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),O[a.TEXTURE_3D]=W(a.TEXTURE_3D,a.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),P(a.DEPTH_TEST),l.setFunc(Cs),ye(!1),Ie(So),P(a.CULL_FACE),Ee(ri);function P(V){h[V]!==!0&&(a.enable(V),h[V]=!0)}function ne(V){h[V]!==!1&&(a.disable(V),h[V]=!1)}function oe(V,ie){return p[V]!==ie?(a.bindFramebuffer(V,ie),p[V]=ie,n&&(V===a.DRAW_FRAMEBUFFER&&(p[a.FRAMEBUFFER]=ie),V===a.FRAMEBUFFER&&(p[a.DRAW_FRAMEBUFFER]=ie)),!0):!1}function re(V,ie){let ge=g,Ce=!1;if(V)if(ge=v.get(ie),ge===void 0&&(ge=[],v.set(ie,ge)),V.isWebGLMultipleRenderTargets){const Ae=V.texture;if(ge.length!==Ae.length||ge[0]!==a.COLOR_ATTACHMENT0){for(let rt=0,Ne=Ae.length;rt<Ne;rt++)ge[rt]=a.COLOR_ATTACHMENT0+rt;ge.length=Ae.length,Ce=!0}}else ge[0]!==a.COLOR_ATTACHMENT0&&(ge[0]=a.COLOR_ATTACHMENT0,Ce=!0);else ge[0]!==a.BACK&&(ge[0]=a.BACK,Ce=!0);Ce&&(t.isWebGL2?a.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function le(V){return m!==V?(a.useProgram(V),m=V,!0):!1}const fe={[qi]:a.FUNC_ADD,[Au]:a.FUNC_SUBTRACT,[Cu]:a.FUNC_REVERSE_SUBTRACT};if(n)fe[Eo]=a.MIN,fe[yo]=a.MAX;else{const V=e.get("EXT_blend_minmax");V!==null&&(fe[Eo]=V.MIN_EXT,fe[yo]=V.MAX_EXT)}const ve={[Ru]:a.ZERO,[Pu]:a.ONE,[Lu]:a.SRC_COLOR,[bc]:a.SRC_ALPHA,[Nu]:a.SRC_ALPHA_SATURATE,[Fu]:a.DST_COLOR,[Uu]:a.DST_ALPHA,[Du]:a.ONE_MINUS_SRC_COLOR,[xc]:a.ONE_MINUS_SRC_ALPHA,[Ou]:a.ONE_MINUS_DST_COLOR,[Iu]:a.ONE_MINUS_DST_ALPHA};function Ee(V,ie,ge,Ce,Ae,rt,Ne,ke){if(V===ri){d===!0&&(ne(a.BLEND),d=!1);return}if(d===!1&&(P(a.BLEND),d=!0),V!==Tu){if(V!==_||ke!==E){if((S!==qi||x!==qi)&&(a.blendEquation(a.FUNC_ADD),S=qi,x=qi),ke)switch(V){case Ji:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Mo:a.blendFunc(a.ONE,a.ONE);break;case bo:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case xo:a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ji:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Mo:a.blendFunc(a.SRC_ALPHA,a.ONE);break;case bo:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case xo:a.blendFunc(a.ZERO,a.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}b=null,M=null,D=null,L=null,_=V,E=ke}return}Ae=Ae||ie,rt=rt||ge,Ne=Ne||Ce,(ie!==S||Ae!==x)&&(a.blendEquationSeparate(fe[ie],fe[Ae]),S=ie,x=Ae),(ge!==b||Ce!==M||rt!==D||Ne!==L)&&(a.blendFuncSeparate(ve[ge],ve[Ce],ve[rt],ve[Ne]),b=ge,M=Ce,D=rt,L=Ne),_=V,E=!1}function xe(V,ie){V.side===bn?ne(a.CULL_FACE):P(a.CULL_FACE);let ge=V.side===Yt;ie&&(ge=!ge),ye(ge),V.blending===Ji&&V.transparent===!1?Ee(ri):Ee(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),s.setMask(V.colorWrite);const Ce=V.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Me(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?P(a.SAMPLE_ALPHA_TO_COVERAGE):ne(a.SAMPLE_ALPHA_TO_COVERAGE)}function ye(V){T!==V&&(V?a.frontFace(a.CW):a.frontFace(a.CCW),T=V)}function Ie(V){V!==yu?(P(a.CULL_FACE),V!==B&&(V===So?a.cullFace(a.BACK):V===wu?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):ne(a.CULL_FACE),B=V}function ue(V){V!==U&&(k&&a.lineWidth(V),U=V)}function Me(V,ie,ge){V?(P(a.POLYGON_OFFSET_FILL),(C!==ie||N!==ge)&&(a.polygonOffset(ie,ge),C=ie,N=ge)):ne(a.POLYGON_OFFSET_FILL)}function Se(V){V?P(a.SCISSOR_TEST):ne(a.SCISSOR_TEST)}function pe(V){V===void 0&&(V=a.TEXTURE0+R-1),z!==V&&(a.activeTexture(V),z=V)}function I(V,ie,ge){ge===void 0&&(z===null?ge=a.TEXTURE0+R-1:ge=z);let Ce=X[ge];Ce===void 0&&(Ce={type:void 0,texture:void 0},X[ge]=Ce),(Ce.type!==V||Ce.texture!==ie)&&(z!==ge&&(a.activeTexture(ge),z=ge),a.bindTexture(V,ie||O[V]),Ce.type=V,Ce.texture=ie)}function w(){const V=X[z];V!==void 0&&V.type!==void 0&&(a.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function j(){try{a.compressedTexImage2D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $(){try{a.compressedTexImage3D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{a.texSubImage2D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{a.texSubImage3D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function y(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ee(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Z(){try{a.texStorage2D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{a.texStorage3D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{a.texImage2D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{a.texImage3D.apply(a,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function he(V){G.equals(V)===!1&&(a.scissor(V.x,V.y,V.z,V.w),G.copy(V))}function de(V){H.equals(V)===!1&&(a.viewport(V.x,V.y,V.z,V.w),H.copy(V))}function Re(V,ie){let ge=f.get(ie);ge===void 0&&(ge=new WeakMap,f.set(ie,ge));let Ce=ge.get(V);Ce===void 0&&(Ce=a.getUniformBlockIndex(ie,V.name),ge.set(V,Ce))}function Pe(V,ie){const Ce=f.get(ie).get(V);u.get(ie)!==Ce&&(a.uniformBlockBinding(ie,Ce,V.__bindingPointIndex),u.set(ie,Ce))}function nt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),n===!0&&(a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},z=null,X={},p={},v=new WeakMap,g=[],m=null,d=!1,_=null,S=null,b=null,M=null,x=null,D=null,L=null,E=!1,T=null,B=null,U=null,C=null,N=null,G.set(0,0,a.canvas.width,a.canvas.height),H.set(0,0,a.canvas.width,a.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:P,disable:ne,bindFramebuffer:oe,drawBuffers:re,useProgram:le,setBlending:Ee,setMaterial:xe,setFlipSided:ye,setCullFace:Ie,setLineWidth:ue,setPolygonOffset:Me,setScissorTest:Se,activeTexture:pe,bindTexture:I,unbindTexture:w,compressedTexImage2D:j,compressedTexImage3D:$,texImage2D:be,texImage3D:we,updateUBOMapping:Re,uniformBlockBinding:Pe,texStorage2D:Z,texStorage3D:_e,texSubImage2D:ae,texSubImage3D:me,compressedTexSubImage2D:y,compressedTexSubImage3D:ee,scissor:he,viewport:de,reset:nt}}function lg(a,e,t,n,i,r,o){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,w){return d?new OffscreenCanvas(I,w):Fr("canvas")}function S(I,w,j,$){let ae=1;if((I.width>$||I.height>$)&&(ae=$/Math.max(I.width,I.height)),ae<1||w===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const me=w?vf:Math.floor,y=me(ae*I.width),ee=me(ae*I.height);g===void 0&&(g=_(y,ee));const Z=j?_(y,ee):g;return Z.width=y,Z.height=ee,Z.getContext("2d").drawImage(I,0,0,y,ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+y+"x"+ee+")."),Z}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function b(I){return Jo(I.width)&&Jo(I.height)}function M(I){return s?!1:I.wrapS!==xn||I.wrapT!==xn||I.minFilter!==Xt&&I.minFilter!==Jt}function x(I,w){return I.generateMipmaps&&w&&I.minFilter!==Xt&&I.minFilter!==Jt}function D(I){a.generateMipmap(I)}function L(I,w,j,$,ae=!1){if(s===!1)return w;if(I!==null){if(a[I]!==void 0)return a[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let me=w;return w===a.RED&&(j===a.FLOAT&&(me=a.R32F),j===a.HALF_FLOAT&&(me=a.R16F),j===a.UNSIGNED_BYTE&&(me=a.R8)),w===a.RG&&(j===a.FLOAT&&(me=a.RG32F),j===a.HALF_FLOAT&&(me=a.RG16F),j===a.UNSIGNED_BYTE&&(me=a.RG8)),w===a.RGBA&&(j===a.FLOAT&&(me=a.RGBA32F),j===a.HALF_FLOAT&&(me=a.RGBA16F),j===a.UNSIGNED_BYTE&&(me=$===Ze&&ae===!1?a.SRGB8_ALPHA8:a.RGBA8),j===a.UNSIGNED_SHORT_4_4_4_4&&(me=a.RGBA4),j===a.UNSIGNED_SHORT_5_5_5_1&&(me=a.RGB5_A1)),(me===a.R16F||me===a.R32F||me===a.RG16F||me===a.RG32F||me===a.RGBA16F||me===a.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function E(I,w,j){return x(I,j)===!0||I.isFramebufferTexture&&I.minFilter!==Xt&&I.minFilter!==Jt?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function T(I){return I===Xt||I===wo||I===qa?a.NEAREST:a.LINEAR}function B(I){const w=I.target;w.removeEventListener("dispose",B),C(w),w.isVideoTexture&&v.delete(w)}function U(I){const w=I.target;w.removeEventListener("dispose",U),R(w)}function C(I){const w=n.get(I);if(w.__webglInit===void 0)return;const j=I.source,$=m.get(j);if($){const ae=$[w.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&N(I),Object.keys($).length===0&&m.delete(j)}n.remove(I)}function N(I){const w=n.get(I);a.deleteTexture(w.__webglTexture);const j=I.source,$=m.get(j);delete $[w.__cacheKey],o.memory.textures--}function R(I){const w=I.texture,j=n.get(I),$=n.get(w);if($.__webglTexture!==void 0&&(a.deleteTexture($.__webglTexture),o.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)a.deleteFramebuffer(j.__webglFramebuffer[ae]),j.__webglDepthbuffer&&a.deleteRenderbuffer(j.__webglDepthbuffer[ae]);else{if(a.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&a.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&a.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ae=0;ae<j.__webglColorRenderbuffer.length;ae++)j.__webglColorRenderbuffer[ae]&&a.deleteRenderbuffer(j.__webglColorRenderbuffer[ae]);j.__webglDepthRenderbuffer&&a.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let ae=0,me=w.length;ae<me;ae++){const y=n.get(w[ae]);y.__webglTexture&&(a.deleteTexture(y.__webglTexture),o.memory.textures--),n.remove(w[ae])}n.remove(w),n.remove(I)}let k=0;function K(){k=0}function q(){const I=k;return I>=l&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l),k+=1,I}function z(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function X(I,w){const j=n.get(I);if(I.isVideoTexture&&Se(I),I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){const $=I.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(j,I,w);return}}t.bindTexture(a.TEXTURE_2D,j.__webglTexture,a.TEXTURE0+w)}function A(I,w){const j=n.get(I);if(I.version>0&&j.__version!==I.version){ne(j,I,w);return}t.bindTexture(a.TEXTURE_2D_ARRAY,j.__webglTexture,a.TEXTURE0+w)}function Y(I,w){const j=n.get(I);if(I.version>0&&j.__version!==I.version){ne(j,I,w);return}t.bindTexture(a.TEXTURE_3D,j.__webglTexture,a.TEXTURE0+w)}function G(I,w){const j=n.get(I);if(I.version>0&&j.__version!==I.version){oe(j,I,w);return}t.bindTexture(a.TEXTURE_CUBE_MAP,j.__webglTexture,a.TEXTURE0+w)}const H={[Ls]:a.REPEAT,[xn]:a.CLAMP_TO_EDGE,[Ds]:a.MIRRORED_REPEAT},W={[Xt]:a.NEAREST,[wo]:a.NEAREST_MIPMAP_NEAREST,[qa]:a.NEAREST_MIPMAP_LINEAR,[Jt]:a.LINEAR,[Ju]:a.LINEAR_MIPMAP_NEAREST,[Ur]:a.LINEAR_MIPMAP_LINEAR};function O(I,w,j){if(j?(a.texParameteri(I,a.TEXTURE_WRAP_S,H[w.wrapS]),a.texParameteri(I,a.TEXTURE_WRAP_T,H[w.wrapT]),(I===a.TEXTURE_3D||I===a.TEXTURE_2D_ARRAY)&&a.texParameteri(I,a.TEXTURE_WRAP_R,H[w.wrapR]),a.texParameteri(I,a.TEXTURE_MAG_FILTER,W[w.magFilter]),a.texParameteri(I,a.TEXTURE_MIN_FILTER,W[w.minFilter])):(a.texParameteri(I,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(I,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),(I===a.TEXTURE_3D||I===a.TEXTURE_2D_ARRAY)&&a.texParameteri(I,a.TEXTURE_WRAP_R,a.CLAMP_TO_EDGE),(w.wrapS!==xn||w.wrapT!==xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(I,a.TEXTURE_MAG_FILTER,T(w.magFilter)),a.texParameteri(I,a.TEXTURE_MIN_FILTER,T(w.minFilter)),w.minFilter!==Xt&&w.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Xt||w.minFilter!==qa&&w.minFilter!==Ur||w.type===vi&&e.has("OES_texture_float_linear")===!1||s===!1&&w.type===Ir&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(a.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function P(I,w){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",B));const $=w.source;let ae=m.get($);ae===void 0&&(ae={},m.set($,ae));const me=z(w);if(me!==I.__cacheKey){ae[me]===void 0&&(ae[me]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ae[me].usedTimes++;const y=ae[I.__cacheKey];y!==void 0&&(ae[I.__cacheKey].usedTimes--,y.usedTimes===0&&N(w)),I.__cacheKey=me,I.__webglTexture=ae[me].texture}return j}function ne(I,w,j){let $=a.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&($=a.TEXTURE_2D_ARRAY),w.isData3DTexture&&($=a.TEXTURE_3D);const ae=P(I,w),me=w.source;t.bindTexture($,I.__webglTexture,a.TEXTURE0+j);const y=n.get(me);if(me.version!==y.__version||ae===!0){t.activeTexture(a.TEXTURE0+j),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.NONE);const ee=M(w)&&b(w.image)===!1;let Z=S(w.image,ee,!1,u);Z=pe(w,Z);const _e=b(Z)||s,be=r.convert(w.format,w.colorSpace);let we=r.convert(w.type),he=L(w.internalFormat,be,we,w.colorSpace);O($,w,_e);let de;const Re=w.mipmaps,Pe=s&&w.isVideoTexture!==!0,nt=y.__version===void 0||ae===!0,V=E(w,Z,_e);if(w.isDepthTexture)he=a.DEPTH_COMPONENT,s?w.type===vi?he=a.DEPTH_COMPONENT32F:w.type===_i?he=a.DEPTH_COMPONENT24:w.type===Qi?he=a.DEPTH24_STENCIL8:he=a.DEPTH_COMPONENT16:w.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Mi&&he===a.DEPTH_COMPONENT&&w.type!==Tc&&w.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=_i,we=r.convert(w.type)),w.format===nr&&he===a.DEPTH_COMPONENT&&(he=a.DEPTH_STENCIL,w.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Qi,we=r.convert(w.type))),nt&&(Pe?t.texStorage2D(a.TEXTURE_2D,1,he,Z.width,Z.height):t.texImage2D(a.TEXTURE_2D,0,he,Z.width,Z.height,0,be,we,null));else if(w.isDataTexture)if(Re.length>0&&_e){Pe&&nt&&t.texStorage2D(a.TEXTURE_2D,V,he,Re[0].width,Re[0].height);for(let ie=0,ge=Re.length;ie<ge;ie++)de=Re[ie],Pe?t.texSubImage2D(a.TEXTURE_2D,ie,0,0,de.width,de.height,be,we,de.data):t.texImage2D(a.TEXTURE_2D,ie,he,de.width,de.height,0,be,we,de.data);w.generateMipmaps=!1}else Pe?(nt&&t.texStorage2D(a.TEXTURE_2D,V,he,Z.width,Z.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,Z.width,Z.height,be,we,Z.data)):t.texImage2D(a.TEXTURE_2D,0,he,Z.width,Z.height,0,be,we,Z.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Pe&&nt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,V,he,Re[0].width,Re[0].height,Z.depth);for(let ie=0,ge=Re.length;ie<ge;ie++)de=Re[ie],w.format!==En?be!==null?Pe?t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,Z.depth,be,de.data,0,0):t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ie,he,de.width,de.height,Z.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(a.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,Z.depth,be,we,de.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ie,he,de.width,de.height,Z.depth,0,be,we,de.data)}else{Pe&&nt&&t.texStorage2D(a.TEXTURE_2D,V,he,Re[0].width,Re[0].height);for(let ie=0,ge=Re.length;ie<ge;ie++)de=Re[ie],w.format!==En?be!==null?Pe?t.compressedTexSubImage2D(a.TEXTURE_2D,ie,0,0,de.width,de.height,be,de.data):t.compressedTexImage2D(a.TEXTURE_2D,ie,he,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(a.TEXTURE_2D,ie,0,0,de.width,de.height,be,we,de.data):t.texImage2D(a.TEXTURE_2D,ie,he,de.width,de.height,0,be,we,de.data)}else if(w.isDataArrayTexture)Pe?(nt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,V,he,Z.width,Z.height,Z.depth),t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,be,we,Z.data)):t.texImage3D(a.TEXTURE_2D_ARRAY,0,he,Z.width,Z.height,Z.depth,0,be,we,Z.data);else if(w.isData3DTexture)Pe?(nt&&t.texStorage3D(a.TEXTURE_3D,V,he,Z.width,Z.height,Z.depth),t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,be,we,Z.data)):t.texImage3D(a.TEXTURE_3D,0,he,Z.width,Z.height,Z.depth,0,be,we,Z.data);else if(w.isFramebufferTexture){if(nt)if(Pe)t.texStorage2D(a.TEXTURE_2D,V,he,Z.width,Z.height);else{let ie=Z.width,ge=Z.height;for(let Ce=0;Ce<V;Ce++)t.texImage2D(a.TEXTURE_2D,Ce,he,ie,ge,0,be,we,null),ie>>=1,ge>>=1}}else if(Re.length>0&&_e){Pe&&nt&&t.texStorage2D(a.TEXTURE_2D,V,he,Re[0].width,Re[0].height);for(let ie=0,ge=Re.length;ie<ge;ie++)de=Re[ie],Pe?t.texSubImage2D(a.TEXTURE_2D,ie,0,0,be,we,de):t.texImage2D(a.TEXTURE_2D,ie,he,be,we,de);w.generateMipmaps=!1}else Pe?(nt&&t.texStorage2D(a.TEXTURE_2D,V,he,Z.width,Z.height),t.texSubImage2D(a.TEXTURE_2D,0,0,0,be,we,Z)):t.texImage2D(a.TEXTURE_2D,0,he,be,we,Z);x(w,_e)&&D($),y.__version=me.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function oe(I,w,j){if(w.image.length!==6)return;const $=P(I,w),ae=w.source;t.bindTexture(a.TEXTURE_CUBE_MAP,I.__webglTexture,a.TEXTURE0+j);const me=n.get(ae);if(ae.version!==me.__version||$===!0){t.activeTexture(a.TEXTURE0+j),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.NONE);const y=w.isCompressedTexture||w.image[0].isCompressedTexture,ee=w.image[0]&&w.image[0].isDataTexture,Z=[];for(let ie=0;ie<6;ie++)!y&&!ee?Z[ie]=S(w.image[ie],!1,!0,c):Z[ie]=ee?w.image[ie].image:w.image[ie],Z[ie]=pe(w,Z[ie]);const _e=Z[0],be=b(_e)||s,we=r.convert(w.format,w.colorSpace),he=r.convert(w.type),de=L(w.internalFormat,we,he,w.colorSpace),Re=s&&w.isVideoTexture!==!0,Pe=me.__version===void 0||$===!0;let nt=E(w,_e,be);O(a.TEXTURE_CUBE_MAP,w,be);let V;if(y){Re&&Pe&&t.texStorage2D(a.TEXTURE_CUBE_MAP,nt,de,_e.width,_e.height);for(let ie=0;ie<6;ie++){V=Z[ie].mipmaps;for(let ge=0;ge<V.length;ge++){const Ce=V[ge];w.format!==En?we!==null?Re?t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,0,0,Ce.width,Ce.height,we,Ce.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,de,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,0,0,Ce.width,Ce.height,we,he,Ce.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,de,Ce.width,Ce.height,0,we,he,Ce.data)}}}else{V=w.mipmaps,Re&&Pe&&(V.length>0&&nt++,t.texStorage2D(a.TEXTURE_CUBE_MAP,nt,de,Z[0].width,Z[0].height));for(let ie=0;ie<6;ie++)if(ee){Re?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Z[ie].width,Z[ie].height,we,he,Z[ie].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,de,Z[ie].width,Z[ie].height,0,we,he,Z[ie].data);for(let ge=0;ge<V.length;ge++){const Ae=V[ge].image[ie].image;Re?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,0,0,Ae.width,Ae.height,we,he,Ae.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,de,Ae.width,Ae.height,0,we,he,Ae.data)}}else{Re?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,we,he,Z[ie]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,de,we,he,Z[ie]);for(let ge=0;ge<V.length;ge++){const Ce=V[ge];Re?t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,0,0,we,he,Ce.image[ie]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,de,we,he,Ce.image[ie])}}}x(w,be)&&D(a.TEXTURE_CUBE_MAP),me.__version=ae.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function re(I,w,j,$,ae){const me=r.convert(j.format,j.colorSpace),y=r.convert(j.type),ee=L(j.internalFormat,me,y,j.colorSpace);n.get(w).__hasExternalTextures||(ae===a.TEXTURE_3D||ae===a.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,ee,w.width,w.height,w.depth,0,me,y,null):t.texImage2D(ae,0,ee,w.width,w.height,0,me,y,null)),t.bindFramebuffer(a.FRAMEBUFFER,I),Me(w)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,$,ae,n.get(j).__webglTexture,0,ue(w)):(ae===a.TEXTURE_2D||ae>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,$,ae,n.get(j).__webglTexture,0),t.bindFramebuffer(a.FRAMEBUFFER,null)}function le(I,w,j){if(a.bindRenderbuffer(a.RENDERBUFFER,I),w.depthBuffer&&!w.stencilBuffer){let $=a.DEPTH_COMPONENT16;if(j||Me(w)){const ae=w.depthTexture;ae&&ae.isDepthTexture&&(ae.type===vi?$=a.DEPTH_COMPONENT32F:ae.type===_i&&($=a.DEPTH_COMPONENT24));const me=ue(w);Me(w)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,me,$,w.width,w.height):a.renderbufferStorageMultisample(a.RENDERBUFFER,me,$,w.width,w.height)}else a.renderbufferStorage(a.RENDERBUFFER,$,w.width,w.height);a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,I)}else if(w.depthBuffer&&w.stencilBuffer){const $=ue(w);j&&Me(w)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,$,a.DEPTH24_STENCIL8,w.width,w.height):Me(w)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,$,a.DEPTH24_STENCIL8,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,w.width,w.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,I)}else{const $=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ae=0;ae<$.length;ae++){const me=$[ae],y=r.convert(me.format,me.colorSpace),ee=r.convert(me.type),Z=L(me.internalFormat,y,ee,me.colorSpace),_e=ue(w);j&&Me(w)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,_e,Z,w.width,w.height):Me(w)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,_e,Z,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,Z,w.width,w.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function fe(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(a.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);const $=n.get(w.depthTexture).__webglTexture,ae=ue(w);if(w.depthTexture.format===Mi)Me(w)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,$,0,ae):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,$,0);else if(w.depthTexture.format===nr)Me(w)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,$,0,ae):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ve(I){const w=n.get(I),j=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");fe(w.__webglFramebuffer,I)}else if(j){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]=a.createRenderbuffer(),le(w.__webglDepthbuffer[$],I,!1)}else t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=a.createRenderbuffer(),le(w.__webglDepthbuffer,I,!1);t.bindFramebuffer(a.FRAMEBUFFER,null)}function Ee(I,w,j){const $=n.get(I);w!==void 0&&re($.__webglFramebuffer,I,I.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D),j!==void 0&&ve(I)}function xe(I){const w=I.texture,j=n.get(I),$=n.get(w);I.addEventListener("dispose",U),I.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=a.createTexture()),$.__version=w.version,o.memory.textures++);const ae=I.isWebGLCubeRenderTarget===!0,me=I.isWebGLMultipleRenderTargets===!0,y=b(I)||s;if(ae){j.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)j.__webglFramebuffer[ee]=a.createFramebuffer()}else{if(j.__webglFramebuffer=a.createFramebuffer(),me)if(i.drawBuffers){const ee=I.texture;for(let Z=0,_e=ee.length;Z<_e;Z++){const be=n.get(ee[Z]);be.__webglTexture===void 0&&(be.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&I.samples>0&&Me(I)===!1){const ee=me?w:[w];j.__webglMultisampledFramebuffer=a.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Z=0;Z<ee.length;Z++){const _e=ee[Z];j.__webglColorRenderbuffer[Z]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,j.__webglColorRenderbuffer[Z]);const be=r.convert(_e.format,_e.colorSpace),we=r.convert(_e.type),he=L(_e.internalFormat,be,we,_e.colorSpace,I.isXRRenderTarget===!0),de=ue(I);a.renderbufferStorageMultisample(a.RENDERBUFFER,de,he,I.width,I.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Z,a.RENDERBUFFER,j.__webglColorRenderbuffer[Z])}a.bindRenderbuffer(a.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=a.createRenderbuffer(),le(j.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(ae){t.bindTexture(a.TEXTURE_CUBE_MAP,$.__webglTexture),O(a.TEXTURE_CUBE_MAP,w,y);for(let ee=0;ee<6;ee++)re(j.__webglFramebuffer[ee],I,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ee);x(w,y)&&D(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){const ee=I.texture;for(let Z=0,_e=ee.length;Z<_e;Z++){const be=ee[Z],we=n.get(be);t.bindTexture(a.TEXTURE_2D,we.__webglTexture),O(a.TEXTURE_2D,be,y),re(j.__webglFramebuffer,I,be,a.COLOR_ATTACHMENT0+Z,a.TEXTURE_2D),x(be,y)&&D(a.TEXTURE_2D)}t.unbindTexture()}else{let ee=a.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(s?ee=I.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ee,$.__webglTexture),O(ee,w,y),re(j.__webglFramebuffer,I,w,a.COLOR_ATTACHMENT0,ee),x(w,y)&&D(ee),t.unbindTexture()}I.depthBuffer&&ve(I)}function ye(I){const w=b(I)||s,j=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let $=0,ae=j.length;$<ae;$++){const me=j[$];if(x(me,w)){const y=I.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,ee=n.get(me).__webglTexture;t.bindTexture(y,ee),D(y),t.unbindTexture()}}}function Ie(I){if(s&&I.samples>0&&Me(I)===!1){const w=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],j=I.width,$=I.height;let ae=a.COLOR_BUFFER_BIT;const me=[],y=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ee=n.get(I),Z=I.isWebGLMultipleRenderTargets===!0;if(Z)for(let _e=0;_e<w.length;_e++)t.bindFramebuffer(a.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,ee.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let _e=0;_e<w.length;_e++){me.push(a.COLOR_ATTACHMENT0+_e),I.depthBuffer&&me.push(y);const be=ee.__ignoreDepthValues!==void 0?ee.__ignoreDepthValues:!1;if(be===!1&&(I.depthBuffer&&(ae|=a.DEPTH_BUFFER_BIT),I.stencilBuffer&&(ae|=a.STENCIL_BUFFER_BIT)),Z&&a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ee.__webglColorRenderbuffer[_e]),be===!0&&(a.invalidateFramebuffer(a.READ_FRAMEBUFFER,[y]),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[y])),Z){const we=n.get(w[_e]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,we,0)}a.blitFramebuffer(0,0,j,$,0,0,j,$,ae,a.NEAREST),p&&a.invalidateFramebuffer(a.READ_FRAMEBUFFER,me)}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Z)for(let _e=0;_e<w.length;_e++){t.bindFramebuffer(a.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.RENDERBUFFER,ee.__webglColorRenderbuffer[_e]);const be=n.get(w[_e]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,ee.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+_e,a.TEXTURE_2D,be,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}}function ue(I){return Math.min(f,I.samples)}function Me(I){const w=n.get(I);return s&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Se(I){const w=o.render.frame;v.get(I)!==w&&(v.set(I,w),I.update())}function pe(I,w){const j=I.colorSpace,$=I.format,ae=I.type;return I.isCompressedTexture===!0||I.format===Us||j!==Un&&j!==bi&&(j===Ze?s===!1?e.has("EXT_sRGB")===!0&&$===En?(I.format=Us,I.minFilter=Jt,I.generateMipmaps=!1):w=Lc.sRGBToLinear(w):($!==En||ae!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),w}this.allocateTextureUnit=q,this.resetTextureUnits=K,this.setTexture2D=X,this.setTexture2DArray=A,this.setTexture3D=Y,this.setTextureCube=G,this.rebindTextures=Ee,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Me}function cg(a,e,t){const n=t.isWebGL2;function i(r,o=bi){let s;if(r===xi)return a.UNSIGNED_BYTE;if(r===tf)return a.UNSIGNED_SHORT_4_4_4_4;if(r===nf)return a.UNSIGNED_SHORT_5_5_5_1;if(r===Qu)return a.BYTE;if(r===$u)return a.SHORT;if(r===Tc)return a.UNSIGNED_SHORT;if(r===ef)return a.INT;if(r===_i)return a.UNSIGNED_INT;if(r===vi)return a.FLOAT;if(r===Ir)return n?a.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===rf)return a.ALPHA;if(r===En)return a.RGBA;if(r===af)return a.LUMINANCE;if(r===sf)return a.LUMINANCE_ALPHA;if(r===Mi)return a.DEPTH_COMPONENT;if(r===nr)return a.DEPTH_STENCIL;if(r===Us)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===of)return a.RED;if(r===lf)return a.RED_INTEGER;if(r===cf)return a.RG;if(r===uf)return a.RG_INTEGER;if(r===ff)return a.RGBA_INTEGER;if(r===Ka||r===Za||r===Ja||r===Qa)if(o===Ze)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Ka)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Ka)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Za)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===To||r===Ao||r===Co||r===Ro)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===To)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ao)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Co)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ro)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hf)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Po||r===Lo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Po)return o===Ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Lo)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Do||r===Uo||r===Io||r===Fo||r===Oo||r===No||r===Bo||r===ko||r===Go||r===zo||r===Vo||r===Ho||r===Wo||r===Xo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Do)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Uo)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Io)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fo)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Oo)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===No)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bo)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ko)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Go)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zo)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Vo)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ho)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Wo)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xo)return o===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$a)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===$a)return o===Ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===df||r===jo||r===Yo||r===qo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===$a)return s.COMPRESSED_RED_RGTC1_EXT;if(r===jo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qi?n?a.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:i}}class ug extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Cr=class extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}};const fg={type:"move"};class Es{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(fg)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Cr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class hg extends qt{constructor(e,t,n,i,r,o,s,l,c,u){if(u=u!==void 0?u:Mi,u!==Mi&&u!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Mi&&(n=_i),n===void 0&&u===nr&&(n=Qi),super(null,i,r,o,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1}}class dg extends yi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,s="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const g=t.getContextAttributes();let m=null,d=null;const _=[],S=[],b=new Set,M=new Map,x=new rn;x.layers.enable(1),x.viewport=new yt;const D=new rn;D.layers.enable(2),D.viewport=new yt;const L=[x,D],E=new ug;E.layers.enable(1),E.layers.enable(2);let T=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let H=_[G];return H===void 0&&(H=new Es,_[G]=H),H.getTargetRaySpace()},this.getControllerGrip=function(G){let H=_[G];return H===void 0&&(H=new Es,_[G]=H),H.getGripSpace()},this.getHand=function(G){let H=_[G];return H===void 0&&(H=new Es,_[G]=H),H.getHandSpace()};function U(G){const H=S.indexOf(G.inputSource);if(H===-1)return;const W=_[H];W!==void 0&&(W.update(G.inputSource,G.frame,c||o),W.dispatchEvent({type:G.type,data:G.inputSource}))}function C(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",C),i.removeEventListener("inputsourceschange",N);for(let G=0;G<_.length;G++){const H=S[G];H!==null&&(S[G]=null,_[G].disconnect(H))}T=null,B=null,e.setRenderTarget(m),p=null,h=null,f=null,i=null,d=null,Y.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",C),i.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,H),i.updateRenderState({baseLayer:p}),d=new oi(p.framebufferWidth,p.framebufferHeight,{format:En,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let H=null,W=null,O=null;g.depth&&(O=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,H=g.stencil?nr:Mi,W=g.stencil?Qi:_i);const P={colorFormat:t.RGBA8,depthFormat:O,scaleFactor:r};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(P),i.updateRenderState({layers:[h]}),d=new oi(h.textureWidth,h.textureHeight,{format:En,type:xi,depthTexture:new hg(h.textureWidth,h.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ne=e.properties.get(d);ne.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(s),Y.setContext(i),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function N(G){for(let H=0;H<G.removed.length;H++){const W=G.removed[H],O=S.indexOf(W);O>=0&&(S[O]=null,_[O].disconnect(W))}for(let H=0;H<G.added.length;H++){const W=G.added[H];let O=S.indexOf(W);if(O===-1){for(let ne=0;ne<_.length;ne++)if(ne>=S.length){S.push(W),O=ne;break}else if(S[ne]===null){S[ne]=W,O=ne;break}if(O===-1)break}const P=_[O];P&&P.connect(W)}}const R=new J,k=new J;function K(G,H,W){R.setFromMatrixPosition(H.matrixWorld),k.setFromMatrixPosition(W.matrixWorld);const O=R.distanceTo(k),P=H.projectionMatrix.elements,ne=W.projectionMatrix.elements,oe=P[14]/(P[10]-1),re=P[14]/(P[10]+1),le=(P[9]+1)/P[5],fe=(P[9]-1)/P[5],ve=(P[8]-1)/P[0],Ee=(ne[8]+1)/ne[0],xe=oe*ve,ye=oe*Ee,Ie=O/(-ve+Ee),ue=Ie*-ve;H.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ue),G.translateZ(Ie),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Me=oe+Ie,Se=re+Ie,pe=xe-ue,I=ye+(O-ue),w=le*re/Se*Me,j=fe*re/Se*Me;G.projectionMatrix.makePerspective(pe,I,w,j,Me,Se),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function q(G,H){H===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(H.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;E.near=D.near=x.near=G.near,E.far=D.far=x.far=G.far,(T!==E.near||B!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,B=E.far);const H=G.parent,W=E.cameras;q(E,H);for(let O=0;O<W.length;O++)q(W[O],H);W.length===2?K(E,x,D):E.projectionMatrix.copy(x.projectionMatrix),z(G,E,H)};function z(G,H,W){W===null?G.matrix.copy(H.matrixWorld):(G.matrix.copy(W.matrixWorld),G.matrix.invert(),G.matrix.multiply(H.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0);const O=G.children;for(let P=0,ne=O.length;P<ne;P++)O[P].updateMatrixWorld(!0);G.projectionMatrix.copy(H.projectionMatrix),G.projectionMatrixInverse.copy(H.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Is*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.getPlanes=function(){return b};let X=null;function A(G,H){if(u=H.getViewerPose(c||o),v=H,u!==null){const W=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let O=!1;W.length!==E.cameras.length&&(E.cameras.length=0,O=!0);for(let P=0;P<W.length;P++){const ne=W[P];let oe=null;if(p!==null)oe=p.getViewport(ne);else{const le=f.getViewSubImage(h,ne);oe=le.viewport,P===0&&(e.setRenderTargetTextures(d,le.colorTexture,h.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(d))}let re=L[P];re===void 0&&(re=new rn,re.layers.enable(P),re.viewport=new yt,L[P]=re),re.matrix.fromArray(ne.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ne.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(oe.x,oe.y,oe.width,oe.height),P===0&&(E.matrix.copy(re.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),O===!0&&E.cameras.push(re)}}for(let W=0;W<_.length;W++){const O=S[W],P=_[W];O!==null&&P!==void 0&&P.update(O,H,c||o)}if(X&&X(G,H),H.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:H.detectedPlanes});let W=null;for(const O of b)H.detectedPlanes.has(O)||(W===null&&(W=[]),W.push(O));if(W!==null)for(const O of W)b.delete(O),M.delete(O),n.dispatchEvent({type:"planeremoved",data:O});for(const O of H.detectedPlanes)if(!b.has(O))b.add(O),M.set(O,H.lastChangedTime),n.dispatchEvent({type:"planeadded",data:O});else{const P=M.get(O);O.lastChangedTime>P&&(M.set(O,O.lastChangedTime),n.dispatchEvent({type:"planechanged",data:O}))}}v=null}const Y=new kc;Y.setAnimationLoop(A),this.setAnimationLoop=function(G){X=G},this.dispose=function(){}}}function pg(a,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Nc(a)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,_,S,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(r(m,d),v(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),g(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&s(m,d)):d.isPointsMaterial?l(m,d,_,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Yt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Yt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const S=a.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*S,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function s(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=S*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Yt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function mg(a,e,t,n){let i={},r={},o=[];const s=t.isWebGL2?a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,S){const b=S.program;n.uniformBlockBinding(_,b)}function c(_,S){let b=i[_.id];b===void 0&&(v(_),b=u(_),i[_.id]=b,_.addEventListener("dispose",m));const M=S.program;n.updateUBOMapping(_,M);const x=e.render.frame;r[_.id]!==x&&(h(_),r[_.id]=x)}function u(_){const S=f();_.__bindingPointIndex=S;const b=a.createBuffer(),M=_.__size,x=_.usage;return a.bindBuffer(a.UNIFORM_BUFFER,b),a.bufferData(a.UNIFORM_BUFFER,M,x),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,S,b),b}function f(){for(let _=0;_<s;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const S=i[_.id],b=_.uniforms,M=_.__cache;a.bindBuffer(a.UNIFORM_BUFFER,S);for(let x=0,D=b.length;x<D;x++){const L=b[x];if(p(L,x,M)===!0){const E=L.__offset,T=Array.isArray(L.value)?L.value:[L.value];let B=0;for(let U=0;U<T.length;U++){const C=T[U],N=g(C);typeof C=="number"?(L.__data[0]=C,a.bufferSubData(a.UNIFORM_BUFFER,E+B,L.__data)):C.isMatrix3?(L.__data[0]=C.elements[0],L.__data[1]=C.elements[1],L.__data[2]=C.elements[2],L.__data[3]=C.elements[0],L.__data[4]=C.elements[3],L.__data[5]=C.elements[4],L.__data[6]=C.elements[5],L.__data[7]=C.elements[0],L.__data[8]=C.elements[6],L.__data[9]=C.elements[7],L.__data[10]=C.elements[8],L.__data[11]=C.elements[0]):(C.toArray(L.__data,B),B+=N.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,E,L.__data)}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function p(_,S,b){const M=_.value;if(b[S]===void 0){if(typeof M=="number")b[S]=M;else{const x=Array.isArray(M)?M:[M],D=[];for(let L=0;L<x.length;L++)D.push(x[L].clone());b[S]=D}return!0}else if(typeof M=="number"){if(b[S]!==M)return b[S]=M,!0}else{const x=Array.isArray(b[S])?b[S]:[b[S]],D=Array.isArray(M)?M:[M];for(let L=0;L<x.length;L++){const E=x[L];if(E.equals(D[L])===!1)return E.copy(D[L]),!0}}return!1}function v(_){const S=_.uniforms;let b=0;const M=16;let x=0;for(let D=0,L=S.length;D<L;D++){const E=S[D],T={boundary:0,storage:0},B=Array.isArray(E.value)?E.value:[E.value];for(let U=0,C=B.length;U<C;U++){const N=B[U],R=g(N);T.boundary+=R.boundary,T.storage+=R.storage}if(E.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=b,D>0){x=b%M;const U=M-x;x!==0&&U-T.boundary<0&&(b+=M-x,E.__offset=b)}b+=T.storage}return x=b%M,x>0&&(b+=M-x),_.__size=b,_.__cache={},this}function g(_){const S={boundary:0,storage:0};return typeof _=="number"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),S}function m(_){const S=_.target;S.removeEventListener("dispose",m);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),a.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function d(){for(const _ in i)a.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:l,update:c,dispose:d}}function gg(){const a=Fr("canvas");return a.style.display="block",a}class jc{constructor(e={}){const{canvas:t=gg(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;let p=null,v=null;const g=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ze,this.useLegacyLights=!0,this.toneMapping=Dn,this.toneMappingExposure=1;const d=this;let _=!1,S=0,b=0,M=null,x=-1,D=null;const L=new yt,E=new yt;let T=null,B=t.width,U=t.height,C=1,N=null,R=null;const k=new yt(0,0,B,U),K=new yt(0,0,B,U);let q=!1;const z=new Ca;let X=!1,A=!1,Y=null;const G=new _t,H=new J,W={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function O(){return M===null?C:1}let P=n;function ne(F,te){for(let se=0;se<F.length;se++){const Q=F[se],ce=t.getContext(Q,te);if(ce!==null)return ce}return null}try{const F={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ws}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),P===null){const te=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&te.shift(),P=ne(te,F),P===null)throw ne(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let oe,re,le,fe,ve,Ee,xe,ye,Ie,ue,Me,Se,pe,I,w,j,$,ae,me,y,ee,Z,_e,be;function we(){oe=new Rp(P),re=new Ep(P,oe,e),oe.init(re),Z=new cg(P,oe,re),le=new og(P,oe,re),fe=new Dp(P),ve=new Km,Ee=new lg(P,oe,le,ve,re,Z,fe),xe=new wp(d),ye=new Cp(d),Ie=new Wf(P,re),_e=new bp(P,oe,Ie,re),ue=new Pp(P,Ie,fe,_e),Me=new Op(P,ue,Ie,fe),me=new Fp(P,re,Ee),j=new yp(ve),Se=new qm(d,xe,ye,oe,re,_e,j),pe=new pg(d,ve),I=new Jm,w=new ig(oe,re),ae=new Mp(d,xe,ye,le,Me,h,l),$=new sg(d,Me,re),be=new mg(P,fe,re,le),y=new xp(P,oe,fe,re),ee=new Lp(P,oe,fe,re),fe.programs=Se.programs,d.capabilities=re,d.extensions=oe,d.properties=ve,d.renderLists=I,d.shadowMap=$,d.state=le,d.info=fe}we();const he=new dg(d,P);this.xr=he,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const F=oe.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=oe.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(F){F!==void 0&&(C=F,this.setSize(B,U,!1))},this.getSize=function(F){return F.set(B,U)},this.setSize=function(F,te,se=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=F,U=te,t.width=Math.floor(F*C),t.height=Math.floor(te*C),se===!0&&(t.style.width=F+"px",t.style.height=te+"px"),this.setViewport(0,0,F,te)},this.getDrawingBufferSize=function(F){return F.set(B*C,U*C).floor()},this.setDrawingBufferSize=function(F,te,se){B=F,U=te,C=se,t.width=Math.floor(F*se),t.height=Math.floor(te*se),this.setViewport(0,0,F,te)},this.getCurrentViewport=function(F){return F.copy(L)},this.getViewport=function(F){return F.copy(k)},this.setViewport=function(F,te,se,Q){F.isVector4?k.set(F.x,F.y,F.z,F.w):k.set(F,te,se,Q),le.viewport(L.copy(k).multiplyScalar(C).floor())},this.getScissor=function(F){return F.copy(K)},this.setScissor=function(F,te,se,Q){F.isVector4?K.set(F.x,F.y,F.z,F.w):K.set(F,te,se,Q),le.scissor(E.copy(K).multiplyScalar(C).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(F){le.setScissorTest(q=F)},this.setOpaqueSort=function(F){N=F},this.setTransparentSort=function(F){R=F},this.getClearColor=function(F){return F.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(F=!0,te=!0,se=!0){let Q=0;F&&(Q|=P.COLOR_BUFFER_BIT),te&&(Q|=P.DEPTH_BUFFER_BIT),se&&(Q|=P.STENCIL_BUFFER_BIT),P.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),I.dispose(),w.dispose(),ve.dispose(),xe.dispose(),ye.dispose(),Me.dispose(),_e.dispose(),be.dispose(),Se.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ae),he.removeEventListener("sessionend",rt),Y&&(Y.dispose(),Y=null),Ne.stop()};function de(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const F=fe.autoReset,te=$.enabled,se=$.autoUpdate,Q=$.needsUpdate,ce=$.type;we(),fe.autoReset=F,$.enabled=te,$.autoUpdate=se,$.needsUpdate=Q,$.type=ce}function Pe(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function nt(F){const te=F.target;te.removeEventListener("dispose",nt),V(te)}function V(F){ie(F),ve.remove(F)}function ie(F){const te=ve.get(F).programs;te!==void 0&&(te.forEach(function(se){Se.releaseProgram(se)}),F.isShaderMaterial&&Se.releaseShaderCache(F))}this.renderBufferDirect=function(F,te,se,Q,ce,Oe){te===null&&(te=W);const Be=ce.isMesh&&ce.matrixWorld.determinant()<0,Ge=bt(F,te,se,Q,ce);le.setMaterial(Q,Be);let He=se.index,qe=1;Q.wireframe===!0&&(He=ue.getWireframeAttribute(se),qe=2);const Je=se.drawRange,Qe=se.attributes.position;let at=Je.start*qe,wt=(Je.start+Je.count)*qe;Oe!==null&&(at=Math.max(at,Oe.start*qe),wt=Math.min(wt,(Oe.start+Oe.count)*qe)),He!==null?(at=Math.max(at,0),wt=Math.min(wt,He.count)):Qe!=null&&(at=Math.max(at,0),wt=Math.min(wt,Qe.count));const Ht=wt-at;if(Ht<0||Ht===1/0)return;_e.setup(ce,Q,Ge,se,He);let Ue,ct=y;if(He!==null&&(Ue=Ie.get(He),ct=ee,ct.setIndex(Ue)),ce.isMesh)Q.wireframe===!0?(le.setLineWidth(Q.wireframeLinewidth*O()),ct.setMode(P.LINES)):ct.setMode(P.TRIANGLES);else if(ce.isLine){let et=Q.linewidth;et===void 0&&(et=1),le.setLineWidth(et*O()),ce.isLineSegments?ct.setMode(P.LINES):ce.isLineLoop?ct.setMode(P.LINE_LOOP):ct.setMode(P.LINE_STRIP)}else ce.isPoints?ct.setMode(P.POINTS):ce.isSprite&&ct.setMode(P.TRIANGLES);if(ce.isInstancedMesh)ct.renderInstances(at,Ht,ce.count);else if(se.isInstancedBufferGeometry){const et=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Kn=Math.min(se.instanceCount,et);ct.renderInstances(at,Ht,Kn)}else ct.render(at,Ht)},this.compile=function(F,te){function se(Q,ce,Oe){Q.transparent===!0&&Q.side===bn&&Q.forceSinglePass===!1?(Q.side=Yt,Q.needsUpdate=!0,zt(Q,ce,Oe),Q.side=jn,Q.needsUpdate=!0,zt(Q,ce,Oe),Q.side=bn):zt(Q,ce,Oe)}v=w.get(F),v.init(),m.push(v),F.traverseVisible(function(Q){Q.isLight&&Q.layers.test(te.layers)&&(v.pushLight(Q),Q.castShadow&&v.pushShadow(Q))}),v.setupLights(d.useLegacyLights),F.traverse(function(Q){const ce=Q.material;if(ce)if(Array.isArray(ce))for(let Oe=0;Oe<ce.length;Oe++){const Be=ce[Oe];se(Be,F,Q)}else se(ce,F,Q)}),m.pop(),v=null};let ge=null;function Ce(F){ge&&ge(F)}function Ae(){Ne.stop()}function rt(){Ne.start()}const Ne=new kc;Ne.setAnimationLoop(Ce),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(F){ge=F,he.setAnimationLoop(F),F===null?Ne.stop():Ne.start()},he.addEventListener("sessionstart",Ae),he.addEventListener("sessionend",rt),this.render=function(F,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(te),te=he.getCamera()),F.isScene===!0&&F.onBeforeRender(d,F,te,M),v=w.get(F,m.length),v.init(),m.push(v),G.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),z.setFromProjectionMatrix(G),A=this.localClippingEnabled,X=j.init(this.clippingPlanes,A),p=I.get(F,g.length),p.init(),g.push(p),ke(F,te,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(N,R),X===!0&&j.beginShadows();const se=v.state.shadowsArray;if($.render(se,F,te),X===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(p,F),v.setupLights(d.useLegacyLights),te.isArrayCamera){const Q=te.cameras;for(let ce=0,Oe=Q.length;ce<Oe;ce++){const Be=Q[ce];ot(p,F,Be,Be.viewport)}}else ot(p,F,te);M!==null&&(Ee.updateMultisampleRenderTarget(M),Ee.updateRenderTargetMipmap(M)),F.isScene===!0&&F.onAfterRender(d,F,te),_e.resetDefaultState(),x=-1,D=null,m.pop(),m.length>0?v=m[m.length-1]:v=null,g.pop(),g.length>0?p=g[g.length-1]:p=null};function ke(F,te,se,Q){if(F.visible===!1)return;if(F.layers.test(te.layers)){if(F.isGroup)se=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(te);else if(F.isLight)v.pushLight(F),F.castShadow&&v.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||z.intersectsSprite(F)){Q&&H.setFromMatrixPosition(F.matrixWorld).applyMatrix4(G);const Be=Me.update(F),Ge=F.material;Ge.visible&&p.push(F,Be,Ge,se,H.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||z.intersectsObject(F))){F.isSkinnedMesh&&F.skeleton.frame!==fe.render.frame&&(F.skeleton.update(),F.skeleton.frame=fe.render.frame);const Be=Me.update(F),Ge=F.material;if(Q&&(Be.boundingSphere===null&&Be.computeBoundingSphere(),H.copy(Be.boundingSphere.center).applyMatrix4(F.matrixWorld).applyMatrix4(G)),Array.isArray(Ge)){const He=Be.groups;for(let qe=0,Je=He.length;qe<Je;qe++){const Qe=He[qe],at=Ge[Qe.materialIndex];at&&at.visible&&p.push(F,Be,at,se,H.z,Qe)}}else Ge.visible&&p.push(F,Be,Ge,se,H.z,null)}}const Oe=F.children;for(let Be=0,Ge=Oe.length;Be<Ge;Be++)ke(Oe[Be],te,se,Q)}function ot(F,te,se,Q){const ce=F.opaque,Oe=F.transmissive,Be=F.transparent;v.setupLightsView(se),X===!0&&j.setGlobalState(d.clippingPlanes,se),Oe.length>0&&it(ce,Oe,te,se),Q&&le.viewport(L.copy(Q)),ce.length>0&&$e(ce,te,se),Oe.length>0&&$e(Oe,te,se),Be.length>0&&$e(Be,te,se),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function it(F,te,se,Q){if(Y===null){const Ge=re.isWebGL2;Y=new oi(1024,1024,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?Ir:xi,minFilter:Ur,samples:Ge&&s===!0?4:0})}const ce=d.getRenderTarget();d.setRenderTarget(Y),d.clear();const Oe=d.toneMapping;d.toneMapping=Dn,$e(F,se,Q),Ee.updateMultisampleRenderTarget(Y),Ee.updateRenderTargetMipmap(Y);let Be=!1;for(let Ge=0,He=te.length;Ge<He;Ge++){const qe=te[Ge],Je=qe.object,Qe=qe.geometry,at=qe.material,wt=qe.group;if(at.side===bn&&Je.layers.test(Q.layers)){const Ht=at.side;at.side=Yt,at.needsUpdate=!0,lt(Je,se,Q,Qe,at,wt),at.side=Ht,at.needsUpdate=!0,Be=!0}}Be===!0&&(Ee.updateMultisampleRenderTarget(Y),Ee.updateRenderTargetMipmap(Y)),d.setRenderTarget(ce),d.toneMapping=Oe}function $e(F,te,se){const Q=te.isScene===!0?te.overrideMaterial:null;for(let ce=0,Oe=F.length;ce<Oe;ce++){const Be=F[ce],Ge=Be.object,He=Be.geometry,qe=Q===null?Be.material:Q,Je=Be.group;Ge.layers.test(se.layers)&&lt(Ge,te,se,He,qe,Je)}}function lt(F,te,se,Q,ce,Oe){F.onBeforeRender(d,te,se,Q,ce,Oe),F.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),ce.onBeforeRender(d,te,se,Q,F,Oe),ce.transparent===!0&&ce.side===bn&&ce.forceSinglePass===!1?(ce.side=Yt,ce.needsUpdate=!0,d.renderBufferDirect(se,te,Q,ce,F,Oe),ce.side=jn,ce.needsUpdate=!0,d.renderBufferDirect(se,te,Q,ce,F,Oe),ce.side=bn):d.renderBufferDirect(se,te,Q,ce,F,Oe),F.onAfterRender(d,te,se,Q,ce,Oe)}function zt(F,te,se){te.isScene!==!0&&(te=W);const Q=ve.get(F),ce=v.state.lights,Oe=v.state.shadowsArray,Be=ce.state.version,Ge=Se.getParameters(F,ce.state,Oe,te,se),He=Se.getProgramCacheKey(Ge);let qe=Q.programs;Q.environment=F.isMeshStandardMaterial?te.environment:null,Q.fog=te.fog,Q.envMap=(F.isMeshStandardMaterial?ye:xe).get(F.envMap||Q.environment),qe===void 0&&(F.addEventListener("dispose",nt),qe=new Map,Q.programs=qe);let Je=qe.get(He);if(Je!==void 0){if(Q.currentProgram===Je&&Q.lightsStateVersion===Be)return Mt(F,Ge),Je}else Ge.uniforms=Se.getUniforms(F),F.onBuild(se,Ge,d),F.onBeforeCompile(Ge,d),Je=Se.acquireProgram(Ge,He),qe.set(He,Je),Q.uniforms=Ge.uniforms;const Qe=Q.uniforms;(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Qe.clippingPlanes=j.uniform),Mt(F,Ge),Q.needsLights=wn(F),Q.lightsStateVersion=Be,Q.needsLights&&(Qe.ambientLightColor.value=ce.state.ambient,Qe.lightProbe.value=ce.state.probe,Qe.directionalLights.value=ce.state.directional,Qe.directionalLightShadows.value=ce.state.directionalShadow,Qe.spotLights.value=ce.state.spot,Qe.spotLightShadows.value=ce.state.spotShadow,Qe.rectAreaLights.value=ce.state.rectArea,Qe.ltc_1.value=ce.state.rectAreaLTC1,Qe.ltc_2.value=ce.state.rectAreaLTC2,Qe.pointLights.value=ce.state.point,Qe.pointLightShadows.value=ce.state.pointShadow,Qe.hemisphereLights.value=ce.state.hemi,Qe.directionalShadowMap.value=ce.state.directionalShadowMap,Qe.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,Qe.spotShadowMap.value=ce.state.spotShadowMap,Qe.spotLightMatrix.value=ce.state.spotLightMatrix,Qe.spotLightMap.value=ce.state.spotLightMap,Qe.pointShadowMap.value=ce.state.pointShadowMap,Qe.pointShadowMatrix.value=ce.state.pointShadowMatrix);const at=Je.getUniforms(),wt=xa.seqWithValue(at.seq,Qe);return Q.currentProgram=Je,Q.uniformsList=wt,Je}function Mt(F,te){const se=ve.get(F);se.outputColorSpace=te.outputColorSpace,se.instancing=te.instancing,se.skinning=te.skinning,se.morphTargets=te.morphTargets,se.morphNormals=te.morphNormals,se.morphColors=te.morphColors,se.morphTargetsCount=te.morphTargetsCount,se.numClippingPlanes=te.numClippingPlanes,se.numIntersection=te.numClipIntersection,se.vertexAlphas=te.vertexAlphas,se.vertexTangents=te.vertexTangents,se.toneMapping=te.toneMapping}function bt(F,te,se,Q,ce){te.isScene!==!0&&(te=W),Ee.resetTextureUnits();const Oe=te.fog,Be=Q.isMeshStandardMaterial?te.environment:null,Ge=M===null?d.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Un,He=(Q.isMeshStandardMaterial?ye:xe).get(Q.envMap||Be),qe=Q.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Je=!!Q.normalMap&&!!se.attributes.tangent,Qe=!!se.morphAttributes.position,at=!!se.morphAttributes.normal,wt=!!se.morphAttributes.color,Ht=Q.toneMapped?d.toneMapping:Dn,Ue=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,ct=Ue!==void 0?Ue.length:0,et=ve.get(Q),Kn=v.state.lights;if(X===!0&&(A===!0||F!==D)){const Lt=F===D&&Q.id===x;j.setState(Q,F,Lt)}let vt=!1;Q.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Kn.state.version||et.outputColorSpace!==Ge||ce.isInstancedMesh&&et.instancing===!1||!ce.isInstancedMesh&&et.instancing===!0||ce.isSkinnedMesh&&et.skinning===!1||!ce.isSkinnedMesh&&et.skinning===!0||et.envMap!==He||Q.fog===!0&&et.fog!==Oe||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==j.numPlanes||et.numIntersection!==j.numIntersection)||et.vertexAlphas!==qe||et.vertexTangents!==Je||et.morphTargets!==Qe||et.morphNormals!==at||et.morphColors!==wt||et.toneMapping!==Ht||re.isWebGL2===!0&&et.morphTargetsCount!==ct)&&(vt=!0):(vt=!0,et.__version=Q.version);let dn=et.currentProgram;vt===!0&&(dn=zt(Q,te,ce));let li=!1,Tn=!1,wi=!1;const xt=dn.getUniforms(),An=et.uniforms;if(le.useProgram(dn.program)&&(li=!0,Tn=!0,wi=!0),Q.id!==x&&(x=Q.id,Tn=!0),li||D!==F){if(xt.setValue(P,"projectionMatrix",F.projectionMatrix),re.logarithmicDepthBuffer&&xt.setValue(P,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),D!==F&&(D=F,Tn=!0,wi=!0),Q.isShaderMaterial||Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshStandardMaterial||Q.envMap){const Lt=xt.map.cameraPosition;Lt!==void 0&&Lt.setValue(P,H.setFromMatrixPosition(F.matrixWorld))}(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&xt.setValue(P,"isOrthographic",F.isOrthographicCamera===!0),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial||Q.isShadowMaterial||ce.isSkinnedMesh)&&xt.setValue(P,"viewMatrix",F.matrixWorldInverse)}if(ce.isSkinnedMesh){xt.setOptional(P,ce,"bindMatrix"),xt.setOptional(P,ce,"bindMatrixInverse");const Lt=ce.skeleton;Lt&&(re.floatVertexTextures?(Lt.boneTexture===null&&Lt.computeBoneTexture(),xt.setValue(P,"boneTexture",Lt.boneTexture,Ee),xt.setValue(P,"boneTextureSize",Lt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ci=se.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0&&re.isWebGL2===!0)&&me.update(ce,se,dn),(Tn||et.receiveShadow!==ce.receiveShadow)&&(et.receiveShadow=ce.receiveShadow,xt.setValue(P,"receiveShadow",ce.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(An.envMap.value=He,An.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Tn&&(xt.setValue(P,"toneMappingExposure",d.toneMappingExposure),et.needsLights&&Vt(An,wi),Oe&&Q.fog===!0&&pe.refreshFogUniforms(An,Oe),pe.refreshMaterialUniforms(An,Q,C,U,Y),xa.upload(P,et.uniformsList,An,Ee)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(xa.upload(P,et.uniformsList,An,Ee),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&xt.setValue(P,"center",ce.center),xt.setValue(P,"modelViewMatrix",ce.modelViewMatrix),xt.setValue(P,"normalMatrix",ce.normalMatrix),xt.setValue(P,"modelMatrix",ce.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Lt=Q.uniformsGroups;for(let In=0,cr=Lt.length;In<cr;In++)if(re.isWebGL2){const Fn=Lt[In];be.update(Fn,dn),be.bind(Fn,dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return dn}function Vt(F,te){F.ambientLightColor.needsUpdate=te,F.lightProbe.needsUpdate=te,F.directionalLights.needsUpdate=te,F.directionalLightShadows.needsUpdate=te,F.pointLights.needsUpdate=te,F.pointLightShadows.needsUpdate=te,F.spotLights.needsUpdate=te,F.spotLightShadows.needsUpdate=te,F.rectAreaLights.needsUpdate=te,F.hemisphereLights.needsUpdate=te}function wn(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(F,te,se){ve.get(F.texture).__webglTexture=te,ve.get(F.depthTexture).__webglTexture=se;const Q=ve.get(F);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=se===void 0,Q.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(F,te){const se=ve.get(F);se.__webglFramebuffer=te,se.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(F,te=0,se=0){M=F,S=te,b=se;let Q=!0,ce=null,Oe=!1,Be=!1;if(F){const He=ve.get(F);He.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(P.FRAMEBUFFER,null),Q=!1):He.__webglFramebuffer===void 0?Ee.setupRenderTarget(F):He.__hasExternalTextures&&Ee.rebindTextures(F,ve.get(F.texture).__webglTexture,ve.get(F.depthTexture).__webglTexture);const qe=F.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Be=!0);const Je=ve.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(ce=Je[te],Oe=!0):re.isWebGL2&&F.samples>0&&Ee.useMultisampledRTT(F)===!1?ce=ve.get(F).__webglMultisampledFramebuffer:ce=Je,L.copy(F.viewport),E.copy(F.scissor),T=F.scissorTest}else L.copy(k).multiplyScalar(C).floor(),E.copy(K).multiplyScalar(C).floor(),T=q;if(le.bindFramebuffer(P.FRAMEBUFFER,ce)&&re.drawBuffers&&Q&&le.drawBuffers(F,ce),le.viewport(L),le.scissor(E),le.setScissorTest(T),Oe){const He=ve.get(F.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+te,He.__webglTexture,se)}else if(Be){const He=ve.get(F.texture),qe=te||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,He.__webglTexture,se||0,qe)}x=-1},this.readRenderTargetPixels=function(F,te,se,Q,ce,Oe,Be){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ve.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Be!==void 0&&(Ge=Ge[Be]),Ge){le.bindFramebuffer(P.FRAMEBUFFER,Ge);try{const He=F.texture,qe=He.format,Je=He.type;if(qe!==En&&Z.convert(qe)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Qe=Je===Ir&&(oe.has("EXT_color_buffer_half_float")||re.isWebGL2&&oe.has("EXT_color_buffer_float"));if(Je!==xi&&Z.convert(Je)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Je===vi&&(re.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=F.width-Q&&se>=0&&se<=F.height-ce&&P.readPixels(te,se,Q,ce,Z.convert(qe),Z.convert(Je),Oe)}finally{const He=M!==null?ve.get(M).__webglFramebuffer:null;le.bindFramebuffer(P.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(F,te,se=0){const Q=Math.pow(2,-se),ce=Math.floor(te.image.width*Q),Oe=Math.floor(te.image.height*Q);Ee.setTexture2D(te,0),P.copyTexSubImage2D(P.TEXTURE_2D,se,0,0,F.x,F.y,ce,Oe),le.unbindTexture()},this.copyTextureToTexture=function(F,te,se,Q=0){const ce=te.image.width,Oe=te.image.height,Be=Z.convert(se.format),Ge=Z.convert(se.type);Ee.setTexture2D(se,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,se.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,se.unpackAlignment),te.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Q,F.x,F.y,ce,Oe,Be,Ge,te.image.data):te.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Q,F.x,F.y,te.mipmaps[0].width,te.mipmaps[0].height,Be,te.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,Q,F.x,F.y,Be,Ge,te.image),Q===0&&se.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),le.unbindTexture()},this.copyTextureToTexture3D=function(F,te,se,Q,ce=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Oe=F.max.x-F.min.x+1,Be=F.max.y-F.min.y+1,Ge=F.max.z-F.min.z+1,He=Z.convert(Q.format),qe=Z.convert(Q.type);let Je;if(Q.isData3DTexture)Ee.setTexture3D(Q,0),Je=P.TEXTURE_3D;else if(Q.isDataArrayTexture)Ee.setTexture2DArray(Q,0),Je=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Q.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Q.unpackAlignment);const Qe=P.getParameter(P.UNPACK_ROW_LENGTH),at=P.getParameter(P.UNPACK_IMAGE_HEIGHT),wt=P.getParameter(P.UNPACK_SKIP_PIXELS),Ht=P.getParameter(P.UNPACK_SKIP_ROWS),Ue=P.getParameter(P.UNPACK_SKIP_IMAGES),ct=se.isCompressedTexture?se.mipmaps[0]:se.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ct.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ct.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,F.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,F.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,F.min.z),se.isDataTexture||se.isData3DTexture?P.texSubImage3D(Je,ce,te.x,te.y,te.z,Oe,Be,Ge,He,qe,ct.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Je,ce,te.x,te.y,te.z,Oe,Be,Ge,He,ct.data)):P.texSubImage3D(Je,ce,te.x,te.y,te.z,Oe,Be,Ge,He,qe,ct),P.pixelStorei(P.UNPACK_ROW_LENGTH,Qe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,at),P.pixelStorei(P.UNPACK_SKIP_PIXELS,wt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ht),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ue),ce===0&&Q.generateMipmaps&&P.generateMipmap(Je),le.unbindTexture()},this.initTexture=function(F){F.isCubeTexture?Ee.setTextureCube(F,0):F.isData3DTexture?Ee.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?Ee.setTexture2DArray(F,0):Ee.setTexture2D(F,0),le.unbindTexture()},this.resetState=function(){S=0,b=0,M=null,le.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ze?ai:Xs}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ai?Ze:Un}}class _g extends jc{}_g.prototype.isWebGL1Renderer=!0;let vg=class Yc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ve(e),this.near=t,this.far=n}clone(){return new Yc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}},Sg=class extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};class Mg extends yn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class qc extends sr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fl=new J,Ol=new J,Nl=new _t,ys=new js,Sa=new Br;let bg=class extends ut{constructor(e=new hn,t=new qc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Fl.fromBufferAttribute(t,i-1),Ol.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Fl.distanceTo(Ol);e.setAttribute("lineDistance",new cn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(i),Sa.radius+=r,e.ray.intersectsSphere(Sa)===!1)return;Nl.copy(i).invert(),ys.copy(e.ray).applyMatrix4(Nl);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new J,u=new J,f=new J,h=new J,p=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){const d=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let S=d,b=_-1;S<b;S+=p){const M=v.getX(S),x=v.getX(S+1);if(c.fromBufferAttribute(m,M),u.fromBufferAttribute(m,x),ys.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(h);L<e.near||L>e.far||t.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let S=d,b=_-1;S<b;S+=p){if(c.fromBufferAttribute(m,S),u.fromBufferAttribute(m,S+1),ys.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(h);x<e.near||x>e.far||t.push({distance:x,point:f.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}};class Bl extends sr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const kl={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class xg{constructor(e,t,n){const i=this;let r=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){s++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,s),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,s),o===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const Kc=new xg;class Zc{constructor(e){this.manager=e!==void 0?e:Kc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Eg extends Zc{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=kl.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const s=Fr("img");function l(){u(),kl.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(e),s.src=e,s}}class Gl extends Zc{constructor(e){super(e)}load(e,t,n,i){const r=new qt,o=new Eg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){r.image=s,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Jc extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}let yg=class extends Jc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}};const ws=new _t,zl=new J,Vl=new J;class wg{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zl.setFromMatrixPosition(e.matrixWorld),t.position.copy(zl),Vl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vl),t.updateMatrixWorld(),ws.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ws),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ws)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Tg extends wg{constructor(){super(new Js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}let Ag=class extends Jc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new Tg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};class Cg extends hn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Qc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Hl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Hl(){return(typeof performance>"u"?Date:performance).now()}class Rg{constructor(e,t,n=0,i=1/0){this.ray=new js(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ys,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Os(e,this,n,t),n.sort(Wl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Os(e[i],this,n,t);return n.sort(Wl),n}}function Wl(a,e){return a.distance-e.distance}function Os(a,e,t,n){if(a.layers.test(e.layers)&&a.raycast(e,t),n===!0){const i=a.children;for(let r=0,o=i.length;r<o;r++)Os(i[r],e,t,!0)}}class Xl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(jt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ns extends rr{constructor(e,t,n,i){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(e,t,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ws}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ws);const Pg={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Pa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Lg=new Js(-1,1,1,-1,0,1),$s=new hn;$s.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3));$s.setAttribute("uv",new cn([0,2,0,0,2,0],2));class Dg{constructor(e){this._mesh=new an($s,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Lg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ug extends Pa{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Yn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ks.clone(e.uniforms),this.material=new Yn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Dg(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class jl extends Pa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(s),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Ig extends Pa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Fg{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ze);this._width=n.width,this._height=n.height,t=new oi(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ug(Pg),this.clock=new Qc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}jl!==void 0&&(o instanceof jl?n=!0:o instanceof Ig&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class $c extends Pa{constructor(e,t,n,i,r){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ve}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Og=(a,e,t)=>{a.renderer=new jc({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),a.composer=new Fg(a.renderer),a.composer.addPass(new $c(a.scene,zs(a.camera)))},Yl=(a,e,t)=>{a.renderer&&(e?a.renderer.outputEncoding=Xs:a.renderer.outputEncoding=ai,t?a.renderer.toneMapping=Dn:a.renderer.toneMapping=yc)},ql=(a,e,t)=>{var n,i,r,o,s,l,c,u;!a.renderer||!a.composer||((i=(n=a.renderer).setSize)==null||i.call(n,e.width,e.height),(o=(r=a.renderer).setPixelRatio)==null||o.call(r,t),(l=(s=a.composer).setSize)==null||l.call(s,e.width,e.height),(u=(c=a.composer).setPixelRatio)==null||u.call(c,t))},Kl=(a,e,t)=>{a.renderer&&(a.renderer.shadowMap.enabled=e,a.renderer.shadowMap.type=t)},ln=a=>a.userData,Ng=(a,e)=>{a.pointer.update(t=>a.renderer?t.set(e.offsetX/a.renderer.domElement.clientWidth*2-1,-(e.offsetY/a.renderer.domElement.clientHeight)*2+1):t)},eu=(a,e,t,n)=>(a.raycaster.setFromCamera(e,t),a.raycaster.intersectObjects(n,!1)),Bg=(a,e)=>a.object.uuid!==e.object.uuid||a.instanceId!==e.instanceId,kg=(a,e,t)=>{let n;const i=a.camera.subscribe(c=>n=c);Tt(i);let r;const o=a.pointer.subscribe(c=>r=c);Tt(o);let s;const l=c=>{var h,p;c.preventDefault();const u=c.type;a.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,Ng(a,c);const f=Gg(e,r,n);if(u==="pointerdown"&&(s=f?{object:f.object,instanceId:f.instanceId}:null),u==="click"){if(!zg(f,s)){s=null;return}s=null}f&&((p=(h=ln(f.object)).eventDispatcher)==null||p.call(h,u,{...f,event:c}))};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function Gg(a,e,t){if(a.interactiveObjects.size===0||a.raycastableObjects.size===0)return null;const n=eu(a,e,t,Array.from(a.raycastableObjects));return n.length===0||!a.interactiveObjects.has(n[0].object)?null:n[0]}function zg(a,e){return!a||!e?!1:a.object.uuid===e.object.uuid&&a.instanceId===e.instanceId}const Vg=(a,e)=>{let t;const n=a.pointerOverCanvas.subscribe(c=>t=c);Tt(n);let i;const r=a.camera.subscribe(c=>i=c);Tt(r);let o;const s=a.pointer.subscribe(c=>o=c);return Tt(s),{raycast:()=>{var f,h,p,v,g,m,d,_;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?eu(e,o,i,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&Bg(e.lastIntersection,u)&&((m=(g=ln(e.lastIntersection.object)).eventDispatcher)==null||m.call(g,"pointerleave",e.lastIntersection),(_=(d=ln(u.object)).eventDispatcher)==null||_.call(d,"pointerenter",u)):(v=(p=ln(u.object)).eventDispatcher)==null||v.call(p,"pointerenter",u):e.lastIntersection&&((h=(f=ln(e.lastIntersection.object)).eventDispatcher)==null||h.call(f,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},La=typeof window<"u",Hg=a=>{if(!La)return;let e;const t=()=>{a(),e=requestAnimationFrame(t)};t(),Tt(()=>{e&&cancelAnimationFrame(e)})},Wg=(a,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let i=0;e.frameHandlers.forEach(r=>{r.debugFrameloopMessage?e.invalidations[r.debugFrameloopMessage]=r.debugFrameloopMessage in e.invalidations?e.invalidations[r.debugFrameloopMessage]+1:1:++i}),i>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((i,r)=>r.order?!0:i,!1),n=a.clock.getDelta();t?Array.from(e.frameHandlers).sort((i,r)=>(i.order??0)>(r.order??0)?1:-1).forEach(i=>i.fn(a,n)):e.frameHandlers.forEach(i=>i.fn(a,n))},Xg=a=>{a.debugFrameloop&&(a.frame+=1,console.log(`frame: ${a.frame}${Object.keys(a.invalidations).length>0?", requested by ↴":""}`),Object.keys(a.invalidations).length>0&&console.table(a.invalidations),a.invalidations={})},jg=(a,e,t,n)=>{let i=zs(a.camera);const r=a.camera.subscribe(s=>i=s);Tt(r);const{raycast:o}=Vg(a,e);Hg(()=>{n.dispose();const s=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(s||t.pointerInvalidated)&&(o(),t.pointerInvalidated=!1),s&&(!i||!a.composer||!a.renderer||(Wg(a,t),a.composer.passes.length>1?a.composer.render():a.renderer.render(a.scene,i),Xg(t),t.frameInvalidated=!1,t.advance=!1))})},Yg=()=>{const a=new rn(75,0,.1,1e3);return ln(a).threlteDefaultCamera=!0,a.position.z=5,a.lookAt(0,0,0),a},qg=a=>{const e=a.size.subscribe(t=>{ln(zs(a.camera)).threlteDefaultCamera&&a.camera.update(n=>{const i=n;return i.aspect=t.width/t.height,i.updateProjectionMatrix(),a.invalidate("Default camera: aspect ratio changed"),i})});Tt(e)},Kg=(a,e,t,n,i,r,o)=>{const s={audioListeners:new Map,addAudioListener:(d,_)=>{if(_=_??"default",s.audioListeners.has(_)){console.warn(`An AudioListener with the id "${_}" has already been added, aborting.`);return}s.audioListeners.set(_,d)},removeAudioListener:d=>{if(d=d??"default",!s.audioListeners.has(d)){console.warn(`No AudioListener with the id "${d}" found, aborting.`);return}s.audioListeners.delete(d)},getAudioListener:d=>{if(d=d??"default",!s.audioListeners.has(d)){console.warn(`No AudioListener with the id "${d}" found, aborting.`);return}return s.audioListeners.get(d)}},l={debugFrameloop:r,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:bu([n,i],([d,_])=>d||_),pointer:nn(new ze),pointerOverCanvas:nn(!1),clock:new Qc,camera:nn(Yg()),scene:new Sg,renderer:void 0,composer:void 0,invalidate:d=>{l.frameInvalidated=!0,l.debugFrameloop&&d&&(l.invalidations[d]=l.invalidations[d]?l.invalidations[d]+1:1)},advance:()=>{l.advance=!0}},u={flat:nn(e),linear:nn(a),dpr:nn(t),setCamera:d=>{c.camera.set(d),c.composer&&(c.composer.passes.forEach(_=>{_ instanceof $c&&(_.camera=d)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new Rg,lastIntersection:null,addRaycastableObject:d=>{u.raycastableObjects.add(d)},removeRaycastableObject:d=>{u.raycastableObjects.delete(d)},addInteractiveObject:d=>{u.interactiveObjects.add(d)},removeInteractiveObject:d=>{u.interactiveObjects.delete(d)},addPass:d=>{c.composer&&(c.composer.addPass(d),c.invalidate("Canvas: adding pass"))},removePass:d=>{c.composer&&(c.composer.removePass(d),c.invalidate("Canvas: removing pass"))}},f={dispose:async(d=!1)=>{await Dr(),!(!f.shouldDispose&&!d)&&(f.disposableObjects.forEach((_,S)=>{var b;(_===0||d)&&((b=S==null?void 0:S.dispose)==null||b.call(S),f.disposableObjects.delete(S))}),f.shouldDispose=!1)},collectDisposableObjects:(d,_)=>{const S=_??[];return d&&(d!=null&&d.dispose&&typeof d.dispose=="function"&&d.type!=="Scene"&&S.push(d),Object.entries(d).forEach(([b,M])=>{if(b==="parent"||b==="children"||typeof M!="object")return;const x=M;x!=null&&x.dispose&&f.collectDisposableObjects(x,S)})),S},addDisposableObjects:d=>{d.forEach(_=>{const S=f.disposableObjects.get(_);S?f.disposableObjects.set(_,S+1):f.disposableObjects.set(_,1)})},removeDisposableObjects:d=>{d.length!==0&&(d.forEach(_=>{const S=f.disposableObjects.get(_);S&&S>0&&f.disposableObjects.set(_,S-1)}),f.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return Ln("threlte",c),Ln("threlte-root",u),Ln("threlte-render-context",l),Ln("threlte-audio-context",s),Ln("threlte-disposal-context",f),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:s,disposalCtx:f,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>s,getDisposalCtx:()=>f}};function Da(a,e){const t=nn(a);let n=a;const i=t.subscribe(s=>n=s);return Tt(i),{...t,set:s=>{if((s==null?void 0:s.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(s),e==null||e(s,l)},update:s=>{const l=s(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const Kt=()=>Xn("threlte");function Zg(a){let e;const t=a[8].default,n=Nt(t,a,a[7],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&128)&&Bt(n,t,i,i[7],e?Gt(t,i[7],r,null):kt(i[7]),null)},i(i){e||(Le(n,i),e=!0)},o(i){De(n,i),e=!1},d(i){n&&n.d(i)}}}const Jg=()=>({onChildMount:Xn("threlte-hierarchical-object-on-mount"),onChildDestroy:Xn("threlte-hierarchical-object-on-destroy")}),tu=()=>Xn("threlte-hierarchical-parent-context");function Qg(a,e,t){var d;let n,{$$slots:i={},$$scope:r}=e,{object:o=void 0}=e,{children:s=[]}=e,{onChildMount:l=void 0}=e;const c=_=>{s.push(_),t(1,s),l==null||l(_)};let{onChildDestroy:u=void 0}=e;const f=_=>{const S=s.findIndex(b=>b.uuid===_.uuid);S!==-1&&s.splice(S,1),t(1,s),u==null||u(_)},{invalidate:h}=Kt(),p=tu();St(a,p,_=>t(6,n=_));let{parent:v=n}=e;const g=Jg();o&&((d=g.onChildMount)==null||d.call(g,o),h("HierarchicalObject: object added"));const m=Da(o,(_,S)=>{var b,M;S&&((b=g.onChildDestroy)==null||b.call(g,S),h("HierarchicalObject: object added")),_&&((M=g.onChildMount)==null||M.call(g,_),h("HierarchicalObject: object removed"))});return Tt(()=>{var _;o&&((_=g.onChildDestroy)==null||_.call(g,o),h("HierarchicalObject: object removed"))}),Ln("threlte-hierarchical-object-on-mount",c),Ln("threlte-hierarchical-object-on-destroy",f),Ln("threlte-hierarchical-parent-context",m),a.$$set=_=>{"object"in _&&t(3,o=_.object),"children"in _&&t(1,s=_.children),"onChildMount"in _&&t(4,l=_.onChildMount),"onChildDestroy"in _&&t(5,u=_.onChildDestroy),"parent"in _&&t(2,v=_.parent),"$$scope"in _&&t(7,r=_.$$scope)},a.$$.update=()=>{a.$$.dirty&64&&t(2,v=n),a.$$.dirty&8&&m.set(o)},[p,s,v,o,l,u,n,r,i]}class $g extends ft{constructor(e){super(),ht(this,e,Qg,Zg,dt,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function e_(a){let e;const t=a[1].default,n=Nt(t,a,a[4],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&16)&&Bt(n,t,i,i[4],e?Gt(t,i[4],r,null):kt(i[4]),null)},i(i){e||(Le(n,i),e=!0)},o(i){De(n,i),e=!1},d(i){n&&n.d(i)}}}function t_(a){let e,t;return e=new $g({props:{object:a[0],onChildMount:a[2],onChildDestroy:a[3],$$slots:{default:[e_]},$$scope:{ctx:a}}}),{c(){We(e.$$.fragment)},l(n){Xe(e.$$.fragment,n)},m(n,i){je(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.object=n[0]),i&1&&(r.onChildMount=n[2]),i&1&&(r.onChildDestroy=n[3]),i&16&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){De(e.$$.fragment,n),t=!1},d(n){Ye(e,n)}}}function n_(a,e,t){let{$$slots:n={},$$scope:i}=e,{object:r}=e;const o=l=>r.add(l),s=l=>r.remove(l);return a.$$set=l=>{"object"in l&&t(0,r=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[r,n,o,s,i]}class eo extends ft{constructor(e){super(),ht(this,e,n_,t_,dt,{object:0})}}const i_=()=>{const a=nn({width:0,height:0});let e={width:0,height:0};const t=a.subscribe(o=>e=o);Tt(t);let n;const i=()=>{const o=e;if(!n||!n.parentElement)return;const{clientWidth:s,clientHeight:l}=n.parentElement;(s!==o.width||l!==o.height)&&a.set({width:s,height:l})},r=o=>{n=o,i(),window.addEventListener("resize",i)};return La?(Tt(()=>{window.removeEventListener("resize",i)}),{parentSizeAction:r,parentSize:a}):{parentSize:a,parentSizeAction:r}};function Zl(a){let e,t;return e=new eo({props:{object:a[0].scene,$$slots:{default:[r_]},$$scope:{ctx:a}}}),{c(){We(e.$$.fragment)},l(n){Xe(e.$$.fragment,n)},m(n,i){je(e,n,i),t=!0},p(n,i){const r={};i[1]&4&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){De(e.$$.fragment,n),t=!1},d(n){Ye(e,n)}}}function r_(a){let e;const t=a[29].default,n=Nt(t,a,a[33],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&4)&&Bt(n,t,i,i[33],e?Gt(t,i[33],r,null):kt(i[33]),null)},i(i){e||(Le(n,i),e=!0)},o(i){De(n,i),e=!1},d(i){n&&n.d(i)}}}function a_(a){let e,t,n,i,r=a[2]&&Zl(a);return{c(){e=Vn("canvas"),r&&r.c(),this.h()},l(o){e=Hn(o,"CANVAS",{class:!0});var s=ni(e);r&&r.l(s),s.forEach(st),this.h()},h(){Rn(e,"class","svelte-o3oskp")},m(o,s){pt(o,e,s),r&&r.m(e,null),a[30](e),t=!0,n||(i=[gu(a[3].call(null,e)),ii(e,"click",a[9]),ii(e,"contextmenu",a[10]),ii(e,"pointerup",a[13]),ii(e,"pointerdown",a[11]),ii(e,"pointermove",a[12]),ii(e,"pointerenter",a[31]),ii(e,"pointerleave",a[32])],n=!0)},p(o,s){o[2]?r?(r.p(o,s),s[0]&4&&Le(r,1)):(r=Zl(o),r.c(),Le(r,1),r.m(e,null)):r&&(Vs(),De(r,1,1,()=>{r=null}),Hs())},i(o){t||(Le(r),t=!0)},o(o){De(r),t=!1},d(o){o&&st(e),r&&r.d(),a[30](null),n=!1,_u(i)}}}const Jl=new Set;function s_(a,e,t){let n,i,r,o,{$$slots:s={},$$scope:l}=e,{dpr:c=La?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:f=!1}=e,{frameloop:h="demand"}=e,{debugFrameloop:p=!1}=e,{shadows:v=!0}=e,{shadowMapType:g=Mc}=e,{size:m=void 0}=e,{rendererParameters:d=void 0}=e,_,S=!1;const b=nn(m),{parentSize:M,parentSizeAction:x}=i_(),D=Kg(f,u,c,b,M,p,h),{getCtx:L,renderCtx:E,disposalCtx:T}=D,{ctx:B,rootCtx:U,audioCtx:C}=D;qg(B),Jl.add(B.invalidate),Tt(()=>{Jl.delete(B.invalidate)});const{size:N,scene:R}=B;St(a,N,P=>t(26,i=P));const{flat:k,linear:K,dpr:q}=U;St(a,k,P=>t(27,r=P)),St(a,K,P=>t(28,o=P)),St(a,q,P=>t(25,n=P)),Ln("threlte-parent",nn(R)),vu(()=>{_&&(Og(B,_,d),Yl(B,o,r),ql(B,i,n),Kl(B,v,g),t(2,S=!0))}),jg(B,U,E,T);const{onClick:z,onContextMenu:X,onPointerDown:A,onPointerMove:Y,onPointerUp:G}=kg(B,U,E);Tt(()=>{T.dispose(!0)});function H(P){sn[P?"unshift":"push"](()=>{_=P,t(1,_)})}const W=()=>L().pointerOverCanvas.set(!0),O=()=>L().pointerOverCanvas.set(!1);return a.$$set=P=>{"dpr"in P&&t(14,c=P.dpr),"flat"in P&&t(15,u=P.flat),"linear"in P&&t(16,f=P.linear),"frameloop"in P&&t(17,h=P.frameloop),"debugFrameloop"in P&&t(18,p=P.debugFrameloop),"shadows"in P&&t(19,v=P.shadows),"shadowMapType"in P&&t(20,g=P.shadowMapType),"size"in P&&t(21,m=P.size),"rendererParameters"in P&&t(22,d=P.rendererParameters),"$$scope"in P&&t(33,l=P.$$scope)},a.$$.update=()=>{a.$$.dirty[0]&2097152&&b.set(m),a.$$.dirty[0]&65536&&Ya(K,o=f,o),a.$$.dirty[0]&32768&&Ya(k,r=u,r),a.$$.dirty[0]&16384&&Ya(q,n=c,n),a.$$.dirty[0]&402653184&&Yl(L(),o,r),a.$$.dirty[0]&100663296&&ql(L(),i,n),a.$$.dirty[0]&1572864&&Kl(L(),v,g)},[B,_,S,x,L,N,k,K,q,z,X,A,Y,G,c,u,f,h,p,v,g,m,d,U,C,n,i,r,o,s,H,W,O,l]}class o_ extends ft{constructor(e){super(),ht(this,e,s_,a_,dt,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const Gr=()=>Xn("threlte-root"),l_=()=>Xn("threlte-disposal-context");function c_(a){let e;const t=a[9].default,n=Nt(t,a,a[8],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&256)&&Bt(n,t,i,i[8],e?Gt(t,i[8],r,null):kt(i[8]),null)},i(i){e||(Le(n,i),e=!0)},o(i){De(n,i),e=!1},d(i){n&&n.d(i)}}}const Ql="threlte-disposable-object-context";function u_(a,e,t){let n,i,{$$slots:r={},$$scope:o}=e;const{collectDisposableObjects:s,addDisposableObjects:l,removeDisposableObjects:c}=l_();let{object:u=void 0}=e,f=u,{dispose:h=void 0}=e;const p=Xn(Ql);St(a,p,m=>t(7,i=m));const v=nn(h??i??!0);St(a,v,m=>t(6,n=m)),Ln(Ql,v);let g=n?s(u):[];return l(g),Tt(()=>{c(g)}),a.$$set=m=>{"object"in m&&t(2,u=m.object),"dispose"in m&&t(3,h=m.dispose),"$$scope"in m&&t(8,o=m.$$scope)},a.$$.update=()=>{a.$$.dirty&136&&v.set(h??i??!0),a.$$.dirty&116&&u!==f&&(c(g),t(5,g=n?s(u):[]),l(g),t(4,f=u))},[p,v,u,h,f,g,n,i,o,r]}class si extends ft{constructor(e){super(),ht(this,e,u_,c_,dt,{object:2,dispose:3})}}function f_(a,e,t){let n,i,{object:r}=e;const o=Da(r);St(a,o,c=>t(4,i=c));const s=Xn("threlte-layers");St(a,s,c=>t(3,n=c));const{invalidate:l}=Kt();return a.$$set=c=>{"object"in c&&t(2,r=c.object)},a.$$.update=()=>{if(a.$$.dirty&4&&o.set(r),a.$$.dirty&24){if(n==="all")i.layers.enableAll();else if(n==="none")i.layers.disableAll();else if(Array.isArray(n))for(let c=0;c<32;c+=1){const u=c;n.includes(u)?i.layers.enable(c):i.layers.disable(c)}else n!==void 0&&i.layers.set(n);l("LayerableObject")}},[o,s,r,n,i]}class h_ extends ft{constructor(e){super(),ht(this,e,f_,null,dt,{object:2})}}const Ua=(a,e)=>{if(!La)return{start:()=>{},stop:()=>{},started:xu(!1)};const t=Xn("threlte-render-context"),n={fn:a,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},i=nn(!1),r=()=>{t.frameHandlers.delete(n),i.set(!1)},o=()=>{t.frameHandlers.add(n),i.set(!0)};return((e==null?void 0:e.autostart)??!0)&&o(),Tt(()=>{r()}),{start:o,stop:r,started:{subscribe:i.subscribe}}},nu=()=>{const a=nn(!1);return(async()=>{await Dr(),a.set(!0)})(),a};function d_(a,e,t){let n,i,{object:r}=e,{position:o=void 0}=e,{scale:s=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new J,f=Or(),{invalidate:h}=Kt(),p=nu();St(a,p,S=>t(8,i=S));const v=async()=>{i||await Dr(),f("transform")},g=async()=>{h("TransformableObject: transformed"),await v()};ln(r).onTransform=g;const{start:m,stop:d}=Ua(async()=>{c&&!l&&c instanceof ut&&(c.getWorldPosition(u),r.lookAt(u),await v())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),_=Da(r);return St(a,_,S=>t(7,n=S)),a.$$set=S=>{"object"in S&&t(2,r=S.object),"position"in S&&t(3,o=S.position),"scale"in S&&t(4,s=S.scale),"rotation"in S&&t(5,l=S.rotation),"lookAt"in S&&t(6,c=S.lookAt)},a.$$.update=()=>{a.$$.dirty&4&&_.set(r),a.$$.dirty&232&&(o&&(n.position.set(o.x??0,o.y??0,o.z??0),g()),c&&!l&&(c instanceof ut?m():(d(),n.lookAt(c.x??0,c.y??0,c.z??0),g())),c||d()),a.$$.dirty&144&&s&&(typeof s=="number"?n.scale.set(s,s,s):n.scale.set(s.x??1,s.y??1,s.z??1),g()),a.$$.dirty&160&&l&&(n.rotation.set(l.x??0,l.y??0,l.z??0,l.order??"XYZ"),g())},[p,_,r,o,s,l,c,n]}class to extends ft{constructor(e){super(),ht(this,e,d_,null,dt,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function p_(a,e,t){let n,i,r,{object:o}=e,{viewportAware:s=!1}=e;const l=Or(),{camera:c,invalidate:u}=Kt();St(a,c,x=>t(8,r=x));const f=new Ca,h=new _t,p=x=>x.type==="Mesh",v=new J,g=()=>r?(h.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),f.setFromProjectionMatrix(h),p(o)?f.intersectsObject(o):(o.getWorldPosition(v),f.containsPoint(v))):!0,m=nu();St(a,m,x=>t(7,i=x));let{inViewport:d=g()}=e;const _=async x=>{x?(i||await Dr(),l("viewportenter",o)):(i||await Dr(),l("viewportleave",o))},{start:S,stop:b,started:M}=Ua(()=>{const x=g();d===void 0?(t(3,d=g()),_(d)):x!==d&&(_(x),t(3,d=x))},{autostart:s,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return St(a,M,x=>t(6,n=x)),u("ViewportAwareObject"),a.$$set=x=>{"object"in x&&t(4,o=x.object),"viewportAware"in x&&t(5,s=x.viewportAware),"inViewport"in x&&t(3,d=x.inViewport)},a.$$.update=()=>{a.$$.dirty&96&&(s&&!n?S():!s&&n&&b())},[c,m,M,d,o,s,n]}class m_ extends ft{constructor(e){super(),ht(this,e,p_,null,dt,{object:4,viewportAware:5,inViewport:3})}}function g_(a){let e;const t=a[14].default,n=Nt(t,a,a[18],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&262144)&&Bt(n,t,i,i[18],e?Gt(t,i[18],r,null):kt(i[18]),null)},i(i){e||(Le(n,i),e=!0)},o(i){De(n,i),e=!1},d(i){n&&n.d(i)}}}function __(a){let e,t;return e=new eo({props:{object:a[1],$$slots:{default:[g_]},$$scope:{ctx:a}}}),{c(){We(e.$$.fragment)},l(n){Xe(e.$$.fragment,n)},m(n,i){je(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.object=n[1]),i&262144&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){De(e.$$.fragment,n),t=!1},d(n){Ye(e,n)}}}function v_(a){let e,t,n,i,r,o,s,l,c;e=new h_({props:{object:a[1]}}),n=new to({props:{object:a[1],position:a[2],rotation:a[4],scale:a[3],lookAt:a[5]}}),r=new si({props:{object:a[1],dispose:a[7],$$slots:{default:[__]},$$scope:{ctx:a}}});function u(h){a[15](h)}let f={object:a[1],viewportAware:a[6]};return a[0]!==void 0&&(f.inViewport=a[0]),s=new m_({props:f}),sn.push(()=>un(s,"inViewport",u)),s.$on("viewportenter",a[16]),s.$on("viewportleave",a[17]),{c(){We(e.$$.fragment),t=mt(),We(n.$$.fragment),i=mt(),We(r.$$.fragment),o=mt(),We(s.$$.fragment)},l(h){Xe(e.$$.fragment,h),t=gt(h),Xe(n.$$.fragment,h),i=gt(h),Xe(r.$$.fragment,h),o=gt(h),Xe(s.$$.fragment,h)},m(h,p){je(e,h,p),pt(h,t,p),je(n,h,p),pt(h,i,p),je(r,h,p),pt(h,o,p),je(s,h,p),c=!0},p(h,[p]){const v={};p&2&&(v.object=h[1]),e.$set(v);const g={};p&2&&(g.object=h[1]),p&4&&(g.position=h[2]),p&16&&(g.rotation=h[4]),p&8&&(g.scale=h[3]),p&32&&(g.lookAt=h[5]),n.$set(g);const m={};p&2&&(m.object=h[1]),p&128&&(m.dispose=h[7]),p&262146&&(m.$$scope={dirty:p,ctx:h}),r.$set(m);const d={};p&2&&(d.object=h[1]),p&64&&(d.viewportAware=h[6]),!l&&p&1&&(l=!0,d.inViewport=h[0],fn(()=>l=!1)),s.$set(d)},i(h){c||(Le(e.$$.fragment,h),Le(n.$$.fragment,h),Le(r.$$.fragment,h),Le(s.$$.fragment,h),c=!0)},o(h){De(e.$$.fragment,h),De(n.$$.fragment,h),De(r.$$.fragment,h),De(s.$$.fragment,h),c=!1},d(h){Ye(e,h),h&&st(t),Ye(n,h),h&&st(i),Ye(r,h),h&&st(o),Ye(s,h)}}}function S_(a,e,t){let{$$slots:n={},$$scope:i}=e,{object:r}=e,{position:o=void 0}=e,{scale:s=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:h=void 0}=e,{receiveShadow:p=void 0}=e,{frustumCulled:v=void 0}=e,{renderOrder:g=void 0}=e,{visible:m=void 0}=e,{dispose:d=void 0}=e,{userData:_=void 0}=e;const{invalidate:S}=Kt(),b=()=>r;function M(L){f=L,t(0,f)}function x(L){Fe.call(this,a,L)}function D(L){Fe.call(this,a,L)}return a.$$set=L=>{"object"in L&&t(1,r=L.object),"position"in L&&t(2,o=L.position),"scale"in L&&t(3,s=L.scale),"rotation"in L&&t(4,l=L.rotation),"lookAt"in L&&t(5,c=L.lookAt),"viewportAware"in L&&t(6,u=L.viewportAware),"inViewport"in L&&t(0,f=L.inViewport),"castShadow"in L&&t(8,h=L.castShadow),"receiveShadow"in L&&t(9,p=L.receiveShadow),"frustumCulled"in L&&t(10,v=L.frustumCulled),"renderOrder"in L&&t(11,g=L.renderOrder),"visible"in L&&t(12,m=L.visible),"dispose"in L&&t(7,d=L.dispose),"userData"in L&&t(13,_=L.userData),"$$scope"in L&&t(18,i=L.$$scope)},a.$$.update=()=>{a.$$.dirty&16128&&(m!==void 0&&(b().visible=m),h!==void 0&&(b().castShadow=h),p!==void 0&&(b().receiveShadow=p),v!==void 0&&(b().frustumCulled=v),g!==void 0&&(b().renderOrder=g),_!==void 0&&(b().userData={...b().userData,..._}),S("Object3DInstance: props changed"))},[f,r,o,s,l,c,u,d,h,p,v,g,m,_,n,M,x,D,i]}class zr extends ft{constructor(e){super(),ht(this,e,S_,v_,dt,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function M_(a){let e;const t=a[17].default,n=Nt(t,a,a[21],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&2097152)&&Bt(n,t,i,i[21],e?Gt(t,i[21],r,null):kt(i[21]),null)},i(i){e||(Le(n,i),e=!0)},o(i){De(n,i),e=!1},d(i){n&&n.d(i)}}}function b_(a){let e,t,n;function i(o){a[18](o)}let r={object:a[1],lookAt:a[5],castShadow:a[7],receiveShadow:a[8],frustumCulled:a[9],renderOrder:a[10],position:a[2],scale:a[3],rotation:a[4],viewportAware:a[6],visible:a[11],userData:a[12],dispose:a[13],$$slots:{default:[M_]},$$scope:{ctx:a}};return a[0]!==void 0&&(r.inViewport=a[0]),e=new zr({props:r}),sn.push(()=>un(e,"inViewport",i)),e.$on("viewportenter",a[19]),e.$on("viewportleave",a[20]),{c(){We(e.$$.fragment)},l(o){Xe(e.$$.fragment,o)},m(o,s){je(e,o,s),n=!0},p(o,[s]){const l={};s&2&&(l.object=o[1]),s&32&&(l.lookAt=o[5]),s&128&&(l.castShadow=o[7]),s&256&&(l.receiveShadow=o[8]),s&512&&(l.frustumCulled=o[9]),s&1024&&(l.renderOrder=o[10]),s&4&&(l.position=o[2]),s&8&&(l.scale=o[3]),s&16&&(l.rotation=o[4]),s&64&&(l.viewportAware=o[6]),s&2048&&(l.visible=o[11]),s&4096&&(l.userData=o[12]),s&8192&&(l.dispose=o[13]),s&2097152&&(l.$$scope={dirty:s,ctx:o}),!t&&s&1&&(t=!0,l.inViewport=o[0],fn(()=>t=!1)),e.$set(l)},i(o){n||(Le(e.$$.fragment,o),n=!0)},o(o){De(e.$$.fragment,o),n=!1},d(o){Ye(e,o)}}}function x_(a,e,t){let n,{$$slots:i={},$$scope:r}=e,{camera:o}=e,{position:s=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:f=!1}=e,{inViewport:h=!1}=e,{castShadow:p=void 0}=e,{receiveShadow:v=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:m=void 0}=e,{visible:d=void 0}=e,{userData:_=void 0}=e,{dispose:S=void 0}=e,{useCamera:b=!1}=e;const M=Da(o);St(a,M,T=>t(16,n=T));const{setCamera:x}=Gr();function D(T){h=T,t(0,h)}function L(T){Fe.call(this,a,T)}function E(T){Fe.call(this,a,T)}return a.$$set=T=>{"camera"in T&&t(1,o=T.camera),"position"in T&&t(2,s=T.position),"scale"in T&&t(3,l=T.scale),"rotation"in T&&t(4,c=T.rotation),"lookAt"in T&&t(5,u=T.lookAt),"viewportAware"in T&&t(6,f=T.viewportAware),"inViewport"in T&&t(0,h=T.inViewport),"castShadow"in T&&t(7,p=T.castShadow),"receiveShadow"in T&&t(8,v=T.receiveShadow),"frustumCulled"in T&&t(9,g=T.frustumCulled),"renderOrder"in T&&t(10,m=T.renderOrder),"visible"in T&&t(11,d=T.visible),"userData"in T&&t(12,_=T.userData),"dispose"in T&&t(13,S=T.dispose),"useCamera"in T&&t(15,b=T.useCamera),"$$scope"in T&&t(21,r=T.$$scope)},a.$$.update=()=>{a.$$.dirty&2&&M.set(o),a.$$.dirty&98304&&b&&x(n)},[h,o,s,l,c,u,f,p,v,g,m,d,_,S,M,b,n,i,D,L,E,r]}class E_ extends ft{constructor(e){super(),ht(this,e,x_,b_,dt,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}function y_(a){let e;const t=a[20].default,n=Nt(t,a,a[24],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&16777216)&&Bt(n,t,i,i[24],e?Gt(t,i[24],r,null):kt(i[24]),null)},i(i){e||(Le(n,i),e=!0)},o(i){De(n,i),e=!1},d(i){n&&n.d(i)}}}function w_(a){let e,t,n;function i(o){a[21](o)}let r={camera:a[0],position:a[2],scale:a[3],rotation:a[4],castShadow:a[6],receiveShadow:a[7],frustumCulled:a[8],renderOrder:a[9],visible:a[10],userData:a[11],dispose:a[12],viewportAware:a[13],lookAt:a[5],useCamera:a[14],$$slots:{default:[y_]},$$scope:{ctx:a}};return a[1]!==void 0&&(r.inViewport=a[1]),e=new E_({props:r}),sn.push(()=>un(e,"inViewport",i)),e.$on("viewportenter",a[22]),e.$on("viewportleave",a[23]),{c(){We(e.$$.fragment)},l(o){Xe(e.$$.fragment,o)},m(o,s){je(e,o,s),n=!0},p(o,[s]){const l={};s&1&&(l.camera=o[0]),s&4&&(l.position=o[2]),s&8&&(l.scale=o[3]),s&16&&(l.rotation=o[4]),s&64&&(l.castShadow=o[6]),s&128&&(l.receiveShadow=o[7]),s&256&&(l.frustumCulled=o[8]),s&512&&(l.renderOrder=o[9]),s&1024&&(l.visible=o[10]),s&2048&&(l.userData=o[11]),s&4096&&(l.dispose=o[12]),s&8192&&(l.viewportAware=o[13]),s&32&&(l.lookAt=o[5]),s&16384&&(l.useCamera=o[14]),s&16777216&&(l.$$scope={dirty:s,ctx:o}),!t&&s&2&&(t=!0,l.inViewport=o[1],fn(()=>t=!1)),e.$set(l)},i(o){n||(Le(e.$$.fragment,o),n=!0)},o(o){De(e.$$.fragment,o),n=!1},d(o){Ye(e,o)}}}function T_(a,e,t){let n,{$$slots:i={},$$scope:r}=e,{position:o=void 0}=e,{scale:s=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:h=void 0}=e,{renderOrder:p=void 0}=e,{visible:v=void 0}=e,{userData:g=void 0}=e,{dispose:m=void 0}=e,{viewportAware:d=!1}=e,{inViewport:_=!1}=e,{useCamera:S=!0}=e,{near:b=void 0}=e,{far:M=void 0}=e,{fov:x=void 0}=e;const{size:D,invalidate:L}=Kt();St(a,D,C=>t(19,n=C));const E=new rn(x,n.width/n.height,b,M);function T(C){_=C,t(1,_)}function B(C){Fe.call(this,a,C)}function U(C){Fe.call(this,a,C)}return a.$$set=C=>{"position"in C&&t(2,o=C.position),"scale"in C&&t(3,s=C.scale),"rotation"in C&&t(4,l=C.rotation),"lookAt"in C&&t(5,c=C.lookAt),"castShadow"in C&&t(6,u=C.castShadow),"receiveShadow"in C&&t(7,f=C.receiveShadow),"frustumCulled"in C&&t(8,h=C.frustumCulled),"renderOrder"in C&&t(9,p=C.renderOrder),"visible"in C&&t(10,v=C.visible),"userData"in C&&t(11,g=C.userData),"dispose"in C&&t(12,m=C.dispose),"viewportAware"in C&&t(13,d=C.viewportAware),"inViewport"in C&&t(1,_=C.inViewport),"useCamera"in C&&t(14,S=C.useCamera),"near"in C&&t(16,b=C.near),"far"in C&&t(17,M=C.far),"fov"in C&&t(18,x=C.fov),"$$scope"in C&&t(24,r=C.$$scope)},a.$$.update=()=>{a.$$.dirty&524289&&(t(0,E.aspect=n.width/n.height,E),E.updateProjectionMatrix(),L("PerspectiveCamera: aspect changed")),a.$$.dirty&458753&&(b!==void 0&&t(0,E.near=b,E),M!==void 0&&t(0,E.far=M,E),x!==void 0&&t(0,E.fov=x,E),E.updateProjectionMatrix(),L("PerspectiveCamera: props changed"))},[E,_,o,s,l,c,u,f,h,p,v,g,m,d,S,D,b,M,x,n,i,T,B,U,r]}class A_ extends ft{constructor(e){super(),ht(this,e,T_,w_,dt,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,viewportAware:13,inViewport:1,useCamera:14,near:16,far:17,fov:18,camera:0})}get camera(){return this.$$.ctx[0]}}const $l=[],C_=(a,e)=>{const t=$l.find(i=>i instanceof a);if(t)return t;const n=e();return $l.push(n),n},ec={type:"change"},Ts={type:"start"},tc={type:"end"};let R_=class extends yi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ri.ROTATE,MIDDLE:Ri.DOLLY,RIGHT:Ri.PAN},this.touches={ONE:Pi.ROTATE,TWO:Pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",Se),this._domElementKeyEvents=y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Se),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ec),n.update(),r=i.NONE},this.update=function(){const y=new J,ee=new Ei().setFromUnitVectors(e.up,new J(0,1,0)),Z=ee.clone().invert(),_e=new J,be=new Ei,we=2*Math.PI;return function(){const de=n.object.position;y.copy(de).sub(n.target),y.applyQuaternion(ee),s.setFromVector3(y),n.autoRotate&&r===i.NONE&&E(D()),n.enableDamping?(s.theta+=l.theta*n.dampingFactor,s.phi+=l.phi*n.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Re=n.minAzimuthAngle,Pe=n.maxAzimuthAngle;return isFinite(Re)&&isFinite(Pe)&&(Re<-Math.PI?Re+=we:Re>Math.PI&&(Re-=we),Pe<-Math.PI?Pe+=we:Pe>Math.PI&&(Pe-=we),Re<=Pe?s.theta=Math.max(Re,Math.min(Pe,s.theta)):s.theta=s.theta>(Re+Pe)/2?Math.max(Re,s.theta):Math.min(Pe,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),y.setFromSpherical(s),y.applyQuaternion(Z),de.copy(n.target).add(y),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||_e.distanceToSquared(n.object.position)>o||8*(1-be.dot(n.object.quaternion))>o?(n.dispatchEvent(ec),_e.copy(n.object.position),be.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",w),n.domElement.removeEventListener("pointerdown",Ee),n.domElement.removeEventListener("pointercancel",ye),n.domElement.removeEventListener("wheel",Me),n.domElement.removeEventListener("pointermove",xe),n.domElement.removeEventListener("pointerup",ye),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Se),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,s=new Xl,l=new Xl;let c=1;const u=new J;let f=!1;const h=new ze,p=new ze,v=new ze,g=new ze,m=new ze,d=new ze,_=new ze,S=new ze,b=new ze,M=[],x={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function L(){return Math.pow(.95,n.zoomSpeed)}function E(y){l.theta-=y}function T(y){l.phi-=y}const B=function(){const y=new J;return function(Z,_e){y.setFromMatrixColumn(_e,0),y.multiplyScalar(-Z),u.add(y)}}(),U=function(){const y=new J;return function(Z,_e){n.screenSpacePanning===!0?y.setFromMatrixColumn(_e,1):(y.setFromMatrixColumn(_e,0),y.crossVectors(n.object.up,y)),y.multiplyScalar(Z),u.add(y)}}(),C=function(){const y=new J;return function(Z,_e){const be=n.domElement;if(n.object.isPerspectiveCamera){const we=n.object.position;y.copy(we).sub(n.target);let he=y.length();he*=Math.tan(n.object.fov/2*Math.PI/180),B(2*Z*he/be.clientHeight,n.object.matrix),U(2*_e*he/be.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(Z*(n.object.right-n.object.left)/n.object.zoom/be.clientWidth,n.object.matrix),U(_e*(n.object.top-n.object.bottom)/n.object.zoom/be.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(y){n.object.isPerspectiveCamera?c/=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*y)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function R(y){n.object.isPerspectiveCamera?c*=y:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/y)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(y){h.set(y.clientX,y.clientY)}function K(y){_.set(y.clientX,y.clientY)}function q(y){g.set(y.clientX,y.clientY)}function z(y){p.set(y.clientX,y.clientY),v.subVectors(p,h).multiplyScalar(n.rotateSpeed);const ee=n.domElement;E(2*Math.PI*v.x/ee.clientHeight),T(2*Math.PI*v.y/ee.clientHeight),h.copy(p),n.update()}function X(y){S.set(y.clientX,y.clientY),b.subVectors(S,_),b.y>0?N(L()):b.y<0&&R(L()),_.copy(S),n.update()}function A(y){m.set(y.clientX,y.clientY),d.subVectors(m,g).multiplyScalar(n.panSpeed),C(d.x,d.y),g.copy(m),n.update()}function Y(y){y.deltaY<0?R(L()):y.deltaY>0&&N(L()),n.update()}function G(y){let ee=!1;switch(y.code){case n.keys.UP:y.ctrlKey||y.metaKey||y.shiftKey?T(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,n.keyPanSpeed),ee=!0;break;case n.keys.BOTTOM:y.ctrlKey||y.metaKey||y.shiftKey?T(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(0,-n.keyPanSpeed),ee=!0;break;case n.keys.LEFT:y.ctrlKey||y.metaKey||y.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(n.keyPanSpeed,0),ee=!0;break;case n.keys.RIGHT:y.ctrlKey||y.metaKey||y.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):C(-n.keyPanSpeed,0),ee=!0;break}ee&&(y.preventDefault(),n.update())}function H(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const y=.5*(M[0].pageX+M[1].pageX),ee=.5*(M[0].pageY+M[1].pageY);h.set(y,ee)}}function W(){if(M.length===1)g.set(M[0].pageX,M[0].pageY);else{const y=.5*(M[0].pageX+M[1].pageX),ee=.5*(M[0].pageY+M[1].pageY);g.set(y,ee)}}function O(){const y=M[0].pageX-M[1].pageX,ee=M[0].pageY-M[1].pageY,Z=Math.sqrt(y*y+ee*ee);_.set(0,Z)}function P(){n.enableZoom&&O(),n.enablePan&&W()}function ne(){n.enableZoom&&O(),n.enableRotate&&H()}function oe(y){if(M.length==1)p.set(y.pageX,y.pageY);else{const Z=me(y),_e=.5*(y.pageX+Z.x),be=.5*(y.pageY+Z.y);p.set(_e,be)}v.subVectors(p,h).multiplyScalar(n.rotateSpeed);const ee=n.domElement;E(2*Math.PI*v.x/ee.clientHeight),T(2*Math.PI*v.y/ee.clientHeight),h.copy(p)}function re(y){if(M.length===1)m.set(y.pageX,y.pageY);else{const ee=me(y),Z=.5*(y.pageX+ee.x),_e=.5*(y.pageY+ee.y);m.set(Z,_e)}d.subVectors(m,g).multiplyScalar(n.panSpeed),C(d.x,d.y),g.copy(m)}function le(y){const ee=me(y),Z=y.pageX-ee.x,_e=y.pageY-ee.y,be=Math.sqrt(Z*Z+_e*_e);S.set(0,be),b.set(0,Math.pow(S.y/_.y,n.zoomSpeed)),N(b.y),_.copy(S)}function fe(y){n.enableZoom&&le(y),n.enablePan&&re(y)}function ve(y){n.enableZoom&&le(y),n.enableRotate&&oe(y)}function Ee(y){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(y.pointerId),n.domElement.addEventListener("pointermove",xe),n.domElement.addEventListener("pointerup",ye)),j(y),y.pointerType==="touch"?pe(y):Ie(y))}function xe(y){n.enabled!==!1&&(y.pointerType==="touch"?I(y):ue(y))}function ye(y){$(y),M.length===0&&(n.domElement.releasePointerCapture(y.pointerId),n.domElement.removeEventListener("pointermove",xe),n.domElement.removeEventListener("pointerup",ye)),n.dispatchEvent(tc),r=i.NONE}function Ie(y){let ee;switch(y.button){case 0:ee=n.mouseButtons.LEFT;break;case 1:ee=n.mouseButtons.MIDDLE;break;case 2:ee=n.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case Ri.DOLLY:if(n.enableZoom===!1)return;K(y),r=i.DOLLY;break;case Ri.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enablePan===!1)return;q(y),r=i.PAN}else{if(n.enableRotate===!1)return;k(y),r=i.ROTATE}break;case Ri.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(n.enableRotate===!1)return;k(y),r=i.ROTATE}else{if(n.enablePan===!1)return;q(y),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ts)}function ue(y){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;z(y);break;case i.DOLLY:if(n.enableZoom===!1)return;X(y);break;case i.PAN:if(n.enablePan===!1)return;A(y);break}}function Me(y){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(y.preventDefault(),n.dispatchEvent(Ts),Y(y),n.dispatchEvent(tc))}function Se(y){n.enabled===!1||n.enablePan===!1||G(y)}function pe(y){switch(ae(y),M.length){case 1:switch(n.touches.ONE){case Pi.ROTATE:if(n.enableRotate===!1)return;H(),r=i.TOUCH_ROTATE;break;case Pi.PAN:if(n.enablePan===!1)return;W(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Pi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;P(),r=i.TOUCH_DOLLY_PAN;break;case Pi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ne(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ts)}function I(y){switch(ae(y),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;oe(y),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;re(y),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;fe(y),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(y),n.update();break;default:r=i.NONE}}function w(y){n.enabled!==!1&&y.preventDefault()}function j(y){M.push(y)}function $(y){delete x[y.pointerId];for(let ee=0;ee<M.length;ee++)if(M[ee].pointerId==y.pointerId){M.splice(ee,1);return}}function ae(y){let ee=x[y.pointerId];ee===void 0&&(ee=new ze,x[y.pointerId]=ee),ee.set(y.pageX,y.pageY)}function me(y){const ee=y.pointerId===M[0].pointerId?M[1]:M[0];return x[ee.pointerId]}n.domElement.addEventListener("contextmenu",w),n.domElement.addEventListener("pointerdown",Ee),n.domElement.addEventListener("pointercancel",ye),n.domElement.addEventListener("wheel",Me,{passive:!1}),this.update()}};function P_(a){let e,t,n,i;return e=new si({props:{dispose:a[2],object:a[0]}}),n=new to({props:{object:a[4],position:a[1]}}),n.$on("transform",a[5]),{c(){We(e.$$.fragment),t=mt(),We(n.$$.fragment)},l(r){Xe(e.$$.fragment,r),t=gt(r),Xe(n.$$.fragment,r)},m(r,o){je(e,r,o),pt(r,t,o),je(n,r,o),i=!0},p(r,o){const s={};o[0]&4&&(s.dispose=r[2]),o[0]&1&&(s.object=r[0]),e.$set(s);const l={};o[0]&2&&(l.position=r[1]),n.$set(l)},i(r){i||(Le(e.$$.fragment,r),Le(n.$$.fragment,r),i=!0)},o(r){De(e.$$.fragment,r),De(n.$$.fragment,r),i=!1},d(r){Ye(e,r),r&&st(t),Ye(n,r)}}}function L_(a,e,t){let n,{autoRotate:i=void 0}=e,{autoRotateSpeed:r=void 0}=e,{dampingFactor:o=void 0}=e,{enableDamping:s=void 0}=e,{enabled:l=void 0}=e,{enablePan:c=void 0}=e,{enableRotate:u=void 0}=e,{enableZoom:f=void 0}=e,{keyPanSpeed:h=void 0}=e,{keys:p=void 0}=e,{maxAzimuthAngle:v=void 0}=e,{maxDistance:g=void 0}=e,{maxPolarAngle:m=void 0}=e,{maxZoom:d=void 0}=e,{minAzimuthAngle:_=void 0}=e,{minDistance:S=void 0}=e,{minPolarAngle:b=void 0}=e,{minZoom:M=void 0}=e,{mouseButtons:x=void 0}=e,{panSpeed:D=void 0}=e,{rotateSpeed:L=void 0}=e,{screenSpacePanning:E=void 0}=e,{touches:T=void 0}=e,{zoomSpeed:B=void 0}=e,{target:U=void 0}=e,{dispose:C=void 0}=e;const N=tu();St(a,N,O=>t(30,n=O));const{renderer:R,invalidate:k}=Kt();if(!R)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof Zs))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const K=Or(),q=()=>{k("Orbitcontrols: change event"),K("change")},z=()=>K("start"),X=()=>K("end"),A=new R_(n,R.domElement);ln(n).orbitControls=A,A.addEventListener("change",q),A.addEventListener("start",z),A.addEventListener("end",X),Tt(()=>{n&&delete ln(n).orbitControls,A.removeEventListener("change",q),A.removeEventListener("start",z),A.removeEventListener("end",X)});const{start:Y,stop:G}=Ua(()=>A.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),H=new ut,W=()=>{t(0,A.target=H.position,A),A.update(),k("OrbitControls: target changed")};return a.$$set=O=>{"autoRotate"in O&&t(6,i=O.autoRotate),"autoRotateSpeed"in O&&t(7,r=O.autoRotateSpeed),"dampingFactor"in O&&t(8,o=O.dampingFactor),"enableDamping"in O&&t(9,s=O.enableDamping),"enabled"in O&&t(10,l=O.enabled),"enablePan"in O&&t(11,c=O.enablePan),"enableRotate"in O&&t(12,u=O.enableRotate),"enableZoom"in O&&t(13,f=O.enableZoom),"keyPanSpeed"in O&&t(14,h=O.keyPanSpeed),"keys"in O&&t(15,p=O.keys),"maxAzimuthAngle"in O&&t(16,v=O.maxAzimuthAngle),"maxDistance"in O&&t(17,g=O.maxDistance),"maxPolarAngle"in O&&t(18,m=O.maxPolarAngle),"maxZoom"in O&&t(19,d=O.maxZoom),"minAzimuthAngle"in O&&t(20,_=O.minAzimuthAngle),"minDistance"in O&&t(21,S=O.minDistance),"minPolarAngle"in O&&t(22,b=O.minPolarAngle),"minZoom"in O&&t(23,M=O.minZoom),"mouseButtons"in O&&t(24,x=O.mouseButtons),"panSpeed"in O&&t(25,D=O.panSpeed),"rotateSpeed"in O&&t(26,L=O.rotateSpeed),"screenSpacePanning"in O&&t(27,E=O.screenSpacePanning),"touches"in O&&t(28,T=O.touches),"zoomSpeed"in O&&t(29,B=O.zoomSpeed),"target"in O&&t(1,U=O.target),"dispose"in O&&t(2,C=O.dispose)},a.$$.update=()=>{a.$$.dirty[0]&1073741761&&(i!==void 0&&t(0,A.autoRotate=i,A),r!==void 0&&t(0,A.autoRotateSpeed=r,A),o!==void 0&&t(0,A.dampingFactor=o,A),s!==void 0&&t(0,A.enableDamping=s,A),l!==void 0&&t(0,A.enabled=l,A),c!==void 0&&t(0,A.enablePan=c,A),u!==void 0&&t(0,A.enableRotate=u,A),f!==void 0&&t(0,A.enableZoom=f,A),h!==void 0&&t(0,A.keyPanSpeed=h,A),p!==void 0&&t(0,A.keys=p,A),v!==void 0&&t(0,A.maxAzimuthAngle=v,A),g!==void 0&&t(0,A.maxDistance=g,A),m!==void 0&&t(0,A.maxPolarAngle=m,A),d!==void 0&&t(0,A.maxZoom=d,A),_!==void 0&&t(0,A.minAzimuthAngle=_,A),S!==void 0&&t(0,A.minDistance=S,A),b!==void 0&&t(0,A.minPolarAngle=b,A),M!==void 0&&t(0,A.minZoom=M,A),x!==void 0&&t(0,A.mouseButtons=x,A),D!==void 0&&t(0,A.panSpeed=D,A),L!==void 0&&t(0,A.rotateSpeed=L,A),E!==void 0&&t(0,A.screenSpacePanning=E,A),T!==void 0&&t(0,A.touches=T,A),B!==void 0&&t(0,A.zoomSpeed=B,A),A.update(),k("OrbitControls: props changed")),a.$$.dirty[0]&576&&(i||s?Y():G())},[A,U,C,N,H,W,i,r,o,s,l,c,u,f,h,p,v,g,m,d,_,S,b,M,x,D,L,E,T,B]}class D_ extends ft{constructor(e){super(),ht(this,e,L_,P_,dt,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}const wa=(a,e)=>e?new Ve(a):new Ve().setHex(new Ve(a).getHex()).convertSRGBToLinear();function U_(a){let e;const t=a[18].default,n=Nt(t,a,a[22],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&4194304)&&Bt(n,t,i,i[22],e?Gt(t,i[22],r,null):kt(i[22]),null)},i(i){e||(Le(n,i),e=!0)},o(i){De(n,i),e=!1},d(i){n&&n.d(i)}}}function I_(a){let e,t,n;function i(o){a[19](o)}let r={object:a[0],lookAt:a[5],castShadow:a[7],receiveShadow:a[8],frustumCulled:a[9],renderOrder:a[10],position:a[2],scale:a[3],rotation:a[4],viewportAware:a[6],visible:a[11],userData:a[12],dispose:a[13],$$slots:{default:[U_]},$$scope:{ctx:a}};return a[1]!==void 0&&(r.inViewport=a[1]),e=new zr({props:r}),sn.push(()=>un(e,"inViewport",i)),e.$on("viewportenter",a[20]),e.$on("viewportleave",a[21]),{c(){We(e.$$.fragment)},l(o){Xe(e.$$.fragment,o)},m(o,s){je(e,o,s),n=!0},p(o,[s]){const l={};s&1&&(l.object=o[0]),s&32&&(l.lookAt=o[5]),s&128&&(l.castShadow=o[7]),s&256&&(l.receiveShadow=o[8]),s&512&&(l.frustumCulled=o[9]),s&1024&&(l.renderOrder=o[10]),s&4&&(l.position=o[2]),s&8&&(l.scale=o[3]),s&16&&(l.rotation=o[4]),s&64&&(l.viewportAware=o[6]),s&2048&&(l.visible=o[11]),s&4096&&(l.userData=o[12]),s&8192&&(l.dispose=o[13]),s&4194304&&(l.$$scope={dirty:s,ctx:o}),!t&&s&2&&(t=!0,l.inViewport=o[1],fn(()=>t=!1)),e.$set(l)},i(o){n||(Le(e.$$.fragment,o),n=!0)},o(o){De(e.$$.fragment,o),n=!1},d(o){Ye(e,o)}}}function F_(a,e,t){let n,{$$slots:i={},$$scope:r}=e,{light:o}=e,{position:s=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:f=!1}=e,{inViewport:h=!1}=e,{castShadow:p=void 0}=e,{receiveShadow:v=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:m=void 0}=e,{visible:d=void 0}=e,{userData:_=void 0}=e,{dispose:S=void 0}=e,{color:b=void 0}=e,{intensity:M=void 0}=e;const{invalidate:x}=Kt(),{linear:D}=Gr();St(a,D,B=>t(17,n=B));function L(B){h=B,t(1,h)}function E(B){Fe.call(this,a,B)}function T(B){Fe.call(this,a,B)}return a.$$set=B=>{"light"in B&&t(0,o=B.light),"position"in B&&t(2,s=B.position),"scale"in B&&t(3,l=B.scale),"rotation"in B&&t(4,c=B.rotation),"lookAt"in B&&t(5,u=B.lookAt),"viewportAware"in B&&t(6,f=B.viewportAware),"inViewport"in B&&t(1,h=B.inViewport),"castShadow"in B&&t(7,p=B.castShadow),"receiveShadow"in B&&t(8,v=B.receiveShadow),"frustumCulled"in B&&t(9,g=B.frustumCulled),"renderOrder"in B&&t(10,m=B.renderOrder),"visible"in B&&t(11,d=B.visible),"userData"in B&&t(12,_=B.userData),"dispose"in B&&t(13,S=B.dispose),"color"in B&&t(15,b=B.color),"intensity"in B&&t(16,M=B.intensity),"$$scope"in B&&t(22,r=B.$$scope)},a.$$.update=()=>{a.$$.dirty&229376&&(M!==void 0&&t(0,o.intensity=M,o),b!==void 0&&t(0,o.color=wa(b,n),o),x("LightInstance: props changed"))},[o,h,s,l,c,u,f,p,v,g,m,d,_,S,D,b,M,n,i,L,E,T,r]}class iu extends ft{constructor(e){super(),ht(this,e,F_,I_,dt,{light:0,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:1,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,color:15,intensity:16})}}function nc(a){let e,t,n,i,r,o;return e=new eo({props:{object:a[16]}}),n=new to({props:{object:a[16],position:a[15]}}),r=new si({props:{dispose:a[10],object:a[15]}}),{c(){We(e.$$.fragment),t=mt(),We(n.$$.fragment),i=mt(),We(r.$$.fragment)},l(s){Xe(e.$$.fragment,s),t=gt(s),Xe(n.$$.fragment,s),i=gt(s),Xe(r.$$.fragment,s)},m(s,l){je(e,s,l),pt(s,t,l),je(n,s,l),pt(s,i,l),je(r,s,l),o=!0},p(s,l){const c={};l&32768&&(c.position=s[15]),n.$set(c);const u={};l&1024&&(u.dispose=s[10]),l&32768&&(u.object=s[15]),r.$set(u)},i(s){o||(Le(e.$$.fragment,s),Le(n.$$.fragment,s),Le(r.$$.fragment,s),o=!0)},o(s){De(e.$$.fragment,s),De(n.$$.fragment,s),De(r.$$.fragment,s),o=!1},d(s){Ye(e,s),s&&st(t),Ye(n,s),s&&st(i),Ye(r,s)}}}function O_(a){let e;const t=a[18].default,n=Nt(t,a,a[22],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&4194304)&&Bt(n,t,i,i[22],e?Gt(t,i[22],r,null):kt(i[22]),null)},i(i){e||(Le(n,i),e=!0)},o(i){De(n,i),e=!1},d(i){n&&n.d(i)}}}function N_(a){let e,t,n,i,r=a[15]&&!(a[15]instanceof ut)&&nc(a);function o(l){a[19](l)}let s={light:a[1],position:a[2],scale:a[3],rotation:a[4],castShadow:!!a[14],receiveShadow:a[5],frustumCulled:a[6],renderOrder:a[7],visible:a[8],userData:a[9],dispose:a[10],viewportAware:a[11],color:a[12],intensity:a[13],$$slots:{default:[O_]},$$scope:{ctx:a}};return a[0]!==void 0&&(s.inViewport=a[0]),t=new iu({props:s}),sn.push(()=>un(t,"inViewport",o)),t.$on("viewportenter",a[20]),t.$on("viewportleave",a[21]),{c(){r&&r.c(),e=mt(),We(t.$$.fragment)},l(l){r&&r.l(l),e=gt(l),Xe(t.$$.fragment,l)},m(l,c){r&&r.m(l,c),pt(l,e,c),je(t,l,c),i=!0},p(l,[c]){l[15]&&!(l[15]instanceof ut)?r?(r.p(l,c),c&32768&&Le(r,1)):(r=nc(l),r.c(),Le(r,1),r.m(e.parentNode,e)):r&&(Vs(),De(r,1,1,()=>{r=null}),Hs());const u={};c&2&&(u.light=l[1]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&16384&&(u.castShadow=!!l[14]),c&32&&(u.receiveShadow=l[5]),c&64&&(u.frustumCulled=l[6]),c&128&&(u.renderOrder=l[7]),c&256&&(u.visible=l[8]),c&512&&(u.userData=l[9]),c&1024&&(u.dispose=l[10]),c&2048&&(u.viewportAware=l[11]),c&4096&&(u.color=l[12]),c&8192&&(u.intensity=l[13]),c&4194304&&(u.$$scope={dirty:c,ctx:l}),!n&&c&1&&(n=!0,u.inViewport=l[0],fn(()=>n=!1)),t.$set(u)},i(l){i||(Le(r),Le(t.$$.fragment,l),i=!0)},o(l){De(r),De(t.$$.fragment,l),i=!1},d(l){r&&r.d(l),l&&st(e),Ye(t,l)}}}function B_(a,e,t){let n,{$$slots:i={},$$scope:r}=e,{position:o=void 0}=e,{scale:s=void 0}=e,{rotation:l=void 0}=e,{receiveShadow:c=void 0}=e,{frustumCulled:u=void 0}=e,{renderOrder:f=void 0}=e,{visible:h=void 0}=e,{userData:p=void 0}=e,{dispose:v=void 0}=e,{viewportAware:g=!1}=e,{inViewport:m=!1}=e,{color:d=void 0}=e,{intensity:_=void 0}=e,{shadow:S=void 0}=e,{target:b=void 0}=e;const M=new Ag(d,_),{invalidate:x}=Kt(),D=M.target,{start:L,stop:E,started:T}=Ua(()=>{},{autostart:!1,debugFrameloopMessage:"DirectionalLight: tracking target"});St(a,T,k=>t(23,n=k));const B=k=>{k&&k instanceof ut&&!n?(t(1,M.target=k,M),L(),x("DirectionalLight: target changed")):(!k||!(k instanceof ut))&&n&&(t(1,M.target=D,M),E(),x("DirectionalLight: target changed"))},U=k=>{if(k){const{mapSize:K=[512,512],camera:{left:q=-5,bottom:z=-5,right:X=5,top:A=5,near:Y=.5,far:G=500}={},bias:H=0,radius:W=1}=k===!0?{}:k;M.shadow.mapSize.set(K[0],K[1]),t(1,M.shadow.camera.left=q,M),t(1,M.shadow.camera.top=A,M),t(1,M.shadow.camera.right=X,M),t(1,M.shadow.camera.bottom=z,M),t(1,M.shadow.camera.near=Y,M),t(1,M.shadow.camera.far=G,M),t(1,M.shadow.bias=H,M),t(1,M.shadow.radius=W,M)}x("DirectionalLight: shadow changed")};function C(k){m=k,t(0,m)}function N(k){Fe.call(this,a,k)}function R(k){Fe.call(this,a,k)}return a.$$set=k=>{"position"in k&&t(2,o=k.position),"scale"in k&&t(3,s=k.scale),"rotation"in k&&t(4,l=k.rotation),"receiveShadow"in k&&t(5,c=k.receiveShadow),"frustumCulled"in k&&t(6,u=k.frustumCulled),"renderOrder"in k&&t(7,f=k.renderOrder),"visible"in k&&t(8,h=k.visible),"userData"in k&&t(9,p=k.userData),"dispose"in k&&t(10,v=k.dispose),"viewportAware"in k&&t(11,g=k.viewportAware),"inViewport"in k&&t(0,m=k.inViewport),"color"in k&&t(12,d=k.color),"intensity"in k&&t(13,_=k.intensity),"shadow"in k&&t(14,S=k.shadow),"target"in k&&t(15,b=k.target),"$$scope"in k&&t(22,r=k.$$scope)},a.$$.update=()=>{a.$$.dirty&32768&&B(b),a.$$.dirty&16384&&U(S)},[m,M,o,s,l,c,u,f,h,p,v,g,d,_,S,b,D,T,i,C,N,R,r]}class k_ extends ft{constructor(e){super(),ht(this,e,B_,N_,dt,{position:2,scale:3,rotation:4,receiveShadow:5,frustumCulled:6,renderOrder:7,visible:8,userData:9,dispose:10,viewportAware:11,inViewport:0,color:12,intensity:13,shadow:14,target:15,light:1})}get light(){return this.$$.ctx[1]}}function G_(a){let e;const t=a[19].default,n=Nt(t,a,a[23],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&8388608)&&Bt(n,t,i,i[23],e?Gt(t,i[23],r,null):kt(i[23]),null)},i(i){e||(Le(n,i),e=!0)},o(i){De(n,i),e=!1},d(i){n&&n.d(i)}}}function z_(a){let e,t,n;function i(o){a[20](o)}let r={light:a[1],lookAt:a[5],position:a[2],scale:a[3],rotation:a[4],castShadow:a[6],receiveShadow:a[7],frustumCulled:a[9],renderOrder:a[10],visible:a[11],userData:a[12],dispose:a[13],viewportAware:a[8],color:a[15],intensity:a[14],$$slots:{default:[G_]},$$scope:{ctx:a}};return a[0]!==void 0&&(r.inViewport=a[0]),e=new iu({props:r}),sn.push(()=>un(e,"inViewport",i)),e.$on("viewportenter",a[21]),e.$on("viewportleave",a[22]),{c(){We(e.$$.fragment)},l(o){Xe(e.$$.fragment,o)},m(o,s){je(e,o,s),n=!0},p(o,[s]){const l={};s&2&&(l.light=o[1]),s&32&&(l.lookAt=o[5]),s&4&&(l.position=o[2]),s&8&&(l.scale=o[3]),s&16&&(l.rotation=o[4]),s&64&&(l.castShadow=o[6]),s&128&&(l.receiveShadow=o[7]),s&512&&(l.frustumCulled=o[9]),s&1024&&(l.renderOrder=o[10]),s&2048&&(l.visible=o[11]),s&4096&&(l.userData=o[12]),s&8192&&(l.dispose=o[13]),s&256&&(l.viewportAware=o[8]),s&32768&&(l.color=o[15]),s&16384&&(l.intensity=o[14]),s&8388608&&(l.$$scope={dirty:s,ctx:o}),!t&&s&1&&(t=!0,l.inViewport=o[0],fn(()=>t=!1)),e.$set(l)},i(o){n||(Le(e.$$.fragment,o),n=!0)},o(o){De(e.$$.fragment,o),n=!1},d(o){Ye(e,o)}}}function V_(a,e,t){let n,{$$slots:i={},$$scope:r}=e,{position:o=void 0}=e,{scale:s=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{viewportAware:h=!1}=e,{inViewport:p=!1}=e,{frustumCulled:v=void 0}=e,{renderOrder:g=void 0}=e,{visible:m=void 0}=e,{userData:d=void 0}=e,{dispose:_=void 0}=e,{intensity:S=void 0}=e,{skyColor:b=void 0}=e,{groundColor:M=void 0}=e;const x=new yg(b,M,S),{invalidate:D}=Kt(),{linear:L}=Gr();St(a,L,U=>t(18,n=U));function E(U){p=U,t(0,p)}function T(U){Fe.call(this,a,U)}function B(U){Fe.call(this,a,U)}return a.$$set=U=>{"position"in U&&t(2,o=U.position),"scale"in U&&t(3,s=U.scale),"rotation"in U&&t(4,l=U.rotation),"lookAt"in U&&t(5,c=U.lookAt),"castShadow"in U&&t(6,u=U.castShadow),"receiveShadow"in U&&t(7,f=U.receiveShadow),"viewportAware"in U&&t(8,h=U.viewportAware),"inViewport"in U&&t(0,p=U.inViewport),"frustumCulled"in U&&t(9,v=U.frustumCulled),"renderOrder"in U&&t(10,g=U.renderOrder),"visible"in U&&t(11,m=U.visible),"userData"in U&&t(12,d=U.userData),"dispose"in U&&t(13,_=U.dispose),"intensity"in U&&t(14,S=U.intensity),"skyColor"in U&&t(15,b=U.skyColor),"groundColor"in U&&t(17,M=U.groundColor),"$$scope"in U&&t(23,r=U.$$scope)},a.$$.update=()=>{a.$$.dirty&393216&&M!==void 0&&(t(1,x.groundColor=wa(M,n),x),D("HemisphereLight: props changed"))},[p,x,o,s,l,c,u,f,h,v,g,m,d,_,S,b,L,M,n,i,E,T,B,r]}class H_ extends ft{constructor(e){super(),ht(this,e,V_,z_,dt,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,viewportAware:8,inViewport:0,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,intensity:14,skyColor:15,groundColor:17,light:1})}get light(){return this.$$.ctx[1]}}function W_(a,e,t){let n,{color:i=16777215}=e,{near:r=void 0}=e,{far:o=void 0}=e;const{linear:s}=Gr();St(a,s,f=>t(5,n=f));const{scene:l,invalidate:c}=Kt(),u=new vg(wa(i,n),r,o);return l.fog=u,c("Fog: added"),Tt(()=>{l.fog=null,c("Fog: removed")}),a.$$set=f=>{"color"in f&&t(2,i=f.color),"near"in f&&t(3,r=f.near),"far"in f&&t(4,o=f.far)},a.$$.update=()=>{a.$$.dirty&60&&(i!==void 0&&t(1,u.color=wa(i,n),u),r!==void 0&&t(1,u.near=r,u),o!==void 0&&t(1,u.far=o,u),c("Fog: props changed"))},[s,u,i,r,o,n]}class X_ extends ft{constructor(e){super(),ht(this,e,W_,null,dt,{color:2,near:3,far:4,fog:1})}get fog(){return this.$$.ctx[1]}}function j_(a,e,t){let{object:n}=e,i=n,{interactive:r=!1}=e,{ignorePointer:o=!1}=e;const s=Or(),{addInteractiveObject:l,removeInteractiveObject:c,addRaycastableObject:u,removeRaycastableObject:f}=Gr(),{invalidate:h}=Kt(),p=g=>{f(g),c(g),delete ln(g).eventDispatcher},v=(g,m,d)=>{ln(g).eventDispatcher=s,m?(f(g),c(g)):(u(g),d?l(g):c(g))};return Tt(()=>{p(n),h("InteractiveObject: object removed")}),a.$$set=g=>{"object"in g&&t(0,n=g.object),"interactive"in g&&t(1,r=g.interactive),"ignorePointer"in g&&t(2,o=g.ignorePointer)},a.$$.update=()=>{a.$$.dirty&15&&(n!==i?(p(i),v(n,o,r),h("InteractiveObject: object changed"),t(3,i=n)):n===i&&(v(n,o,r),h("InteractiveObject: props changed")))},[n,r,o,i]}class ru extends ft{constructor(e){super(),ht(this,e,j_,null,dt,{object:0,interactive:1,ignorePointer:2})}}function Y_(a){let e;const t=a[16].default,n=Nt(t,a,a[27],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&134217728)&&Bt(n,t,i,i[27],e?Gt(t,i[27],r,null):kt(i[27]),null)},i(i){e||(Le(n,i),e=!0)},o(i){De(n,i),e=!1},d(i){n&&n.d(i)}}}function q_(a){let e,t,n,i,r;function o(l){a[17](l)}let s={object:a[1],lookAt:a[5],position:a[2],scale:a[3],rotation:a[4],castShadow:a[7],receiveShadow:a[8],frustumCulled:a[9],renderOrder:a[10],visible:a[11],userData:a[12],dispose:a[13],viewportAware:a[6],$$slots:{default:[Y_]},$$scope:{ctx:a}};return a[0]!==void 0&&(s.inViewport=a[0]),e=new zr({props:s}),sn.push(()=>un(e,"inViewport",o)),e.$on("viewportenter",a[18]),e.$on("viewportleave",a[19]),i=new ru({props:{object:a[1],interactive:a[14],ignorePointer:a[15]}}),i.$on("click",a[20]),i.$on("contextmenu",a[21]),i.$on("pointerup",a[22]),i.$on("pointerdown",a[23]),i.$on("pointerenter",a[24]),i.$on("pointerleave",a[25]),i.$on("pointermove",a[26]),{c(){We(e.$$.fragment),n=mt(),We(i.$$.fragment)},l(l){Xe(e.$$.fragment,l),n=gt(l),Xe(i.$$.fragment,l)},m(l,c){je(e,l,c),pt(l,n,c),je(i,l,c),r=!0},p(l,[c]){const u={};c&2&&(u.object=l[1]),c&32&&(u.lookAt=l[5]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&128&&(u.castShadow=l[7]),c&256&&(u.receiveShadow=l[8]),c&512&&(u.frustumCulled=l[9]),c&1024&&(u.renderOrder=l[10]),c&2048&&(u.visible=l[11]),c&4096&&(u.userData=l[12]),c&8192&&(u.dispose=l[13]),c&64&&(u.viewportAware=l[6]),c&134217728&&(u.$$scope={dirty:c,ctx:l}),!t&&c&1&&(t=!0,u.inViewport=l[0],fn(()=>t=!1)),e.$set(u);const f={};c&2&&(f.object=l[1]),c&16384&&(f.interactive=l[14]),c&32768&&(f.ignorePointer=l[15]),i.$set(f)},i(l){r||(Le(e.$$.fragment,l),Le(i.$$.fragment,l),r=!0)},o(l){De(e.$$.fragment,l),De(i.$$.fragment,l),r=!1},d(l){Ye(e,l),l&&st(n),Ye(i,l)}}}function K_(a,e,t){let{$$slots:n={},$$scope:i}=e,{mesh:r}=e,{position:o=void 0}=e,{scale:s=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:h=void 0}=e,{receiveShadow:p=void 0}=e,{frustumCulled:v=void 0}=e,{renderOrder:g=void 0}=e,{visible:m=void 0}=e,{userData:d=void 0}=e,{dispose:_=void 0}=e,{interactive:S=!1}=e,{ignorePointer:b=!1}=e;function M(R){f=R,t(0,f)}function x(R){Fe.call(this,a,R)}function D(R){Fe.call(this,a,R)}function L(R){Fe.call(this,a,R)}function E(R){Fe.call(this,a,R)}function T(R){Fe.call(this,a,R)}function B(R){Fe.call(this,a,R)}function U(R){Fe.call(this,a,R)}function C(R){Fe.call(this,a,R)}function N(R){Fe.call(this,a,R)}return a.$$set=R=>{"mesh"in R&&t(1,r=R.mesh),"position"in R&&t(2,o=R.position),"scale"in R&&t(3,s=R.scale),"rotation"in R&&t(4,l=R.rotation),"lookAt"in R&&t(5,c=R.lookAt),"viewportAware"in R&&t(6,u=R.viewportAware),"inViewport"in R&&t(0,f=R.inViewport),"castShadow"in R&&t(7,h=R.castShadow),"receiveShadow"in R&&t(8,p=R.receiveShadow),"frustumCulled"in R&&t(9,v=R.frustumCulled),"renderOrder"in R&&t(10,g=R.renderOrder),"visible"in R&&t(11,m=R.visible),"userData"in R&&t(12,d=R.userData),"dispose"in R&&t(13,_=R.dispose),"interactive"in R&&t(14,S=R.interactive),"ignorePointer"in R&&t(15,b=R.ignorePointer),"$$scope"in R&&t(27,i=R.$$scope)},[f,r,o,s,l,c,u,h,p,v,g,m,d,_,S,b,n,M,x,D,L,E,T,B,U,C,N,i]}class au extends ft{constructor(e){super(),ht(this,e,K_,q_,dt,{mesh:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,interactive:14,ignorePointer:15})}}function Z_(a){let e;const t=a[20].default,n=Nt(t,a,a[31],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&1)&&Bt(n,t,i,i[31],e?Gt(t,i[31],r,null):kt(i[31]),null)},i(i){e||(Le(n,i),e=!0)},o(i){De(n,i),e=!1},d(i){n&&n.d(i)}}}function J_(a){let e,t,n,i,r,o,s;e=new si({props:{dispose:a[11],object:a[15]}}),n=new si({props:{dispose:a[11],object:a[16]}});function l(u){a[21](u)}let c={mesh:a[17],position:a[1],scale:a[2],rotation:a[3],lookAt:a[14],castShadow:a[5],receiveShadow:a[6],frustumCulled:a[7],renderOrder:a[8],visible:a[9],interactive:a[12],ignorePointer:a[13],userData:a[10],dispose:a[11],viewportAware:a[4],$$slots:{default:[Z_]},$$scope:{ctx:a}};return a[0]!==void 0&&(c.inViewport=a[0]),r=new au({props:c}),sn.push(()=>un(r,"inViewport",l)),r.$on("click",a[22]),r.$on("contextmenu",a[23]),r.$on("pointerup",a[24]),r.$on("pointerdown",a[25]),r.$on("pointerenter",a[26]),r.$on("pointerleave",a[27]),r.$on("pointermove",a[28]),r.$on("viewportenter",a[29]),r.$on("viewportleave",a[30]),{c(){We(e.$$.fragment),t=mt(),We(n.$$.fragment),i=mt(),We(r.$$.fragment)},l(u){Xe(e.$$.fragment,u),t=gt(u),Xe(n.$$.fragment,u),i=gt(u),Xe(r.$$.fragment,u)},m(u,f){je(e,u,f),pt(u,t,f),je(n,u,f),pt(u,i,f),je(r,u,f),s=!0},p(u,f){const h={};f[0]&2048&&(h.dispose=u[11]),f[0]&32768&&(h.object=u[15]),e.$set(h);const p={};f[0]&2048&&(p.dispose=u[11]),f[0]&65536&&(p.object=u[16]),n.$set(p);const v={};f[0]&2&&(v.position=u[1]),f[0]&4&&(v.scale=u[2]),f[0]&8&&(v.rotation=u[3]),f[0]&16384&&(v.lookAt=u[14]),f[0]&32&&(v.castShadow=u[5]),f[0]&64&&(v.receiveShadow=u[6]),f[0]&128&&(v.frustumCulled=u[7]),f[0]&256&&(v.renderOrder=u[8]),f[0]&512&&(v.visible=u[9]),f[0]&4096&&(v.interactive=u[12]),f[0]&8192&&(v.ignorePointer=u[13]),f[0]&1024&&(v.userData=u[10]),f[0]&2048&&(v.dispose=u[11]),f[0]&16&&(v.viewportAware=u[4]),f[1]&1&&(v.$$scope={dirty:f,ctx:u}),!o&&f[0]&1&&(o=!0,v.inViewport=u[0],fn(()=>o=!1)),r.$set(v)},i(u){s||(Le(e.$$.fragment,u),Le(n.$$.fragment,u),Le(r.$$.fragment,u),s=!0)},o(u){De(e.$$.fragment,u),De(n.$$.fragment,u),De(r.$$.fragment,u),s=!1},d(u){Ye(e,u),u&&st(t),Ye(n,u),u&&st(i),Ye(r,u)}}}function Q_(a,e,t){let{$$slots:n={},$$scope:i}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:s=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:h=void 0}=e,{renderOrder:p=void 0}=e,{visible:v=void 0}=e,{userData:g=void 0}=e,{dispose:m=void 0}=e,{interactive:d=!1}=e,{ignorePointer:_=!1}=e,{lookAt:S=void 0}=e,{geometry:b}=e,{material:M}=e,x=M,D=b;const{invalidate:L}=Kt(),E=new an(b,M),T=()=>E;function B(A){c=A,t(0,c)}function U(A){Fe.call(this,a,A)}function C(A){Fe.call(this,a,A)}function N(A){Fe.call(this,a,A)}function R(A){Fe.call(this,a,A)}function k(A){Fe.call(this,a,A)}function K(A){Fe.call(this,a,A)}function q(A){Fe.call(this,a,A)}function z(A){Fe.call(this,a,A)}function X(A){Fe.call(this,a,A)}return a.$$set=A=>{"position"in A&&t(1,r=A.position),"scale"in A&&t(2,o=A.scale),"rotation"in A&&t(3,s=A.rotation),"viewportAware"in A&&t(4,l=A.viewportAware),"inViewport"in A&&t(0,c=A.inViewport),"castShadow"in A&&t(5,u=A.castShadow),"receiveShadow"in A&&t(6,f=A.receiveShadow),"frustumCulled"in A&&t(7,h=A.frustumCulled),"renderOrder"in A&&t(8,p=A.renderOrder),"visible"in A&&t(9,v=A.visible),"userData"in A&&t(10,g=A.userData),"dispose"in A&&t(11,m=A.dispose),"interactive"in A&&t(12,d=A.interactive),"ignorePointer"in A&&t(13,_=A.ignorePointer),"lookAt"in A&&t(14,S=A.lookAt),"geometry"in A&&t(15,b=A.geometry),"material"in A&&t(16,M=A.material),"$$scope"in A&&t(31,i=A.$$scope)},a.$$.update=()=>{a.$$.dirty[0]&327680&&(M!==x?(T().material=M,L("Mesh: material changed")):L("Mesh: material props changed"),t(18,x=M)),a.$$.dirty[0]&557056&&(b!==D?(T().geometry=b,L("Mesh: geometry changed")):L("Mesh: geometry props changed"),t(19,D=b))},[c,r,o,s,l,u,f,h,p,v,g,m,d,_,S,b,M,E,x,D,n,B,U,C,N,R,k,K,q,z,X,i]}class ic extends ft{constructor(e){super(),ht(this,e,Q_,J_,dt,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,interactive:12,ignorePointer:13,lookAt:14,geometry:15,material:16,mesh:17},null,[-1,-1])}get mesh(){return this.$$.ctx[17]}}const su=new ut;su.scale.set(0,0,0);su.matrix;new _t().fromArray(new Array(16).fill(0));new Ve(16777215);function $_(a){let e;const t=a[14].default,n=Nt(t,a,a[18],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&262144)&&Bt(n,t,i,i[18],e?Gt(t,i[18],r,null):kt(i[18]),null)},i(i){e||(Le(n,i),e=!0)},o(i){De(n,i),e=!1},d(i){n&&n.d(i)}}}function ev(a){let e,t,n;function i(o){a[15](o)}let r={object:a[13],position:a[1],scale:a[2],rotation:a[3],lookAt:a[4],frustumCulled:a[8],renderOrder:a[9],visible:a[10],userData:a[11],dispose:a[12],castShadow:a[6],receiveShadow:a[7],viewportAware:a[5],$$slots:{default:[$_]},$$scope:{ctx:a}};return a[0]!==void 0&&(r.inViewport=a[0]),e=new zr({props:r}),sn.push(()=>un(e,"inViewport",i)),e.$on("viewportenter",a[16]),e.$on("viewportleave",a[17]),{c(){We(e.$$.fragment)},l(o){Xe(e.$$.fragment,o)},m(o,s){je(e,o,s),n=!0},p(o,[s]){const l={};s&2&&(l.position=o[1]),s&4&&(l.scale=o[2]),s&8&&(l.rotation=o[3]),s&16&&(l.lookAt=o[4]),s&256&&(l.frustumCulled=o[8]),s&512&&(l.renderOrder=o[9]),s&1024&&(l.visible=o[10]),s&2048&&(l.userData=o[11]),s&4096&&(l.dispose=o[12]),s&64&&(l.castShadow=o[6]),s&128&&(l.receiveShadow=o[7]),s&32&&(l.viewportAware=o[5]),s&262144&&(l.$$scope={dirty:s,ctx:o}),!t&&s&1&&(t=!0,l.inViewport=o[0],fn(()=>t=!1)),e.$set(l)},i(o){n||(Le(e.$$.fragment,o),n=!0)},o(o){De(e.$$.fragment,o),n=!1},d(o){Ye(e,o)}}}function tv(a,e,t){let{$$slots:n={},$$scope:i}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:s=void 0}=e,{lookAt:l=void 0}=e,{viewportAware:c=!1}=e,{inViewport:u=!1}=e,{castShadow:f=void 0}=e,{receiveShadow:h=void 0}=e,{frustumCulled:p=void 0}=e,{renderOrder:v=void 0}=e,{visible:g=void 0}=e,{userData:m=void 0}=e,{dispose:d=void 0}=e;const _=new Cr;function S(x){u=x,t(0,u)}function b(x){Fe.call(this,a,x)}function M(x){Fe.call(this,a,x)}return a.$$set=x=>{"position"in x&&t(1,r=x.position),"scale"in x&&t(2,o=x.scale),"rotation"in x&&t(3,s=x.rotation),"lookAt"in x&&t(4,l=x.lookAt),"viewportAware"in x&&t(5,c=x.viewportAware),"inViewport"in x&&t(0,u=x.inViewport),"castShadow"in x&&t(6,f=x.castShadow),"receiveShadow"in x&&t(7,h=x.receiveShadow),"frustumCulled"in x&&t(8,p=x.frustumCulled),"renderOrder"in x&&t(9,v=x.renderOrder),"visible"in x&&t(10,g=x.visible),"userData"in x&&t(11,m=x.userData),"dispose"in x&&t(12,d=x.dispose),"$$scope"in x&&t(18,i=x.$$scope)},[u,r,o,s,l,c,f,h,p,v,g,m,d,_,n,S,b,M,i]}class nv extends ft{constructor(e){super(),ht(this,e,tv,ev,dt,{position:1,scale:2,rotation:3,lookAt:4,viewportAware:5,inViewport:0,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,group:13})}get group(){return this.$$.ctx[13]}}function iv(a){let e;const t=a[16].default,n=Nt(t,a,a[27],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&134217728)&&Bt(n,t,i,i[27],e?Gt(t,i[27],r,null):kt(i[27]),null)},i(i){e||(Le(n,i),e=!0)},o(i){De(n,i),e=!1},d(i){n&&n.d(i)}}}function rv(a){let e,t,n,i,r;function o(l){a[17](l)}let s={object:a[1],lookAt:a[5],position:a[2],scale:a[3],rotation:a[4],castShadow:a[7],receiveShadow:a[8],frustumCulled:a[9],renderOrder:a[10],visible:a[11],userData:a[12],dispose:a[13],viewportAware:a[6],$$slots:{default:[iv]},$$scope:{ctx:a}};return a[0]!==void 0&&(s.inViewport=a[0]),e=new zr({props:s}),sn.push(()=>un(e,"inViewport",o)),e.$on("viewportenter",a[18]),e.$on("viewportleave",a[19]),i=new ru({props:{object:a[1],interactive:a[14],ignorePointer:a[15]}}),i.$on("click",a[20]),i.$on("contextmenu",a[21]),i.$on("pointerup",a[22]),i.$on("pointerdown",a[23]),i.$on("pointerenter",a[24]),i.$on("pointerleave",a[25]),i.$on("pointermove",a[26]),{c(){We(e.$$.fragment),n=mt(),We(i.$$.fragment)},l(l){Xe(e.$$.fragment,l),n=gt(l),Xe(i.$$.fragment,l)},m(l,c){je(e,l,c),pt(l,n,c),je(i,l,c),r=!0},p(l,[c]){const u={};c&2&&(u.object=l[1]),c&32&&(u.lookAt=l[5]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&128&&(u.castShadow=l[7]),c&256&&(u.receiveShadow=l[8]),c&512&&(u.frustumCulled=l[9]),c&1024&&(u.renderOrder=l[10]),c&2048&&(u.visible=l[11]),c&4096&&(u.userData=l[12]),c&8192&&(u.dispose=l[13]),c&64&&(u.viewportAware=l[6]),c&134217728&&(u.$$scope={dirty:c,ctx:l}),!t&&c&1&&(t=!0,u.inViewport=l[0],fn(()=>t=!1)),e.$set(u);const f={};c&2&&(f.object=l[1]),c&16384&&(f.interactive=l[14]),c&32768&&(f.ignorePointer=l[15]),i.$set(f)},i(l){r||(Le(e.$$.fragment,l),Le(i.$$.fragment,l),r=!0)},o(l){De(e.$$.fragment,l),De(i.$$.fragment,l),r=!1},d(l){Ye(e,l),l&&st(n),Ye(i,l)}}}function av(a,e,t){let{$$slots:n={},$$scope:i}=e,{line:r}=e,{position:o=void 0}=e,{scale:s=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:h=void 0}=e,{receiveShadow:p=void 0}=e,{frustumCulled:v=void 0}=e,{renderOrder:g=void 0}=e,{visible:m=void 0}=e,{userData:d=void 0}=e,{dispose:_=void 0}=e,{interactive:S=!1}=e,{ignorePointer:b=!1}=e;function M(R){f=R,t(0,f)}function x(R){Fe.call(this,a,R)}function D(R){Fe.call(this,a,R)}function L(R){Fe.call(this,a,R)}function E(R){Fe.call(this,a,R)}function T(R){Fe.call(this,a,R)}function B(R){Fe.call(this,a,R)}function U(R){Fe.call(this,a,R)}function C(R){Fe.call(this,a,R)}function N(R){Fe.call(this,a,R)}return a.$$set=R=>{"line"in R&&t(1,r=R.line),"position"in R&&t(2,o=R.position),"scale"in R&&t(3,s=R.scale),"rotation"in R&&t(4,l=R.rotation),"lookAt"in R&&t(5,c=R.lookAt),"viewportAware"in R&&t(6,u=R.viewportAware),"inViewport"in R&&t(0,f=R.inViewport),"castShadow"in R&&t(7,h=R.castShadow),"receiveShadow"in R&&t(8,p=R.receiveShadow),"frustumCulled"in R&&t(9,v=R.frustumCulled),"renderOrder"in R&&t(10,g=R.renderOrder),"visible"in R&&t(11,m=R.visible),"userData"in R&&t(12,d=R.userData),"dispose"in R&&t(13,_=R.dispose),"interactive"in R&&t(14,S=R.interactive),"ignorePointer"in R&&t(15,b=R.ignorePointer),"$$scope"in R&&t(27,i=R.$$scope)},[f,r,o,s,l,c,u,h,p,v,g,m,d,_,S,b,n,M,x,D,L,E,T,B,U,C,N,i]}class sv extends ft{constructor(e){super(),ht(this,e,av,rv,dt,{line:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,interactive:14,ignorePointer:15})}}function ov(a){let e;const t=a[23].default,n=Nt(t,a,a[34],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&8)&&Bt(n,t,i,i[34],e?Gt(t,i[34],r,null):kt(i[34]),null)},i(i){e||(Le(n,i),e=!0)},o(i){De(n,i),e=!1},d(i){n&&n.d(i)}}}function lv(a){let e,t,n,i,r,o,s,l,c;e=new si({props:{dispose:a[11],object:a[15]}}),n=new si({props:{dispose:a[11],object:a[16]}}),r=new si({props:{dispose:!0,object:a[18]}});function u(h){a[24](h)}let f={line:a[17],position:a[1],scale:a[2],rotation:a[3],lookAt:a[14],castShadow:a[5],receiveShadow:a[6],frustumCulled:a[7],renderOrder:a[8],visible:a[9],userData:a[10],dispose:a[11],interactive:a[12],ignorePointer:a[13],viewportAware:a[4],$$slots:{default:[ov]},$$scope:{ctx:a}};return a[0]!==void 0&&(f.inViewport=a[0]),s=new sv({props:f}),sn.push(()=>un(s,"inViewport",u)),s.$on("click",a[25]),s.$on("contextmenu",a[26]),s.$on("pointerup",a[27]),s.$on("pointerdown",a[28]),s.$on("pointerenter",a[29]),s.$on("pointerleave",a[30]),s.$on("pointermove",a[31]),s.$on("viewportenter",a[32]),s.$on("viewportleave",a[33]),{c(){We(e.$$.fragment),t=mt(),We(n.$$.fragment),i=mt(),We(r.$$.fragment),o=mt(),We(s.$$.fragment)},l(h){Xe(e.$$.fragment,h),t=gt(h),Xe(n.$$.fragment,h),i=gt(h),Xe(r.$$.fragment,h),o=gt(h),Xe(s.$$.fragment,h)},m(h,p){je(e,h,p),pt(h,t,p),je(n,h,p),pt(h,i,p),je(r,h,p),pt(h,o,p),je(s,h,p),c=!0},p(h,p){const v={};p[0]&2048&&(v.dispose=h[11]),p[0]&32768&&(v.object=h[15]),e.$set(v);const g={};p[0]&2048&&(g.dispose=h[11]),p[0]&65536&&(g.object=h[16]),n.$set(g);const m={};p[0]&2&&(m.position=h[1]),p[0]&4&&(m.scale=h[2]),p[0]&8&&(m.rotation=h[3]),p[0]&16384&&(m.lookAt=h[14]),p[0]&32&&(m.castShadow=h[5]),p[0]&64&&(m.receiveShadow=h[6]),p[0]&128&&(m.frustumCulled=h[7]),p[0]&256&&(m.renderOrder=h[8]),p[0]&512&&(m.visible=h[9]),p[0]&1024&&(m.userData=h[10]),p[0]&2048&&(m.dispose=h[11]),p[0]&4096&&(m.interactive=h[12]),p[0]&8192&&(m.ignorePointer=h[13]),p[0]&16&&(m.viewportAware=h[4]),p[1]&8&&(m.$$scope={dirty:p,ctx:h}),!l&&p[0]&1&&(l=!0,m.inViewport=h[0],fn(()=>l=!1)),s.$set(m)},i(h){c||(Le(e.$$.fragment,h),Le(n.$$.fragment,h),Le(r.$$.fragment,h),Le(s.$$.fragment,h),c=!0)},o(h){De(e.$$.fragment,h),De(n.$$.fragment,h),De(r.$$.fragment,h),De(s.$$.fragment,h),c=!1},d(h){Ye(e,h),h&&st(t),Ye(n,h),h&&st(i),Ye(r,h),h&&st(o),Ye(s,h)}}}function cv(a,e,t){let{$$slots:n={},$$scope:i}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:s=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:h=void 0}=e,{renderOrder:p=void 0}=e,{visible:v=void 0}=e,{userData:g=void 0}=e,{dispose:m=void 0}=e,{interactive:d=!1}=e,{ignorePointer:_=!1}=e,{lookAt:S=void 0}=e,{geometry:b=void 0}=e,{points:M=[]}=e,{material:x}=e,D=x,L=b,E=M;const T=new hn,{invalidate:B}=Kt(),U=O=>{if(!O)return;const P=O.map(ne=>ne instanceof J?ne:new J().fromArray(ne));T.setFromPoints(P)},C=O=>!!O;b||U(M);const N=new bg(C(b)?b:T,x),R=()=>N;function k(O){c=O,t(0,c)}function K(O){Fe.call(this,a,O)}function q(O){Fe.call(this,a,O)}function z(O){Fe.call(this,a,O)}function X(O){Fe.call(this,a,O)}function A(O){Fe.call(this,a,O)}function Y(O){Fe.call(this,a,O)}function G(O){Fe.call(this,a,O)}function H(O){Fe.call(this,a,O)}function W(O){Fe.call(this,a,O)}return a.$$set=O=>{"position"in O&&t(1,r=O.position),"scale"in O&&t(2,o=O.scale),"rotation"in O&&t(3,s=O.rotation),"viewportAware"in O&&t(4,l=O.viewportAware),"inViewport"in O&&t(0,c=O.inViewport),"castShadow"in O&&t(5,u=O.castShadow),"receiveShadow"in O&&t(6,f=O.receiveShadow),"frustumCulled"in O&&t(7,h=O.frustumCulled),"renderOrder"in O&&t(8,p=O.renderOrder),"visible"in O&&t(9,v=O.visible),"userData"in O&&t(10,g=O.userData),"dispose"in O&&t(11,m=O.dispose),"interactive"in O&&t(12,d=O.interactive),"ignorePointer"in O&&t(13,_=O.ignorePointer),"lookAt"in O&&t(14,S=O.lookAt),"geometry"in O&&t(15,b=O.geometry),"points"in O&&t(19,M=O.points),"material"in O&&t(16,x=O.material),"$$scope"in O&&t(34,i=O.$$scope)},a.$$.update=()=>{a.$$.dirty[0]&1114112&&(x!==D?(R().material=x,B("Line: material changed")):B("Line: material props changed"),t(20,D=x)),a.$$.dirty[0]&2129920&&(b!==L?C(b)&&(R().geometry=b,B("Line: geometry changed")):C(b)&&B("Line: geometry props changed"),t(21,L=b)),a.$$.dirty[0]&4751360&&E!==M&&(b||(U(M),R().geometry=T),t(22,E=M))},[c,r,o,s,l,u,f,h,p,v,g,m,d,_,S,b,x,N,T,M,D,L,E,n,k,K,q,z,X,A,Y,G,H,W,i]}class uv extends ft{constructor(e){super(),ht(this,e,cv,lv,dt,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,interactive:12,ignorePointer:13,lookAt:14,geometry:15,points:19,material:16,line:17},null,[-1,-1])}get line(){return this.$$.ctx[17]}}function fv(a){return console.error("The component <T> can only be used in conjunction with the custom preprocessor."),[]}class rc extends ft{constructor(e){super(),ht(this,e,fv,null,dt,{})}}new Proxy(rc,{get(a,e){return a[e]||rc}});C_(Gl,()=>new Gl(Kc));const no=Math.PI/180;function Ma(a,e){return a+Math.floor(Math.random()*(e-a+1))}const hv=.5*(Math.sqrt(3)-1),Tr=(3-Math.sqrt(3))/6,ac=a=>Math.floor(a)|0,sc=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function oc(a=Math.random){const e=dv(a),t=new Float64Array(e).map(i=>sc[i%12*2]),n=new Float64Array(e).map(i=>sc[i%12*2+1]);return function(r,o){let s=0,l=0,c=0;const u=(r+o)*hv,f=ac(r+u),h=ac(o+u),p=(f+h)*Tr,v=f-p,g=h-p,m=r-v,d=o-g;let _,S;m>d?(_=1,S=0):(_=0,S=1);const b=m-_+Tr,M=d-S+Tr,x=m-1+2*Tr,D=d-1+2*Tr,L=f&255,E=h&255;let T=.5-m*m-d*d;if(T>=0){const C=L+e[E],N=t[C],R=n[C];T*=T,s=T*T*(N*m+R*d)}let B=.5-b*b-M*M;if(B>=0){const C=L+_+e[E+S],N=t[C],R=n[C];B*=B,l=B*B*(N*b+R*M)}let U=.5-x*x-D*D;if(U>=0){const C=L+1+e[E+1],N=t[C],R=n[C];U*=U,c=U*U*(N*x+R*D)}return 70*(s+l+c)}}function dv(a){const t=new Uint8Array(512);for(let n=0;n<512/2;n++)t[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(a()*(256-n)),r=t[n];t[n]=t[i],t[i]=r}for(let n=256;n<512;n++)t[n]=t[n-256];return t}new J;new J;new J;function io(){var a=0,e=[],t,n=0,i=0;function r(d,_){var S=io();function b(){var M=a>0?d:_;if(g(M))try{var x=M(t);x===S&&v();var D=h(x);D?D.call(x,S.resolve,S.reject):S.resolve(x)}catch(L){S.reject(L)}else S[a>0?"resolve":"reject"](t)}return e.push(b),a&&c(),S}var o=p(function(d){i||l(1,d)}),s=p(function(d){i||l(-1,d)});function l(d,_){i++;var S=0;try{_===m&&v();var b=d>0&&h(_);b?b.call(_,p(function(M){S++,l(1,M)}),p(function(M){S++,l(-1,M)})):(a=d,t=_,c())}catch(M){!a&&!S&&l(-1,M)}}function c(){n||(setTimeout(u,0),n=1)}function u(){var d=e;n=0,e=[],d.forEach(f)}function f(d){d()}function h(d){var _=d&&(g(d)||typeof d=="object")&&d.then;return g(_)&&_}function p(d){var _=0;return function(){for(var S=[],b=arguments.length;b--;)S[b]=arguments[b];_++||d.apply(this,S)}}function v(){throw new TypeError("Chaining cycle detected")}var g=function(d){return typeof d=="function"},m={then:r,resolve:o,reject:s};return m}function ou(){var a,e,t=new Promise(function(n,i){a=n,e=i});return{then:t.then.bind(t),resolve:a,reject:e}}io.all=ou.all=function(a){var e=0,t=[],n=qn();return a.length===0?n.resolve([]):a.forEach(function(i,r){var o=qn();o.resolve(i),o.then(function(s){e++,t[r]=s,e===a.length&&n.resolve(t)},n.reject)}),n};var qn=typeof Promise=="function"?ou:io;function pv(){var a=Object.create(null);function e(i,r){var o=i.id,s=i.name,l=i.dependencies;l===void 0&&(l=[]);var c=i.init;c===void 0&&(c=function(){});var u=i.getTransferables;if(u===void 0&&(u=null),!a[o])try{l=l.map(function(h){return h&&h.isWorkerModule&&(e(h,function(p){if(p instanceof Error)throw p}),h=a[h.id].value),h}),c=n("<"+s+">.init",c),u&&(u=n("<"+s+">.getTransferables",u));var f=null;typeof c=="function"?f=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[o]={id:o,value:f,getTransferables:u},r(f)}catch(h){h&&h.noLog||console.error(h),r(h)}}function t(i,r){var o,s=i.id,l=i.args;(!a[s]||typeof a[s].value!="function")&&r(new Error("Worker module "+s+": not found or its 'init' did not return a function"));try{var c=(o=a[s]).value.apply(o,l);c&&typeof c.then=="function"?c.then(u,function(f){return r(f instanceof Error?f:new Error(""+f))}):u(c)}catch(f){r(f)}function u(f){try{var h=a[s].getTransferables&&a[s].getTransferables(f);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),r(f,h)}catch(p){console.error(p),r(p)}}}function n(i,r){var o=void 0;self.troikaDefine=function(l){return o=l};var s=URL.createObjectURL(new Blob(["/** "+i.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(s)}catch(l){console.error(l)}return URL.revokeObjectURL(s),delete self.troikaDefine,o}self.addEventListener("message",function(i){var r=i.data,o=r.messageId,s=r.action,l=r.data;try{s==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:{isCallable:typeof c=="function"}})}),s==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:o,success:!1,error:c.message}):postMessage({messageId:o,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:o,success:!1,error:c.stack})}})}function mv(a){var e=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return e._getInitResult().then(function(i){if(typeof i=="function")return i.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,n=a.init;t=Array.isArray(t)?t.map(function(r){return r&&r._getInitResult?r._getInitResult():r}):[];var i=qn.all(t).then(function(r){return n.apply(null,r)});return e._getInitResult=function(){return i},i},e}var lu=function(){var a=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return lu=function(){return a},a},gv=0,_v=0,As=!1,Pr=Object.create(null),Lr=Object.create(null),Bs=Object.create(null);function lr(a){if((!a||typeof a.init!="function")&&!As)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,n=a.getTransferables,i=a.workerId;if(!lu())return mv(a);i==null&&(i="#default");var r="workerModule"+ ++gv,o=a.name||r,s=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(As=!0,c=lr({workerId:i,name:"<"+o+"> function dependency: "+c.name,init:`function(){return (
`+Ea(c)+`
)}`}),As=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!s){s=lc(i,"registerModule",l.workerModuleData);var f=function(){s=null,Lr[i].delete(f)};(Lr[i]||(Lr[i]=new Set)).add(f)}return s.then(function(h){var p=h.isCallable;if(p)return lc(i,"callModule",{id:r,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:r,name:o,dependencies:e,init:Ea(t),getTransferables:n&&Ea(n)},l}function vv(a){Lr[a]&&Lr[a].forEach(function(e){e()}),Pr[a]&&(Pr[a].terminate(),delete Pr[a])}function Ea(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function Sv(a){var e=Pr[a];if(!e){var t=Ea(pv);e=Pr[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(n){var i=n.data,r=i.messageId,o=Bs[r];if(!o)throw new Error("WorkerModule response with empty or unknown messageId");delete Bs[r],o(i)}}return e}function lc(a,e,t){var n=qn(),i=++_v;return Bs[i]=function(r){r.success?n.resolve(r.result):n.reject(new Error("Error in worker "+e+" call: "+r.error))},Sv(a).postMessage({messageId:i,action:e,data:t}),n}var Mv=lr({name:"Thenable",dependencies:[qn],init:function(a){return a}});function cu(){var a=function(e){function t(z,X,A,Y,G,H,W,O){var P=1-W;O.x=P*P*z+2*P*W*A+W*W*G,O.y=P*P*X+2*P*W*Y+W*W*H}function n(z,X,A,Y,G,H,W,O,P,ne){var oe=1-P;ne.x=oe*oe*oe*z+3*oe*oe*P*A+3*oe*P*P*G+P*P*P*W,ne.y=oe*oe*oe*X+3*oe*oe*P*Y+3*oe*P*P*H+P*P*P*O}function i(z,X){for(var A=/([MLQCZ])([^MLQCZ]*)/g,Y,G,H,W,O;Y=A.exec(z);){var P=Y[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(ne){return parseFloat(ne)});switch(Y[1]){case"M":W=G=P[0],O=H=P[1];break;case"L":(P[0]!==W||P[1]!==O)&&X("L",W,O,W=P[0],O=P[1]);break;case"Q":{X("Q",W,O,W=P[2],O=P[3],P[0],P[1]);break}case"C":{X("C",W,O,W=P[4],O=P[5],P[0],P[1],P[2],P[3]);break}case"Z":(W!==G||O!==H)&&X("L",W,O,G,H);break}}}function r(z,X,A){A===void 0&&(A=16);var Y={x:0,y:0};i(z,function(G,H,W,O,P,ne,oe,re,le){switch(G){case"L":X(H,W,O,P);break;case"Q":{for(var fe=H,ve=W,Ee=1;Ee<A;Ee++)t(H,W,ne,oe,O,P,Ee/(A-1),Y),X(fe,ve,Y.x,Y.y),fe=Y.x,ve=Y.y;break}case"C":{for(var xe=H,ye=W,Ie=1;Ie<A;Ie++)n(H,W,ne,oe,re,le,O,P,Ie/(A-1),Y),X(xe,ye,Y.x,Y.y),xe=Y.x,ye=Y.y;break}}})}var o="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",s="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function u(z,X){var A=z.getContext?z.getContext("webgl",c):z,Y=l.get(A);if(!Y){let oe=function(xe){var ye=H[xe];if(!ye&&(ye=H[xe]=A.getExtension(xe),!ye))throw new Error(xe+" not supported");return ye},re=function(xe,ye){var Ie=A.createShader(ye);return A.shaderSource(Ie,xe),A.compileShader(Ie),Ie},le=function(xe,ye,Ie,ue){if(!W[xe]){var Me={},Se={},pe=A.createProgram();A.attachShader(pe,re(ye,A.VERTEX_SHADER)),A.attachShader(pe,re(Ie,A.FRAGMENT_SHADER)),A.linkProgram(pe),W[xe]={program:pe,transaction:function(w){A.useProgram(pe),w({setUniform:function($,ae){for(var me=[],y=arguments.length-2;y-- >0;)me[y]=arguments[y+2];var ee=Se[ae]||(Se[ae]=A.getUniformLocation(pe,ae));A["uniform"+$].apply(A,[ee].concat(me))},setAttribute:function($,ae,me,y,ee){var Z=Me[$];Z||(Z=Me[$]={buf:A.createBuffer(),loc:A.getAttribLocation(pe,$),data:null}),A.bindBuffer(A.ARRAY_BUFFER,Z.buf),A.vertexAttribPointer(Z.loc,ae,A.FLOAT,!1,0,0),A.enableVertexAttribArray(Z.loc),G?A.vertexAttribDivisor(Z.loc,y):oe("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(Z.loc,y),ee!==Z.data&&(A.bufferData(A.ARRAY_BUFFER,ee,me),Z.data=ee)}})}}}W[xe].transaction(ue)},fe=function(xe,ye){P++;try{A.activeTexture(A.TEXTURE0+P);var Ie=O[xe];Ie||(Ie=O[xe]=A.createTexture(),A.bindTexture(A.TEXTURE_2D,Ie),A.texParameteri(A.TEXTURE_2D,A.TEXTURE_MIN_FILTER,A.NEAREST),A.texParameteri(A.TEXTURE_2D,A.TEXTURE_MAG_FILTER,A.NEAREST)),A.bindTexture(A.TEXTURE_2D,Ie),ye(Ie,P)}finally{P--}},ve=function(xe,ye,Ie){var ue=A.createFramebuffer();ne.push(ue),A.bindFramebuffer(A.FRAMEBUFFER,ue),A.activeTexture(A.TEXTURE0+ye),A.bindTexture(A.TEXTURE_2D,xe),A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,xe,0);try{Ie(ue)}finally{A.deleteFramebuffer(ue),A.bindFramebuffer(A.FRAMEBUFFER,ne[--ne.length-1]||null)}},Ee=function(){H={},W={},O={},P=-1,ne.length=0};var G=typeof WebGL2RenderingContext<"u"&&A instanceof WebGL2RenderingContext,H={},W={},O={},P=-1,ne=[];A.canvas.addEventListener("webglcontextlost",function(xe){Ee(),xe.preventDefault()},!1),l.set(A,Y={gl:A,isWebGL2:G,getExtension:oe,withProgram:le,withTexture:fe,withTextureFramebuffer:ve,handleContextLoss:Ee})}X(Y)}function f(z,X,A,Y,G,H,W,O){W===void 0&&(W=15),O===void 0&&(O=null),u(z,function(P){var ne=P.gl,oe=P.withProgram,re=P.withTexture;re("copy",function(le,fe){ne.texImage2D(ne.TEXTURE_2D,0,ne.RGBA,G,H,0,ne.RGBA,ne.UNSIGNED_BYTE,X),oe("copy",o,s,function(ve){var Ee=ve.setUniform,xe=ve.setAttribute;xe("aUV",2,ne.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Ee("1i","image",fe),ne.bindFramebuffer(ne.FRAMEBUFFER,O||null),ne.disable(ne.BLEND),ne.colorMask(W&8,W&4,W&2,W&1),ne.viewport(A,Y,G,H),ne.scissor(A,Y,G,H),ne.drawArrays(ne.TRIANGLES,0,3)})})})}function h(z,X,A){var Y=z.width,G=z.height;u(z,function(H){var W=H.gl,O=new Uint8Array(Y*G*4);W.readPixels(0,0,Y,G,W.RGBA,W.UNSIGNED_BYTE,O),z.width=X,z.height=A,f(W,O,0,0,Y,G)})}var p=Object.freeze({__proto__:null,withWebGLContext:u,renderImageData:f,resizeWebGLCanvasWithoutClearing:h});function v(z,X,A,Y,G,H){H===void 0&&(H=1);var W=new Uint8Array(z*X),O=Y[2]-Y[0],P=Y[3]-Y[1],ne=[];r(A,function(xe,ye,Ie,ue){ne.push({x1:xe,y1:ye,x2:Ie,y2:ue,minX:Math.min(xe,Ie),minY:Math.min(ye,ue),maxX:Math.max(xe,Ie),maxY:Math.max(ye,ue)})}),ne.sort(function(xe,ye){return xe.maxX-ye.maxX});for(var oe=0;oe<z;oe++)for(var re=0;re<X;re++){var le=ve(Y[0]+O*(oe+.5)/z,Y[1]+P*(re+.5)/X),fe=Math.pow(1-Math.abs(le)/G,H)/2;le<0&&(fe=1-fe),fe=Math.max(0,Math.min(255,Math.round(fe*255))),W[re*z+oe]=fe}return W;function ve(xe,ye){for(var Ie=1/0,ue=1/0,Me=ne.length;Me--;){var Se=ne[Me];if(Se.maxX+ue<=xe)break;if(xe+ue>Se.minX&&ye-ue<Se.maxY&&ye+ue>Se.minY){var pe=d(xe,ye,Se.x1,Se.y1,Se.x2,Se.y2);pe<Ie&&(Ie=pe,ue=Math.sqrt(Ie))}}return Ee(xe,ye)&&(ue=-ue),ue}function Ee(xe,ye){for(var Ie=0,ue=ne.length;ue--;){var Me=ne[ue];if(Me.maxX<=xe)break;var Se=Me.y1>ye!=Me.y2>ye&&xe<(Me.x2-Me.x1)*(ye-Me.y1)/(Me.y2-Me.y1)+Me.x1;Se&&(Ie+=Me.y1<Me.y2?1:-1)}return Ie!==0}}function g(z,X,A,Y,G,H,W,O,P,ne){H===void 0&&(H=1),O===void 0&&(O=0),P===void 0&&(P=0),ne===void 0&&(ne=0),m(z,X,A,Y,G,H,W,null,O,P,ne)}function m(z,X,A,Y,G,H,W,O,P,ne,oe){H===void 0&&(H=1),P===void 0&&(P=0),ne===void 0&&(ne=0),oe===void 0&&(oe=0);for(var re=v(z,X,A,Y,G,H),le=new Uint8Array(re.length*4),fe=0;fe<re.length;fe++)le[fe*4+oe]=re[fe];f(W,le,P,ne,z,X,1<<3-oe,O)}function d(z,X,A,Y,G,H){var W=G-A,O=H-Y,P=W*W+O*O,ne=P?Math.max(0,Math.min(1,((z-A)*W+(X-Y)*O)/P)):0,oe=z-(A+ne*W),re=X-(Y+ne*O);return oe*oe+re*re}var _=Object.freeze({__proto__:null,generate:v,generateIntoCanvas:g,generateIntoFramebuffer:m}),S="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",b="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",M="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",x=new Float32Array([0,0,2,0,0,2]),D=null,L=!1,E={},T=new WeakMap;function B(z){if(!L&&!R(z))throw new Error("WebGL generation not supported")}function U(z,X,A,Y,G,H,W){if(H===void 0&&(H=1),W===void 0&&(W=null),!W&&(W=D,!W)){var O=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!O)throw new Error("OffscreenCanvas or DOM canvas not supported");W=D=O.getContext("webgl",{depth:!1})}B(W);var P=new Uint8Array(z*X*4);u(W,function(le){var fe=le.gl,ve=le.withTexture,Ee=le.withTextureFramebuffer;ve("readable",function(xe,ye){fe.texImage2D(fe.TEXTURE_2D,0,fe.RGBA,z,X,0,fe.RGBA,fe.UNSIGNED_BYTE,null),Ee(xe,ye,function(Ie){N(z,X,A,Y,G,H,fe,Ie,0,0,0),fe.readPixels(0,0,z,X,fe.RGBA,fe.UNSIGNED_BYTE,P)})})});for(var ne=new Uint8Array(z*X),oe=0,re=0;oe<P.length;oe+=4)ne[re++]=P[oe];return ne}function C(z,X,A,Y,G,H,W,O,P,ne){H===void 0&&(H=1),O===void 0&&(O=0),P===void 0&&(P=0),ne===void 0&&(ne=0),N(z,X,A,Y,G,H,W,null,O,P,ne)}function N(z,X,A,Y,G,H,W,O,P,ne,oe){H===void 0&&(H=1),P===void 0&&(P=0),ne===void 0&&(ne=0),oe===void 0&&(oe=0),B(W);var re=[];r(A,function(le,fe,ve,Ee){re.push(le,fe,ve,Ee)}),re=new Float32Array(re),u(W,function(le){var fe=le.gl,ve=le.isWebGL2,Ee=le.getExtension,xe=le.withProgram,ye=le.withTexture,Ie=le.withTextureFramebuffer,ue=le.handleContextLoss;if(ye("rawDistances",function(Me,Se){(z!==Me._lastWidth||X!==Me._lastHeight)&&fe.texImage2D(fe.TEXTURE_2D,0,fe.RGBA,Me._lastWidth=z,Me._lastHeight=X,0,fe.RGBA,fe.UNSIGNED_BYTE,null),xe("main",S,b,function(pe){var I=pe.setAttribute,w=pe.setUniform,j=!ve&&Ee("ANGLE_instanced_arrays"),$=!ve&&Ee("EXT_blend_minmax");I("aUV",2,fe.STATIC_DRAW,0,x),I("aLineSegment",4,fe.DYNAMIC_DRAW,1,re),w.apply(void 0,["4f","uGlyphBounds"].concat(Y)),w("1f","uMaxDistance",G),w("1f","uExponent",H),Ie(Me,Se,function(ae){fe.enable(fe.BLEND),fe.colorMask(!0,!0,!0,!0),fe.viewport(0,0,z,X),fe.scissor(0,0,z,X),fe.blendFunc(fe.ONE,fe.ONE),fe.blendEquationSeparate(fe.FUNC_ADD,ve?fe.MAX:$.MAX_EXT),fe.clear(fe.COLOR_BUFFER_BIT),ve?fe.drawArraysInstanced(fe.TRIANGLES,0,3,re.length/4):j.drawArraysInstancedANGLE(fe.TRIANGLES,0,3,re.length/4)})}),xe("post",o,M,function(pe){pe.setAttribute("aUV",2,fe.STATIC_DRAW,0,x),pe.setUniform("1i","tex",Se),fe.bindFramebuffer(fe.FRAMEBUFFER,O),fe.disable(fe.BLEND),fe.colorMask(oe===0,oe===1,oe===2,oe===3),fe.viewport(P,ne,z,X),fe.scissor(P,ne,z,X),fe.drawArrays(fe.TRIANGLES,0,3)})}),fe.isContextLost())throw ue(),new Error("webgl context lost")})}function R(z){var X=!z||z===D?E:z.canvas||z,A=T.get(X);if(A===void 0){L=!0;var Y=null;try{var G=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],H=U(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,z);A=H&&G.length===H.length&&H.every(function(W,O){return W===G[O]}),A||(Y="bad trial run results",console.info(G,H))}catch(W){A=!1,Y=W.message}Y&&console.warn("WebGL SDF generation not supported:",Y),L=!1,T.set(X,A)}return A}var k=Object.freeze({__proto__:null,generate:U,generateIntoCanvas:C,generateIntoFramebuffer:N,isSupported:R});function K(z,X,A,Y,G,H){G===void 0&&(G=Math.max(Y[2]-Y[0],Y[3]-Y[1])/2),H===void 0&&(H=1);try{return U.apply(k,arguments)}catch(W){return console.info("WebGL SDF generation failed, falling back to JS",W),v.apply(_,arguments)}}function q(z,X,A,Y,G,H,W,O,P,ne){G===void 0&&(G=Math.max(Y[2]-Y[0],Y[3]-Y[1])/2),H===void 0&&(H=1),O===void 0&&(O=0),P===void 0&&(P=0),ne===void 0&&(ne=0);try{return C.apply(k,arguments)}catch(oe){return console.info("WebGL SDF generation failed, falling back to JS",oe),g.apply(_,arguments)}}return e.forEachPathCommand=i,e.generate=K,e.generateIntoCanvas=q,e.javascript=_,e.pathToLineSegments=r,e.webgl=k,e.webglUtils=p,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}function bv(){var a=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},n={},i={};n.L=1,i[1]="L",Object.keys(t).forEach(function(ue,Me){n[ue]=1<<Me+1,i[n[ue]]=ue}),Object.freeze(n);var r=n.LRI|n.RLI|n.FSI,o=n.L|n.R|n.AL,s=n.B|n.S|n.WS|n.ON|n.FSI|n.LRI|n.RLI|n.PDI,l=n.BN|n.RLE|n.LRE|n.RLO|n.LRO|n.PDF,c=n.S|n.WS|n.B|r|n.PDI|l,u=null;function f(){if(!u){u=new Map;var ue=function(Se){if(t.hasOwnProperty(Se)){var pe=0;t[Se].split(",").forEach(function(I){var w=I.split("+"),j=w[0],$=w[1];j=parseInt(j,36),$=$?parseInt($,36):0,u.set(pe+=j,n[Se]);for(var ae=0;ae<$;ae++)u.set(++pe,n[Se])})}};for(var Me in t)ue(Me)}}function h(ue){return f(),u.get(ue.codePointAt(0))||n.L}function p(ue){return i[h(ue)]}var v={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function g(ue,Me){var Se=36,pe=0,I=new Map,w=Me&&new Map,j;return ue.split(",").forEach(function $(ae){if(ae.indexOf("+")!==-1)for(var me=+ae;me--;)$(j);else{j=ae;var y=ae.split(">"),ee=y[0],Z=y[1];ee=String.fromCodePoint(pe+=parseInt(ee,Se)),Z=String.fromCodePoint(pe+=parseInt(Z,Se)),I.set(ee,Z),Me&&w.set(Z,ee)}}),{map:I,reverseMap:w}}var m,d,_;function S(){if(!m){var ue=g(v.pairs,!0),Me=ue.map,Se=ue.reverseMap;m=Me,d=Se,_=g(v.canonical,!1).map}}function b(ue){return S(),m.get(ue)||null}function M(ue){return S(),d.get(ue)||null}function x(ue){return S(),_.get(ue)||null}var D=n.L,L=n.R,E=n.EN,T=n.ES,B=n.ET,U=n.AN,C=n.CS,N=n.B,R=n.S,k=n.ON,K=n.BN,q=n.NSM,z=n.AL,X=n.LRO,A=n.RLO,Y=n.LRE,G=n.RLE,H=n.PDF,W=n.LRI,O=n.RLI,P=n.FSI,ne=n.PDI;function oe(ue,Me){for(var Se=125,pe=new Uint32Array(ue.length),I=0;I<ue.length;I++)pe[I]=h(ue[I]);var w=new Map;function j(Dt,mn){var Zt=pe[Dt];pe[Dt]=mn,w.set(Zt,w.get(Zt)-1),Zt&s&&w.set(s,w.get(s)-1),w.set(mn,(w.get(mn)||0)+1),mn&s&&w.set(s,(w.get(s)||0)+1)}for(var $=new Uint8Array(ue.length),ae=new Map,me=[],y=null,ee=0;ee<ue.length;ee++)y||me.push(y={start:ee,end:ue.length-1,level:Me==="rtl"?1:Me==="ltr"?0:go(ee,!1)}),pe[ee]&N&&(y.end=ee,y=null);for(var Z=G|Y|A|X|r|ne|H|N,_e=function(Dt){return Dt+(Dt&1?1:2)},be=function(Dt){return Dt+(Dt&1?2:1)},we=0;we<me.length;we++){y=me[we];var he=[{_level:y.level,_override:0,_isolate:0}],de=void 0,Re=0,Pe=0,nt=0;w.clear();for(var V=y.start;V<=y.end;V++){var ie=pe[V];if(de=he[he.length-1],w.set(ie,(w.get(ie)||0)+1),ie&s&&w.set(s,(w.get(s)||0)+1),ie&Z)if(ie&(G|Y)){$[V]=de._level;var ge=(ie===G?be:_e)(de._level);ge<=Se&&!Re&&!Pe?he.push({_level:ge,_override:0,_isolate:0}):Re||Pe++}else if(ie&(A|X)){$[V]=de._level;var Ce=(ie===A?be:_e)(de._level);Ce<=Se&&!Re&&!Pe?he.push({_level:Ce,_override:ie&A?L:D,_isolate:0}):Re||Pe++}else if(ie&r){ie&P&&(ie=go(V+1,!0)===1?O:W),$[V]=de._level,de._override&&j(V,de._override);var Ae=(ie===O?be:_e)(de._level);Ae<=Se&&Re===0&&Pe===0?(nt++,he.push({_level:Ae,_override:0,_isolate:1,_isolInitIndex:V})):Re++}else if(ie&ne){if(Re>0)Re--;else if(nt>0){for(Pe=0;!he[he.length-1]._isolate;)he.pop();var rt=he[he.length-1]._isolInitIndex;rt!=null&&(ae.set(rt,V),ae.set(V,rt)),he.pop(),nt--}de=he[he.length-1],$[V]=de._level,de._override&&j(V,de._override)}else ie&H?(Re===0&&(Pe>0?Pe--:!de._isolate&&he.length>1&&(he.pop(),de=he[he.length-1])),$[V]=de._level):ie&N&&($[V]=y.level);else $[V]=de._level,de._override&&ie!==K&&j(V,de._override)}for(var Ne=[],ke=null,ot=y.start;ot<=y.end;ot++){var it=pe[ot];if(!(it&l)){var $e=$[ot],lt=it&r,zt=it===ne;ke&&$e===ke._level?(ke._end=ot,ke._endsWithIsolInit=lt):Ne.push(ke={_start:ot,_end:ot,_level:$e,_startsWithPDI:zt,_endsWithIsolInit:lt})}}for(var Mt=[],bt=0;bt<Ne.length;bt++){var Vt=Ne[bt];if(!Vt._startsWithPDI||Vt._startsWithPDI&&!ae.has(Vt._start)){for(var wn=[ke=Vt],F=void 0;ke&&ke._endsWithIsolInit&&(F=ae.get(ke._end))!=null;)for(var te=bt+1;te<Ne.length;te++)if(Ne[te]._start===F){wn.push(ke=Ne[te]);break}for(var se=[],Q=0;Q<wn.length;Q++)for(var ce=wn[Q],Oe=ce._start;Oe<=ce._end;Oe++)se.push(Oe);for(var Be=$[se[0]],Ge=y.level,He=se[0]-1;He>=0;He--)if(!(pe[He]&l)){Ge=$[He];break}var qe=se[se.length-1],Je=$[qe],Qe=y.level;if(!(pe[qe]&r)){for(var at=qe+1;at<=y.end;at++)if(!(pe[at]&l)){Qe=$[at];break}}Mt.push({_seqIndices:se,_sosType:Math.max(Ge,Be)%2?L:D,_eosType:Math.max(Qe,Je)%2?L:D})}}for(var wt=0;wt<Mt.length;wt++){var Ht=Mt[wt],Ue=Ht._seqIndices,ct=Ht._sosType,et=Ht._eosType;if(w.get(q))for(var Kn=0;Kn<Ue.length;Kn++){var vt=Ue[Kn];if(pe[vt]&q){for(var dn=ct,li=Kn-1;li>=0;li--)if(!(pe[Ue[li]]&l)){dn=pe[Ue[li]];break}j(vt,dn&(r|ne)?k:dn)}}if(w.get(E))for(var Tn=0;Tn<Ue.length;Tn++){var wi=Ue[Tn];if(pe[wi]&E)for(var xt=Tn-1;xt>=-1;xt--){var An=xt===-1?ct:pe[Ue[xt]];if(An&o){An===z&&j(wi,U);break}}}if(w.get(z))for(var ci=0;ci<Ue.length;ci++){var Lt=Ue[ci];pe[Lt]&z&&j(Lt,L)}if(w.get(T)||w.get(C))for(var In=1;In<Ue.length-1;In++){var cr=Ue[In];if(pe[cr]&(T|C)){for(var Fn=0,Fa=0,Oa=In-1;Oa>=0&&(Fn=pe[Ue[Oa]],!!(Fn&l));Oa--);for(var Na=In+1;Na<Ue.length&&(Fa=pe[Ue[Na]],!!(Fa&l));Na++);Fn===Fa&&(pe[cr]===T?Fn===E:Fn&(E|U))&&j(cr,Fn)}}if(w.get(E))for(var ur=0;ur<Ue.length;ur++){var du=Ue[ur];if(pe[du]&E){for(var Vr=ur-1;Vr>=0&&pe[Ue[Vr]]&(B|l);Vr--)j(Ue[Vr],E);for(var Hr=ur+1;Hr<Ue.length&&pe[Ue[Hr]]&(B|l);Hr++)j(Ue[Hr],E)}}if(w.get(B)||w.get(T)||w.get(C))for(var fr=0;fr<Ue.length;fr++){var ro=Ue[fr];if(pe[ro]&(B|T|C)){j(ro,k);for(var Wr=fr-1;Wr>=0&&pe[Ue[Wr]]&l;Wr--)j(Ue[Wr],k);for(var Xr=fr+1;Xr<Ue.length&&pe[Ue[Xr]]&l;Xr++)j(Ue[Xr],k)}}if(w.get(E))for(var Ba=0,ao=ct;Ba<Ue.length;Ba++){var so=Ue[Ba],ka=pe[so];ka&E?ao===D&&j(so,D):ka&o&&(ao=ka)}if(w.get(s)){var hr=L|E|U,oo=hr|D,jr=[];{for(var Ti=[],Ai=0;Ai<Ue.length;Ai++)if(pe[Ue[Ai]]&s){var dr=ue[Ue[Ai]],lo=void 0;if(b(dr)!==null)if(Ti.length<63)Ti.push({char:dr,seqIndex:Ai});else break;else if((lo=M(dr))!==null)for(var pr=Ti.length-1;pr>=0;pr--){var Ga=Ti[pr].char;if(Ga===lo||Ga===M(x(dr))||b(x(Ga))===dr){jr.push([Ti[pr].seqIndex,Ai]),Ti.length=pr;break}}}jr.sort(function(Dt,mn){return Dt[0]-mn[0]})}for(var za=0;za<jr.length;za++){for(var co=jr[za],mr=co[0],Yr=co[1],uo=!1,pn=0,Va=mr+1;Va<Yr;Va++){var Ha=Ue[Va];if(pe[Ha]&oo){uo=!0;var fo=pe[Ha]&hr?L:D;if(fo===Ci(Ha)){pn=fo;break}}}if(uo&&!pn){pn=ct;for(var Wa=mr-1;Wa>=0;Wa--){var qr=Ue[Wa];if(pe[qr]&oo){var ho=pe[qr]&hr?L:D;ho!==Ci(qr)?pn=ho:pn=Ci(qr);break}}}if(pn){if(pe[Ue[mr]]=pe[Ue[Yr]]=pn,pn!==Ci(Ue[mr])){for(var gr=mr+1;gr<Ue.length;gr++)if(!(pe[Ue[gr]]&l)){h(ue[Ue[gr]])&q&&(pe[Ue[gr]]=pn);break}}if(pn!==Ci(Ue[Yr])){for(var _r=Yr+1;_r<Ue.length;_r++)if(!(pe[Ue[_r]]&l)){h(ue[Ue[_r]])&q&&(pe[Ue[_r]]=pn);break}}}}for(var Zn=0;Zn<Ue.length;Zn++)if(pe[Ue[Zn]]&s){for(var po=Zn,Xa=Zn,ja=ct,vr=Zn-1;vr>=0;vr--)if(pe[Ue[vr]]&l)po=vr;else{ja=pe[Ue[vr]]&hr?L:D;break}for(var mo=et,Sr=Zn+1;Sr<Ue.length;Sr++)if(pe[Ue[Sr]]&(s|l))Xa=Sr;else{mo=pe[Ue[Sr]]&hr?L:D;break}for(var Kr=po;Kr<=Xa;Kr++)pe[Ue[Kr]]=ja===mo?ja:Ci(Ue[Kr]);Zn=Xa}}}for(var Qt=y.start;Qt<=y.end;Qt++){var pu=$[Qt],Zr=pe[Qt];if(pu&1?Zr&(D|E|U)&&$[Qt]++:Zr&L?$[Qt]++:Zr&(U|E)&&($[Qt]+=2),Zr&l&&($[Qt]=Qt===0?y.level:$[Qt-1]),Qt===y.end||h(ue[Qt])&(R|N))for(var Jr=Qt;Jr>=0&&h(ue[Jr])&c;Jr--)$[Jr]=y.level}}return{levels:$,paragraphs:me};function go(Dt,mn){for(var Zt=Dt;Zt<ue.length;Zt++){var Jn=pe[Zt];if(Jn&(L|z))return 1;if(Jn&(N|D)||mn&&Jn===ne)return 0;if(Jn&r){var _o=mu(Zt);Zt=_o===-1?ue.length:_o}}return 0}function mu(Dt){for(var mn=1,Zt=Dt+1;Zt<ue.length;Zt++){var Jn=pe[Zt];if(Jn&N)break;if(Jn&ne){if(--mn===0)return Zt}else Jn&r&&mn++}return-1}function Ci(Dt){return $[Dt]&1?L:D}}var re="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",le;function fe(){if(!le){var ue=g(re,!0),Me=ue.map,Se=ue.reverseMap;Se.forEach(function(pe,I){Me.set(I,pe)}),le=Me}}function ve(ue){return fe(),le.get(ue)||null}function Ee(ue,Me,Se,pe){var I=ue.length;Se=Math.max(0,Se==null?0:+Se),pe=Math.min(I-1,pe==null?I-1:+pe);for(var w=new Map,j=Se;j<=pe;j++)if(Me[j]&1){var $=ve(ue[j]);$!==null&&w.set(j,$)}return w}function xe(ue,Me,Se,pe){var I=ue.length;Se=Math.max(0,Se==null?0:+Se),pe=Math.min(I-1,pe==null?I-1:+pe);var w=[];return Me.paragraphs.forEach(function(j){var $=Math.max(Se,j.start),ae=Math.min(pe,j.end);if($<ae){for(var me=Me.levels.slice($,ae+1),y=ae;y>=$&&h(ue[y])&c;y--)me[y]=j.level;for(var ee=j.level,Z=1/0,_e=0;_e<me.length;_e++){var be=me[_e];be>ee&&(ee=be),be<Z&&(Z=be|1)}for(var we=ee;we>=Z;we--)for(var he=0;he<me.length;he++)if(me[he]>=we){for(var de=he;he+1<me.length&&me[he+1]>=we;)he++;he>de&&w.push([de+Se,he+Se])}}}),w}function ye(ue,Me,Se,pe){var I=Ie(ue,Me,Se,pe),w=[].concat(ue);return I.forEach(function(j,$){w[$]=(Me.levels[j]&1?ve(ue[j]):null)||ue[j]}),w.join("")}function Ie(ue,Me,Se,pe){for(var I=xe(ue,Me,Se,pe),w=[],j=0;j<ue.length;j++)w[j]=j;return I.forEach(function($){for(var ae=$[0],me=$[1],y=w.slice(ae,me+1),ee=y.length;ee--;)w[me-ee]=y[ee]}),w}return e.closingToOpeningBracket=M,e.getBidiCharType=h,e.getBidiCharTypeName=p,e.getCanonicalBracket=x,e.getEmbeddingLevels=oe,e.getMirroredCharacter=ve,e.getMirroredCharactersMap=Ee,e.getReorderSegments=xe,e.getReorderedIndices=Ie,e.getReorderedString=ye,e.openingToClosingBracket=b,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}const uu=/\bvoid\s+main\s*\(\s*\)\s*{/g;function ks(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(n,i){let r=Ke[i];return r?ks(r):n}return a.replace(e,t)}const Pt=[];for(let a=0;a<256;a++)Pt[a]=(a<16?"0":"")+a.toString(16);function xv(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[a&255]+Pt[a>>8&255]+Pt[a>>16&255]+Pt[a>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toUpperCase()}const di=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let n=arguments[e];if(n)for(let i in n)n.hasOwnProperty(i)&&(a[i]=n[i])}return a},Ev=Date.now(),cc=new WeakMap,uc=new Map;let yv=1e10;function Gs(a,e){const t=Cv(e);let n=cc.get(a);if(n||cc.set(a,n=Object.create(null)),n[t])return new n[t];const i=`_onBeforeCompile${t}`,r=function(c){a.onBeforeCompile.call(this,c);const u=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=uc[u];if(!f){const h=wv(c,e,t);f=uc[u]=h}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,di(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-Ev}}),this[i]&&this[i](c)},o=function(){return s(e.chained?a:a.clone())},s=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:a}),Object.defineProperty(u,"id",{value:yv++}),u.uuid=xv(),u.uniforms=di({},c.uniforms,e.uniforms),u.defines=di({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=di({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:o},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return a.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[i]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&(di(this.extensions,c.extensions),di(this.defines,c.defines),di(this.uniforms,Ks.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return s(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Gs(a.isDerivedMaterial?a.getDepthMaterial():new Wc({depthPacking:Ac}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Gs(a.isDerivedMaterial?a.getDistanceMaterial():new Xc,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),a.dispose.call(this)}}};return n[t]=o,new o}function wv({vertexShader:a,fragmentShader:e},t,n){let{vertexDefs:i,vertexMainIntro:r,vertexMainOutro:o,vertexTransform:s,fragmentDefs:l,fragmentMainIntro:c,fragmentMainOutro:u,fragmentColorTransform:f,customRewriter:h,timeUniform:p}=t;if(i=i||"",r=r||"",o=o||"",l=l||"",c=c||"",u=u||"",(s||h)&&(a=ks(a)),(f||h)&&(e=e.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),e=ks(e)),h){let v=h({vertexShader:a,fragmentShader:e});a=v.vertexShader,e=v.fragmentShader}if(f){let v=[];e=e.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,g=>(v.push(g),"")),u=`${f}
${v.join(`
`)}
${u}`}if(p){const v=`
uniform float ${p};
`;i=v+i,l=v+l}return s&&(a=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${a}
`,i=`${i}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${s}
}
`,r=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${r}
`,a=a.replace(/\b(position|normal|uv)\b/g,(v,g,m,d)=>/\battribute\s+vec[23]\s+$/.test(d.substr(0,m))?g:`troika_${g}_${n}`)),a=fc(a,n,i,r,o),e=fc(e,n,l,c,u),{vertexShader:a,fragmentShader:e}}function fc(a,e,t,n,i){return(n||i||t)&&(a=a.replace(uu,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${n}
  troikaOrigMain${e}();
  ${i}
}`),a}function Tv(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let Av=0;const hc=new Map;function Cv(a){const e=JSON.stringify(a,Tv);let t=hc.get(e);return t==null&&hc.set(e,t=++Av),t}function Rv(a,e,t){const{defaultFontURL:n}=t,i=Object.create(null),r=1/0,o=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,s=/[\s\-\u007C\u00AD\u2010\u2012-\u2014\u2027\u2056\u2E17\u2E40]/;function l(d,_){function S(){const b=M=>{console.error(`Failure loading font ${d}${d===n?"":"; trying fallback"}`,M),d!==n&&(d=n,S())};try{const M=new XMLHttpRequest;M.open("get",d,!0),M.responseType="arraybuffer",M.onload=function(){if(M.status>=400)b(new Error(M.statusText));else if(M.status>0)try{const x=a(M.response);_(x)}catch(x){b(x)}},M.onerror=b,M.send()}catch(M){b(M)}}S()}function c(d,_){d||(d=n);let S=i[d];S?S.pending?S.pending.push(_):_(S):(i[d]={pending:[_]},l(d,b=>{let M=i[d].pending;i[d]=b,M.forEach(x=>x(b))}))}function u({text:d="",font:_=n,sdfGlyphSize:S=64,fontSize:b=1,letterSpacing:M=0,lineHeight:x="normal",maxWidth:D=r,direction:L,textAlign:E="left",textIndent:T=0,whiteSpace:B="normal",overflowWrap:U="normal",anchorX:C=0,anchorY:N=0,includeCaretPositions:R=!1,chunkedBoundsSize:k=8192,colorRanges:K=null},q,z=!1){const X=v(),A={fontLoad:0,typesetting:0};d.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),d=d.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),b=+b,M=+M,D=+D,x=x||"normal",T=+T,c(_,Y=>{const G=isFinite(D);let H=null,W=null,O=null,P=null,ne=null,oe=null,re=null,le=0,fe=0,ve=B!=="nowrap";const{ascender:Ee,descender:xe,unitsPerEm:ye}=Y;A.fontLoad=v()-X;const Ie=v(),ue=b/ye;x==="normal"&&(x=(Ee-xe)/ye),x=x*b;const Me=(x-(Ee-xe)*ue)/2,Se=-(Ee*ue+Me),pe=Math.min(x,(Ee-xe)*ue),I=(Ee+xe)/2*ue-pe/2;let w=T,j=new g;const $=[j];Y.forEachGlyph(d,b,M,(y,ee,Z)=>{const _e=d.charAt(Z),be=y.advanceWidth*ue,we=j.count;let he;if("isEmpty"in y||(y.isWhitespace=!!_e&&/\s/.test(_e),y.canBreakAfter=!!_e&&s.test(_e),y.isEmpty=y.xMin===y.xMax||y.yMin===y.yMax||o.test(_e)),!y.isWhitespace&&!y.isEmpty&&fe++,ve&&G&&!y.isWhitespace&&ee+be+w>D&&we){if(j.glyphAt(we-1).glyphObj.canBreakAfter)he=new g,w=-ee;else for(let Re=we;Re--;)if(Re===0&&U==="break-word"){he=new g,w=-ee;break}else if(j.glyphAt(Re).glyphObj.canBreakAfter){he=j.splitAt(Re+1);const Pe=he.glyphAt(0).x;w-=Pe;for(let nt=he.count;nt--;)he.glyphAt(nt).x-=Pe;break}he&&(j.isSoftWrapped=!0,j=he,$.push(j),le=D)}let de=j.glyphAt(j.count);de.glyphObj=y,de.x=ee+w,de.width=be,de.charIndex=Z,_e===`
`&&(j=new g,$.push(j),w=-(ee+be+M*b)+T)}),$.forEach(y=>{for(let ee=y.count;ee--;){let{glyphObj:Z,x:_e,width:be}=y.glyphAt(ee);if(!Z.isWhitespace){y.width=_e+be,y.width>le&&(le=y.width);return}}});let ae=0,me=0;if(C&&(typeof C=="number"?ae=-C:typeof C=="string"&&(ae=-le*(C==="left"?0:C==="center"?.5:C==="right"?1:h(C)))),N){if(typeof N=="number")me=-N;else if(typeof N=="string"){let y=$.length*x;me=N==="top"?0:N==="top-baseline"?-Se:N==="middle"?y/2:N==="bottom"?y:N==="bottom-baseline"?y-Me+xe*ue:h(N)*y}}if(!z){const y=e.getEmbeddingLevels(d,L);H=new Uint16Array(fe),W=new Float32Array(fe*2),O={},oe=[r,r,-r,-r],re=[];let ee=Se;R&&(ne=new Float32Array(d.length*3)),K&&(P=new Uint8Array(fe*3));let Z=0,_e=-1,be=-1,we,he;if($.forEach((de,Re)=>{let{count:Pe,width:nt}=de;if(Pe>0){let V=0;for(let Ne=Pe;Ne--&&de.glyphAt(Ne).glyphObj.isWhitespace;)V++;let ie=0,ge=0;if(E==="center")ie=(le-nt)/2;else if(E==="right")ie=le-nt;else if(E==="justify"&&de.isSoftWrapped){let Ne=0;for(let ke=Pe-V;ke--;)de.glyphAt(ke).glyphObj.isWhitespace&&Ne++;ge=(le-nt)/Ne}if(ge||ie){let Ne=0;for(let ke=0;ke<Pe;ke++){let ot=de.glyphAt(ke);const it=ot.glyphObj;ot.x+=ie+Ne,ge!==0&&it.isWhitespace&&ke<Pe-V&&(Ne+=ge,ot.width+=ge)}}const Ce=e.getReorderSegments(d,y,de.glyphAt(0).charIndex,de.glyphAt(de.count-1).charIndex);for(let Ne=0;Ne<Ce.length;Ne++){const[ke,ot]=Ce[Ne];let it=1/0,$e=-1/0;for(let lt=0;lt<Pe;lt++)if(de.glyphAt(lt).charIndex>=ke){let zt=lt,Mt=lt;for(;Mt<Pe;Mt++){let bt=de.glyphAt(Mt);if(bt.charIndex>ot)break;Mt<Pe-V&&(it=Math.min(it,bt.x),$e=Math.max($e,bt.x+bt.width))}for(let bt=zt;bt<Mt;bt++){const Vt=de.glyphAt(bt);Vt.x=$e-(Vt.x+Vt.width-it)}break}}let Ae;const rt=Ne=>Ae=Ne;for(let Ne=0;Ne<Pe;Ne++){let ke=de.glyphAt(Ne);Ae=ke.glyphObj;const ot=Ae.index,it=y.levels[ke.charIndex]&1;if(it){const $e=e.getMirroredCharacter(d[ke.charIndex]);$e&&Y.forEachGlyph($e,0,0,rt)}if(R){const{charIndex:$e}=ke,lt=ke.x+ae,zt=ke.x+ke.width+ae;ne[$e*3]=it?zt:lt,ne[$e*3+1]=it?lt:zt,ne[$e*3+2]=ee+I+me;const Mt=$e-_e;Mt>1&&p(ne,_e,Mt),_e=$e}if(K){const{charIndex:$e}=ke;for(;$e>be;)be++,K.hasOwnProperty(be)&&(he=K[be])}if(!Ae.isWhitespace&&!Ae.isEmpty){const $e=Z++;O[ot]||(O[ot]={path:Ae.path,pathBounds:[Ae.xMin,Ae.yMin,Ae.xMax,Ae.yMax]});const lt=ke.x+ae,zt=ee+me;W[$e*2]=lt,W[$e*2+1]=zt;const Mt=lt+Ae.xMin*ue,bt=zt+Ae.yMin*ue,Vt=lt+Ae.xMax*ue,wn=zt+Ae.yMax*ue;Mt<oe[0]&&(oe[0]=Mt),bt<oe[1]&&(oe[1]=bt),Vt>oe[2]&&(oe[2]=Vt),wn>oe[3]&&(oe[3]=wn),$e%k===0&&(we={start:$e,end:$e,rect:[r,r,-r,-r]},re.push(we)),we.end++;const F=we.rect;if(Mt<F[0]&&(F[0]=Mt),bt<F[1]&&(F[1]=bt),Vt>F[2]&&(F[2]=Vt),wn>F[3]&&(F[3]=wn),H[$e]=ot,K){const te=$e*3;P[te]=he>>16&255,P[te+1]=he>>8&255,P[te+2]=he&255}}}}ee-=x}),ne){const de=d.length-_e;de>1&&p(ne,_e,de)}}A.typesetting=v()-Ie,q({glyphIds:H,glyphPositions:W,glyphData:O,caretPositions:ne,caretHeight:pe,glyphColors:P,chunkedBounds:re,fontSize:b,unitsPerEm:ye,ascender:Ee*ue,descender:xe*ue,lineHeight:x,topBaseline:Se,blockBounds:[ae,me-$.length*x,ae+le,me],visibleBounds:oe,timings:A})})}function f(d,_){u(d,S=>{const[b,M,x,D]=S.blockBounds;_({width:x-b,height:D-M})},{metricsOnly:!0})}function h(d){let _=d.match(/^([\d.]+)%$/),S=_?parseFloat(_[1]):NaN;return isNaN(S)?0:S/100}function p(d,_,S){const b=d[_*3],M=d[_*3+1],x=d[_*3+2],D=(M-b)/S;for(let L=0;L<S;L++){const E=(_+L)*3;d[E]=b+D*L,d[E+1]=b+D*(L+1),d[E+2]=x}}function v(){return(self.performance||Date).now()}function g(){this.data=[]}const m=["glyphObj","x","width","charIndex"];return g.prototype={width:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/m.length)},glyphAt(d){let _=g.flyweight;return _.data=this.data,_.index=d,_},splitAt(d){let _=new g;return _.data=this.data.splice(d*m.length),_}},g.flyweight=m.reduce((d,_,S,b)=>(Object.defineProperty(d,_,{get(){return this.data[this.index*m.length+S]},set(M){this.data[this.index*m.length+S]=M}}),d),{data:null,index:0}),{typeset:u,measure:f,loadFont:c}}const Si=()=>(self.performance||Date).now(),Ia=cu();let dc;function Pv(a,e,t,n,i,r,o,s,l,c,u=!0){return u?Lv(a,e,t,n,i,r,o,s,l,c).then(null,f=>(dc||(console.warn("WebGL SDF generation failed, falling back to JS",f),dc=!0),pc(a,e,t,n,i,r,o,s,l,c))):pc(a,e,t,n,i,r,o,s,l,c)}const Lv=function(){const a=[];let t=0;function n(){const i=Si();for(;a.length&&Si()-i<5;)a.shift()();t=a.length?setTimeout(n,0):0}return(...i)=>{const r=qn();return a.push(()=>{const o=Si();try{Ia.webgl.generateIntoCanvas(...i),r.resolve({timing:Si()-o})}catch(s){r.reject(s)}}),t||(t=setTimeout(n,0)),r}}(),pc=function(){const t={};let n=0;return function(i,r,o,s,l,c,u,f,h,p){const v="TroikaTextSDFGenerator_JS_"+n++%4;let g=t[v];return g||(g=t[v]={workerModule:lr({name:v,workerId:v,dependencies:[cu,Si],init(m,d){const _=m().javascript.generate;return function(...S){const b=d();return{textureData:_(...S),timing:d()-b}}},getTransferables(m){return[m.textureData.buffer]}}),requests:0,idleTimer:null}),g.requests++,clearTimeout(g.idleTimer),g.workerModule(i,r,o,s,l,c).then(({textureData:m,timing:d})=>{const _=Si(),S=new Uint8Array(m.length*4);for(let b=0;b<m.length;b++)S[b*4+p]=m[b];return Ia.webglUtils.renderImageData(u,S,f,h,i,r,1<<3-p),d+=Si()-_,--g.requests===0&&(g.idleTimer=setTimeout(()=>{vv(v)},2e3)),{timing:d}})}}();function Dv(a){a._warm||(Ia.webgl.isSupported(a),a._warm=!0)}const Uv=Ia.webglUtils.resizeWebGLCanvasWithoutClearing;/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function Iv(){return typeof window>"u"&&(self.window=self),function(a){var e={parse:function(i){var r=e._bin,o=new Uint8Array(i);if(r.readASCII(o,0,4)=="ttcf"){var s=4;r.readUshort(o,s),s+=2,r.readUshort(o,s),s+=2;var l=r.readUint(o,s);s+=4;for(var c=[],u=0;u<l;u++){var f=r.readUint(o,s);s+=4,c.push(e._readFont(o,f))}return c}return[e._readFont(o,0)]},_readFont:function(i,r){var o=e._bin,s=r;o.readFixed(i,r),r+=4;var l=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GPOS","GSUB","SVG "],u={_data:i,_offset:s},f={},h=0;h<l;h++){var p=o.readASCII(i,r,4);r+=4,o.readUint(i,r),r+=4;var v=o.readUint(i,r);r+=4;var g=o.readUint(i,r);r+=4,f[p]={offset:v,length:g}}for(h=0;h<c.length;h++){var m=c[h];f[m]&&(u[m.trim()]=e[m.trim()].parse(i,f[m].offset,f[m].length,u))}return u},_tabOffset:function(i,r,o){for(var s=e._bin,l=s.readUshort(i,o+4),c=o+12,u=0;u<l;u++){var f=s.readASCII(i,c,4);c+=4,s.readUint(i,c),c+=4;var h=s.readUint(i,c);if(c+=4,s.readUint(i,c),c+=4,f==r)return h}return 0}};e._bin={readFixed:function(i,r){return(i[r]<<8|i[r+1])+(i[r+2]<<8|i[r+3])/65540},readF2dot14:function(i,r){return e._bin.readShort(i,r)/16384},readInt:function(i,r){return e._bin._view(i).getInt32(r)},readInt8:function(i,r){return e._bin._view(i).getInt8(r)},readShort:function(i,r){return e._bin._view(i).getInt16(r)},readUshort:function(i,r){return e._bin._view(i).getUint16(r)},readUshorts:function(i,r,o){for(var s=[],l=0;l<o;l++)s.push(e._bin.readUshort(i,r+2*l));return s},readUint:function(i,r){return e._bin._view(i).getUint32(r)},readUint64:function(i,r){return 4294967296*e._bin.readUint(i,r)+e._bin.readUint(i,r+4)},readASCII:function(i,r,o){for(var s="",l=0;l<o;l++)s+=String.fromCharCode(i[r+l]);return s},readUnicode:function(i,r,o){for(var s="",l=0;l<o;l++){var c=i[r++]<<8|i[r++];s+=String.fromCharCode(c)}return s},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(i,r,o){var s=e._bin._tdec;return s&&r==0&&o==i.length?s.decode(i):e._bin.readASCII(i,r,o)},readBytes:function(i,r,o){for(var s=[],l=0;l<o;l++)s.push(i[r+l]);return s},readASCIIArray:function(i,r,o){for(var s=[],l=0;l<o;l++)s.push(String.fromCharCode(i[r+l]));return s},_view:function(i){return i._dataView||(i._dataView=i.buffer?new DataView(i.buffer,i.byteOffset,i.byteLength):new DataView(new Uint8Array(i).buffer))}},e._lctf={},e._lctf.parse=function(i,r,o,s,l){var c=e._bin,u={},f=r;c.readFixed(i,r),r+=4;var h=c.readUshort(i,r);r+=2;var p=c.readUshort(i,r);r+=2;var v=c.readUshort(i,r);return r+=2,u.scriptList=e._lctf.readScriptList(i,f+h),u.featureList=e._lctf.readFeatureList(i,f+p),u.lookupList=e._lctf.readLookupList(i,f+v,l),u},e._lctf.readLookupList=function(i,r,o){var s=e._bin,l=r,c=[],u=s.readUshort(i,r);r+=2;for(var f=0;f<u;f++){var h=s.readUshort(i,r);r+=2;var p=e._lctf.readLookupTable(i,l+h,o);c.push(p)}return c},e._lctf.readLookupTable=function(i,r,o){var s=e._bin,l=r,c={tabs:[]};c.ltype=s.readUshort(i,r),r+=2,c.flag=s.readUshort(i,r),r+=2;var u=s.readUshort(i,r);r+=2;for(var f=c.ltype,h=0;h<u;h++){var p=s.readUshort(i,r);r+=2;var v=o(i,f,l+p,c);c.tabs.push(v)}return c},e._lctf.numOfOnes=function(i){for(var r=0,o=0;o<32;o++)i>>>o&1&&r++;return r},e._lctf.readClassDef=function(i,r){var o=e._bin,s=[],l=o.readUshort(i,r);if(r+=2,l==1){var c=o.readUshort(i,r);r+=2;var u=o.readUshort(i,r);r+=2;for(var f=0;f<u;f++)s.push(c+f),s.push(c+f),s.push(o.readUshort(i,r)),r+=2}if(l==2){var h=o.readUshort(i,r);for(r+=2,f=0;f<h;f++)s.push(o.readUshort(i,r)),r+=2,s.push(o.readUshort(i,r)),r+=2,s.push(o.readUshort(i,r)),r+=2}return s},e._lctf.getInterval=function(i,r){for(var o=0;o<i.length;o+=3){var s=i[o],l=i[o+1];if(i[o+2],s<=r&&r<=l)return o}return-1},e._lctf.readCoverage=function(i,r){var o=e._bin,s={};s.fmt=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);return r+=2,s.fmt==1&&(s.tab=o.readUshorts(i,r,l)),s.fmt==2&&(s.tab=o.readUshorts(i,r,3*l)),s},e._lctf.coverageIndex=function(i,r){var o=i.tab;if(i.fmt==1)return o.indexOf(r);if(i.fmt==2){var s=e._lctf.getInterval(o,r);if(s!=-1)return o[s+2]+(r-o[s])}return-1},e._lctf.readFeatureList=function(i,r){var o=e._bin,s=r,l=[],c=o.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=o.readASCII(i,r,4);r+=4;var h=o.readUshort(i,r);r+=2;var p=e._lctf.readFeatureTable(i,s+h);p.tag=f.trim(),l.push(p)}return l},e._lctf.readFeatureTable=function(i,r){var o=e._bin,s=r,l={},c=o.readUshort(i,r);r+=2,c>0&&(l.featureParams=s+c);var u=o.readUshort(i,r);r+=2,l.tab=[];for(var f=0;f<u;f++)l.tab.push(o.readUshort(i,r+2*f));return l},e._lctf.readScriptList=function(i,r){var o=e._bin,s=r,l={},c=o.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=o.readASCII(i,r,4);r+=4;var h=o.readUshort(i,r);r+=2,l[f.trim()]=e._lctf.readScriptTable(i,s+h)}return l},e._lctf.readScriptTable=function(i,r){var o=e._bin,s=r,l={},c=o.readUshort(i,r);r+=2,l.default=e._lctf.readLangSysTable(i,s+c);var u=o.readUshort(i,r);r+=2;for(var f=0;f<u;f++){var h=o.readASCII(i,r,4);r+=4;var p=o.readUshort(i,r);r+=2,l[h.trim()]=e._lctf.readLangSysTable(i,s+p)}return l},e._lctf.readLangSysTable=function(i,r){var o=e._bin,s={};o.readUshort(i,r),r+=2,s.reqFeature=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);return r+=2,s.features=o.readUshorts(i,r,l),s},e.CFF={},e.CFF.parse=function(i,r,o){var s=e._bin;(i=new Uint8Array(i.buffer,r,o))[r=0],i[++r],i[++r],i[++r],r++;var l=[];r=e.CFF.readIndex(i,r,l);for(var c=[],u=0;u<l.length-1;u++)c.push(s.readASCII(i,r+l[u],l[u+1]-l[u]));r+=l[l.length-1];var f=[];r=e.CFF.readIndex(i,r,f);var h=[];for(u=0;u<f.length-1;u++)h.push(e.CFF.readDict(i,r+f[u],r+f[u+1]));r+=f[f.length-1];var p=h[0],v=[];r=e.CFF.readIndex(i,r,v);var g=[];for(u=0;u<v.length-1;u++)g.push(s.readASCII(i,r+v[u],v[u+1]-v[u]));if(r+=v[v.length-1],e.CFF.readSubrs(i,r,p),p.CharStrings){r=p.CharStrings,v=[],r=e.CFF.readIndex(i,r,v);var m=[];for(u=0;u<v.length-1;u++)m.push(s.readBytes(i,r+v[u],v[u+1]-v[u]));p.CharStrings=m}if(p.ROS){r=p.FDArray;var d=[];for(r=e.CFF.readIndex(i,r,d),p.FDArray=[],u=0;u<d.length-1;u++){var _=e.CFF.readDict(i,r+d[u],r+d[u+1]);e.CFF._readFDict(i,_,g),p.FDArray.push(_)}r+=d[d.length-1],r=p.FDSelect,p.FDSelect=[];var S=i[r];if(r++,S!=3)throw S;var b=s.readUshort(i,r);for(r+=2,u=0;u<b+1;u++)p.FDSelect.push(s.readUshort(i,r),i[r+2]),r+=3}return p.Encoding&&(p.Encoding=e.CFF.readEncoding(i,p.Encoding,p.CharStrings.length)),p.charset&&(p.charset=e.CFF.readCharset(i,p.charset,p.CharStrings.length)),e.CFF._readFDict(i,p,g),p},e.CFF._readFDict=function(i,r,o){var s;for(var l in r.Private&&(s=r.Private[1],r.Private=e.CFF.readDict(i,s,s+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(i,s+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=o[r[l]-426+35])},e.CFF.readSubrs=function(i,r,o){var s=e._bin,l=[];r=e.CFF.readIndex(i,r,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,o.Bias=c,o.Subrs=[];for(var f=0;f<l.length-1;f++)o.Subrs.push(s.readBytes(i,r+l[f],l[f+1]-l[f]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(i,r){for(var o=0;o<i.charset.length;o++)if(i.charset[o]==r)return o;return-1},e.CFF.glyphBySE=function(i,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(i,e.CFF.tableSE[r])},e.CFF.readEncoding=function(i,r,o){e._bin;var s=[".notdef"],l=i[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=i[r];r++;for(var u=0;u<c;u++)s.push(i[r+u]);return s},e.CFF.readCharset=function(i,r,o){var s=e._bin,l=[".notdef"],c=i[r];if(r++,c==0)for(var u=0;u<o;u++){var f=s.readUshort(i,r);r+=2,l.push(f)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<o;){f=s.readUshort(i,r),r+=2;var h=0;for(c==1?(h=i[r],r++):(h=s.readUshort(i,r),r+=2),u=0;u<=h;u++)l.push(f),f++}}return l},e.CFF.readIndex=function(i,r,o){var s=e._bin,l=s.readUshort(i,r)+1,c=i[r+=2];if(r++,c==1)for(var u=0;u<l;u++)o.push(i[r+u]);else if(c==2)for(u=0;u<l;u++)o.push(s.readUshort(i,r+2*u));else if(c==3)for(u=0;u<l;u++)o.push(16777215&s.readUint(i,r+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(i,r,o){var s=e._bin,l=i[r],c=i[r+1];i[r+2],i[r+3],i[r+4];var u=1,f=null,h=null;l<=20&&(f=l,u=1),l==12&&(f=100*l+c,u=2),21<=l&&l<=27&&(f=l,u=1),l==28&&(h=s.readShort(i,r+1),u=3),29<=l&&l<=31&&(f=l,u=1),32<=l&&l<=246&&(h=l-139,u=1),247<=l&&l<=250&&(h=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(h=256*-(l-251)-c-108,u=2),l==255&&(h=s.readInt(i,r+1)/65535,u=5),o.val=h??"o"+f,o.size=u},e.CFF.readCharString=function(i,r,o){for(var s=r+o,l=e._bin,c=[];r<s;){var u=i[r],f=i[r+1];i[r+2],i[r+3],i[r+4];var h=1,p=null,v=null;u<=20&&(p=u,h=1),u==12&&(p=100*u+f,h=2),u!=19&&u!=20||(p=u,h=2),21<=u&&u<=27&&(p=u,h=1),u==28&&(v=l.readShort(i,r+1),h=3),29<=u&&u<=31&&(p=u,h=1),32<=u&&u<=246&&(v=u-139,h=1),247<=u&&u<=250&&(v=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(v=256*-(u-251)-f-108,h=2),u==255&&(v=l.readInt(i,r+1)/65535,h=5),c.push(v??"o"+p),r+=h}return c},e.CFF.readDict=function(i,r,o){for(var s=e._bin,l={},c=[];r<o;){var u=i[r],f=i[r+1];i[r+2],i[r+3],i[r+4];var h=1,p=null,v=null;if(u==28&&(v=s.readShort(i,r+1),h=3),u==29&&(v=s.readInt(i,r+1),h=5),32<=u&&u<=246&&(v=u-139,h=1),247<=u&&u<=250&&(v=256*(u-247)+f+108,h=2),251<=u&&u<=254&&(v=256*-(u-251)-f-108,h=2),u==255)throw v=s.readInt(i,r+1)/65535,h=5,"unknown number";if(u==30){var g=[];for(h=1;;){var m=i[r+h];h++;var d=m>>4,_=15&m;if(d!=15&&g.push(d),_!=15&&g.push(_),_==15)break}for(var S="",b=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],M=0;M<g.length;M++)S+=b[g[M]];v=parseFloat(S)}u<=21&&(p=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(p=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],h=2)),p!=null?(l[p]=c.length==1?c[0]:c,c=[]):c.push(v),r+=h}return l},e.cmap={},e.cmap.parse=function(i,r,o){i=new Uint8Array(i.buffer,r,o),r=0;var s=e._bin,l={};s.readUshort(i,r),r+=2;var c=s.readUshort(i,r);r+=2;var u=[];l.tables=[];for(var f=0;f<c;f++){var h=s.readUshort(i,r);r+=2;var p=s.readUshort(i,r);r+=2;var v=s.readUint(i,r);r+=4;var g="p"+h+"e"+p,m=u.indexOf(v);if(m==-1){var d;m=l.tables.length,u.push(v);var _=s.readUshort(i,v);_==0?d=e.cmap.parse0(i,v):_==4?d=e.cmap.parse4(i,v):_==6?d=e.cmap.parse6(i,v):_==12?d=e.cmap.parse12(i,v):console.debug("unknown format: "+_,h,p,v),l.tables.push(d)}if(l[g]!=null)throw"multiple tables for one platform+encoding";l[g]=m}return l},e.cmap.parse0=function(i,r){var o=e._bin,s={};s.format=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2,s.map=[];for(var c=0;c<l-6;c++)s.map.push(i[r+c]);return s},e.cmap.parse4=function(i,r){var o=e._bin,s=r,l={};l.format=o.readUshort(i,r),r+=2;var c=o.readUshort(i,r);r+=2,o.readUshort(i,r),r+=2;var u=o.readUshort(i,r);r+=2;var f=u/2;l.searchRange=o.readUshort(i,r),r+=2,l.entrySelector=o.readUshort(i,r),r+=2,l.rangeShift=o.readUshort(i,r),r+=2,l.endCount=o.readUshorts(i,r,f),r+=2*f,r+=2,l.startCount=o.readUshorts(i,r,f),r+=2*f,l.idDelta=[];for(var h=0;h<f;h++)l.idDelta.push(o.readShort(i,r)),r+=2;for(l.idRangeOffset=o.readUshorts(i,r,f),r+=2*f,l.glyphIdArray=[];r<s+c;)l.glyphIdArray.push(o.readUshort(i,r)),r+=2;return l},e.cmap.parse6=function(i,r){var o=e._bin,s={};s.format=o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,o.readUshort(i,r),r+=2,s.firstCode=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);r+=2,s.glyphIdArray=[];for(var c=0;c<l;c++)s.glyphIdArray.push(o.readUshort(i,r)),r+=2;return s},e.cmap.parse12=function(i,r){var o=e._bin,s={};s.format=o.readUshort(i,r),r+=2,r+=2,o.readUint(i,r),r+=4,o.readUint(i,r),r+=4;var l=o.readUint(i,r);r+=4,s.groups=[];for(var c=0;c<l;c++){var u=r+12*c,f=o.readUint(i,u+0),h=o.readUint(i,u+4),p=o.readUint(i,u+8);s.groups.push([f,h,p])}return s},e.glyf={},e.glyf.parse=function(i,r,o,s){for(var l=[],c=0;c<s.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(i,r){var o=e._bin,s=i._data,l=e._tabOffset(s,"glyf",i._offset)+i.loca[r];if(i.loca[r]==i.loca[r+1])return null;var c={};if(c.noc=o.readShort(s,l),l+=2,c.xMin=o.readShort(s,l),l+=2,c.yMin=o.readShort(s,l),l+=2,c.xMax=o.readShort(s,l),l+=2,c.yMax=o.readShort(s,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(o.readUshort(s,l)),l+=2;var f=o.readUshort(s,l);if(l+=2,s.length-l<f)return null;c.instructions=o.readBytes(s,l,f),l+=f;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var p=s[l];if(l++,c.flags.push(p),(8&p)!=0){var v=s[l];l++;for(var g=0;g<v;g++)c.flags.push(p),u++}}for(c.xs=[],u=0;u<h;u++){var m=(2&c.flags[u])!=0,d=(16&c.flags[u])!=0;m?(c.xs.push(d?s[l]:-s[l]),l++):d?c.xs.push(0):(c.xs.push(o.readShort(s,l)),l+=2)}for(c.ys=[],u=0;u<h;u++)m=(4&c.flags[u])!=0,d=(32&c.flags[u])!=0,m?(c.ys.push(d?s[l]:-s[l]),l++):d?c.ys.push(0):(c.ys.push(o.readShort(s,l)),l+=2);var _=0,S=0;for(u=0;u<h;u++)_+=c.xs[u],S+=c.ys[u],c.xs[u]=_,c.ys[u]=S}else{var b;c.parts=[];do{b=o.readUshort(s,l),l+=2;var M={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(M),M.glyphIndex=o.readUshort(s,l),l+=2,1&b){var x=o.readShort(s,l);l+=2;var D=o.readShort(s,l);l+=2}else x=o.readInt8(s,l),l++,D=o.readInt8(s,l),l++;2&b?(M.m.tx=x,M.m.ty=D):(M.p1=x,M.p2=D),8&b?(M.m.a=M.m.d=o.readF2dot14(s,l),l+=2):64&b?(M.m.a=o.readF2dot14(s,l),l+=2,M.m.d=o.readF2dot14(s,l),l+=2):128&b&&(M.m.a=o.readF2dot14(s,l),l+=2,M.m.b=o.readF2dot14(s,l),l+=2,M.m.c=o.readF2dot14(s,l),l+=2,M.m.d=o.readF2dot14(s,l),l+=2)}while(32&b);if(256&b){var L=o.readUshort(s,l);for(l+=2,c.instr=[],u=0;u<L;u++)c.instr.push(s[l]),l++}}return c},e.GPOS={},e.GPOS.parse=function(i,r,o,s){return e._lctf.parse(i,r,o,s,e.GPOS.subt)},e.GPOS.subt=function(i,r,o,s){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(i,o),o+=2,r==1||r==2||r==3||r==7||r==8&&u.fmt<=2){var f=l.readUshort(i,o);o+=2,u.coverage=e._lctf.readCoverage(i,f+c)}if(r==1&&u.fmt==1){var h=l.readUshort(i,o);o+=2;var p=e._lctf.numOfOnes(h);h!=0&&(u.pos=e.GPOS.readValueRecord(i,o,h))}else if(r==2&&u.fmt>=1&&u.fmt<=2){h=l.readUshort(i,o),o+=2;var v=l.readUshort(i,o);o+=2,p=e._lctf.numOfOnes(h);var g=e._lctf.numOfOnes(v);if(u.fmt==1){u.pairsets=[];var m=l.readUshort(i,o);o+=2;for(var d=0;d<m;d++){var _=c+l.readUshort(i,o);o+=2;var S=l.readUshort(i,_);_+=2;for(var b=[],M=0;M<S;M++){var x=l.readUshort(i,_);_+=2,h!=0&&(U=e.GPOS.readValueRecord(i,_,h),_+=2*p),v!=0&&(C=e.GPOS.readValueRecord(i,_,v),_+=2*g),b.push({gid2:x,val1:U,val2:C})}u.pairsets.push(b)}}if(u.fmt==2){var D=l.readUshort(i,o);o+=2;var L=l.readUshort(i,o);o+=2;var E=l.readUshort(i,o);o+=2;var T=l.readUshort(i,o);for(o+=2,u.classDef1=e._lctf.readClassDef(i,c+D),u.classDef2=e._lctf.readClassDef(i,c+L),u.matrix=[],d=0;d<E;d++){var B=[];for(M=0;M<T;M++){var U=null,C=null;h!=0&&(U=e.GPOS.readValueRecord(i,o,h),o+=2*p),v!=0&&(C=e.GPOS.readValueRecord(i,o,v),o+=2*g),B.push({val1:U,val2:C})}u.matrix.push(B)}}}else{if(r==9&&u.fmt==1){var N=l.readUshort(i,o);o+=2;var R=l.readUint(i,o);if(o+=4,s.ltype==9)s.ltype=N;else if(s.ltype!=N)throw"invalid extension substitution";return e.GPOS.subt(i,s.ltype,c+R)}console.debug("unsupported GPOS table LookupType",r,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(i,r,o){var s=e._bin,l=[];return l.push(1&o?s.readShort(i,r):0),r+=1&o?2:0,l.push(2&o?s.readShort(i,r):0),r+=2&o?2:0,l.push(4&o?s.readShort(i,r):0),r+=4&o?2:0,l.push(8&o?s.readShort(i,r):0),r+=8&o?2:0,l},e.GSUB={},e.GSUB.parse=function(i,r,o,s){return e._lctf.parse(i,r,o,s,e.GSUB.subt)},e.GSUB.subt=function(i,r,o,s){var l=e._bin,c=o,u={};if(u.fmt=l.readUshort(i,o),o+=2,r!=1&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==4||r==5&&u.fmt<=2||r==6&&u.fmt<=2){var f=l.readUshort(i,o);o+=2,u.coverage=e._lctf.readCoverage(i,c+f)}if(r==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(i,o),o+=2;else if(u.fmt==2){var h=l.readUshort(i,o);o+=2,u.newg=l.readUshorts(i,o,h),o+=2*u.newg.length}}else if(r==4){u.vals=[],h=l.readUshort(i,o),o+=2;for(var p=0;p<h;p++){var v=l.readUshort(i,o);o+=2,u.vals.push(e.GSUB.readLigatureSet(i,c+v))}}else if(r==5&&u.fmt==2){if(u.fmt==2){var g=l.readUshort(i,o);o+=2,u.cDef=e._lctf.readClassDef(i,c+g),u.scset=[];var m=l.readUshort(i,o);for(o+=2,p=0;p<m;p++){var d=l.readUshort(i,o);o+=2,u.scset.push(d==0?null:e.GSUB.readSubClassSet(i,c+d))}}}else if(r==6&&u.fmt==3){if(u.fmt==3){for(p=0;p<3;p++){h=l.readUshort(i,o),o+=2;for(var _=[],S=0;S<h;S++)_.push(e._lctf.readCoverage(i,c+l.readUshort(i,o+2*S)));o+=2*h,p==0&&(u.backCvg=_),p==1&&(u.inptCvg=_),p==2&&(u.ahedCvg=_)}h=l.readUshort(i,o),o+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(i,o,h)}}else{if(r==7&&u.fmt==1){var b=l.readUshort(i,o);o+=2;var M=l.readUint(i,o);if(o+=4,s.ltype==9)s.ltype=b;else if(s.ltype!=b)throw"invalid extension substitution";return e.GSUB.subt(i,s.ltype,c+M)}console.debug("unsupported GSUB table LookupType",r,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(i,r){var o=e._bin.readUshort,s=r,l=[],c=o(i,r);r+=2;for(var u=0;u<c;u++){var f=o(i,r);r+=2,l.push(e.GSUB.readSubClassRule(i,s+f))}return l},e.GSUB.readSubClassRule=function(i,r){var o=e._bin.readUshort,s={},l=o(i,r),c=o(i,r+=2);r+=2,s.input=[];for(var u=0;u<l-1;u++)s.input.push(o(i,r)),r+=2;return s.substLookupRecords=e.GSUB.readSubstLookupRecords(i,r,c),s},e.GSUB.readSubstLookupRecords=function(i,r,o){for(var s=e._bin.readUshort,l=[],c=0;c<o;c++)l.push(s(i,r),s(i,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(i,r){var o=e._bin,s=r,l=[],c=o.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=o.readUshort(i,r);r+=2,l.push(e.GSUB.readChainSubClassRule(i,s+f))}return l},e.GSUB.readChainSubClassRule=function(i,r){for(var o=e._bin,s={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=o.readUshort(i,r);r+=2,c==1&&u--,s[l[c]]=o.readUshorts(i,r,u),r+=2*s[l[c]].length}return u=o.readUshort(i,r),r+=2,s.subst=o.readUshorts(i,r,2*u),r+=2*s.subst.length,s},e.GSUB.readLigatureSet=function(i,r){var o=e._bin,s=r,l=[],c=o.readUshort(i,r);r+=2;for(var u=0;u<c;u++){var f=o.readUshort(i,r);r+=2,l.push(e.GSUB.readLigature(i,s+f))}return l},e.GSUB.readLigature=function(i,r){var o=e._bin,s={chain:[]};s.nglyph=o.readUshort(i,r),r+=2;var l=o.readUshort(i,r);r+=2;for(var c=0;c<l-1;c++)s.chain.push(o.readUshort(i,r)),r+=2;return s},e.head={},e.head.parse=function(i,r,o){var s=e._bin,l={};return s.readFixed(i,r),r+=4,l.fontRevision=s.readFixed(i,r),r+=4,s.readUint(i,r),r+=4,s.readUint(i,r),r+=4,l.flags=s.readUshort(i,r),r+=2,l.unitsPerEm=s.readUshort(i,r),r+=2,l.created=s.readUint64(i,r),r+=8,l.modified=s.readUint64(i,r),r+=8,l.xMin=s.readShort(i,r),r+=2,l.yMin=s.readShort(i,r),r+=2,l.xMax=s.readShort(i,r),r+=2,l.yMax=s.readShort(i,r),r+=2,l.macStyle=s.readUshort(i,r),r+=2,l.lowestRecPPEM=s.readUshort(i,r),r+=2,l.fontDirectionHint=s.readShort(i,r),r+=2,l.indexToLocFormat=s.readShort(i,r),r+=2,l.glyphDataFormat=s.readShort(i,r),r+=2,l},e.hhea={},e.hhea.parse=function(i,r,o){var s=e._bin,l={};return s.readFixed(i,r),r+=4,l.ascender=s.readShort(i,r),r+=2,l.descender=s.readShort(i,r),r+=2,l.lineGap=s.readShort(i,r),r+=2,l.advanceWidthMax=s.readUshort(i,r),r+=2,l.minLeftSideBearing=s.readShort(i,r),r+=2,l.minRightSideBearing=s.readShort(i,r),r+=2,l.xMaxExtent=s.readShort(i,r),r+=2,l.caretSlopeRise=s.readShort(i,r),r+=2,l.caretSlopeRun=s.readShort(i,r),r+=2,l.caretOffset=s.readShort(i,r),r+=2,r+=8,l.metricDataFormat=s.readShort(i,r),r+=2,l.numberOfHMetrics=s.readUshort(i,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(i,r,o,s){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,f=0,h=0;h<s.maxp.numGlyphs;h++)h<s.hhea.numberOfHMetrics&&(u=l.readUshort(i,r),r+=2,f=l.readShort(i,r),r+=2),c.aWidth.push(u),c.lsBearing.push(f);return c},e.kern={},e.kern.parse=function(i,r,o,s){var l=e._bin,c=l.readUshort(i,r);if(r+=2,c==1)return e.kern.parseV1(i,r-2,o,s);var u=l.readUshort(i,r);r+=2;for(var f={glyph1:[],rval:[]},h=0;h<u;h++){r+=2,o=l.readUshort(i,r),r+=2;var p=l.readUshort(i,r);r+=2;var v=p>>>8;if((v&=15)!=0)throw"unknown kern table format: "+v;r=e.kern.readFormat0(i,r,f)}return f},e.kern.parseV1=function(i,r,o,s){var l=e._bin;l.readFixed(i,r),r+=4;var c=l.readUint(i,r);r+=4;for(var u={glyph1:[],rval:[]},f=0;f<c;f++){l.readUint(i,r),r+=4;var h=l.readUshort(i,r);r+=2,l.readUshort(i,r),r+=2;var p=h>>>8;if((p&=15)!=0)throw"unknown kern table format: "+p;r=e.kern.readFormat0(i,r,u)}return u},e.kern.readFormat0=function(i,r,o){var s=e._bin,l=-1,c=s.readUshort(i,r);r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2,s.readUshort(i,r),r+=2;for(var u=0;u<c;u++){var f=s.readUshort(i,r);r+=2;var h=s.readUshort(i,r);r+=2;var p=s.readShort(i,r);r+=2,f!=l&&(o.glyph1.push(f),o.rval.push({glyph2:[],vals:[]}));var v=o.rval[o.rval.length-1];v.glyph2.push(h),v.vals.push(p),l=f}return r},e.loca={},e.loca.parse=function(i,r,o,s){var l=e._bin,c=[],u=s.head.indexToLocFormat,f=s.maxp.numGlyphs+1;if(u==0)for(var h=0;h<f;h++)c.push(l.readUshort(i,r+(h<<1))<<1);if(u==1)for(h=0;h<f;h++)c.push(l.readUint(i,r+(h<<2)));return c},e.maxp={},e.maxp.parse=function(i,r,o){var s=e._bin,l={},c=s.readUint(i,r);return r+=4,l.numGlyphs=s.readUshort(i,r),r+=2,c==65536&&(l.maxPoints=s.readUshort(i,r),r+=2,l.maxContours=s.readUshort(i,r),r+=2,l.maxCompositePoints=s.readUshort(i,r),r+=2,l.maxCompositeContours=s.readUshort(i,r),r+=2,l.maxZones=s.readUshort(i,r),r+=2,l.maxTwilightPoints=s.readUshort(i,r),r+=2,l.maxStorage=s.readUshort(i,r),r+=2,l.maxFunctionDefs=s.readUshort(i,r),r+=2,l.maxInstructionDefs=s.readUshort(i,r),r+=2,l.maxStackElements=s.readUshort(i,r),r+=2,l.maxSizeOfInstructions=s.readUshort(i,r),r+=2,l.maxComponentElements=s.readUshort(i,r),r+=2,l.maxComponentDepth=s.readUshort(i,r),r+=2),l},e.name={},e.name.parse=function(i,r,o){var s=e._bin,l={};s.readUshort(i,r),r+=2;var c=s.readUshort(i,r);r+=2,s.readUshort(i,r);for(var u,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=r+=2,p=0;p<c;p++){var v=s.readUshort(i,r);r+=2;var g=s.readUshort(i,r);r+=2;var m=s.readUshort(i,r);r+=2;var d=s.readUshort(i,r);r+=2;var _=s.readUshort(i,r);r+=2;var S=s.readUshort(i,r);r+=2;var b,M=f[d],x=h+12*c+S;if(v==0)b=s.readUnicode(i,x,_/2);else if(v==3&&g==0)b=s.readUnicode(i,x,_/2);else if(g==0)b=s.readASCII(i,x,_);else if(g==1)b=s.readUnicode(i,x,_/2);else if(g==3)b=s.readUnicode(i,x,_/2);else{if(v!=1)throw"unknown encoding "+g+", platformID: "+v;b=s.readASCII(i,x,_),console.debug("reading unknown MAC encoding "+g+" as ASCII")}var D="p"+v+","+m.toString(16);l[D]==null&&(l[D]={}),l[D][M!==void 0?M:d]=b,l[D]._lang=m}for(var L in l)if(l[L].postScriptName!=null&&l[L]._lang==1033)return l[L];for(var L in l)if(l[L].postScriptName!=null&&l[L]._lang==0)return l[L];for(var L in l)if(l[L].postScriptName!=null&&l[L]._lang==3084)return l[L];for(var L in l)if(l[L].postScriptName!=null)return l[L];for(var L in l){u=L;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(i,r,o){var s=e._bin.readUshort(i,r);r+=2;var l={};if(s==0)e["OS/2"].version0(i,r,l);else if(s==1)e["OS/2"].version1(i,r,l);else if(s==2||s==3||s==4)e["OS/2"].version2(i,r,l);else{if(s!=5)throw"unknown OS/2 table version: "+s;e["OS/2"].version5(i,r,l)}return l},e["OS/2"].version0=function(i,r,o){var s=e._bin;return o.xAvgCharWidth=s.readShort(i,r),r+=2,o.usWeightClass=s.readUshort(i,r),r+=2,o.usWidthClass=s.readUshort(i,r),r+=2,o.fsType=s.readUshort(i,r),r+=2,o.ySubscriptXSize=s.readShort(i,r),r+=2,o.ySubscriptYSize=s.readShort(i,r),r+=2,o.ySubscriptXOffset=s.readShort(i,r),r+=2,o.ySubscriptYOffset=s.readShort(i,r),r+=2,o.ySuperscriptXSize=s.readShort(i,r),r+=2,o.ySuperscriptYSize=s.readShort(i,r),r+=2,o.ySuperscriptXOffset=s.readShort(i,r),r+=2,o.ySuperscriptYOffset=s.readShort(i,r),r+=2,o.yStrikeoutSize=s.readShort(i,r),r+=2,o.yStrikeoutPosition=s.readShort(i,r),r+=2,o.sFamilyClass=s.readShort(i,r),r+=2,o.panose=s.readBytes(i,r,10),r+=10,o.ulUnicodeRange1=s.readUint(i,r),r+=4,o.ulUnicodeRange2=s.readUint(i,r),r+=4,o.ulUnicodeRange3=s.readUint(i,r),r+=4,o.ulUnicodeRange4=s.readUint(i,r),r+=4,o.achVendID=[s.readInt8(i,r),s.readInt8(i,r+1),s.readInt8(i,r+2),s.readInt8(i,r+3)],r+=4,o.fsSelection=s.readUshort(i,r),r+=2,o.usFirstCharIndex=s.readUshort(i,r),r+=2,o.usLastCharIndex=s.readUshort(i,r),r+=2,o.sTypoAscender=s.readShort(i,r),r+=2,o.sTypoDescender=s.readShort(i,r),r+=2,o.sTypoLineGap=s.readShort(i,r),r+=2,o.usWinAscent=s.readUshort(i,r),r+=2,o.usWinDescent=s.readUshort(i,r),r+=2},e["OS/2"].version1=function(i,r,o){var s=e._bin;return r=e["OS/2"].version0(i,r,o),o.ulCodePageRange1=s.readUint(i,r),r+=4,o.ulCodePageRange2=s.readUint(i,r),r+=4},e["OS/2"].version2=function(i,r,o){var s=e._bin;return r=e["OS/2"].version1(i,r,o),o.sxHeight=s.readShort(i,r),r+=2,o.sCapHeight=s.readShort(i,r),r+=2,o.usDefault=s.readUshort(i,r),r+=2,o.usBreak=s.readUshort(i,r),r+=2,o.usMaxContext=s.readUshort(i,r),r+=2},e["OS/2"].version5=function(i,r,o){var s=e._bin;return r=e["OS/2"].version2(i,r,o),o.usLowerOpticalPointSize=s.readUshort(i,r),r+=2,o.usUpperOpticalPointSize=s.readUshort(i,r),r+=2},e.post={},e.post.parse=function(i,r,o){var s=e._bin,l={};return l.version=s.readFixed(i,r),r+=4,l.italicAngle=s.readFixed(i,r),r+=4,l.underlinePosition=s.readShort(i,r),r+=2,l.underlineThickness=s.readShort(i,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(i,r){var o=i.cmap,s=-1;if(o.p0e4!=null?s=o.p0e4:o.p3e1!=null?s=o.p3e1:o.p1e0!=null?s=o.p1e0:o.p0e3!=null&&(s=o.p0e3),s==-1)throw"no familiar platform and encoding!";var l=o.tables[s];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(r<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var f=l.groups[u];if(f[0]<=r&&r<=f[1])return f[2]+(r-f[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(i,r){var o={cmds:[],crds:[]};if(i.SVG&&i.SVG.entries[r]){var s=i.SVG.entries[r];return s==null?o:(typeof s=="string"&&(s=e.SVG.toPath(s),i.SVG.entries[r]=s),s)}if(i.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:i.CFF.Private?i.CFF.Private.defaultWidthX:0,open:!1},c=i.CFF,u=i.CFF.Private;if(c.ROS){for(var f=0;c.FDSelect[f+2]<=r;)f+=2;u=c.FDArray[c.FDSelect[f+1]].Private}e.U._drawCFF(i.CFF.CharStrings[r],l,c,u,o)}else i.glyf&&e.U._drawGlyf(r,i,o);return o},e.U._drawGlyf=function(i,r,o){var s=r.glyf[i];s==null&&(s=r.glyf[i]=e.glyf._parseGlyf(r,i)),s!=null&&(s.noc>-1?e.U._simpleGlyph(s,o):e.U._compoGlyph(s,r,o))},e.U._simpleGlyph=function(i,r){for(var o=0;o<i.noc;o++){for(var s=o==0?0:i.endPts[o-1]+1,l=i.endPts[o],c=s;c<=l;c++){var u=c==s?l:c-1,f=c==l?s:c+1,h=1&i.flags[c],p=1&i.flags[u],v=1&i.flags[f],g=i.xs[c],m=i.ys[c];if(c==s)if(h){if(!p){e.U.P.moveTo(r,g,m);continue}e.U.P.moveTo(r,i.xs[u],i.ys[u])}else p?e.U.P.moveTo(r,i.xs[u],i.ys[u]):e.U.P.moveTo(r,(i.xs[u]+g)/2,(i.ys[u]+m)/2);h?p&&e.U.P.lineTo(r,g,m):v?e.U.P.qcurveTo(r,g,m,i.xs[f],i.ys[f]):e.U.P.qcurveTo(r,g,m,(g+i.xs[f])/2,(m+i.ys[f])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(i,r,o){for(var s=0;s<i.parts.length;s++){var l={cmds:[],crds:[]},c=i.parts[s];e.U._drawGlyf(c.glyphIndex,r,l);for(var u=c.m,f=0;f<l.crds.length;f+=2){var h=l.crds[f],p=l.crds[f+1];o.crds.push(h*u.a+p*u.b+u.tx),o.crds.push(h*u.c+p*u.d+u.ty)}for(f=0;f<l.cmds.length;f++)o.cmds.push(l.cmds[f])}},e.U._getGlyphClass=function(i,r){var o=e._lctf.getInterval(r,i);return o==-1?0:r[o+2]},e.U.getPairAdjustment=function(i,r,o){var s=0,l=!1;if(i.GPOS)for(var c=i.GPOS,u=c.lookupList,f=c.featureList,h=[],p=0;p<f.length;p++){var v=f[p];if(v.tag=="kern"){l=!0;for(var g=0;g<v.tab.length;g++)if(!h[v.tab[g]]){h[v.tab[g]]=!0;for(var m=u[v.tab[g]],d=0;d<m.tabs.length;d++)if(m.tabs[d]!=null){var _,S=m.tabs[d];if((!S.coverage||(_=e._lctf.coverageIndex(S.coverage,r))!=-1)&&m.ltype!=1){if(m.ltype==2){var b;if(S.fmt==1){var M=S.pairsets[_];for(p=0;p<M.length;p++)M[p].gid2==o&&(b=M[p])}else if(S.fmt==2){var x=e.U._getGlyphClass(r,S.classDef1),D=e.U._getGlyphClass(o,S.classDef2);b=S.matrix[x][D]}b&&b.val1&&b.val1[2]&&(s+=b.val1[2]),b&&b.val2&&b.val2[0]&&(s+=b.val2[0])}}}}}}if(i.kern&&!l){var L=i.kern.glyph1.indexOf(r);if(L!=-1){var E=i.kern.rval[L].glyph2.indexOf(o);E!=-1&&(s+=i.kern.rval[L].vals[E])}}return s},e.U._applySubs=function(i,r,o,s){for(var l=i.length-r-1,c=0;c<o.tabs.length;c++)if(o.tabs[c]!=null){var u,f=o.tabs[c];if(!f.coverage||(u=e._lctf.coverageIndex(f.coverage,i[r]))!=-1){if(o.ltype==1)i[r],f.fmt==1?i[r]=i[r]+f.delta:i[r]=f.newg[u];else if(o.ltype==4)for(var h=f.vals[u],p=0;p<h.length;p++){var v=h[p],g=v.chain.length;if(!(g>l)){for(var m=!0,d=0,_=0;_<g;_++){for(;i[r+d+(1+_)]==-1;)d++;v.chain[_]!=i[r+d+(1+_)]&&(m=!1)}if(m){for(i[r]=v.nglyph,_=0;_<g+d;_++)i[r+_+1]=-1;break}}}else if(o.ltype==5&&f.fmt==2)for(var S=e._lctf.getInterval(f.cDef,i[r]),b=f.cDef[S+2],M=f.scset[b],x=0;x<M.length;x++){var D=M[x],L=D.input;if(!(L.length>l)){for(m=!0,_=0;_<L.length;_++){var E=e._lctf.getInterval(f.cDef,i[r+1+_]);if(S==-1&&f.cDef[E+2]!=L[_]){m=!1;break}}if(m){var T=D.substLookupRecords;for(p=0;p<T.length;p+=2)T[p],T[p+1]}}}else if(o.ltype==6&&f.fmt==3){if(!e.U._glsCovered(i,f.backCvg,r-f.backCvg.length)||!e.U._glsCovered(i,f.inptCvg,r)||!e.U._glsCovered(i,f.ahedCvg,r+f.inptCvg.length))continue;var B=f.lookupRec;for(x=0;x<B.length;x+=2){S=B[x];var U=s[B[x+1]];e.U._applySubs(i,r+S,U,s)}}}}},e.U._glsCovered=function(i,r,o){for(var s=0;s<r.length;s++)if(e._lctf.coverageIndex(r[s],i[o+s])==-1)return!1;return!0},e.U.glyphsToPath=function(i,r,o){for(var s={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var u=r[c];if(u!=-1){for(var f=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,h=e.U.glyphToPath(i,u),p=0;p<h.crds.length;p+=2)s.crds.push(h.crds[p]+l),s.crds.push(h.crds[p+1]);for(o&&s.cmds.push(o),p=0;p<h.cmds.length;p++)s.cmds.push(h.cmds[p]);o&&s.cmds.push("X"),l+=i.hmtx.aWidth[u],c<r.length-1&&(l+=e.U.getPairAdjustment(i,u,f))}}return s},e.U.P={},e.U.P.moveTo=function(i,r,o){i.cmds.push("M"),i.crds.push(r,o)},e.U.P.lineTo=function(i,r,o){i.cmds.push("L"),i.crds.push(r,o)},e.U.P.curveTo=function(i,r,o,s,l,c,u){i.cmds.push("C"),i.crds.push(r,o,s,l,c,u)},e.U.P.qcurveTo=function(i,r,o,s,l){i.cmds.push("Q"),i.crds.push(r,o,s,l)},e.U.P.closePath=function(i){i.cmds.push("Z")},e.U._drawCFF=function(i,r,o,s,l){for(var c=r.stack,u=r.nStems,f=r.haveWidth,h=r.width,p=r.open,v=0,g=r.x,m=r.y,d=0,_=0,S=0,b=0,M=0,x=0,D=0,L=0,E=0,T=0,B={val:0,size:0};v<i.length;){e.CFF.getCharString(i,v,B);var U=B.val;if(v+=B.size,U=="o1"||U=="o18")c.length%2!=0&&!f&&(h=c.shift()+s.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(U=="o3"||U=="o23")c.length%2!=0&&!f&&(h=c.shift()+s.nominalWidthX),u+=c.length>>1,c.length=0,f=!0;else if(U=="o4")c.length>1&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),p&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,g,m),p=!0;else if(U=="o5")for(;c.length>0;)g+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,g,m);else if(U=="o6"||U=="o7")for(var C=c.length,N=U=="o6",R=0;R<C;R++){var k=c.shift();N?g+=k:m+=k,N=!N,e.U.P.lineTo(l,g,m)}else if(U=="o8"||U=="o24"){C=c.length;for(var K=0;K+6<=C;)d=g+c.shift(),_=m+c.shift(),S=d+c.shift(),b=_+c.shift(),g=S+c.shift(),m=b+c.shift(),e.U.P.curveTo(l,d,_,S,b,g,m),K+=6;U=="o24"&&(g+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,g,m))}else{if(U=="o11")break;if(U=="o1234"||U=="o1235"||U=="o1236"||U=="o1237")U=="o1234"&&(_=m,S=(d=g+c.shift())+c.shift(),T=b=_+c.shift(),x=b,L=m,g=(D=(M=(E=S+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,d,_,S,b,E,T),e.U.P.curveTo(l,M,x,D,L,g,m)),U=="o1235"&&(d=g+c.shift(),_=m+c.shift(),S=d+c.shift(),b=_+c.shift(),E=S+c.shift(),T=b+c.shift(),M=E+c.shift(),x=T+c.shift(),D=M+c.shift(),L=x+c.shift(),g=D+c.shift(),m=L+c.shift(),c.shift(),e.U.P.curveTo(l,d,_,S,b,E,T),e.U.P.curveTo(l,M,x,D,L,g,m)),U=="o1236"&&(d=g+c.shift(),_=m+c.shift(),S=d+c.shift(),T=b=_+c.shift(),x=b,D=(M=(E=S+c.shift())+c.shift())+c.shift(),L=x+c.shift(),g=D+c.shift(),e.U.P.curveTo(l,d,_,S,b,E,T),e.U.P.curveTo(l,M,x,D,L,g,m)),U=="o1237"&&(d=g+c.shift(),_=m+c.shift(),S=d+c.shift(),b=_+c.shift(),E=S+c.shift(),T=b+c.shift(),M=E+c.shift(),x=T+c.shift(),D=M+c.shift(),L=x+c.shift(),Math.abs(D-g)>Math.abs(L-m)?g=D+c.shift():m=L+c.shift(),e.U.P.curveTo(l,d,_,S,b,E,T),e.U.P.curveTo(l,M,x,D,L,g,m));else if(U=="o14"){if(c.length>0&&!f&&(h=c.shift()+o.nominalWidthX,f=!0),c.length==4){var q=c.shift(),z=c.shift(),X=c.shift(),A=c.shift(),Y=e.CFF.glyphBySE(o,X),G=e.CFF.glyphBySE(o,A);e.U._drawCFF(o.CharStrings[Y],r,o,s,l),r.x=q,r.y=z,e.U._drawCFF(o.CharStrings[G],r,o,s,l)}p&&(e.U.P.closePath(l),p=!1)}else if(U=="o19"||U=="o20")c.length%2!=0&&!f&&(h=c.shift()+s.nominalWidthX),u+=c.length>>1,c.length=0,f=!0,v+=u+7>>3;else if(U=="o21")c.length>2&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),m+=c.pop(),g+=c.pop(),p&&e.U.P.closePath(l),e.U.P.moveTo(l,g,m),p=!0;else if(U=="o22")c.length>1&&!f&&(h=c.shift()+s.nominalWidthX,f=!0),g+=c.pop(),p&&e.U.P.closePath(l),e.U.P.moveTo(l,g,m),p=!0;else if(U=="o25"){for(;c.length>6;)g+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,g,m);d=g+c.shift(),_=m+c.shift(),S=d+c.shift(),b=_+c.shift(),g=S+c.shift(),m=b+c.shift(),e.U.P.curveTo(l,d,_,S,b,g,m)}else if(U=="o26")for(c.length%2&&(g+=c.shift());c.length>0;)d=g,_=m+c.shift(),g=S=d+c.shift(),m=(b=_+c.shift())+c.shift(),e.U.P.curveTo(l,d,_,S,b,g,m);else if(U=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)_=m,S=(d=g+c.shift())+c.shift(),b=_+c.shift(),g=S+c.shift(),m=b,e.U.P.curveTo(l,d,_,S,b,g,m);else if(U=="o10"||U=="o29"){var H=U=="o10"?s:o;if(c.length==0)console.debug("error: empty stack");else{var W=c.pop(),O=H.Subrs[W+H.Bias];r.x=g,r.y=m,r.nStems=u,r.haveWidth=f,r.width=h,r.open=p,e.U._drawCFF(O,r,o,s,l),g=r.x,m=r.y,u=r.nStems,f=r.haveWidth,h=r.width,p=r.open}}else if(U=="o30"||U=="o31"){var P=c.length,ne=(K=0,U=="o31");for(K+=P-(C=-3&P);K<C;)ne?(_=m,S=(d=g+c.shift())+c.shift(),m=(b=_+c.shift())+c.shift(),C-K==5?(g=S+c.shift(),K++):g=S,ne=!1):(d=g,_=m+c.shift(),S=d+c.shift(),b=_+c.shift(),g=S+c.shift(),C-K==5?(m=b+c.shift(),K++):m=b,ne=!0),e.U.P.curveTo(l,d,_,S,b,g,m),K+=4}else{if((U+"").charAt(0)=="o")throw console.debug("Unknown operation: "+U,i),U;c.push(U)}}}r.x=g,r.y=m,r.nStems=u,r.haveWidth=f,r.width=h,r.open=p};var t=e,n={Typr:t};return a.Typr=t,a.default=n,Object.defineProperty(a,"__esModule",{value:!0}),a}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function Fv(){return function(a){var e=Uint8Array,t=Uint16Array,n=Uint32Array,i=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(U,C){for(var N=new t(31),R=0;R<31;++R)N[R]=C+=1<<U[R-1];var k=new n(N[30]);for(R=1;R<30;++R)for(var K=N[R];K<N[R+1];++K)k[K]=K-N[R]<<5|R;return[N,k]},l=s(i,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var f=s(r,0)[0],h=new t(32768),p=0;p<32768;++p){var v=(43690&p)>>>1|(21845&p)<<1;v=(61680&(v=(52428&v)>>>2|(13107&v)<<2))>>>4|(3855&v)<<4,h[p]=((65280&v)>>>8|(255&v)<<8)>>>1}var g=function(U,C,N){for(var R=U.length,k=0,K=new t(C);k<R;++k)++K[U[k]-1];var q,z=new t(C);for(k=0;k<C;++k)z[k]=z[k-1]+K[k-1]<<1;if(N){q=new t(1<<C);var X=15-C;for(k=0;k<R;++k)if(U[k])for(var A=k<<4|U[k],Y=C-U[k],G=z[U[k]-1]++<<Y,H=G|(1<<Y)-1;G<=H;++G)q[h[G]>>>X]=A}else for(q=new t(R),k=0;k<R;++k)U[k]&&(q[k]=h[z[U[k]-1]++]>>>15-U[k]);return q},m=new e(288);for(p=0;p<144;++p)m[p]=8;for(p=144;p<256;++p)m[p]=9;for(p=256;p<280;++p)m[p]=7;for(p=280;p<288;++p)m[p]=8;var d=new e(32);for(p=0;p<32;++p)d[p]=5;var _=g(m,9,1),S=g(d,5,1),b=function(U){for(var C=U[0],N=1;N<U.length;++N)U[N]>C&&(C=U[N]);return C},M=function(U,C,N){var R=C/8|0;return(U[R]|U[R+1]<<8)>>(7&C)&N},x=function(U,C){var N=C/8|0;return(U[N]|U[N+1]<<8|U[N+2]<<16)>>(7&C)},D=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],L=function(U,C,N){var R=new Error(C||D[U]);if(R.code=U,Error.captureStackTrace&&Error.captureStackTrace(R,L),!N)throw R;return R},E=function(U,C,N){var R=U.length;if(!R||N&&!N.l&&R<5)return C||new e(0);var k=!C||N,K=!N||N.i;N||(N={}),C||(C=new e(3*R));var q,z=function(de){var Re=C.length;if(de>Re){var Pe=new e(Math.max(2*Re,de));Pe.set(C),C=Pe}},X=N.f||0,A=N.p||0,Y=N.b||0,G=N.l,H=N.d,W=N.m,O=N.n,P=8*R;do{if(!G){N.f=X=M(U,A,1);var ne=M(U,A+1,3);if(A+=3,!ne){var oe=U[(Se=((q=A)/8|0)+(7&q&&1)+4)-4]|U[Se-3]<<8,re=Se+oe;if(re>R){K&&L(0);break}k&&z(Y+oe),C.set(U.subarray(Se,re),Y),N.b=Y+=oe,N.p=A=8*re;continue}if(ne==1)G=_,H=S,W=9,O=5;else if(ne==2){var le=M(U,A,31)+257,fe=M(U,A+10,15)+4,ve=le+M(U,A+5,31)+1;A+=14;for(var Ee=new e(ve),xe=new e(19),ye=0;ye<fe;++ye)xe[o[ye]]=M(U,A+3*ye,7);A+=3*fe;var Ie=b(xe),ue=(1<<Ie)-1,Me=g(xe,Ie,1);for(ye=0;ye<ve;){var Se,pe=Me[M(U,A,ue)];if(A+=15&pe,(Se=pe>>>4)<16)Ee[ye++]=Se;else{var I=0,w=0;for(Se==16?(w=3+M(U,A,3),A+=2,I=Ee[ye-1]):Se==17?(w=3+M(U,A,7),A+=3):Se==18&&(w=11+M(U,A,127),A+=7);w--;)Ee[ye++]=I}}var j=Ee.subarray(0,le),$=Ee.subarray(le);W=b(j),O=b($),G=g(j,W,1),H=g($,O,1)}else L(1);if(A>P){K&&L(0);break}}k&&z(Y+131072);for(var ae=(1<<W)-1,me=(1<<O)-1,y=A;;y=A){var ee=(I=G[x(U,A)&ae])>>>4;if((A+=15&I)>P){K&&L(0);break}if(I||L(2),ee<256)C[Y++]=ee;else{if(ee==256){y=A,G=null;break}var Z=ee-254;if(ee>264){var _e=i[ye=ee-257];Z=M(U,A,(1<<_e)-1)+c[ye],A+=_e}var be=H[x(U,A)&me],we=be>>>4;if(be||L(3),A+=15&be,$=f[we],we>3&&(_e=r[we],$+=x(U,A)&(1<<_e)-1,A+=_e),A>P){K&&L(0);break}k&&z(Y+131072);for(var he=Y+Z;Y<he;Y+=4)C[Y]=C[Y-$],C[Y+1]=C[Y+1-$],C[Y+2]=C[Y+2-$],C[Y+3]=C[Y+3-$];Y=he}}N.l=G,N.p=y,N.b=Y,G&&(X=1,N.m=W,N.d=H,N.n=O)}while(!X);return Y==C.length?C:function(de,Re,Pe){(Re==null||Re<0)&&(Re=0),(Pe==null||Pe>de.length)&&(Pe=de.length);var nt=new(de instanceof t?t:de instanceof n?n:e)(Pe-Re);return nt.set(de.subarray(Re,Pe)),nt}(C,0,Y)},T=new e(0),B=typeof TextDecoder<"u"&&new TextDecoder;try{B.decode(T,{stream:!0})}catch{}return a.convert_streams=function(U){var C=new DataView(U),N=0;function R(){var le=C.getUint16(N);return N+=2,le}function k(){var le=C.getUint32(N);return N+=4,le}function K(le){oe.setUint16(re,le),re+=2}function q(le){oe.setUint32(re,le),re+=4}for(var z={signature:k(),flavor:k(),length:k(),numTables:R(),reserved:R(),totalSfntSize:k(),majorVersion:R(),minorVersion:R(),metaOffset:k(),metaLength:k(),metaOrigLength:k(),privOffset:k(),privLength:k()},X=0;Math.pow(2,X)<=z.numTables;)X++;X--;for(var A=16*Math.pow(2,X),Y=16*z.numTables-A,G=12,H=[],W=0;W<z.numTables;W++)H.push({tag:k(),offset:k(),compLength:k(),origLength:k(),origChecksum:k()}),G+=16;var O,P=new Uint8Array(12+16*H.length+H.reduce(function(le,fe){return le+fe.origLength+4},0)),ne=P.buffer,oe=new DataView(ne),re=0;return q(z.flavor),K(z.numTables),K(A),K(X),K(Y),H.forEach(function(le){q(le.tag),q(le.origChecksum),q(G),q(le.origLength),le.outOffset=G,(G+=le.origLength)%4!=0&&(G+=4-G%4)}),H.forEach(function(le){var fe,ve=U.slice(le.offset,le.offset+le.compLength);if(le.compLength!=le.origLength){var Ee=new Uint8Array(le.origLength);fe=new Uint8Array(ve,2),E(fe,Ee)}else Ee=new Uint8Array(ve);P.set(Ee,le.outOffset);var xe=0;(G=le.outOffset+le.origLength)%4!=0&&(xe=4-G%4),P.set(new Uint8Array(xe).buffer,le.outOffset+le.origLength),O=G+xe}),ne.slice(0,O)},Object.defineProperty(a,"__esModule",{value:!0}),a}({}).convert_streams}function Ov(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},n={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},i=1,r=2,o=4,s=8,l=16,c=32;let u;function f(b){if(!u){const M={R:r,L:i,D:o,C:l,U:c,T:s};u=new Map;for(let x in n){let D=0;n[x].split(",").forEach(L=>{let[E,T]=L.split("+");E=parseInt(E,36),T=T?parseInt(T,36):0,u.set(D+=E,M[x]);for(let B=T;B--;)u.set(++D,M[x])})}}return u.get(b)||c}const h=1,p=2,v=3,g=4,m=[null,"isol","init","fina","medi"];function d(b){const M=new Uint8Array(b.length);let x=c,D=h,L=-1;for(let E=0;E<b.length;E++){const T=b.codePointAt(E);let B=f(T)|0,U=h;B&s||(x&(i|o|l)?B&(r|o|l)?(U=v,(D===h||D===v)&&M[L]++):B&(i|c)&&(D===p||D===g)&&M[L]--:x&(r|c)&&(D===p||D===g)&&M[L]--,D=M[E]=U,x=B,L=E,T>65535&&E++)}return M}function _(b,M){const x=[];for(let L=0;L<M.length;L++){const E=M.codePointAt(L);E>65535&&L++,x.push(a.U.codeToGlyph(b,E))}const D=b.GSUB;if(D){const{lookupList:L,featureList:E}=D;let T;const B=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws)$/,U=[];E.forEach(C=>{if(B.test(C.tag))for(let N=0;N<C.tab.length;N++){if(U[C.tab[N]])continue;U[C.tab[N]]=!0;const R=L[C.tab[N]],k=/^(isol|init|fina|medi)$/.test(C.tag);k&&!T&&(T=d(M));for(let K=0;K<x.length;K++)(!T||!k||m[T[K]]===C.tag)&&a.U._applySubs(x,K,R,L)}})}return x}function S(b){const M=Object.create(null),x={unitsPerEm:b.head.unitsPerEm,ascender:b.hhea.ascender,descender:b.hhea.descender,forEachGlyph(D,L,E,T){let B=0;const U=1/x.unitsPerEm*L,C=_(b,D);let N=0,R=-1;return C.forEach((k,K)=>{if(k!==-1){let q=M[k];if(!q){const{cmds:z,crds:X}=a.U.glyphToPath(b,k);let A="",Y=0;for(let P=0,ne=z.length;P<ne;P++){const oe=t[z[P]];A+=z[P];for(let re=1;re<=oe;re++)A+=(re>1?",":"")+X[Y++]}let G,H,W,O;if(X.length){G=H=1/0,W=O=-1/0;for(let P=0,ne=X.length;P<ne;P+=2){let oe=X[P],re=X[P+1];oe<G&&(G=oe),re<H&&(H=re),oe>W&&(W=oe),re>O&&(O=re)}}else G=W=H=O=0;q=M[k]={index:k,advanceWidth:b.hmtx.aWidth[k],xMin:G,yMin:H,xMax:W,yMax:O,path:A,pathCommandCount:z.length}}R!==-1&&(B+=a.U.getPairAdjustment(b,R,k)*U),T.call(null,q,B,N),q.advanceWidth&&(B+=q.advanceWidth*U),E&&(B+=E*L),R=k}N+=D.codePointAt(N)>65535?2:1}),B}};return x}return function(M){const x=new Uint8Array(M,0,4),D=a._bin.readASCII(x,0,4);if(D==="wOFF")M=e(M);else if(D==="wOF2")throw new Error("woff2 fonts not supported");return S(a.parse(M)[0])}}const Nv=lr({name:"Typr Font Parser",dependencies:[Iv,Fv,Ov],init(a,e,t){const n=a(),i=e();return t(n,i)}}),Zi={defaultFontURL:"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff",sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},Bv=new Ve;function Yi(){return(self.performance||Date).now()}const mc=Object.create(null);function kv(a,e){a=zv({},a);const t=Yi();if(a.font=Vv(a.font||Zi.defaultFontURL),a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||Zi.sdfGlyphSize,a.colorRanges!=null){let f={};for(let h in a.colorRanges)if(a.colorRanges.hasOwnProperty(h)){let p=a.colorRanges[h];typeof p!="number"&&(p=Bv.set(p).getHex()),f[h]=p}a.colorRanges=f}Object.freeze(a);const{textureWidth:n,sdfExponent:i}=Zi,{sdfGlyphSize:r}=a,o=n/r*4;let s=mc[r];if(!s){const f=document.createElement("canvas");f.width=n,f.height=r*256/o,s=mc[r]={glyphCount:0,sdfGlyphSize:r,sdfCanvas:f,sdfTexture:new qt(f,void 0,void 0,void 0,Jt,Jt),contextLost:!1,glyphsByFont:new Map},s.sdfTexture.generateMipmaps=!1,Gv(s)}const{sdfTexture:l,sdfCanvas:c}=s;let u=s.glyphsByFont.get(a.font);u||s.glyphsByFont.set(a.font,u=new Map),Wv(a).then(f=>{const{glyphIds:h,glyphPositions:p,fontSize:v,unitsPerEm:g,timings:m}=f,d=[],_=new Float32Array(h.length*4),S=v/g;let b=0,M=0;const x=Yi();h.forEach((B,U)=>{let C=u.get(B);if(!C){const{path:K,pathBounds:q}=f.glyphData[B],z=Math.max(q[2]-q[0],q[3]-q[1])/r*(Zi.sdfMargin*r+.5),X=s.glyphCount++,A=[q[0]-z,q[1]-z,q[2]+z,q[3]+z];u.set(B,C={path:K,atlasIndex:X,sdfViewBox:A}),d.push(C)}const{sdfViewBox:N}=C,R=p[M++],k=p[M++];_[b++]=R+N[0]*S,_[b++]=k+N[1]*S,_[b++]=R+N[2]*S,_[b++]=k+N[3]*S,h[U]=C.atlasIndex}),m.quads=(m.quads||0)+(Yi()-x);const D=Yi();m.sdf={};const L=c.height,E=Math.ceil(s.glyphCount/o),T=Math.pow(2,Math.ceil(Math.log2(E*r)));T>L&&(console.info(`Increasing SDF texture size ${L}->${T}`),Uv(c,n,T),l.dispose()),qn.all(d.map(B=>fu(B,s,a.gpuAccelerateSDF).then(({timing:U})=>{m.sdf[B.atlasIndex]=U}))).then(()=>{d.length&&!s.contextLost&&(hu(s),l.needsUpdate=!0),m.sdfTotal=Yi()-D,m.total=Yi()-t,e(Object.freeze({parameters:a,sdfTexture:l,sdfGlyphSize:r,sdfExponent:i,glyphBounds:_,glyphAtlasIndices:h,glyphColors:f.glyphColors,caretPositions:f.caretPositions,caretHeight:f.caretHeight,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings,get totalBounds(){return console.log("totalBounds deprecated, use blockBounds instead"),f.blockBounds},get totalBlockSize(){console.log("totalBlockSize deprecated, use blockBounds instead");const[B,U,C,N]=f.blockBounds;return[C-B,N-U]}}))})}),qn.all([]).then(()=>{s.contextLost||Dv(c)})}function fu({path:a,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:n,sdfCanvas:i,contextLost:r},o){if(r)return Promise.resolve({timing:-1});const{textureWidth:s,sdfExponent:l}=Zi,c=Math.max(t[2]-t[0],t[3]-t[1]),u=Math.floor(e/4),f=u%(s/n)*n,h=Math.floor(u/(s/n))*n,p=e%4;return Pv(n,n,a,t,c,l,i,f,h,p,o)}function Gv(a){const e=a.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),a.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),a.contextLost=!1;const n=[];a.glyphsByFont.forEach(i=>{i.forEach(r=>{n.push(fu(r,a,!0))})}),qn.all(n).then(()=>{hu(a),a.sdfTexture.needsUpdate=!0})})}function zv(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let ba;function Vv(a){return ba||(ba=typeof document>"u"?{}:document.createElement("a")),ba.href=a,ba.href}function hu(a){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=a,{width:n,height:i}=e,r=a.sdfCanvas.getContext("webgl");let o=t.image.data;(!o||o.length!==n*i*4)&&(o=new Uint8Array(n*i*4),t.image={width:n,height:i,data:o},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,n,i,r.RGBA,r.UNSIGNED_BYTE,o)}}const Hv=lr({name:"Typesetter",dependencies:[Zi,Nv,Rv,bv],init(a,e,t,n){const{defaultFontURL:i}=a;return t(e,n(),{defaultFontURL:i})}}),Wv=lr({name:"Typesetter",dependencies:[Hv,Mv],init(a,e){return function(t){const n=new e;return a.typeset(t,n.resolve),n}},getTransferables(a){const e=[a.glyphPositions.buffer,a.glyphIds.buffer];return a.caretPositions&&e.push(a.caretPositions.buffer),a.glyphColors&&e.push(a.glyphColors.buffer),e}}),Xv=(()=>{const a={};function e(l){let c=a[l];if(!c){const u=new Ns(1,1,l,l),f=u.clone(),h=u.attributes,p=f.attributes,v=new hn,g=h.uv.count;for(let m=0;m<g;m++)p.position.array[m*3]*=-1,p.normal.array[m*3+2]*=-1;["position","normal","uv"].forEach(m=>{v.setAttribute(m,new cn([...h[m].array,...p[m].array],h[m].itemSize))}),v.setIndex([...u.index.array,...f.index.array.map(m=>m+g)]),v.translate(.5,.5,0),c=a[l]=v}return c}const t="aTroikaGlyphBounds",n="aTroikaGlyphIndex",i="aTroikaGlyphColor";class r extends Cg{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Br,this.boundingBox=new ar}computeBoundingSphere(){}computeBoundingBox(){}setSide(c){const u=this.getIndex().count;this.setDrawRange(c===Yt?u/2:0,c===bn?u:u/2)}set detail(c){if(c!==this._detail){this._detail=c,(typeof c!="number"||c<1)&&(c=1);let u=e(c);["position","normal","uv"].forEach(f=>{this.attributes[f]=u.attributes[f].clone()}),this.setIndex(u.getIndex().clone())}}get detail(){return this._detail}set curveRadius(c){c!==this._curveRadius&&(this._curveRadius=c,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(c,u,f,h,p){o(this,t,c,4),o(this,n,u,1),o(this,i,p,3),this._blockBounds=f,this._chunkedBounds=h,s(this,u.length),this._updateBounds()}_updateBounds(){const c=this._blockBounds;if(c){const{curveRadius:u,boundingBox:f}=this;if(u){const{PI:h,floor:p,min:v,max:g,sin:m,cos:d}=Math,_=h/2,S=h*2,b=Math.abs(u),M=c[0]/b,x=c[2]/b,D=p((M+_)/S)!==p((x+_)/S)?-b:v(m(M)*b,m(x)*b),L=p((M-_)/S)!==p((x-_)/S)?b:g(m(M)*b,m(x)*b),E=p((M+h)/S)!==p((x+h)/S)?b*2:g(b-d(M)*b,b-d(x)*b);f.min.set(D,c[1],u<0?-E:0),f.max.set(L,c[3],u<0?0:E)}else f.min.set(c[0],c[1],0),f.max.set(c[2],c[3],0);f.getBoundingSphere(this.boundingSphere)}}applyClipRect(c){let u=this.getAttribute(n).count,f=this._chunkedBounds;if(f)for(let h=f.length;h--;){u=f[h].end;let p=f[h].rect;if(p[1]<c.w&&p[3]>c.y&&p[0]<c.z&&p[2]>c.x)break}s(this,u)}}r.prototype.setAttribute||(r.prototype.setAttribute=function(l,c){return this.attributes[l]=c,this});function o(l,c,u,f){const h=l.getAttribute(c);u?h&&h.array.length===u.length?(h.array.set(u),h.needsUpdate=!0):(l.setAttribute(c,new Mg(u,f)),delete l._maxInstanceCount,l.dispose()):h&&l.deleteAttribute(c)}function s(l,c){l[l.hasOwnProperty("instanceCount")?"instanceCount":"maxInstancedCount"]=c}return r})(),jv=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,Yv=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,qv=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,Kv=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function Zv(a){const e=Gs(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new ze},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new yt(0,0,0,0)},uTroikaClipRect:{value:new yt(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new ze},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Ve},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new tt},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:jv,vertexTransform:Yv,fragmentDefs:qv,fragmentColorTransform:Kv,customRewriter({vertexShader:t,fragmentShader:n}){let i=/\buniform\s+vec3\s+diffuse\b/;return i.test(n)&&(n=n.replace(i,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),i.test(t)||(t=t.replace(uu,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:n}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const Jv=(()=>{const a=new qs({color:16777215,side:bn,transparent:!0}),e=8421504,t=new _t,n=new J,i=new J,r=[],o=new J,s="+x+y";function l(d){return Array.isArray(d)?d[0]:d}let c=()=>{const d=new an(new Ns(1,1),a);return c=()=>d,d},u=()=>{const d=new an(new Ns(1,1,32,1),a);return u=()=>d,d};const f={type:"syncstart"},h={type:"synccomplete"},p=["font","fontSize","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],v=p.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class g extends an{constructor(){const _=new Xv;super(_,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.fontSize=.1,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=e,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=s,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(_){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(_):(this._isSyncing=!0,this.dispatchEvent(f),kv({text:this.text,font:this.font,fontSize:this.fontSize||.1,letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF},S=>{this._isSyncing=!1,this._textRenderInfo=S,this.geometry.updateGlyphs(S.glyphBounds,S.glyphAtlasIndices,S.blockBounds,S.chunkedBounds,S.glyphColors);const b=this._queuedSyncs;b&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{b.forEach(M=>M&&M())})),this.dispatchEvent(h),_&&_()})))}onBeforeRender(_,S,b,M,x,D){this.sync(),x.isTroikaTextMaterial&&this._prepareForRender(x),x._hadOwnSide=x.hasOwnProperty("side"),this.geometry.setSide(x._actualSide=x.side),x.side=jn}onAfterRender(_,S,b,M,x,D){x._hadOwnSide?x.side=x._actualSide:delete x.side}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let _=this._derivedMaterial;const S=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=a.clone());if((!_||_.baseMaterial!==S)&&(_=this._derivedMaterial=Zv(S),S.addEventListener("dispose",function b(){S.removeEventListener("dispose",b),_.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let b=_._outlineMtl;return b||(b=_._outlineMtl=Object.create(_,{id:{value:_.id+.1}}),b.isTextOutlineMaterial=!0,b.depthWrite=!1,b.map=null,_.addEventListener("dispose",function M(){_.removeEventListener("dispose",M),b.dispose()})),[b,_]}else return _}set material(_){_&&_.isTroikaTextMaterial?(this._derivedMaterial=_,this._baseMaterial=_.baseMaterial):this._baseMaterial=_}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(_){this.geometry.detail=_}get curveRadius(){return this.geometry.curveRadius}set curveRadius(_){this.geometry.curveRadius=_}get customDepthMaterial(){return l(this.material).getDepthMaterial()}get customDistanceMaterial(){return l(this.material).getDistanceMaterial()}_prepareForRender(_){const S=_.isTextOutlineMaterial,b=_.uniforms,M=this.textRenderInfo;if(M){const{sdfTexture:L,blockBounds:E}=M;b.uTroikaSDFTexture.value=L,b.uTroikaSDFTextureSize.value.set(L.image.width,L.image.height),b.uTroikaSDFGlyphSize.value=M.sdfGlyphSize,b.uTroikaSDFExponent.value=M.sdfExponent,b.uTroikaTotalBounds.value.fromArray(E),b.uTroikaUseGlyphColors.value=!S&&!!M.glyphColors;let T=0,B=0,U=0,C,N,R,k=0,K=0;if(S){let{outlineWidth:z,outlineOffsetX:X,outlineOffsetY:A,outlineBlur:Y,outlineOpacity:G}=this;T=this._parsePercent(z)||0,B=Math.max(0,this._parsePercent(Y)||0),C=G,k=this._parsePercent(X)||0,K=this._parsePercent(A)||0}else U=Math.max(0,this._parsePercent(this.strokeWidth)||0),U&&(R=this.strokeColor,b.uTroikaStrokeColor.value.set(R??e),N=this.strokeOpacity,N==null&&(N=1)),C=this.fillOpacity;b.uTroikaDistanceOffset.value=T,b.uTroikaPositionOffset.value.set(k,K),b.uTroikaBlurRadius.value=B,b.uTroikaStrokeWidth.value=U,b.uTroikaStrokeOpacity.value=N,b.uTroikaFillOpacity.value=C??1,b.uTroikaCurveRadius.value=this.curveRadius||0;let q=this.clipRect;if(q&&Array.isArray(q)&&q.length===4)b.uTroikaClipRect.value.fromArray(q);else{const z=(this.fontSize||.1)*100;b.uTroikaClipRect.value.set(E[0]-z,E[1]-z,E[2]+z,E[3]+z)}this.geometry.applyClipRect(b.uTroikaClipRect.value)}b.uTroikaSDFDebug.value=!!this.debugSDF,_.polygonOffset=!!this.depthOffset,_.polygonOffsetFactor=_.polygonOffsetUnits=this.depthOffset||0;const x=S?this.outlineColor||0:this.color;if(x==null)delete _.color;else{const L=_.hasOwnProperty("color")?_.color:_.color=new Ve;(x!==L._input||typeof x=="object")&&L.set(L._input=x)}let D=this.orientation||s;if(D!==_._orientation){let L=b.uTroikaOrient.value;D=D.replace(/[^-+xyz]/g,"");let E=D!==s&&D.match(/^([-+])([xyz])([-+])([xyz])$/);if(E){let[,T,B,U,C]=E;n.set(0,0,0)[B]=T==="-"?1:-1,i.set(0,0,0)[C]=U==="-"?-1:1,t.lookAt(o,n.cross(i),i),L.setFromMatrix4(t)}else L.identity();_._orientation=D}}_parsePercent(_){if(typeof _=="string"){let S=_.match(/^(-?[\d.]+)%$/),b=S?parseFloat(S[1]):NaN;_=(isNaN(b)?0:b/100)*this.fontSize}return _}localPositionToTextCoords(_,S=new ze){S.copy(_);const b=this.curveRadius;return b&&(S.x=Math.atan2(_.x,Math.abs(b)-Math.abs(_.z))*Math.abs(b)),S}worldPositionToTextCoords(_,S=new ze){return n.copy(_),this.localPositionToTextCoords(this.worldToLocal(n),S)}raycast(_,S){const{textRenderInfo:b,curveRadius:M}=this;if(b){const x=b.blockBounds,D=M?u():c(),L=D.geometry,{position:E,uv:T}=L.attributes;for(let B=0;B<T.count;B++){let U=x[0]+T.getX(B)*(x[2]-x[0]);const C=x[1]+T.getY(B)*(x[3]-x[1]);let N=0;M&&(N=M-Math.cos(U/M)*M,U=Math.sin(U/M)*M),E.setXYZ(B,U,C,N)}L.boundingSphere=this.geometry.boundingSphere,L.boundingBox=this.geometry.boundingBox,D.matrixWorld=this.matrixWorld,D.material.side=this.material.side,r.length=0,D.raycast(_,r);for(let B=0;B<r.length;B++)r[B].object=this,S.push(r[B])}}copy(_){const S=this.geometry;return super.copy(_),this.geometry=S,v.forEach(b=>{this[b]=_[b]}),this}clone(){return new this.constructor().copy(this)}}p.forEach(d=>{const _="_private_"+d;Object.defineProperty(g.prototype,d,{get(){return this[_]},set(S){S!==this[_]&&(this[_]=S,this._needsSync=!0)}})});let m=!1;return Object.defineProperty(g.prototype,"anchor",{get(){return this._deprecated_anchor},set(d){this._deprecated_anchor=d,m||(console.warn("TextMesh: `anchor` has been deprecated; use `anchorX` and `anchorY` instead."),m=!0),Array.isArray(d)?(this.anchorX=`${(+d[0]||0)*100}%`,this.anchorY=`${(+d[1]||0)*100}%`):this.anchorX=this.anchorY=0}}),g})();function Qv(a){let e;const t=a[46].default,n=Nt(t,a,a[57],null);return{c(){n&&n.c()},l(i){n&&n.l(i)},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&67108864)&&Bt(n,t,i,i[57],e?Gt(t,i[57],r,null):kt(i[57]),null)},i(i){e||(Le(n,i),e=!0)},o(i){De(n,i),e=!1},d(i){n&&n.d(i)}}}function $v(a){let e,t,n;function i(o){a[47](o)}let r={mesh:a[15],lookAt:a[14],position:a[1],scale:a[2],rotation:a[3],castShadow:a[5],receiveShadow:a[6],frustumCulled:a[7],renderOrder:a[8],visible:a[9],userData:a[10],dispose:a[11],interactive:a[12],ignorePointer:a[13],viewportAware:a[4],$$slots:{default:[Qv]},$$scope:{ctx:a}};return a[0]!==void 0&&(r.inViewport=a[0]),e=new au({props:r}),sn.push(()=>un(e,"inViewport",i)),e.$on("click",a[48]),e.$on("contextmenu",a[49]),e.$on("pointerup",a[50]),e.$on("pointerdown",a[51]),e.$on("pointerenter",a[52]),e.$on("pointerleave",a[53]),e.$on("pointermove",a[54]),e.$on("viewportenter",a[55]),e.$on("viewportleave",a[56]),{c(){We(e.$$.fragment)},l(o){Xe(e.$$.fragment,o)},m(o,s){je(e,o,s),n=!0},p(o,s){const l={};s[0]&16384&&(l.lookAt=o[14]),s[0]&2&&(l.position=o[1]),s[0]&4&&(l.scale=o[2]),s[0]&8&&(l.rotation=o[3]),s[0]&32&&(l.castShadow=o[5]),s[0]&64&&(l.receiveShadow=o[6]),s[0]&128&&(l.frustumCulled=o[7]),s[0]&256&&(l.renderOrder=o[8]),s[0]&512&&(l.visible=o[9]),s[0]&1024&&(l.userData=o[10]),s[0]&2048&&(l.dispose=o[11]),s[0]&4096&&(l.interactive=o[12]),s[0]&8192&&(l.ignorePointer=o[13]),s[0]&16&&(l.viewportAware=o[4]),s[1]&67108864&&(l.$$scope={dirty:s,ctx:o}),!t&&s[0]&1&&(t=!0,l.inViewport=o[0],fn(()=>t=!1)),e.$set(l)},i(o){n||(Le(e.$$.fragment,o),n=!0)},o(o){De(e.$$.fragment,o),n=!1},d(o){Ye(e,o)}}}function e0(a,e,t){let{$$slots:n={},$$scope:i}=e,{position:r=void 0}=e,{scale:o=void 0}=e,{rotation:s=void 0}=e,{viewportAware:l=!1}=e,{inViewport:c=!1}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:h=void 0}=e,{renderOrder:p=void 0}=e,{visible:v=void 0}=e,{userData:g=void 0}=e,{dispose:m=void 0}=e,{interactive:d=!1}=e,{ignorePointer:_=!1}=e,{lookAt:S=void 0}=e,{text:b=void 0}=e,{anchorX:M=void 0}=e,{anchorY:x=void 0}=e,{curveRadius:D=void 0}=e,{font:L=void 0}=e,{fontSize:E=void 0}=e,{letterSpacing:T=void 0}=e,{lineHeight:B=void 0}=e,{maxWidth:U=void 0}=e,{overflowWrap:C=void 0}=e,{textAlign:N=void 0}=e,{textIndent:R=void 0}=e,{whiteSpace:k=void 0}=e,{material:K=void 0}=e,{color:q=void 0}=e,{depthOffset:z=void 0}=e,{clipRect:X=void 0}=e,{glyphGeometryDetail:A=void 0}=e,{sdfGlyphSize:Y=void 0}=e,{outlineWidth:G=void 0}=e,{outlineColor:H=void 0}=e,{outlineOpacity:W=void 0}=e,{outlineBlur:O=void 0}=e,{outlineOffsetX:P=void 0}=e,{outlineOffsetY:ne=void 0}=e,{strokeWidth:oe=void 0}=e,{strokeColor:re=void 0}=e,{strokeOpacity:le=void 0}=e,{fillOpacity:fe=void 0}=e,{direction:ve=void 0}=e;const Ee=new Jv,xe=()=>Ee,{invalidate:ye}=Kt(),Ie=Or();function ue(y){c=y,t(0,c)}function Me(y){Fe.call(this,a,y)}function Se(y){Fe.call(this,a,y)}function pe(y){Fe.call(this,a,y)}function I(y){Fe.call(this,a,y)}function w(y){Fe.call(this,a,y)}function j(y){Fe.call(this,a,y)}function $(y){Fe.call(this,a,y)}function ae(y){Fe.call(this,a,y)}function me(y){Fe.call(this,a,y)}return a.$$set=y=>{"position"in y&&t(1,r=y.position),"scale"in y&&t(2,o=y.scale),"rotation"in y&&t(3,s=y.rotation),"viewportAware"in y&&t(4,l=y.viewportAware),"inViewport"in y&&t(0,c=y.inViewport),"castShadow"in y&&t(5,u=y.castShadow),"receiveShadow"in y&&t(6,f=y.receiveShadow),"frustumCulled"in y&&t(7,h=y.frustumCulled),"renderOrder"in y&&t(8,p=y.renderOrder),"visible"in y&&t(9,v=y.visible),"userData"in y&&t(10,g=y.userData),"dispose"in y&&t(11,m=y.dispose),"interactive"in y&&t(12,d=y.interactive),"ignorePointer"in y&&t(13,_=y.ignorePointer),"lookAt"in y&&t(14,S=y.lookAt),"text"in y&&t(16,b=y.text),"anchorX"in y&&t(17,M=y.anchorX),"anchorY"in y&&t(18,x=y.anchorY),"curveRadius"in y&&t(19,D=y.curveRadius),"font"in y&&t(20,L=y.font),"fontSize"in y&&t(21,E=y.fontSize),"letterSpacing"in y&&t(22,T=y.letterSpacing),"lineHeight"in y&&t(23,B=y.lineHeight),"maxWidth"in y&&t(24,U=y.maxWidth),"overflowWrap"in y&&t(25,C=y.overflowWrap),"textAlign"in y&&t(26,N=y.textAlign),"textIndent"in y&&t(27,R=y.textIndent),"whiteSpace"in y&&t(28,k=y.whiteSpace),"material"in y&&t(29,K=y.material),"color"in y&&t(30,q=y.color),"depthOffset"in y&&t(31,z=y.depthOffset),"clipRect"in y&&t(32,X=y.clipRect),"glyphGeometryDetail"in y&&t(33,A=y.glyphGeometryDetail),"sdfGlyphSize"in y&&t(34,Y=y.sdfGlyphSize),"outlineWidth"in y&&t(35,G=y.outlineWidth),"outlineColor"in y&&t(36,H=y.outlineColor),"outlineOpacity"in y&&t(37,W=y.outlineOpacity),"outlineBlur"in y&&t(38,O=y.outlineBlur),"outlineOffsetX"in y&&t(39,P=y.outlineOffsetX),"outlineOffsetY"in y&&t(40,ne=y.outlineOffsetY),"strokeWidth"in y&&t(41,oe=y.strokeWidth),"strokeColor"in y&&t(42,re=y.strokeColor),"strokeOpacity"in y&&t(43,le=y.strokeOpacity),"fillOpacity"in y&&t(44,fe=y.fillOpacity),"direction"in y&&t(45,ve=y.direction),"$$scope"in y&&t(57,i=y.$$scope)},a.$$.update=()=>{if(a.$$.dirty[0]&2147418112|a.$$.dirty[1]&32767){const y=xe();b!==void 0&&(y.text=b),M!==void 0&&(y.anchorX=M),x!==void 0&&(y.anchorY=x),D!==void 0&&(y.curveRadius=D),L!==void 0&&(y.font=L),E!==void 0&&(y.fontSize=E),T!==void 0&&(y.letterSpacing=T),B!==void 0&&(y.lineHeight=B),U!==void 0&&(y.maxWidth=U),C!==void 0&&(y.overflowWrap=C),N!==void 0&&(y.textAlign=N),R!==void 0&&(y.textIndent=R),k!==void 0&&(y.whiteSpace=k),K&&(y.material=K),q!==void 0&&(y.color=q),z!==void 0&&(y.depthOffset=z),X!==void 0&&(y.clipRect=X),A!==void 0&&(y.glyphGeometryDetail=A),Y!==void 0&&(y.sdfGlyphSize=Y),G!==void 0&&(y.outlineWidth=G),H!==void 0&&(y.outlineColor=H),W!==void 0&&(y.outlineOpacity=W),O!==void 0&&(y.outlineBlur=O),P!==void 0&&(y.outlineOffsetX=P),ne!==void 0&&(y.outlineOffsetY=ne),oe!==void 0&&(y.strokeWidth=oe),re!==void 0&&(y.strokeColor=re),le!==void 0&&(y.strokeOpacity=le),fe!==void 0&&(y.fillOpacity=fe),ve!==void 0&&(y.direction=ve),y.sync(()=>{ye("Text: sync finished"),Ie("sync")})}},[c,r,o,s,l,u,f,h,p,v,g,m,d,_,S,Ee,b,M,x,D,L,E,T,B,U,C,N,R,k,K,q,z,X,A,Y,G,H,W,O,P,ne,oe,re,le,fe,ve,n,ue,Me,Se,pe,I,w,j,$,ae,me,i]}class t0 extends ft{constructor(e){super(),ht(this,e,e0,$v,dt,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,interactive:12,ignorePointer:13,lookAt:14,text:16,anchorX:17,anchorY:18,curveRadius:19,font:20,fontSize:21,letterSpacing:22,lineHeight:23,maxWidth:24,overflowWrap:25,textAlign:26,textIndent:27,whiteSpace:28,material:29,color:30,depthOffset:31,clipRect:32,glyphGeometryDetail:33,sdfGlyphSize:34,outlineWidth:35,outlineColor:36,outlineOpacity:37,outlineBlur:38,outlineOffsetX:39,outlineOffsetY:40,strokeWidth:41,strokeColor:42,strokeOpacity:43,fillOpacity:44,direction:45,textObject:15},null,[-1,-1])}get textObject(){return this.$$.ctx[15]}}function gc(a){a[12]=a[14][0],a[13]=a[14][1]}function _c(a,e,t){const n=a.slice();return n[15]=e[t][0],n[16]=e[t][1],n[17]=e[t][2],n[18]=e[t][3],n}function n0(a){let e,t;return e=new D_({props:{autoRotate:!0,enableZoom:!1,maxPolarAngle:no*80}}),{c(){We(e.$$.fragment)},l(n){Xe(e.$$.fragment,n)},m(n,i){je(e,n,i),t=!0},p:Ot,i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){De(e.$$.fragment,n),t=!1},d(n){Ye(e,n)}}}function i0(a){return{c:Ot,l:Ot,m:Ot,p:Ot,i:Ot,o:Ot,d:Ot}}function r0(a){gc(a);let e,t,n,i,r,o,s,l;return e=new ic({props:{receiveShadow:!0,material:a[2],geometry:a[13]}}),n=new ic({props:{receiveShadow:!0,material:a[3],geometry:a[1],rotation:{x:no*-90}}}),r=new X_({props:{color:"#ffffff",near:20,far:60}}),s=new nv({props:{$$slots:{default:[a0]},$$scope:{ctx:a}}}),{c(){We(e.$$.fragment),t=mt(),We(n.$$.fragment),i=mt(),We(r.$$.fragment),o=mt(),We(s.$$.fragment)},l(c){Xe(e.$$.fragment,c),t=gt(c),Xe(n.$$.fragment,c),i=gt(c),Xe(r.$$.fragment,c),o=gt(c),Xe(s.$$.fragment,c)},m(c,u){je(e,c,u),pt(c,t,u),je(n,c,u),pt(c,i,u),je(r,c,u),pt(c,o,u),je(s,c,u),l=!0},p(c,u){gc(c);const f={};u&1&&(f.geometry=c[13]),e.$set(f);const h={};u&2097153&&(h.$$scope={dirty:u,ctx:c}),s.$set(h)},i(c){l||(Le(e.$$.fragment,c),Le(n.$$.fragment,c),Le(r.$$.fragment,c),Le(s.$$.fragment,c),l=!0)},o(c){De(e.$$.fragment,c),De(n.$$.fragment,c),De(r.$$.fragment,c),De(s.$$.fragment,c),l=!1},d(c){Ye(e,c),c&&st(t),Ye(n,c),c&&st(i),Ye(r,c),c&&st(o),Ye(s,c)}}}function vc(a){let e,t,n,i;return e=new t0({props:{position:{x:a[15],y:5+a[16]*.4,z:a[17]},text:a[18],fontSize:.4,color:"black",lookAt:{x:0,y:5,z:0},anchorX:"center",anchorY:"bottom"}}),n=new uv({props:{points:[[a[15],5+a[16]*.4,a[17]],[a[15],0,a[17]]],material:new qc({color:"#55aaff"})}}),{c(){We(e.$$.fragment),t=mt(),We(n.$$.fragment)},l(r){Xe(e.$$.fragment,r),t=gt(r),Xe(n.$$.fragment,r)},m(r,o){je(e,r,o),pt(r,t,o),je(n,r,o),i=!0},p(r,o){const s={};o&1&&(s.position={x:r[15],y:5+r[16]*.4,z:r[17]}),o&1&&(s.text=r[18]),e.$set(s);const l={};o&1&&(l.points=[[r[15],5+r[16]*.4,r[17]],[r[15],0,r[17]]]),n.$set(l)},i(r){i||(Le(e.$$.fragment,r),Le(n.$$.fragment,r),i=!0)},o(r){De(e.$$.fragment,r),De(n.$$.fragment,r),i=!1},d(r){Ye(e,r),r&&st(t),Ye(n,r)}}}function a0(a){let e,t,n=a[12],i=[];for(let o=0;o<n.length;o+=1)i[o]=vc(_c(a,n,o));const r=o=>De(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=ya()},l(o){for(let s=0;s<i.length;s+=1)i[s].l(o);e=ya()},m(o,s){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(o,s);pt(o,e,s),t=!0},p(o,s){if(s&1){n=o[12];let l;for(l=0;l<n.length;l+=1){const c=_c(o,n,l);i[l]?(i[l].p(c,s),Le(i[l],1)):(i[l]=vc(c),i[l].c(),Le(i[l],1),i[l].m(e.parentNode,e))}for(Vs(),l=n.length;l<i.length;l+=1)r(l);Hs()}},i(o){if(!t){for(let s=0;s<n.length;s+=1)Le(i[s]);t=!0}},o(o){i=i.filter(Boolean);for(let s=0;s<i.length;s+=1)De(i[s]);t=!1},d(o){Mu(i,o),o&&st(e)}}}function s0(a){return{c:Ot,l:Ot,m:Ot,p:Ot,i:Ot,o:Ot,d:Ot}}function o0(a){let e,t,n,i,r,o,s,l,c;e=new A_({props:{position:{z:15,y:5},lookAt:{y:2},$$slots:{default:[n0]},$$scope:{ctx:a}}}),n=new k_({props:{color:"#eecc66",position:{x:3,y:10,z:10}}}),r=new H_({props:{skyColor:"#aabbff",intensity:.2}});let u={ctx:a,current:null,token:null,hasCatch:!1,pending:s0,then:r0,catch:i0,value:14,blocks:[,,,]};return vo(l=a[0],u),{c(){We(e.$$.fragment),t=mt(),We(n.$$.fragment),i=mt(),We(r.$$.fragment),o=mt(),s=ya(),u.block.c()},l(f){Xe(e.$$.fragment,f),t=gt(f),Xe(n.$$.fragment,f),i=gt(f),Xe(r.$$.fragment,f),o=gt(f),s=ya(),u.block.l(f)},m(f,h){je(e,f,h),pt(f,t,h),je(n,f,h),pt(f,i,h),je(r,f,h),pt(f,o,h),pt(f,s,h),u.block.m(f,u.anchor=h),u.mount=()=>s.parentNode,u.anchor=s,c=!0},p(f,[h]){a=f;const p={};h&2097152&&(p.$$scope={dirty:h,ctx:a}),e.$set(p),u.ctx=a,h&1&&l!==(l=a[0])&&vo(l,u)||Su(u,a,h)},i(f){c||(Le(e.$$.fragment,f),Le(n.$$.fragment,f),Le(r.$$.fragment,f),Le(u.block),c=!0)},o(f){De(e.$$.fragment,f),De(n.$$.fragment,f),De(r.$$.fragment,f);for(let h=0;h<3;h+=1){const p=u.blocks[h];De(p)}c=!1},d(f){Ye(e,f),f&&st(t),Ye(n,f),f&&st(i),Ye(r,f),f&&st(o),f&&st(s),u.block.d(f),u.token=null,u=null}}}function l0(a,e,t){let n,{seed:i}=e;const r=new rr(100,100,1,1),o=new Bl({color:16777215,vertexColors:!0}),s=new Bl({color:new Ve("#4466ff"),opacity:.6,transparent:!0}),l=["Fractals","Chaos Theory","Prime Numbers","Game Theory","Fibonacci Sequence","Golden Ratio","Gödel's Incompleteness Theorems","Graph Theory","Number Theory","Topology","Calculus","Differential Equations","Group Theory","Ring Theory","Field Theory","Cryptography","Probability Theory","Statistics","Linear Algebra","Vector Spaces","Matrix Theory","Euclidean Geometry","Non-Euclidean Geometry","Algebraic Geometry","Differential Geometry","Knot Theory","Manifolds","Turing Machines","Combinatorics","Permutations","Combinations","Polynomials","Complex Analysis","Functional Analysis","Banach Spaces","Hilbert Spaces","Set Theory","Cantor's Diagonalization","the Continuum Hypothesis","Fourier Analysis","Fourier Transform","Wavelet Theory","Partial Differential Equations","Fluid Dynamics","the Navier-Stokes Equations","Euler's Identity","Riemann Hypothesis","Pi","Euler's Number","Imaginary Numbers","Quaternion Algebra","Octonion Algebra","Möbius Transformations","Zeta Functions","Elliptic Curves","the Catalan Numbers","Partition Theory","Abelian Groups","Hyperbolic Geometry","Optimization","Linear Programming","Integer Programming","Dynamic Programming","Control Theory","Symbolic Logic","Predicate Logic","Modal Logic","Lambda Calculus","Homotopy Theory","Spectral Theory","Galois Theory","Measure Theory","Lebesgue Integration","Ergodic Theory","Category Theory","Tensor Analysis","Ricci Flow","the Poincaré Conjecture","Percolation Theory","Voronoi Diagrams","Delaunay Triangulation","Algebraic Topology","Homology","Cohomology","K-theory","Mathematical Physics","Relativity Theory","Quantum Mechanics","Information Theory","Coding Theory","Data Compression","Error-Correcting Codes","Signal Processing","Chromatic Numbers","Ramsey Theory"],c={Ocean:["Ocean","Sea","Marine","Brine","Abyss","Waters"],Beach:["Beach","Shore","Coast","Seashore","Sand","Waterfront","Seacoast","Littoral","Foreshore","Coastline","Shoreline"],Lowlands:["Lowlands","Plains","Valley","Flats","Basin","Floodplain","Meadow","Plateau","Bottomland","Steppe"],Mountain:["Mountain","Hill","Highland","Elevation","Prominence","Alps","Crags","Sierra"],Peak:["Peak","Summit","Apex","Crest","Top","Pinnacle"]},u={Ocean:["Vast","Majestic","Boundless","Immeasurable","Mysterious","Deep","Infinite","Fathomless","Powerful","Unfathomable"],Beach:["Sun-kissed","Idyllic","Picturesque","Pristine","Golden","Inviting","Tranquil","Secluded","Tropical","Paradisiacal"],Lowlands:["Expansive","Fertile","Verdant","Lush","Gentle","Rolling","Serene","Pastoral","Bucolic"],Mountain:["Lofty","Soaring","Jagged","Majestic","Imposing","Rugged","Grand"],Peak:["Skyward","Awe-inspiring","Stunning","Dizzying","Lofty","Snow-capped","Sublime","Ethereal","Breathtaking","Unrivaled","Daunting","Supreme"]},f=g=>g<-.1?"Ocean":g<.1?"Beach":g<1.5?"Lowlands":g<3?"Mountain":"Peak",h=g=>{const m=f(g),d=l,_=c[m],S=u[m],b=d[Ma(0,d.length-1)],M=_[Ma(0,_.length-1)];return S[Ma(0,S.length-1)]+" "+M+"  of "+b+"?"},p=new rr(100,100,800,800);p.rotateX(no*-90);const v=async g=>{const m=oc(),d=oc(),_=[],S=[],b=p.clone(),M=b.getAttribute("position").array,x=new Ve("#bbcc99"),D=new Ve("#AAAAAA"),L=new Ve("#ffffff"),E=new Ve("#000000"),T=new Ve().setHSL(.1,.3,.4),B=new Ve().setHSL(.2,.3,.4);for(let U=0;U<M.length;U+=3){const C=M[U],N=M[U+2];let R=.05*d(5*C,5*N)+3*d(C/30,N/30)+3*((m(C/4,N/4)+.2*m(C,N))*m(C/20,N/20)+.2)**2;if(Math.abs(R)<1){const z=Math.abs(R);R=R*z}R+=.2;const k=T.clone(),K=.6*d(C,N)+m(C/20,N/20);k.lerp(B,K),Math.abs(R)<.2&&k.lerp(x,3*(.3-Math.abs(R))),R>1&&k.lerp(D,(R-1)/1),R>3&&k.lerp(L,(R-3)*2),R<0&&(k.lerp(E,-R/1.3),R<-1.3&&k.setRGB(0,0,0));let q=10;R<-.1?q=5:R<.1?q=20:R<1.5?q=10:R<3?q=15:q=100,Ma(0,1e5)<q&&S.push([C,R,N,h(R)]),q=g,M[U+1]=R,_.push(k.r,k.g,k.b)}return b.setAttribute("color",new cn(_,3)),b.computeVertexNormals(),[S,b]};return a.$$set=g=>{"seed"in g&&t(4,i=g.seed)},a.$$.update=()=>{a.$$.dirty&16&&t(0,n=v(i))},[n,r,o,s,i]}class c0 extends ft{constructor(e){super(),ht(this,e,l0,o0,dt,{seed:4})}}function u0(a){let e,t;return e=new c0({props:{seed:a[0]}}),{c(){We(e.$$.fragment)},l(n){Xe(e.$$.fragment,n)},m(n,i){je(e,n,i),t=!0},p(n,i){const r={};i&1&&(r.seed=n[0]),e.$set(r)},i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){De(e.$$.fragment,n),t=!1},d(n){Ye(e,n)}}}function f0(a){let e,t,n,i,r,o,s,l,c,u,f,h,p,v,g,m,d,_,S,b,M;return m=new o_({props:{$$slots:{default:[u0]},$$scope:{ctx:a}}}),{c(){e=Vn("div"),t=Vn("h1"),n=Mr("We are building the "),i=Vn("span"),r=Mr("mathematical landscape"),o=mt(),s=Vn("h2"),l=Mr(`The final version will not be randomly generated as this one is, but hand crafted together with
		our community.`),c=mt(),u=Vn("h3"),f=Mr("Join us at "),h=Vn("a"),p=Mr("peakmath.org"),v=mt(),g=Vn("div"),We(m.$$.fragment),d=mt(),_=Vn("input"),this.h()},l(x){e=Hn(x,"DIV",{class:!0});var D=ni(e);t=Hn(D,"H1",{class:!0});var L=ni(t);n=br(L,"We are building the "),i=Hn(L,"SPAN",{class:!0});var E=ni(i);r=br(E,"mathematical landscape"),E.forEach(st),L.forEach(st),o=gt(D),s=Hn(D,"H2",{class:!0});var T=ni(s);l=br(T,`The final version will not be randomly generated as this one is, but hand crafted together with
		our community.`),T.forEach(st),c=gt(D),u=Hn(D,"H3",{class:!0});var B=ni(u);f=br(B,"Join us at "),h=Hn(B,"A",{href:!0});var U=ni(h);p=br(U,"peakmath.org"),U.forEach(st),B.forEach(st),v=gt(D),g=Hn(D,"DIV",{class:!0});var C=ni(g);Xe(m.$$.fragment,C),C.forEach(st),d=gt(D),_=Hn(D,"INPUT",{type:!0,class:!0}),D.forEach(st),this.h()},h(){Rn(i,"class","rainbow-text svelte-1wbipul"),Rn(t,"class","svelte-1wbipul"),Rn(s,"class","svelte-1wbipul"),Rn(h,"href","https://www.peakmath.org"),Rn(u,"class","svelte-1wbipul"),Rn(g,"class","canvas-container svelte-1wbipul"),Rn(_,"type","button"),_.value="This is not it... Next one!",Rn(_,"class","svelte-1wbipul"),Rn(e,"class","content-container svelte-1wbipul")},m(x,D){pt(x,e,D),Ut(e,t),Ut(t,n),Ut(t,i),Ut(i,r),Ut(e,o),Ut(e,s),Ut(s,l),Ut(e,c),Ut(e,u),Ut(u,f),Ut(u,h),Ut(h,p),Ut(e,v),Ut(e,g),je(m,g,null),Ut(e,d),Ut(e,_),S=!0,b||(M=ii(_,"click",a[1]),b=!0)},p(x,[D]){const L={};D&5&&(L.$$scope={dirty:D,ctx:x}),m.$set(L)},i(x){S||(Le(m.$$.fragment,x),S=!0)},o(x){De(m.$$.fragment,x),S=!1},d(x){x&&st(e),Ye(m),b=!1,M()}}}function h0(a,e,t){let n=0;return[n,()=>t(0,n=Math.random())]}class d0 extends ft{constructor(e){super(),ht(this,e,h0,f0,dt,{})}}function p0(a){let e,t;return e=new d0({}),{c(){We(e.$$.fragment)},l(n){Xe(e.$$.fragment,n)},m(n,i){je(e,n,i),t=!0},p:Ot,i(n){t||(Le(e.$$.fragment,n),t=!0)},o(n){De(e.$$.fragment,n),t=!1},d(n){Ye(e,n)}}}class m0 extends ft{constructor(e){super(),ht(this,e,null,p0,dt,{})}}const A0=m0;export{A0 as component,v0 as universal};
