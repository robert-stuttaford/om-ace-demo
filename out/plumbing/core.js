// Compiled by ClojureScript 0.0-2280
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__14032__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__14032 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__14032__delegate.call(this,m,k,f,x1,x2,xs);};
G__14032.cljs$lang$maxFixedArity = 5;
G__14032.cljs$lang$applyTo = (function (arglist__14033){
var m = cljs.core.first(arglist__14033);
arglist__14033 = cljs.core.next(arglist__14033);
var k = cljs.core.first(arglist__14033);
arglist__14033 = cljs.core.next(arglist__14033);
var f = cljs.core.first(arglist__14033);
arglist__14033 = cljs.core.next(arglist__14033);
var x1 = cljs.core.first(arglist__14033);
arglist__14033 = cljs.core.next(arglist__14033);
var x2 = cljs.core.first(arglist__14033);
var xs = cljs.core.rest(arglist__14033);
return G__14032__delegate(m,k,f,x1,x2,xs);
});
G__14032.cljs$core$IFn$_invoke$arity$variadic = G__14032__delegate;
return G__14032;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{var m_atom__7458__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__14042_14048 = cljs.core.seq.call(null,m);var chunk__14043_14049 = null;var count__14044_14050 = (0);var i__14045_14051 = (0);while(true){
if((i__14045_14051 < count__14044_14050))
{var vec__14046_14052 = cljs.core._nth.call(null,chunk__14043_14049,i__14045_14051);var k_14053 = cljs.core.nth.call(null,vec__14046_14052,(0),null);var v_14054 = cljs.core.nth.call(null,vec__14046_14052,(1),null);var m14041_14055 = cljs.core.deref.call(null,m_atom__7458__auto__);cljs.core.reset_BANG_.call(null,m_atom__7458__auto__,cljs.core.assoc_BANG_.call(null,m14041_14055,k_14053,f.call(null,v_14054)));
{
var G__14056 = seq__14042_14048;
var G__14057 = chunk__14043_14049;
var G__14058 = count__14044_14050;
var G__14059 = (i__14045_14051 + (1));
seq__14042_14048 = G__14056;
chunk__14043_14049 = G__14057;
count__14044_14050 = G__14058;
i__14045_14051 = G__14059;
continue;
}
} else
{var temp__4126__auto___14060 = cljs.core.seq.call(null,seq__14042_14048);if(temp__4126__auto___14060)
{var seq__14042_14061__$1 = temp__4126__auto___14060;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14042_14061__$1))
{var c__4298__auto___14062 = cljs.core.chunk_first.call(null,seq__14042_14061__$1);{
var G__14063 = cljs.core.chunk_rest.call(null,seq__14042_14061__$1);
var G__14064 = c__4298__auto___14062;
var G__14065 = cljs.core.count.call(null,c__4298__auto___14062);
var G__14066 = (0);
seq__14042_14048 = G__14063;
chunk__14043_14049 = G__14064;
count__14044_14050 = G__14065;
i__14045_14051 = G__14066;
continue;
}
} else
{var vec__14047_14067 = cljs.core.first.call(null,seq__14042_14061__$1);var k_14068 = cljs.core.nth.call(null,vec__14047_14067,(0),null);var v_14069 = cljs.core.nth.call(null,vec__14047_14067,(1),null);var m14041_14070 = cljs.core.deref.call(null,m_atom__7458__auto__);cljs.core.reset_BANG_.call(null,m_atom__7458__auto__,cljs.core.assoc_BANG_.call(null,m14041_14070,k_14068,f.call(null,v_14069)));
{
var G__14071 = cljs.core.next.call(null,seq__14042_14061__$1);
var G__14072 = null;
var G__14073 = (0);
var G__14074 = (0);
seq__14042_14048 = G__14071;
chunk__14043_14049 = G__14072;
count__14044_14050 = G__14073;
i__14045_14051 = G__14074;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7458__auto__));
} else
{return null;
}
}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__7458__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__14083_14089 = cljs.core.seq.call(null,m);var chunk__14084_14090 = null;var count__14085_14091 = (0);var i__14086_14092 = (0);while(true){
if((i__14086_14092 < count__14085_14091))
{var vec__14087_14093 = cljs.core._nth.call(null,chunk__14084_14090,i__14086_14092);var k_14094 = cljs.core.nth.call(null,vec__14087_14093,(0),null);var v_14095 = cljs.core.nth.call(null,vec__14087_14093,(1),null);var m14082_14096 = cljs.core.deref.call(null,m_atom__7458__auto__);cljs.core.reset_BANG_.call(null,m_atom__7458__auto__,cljs.core.assoc_BANG_.call(null,m14082_14096,f.call(null,k_14094),v_14095));
{
var G__14097 = seq__14083_14089;
var G__14098 = chunk__14084_14090;
var G__14099 = count__14085_14091;
var G__14100 = (i__14086_14092 + (1));
seq__14083_14089 = G__14097;
chunk__14084_14090 = G__14098;
count__14085_14091 = G__14099;
i__14086_14092 = G__14100;
continue;
}
} else
{var temp__4126__auto___14101 = cljs.core.seq.call(null,seq__14083_14089);if(temp__4126__auto___14101)
{var seq__14083_14102__$1 = temp__4126__auto___14101;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14083_14102__$1))
{var c__4298__auto___14103 = cljs.core.chunk_first.call(null,seq__14083_14102__$1);{
var G__14104 = cljs.core.chunk_rest.call(null,seq__14083_14102__$1);
var G__14105 = c__4298__auto___14103;
var G__14106 = cljs.core.count.call(null,c__4298__auto___14103);
var G__14107 = (0);
seq__14083_14089 = G__14104;
chunk__14084_14090 = G__14105;
count__14085_14091 = G__14106;
i__14086_14092 = G__14107;
continue;
}
} else
{var vec__14088_14108 = cljs.core.first.call(null,seq__14083_14102__$1);var k_14109 = cljs.core.nth.call(null,vec__14088_14108,(0),null);var v_14110 = cljs.core.nth.call(null,vec__14088_14108,(1),null);var m14082_14111 = cljs.core.deref.call(null,m_atom__7458__auto__);cljs.core.reset_BANG_.call(null,m_atom__7458__auto__,cljs.core.assoc_BANG_.call(null,m14082_14111,f.call(null,k_14109),v_14110));
{
var G__14112 = cljs.core.next.call(null,seq__14083_14102__$1);
var G__14113 = null;
var G__14114 = (0);
var G__14115 = (0);
seq__14083_14089 = G__14112;
chunk__14084_14090 = G__14113;
count__14085_14091 = G__14114;
i__14086_14092 = G__14115;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7458__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__7458__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__14122_14126 = cljs.core.seq.call(null,ks);var chunk__14123_14127 = null;var count__14124_14128 = (0);var i__14125_14129 = (0);while(true){
if((i__14125_14129 < count__14124_14128))
{var k_14130 = cljs.core._nth.call(null,chunk__14123_14127,i__14125_14129);var m14121_14131 = cljs.core.deref.call(null,m_atom__7458__auto__);cljs.core.reset_BANG_.call(null,m_atom__7458__auto__,cljs.core.assoc_BANG_.call(null,m14121_14131,k_14130,f.call(null,k_14130)));
{
var G__14132 = seq__14122_14126;
var G__14133 = chunk__14123_14127;
var G__14134 = count__14124_14128;
var G__14135 = (i__14125_14129 + (1));
seq__14122_14126 = G__14132;
chunk__14123_14127 = G__14133;
count__14124_14128 = G__14134;
i__14125_14129 = G__14135;
continue;
}
} else
{var temp__4126__auto___14136 = cljs.core.seq.call(null,seq__14122_14126);if(temp__4126__auto___14136)
{var seq__14122_14137__$1 = temp__4126__auto___14136;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14122_14137__$1))
{var c__4298__auto___14138 = cljs.core.chunk_first.call(null,seq__14122_14137__$1);{
var G__14139 = cljs.core.chunk_rest.call(null,seq__14122_14137__$1);
var G__14140 = c__4298__auto___14138;
var G__14141 = cljs.core.count.call(null,c__4298__auto___14138);
var G__14142 = (0);
seq__14122_14126 = G__14139;
chunk__14123_14127 = G__14140;
count__14124_14128 = G__14141;
i__14125_14129 = G__14142;
continue;
}
} else
{var k_14143 = cljs.core.first.call(null,seq__14122_14137__$1);var m14121_14144 = cljs.core.deref.call(null,m_atom__7458__auto__);cljs.core.reset_BANG_.call(null,m_atom__7458__auto__,cljs.core.assoc_BANG_.call(null,m14121_14144,k_14143,f.call(null,k_14143)));
{
var G__14145 = cljs.core.next.call(null,seq__14122_14137__$1);
var G__14146 = null;
var G__14147 = (0);
var G__14148 = (0);
seq__14122_14126 = G__14145;
chunk__14123_14127 = G__14146;
count__14124_14128 = G__14147;
i__14125_14129 = G__14148;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7458__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__7458__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__14155_14159 = cljs.core.seq.call(null,vs);var chunk__14156_14160 = null;var count__14157_14161 = (0);var i__14158_14162 = (0);while(true){
if((i__14158_14162 < count__14157_14161))
{var v_14163 = cljs.core._nth.call(null,chunk__14156_14160,i__14158_14162);var m14154_14164 = cljs.core.deref.call(null,m_atom__7458__auto__);cljs.core.reset_BANG_.call(null,m_atom__7458__auto__,cljs.core.assoc_BANG_.call(null,m14154_14164,f.call(null,v_14163),v_14163));
{
var G__14165 = seq__14155_14159;
var G__14166 = chunk__14156_14160;
var G__14167 = count__14157_14161;
var G__14168 = (i__14158_14162 + (1));
seq__14155_14159 = G__14165;
chunk__14156_14160 = G__14166;
count__14157_14161 = G__14167;
i__14158_14162 = G__14168;
continue;
}
} else
{var temp__4126__auto___14169 = cljs.core.seq.call(null,seq__14155_14159);if(temp__4126__auto___14169)
{var seq__14155_14170__$1 = temp__4126__auto___14169;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14155_14170__$1))
{var c__4298__auto___14171 = cljs.core.chunk_first.call(null,seq__14155_14170__$1);{
var G__14172 = cljs.core.chunk_rest.call(null,seq__14155_14170__$1);
var G__14173 = c__4298__auto___14171;
var G__14174 = cljs.core.count.call(null,c__4298__auto___14171);
var G__14175 = (0);
seq__14155_14159 = G__14172;
chunk__14156_14160 = G__14173;
count__14157_14161 = G__14174;
i__14158_14162 = G__14175;
continue;
}
} else
{var v_14176 = cljs.core.first.call(null,seq__14155_14170__$1);var m14154_14177 = cljs.core.deref.call(null,m_atom__7458__auto__);cljs.core.reset_BANG_.call(null,m_atom__7458__auto__,cljs.core.assoc_BANG_.call(null,m14154_14177,f.call(null,v_14176),v_14176));
{
var G__14178 = cljs.core.next.call(null,seq__14155_14170__$1);
var G__14179 = null;
var G__14180 = (0);
var G__14181 = (0);
seq__14155_14159 = G__14178;
chunk__14156_14160 = G__14179;
count__14157_14161 = G__14180;
i__14158_14162 = G__14181;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7458__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__14182){var vec__14184 = p__14182;var k = cljs.core.nth.call(null,vec__14184,(0),null);var ks = cljs.core.nthnext.call(null,vec__14184,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3530__auto__ = ks;if(and__3530__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__3530__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__7458__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__14193_14199 = cljs.core.seq.call(null,x);var chunk__14194_14200 = null;var count__14195_14201 = (0);var i__14196_14202 = (0);while(true){
if((i__14196_14202 < count__14195_14201))
{var vec__14197_14203 = cljs.core._nth.call(null,chunk__14194_14200,i__14196_14202);var k_14204 = cljs.core.nth.call(null,vec__14197_14203,(0),null);var v_14205 = cljs.core.nth.call(null,vec__14197_14203,(1),null);var m14192_14206 = cljs.core.deref.call(null,m_atom__7458__auto__);cljs.core.reset_BANG_.call(null,m_atom__7458__auto__,cljs.core.assoc_BANG_.call(null,m14192_14206,((typeof k_14204 === 'string')?cljs.core.keyword.call(null,k_14204):k_14204),keywordize_map.call(null,v_14205)));
{
var G__14207 = seq__14193_14199;
var G__14208 = chunk__14194_14200;
var G__14209 = count__14195_14201;
var G__14210 = (i__14196_14202 + (1));
seq__14193_14199 = G__14207;
chunk__14194_14200 = G__14208;
count__14195_14201 = G__14209;
i__14196_14202 = G__14210;
continue;
}
} else
{var temp__4126__auto___14211 = cljs.core.seq.call(null,seq__14193_14199);if(temp__4126__auto___14211)
{var seq__14193_14212__$1 = temp__4126__auto___14211;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14193_14212__$1))
{var c__4298__auto___14213 = cljs.core.chunk_first.call(null,seq__14193_14212__$1);{
var G__14214 = cljs.core.chunk_rest.call(null,seq__14193_14212__$1);
var G__14215 = c__4298__auto___14213;
var G__14216 = cljs.core.count.call(null,c__4298__auto___14213);
var G__14217 = (0);
seq__14193_14199 = G__14214;
chunk__14194_14200 = G__14215;
count__14195_14201 = G__14216;
i__14196_14202 = G__14217;
continue;
}
} else
{var vec__14198_14218 = cljs.core.first.call(null,seq__14193_14212__$1);var k_14219 = cljs.core.nth.call(null,vec__14198_14218,(0),null);var v_14220 = cljs.core.nth.call(null,vec__14198_14218,(1),null);var m14192_14221 = cljs.core.deref.call(null,m_atom__7458__auto__);cljs.core.reset_BANG_.call(null,m_atom__7458__auto__,cljs.core.assoc_BANG_.call(null,m14192_14221,((typeof k_14219 === 'string')?cljs.core.keyword.call(null,k_14219):k_14219),keywordize_map.call(null,v_14220)));
{
var G__14222 = cljs.core.next.call(null,seq__14193_14212__$1);
var G__14223 = null;
var G__14224 = (0);
var G__14225 = (0);
seq__14193_14199 = G__14222;
chunk__14194_14200 = G__14223;
count__14195_14201 = G__14224;
i__14196_14202 = G__14225;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__7458__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return x;
} else
{return null;
}
}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__7527__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__7527__auto__);
} else
{var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__14226 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__14227 = cljs.core.next.call(null,ks);
m = G__14226;
ks = G__14227;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__3542__auto__ = m;if(cljs.core.truth_(or__3542__auto__))
{return or__3542__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4267__auto__ = (function iter__14236(s__14237){return (new cljs.core.LazySeq(null,(function (){var s__14237__$1 = s__14237;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14237__$1);if(temp__4126__auto__)
{var s__14237__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14237__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__14237__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__14239 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__14238 = (0);while(true){
if((i__14238 < size__4266__auto__))
{var vec__14242 = cljs.core._nth.call(null,c__4265__auto__,i__14238);var k = cljs.core.nth.call(null,vec__14242,(0),null);var v = cljs.core.nth.call(null,vec__14242,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__14239,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__14244 = (i__14238 + (1));
i__14238 = G__14244;
continue;
}
} else
{{
var G__14245 = (i__14238 + (1));
i__14238 = G__14245;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14239),iter__14236.call(null,cljs.core.chunk_rest.call(null,s__14237__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14239),null);
}
} else
{var vec__14243 = cljs.core.first.call(null,s__14237__$2);var k = cljs.core.nth.call(null,vec__14243,(0),null);var v = cljs.core.nth.call(null,vec__14243,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__14236.call(null,cljs.core.rest.call(null,s__14237__$2)));
} else
{{
var G__14246 = cljs.core.rest.call(null,s__14237__$2);
s__14237__$1 = G__14246;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4267__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__14247){
var m = cljs.core.first(arglist__14247);
var kvs = cljs.core.rest(arglist__14247);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__14248){
var m = cljs.core.first(arglist__14248);
arglist__14248 = cljs.core.next(arglist__14248);
var key_seq = cljs.core.first(arglist__14248);
arglist__14248 = cljs.core.next(arglist__14248);
var f = cljs.core.first(arglist__14248);
var args = cljs.core.rest(arglist__14248);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next.call(null,s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq.call(null,xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4267__auto__ = ((function (s){
return (function iter__14253(s__14254){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__14254__$1 = s__14254;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14254__$1);if(temp__4126__auto__)
{var s__14254__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14254__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__14254__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__14256 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__14255 = (0);while(true){
if((i__14255 < size__4266__auto__))
{var x = cljs.core._nth.call(null,c__4265__auto__,i__14255);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__14256,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__14257 = (i__14255 + (1));
i__14255 = G__14257;
continue;
}
} else
{{
var G__14258 = (i__14255 + (1));
i__14255 = G__14258;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14256),iter__14253.call(null,cljs.core.chunk_rest.call(null,s__14254__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14256),null);
}
} else
{var x = cljs.core.first.call(null,s__14254__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__14253.call(null,cljs.core.rest.call(null,s__14254__$2)));
} else
{{
var G__14259 = cljs.core.rest.call(null,s__14254__$2);
s__14254__$1 = G__14259;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__4267__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__14260){
var colls = cljs.core.seq(arglist__14260);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__14261__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__14262 = conj_when.call(null,coll,x);
var G__14263 = cljs.core.first.call(null,xs);
var G__14264 = cljs.core.next.call(null,xs);
coll = G__14262;
x = G__14263;
xs = G__14264;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__14261 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14261__delegate.call(this,coll,x,xs);};
G__14261.cljs$lang$maxFixedArity = 2;
G__14261.cljs$lang$applyTo = (function (arglist__14265){
var coll = cljs.core.first(arglist__14265);
arglist__14265 = cljs.core.next(arglist__14265);
var x = cljs.core.first(arglist__14265);
var xs = cljs.core.rest(arglist__14265);
return G__14261__delegate(coll,x,xs);
});
G__14261.cljs$core$IFn$_invoke$arity$variadic = G__14261__delegate;
return G__14261;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__14267__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__14266_SHARP_){return cljs.core.apply.call(null,f,p1__14266_SHARP_,args);
}));
};
var G__14267 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14267__delegate.call(this,a,f,args);};
G__14267.cljs$lang$maxFixedArity = 2;
G__14267.cljs$lang$applyTo = (function (arglist__14268){
var a = cljs.core.first(arglist__14268);
arglist__14268 = cljs.core.next(arglist__14268);
var f = cljs.core.first(arglist__14268);
var args = cljs.core.rest(arglist__14268);
return G__14267__delegate(a,f,args);
});
G__14267.cljs$core$IFn$_invoke$arity$variadic = G__14267__delegate;
return G__14267;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__14269__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__14269 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14269__delegate.call(this,f,arg,args);};
G__14269.cljs$lang$maxFixedArity = 2;
G__14269.cljs$lang$applyTo = (function (arglist__14270){
var f = cljs.core.first(arglist__14270);
arglist__14270 = cljs.core.next(arglist__14270);
var arg = cljs.core.first(arglist__14270);
var args = cljs.core.rest(arglist__14270);
return G__14269__delegate(f,arg,args);
});
G__14269.cljs$core$IFn$_invoke$arity$variadic = G__14269__delegate;
return G__14269;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map