(function(g){var window=this;var cpa=function(a,b,c,d){var e=a||window.document;return g.rx(e,b,function(a){var b=g.gr(a.target,function(a){return a===e||d(a)},!0);
b&&b!==e&&!b.disabled&&(a.currentTarget=b,c.call(b,a))})},A4=function(a,b,c,d){return cpa(a,b,c,function(a){return g.wh(a,d)})},B4=function(a,b){if(/^\d+px?$/.test(b))return(0,window.parseInt)(b,10);
var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e},C4=function(a){var b=g.PS(a.g).Sa(),b=new g.Co(0,0,b.width,b.height);
if(a.B.o&&!g.A1(a)){if(g.X(a.g).dc){var c=g.f_(a)?69:48;b.top+=c;b.height-=c}a.A&&(b.height-=g.f_(a.A.A)?72:50)}return b},D4=function(a){a.U("cardstatechange",g.XS(a)&&g.YS(a)?1:0)},dpa=function(a,b,c,d){c=(0,g.z)(c,d||a.o);
b=A4(b,"change",c,"iv-card-poll-choice-input");a.g.push(b)},epa=function(a,b,c){c=(0,g.z)(c,a.o);
b=g.tx(b,"mouseleave",c);a.g.push(b);return b},E4=function(a){if(window.document.createEvent){var b=window.document.createEvent("HTMLEvents");
b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=window.document.createEventObject(),a.fireEvent("onclick",b)},G4=function(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;
var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in F4?F4[c]:B4(a,c)},H4=function(a,b){var c=a.currentStyle?a.currentStyle[b]:null;
return c?B4(a,c):0},fpa=function(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(a){c||(c=!0,this.Cd(d),b.apply(void 0,arguments))},a)},I4=function(a){var b={};
void 0!==a.g?b.trackingParams=a.g:(b.veType=a.A,null!=a.o&&(b.veCounter=a.o));return b},J4=function(a,b){g.Mt.call(this);
this.Mj=a;this.zp=b;this[g.Hd]=!1},O4=function(a,b,c,d){J4.call(this,a,b);
a=this.zp;b=this.ma();c?(b.setAttribute("stroke",c.g),b.setAttribute("stroke-opacity",c.o),c=c.tb(),g.y(c)&&-1!=c.indexOf("px")?b.setAttribute("stroke-width",(0,window.parseFloat)(c)/gpa(a)):b.setAttribute("stroke-width",c)):b.setAttribute("stroke","none");this.fill=d;c=this.zp;a=this.ma();if(d instanceof K4)a.setAttribute("fill",d.H),a.setAttribute("fill-opacity",d.J);else if(d instanceof L4){b="lg-"+d.C+"-"+d.F+"-"+d.D+"-"+d.G+"-"+d.g+"-"+d.o;var e=b in c.o?c.o[b]:null;if(!e){var e=M4(c,"linearGradient",
{x1:d.C,y1:d.F,x2:d.D,y2:d.G,gradientUnits:"userSpaceOnUse"}),f="stop-color:"+d.g;g.ua(d.A)&&(f+=";stop-opacity:"+d.A);f=M4(c,"stop",{offset:"0%",style:f});e.appendChild(f);f="stop-color:"+d.o;g.ua(d.B)&&(f+=";stop-opacity:"+d.B);d=M4(c,"stop",{offset:"100%",style:f});e.appendChild(d);e=N4(c,b,e)}a.setAttribute("fill","url(#"+e+")")}else a.setAttribute("fill","none")},P4=function(a,b){var c=":"+(g.oc.getInstance().g++).toString(36);
b.setAttribute("result",c);a.appendChild(b);return c},Q4=function(a,b,c){var d=window.document.createElementNS("http://www.w3.org/2000/svg",a);
b&&g.pb(b,function(a,b){d.setAttribute(b,a)});
for(var e=2;e<arguments.length;e++)d.appendChild(arguments[e]);return d},R4=function(a,b,c,d){O4.call(this,a,b,c,d)},S4=function(a,b){J4.call(this,a,b)},hpa=function(a,b){return b},ipa=function(a,b){var c=P4(a,Q4("feOffset",{"in":b,
dx:"-7",dy:"-7"})),c=P4(a,Q4("feGaussianBlur",{"in":c,stdDeviation:"3"})),c=P4(a,Q4("feColorMatrix",{"in":c,type:"matrix",values:"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0"})),d=P4(a,Q4("feColorMatrix",{"in":b,type:"matrix",values:"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 100 0"})),d=P4(a,Q4("feGaussianBlur",{"in":d,stdDeviation:"1"})),c=P4(a,Q4("feComposite",{operator:"out","in":c,in2:d}));return P4(a,Q4("feComposite",{operator:"over","in":b,in2:c}))},jpa=function(a,b){var c=P4(a,Q4("feGaussianBlur",
{"in":b,
stdDeviation:"1.8"})),c=P4(a,Q4("feDiffuseLighting",{"in":c,surfaceScale:"4",diffuseConstant:"1"},Q4("feDistantLight",{azimuth:"270",elevation:"15","lighting-color":"white"}))),c=P4(a,Q4("feComposite",{"in":c,in2:b,operator:"in"}));return P4(a,Q4("feComposite",{in2:c,"in":b,operator:"arithmetic",k2:1,k3:.5,k4:0}))},T4=function(){},V4=function(){U4||(U4=new g.Hw(400),U4.start());
return U4},lpa=function(a){var b=[];
kpa(a,function(a,d){switch(a){case 0:b.push("M");Array.prototype.push.apply(b,d);break;case 1:b.push("L");Array.prototype.push.apply(b,d);break;case 2:b.push("C");Array.prototype.push.apply(b,d);break;case 3:var c=d[3];b.push("A",d[0],d[1],0,180<Math.abs(c)?1:0,0<c?1:0,d[4],d[5]);break;case 4:b.push("Z")}});
return b.join(" ")},mpa=function(a,b,c,d){O4.call(this,a,b,c,d)},W4=function(a,b){J4.call(this,a,b)},npa=function(a){return(new g.Jo(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,
_c:{jsl:{h:a.gapiHintParams}},callback:b},d=g.va(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||g.Ib(d,{_c:{jsl:{h:g.Zd("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||g.Zd("GAPI_HINT_OVERRIDE")){var e=g.Hk(window.document.location.href).gapi_jsh;e&&g.Ib(d,{_c:{jsl:{h:e}}})}g.fl("client",d)}catch(f){g.Sf(f)}})).then(function(){})},opa=function(a){var b={};
a.analyticsChannelData&&(b.analyticsDatas=(0,g.M)(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}},ppa=function(a){a=a.replace(/^(https?:)?\/\//,"");
a=a.split("/",1);return!a||1>a.length||!a[0]?[]:a[0].toLowerCase().split(".").reverse()},X4=function(a,b,c,d,e){g.Lw.call(this,e);
this.width=a;this.height=b;this.A=c||null;this.O=d||null},gpa=function(a){var b=a.ni();
return b?b.width/(a.A?new g.lb(a.A,a.O):a.ni()).width:0},Y4=function(a,b,c){var d=(c="xy"==c||"yy"==c)?360:640;
return(d+((c?a.height:a.width)-d)*b)/d},qpa=function(a,b,c){var d=(c="xx"==c||"xy"==c)?640:360;
return(d+((c?a.width:a.height)-d)*b)/d},L4=function(a,b,c,d,e,f,k,l){this.C=a;
this.F=b;this.D=c;this.G=d;this.g=e;this.o=f;this.A=g.p(k)?k:null;this.B=g.p(l)?l:null},K4=function(a,b){this.H=a;
this.J=null==b?1:b},Z4=function(a,b,c,d,e){X4.call(this,a,b,c,d,e);
this.o={};this.M=g.Bn&&!g.lm(526);this.J=new g.Et(this)},M4=function(a,b,c){a=a.H.g.createElementNS("http://www.w3.org/2000/svg",b);
c&&rpa(a,c);return a},rpa=function(a,b){for(var c in b)a.setAttribute(c,b[c])},$4=function(a,b,c,d){b=M4(a,"path",{d:lpa(b)});
c=new mpa(b,a,c,d);a.C.ma().appendChild(c.ma())},N4=function(a,b,c){if(b in a.o)return a.o[b];
var d="_svgdef_"+spa++;c.setAttribute("id",d);a.o[b]=d;a.G.appendChild(c);return d},b5=function(a){this.g=a||g.Yf();
a5||(a5=npa(this.g))},tpa=function(a,b,c,d){var e={path:"/youtubei/"+a.g.innertubeApiVersion+"/"+b,
headers:{"X-Goog-Visitor-Id":g.Zd("VISITOR_DATA")},method:"POST",body:g.Dz(c)},f=(0,g.z)(a.B,a);a5.then(function(){f();g.u("gapi.client.request")(e).execute(d||g.x)})},c5=function(a,b,c){b.eventTimeMs=Math.round((0,g.zu)());
b.lactMs=g.iA();c&&(b.clientData=opa(c));g.wu({endpoint:"log_interaction",ky:b},a)},d5=function(a,b,c,d,e,f,k,l,m,n,q){this.x=a;
this.y=b;this.xk=c;this.A=d;this.t=e;this.H=f;this.C=k;this.D=l;this.B=m;this.o=n;this.g=q},e5=function(a,b){var c=upa(b,vpa(a,new g.Co(a.x,a.y,a.xk,a.A),b.g)),d=b.g,e=c.clone();
d&&!d.contains(c)&&(c.width<d.width?e.left=g.Sh(c.left,d.left,d.left+d.width-c.width):(e.left=d.left,e.width=d.width),c.height<d.height?e.top=g.Sh(c.top,d.top,d.top+d.height-c.height):(e.top=d.top,e.height=d.height));return e},vpa=function(a,b,c){var d=a.C,e=a.D,f=a.g?a.g:"xy",k=qpa(c,a.B,f);
a=Y4(c,a.o,f);var f=640*b.width*k/100,l=360*b.height*a/100;return new g.Co(0==d?640*b.left*k/100:0<d?d:c.width+d-f,0==e?360*b.top*a/100:0<e?e:c.height+e-l,f,l)},wpa=function(a){var b=Q4("filter",{filterUnits:"userSpaceOnUse"}),c="SourceGraphic";
(0,g.K)(a,function(a){a:{switch(a){case "bevel":a=jpa;break a;case "dropshadow":a=ipa;break a}a=hpa}c=a(b,c)});
return b},xpa=function(a,b,c,d){this.value=a;
this.target=b;this.showLinkIcon=c;this.g=d},f5=function(a){return a.value?a.value:null},ypa=function(a){if(null==a)return 0;
if("never"==a)return-1;a=a.split(":");if(3<a.length)return 0;var b=0,c=1;(0,g.K)(a,function(a){a=(0,window.parseFloat)(a);0>a&&(c=-c);b=60*b+Math.abs(a)});
return c*b},g5=function(a,b){return g.y(a)?(0,window.parseFloat)(a):b},h5=function(a,b){return"true"==a||"false"==a?"true"==a:b},i5=function(a,b,c){for(var d in b)if(b[d]==a)return a;
return c},j5=function(a){return g.y(a)?a:""},k5=function(){this.xa=[];
this.Ia=[];this.Yd=[]},zpa=function(a,b,c){0==g.xe(a.xa)?a.Yd.length-=2:(a.xa.push(0),a.Ia.push(1));
a.Yd.push(b,c);a.ud=a.Ze=[b,c]},l5=function(a,b,c,d){var e=a.ud[0]-b*Math.cos(d*Math.PI/180)+b*Math.cos((d+90)*Math.PI/180),f=a.ud[1]-c*Math.sin(d*Math.PI/180)+c*Math.sin((d+90)*Math.PI/180);
a.xa.push(3);a.Ia.push(1);a.Yd.push(b,c,d,90,e,f);a.qk=!1;a.ud=[e,f]},kpa=function(a,b){for(var c=a.Yd,d=0,e=0,f=a.xa.length;e<f;e++){var k=a.xa[e],l=Apa[k]*a.Ia[e];
b(k,c.slice(d,d+l));d+=l}},m5=function(){return g.Uf("enable_youtubei_innertube")?g.uB:b5},Bpa=function(a,b){g.hf.call(this,a);
this.x=b.o[0];this.y=b.o[1];this.z=b.o[2];this.duration=b.duration;this.progress=b.progress;this.fps=b.F;this.state=b.g},Cpa=function(a,b,c,d,e,f,k,l,m,n,q,t,v){d5.call(this,a,b,c,d,e,l,m,n,q,t,v);
this.F=f;this.G=k},n5=function(a){a=g.ya(a);
delete g.HA[a];g.Cb(g.HA)&&g.FA&&g.FA.stop()},Epa=function(a,b){if(!a)return null;
var c=g5(a.x,0),d=g5(a.y,0),e=g5(a.w,0),f=g5(a.h,0),k=ypa(a.t),l=g5(a.scaleSlope,1);return b(c,d,e,f,k,g5(a.d,0),g5(a.px,0),g5(a.py,0),g5(a.scaleSlopeX,l),g5(a.scaleSlopeY,l),i5(a.scaleDimension,Dpa,"xy"))},Fpa=function(a,b,c){c=c.replace(/\/(u|b)\/[0-9]+/g,"");
var d=/^[0-9]+$/;a&&d.test(a)&&(c="/b/"+a+c);b&&d.test(b)&&(c="/u/"+b+c);return c},o5=function(a){var b;
(b=a)&&!(b=1<a.length?"/"==a.charAt(0)&&"/"!=a.charAt(1):"/"==a)&&(b=ppa(a),b="com"==b[0]&&"youtube"==b[1]||"be"==b[0]&&"youtu"==b[1]);return b?-1==a.indexOf("/redirect?"):!1},Gpa=function(a){return g.ze(a,function(a){return"dropshadow"==a})?new g.Rn(0,7,7,0):new g.Rn(0,0,0,0)},Hpa=function(a){a=(0,g.Ng)(a,function(a){return a in p5});
g.Ue(a,function(a,c){return p5[a]-p5[c]});
return a},q5=function(a){if(!a)return null;
var b=j5(a.value);if(!b)return null;var c=i5(a.target,Ipa,"current");return null==c?null:new xpa(b,c,h5(a.show_link_icon,!0),null!=a.pause_on_navigation?a.pause_on_navigation:!0)},Jpa=function(a,b,c,d,e,f,k,l){this.C=a;
this.F=b;this.D=c;this.G=d;this.g=e;this.o=f;this.A=k;this.B=l},r5=function(a,b,c,d,e){a=(0,window.parseFloat)(a);
if(null!=a&&!(0,window.isNaN)(a)){if(d)return g.Sh(a,b,c);if(a>=b&&a<=c)return a}return e},s5=function(a,b){if(null==a)return b;
var c=(0,window.parseInt)(a,0);if((0,window.isNaN)(c))return b;c=c.toString(16);return"#"+"000000".substring(0,6-c.length)+c},Kpa=function(a){return new g.Co(a.left,a.top,a.right-a.left,a.bottom-a.top)},t5=function(a,b,c){this.id=a;
this.timestamp=b.timestamp||0;this.type=b.card_type;this.teaserText=b.teaser_text;this.teaserDurationMs=b.teaser_duration_ms;this.startMs=b.start_ms;this.autoOpen=b.auto_open||!1;this.nd=b.session_data||{};this.Nb=c;this.sponsored=b.sponsored||!1;a=b.tracking||{};this.o={jH:a.impression,click:a.click,close:a.close,VN:a.teaser_impression,tr:a.teaser_click};b=b.tracking_params||{};this.C=new g.Ec(b.card);this.F=new g.Ec(b.teaser);this.D=new g.Ec(b.icon)},u5=function(a,b,c){this.A=a;
this.g=b;this.o=null==c?1:c},Lpa=function(a,b){var c=a.top-b.y,d=b.x-a.left-a.width,e=b.y-a.top-a.height,f=a.left-b.x,k=Math.max(c,d,e,f);
if(0>k)return"i";switch(k){case c:return"t";case d:return"r";case e:return"b";case f:return"l"}return"i"},Mpa=function(a,b,c){if(c.length&&(b=g.Dq("g",void 0,b),b.length)){var d=Hpa(c);
if(d){c="effects:"+(d?d.join("|"):"");var e=c in a.o?a.o[c]:null;e?a=e:(d=wpa(d),a=0<d.childNodes.length?N4(a,c,d):null)}else a=null;a&&b[0].setAttribute("filter","url(#"+a+")")}},v5=function(a,b){var c=g.Do(a);
c.expand(Gpa(b));return Kpa(c)},Npa=function(a,b,c,d){var e=a.F;
e?a=new L4(e.C*b/100,e.F*c/100,e.D*b/100,e.G*c/100,e.g,e.o,e.A,e.B):(b=a.o,a=new K4(a.bgColor,d?Math.max(b,.9):b));return a},Opa=function(a,b,c){var d=new k5;
zpa(d,a.left+b+c,a.top+c);d.tc(a.left+a.width-b-c,a.top+c);l5(d,b,b,-90);d.tc(a.left+a.width-c,a.top+a.height-b-c);l5(d,b,b,0);d.tc(a.left+b+c,a.top+a.height-c);l5(d,b,b,90);d.tc(a.left+c,a.top+b+c);l5(d,b,b,180);d.close();return d},w5=function(){this.g=!1;
this.C=this.o=null},x5=function(a,b,c){a.o?(a.o.setSize(b,c),a.o.clear()):(b=new Z4(b,c,void 0,void 0,void 0),a.o=b,a.o.im(),a.C=g.S("DIV"),b=a.o.ma(),a.C.appendChild(b));
return a.o},y5=function(a){var b=g.QL()||"",c=m5();
c5(c,{click:{csn:b,visualElement:I4(a)}},void 0)},Ppa=function(a,b,c,d){this.type=a;
this.o=b;this.g=c;this.A=d},Qpa=function(a){return a.o&&a.o.length?a.o[0]:a.g&&a.g.length?a.g[0]:a.A&&a.A.length?a.A[0]:null},z5=function(a,b,c,d){g.Cw.call(this);
if(!g.ra(a)||!g.ra(b))throw Error("Start and end parameters must be arrays");if(a.length!=b.length)throw Error("Start and end points must be the same length");this.A=a;this.G=b;this.duration=c;this.D=d;this.o=[];this.progress=this.F=0;this.C=null},Spa=function(a,b){b<a.startTime&&(a.endTime=b+a.endTime-a.startTime,a.startTime=b);
a.progress=(b-a.startTime)/(a.endTime-a.startTime);1<a.progress&&(a.progress=1);a.F=1E3/(b-a.C);a.C=b;Rpa(a,a.progress);1==a.progress?(a.g=0,n5(a),a.md(),a.dk()):a.jb()&&a.Gq()},Rpa=function(a,b){g.va(a.D)&&(b=a.D(b));
a.o=Array(a.A.length);for(var c=0;c<a.A.length;c++)a.o[c]=(a.G[c]-a.A[c])*b+a.A[c]},Tpa=function(a){if(!a)return null;
var b=g5(a.sx,0),c=g5(a.sy,0);return Epa(a,function(a,e,f,k,l,m,n,q,t,v,w){return new Cpa(a,e,f,k,l,b,c,m,n,q,t,v,w)})},Upa=function(a){return a?Epa(a,function(a,c,d,e,f,k,l,m,n,q,t){return new d5(a,c,d,e,f,k,l,m,n,q,t)}):null},A5=function(a,b){return b?b:o5(a)?"current":"new"},B5=function(a,b,c,d){(a=f5(a))?o5(a)?d=g.Dk(a,{feature:"iv",
src_vid:c,annotation_id:b}):(a?(b=ppa(a),b="com"==b[0]&&"google"==b[1]&&"plus"==b[2]):b=!1,b&&d?(d=g.za(Fpa,d.pageId,d.jc),a=new g.ip(a),g.mp(a,d(a.A)),d=a.toString()):d=a):d=null;return d},Vpa=function(a){this.merchant=g.E(a.merchant);
this.price=g.E(a.price)},C5=function(a,b,c){t5.call(this,a,b,c);
this.imageUrl=b.image_url;this.displayDomain=b.display_domain;this.showLinkIcon=b.show_link_icon;this.g=b.button_icon_url;this.title=b.title;this.customMessage=b.custom_message;this.url=q5({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url});this.A=null;b.signin_url&&(this.A=q5({target:"current",value:b.signin_url}));this.H=b.signin_title||null;this.G=b.signin_message||null},D5=function(a){return"rtl"==g.Xt(a,"direction")},Wpa=function(a,b){this.state=a;
this.ref=b},Xpa=function(a,b,c,d,e,f,k,l,m,n,q,t,v,w){this.A=a;
this.bgColor=b;this.C=c;this.g=d;this.o=e;this.G=f;this.B=k;this.textAlign=l;this.textSize=m;this.D=n;this.padding=q;this.effects=t;this.cornerRadius=v;this.F=w},Ypa=function(a){function b(a){return(0,g.Ng)(a.split(/ +/),function(a){return""!=a})}
return null==a?[]:b(a)},Zpa=function(a){function b(a){return null!=a&&!(0,window.isNaN)(a)}
return(a=a?new g.Rn((0,window.parseFloat)(a.top),(0,window.parseFloat)(a.right),(0,window.parseFloat)(a.bottom),(0,window.parseFloat)(a.left)):null)&&b(a.top)&&b(a.right)&&b(a.bottom)&&b(a.left)?a:null},E5=function(a,b){if(null==a)return null;
if(g.sa(a)){var c=[];(0,g.K)(a,function(a){(a=b(a))&&c.push(a)});
return c}var d=b(a);return d?[d]:[]},F5=function(a){var b=/.+/;
return g.y(a)&&null!=b&&null!=a&&a.match(b)?a:""},G5=function(a){return g.ra(a)&&a.length?a[0]:a},H5=function(a,b){this.start=a<b?a:b;
this.end=a<b?b:a},$pa=function(a,b){var c="ivTriggerCondition:"+a;
return b?c+":"+b:c},I5=function(a,b){this.na=a;
this.context=b;this.Mr=!1;this.M=0},J5=function(a,b,c,d,e,f){b=new g.ds(b,c,{id:d});
b.namespace="annotations_module";e&&(b.g||(b.g=new g.bp)).subscribe("onEnter",e,a);f&&(b.g||(b.g=new g.bp)).subscribe("onExit",f,a);g.UD(a.context.o,[b])},aqa=function(a){return(0,g.C)()-a.M},bqa=function(a,b,c,d,e,f,k,l){var m=(0,g.z)(function(){l&&this.context.o.pd();
g.yQ(b,"current"==c?"_top":void 0,d)},a);
"new"==c&&(m(),m=null);var n={};n.interval=aqa(a);K5(a.context.logger,e,m,n,f,k);o5(b)||(a=d.itct)&&y5(new g.Ec(a))},L5=function(){w5.call(this);
this.B=0},cqa=function(a,b){this.o=a;
this.g=b},M5=function(a,b,c,d,e){z5.call(this,b,c,d,e);
this.element=a},eqa=function(a){if(!a)return null;
var b=i5(a.type,dqa,"rect"),c=E5(a.rectRegion,Upa),d=E5(a.anchoredRegion,Tpa);a=E5(a.shapelessRegion,Upa);return new Ppa(b,c,d,a)},fqa=function(a,b,c){c=(0,g.M)(c,function(a){return I4(a)});
c5(a,{visibilityUpdate:{csn:b,visualElements:c}})},gqa=function(a,b,c){C5.call(this,a,b,c);
this.J=b.ypc_item_type;this.B=b.ypc_item_id;this.L=b.ypc_flow_type},hqa=function(a,b,c){C5.call(this,a,b,c);
this.offers=[];a=b.offers||[];for(b=0;b<a.length;b++)this.offers.push(new Vpa(a[b]))},iqa=function(a,b,c){C5.call(this,a,b,c);
this.J=b.ypc_flow_type;this.B=b.innertube_request_params},jqa=function(a,b,c,d){this.g=a||[];
this.A=b||[];this.B=c;this.o=d;this.value=!1},kqa=function(a,b,c){(0,g.K)(a.g,g.za(b,!1),c);
(0,g.K)(a.A,g.za(b,!0),c)},N5=function(a,b,c){t5.call(this,a,b,c);
this.J=b.image_url;this.B=b.badge_symbol||"";this.priceText=b.price_text||"";this.title=b.title;this.g=b.meta_info;this.G=!!b.is_paygated;this.H=!!b.user_has_entitlement;this.url=q5({target:b.target||"new",value:b.url})},lqa=function(a,b,c){t5.call(this,a,b,c);
this.G=b.image_url;this.videoDuration=b.video_duration||null;this.customMessage=b.custom_message;this.title=b.title;this.g=b.meta_info;this.B=!!b.is_live_now;this.url=q5({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url})},mqa=function(a,b,c){t5.call(this,a,b,c);
this.B=this.id.replace(/[^a-z0-9-]/gi,"-");this.title=b.title;this.choices=b.choices;this.g=b.hasOwnProperty("old_vote")?b.old_vote:null;this.A=null;b.signin_url&&(this.A=q5({target:"current",value:b.signin_url}));this.G=b.hasOwnProperty("xsrf_token")?b.xsrf_token:null},nqa=function(a,b,c){t5.call(this,a,b,c);
this.B=b.image_url;this.playlistVideoCount=b.playlist_video_count;this.customMessage=b.custom_message;this.title=b.title;this.g=b.meta_info;this.url=q5({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url})},oqa=function(a,b,c){t5.call(this,a,b,c);
this.channelId=b.channel_id;this.customMessage=b.custom_message;this.profileImageUrl=b.image_url;this.title=b.title;this.g=b.meta_info;this.url=q5({pause_on_navigation:b.pause_on_navigation,target:b.target||"new",value:b.url})},pqa=function(a,b,c){this.type=a;
this.trigger=b;this.url=c},tqa=function(a){var b=g.Xt(a,"fontSize"),c;
c=(c=b.match(qqa))&&c[0]||null;if(b&&"px"==c)return(0,window.parseInt)(b,10);if(g.Dn){if(String(c)in rqa)return B4(a,b);if(a.parentNode&&1==a.parentNode.nodeType&&String(c)in sqa)return a=a.parentNode,c=g.Xt(a,"fontSize"),B4(a,b==c?"1em":b)}c=g.S("SPAN",{style:"visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});a.appendChild(c);b=c.offsetHeight;g.Uq(c);return b},vqa=function(a){if(!a)return null;
var b=i5(a.state,uqa);a=F5(a.ref);return b?new Wpa(b,a):null},wqa=function(a){if(!a)return null;
var b=s5(a.fgColor,"#1A1A1A"),c=s5(a.bgColor,"#FFF"),d=s5(a.borderColor,"#000"),e=r5(a.borderWidth,0,5,!1,0),f=r5(a.bgAlpha,0,1,!1,.8),k=s5(a.highlightFontColor,"#F2F2F2"),l=r5(a.highlightWidth,0,5,!1,3),m=j5(a.textAlign),n=r5(a.textSize,3.3,30.1,!0,3.6107),q=j5(a.fontWeight),t=Zpa(a.padding),v=Ypa(a.effects),w=r5(a.cornerRadius,0,10,!0,0);if(a=G5(a.gradient)){var A=r5(a.x1,0,100,!0,0),F=r5(a.y1,0,100,!0,0),R=r5(a.x2,0,100,!0,100),I=r5(a.y2,0,100,!0,100),Ma=s5(a.color1,"#FFF"),tb=s5(a.color2,"#000");
a=new Jpa(A,F,R,I,Ma,tb,r5(a.opacity1,0,100,!0,100),r5(a.opacity2,0,100,!0,0))}else a=null;return new Xpa(b,c,d,e,f,k,l,m,n,q,t,v,w,a)},O5=function(a,b){return g.b4&&a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())},xqa=function(a,b,c){this.g={};
this.o=!1;this.C="ivTrigger:"+a;this.A=c;kqa(b,function(a,b){var c=$pa(b.state,b.ref);this.A.subscribe(c,(0,g.z)(this.B,this,c,a));this.g[c]=a},this)},P5=function(a,b,c){I5.call(this,a,b);
this.annotation=c;this.isActive=!1},zqa=function(a,b){yqa(a,function(c){return new xqa(a.id,c,b)})},Aqa=function(a,b){return b?new g.Co(a.x+b.left,a.y+b.top,b.width,b.height):null},Q5=function(){L5.call(this)},R5=function(a,b,c){this.g=a;
this.A=b;this.C=c;this.B=new g.Ao(null)},Cqa=function(a,b){var c=["ul",
"",{role:"radiogroup"}];(0,g.K)(b.choices,function(a){c.push(["li",b.B+"-"+a.index.toString(),["label","",["input","iv-card-poll-choice-input",{type:"checkbox",role:"radio",name:b.B+a.index.toString(),value:a.index.toString(),"data-poll-choice-index":a.index.toString()}],["span","iv-card-poll-choice-text",["span","iv-card-poll-choice-percent"],S5(this,"span",void 0,a.desc)]],["div","iv-card-poll-result",["div","iv-card-poll-result-bar"]]])},a);
var d={};b.A&&(d["aria-label"]=g.L("YTP_DRAWER_POLL_TITLE_ARIA_LABEL",{POLL_TITLE:b.title}));var e=["iv-card","iv-card-poll"],d=[["div","iv-card-content",S5(a,"h2",d,b.title),["form","",["fieldset","",c]]]];b.A&&(e.push("iv-card-unavailable"),d.push(["div",["iv-card-sign-in"],["h2","",g.L("YTP_DRAWER_POLL_SIGNIN_TITLE")],["a",["iv-card-sign-in-button","iv-button"],{href:f5(b.A)},["span",["iv-button-content"],g.L("YTP_SIGN_IN")]]]));e=new g.V(["div",e].concat(d));d=e.element;Bqa(b,d);dpa(a.g.g,d,g.za(a.F,
b),a);(0,g.K)(g.Eq("iv-card-poll-choice-input",d),function(a){this.g.g.T(a,"focus",g.za(this.o,!0));this.g.g.T(a,"blur",g.za(this.o,!1))},a);
b.A&&a.A(g.Q("iv-card-sign-in-button",d),b.A,b.id,b.nd,b.Nb,b.o.click,5);return e},W5=function(a,b,c,d){var e=T5(a,b.url,b.id),f=b.displayDomain?["div",
"iv-card-image-text",b.displayDomain]:"",k=Dqa(a,b),l=["iv-card"];b.A&&l.push("iv-card-unavailable");e=["div",l,["a","iv-click-target",{href:e},U5(b.imageUrl,f),["div","iv-card-content",S5(a,"h2",void 0,b.title),k]]];b.A&&(e=e.concat([["div",["iv-card-sign-in"],S5(a,"h2",void 0,b.H||""),["p","",b.G],["a",["iv-card-sign-in-button","iv-button"],{href:f5(b.A)},S5(a,"span","iv-button-content",g.L("YTP_SIGN_IN"))]]]));e=new g.V(e);V5(a,e,b,c,d);return e},Eqa=function(a,b,c){var d=T5(a,b.url,b.id),e=["yt-badge",
"standalone-ypc-badge-renderer-icon",b.H?"standalone-ypc-badge-renderer-icon-purchased":"standalone-ypc-badge-renderer-icon-available"],f={},e=b.G&&b.B?["span",e,f,b.B]:"";c=["div",["iv-card",c],["a","iv-click-target",{href:d},U5(b.J,e?["div","iv-card-image-text",e,b.priceText]:""),["div","iv-card-content",["h2","iv-card-primary-link",b.title],X5(a,b)]]];c=new g.V(c);V5(a,c,b);return c},Y5=function(a,b){return b.customMessage?S5(a,"div","iv-card-message",b.customMessage):""},U5=function(a,b){var c=
["div",
"iv-card-image",{style:"background-image: url("+a+");"}];b&&c.push(b);return c},X5=function(a,b){if(!b.g||0==b.g.length)return"";
var c=["ul","iv-card-meta-info"];(0,g.K)(b.g,function(a){c.push(S5(this,"li","",a))},a);
return c},S5=function(a,b,c,d){c?g.y(c)?c={"class":c}:g.ra(c)&&(c={"class":c.join(" ")}):c={};
c.dir=g.Bo(a.B,d);return[b,c,d]},Dqa=function(a,b){if(!b.customMessage)return"";
var c=["iv-card-action","iv-card-primary-link"],d={};b.g&&(c.push("iv-card-action-icon"),d.style="background-image: url("+b.g+");");d.dir=g.Bo(a.B,b.customMessage);c=["div",c,d,["span","",b.customMessage]];b.showLinkIcon&&(c.push("\u00a0"),c.push(["span","iv-card-link-icon"]));return c},Bqa=function(a,b){var c=0;
(0,g.K)(a.choices,function(a){c+=a.count});
for(var c=c||1,d=0;d<a.choices.length;d++){var e=a.choices[d],f=g.Q(a.B+"-"+e.index.toString(),b),e=e.count/c;null==a.g&&(e=0);g.O(f.getElementsByTagName("label")[0],"iv-card-poll-choice-checked",a.g==d);f.getElementsByTagName("input")[0].checked=a.g==d;g.br(g.Q("iv-card-poll-choice-percent",f),g.L("YTP_DRAWER_POLL_PERCENT",{PERCENT:Math.floor(100*e).toFixed(0)}));g.Tt(g.Q("iv-card-poll-result-bar",f),"transform","scaleX("+e.toFixed(2)+")")}g.O(b,"iv-card-poll-voted",null!=a.g);g.O(b,"iv-card-poll-expanded",
null!=a.g&&1<a.choices.length)},Fqa=function(a,b,c,d){d?(c&&a.g.videoData.za||a.g.o.pd(),a.g.o.isFullscreen()&&g.RS(a.g.o),K5(a.g.logger,b.Nb,d,void 0,b.o.click,5)):b.url&&a.C(b.url,b.id,b.nd,b.Nb,b.o.click||[],5)},T5=function(a,b,c){return b?B5(b,c,a.g.videoData.videoId,a.g.C):null},V5=function(a,b,c,d,e){c.A&&Gqa(a,g.Eq("iv-card-sign-in-button",b.element),c,c.A,e);
c.url&&Gqa(a,g.Eq("iv-click-target",b.element),c,c.url,d)},Gqa=function(a,b,c,d,e){(0,g.K)(b,function(a){if(e){var b=(0,g.z)(function(a){a.stopPropagation();
a.preventDefault();e();return!1},this);
this.g.g.T(a,"click",b)}else d&&this.A(a,d,c.id,c.nd,c.Nb,c.o.click,5)},a)},Z5=function(){w5.call(this)},$5=function(){w5.call(this)},Hqa=function(a,b,c,d,e,f,k,l,m,n,q,t,v,w,A){this.id=a;
this.author=b;this.type=c;this.style=d;this.B=e;this.o=f;this.A=k||[];this.F=l||[];this.g=m;this.D=n;this.C=q;this.htmlBlob=v;this.data=w;this.Nb=A},a6=function(a){return(a=Iqa(a,function(a){return"openUrl"==a.type&&null!=a.url}))?a.url:null},c6=function(a){return b6(a,function(a){return"click"==a.trigger})},b6=function(a,b){return(0,g.Rr)(a.A,b,void 0)},Jqa=function(a,b,c){(0,g.K)(a.A,b,c)},Iqa=function(a,b){return g.ze(a.A,b,void 0)},Kqa=function(a,b,c){(0,g.K)(a.F,b,c)},yqa=function(a,b){(0,g.M)(a.F,
b,void 0)},d6=function(a){return(a=Lqa(a))?Qpa(a):null},Lqa=function(a){a.o?(a=a.o,a=a.g.length?a.g[0]:null):a=null;
return a},Mqa=function(a,b){var c=d6(a);
return c&&b?Y4(b,c.o,c.g?c.g:"xy"):1},e6=function(a){var b=g.QL()||"";
fqa(m5(),b,a)},f6=function(a,b,c,d,e){if(2!=b.length||2!=c.length)throw Error("Start and end points must be 2D");
M5.apply(this,arguments)},Nqa=function(a,b,c,d){b={csn:b,
parentVisualElement:I4(c),visualElements:(0,g.M)(d,function(a){return I4(a)})};
c5(a,{attachChild:b},void 0)},Oqa=function(a,b){return(b&8&&D5(a)?b^4:b)&-9},Pqa=function(a){var b=0;
-1!=a.indexOf("h")&&(a=a.split("h"),b=3600*a[0],a=a[1]);-1!=a.indexOf("m")&&(a=a.split("m"),b=60*a[0]+b,a=a[1]);-1!=a.indexOf("s")?(a=a.split("s"),b=1*a[0]+b):b=1*a+b;return b},Qqa=function(a){if(!a)return null;
var b=E5(a.condition,vqa),c=E5(a.notCondition,vqa),d=h5(a.show_delay,!1);a=h5(a.hide_delay,!1);return b||c?new jqa(b,c,d,a):null},Tqa=function(a){if(!a)return null;
var b=i5(a.type,Rqa),c=i5(a.trigger,Sqa),d=q5(G5(a.url));G5(a.subscribeData);return b?new pqa(b,c,d):null},g6=function(a,b){b.match(/\sstyle\s*=/);
a.innerHTML=b},Uqa=function(a,b){this.g=a;
this.o=b||null},upa=function(a,b){var c;
c=a.o?e5(a.o,new Uqa(a.g)):a.g;var d=b.clone(),e=c.left;c=c.top;e instanceof g.fm?(d.left+=e.x,d.top+=e.y):(d.left+=e,g.ua(c)&&(d.top+=c));return d},Vqa=function(a){return 3*a*a-2*a*a*a},Wqa=function(a){return Math.pow(a,3)},h6=function(a,b,c){P5.call(this,a,b,c);
this.H=b;this.o=null;this.F=!1;this.A=null;this.B=!1;this.G=0;this.g=this.D=this.C=null},i6=function(a){return"creator-endscreen-editor"===a},j6=function(a,b,c){P5.call(this,a,b,c);
this.F=this.B=this.G=!1;this.D=5E3;this.A=null;this.uj=g.S("DIV","iv-promo-contents");this.g=this.o=this.dd=null;this.C=new g.tz(function(){this.dd.setAttribute("aria-hidden",!0);g.T(this.o,!1);g.T(this.g,!0)},700,this)},Xqa=function(a){var b=a.annotation.data,c;
if("cta"==a.annotation.style)c=6;else if("video"==a.annotation.style||"playlist"==a.annotation.style)c=7;a.D=b.collapse_delay_ms||a.D;var d=["iv-promo","iv-promo-inactive"];a.ma().setAttribute("aria-hidden",!0);a.ma().setAttribute("aria-label",g.L("YTP_INVIDEO_PROMOTION_ARIA_LABEL"));a.ma().tabIndex=0;var e=a6(a.annotation),f;if(b.image_url){f=g.S("DIV",["iv-promo-img","iv-click-target"]);var k=g.S("IMG",{src:b.image_url,"aria-hidden":"true"});f.appendChild(k);b.video_duration&&!b.is_live?(k=g.S("SPAN",
"iv-promo-video-duration",b.video_duration),f.appendChild(k)):b.playlist_length&&(k=g.S("SPAN","iv-promo-playlist-length",b.playlist_length.toString()),f.appendChild(k));e&&a.$i(f,e,a.annotation.id,b.session_data,a.annotation.Nb,void 0,c)}e?a.dd=g.S("A",{href:f5(e),"class":"iv-promo-txt"}):a.dd=g.S("DIV","iv-promo-txt");var l,m,n,q;switch(a.annotation.style){case "cta":case "website":l=g.S("P",null,g.S("STRONG",null,b.text_line_1));m=g.S("P",null,g.S("SPAN","iv-promo-link",b.text_line_2));b.text_line_3&&
(d.push("iv-promo-website-card-cta"),n=g.S("P",null,g.S("SPAN","iv-promo-action-text",b.text_line_3)));g.N(a.dd,"iv-click-target");e&&a.$i(a.dd,e,a.annotation.id,b.session_data,a.annotation.Nb,void 0,c);break;case "playlist":case "video":l=g.S("P",null,g.S("SPAN",null,b.text_line_1));m=g.S("P",null,g.S("STRONG",null,b.text_line_2));b.is_live&&(l=m,m=g.S("SPAN",["yt-badge","iv-promo-badge-live"],g.L("YTP_LIVE_NOW")));g.N(a.dd,"iv-click-target");e&&a.$i(a.dd,e,a.annotation.id,b.session_data,a.annotation.Nb,
void 0,c);d.push("iv-promo-video");break;case "vote":l=g.S("P",null,g.S("STRONG",null,b.text_line_1)),m=g.S("P",null,g.S("SPAN",null,b.text_line_2)),q=g.S("DIV","iv-promo-button-container"),c=g.S("BUTTON",["iv-button","iv-promo-button"],g.S("SPAN","iv-button-content",b.button_text)),a.context.g.T(c,"click",function(a){a.stopPropagation();K5(this.context.logger,this.annotation.Nb,null,{contest_vote:"1"},(b.tracking||{}).vote);a=this.annotation.data;this.dd=g.Q("iv-promo-txt",this.uj);var c=g.Q("iv-promo-button-container",
this.uj),d=g.S("DIV",["iv-promo-txt","iv-click-target"]),e=g.S("P",null,g.S("STRONG",null,a.text_line_3)),f=g.S("P",null,a.text_line_4);g.Qq(d,e,f);g.Uq(c);g.Vq(d,this.dd);g.yh(this.ma(),"iv-promo-with-button");(c=a6(this.annotation))&&this.$i(d,c,this.annotation.id,a.session_data,this.annotation.Nb)},a),q.appendChild(c),d.push("iv-promo-with-button")}l&&a.dd.appendChild(l);
m&&a.dd.appendChild(m);n&&a.dd.appendChild(n);a.uj.appendChild(a.dd);q&&a.uj.appendChild(q);l=g.S("DIV","iv-promo-actions");a.g=g.S("BUTTON",["iv-promo-expand","ytp-button"]);a.g.title=g.L("YTP_EXPAND");a.context.g.T(a.g,"click",g.za(a.Fp,5E3),a);l.appendChild(a.g);g.T(a.g,!1);a.context.g.T(a.ma(),"mouseover",a.EF,a);a.context.g.T(a.ma(),"mouseout",a.DF,a);a.context.g.T(a.ma(),"touchend",g.za(a.Fp,5E3),a);a.o=g.S("BUTTON",["iv-promo-close","ytp-button"]);a.o.title=g.L("YTP_CLOSE");a.context.g.T(a.o,
"click","cta"==a.annotation.style&&b.text_line_3?a.tF:a.BQ,a);l.appendChild(a.o);g.xh(a.ma(),d);f&&g.Pq(a.ma(),f);g.Pq(a.ma(),a.uj);g.Pq(a.ma(),l)},Yqa=function(a){a.B||a.F||a.A||(g.N(a.ma(),"iv-promo-collapsed"),a.B=!0,a.C.start())},Zqa=function(a){a.C.stop();
a.B&&(g.zh(a.ma(),["iv-promo-collapsed","iv-promo-collapsed-no-delay"]),a.B=!1,a.dd&&a.dd.removeAttribute("aria-hidden"),g.T(a.g,!1),g.T(a.o,!0))},$qa=function(a,b){a.A||(a.A=g.Jw(function(){k6(this);
Yqa(this)},b,a))},k6=function(a){a.A&&(g.Kw(a.A),a.A=null)},l6=function(a,b,c){I5.call(this,b,c);
this.Y=a;this.L=null;this.Cm=this.Ma=this.B=this.ha=!1;this.ka=null;this.Io=new g.tz(g.x,c.C.useTabletControls?4E3:3E3);this.fa=new g.tz(g.x);this.C=new R5(c,(0,g.z)(this.$i,this),(0,g.z)(this.Fm,this));a=["div","iv-drawer",["div","iv-drawer-header",{"aria-role":"heading"},["span","iv-drawer-header-text"],["button",["iv-drawer-close-button","ytp-button"],{"aria-label":g.L("YTP_DRAWER_CLOSE_BUTTON_ARIA_LABEL"),tabindex:"0"}]],["div","iv-drawer-content"]];this.H=new g.V(a);this.D=this.H.element;this.da=
new g.LB(this.H,330);this.Wa=g.Q("iv-drawer-header-text",this.D);this.A=g.Q("iv-drawer-content",this.D);a=["iv-drawer-teaser"];a.push("iv-exp-cards-teaser-prominent");a=["div",a,["div","iv-drawer-teaser-box"],["div","iv-drawer-teaser-text"],["button","iv-drawer-open-button",{"aria-label":g.L("YTP_CARDS_BUTTON_ARIA_LABEL"),"aria-haspopup":"true"},["span"]]];new g.V(a);this.o=[];this.ca=this.J=this.F=this.O=this.g=null;this.ba=[];J5(this,0,1E3*c.videoData.lengthSeconds,"",this.gE,this.JE);this.G=this.aa=
this.P=null},fra=function(a,b){var c=b&&b.data&&b.data.card_type;
if(c&&ara[c]){c=new ara[c](b.id,b.data,b.Nb);a.ha||(g.xh(a.ma(),["html5-stop-propagation","iv-drawer-manager"]),g.cT(a.Y,a.D,6),bra(a),a.J=g.Q("ytp-cards-button"),a.ca=g.Q("iv-drawer-close-button",a.D),a.ha=!0);cra(a,c.id);var d=dra(a,c);if(d){var e={Wb:c,No:d.element,uw:!1},f=era(a,e);g.Oe(a.o,f,0,e);d.Ha(a.A,f);a.sl();c.autoOpen?J5(a,c.startMs,0x8000000000000,c.id,g.za(a.IN,e)):(d=1E3*a.context.o.getCurrentTime(),5E3>d&&d>c.startMs&&a.Wy(e),J5(a,c.startMs,c.startMs+1,c.id,g.za(a.Wy,e)),m6(a))}}},
gra=function(a,b){b.data.autoOpenMs&&J5(a,b.data.autoOpenMs,0x8000000000000,"",a.zQ);
b.data.autoCloseMs&&J5(a,b.data.autoCloseMs,0x8000000000000,"",a.Cl);var c=b.data.headerText;g.br(a.Wa,c);a.J&&a.J.setAttribute("title",c);b.data.eventId&&(a.L=b.data.eventId);a.P=new g.Ec(b.data.trackingParams);a.G=new g.Ec(b.data.closeTrackingParams);a.aa=new g.Ec(b.data.iconTrackingParams)},cra=function(a,b){var c=hra(a,b);
c&&(c==a.g&&(a.g=null),a.Y.cA(c.Wb.id),g.Uq(c.No),g.Ie(a.o,c),a.sl(),m6(a))},p6=function(a,b,c,d){if(!a.B){a.da.show();
a.O=new g.tz(function(){g.N(this.context.o.getRootNode(),"ytp-iv-drawer-open")},0,a);
a.O.start();a.B=!0;a.M=(0,g.C)();n6(a.context.logger,a.L,7,void 0,d&&d.Wb?d.Wb.Nb:void 0);a.P&&a.G&&e6([a.P,a.G]);var e={TRIGGER_TYPE:b};(0,g.K)(a.o,function(a){a.uw||(a.uw=!0,o6(this.context.logger,a.Wb.Nb,a.Wb.o.jH,e));e6([a.Wb.C])},a);
D4(a.Y);c&&(a.F=new g.tz(function(){this.W=this.J;this.ca.focus()},330,a),a.F.start())}},bra=function(a){a.context.g.T(g.Q("iv-drawer-close-button",a.D),"click",a.CE,a);
a.context.g.T(a.A,"touchend",function(){this.Io.start()},a);
a.context.g.T(a.A,"scroll",a.OE,a);a.ka=g.rx(a.A,"mousewheel",(0,g.z)(a.AQ,a));a.context.A.subscribe("onHideControls",function(){this.Cm=!0},a);
a.context.A.subscribe("onShowControls",function(){this.Cm=!1},a);
a.context.A.subscribe("onVideoAreaChange",function(){this.Cm=g.wh(this.Y.getRootNode(),"ytp-autohide")},a);
a.ba.push(g.zs("iv-teaser-shown",a.DH,a));a.ba.push(g.zs("iv-teaser-clicked",a.CH,a))},dra=function(a,b){switch(b.type){case "simple":return W5(a.C,b);
case "collaborator":var c=a.C,d=["div",["iv-card","iv-card-channel"],["a",["iv-click-target","g-hovercard"],{href:T5(c,b.url,b.id),"data-ytid":b.channelId},U5(b.profileImageUrl),["div","iv-card-content",Y5(c,b),["h2","iv-card-primary-link",b.title],X5(c,b)]]],d=new g.V(d);V5(c,d,b);return d;case "donation":return c=a.C,d=(0,g.z)(c.D,c,b),W5(c,b,d,d);case "episode":return Eqa(a.C,b,"iv-card-episode");case "movie":return Eqa(a.C,b,"iv-card-movie");case "playlist":return c=a.C,d=["div",["iv-card","iv-card-playlist"],
["a","iv-click-target",{href:T5(c,b.url,b.id)},U5(b.B,["div","iv-card-image-overlay",["span","iv-card-playlist-video-count",b.playlistVideoCount.toString()]]),["div","iv-card-content",Y5(c,b),S5(c,"h2","iv-card-primary-link",b.title),X5(c,b)]]],d=new g.V(d),V5(c,d,b),d;case "poll":return Cqa(a.C,b);case "productListing":var c=a.C,d=T5(c,b.url,b.id),e=!g.Ee(b.offers),f=["iv-card"],k="",l=Dqa(c,b);e&&(f.push("iv-card-product-listing"),k="iv-card-primary-link",l=b.offers[0],e=["div",null],l.price&&e.push(["div",
"iv-card-offer-price",l.price]),l.merchant&&e.push(["div","iv-card-offer-merchant",l.merchant]),l=e);e=b.sponsored?["div","iv-card-sponsored",g.L("YTP_SPONSORED"),["div","iv-ad-info-container",["div","iv-ad-info","{{adInfo}}"],["div","iv-ad-info-icon-container",["div","iv-ad-info-icon"],["div","iv-ad-info-callout"]]]]:"";d=["div",f,{tabindex:"0"},["a",["iv-card-image","iv-click-target"],{style:"background-image: url("+b.imageUrl+");",href:d,"aria-hidden":"true",tabindex:"-1"}],["div","iv-card-content",
e,["a","iv-click-target",{href:d},S5(c,"h2",k,b.title),l]]];d=new g.V(d);f=g.qd("span");g.br(f,g.L("YTP_SPONSORED_PRODUCT_INFO"));d.Ec(f,"adInfo");V5(c,d,b);return d;case "tip":return c=a.C,d=(0,g.z)(c.G,c,b),W5(c,b,d,d);case "video":return c=a.C,d=T5(c,b.url,b.id),f=b.videoDuration?["span","iv-card-video-duration",b.videoDuration]:"",k=b.B?["span",["yt-badge","yt-badge-live"],g.L("YTP_LIVE_NOW")]:"",d=["div",["iv-card","iv-card-video"],["a","iv-click-target",{href:d},U5(b.G,f),["div","iv-card-content",
Y5(c,b),S5(c,"h2","iv-card-primary-link",b.title),X5(c,b),k]]],d=new g.V(d),V5(c,d,b),d}return null},era=function(a,b){if(0==a.o.length)return 0;
var c=g.Ae(a.o,function(a){return b.Wb.startMs>a.Wb.startMs||b.Wb.startMs==a.Wb.startMs&&b.Wb.timestamp>=a.Wb.timestamp?!0:!1});
return-1==c?0:c+1},ira=function(a){return a.g?"productListing"==a.g.Wb.type:(0,g.Oj)(a.o,function(a){return"productListing"==a.Wb.type})},m6=function(a){g.O(a.Y.getRootNode(),"ytp-cards-shopping-active",ira(a))},jra=function(a,b){if(a.H.g){var c=new z5([0,
a.A.scrollTop],[0,b.No.offsetTop],600,Vqa);g.Gt(a.context.B,c,"animate",function(a){this.A.scrollTop=a.y},void 0,a);
g.Gt(a.context.B,c,"finish",function(a){this.A.scrollTop=a.y},void 0,a);
c.play()}else a.H.Eb(!0),a.A.scrollTop=b.No.offsetTop,a.H.Eb(!1)},q6=function(a){return a.g&&a.g.Wb?a.g.Wb:a.o[0]&&a.o[0].Wb?a.o[0].Wb:null},hra=function(a,b){return g.ze(a.o,function(a){return a.Wb.id==b},a)},r6=function(a,b,c){this.o=a;
this.annotation=b;this.view=c;this.g=null;this.B=this.isVisible=!1;zqa(b,a)},kra=function(a){a.o.unsubscribe("resize",a.C,a);
a.o.unsubscribe("onVideoAreaChange",a.A,a)},s6=function(a){a.g&&(a.g.stop(),a.g=null)},lra=function(a,b,c,d,e){this.g=a;
this.aa=b;this.D=c;this.fa=d;this.da=e;this.M=!1;this.F=new g.Kz(this);this.P=this.C=this.G=this.O=this.o=null;this.ba=!1;this.ca=this.J=this.L=null;this.Fq=new g.wz(this.yQ,100,this);this.H=new g.tz(this.Jv,500,this);this.W=this.A=this.B=null},mra=function(a,b){var c=(0,g.z)(function(a,c,f){c=f?t6(this,c,(0,g.z)(f,this)):t6(this,c);
this.F.T(b,a,c)},a);
c("mouseover","o",a.FA);c("mouseout","n",a.Pg);c("click","l");c("touchend","l")},nra=function(a){if(a.g.C){var b;
b6(a.g,function(a){return"close"==a.type})?b=a.o:(a.B=g.S("DIV","annotation-close-button"),g.T(a.B,!1),g.Ac(a.B,"annotation_id",a.g.id),a.o.appendChild(a.B),b=a.B);
var c=function(a){a.stopPropagation()};
a.F.T(b,"click",t6(a,"m",c));a.F.T(b,"touchend",t6(a,"m",c))}},t6=function(a,b,c){return(0,g.z)(function(a){if(this.da)c&&c(a);
else if(a.event.target instanceof window.Element){var d=a.event.target;g.T(d,!1);try{var f=window.document.elementFromPoint(a.event.clientX,a.event.clientY);if(g.ir(f,"annotation")){var k=window.document.createEvent("MouseEvent");k.initMouseEvent(a.event.type,a.event.bubbles,a.event.cancelable,a.event.view,a.event.detail,a.event.screenX,a.event.screenY,a.event.clientX,a.event.clientY,a.event.ctrlKey,a.event.altKey,a.event.shiftKey,a.event.metaKey,a.event.button,a.event.relatedTarget);f.dispatchEvent(k)}}finally{g.T(d,
!0)}}d=g.lu(a.target);a=new g.fm(a.clientX,a.clientY);"n"==b&&d.contains(a)||this.fa.U(b,this.g)},a)},v6=function(a){if(a.o||a.A){var b=d6(a.g);
if(b){var c=u6(a);if(a.o){var b=e5(b,c),d=g.AI(g.PS(a.D));g.ju(a.o,b.width,b.height);g.Zt(a.o,b.left,b.top);a.O=new g.Co(d.left+b.left,d.top+b.top,b.width,b.height);var e;e=(e=d6(a.g))&&d?qpa(d,e.B,e.g?e.g:"xy"):1;var f=Mqa(a.g,d),d=a.g.g;d.padding?d=d.padding:(d="speech"==a.g.style?1.6:.8,d=new g.Rn(d,d,d,d));d=new g.Rn(360*d.top*f/100,640*d.right*e/100,360*d.bottom*f/100,640*d.left*e/100);a.C&&(d.right+=1.5*c.g.height/100);a.o.style.padding=d.top+"px "+d.right+"px "+d.bottom+"px "+d.left+"px";"label"==
a.g.style&&a.G&&(a.G.style.padding=a.o.style.padding);var d=c.g,k=!1,l=0,m=0,n;n=g.AI(g.PS(a.D));var q=C4(a.D.app.A.G);g.Eo(n,q)?n=null:(q.top+=20,q.height-=40,"player_relative"!=a.g.D&&(q.left-=n.left,q.top-=n.top),n=q);n&&(l=n.top-(b.top+b.height),m=b.top-(n.top+n.height),k=0<l||0<m);if(k&&n){d=n;e=l;var f=m,t;a.C&&(m=ora(a,23,b,e,f),a.B&&(t=43-m.width,0<t&&(b.left+m.left-t>d.left&&(m.left-=t),m.width+=t)),t=m,g.ju(a.C,m.width,m.height),g.Zt(a.C,m.left,m.top));a.B&&(t?b=new g.fm(t.left+t.width-
23-18,a.ba?t.top+2:t.top+t.height-18-2):(t=ora(a,18,b,e,f),b=new g.fm(t.left,t.top),g.ju(a.B,t.width,t.height)),g.Zt(a.B,b));a.P=new g.Co(a.O.left+t.left,a.O.top+t.top,t.width,t.height);a.L=a.F.T(g.PS(a.D),"mousemove",a.QK)}else a.C&&(t=e/f*d.height*4.2/100,t=new g.lb(t,t),"highlight"==a.g.type||"label"==a.g.style?(e=1.5*d.height/100,t=new g.Co(b.width-t.width-e,b.height-t.height-e,t.width,t.height)):t=new g.Co(b.width-t.width-3*d.height/100,(b.height-t.height)/2,t.width,t.height),g.ju(a.C,t.width,
t.height),g.Zt(a.C,t.left,t.top)),a.B&&(t=9<=d.left+d.width-(b.left+b.width),e=9<=b.top-d.top,g.Zt(a.B,t&&e?new g.fm(b.width-9,-9):t?new g.fm(b.width-9,45<b.height?9:b.height-9):e?new g.fm(45<b.width?b.width-9-18:-9,-9):b.width/d.width>b.height/d.height?new g.fm(45<b.width?b.width-9-18:-9,b.height-9):new g.fm(-9,45<b.height?9:b.height-9)))}a.A&&a.A.A(a.g,c);if(a.o){c=a.o;b=a.g.g;c.style.color="highlightText"==a.g.style?b.G:b.A;t=g.AI(g.PS(a.D));c.style.fontSize=360*b.textSize*Mqa(a.g,t)/100+"px";
t=a.g.style;c.style.textAlign=b.textAlign?b.textAlign:"title"==t||"highlightText"==t?"center":"left";b.D&&(c.style.fontWeight=b.D);a=a.o;c=a.style.overflow;t=(b=g.Q("annotation-link-icon",a))?g.nu(b):!1;e=(d=g.Q("annotation-close-button",a))?g.nu(d):!1;t&&g.T(b,!1);e&&g.T(d,!1);m=f="";if(l=g.Q("inner-text",a))f=l.style.overflow,m=l.style.position,l.style.overflow="visible",l.style.position="static";a.style.overflow="scroll";if(a.scrollHeight>a.offsetHeight||a.scrollWidth>a.offsetWidth){n=k=tqa(a);
for(var q=5,v=Math.floor(k/2);v;)a.scrollHeight<=a.offsetHeight&&a.scrollWidth<=a.offsetWidth?(q=n,n=Math.min(n+v,k)):n=Math.max(n-v,q),v=Math.floor(v/2),a.style.fontSize=n+"px";n!=q&&(a.scrollHeight>a.offsetHeight||a.scrollWidth>a.offsetWidth)&&(a.style.fontSize=q+"px")}a.style.overflow=c;l&&(l.style.overflow=f,l.style.position=m);e&&g.T(d,!0);t&&g.T(b,!0)}}}},ora=function(a,b,c,d,e){var f=0<e;
b=new g.Co(0,c.height-b,Math.max(c.width,b),b);0<d&&(b.top=c.height,20<d&&(b.height+=d-20),g.N(a.o,"annotation-extend-down"));f&&(b.top=-b.height,20<e&&(c=e-20,b.top-=c,b.height+=c),g.N(a.o,"annotation-extend-up"),a.ba=!0);return b},w6=function(a){return"label"!=a.g.style||a.A.g},u6=function(a){var b;
b=g.AI(g.PS(a.D));if("player_relative"==a.g.D){var c=g.PS(a.D).Sa();b=new g.Co(-b.left,-b.top,c.width,c.height)}else b=new g.Co(0,0,b.width,b.height);return new Uqa(b,a.W?d6(a.W):null)},pra=function(a){this.Y=a;
this.g={}},o6=function(a,b,c,d){if(b){var e=x6(a,b);
a.g[b]=e["p-time"];e["iv-event"]=e.link||e["l-class"]||e["link-id"]?2:7;b=y6(a,"cta_annotation_shown",e,c);z6(a,e,qra(b,d))}},K5=function(a,b,c,d,e,f){if(b){var k=x6(a,b);
k["iv-event"]=3;k["i-time"]=a.g[b]||"";g.Ib(k,d||{});b=y6(a,"cta_annotation_clicked",k,e);z6(a,k,b,c,f)}},A6=function(a,b){if(b){var c=x6(a,b);
c["iv-event"]=4;c["i-time"]=a.g[b]||"";var d=y6(a,"cta_annotation_closed",c);z6(a,c,d)}},qra=function(a,b){return b?(0,g.M)(a,g.za(function(a,b){return g.Uy(b,a)},b||{})):a},y6=function(a,b,c,d){d=g.Le(d||[]);
if(30==c["a-type"]){a:{c=c["a-id"];a=a.Y.getVideoData();if(a.Nt){if((b=a.Nt[b])&&g.s3.test(b)){a=g.Qb("[ANNOTATION_ID]");0<=b.indexOf("[ANNOTATION_ID]")?b=b.replace("[ANNOTATION_ID]",c):0<=b.indexOf(a)&&(b=b.replace(a,c));break a}}else if(a.Qi){b=g.Jk(a.Qi,{label:b,value:"a_id="+c});break a}b=""}b&&d.push(b)}return d},z6=function(a,b,c,d,e){var f=1,k,l=-1;
if(d){var m=!1;k=function(){f--;f||m||((0,window.clearTimeout)(l),m=!0,d())};
l=(0,window.setTimeout)(function(){m=!0;d()},1E3)}(0,g.K)(c||[],function(a){f++;
g.ND(a,k)});
e&&(f++,0!=e&&a.Y.Oh(e,k));rra(a,b,k)},x6=function(a,b){var c={};
if(b){var d=new g.pp(b);(0,g.K)(d.sb(),function(a){c[a]=(0,window.escape)(d.get(a,""))})}c["p-time"]=a.Y.getCurrentTime().toFixed(2);
c.ps=g.X(a.Y).o;return c},n6=function(a,b,c,d,e){e=x6(a,e);
e["iv-event"]=c;b&&(e.ei=b);e["a-id"]||(e["a-id"]="card:drawer");e["a-type"]=51;z6(a,e,d)},B6=function(a,b,c,d){c&&(c=x6(a,c),c["iv-event"]=b,z6(a,c,d))},rra=function(a,b,c){g.VS(a.Y,"iv",b,c)},sra=function(){var a=g.Zd("ROOT_VE_TYPE",void 0);
return a?new g.Ec(void 0,a,void 0):null},vra=function(a){if(!a)return null;
var b=F5(a.id),c=F5(a.author),d=i5(a.type,tra),e=i5(a.style,C6),f=j5(G5(a.TEXT)),k=j5(a.data),k=0!=k.length?g.zz(k):{},l;var m=G5(a.segment);m?(F5(m.timeRelative),l=F5(m.spaceRelative),l=(m=E5(m.movingRegion,eqa))?new cqa(l,m):null):l=null;var m=E5(a.action,Tqa),n=E5(a.trigger,Qqa),q=wqa(G5(a.appearance));q||(q=wqa({}));var t=i5(a.coordinate_system,ura,"video_relative"),v=h5(a.closeable,!0),w=j5(a.html_blob);a=j5(a.log_data);return b&&d?new Hqa(b,c,d,e,f,l,m,n,q,t,v,0,w,k,a):null},wra=function(a){a=
f5(a);
a=a.replace(/https?:\/\//g,"");return o5(a)?(a=g.Hk(a))&&a.v?a.v:null:null},xra=function(a){a=f5(a);
if(!a)return null;a=a.replace(/https?:\/\//g,"");var b;(b=!o5(a))||(b=g.xf(g.wf(a)[5]||null)||"",b=b.split("/"),b="/"+(1<b.length?b[1]:""),b="/watch"!=b);if(b)return null;b=g.Hk(a);if(!b||!b.v)return null;if(b.t)return Pqa(b.t);a=a.split("#",2);return!a||2>a.length?null:(a=g.Bk(a[1]))&&a.t?Pqa(a.t):-1},yra=function(a,b,c,d,e,f,k){a=a.clone();
var l=Oqa(b,c);c=g.ku(b);k=k?k.clone():c.clone();a=g.Hz(a,k,l,d,e,f);if(a.status&496)return a.status;g.Zt(b,g.Ho(a.rect));k=g.Go(a.rect);g.nb(c,k)||(d=k,f=g.Hq(g.Bq(g.zq(b)).g),!g.Dn||g.lm("10")||f&&g.lm("8")?(b=b.style,g.Cn?b.MozBoxSizing="border-box":g.Bn?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(d.width,0)+"px",b.height=Math.max(d.height,0)+"px"):(e=b.style,f?(g.Dn?(f=H4(b,"paddingLeft"),c=H4(b,"paddingRight"),k=H4(b,"paddingTop"),l=H4(b,"paddingBottom"),f=new g.Rn(k,
c,l,f)):(f=g.Wt(b,"paddingLeft"),c=g.Wt(b,"paddingRight"),k=g.Wt(b,"paddingTop"),l=g.Wt(b,"paddingBottom"),f=new g.Rn((0,window.parseFloat)(k),(0,window.parseFloat)(c),(0,window.parseFloat)(l),(0,window.parseFloat)(f))),g.Dn&&!g.mm(9)?(c=G4(b,"borderLeft"),k=G4(b,"borderRight"),l=G4(b,"borderTop"),b=G4(b,"borderBottom"),b=new g.Rn(l,k,b,c)):(c=g.Wt(b,"borderLeftWidth"),k=g.Wt(b,"borderRightWidth"),l=g.Wt(b,"borderTopWidth"),b=g.Wt(b,"borderBottomWidth"),b=new g.Rn((0,window.parseFloat)(l),(0,window.parseFloat)(k),
(0,window.parseFloat)(b),(0,window.parseFloat)(c))),e.pixelWidth=d.width-b.left-f.left-f.right-b.right,e.pixelHeight=d.height-b.top-f.top-f.bottom-b.bottom):(e.pixelWidth=d.width,e.pixelHeight=d.height)));return a.status},Bra=function(a,b,c){if(!(a.nodeName in zra))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);
else if(a.nodeName in Ara)b.push(Ara[a.nodeName]);else for(a=a.firstChild;a;)Bra(a,b,c),a=a.nextSibling},Cra=function(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Cra(a,b,c,d))return!0;
a=a.nextSibling}return!1},Dra=function(a,b){function c(a){return a.baseUrl}
function d(a){if(a){if(a.simpleText)return a.simpleText;if(a.runs)return(0,g.M)(a.runs,function(a){return a.text}).join("")}}
function e(a){var b=[];a.videoId&&b.push("v="+a.videoId);a.playlistId&&b.push("list="+a.playlistId);a.startTimeSeconds&&b.push("t="+a.startTimeSeconds);return"/watch?"+b.join("&")}
var f={};f.startMs=(0,window.parseInt)(a.startMs,10);f.impressionUrls=(0,g.M)(a.impressionUrls||[],c);f.skip=a.skipEndscreen;f.visualElement=new g.Ec(a.trackingParams);f.elements=(0,g.M)(a.elements||[],function(a,f){var k=a.endscreenElementRenderer,l={},q=k.style,t=k.endpoint;l.id="element-"+f;l.type=q;l.title=d(k.title);l.metadata=d(k.metadata);l.callToAction=d(k.callToAction);l.bp=k.image;l.jl=k.animatedImage;l.left=(0,window.parseFloat)(k.left);l.width=(0,window.parseFloat)(k.width);l.top=(0,window.parseFloat)(k.top);
l.aspectRatio=(0,window.parseFloat)(k.aspectRatio);l.startMs=(0,window.parseInt)(k.startMs,10);l.endMs=(0,window.parseInt)(k.endMs,10);t&&(l.nd={itct:t.click_tracking_params},l.clickUrls=(0,g.M)(t.loggingUrls||[],c));k.title.accessibility&&(l.oj=k.title.accessibility.accessibilityData.label);l.impressionUrls=(0,g.M)(k.impressionUrls||[],c);l.Kv=(0,g.M)(k.hovercardShowUrls||[],c);l.visualElement=new g.Ec(k.trackingParams);if("VIDEO"==q)t&&(l.targetUrl=e(t.watchEndpoint)),l.Vj=!1,l.sk=b,l.videoDuration=
d(k.videoDuration);else if("PLAYLIST"==q)l.targetUrl=e(t.watchEndpoint),l.Vj=!1,l.sk=b,l.playlistLength=d(k.playlistLength);else if("CHANNEL"==q)if(q=t.browseEndpoint.browseId,l.channelId=q,l.targetUrl="/channel/"+q,l.Vj=!1,l.sk="new",l.isSubscribe=k.isSubscribe,l.isSubscribe){l.htmlBlob=k.htmlBlob;a:{if(k=k.hovercardButton)if(k=k.subscribeButtonRenderer){var v;k.subscribed?(v=d(k.subscriberCountWithUnsubscribeText),q=d(k.subscriberCountText)):(v=d(k.subscriberCountText),q=d(k.subscriberCountWithSubscribeText));
t=d(k.unsubscribedButtonText);t.match(/[0-9]/)||v&&"0"!==v&&(t+=" "+v);v=d(k.subscribedButtonText);v.match(/[0-9]/)||q&&(v+=" "+q);k={subscribed:k.subscribed,feature:"endscreen",subscribeText:t,unsubscribeText:v,enabled:k.enabled};break a}k=void 0}l.subscribeButton=k}else l.subscribersText=d(k.subscribersText);else"WEBSITE"==q&&(l.targetUrl=t.urlEndpoint.url,l.Vj=!0,l.sk="new",l.Lv=k.icon.thumbnails[0].url);return l});
return f},Era=function(a){var b={};
b.startMs=a.startMs;b.impressionUrls=a.impressionUrls;b.skip=a.skip||!1;b.visualElement=new g.Ec(a.trackingParams);b.elements=(0,g.M)(a.elements||[],function(a){var b={};b.id=a.id;b.type=a.type;b.title=a.title;b.metadata=a.metadata;b.callToAction=a.callToAction;b.imageUrl=a.imageUrl;b.bp=a.displayImages;b.jl=a.animatedDisplayImages;b.Lv=a.iconUrl;b.left=a.left;b.width=a.width;b.top=a.top;b.aspectRatio=a.aspectRatio;b.startMs=a.startMs;b.endMs=a.endMs;b.videoDuration=a.videoDuration;b.playlistLength=
a.playlistLength;b.channelId=a.channelId;b.htmlBlob=a.htmlBlob;b.subscribeButton=a.subscribeButton;b.subscribersText=a.subscribersText;b.isSubscribe=a.isSubscribe;b.targetUrl=a.targetUrl;b.Vj="WEBSITE"==b.type;b.nd=a.sessionData||[];b.sk=a.targetTab;b.oj=a.accessibilityStr;b.nH=a.isPlaceholder;b.impressionUrls=a.impressionUrls;b.Kv=a.hoverUrls;b.tZ=a.dismissUrls;b.clickUrls=a.clickUrls;b.visualElement=new g.Ec(b.nd.itct);return b});
return b},Fra=function(a,b,c,d,e,f,k){this.g=a;
this.B=b;this.C=c;this.videoData=d;this.logger=e;this.o=f;this.A=k},D6=function(a){g.gv.call(this,a);
this.G=0;this.A={};this.H={};this.Xa=new pra(a);this.D=new g.oE(this);g.J(this,this.D);this.D.V(this.g,"onVideoAreaChange",(0,g.z)(this.U,this,"onVideoAreaChange"));this.D.V(this.g,"onHideControls",(0,g.z)(this.U,this,"onHideControls"));this.D.V(this.g,"onShowControls",(0,g.z)(this.U,this,"onShowControls"));this.D.V(this.g,"resize",(0,g.z)(this.U,this,"resize"));this.D.V(this.g,"presentingplayerstatechange",(0,g.z)(this.U,this,"presentingplayerstatechange"));this.subscribe("onHideControls",this.nK,
this);this.subscribe("onShowControls",this.WL,this);this.subscribe("presentingplayerstatechange",this.rL,this);this.subscribe("resize",this.Oq,this);this.subscribe("o",this.YP,this);this.subscribe("n",this.Pg,this);this.subscribe("l",this.YI,this);this.subscribe("m",this.BJ,this);g.X(this.g).G.subscribe("vast_info_card_add",this.by,this);this.g.addEventListener("crn_annotations_module",this.rA,this);this.g.addEventListener("crx_annotations_module",this.sA,this);this.L=g.S("DIV",["video-legacy-annotations",
"html5-stop-propagation"]);this.O=g.S("DIV","video-custom-annotations");this.B=new g.V(["div",["ytp-player-content","ytp-iv-player-content"]]);g.J(this,this.B);g.cT(this.g,this.B.element,5);this.B.la();this.C=new g.V(["div",["ytp-iv-video-content"]]);g.J(this,this.C);a=g.S("DIV","video-annotations",this.L,this.O);this.C.element.appendChild(a);this.F=this.o=null;this.J=[];a=g.X(this.g);var b=this.g.getVideoData();(1!=(a.ih||b.ih)||b.Gz)&&null===a.G.get(b.videoId)||this.load()},Gra=function(a,b){for(var c=
{},d=0;d<b.attributes.length;d++){var e=b.attributes[d];
c[e.name]=e.nodeValue}for(d=0;d<b.childNodes.length;d++)if(e=b.childNodes[d],e.tagName){var f;if(c[e.tagName])f=c[e.tagName];else if("html_blob"==e.tagName||"data"==e.tagName){g.X(a.g).experiments.g("text_content_for_xml_node_value")&&e.textContent?c[e.tagName]=e.textContent.trim():0<e.childNodes.length&&(f=e.childNodes[0].nodeValue,c[e.tagName]="string"==typeof f?f.trim():f);continue}else f=[],c[e.tagName]=f;e&&"TEXT"==e.tagName?1==e.childNodes.length&&3==e.childNodes[0].nodeType?f.push(e.childNodes[0].nodeValue):
f.push(""):e&&f.push(Gra(a,e))}return c},Hra=function(a,b,c){return!(a.loaded&&a.G==b&&a.g.getVideoData().videoId==c)},Jra=function(a,b){var c=Ira(a,b);
if(!c&&"marker"!=b.type)return null;Kqa(b,function(a){a=(0,g.z)(this.rM,this,b.id,a);this.subscribe("ivTrigger:"+b.id,a)},a);
return new r6(a.ba,b,c)},Kra=function(a,b){var c=D6.o(),d=null;
switch(b.type){case "branding":if(g.X(a.g).qg)break;a.B.element.appendChild(c);d=new h6(c,E6(a),b);break;case "promotion":g.cT(a.g,c,5),d=new j6(c,E6(a),b)}d&&d.mn();return d},Nra=function(a){var b=a.g.getVideoData();
if(b.Uh){var c=g.X(a.g),d=c.G.get(b.videoId);if(d){var e={format:"XML",Dc:{}};c.experiments.g("disable_iv_cors")||(e.method="POST",e.withCredentials=!0);"gaming"==c.o&&(e.Dc.gaming="1");e.md=(0,g.z)(function(a,b,c){Hra(this,a,b)||(a=g.Fc(c)&&c.responseXML?c.responseXML:null)&&F6(this,a)},a,a.G,b.videoId);
g.gn()&&(e.md=Lra(a,e.md));e.Mb={ic_only:"1"};Mra(e,d);g.BB(b.Uh,e)}}},Mra=function(a,b){a.method="POST";
a.Mb=a.Mb||{};b.kh&&(a.Mb.ic_xml=b.kh);b.gj&&(a.Mb.ic_track=b.gj)},Ora=function(a){var b=new g.V(["div"]);
g.T(b.element,!1);var c=new l6(a.g,b.element,E6(a));b.Ha(a.B.element);c.mn();return c},E6=function(a){a.F||(a.F=new Fra(new g.Kz(a),new g.Et(a),g.X(a.g),a.g.getVideoData(),a.Xa,a.g,a.ba));
return a.F},F6=function(a,b){var c=!1;
Pra(b);for(var d=b.getElementsByTagName("annotation"),e=0;e<d.length;e++){var f=Gra(a,d[e]),k=null;try{k=vra(f)}catch(l){}k&&(D6.A(k)?(f=Kra(a,k))&&(a.H[k.id]=f):D6.B(k)?(a.o||(a.o=Ora(a)),"card"==k.type?fra(a.o,k):gra(a.o,k),c=!0):(f=Jra(a,k))&&(a.A[k.id]=f))}c&&(D4(a.g),a.Oq());g.pb(a.A,function(a){if(a.view){var b=a.annotation;(a=a.view)&&b.o&&b.o.o&&(b=this.A[b.o.o])&&(a.W=b.annotation)}},a)},Pra=function(a){if((a=a.getElementsByTagName("annotations"))&&!(1>a.length)){var b=a[0].getAttribute("itct");
if(b&&(a=g.QL())){var c=sra();c&&(b=[new g.Ec(b)],Nqa(m5(),a,c,b))}}},Rra=function(a,b,c,d){d?Qra(a,b,c):G6(a,b,c)},G6=function(a,b,c){if(b=a.A[b])s6(b),c&&c.o?(a=(0,g.z)(a.Hv,a,b),b.g=new g.tz(a,2E3),b.g.start()):a.Hv(b)},Qra=function(a,b,c){if(b=a.A[b])s6(b),c&&c.B?(a=(0,g.z)(a.gz,a,b),b.g=new g.tz(a,2E3),b.g.start()):a.gz(b)},Sra=function(a,b,c){if("new"==b.target)return!1;
var d=f5(b);if(!d)return!1;d=d.replace(/https?:\/\//g,"");if(!o5(d))return!1;d=g.Hk(d);if(d.list||d.p)return!1;b=wra(b);if(!b)return!1;if(c==b)return!0;a=g.X(a.g);return a.C&&a.kb?!0:!1},Ira=function(a,b){if(Tra(b)){var c=b.C||b6(b,function(a){return"click"==a||"rollOut"==a||"rollOut"==a});
return new lra(b,(0,g.z)(a.L.appendChild,a.L),a.g,a.ba,c)}return null},Tra=function(a){if("highlight"==a.type||"widget"==a.type)return!0;
if("text"==a.type)for(var b in C6)if(a.style==C6[b])return!0;return!1},H6=function(a,b,c,d){a.U($pa(b,d),c,d)},Lra=function(a,b){return(0,g.z)(function(){if(!this.isDisposed()){var a=Array.prototype.slice.call(arguments,0);
a.unshift(b);b=g.za.apply(window,a);this.J.push(g.hn(b,1,void 0))}},a)},I6=function(a){g.gv.call(this,a);
this.A=null;this.F=!1;this.B=null;this.o={};this.D={};this.C=null;this.J=!1;this.L=null;this.O=g.X(this.g).experiments.g("enable_creator_endscreen_moving_thumbs_on_hover");this.G=[];this.P=g.X(this.g).experiments.g("enable_creator_endscreen_html5_renderers");a=g.X(a).g;this.M="embedded"==a||"profilepage"==a;this.H=new g.Ao(null);this.g.addEventListener("crn_creatorendscreen",this.tA,this);this.g.addEventListener("crx_creatorendscreen",this.uA,this);this.W=g.rx(window,"focus",(0,g.z)(this.NM,this));
this.load()},J6=function(a,b){g.aT(a.g,"creatorendscreen");
a.C&&(a.C.dispose(),a.C=null);for(var c in a.o){var d=a.o[c];d.dispose()}a.o={};a.D={};0<a.G.length&&(a.G.forEach(function(a){a.dispose()}),a.G.length=0);
if((a.A=b)&&b.elements){Ura(a);c=[];d=new g.ds(b.startMs,0x7ffffffffffff,{id:"ytp-ce-in-endscreen",namespace:"creatorendscreen"});c.push(d);a.C=new g.V(["div","ytp-ce-shadow"]);g.cT(a.g,a.C.element,5);for(var e=0;e<b.elements.length;++e){var f=b.elements[e],d=Vra(a,f);a.o[f.id]=d;a.D[f.id]=f;g.cT(a.g,d.element,5);var k=new g.ds(f.startMs,f.endMs,{id:"ytp-ce-element-"+f.id,namespace:"creatorendscreen"});c.push(k);Wra(a,d,f)}g.UD(a.g,c);a.os()}},Ura=function(a){var b=sra();
if(b){var c=g.QL()||"";a=[a.A.visualElement];Nqa(m5(),c,b,a)}},Vra=function(a,b){var c=null;
switch(b.type){case "VIDEO":c=["div",["ytp-ce-element","ytp-ce-video"],{tabindex:0,"aria-label":b.oj,"aria-hidden":!0},["div","ytp-ce-element-shadow"],["div","ytp-ce-covering-image",K6(L6(a,b,!1)),["div","ytp-ce-covering-animated-image",K6(L6(a,b,!0))]],["div","ytp-ce-covering-shadow-top"],["a","ytp-ce-covering-overlay",{href:b.targetUrl,tabindex:"-1"},["div",["ytp-ce-video-title","yt-ui-ellipsis","yt-ui-ellipsis-2"],{dir:g.Bo(a.H,b.title||"")},b.title],["div","ytp-ce-video-duration",b.videoDuration]]];
c=new g.V(c);break;case "PLAYLIST":c=["div",["ytp-ce-element","ytp-ce-playlist"],{tabindex:0,"aria-label":b.oj,"aria-hidden":!0},["div","ytp-ce-element-shadow"],["div","ytp-ce-covering-image",K6(L6(a,b,!1)),["div","ytp-ce-covering-animated-image",K6(L6(a,b,!0))]],["div","ytp-ce-covering-shadow-top"],["a","ytp-ce-covering-overlay",{href:b.targetUrl,tabindex:"-1"},["div",["ytp-ce-playlist-title","yt-ui-ellipsis","yt-ui-ellipsis-2"],{dir:g.Bo(a.H,b.title||"")},b.title],["div","ytp-ce-playlist-count",
["div","ytp-ce-playlist-icon"],["div","ytp-ce-playlist-count-text",b.playlistLength]]]];c=new g.V(c);break;case "CHANNEL":var c=["div",["ytp-ce-element","ytp-ce-channel",b.isSubscribe?"ytp-ce-channel-this":"ytp-ce-channel-that"],{tabindex:0,"aria-label":b.oj,"aria-hidden":!0},["div","ytp-ce-element-shadow"],["div","ytp-ce-expanding-overlay",["div","ytp-ce-expanding-overlay-hider"],["div","ytp-ce-expanding-overlay-background"],["div","ytp-ce-expanding-overlay-content",["div","ytp-ce-expanding-overlay-body",
["div","ytp-ce-expanding-overlay-body-padding",["a",["ytp-ce-channel-title","ytp-ce-link"],b.title,{href:b.targetUrl,target:"_blank",tabindex:"-1",dir:g.Bo(a.H,b.title||"")}],b.htmlBlob||b.subscribeButton?["div","ytp-ce-subscribe-container",["div","ytp-ce-channel-subscribe"]]:"",b.subscribersText?["div","ytp-ce-channel-subscribers-text",b.subscribersText]:"",b.metadata?["div",["ytp-ce-channel-metadata","yt-ui-ellipsis","yt-ui-ellipsis-3"],b.metadata]:""]]]],["div","ytp-ce-expanding-image",K6(L6(a,
b,!1))]],c=new g.V(c),d=g.Dq("div","ytp-ce-channel-subscribe",c.element)[0];if(b.subscribeButton){g.N(d,"ytp-ce-subscribe-button");var e=new g.hU(b.subscribeButton.subscribeText,b.subscribeButton.unsubscribeText,b.subscribeButton.enabled,b.channelId,!!b.subscribeButton.subscribed,b.subscribeButton.feature,null,a.g);d.appendChild(e.element);a.G.push(e)}else b.htmlBlob&&g6(d,b.htmlBlob);break;case "WEBSITE":c=["div",["ytp-ce-element","ytp-ce-website"],{tabindex:0,"aria-label":b.oj,"aria-hidden":!0},
["div","ytp-ce-element-shadow"],["div","ytp-ce-expanding-overlay",["div","ytp-ce-expanding-overlay-hider"],["div","ytp-ce-expanding-overlay-background"],["div","ytp-ce-expanding-overlay-content",["div","ytp-ce-expanding-overlay-body",["div","ytp-ce-expanding-overlay-body-padding",["div","ytp-ce-website-title",{dir:g.Bo(a.H,b.title||"")},b.title],["div","ytp-ce-website-metadata",b.metadata],["a",["ytp-ce-website-goto","ytp-ce-link"],b.callToAction,{href:b.targetUrl,target:"_blank",tabindex:"-1"}]]]]],
["div","ytp-ce-expanding-image",K6(L6(a,b,!1))],["div","ytp-ce-expanding-icon",K6(b.Lv)]],c=new g.V(c)}b.nH&&g.N(c.element,"ytp-ce-placeholder");return c},Xra=function(a,b,c){a.O&&(a=g.Q("ytp-ce-covering-animated-image",b.element))&&(a.style.display=c?"block":"none")},K6=function(a){return a?{style:"background-image: url("+a+")"}:{}},L6=function(a,b,c){var d;
b.bp&&(d=b.bp.thumbnails);!i6(g.X(a.g).o)&&a.L&&b.jl&&b.jl.thumbnails&&(!a.O||c)&&(d=b.jl.thumbnails);return d?d[d.length-1].url:null},Wra=function(a,b,c){b.T("mouseenter",(0,g.z)(a.ms,a,b,c));
b.T("mouseleave",(0,g.z)(a.Lq,a,b,c));b.T("click",(0,g.z)(function(a){g.N(a.element,"ytp-ce-element-hover")},a,b));
b.T("click",(0,g.z)(a.zx,a,c));b.T("keypress",(0,g.z)(a.zx,a,c));b.T("focus",(0,g.z)(function(a,b){g.N(a.element,"ytp-ce-force-expand");this.ms(a,b)},a,b,c));
b.T("blur",(0,g.z)(function(a,b){this.Lq(a,b)},a,b,c));
b.T("touchstart",(0,g.z)(a.ms,a,b,c));var d=g.Q("ytp-ce-expanding-overlay-hider",b.element);d&&b.V(d,"touchstart",function(a){a=a||window.event;a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation();g.yh(b.element,"ytp-ce-element-hover");g.yh(b.element,"ytp-ce-force-expand")});
var e=(0,g.z)(function(a,b,c){c=g.Wq(c);(0,g.K)(c,function(c){e(c);g.fr(c)&&(a.V(c,"focus",(0,g.z)(function(a,b){g.N(a.element,"ytp-ce-force-expand");M6(this,b.id,!0)},this,a,b)),a.V(c,"click",(0,g.z)(function(a,b){g.N(a.element,"ytp-ce-force-expand");
M6(this,b.id,!0);this.J=!0},this,a,b)),a.V(c,"blur",(0,g.z)(function(a,b){this.J?(this.J=!1,a.element.focus()):(g.yh(a.element,"ytp-ce-force-expand"),M6(this,b.id,!1))},this,a,b)))},this)},a,b,c);
e(b.element)},M6=function(a,b,c){g.O(a.C.element,"ytp-ce-shadow-show",c);
for(var d in a.o)d!=b&&g.O(a.o[d].element,"ytp-ce-element-shadow-show",c)},N6=function(a,b,c){function d(){k||(f++,f==e.length&&(l.stop(),c&&c()))}
if(!b||i6(g.X(a.g).o))c&&c();else{var e=Yra(a,b),f=0,k=!1,l=new g.tz(function(){k=!0;c&&c()},1E3,a);
l.start();for(a=0;a<e.length;a++)g.ND(e[a],d)}},O6=function(a,b,c){N6(a,b.clickUrls,c);
b.Vj&&y5(b.visualElement)},Yra=function(a,b){for(var c=a.g.getVideoData().clientPlaybackNonce,d=a.g.getCurrentTime().toFixed(2),c={CPN:c,
AD_CPN:c,MT:d},d=[],e=0;e<b.length;e++)d.push(Zra(b[e],c));return d},Zra=function(a,b){return a.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g,function(a){var c=(0,window.unescape)(a),c=c.substring(1,c.length-1);
return b[c]?(0,window.escape)(b[c]):a})},$ra=function(a,b){var c=new window.Image;
c.onload=(0,g.z)(function(){this.L=0<c.width&&0<c.height;b()},a);
c.onerror=(0,g.z)(function(){this.L=!1;b()},a);
c.src="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"},P6=function(a){return(a=g.Cq(a))?g.nu(a)&&!g.wh(a,"hid"):!1},Q6=function(a,b,c,d,e,f,k){var l,m;
if(l=c.offsetParent){var n="HTML"==l.tagName||"BODY"==l.tagName;n&&"static"==g.Xt(l,"position")||(m=g.cu(l),n||(n=(n=D5(l))&&g.Cn?-l.scrollLeft:!n||g.EI&&g.lm("8")||"visible"==g.Xt(l,"overflowX")?l.scrollLeft:l.scrollWidth-l.clientWidth-l.scrollLeft,m=g.hm(m,new g.fm(n,l.scrollTop))))}l=m||new g.fm;m=g.lu(a);(n=g.du(a))&&g.Fo(m,Kpa(n));var n=g.Bq(a),q=g.Bq(c);if(n.g!=q.g){var t=n.g.body,q=g.fu(t,g.kr(q)),q=g.hm(q,g.cu(t));!g.Dn||g.mm(9)||g.Hq(n.g)||(q=g.hm(q,g.Kq(n.g)));m.left+=q.x;m.top+=q.y}a=Oqa(a,
b);b=m.left;a&4?b+=m.width:a&2&&(b+=m.width/2);b=new g.fm(b,m.top+(a&1?m.height:0));b=g.hm(b,l);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var v;k&&(v=g.du(c))&&(v.top-=l.y,v.right-=l.x,v.bottom-=l.y,v.left-=l.x);return yra(b,c,d,f,v,k,void 0)},asa=function(){g.O(window.document.body,"hide-players",!1);
(0,g.K)(g.Eq("preserve-players"),function(a){g.yh(a,"preserve-players")})},R6=function(a,b){a=g.Cq(a);
b=g.Cq(b);return!!g.gr(a,function(a){return a===b},!0,void 0)},S6=function(a){var b=a.__yt_uid_key;
b||(b=(0,g.h4)(),a.__yt_uid_key=b);return b},bsa=function(a,b){var c=g.Dq(a,null,b);
return c.length?c[0]:null},T6=function(a){if(g.X3&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");
else{var b=[];Bra(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");g.X3||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a},U6=function(a,b){var c=[];
return Cra(a,b,c,!0)?c[0]:void 0},V6=function(a,b,c,d,e,f,k){this.date=g.ua(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,k||0):new Date(a&&a.getTime?a.getTime():(0,g.C)())},W6=function(a,b){a&&(a.dataset?delete a.dataset[g.yc(b)]:a.removeAttribute("data-"+b))},csa=function(){var a=g.Zd("PLAYER_CONFIG");
return a&&a.args&&void 0!==a.args.authuser?!0:!(!g.Zd("SESSION_INDEX")&&!g.Zd("LOGGED_IN"))},X6=function(a,b,c){var d;
switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return g.gr(c,function(a){return g.wh(a,b)},!0,d)},Z6=function(a){var b="mouseover"==a.type&&"mouseenter"in Y6||"mouseout"==a.type&&"mouseleave"in Y6,c=a.type in Y6||b;
if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=Y6[b],d;for(d in c.o){var e=X6(b,d,a.target);e&&!g.gr(a.relatedTarget,function(a){return a==e},!0)&&c.U(d,e,b,a)}}if(b=Y6[a.type])for(d in b.o)(e=X6(a.type,d,a.target))&&b.U(d,e,a.type,a)}},$6=function(a){this.C=a;
this.F={};this.H=[];this.G=[]},Z=function(a,b){return"yt-uix"+(a.C?"-"+a.C:"")+(b?"-"+b:"")},a7=function(a,b,c){a.H.push(g.zs(b,c,a))},b7=function(a,b,c){a.G.push(g.Js(b,c,a))},c7=function(a){$6.call(this,a);
this.A=null},dsa=function(a,b,c){var d=c||b,e=Z(a,"card");
c=a.oc(d);var f=g.Cq(Z(a,"card")+S6(d));if(f)return a=g.Q(Z(a,"card-body"),f),g.$q(a,c)||(g.Uq(c),a.appendChild(c)),f;f=window.document.createElement("div");f.id=Z(a,"card")+S6(d);f.className=e;(d=a.sa(d,"card-class"))&&g.xh(f,d.split(/\s+/));d=window.document.createElement("div");d.className=Z(a,"card-border");b=a.sa(b,"orientation")||"horizontal";e=window.document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var k=window.document.createElement("div");k.className=
Z(a,"card-body");a=window.document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;g.Uq(c);k.appendChild(c);d.appendChild(a);d.appendChild(k);f.appendChild(e);f.appendChild(d);window.document.body.appendChild(f);return f},esa=function(a,b,c){var d=a.sa(b,"orientation")||"horizontal",e=g.Q(Z(a,"anchor"),b)||b,f=a.sa(b,"position"),k=!!a.sa(b,"force-position"),l=a.sa(b,"position-fixed"),d="horizontal"==d,m="bottomright"==f||"bottomleft"==f,n="topright"==f||"bottomright"==
f,q,t;
n&&m?(t=13,q=8):n&&!m?(t=12,q=9):!n&&m?(t=9,q=12):(t=8,q=13);var v=D5(window.document.body),f=D5(b);v!=f&&(t^=4);var w;d?(f=b.offsetHeight/2-12,w=new g.fm(-12,b.offsetHeight+6)):(f=b.offsetWidth/2-6,w=new g.fm(b.offsetWidth+6,-12));var A=g.ku(c),f=Math.min(f,(d?A.height:A.width)-24-6);6>f&&(f=6,d?w.y+=12-b.offsetHeight/2:w.x+=12-b.offsetWidth/2);A=null;k||(A=10);b=Z(a,"card-flip");a=Z(a,"card-reverse");g.O(c,b,n);g.O(c,a,m);A=Q6(e,t,c,q,w,null,A);!k&&A&&(A&48&&(n=!n,t^=4,q^=4),A&192&&(m=!m,t^=1,q^=
1),g.O(c,b,n),g.O(c,a,m),Q6(e,t,c,q,w));l&&(e=(0,window.parseInt)(c.style.top,10),k=g.Kq(window.document).y,g.Tt(c,"position","fixed"),g.Tt(c,"top",e-k+"px"));v&&(c.style.right="",e=g.lu(c),e.left=e.left||(0,window.parseInt)(c.style.left,10),k=g.Iq(window),c.style.left="",c.style.right=k.width-e.left-e.width+"px");e=g.Q("yt-uix-card-body-arrow",c);k=g.Q("yt-uix-card-border-arrow",c);d=d?m?"top":"bottom":!v&&n||v&&!n?"left":"right";e.setAttribute("style","");k.setAttribute("style","");e.style[d]=f+
"px";k.style[d]=f+"px";m=g.Q("yt-uix-card-arrow",c);n=g.Q("yt-uix-card-arrow-background",c);m&&n&&(c="right"==d?g.ku(c).width-f-13:f+11,f=c/Math.sqrt(2),m.style.left=c+"px",m.style.marginLeft="1px",n.style.marginLeft=-f+"px",n.style.marginTop=f+"px")},d7=function(a){a.A&&a.Pf(a.A)},fsa=function(a){var b=a.cardMask;
b||(b=window.document.createElement("iframe"),b.src='javascript:""',g.xh(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";window.document.body.appendChild(b)},e7=function(){$6.call(this,"kbd-nav")},gsa=function(a,b,c){b&&c&&(g.N(c,Z(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,g.b4&&c.dataset?c.dataset.kbdNavMoveOut=b:c.setAttribute("data-"+
"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b))},hsa=function(a,b){if(b){var c=g.hr(b,"LI");
c&&(g.N(c,Z(a,"highlight")),f7=g.rx(b,"blur",(0,g.z)(function(a){g.yh(a,Z(this,"highlight"));g.sx(f7)},a,c)))}},isa=function(a){if("UL"!=a.tagName.toUpperCase())return[];
a=(0,g.Ng)(g.Wq(a),function(a){return"LI"==a.tagName.toUpperCase()});
return(0,g.Ng)((0,g.M)(a,function(a){return P6(a)?U6(a,function(a){return g.wa(a)&&1==a.nodeType?g.fr(a):!1}):!1}),function(a){return!!a})},g7=function(){$6.call(this,"tooltip");
this.g=0;this.o={}},jsa=function(a,b,c){a.setData(b,"tooltip-text",c);
a=a.sa(b,"content-id");(a=g.Cq(a))&&g.br(a,c)},ksa=function(a,b){return a.sa(b,"tooltip-text")||b.title},nsa=function(a,b){if(b){var c=ksa(a,b);
if(c){var d=g.Cq(h7(a,b));if(!d){d=window.document.createElement("div");d.id=h7(a,b);d.className=Z(a,"tip");var e=window.document.createElement("div");e.className=Z(a,"tip-body");var f=window.document.createElement("div");f.className=Z(a,"tip-arrow");var k=window.document.createElement("div");k.setAttribute("aria-hidden","true");k.className=Z(a,"tip-content");var l=lsa(a,b),m=h7(a,b,"content");k.id=m;a.setData(b,"content-id",m);e.appendChild(k);l&&d.appendChild(l);d.appendChild(e);d.appendChild(f);
var n=T6(b),m=h7(a,b,"arialabel"),f=window.document.createElement("div");g.N(f,Z(a,"arialabel"));f.id=m;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==window.document.body.getAttribute("dir")?c+" "+n:n+" "+c;g.br(f,n);b.setAttribute("aria-labelledby",m);m=g.mx()||window.document.body;m.appendChild(f);m.appendChild(d);jsa(a,b,c);(c=(0,window.parseInt)(a.sa(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",g.N(k,Z(a,"normal-wrap")));k=g.wh(b,Z(a,"reverse"));msa(a,
b,d,e,l,k)||msa(a,b,d,e,l,!k);var q=Z(a,"tip-visible");g.zk(function(){g.N(d,q)},0)}}}},msa=function(a,b,c,d,e,f){g.O(c,Z(a,"tip-reverse"),f);
var k=0;f&&(k=1);var l=g.ku(b);f=new g.fm((l.width-10)/2,f?l.height:0);var m=g.cu(b);yra(new g.fm(m.x+f.x,m.y+f.y),c,k);var m=g.Iq(window),n=g.gu(c);c=g.ku(d);var q=Math.floor(c.width/2),k=!!(m.height<n.y+l.height),l=!!(n.y<l.height);f=!!(n.x<q);m=!!(m.width<n.x+q);n=(c.width+3)/-2- -5;a=a.sa(b,"force-tooltip-direction");if("left"==a||f)n=-5;else if("right"==a||m)n=20-c.width-3;a=Math.floor(n)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(k||
l)},h7=function(a,b,c){a=Z(a)+S6(b);
c&&(a+="-"+c);return a},lsa=function(a,b){var c=null;
g.Q3&&g.wh(b,Z(a,"masked"))&&((c=g.Cq("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),g.aA(c)):(c=window.document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=Z(a,"tip-mask")));return c},osa=function(a){var b=g.Cq("yt-uix-tooltip-shared-mask"),c=b&&g.gr(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),g.bA(b),window.document.body.appendChild(b))},i7=function(){c7.call(this,"hovercard")},j7=function(a){g.sd.call(this,1,arguments);
this.g=a},k7=function(a,b,c,d,e){g.sd.call(this,2,arguments);
this.source=e||null},psa=function(a,b,c){g.sd.call(this,1,arguments);
this.g=a;this.o=b},l7=function(a,b,c,d,e,f,k){g.sd.call(this,1,arguments);
this.g=d||null;this.source=k||null},m7=function(){$6.call(this,"button");
this.g=null;this.A=[];this.o={}},qsa=function(a,b,c,d,e){var f=P6(c),k=9==d.keyCode;
k||32==d.keyCode||13==d.keyCode?(d=n7(a,c))?(b=g.Yq(d),"a"==b.tagName.toLowerCase()?g.vQ(b.href):E4(b)):k&&o7(a,b):f?27==d.keyCode?(n7(a,c),o7(a,b)):e(b,c,d):(a=g.wh(b,Z(a,"reverse"))?38:40,d.keyCode==a&&(E4(b),d.preventDefault()))},n7=function(a,b){var c=Z(a,"menu-item-highlight"),d=g.Q(c,b);
d&&g.yh(d,c);return d},rsa=function(a,b,c){g.N(c,Z(a,"menu-item-highlight"));
var d=c.getAttribute("id");d||(d=Z(a,"item-id-"+g.ya(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)},ssa=function(a,b,c,d){var e=b.length;
a=(0,g.Ce)(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a},p7=function(a,b){var c=b.iframeMask;
c||(c=window.document.createElement("iframe"),c.src='javascript:""',c.className=Z(a,"menu-mask"),g.bA(c),b.iframeMask=c);return c},q7=function(a,b,c,d){var e=g.ir(b,Z(a,"group")),f=!!a.sa(b,"button-menu-ignore-group"),e=e&&!f?e:b,f=9,k=8,l=g.lu(b);
if(g.wh(b,Z(a,"reverse"))){f=8;k=9;l=l.top+"px";try{c.style.maxHeight=l}catch(q){}}g.wh(b,"flip")&&(g.wh(b,Z(a,"reverse"))?(f=12,k=13):(f=13,k=12));var m;a.sa(b,"button-has-sibling-menu")?m=g.bu(e):a.sa(b,"button-menu-root-container")&&(m=tsa(a,b));g.Dn&&!g.lm("8")&&(m=null);var n;m&&(n=g.lu(m),n=new g.Rn(-n.top,n.left,n.top,-n.left));m=new g.fm(0,1);g.wh(b,Z(a,"center-menu"))&&(m.x-=Math.round((g.ku(c).width-g.ku(b).width)/2));d&&(m.y+=g.Kq(window.document).y);if(a=p7(a,b))b=g.ku(c),a.style.width=
b.width+"px",a.style.height=b.height+"px",Q6(e,f,a,k,m,n,197),d&&g.Tt(a,"position","fixed");Q6(e,f,c,k,m,n,197)},tsa=function(a,b){if(a.sa(b,"button-menu-root-container")){var c=a.sa(b,"button-menu-root-container");
return g.ir(b,c)}return window.document.body},o7=function(a,b){if(b){var c=r7(a,b);
if(c){a.g=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");g.bA(c);a.Zh(b,"button-menu-action",!1);var d=p7(a,b),e=S6(c).toString();delete a.o[e];g.zk(function(){d&&d.parentNode&&(g.bA(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}var e=g.ir(b,Z(a,"group")),f=[Z(a,"active")];
e&&f.push(Z(a,"group-active"));g.zh(b,f);g.Cs("yt-uix-button-menu-hide",b);g.sx(a.A);a.A.length=0}},usa=function(a,b,c){var d=Z(a,"menu-item-selected");
(0,g.K)(g.Eq(d,b),function(a){g.yh(a,d)});
g.N(c.parentNode,d)},r7=function(a,b){if(!b.widgetMenu){var c=a.sa(b,"button-menu-id"),c=c&&g.Cq(c),d=Z(a,"menu");
c?g.xh(c,[d,Z(a,"menu-external")]):c=g.Q(d,b);b.widgetMenu=c}return b.widgetMenu},vsa=function(a,b){if(a.sa(b,"button-toggle")){var c=g.ir(b,Z(a,"group")),d=Z(a,"toggled"),e=g.wh(b,d);
if(c&&a.sa(c,"button-toggle-group")){var f=a.sa(c,"button-toggle-group");(0,g.K)(g.Eq(Z(a),c),function(a){a!=b||"optional"==f&&e?(g.yh(a,d),a.removeAttribute("aria-pressed")):(g.N(b,d),a.setAttribute("aria-pressed","true"))})}else e?b.removeAttribute("aria-pressed"):b.setAttribute("aria-pressed","true"),g.Bh(b,d)}},s7=function(a){a.g&&o7(a,a.g)},t7=function(){$6.call(this,"menu");
this.o=this.g=null;this.A={};this.D={};this.B=null},u7=function(a){var b=t7.getInstance();
if(g.wh(a,Z(b)))return a;var c=b.Kd(a);return c?c:g.ir(a,Z(b,"content"))==b.g?b.o:null},wsa=function(a,b,c){var d=v7(a,b);
d&&g.ju(d,g.ku(c));if(c==a.g){var e=9,f=8;g.wh(b,Z(a,"reversed"))&&(e^=1,f^=1);g.wh(b,Z(a,"flipped"))&&(e^=4,f^=4);a=new g.fm(0,1);d&&Q6(b,e,d,f,a,null,197);Q6(b,e,c,f,a,null,197)}},ysa=function(a,b,c){w7(a,b)&&!c?x7(a,b):(xsa(a,b),!a.g||R6(b,a.g)?a.LB(b):fpa(a.B,(0,g.z)(a.LB,a,b)))},xsa=function(a,b){if(b){var c=g.ir(b,Z(a,"content"));
c&&(0,g.K)(g.Eq(Z(a),c),function(a){!R6(a,b)&&w7(this,a)&&y7(this,a)},a)}},x7=function(a,b){if(b){var c=[];
c.push(b);var d=z7(a,b);d&&(d=g.Eq(Z(a),d),d=g.Le(d),c=c.concat(d),(0,g.K)(c,function(a){w7(this,a)&&y7(this,a)},a))}},y7=function(a,b){if(b){var c=z7(a,b);
g.zh(A7(a,b),[Z(a,"trigger-selected"),"yt-uix-button-toggled"]);g.N(c,Z(a,"content-hidden"));var d=z7(a,b);d&&g.Gq(d,{"aria-expanded":"false"});(d=v7(a,b))&&d.parentNode&&g.Uq(d);c&&c==a.g&&(a.o.appendChild(c),a.g=null,a.o=null,a.B&&a.B.U("ROOT_MENU_REMOVED"));g.Cs("yt-uix-menu-hide",b);c=g.ya(b).toString();g.sx(a.A[c]);delete a.A[c]}},zsa=function(a,b){var c=z7(a,b);
if(c){(0,g.K)(c.children,function(a){"LI"==a.tagName&&g.Gq(a,{role:"menuitem"})});
g.Gq(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+g.ya(c),c.id=d);(c=A7(a,b))&&g.Gq(c,{"aria-controls":d})}},Asa=function(a,b,c){var d=z7(a,b);
d&&g.wh(b,Z(a,"checked"))&&(a=g.hr(c,"LI"))&&(a=g.Q("yt-ui-menu-item-checked-hid",a))&&((0,g.K)(g.Eq("yt-ui-menu-item-checked",d),function(a){g.Ah(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),g.Ah(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))},w7=function(a,b){var c=z7(a,b);
return c?!g.wh(c,Z(a,"content-hidden")):!1},Bsa=function(a){(0,g.K)(g.Dq("UL",null,a),function(a){a.tabIndex=0;
var b=e7.getInstance();g.xh(a,[Z(b),Z(b,"list")])})},z7=function(a,b){var c=g.zc(b,"menu-content-id");
return c&&(c=g.Cq(c))?(g.xh(c,[Z(a,"content"),Z(a,"content-external")]),c):b==a.o?a.g:g.Q(Z(a,"content"),b)},v7=function(a,b){var c=g.ya(b).toString(),d=a.D[c];
if(!d){d=g.qd("IFRAME");d.src='javascript:""';var e=[Z(a,"mask")];(0,g.K)(g.vh(b),function(a){e.push(a+"-mask")});
g.xh(d,e);a.D[c]=d}return d||null},A7=function(a,b){return g.Q(Z(a,"trigger"),b)},Csa=function(a,b){return R6(b,a.g)||R6(b,a.o)},B7=function(){c7.call(this,"clickcard");
this.g={};this.o={}},C7=function(a,b,c,d,e,f){this.g=a;
this.F=null;this.A=g.Q("yt-dialog-fg",this.g)||this.g;if(a=g.Q("yt-dialog-title",this.A)){var k="yt-dialog-title-"+g.ya(this.A);a.setAttribute("id",k);this.A.setAttribute("aria-labelledby",k)}this.A.setAttribute("tabindex","-1");this.J=g.Q("yt-dialog-focus-trap",this.g);this.L=!1;this.B=new g.bp;this.G=[];this.G.push(A4(this.g,"click",(0,g.z)(this.xJ,this),"yt-dialog-dismiss"));this.G.push(g.rx(this.J,"focus",(0,g.z)(this.bF,this),!0));Dsa(this);this.O=b;this.P=c;this.M=d;this.H=e;this.W=f;this.D=
this.C=null},Esa=function(a,b){a.isDisposed()||a.B.subscribe("post-all",b)},Dsa=function(a){a=g.Q("yt-dialog-fg-content",a.g);
var b=[];g.pb(Fsa,function(a){b.push("yt-dialog-show-"+a)});
g.zh(a,b);g.N(a,"yt-dialog-show-content")},Gsa=function(){return(0,g.Rr)(g.Eq("yt-dialog"),function(a){return P6(a)})},Hsa=function(a){var b=g.Dq("iframe",null,a.g);
(0,g.K)(b,function(a){var b=g.zc(a,"onload");b&&(b=g.u(b))&&g.rx(a,"load",b);if(b=g.zc(a,"src"))a.src=b},a);
return g.Le(b)},Isa=function(a){(0,g.K)(window.document.getElementsByTagName("iframe"),function(b){-1==(0,g.Ce)(a,b)&&g.N(b,"iframe-hid")})},Jsa=function(){(0,g.K)(g.Eq("iframe-hid"),function(a){g.yh(a,"iframe-hid")})},Ksa=function(a){g.zk((0,g.z)(function(){this.A&&this.A.focus()},a),0)},D7=function(){$6.call(this,"overlay");
this.B=this.o=this.A=this.g=null},Msa=function(a){a.B||(a.B=g.zs("yt-uix-overlay-hide",Lsa));
a.g&&Esa(a.g,function(){var a=D7.getInstance();a.A=null;a.g.dispose();a.g=null})},Nsa=function(a){if(a.g){var b=a.A;
a.g.dismiss("overlayhide");b&&a.Zh(b,"overlay-hidden");a.A=null;a.o&&(g.sx(a.o),a.o=null);a.g=null}},Osa=function(a,b){var c;
if(a)if(c=g.Q("yt-dialog",a)){var d=g.Cq("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=g.ir(b,"yt-dialog"));return c},Psa=function(){var a=D7.getInstance();
if(a.A)a=g.Q("yt-dialog-fg-content",a.A.overlayContentNode);else a:{if(a=g.Eq("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=g.ir(a[b],"yt-dialog");if(P6(c)){a=a[b];break a}}a=null}return a},Lsa=function(){Nsa(D7.getInstance())},Qsa=function(a){a=g.ir(a,"yt-uix-button-subscription-container");
return g.Q("yt-dialog",g.Q("unsubscribe-confirmation-overlay-container",a))},Rsa=function(a,b){g.sx(E7);
E7.length=0;F7[b]||(F7[b]=Qsa(a));D7.getInstance().show(F7[b]);var c=Psa();return new g.Jo(function(a){E7.push(A4(c,"click",function(){a()},"overlay-confirmation-unsubscribe-button"))})},G7=function(){$6.call(this,"subscription-button")},Ssa=function(a,b){if(!a.sa(b,"ypc-enabled"))return null;
var c=a.sa(b,"ypc-item-type"),d=a.sa(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}},Tsa=function(a,b){var c=a.sa(b,H7.PD),d=!!a.sa(b,"is-subscribed"),c="-"+c,e=I7.dC+c;
g.O(b,I7.cC+c,!d);g.O(b,e,d);a.sa(b,H7.pC)&&!a.sa(b,H7.oC)&&(c=Z(g7.getInstance()),g.O(b,c,!d),b.title=d?"":a.sa(b,H7.qC));d?g.zk(function(){g.N(b,I7.Is)},1E3):g.yh(b,I7.Is)},Usa=function(a,b){return(0,g.Ng)(g.Eq(Z(a)),function(a){return b==this.sa(a,"channel-external-id")},a)},Vsa=function(a,b){var c=(0,g.z)(function(a){a.discoverable_subscriptions&&g.Yd("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);
this.Fs(b)},a);
g.Wv(c,"subscribe","sub_button")},Wsa=function(a,b){if(!a.sa(b,"show-unsub-confirm-dialog"))return!1;
var c=a.sa(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=(0,window.parseInt)(a.sa(b,"subscribed-timestamp"),10),(new V6).getTime()<1E3*(c+600))?!0:!1},F4={thin:2,
medium:4,thick:6},Apa=[2,2,6,6,0];g.B(J4,g.Mt);g.h=J4.prototype;g.h.zp=null;g.h.Mj=null;g.h.ma=function(){return this.Mj};
g.h.addEventListener=function(a,b,c,d){g.lr(this.Mj,a,b,c,d)};
g.h.removeEventListener=function(a,b,c,d){g.ur(this.Mj,a,b,c,d)};
g.h.R=function(){J4.N.R.call(this);var a=this.Mj;if(a)if(g.Id(a))a.ee&&g.Gh(a.ee);else if(a=g.or(a)){var b=0,c;for(c in a.g)for(var d=a.g[c].concat(),e=0;e<d.length;++e)g.vr(d[e])&&++b}};
g.B(O4,J4);O4.prototype.fill=null;var U4;g.B(R4,O4);g.B(S4,J4);var spa=0;g.B(mpa,R4);g.B(W4,S4);W4.prototype.clear=function(){g.Rq(this.ma())};
W4.prototype.setSize=function(a,b){rpa(this.ma(),{width:a,height:b})};
var a5=null;g.B(X4,g.Lw);X4.prototype.C=null;X4.prototype.ni=function(){return this.ke?g.ku(this.ma()):g.ua(this.width)&&g.ua(this.height)?new g.lb(this.width,this.height):null};
X4.prototype.resume=function(){};
g.B(L4,T4);g.B(K4,T4);g.B(Z4,X4);g.h=Z4.prototype;g.h.im=function(){var a=M4(this,"svg",{width:this.width,height:this.height,overflow:"hidden"}),b=M4(this,"g");this.G=M4(this,"defs");this.C=new W4(b,this);a.appendChild(this.G);a.appendChild(b);this.g=a;this.A&&(this.ma().setAttribute("preserveAspectRatio","none"),this.M?this.yn():this.ma().setAttribute("viewBox","0 0 "+(this.A?this.A+" "+this.O:"")))};
g.h.yn=function(){if(this.ke){var a=this.ni();if(0==a.width)this.ma().style.visibility="hidden";else{this.ma().style.visibility="";var b=a.width/this.A,a=a.height/this.O;this.C.ma().setAttribute("transform","scale("+b+" "+a+") translate(0 0)")}}};
g.h.setSize=function(a,b){g.ju(this.ma(),a,b)};
g.h.ni=function(){if(!g.Cn)return this.ke?g.ku(this.ma()):Z4.N.ni.call(this);var a=this.width,b=this.height,c=g.y(a)&&-1!=a.indexOf("%"),d=g.y(b)&&-1!=b.indexOf("%");if(!this.ke&&(c||d))return null;var e,f;c&&(e=this.ma().parentNode,f=g.ku(e),a=(0,window.parseFloat)(a)*f.width/100);d&&(e=e||this.ma().parentNode,f=f||g.ku(e),b=(0,window.parseFloat)(b)*f.height/100);return new g.lb(a,b)};
g.h.clear=function(){this.C.clear();g.Rq(this.G);this.o={}};
g.h.gi=function(){var a=this.ni();Z4.N.gi.call(this);a||this.dispatchEvent("resize");if(this.M){var a=this.width,b=this.height;"string"==typeof a&&-1!=a.indexOf("%")&&"string"==typeof b&&-1!=b.indexOf("%")&&this.J.T(V4(),"tick",this.yn);this.yn()}};
g.h.Aj=function(){Z4.N.Aj.call(this);this.M&&this.J.Ba(V4(),"tick",this.yn)};
g.h.R=function(){delete this.o;delete this.G;delete this.C;this.J.dispose();delete this.J;Z4.N.R.call(this)};
b5.prototype.B=function(){var a=g.u("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.g.apiaryHost;g.D(g.E(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.g.Co;g.D(g.E(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);b=g.Zd("SESSION_INDEX");a("googleapis.config/sessionIndex",b);g.u("gapi.client.setApiKey")(this.g.innertubeApiKey)};
b5.prototype.o=function(){return{context:g.Xf(this.g)}};
b5.prototype.A=function(a,b,c){var d,e=!1;0<c.timeout&&(d=g.zk(function(){e||(e=!0,c.ad&&c.ad())},c.timeout));
tpa(this,a,b,function(a){if(!e)if(e=!0,d&&g.xk(d),a)c.Gb&&c.Gb(a);else if(c.onError)c.onError()})};
var p5={bevel:1,dropshadow:2},Ipa={xT:"current",sW:"new"};g.h=k5.prototype;g.h.Ze=null;g.h.ud=null;g.h.qk=!0;g.h.clear=function(){this.xa.length=0;this.Ia.length=0;this.Yd.length=0;delete this.Ze;delete this.ud;delete this.qk;return this};
g.h.tc=function(a){var b=g.xe(this.xa);if(null==b)throw Error("Path cannot start with lineTo");1!=b&&(this.xa.push(1),this.Ia.push(0));for(b=0;b<arguments.length;b+=2){var c=arguments[b],d=arguments[b+1];this.Yd.push(c,d)}this.Ia[this.Ia.length-1]+=b/2;this.ud=[c,d]};
g.h.close=function(){var a=g.xe(this.xa);if(null==a)throw Error("Path cannot start with close");4!=a&&(this.xa.push(4),this.Ia.push(1),this.ud=this.Ze);return this};
g.h.clone=function(){var a=new this.constructor;a.xa=this.xa.concat();a.Ia=this.Ia.concat();a.Yd=this.Yd.concat();a.Ze=this.Ze&&this.Ze.concat();a.ud=this.ud&&this.ud.concat();a.qk=this.qk;return a};
g.h.transform=function(a){if(!this.qk)throw Error("Non-simple path");a.transform(this.Yd,0,this.Yd,0,this.Yd.length/2);this.Ze&&a.transform(this.Ze,0,this.Ze,0,1);this.ud&&this.Ze!=this.ud&&a.transform(this.ud,0,this.ud,0,1);return this};
g.h.isEmpty=function(){return 0==this.xa.length};
var Dpa={jZ:"xx",kZ:"xy",oZ:"yx",pZ:"yy"};g.B(Bpa,g.hf);g.B(Cpa,d5);var qqa=/[^\d]+$/;u5.prototype.tb=function(){return this.A};
w5.prototype.ma=function(){return this.C};
w5.prototype.A=function(){};
var dqa={ZB:"anchored",kX:"rect",HX:"shapeless"};g.B(z5,g.Cw);g.h=z5.prototype;g.h.play=function(a){if(a||0==this.g)this.progress=0,this.o=this.A;else if(this.jb())return!1;n5(this);this.startTime=a=(0,g.C)();-1==this.g&&(this.startTime-=this.duration*this.progress);this.endTime=this.startTime+this.duration;this.C=this.startTime;this.progress||this.Lm();this.de("play");-1==this.g&&this.de("resume");this.g=1;var b=g.ya(this);b in g.HA||(g.HA[b]=this);g.GA();Spa(this,a);return!0};
g.h.stop=function(a){n5(this);this.g=0;a&&(this.progress=1);Rpa(this,this.progress);this.de("stop");this.dk()};
g.h.pause=function(){this.jb()&&(n5(this),this.g=-1,this.de("pause"))};
g.h.R=function(){0==this.g||this.stop(!1);this.de("destroy");z5.N.R.call(this)};
g.h.destroy=function(){this.dispose()};
g.h.XI=function(a){Spa(this,a)};
g.h.Gq=function(){this.de("animate")};
g.h.de=function(a){this.dispatchEvent(new Bpa(a,this))};
g.B(C5,t5);var sqa={em:1,ex:1},rqa={cm:1,"in":1,mm:1,pc:1,pt:1},uqa={CLOSED:"closed",OW:"playerControlShow",DD:"rollOver",HD:"shown"};H5.prototype.clone=function(){return new H5(this.start,this.end)};
H5.prototype.getLength=function(){return this.end-this.start};
g.h=I5.prototype;g.h.mn=function(){this.context.A.subscribe("resize",this.sl,this)};
g.h.ma=function(){return this.na};
g.h.$i=function(a,b,c,d,e,f,k){this.context.g.T(a,"click",g.za(this.Fm,b,c,d,e,f||[],k||0),this);this.context.g.T(a,"touchstart",g.za(function(){this.Mr=!1}),this);
this.context.g.T(a,"touchmove",g.za(function(){this.Mr=!0}),this)};
g.h.Fm=function(a,b,c,d,e,f,k){if(this.Mr)return!1;k&&(k.stopPropagation(),k.preventDefault());(b=B5(a,b,this.context.videoData.videoId))&&bqa(this,b,A5(b,a.target),c,d,e,f,a.g);return!1};
g.h.show=function(){this.M=(0,g.C)()};
g.h.Un=function(){};
g.h.destroy=function(){g.Uq(this.ma())};
g.h.sl=function(){};
g.B(L5,w5);
L5.prototype.A=function(a,b){var c=d6(a);if(c){var d=e5(c,b);if(!(0>=d.width||0>=d.height)){var e;if(e=(c=(c=Lqa(a))&&c.g?c.g:null)&&c.length?c[0]:null){var f=g.Ho(upa(b,vpa(e,new g.Co(e.F,e.G,e.xk,e.A),b.g))),k=d.clone(),c=new g.Co(f.x,f.y,1,1),l=Math.max(k.left+k.width,c.left+c.width),m=Math.max(k.top+k.height,c.top+c.height);k.left=Math.min(k.left,c.left);k.top=Math.min(k.top,c.top);k.width=l-k.left;k.height=m-k.top;var c=a.g,k=v5(k,c.effects),l=x5(this,k.width,k.height),m=Npa(c,k.width,k.height,
this.g),d=new g.Co(d.left-k.left,d.top-k.top,d.width,d.height),n=new g.fm(f.x-k.left,f.y-k.top);this.B=17*Y4(b.g,e.o,e.g?e.g:"xy");e=c.cornerRadius;var f=a.g,q=this.g&&c6(a),t=q?f.g+1:f.g,q=(f=t?new u5(t,q?f.A:f.C):null)?f.tb()/2:0,t=Lpa(d,n),v=this.D(d,e,n,t),w=n.x,n=n.y,A=d.width,F=d.height,R=d.left,d=d.top,I=new k5;zpa(I,R+e+q,d+q);"t"==t&&(I.tc(v.start,d+q),I.tc(w,n),I.tc(v.end,d+q));I.tc(R+A-e-q,d+q);l5(I,e,e,-90);"r"==t&&(I.tc(R+A-q,v.start),I.tc(w,n),I.tc(R+A-q,v.end));I.tc(R+A-q,d+F-e-q);
l5(I,e,e,0);"b"==t&&(I.tc(v.end,d+F-q),I.tc(w,n),I.tc(v.start,d+F-q));I.tc(R+e+q,d+F-q);l5(I,e,e,90);"l"==t&&(I.tc(R+q,v.end),I.tc(w,n),I.tc(R+q,v.start));I.tc(R+q,d+e+q);l5(I,e,e,180);I.close();$4(l,I,f,m);if(m=this.ma())g.N(m,"annotation-shape"),g.N(m,"annotation-speech-shape"),g.Zt(m,k.left,k.top),g.ju(m,k.width,k.height),Mpa(l,m,c.effects)}}}};
L5.prototype.D=function(a,b,c,d){function e(a,c,d,e){a=Math.min(Math.max(e-2*b,0),a);c=g.Sh(c-a/2,d+b,d+e-a-b);return new H5(c,c+a)}
return"t"==d||"b"==d?e(this.B,c.x,a.left,a.width):"l"==d||"r"==d?e(this.B,c.y,a.top,a.height):new H5(0,0)};
g.B(M5,z5);M5.prototype.B=g.x;M5.prototype.Gq=function(){this.B();M5.N.Gq.call(this)};
M5.prototype.dk=function(){this.B();M5.N.dk.call(this)};
M5.prototype.Lm=function(){this.B();M5.N.Lm.call(this)};
g.B(gqa,C5);g.B(hqa,C5);g.B(iqa,C5);g.B(N5,t5);g.B(lqa,t5);g.B(mqa,t5);g.B(nqa,t5);g.B(oqa,t5);var Sqa={eo:"click",CLOSE:"close",MU:"hidden",wX:"rollOut",DD:"rollOver",HD:"shown"},Rqa={CLOSE:"close",zW:"openUrl",QD:"subscribe"};xqa.prototype.B=function(a,b,c,d){this.g[a]=b?!c:c;a=g.sb(this.g,function(a){return a});
this.o!=a&&(this.o=a,this.A.U(this.C,a,d))};
g.B(P5,I5);P5.prototype.mn=function(){P5.N.mn.call(this);var a=this.annotation.data;"start_ms"in a&&"end_ms"in a&&J5(this,this.annotation.data.start_ms,this.annotation.data.end_ms,this.annotation.id,this.show,this.Un)};
var ara={collaborator:oqa,donation:iqa,episode:N5,movie:N5,playlist:nqa,poll:mqa,productListing:hqa,simple:C5,tip:gqa,video:lqa};g.B(Q5,L5);Q5.prototype.D=function(a,b,c,d){function e(a,c,d,e){a=Math.min(Math.max(e-2*b,0),a);c=c<=d+e/2?Math.max(d+e/4-a/2,d+b):Math.min(d+3*e/4-a/2,d+e-a-b);return new H5(c,c+a)}
return"t"==d||"b"==d?e(this.B,c.x,a.left,a.width):"l"==d||"r"==d?e(this.B,c.y,a.top,a.height):new H5(0,0)};
R5.prototype.o=function(a,b){var c=g.hr(b.target,"label");c&&g.O(c,"iv-card-poll-choice-focused",a)};
R5.prototype.F=function(a,b){var c=g.ir(b.target,"iv-card-poll");if(c)if(a.A)g.Q("iv-card-sign-in-button",c).click();else{var d=(0,window.parseInt)(O5(b.target,"pollChoiceIndex"),10);if(null==a.g)a.choices[d].count++,a.g=d;else if(a.g!=d){var e=a.choices[a.g];e.count=Math.max(e.count-1,0);a.choices[d].count++;a.g=d}else e=a.choices[a.g],e.count=Math.max(e.count-1,0),a.g=null;Bqa(a,c);g.CB(this.g.videoData.Uh,{Dc:{action_poll_vote:1},Mb:{poll_id:a.id,index:d,session_token:a.G}});c={};c["link-id"]=
d;K5(this.g.logger,a.Nb,void 0,c,a.o.click,5);y5(a.C)}};
R5.prototype.D=function(a){var b=g.u("yt.www.ypc.bootstrap.api.loadOffersForInnertubeRequestParams");b&&(b=g.za(b,a.J,a.B));Fqa(this,a,!0,b)};
R5.prototype.G=function(a){var b=g.u("yt.www.ypc.bootstrap.api.loadOffers");b&&(b=g.za(b,a.J,a.B,a.L));Fqa(this,a,!1,b)};
g.B(Z5,w5);Z5.prototype.A=function(a,b){var c=d6(a);if(c){var d=e5(c,b);if(!(0>=d.width||0>=d.height)){var c=a.g,e=v5(d,c.effects),f=x5(this,e.width,e.height),k=Npa(c,d.width,d.height,this.g),d=new g.Co(0,0,d.width,d.height),l=c.cornerRadius,m=a.g,n=this.g&&c6(a),q=n?m.g+1:m.g,n=(m=q?new u5(q,n?m.A:m.C):null)?m.tb()/2+1:0,d=Opa(d,l,n);$4(f,d,m,k);if(k=this.ma())g.N(k,"annotation-shape"),g.N(k,"annotation-popup-shape"),g.Zt(k,e.left,e.top),g.ju(k,e.width,e.height),Mpa(f,k,c.effects)}}};
g.B($5,w5);$5.prototype.A=function(a,b){var c=d6(a);if(c){var d=e5(c,b);if(!(0>=d.width||0>=d.height)){var e=a.g,c=v5(d,e.effects),f=x5(this,c.width,c.height),k=new g.Co(0,0,d.width,d.height),l=e.cornerRadius,d=new u5(!e.B&&this.g?1:e.B,e.bgColor),m=new K4("#000",0),n=d?d.tb()/2+1:0,k=Opa(k,l,n);$4(f,k,d,m);f=this.ma();g.N(f,"annotation-shape");e=e.o;g.mu(f,this.g?Math.max(e,.9):e);g.Zt(f,c.left,c.top);g.ju(f,c.width,c.height)}}};
var ura={VY:"video_relative",PW:"player_relative"},tra={bC:"branding",XS:"card",iU:"drawer",OU:"highlight",JV:"marker",dX:"promotion",TEXT:"text",fZ:"widget"},C6={ZB:"anchored",bC:"branding",CHANNEL:"channel",wT:"cta",PU:"highlightText",oV:"label",PLAYLIST:"playlist",ZW:"popup",TX:"speech",QD:"subscribe",nY:"title",VIDEO:"video",$Y:"vote",cZ:"website"};Hqa.prototype.showLinkIcon=function(){return b6(this,function(a){return null!=a.url&&a.url.showLinkIcon})};
g.B(f6,M5);f6.prototype.B=function(){this.element.style.left=Math.round(this.o[0])+"px";this.element.style.top=Math.round(this.o[1])+"px"};
var Ara={IMG:" ",BR:"\n"},zra={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1};g.B(h6,P5);g.h=h6.prototype;g.h.RN=function(a,b,c,d){this.A.stop();if(!this.B){var e=g.ku(a);this.g||(g.iu(a,e.width),g.iu(b,e.width));g.Zt(c,e.width,e.height-Math.max(Math.min(e.height,d)/2+Math.round(10),20));this.B=!0;g.T(a,!0);this.C=new g.tz(function(){g.N(this.ma(),"iv-branding-active")},0,this);
this.C.start()}};
g.h.qG=function(a,b){g.yh(this.ma(),"iv-branding-active");this.D=new g.tz((0,g.z)(function(){g.T(a,!1);this.g||g.iu(b,0)},this),250);
this.D.start();this.B=!1};
g.h.show=function(){if(!this.isActive){h6.N.show.call(this);if(!this.F){g.N(this.ma(),"iv-branding");var a=this.annotation.data;this.G=a.image_width;this.o=g.S("IMG",{src:a.image_url,"class":"branding-img iv-click-target",width:a.image_width,height:a.image_height});g.T(this.o,!1);var b=g.S("DIV","branding-img-container",this.o);this.ma().appendChild(b);var c=g.S("DIV","iv-branding-context-name");g.br(c,a.channel_name);var d=g.S("DIV","iv-branding-context-subscribe");if(a.use_standalone_subscribe_button){if(b=
a.standalone_subscribe_button_data)this.g=new g.hU(b.subscribeText,b.unsubscribeText,!!b.enabled,a.channel_id,!!b.subscribed,b.feature,a.session_data.itct,this.H.o),this.g.Ha(d)}else this.annotation.htmlBlob?g6(d,this.annotation.htmlBlob):a.num_subscribers&&g.br(d,a.num_subscribers);b=g.S("DIV","iv-branding-context-subscribe-caret");c=g.S("DIV","branding-context-container-inner",b,c,d);g.T(c,!1);d=g.S("DIV","branding-context-container-outer",c);g.Tt(d,"right",this.G+"px");this.ma().appendChild(d);
var e=a6(this.annotation);e&&this.$i(this.o,e,this.annotation.id,a.session_data,this.annotation.Nb);this.A=new g.tz(g.za(this.qG,c,d),500,this);this.context.g.T(this.ma(),"mouseover",(0,g.z)(this.RN,this,c,d,b,a.image_height));this.context.g.T(this.ma(),"mouseout",(0,g.z)(this.A.start,this.A,void 0));this.F=!0}o6(this.context.logger,this.annotation.Nb);g.T(this.ma(),!0);this.isActive=!0;if(this.o){var a=this.o,f,b=g.lu(a).width,c=g.ua(void 0)?void 0:b;f=f||0;g.Zt(a,c);f=new f6(a,[c,a.offsetTop],[c-
b-f,a.offsetTop],200,Wqa);this.context.B.T(f,"begin",g.za(g.T,a,!0));f.play()}}};
g.h.Un=function(){this.isActive&&(g.T(this.ma(),!1),this.isActive=!1)};
g.h.destroy=function(){this.g&&(this.g.dispose(),this.g=null);h6.N.destroy.call(this)};
var Xsa=["ytp-ce-top-left-quad","ytp-ce-top-right-quad","ytp-ce-bottom-left-quad","ytp-ce-bottom-right-quad"];g.B(j6,P5);g.h=j6.prototype;g.h.show=function(){this.isActive||(j6.N.show.call(this),this.G||(Xqa(this),this.G=!0),g.T(this.ma(),!0),this.annotation&&this.annotation.Nb&&o6(this.context.logger,this.annotation.Nb),g.yh(this.ma(),"iv-promo-inactive"),this.ma().removeAttribute("aria-hidden"),this.isActive=!0,k6(this),Zqa(this),$qa(this,this.D))};
g.h.Un=function(){this.isActive&&(g.N(this.ma(),"iv-promo-inactive"),this.isActive=!1,this.ma().setAttribute("aria-hidden",!0))};
g.h.Fm=function(a,b,c,d,e,f,k){return this.B?!1:j6.N.Fm.call(this,a,b,c,d,e,f,k)};
g.h.Fp=function(a,b){b.stopPropagation();Zqa(this);$qa(this,a);this.dd.focus()};
g.h.EF=function(a){this.F=!0;this.Fp(500,a)};
g.h.DF=function(){this.F=!1;Yqa(this)};
g.h.BQ=function(a){a.stopPropagation();this.Un();A6(this.context.logger,this.annotation.Nb)};
g.h.tF=function(a){a.stopPropagation();k6(this);this.B=!0;g.N(this.ma(),"iv-promo-collapsed-no-delay");this.C.start();A6(this.context.logger,this.annotation.Nb)};
g.h.destroy=function(){this.C.dispose();j6.N.destroy.call(this)};
g.B(l6,I5);g.h=l6.prototype;g.h.isAvailable=function(){var a;if(a=!!this.o.length)(a=this.Y.getRootNode())?(a=g.ku(a),a=177<a.width&&177<a.height):a=!1;return a};
g.h.gE=function(){this.Ma&&p6(this,"YOUTUBE_DRAWER_AUTO_OPEN")};
g.h.JE=function(){(this.Ma=this.B)&&this.Cl()};
g.h.zQ=function(){p6(this,"YOUTUBE_DRAWER_AUTO_OPEN")};
g.h.Cl=function(){this.B&&(g.NB(this.da),g.yh(this.context.o.getRootNode(),"ytp-iv-drawer-open"),this.B=!1,D4(this.Y),this.F&&this.F.stop(),this.F=new g.tz(function(){this.W&&(this.W.focus(),this.W=null)},330,this),this.F.start())};
g.h.sl=function(){var a=this.isAvailable();g.T(this.ma(),a);g.O(this.context.o.getRootNode(),"ytp-iv-drawer-enabled",a);D4(this.Y)};
g.h.destroy=function(){var a=g.XD(this.Y).o;a&&a.ks(!1,void 0);this.Y.getRootNode().removeChild(this.D);g.As(this.ba);g.sx(this.ka);this.O&&this.O.dispose();this.F&&this.F.dispose();l6.N.destroy.call(this)};
g.h.AQ=function(a){this.Io.start();a.preventDefault();a=a||window.event;var b=0;"MozMousePixelScroll"==a.type?b=0==(a.axis==a.HORIZONTAL_AXIS)?a.detail:0:window.opera?b=a.detail:b=0==a.wheelDelta%120?"WebkitTransform"in window.document.documentElement.style?window.chrome&&0==window.navigator.platform.indexOf("Mac")?a.wheelDeltaY/-30:a.wheelDeltaY/-1.2:a.wheelDelta/-1.6:a.wheelDeltaY/-3;if(a=b)this.A.scrollTop+=a};
g.h.Wy=function(a){if(!g.wh(this.Y.getRootNode(),"ytp-cards-teaser-shown")){this.g!=a&&(this.g=a,m6(this));if(g.nu(this.ma())){var b;2==this.context.o.Va()?b=1==((0,window.isNaN)(void 0)?this.context.o.Yz():void 0):(b=(0,window.isNaN)(void 0)?this.context.o.Bk():void 0,b=1==b||0==b&&0===this.context.o.getCurrentTime());if(b&&a.Wb.teaserDurationMs){b={teaserText:a.Wb.teaserText,durationMs:a.Wb.teaserDurationMs};var c=g.XD(this.Y).o;c&&c.ks(!0,b)}}this.fa.isActive()||((!this.B||!this.Io.isActive()&&
this.Cm)&&jra(this,a),this.fa.start(910+a.Wb.teaserDurationMs))}};
g.h.IN=function(a){this.B||(this.g=a,m6(this),jra(this,a),p6(this,"YOUTUBE_DRAWER_AUTO_OPEN",!1,a))};
g.h.CE=function(){this.B&&(n6(this.context.logger,this.L,4,q6(this).o.close),this.G&&y5(this.G),this.Cl())};
g.h.OE=function(){g.O(this.D,"iv-drawer-scrolled",0<this.A.scrollTop)};
g.h.DH=function(){var a=q6(this);B6(this.context.logger,8,a.Nb,a.o.VN);a&&e6([a.F,a.D])};
g.h.CH=function(a){var b=q6(this);this.g?a?(a=this.context.logger,B6(a,9,b.Nb,b.o.tr),a.Y.Oh(4,void 0),y5(b.F)):(a=this.context.logger,B6(a,12,b.Nb,b.o.tr),a.Y.Oh(4,void 0),y5(b.D)):(a=this.context.logger,n6(a,this.L,12,b.o.tr),a.Y.Oh(4,void 0),this.aa&&y5(this.aa))};
r6.prototype.show=function(){this.isVisible=!0;this.view&&(this.view.show(),this.o.subscribe("resize",this.C,this),this.o.subscribe("onVideoAreaChange",this.A,this))};
r6.prototype.destroy=function(){if(this.view){kra(this);var a=this.view;g.Lz(a.F);a.Fq.dispose();a.H.dispose();a.o&&g.Uq(a.o);a.A&&a.A.ma()&&g.Uq(a.A.ma())}s6(this)};
r6.prototype.A=function(){v6(this.view)};
r6.prototype.C=function(){v6(this.view)};
g.h=lra.prototype;g.h.FA=function(){this.M||(this.B&&g.T(this.B,!0),this.C&&g.T(this.C,!0),this.A&&(this.A.g=!0,g.mu(this.o,w6(this)?1:0),this.A.A(this.g,u6(this))),this.H.isActive()&&this.H.stop(),this.M=!0,this.J=epa(this.F,g.PS(this.D),function(a){this.Fq.stop();this.Pg(a)}))};
g.h.Pg=function(){this.M&&(this.P?this.H.start():this.Jv(),this.A&&(this.A.g=!1,g.mu(this.o,w6(this)?1:0),this.A.A(this.g,u6(this))),this.M=!1,this.J&&(this.F.Ba(this.J),this.J=null))};
g.h.Jv=function(){this.B&&g.T(this.B,!1);this.C&&g.T(this.C,!1)};
g.h.QK=function(a){this.ca=a;this.Fq.si()};
g.h.yQ=function(){var a=this.ca,b=new g.fm(a.clientX,a.clientY),c=g.cu(this.D.getRootNode()),d=Aqa(c,this.O),c=(this.C&&g.nu(this.C)||this.B&&g.nu(this.B))&&Aqa(c,this.P);d&&d.contains(b)||c&&c.contains(b)?this.FA():this.Pg(a)};
g.h.show=function(){var a=this.g.g,a=(a&&0==a.o||"title"==this.g.style||"highlightText"==this.g.style?!1:!0)&&!this.A,b=!this.o,c="widget"==this.g.type;if(a){var d=u6(this),e=null;"highlight"==this.g.type||"label"==this.g.style?e=new $5:"popup"==this.g.style?e=new Z5:"anchored"==this.g.style?e=new L5:"speech"==this.g.style&&(e=new Q5);e&&(e.A(this.g,d),this.A=e,d=e.ma())&&(g.T(d,!1),g.N(d,"annotation-type-"+this.g.type.toLowerCase()),this.aa(d))}if(b){d=["annotation"];"highlightText"!=this.g.style||
d.push("annotation-no-mouse");d.push("annotation-type-"+this.g.type.toLowerCase());this.o=g.S("DIV",d);g.T(this.o,!1);this.g.B&&(this.G=g.S("DIV","inner-text"),"label"==this.g.style&&(g.N(this.G,"label-text"),this.G.style.backgroundColor=this.g.g.bgColor),g.br(this.G,this.g.B),this.o.appendChild(this.G));g.Ac(this.o,"annotation_id",this.g.id);this.aa(this.o);mra(this,this.o);if(c6(this.g)&&this.g.showLinkIcon()){if(e=a6(this.g))d=this.o,e=new g.ip(f5(e)),d.title=e.o+e.A;this.C=g.S("SPAN","annotation-link-icon");
g.T(this.C,!1);this.o.appendChild(this.C)}nra(this);c6(this.g)||(this.o.style.cursor="default")}c&&("subscribe"==this.g.style?g.Q("yt-uix-subscription-button",this.o)||g6(this.o,this.g.htmlBlob):this.g.htmlBlob&&g6(this.o,this.g.htmlBlob));if(a||b){a:{a=this.g.o.g;if(a.length&&(a=Qpa(a[0]))){a=a.H;break a}a=0}this.o&&(this.o.style.zIndex=a);this.A&&this.A.ma()&&(this.A.ma().style.zIndex=a)}g.T(this.o,!0);g.mu(this.o,w6(this)?1:0);v6(this);this.A&&this.A.ma()&&g.T(this.A.ma(),!0)};
g.B(D6,g.gv);D6.C="AnnotationsModule";D6.A=function(a){switch(a.type){case "branding":case "promotion":return!0}return!1};
D6.B=function(a){return"card"==a.type||"drawer"==a.type};
D6.o=function(){var a=g.S("DIV",["annotation","annotation-type-custom"]);g.T(a,!1);return a};
D6.g=function(a){switch(a){case "annotation-editor":case "live-dashboard":return!0}return!1};
g.h=D6.prototype;g.h.WP=function(a,b){if(!D6.g(g.X(this.g).o))return null;switch(a){case "loadCustomAnnotationsXml":var c=g.zt(b);c&&F6(this,c);return!0;case "removeCustomAnnotationById":return b&&this.o&&(cra(this.o,b),D4(this.g)),!0}return null};
g.h.XP=function(){return D6.g(g.X(this.g).o)?["loadCustomAnnotationsXml","removeCustomAnnotationById"]:[]};
g.h.Oq=function(){if(this.C){var a=g.AI(g.PS(this.g),!0);g.ju(this.C.element,a.width,a.height);g.Zt(this.C.element,a.left,a.top)}if(this.o){var b=C4(this.g.app.A.G),a=this.o,b=b.width;g.O(a.D,"iv-drawer-small",426>=b);g.O(a.D,"iv-drawer-big",1280<=b)}};
g.h.rL=function(a){g.G(a.state,2)&&(this.Jk()&&this.qA()&&2!=this.g.Va()&&this.ls(!1),this.ks(!1))};
g.h.load=function(){D6.N.load.call(this);this.B.show();this.G++;var a=this.g.getVideoData(),b=a.videoId,c=(0,g.z)(this.fK,this,b,this.G);g.gn()&&(c=Lra(this,c));c={format:"XML",md:c,Dc:{}};a.isPharma&&(c.Dc.pharma="1");c.method="POST";c.withCredentials=!0;var d=g.X(this.g);"gaming"==d.o&&(c.Dc.gaming="1");(b=d.G.get(b))&&Mra(c,b);a.Uh&&(b=b&&b.kh,a.Mt&&!b||g.BB(a.Uh,c));g.cT(this.g,this.C.element,5);this.Oq()};
g.h.unload=function(){rra(this.Xa,{"iv-event":1});g.aT(this.g,"annotations_module");g.pb(this.A,function(a){a.destroy()});
g.pb(this.H,function(a){a.destroy()});
this.F=null;this.o&&(this.o.destroy(),this.o=null,D4(this.g));this.A={};this.H={};this.B.la();D6.N.unload.call(this);this.C.detach()};
g.h.fK=function(a,b,c){if(!Hra(this,b,a)&&(a=g.Fc(c)&&c.responseXML?c.responseXML:null)){F6(this,a);g.N(this.g.getRootNode(),"iv-module-loaded");a=[];for(var d in this.A){b=this.A[d].annotation;if(b.o)if(c=b.o,c.g.length)if(c=c.g[0].o||c.g[0].g||c.g[0].A,!c||2>c.length)c=null;else{var e=c.length-1;c=0>=c[0].t&&0>=c[e].t?null:{start:c[0].t,end:c[e].t}}else c=null;else c=null;if(e=c)if(c=1E3*e.start,e=1E3*e.end,0==c&&(c++,e++),!(e<c)){var f={id:d,namespace:"annotations_module"};"marker"==b.type&&(f.style=
"ytp-chapter-marker",f.tooltip=b.B,f.visible=!0);b=new g.ds(c,e,f);a.push(b)}}g.UD(this.g,a)}};
g.h.by=function(a){a==this.g.getVideoData().videoId&&(this.loaded?Nra(this):this.load())};
g.h.rA=function(a){a=a.getId();var b=this.A[a];b&&!b.B&&(b=b.annotation,Qra(this,a),o6(this.Xa,b.Nb))};
g.h.sA=function(a){G6(this,a.getId())};
g.h.Hv=function(a){if(a){a.isVisible=!1;if(a.view){kra(a);var b=a.view;b.o&&g.T(b.o,!1);b.A&&b.A.ma()&&g.T(b.A.ma(),!1);b.L&&(b.F.Ba(b.L),b.L=null)}H6(this,"shown",!1,a.annotation.id);this.Jl(a.annotation,"hidden")}};
g.h.gz=function(a){a&&(a.show(),H6(this,"shown",!0,a.annotation.id),this.Jl(a.annotation,"shown"))};
g.h.rM=function(a,b,c){var d=this.A[a];if(d&&b.value!=c){b.value=c;var e=!1;Kqa(d.annotation,function(a){e|=a.value});
Rra(this,a,b,e)}};
g.h.YI=function(a){if(a&&a.id){var b=a6(a);if(b){var c=f5(b);if(c){var d=(0,g.z)(this.Jl,this,a,"click"),e=this.g.getVideoData();if("new"==A5(c,b.target)||Sra(this,b,e.videoId))d(),d=null;K5(this.Xa,a.Nb,d)}}}};
g.h.Jl=function(a,b){Jqa(a,function(c){if(c.trigger==b&&"openUrl"==c.type&&c.url){var d=this.g.getVideoData(),e;if(!(e=!Sra(this,c.url,d.videoId))){e=wra(c.url);var f=xra(c.url);if(e){if(d.videoId==e)this.g.Mc(f||0);else{var k=E6(this).o;g.X2(k.app,e,void 0,void 0,void 0,void 0);f&&E6(this).o.Ah()&&E6(this).o.Mc(f)}e=!0}else e=!1;e=!e}e&&(d=B5(c.url,a.id,d.videoId,g.X(this.g)))&&(this.g.pd(),e=A5(d,c.url.target),c=d,d="current"==e?"_top":void 0,e=g.Hk(c),f=null,"ei"in e&&(f={ei:e.ei},c=g.Mf(c,"ei")),
g.yQ(c,d,f))}},this)};
g.h.nK=function(){H6(this,"playerControlShow",!1)};
g.h.WL=function(){H6(this,"playerControlShow",!0)};
g.h.YP=function(a){H6(this,"rollOver",!0,a.id)};
g.h.Pg=function(a){H6(this,"rollOver",!1,a.id)};
g.h.BJ=function(a){a&&a.id&&(this.A[a.id].B=!0,G6(this,a.id),A6(this.Xa,a.Nb),this.Jl(a,"close"),H6(this,"closed",!0,a.id))};
g.h.Jk=function(){return!!this.o&&this.o.isAvailable()};
g.h.qA=function(){this.Jk();return!!this.o&&this.o.B};
g.h.ls=function(a,b,c){this.Jk();this.o&&(b=!!b,a?g.p(c)?p6(this.o,c,b):p6(this.o,"YOUTUBE_DRAWER_AUTO_OPEN",b):this.o.Cl())};
g.h.ks=function(a,b){this.g.U(a?"cardsteasershow":"cardsteaserhide",b)};
g.h.R=function(){g.X(this.g).G.unsubscribe("vast_info_card_add",this.by,this);this.g.removeEventListener("crn_annotations_module",this.rA,this);this.g.removeEventListener("crx_annotations_module",this.sA,this);g.yh(this.g.getRootNode(),"ytp-iv-drawer-open");for(var a=this.J,b=0,c=a.length;b<c;b++)g.jn(a[b]);this.J.length=0;D6.N.R.call(this)};
g.B(I6,g.gv);g.h=I6.prototype;g.h.load=function(){I6.N.load.call(this);this.g.addEventListener("resize",this.os,this);var a=i6(g.X(this.g).o)?function(){}:(0,g.z)(this.YE,this);
$ra(this,a)};
g.h.unload=function(){J6(this,null);this.g.removeEventListener("resize",this.os,this);this.B&&(this.B.abort(),this.B=null);I6.N.unload.call(this)};
g.h.ZP=function(a,b){if(!i6(g.X(this.g).o))return null;var c;switch(a){case "loadCustomEndscreenRenderer":return c=Dra(b,"new"),J6(this,c),!0;case "loadCustomEndscreenJson":return(c=Era(b))&&J6(this,c),!0;case "unloadCustomEndscreenJson":return J6(this,null),!0}return null};
g.h.YE=function(){var a=this.g.getVideoData(),b=a.videoId;this.B&&this.B.abort();b={method:"POST",md:(0,g.z)(this.bK,this,b),Dc:{v:b},withCredentials:!0};this.P&&(b.Dc.r=1);"gaming"==g.X(this.g).o&&(b.Dc.gaming="1");this.M&&(b.Dc.ptype="embedded");var c=this.g.getVideoData().Ju;c&&(b.Mb={ad_tracking:c});if(a=g.JU(a))this.B=g.BB(a,b)};
g.h.bK=function(a,b){var c=this.B=null;if(200==b.status){var d=b.responseText;")]}"==d.substring(0,3)&&(d=d.substring(3),c=JSON.parse(d),c=this.P?Dra(c,this.M?"new":"current"):Era(c))}J6(this,c)};
g.h.os=function(){if(this.A&&this.A.elements){var a=this.g.hA(),b=a.width,c=a.height;if(0!=b&&0!=c){var d=b/c,e;e=C4(this.g.app.A.G).width;for(var f=null,k=-1,l=0;l<g.w4.length;l++){var m=Math.abs(e-g.w4[l]);if(-1==k||f>=m)k=l,f=m}e=g.x4[k];for(f=0;f<this.A.elements.length;++f){var l=this.A.elements[f].id,k=this.o[l],m=this.D[l],n=m.width*d/m.aspectRatio,l=Math.round(n*c),q=a.left+Math.round(m.left*b),t=a.top+Math.round(m.top*c);g.ju(k.element,Math.round(m.width*b),l);g.Zt(k.element,q,t);g.zh(k.element,
Xsa);q=m.left+m.width/2;m=m.top+n/2;g.N(k.element,.5>=q&&.5>=m?"ytp-ce-top-left-quad":.5<q&&.5>=m?"ytp-ce-top-right-quad":.5>=q&&.5<m?"ytp-ce-bottom-left-quad":"ytp-ce-bottom-right-quad");g.zh(k.element,g.x4);g.N(k.element,e);(k=g.Dq("div","ytp-ce-expanding-overlay-body",k.element)[0])&&g.Tt(k,"height",l+"px")}}}};
g.h.tA=function(a){if(this.A)if("ytp-ce-in-endscreen"==a.getId())this.F=!1,this.A.skip&&1==this.g.Bk()?(a=this.g,(a=g.OS(a.app,a.playerType||1))&&g.RV(a,!0),this.g.Mc(window.Infinity),this.F=!0):(N6(this,this.A.impressionUrls),e6([this.A.visualElement]));else if(!this.F){a=a.getId().substring(15);var b=this.o[a],c=this.D[a];g.N(b.element,"ytp-ce-element-show");b.element.removeAttribute("aria-hidden");b=this.g.getRootNode();g.N(b,"ytp-ce-shown");N6(this,c.impressionUrls);e6([c.visualElement]);g.X(this.g).Db&&
this.g.va("endscreenelementshown",a)}};
g.h.uA=function(a){if("ytp-ce-in-endscreen"!=a.getId()&&!this.F){a=a.getId().substring(15);var b=this.o[a];g.yh(b.element,"ytp-ce-element-show");b.element.setAttribute("aria-hidden",!0);b=this.g.getRootNode();g.yh(b,"ytp-ce-shown");g.X(this.g).Db&&this.g.va("endscreenelementhidden",a)}};
g.h.NM=function(a){a.target===window&&(new g.tz(function(){for(var a in this.o)g.zh(this.o[a].element,["ytp-ce-force-expand","ytp-ce-element-hover","ytp-ce-element-shadow-show"])},0,this)).start()};
g.h.zx=function(a,b){if(a.targetUrl&&(!b||"keypress"!=b.type||13==b.keyCode)){for(var c=b.target;c&&!g.wh(c,"ytp-ce-element");){g.wh(c,"subscribe-label")&&O6(this,a);if(g.wh(c,"ytp-ce-channel-subscribe"))return;c=g.Zq(c)}if(!c||g.wh(c,"ytp-ce-element-hover")){b.preventDefault();b.stopPropagation();if(c=this.o[a.id])this.Lq(c,a),c.element.blur();b.ctrlKey||b.metaKey||"new"==a.sk?(O6(this,a),this.My(),this.g.pd(),g.yQ(a.targetUrl,void 0,a.nd)):(c=(0,g.z)(this.My,this,g.za(g.xQ,a.targetUrl,a.nd)),O6(this,
a,c))}}};
g.h.ms=function(a,b){g.wh(a.element,"ytp-ce-element-hover")||(g.N(a.element,"ytp-ce-element-hover"),N6(this,b.Kv),M6(this,b.id,!0),Xra(this,a,!0))};
g.h.Lq=function(a,b){g.yh(a.element,"ytp-ce-element-hover");g.yh(a.element,"ytp-ce-force-expand");M6(this,b.id,!1);Xra(this,a,!1)};
g.h.My=function(a){this.g.Oh(17,a)};
g.h.R=function(){this.g.removeEventListener("crn_creatorendscreen",this.tA,this);this.g.removeEventListener("crx_creatorendscreen",this.uA,this);g.sx(this.W);I6.N.R.call(this)};
g.B(V6,g.ff);g.h=V6.prototype;g.h.getHours=function(){return this.date.getHours()};
g.h.getMinutes=function(){return this.date.getMinutes()};
g.h.getSeconds=function(){return this.date.getSeconds()};
g.h.getUTCHours=function(){return this.date.getUTCHours()};
g.h.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.h.gm=function(a,b){var c=g.ff.prototype.gm.call(this,a);return a?c+" "+g.$b(this.getHours(),2)+":"+g.$b(this.getMinutes(),2)+":"+g.$b(this.getSeconds(),2)+(b?g.gf(this):""):c+"T"+g.$b(this.getHours(),2)+g.$b(this.getMinutes(),2)+g.$b(this.getSeconds(),2)+(b?g.gf(this):"")};
g.h.toString=function(){return this.gm()};
g.h.clone=function(){var a=new V6(this.date);a.Ml=this.Ml;a.Ol=this.Ol;return a};var Y6={},Ysa="ontouchstart"in window.document;g.rx(window.document,"blur",Z6,!0);g.rx(window.document,"change",Z6,!0);g.rx(window.document,"click",Z6);g.rx(window.document,"focus",Z6,!0);g.rx(window.document,"mouseover",Z6);g.rx(window.document,"mouseout",Z6);g.rx(window.document,"mousedown",Z6);g.rx(window.document,"keydown",Z6);g.rx(window.document,"keyup",Z6);g.rx(window.document,"keypress",Z6);g.rx(window.document,"cut",Z6);g.rx(window.document,"paste",Z6);
Ysa&&(g.rx(window.document,"touchstart",Z6),g.rx(window.document,"touchend",Z6),g.rx(window.document,"touchcancel",Z6));g.h=$6.prototype;g.h.Kd=function(a){return g.ir(a,Z(this))};
g.h.unregister=function(){g.As(this.H);this.H.length=0;g.Ls(this.G);this.G.length=0};
g.h.init=g.x;g.h.dispose=g.x;g.h.addBehavior=function(a,b,c){c=Z(this,c);var d=(0,g.z)(b,this);a in Y6||(Y6[a]=new g.bp);Y6[a].subscribe(c,d);this.F[b]=d};
g.h.removeBehavior=function(a,b,c){if(a in Y6){var d=Y6[a];d.unsubscribe(Z(this,c),this.F[b]);0>=d.zc()&&(d.dispose(),delete Y6[a])}delete this.F[b]};
g.h.Zh=function(a,b,c){var d=this.sa(a,b);if(d&&(d=g.u(d))){var e=g.Ne(arguments,2);g.Oe(e,0,0,a);d.apply(null,e)}};
g.h.sa=function(a,b){return g.zc(a,b)};
g.h.setData=function(a,b,c){g.Ac(a,b,c)};g.B(c7,$6);g.h=c7.prototype;g.h.Kd=function(a){var b=$6.prototype.Kd.call(this,a);return b?b:a};
g.h.register=function(){a7(this,"yt-uix-kbd-nav-move-out-done",this.Pf)};
g.h.dispose=function(){c7.N.dispose.call(this);d7(this)};
g.h.sa=function(a,b){var c=c7.N.sa.call(this,a,b);return c?c:(c=c7.N.sa.call(this,a,"card-config"))&&(c=g.u(c))&&c[b]?c[b]:null};
g.h.show=function(a){var b=this.Kd(a);if(b){g.N(b,Z(this,"active"));var c=dsa(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;esa(this,a,c);var d=Z(this,"card-visible"),e=this.sa(a,"card-delegate-show")&&this.sa(b,"card-action");this.Zh(b,"card-action",a);this.A=a;g.bA(c);g.zk((0,g.z)(function(){e||(g.aA(c),g.Cs("yt-uix-card-show",b,a,c));fsa(c);g.N(c,d);g.Cs("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
g.h.Pf=function(a){if(a=this.Kd(a)){var b=g.Cq(Z(this,"card")+S6(a));b&&(g.yh(a,Z(this,"active")),g.yh(b,Z(this,"card-visible")),g.bA(b),this.A=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(g.Uq(b.cardMask),b.cardMask=null))}};
g.h.hO=function(a,b){var c=this.Kd(a);if(c){if(b){var d=this.oc(c);if(!d)return;b instanceof g.In?d.innerHTML=g.Jn(b):g.br(d,b)}g.wh(c,Z(this,"active"))&&(c=dsa(this,a,c),esa(this,a,c),g.aA(c),fsa(c))}};
g.h.isActive=function(a){return(a=this.Kd(a))?g.wh(a,Z(this,"active")):!1};
g.h.oc=function(a){var b=a.cardContentNode;if(!b){var c=Z(this,"content"),d=Z(this,"card-content");(b=(b=this.sa(a,"card-id"))?g.Cq(b):g.Q(c,a))||(b=window.document.createElement("div"));var e=b;g.yh(e,c);g.N(e,d);a.cardContentNode=b}return b};var f7;g.B(e7,$6);g.pa(e7);g.h=e7.prototype;g.h.register=function(){this.addBehavior("keydown",this.yv);a7(this,"yt-uix-kbd-nav-move-in",this.Vw);a7(this,"yt-uix-kbd-nav-move-in-to",this.CI);a7(this,"yt-uix-kbd-move-next",this.Ww);a7(this,"yt-uix-kbd-nav-move-to",this.Pl)};
g.h.unregister=function(){this.removeBehavior("keydown",this.yv);g.sx(f7)};
g.h.yv=function(a,b,c){var d=c.keyCode;if(a=g.ir(a,Z(this)))switch(d){case 13:case 32:this.Vw(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=O5(a,"kbdNavMoveOut");!c;){c=g.ir(a.parentElement,Z(this));if(!c)break a;c=O5(c,"kbdNavMoveOut")}c=g.Cq(c);this.Pl(c);g.Cs("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&g.wh(a,Z(this,"list")))switch(d){case 40:this.Ww(b,a);break;case 38:d=window.document.activeElement==a,a=isa(a),b=a.indexOf(b),0>b&&!d||(b=
d?a.length-1:(a.length+b-1)%a.length,a[b].focus(),hsa(this,a[b]))}c.preventDefault()}};
g.h.Vw=function(a){var b=O5(a,"kbdNavMoveIn"),b=g.Cq(b);gsa(this,a,b);this.Pl(b)};
g.h.CI=function(a){gsa(this,g.jr(),a);this.Pl(a)};
g.h.Pl=function(a){if(a)if(g.fr(a))a.focus();else{var b=U6(a,function(a){return g.wa(a)&&1==a.nodeType?g.fr(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
g.h.Ww=function(a,b){var c=window.document.activeElement==b,d=isa(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),hsa(this,d[c]))};g.B(g7,$6);g.pa(g7);g.h=g7.prototype;g.h.register=function(){this.addBehavior("mouseover",this.Jm);this.addBehavior("mouseout",this.Dh);this.addBehavior("focus",this.Ru);this.addBehavior("blur",this.Ut);this.addBehavior("click",this.Dh);this.addBehavior("touchstart",this.vz);this.addBehavior("touchend",this.un);this.addBehavior("touchcancel",this.un)};
g.h.unregister=function(){this.removeBehavior("mouseover",this.Jm);this.removeBehavior("mouseout",this.Dh);this.removeBehavior("focus",this.Ru);this.removeBehavior("blur",this.Ut);this.removeBehavior("click",this.Dh);this.removeBehavior("touchstart",this.vz);this.removeBehavior("touchend",this.un);this.removeBehavior("touchcancel",this.un);this.dispose();g7.N.unregister.call(this)};
g.h.dispose=function(){for(var a in this.o)this.Dh(this.o[a]);this.o={}};
g.h.Jm=function(a){if(!(this.g&&1E3>(0,g.C)()-this.g)){var b=(0,window.parseInt)(this.sa(a,"tooltip-hide-timer"),10);b&&(W6(a,"tooltip-hide-timer"),g.xk(b));var b=(0,g.z)(function(){nsa(this,a);W6(a,"tooltip-show-timer")},this),c=(0,window.parseInt)(this.sa(a,"tooltip-show-delay"),10)||0,b=g.zk(b,c);
this.setData(a,"tooltip-show-timer",b.toString());a.title&&(this.setData(a,"tooltip-text",ksa(this,a)),a.title="");b=g.ya(a).toString();this.o[b]=a}};
g.h.Dh=function(a){var b=(0,window.parseInt)(this.sa(a,"tooltip-show-timer"),10);b&&(g.xk(b),W6(a,"tooltip-show-timer"));b=(0,g.z)(function(){if(a){var b=g.Cq(h7(this,a));b&&(osa(b),g.Uq(b),W6(a,"content-id"));b=g.Cq(h7(this,a,"arialabel"));g.Uq(b)}W6(a,"tooltip-hide-timer")},this);
b=g.zk(b,50);this.setData(a,"tooltip-hide-timer",b.toString());if(b=this.sa(a,"tooltip-text"))a.title=b;b=g.ya(a).toString();delete this.o[b]};
g.h.Ru=function(a){this.g=0;this.Jm(a)};
g.h.Ut=function(a){this.g=0;this.Dh(a)};
g.h.vz=function(a,b,c){c.changedTouches&&(this.g=0,(a=X6(b,Z(this),c.changedTouches[0].target))&&this.Jm(a))};
g.h.un=function(a,b,c){c.changedTouches&&(this.g=(0,g.C)(),(a=X6(b,Z(this),c.changedTouches[0].target))&&this.Dh(a))};var J7=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};g.oa("yt.uix.widgets_",J7,void 0);g.B(i7,c7);g.pa(i7);g.h=i7.prototype;g.h.register=function(){this.addBehavior("mouseenter",this.Rw,"target");this.addBehavior("mouseleave",this.Tw,"target");this.addBehavior("mouseenter",this.Sw,"card");this.addBehavior("mouseleave",this.Uw,"card")};
g.h.unregister=function(){this.removeBehavior("mouseenter",this.Rw,"target");this.removeBehavior("mouseleave",this.Tw,"target");this.removeBehavior("mouseenter",this.Sw,"card");this.removeBehavior("mouseleave",this.Uw,"card")};
g.h.Rw=function(a){if(K7!=a){K7&&(this.Pf(K7),K7=null);var b=(0,g.z)(this.show,this,a),c=(0,window.parseInt)(this.sa(a,"delay-show"),10),b=g.zk(b,-1<c?c:200);this.setData(a,"card-timer",b.toString());K7=a;a.alt&&(this.setData(a,"card-alt",a.alt),a.alt="");a.title&&(this.setData(a,"card-title",a.title),a.title="")}};
g.h.Tw=function(a){var b=(0,window.parseInt)(this.sa(a,"card-timer"),10);g.xk(b);this.Kd(a).isCardHidable=!0;b=(0,window.parseInt)(this.sa(a,"delay-hide"),10);b=-1<b?b:200;g.zk((0,g.z)(this.rG,this,a),b);if(b=this.sa(a,"card-alt"))a.alt=b;if(b=this.sa(a,"card-title"))a.title=b};
g.h.rG=function(a){this.Kd(a).isCardHidable&&(this.Pf(a),K7=null)};
g.h.Sw=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
g.h.Uw=function(a){a&&this.Pf(a.cardTargetNode)};
var K7=null;g.B(j7,g.sd);g.B(k7,g.sd);g.B(psa,g.sd);g.B(l7,g.sd);
var Zsa=new g.td("subscription-subscribe",k7),$sa=new g.td("subscription-subscribe-loading",j7),ata=new g.td("subscription-subscribe-loaded",j7),bta=new g.td("subscription-subscribe-success",psa),cta=new g.td("subscription-unsubscribe",l7),dta=new g.td("subscription-unsubscirbe-loading",j7),eta=new g.td("subscription-unsubscribe-loaded",j7),fta=new g.td("subscription-unsubscribe-success",j7),gta=new g.td("subscription-enable-ypc",j7),hta=new g.td("subscription-disable-ypc",j7);g.B(m7,$6);g.pa(m7);g.h=m7.prototype;g.h.register=function(){this.addBehavior("click",this.HB);this.addBehavior("keydown",this.mw);this.addBehavior("keypress",this.ow);a7(this,"page-scroll",this.IF)};
g.h.unregister=function(){this.removeBehavior("click",this.HB);this.removeBehavior("keydown",this.mw);this.removeBehavior("keypress",this.ow);s7(this);this.o={};m7.N.unregister.call(this)};
g.h.HB=function(a){a&&!a.disabled&&(vsa(this,a),this.click(a))};
g.h.mw=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey)&&(b=r7(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=U6(b,d);if(e){e=e.tagName.toLowerCase();var f;"ul"==e?f=this.OH:"table"==e&&(f=this.NH);f&&qsa(this,a,b,c,(0,g.z)(f,this))}}};
g.h.IF=function(){var a=this.o;if(0!=g.ub(a))for(var b in a){var c=a[b],d=g.ir(c.activeButtonNode||c.parentNode,Z(this));if(void 0==d||void 0==c)break;q7(this,d,c,!0)}};
g.h.ow=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||(a=r7(this,a),P6(a)&&c.preventDefault())};
g.h.NH=function(a,b,c){var d=n7(this,b);if(d){var e=bsa("table",b);b=g.Dq("td",null,e);d=ssa(d,b,g.Dq("td",null,bsa("tr",e)).length,c);-1!=d&&(rsa(this,a,b[d]),c.preventDefault())}};
g.h.OH=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=n7(this,b);d&&(b=(0,g.Ng)(g.Dq("li",null,b),P6),rsa(this,a,b[ssa(d,b,1,c)]),c.preventDefault())}};
g.h.JB=function(a){if(a){var b=r7(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.sa(a,"button-has-sibling-menu")?c=a.parentNode:c=tsa(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=p7(this,a);d&&c.appendChild(d);(c=!!this.sa(a,"button-menu-fixed"))&&(this.o[S6(a).toString()]=b);q7(this,a,b,c);g.Ds("yt-uix-button-menu-before-show",a,b);g.aA(b);
d&&g.aA(d);this.Zh(a,"button-menu-action",!0);g.N(a,Z(this,"active"));b=(0,g.z)(this.IB,this,a,!1);d=(0,g.z)(this.IB,this,a,!0);c=(0,g.z)(this.iO,this,a,void 0);this.g&&r7(this,this.g)==r7(this,a)||s7(this);g.Cs("yt-uix-button-menu-show",a);g.sx(this.A);this.A=[g.rx(window.document,"click",d),g.rx(window.document,"contextmenu",b),g.rx(window,"resize",c)];this.g=a}}};
g.h.iO=function(a,b){var c=r7(this,a);if(c){b&&(b instanceof g.In?c.innerHTML=g.Jn(b):g.br(c,b));var d=!!this.sa(a,"button-menu-fixed");q7(this,a,c,d)}};
g.h.Xc=function(a){return g.Q(Z(this,"content"),a)};
g.h.IB=function(a,b,c){c=g.ux(c);var d=g.ir(c,Z(this));if(d){var d=r7(this,d),e=r7(this,a);if(d==e)return}var d=g.ir(c,Z(this,"menu")),e=d==r7(this,a),f=g.wh(c,Z(this,"menu-item")),k=g.wh(c,Z(this,"menu-close"));if(!d||e&&(f||k))o7(this,a),d&&b&&this.sa(a,"button-menu-indicate-selected")&&((a=g.Q(Z(this,"content"),a))&&g.br(a,T6(c)),usa(this,d,c))};
g.h.isToggled=function(a){return g.wh(a,Z(this,"toggled"))};
g.h.click=function(a){if(r7(this,a)){var b=r7(this,a);if(b){var c=g.ir(b.activeButtonNode||b.parentNode,Z(this));c&&c!=a?(o7(this,c),g.zk((0,g.z)(this.JB,this,a),1)):P6(b)?o7(this,a):this.JB(a)}a.focus()}this.Zh(a,"button-action")};g.B(t7,$6);g.pa(t7);g.h=t7.prototype;g.h.register=function(){this.addBehavior("click",this.KB);this.addBehavior("mouseenter",this.BF);a7(this,"page-scroll",this.QF);a7(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.Kd(a);x7(this,a)});
this.B=new g.bp};
g.h.unregister=function(){this.removeBehavior("click",this.KB);this.o=this.g=null;g.sx(g.$e(g.wb(this.A)));this.A={};g.pb(this.D,function(a){g.Uq(a)},this);
this.D={};g.Fd(this.B);this.B=null;t7.N.unregister.call(this)};
g.h.KB=function(a,b,c){a&&(b=A7(this,a),!b.disabled&&R6(c.target,b)&&ysa(this,a))};
g.h.BF=function(a,b,c){a&&g.wh(a,Z(this,"hover"))&&R6(c.target,A7(this,a))&&ysa(this,a,!0)};
g.h.QF=function(){this.g&&this.o&&wsa(this,this.o,this.g)};
g.h.LB=function(a){if(a){var b=z7(this,a);if(b){g.Ds("yt-uix-menu-before-show",a,b);this.g?R6(a,this.g)||x7(this,this.o):(this.o=a,this.g=b,g.wh(a,Z(this,"sibling-content"))||(g.Uq(b),window.document.body.appendChild(b)),b.style.minWidth=A7(this,a).offsetWidth-2+"px");var c=v7(this,a);c&&g.Sq(c,b);g.yh(b,Z(this,"content-hidden"));wsa(this,a,b);g.xh(A7(this,a),[Z(this,"trigger-selected"),"yt-uix-button-toggled"]);g.Cs("yt-uix-menu-show",a);Bsa(b);zsa(this,a);g.Cs("yt-uix-kbd-nav-move-in-to",b);var d=
(0,g.z)(this.HR,this,a),e=(0,g.z)(this.LH,this,a),c=g.ya(a).toString();this.A[c]=[g.rx(b,"click",e),g.rx(window.document,"click",d)];g.wh(a,Z(this,"indicate-selected"))&&(d=(0,g.z)(this.MH,this,a),this.A[c].push(g.rx(b,"click",d)));g.wh(a,Z(this,"hover"))&&(a=(0,g.z)(this.GR,this,a),this.A[c].push(g.rx(window.document,"mousemove",a)))}}};
g.h.GR=function(a,b){var c=g.ux(b);c&&(R6(c,A7(this,a))||Csa(this,c)||y7(this,a))};
g.h.HR=function(a,b){var c=g.ux(b);if(c){if(Csa(this,c)){var d=g.ir(c,Z(this,"content")),e=g.hr(c,"LI");e&&d&&g.$q(d,e)&&g.Ds("yt-uix-menu-item-clicked",c);c=g.ir(c,Z(this,"close-on-select"));if(!c)return;d=u7(c)}x7(this,d||a)}};
g.h.LH=function(a,b){var c=g.ux(b);c&&Asa(this,a,c)};
g.h.MH=function(a,b){var c=g.ux(b);if(c){var d=A7(this,a);if(d&&(c=g.hr(c,"LI")))if(c=T6(c).trim(),d.hasChildNodes()){var e=m7.getInstance();(d=g.Q(Z(e,"content"),d))&&g.br(d,c)}else g.br(d,c)}};g.B(B7,c7);g.pa(B7);g.h=B7.prototype;g.h.register=function(){B7.N.register.call(this);this.addBehavior("click",this.lu,"target");this.addBehavior("click",this.ku,"close")};
g.h.unregister=function(){B7.N.unregister.call(this);this.removeBehavior("click",this.lu,"target");this.removeBehavior("click",this.ku,"close");for(var a in this.g)g.sx(this.g[a]);this.g={};for(a in this.o)g.sx(this.o[a]);this.o={}};
g.h.lu=function(a,b,c){c.preventDefault();b=g.hr(c.target,"button");b&&b.disabled||(a=(b=this.sa(a,"card-target"))?g.y(b)?window.document.getElementById(b):b:a,b=this.Kd(a),this.sa(b,"disabled")||(g.wh(b,Z(this,"active"))?(this.Pf(a),g.yh(b,Z(this,"active"))):(this.show(a),g.N(b,Z(this,"active")))))};
g.h.show=function(a){B7.N.show.call(this,a);var b=this.Kd(a),c=g.ya(a).toString();if(!g.zc(b,"click-outside-persists")){if(this.g[c])return;var b=g.rx(window.document,"click",(0,g.z)(this.mu,this,a)),d=g.rx(window,"blur",(0,g.z)(this.mu,this,a));this.g[c]=[b,d]}a=g.rx(window,"resize",(0,g.z)(this.hO,this,a,void 0));this.o[c]=a};
g.h.Pf=function(a){B7.N.Pf.call(this,a);a=g.ya(a).toString();var b=this.g[a];b&&(g.sx(b),this.g[a]=null);if(b=this.o[a])g.sx(b),delete this.o[a]};
g.h.mu=function(a,b){var c="yt-uix"+(this.C?"-"+this.C:"")+"-card",d=null;b.target&&(d=g.ir(b.target,c)||g.ir(u7(b.target),c));(d=d||g.ir(window.document.activeElement,c)||g.ir(u7(window.document.activeElement),c))||this.Pf(a)};
g.h.ku=function(a){(a=g.ir(a,Z(this,"card")))&&(a=a.cardTargetNode)&&this.Pf(a)};var Fsa={LOADING:"loading",nC:"content",gZ:"working"};g.h=C7.prototype;
g.h.show=function(){if(!this.isDisposed()){this.F=window.document.activeElement;if(!this.M){this.o||(this.o=g.Cq("yt-dialog-bg"),this.o||(this.o=g.qd("div"),this.o.id="yt-dialog-bg",this.o.className="yt-dialog-bg",window.document.body.appendChild(this.o)));var a;var b=window,c=b.document;a=0;if(c){a=c.body;var d=c.documentElement;if(d&&a)if(b=g.Iq(b).height,g.Hq(c)&&d.scrollHeight)a=d.scrollHeight!=b?d.scrollHeight:d.offsetHeight;else{var c=d.scrollHeight,e=d.offsetHeight;d.clientHeight!=e&&(c=a.scrollHeight,
e=a.offsetHeight);a=c>b?c>e?c:e:c<e?c:e}else a=0}this.o.style.height=a+"px";g.aA(this.o)}this.Iv();a=Hsa(this);Isa(a);this.C=g.rx(window.document,"keydown",(0,g.z)(this.tH,this));a=this.g;d=g.zs("player-added",this.Iv,this);g.Ac(a,"player-ready-pubsub-key",d);this.P&&(this.D=g.rx(window.document,"click",(0,g.z)(this.WM,this)));g.aA(this.g);this.A.setAttribute("tabindex","0");Ksa(this);this.H||g.N(window.document.body,"yt-dialog-active");s7(m7.getInstance());d7(B7.getInstance());d7(i7.getInstance());
g.Cs("yt-ui-dialog-show-complete",this)}};
g.h.Iv=function(){if(!this.W){var a=this.g;g.O(window.document.body,"hide-players",!0);a&&g.O(a,"preserve-players",!0)}};
g.h.xJ=function(a){a=a.currentTarget;a.disabled||(a=g.zc(a,"action")||"",this.dismiss(a))};
g.h.dismiss=function(a){if(!this.isDisposed()){this.B.U("pre-all");this.B.U("pre-"+a);g.bA(this.g);d7(B7.getInstance());d7(i7.getInstance());this.A.setAttribute("tabindex","-1");Gsa()||(g.bA(this.o),this.H||g.yh(window.document.body,"yt-dialog-active"),asa(),Jsa());this.C&&(g.sx(this.C),this.C=null);this.D&&(g.sx(this.D),this.D=null);var b=this.g;if(b){var c=g.zc(b,"player-ready-pubsub-key");c&&(g.As(c),W6(b,"player-ready-pubsub-key"))}this.B.U("post-all");g.Cs("yt-ui-dialog-hide-complete",this);
"cancel"==a&&g.Cs("yt-ui-dialog-cancelled",this);this.B&&this.B.U("post-"+a);this.F&&this.F.focus()}};
g.h.setTitle=function(a){g.br(g.Q("yt-dialog-title",this.g),a)};
g.h.tH=function(a){g.zk((0,g.z)(function(){this.O||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&g.wh(window.document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
g.h.WM=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
g.h.isDisposed=function(){return this.L};
g.h.dispose=function(){P6(this.g)&&this.dismiss("dispose");g.sx(this.G);this.G.length=0;g.zk((0,g.z)(function(){this.F=null},this),0);
this.J=this.A=null;this.B.dispose();this.B=null;this.L=!0};
g.h.bF=function(a){a.stopPropagation();Ksa(this)};
g.oa("yt.ui.Dialog",C7,void 0);g.B(D7,$6);g.pa(D7);g.h=D7.prototype;g.h.register=function(){this.addBehavior("click",this.nr,"target");this.addBehavior("click",this.GB,"close");Msa(this)};
g.h.unregister=function(){D7.N.unregister.call(this);this.removeBehavior("click",this.nr,"target");this.removeBehavior("click",this.GB,"close");this.B&&(g.As(this.B),this.B=null);this.o&&(g.sx(this.o),this.o=null)};
g.h.nr=function(a){if(!this.g||!P6(this.g.g)){var b=this.Kd(a);a=Osa(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.sa(b,"disable-shortcuts")||!1,d=!!this.sa(b,"disable-outside-click-dismiss")||!1;this.g=new C7(a,c);this.A=b;var e=g.Q("yt-dialog-fg",a);if(e){var f=this.sa(b,"overlay-class")||"",k=this.sa(b,"overlay-style")||"default",l=this.sa(b,"overlay-shape")||"default",f=f?f.split(" "):[];f.push(Z(this,k));f.push(Z(this,l));g.xh(e,f)}this.g.show();g.Cs("yt-uix-kbd-nav-move-to",e||
a);Msa(this);c||d||(c=(0,g.z)(function(a){g.wh(a.target,"yt-dialog-base")&&Nsa(this)},this),this.o=g.rx(g.Q("yt-dialog-base",a),"click",c));
this.Zh(b,"overlay-shown");g.Cs("yt-uix-overlay-shown",b)}}};
g.h.oc=function(a){return g.Q("yt-dialog-content",a.overlayContentNode||a)};
g.h.GB=function(a){a&&a.disabled||g.Cs("yt-uix-overlay-hide")};
g.h.show=function(a){this.nr(a)};var F7={},E7=[];g.B(G7,$6);g.pa(G7);G7.prototype.register=function(){this.addBehavior("click",this.Fs);b7(this,$sa,this.Ex);b7(this,ata,this.MB);b7(this,bta,this.eM);b7(this,dta,this.Ex);b7(this,eta,this.MB);b7(this,fta,this.sM);b7(this,gta,this.YJ);b7(this,hta,this.UJ)};
G7.prototype.unregister=function(){this.removeBehavior("click",this.Fs);G7.N.unregister.call(this)};
var I7={Is:"hover-enabled",cC:"yt-uix-button-subscribe",dC:"yt-uix-button-subscribed",SS:"ypc-enabled",lC:"yt-uix-button-subscription-container",mC:"yt-subscription-button-disabled-mask-container"},H7={hT:"channel-external-id",oC:"subscriber-count-show-when-subscribed",pC:"subscriber-count-tooltip",qC:"subscriber-count-title",RU:"href",$U:"insecure",Ts:"is-subscribed",LW:"parent-url",GX:"clicktracking",ID:"show-unsub-confirm-dialog",JX:"show-unsub-confirm-time-frame",PD:"style-type",vt:"subscribed-timestamp",
wt:"subscription-id",gY:"target",bE:"ypc-enabled"};g.h=G7.prototype;
g.h.Fs=function(a){var b=this.sa(a,"href"),c=this.sa(a,"insecure"),d=csa(),c=c&&!0;if(b)a=this.sa(a,"target")||"_self",window.open(b,a);else if(!c)if(d){var b=this.sa(a,"channel-external-id"),d=this.sa(a,"clicktracking"),c=Ssa(this,a),e=this.sa(a,"parent-url");if(this.sa(a,"is-subscribed")){var f=this.sa(a,"subscription-id"),k=new l7(b,f,c,a,d,e);Wsa(this,a)?Rsa(a,b).then(function(){g.Fs(cta,k)}):g.Fs(cta,k)}else g.Fs(Zsa,new k7(b,c,d,e))}else Vsa(this,a)};
g.h.Ex=function(a){this.Vh(a.g,this.Xy,!0)};
g.h.MB=function(a){this.Vh(a.g,this.Xy,!1)};
g.h.eM=function(a){this.Vh(a.g,this.az,!0,a.o)};
g.h.sM=function(a){this.Vh(a.g,this.az,!1)};
g.h.YJ=function(a){this.Vh(a.g,this.SE)};
g.h.UJ=function(a){this.Vh(a.g,this.ME)};
g.h.az=function(a,b,c){b?(this.setData(a,H7.Ts,"true"),c&&this.setData(a,H7.wt,c),this.sa(a,H7.ID)&&(b=new V6,this.setData(a,H7.vt,(b.getTime()/1E3).toString()))):(W6(a,H7.Ts),W6(a,H7.vt),W6(a,H7.wt));Tsa(this,a)};
g.h.Xy=function(a,b){var c=g.ir(a,I7.lC);g.O(c,I7.mC,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
g.h.SE=function(a){var b=!!this.sa(a,"ypc-item-type"),c=!!this.sa(a,"ypc-item-id");!this.sa(a,"ypc-enabled")&&b&&c&&(g.N(a,"ypc-enabled"),this.setData(a,H7.bE,"true"))};
g.h.ME=function(a){this.sa(a,"ypc-enabled")&&(g.yh(a,"ypc-enabled"),W6(a,"ypc-enabled"))};
g.h.pE=function(a,b,c){var d=g.Ne(arguments,2);(0,g.K)(a,function(a){b.apply(this,g.Ke(a,d))},this)};
g.h.Vh=function(a,b,c){var d=Usa(this,a);this.pE.apply(this,g.Ke([d],g.Ne(arguments,1)))};window._exportCheck==g.Ca&&(g.oa("ytmod.player.annotations_module",D6,void 0),g.oa("ytmod.player.creatorendscreen",I6,void 0));var L7=G7.getInstance(),M7=Z(L7);M7 in J7||(L7.register(),a7(L7,"yt-uix-init-"+M7,L7.init),a7(L7,"yt-uix-dispose-"+M7,L7.dispose),J7[M7]=L7);})(_yt_player);
