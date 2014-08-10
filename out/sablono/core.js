// Compiled by ClojureScript 0.0-2280
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__18074__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__18073 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__18073,(0),null);var body = cljs.core.nthnext.call(null,vec__18073,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__18074 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__18074__delegate.call(this,args);};
G__18074.cljs$lang$maxFixedArity = 0;
G__18074.cljs$lang$applyTo = (function (arglist__18075){
var args = cljs.core.seq(arglist__18075);
return G__18074__delegate(args);
});
G__18074.cljs$core$IFn$_invoke$arity$variadic = G__18074__delegate;
return G__18074;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4267__auto__ = (function iter__18080(s__18081){return (new cljs.core.LazySeq(null,(function (){var s__18081__$1 = s__18081;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18081__$1);if(temp__4126__auto__)
{var s__18081__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18081__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__18081__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__18083 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__18082 = (0);while(true){
if((i__18082 < size__4266__auto__))
{var args = cljs.core._nth.call(null,c__4265__auto__,i__18082);cljs.core.chunk_append.call(null,b__18083,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__18084 = (i__18082 + (1));
i__18082 = G__18084;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18083),iter__18080.call(null,cljs.core.chunk_rest.call(null,s__18081__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18083),null);
}
} else
{var args = cljs.core.first.call(null,s__18081__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__18080.call(null,cljs.core.rest.call(null,s__18081__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4267__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4267__auto__ = (function iter__18089(s__18090){return (new cljs.core.LazySeq(null,(function (){var s__18090__$1 = s__18090;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18090__$1);if(temp__4126__auto__)
{var s__18090__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18090__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__18090__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__18092 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__18091 = (0);while(true){
if((i__18091 < size__4266__auto__))
{var style = cljs.core._nth.call(null,c__4265__auto__,i__18091);cljs.core.chunk_append.call(null,b__18092,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__18093 = (i__18091 + (1));
i__18091 = G__18093;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18092),iter__18089.call(null,cljs.core.chunk_rest.call(null,s__18090__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18092),null);
}
} else
{var style = cljs.core.first.call(null,s__18090__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__18089.call(null,cljs.core.rest.call(null,s__18090__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4267__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__18094){
var styles = cljs.core.seq(arglist__18094);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to18095 = (function() { 
var link_to18095__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to18095 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to18095__delegate.call(this,url,content);};
link_to18095.cljs$lang$maxFixedArity = 1;
link_to18095.cljs$lang$applyTo = (function (arglist__18096){
var url = cljs.core.first(arglist__18096);
var content = cljs.core.rest(arglist__18096);
return link_to18095__delegate(url,content);
});
link_to18095.cljs$core$IFn$_invoke$arity$variadic = link_to18095__delegate;
return link_to18095;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to18095);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to18097 = (function() { 
var mail_to18097__delegate = function (e_mail,p__18098){var vec__18100 = p__18098;var content = cljs.core.nth.call(null,vec__18100,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3542__auto__ = content;if(cljs.core.truth_(or__3542__auto__))
{return or__3542__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to18097 = function (e_mail,var_args){
var p__18098 = null;if (arguments.length > 1) {
  p__18098 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to18097__delegate.call(this,e_mail,p__18098);};
mail_to18097.cljs$lang$maxFixedArity = 1;
mail_to18097.cljs$lang$applyTo = (function (arglist__18101){
var e_mail = cljs.core.first(arglist__18101);
var p__18098 = cljs.core.rest(arglist__18101);
return mail_to18097__delegate(e_mail,p__18098);
});
mail_to18097.cljs$core$IFn$_invoke$arity$variadic = mail_to18097__delegate;
return mail_to18097;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to18097);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list18102 = (function unordered_list18102(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4267__auto__ = (function iter__18107(s__18108){return (new cljs.core.LazySeq(null,(function (){var s__18108__$1 = s__18108;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18108__$1);if(temp__4126__auto__)
{var s__18108__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18108__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__18108__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__18110 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__18109 = (0);while(true){
if((i__18109 < size__4266__auto__))
{var x = cljs.core._nth.call(null,c__4265__auto__,i__18109);cljs.core.chunk_append.call(null,b__18110,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__18111 = (i__18109 + (1));
i__18109 = G__18111;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18110),iter__18107.call(null,cljs.core.chunk_rest.call(null,s__18108__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18110),null);
}
} else
{var x = cljs.core.first.call(null,s__18108__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__18107.call(null,cljs.core.rest.call(null,s__18108__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4267__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list18102);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list18112 = (function ordered_list18112(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4267__auto__ = (function iter__18117(s__18118){return (new cljs.core.LazySeq(null,(function (){var s__18118__$1 = s__18118;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18118__$1);if(temp__4126__auto__)
{var s__18118__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18118__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__18118__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__18120 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__18119 = (0);while(true){
if((i__18119 < size__4266__auto__))
{var x = cljs.core._nth.call(null,c__4265__auto__,i__18119);cljs.core.chunk_append.call(null,b__18120,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__18121 = (i__18119 + (1));
i__18119 = G__18121;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18120),iter__18117.call(null,cljs.core.chunk_rest.call(null,s__18118__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18120),null);
}
} else
{var x = cljs.core.first.call(null,s__18118__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__18117.call(null,cljs.core.rest.call(null,s__18118__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4267__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list18112);
/**
* Create an image element.
*/
sablono.core.image18122 = (function() {
var image18122 = null;
var image18122__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image18122__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image18122 = function(src,alt){
switch(arguments.length){
case 1:
return image18122__1.call(this,src);
case 2:
return image18122__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image18122.cljs$core$IFn$_invoke$arity$1 = image18122__1;
image18122.cljs$core$IFn$_invoke$arity$2 = image18122__2;
return image18122;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image18122);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__18123_SHARP_,p2__18124_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18123_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__18124_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__18125_SHARP_,p2__18126_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18125_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__18126_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field18127 = (function() {
var color_field18127 = null;
var color_field18127__1 = (function (name__5017__auto__){return color_field18127.call(null,name__5017__auto__,null);
});
var color_field18127__2 = (function (name__5017__auto__,value__5018__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__5017__auto__,value__5018__auto__);
});
color_field18127 = function(name__5017__auto__,value__5018__auto__){
switch(arguments.length){
case 1:
return color_field18127__1.call(this,name__5017__auto__);
case 2:
return color_field18127__2.call(this,name__5017__auto__,value__5018__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field18127.cljs$core$IFn$_invoke$arity$1 = color_field18127__1;
color_field18127.cljs$core$IFn$_invoke$arity$2 = color_field18127__2;
return color_field18127;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field18127);
/**
* Creates a date input field.
*/
sablono.core.date_field18128 = (function() {
var date_field18128 = null;
var date_field18128__1 = (function (name__5017__auto__){return date_field18128.call(null,name__5017__auto__,null);
});
var date_field18128__2 = (function (name__5017__auto__,value__5018__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__5017__auto__,value__5018__auto__);
});
date_field18128 = function(name__5017__auto__,value__5018__auto__){
switch(arguments.length){
case 1:
return date_field18128__1.call(this,name__5017__auto__);
case 2:
return date_field18128__2.call(this,name__5017__auto__,value__5018__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field18128.cljs$core$IFn$_invoke$arity$1 = date_field18128__1;
date_field18128.cljs$core$IFn$_invoke$arity$2 = date_field18128__2;
return date_field18128;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field18128);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field18129 = (function() {
var datetime_field18129 = null;
var datetime_field18129__1 = (function (name__5017__auto__){return datetime_field18129.call(null,name__5017__auto__,null);
});
var datetime_field18129__2 = (function (name__5017__auto__,value__5018__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__5017__auto__,value__5018__auto__);
});
datetime_field18129 = function(name__5017__auto__,value__5018__auto__){
switch(arguments.length){
case 1:
return datetime_field18129__1.call(this,name__5017__auto__);
case 2:
return datetime_field18129__2.call(this,name__5017__auto__,value__5018__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field18129.cljs$core$IFn$_invoke$arity$1 = datetime_field18129__1;
datetime_field18129.cljs$core$IFn$_invoke$arity$2 = datetime_field18129__2;
return datetime_field18129;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field18129);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field18130 = (function() {
var datetime_local_field18130 = null;
var datetime_local_field18130__1 = (function (name__5017__auto__){return datetime_local_field18130.call(null,name__5017__auto__,null);
});
var datetime_local_field18130__2 = (function (name__5017__auto__,value__5018__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__5017__auto__,value__5018__auto__);
});
datetime_local_field18130 = function(name__5017__auto__,value__5018__auto__){
switch(arguments.length){
case 1:
return datetime_local_field18130__1.call(this,name__5017__auto__);
case 2:
return datetime_local_field18130__2.call(this,name__5017__auto__,value__5018__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field18130.cljs$core$IFn$_invoke$arity$1 = datetime_local_field18130__1;
datetime_local_field18130.cljs$core$IFn$_invoke$arity$2 = datetime_local_field18130__2;
return datetime_local_field18130;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field18130);
/**
* Creates a email input field.
*/
sablono.core.email_field18131 = (function() {
var email_field18131 = null;
var email_field18131__1 = (function (name__5017__auto__){return email_field18131.call(null,name__5017__auto__,null);
});
var email_field18131__2 = (function (name__5017__auto__,value__5018__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__5017__auto__,value__5018__auto__);
});
email_field18131 = function(name__5017__auto__,value__5018__auto__){
switch(arguments.length){
case 1:
return email_field18131__1.call(this,name__5017__auto__);
case 2:
return email_field18131__2.call(this,name__5017__auto__,value__5018__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field18131.cljs$core$IFn$_invoke$arity$1 = email_field18131__1;
email_field18131.cljs$core$IFn$_invoke$arity$2 = email_field18131__2;
return email_field18131;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field18131);
/**
* Creates a file input field.
*/
sablono.core.file_field18132 = (function() {
var file_field18132 = null;
var file_field18132__1 = (function (name__5017__auto__){return file_field18132.call(null,name__5017__auto__,null);
});
var file_field18132__2 = (function (name__5017__auto__,value__5018__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__5017__auto__,value__5018__auto__);
});
file_field18132 = function(name__5017__auto__,value__5018__auto__){
switch(arguments.length){
case 1:
return file_field18132__1.call(this,name__5017__auto__);
case 2:
return file_field18132__2.call(this,name__5017__auto__,value__5018__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field18132.cljs$core$IFn$_invoke$arity$1 = file_field18132__1;
file_field18132.cljs$core$IFn$_invoke$arity$2 = file_field18132__2;
return file_field18132;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field18132);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field18133 = (function() {
var hidden_field18133 = null;
var hidden_field18133__1 = (function (name__5017__auto__){return hidden_field18133.call(null,name__5017__auto__,null);
});
var hidden_field18133__2 = (function (name__5017__auto__,value__5018__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__5017__auto__,value__5018__auto__);
});
hidden_field18133 = function(name__5017__auto__,value__5018__auto__){
switch(arguments.length){
case 1:
return hidden_field18133__1.call(this,name__5017__auto__);
case 2:
return hidden_field18133__2.call(this,name__5017__auto__,value__5018__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field18133.cljs$core$IFn$_invoke$arity$1 = hidden_field18133__1;
hidden_field18133.cljs$core$IFn$_invoke$arity$2 = hidden_field18133__2;
return hidden_field18133;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field18133);
/**
* Creates a month input field.
*/
sablono.core.month_field18134 = (function() {
var month_field18134 = null;
var month_field18134__1 = (function (name__5017__auto__){return month_field18134.call(null,name__5017__auto__,null);
});
var month_field18134__2 = (function (name__5017__auto__,value__5018__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__5017__auto__,value__5018__auto__);
});
month_field18134 = function(name__5017__auto__,value__5018__auto__){
switch(arguments.length){
case 1:
return month_field18134__1.call(this,name__5017__auto__);
case 2:
return month_field18134__2.call(this,name__5017__auto__,value__5018__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field18134.cljs$core$IFn$_invoke$arity$1 = month_field18134__1;
month_field18134.cljs$core$IFn$_invoke$arity$2 = month_field18134__2;
return month_field18134;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field18134);
/**
* Creates a number input field.
*/
sablono.core.number_field18135 = (function() {
var number_field18135 = null;
var number_field18135__1 = (function (name__5017__auto__){return number_field18135.call(null,name__5017__auto__,null);
});
var number_field18135__2 = (function (name__5017__auto__,value__5018__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__5017__auto__,value__5018__auto__);
});
number_field18135 = function(name__5017__auto__,value__5018__auto__){
switch(arguments.length){
case 1:
return number_field18135__1.call(this,name__5017__auto__);
case 2:
return number_field18135__2.call(this,name__5017__auto__,value__5018__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field18135.cljs$core$IFn$_invoke$arity$1 = number_field18135__1;
number_field18135.cljs$core$IFn$_invoke$arity$2 = number_field18135__2;
return number_field18135;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field18135);
/**
* Creates a password input field.
*/
sablono.core.password_field18136 = (function() {
var password_field18136 = null;
var password_field18136__1 = (function (name__5017__auto__){return password_field18136.call(null,name__5017__auto__,null);
});
var password_field18136__2 = (function (name__5017__auto__,value__5018__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__5017__auto__,value__5018__auto__);
});
password_field18136 = function(name__5017__auto__,value__5018__auto__){
switch(arguments.length){
case 1:
return password_field18136__1.call(this,name__5017__auto__);
case 2:
return password_field18136__2.call(this,name__5017__auto__,value__5018__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field18136.cljs$core$IFn$_invoke$arity$1 = password_field18136__1;
password_field18136.cljs$core$IFn$_invoke$arity$2 = password_field18136__2;
return password_field18136;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field18136);
/**
* Creates a range input field.
*/
sablono.core.range_field18137 = (function() {
var range_field18137 = null;
var range_field18137__1 = (function (name__5017__auto__){return range_field18137.call(null,name__5017__auto__,null);
});
var range_field18137__2 = (function (name__5017__auto__,value__5018__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__5017__auto__,value__5018__auto__);
});
range_field18137 = function(name__5017__auto__,value__5018__auto__){
switch(arguments.length){
case 1:
return range_field18137__1.call(this,name__5017__auto__);
case 2:
return range_field18137__2.call(this,name__5017__auto__,value__5018__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field18137.cljs$core$IFn$_invoke$arity$1 = range_field18137__1;
range_field18137.cljs$core$IFn$_invoke$arity$2 = range_field18137__2;
return range_field18137;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field18137);
/**
* Creates a search input field.
*/
sablono.core.search_field18138 = (function() {
var search_field18138 = null;
var search_field18138__1 = (function (name__5017__auto__){return search_field18138.call(null,name__5017__auto__,null);
});
var search_field18138__2 = (function (name__5017__auto__,value__5018__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__5017__auto__,value__5018__auto__);
});
search_field18138 = function(name__5017__auto__,value__5018__auto__){
switch(arguments.length){
case 1:
return search_field18138__1.call(this,name__5017__auto__);
case 2:
return search_field18138__2.call(this,name__5017__auto__,value__5018__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field18138.cljs$core$IFn$_invoke$arity$1 = search_field18138__1;
search_field18138.cljs$core$IFn$_invoke$arity$2 = search_field18138__2;
return search_field18138;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field18138);
/**
* Creates a tel input field.
*/
sablono.core.tel_field18139 = (function() {
var tel_field18139 = null;
var tel_field18139__1 = (function (name__5017__auto__){return tel_field18139.call(null,name__5017__auto__,null);
});
var tel_field18139__2 = (function (name__5017__auto__,value__5018__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__5017__auto__,value__5018__auto__);
});
tel_field18139 = function(name__5017__auto__,value__5018__auto__){
switch(arguments.length){
case 1:
return tel_field18139__1.call(this,name__5017__auto__);
case 2:
return tel_field18139__2.call(this,name__5017__auto__,value__5018__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field18139.cljs$core$IFn$_invoke$arity$1 = tel_field18139__1;
tel_field18139.cljs$core$IFn$_invoke$arity$2 = tel_field18139__2;
return tel_field18139;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field18139);
/**
* Creates a text input field.
*/
sablono.core.text_field18140 = (function() {
var text_field18140 = null;
var text_field18140__1 = (function (name__5017__auto__){return text_field18140.call(null,name__5017__auto__,null);
});
var text_field18140__2 = (function (name__5017__auto__,value__5018__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__5017__auto__,value__5018__auto__);
});
text_field18140 = function(name__5017__auto__,value__5018__auto__){
switch(arguments.length){
case 1:
return text_field18140__1.call(this,name__5017__auto__);
case 2:
return text_field18140__2.call(this,name__5017__auto__,value__5018__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field18140.cljs$core$IFn$_invoke$arity$1 = text_field18140__1;
text_field18140.cljs$core$IFn$_invoke$arity$2 = text_field18140__2;
return text_field18140;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field18140);
/**
* Creates a time input field.
*/
sablono.core.time_field18141 = (function() {
var time_field18141 = null;
var time_field18141__1 = (function (name__5017__auto__){return time_field18141.call(null,name__5017__auto__,null);
});
var time_field18141__2 = (function (name__5017__auto__,value__5018__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__5017__auto__,value__5018__auto__);
});
time_field18141 = function(name__5017__auto__,value__5018__auto__){
switch(arguments.length){
case 1:
return time_field18141__1.call(this,name__5017__auto__);
case 2:
return time_field18141__2.call(this,name__5017__auto__,value__5018__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field18141.cljs$core$IFn$_invoke$arity$1 = time_field18141__1;
time_field18141.cljs$core$IFn$_invoke$arity$2 = time_field18141__2;
return time_field18141;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field18141);
/**
* Creates a url input field.
*/
sablono.core.url_field18142 = (function() {
var url_field18142 = null;
var url_field18142__1 = (function (name__5017__auto__){return url_field18142.call(null,name__5017__auto__,null);
});
var url_field18142__2 = (function (name__5017__auto__,value__5018__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__5017__auto__,value__5018__auto__);
});
url_field18142 = function(name__5017__auto__,value__5018__auto__){
switch(arguments.length){
case 1:
return url_field18142__1.call(this,name__5017__auto__);
case 2:
return url_field18142__2.call(this,name__5017__auto__,value__5018__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field18142.cljs$core$IFn$_invoke$arity$1 = url_field18142__1;
url_field18142.cljs$core$IFn$_invoke$arity$2 = url_field18142__2;
return url_field18142;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field18142);
/**
* Creates a week input field.
*/
sablono.core.week_field18143 = (function() {
var week_field18143 = null;
var week_field18143__1 = (function (name__5017__auto__){return week_field18143.call(null,name__5017__auto__,null);
});
var week_field18143__2 = (function (name__5017__auto__,value__5018__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__5017__auto__,value__5018__auto__);
});
week_field18143 = function(name__5017__auto__,value__5018__auto__){
switch(arguments.length){
case 1:
return week_field18143__1.call(this,name__5017__auto__);
case 2:
return week_field18143__2.call(this,name__5017__auto__,value__5018__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field18143.cljs$core$IFn$_invoke$arity$1 = week_field18143__1;
week_field18143.cljs$core$IFn$_invoke$arity$2 = week_field18143__2;
return week_field18143;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field18143);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box18144 = (function() {
var check_box18144 = null;
var check_box18144__1 = (function (name){return check_box18144.call(null,name,null);
});
var check_box18144__2 = (function (name,checked_QMARK_){return check_box18144.call(null,name,checked_QMARK_,"true");
});
var check_box18144__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box18144 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box18144__1.call(this,name);
case 2:
return check_box18144__2.call(this,name,checked_QMARK_);
case 3:
return check_box18144__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box18144.cljs$core$IFn$_invoke$arity$1 = check_box18144__1;
check_box18144.cljs$core$IFn$_invoke$arity$2 = check_box18144__2;
check_box18144.cljs$core$IFn$_invoke$arity$3 = check_box18144__3;
return check_box18144;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box18144);
/**
* Creates a radio button.
*/
sablono.core.radio_button18145 = (function() {
var radio_button18145 = null;
var radio_button18145__1 = (function (group){return radio_button18145.call(null,group,null);
});
var radio_button18145__2 = (function (group,checked_QMARK_){return radio_button18145.call(null,group,checked_QMARK_,"true");
});
var radio_button18145__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button18145 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button18145__1.call(this,group);
case 2:
return radio_button18145__2.call(this,group,checked_QMARK_);
case 3:
return radio_button18145__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button18145.cljs$core$IFn$_invoke$arity$1 = radio_button18145__1;
radio_button18145.cljs$core$IFn$_invoke$arity$2 = radio_button18145__2;
radio_button18145.cljs$core$IFn$_invoke$arity$3 = radio_button18145__3;
return radio_button18145;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button18145);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options18146 = (function() {
var select_options18146 = null;
var select_options18146__1 = (function (coll){return select_options18146.call(null,coll,null);
});
var select_options18146__2 = (function (coll,selected){var iter__4267__auto__ = (function iter__18155(s__18156){return (new cljs.core.LazySeq(null,(function (){var s__18156__$1 = s__18156;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18156__$1);if(temp__4126__auto__)
{var s__18156__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18156__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__18156__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__18158 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__18157 = (0);while(true){
if((i__18157 < size__4266__auto__))
{var x = cljs.core._nth.call(null,c__4265__auto__,i__18157);cljs.core.chunk_append.call(null,b__18158,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18161 = x;var text = cljs.core.nth.call(null,vec__18161,(0),null);var val = cljs.core.nth.call(null,vec__18161,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__18161,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options18146.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__18163 = (i__18157 + (1));
i__18157 = G__18163;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18158),iter__18155.call(null,cljs.core.chunk_rest.call(null,s__18156__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18158),null);
}
} else
{var x = cljs.core.first.call(null,s__18156__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18162 = x;var text = cljs.core.nth.call(null,vec__18162,(0),null);var val = cljs.core.nth.call(null,vec__18162,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__18162,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options18146.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__18155.call(null,cljs.core.rest.call(null,s__18156__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4267__auto__.call(null,coll);
});
select_options18146 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options18146__1.call(this,coll);
case 2:
return select_options18146__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options18146.cljs$core$IFn$_invoke$arity$1 = select_options18146__1;
select_options18146.cljs$core$IFn$_invoke$arity$2 = select_options18146__2;
return select_options18146;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options18146);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down18164 = (function() {
var drop_down18164 = null;
var drop_down18164__2 = (function (name,options){return drop_down18164.call(null,name,options,null);
});
var drop_down18164__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down18164 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down18164__2.call(this,name,options);
case 3:
return drop_down18164__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down18164.cljs$core$IFn$_invoke$arity$2 = drop_down18164__2;
drop_down18164.cljs$core$IFn$_invoke$arity$3 = drop_down18164__3;
return drop_down18164;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down18164);
/**
* Creates a text area element.
*/
sablono.core.text_area18165 = (function() {
var text_area18165 = null;
var text_area18165__1 = (function (name){return text_area18165.call(null,name,null);
});
var text_area18165__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area18165 = function(name,value){
switch(arguments.length){
case 1:
return text_area18165__1.call(this,name);
case 2:
return text_area18165__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area18165.cljs$core$IFn$_invoke$arity$1 = text_area18165__1;
text_area18165.cljs$core$IFn$_invoke$arity$2 = text_area18165__2;
return text_area18165;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area18165);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label18166 = (function label18166(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label18166);
/**
* Creates a submit button.
*/
sablono.core.submit_button18167 = (function submit_button18167(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button18167);
/**
* Creates a form reset button.
*/
sablono.core.reset_button18168 = (function reset_button18168(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button18168);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to18169 = (function() { 
var form_to18169__delegate = function (p__18170,body){var vec__18172 = p__18170;var method = cljs.core.nth.call(null,vec__18172,(0),null);var action = cljs.core.nth.call(null,vec__18172,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to18169 = function (p__18170,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to18169__delegate.call(this,p__18170,body);};
form_to18169.cljs$lang$maxFixedArity = 1;
form_to18169.cljs$lang$applyTo = (function (arglist__18173){
var p__18170 = cljs.core.first(arglist__18173);
var body = cljs.core.rest(arglist__18173);
return form_to18169__delegate(p__18170,body);
});
form_to18169.cljs$core$IFn$_invoke$arity$variadic = form_to18169__delegate;
return form_to18169;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to18169);

//# sourceMappingURL=core.js.map