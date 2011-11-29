YUI.add("widget-base",function(b){var g=b.Lang,r=b.Node,e=b.ClassNameManager,w=e.getClassName,M,s=b.cached(function(L){return L.substring(0,1).toUpperCase()+L.substring(1);}),F="content",Q="visible",K="hidden",y="disabled",B="focused",d="width",A="height",N="boundingBox",v="contentBox",k="parentNode",m="ownerDocument",x="auto",j="srcNode",I="body",H="tabIndex",q="id",i="render",J="rendered",n="destroyed",a="strings",o="<div></div>",z="Change",p="loading",E="_uiSet",D="",G=function(){},u=true,O=false,t,l={},f=[Q,y,A,d,B],C=b.UA.webkit,P=b.one(I).get(m),h={};function c(R){var U=this,L,T,S=U.constructor;U._strs={};U._cssPrefix=S.CSS_PREFIX||w(S.NAME.toLowerCase());c.superclass.constructor.apply(U,arguments);T=U.get(i);if(T){if(T!==u){L=T;}U.render(L);}}c.NAME="widget";t=c.UI_SRC="ui";c.ATTRS=l;l[q]={valueFn:"_guid",writeOnce:u};l[J]={value:O,readOnly:u};l[N]={value:null,setter:"_setBB",writeOnce:u};l[v]={valueFn:"_defaultCB",setter:"_setCB",writeOnce:u};l[H]={value:null,validator:"_validTabIndex"};l[B]={value:O,readOnly:u};l[y]={value:O};l[Q]={value:u};l[A]={value:D};l[d]={value:D};l[a]={value:{},setter:"_strSetter",getter:"_strGetter"};l[i]={value:O,writeOnce:u};c.CSS_PREFIX=w(c.NAME.toLowerCase());c.getClassName=function(){return w.apply(e,[c.CSS_PREFIX].concat(b.Array(arguments),true));};M=c.getClassName;c.getByNode=function(L){var S,R=M();L=r.one(L);if(L){L=L.ancestor("."+R,true);if(L){S=h[b.stamp(L,u)];}}return S||null;};c.getByFocused=function(){var L;b.Object.some(h,function(R){if(R._domFocus){L=R;return true;}});return L||null;};c._onDocMouseDown=function(L){var R=c.getByNode(L.target);if(R&&R._domFocus){c._onDocFocus(L);}};c._onDocFocus=function(L){var S=c.getByFocused(),R=c.getByNode(L.target);if(S){S._domFocus=false;S._set(B,S._domFocus,{src:t});}if(R){R._domFocus=true;R._set(B,R._domFocus,{src:t});}};P.on("focus",c._onDocFocus);if(C){P.on("mousedown",c._onDocMouseDown);}b.extend(c,b.Base,{getClassName:function(){return w.apply(e,[this._cssPrefix].concat(b.Array(arguments),true));},initializer:function(L){h[b.stamp(this.get(N))]=this;if(this._applyParser){this._applyParser(L);}},destructor:function(){var L=this.get(N),R=b.stamp(L,u);if(R in h){delete h[R];}this._destroyBox();},destroy:function(L){this._destroyAllNodes=L;return c.superclass.destroy.apply(this);},_destroyBox:function(){var S=this.get(N),R=this.get(v),L=this._destroyAllNodes,T=S&&S.compareTo(R);if(this.UI_EVENTS){this._destroyUIEvents();}if(L){S.empty();S.remove(u);}else{if(R){R.remove(u);}if(!T){S.remove(u);}}},render:function(L){if(!this.get(n)&&!this.get(J)){this.publish(i,{queuable:O,fireOnce:u,defaultTargetOnly:u,defaultFn:this._defRenderFn});this.fire(i,{parentNode:(L)?r.one(L):null});}return this;},_defRenderFn:function(L){this._parentNode=L.parentNode;this.renderer();this._set(J,u);this._removeLoadingClassNames();},renderer:function(){var L=this;L._renderUI();L.renderUI();L._bindUI();L.bindUI();L._syncUI();L.syncUI();},bindUI:G,renderUI:G,syncUI:G,hide:function(){return this.set(Q,O);},show:function(){return this.set(Q,u);},focus:function(){return this._set(B,u);},blur:function(){return this._set(B,O);},enable:function(){return this.set(y,O);},disable:function(){return this.set(y,u);},_uiSizeCB:function(L){this.get(v).toggleClass(M(F,"expanded"),L);},_renderBox:function(L){var U=this,R=U.get(v),S=U.get(N),W=U.get(j),T=U.DEF_PARENT_NODE,V=(W&&W.get(m))||S.get(m)||R.get(m);if(W&&!W.compareTo(R)&&!R.inDoc(V)){W.replace(R);}if(!S.compareTo(R.get(k))&&!S.compareTo(R)){if(R.inDoc(V)){R.replace(S);}S.appendChild(R);}L=L||(T&&r.one(T));if(L){L.appendChild(S);}else{if(!S.inDoc(V)){r.one(I).insert(S,0);}}},_setBB:function(L){return this._setBox(this.get(q),L,this.BOUNDING_TEMPLATE);},_setCB:function(L){return(this.CONTENT_TEMPLATE===null)?this.get(N):this._setBox(null,L,this.CONTENT_TEMPLATE);},_defaultCB:function(L){return this.get(j)||null;},_setBox:function(S,R,L){R=r.one(R)||r.create(L);if(!R.get(q)){R.set(q,S||b.guid());}return R;},_renderUI:function(){this._renderBoxClassNames();this._renderBox(this._parentNode);},_renderBoxClassNames:function(){var T=this._getClasses(),L,R=this.get(N),S;R.addClass(M());for(S=T.length-3;S>=0;S--){L=T[S];R.addClass(L.CSS_PREFIX||w(L.NAME.toLowerCase()));}this.get(v).addClass(this.getClassName(F));},_removeLoadingClassNames:function(){var S=this.get(N),L=this.get(v),R=this.getClassName(p),T=M(p);S.removeClass(T).removeClass(R);L.removeClass(T).removeClass(R);},_bindUI:function(){this._bindAttrUI(this._UI_ATTRS.BIND);},_syncUI:function(){this._syncAttrUI(this._UI_ATTRS.SYNC);},_uiSetHeight:function(L){this._uiSetDim(A,L);this._uiSizeCB((L!==D&&L!==x));},_uiSetWidth:function(L){this._uiSetDim(d,L);},_uiSetDim:function(L,R){this.get(N).setStyle(L,g.isNumber(R)?R+this.DEF_UNIT:R);},_uiSetVisible:function(L){this.get(N).toggleClass(this.getClassName(K),!L);},_uiSetDisabled:function(L){this.get(N).toggleClass(this.getClassName(y),L);},_uiSetFocused:function(S,R){var L=this.get(N);L.toggleClass(this.getClassName(B),S);if(R!==t){if(S){L.focus();}else{L.blur();}}},_uiSetTabIndex:function(R){var L=this.get(N);if(g.isNumber(R)){L.set(H,R);}else{L.removeAttribute(H);}},toString:function(){return this.name+"["+this.get(q)+"]";},DEF_UNIT:"px",DEF_PARENT_NODE:null,CONTENT_TEMPLATE:o,BOUNDING_TEMPLATE:o,_guid:function(){return b.guid();},_validTabIndex:function(L){return(g.isNumber(L)||g.isNull(L));},_bindAttrUI:function(R){var S,L=R.length;for(S=0;S<L;S++){this.after(R[S]+z,this._setAttrUI);}},_syncAttrUI:function(S){var T,R=S.length,L;for(T=0;T<R;T++){L=S[T];this[E+s(L)](this.get(L));}},_setAttrUI:function(L){this[E+s(L.attrName)](L.newVal,L.src);},_strSetter:function(L){return b.merge(this.get(a),L);},getString:function(L){return this.get(a)[L];},getStrings:function(){return this.get(a);},_UI_ATTRS:{BIND:f,SYNC:f.concat(H)}});b.Widget=c;},"@VERSION@",{requires:["attribute","event-focus","base-base","base-pluginhost","node-base","node-style","classnamemanager"],skinnable:true});