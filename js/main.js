//>>built
require({cache:{"ScreenShotPlugin/View/Dialog/ScreenShotDialog":function(){define("ScreenShotPlugin/View/Dialog/ScreenShotDialog","dojo/_base/declare dojo/_base/lang dojo/dom-construct dojo/_base/array dijit/focus dijit/form/CheckBox dijit/form/NumberSpinner dijit/form/RadioButton dijit/layout/ContentPane dijit/layout/AccordionContainer JBrowse/View/Dialog/WithActionBar dojo/on dijit/form/Button JBrowse/Model/Location ScreenShotPlugin/Util".split(" "),function(p,k,e,b,n,f,g,l,h,r,d,q,s,v,a){return p(d,
{title:"Take screenshot",autofocus:!1,constructor:function(c){this.browser=c.browser;this.parameters=this._getInitialParameters();this.requestUrl=c.requestUrl;this.setCallback=c.setCallback||function(){};this.cancelCallback=c.cancelCallback||function(){};this.vTracks=this.browser.view.visibleTracks();this.trackParameters=this._getTrackParameters()},_fillActionBar:function(c){dojo.addClass(c,"screenshot-dialog-actionbar");(new s({label:"Render",onClick:dojo.hitch(this,function(){var c=this.parameters.view;
c.methylation=this.parameters.methylation;c.zoom=this.parameters.output.zoom;c=this._getPhantomJSUrl({general:c,tracks:this.trackParameters},this.parameters.output);window.open(c);this.setCallback&&this.setCallback()})})).placeAt(c);(new s({label:"Cancel",onClick:dojo.hitch(this,function(){this.cancelCallback&&this.cancelCallback();this.hide()})})).placeAt(c)},show:function(c){dojo.addClass(this.domNode,"screenshot-dialog");var a=e.create("div",{className:"screenshot-dialog-pane",id:"screenshot-dialog-pane-left"}),
m=new h({className:"screenshot-dialog-pane-sub",id:"screenshot-dialog-pane-left-top",title:"General configuration options"});this._paneGen(m.containerNode);m.placeAt(a);m=new h({className:"screenshot-dialog-pane-sub",id:"screenshot-dialog-pane-left-bottom",title:"Output configuration options"});this._paneOut(m.containerNode);m.placeAt(a);m=e.create("div",{className:"screenshot-dialog-pane",id:"screenshot-dialog-pane-right"});this._paneTracks(m);var b=e.create("div",{className:"screenshot-dialog-pane-bottom-warning",
innerHTML:"Local configuration changes will be ignored. Default configuration will be used unless specified in this dialog.\x3cbr\x3eRendering will open a new window."});this.set("content",[a,m,b]);this.inherited(arguments)},_paneGen:function(c){var a=this.parameters.view,m;e.create("h2",{innerHTML:"General configuration options"},c);c=e.create("table",{"class":"screenshot-dialog-opt-table"},c);for(m in a){var b=a[m],d=e.create("tr",{id:"screenshot-dialog-row-"+m},c);e.create("td",{innerHTML:"labels"===
m?"":b.title,"class":"screenshot-dialog-pane-label"},d);d=e.create("td",{"class":"screenshot-dialog-pane-input"},d);b="trackSpacing"===m?new g({id:"screenshot-dialog-"+m+"-spinner",value:b.value,_prop:m,constraints:{min:0,max:40},smallDelta:5,intermediateChanges:!0,style:"width:50px;"}):"labels"===m?null:new f({id:"screenshot-dialog-opt-box-"+m,_prop:m,checked:b.value});null!==b&&(b.onClick=dojo.hitch(this,"_setParameter",b),b.placeAt(d,"first"))}if(this.browser.plugins.hasOwnProperty("MethylationPlugin")){d=
e.create("tr",{id:"screenshot-dialog-row-methyl"},c);e.create("td",{innerHTML:"Methylation",className:"screenshot-dialog-pane-label",colspan:2},d);var a=e.create("tr",{id:"screenshot-dialog-row-methyl-boxes"},c),a=e.create("td",{colspan:2},a),l;for(l in this.parameters.methylation)m=new f({id:"screenshot-dialog-methyl-"+l,className:l+"-checkbox",_prop:l,checked:this.parameters.methylation[l]}),m.onClick=dojo.hitch(this,"_setMethylation",m),e.create("span",{innerHTML:l,className:"screenshot-dialog-opt-span"},
a),a.appendChild(m.domNode)}},_paneOut:function(c){var a=this;e.create("h2",{innerHTML:"Output configuration options"},c);c=e.create("table",{"class":"screenshot-dialog-opt-table"},c);var m,d,f,h=a.parameters.output;for(m in h)if(d=h[m],"format"===m){f=e.create("tr",{id:"screenshot-dialog-row-"+m,colspan:2},c);e.create("td",{innerHTML:d.title,"class":"screenshot-dialog-pane-label"},f);d=e.create("tr",{"class":"screenshot-dialog-pane-input"},c);var n=e.create("td",{colspan:2},d),q={PNG:"transparent background",
JPG:"white background",PDF:"contains svg-like objects"};b.forEach(["PNG","JPG"],function(c){var t=new l({id:"screenshot-dialog-output-"+c,checked:c===a.parameters.output.format.value,value:c,_prop:m});t.onClick=dojo.hitch(a,"_setParameter",t);e.create("span",{innerHTML:c,className:"screenshot-dialog-opt-span",title:q[c]},n);n.appendChild(t.domNode)})}else d=h[m],f=e.create("tr",{id:"screenshot-dialog-row-"+m},c),e.create("td",{innerHTML:d.title,"class":"screenshot-dialog-pane-label"},f),f=e.create("td",
{"class":"screenshot-dialog-pane-input"},f),d=new g({id:"screenshot-dialog-"+m+"-spinner",value:d.value,_prop:m,constraints:{min:d.min,max:d.max},smallDelta:d.delta,intermediateChanges:!0,style:"width:75px;"}),d.onChange=dojo.hitch(a,"_setParameter",d),d.placeAt(f,"first")},_paneTracks:function(c){var a=this,d=["left","center","right","none"];e.create("h2",{innerHTML:"Track-specific configuration options"},c);var f=new r({id:"screenshot-dialog-pane-accordian"}),n,q,s,k,p;b.forEach(a.vTracks,function(c){n=
c.config.label;q=a.trackParameters[n];s=new h({title:void 0===q.key?n:q.key,id:"screenshot-dialog-track-"+n});c=s.containerNode;if(!1===q.opts)s.set("content","No available options");else for(k in c=e.create("table",{"class":"screenshot-dialog-opt-table"},c),q)if(p=q[k],"ypos"===k){if(!1!==q.ypos){var u=e.create("tr",{id:"screenshot-dialog-row-"+n+"-ypos"},c);e.create("td",{innerHTML:"Y-scale position","class":"screenshot-dialog-pane-label"},u);b.forEach(d,function(c){var t=new l({name:"yscale-"+
n,checked:c===q.ypos,id:"screenshot-dialog-radio-"+n+"-"+c,value:c,_label:n,_prop:"ypos"});t.onClick=dojo.hitch(a,"_setTrackParameter",t);var d=e.create("td",{className:"screenshot-dialog-td-button"},u);t.placeAt(d,"first");e.create("label",{"for":"yscale-dialog-radio-"+n+"-"+c,innerHTML:c},d)})}}else if(p.hasOwnProperty("value")){u=e.create("tr",{id:"screenshot-dialog-row-"+n+"-"+k},c);e.create("td",{innerHTML:p.title,"class":"screenshot-dialog-pane-label"},u);var x=new g({id:"screenshot-dialog-spinner-"+
n+"-"+k,value:p.value,_prop:k,_label:n,smallDelta:p.delta,intermediateChanges:!0,style:"width:60px;"});x.onChange=dojo.hitch(a,"_setTrackParameter",x);var r=e.create("td",{"class":"screenshot-dialog-pane-input",colspan:4},u);x.placeAt(r,"first")}f.addChild(s)});f.placeAt(c);f.startup()},hide:function(){this.inherited(arguments);window.setTimeout(dojo.hitch(this,"destroyRecursive"),500)},_setMethylation:function(c){this.parameters.methylation.hasOwnProperty(c._prop)&&(this.parameters.methylation[c._prop]=
c.checked)},_setParameter:function(c){var a=c._prop;"format"===a?c.checked&&this.parameters.output.hasOwnProperty(a)&&(this.parameters.output[a].value=c.value):c.hasOwnProperty("checked")?this.parameters.view.hasOwnProperty(a)&&(this.parameters.view[a].value=!!c.checked):this.parameters.view.hasOwnProperty(a)?this.parameters.view[a].value=c.value:this.parameters.output.hasOwnProperty(a)&&(this.parameters.output[a].value=c.value)},_setTrackParameter:function(c){var a=c._label,d=c._prop;this.trackParameters.hasOwnProperty(a)?
this.trackParameters[a].hasOwnProperty(d)&&(this.trackParameters[a][d].value=c.value):console.warn("Error: no track labeled "+a)},_getInitialParameters:function(){var c=this.browser.config,a={value:c.highResolutionMode,title:"Zoom factor"};"number"!==typeof a.value&&(a.value=1);var d={value:20,title:"Track spacing"};void 0!==c.view&&void 0!==c.view.trackPadding&&(d.value=c.view.trackPadding);var b={value:c.show_overview,title:"Show location overview"},f={value:c.show_tracklist,title:"Show track list"},
e={value:c.show_nav,title:"Show navigation bar"},c={value:c.show_menu,title:"Show menu bar"};a.min=0;a.max=10;a.delta=1;return{view:{trackSpacing:d,locOver:b,trackList:f,nav:e,menu:c,labels:{value:!0,title:"Show track labels"}},methylation:{CG:!0,CHG:!0,CHH:!0},output:{format:{value:"JPG",title:"Output format"},zoom:a,quality:{value:70,title:"Render quality",min:0,max:100,delta:10},width:{value:3300,title:"Width (px)",min:100,max:1E4,delta:100},height:{value:2400,title:"Height (px)",min:100,max:1E4,
delta:100}}}},_getTrackParameters:function(){var c=this,a={};b.forEach(this.vTracks,function(d,b){a[d.config.label]=c._handleTrackTypeParameters(b,d.config.type,d.config)});return a},_handleTrackTypeParameters:function(a,d,b){a={key:b.key,trackNum:a};if(/\b(Sequence)/.test(d))return k.mixin(a,{opts:!1}),a;/\b(MethylPlot)/.test(d)||/\b(MethylPlot)/.test(d)?k.mixin(a,{ypos:{title:"Y-scale position",value:b.yScalePosition},height:{title:"Track height",value:b.style.height,delta:10},min:{title:"Min. score",
value:b.min_score,delta:0.1},max:{title:"Max. score",value:b.max_score,delta:0.1},quant:!0}):/\b(XYPlot)/.test(d)||/\b(XYDensity)/.test(d)?k.mixin(a,{ypos:{title:"Y-scale position",value:b.yScalePosition},height:{title:"Track height",value:b.style.height,delta:10},min:{title:"Min. score",value:b.min_score,delta:10},max:{title:"Max. score",value:b.max_score,delta:10},quant:!0}):k.mixin(a,{height:{title:"Track height",value:b.maxHeight,delta:10},ypos:!1});void 0!==b.histograms&&k.mixin(a,{ypos:{title:"Y-scale position",
value:b.yScalePosition},min:{title:"Min. score",value:b.histograms.min,delta:10},max:{title:"Max. score",value:b.histograms.max,delta:10},quant:!1});return a},_getPhantomJSUrl:function(c,d){var b=this.browser.makeCurrentViewURL(),f=a.encode(c),b=(b+("\x26screenshot\x3d"+f)).replace(/\u0026/g,"%26");d.url=b;b=a.encodePhantomJSSettings(d);return this.requestUrl+b}})})},"dijit/layout/AccordionContainer":function(){define("require dojo/_base/array dojo/_base/declare dojo/_base/fx dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/keys dojo/_base/lang dojo/sniff dojo/topic ../focus ../_base/manager dojo/ready ../_Widget ../_Container ../_TemplatedMixin ../_CssStateMixin ./StackContainer ./ContentPane dojo/text!./templates/AccordionButton.html ../a11yclick".split(" "),
function(p,k,e,b,n,f,g,l,h,r,d,q,s,v,a,c,y,m,A,z,B,D,C){s=e("dijit.layout._AccordionButton",[y,A,z],{templateString:C,label:"",_setLabelAttr:{node:"titleTextNode",type:"innerHTML"},title:"",_setTitleAttr:{node:"titleTextNode",type:"attribute",attribute:"title"},iconClassAttr:"",_setIconClassAttr:{node:"iconNode",type:"class"},baseClass:"dijitAccordionTitle",getParent:function(){return this.parent},buildRendering:function(){this.inherited(arguments);var a=this.id.replace(" ","_");f.set(this.titleTextNode,
"id",a+"_title");this.focusNode.setAttribute("aria-labelledby",f.get(this.titleTextNode,"id"));n.setSelectable(this.domNode,!1)},getTitleHeight:function(){return h.getMarginSize(this.domNode).h},_onTitleClick:function(){this.getParent().selectChild(this.contentWidget,!0);v.focus(this.focusNode)},_onTitleKeyDown:function(a){return this.getParent()._onKeyDown(a,this.contentWidget)},_setSelectedAttr:function(a){this._set("selected",a);this.focusNode.setAttribute("aria-expanded",a?"true":"false");this.focusNode.setAttribute("aria-selected",
a?"true":"false");this.focusNode.setAttribute("tabIndex",a?"0":"-1")}});q("dojo-bidi")&&s.extend({_setLabelAttr:function(a){this._set("label",a);f.set(this.titleTextNode,"innerHTML",a);this.applyTextDir(this.titleTextNode)},_setTitleAttr:function(a){this._set("title",a);f.set(this.titleTextNode,"title",a);this.applyTextDir(this.titleTextNode)}});var w=e("dijit.layout._AccordionInnerContainer"+(q("dojo-bidi")?"_NoBidi":""),[y,z],{baseClass:"dijitAccordionInnerContainer",isLayoutContainer:!0,buildRendering:function(){this.domNode=
l.place("\x3cdiv class\x3d'"+this.baseClass+"' role\x3d'presentation'\x3e",this.contentWidget.domNode,"after");var a=this.contentWidget,c=d.isString(this.buttonWidget)?d.getObject(this.buttonWidget):this.buttonWidget;this.button=a._buttonWidget=(new c({contentWidget:a,label:a.title,title:a.tooltip,dir:a.dir,lang:a.lang,textDir:a.textDir||this.textDir,iconClass:a.iconClass,id:a.id+"_button",parent:this.parent})).placeAt(this.domNode);this.containerNode=l.place("\x3cdiv class\x3d'dijitAccordionChildWrapper' role\x3d'tabpanel' style\x3d'display:none'\x3e",
this.domNode);this.containerNode.setAttribute("aria-labelledby",this.button.id);l.place(this.contentWidget.domNode,this.containerNode)},postCreate:function(){this.inherited(arguments);var a=this.button,c=this.contentWidget;this._contentWidgetWatches=[c.watch("title",d.hitch(this,function(c,d,b){a.set("label",b)})),c.watch("tooltip",d.hitch(this,function(c,d,b){a.set("title",b)})),c.watch("iconClass",d.hitch(this,function(c,d,b){a.set("iconClass",b)}))]},_setSelectedAttr:function(a){this._set("selected",
a);this.button.set("selected",a);if(a&&(a=this.contentWidget,a.onSelected))a.onSelected()},startup:function(){this.contentWidget.startup()},destroy:function(){this.button.destroyRecursive();k.forEach(this._contentWidgetWatches||[],function(a){a.unwatch()});delete this.contentWidget._buttonWidget;delete this.contentWidget._wrapperWidget;this.inherited(arguments)},destroyDescendants:function(a){this.contentWidget.destroyRecursive(a)}});q("dojo-bidi")&&(w=e("dijit.layout._AccordionInnerContainer",w,
{postCreate:function(){this.inherited(arguments);var a=this.button;this._contentWidgetWatches.push(this.contentWidget.watch("textDir",function(c,d,b){a.set("textDir",b)}))}}));e=e("dijit.layout.AccordionContainer",B,{duration:a.defaultDuration,buttonWidget:s,baseClass:"dijitAccordionContainer",buildRendering:function(){this.inherited(arguments);this.domNode.style.overflow="hidden";this.domNode.setAttribute("role","tablist")},startup:function(){this._started||(this.inherited(arguments),this.selectedChildWidget&&
this.selectedChildWidget._wrapperWidget.set("selected",!0))},layout:function(){var a=this.selectedChildWidget;if(a){var c=a._wrapperWidget.domNode,d=h.getMarginExtents(c),c=h.getPadBorderExtents(c),b=a._wrapperWidget.containerNode,f=h.getMarginExtents(b),b=h.getPadBorderExtents(b),e=this._contentBox,n=0;k.forEach(this.getChildren(),function(c){c!=a&&(n+=h.getMarginSize(c._wrapperWidget.domNode).h)});this._verticalSpace=e.h-n-d.h-c.h-f.h-b.h-a._buttonWidget.getTitleHeight();this._containerContentBox=
{h:this._verticalSpace,w:this._contentBox.w-d.w-c.w-f.w-b.w};a&&a.resize(this._containerContentBox)}},_setupChild:function(a){a._wrapperWidget=w({contentWidget:a,buttonWidget:this.buttonWidget,id:a.id+"_wrapper",dir:a.dir,lang:a.lang,textDir:a.textDir||this.textDir,parent:this});this.inherited(arguments);l.place(a.domNode,a._wrapper,"replace")},removeChild:function(a){a._wrapperWidget&&(l.place(a.domNode,a._wrapperWidget.domNode,"after"),a._wrapperWidget.destroy(),delete a._wrapperWidget);g.remove(a.domNode,
"dijitHidden");this.inherited(arguments)},getChildren:function(){return k.map(this.inherited(arguments),function(a){return"dijit.layout._AccordionInnerContainer"==a.declaredClass?a.contentWidget:a},this)},destroy:function(){this._animation&&this._animation.stop();k.forEach(this.getChildren(),function(a){a._wrapperWidget?a._wrapperWidget.destroy():a.destroyRecursive()});this.inherited(arguments)},_showChild:function(a){a._wrapperWidget.containerNode.style.display="block";return this.inherited(arguments)},
_hideChild:function(a){a._wrapperWidget.containerNode.style.display="none";this.inherited(arguments)},_transition:function(a,c,d){8>q("ie")&&(d=!1);this._animation&&(this._animation.stop(!0),delete this._animation);var f=this;if(a){a._wrapperWidget.set("selected",!0);var e=this._showChild(a);this.doLayout&&a.resize&&a.resize(this._containerContentBox)}c&&(c._wrapperWidget.set("selected",!1),d||this._hideChild(c));if(d){var n=a._wrapperWidget.containerNode,l=c._wrapperWidget.containerNode;d=a._wrapperWidget.containerNode;
a=h.getMarginExtents(d);d=h.getPadBorderExtents(d);var g=a.h+d.h;l.style.height=f._verticalSpace-g+"px";this._animation=new b.Animation({node:n,duration:this.duration,curve:[1,this._verticalSpace-g-1],onAnimate:function(a){a=Math.floor(a);n.style.height=a+"px";l.style.height=f._verticalSpace-g-a+"px"},onEnd:function(){delete f._animation;n.style.height="auto";c._wrapperWidget.containerNode.style.display="none";l.style.height="auto";f._hideChild(c)}});this._animation.onStop=this._animation.onEnd;this._animation.play()}return e},
_onKeyDown:function(a,c){if(!this.disabled&&!(a.altKey||!c&&!a.ctrlKey)){var d=a.keyCode;if(c&&(d==r.LEFT_ARROW||d==r.UP_ARROW)||a.ctrlKey&&d==r.PAGE_UP)this._adjacent(!1)._buttonWidget._onTitleClick(),a.stopPropagation(),a.preventDefault();else if(c&&(d==r.RIGHT_ARROW||d==r.DOWN_ARROW)||a.ctrlKey&&(d==r.PAGE_DOWN||d==r.TAB))this._adjacent(!0)._buttonWidget._onTitleClick(),a.stopPropagation(),a.preventDefault()}}});q("dijit-legacy-requires")&&c(0,function(){p(["dijit/layout/AccordionPane"])});e._InnerContainer=
w;e._Button=s;return e})},"dijit/layout/StackContainer":function(){define("dojo/_base/array dojo/cookie dojo/_base/declare dojo/dom-class dojo/dom-construct dojo/has dojo/_base/lang dojo/on dojo/ready dojo/topic dojo/when ../registry ../_WidgetBase ./_LayoutWidget dojo/i18n!../nls/common".split(" "),function(p,k,e,b,n,f,g,l,h,r,d,q,s,v){f("dijit-legacy-requires")&&h(0,function(){require(["dijit/layout/StackController"])});e=e("dijit.layout.StackContainer",v,{doLayout:!0,persist:!1,baseClass:"dijitStackContainer",
buildRendering:function(){this.inherited(arguments);b.add(this.domNode,"dijitLayoutContainer")},postCreate:function(){this.inherited(arguments);this.own(l(this.domNode,"keydown",g.hitch(this,"_onKeyDown")))},startup:function(){if(!this._started){var a=this.getChildren();p.forEach(a,this._setupChild,this);this.persist?this.selectedChildWidget=q.byId(k(this.id+"_selectedChild")):p.some(a,function(a){a.selected&&(this.selectedChildWidget=a);return a.selected},this);var c=this.selectedChildWidget;!c&&
a[0]&&(c=this.selectedChildWidget=a[0],c.selected=!0);r.publish(this.id+"-startup",{children:a,selected:c,textDir:this.textDir});this.inherited(arguments)}},resize:function(){if(!this._hasBeenShown){this._hasBeenShown=!0;var a=this.selectedChildWidget;a&&this._showChild(a)}this.inherited(arguments)},_setupChild:function(a){var c=a.domNode,d=n.place("\x3cdiv role\x3d'tabpanel' class\x3d'"+this.baseClass+"ChildWrapper dijitHidden'\x3e",a.domNode,"replace"),b=a["aria-label"]||a.title||a.label;b&&d.setAttribute("aria-label",
b);n.place(c,d);a._wrapper=d;this.inherited(arguments);"none"==c.style.display&&(c.style.display="block");a.domNode.title=""},addChild:function(a,c){this.inherited(arguments);this._started&&(r.publish(this.id+"-addChild",a,c),this.layout(),this.selectedChildWidget||this.selectChild(a))},removeChild:function(a){var c=p.indexOf(this.getChildren(),a);this.inherited(arguments);n.destroy(a._wrapper);delete a._wrapper;this._started&&r.publish(this.id+"-removeChild",a);if(!this._descendantsBeingDestroyed){if(this.selectedChildWidget===
a&&(this.selectedChildWidget=void 0,this._started)){var d=this.getChildren();d.length&&this.selectChild(d[Math.max(c-1,0)])}this._started&&this.layout()}},selectChild:function(a,c){var b;a=q.byId(a);this.selectedChildWidget!=a&&(b=this._transition(a,this.selectedChildWidget,c),this._set("selectedChildWidget",a),r.publish(this.id+"-selectChild",a),this.persist&&k(this.id+"_selectedChild",this.selectedChildWidget.id));return d(b||!0)},_transition:function(a,c){c&&this._hideChild(c);var d=this._showChild(a);
a.resize&&(this.doLayout?a.resize(this._containerContentBox||this._contentBox):a.resize());return d},_adjacent:function(a){var c=this.getChildren(),d=p.indexOf(c,this.selectedChildWidget),d=d+(a?1:c.length-1);return c[d%c.length]},forward:function(){return this.selectChild(this._adjacent(!0),!0)},back:function(){return this.selectChild(this._adjacent(!1),!0)},_onKeyDown:function(a){r.publish(this.id+"-containerKeyDown",{e:a,page:this})},layout:function(){var a=this.selectedChildWidget;a&&a.resize&&
(this.doLayout?a.resize(this._containerContentBox||this._contentBox):a.resize())},_showChild:function(a){var c=this.getChildren();a.isFirstChild=a==c[0];a.isLastChild=a==c[c.length-1];a._set("selected",!0);a._wrapper&&b.replace(a._wrapper,"dijitVisible","dijitHidden");return a._onShow&&a._onShow()||!0},_hideChild:function(a){a._set("selected",!1);a._wrapper&&b.replace(a._wrapper,"dijitHidden","dijitVisible");a.onHide&&a.onHide()},closeChild:function(a){a.onClose&&a.onClose(this,a)&&(this.removeChild(a),
a.destroyRecursive())},destroyDescendants:function(a){this._descendantsBeingDestroyed=!0;this.selectedChildWidget=void 0;p.forEach(this.getChildren(),function(c){a||this.removeChild(c);c.destroyRecursive(a)},this);this._descendantsBeingDestroyed=!1}});e.ChildWidgetProperties={selected:!1,disabled:!1,closable:!1,iconClass:"dijitNoIcon",showTitle:!0};g.extend(s,e.ChildWidgetProperties);return e})},"ScreenShotPlugin/Util":function(){define("ScreenShotPlugin/Util",["dojo/_base/declare","dojo/_base/array",
"dojo/json"],function(p,k,e){return{encode:function(b){var e=b.tracks;return this._encodeGeneralSettings(b.general)+this._endcodeTrackSettings(e)},encodePhantomJSSettings:function(b){b=e.stringify({url:b.url,renderType:b.format.value,renderSettings:{zoomFactor:b.zoom.value,viewport:{width:b.width.value,height:b.height.value}}});b=b.replace(/\"([^(\")"]+)\":/g,"$1:");return"?request\x3d"+b},decode:function(b,e){var f=b.split("~"),g=e.split(","),l=this._decodeGeneralSettings(f[0]),f=this._decodeTrackSettings(f.slice(1),
g);return{general:l,tracks:f}},_encodeGeneralSettings:function(b){var e="",f={zoom:"z",trackSpacing:"p",locOver:"o",trackList:"r",nav:"n",menu:"u",labels:"b",methylation:"m"},g;for(g in b)var l=b[g],e="methylation"===g?e+(f[g]+this._encodeBoolean(l.CG)+this._encodeBoolean(l.CHG)+this._encodeBoolean(l.CHH)):"zoom"===g||"trackSpacing"===g?e+(f[g]+l.value):e+(f[g]+this._encodeBoolean(l.value));return e},_endcodeTrackSettings:function(b){var e="",f,g;for(f in b)g=b[f],!1===g.hasOwnProperty("opts")&&(e+=
this._encodeTrack(g));return e},_encodeTrack:function(b){var e={height:"h",min:"i",max:"x",quant:"q",ypos:"y"},f={none:0,center:1,left:2,right:3},g,l,h="~"+b.trackNum;for(g in b)l=b[g],"quant"===g?h+=e[g]+this._encodeBoolean(l):void 0===l||(void 0===l.value||!1===e.hasOwnProperty(g))||(h+=e[g],h="ypos"===g?h+f[l.value]:h+l.value);return h},_encodeBoolean:function(b){return b?"1":"0"},_decodeBoolen:function(b){return"1"===b?!0:!1},_decodeGeneralSettings:function(b){var e={basic:{},view:{},methylation:{}},
f=/z([0-9]+)/gi.exec(b);null!=f&&(e.basic.highResolutionMode=parseInt(f[1]));f=/o([0-1])/gi.exec(b);null!=f&&(e.basic.show_overview=this._decodeBoolen(f[1]));f=/r([0-1])/gi.exec(b);null!=f&&(e.basic.show_tracklist=this._decodeBoolen(f[1]));f=/n([0-1])/gi.exec(b);null!=f&&(e.basic.show_nav=this._decodeBoolen(f[1]));f=/u([0-1])/gi.exec(b);null!=f&&(e.basic.show_menu=this._decodeBoolen(f[1]));f=/b([0-1])/gi.exec(b);null!=f&&(e.basic.show_tracklabels=this._decodeBoolen(f[1]));f=/p([0-9]+)/gi.exec(b);
null!=f&&(e.view.trackPadding=parseInt(f[1]));b=/m([0-9]+)/gi.exec(b);null!=b&&(e.methylation.CG=this._decodeBoolen(b[1].substring(0,1)),e.methylation.CHG=this._decodeBoolen(b[1].substring(1,2)),e.methylation.CHH=this._decodeBoolen(b[1].substring(2,3)));return e},_decodeTrackSettings:function(b,e){var f=this,g={};k.forEach(b,function(b){var h=parseInt(b.slice(0,1)),h=e[h];b=b.slice(1);g[h]={};var k=null,d=/q([0-1])/gi.exec(b);null!=d&&((k=f._decodeBoolen(d[1]))?g[h].style={}:g[h].histograms={});d=
/i(-?[0-9]+(\.[0-9])?)/gi.exec(b);null!=d&&(d=parseFloat(d[1]),k?g[h].min_score=d:g[h].histograms.min=d);d=/x(-?[0-9]+(\.[0-9])?)/gi.exec(b);null!=d&&(d=parseFloat(d[1]),k?g[h].max_score=d:g[h].histograms.max=d);d=/h([0-9]+)/gi.exec(b);null!=d&&(d=parseInt(d[1]),k?g[h].style.height=d:!1===k?(g[h].maxHeight=d,g[h].histograms.height=d):g[h].maxHeight=d);b=/y([0-3])/gi.exec(b);null!=b&&(b=parseInt(b[1]),g[h].yScalePosition=["none","center","left","right"][b])});return g}}})},"JBrowse/Plugin":function(){define(["dojo/_base/declare",
"JBrowse/Component"],function(p,k){return p(k,{constructor:function(e){this.name=e.name;this.cssLoaded=e.cssLoaded;this._finalizeConfig(e.config)},_defaultConfig:function(){return{baseUrl:"/plugins/"+this.name}}})})},"url:dijit/layout/templates/AccordionButton.html":"\x3cdiv data-dojo-attach-event\x3d'ondijitclick:_onTitleClick' class\x3d'dijitAccordionTitle' role\x3d\"presentation\"\x3e\n\t\x3cdiv data-dojo-attach-point\x3d'titleNode,focusNode' data-dojo-attach-event\x3d'onkeydown:_onTitleKeyDown'\n\t\t\tclass\x3d'dijitAccordionTitleFocus' role\x3d\"tab\" aria-expanded\x3d\"false\"\n\t\t\x3e\x3cspan class\x3d'dijitInline dijitAccordionArrow' role\x3d\"presentation\"\x3e\x3c/span\n\t\t\x3e\x3cspan class\x3d'arrowTextUp' role\x3d\"presentation\"\x3e+\x3c/span\n\t\t\x3e\x3cspan class\x3d'arrowTextDown' role\x3d\"presentation\"\x3e-\x3c/span\n\t\t\x3e\x3cspan role\x3d\"presentation\" class\x3d\"dijitInline dijitIcon\" data-dojo-attach-point\x3d\"iconNode\"\x3e\x3c/span\x3e\n\t\t\x3cspan role\x3d\"presentation\" data-dojo-attach-point\x3d'titleTextNode, textDirNode' class\x3d'dijitAccordionText'\x3e\x3c/span\x3e\n\t\x3c/div\x3e\n\x3c/div\x3e\n"}});
require({cache:{"JBrowse/Plugin":function(){define("JBrowse/Plugin",["dojo/_base/declare","JBrowse/Component"],function(p,k){return p(k,{constructor:function(e){this.name=e.name;this.cssLoaded=e.cssLoaded;this._finalizeConfig(e.config)},_defaultConfig:function(){return{baseUrl:"/plugins/"+this.name}}})})}}});
define("ScreenShotPlugin/main","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom dojo/dom-attr dijit/form/Button ./View/Dialog/ScreenShotDialog ./Util JBrowse/Plugin JBrowse/Browser".split(" "),function(p,k,e,b,n,f,g,l,h,r){return p(h,{constructor:function(d){this._defaultConfig();var b=this.browser;this.isScreenshot=!1;this.config.apiKey="a-demo-key-with-low-quota-per-ip-address";void 0!==d.config.apiKey&&(this.config.apiKey=d.config.apiKey);var e=this;b.afterMilestone("initPlugins",
function(){if(b.config.queryParams.hasOwnProperty("screenshot")){e.isScreenshot=!0;var d=l.decode(b.config.queryParams.screenshot,b.config.queryParams.tracks);e._applyScreenshotConfig(d);b.afterMilestone("loadConfig",function(){e._applyMethylationConfig(d.general.methylation);e._applyTracksConfig(d.tracks)})}});b.afterMilestone("initView",function(){function d(){(new g({requestUrl:e._getPhantomJSUrl(),browser:b})).show()}var a=b.menuBar;if(b.config.show_menu&&!1===e.isScreenshot){var c=new f({className:"screenshot-button",
innerHTML:"Screen Shot",title:"take screen shot of browser",onClick:d});a.appendChild(c.domNode)}b.setGlobalKeyboardShortcut("s",d)});b.afterMilestone("completely initialized",function(){})},_getPhantomJSUrl:function(){return"https://phantomjscloud.com/api/browser/v2/"+this.config.apiKey+"/"},_applyScreenshotConfig:function(d){k.mixin(this.browser.config,d.general.basic);k.mixin(this.browser.config.view,d.general.view)},_applyMethylationConfig:function(d){if(this.browser.plugins.hasOwnProperty("MethylationPlugin")){var b,
e,f=k.clone(this.browser.trackConfigsByName);for(b in d)if(!1===d[b]){var a={};a["show"+b]=!1;for(e in f)this._testMethylation(f[e].type)&&k.mixin(this.browser.trackConfigsByName[e],a)}}},_testMethylation:function(d){return void 0===d||null===d?!1:/\b(MethylXYPlot)/.test(d)||/\b(MethylPlot)/.test(d)},_applyTracksConfig:function(d){var b=k.clone(this.browser.trackConfigsByName),e;for(e in b)d.hasOwnProperty(e)&&(b=d[e].histograms,void 0!==b&&(k.mixin(this.browser.trackConfigsByName[e].histograms,b),
delete d[e].histograms),b=d[e].style,void 0!==b&&(k.mixin(this.browser.trackConfigsByName[e].style,b),delete d[e].style),k.mixin(this.browser.trackConfigsByName[e],d[e]))},_applyTrackLabelConfig:function(){this.browser.plugins.hasOwnProperty("HideTrackLabels")&&this.browser.showTrackLabels(this.browser.config.show_tracklabels?"show":"hide")}})});
//# sourceMappingURL=main.js.map