(function(g){var window=this;var hua=function(a,b,c,d){var e=b.Tb();g.O(a.element,"ytp-suggestion-set",!!e.videoId);var f=b.getPlaylistId();d=b.sc(c,d?d:"mqdefault.jpg");var k=b instanceof g.nU?g.wg(b.lengthSeconds):null,l=!!f,f=l&&"RD"==g.Zc(f).type,m=b instanceof g.nU?b.za:null;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,watch:g.L("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,url:b.dm(c),is_live:m,is_list:l,is_mix:f,background:d?"background-image: url("+
d+")":""};b instanceof g.hV&&(c.playlist_length=b.getLength());a.update(c)},Q8=function(a){var b={K:"div",
Z:"ytp-upnext",$:{"aria-label":"{{watch}}"},S:[{K:"div",Z:"ytp-thumbnail-overlay-image",$:{style:"{{background}}"}},{K:"div",Z:"ytp-thumbnail-overlay-curtain"},{K:"span",Z:"ytp-upnext-top",S:[{K:"span",Z:"ytp-upnext-header",S:[g.L("YTP_PLAYLIST_UP_NEXT")]},{K:"span",Z:"ytp-upnext-title",S:["{{title}}"]},{K:"span",Z:"ytp-upnext-author",S:["{{author}}"]}]},{K:"a",Z:"ytp-upnext-autoplay-icon",$:{href:"{{url}}"},S:[{K:"svg",$:{height:"100%",version:"1.1",viewBox:"0 0 98 98",width:"100%"},S:[{K:"circle",
Z:"ytp-svg-autoplay-circle",$:{cx:"49",cy:"49",fill:"#000","fill-opacity":"0.8",r:"48"}},{K:"circle",Z:"ytp-svg-autoplay-ring",$:{cx:"-49",cy:"49","fill-opacity":"0",r:"46.5",stroke:"#FFFFFF","stroke-dasharray":"293","stroke-dashoffset":"-293","stroke-width":"4",transform:"rotate(-90)"}},{K:"polygon",Z:"ytp-svg-autoplay-triangle",$:{fill:"#fff",points:"32,27 72,49 32,71"}}]}]},{K:"span",Z:"ytp-upnext-bottom",S:[{K:"span",Z:"ytp-upnext-cancel"},{K:"span",Z:"ytp-upnext-paused",S:[g.L("YTP_AUTOPLAY_PAUSED_2")]}]},
{K:"span",Z:"ytp-upnext-close"}]};g.V.call(this,b);this.C=null;var c=this.pa["ytp-upnext-cancel"],b=this.pa["ytp-upnext-close"];this.C=new g.V({K:"button",ea:["ytp-upnext-cancel-button","ytp-button"],$:{tabindex:0,"aria-label":g.L("YTP_AUTOPLAY_CANCEL")},S:[g.L("YTP_CANCEL")]});g.J(this,this.C);this.C.T("click",this.qx,this);this.C.Ha(c);c=new g.V({K:"button",ea:["ytp-upnext-close-button","ytp-button"]});g.J(this,c);c.T("click",this.qx,this);c.Ha(b);this.o=a;this.J=this.pa["ytp-svg-autoplay-ring"];
this.F=this.B=this.A=this.D=null;this.G=new g.tz(this.Dl,5E3,this);g.J(this,this.G);this.H=0;this.V(this.pa["ytp-upnext-autoplay-icon"],"click",this.kL);this.lx();this.V(a,"autonavvisibility",this.lx);this.V(a,"mdxnowautoplaying",this.DK);this.V(a,"mdxautoplaycanceled",this.EK);this.V(a,"mdxautoplayupnext",this.zz);3==this.o.Va()&&(a=(a=g.NS(g.XD(this.o)))?a.lF():null)&&this.zz(a)},iua=function(a,b){a.D=b;
hua(a,b,g.X(a.o),"hqdefault.jpg")},R8=function(a,b){a.A||(g.Cs("a11y-announce",g.L("YTP_PLAYLIST_UP_NEXT")+" "+a.D.title),a.H=(0,g.zu)(),a.A=new g.tz((0,g.z)(a.Bo,a,b),25),a.Bo(b));
g.yh(a.element,"ytp-upnext-autoplay-paused")},T8=function(a){S8(a);
a.H=(0,g.zu)();a.Bo();g.N(a.element,"ytp-upnext-autoplay-paused")},S8=function(a){a.A&&(a.A.dispose(),a.A=null)},U8=function(a){var b=g.X(a),b=b.C&&!b.H;
g.V.call(this,{K:"a",Z:"ytp-videowall-still",$:{href:"{{url}}",target:b?"_blank":"","aria-label":"{{watch}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},S:[{K:"div",Z:"ytp-videowall-still-image",$:{style:"{{background}}"}},{K:"span",Z:"ytp-videowall-still-info",S:[{K:"span",Z:"ytp-videowall-still-info-bg",S:[{K:"span",Z:"ytp-videowall-still-info-content",$:g.Tp||g.En?{style:"will-change: opacity"}:void 0,S:[{K:"span",Z:"ytp-videowall-still-info-title",S:["{{title}}"]},
{K:"span",Z:"ytp-videowall-still-info-author",S:["{{author_and_views}}"]},{K:"span",Z:"ytp-videowall-still-info-live",S:[g.L("YTP_LIVE")]},{K:"span",Z:"ytp-videowall-still-info-duration",S:["{{duration}}"]}]}]}]},{K:"span",ea:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],S:[{K:"span",Z:"ytp-videowall-still-listlabel-icon"},g.L("YTP_PLAYLIST"),{K:"span",Z:"ytp-videowall-still-listlabel-length",S:[" (",{K:"span",S:["{{playlist_length}}"]},")"]}]},{K:"span",ea:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],S:[{K:"span",Z:"ytp-videowall-still-listlabel-mix-icon"},g.L("YTP_MIX"),{K:"span",Z:"ytp-videowall-still-listlabel-length",S:[" (50+)"]}]}]});this.B=b;this.o=a;this.A=null;this.T("click",this.C);this.T("keypress",this.D);g.X(a).experiments.g("player_interaction_logging")&&(a=a.app.ba,g.Ge(a.A,this),b=String(a.G++),this.element.setAttribute("data-visual-id",b),g.Ed(this,(0,g.z)(a.F,a,this)))},V8=function(a){g.iU.call(this,a,{K:"div",
ea:["ytp-thumbnail-overlay","ytp-channel-overlay"],S:[{K:"div",Z:"ytp-thumbnail-overlay-image",$:{style:"{{background}}"}},{K:"div",Z:"ytp-thumbnail-overlay-curtain"}]})},W8=function(a,b){g.KB.call(this,{K:"div",
ea:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.o=a;this.W=!1},jua=function(a){a=g.X(a);
return a.gc&&!a.Ea},X8=function(a,b){W8.call(this,a,"videowall-endscreen");
this.ca=a;this.ba=b;this.G=0;this.A=[];this.H=this.D=this.C=null;this.J=this.aa=!1;this.F=new g.oE(this);g.J(this,this.F);this.M=new g.tz(g.za(g.N,this.element,"ytp-show-tiles"),0);g.J(this,this.M);var c=new g.V({K:"button",ea:["ytp-button","ytp-endscreen-previous"],$:{"aria-label":g.L("YTP_PREVIOUS")},S:[g.ui()]});g.J(this,c);c.Ha(this.element);c.T("click",this.wQ,this);this.P=new g.Av({K:"div",Z:"ytp-endscreen-content"});g.J(this,this.P);this.P.Ha(this.element);c=new g.V({K:"button",ea:["ytp-button",
"ytp-endscreen-next"],$:{"aria-label":g.L("YTP_NEXT")},S:[g.vi()]});g.J(this,c);c.Ha(this.element);c.T("click",this.vQ,this);this.B=new Q8(a);g.J(this,this.B);g.cT(this.o,this.B.element,5);this.la()},kua=function(a){return(0,g.M)(a.Jf,function(a){return g.WX(a)})},lua=function(a,b,c){return 0==b&&a.C.length&&(b=c/X8.g,2<=c/X8.g&&2<=b&&g.X(a.o).experiments.g("video_wall_emphasize_first"))?2*X8.g:X8.g},Y8=function(a){var b=a.ba.qs();
b!=a.aa&&(a.aa=b,a.o.U("autonavvisibility"))},Z8=function(a){W8.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.A=new V8(a);g.J(this,this.A);g.cT(this.o,this.A.element,5);this.B=new g.V(["div","ytp-subscribe-card",["img","ytp-author-image",{src:b.profilePicture}],["div","ytp-subscribe-card-right",["div","ytp-author-name",b.author],["div","html5-subscribe-button-container"]]]);g.J(this,this.B);this.B.Ha(this.element);this.C=new g.hU(g.L("YTP_SUBSCRIBE"),g.L("YTP_UNSUBSCRIBE"),!0,b.Bz,b.subscribed,"trailer-endscreen",null,a);g.J(this,this.C);this.C.Ha(this.B.pa["html5-subscribe-button-container"]);
this.la()},$8=function(a){g.gv.call(this,a);
g.Wf({});this.o=null;this.isAvailable=!0;this.A=new g.oE(this);g.J(this,this.A);this.B=g.X(a);jua(a)?this.o=new X8(this.g,this):this.B.Ea?this.o=new Z8(this.g):this.o=new W8(this.g);g.J(this,this.o);g.cT(this.g,this.o.element,5);this.Ey();this.A.V(a,"videodatachange",this.Ey,this);this.A.V(a,"crn_endscreen",this.$P,this);this.A.V(a,"crx_endscreen",this.aQ,this)};
g.B(Q8,g.V);g.h=Q8.prototype;g.h.Dl=function(){this.B&&(this.G.stop(),this.Ba(this.F),this.F=null,this.B.close(),this.B=null)};
g.h.lx=function(){this.Eb(g.IS(this.o))};
g.h.aL=function(){window.focus();this.Dl()};
g.h.Bo=function(a){a=a||g.X(this.o).experiments.o("autoplay_time")||1E4;var b=Math.min((0,g.zu)()-this.H,a);a=Math.min(b/a,1);this.J.setAttribute("stroke-dashoffset",-293*(a+1));1<=a&&3!=this.o.Va()?this.select(!0):this.A&&this.A.start()};
g.h.select=function(a){var b=g.X(this.o);if(b.experiments.g("autonav_notifications")&&a&&window.Notification&&window.document.hasFocus){var c=window.Notification.permission;g.VS(this.o,"xwebnotifications",{permission:c});"default"==c?window.Notification.requestPermission():"granted"!=c||window.document.hasFocus()||(c=this.D.Tb(),this.Dl(),this.B=new window.Notification(g.L("YTP_PLAYLIST_UP_NEXT"),{body:c.title,icon:c.sc(b)}),this.F=this.V(this.B,"click",this.aL),this.G.start())}S8(this);this.o.lj(!1,
a)};
g.h.kL=function(a){!g.$q(this.C.element,g.ux(a))&&g.kU(a,this.o)&&this.select()};
g.h.qx=function(){g.WS(this.o,"autonavcancel");g.LS(this.o,!0)};
g.h.DK=function(a){this.o.Va();this.show();R8(this,a)};
g.h.zz=function(a){this.o.Va();this.D&&this.D.Tb().videoId==a.Tb().videoId||iua(this,a)};
g.h.EK=function(){this.o.Va();S8(this);this.la()};
g.h.R=function(){S8(this);this.Dl();Q8.N.R.call(this)};
g.ca(U8,g.V);U8.prototype.Vi=function(){var a=this.A.Tb().videoId,b=this.A.getPlaylistId();g.X2(this.o.app,a,this.A.nd,b,void 0,void 0)};
U8.prototype.C=function(a){g.fT(this.o,this);g.kU(a,this.o,!this.o.isFullscreen()&&this.B,this.A.nd||void 0)&&this.Vi()};
U8.prototype.D=function(a){switch(a.keyCode){case 13:case 32:g.zx(a)||(this.Vi(),g.yx(a))}};
g.B(V8,g.iU);V8.prototype.Eb=function(a){a?this.A.show():g.NB(this.A)};
g.B(W8,g.KB);W8.prototype.create=function(){this.W=!0};
W8.prototype.destroy=function(){this.W=!1};
W8.prototype.Go=function(){return!1};
g.B(X8,W8);X8.g=2;g.h=X8.prototype;g.h.create=function(){X8.N.create.call(this);var a=this.o.getVideoData();a&&(this.C=kua(a),this.D=a);this.eh();this.F.V(this.o,"appresize",this.eh);this.F.V(this.o,"videodatachange",this.xQ);this.F.V(this.o,"autonavchange",this.DA);this.F.V(this.o,"autonavcancel",this.uQ);this.F.V(this.element,"transitionend",this.mM)};
g.h.destroy=function(){g.qE(this.F);g.Gd(this.A);this.A=[];this.C=null;X8.N.destroy.call(this);g.yh(this.element,"ytp-show-tiles");this.M.stop()};
g.h.Go=function(){return 1!=this.D.autonavState};
g.h.nn=function(){return g.dT(this.o)&&this.Go()&&!this.H};
g.h.show=function(){X8.N.show.call(this);g.yh(this.element,"ytp-show-tiles");g.X(this.o).isMobile?g.uz(this.M):this.M.start();(this.J||this.H&&this.H!=this.D.clientPlaybackNonce)&&g.LS(this.o,!1);var a=this.nn();g.dT(this.o)&&g.X(this.o).experiments.g("ui_logging")&&this.ba.log({cancelButtonShow:a?"1":"0",state:this.Go()?"enabled":"disabled"});a?(Y8(this),2==this.D.autonavState?g.X(this.o).experiments.g("fast_autonav_in_background")&&3==this.o.iA()?this.B.select(!0):R8(this.B):3==this.D.autonavState&&
T8(this.B)):(g.LS(this.o,!0),Y8(this))};
g.h.la=function(){X8.N.la.call(this);T8(this.B);Y8(this)};
g.h.mM=function(a){g.ux(a)==this.element&&this.eh()};
g.h.eh=function(){if(this.C&&this.C.length){g.N(this.element,"ytp-endscreen-paginate");var a=g.ku(this.element),b=a.width/a.height,c=96/54,d=X8.g,e=X8.g,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.C.length,m=Math.pow(X8.g,2),n,q=lua(this,0,k),t=lua(this,1,k);n=l*m+(Math.pow(q,2)-m);n+=Math.pow(t,2)-m;for(n-=m;0<n&&(d<f||e<k);){var v=d/X8.g,w=e/X8.g,A=d<=f-X8.g&&n>=w*m,F=e<=k-X8.g&&n>=v*m;if((v+1)/w*c/b>b/(v/(w+1)*c)&&F)n-=v*m,e+=X8.g;else if(A)n-=w*m,d+=X8.g;else if(F)n-=v*m,e+=X8.g;
else break}c=!1;f=X8.g+q;n>=3*m&&6>=l*m-n&&(e>=f||d>=f)&&t<=X8.g&&(c=!0);n=96*d;m=54*e;b=n/m<b?a.height/m:a.width/n;b=Math.min(b,2);n*=b;m*=b;n*=g.Sh(a.width/n||1,1,1.21);m*=g.Sh(a.height/m||1,1,1.21);n=Math.floor(Math.min(a.width,n));m=Math.floor(Math.min(a.height,m));a=this.P.element;g.ju(a,n,m);g.Tt(a,{marginLeft:n/-2+"px",marginTop:m/-2+"px"});iua(this.B,this.C[0]);g.O(this.element,"ytp-endscreen-takeover",this.nn());Y8(this);b=n+4;n=m+4;m=0;f=!1;for(k=0;k<d;k++)for(v=0;v<e;v++)if(w=t>X8.g&&1<=
m&&!f?m+1:m,F=0,c&&k>=d-X8.g&&v>=e-X8.g?F=1:0==v%X8.g&&0==k%X8.g&&(v<q&&k<q?0==v&&0==k&&(F=q):t>X8.g&&v>=e-t&&k>=d-t?v==e-t&&k==d-t&&(f=!0,w=1,F=t):F=X8.g),w=g.Th(w+this.G,l),0!=F){A=this.A[m];A||(A=new U8(this.o),this.A[m]=A,a.appendChild(A.element));var R=Math.floor(n*v/e),I=Math.floor(b*k/d),Ma=Math.floor(n*(v+F)/e)-R-4,tb=Math.floor(b*(k+F)/d)-I-4;g.Zt(A.element,I,R);g.ju(A.element,tb,Ma);g.Tt(A.element,"transitionDelay",(v+k)/20+"s");g.O(A.element,"ytp-videowall-still-mini",1==F);g.O(A.element,
"ytp-videowall-still-large",2<F);w=this.C[w];A.A=w;hua(A,w,g.X(A.o),g.wh(A.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg");F=w.nd;w=A.o;g.X(w).experiments.g("player_interaction_logging")&&(w=w.app.ba,F=F&&F.itct,A=A.element.getAttribute("data-visual-id"),g.lC(w,"onLogServerVeCreated",{id:A,tracking_params:F}));m++}g.O(this.element,"ytp-endscreen-paginate",m<l);for(d=this.A.length-1;d>=m;d--)A=this.A[d],g.Uq(A.element),g.Fd(A);this.A.length=m}};
X8.A=2;X8.o=1.21;g.h=X8.prototype;g.h.xQ=function(){var a=this.o.getVideoData();this.D!=a&&(this.G=0,this.C=kua(a),this.D=a,this.eh())};
g.h.vQ=function(){this.G+=this.A.length;this.eh()};
g.h.wQ=function(){this.G-=this.A.length;this.eh()};
g.h.pH=function(){return!!this.B.A};
g.h.DA=function(a){1==a?(this.J=!1,this.H=this.D.clientPlaybackNonce,S8(this.B),this.g&&this.eh()):(this.J=!0,this.g&&this.nn()&&(2==a?R8(this.B):3==a&&T8(this.B)))};
g.h.uQ=function(a){if(a){for(a=0;a<this.A.length;a++)g.gT(this.ca,this.A[a],!0);this.DA(1)}else this.H=null,this.J=!1;this.eh()};
g.B(Z8,W8);Z8.prototype.show=function(){Z8.N.show.call(this);this.A.Eb(!0)};
Z8.prototype.la=function(){Z8.N.la.call(this);this.A.Eb(!1)};
g.B($8,g.gv);g.h=$8.prototype;g.h.vA=function(){var a=this.g.getVideoData(),b=!jua(this.g)||!(!a.Jf||!a.Jf.length),a=g.JS(a,"ypc_module"),c=g.$X(this.g.app);return(b||!1)&&!a&&!c};
g.h.qs=function(){return(this.o instanceof X8||!1)&&this.o.g&&this.o.nn()};
g.h.mH=function(){return this.qs()?this.o.pH():!1};
g.h.R=function(){g.aT(this.g,"endscreen");$8.N.R.call(this)};
g.h.load=function(){$8.N.load.call(this);this.o.show();g.X(this.g).Ea&&.01>Math.random()&&this.log({trailerEndscreenShow:1})};
g.h.log=function(a){g.VS(this.g,"end",a)};
g.h.unload=function(){$8.N.unload.call(this);this.o.la();this.o.destroy();this.isAvailable=!1};
g.h.$P=function(a){this.vA()&&(this.o.W||this.o.create(),"load"==a.getId()&&this.load())};
g.h.aQ=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.Ey=function(){g.aT(this.g,"endscreen");var a=Math.max(1E3*(this.g.getVideoData().lengthSeconds-10),0),a=new g.ds(a,0x8000000000000,{id:"preload",namespace:"endscreen"}),b=new g.ds(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.UD(this.g,[a,b])};
window._exportCheck==g.Ca&&g.oa("ytmod.player.endscreen",$8,void 0);})(_yt_player);
