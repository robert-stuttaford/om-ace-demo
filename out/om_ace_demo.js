// Compiled by ClojureScript 0.0-2280
goog.provide('om_ace_demo');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
om_ace_demo._STAR_ace_STAR_ = cljs.core.atom.call(null,null);
om_ace_demo.set_value_BANG_ = (function set_value_BANG_(value){var ace_instance = cljs.core.deref.call(null,om_ace_demo._STAR_ace_STAR_);var cursor = ace_instance.getCursorPositionScreen();return ace_instance.setValue(value,cursor);
});
om_ace_demo.change_handler = (function change_handler(owner){return om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.Keyword(null,"edited-value","edited-value",607144183),cljs.core.deref.call(null,om_ace_demo._STAR_ace_STAR_).getValue());
});
var ufv___17506 = schema.utils.use_fn_validation;var output_schema17396_17507 = schema.core.Any;var input_schema17397_17508 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker17398_17509 = schema.core.checker.call(null,input_schema17397_17508);var output_checker17399_17510 = schema.core.checker.call(null,output_schema17396_17507);/**
* Inputs: [data owner]
*/
om_ace_demo.editor_area = ((function (ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510){
return (function editor_area(G__17400,G__17401){var validate__5957__auto__ = ufv___17506.get_cell();if(cljs.core.truth_(validate__5957__auto__))
{var args__5958__auto___17511 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17400,G__17401], null);var temp__4126__auto___17512 = input_checker17398_17509.call(null,args__5958__auto___17511);if(cljs.core.truth_(temp__4126__auto___17512))
{var error__5959__auto___17513 = temp__4126__auto___17512;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"editor-area","editor-area",-409533938,null),cljs.core.pr_str.call(null,error__5959__auto___17513)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17397_17508,new cljs.core.Keyword(null,"value","value",305978217),args__5958__auto___17511,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___17513], null));
} else
{}
} else
{}
var o__5960__auto__ = (function (){var data = G__17400;var owner = G__17401;while(true){
if(typeof om_ace_demo.t17454 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_ace_demo.t17454 = (function (input_schema17397,owner,data,G__17400,editor_area,input_checker17398,output_schema17396,output_checker17399,G__17401,ufv__,validate__5957__auto__,meta17455){
this.input_schema17397 = input_schema17397;
this.owner = owner;
this.data = data;
this.G__17400 = G__17400;
this.editor_area = editor_area;
this.input_checker17398 = input_checker17398;
this.output_schema17396 = output_schema17396;
this.output_checker17399 = output_checker17399;
this.G__17401 = G__17401;
this.ufv__ = ufv__;
this.validate__5957__auto__ = validate__5957__auto__;
this.meta17455 = meta17455;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_ace_demo.t17454.cljs$lang$type = true;
om_ace_demo.t17454.cljs$lang$ctorStr = "om-ace-demo/t17454";
om_ace_demo.t17454.cljs$lang$ctorPrWriter = ((function (validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"om-ace-demo/t17454");
});})(validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510))
;
om_ace_demo.t17454.prototype.om$core$IWillUpdate$ = true;
om_ace_demo.t17454.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510){
return (function (_,next_data,next_state){var self__ = this;
var ___$1 = this;return om_ace_demo.set_value_BANG_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(next_data));
});})(validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510))
;
om_ace_demo.t17454.prototype.om$core$IDidMount$ = true;
om_ace_demo.t17454.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510){
return (function (_){var self__ = this;
var ___$1 = this;var ace_instance = ace.edit(self__.owner.getDOMNode());cljs.core.reset_BANG_.call(null,om_ace_demo._STAR_ace_STAR_,ace_instance);
ace_instance.getSession().on("change",((function (ace_instance,___$1,validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510){
return (function (){return om_ace_demo.change_handler.call(null,self__.owner);
});})(ace_instance,___$1,validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510))
);
return om_ace_demo.set_value_BANG_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.data));
});})(validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510))
;
om_ace_demo.t17454.prototype.om$core$IWillMount$ = true;
om_ace_demo.t17454.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510){
return (function (_){var self__ = this;
var ___$1 = this;var editor_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-chan","editor-chan",-1774790532));var c__8977__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8977__auto__,editor_chan,___$1,validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510){
return (function (){var f__8978__auto__ = (function (){var switch__8962__auto__ = ((function (c__8977__auto__,editor_chan,___$1,validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510){
return (function (state_17479){var state_val_17480 = (state_17479[(1)]);if((state_val_17480 === (7)))
{var inst_17460 = (state_17479[(2)]);var inst_17461 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"save!","save!",-1137373803),inst_17460);var state_17479__$1 = state_17479;if(inst_17461)
{var statearr_17481_17514 = state_17479__$1;(statearr_17481_17514[(1)] = (8));
} else
{var statearr_17482_17515 = state_17479__$1;(statearr_17482_17515[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17480 === (1)))
{var state_17479__$1 = state_17479;var statearr_17483_17516 = state_17479__$1;(statearr_17483_17516[(2)] = null);
(statearr_17483_17516[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17480 === (4)))
{var state_17479__$1 = state_17479;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17479__$1,(7),editor_chan);
} else
{if((state_val_17480 === (13)))
{var inst_17468 = (state_17479[(2)]);var state_17479__$1 = state_17479;var statearr_17484_17517 = state_17479__$1;(statearr_17484_17517[(2)] = inst_17468);
(statearr_17484_17517[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17480 === (6)))
{var inst_17475 = (state_17479[(2)]);var state_17479__$1 = state_17479;var statearr_17485_17518 = state_17479__$1;(statearr_17485_17518[(2)] = inst_17475);
(statearr_17485_17518[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17480 === (3)))
{var inst_17477 = (state_17479[(2)]);var state_17479__$1 = state_17479;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17479__$1,inst_17477);
} else
{if((state_val_17480 === (12)))
{var state_17479__$1 = state_17479;var statearr_17486_17519 = state_17479__$1;(statearr_17486_17519[(2)] = null);
(statearr_17486_17519[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17480 === (2)))
{var state_17479__$1 = state_17479;if(true)
{var statearr_17487_17520 = state_17479__$1;(statearr_17487_17520[(1)] = (4));
} else
{var statearr_17488_17521 = state_17479__$1;(statearr_17488_17521[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17480 === (11)))
{var inst_17463 = (state_17479[(7)]);var inst_17465 = om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"value","value",305978217),inst_17463);var state_17479__$1 = state_17479;var statearr_17489_17522 = state_17479__$1;(statearr_17489_17522[(2)] = inst_17465);
(statearr_17489_17522[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17480 === (9)))
{var state_17479__$1 = state_17479;var statearr_17490_17523 = state_17479__$1;(statearr_17490_17523[(2)] = null);
(statearr_17490_17523[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17480 === (5)))
{var state_17479__$1 = state_17479;var statearr_17491_17524 = state_17479__$1;(statearr_17491_17524[(2)] = null);
(statearr_17491_17524[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17480 === (10)))
{var inst_17471 = (state_17479[(2)]);var state_17479__$1 = (function (){var statearr_17492 = state_17479;(statearr_17492[(8)] = inst_17471);
return statearr_17492;
})();var statearr_17493_17525 = state_17479__$1;(statearr_17493_17525[(2)] = null);
(statearr_17493_17525[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17480 === (8)))
{var inst_17463 = (state_17479[(7)]);var inst_17463__$1 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"edited-value","edited-value",607144183));var state_17479__$1 = (function (){var statearr_17494 = state_17479;(statearr_17494[(7)] = inst_17463__$1);
return statearr_17494;
})();if(cljs.core.truth_(inst_17463__$1))
{var statearr_17495_17526 = state_17479__$1;(statearr_17495_17526[(1)] = (11));
} else
{var statearr_17496_17527 = state_17479__$1;(statearr_17496_17527[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8977__auto__,editor_chan,___$1,validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510))
;return ((function (switch__8962__auto__,c__8977__auto__,editor_chan,___$1,validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510){
return (function() {
var state_machine__8963__auto__ = null;
var state_machine__8963__auto____0 = (function (){var statearr_17500 = [null,null,null,null,null,null,null,null,null];(statearr_17500[(0)] = state_machine__8963__auto__);
(statearr_17500[(1)] = (1));
return statearr_17500;
});
var state_machine__8963__auto____1 = (function (state_17479){while(true){
var ret_value__8964__auto__ = (function (){try{while(true){
var result__8965__auto__ = switch__8962__auto__.call(null,state_17479);if(cljs.core.keyword_identical_QMARK_.call(null,result__8965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8965__auto__;
}
break;
}
}catch (e17501){if((e17501 instanceof Object))
{var ex__8966__auto__ = e17501;var statearr_17502_17528 = state_17479;(statearr_17502_17528[(5)] = ex__8966__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17479);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17501;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17529 = state_17479;
state_17479 = G__17529;
continue;
}
} else
{return ret_value__8964__auto__;
}
break;
}
});
state_machine__8963__auto__ = function(state_17479){
switch(arguments.length){
case 0:
return state_machine__8963__auto____0.call(this);
case 1:
return state_machine__8963__auto____1.call(this,state_17479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8963__auto____0;
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8963__auto____1;
return state_machine__8963__auto__;
})()
;})(switch__8962__auto__,c__8977__auto__,editor_chan,___$1,validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510))
})();var state__8979__auto__ = (function (){var statearr_17503 = f__8978__auto__.call(null);(statearr_17503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8977__auto__);
return statearr_17503;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8979__auto__);
});})(c__8977__auto__,editor_chan,___$1,validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510))
);
return c__8977__auto__;
});})(validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510))
;
om_ace_demo.t17454.prototype.om$core$IRender$ = true;
om_ace_demo.t17454.prototype.om$core$IRender$render$arity$1 = ((function (validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "ace", "style": {"height": "400px"}});
});})(validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510))
;
om_ace_demo.t17454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510){
return (function (_17456){var self__ = this;
var _17456__$1 = this;return self__.meta17455;
});})(validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510))
;
om_ace_demo.t17454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510){
return (function (_17456,meta17455__$1){var self__ = this;
var _17456__$1 = this;return (new om_ace_demo.t17454(self__.input_schema17397,self__.owner,self__.data,self__.G__17400,self__.editor_area,self__.input_checker17398,self__.output_schema17396,self__.output_checker17399,self__.G__17401,self__.ufv__,self__.validate__5957__auto__,meta17455__$1));
});})(validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510))
;
om_ace_demo.__GT_t17454 = ((function (validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510){
return (function __GT_t17454(input_schema17397__$1,owner__$1,data__$1,G__17400__$1,editor_area__$1,input_checker17398__$1,output_schema17396__$1,output_checker17399__$1,G__17401__$1,ufv____$1,validate__5957__auto____$1,meta17455){return (new om_ace_demo.t17454(input_schema17397__$1,owner__$1,data__$1,G__17400__$1,editor_area__$1,input_checker17398__$1,output_schema17396__$1,output_checker17399__$1,G__17401__$1,ufv____$1,validate__5957__auto____$1,meta17455));
});})(validate__5957__auto__,ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510))
;
}
return (new om_ace_demo.t17454(input_schema17397_17508,owner,data,G__17400,editor_area,input_checker17398_17509,output_schema17396_17507,output_checker17399_17510,G__17401,ufv___17506,validate__5957__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__5957__auto__))
{var temp__4126__auto___17530 = output_checker17399_17510.call(null,o__5960__auto__);if(cljs.core.truth_(temp__4126__auto___17530))
{var error__5959__auto___17531 = temp__4126__auto___17530;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"editor-area","editor-area",-409533938,null),cljs.core.pr_str.call(null,error__5959__auto___17531)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17396_17507,new cljs.core.Keyword(null,"value","value",305978217),o__5960__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___17531], null));
} else
{}
} else
{}
return o__5960__auto__;
});})(ufv___17506,output_schema17396_17507,input_schema17397_17508,input_checker17398_17509,output_checker17399_17510))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_ace_demo.editor_area),schema.core.make_fn_schema.call(null,output_schema17396_17507,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17397_17508], null)));
om_ace_demo.__GT_editor_area = (function() {
var __GT_editor_area = null;
var __GT_editor_area__1 = (function (cursor__7725__auto__){return om.core.build.call(null,om_ace_demo.editor_area,cursor__7725__auto__);
});
var __GT_editor_area__2 = (function (cursor__7725__auto__,m17395){return om.core.build.call(null,om_ace_demo.editor_area,cursor__7725__auto__,m17395);
});
__GT_editor_area = function(cursor__7725__auto__,m17395){
switch(arguments.length){
case 1:
return __GT_editor_area__1.call(this,cursor__7725__auto__);
case 2:
return __GT_editor_area__2.call(this,cursor__7725__auto__,m17395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_editor_area.cljs$core$IFn$_invoke$arity$1 = __GT_editor_area__1;
__GT_editor_area.cljs$core$IFn$_invoke$arity$2 = __GT_editor_area__2;
return __GT_editor_area;
})()
;
var ufv___17549 = schema.utils.use_fn_validation;var output_schema17533_17550 = schema.core.Any;var input_schema17534_17551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker17535_17552 = schema.core.checker.call(null,input_schema17534_17551);var output_checker17536_17553 = schema.core.checker.call(null,output_schema17533_17550);/**
* Inputs: [data owner]
*/
om_ace_demo.editor = ((function (ufv___17549,output_schema17533_17550,input_schema17534_17551,input_checker17535_17552,output_checker17536_17553){
return (function editor(G__17537,G__17538){var validate__5957__auto__ = ufv___17549.get_cell();if(cljs.core.truth_(validate__5957__auto__))
{var args__5958__auto___17554 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17537,G__17538], null);var temp__4126__auto___17555 = input_checker17535_17552.call(null,args__5958__auto___17554);if(cljs.core.truth_(temp__4126__auto___17555))
{var error__5959__auto___17556 = temp__4126__auto___17555;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"editor","editor",651153757,null),cljs.core.pr_str.call(null,error__5959__auto___17556)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17534_17551,new cljs.core.Keyword(null,"value","value",305978217),args__5958__auto___17554,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___17556], null));
} else
{}
} else
{}
var o__5960__auto__ = (function (){var data = G__17537;var owner = G__17538;while(true){
if(typeof om_ace_demo.t17544 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_ace_demo.t17544 = (function (G__17538,owner,output_checker17536,data,input_schema17534,G__17537,input_checker17535,output_schema17533,editor,ufv__,validate__5957__auto__,meta17545){
this.G__17538 = G__17538;
this.owner = owner;
this.output_checker17536 = output_checker17536;
this.data = data;
this.input_schema17534 = input_schema17534;
this.G__17537 = G__17537;
this.input_checker17535 = input_checker17535;
this.output_schema17533 = output_schema17533;
this.editor = editor;
this.ufv__ = ufv__;
this.validate__5957__auto__ = validate__5957__auto__;
this.meta17545 = meta17545;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_ace_demo.t17544.cljs$lang$type = true;
om_ace_demo.t17544.cljs$lang$ctorStr = "om-ace-demo/t17544";
om_ace_demo.t17544.cljs$lang$ctorPrWriter = ((function (validate__5957__auto__,ufv___17549,output_schema17533_17550,input_schema17534_17551,input_checker17535_17552,output_checker17536_17553){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"om-ace-demo/t17544");
});})(validate__5957__auto__,ufv___17549,output_schema17533_17550,input_schema17534_17551,input_checker17535_17552,output_checker17536_17553))
;
om_ace_demo.t17544.prototype.om$core$IRenderState$ = true;
om_ace_demo.t17544.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__5957__auto__,ufv___17549,output_schema17533_17550,input_schema17534_17551,input_checker17535_17552,output_checker17536_17553){
return (function (_,p__17547){var self__ = this;
var map__17548 = p__17547;var map__17548__$1 = ((cljs.core.seq_QMARK_.call(null,map__17548))?cljs.core.apply.call(null,cljs.core.hash_map,map__17548):map__17548);var editor_chan = cljs.core.get.call(null,map__17548__$1,new cljs.core.Keyword(null,"editor-chan","editor-chan",-1774790532));var ___$1 = this;return React.DOM.div(null,React.DOM.button({"onClick": ((function (___$1,map__17548,map__17548__$1,editor_chan,validate__5957__auto__,ufv___17549,output_schema17533_17550,input_schema17534_17551,input_checker17535_17552,output_checker17536_17553){
return (function (){return cljs.core.async.put_BANG_.call(null,editor_chan,new cljs.core.Keyword(null,"save!","save!",-1137373803));
});})(___$1,map__17548,map__17548__$1,editor_chan,validate__5957__auto__,ufv___17549,output_schema17533_17550,input_schema17534_17551,input_checker17535_17552,output_checker17536_17553))
},"Save"),sablono.interpreter.interpret.call(null,om_ace_demo.__GT_editor_area.call(null,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor-chan","editor-chan",-1774790532),editor_chan], null)], null))));
});})(validate__5957__auto__,ufv___17549,output_schema17533_17550,input_schema17534_17551,input_checker17535_17552,output_checker17536_17553))
;
om_ace_demo.t17544.prototype.om$core$IInitState$ = true;
om_ace_demo.t17544.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__5957__auto__,ufv___17549,output_schema17533_17550,input_schema17534_17551,input_checker17535_17552,output_checker17536_17553){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor-chan","editor-chan",-1774790532),cljs.core.async.chan.call(null)], null);
});})(validate__5957__auto__,ufv___17549,output_schema17533_17550,input_schema17534_17551,input_checker17535_17552,output_checker17536_17553))
;
om_ace_demo.t17544.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5957__auto__,ufv___17549,output_schema17533_17550,input_schema17534_17551,input_checker17535_17552,output_checker17536_17553){
return (function (_17546){var self__ = this;
var _17546__$1 = this;return self__.meta17545;
});})(validate__5957__auto__,ufv___17549,output_schema17533_17550,input_schema17534_17551,input_checker17535_17552,output_checker17536_17553))
;
om_ace_demo.t17544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5957__auto__,ufv___17549,output_schema17533_17550,input_schema17534_17551,input_checker17535_17552,output_checker17536_17553){
return (function (_17546,meta17545__$1){var self__ = this;
var _17546__$1 = this;return (new om_ace_demo.t17544(self__.G__17538,self__.owner,self__.output_checker17536,self__.data,self__.input_schema17534,self__.G__17537,self__.input_checker17535,self__.output_schema17533,self__.editor,self__.ufv__,self__.validate__5957__auto__,meta17545__$1));
});})(validate__5957__auto__,ufv___17549,output_schema17533_17550,input_schema17534_17551,input_checker17535_17552,output_checker17536_17553))
;
om_ace_demo.__GT_t17544 = ((function (validate__5957__auto__,ufv___17549,output_schema17533_17550,input_schema17534_17551,input_checker17535_17552,output_checker17536_17553){
return (function __GT_t17544(G__17538__$1,owner__$1,output_checker17536__$1,data__$1,input_schema17534__$1,G__17537__$1,input_checker17535__$1,output_schema17533__$1,editor__$1,ufv____$1,validate__5957__auto____$1,meta17545){return (new om_ace_demo.t17544(G__17538__$1,owner__$1,output_checker17536__$1,data__$1,input_schema17534__$1,G__17537__$1,input_checker17535__$1,output_schema17533__$1,editor__$1,ufv____$1,validate__5957__auto____$1,meta17545));
});})(validate__5957__auto__,ufv___17549,output_schema17533_17550,input_schema17534_17551,input_checker17535_17552,output_checker17536_17553))
;
}
return (new om_ace_demo.t17544(G__17538,owner,output_checker17536_17553,data,input_schema17534_17551,G__17537,input_checker17535_17552,output_schema17533_17550,editor,ufv___17549,validate__5957__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__5957__auto__))
{var temp__4126__auto___17557 = output_checker17536_17553.call(null,o__5960__auto__);if(cljs.core.truth_(temp__4126__auto___17557))
{var error__5959__auto___17558 = temp__4126__auto___17557;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"editor","editor",651153757,null),cljs.core.pr_str.call(null,error__5959__auto___17558)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17533_17550,new cljs.core.Keyword(null,"value","value",305978217),o__5960__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___17558], null));
} else
{}
} else
{}
return o__5960__auto__;
});})(ufv___17549,output_schema17533_17550,input_schema17534_17551,input_checker17535_17552,output_checker17536_17553))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_ace_demo.editor),schema.core.make_fn_schema.call(null,output_schema17533_17550,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17534_17551], null)));
om_ace_demo.__GT_editor = (function() {
var __GT_editor = null;
var __GT_editor__1 = (function (cursor__7725__auto__){return om.core.build.call(null,om_ace_demo.editor,cursor__7725__auto__);
});
var __GT_editor__2 = (function (cursor__7725__auto__,m17532){return om.core.build.call(null,om_ace_demo.editor,cursor__7725__auto__,m17532);
});
__GT_editor = function(cursor__7725__auto__,m17532){
switch(arguments.length){
case 1:
return __GT_editor__1.call(this,cursor__7725__auto__);
case 2:
return __GT_editor__2.call(this,cursor__7725__auto__,m17532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_editor.cljs$core$IFn$_invoke$arity$1 = __GT_editor__1;
__GT_editor.cljs$core$IFn$_invoke$arity$2 = __GT_editor__2;
return __GT_editor;
})()
;
var ufv___17572 = schema.utils.use_fn_validation;var output_schema17560_17573 = schema.core.Any;var input_schema17561_17574 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker17562_17575 = schema.core.checker.call(null,input_schema17561_17574);var output_checker17563_17576 = schema.core.checker.call(null,output_schema17560_17573);/**
* Inputs: [data owner]
*/
om_ace_demo.app = ((function (ufv___17572,output_schema17560_17573,input_schema17561_17574,input_checker17562_17575,output_checker17563_17576){
return (function app(G__17564,G__17565){var validate__5957__auto__ = ufv___17572.get_cell();if(cljs.core.truth_(validate__5957__auto__))
{var args__5958__auto___17577 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17564,G__17565], null);var temp__4126__auto___17578 = input_checker17562_17575.call(null,args__5958__auto___17577);if(cljs.core.truth_(temp__4126__auto___17578))
{var error__5959__auto___17579 = temp__4126__auto___17578;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__5959__auto___17579)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17561_17574,new cljs.core.Keyword(null,"value","value",305978217),args__5958__auto___17577,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___17579], null));
} else
{}
} else
{}
var o__5960__auto__ = (function (){var data = G__17564;var owner = G__17565;while(true){
if(typeof om_ace_demo.t17569 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_ace_demo.t17569 = (function (owner,data,input_checker17562,output_schema17560,output_checker17563,G__17565,G__17564,input_schema17561,app,ufv__,validate__5957__auto__,meta17570){
this.owner = owner;
this.data = data;
this.input_checker17562 = input_checker17562;
this.output_schema17560 = output_schema17560;
this.output_checker17563 = output_checker17563;
this.G__17565 = G__17565;
this.G__17564 = G__17564;
this.input_schema17561 = input_schema17561;
this.app = app;
this.ufv__ = ufv__;
this.validate__5957__auto__ = validate__5957__auto__;
this.meta17570 = meta17570;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_ace_demo.t17569.cljs$lang$type = true;
om_ace_demo.t17569.cljs$lang$ctorStr = "om-ace-demo/t17569";
om_ace_demo.t17569.cljs$lang$ctorPrWriter = ((function (validate__5957__auto__,ufv___17572,output_schema17560_17573,input_schema17561_17574,input_checker17562_17575,output_checker17563_17576){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"om-ace-demo/t17569");
});})(validate__5957__auto__,ufv___17572,output_schema17560_17573,input_schema17561_17574,input_checker17562_17575,output_checker17563_17576))
;
om_ace_demo.t17569.prototype.om$core$IRender$ = true;
om_ace_demo.t17569.prototype.om$core$IRender$render$arity$1 = ((function (validate__5957__auto__,ufv___17572,output_schema17560_17573,input_schema17561_17574,input_checker17562_17575,output_checker17563_17576){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.pre(null,"Raw state: ",sablono.interpreter.interpret.call(null,cljs.core.pr_str.call(null,self__.data))),sablono.interpreter.interpret.call(null,om_ace_demo.__GT_editor.call(null,self__.data)));
});})(validate__5957__auto__,ufv___17572,output_schema17560_17573,input_schema17561_17574,input_checker17562_17575,output_checker17563_17576))
;
om_ace_demo.t17569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5957__auto__,ufv___17572,output_schema17560_17573,input_schema17561_17574,input_checker17562_17575,output_checker17563_17576){
return (function (_17571){var self__ = this;
var _17571__$1 = this;return self__.meta17570;
});})(validate__5957__auto__,ufv___17572,output_schema17560_17573,input_schema17561_17574,input_checker17562_17575,output_checker17563_17576))
;
om_ace_demo.t17569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5957__auto__,ufv___17572,output_schema17560_17573,input_schema17561_17574,input_checker17562_17575,output_checker17563_17576){
return (function (_17571,meta17570__$1){var self__ = this;
var _17571__$1 = this;return (new om_ace_demo.t17569(self__.owner,self__.data,self__.input_checker17562,self__.output_schema17560,self__.output_checker17563,self__.G__17565,self__.G__17564,self__.input_schema17561,self__.app,self__.ufv__,self__.validate__5957__auto__,meta17570__$1));
});})(validate__5957__auto__,ufv___17572,output_schema17560_17573,input_schema17561_17574,input_checker17562_17575,output_checker17563_17576))
;
om_ace_demo.__GT_t17569 = ((function (validate__5957__auto__,ufv___17572,output_schema17560_17573,input_schema17561_17574,input_checker17562_17575,output_checker17563_17576){
return (function __GT_t17569(owner__$1,data__$1,input_checker17562__$1,output_schema17560__$1,output_checker17563__$1,G__17565__$1,G__17564__$1,input_schema17561__$1,app__$1,ufv____$1,validate__5957__auto____$1,meta17570){return (new om_ace_demo.t17569(owner__$1,data__$1,input_checker17562__$1,output_schema17560__$1,output_checker17563__$1,G__17565__$1,G__17564__$1,input_schema17561__$1,app__$1,ufv____$1,validate__5957__auto____$1,meta17570));
});})(validate__5957__auto__,ufv___17572,output_schema17560_17573,input_schema17561_17574,input_checker17562_17575,output_checker17563_17576))
;
}
return (new om_ace_demo.t17569(owner,data,input_checker17562_17575,output_schema17560_17573,output_checker17563_17576,G__17565,G__17564,input_schema17561_17574,app,ufv___17572,validate__5957__auto__,null));
break;
}
})();if(cljs.core.truth_(validate__5957__auto__))
{var temp__4126__auto___17580 = output_checker17563_17576.call(null,o__5960__auto__);if(cljs.core.truth_(temp__4126__auto___17580))
{var error__5959__auto___17581 = temp__4126__auto___17580;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__5959__auto___17581)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17560_17573,new cljs.core.Keyword(null,"value","value",305978217),o__5960__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5959__auto___17581], null));
} else
{}
} else
{}
return o__5960__auto__;
});})(ufv___17572,output_schema17560_17573,input_schema17561_17574,input_checker17562_17575,output_checker17563_17576))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_ace_demo.app),schema.core.make_fn_schema.call(null,output_schema17560_17573,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17561_17574], null)));
om_ace_demo.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__7725__auto__){return om.core.build.call(null,om_ace_demo.app,cursor__7725__auto__);
});
var __GT_app__2 = (function (cursor__7725__auto__,m17559){return om.core.build.call(null,om_ace_demo.app,cursor__7725__auto__,m17559);
});
__GT_app = function(cursor__7725__auto__,m17559){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__7725__auto__);
case 2:
return __GT_app__2.call(this,cursor__7725__auto__,m17559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_app.cljs$core$IFn$_invoke$arity$1 = __GT_app__1;
__GT_app.cljs$core$IFn$_invoke$arity$2 = __GT_app__2;
return __GT_app;
})()
;
om.core.root.call(null,om_ace_demo.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"Welcome to Ace in Om!"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=om_ace_demo.js.map