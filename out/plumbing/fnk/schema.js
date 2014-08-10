// Compiled by ClojureScript 0.0-2280
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__5987__5988__auto__){var G__13446 = p1__5987__5988__auto__;if(G__13446)
{var bit__4192__auto__ = null;if(cljs.core.truth_((function (){var or__3542__auto__ = bit__4192__auto__;if(cljs.core.truth_(or__3542__auto__))
{return or__3542__auto__;
} else
{return G__13446.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__13446.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__13446);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__13446);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__13447_SHARP_){return (cljs.core.val.call(null,p1__13447_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__13449 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__13449,(0),null);var v = cljs.core.nth.call(null,vec__13449,(1),null);var p = vec__13449;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return schema.core.both.call(null,s1,s2);
} else
{return null;
}
}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___13455 = schema.utils.use_fn_validation;var output_schema13450_13456 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema13451_13457 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker13452_13458 = schema.core.checker.call(null,input_schema13451_13457);var output_checker13453_13459 = schema.core.checker.call(null,output_schema13450_13456);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___13455,output_schema13450_13456,input_schema13451_13457,input_checker13452_13458,output_checker13453_13459){
return (function unwrap_schema_form_key(G__13454){var validate__5957__auto__ = ufv___13455.get_cell();if(cljs.core.truth_(validate__5957__auto__))
{var args__5958__auto___13460 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13454], null);var temp__4126__auto___13461 = input_checker13452_13458.call(null,args__5958__auto___13460);if(cljs.core.truth_(temp__4126__auto___13461))
{var error__5959__auto___13462 = temp__4126__auto___13461;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__5959__auto___13462)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema13451_13457,new cljs.core.Keyword(null,"value","value",305978217),args__5958__auto___13460,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___13462], null));
} else
{}
} else
{}
var o__5960__auto__ = (function (){var k = G__13454;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__5957__auto__))
{var temp__4126__auto___13463 = output_checker13453_13459.call(null,o__5960__auto__);if(cljs.core.truth_(temp__4126__auto___13463))
{var error__5959__auto___13464 = temp__4126__auto___13463;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__5959__auto___13464)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema13450_13456,new cljs.core.Keyword(null,"value","value",305978217),o__5960__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___13464], null));
} else
{}
} else
{}
return o__5960__auto__;
});})(ufv___13455,output_schema13450_13456,input_schema13451_13457,input_checker13452_13458,output_checker13453_13459))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema13450_13456,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13451_13457], null)));
var ufv___13470 = schema.utils.use_fn_validation;var output_schema13465_13471 = schema.core.Any;var input_schema13466_13472 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker13467_13473 = schema.core.checker.call(null,input_schema13466_13472);var output_checker13468_13474 = schema.core.checker.call(null,output_schema13465_13471);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___13470,output_schema13465_13471,input_schema13466_13472,input_checker13467_13473,output_checker13468_13474){
return (function explicit_schema_key_map(G__13469){var validate__5957__auto__ = ufv___13470.get_cell();if(cljs.core.truth_(validate__5957__auto__))
{var args__5958__auto___13475 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13469], null);var temp__4126__auto___13476 = input_checker13467_13473.call(null,args__5958__auto___13475);if(cljs.core.truth_(temp__4126__auto___13476))
{var error__5959__auto___13477 = temp__4126__auto___13476;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__5959__auto___13477)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema13466_13472,new cljs.core.Keyword(null,"value","value",305978217),args__5958__auto___13475,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___13477], null));
} else
{}
} else
{}
var o__5960__auto__ = (function (){var s = G__13469;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__5957__auto__))
{var temp__4126__auto___13478 = output_checker13468_13474.call(null,o__5960__auto__);if(cljs.core.truth_(temp__4126__auto___13478))
{var error__5959__auto___13479 = temp__4126__auto___13478;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__5959__auto___13479)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema13465_13471,new cljs.core.Keyword(null,"value","value",305978217),o__5960__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___13479], null));
} else
{}
} else
{}
return o__5960__auto__;
});})(ufv___13470,output_schema13465_13471,input_schema13466_13472,input_checker13467_13473,output_checker13468_13474))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema13465_13471,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13466_13472], null)));
var ufv___13485 = schema.utils.use_fn_validation;var output_schema13480_13486 = schema.core.Any;var input_schema13481_13487 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker13482_13488 = schema.core.checker.call(null,input_schema13481_13487);var output_checker13483_13489 = schema.core.checker.call(null,output_schema13480_13486);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___13485,output_schema13480_13486,input_schema13481_13487,input_checker13482_13488,output_checker13483_13489){
return (function split_schema_keys(G__13484){var validate__5957__auto__ = ufv___13485.get_cell();if(cljs.core.truth_(validate__5957__auto__))
{var args__5958__auto___13490 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13484], null);var temp__4126__auto___13491 = input_checker13482_13488.call(null,args__5958__auto___13490);if(cljs.core.truth_(temp__4126__auto___13491))
{var error__5959__auto___13492 = temp__4126__auto___13491;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__5959__auto___13492)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema13481_13487,new cljs.core.Keyword(null,"value","value",305978217),args__5958__auto___13490,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___13492], null));
} else
{}
} else
{}
var o__5960__auto__ = (function (){var s = G__13484;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__5957__auto__))
{var temp__4126__auto___13493 = output_checker13483_13489.call(null,o__5960__auto__);if(cljs.core.truth_(temp__4126__auto___13493))
{var error__5959__auto___13494 = temp__4126__auto___13493;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__5959__auto___13494)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema13480_13486,new cljs.core.Keyword(null,"value","value",305978217),o__5960__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___13494], null));
} else
{}
} else
{}
return o__5960__auto__;
});})(ufv___13485,output_schema13480_13486,input_schema13481_13487,input_checker13482_13488,output_checker13483_13489))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema13480_13486,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13481_13487], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__13498){var vec__13499 = p__13498;var k = cljs.core.nth.call(null,vec__13499,(0),null);var v = cljs.core.nth.call(null,vec__13499,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__13500 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__13500,(0),null);var ov = cljs.core.nth.call(null,vec__13500,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__13501){
var key_project = cljs.core.first(arglist__13501);
arglist__13501 = cljs.core.next(arglist__13501);
var key_combine = cljs.core.first(arglist__13501);
arglist__13501 = cljs.core.next(arglist__13501);
var val_combine = cljs.core.first(arglist__13501);
var maps = cljs.core.rest(arglist__13501);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___13509 = schema.utils.use_fn_validation;var output_schema13503_13510 = plumbing.fnk.schema.InputSchema;var input_schema13504_13511 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker13505_13512 = schema.core.checker.call(null,input_schema13504_13511);var output_checker13506_13513 = schema.core.checker.call(null,output_schema13503_13510);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___13509,output_schema13503_13510,input_schema13504_13511,input_checker13505_13512,output_checker13506_13513){
return (function union_input_schemata(G__13507,G__13508){var validate__5957__auto__ = ufv___13509.get_cell();if(cljs.core.truth_(validate__5957__auto__))
{var args__5958__auto___13514 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13507,G__13508], null);var temp__4126__auto___13515 = input_checker13505_13512.call(null,args__5958__auto___13514);if(cljs.core.truth_(temp__4126__auto___13515))
{var error__5959__auto___13516 = temp__4126__auto___13515;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__5959__auto___13516)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema13504_13511,new cljs.core.Keyword(null,"value","value",305978217),args__5958__auto___13514,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___13516], null));
} else
{}
} else
{}
var o__5960__auto__ = (function (){var i1 = G__13507;var i2 = G__13508;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__5957__auto__,ufv___13509,output_schema13503_13510,input_schema13504_13511,input_checker13505_13512,output_checker13506_13513){
return (function (p1__13502_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__13502_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__13502_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__5957__auto__,ufv___13509,output_schema13503_13510,input_schema13504_13511,input_checker13505_13512,output_checker13506_13513))
,((function (validate__5957__auto__,ufv___13509,output_schema13503_13510,input_schema13504_13511,input_checker13505_13512,output_checker13506_13513){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{if(false)
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));
}
} else
{return null;
}
}
}
}
}
});})(validate__5957__auto__,ufv___13509,output_schema13503_13510,input_schema13504_13511,input_checker13505_13512,output_checker13506_13513))
,((function (validate__5957__auto__,ufv___13509,output_schema13503_13510,input_schema13504_13511,input_checker13505_13512,output_checker13506_13513){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__5957__auto__,ufv___13509,output_schema13503_13510,input_schema13504_13511,input_checker13505_13512,output_checker13506_13513))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__5957__auto__))
{var temp__4126__auto___13517 = output_checker13506_13513.call(null,o__5960__auto__);if(cljs.core.truth_(temp__4126__auto___13517))
{var error__5959__auto___13518 = temp__4126__auto___13517;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__5959__auto___13518)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema13503_13510,new cljs.core.Keyword(null,"value","value",305978217),o__5960__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___13518], null));
} else
{}
} else
{}
return o__5960__auto__;
});})(ufv___13509,output_schema13503_13510,input_schema13504_13511,input_checker13505_13512,output_checker13506_13513))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema13503_13510,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13504_13511], null)));
var ufv___13524 = schema.utils.use_fn_validation;var output_schema13519_13525 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema13520_13526 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker13521_13527 = schema.core.checker.call(null,input_schema13520_13526);var output_checker13522_13528 = schema.core.checker.call(null,output_schema13519_13525);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___13524,output_schema13519_13525,input_schema13520_13526,input_checker13521_13527,output_checker13522_13528){
return (function required_toplevel_keys(G__13523){var validate__5957__auto__ = ufv___13524.get_cell();if(cljs.core.truth_(validate__5957__auto__))
{var args__5958__auto___13529 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13523], null);var temp__4126__auto___13530 = input_checker13521_13527.call(null,args__5958__auto___13529);if(cljs.core.truth_(temp__4126__auto___13530))
{var error__5959__auto___13531 = temp__4126__auto___13530;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__5959__auto___13531)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema13520_13526,new cljs.core.Keyword(null,"value","value",305978217),args__5958__auto___13529,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___13531], null));
} else
{}
} else
{}
var o__5960__auto__ = (function (){var input_schema = G__13523;while(true){
return cljs.core.keep.call(null,((function (validate__5957__auto__,ufv___13524,output_schema13519_13525,input_schema13520_13526,input_checker13521_13527,output_checker13522_13528){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__5957__auto__,ufv___13524,output_schema13519_13525,input_schema13520_13526,input_checker13521_13527,output_checker13522_13528))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__5957__auto__))
{var temp__4126__auto___13532 = output_checker13522_13528.call(null,o__5960__auto__);if(cljs.core.truth_(temp__4126__auto___13532))
{var error__5959__auto___13533 = temp__4126__auto___13532;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__5959__auto___13533)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema13519_13525,new cljs.core.Keyword(null,"value","value",305978217),o__5960__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___13533], null));
} else
{}
} else
{}
return o__5960__auto__;
});})(ufv___13524,output_schema13519_13525,input_schema13520_13526,input_checker13521_13527,output_checker13522_13528))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema13519_13525,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13520_13526], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4267__auto__ = (function iter__13542(s__13543){return (new cljs.core.LazySeq(null,(function (){var s__13543__$1 = s__13543;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13543__$1);if(temp__4126__auto__)
{var s__13543__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13543__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__13543__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__13545 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__13544 = (0);while(true){
if((i__13544 < size__4266__auto__))
{var vec__13548 = cljs.core._nth.call(null,c__4265__auto__,i__13544);var k = cljs.core.nth.call(null,vec__13548,(0),null);var v = cljs.core.nth.call(null,vec__13548,(1),null);cljs.core.chunk_append.call(null,b__13545,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__13550 = (i__13544 + (1));
i__13544 = G__13550;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13545),iter__13542.call(null,cljs.core.chunk_rest.call(null,s__13543__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13545),null);
}
} else
{var vec__13549 = cljs.core.first.call(null,s__13543__$2);var k = cljs.core.nth.call(null,vec__13549,(0),null);var v = cljs.core.nth.call(null,vec__13549,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__13542.call(null,cljs.core.rest.call(null,s__13543__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4267__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4267__auto__ = (function iter__13559(s__13560){return (new cljs.core.LazySeq(null,(function (){var s__13560__$1 = s__13560;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13560__$1);if(temp__4126__auto__)
{var s__13560__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13560__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__13560__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__13562 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__13561 = (0);while(true){
if((i__13561 < size__4266__auto__))
{var vec__13565 = cljs.core._nth.call(null,c__4265__auto__,i__13561);var k = cljs.core.nth.call(null,vec__13565,(0),null);var v = cljs.core.nth.call(null,vec__13565,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__13562,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__13567 = (i__13561 + (1));
i__13561 = G__13567;
continue;
}
} else
{{
var G__13568 = (i__13561 + (1));
i__13561 = G__13568;
continue;
}
}
} else
{{
var G__13569 = (i__13561 + (1));
i__13561 = G__13569;
continue;
}
}
} else
{{
var G__13570 = (i__13561 + (1));
i__13561 = G__13570;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13562),iter__13559.call(null,cljs.core.chunk_rest.call(null,s__13560__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13562),null);
}
} else
{var vec__13566 = cljs.core.first.call(null,s__13560__$2);var k = cljs.core.nth.call(null,vec__13566,(0),null);var v = cljs.core.nth.call(null,vec__13566,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__13559.call(null,cljs.core.rest.call(null,s__13560__$2)));
} else
{{
var G__13571 = cljs.core.rest.call(null,s__13560__$2);
s__13560__$1 = G__13571;
continue;
}
}
} else
{{
var G__13572 = cljs.core.rest.call(null,s__13560__$2);
s__13560__$1 = G__13572;
continue;
}
}
} else
{{
var G__13573 = cljs.core.rest.call(null,s__13560__$2);
s__13560__$1 = G__13573;
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
});return iter__4267__auto__.call(null,input_schema);
})()));
} else
{return null;
}
}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___13596 = schema.utils.use_fn_validation;var output_schema13574_13597 = schema.core.Any;var input_schema13575_13598 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker13576_13599 = schema.core.checker.call(null,input_schema13575_13598);var output_checker13577_13600 = schema.core.checker.call(null,output_schema13574_13597);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___13596,output_schema13574_13597,input_schema13575_13598,input_checker13576_13599,output_checker13577_13600){
return (function compose_schemata(G__13578,G__13579){var validate__5957__auto__ = true;if(validate__5957__auto__)
{var args__5958__auto___13601 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13578,G__13579], null);var temp__4126__auto___13602 = input_checker13576_13599.call(null,args__5958__auto___13601);if(cljs.core.truth_(temp__4126__auto___13602))
{var error__5959__auto___13603 = temp__4126__auto___13602;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__5959__auto___13603)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema13575_13598,new cljs.core.Keyword(null,"value","value",305978217),args__5958__auto___13601,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___13603], null));
} else
{}
} else
{}
var o__5960__auto__ = (function (){var G__13590 = G__13578;var vec__13592 = G__13590;var i2 = cljs.core.nth.call(null,vec__13592,(0),null);var o2 = cljs.core.nth.call(null,vec__13592,(1),null);var G__13591 = G__13579;var vec__13593 = G__13591;var i1 = cljs.core.nth.call(null,vec__13593,(0),null);var o1 = cljs.core.nth.call(null,vec__13593,(1),null);var G__13590__$1 = G__13590;var G__13591__$1 = G__13591;while(true){
var vec__13594 = G__13590__$1;var i2__$1 = cljs.core.nth.call(null,vec__13594,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__13594,(1),null);var vec__13595 = G__13591__$1;var i1__$1 = cljs.core.nth.call(null,vec__13595,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__13595,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__5957__auto__)
{var temp__4126__auto___13604 = output_checker13577_13600.call(null,o__5960__auto__);if(cljs.core.truth_(temp__4126__auto___13604))
{var error__5959__auto___13605 = temp__4126__auto___13604;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__5959__auto___13605)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema13574_13597,new cljs.core.Keyword(null,"value","value",305978217),o__5960__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___13605], null));
} else
{}
} else
{}
return o__5960__auto__;
});})(ufv___13596,output_schema13574_13597,input_schema13575_13598,input_checker13576_13599,output_checker13577_13600))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema13574_13597,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13575_13598], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return null;
} else
{return null;
}
}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___13684 = schema.utils.use_fn_validation;var output_schema13606_13685 = schema.core.Any;var input_schema13607_13686 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker13608_13687 = schema.core.checker.call(null,input_schema13607_13686);var output_checker13609_13688 = schema.core.checker.call(null,output_schema13606_13685);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___13684,output_schema13606_13685,input_schema13607_13686,input_checker13608_13687,output_checker13609_13688){
return (function split_schema(G__13610,G__13611){var validate__5957__auto__ = ufv___13684.get_cell();if(cljs.core.truth_(validate__5957__auto__))
{var args__5958__auto___13689 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13610,G__13611], null);var temp__4126__auto___13690 = input_checker13608_13687.call(null,args__5958__auto___13689);if(cljs.core.truth_(temp__4126__auto___13690))
{var error__5959__auto___13691 = temp__4126__auto___13690;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__5959__auto___13691)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema13607_13686,new cljs.core.Keyword(null,"value","value",305978217),args__5958__auto___13689,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___13691], null));
} else
{}
} else
{}
var o__5960__auto__ = (function (){var s = G__13610;var ks = G__13611;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4267__auto__ = ((function (ks__$1,validate__5957__auto__,ufv___13684,output_schema13606_13685,input_schema13607_13686,input_checker13608_13687,output_checker13609_13688){
return (function iter__13648(s__13649){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__5957__auto__,ufv___13684,output_schema13606_13685,input_schema13607_13686,input_checker13608_13687,output_checker13609_13688){
return (function (){var s__13649__$1 = s__13649;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13649__$1);if(temp__4126__auto__)
{var s__13649__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13649__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__13649__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__13651 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__13650 = (0);while(true){
if((i__13650 < size__4266__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4265__auto__,i__13650);cljs.core.chunk_append.call(null,b__13651,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4267__auto__ = ((function (i__13650,in_QMARK_,c__4265__auto__,size__4266__auto__,b__13651,s__13649__$2,temp__4126__auto__,ks__$1,validate__5957__auto__,ufv___13684,output_schema13606_13685,input_schema13607_13686,input_checker13608_13687,output_checker13609_13688){
return (function iter__13668(s__13669){return (new cljs.core.LazySeq(null,((function (i__13650,in_QMARK_,c__4265__auto__,size__4266__auto__,b__13651,s__13649__$2,temp__4126__auto__,ks__$1,validate__5957__auto__,ufv___13684,output_schema13606_13685,input_schema13607_13686,input_checker13608_13687,output_checker13609_13688){
return (function (){var s__13669__$1 = s__13669;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13669__$1);if(temp__4126__auto____$1)
{var s__13669__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13669__$2))
{var c__4265__auto____$1 = cljs.core.chunk_first.call(null,s__13669__$2);var size__4266__auto____$1 = cljs.core.count.call(null,c__4265__auto____$1);var b__13671 = cljs.core.chunk_buffer.call(null,size__4266__auto____$1);if((function (){var i__13670 = (0);while(true){
if((i__13670 < size__4266__auto____$1))
{var vec__13674 = cljs.core._nth.call(null,c__4265__auto____$1,i__13670);var k = cljs.core.nth.call(null,vec__13674,(0),null);var v = cljs.core.nth.call(null,vec__13674,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__13671,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__13692 = (i__13670 + (1));
i__13670 = G__13692;
continue;
}
} else
{{
var G__13693 = (i__13670 + (1));
i__13670 = G__13693;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13671),iter__13668.call(null,cljs.core.chunk_rest.call(null,s__13669__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13671),null);
}
} else
{var vec__13675 = cljs.core.first.call(null,s__13669__$2);var k = cljs.core.nth.call(null,vec__13675,(0),null);var v = cljs.core.nth.call(null,vec__13675,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__13668.call(null,cljs.core.rest.call(null,s__13669__$2)));
} else
{{
var G__13694 = cljs.core.rest.call(null,s__13669__$2);
s__13669__$1 = G__13694;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__13650,in_QMARK_,c__4265__auto__,size__4266__auto__,b__13651,s__13649__$2,temp__4126__auto__,ks__$1,validate__5957__auto__,ufv___13684,output_schema13606_13685,input_schema13607_13686,input_checker13608_13687,output_checker13609_13688))
,null,null));
});})(i__13650,in_QMARK_,c__4265__auto__,size__4266__auto__,b__13651,s__13649__$2,temp__4126__auto__,ks__$1,validate__5957__auto__,ufv___13684,output_schema13606_13685,input_schema13607_13686,input_checker13608_13687,output_checker13609_13688))
;return iter__4267__auto__.call(null,s);
})()));
{
var G__13695 = (i__13650 + (1));
i__13650 = G__13695;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13651),iter__13648.call(null,cljs.core.chunk_rest.call(null,s__13649__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13651),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__13649__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4267__auto__ = ((function (in_QMARK_,s__13649__$2,temp__4126__auto__,ks__$1,validate__5957__auto__,ufv___13684,output_schema13606_13685,input_schema13607_13686,input_checker13608_13687,output_checker13609_13688){
return (function iter__13676(s__13677){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__13649__$2,temp__4126__auto__,ks__$1,validate__5957__auto__,ufv___13684,output_schema13606_13685,input_schema13607_13686,input_checker13608_13687,output_checker13609_13688){
return (function (){var s__13677__$1 = s__13677;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__13677__$1);if(temp__4126__auto____$1)
{var s__13677__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__13677__$2))
{var c__4265__auto__ = cljs.core.chunk_first.call(null,s__13677__$2);var size__4266__auto__ = cljs.core.count.call(null,c__4265__auto__);var b__13679 = cljs.core.chunk_buffer.call(null,size__4266__auto__);if((function (){var i__13678 = (0);while(true){
if((i__13678 < size__4266__auto__))
{var vec__13682 = cljs.core._nth.call(null,c__4265__auto__,i__13678);var k = cljs.core.nth.call(null,vec__13682,(0),null);var v = cljs.core.nth.call(null,vec__13682,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__13679,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__13696 = (i__13678 + (1));
i__13678 = G__13696;
continue;
}
} else
{{
var G__13697 = (i__13678 + (1));
i__13678 = G__13697;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13679),iter__13676.call(null,cljs.core.chunk_rest.call(null,s__13677__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13679),null);
}
} else
{var vec__13683 = cljs.core.first.call(null,s__13677__$2);var k = cljs.core.nth.call(null,vec__13683,(0),null);var v = cljs.core.nth.call(null,vec__13683,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__13676.call(null,cljs.core.rest.call(null,s__13677__$2)));
} else
{{
var G__13698 = cljs.core.rest.call(null,s__13677__$2);
s__13677__$1 = G__13698;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__13649__$2,temp__4126__auto__,ks__$1,validate__5957__auto__,ufv___13684,output_schema13606_13685,input_schema13607_13686,input_checker13608_13687,output_checker13609_13688))
,null,null));
});})(in_QMARK_,s__13649__$2,temp__4126__auto__,ks__$1,validate__5957__auto__,ufv___13684,output_schema13606_13685,input_schema13607_13686,input_checker13608_13687,output_checker13609_13688))
;return iter__4267__auto__.call(null,s);
})()),iter__13648.call(null,cljs.core.rest.call(null,s__13649__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__5957__auto__,ufv___13684,output_schema13606_13685,input_schema13607_13686,input_checker13608_13687,output_checker13609_13688))
,null,null));
});})(ks__$1,validate__5957__auto__,ufv___13684,output_schema13606_13685,input_schema13607_13686,input_checker13608_13687,output_checker13609_13688))
;return iter__4267__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__5957__auto__))
{var temp__4126__auto___13699 = output_checker13609_13688.call(null,o__5960__auto__);if(cljs.core.truth_(temp__4126__auto___13699))
{var error__5959__auto___13700 = temp__4126__auto___13699;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__5959__auto___13700)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema13606_13685,new cljs.core.Keyword(null,"value","value",305978217),o__5960__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___13700], null));
} else
{}
} else
{}
return o__5960__auto__;
});})(ufv___13684,output_schema13606_13685,input_schema13607_13686,input_checker13608_13687,output_checker13609_13688))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema13606_13685,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13607_13686], null)));
var ufv___13731 = schema.utils.use_fn_validation;var output_schema13701_13732 = plumbing.fnk.schema.GraphIOSchemata;var input_schema13702_13733 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker13703_13734 = schema.core.checker.call(null,input_schema13702_13733);var output_checker13704_13735 = schema.core.checker.call(null,output_schema13701_13732);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___13731,output_schema13701_13732,input_schema13702_13733,input_checker13703_13734,output_checker13704_13735){
return (function sequence_schemata(G__13705,G__13706){var validate__5957__auto__ = ufv___13731.get_cell();if(cljs.core.truth_(validate__5957__auto__))
{var args__5958__auto___13736 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__13705,G__13706], null);var temp__4126__auto___13737 = input_checker13703_13734.call(null,args__5958__auto___13736);if(cljs.core.truth_(temp__4126__auto___13737))
{var error__5959__auto___13738 = temp__4126__auto___13737;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__5959__auto___13738)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema13702_13733,new cljs.core.Keyword(null,"value","value",305978217),args__5958__auto___13736,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___13738], null));
} else
{}
} else
{}
var o__5960__auto__ = (function (){var G__13722 = G__13705;var vec__13724 = G__13722;var i1 = cljs.core.nth.call(null,vec__13724,(0),null);var o1 = cljs.core.nth.call(null,vec__13724,(1),null);var G__13723 = G__13706;var vec__13725 = G__13723;var k = cljs.core.nth.call(null,vec__13725,(0),null);var vec__13726 = cljs.core.nth.call(null,vec__13725,(1),null);var i2 = cljs.core.nth.call(null,vec__13726,(0),null);var o2 = cljs.core.nth.call(null,vec__13726,(1),null);var G__13722__$1 = G__13722;var G__13723__$1 = G__13723;while(true){
var vec__13727 = G__13722__$1;var i1__$1 = cljs.core.nth.call(null,vec__13727,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__13727,(1),null);var vec__13728 = G__13723__$1;var k__$1 = cljs.core.nth.call(null,vec__13728,(0),null);var vec__13729 = cljs.core.nth.call(null,vec__13728,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__13729,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__13729,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__13730 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__13730,(0),null);var unused = cljs.core.nth.call(null,vec__13730,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__5957__auto__))
{var temp__4126__auto___13739 = output_checker13704_13735.call(null,o__5960__auto__);if(cljs.core.truth_(temp__4126__auto___13739))
{var error__5959__auto___13740 = temp__4126__auto___13739;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__5959__auto___13740)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema13701_13732,new cljs.core.Keyword(null,"value","value",305978217),o__5960__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___13740], null));
} else
{}
} else
{}
return o__5960__auto__;
});})(ufv___13731,output_schema13701_13732,input_schema13702_13733,input_checker13703_13734,output_checker13704_13735))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema13701_13732,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema13702_13733], null)));

//# sourceMappingURL=schema.js.map