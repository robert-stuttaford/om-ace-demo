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
om_ace_demo.set_value_BANG_ = (function set_value_BANG_(ace,value){var cursor = cljs.core.deref.call(null,ace).getCursorPositionScreen();return cljs.core.deref.call(null,ace).setValue(value,cursor);
});
om_ace_demo.change_handler = (function change_handler(owner,ace){return om.core.set_state_nr_BANG_.call(null,owner,new cljs.core.Keyword(null,"edited-value","edited-value",607144183),cljs.core.deref.call(null,ace).getValue());
});
var ufv___15648 = schema.utils.use_fn_validation;var output_schema15538_15649 = schema.core.Any;var input_schema15539_15650 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker15540_15651 = schema.core.checker.call(null,input_schema15539_15650);var output_checker15541_15652 = schema.core.checker.call(null,output_schema15538_15649);/**
* Inputs: [data owner]
*/
om_ace_demo.editor_area = ((function (ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652){
return (function editor_area(G__15542,G__15543){var validate__5954__auto__ = ufv___15648.get_cell();if(cljs.core.truth_(validate__5954__auto__))
{var args__5955__auto___15653 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15542,G__15543], null);var temp__4126__auto___15654 = input_checker15540_15651.call(null,args__5955__auto___15653);if(cljs.core.truth_(temp__4126__auto___15654))
{var error__5956__auto___15655 = temp__4126__auto___15654;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"editor-area","editor-area",-409533938,null),cljs.core.pr_str.call(null,error__5956__auto___15655)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema15539_15650,new cljs.core.Keyword(null,"value","value",305978217),args__5955__auto___15653,new cljs.core.Keyword(null,"error","error",-978969032),error__5956__auto___15655], null));
} else
{}
} else
{}
var o__5957__auto__ = (function (){var data = G__15542;var owner = G__15543;while(true){
if(typeof om_ace_demo.t15596 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_ace_demo.t15596 = (function (owner,data,input_schema15539,G__15542,editor_area,validate__5954__auto__,G__15543,input_checker15540,output_checker15541,ufv__,output_schema15538,meta15597){
this.owner = owner;
this.data = data;
this.input_schema15539 = input_schema15539;
this.G__15542 = G__15542;
this.editor_area = editor_area;
this.validate__5954__auto__ = validate__5954__auto__;
this.G__15543 = G__15543;
this.input_checker15540 = input_checker15540;
this.output_checker15541 = output_checker15541;
this.ufv__ = ufv__;
this.output_schema15538 = output_schema15538;
this.meta15597 = meta15597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_ace_demo.t15596.cljs$lang$type = true;
om_ace_demo.t15596.cljs$lang$ctorStr = "om-ace-demo/t15596";
om_ace_demo.t15596.cljs$lang$ctorPrWriter = ((function (validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-ace-demo/t15596");
});})(validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652))
;
om_ace_demo.t15596.prototype.om$core$IDisplayName$ = true;
om_ace_demo.t15596.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652){
return (function (_){var self__ = this;
var ___$1 = this;return "editor-area";
});})(validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652))
;
om_ace_demo.t15596.prototype.om$core$IWillUpdate$ = true;
om_ace_demo.t15596.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652){
return (function (_,next_data,next_state){var self__ = this;
var ___$1 = this;return om_ace_demo.set_value_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"ace","ace",1638744810)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(next_data));
});})(validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652))
;
om_ace_demo.t15596.prototype.om$core$IDidMount$ = true;
om_ace_demo.t15596.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652){
return (function (_){var self__ = this;
var ___$1 = this;var ace_instance = ace.edit(om.core.get_node.call(null,self__.owner));cljs.core.reset_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"ace","ace",1638744810)),ace_instance);
ace_instance.getSession().on("change",((function (ace_instance,___$1,validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652){
return (function (){return om_ace_demo.change_handler.call(null,self__.owner,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"ace","ace",1638744810)));
});})(ace_instance,___$1,validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652))
);
return om_ace_demo.set_value_BANG_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"ace","ace",1638744810)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.data));
});})(validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652))
;
om_ace_demo.t15596.prototype.om$core$IWillMount$ = true;
om_ace_demo.t15596.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652){
return (function (_){var self__ = this;
var ___$1 = this;var editor_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editor-chan","editor-chan",-1774790532));var c__8992__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8992__auto__,editor_chan,___$1,validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652){
return (function (){var f__8993__auto__ = (function (){var switch__8977__auto__ = ((function (c__8992__auto__,editor_chan,___$1,validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652){
return (function (state_15621){var state_val_15622 = (state_15621[(1)]);if((state_val_15622 === (7)))
{var inst_15602 = (state_15621[(2)]);var inst_15603 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"save!","save!",-1137373803),inst_15602);var state_15621__$1 = state_15621;if(inst_15603)
{var statearr_15623_15656 = state_15621__$1;(statearr_15623_15656[(1)] = (8));
} else
{var statearr_15624_15657 = state_15621__$1;(statearr_15624_15657[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15622 === (1)))
{var state_15621__$1 = state_15621;var statearr_15625_15658 = state_15621__$1;(statearr_15625_15658[(2)] = null);
(statearr_15625_15658[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15622 === (4)))
{var state_15621__$1 = state_15621;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15621__$1,(7),editor_chan);
} else
{if((state_val_15622 === (13)))
{var inst_15610 = (state_15621[(2)]);var state_15621__$1 = state_15621;var statearr_15626_15659 = state_15621__$1;(statearr_15626_15659[(2)] = inst_15610);
(statearr_15626_15659[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15622 === (6)))
{var inst_15617 = (state_15621[(2)]);var state_15621__$1 = state_15621;var statearr_15627_15660 = state_15621__$1;(statearr_15627_15660[(2)] = inst_15617);
(statearr_15627_15660[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15622 === (3)))
{var inst_15619 = (state_15621[(2)]);var state_15621__$1 = state_15621;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15621__$1,inst_15619);
} else
{if((state_val_15622 === (12)))
{var state_15621__$1 = state_15621;var statearr_15628_15661 = state_15621__$1;(statearr_15628_15661[(2)] = null);
(statearr_15628_15661[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15622 === (2)))
{var state_15621__$1 = state_15621;if(true)
{var statearr_15629_15662 = state_15621__$1;(statearr_15629_15662[(1)] = (4));
} else
{var statearr_15630_15663 = state_15621__$1;(statearr_15630_15663[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15622 === (11)))
{var inst_15605 = (state_15621[(7)]);var inst_15607 = om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"value","value",305978217),inst_15605);var state_15621__$1 = state_15621;var statearr_15631_15664 = state_15621__$1;(statearr_15631_15664[(2)] = inst_15607);
(statearr_15631_15664[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15622 === (9)))
{var state_15621__$1 = state_15621;var statearr_15632_15665 = state_15621__$1;(statearr_15632_15665[(2)] = null);
(statearr_15632_15665[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15622 === (5)))
{var state_15621__$1 = state_15621;var statearr_15633_15666 = state_15621__$1;(statearr_15633_15666[(2)] = null);
(statearr_15633_15666[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15622 === (10)))
{var inst_15613 = (state_15621[(2)]);var state_15621__$1 = (function (){var statearr_15634 = state_15621;(statearr_15634[(8)] = inst_15613);
return statearr_15634;
})();var statearr_15635_15667 = state_15621__$1;(statearr_15635_15667[(2)] = null);
(statearr_15635_15667[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15622 === (8)))
{var inst_15605 = (state_15621[(7)]);var inst_15605__$1 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"edited-value","edited-value",607144183));var state_15621__$1 = (function (){var statearr_15636 = state_15621;(statearr_15636[(7)] = inst_15605__$1);
return statearr_15636;
})();if(cljs.core.truth_(inst_15605__$1))
{var statearr_15637_15668 = state_15621__$1;(statearr_15637_15668[(1)] = (11));
} else
{var statearr_15638_15669 = state_15621__$1;(statearr_15638_15669[(1)] = (12));
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
});})(c__8992__auto__,editor_chan,___$1,validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652))
;return ((function (switch__8977__auto__,c__8992__auto__,editor_chan,___$1,validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652){
return (function() {
var state_machine__8978__auto__ = null;
var state_machine__8978__auto____0 = (function (){var statearr_15642 = [null,null,null,null,null,null,null,null,null];(statearr_15642[(0)] = state_machine__8978__auto__);
(statearr_15642[(1)] = (1));
return statearr_15642;
});
var state_machine__8978__auto____1 = (function (state_15621){while(true){
var ret_value__8979__auto__ = (function (){try{while(true){
var result__8980__auto__ = switch__8977__auto__.call(null,state_15621);if(cljs.core.keyword_identical_QMARK_.call(null,result__8980__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8980__auto__;
}
break;
}
}catch (e15643){if((e15643 instanceof Object))
{var ex__8981__auto__ = e15643;var statearr_15644_15670 = state_15621;(statearr_15644_15670[(5)] = ex__8981__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15621);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15643;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8979__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15671 = state_15621;
state_15621 = G__15671;
continue;
}
} else
{return ret_value__8979__auto__;
}
break;
}
});
state_machine__8978__auto__ = function(state_15621){
switch(arguments.length){
case 0:
return state_machine__8978__auto____0.call(this);
case 1:
return state_machine__8978__auto____1.call(this,state_15621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8978__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8978__auto____0;
state_machine__8978__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8978__auto____1;
return state_machine__8978__auto__;
})()
;})(switch__8977__auto__,c__8992__auto__,editor_chan,___$1,validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652))
})();var state__8994__auto__ = (function (){var statearr_15645 = f__8993__auto__.call(null);(statearr_15645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8992__auto__);
return statearr_15645;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8994__auto__);
});})(c__8992__auto__,editor_chan,___$1,validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652))
);
return c__8992__auto__;
});})(validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652))
;
om_ace_demo.t15596.prototype.om$core$IRender$ = true;
om_ace_demo.t15596.prototype.om$core$IRender$render$arity$1 = ((function (validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"id": "ace", "style": {"height": "400px"}});
});})(validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652))
;
om_ace_demo.t15596.prototype.om$core$IInitState$ = true;
om_ace_demo.t15596.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ace","ace",1638744810),cljs.core.atom.call(null,null)], null);
});})(validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652))
;
om_ace_demo.t15596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652){
return (function (_15598){var self__ = this;
var _15598__$1 = this;return self__.meta15597;
});})(validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652))
;
om_ace_demo.t15596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652){
return (function (_15598,meta15597__$1){var self__ = this;
var _15598__$1 = this;return (new om_ace_demo.t15596(self__.owner,self__.data,self__.input_schema15539,self__.G__15542,self__.editor_area,self__.validate__5954__auto__,self__.G__15543,self__.input_checker15540,self__.output_checker15541,self__.ufv__,self__.output_schema15538,meta15597__$1));
});})(validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652))
;
om_ace_demo.__GT_t15596 = ((function (validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652){
return (function __GT_t15596(owner__$1,data__$1,input_schema15539__$1,G__15542__$1,editor_area__$1,validate__5954__auto____$1,G__15543__$1,input_checker15540__$1,output_checker15541__$1,ufv____$1,output_schema15538__$1,meta15597){return (new om_ace_demo.t15596(owner__$1,data__$1,input_schema15539__$1,G__15542__$1,editor_area__$1,validate__5954__auto____$1,G__15543__$1,input_checker15540__$1,output_checker15541__$1,ufv____$1,output_schema15538__$1,meta15597));
});})(validate__5954__auto__,ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652))
;
}
return (new om_ace_demo.t15596(owner,data,input_schema15539_15650,G__15542,editor_area,validate__5954__auto__,G__15543,input_checker15540_15651,output_checker15541_15652,ufv___15648,output_schema15538_15649,null));
break;
}
})();if(cljs.core.truth_(validate__5954__auto__))
{var temp__4126__auto___15672 = output_checker15541_15652.call(null,o__5957__auto__);if(cljs.core.truth_(temp__4126__auto___15672))
{var error__5956__auto___15673 = temp__4126__auto___15672;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"editor-area","editor-area",-409533938,null),cljs.core.pr_str.call(null,error__5956__auto___15673)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema15538_15649,new cljs.core.Keyword(null,"value","value",305978217),o__5957__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5956__auto___15673], null));
} else
{}
} else
{}
return o__5957__auto__;
});})(ufv___15648,output_schema15538_15649,input_schema15539_15650,input_checker15540_15651,output_checker15541_15652))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_ace_demo.editor_area),schema.core.make_fn_schema.call(null,output_schema15538_15649,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15539_15650], null)));
om_ace_demo.__GT_editor_area = (function() {
var __GT_editor_area = null;
var __GT_editor_area__1 = (function (cursor__7731__auto__){return om.core.build.call(null,om_ace_demo.editor_area,cursor__7731__auto__);
});
var __GT_editor_area__2 = (function (cursor__7731__auto__,m15537){return om.core.build.call(null,om_ace_demo.editor_area,cursor__7731__auto__,m15537);
});
__GT_editor_area = function(cursor__7731__auto__,m15537){
switch(arguments.length){
case 1:
return __GT_editor_area__1.call(this,cursor__7731__auto__);
case 2:
return __GT_editor_area__2.call(this,cursor__7731__auto__,m15537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_editor_area.cljs$core$IFn$_invoke$arity$1 = __GT_editor_area__1;
__GT_editor_area.cljs$core$IFn$_invoke$arity$2 = __GT_editor_area__2;
return __GT_editor_area;
})()
;
var ufv___15691 = schema.utils.use_fn_validation;var output_schema15675_15692 = schema.core.Any;var input_schema15676_15693 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker15677_15694 = schema.core.checker.call(null,input_schema15676_15693);var output_checker15678_15695 = schema.core.checker.call(null,output_schema15675_15692);/**
* Inputs: [data owner]
*/
om_ace_demo.editor = ((function (ufv___15691,output_schema15675_15692,input_schema15676_15693,input_checker15677_15694,output_checker15678_15695){
return (function editor(G__15679,G__15680){var validate__5954__auto__ = ufv___15691.get_cell();if(cljs.core.truth_(validate__5954__auto__))
{var args__5955__auto___15696 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15679,G__15680], null);var temp__4126__auto___15697 = input_checker15677_15694.call(null,args__5955__auto___15696);if(cljs.core.truth_(temp__4126__auto___15697))
{var error__5956__auto___15698 = temp__4126__auto___15697;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"editor","editor",651153757,null),cljs.core.pr_str.call(null,error__5956__auto___15698)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema15676_15693,new cljs.core.Keyword(null,"value","value",305978217),args__5955__auto___15696,new cljs.core.Keyword(null,"error","error",-978969032),error__5956__auto___15698], null));
} else
{}
} else
{}
var o__5957__auto__ = (function (){var data = G__15679;var owner = G__15680;while(true){
if(typeof om_ace_demo.t15686 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_ace_demo.t15686 = (function (owner,data,output_schema15675,G__15680,validate__5954__auto__,input_checker15677,G__15679,output_checker15678,input_schema15676,editor,ufv__,meta15687){
this.owner = owner;
this.data = data;
this.output_schema15675 = output_schema15675;
this.G__15680 = G__15680;
this.validate__5954__auto__ = validate__5954__auto__;
this.input_checker15677 = input_checker15677;
this.G__15679 = G__15679;
this.output_checker15678 = output_checker15678;
this.input_schema15676 = input_schema15676;
this.editor = editor;
this.ufv__ = ufv__;
this.meta15687 = meta15687;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_ace_demo.t15686.cljs$lang$type = true;
om_ace_demo.t15686.cljs$lang$ctorStr = "om-ace-demo/t15686";
om_ace_demo.t15686.cljs$lang$ctorPrWriter = ((function (validate__5954__auto__,ufv___15691,output_schema15675_15692,input_schema15676_15693,input_checker15677_15694,output_checker15678_15695){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-ace-demo/t15686");
});})(validate__5954__auto__,ufv___15691,output_schema15675_15692,input_schema15676_15693,input_checker15677_15694,output_checker15678_15695))
;
om_ace_demo.t15686.prototype.om$core$IDisplayName$ = true;
om_ace_demo.t15686.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5954__auto__,ufv___15691,output_schema15675_15692,input_schema15676_15693,input_checker15677_15694,output_checker15678_15695){
return (function (_){var self__ = this;
var ___$1 = this;return "editor";
});})(validate__5954__auto__,ufv___15691,output_schema15675_15692,input_schema15676_15693,input_checker15677_15694,output_checker15678_15695))
;
om_ace_demo.t15686.prototype.om$core$IRenderState$ = true;
om_ace_demo.t15686.prototype.om$core$IRenderState$render_state$arity$2 = ((function (validate__5954__auto__,ufv___15691,output_schema15675_15692,input_schema15676_15693,input_checker15677_15694,output_checker15678_15695){
return (function (_,p__15689){var self__ = this;
var map__15690 = p__15689;var map__15690__$1 = ((cljs.core.seq_QMARK_.call(null,map__15690))?cljs.core.apply.call(null,cljs.core.hash_map,map__15690):map__15690);var editor_chan = cljs.core.get.call(null,map__15690__$1,new cljs.core.Keyword(null,"editor-chan","editor-chan",-1774790532));var ___$1 = this;return React.DOM.div(null,React.DOM.button({"onClick": ((function (___$1,map__15690,map__15690__$1,editor_chan,validate__5954__auto__,ufv___15691,output_schema15675_15692,input_schema15676_15693,input_checker15677_15694,output_checker15678_15695){
return (function (){return cljs.core.async.put_BANG_.call(null,editor_chan,new cljs.core.Keyword(null,"save!","save!",-1137373803));
});})(___$1,map__15690,map__15690__$1,editor_chan,validate__5954__auto__,ufv___15691,output_schema15675_15692,input_schema15676_15693,input_checker15677_15694,output_checker15678_15695))
},"Save"),sablono.interpreter.interpret.call(null,om_ace_demo.__GT_editor_area.call(null,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor-chan","editor-chan",-1774790532),editor_chan], null)], null))));
});})(validate__5954__auto__,ufv___15691,output_schema15675_15692,input_schema15676_15693,input_checker15677_15694,output_checker15678_15695))
;
om_ace_demo.t15686.prototype.om$core$IInitState$ = true;
om_ace_demo.t15686.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__5954__auto__,ufv___15691,output_schema15675_15692,input_schema15676_15693,input_checker15677_15694,output_checker15678_15695){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor-chan","editor-chan",-1774790532),cljs.core.async.chan.call(null)], null);
});})(validate__5954__auto__,ufv___15691,output_schema15675_15692,input_schema15676_15693,input_checker15677_15694,output_checker15678_15695))
;
om_ace_demo.t15686.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5954__auto__,ufv___15691,output_schema15675_15692,input_schema15676_15693,input_checker15677_15694,output_checker15678_15695){
return (function (_15688){var self__ = this;
var _15688__$1 = this;return self__.meta15687;
});})(validate__5954__auto__,ufv___15691,output_schema15675_15692,input_schema15676_15693,input_checker15677_15694,output_checker15678_15695))
;
om_ace_demo.t15686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5954__auto__,ufv___15691,output_schema15675_15692,input_schema15676_15693,input_checker15677_15694,output_checker15678_15695){
return (function (_15688,meta15687__$1){var self__ = this;
var _15688__$1 = this;return (new om_ace_demo.t15686(self__.owner,self__.data,self__.output_schema15675,self__.G__15680,self__.validate__5954__auto__,self__.input_checker15677,self__.G__15679,self__.output_checker15678,self__.input_schema15676,self__.editor,self__.ufv__,meta15687__$1));
});})(validate__5954__auto__,ufv___15691,output_schema15675_15692,input_schema15676_15693,input_checker15677_15694,output_checker15678_15695))
;
om_ace_demo.__GT_t15686 = ((function (validate__5954__auto__,ufv___15691,output_schema15675_15692,input_schema15676_15693,input_checker15677_15694,output_checker15678_15695){
return (function __GT_t15686(owner__$1,data__$1,output_schema15675__$1,G__15680__$1,validate__5954__auto____$1,input_checker15677__$1,G__15679__$1,output_checker15678__$1,input_schema15676__$1,editor__$1,ufv____$1,meta15687){return (new om_ace_demo.t15686(owner__$1,data__$1,output_schema15675__$1,G__15680__$1,validate__5954__auto____$1,input_checker15677__$1,G__15679__$1,output_checker15678__$1,input_schema15676__$1,editor__$1,ufv____$1,meta15687));
});})(validate__5954__auto__,ufv___15691,output_schema15675_15692,input_schema15676_15693,input_checker15677_15694,output_checker15678_15695))
;
}
return (new om_ace_demo.t15686(owner,data,output_schema15675_15692,G__15680,validate__5954__auto__,input_checker15677_15694,G__15679,output_checker15678_15695,input_schema15676_15693,editor,ufv___15691,null));
break;
}
})();if(cljs.core.truth_(validate__5954__auto__))
{var temp__4126__auto___15699 = output_checker15678_15695.call(null,o__5957__auto__);if(cljs.core.truth_(temp__4126__auto___15699))
{var error__5956__auto___15700 = temp__4126__auto___15699;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"editor","editor",651153757,null),cljs.core.pr_str.call(null,error__5956__auto___15700)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema15675_15692,new cljs.core.Keyword(null,"value","value",305978217),o__5957__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5956__auto___15700], null));
} else
{}
} else
{}
return o__5957__auto__;
});})(ufv___15691,output_schema15675_15692,input_schema15676_15693,input_checker15677_15694,output_checker15678_15695))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_ace_demo.editor),schema.core.make_fn_schema.call(null,output_schema15675_15692,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15676_15693], null)));
om_ace_demo.__GT_editor = (function() {
var __GT_editor = null;
var __GT_editor__1 = (function (cursor__7731__auto__){return om.core.build.call(null,om_ace_demo.editor,cursor__7731__auto__);
});
var __GT_editor__2 = (function (cursor__7731__auto__,m15674){return om.core.build.call(null,om_ace_demo.editor,cursor__7731__auto__,m15674);
});
__GT_editor = function(cursor__7731__auto__,m15674){
switch(arguments.length){
case 1:
return __GT_editor__1.call(this,cursor__7731__auto__);
case 2:
return __GT_editor__2.call(this,cursor__7731__auto__,m15674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_editor.cljs$core$IFn$_invoke$arity$1 = __GT_editor__1;
__GT_editor.cljs$core$IFn$_invoke$arity$2 = __GT_editor__2;
return __GT_editor;
})()
;
var ufv___15714 = schema.utils.use_fn_validation;var output_schema15702_15715 = schema.core.Any;var input_schema15703_15716 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",1407862150,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker15704_15717 = schema.core.checker.call(null,input_schema15703_15716);var output_checker15705_15718 = schema.core.checker.call(null,output_schema15702_15715);/**
* Inputs: [data owner]
*/
om_ace_demo.app = ((function (ufv___15714,output_schema15702_15715,input_schema15703_15716,input_checker15704_15717,output_checker15705_15718){
return (function app(G__15706,G__15707){var validate__5954__auto__ = ufv___15714.get_cell();if(cljs.core.truth_(validate__5954__auto__))
{var args__5955__auto___15719 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__15706,G__15707], null);var temp__4126__auto___15720 = input_checker15704_15717.call(null,args__5955__auto___15719);if(cljs.core.truth_(temp__4126__auto___15720))
{var error__5956__auto___15721 = temp__4126__auto___15720;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__5956__auto___15721)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema15703_15716,new cljs.core.Keyword(null,"value","value",305978217),args__5955__auto___15719,new cljs.core.Keyword(null,"error","error",-978969032),error__5956__auto___15721], null));
} else
{}
} else
{}
var o__5957__auto__ = (function (){var data = G__15706;var owner = G__15707;while(true){
if(typeof om_ace_demo.t15711 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_ace_demo.t15711 = (function (G__15707,owner,data,output_schema15702,validate__5954__auto__,input_checker15704,output_checker15705,app,input_schema15703,ufv__,G__15706,meta15712){
this.G__15707 = G__15707;
this.owner = owner;
this.data = data;
this.output_schema15702 = output_schema15702;
this.validate__5954__auto__ = validate__5954__auto__;
this.input_checker15704 = input_checker15704;
this.output_checker15705 = output_checker15705;
this.app = app;
this.input_schema15703 = input_schema15703;
this.ufv__ = ufv__;
this.G__15706 = G__15706;
this.meta15712 = meta15712;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_ace_demo.t15711.cljs$lang$type = true;
om_ace_demo.t15711.cljs$lang$ctorStr = "om-ace-demo/t15711";
om_ace_demo.t15711.cljs$lang$ctorPrWriter = ((function (validate__5954__auto__,ufv___15714,output_schema15702_15715,input_schema15703_15716,input_checker15704_15717,output_checker15705_15718){
return (function (this__4111__auto__,writer__4112__auto__,opt__4113__auto__){return cljs.core._write.call(null,writer__4112__auto__,"om-ace-demo/t15711");
});})(validate__5954__auto__,ufv___15714,output_schema15702_15715,input_schema15703_15716,input_checker15704_15717,output_checker15705_15718))
;
om_ace_demo.t15711.prototype.om$core$IDisplayName$ = true;
om_ace_demo.t15711.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__5954__auto__,ufv___15714,output_schema15702_15715,input_schema15703_15716,input_checker15704_15717,output_checker15705_15718){
return (function (_){var self__ = this;
var ___$1 = this;return "app";
});})(validate__5954__auto__,ufv___15714,output_schema15702_15715,input_schema15703_15716,input_checker15704_15717,output_checker15705_15718))
;
om_ace_demo.t15711.prototype.om$core$IRender$ = true;
om_ace_demo.t15711.prototype.om$core$IRender$render$arity$1 = ((function (validate__5954__auto__,ufv___15714,output_schema15702_15715,input_schema15703_15716,input_checker15704_15717,output_checker15705_15718){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.pre(null,"Raw state: ",sablono.interpreter.interpret.call(null,cljs.core.pr_str.call(null,self__.data))),sablono.interpreter.interpret.call(null,om_ace_demo.__GT_editor.call(null,self__.data)));
});})(validate__5954__auto__,ufv___15714,output_schema15702_15715,input_schema15703_15716,input_checker15704_15717,output_checker15705_15718))
;
om_ace_demo.t15711.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__5954__auto__,ufv___15714,output_schema15702_15715,input_schema15703_15716,input_checker15704_15717,output_checker15705_15718){
return (function (_15713){var self__ = this;
var _15713__$1 = this;return self__.meta15712;
});})(validate__5954__auto__,ufv___15714,output_schema15702_15715,input_schema15703_15716,input_checker15704_15717,output_checker15705_15718))
;
om_ace_demo.t15711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__5954__auto__,ufv___15714,output_schema15702_15715,input_schema15703_15716,input_checker15704_15717,output_checker15705_15718){
return (function (_15713,meta15712__$1){var self__ = this;
var _15713__$1 = this;return (new om_ace_demo.t15711(self__.G__15707,self__.owner,self__.data,self__.output_schema15702,self__.validate__5954__auto__,self__.input_checker15704,self__.output_checker15705,self__.app,self__.input_schema15703,self__.ufv__,self__.G__15706,meta15712__$1));
});})(validate__5954__auto__,ufv___15714,output_schema15702_15715,input_schema15703_15716,input_checker15704_15717,output_checker15705_15718))
;
om_ace_demo.__GT_t15711 = ((function (validate__5954__auto__,ufv___15714,output_schema15702_15715,input_schema15703_15716,input_checker15704_15717,output_checker15705_15718){
return (function __GT_t15711(G__15707__$1,owner__$1,data__$1,output_schema15702__$1,validate__5954__auto____$1,input_checker15704__$1,output_checker15705__$1,app__$1,input_schema15703__$1,ufv____$1,G__15706__$1,meta15712){return (new om_ace_demo.t15711(G__15707__$1,owner__$1,data__$1,output_schema15702__$1,validate__5954__auto____$1,input_checker15704__$1,output_checker15705__$1,app__$1,input_schema15703__$1,ufv____$1,G__15706__$1,meta15712));
});})(validate__5954__auto__,ufv___15714,output_schema15702_15715,input_schema15703_15716,input_checker15704_15717,output_checker15705_15718))
;
}
return (new om_ace_demo.t15711(G__15707,owner,data,output_schema15702_15715,validate__5954__auto__,input_checker15704_15717,output_checker15705_15718,app,input_schema15703_15716,ufv___15714,G__15706,null));
break;
}
})();if(cljs.core.truth_(validate__5954__auto__))
{var temp__4126__auto___15722 = output_checker15705_15718.call(null,o__5957__auto__);if(cljs.core.truth_(temp__4126__auto___15722))
{var error__5956__auto___15723 = temp__4126__auto___15722;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"app","app",1079569820,null),cljs.core.pr_str.call(null,error__5956__auto___15723)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema15702_15715,new cljs.core.Keyword(null,"value","value",305978217),o__5957__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__5956__auto___15723], null));
} else
{}
} else
{}
return o__5957__auto__;
});})(ufv___15714,output_schema15702_15715,input_schema15703_15716,input_checker15704_15717,output_checker15705_15718))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_ace_demo.app),schema.core.make_fn_schema.call(null,output_schema15702_15715,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema15703_15716], null)));
om_ace_demo.__GT_app = (function() {
var __GT_app = null;
var __GT_app__1 = (function (cursor__7731__auto__){return om.core.build.call(null,om_ace_demo.app,cursor__7731__auto__);
});
var __GT_app__2 = (function (cursor__7731__auto__,m15701){return om.core.build.call(null,om_ace_demo.app,cursor__7731__auto__,m15701);
});
__GT_app = function(cursor__7731__auto__,m15701){
switch(arguments.length){
case 1:
return __GT_app__1.call(this,cursor__7731__auto__);
case 2:
return __GT_app__2.call(this,cursor__7731__auto__,m15701);
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