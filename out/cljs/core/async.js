// Compiled by ClojureScript 0.0-2280
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15416 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15416 = (function (f,fn_handler,meta15417){
this.f = f;
this.fn_handler = fn_handler;
this.meta15417 = meta15417;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15416.cljs$lang$type = true;
cljs.core.async.t15416.cljs$lang$ctorStr = "cljs.core.async/t15416";
cljs.core.async.t15416.cljs$lang$ctorPrWriter = (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t15416");
});
cljs.core.async.t15416.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15416.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15416.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15418){var self__ = this;
var _15418__$1 = this;return self__.meta15417;
});
cljs.core.async.t15416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15418,meta15417__$1){var self__ = this;
var _15418__$1 = this;return (new cljs.core.async.t15416(self__.f,self__.fn_handler,meta15417__$1));
});
cljs.core.async.__GT_t15416 = (function __GT_t15416(f__$1,fn_handler__$1,meta15417){return (new cljs.core.async.t15416(f__$1,fn_handler__$1,meta15417));
});
}
return (new cljs.core.async.t15416(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15420 = buff;if(G__15420)
{var bit__4192__auto__ = null;if(cljs.core.truth_((function (){var or__3542__auto__ = bit__4192__auto__;if(cljs.core.truth_(or__3542__auto__))
{return or__3542__auto__;
} else
{return G__15420.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15420.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15420);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15420);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_15421 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15421);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15421,ret){
return (function (){return fn1.call(null,val_15421);
});})(val_15421,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3530__auto__ = ret;if(cljs.core.truth_(and__3530__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3530__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4398__auto___15422 = n;var x_15423 = (0);while(true){
if((x_15423 < n__4398__auto___15422))
{(a[x_15423] = (0));
{
var G__15424 = (x_15423 + (1));
x_15423 = G__15424;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__15425 = (i + (1));
i = G__15425;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15429 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15429 = (function (flag,alt_flag,meta15430){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15430 = meta15430;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15429.cljs$lang$type = true;
cljs.core.async.t15429.cljs$lang$ctorStr = "cljs.core.async/t15429";
cljs.core.async.t15429.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t15429");
});})(flag))
;
cljs.core.async.t15429.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15429.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15431){var self__ = this;
var _15431__$1 = this;return self__.meta15430;
});})(flag))
;
cljs.core.async.t15429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15431,meta15430__$1){var self__ = this;
var _15431__$1 = this;return (new cljs.core.async.t15429(self__.flag,self__.alt_flag,meta15430__$1));
});})(flag))
;
cljs.core.async.__GT_t15429 = ((function (flag){
return (function __GT_t15429(flag__$1,alt_flag__$1,meta15430){return (new cljs.core.async.t15429(flag__$1,alt_flag__$1,meta15430));
});})(flag))
;
}
return (new cljs.core.async.t15429(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15435 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15435 = (function (cb,flag,alt_handler,meta15436){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15436 = meta15436;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15435.cljs$lang$type = true;
cljs.core.async.t15435.cljs$lang$ctorStr = "cljs.core.async/t15435";
cljs.core.async.t15435.cljs$lang$ctorPrWriter = (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t15435");
});
cljs.core.async.t15435.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15435.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15435.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15437){var self__ = this;
var _15437__$1 = this;return self__.meta15436;
});
cljs.core.async.t15435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15437,meta15436__$1){var self__ = this;
var _15437__$1 = this;return (new cljs.core.async.t15435(self__.cb,self__.flag,self__.alt_handler,meta15436__$1));
});
cljs.core.async.__GT_t15435 = (function __GT_t15435(cb__$1,flag__$1,alt_handler__$1,meta15436){return (new cljs.core.async.t15435(cb__$1,flag__$1,alt_handler__$1,meta15436));
});
}
return (new cljs.core.async.t15435(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15438_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15438_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3542__auto__ = wport;if(cljs.core.truth_(or__3542__auto__))
{return or__3542__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__15439 = (i + (1));
i = G__15439;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3542__auto__ = ret;if(cljs.core.truth_(or__3542__auto__))
{return or__3542__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3530__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3530__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3530__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__15440){var map__15442 = p__15440;var map__15442__$1 = ((cljs.core.seq_QMARK_.call(null,map__15442))?cljs.core.apply.call(null,cljs.core.hash_map,map__15442):map__15442);var opts = map__15442__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15440 = null;if (arguments.length > 1) {
  p__15440 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15440);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15443){
var ports = cljs.core.first(arglist__15443);
var p__15440 = cljs.core.rest(arglist__15443);
return alts_BANG___delegate(ports,p__15440);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15451 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15451 = (function (ch,f,map_LT_,meta15452){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15452 = meta15452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15451.cljs$lang$type = true;
cljs.core.async.t15451.cljs$lang$ctorStr = "cljs.core.async/t15451";
cljs.core.async.t15451.cljs$lang$ctorPrWriter = (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t15451");
});
cljs.core.async.t15451.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15451.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15451.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15451.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15454 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15454 = (function (fn1,_,meta15452,ch,f,map_LT_,meta15455){
this.fn1 = fn1;
this._ = _;
this.meta15452 = meta15452;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15455 = meta15455;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15454.cljs$lang$type = true;
cljs.core.async.t15454.cljs$lang$ctorStr = "cljs.core.async/t15454";
cljs.core.async.t15454.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t15454");
});})(___$1))
;
cljs.core.async.t15454.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15454.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15454.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15454.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15444_SHARP_){return f1.call(null,(((p1__15444_SHARP_ == null))?null:self__.f.call(null,p1__15444_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15456){var self__ = this;
var _15456__$1 = this;return self__.meta15455;
});})(___$1))
;
cljs.core.async.t15454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15456,meta15455__$1){var self__ = this;
var _15456__$1 = this;return (new cljs.core.async.t15454(self__.fn1,self__._,self__.meta15452,self__.ch,self__.f,self__.map_LT_,meta15455__$1));
});})(___$1))
;
cljs.core.async.__GT_t15454 = ((function (___$1){
return (function __GT_t15454(fn1__$1,___$2,meta15452__$1,ch__$2,f__$2,map_LT___$2,meta15455){return (new cljs.core.async.t15454(fn1__$1,___$2,meta15452__$1,ch__$2,f__$2,map_LT___$2,meta15455));
});})(___$1))
;
}
return (new cljs.core.async.t15454(fn1,___$1,self__.meta15452,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3530__auto__ = ret;if(cljs.core.truth_(and__3530__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3530__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15451.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15451.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15453){var self__ = this;
var _15453__$1 = this;return self__.meta15452;
});
cljs.core.async.t15451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15453,meta15452__$1){var self__ = this;
var _15453__$1 = this;return (new cljs.core.async.t15451(self__.ch,self__.f,self__.map_LT_,meta15452__$1));
});
cljs.core.async.__GT_t15451 = (function __GT_t15451(ch__$1,f__$1,map_LT___$1,meta15452){return (new cljs.core.async.t15451(ch__$1,f__$1,map_LT___$1,meta15452));
});
}
return (new cljs.core.async.t15451(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15460 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15460 = (function (ch,f,map_GT_,meta15461){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15461 = meta15461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15460.cljs$lang$type = true;
cljs.core.async.t15460.cljs$lang$ctorStr = "cljs.core.async/t15460";
cljs.core.async.t15460.cljs$lang$ctorPrWriter = (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t15460");
});
cljs.core.async.t15460.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15460.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15460.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15460.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15460.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15460.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15462){var self__ = this;
var _15462__$1 = this;return self__.meta15461;
});
cljs.core.async.t15460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15462,meta15461__$1){var self__ = this;
var _15462__$1 = this;return (new cljs.core.async.t15460(self__.ch,self__.f,self__.map_GT_,meta15461__$1));
});
cljs.core.async.__GT_t15460 = (function __GT_t15460(ch__$1,f__$1,map_GT___$1,meta15461){return (new cljs.core.async.t15460(ch__$1,f__$1,map_GT___$1,meta15461));
});
}
return (new cljs.core.async.t15460(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15466 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15466 = (function (ch,p,filter_GT_,meta15467){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15467 = meta15467;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15466.cljs$lang$type = true;
cljs.core.async.t15466.cljs$lang$ctorStr = "cljs.core.async/t15466";
cljs.core.async.t15466.cljs$lang$ctorPrWriter = (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t15466");
});
cljs.core.async.t15466.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15466.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15466.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15466.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15466.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15466.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15468){var self__ = this;
var _15468__$1 = this;return self__.meta15467;
});
cljs.core.async.t15466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15468,meta15467__$1){var self__ = this;
var _15468__$1 = this;return (new cljs.core.async.t15466(self__.ch,self__.p,self__.filter_GT_,meta15467__$1));
});
cljs.core.async.__GT_t15466 = (function __GT_t15466(ch__$1,p__$1,filter_GT___$1,meta15467){return (new cljs.core.async.t15466(ch__$1,p__$1,filter_GT___$1,meta15467));
});
}
return (new cljs.core.async.t15466(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8977__auto___15551 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8977__auto___15551,out){
return (function (){var f__8978__auto__ = (function (){var switch__8962__auto__ = ((function (c__8977__auto___15551,out){
return (function (state_15530){var state_val_15531 = (state_15530[(1)]);if((state_val_15531 === (7)))
{var inst_15526 = (state_15530[(2)]);var state_15530__$1 = state_15530;var statearr_15532_15552 = state_15530__$1;(statearr_15532_15552[(2)] = inst_15526);
(statearr_15532_15552[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15531 === (1)))
{var state_15530__$1 = state_15530;var statearr_15533_15553 = state_15530__$1;(statearr_15533_15553[(2)] = null);
(statearr_15533_15553[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15531 === (4)))
{var inst_15512 = (state_15530[(7)]);var inst_15512__$1 = (state_15530[(2)]);var inst_15513 = (inst_15512__$1 == null);var state_15530__$1 = (function (){var statearr_15534 = state_15530;(statearr_15534[(7)] = inst_15512__$1);
return statearr_15534;
})();if(cljs.core.truth_(inst_15513))
{var statearr_15535_15554 = state_15530__$1;(statearr_15535_15554[(1)] = (5));
} else
{var statearr_15536_15555 = state_15530__$1;(statearr_15536_15555[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15531 === (6)))
{var inst_15512 = (state_15530[(7)]);var inst_15517 = p.call(null,inst_15512);var state_15530__$1 = state_15530;if(cljs.core.truth_(inst_15517))
{var statearr_15537_15556 = state_15530__$1;(statearr_15537_15556[(1)] = (8));
} else
{var statearr_15538_15557 = state_15530__$1;(statearr_15538_15557[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15531 === (3)))
{var inst_15528 = (state_15530[(2)]);var state_15530__$1 = state_15530;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15530__$1,inst_15528);
} else
{if((state_val_15531 === (2)))
{var state_15530__$1 = state_15530;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15530__$1,(4),ch);
} else
{if((state_val_15531 === (11)))
{var inst_15520 = (state_15530[(2)]);var state_15530__$1 = state_15530;var statearr_15539_15558 = state_15530__$1;(statearr_15539_15558[(2)] = inst_15520);
(statearr_15539_15558[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15531 === (9)))
{var state_15530__$1 = state_15530;var statearr_15540_15559 = state_15530__$1;(statearr_15540_15559[(2)] = null);
(statearr_15540_15559[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15531 === (5)))
{var inst_15515 = cljs.core.async.close_BANG_.call(null,out);var state_15530__$1 = state_15530;var statearr_15541_15560 = state_15530__$1;(statearr_15541_15560[(2)] = inst_15515);
(statearr_15541_15560[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15531 === (10)))
{var inst_15523 = (state_15530[(2)]);var state_15530__$1 = (function (){var statearr_15542 = state_15530;(statearr_15542[(8)] = inst_15523);
return statearr_15542;
})();var statearr_15543_15561 = state_15530__$1;(statearr_15543_15561[(2)] = null);
(statearr_15543_15561[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15531 === (8)))
{var inst_15512 = (state_15530[(7)]);var state_15530__$1 = state_15530;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15530__$1,(11),out,inst_15512);
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
});})(c__8977__auto___15551,out))
;return ((function (switch__8962__auto__,c__8977__auto___15551,out){
return (function() {
var state_machine__8963__auto__ = null;
var state_machine__8963__auto____0 = (function (){var statearr_15547 = [null,null,null,null,null,null,null,null,null];(statearr_15547[(0)] = state_machine__8963__auto__);
(statearr_15547[(1)] = (1));
return statearr_15547;
});
var state_machine__8963__auto____1 = (function (state_15530){while(true){
var ret_value__8964__auto__ = (function (){try{while(true){
var result__8965__auto__ = switch__8962__auto__.call(null,state_15530);if(cljs.core.keyword_identical_QMARK_.call(null,result__8965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8965__auto__;
}
break;
}
}catch (e15548){if((e15548 instanceof Object))
{var ex__8966__auto__ = e15548;var statearr_15549_15562 = state_15530;(statearr_15549_15562[(5)] = ex__8966__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15530);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15548;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15563 = state_15530;
state_15530 = G__15563;
continue;
}
} else
{return ret_value__8964__auto__;
}
break;
}
});
state_machine__8963__auto__ = function(state_15530){
switch(arguments.length){
case 0:
return state_machine__8963__auto____0.call(this);
case 1:
return state_machine__8963__auto____1.call(this,state_15530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8963__auto____0;
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8963__auto____1;
return state_machine__8963__auto__;
})()
;})(switch__8962__auto__,c__8977__auto___15551,out))
})();var state__8979__auto__ = (function (){var statearr_15550 = f__8978__auto__.call(null);(statearr_15550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8977__auto___15551);
return statearr_15550;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8979__auto__);
});})(c__8977__auto___15551,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__8977__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8977__auto__){
return (function (){var f__8978__auto__ = (function (){var switch__8962__auto__ = ((function (c__8977__auto__){
return (function (state_15715){var state_val_15716 = (state_15715[(1)]);if((state_val_15716 === (7)))
{var inst_15711 = (state_15715[(2)]);var state_15715__$1 = state_15715;var statearr_15717_15754 = state_15715__$1;(statearr_15717_15754[(2)] = inst_15711);
(statearr_15717_15754[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15716 === (20)))
{var inst_15686 = (state_15715[(7)]);var inst_15697 = (state_15715[(2)]);var inst_15698 = cljs.core.next.call(null,inst_15686);var inst_15672 = inst_15698;var inst_15673 = null;var inst_15674 = (0);var inst_15675 = (0);var state_15715__$1 = (function (){var statearr_15718 = state_15715;(statearr_15718[(8)] = inst_15675);
(statearr_15718[(9)] = inst_15673);
(statearr_15718[(10)] = inst_15697);
(statearr_15718[(11)] = inst_15674);
(statearr_15718[(12)] = inst_15672);
return statearr_15718;
})();var statearr_15719_15755 = state_15715__$1;(statearr_15719_15755[(2)] = null);
(statearr_15719_15755[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15716 === (1)))
{var state_15715__$1 = state_15715;var statearr_15720_15756 = state_15715__$1;(statearr_15720_15756[(2)] = null);
(statearr_15720_15756[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15716 === (4)))
{var inst_15661 = (state_15715[(13)]);var inst_15661__$1 = (state_15715[(2)]);var inst_15662 = (inst_15661__$1 == null);var state_15715__$1 = (function (){var statearr_15724 = state_15715;(statearr_15724[(13)] = inst_15661__$1);
return statearr_15724;
})();if(cljs.core.truth_(inst_15662))
{var statearr_15725_15757 = state_15715__$1;(statearr_15725_15757[(1)] = (5));
} else
{var statearr_15726_15758 = state_15715__$1;(statearr_15726_15758[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15716 === (15)))
{var state_15715__$1 = state_15715;var statearr_15727_15759 = state_15715__$1;(statearr_15727_15759[(2)] = null);
(statearr_15727_15759[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15716 === (13)))
{var inst_15675 = (state_15715[(8)]);var inst_15673 = (state_15715[(9)]);var inst_15674 = (state_15715[(11)]);var inst_15672 = (state_15715[(12)]);var inst_15682 = (state_15715[(2)]);var inst_15683 = (inst_15675 + (1));var tmp15721 = inst_15673;var tmp15722 = inst_15674;var tmp15723 = inst_15672;var inst_15672__$1 = tmp15723;var inst_15673__$1 = tmp15721;var inst_15674__$1 = tmp15722;var inst_15675__$1 = inst_15683;var state_15715__$1 = (function (){var statearr_15728 = state_15715;(statearr_15728[(8)] = inst_15675__$1);
(statearr_15728[(9)] = inst_15673__$1);
(statearr_15728[(11)] = inst_15674__$1);
(statearr_15728[(14)] = inst_15682);
(statearr_15728[(12)] = inst_15672__$1);
return statearr_15728;
})();var statearr_15729_15760 = state_15715__$1;(statearr_15729_15760[(2)] = null);
(statearr_15729_15760[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15716 === (6)))
{var inst_15661 = (state_15715[(13)]);var inst_15666 = f.call(null,inst_15661);var inst_15671 = cljs.core.seq.call(null,inst_15666);var inst_15672 = inst_15671;var inst_15673 = null;var inst_15674 = (0);var inst_15675 = (0);var state_15715__$1 = (function (){var statearr_15730 = state_15715;(statearr_15730[(8)] = inst_15675);
(statearr_15730[(9)] = inst_15673);
(statearr_15730[(11)] = inst_15674);
(statearr_15730[(12)] = inst_15672);
return statearr_15730;
})();var statearr_15731_15761 = state_15715__$1;(statearr_15731_15761[(2)] = null);
(statearr_15731_15761[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15716 === (17)))
{var inst_15686 = (state_15715[(7)]);var inst_15690 = cljs.core.chunk_first.call(null,inst_15686);var inst_15691 = cljs.core.chunk_rest.call(null,inst_15686);var inst_15692 = cljs.core.count.call(null,inst_15690);var inst_15672 = inst_15691;var inst_15673 = inst_15690;var inst_15674 = inst_15692;var inst_15675 = (0);var state_15715__$1 = (function (){var statearr_15732 = state_15715;(statearr_15732[(8)] = inst_15675);
(statearr_15732[(9)] = inst_15673);
(statearr_15732[(11)] = inst_15674);
(statearr_15732[(12)] = inst_15672);
return statearr_15732;
})();var statearr_15733_15762 = state_15715__$1;(statearr_15733_15762[(2)] = null);
(statearr_15733_15762[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15716 === (3)))
{var inst_15713 = (state_15715[(2)]);var state_15715__$1 = state_15715;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15715__$1,inst_15713);
} else
{if((state_val_15716 === (12)))
{var inst_15706 = (state_15715[(2)]);var state_15715__$1 = state_15715;var statearr_15734_15763 = state_15715__$1;(statearr_15734_15763[(2)] = inst_15706);
(statearr_15734_15763[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15716 === (2)))
{var state_15715__$1 = state_15715;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15715__$1,(4),in$);
} else
{if((state_val_15716 === (19)))
{var inst_15701 = (state_15715[(2)]);var state_15715__$1 = state_15715;var statearr_15735_15764 = state_15715__$1;(statearr_15735_15764[(2)] = inst_15701);
(statearr_15735_15764[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15716 === (11)))
{var inst_15686 = (state_15715[(7)]);var inst_15672 = (state_15715[(12)]);var inst_15686__$1 = cljs.core.seq.call(null,inst_15672);var state_15715__$1 = (function (){var statearr_15736 = state_15715;(statearr_15736[(7)] = inst_15686__$1);
return statearr_15736;
})();if(inst_15686__$1)
{var statearr_15737_15765 = state_15715__$1;(statearr_15737_15765[(1)] = (14));
} else
{var statearr_15738_15766 = state_15715__$1;(statearr_15738_15766[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15716 === (9)))
{var inst_15708 = (state_15715[(2)]);var state_15715__$1 = (function (){var statearr_15739 = state_15715;(statearr_15739[(15)] = inst_15708);
return statearr_15739;
})();var statearr_15740_15767 = state_15715__$1;(statearr_15740_15767[(2)] = null);
(statearr_15740_15767[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15716 === (5)))
{var inst_15664 = cljs.core.async.close_BANG_.call(null,out);var state_15715__$1 = state_15715;var statearr_15741_15768 = state_15715__$1;(statearr_15741_15768[(2)] = inst_15664);
(statearr_15741_15768[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15716 === (14)))
{var inst_15686 = (state_15715[(7)]);var inst_15688 = cljs.core.chunked_seq_QMARK_.call(null,inst_15686);var state_15715__$1 = state_15715;if(inst_15688)
{var statearr_15742_15769 = state_15715__$1;(statearr_15742_15769[(1)] = (17));
} else
{var statearr_15743_15770 = state_15715__$1;(statearr_15743_15770[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15716 === (16)))
{var inst_15704 = (state_15715[(2)]);var state_15715__$1 = state_15715;var statearr_15744_15771 = state_15715__$1;(statearr_15744_15771[(2)] = inst_15704);
(statearr_15744_15771[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15716 === (10)))
{var inst_15675 = (state_15715[(8)]);var inst_15673 = (state_15715[(9)]);var inst_15680 = cljs.core._nth.call(null,inst_15673,inst_15675);var state_15715__$1 = state_15715;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15715__$1,(13),out,inst_15680);
} else
{if((state_val_15716 === (18)))
{var inst_15686 = (state_15715[(7)]);var inst_15695 = cljs.core.first.call(null,inst_15686);var state_15715__$1 = state_15715;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15715__$1,(20),out,inst_15695);
} else
{if((state_val_15716 === (8)))
{var inst_15675 = (state_15715[(8)]);var inst_15674 = (state_15715[(11)]);var inst_15677 = (inst_15675 < inst_15674);var inst_15678 = inst_15677;var state_15715__$1 = state_15715;if(cljs.core.truth_(inst_15678))
{var statearr_15745_15772 = state_15715__$1;(statearr_15745_15772[(1)] = (10));
} else
{var statearr_15746_15773 = state_15715__$1;(statearr_15746_15773[(1)] = (11));
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
}
}
}
}
}
}
}
});})(c__8977__auto__))
;return ((function (switch__8962__auto__,c__8977__auto__){
return (function() {
var state_machine__8963__auto__ = null;
var state_machine__8963__auto____0 = (function (){var statearr_15750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15750[(0)] = state_machine__8963__auto__);
(statearr_15750[(1)] = (1));
return statearr_15750;
});
var state_machine__8963__auto____1 = (function (state_15715){while(true){
var ret_value__8964__auto__ = (function (){try{while(true){
var result__8965__auto__ = switch__8962__auto__.call(null,state_15715);if(cljs.core.keyword_identical_QMARK_.call(null,result__8965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8965__auto__;
}
break;
}
}catch (e15751){if((e15751 instanceof Object))
{var ex__8966__auto__ = e15751;var statearr_15752_15774 = state_15715;(statearr_15752_15774[(5)] = ex__8966__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15715);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15751;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15775 = state_15715;
state_15715 = G__15775;
continue;
}
} else
{return ret_value__8964__auto__;
}
break;
}
});
state_machine__8963__auto__ = function(state_15715){
switch(arguments.length){
case 0:
return state_machine__8963__auto____0.call(this);
case 1:
return state_machine__8963__auto____1.call(this,state_15715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8963__auto____0;
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8963__auto____1;
return state_machine__8963__auto__;
})()
;})(switch__8962__auto__,c__8977__auto__))
})();var state__8979__auto__ = (function (){var statearr_15753 = f__8978__auto__.call(null);(statearr_15753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8977__auto__);
return statearr_15753;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8979__auto__);
});})(c__8977__auto__))
);
return c__8977__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__8977__auto___15856 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8977__auto___15856){
return (function (){var f__8978__auto__ = (function (){var switch__8962__auto__ = ((function (c__8977__auto___15856){
return (function (state_15835){var state_val_15836 = (state_15835[(1)]);if((state_val_15836 === (7)))
{var inst_15831 = (state_15835[(2)]);var state_15835__$1 = state_15835;var statearr_15837_15857 = state_15835__$1;(statearr_15837_15857[(2)] = inst_15831);
(statearr_15837_15857[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15836 === (1)))
{var state_15835__$1 = state_15835;var statearr_15838_15858 = state_15835__$1;(statearr_15838_15858[(2)] = null);
(statearr_15838_15858[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15836 === (4)))
{var inst_15818 = (state_15835[(7)]);var inst_15818__$1 = (state_15835[(2)]);var inst_15819 = (inst_15818__$1 == null);var state_15835__$1 = (function (){var statearr_15839 = state_15835;(statearr_15839[(7)] = inst_15818__$1);
return statearr_15839;
})();if(cljs.core.truth_(inst_15819))
{var statearr_15840_15859 = state_15835__$1;(statearr_15840_15859[(1)] = (5));
} else
{var statearr_15841_15860 = state_15835__$1;(statearr_15841_15860[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15836 === (6)))
{var inst_15818 = (state_15835[(7)]);var state_15835__$1 = state_15835;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15835__$1,(11),to,inst_15818);
} else
{if((state_val_15836 === (3)))
{var inst_15833 = (state_15835[(2)]);var state_15835__$1 = state_15835;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15835__$1,inst_15833);
} else
{if((state_val_15836 === (2)))
{var state_15835__$1 = state_15835;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15835__$1,(4),from);
} else
{if((state_val_15836 === (11)))
{var inst_15828 = (state_15835[(2)]);var state_15835__$1 = (function (){var statearr_15842 = state_15835;(statearr_15842[(8)] = inst_15828);
return statearr_15842;
})();var statearr_15843_15861 = state_15835__$1;(statearr_15843_15861[(2)] = null);
(statearr_15843_15861[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15836 === (9)))
{var state_15835__$1 = state_15835;var statearr_15844_15862 = state_15835__$1;(statearr_15844_15862[(2)] = null);
(statearr_15844_15862[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15836 === (5)))
{var state_15835__$1 = state_15835;if(cljs.core.truth_(close_QMARK_))
{var statearr_15845_15863 = state_15835__$1;(statearr_15845_15863[(1)] = (8));
} else
{var statearr_15846_15864 = state_15835__$1;(statearr_15846_15864[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15836 === (10)))
{var inst_15825 = (state_15835[(2)]);var state_15835__$1 = state_15835;var statearr_15847_15865 = state_15835__$1;(statearr_15847_15865[(2)] = inst_15825);
(statearr_15847_15865[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15836 === (8)))
{var inst_15822 = cljs.core.async.close_BANG_.call(null,to);var state_15835__$1 = state_15835;var statearr_15848_15866 = state_15835__$1;(statearr_15848_15866[(2)] = inst_15822);
(statearr_15848_15866[(1)] = (10));
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
});})(c__8977__auto___15856))
;return ((function (switch__8962__auto__,c__8977__auto___15856){
return (function() {
var state_machine__8963__auto__ = null;
var state_machine__8963__auto____0 = (function (){var statearr_15852 = [null,null,null,null,null,null,null,null,null];(statearr_15852[(0)] = state_machine__8963__auto__);
(statearr_15852[(1)] = (1));
return statearr_15852;
});
var state_machine__8963__auto____1 = (function (state_15835){while(true){
var ret_value__8964__auto__ = (function (){try{while(true){
var result__8965__auto__ = switch__8962__auto__.call(null,state_15835);if(cljs.core.keyword_identical_QMARK_.call(null,result__8965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8965__auto__;
}
break;
}
}catch (e15853){if((e15853 instanceof Object))
{var ex__8966__auto__ = e15853;var statearr_15854_15867 = state_15835;(statearr_15854_15867[(5)] = ex__8966__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15835);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15853;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15868 = state_15835;
state_15835 = G__15868;
continue;
}
} else
{return ret_value__8964__auto__;
}
break;
}
});
state_machine__8963__auto__ = function(state_15835){
switch(arguments.length){
case 0:
return state_machine__8963__auto____0.call(this);
case 1:
return state_machine__8963__auto____1.call(this,state_15835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8963__auto____0;
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8963__auto____1;
return state_machine__8963__auto__;
})()
;})(switch__8962__auto__,c__8977__auto___15856))
})();var state__8979__auto__ = (function (){var statearr_15855 = f__8978__auto__.call(null);(statearr_15855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8977__auto___15856);
return statearr_15855;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8979__auto__);
});})(c__8977__auto___15856))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__8977__auto___15955 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8977__auto___15955,tc,fc){
return (function (){var f__8978__auto__ = (function (){var switch__8962__auto__ = ((function (c__8977__auto___15955,tc,fc){
return (function (state_15933){var state_val_15934 = (state_15933[(1)]);if((state_val_15934 === (7)))
{var inst_15929 = (state_15933[(2)]);var state_15933__$1 = state_15933;var statearr_15935_15956 = state_15933__$1;(statearr_15935_15956[(2)] = inst_15929);
(statearr_15935_15956[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15934 === (1)))
{var state_15933__$1 = state_15933;var statearr_15936_15957 = state_15933__$1;(statearr_15936_15957[(2)] = null);
(statearr_15936_15957[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15934 === (4)))
{var inst_15914 = (state_15933[(7)]);var inst_15914__$1 = (state_15933[(2)]);var inst_15915 = (inst_15914__$1 == null);var state_15933__$1 = (function (){var statearr_15937 = state_15933;(statearr_15937[(7)] = inst_15914__$1);
return statearr_15937;
})();if(cljs.core.truth_(inst_15915))
{var statearr_15938_15958 = state_15933__$1;(statearr_15938_15958[(1)] = (5));
} else
{var statearr_15939_15959 = state_15933__$1;(statearr_15939_15959[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15934 === (6)))
{var inst_15914 = (state_15933[(7)]);var inst_15920 = p.call(null,inst_15914);var state_15933__$1 = state_15933;if(cljs.core.truth_(inst_15920))
{var statearr_15940_15960 = state_15933__$1;(statearr_15940_15960[(1)] = (9));
} else
{var statearr_15941_15961 = state_15933__$1;(statearr_15941_15961[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15934 === (3)))
{var inst_15931 = (state_15933[(2)]);var state_15933__$1 = state_15933;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15933__$1,inst_15931);
} else
{if((state_val_15934 === (2)))
{var state_15933__$1 = state_15933;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15933__$1,(4),ch);
} else
{if((state_val_15934 === (11)))
{var inst_15914 = (state_15933[(7)]);var inst_15924 = (state_15933[(2)]);var state_15933__$1 = state_15933;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15933__$1,(8),inst_15924,inst_15914);
} else
{if((state_val_15934 === (9)))
{var state_15933__$1 = state_15933;var statearr_15942_15962 = state_15933__$1;(statearr_15942_15962[(2)] = tc);
(statearr_15942_15962[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15934 === (5)))
{var inst_15917 = cljs.core.async.close_BANG_.call(null,tc);var inst_15918 = cljs.core.async.close_BANG_.call(null,fc);var state_15933__$1 = (function (){var statearr_15943 = state_15933;(statearr_15943[(8)] = inst_15917);
return statearr_15943;
})();var statearr_15944_15963 = state_15933__$1;(statearr_15944_15963[(2)] = inst_15918);
(statearr_15944_15963[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15934 === (10)))
{var state_15933__$1 = state_15933;var statearr_15945_15964 = state_15933__$1;(statearr_15945_15964[(2)] = fc);
(statearr_15945_15964[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15934 === (8)))
{var inst_15926 = (state_15933[(2)]);var state_15933__$1 = (function (){var statearr_15946 = state_15933;(statearr_15946[(9)] = inst_15926);
return statearr_15946;
})();var statearr_15947_15965 = state_15933__$1;(statearr_15947_15965[(2)] = null);
(statearr_15947_15965[(1)] = (2));
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
});})(c__8977__auto___15955,tc,fc))
;return ((function (switch__8962__auto__,c__8977__auto___15955,tc,fc){
return (function() {
var state_machine__8963__auto__ = null;
var state_machine__8963__auto____0 = (function (){var statearr_15951 = [null,null,null,null,null,null,null,null,null,null];(statearr_15951[(0)] = state_machine__8963__auto__);
(statearr_15951[(1)] = (1));
return statearr_15951;
});
var state_machine__8963__auto____1 = (function (state_15933){while(true){
var ret_value__8964__auto__ = (function (){try{while(true){
var result__8965__auto__ = switch__8962__auto__.call(null,state_15933);if(cljs.core.keyword_identical_QMARK_.call(null,result__8965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8965__auto__;
}
break;
}
}catch (e15952){if((e15952 instanceof Object))
{var ex__8966__auto__ = e15952;var statearr_15953_15966 = state_15933;(statearr_15953_15966[(5)] = ex__8966__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15933);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15952;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15967 = state_15933;
state_15933 = G__15967;
continue;
}
} else
{return ret_value__8964__auto__;
}
break;
}
});
state_machine__8963__auto__ = function(state_15933){
switch(arguments.length){
case 0:
return state_machine__8963__auto____0.call(this);
case 1:
return state_machine__8963__auto____1.call(this,state_15933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8963__auto____0;
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8963__auto____1;
return state_machine__8963__auto__;
})()
;})(switch__8962__auto__,c__8977__auto___15955,tc,fc))
})();var state__8979__auto__ = (function (){var statearr_15954 = f__8978__auto__.call(null);(statearr_15954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8977__auto___15955);
return statearr_15954;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8979__auto__);
});})(c__8977__auto___15955,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__8977__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8977__auto__){
return (function (){var f__8978__auto__ = (function (){var switch__8962__auto__ = ((function (c__8977__auto__){
return (function (state_16014){var state_val_16015 = (state_16014[(1)]);if((state_val_16015 === (7)))
{var inst_16010 = (state_16014[(2)]);var state_16014__$1 = state_16014;var statearr_16016_16032 = state_16014__$1;(statearr_16016_16032[(2)] = inst_16010);
(statearr_16016_16032[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16015 === (6)))
{var inst_16003 = (state_16014[(7)]);var inst_16000 = (state_16014[(8)]);var inst_16007 = f.call(null,inst_16000,inst_16003);var inst_16000__$1 = inst_16007;var state_16014__$1 = (function (){var statearr_16017 = state_16014;(statearr_16017[(8)] = inst_16000__$1);
return statearr_16017;
})();var statearr_16018_16033 = state_16014__$1;(statearr_16018_16033[(2)] = null);
(statearr_16018_16033[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16015 === (5)))
{var inst_16000 = (state_16014[(8)]);var state_16014__$1 = state_16014;var statearr_16019_16034 = state_16014__$1;(statearr_16019_16034[(2)] = inst_16000);
(statearr_16019_16034[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16015 === (4)))
{var inst_16003 = (state_16014[(7)]);var inst_16003__$1 = (state_16014[(2)]);var inst_16004 = (inst_16003__$1 == null);var state_16014__$1 = (function (){var statearr_16020 = state_16014;(statearr_16020[(7)] = inst_16003__$1);
return statearr_16020;
})();if(cljs.core.truth_(inst_16004))
{var statearr_16021_16035 = state_16014__$1;(statearr_16021_16035[(1)] = (5));
} else
{var statearr_16022_16036 = state_16014__$1;(statearr_16022_16036[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16015 === (3)))
{var inst_16012 = (state_16014[(2)]);var state_16014__$1 = state_16014;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16014__$1,inst_16012);
} else
{if((state_val_16015 === (2)))
{var state_16014__$1 = state_16014;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16014__$1,(4),ch);
} else
{if((state_val_16015 === (1)))
{var inst_16000 = init;var state_16014__$1 = (function (){var statearr_16023 = state_16014;(statearr_16023[(8)] = inst_16000);
return statearr_16023;
})();var statearr_16024_16037 = state_16014__$1;(statearr_16024_16037[(2)] = null);
(statearr_16024_16037[(1)] = (2));
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
});})(c__8977__auto__))
;return ((function (switch__8962__auto__,c__8977__auto__){
return (function() {
var state_machine__8963__auto__ = null;
var state_machine__8963__auto____0 = (function (){var statearr_16028 = [null,null,null,null,null,null,null,null,null];(statearr_16028[(0)] = state_machine__8963__auto__);
(statearr_16028[(1)] = (1));
return statearr_16028;
});
var state_machine__8963__auto____1 = (function (state_16014){while(true){
var ret_value__8964__auto__ = (function (){try{while(true){
var result__8965__auto__ = switch__8962__auto__.call(null,state_16014);if(cljs.core.keyword_identical_QMARK_.call(null,result__8965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8965__auto__;
}
break;
}
}catch (e16029){if((e16029 instanceof Object))
{var ex__8966__auto__ = e16029;var statearr_16030_16038 = state_16014;(statearr_16030_16038[(5)] = ex__8966__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16014);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16029;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16039 = state_16014;
state_16014 = G__16039;
continue;
}
} else
{return ret_value__8964__auto__;
}
break;
}
});
state_machine__8963__auto__ = function(state_16014){
switch(arguments.length){
case 0:
return state_machine__8963__auto____0.call(this);
case 1:
return state_machine__8963__auto____1.call(this,state_16014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8963__auto____0;
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8963__auto____1;
return state_machine__8963__auto__;
})()
;})(switch__8962__auto__,c__8977__auto__))
})();var state__8979__auto__ = (function (){var statearr_16031 = f__8978__auto__.call(null);(statearr_16031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8977__auto__);
return statearr_16031;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8979__auto__);
});})(c__8977__auto__))
);
return c__8977__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__8977__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8977__auto__){
return (function (){var f__8978__auto__ = (function (){var switch__8962__auto__ = ((function (c__8977__auto__){
return (function (state_16101){var state_val_16102 = (state_16101[(1)]);if((state_val_16102 === (7)))
{var inst_16082 = (state_16101[(7)]);var inst_16087 = (state_16101[(2)]);var inst_16088 = cljs.core.next.call(null,inst_16082);var inst_16082__$1 = inst_16088;var state_16101__$1 = (function (){var statearr_16103 = state_16101;(statearr_16103[(8)] = inst_16087);
(statearr_16103[(7)] = inst_16082__$1);
return statearr_16103;
})();var statearr_16104_16122 = state_16101__$1;(statearr_16104_16122[(2)] = null);
(statearr_16104_16122[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (1)))
{var inst_16081 = cljs.core.seq.call(null,coll);var inst_16082 = inst_16081;var state_16101__$1 = (function (){var statearr_16105 = state_16101;(statearr_16105[(7)] = inst_16082);
return statearr_16105;
})();var statearr_16106_16123 = state_16101__$1;(statearr_16106_16123[(2)] = null);
(statearr_16106_16123[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (4)))
{var inst_16082 = (state_16101[(7)]);var inst_16085 = cljs.core.first.call(null,inst_16082);var state_16101__$1 = state_16101;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16101__$1,(7),ch,inst_16085);
} else
{if((state_val_16102 === (6)))
{var inst_16097 = (state_16101[(2)]);var state_16101__$1 = state_16101;var statearr_16107_16124 = state_16101__$1;(statearr_16107_16124[(2)] = inst_16097);
(statearr_16107_16124[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (3)))
{var inst_16099 = (state_16101[(2)]);var state_16101__$1 = state_16101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16101__$1,inst_16099);
} else
{if((state_val_16102 === (2)))
{var inst_16082 = (state_16101[(7)]);var state_16101__$1 = state_16101;if(cljs.core.truth_(inst_16082))
{var statearr_16108_16125 = state_16101__$1;(statearr_16108_16125[(1)] = (4));
} else
{var statearr_16109_16126 = state_16101__$1;(statearr_16109_16126[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (9)))
{var state_16101__$1 = state_16101;var statearr_16110_16127 = state_16101__$1;(statearr_16110_16127[(2)] = null);
(statearr_16110_16127[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (5)))
{var state_16101__$1 = state_16101;if(cljs.core.truth_(close_QMARK_))
{var statearr_16111_16128 = state_16101__$1;(statearr_16111_16128[(1)] = (8));
} else
{var statearr_16112_16129 = state_16101__$1;(statearr_16112_16129[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (10)))
{var inst_16095 = (state_16101[(2)]);var state_16101__$1 = state_16101;var statearr_16113_16130 = state_16101__$1;(statearr_16113_16130[(2)] = inst_16095);
(statearr_16113_16130[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16102 === (8)))
{var inst_16092 = cljs.core.async.close_BANG_.call(null,ch);var state_16101__$1 = state_16101;var statearr_16114_16131 = state_16101__$1;(statearr_16114_16131[(2)] = inst_16092);
(statearr_16114_16131[(1)] = (10));
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
});})(c__8977__auto__))
;return ((function (switch__8962__auto__,c__8977__auto__){
return (function() {
var state_machine__8963__auto__ = null;
var state_machine__8963__auto____0 = (function (){var statearr_16118 = [null,null,null,null,null,null,null,null,null];(statearr_16118[(0)] = state_machine__8963__auto__);
(statearr_16118[(1)] = (1));
return statearr_16118;
});
var state_machine__8963__auto____1 = (function (state_16101){while(true){
var ret_value__8964__auto__ = (function (){try{while(true){
var result__8965__auto__ = switch__8962__auto__.call(null,state_16101);if(cljs.core.keyword_identical_QMARK_.call(null,result__8965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8965__auto__;
}
break;
}
}catch (e16119){if((e16119 instanceof Object))
{var ex__8966__auto__ = e16119;var statearr_16120_16132 = state_16101;(statearr_16120_16132[(5)] = ex__8966__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16101);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16119;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16133 = state_16101;
state_16101 = G__16133;
continue;
}
} else
{return ret_value__8964__auto__;
}
break;
}
});
state_machine__8963__auto__ = function(state_16101){
switch(arguments.length){
case 0:
return state_machine__8963__auto____0.call(this);
case 1:
return state_machine__8963__auto____1.call(this,state_16101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8963__auto____0;
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8963__auto____1;
return state_machine__8963__auto__;
})()
;})(switch__8962__auto__,c__8977__auto__))
})();var state__8979__auto__ = (function (){var statearr_16121 = f__8978__auto__.call(null);(statearr_16121[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8977__auto__);
return statearr_16121;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8979__auto__);
});})(c__8977__auto__))
);
return c__8977__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj16135 = {};return obj16135;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3530__auto__ = _;if(and__3530__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3530__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4169__auto__ = (((_ == null))?null:_);return (function (){var or__3542__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj16137 = {};return obj16137;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3530__auto__ = m;if(and__3530__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3530__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4169__auto__ = (((m == null))?null:m);return (function (){var or__3542__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3530__auto__ = m;if(and__3530__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3530__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4169__auto__ = (((m == null))?null:m);return (function (){var or__3542__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3530__auto__ = m;if(and__3530__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3530__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4169__auto__ = (((m == null))?null:m);return (function (){var or__3542__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16361 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16361 = (function (cs,ch,mult,meta16362){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16362 = meta16362;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16361.cljs$lang$type = true;
cljs.core.async.t16361.cljs$lang$ctorStr = "cljs.core.async/t16361";
cljs.core.async.t16361.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t16361");
});})(cs))
;
cljs.core.async.t16361.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16361.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16361.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16361.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16361.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16361.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16361.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16363){var self__ = this;
var _16363__$1 = this;return self__.meta16362;
});})(cs))
;
cljs.core.async.t16361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16363,meta16362__$1){var self__ = this;
var _16363__$1 = this;return (new cljs.core.async.t16361(self__.cs,self__.ch,self__.mult,meta16362__$1));
});})(cs))
;
cljs.core.async.__GT_t16361 = ((function (cs){
return (function __GT_t16361(cs__$1,ch__$1,mult__$1,meta16362){return (new cljs.core.async.t16361(cs__$1,ch__$1,mult__$1,meta16362));
});})(cs))
;
}
return (new cljs.core.async.t16361(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__8977__auto___16584 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8977__auto___16584,cs,m,dchan,dctr,done){
return (function (){var f__8978__auto__ = (function (){var switch__8962__auto__ = ((function (c__8977__auto___16584,cs,m,dchan,dctr,done){
return (function (state_16498){var state_val_16499 = (state_16498[(1)]);if((state_val_16499 === (7)))
{var inst_16494 = (state_16498[(2)]);var state_16498__$1 = state_16498;var statearr_16500_16585 = state_16498__$1;(statearr_16500_16585[(2)] = inst_16494);
(statearr_16500_16585[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (20)))
{var inst_16395 = (state_16498[(7)]);var inst_16405 = cljs.core.first.call(null,inst_16395);var inst_16406 = cljs.core.nth.call(null,inst_16405,(0),null);var inst_16407 = cljs.core.nth.call(null,inst_16405,(1),null);var state_16498__$1 = (function (){var statearr_16501 = state_16498;(statearr_16501[(8)] = inst_16406);
return statearr_16501;
})();if(cljs.core.truth_(inst_16407))
{var statearr_16502_16586 = state_16498__$1;(statearr_16502_16586[(1)] = (22));
} else
{var statearr_16503_16587 = state_16498__$1;(statearr_16503_16587[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (27)))
{var inst_16435 = (state_16498[(9)]);var inst_16437 = (state_16498[(10)]);var inst_16442 = cljs.core._nth.call(null,inst_16435,inst_16437);var state_16498__$1 = (function (){var statearr_16504 = state_16498;(statearr_16504[(11)] = inst_16442);
return statearr_16504;
})();var statearr_16505_16588 = state_16498__$1;(statearr_16505_16588[(2)] = null);
(statearr_16505_16588[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (1)))
{var state_16498__$1 = state_16498;var statearr_16506_16589 = state_16498__$1;(statearr_16506_16589[(2)] = null);
(statearr_16506_16589[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (24)))
{var inst_16395 = (state_16498[(7)]);var inst_16412 = (state_16498[(2)]);var inst_16413 = cljs.core.next.call(null,inst_16395);var inst_16375 = inst_16413;var inst_16376 = null;var inst_16377 = (0);var inst_16378 = (0);var state_16498__$1 = (function (){var statearr_16507 = state_16498;(statearr_16507[(12)] = inst_16377);
(statearr_16507[(13)] = inst_16412);
(statearr_16507[(14)] = inst_16376);
(statearr_16507[(15)] = inst_16375);
(statearr_16507[(16)] = inst_16378);
return statearr_16507;
})();var statearr_16508_16590 = state_16498__$1;(statearr_16508_16590[(2)] = null);
(statearr_16508_16590[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (39)))
{var inst_16455 = (state_16498[(17)]);var inst_16473 = (state_16498[(2)]);var inst_16474 = cljs.core.next.call(null,inst_16455);var inst_16434 = inst_16474;var inst_16435 = null;var inst_16436 = (0);var inst_16437 = (0);var state_16498__$1 = (function (){var statearr_16512 = state_16498;(statearr_16512[(9)] = inst_16435);
(statearr_16512[(10)] = inst_16437);
(statearr_16512[(18)] = inst_16473);
(statearr_16512[(19)] = inst_16436);
(statearr_16512[(20)] = inst_16434);
return statearr_16512;
})();var statearr_16513_16591 = state_16498__$1;(statearr_16513_16591[(2)] = null);
(statearr_16513_16591[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (4)))
{var inst_16366 = (state_16498[(21)]);var inst_16366__$1 = (state_16498[(2)]);var inst_16367 = (inst_16366__$1 == null);var state_16498__$1 = (function (){var statearr_16514 = state_16498;(statearr_16514[(21)] = inst_16366__$1);
return statearr_16514;
})();if(cljs.core.truth_(inst_16367))
{var statearr_16515_16592 = state_16498__$1;(statearr_16515_16592[(1)] = (5));
} else
{var statearr_16516_16593 = state_16498__$1;(statearr_16516_16593[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (15)))
{var inst_16377 = (state_16498[(12)]);var inst_16376 = (state_16498[(14)]);var inst_16375 = (state_16498[(15)]);var inst_16378 = (state_16498[(16)]);var inst_16391 = (state_16498[(2)]);var inst_16392 = (inst_16378 + (1));var tmp16509 = inst_16377;var tmp16510 = inst_16376;var tmp16511 = inst_16375;var inst_16375__$1 = tmp16511;var inst_16376__$1 = tmp16510;var inst_16377__$1 = tmp16509;var inst_16378__$1 = inst_16392;var state_16498__$1 = (function (){var statearr_16517 = state_16498;(statearr_16517[(12)] = inst_16377__$1);
(statearr_16517[(22)] = inst_16391);
(statearr_16517[(14)] = inst_16376__$1);
(statearr_16517[(15)] = inst_16375__$1);
(statearr_16517[(16)] = inst_16378__$1);
return statearr_16517;
})();var statearr_16518_16594 = state_16498__$1;(statearr_16518_16594[(2)] = null);
(statearr_16518_16594[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (21)))
{var inst_16416 = (state_16498[(2)]);var state_16498__$1 = state_16498;var statearr_16519_16595 = state_16498__$1;(statearr_16519_16595[(2)] = inst_16416);
(statearr_16519_16595[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (31)))
{var inst_16442 = (state_16498[(11)]);var inst_16443 = (state_16498[(2)]);var inst_16444 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16445 = cljs.core.async.untap_STAR_.call(null,m,inst_16442);var state_16498__$1 = (function (){var statearr_16520 = state_16498;(statearr_16520[(23)] = inst_16443);
(statearr_16520[(24)] = inst_16444);
return statearr_16520;
})();var statearr_16521_16596 = state_16498__$1;(statearr_16521_16596[(2)] = inst_16445);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16498__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (32)))
{var inst_16442 = (state_16498[(11)]);var inst_16366 = (state_16498[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16498,(31),Object,null,(30));var inst_16449 = cljs.core.async.put_BANG_.call(null,inst_16442,inst_16366,done);var state_16498__$1 = state_16498;var statearr_16522_16597 = state_16498__$1;(statearr_16522_16597[(2)] = inst_16449);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16498__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (40)))
{var inst_16464 = (state_16498[(25)]);var inst_16465 = (state_16498[(2)]);var inst_16466 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16467 = cljs.core.async.untap_STAR_.call(null,m,inst_16464);var state_16498__$1 = (function (){var statearr_16523 = state_16498;(statearr_16523[(26)] = inst_16466);
(statearr_16523[(27)] = inst_16465);
return statearr_16523;
})();var statearr_16524_16598 = state_16498__$1;(statearr_16524_16598[(2)] = inst_16467);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16498__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (33)))
{var inst_16455 = (state_16498[(17)]);var inst_16457 = cljs.core.chunked_seq_QMARK_.call(null,inst_16455);var state_16498__$1 = state_16498;if(inst_16457)
{var statearr_16525_16599 = state_16498__$1;(statearr_16525_16599[(1)] = (36));
} else
{var statearr_16526_16600 = state_16498__$1;(statearr_16526_16600[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (13)))
{var inst_16385 = (state_16498[(28)]);var inst_16388 = cljs.core.async.close_BANG_.call(null,inst_16385);var state_16498__$1 = state_16498;var statearr_16527_16601 = state_16498__$1;(statearr_16527_16601[(2)] = inst_16388);
(statearr_16527_16601[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (22)))
{var inst_16406 = (state_16498[(8)]);var inst_16409 = cljs.core.async.close_BANG_.call(null,inst_16406);var state_16498__$1 = state_16498;var statearr_16528_16602 = state_16498__$1;(statearr_16528_16602[(2)] = inst_16409);
(statearr_16528_16602[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (36)))
{var inst_16455 = (state_16498[(17)]);var inst_16459 = cljs.core.chunk_first.call(null,inst_16455);var inst_16460 = cljs.core.chunk_rest.call(null,inst_16455);var inst_16461 = cljs.core.count.call(null,inst_16459);var inst_16434 = inst_16460;var inst_16435 = inst_16459;var inst_16436 = inst_16461;var inst_16437 = (0);var state_16498__$1 = (function (){var statearr_16529 = state_16498;(statearr_16529[(9)] = inst_16435);
(statearr_16529[(10)] = inst_16437);
(statearr_16529[(19)] = inst_16436);
(statearr_16529[(20)] = inst_16434);
return statearr_16529;
})();var statearr_16530_16603 = state_16498__$1;(statearr_16530_16603[(2)] = null);
(statearr_16530_16603[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (41)))
{var inst_16366 = (state_16498[(21)]);var inst_16464 = (state_16498[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16498,(40),Object,null,(39));var inst_16471 = cljs.core.async.put_BANG_.call(null,inst_16464,inst_16366,done);var state_16498__$1 = state_16498;var statearr_16531_16604 = state_16498__$1;(statearr_16531_16604[(2)] = inst_16471);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16498__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (43)))
{var state_16498__$1 = state_16498;var statearr_16532_16605 = state_16498__$1;(statearr_16532_16605[(2)] = null);
(statearr_16532_16605[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (29)))
{var inst_16482 = (state_16498[(2)]);var state_16498__$1 = state_16498;var statearr_16533_16606 = state_16498__$1;(statearr_16533_16606[(2)] = inst_16482);
(statearr_16533_16606[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (44)))
{var inst_16491 = (state_16498[(2)]);var state_16498__$1 = (function (){var statearr_16534 = state_16498;(statearr_16534[(29)] = inst_16491);
return statearr_16534;
})();var statearr_16535_16607 = state_16498__$1;(statearr_16535_16607[(2)] = null);
(statearr_16535_16607[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (6)))
{var inst_16426 = (state_16498[(30)]);var inst_16425 = cljs.core.deref.call(null,cs);var inst_16426__$1 = cljs.core.keys.call(null,inst_16425);var inst_16427 = cljs.core.count.call(null,inst_16426__$1);var inst_16428 = cljs.core.reset_BANG_.call(null,dctr,inst_16427);var inst_16433 = cljs.core.seq.call(null,inst_16426__$1);var inst_16434 = inst_16433;var inst_16435 = null;var inst_16436 = (0);var inst_16437 = (0);var state_16498__$1 = (function (){var statearr_16536 = state_16498;(statearr_16536[(9)] = inst_16435);
(statearr_16536[(10)] = inst_16437);
(statearr_16536[(31)] = inst_16428);
(statearr_16536[(19)] = inst_16436);
(statearr_16536[(20)] = inst_16434);
(statearr_16536[(30)] = inst_16426__$1);
return statearr_16536;
})();var statearr_16537_16608 = state_16498__$1;(statearr_16537_16608[(2)] = null);
(statearr_16537_16608[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (28)))
{var inst_16455 = (state_16498[(17)]);var inst_16434 = (state_16498[(20)]);var inst_16455__$1 = cljs.core.seq.call(null,inst_16434);var state_16498__$1 = (function (){var statearr_16538 = state_16498;(statearr_16538[(17)] = inst_16455__$1);
return statearr_16538;
})();if(inst_16455__$1)
{var statearr_16539_16609 = state_16498__$1;(statearr_16539_16609[(1)] = (33));
} else
{var statearr_16540_16610 = state_16498__$1;(statearr_16540_16610[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (25)))
{var inst_16437 = (state_16498[(10)]);var inst_16436 = (state_16498[(19)]);var inst_16439 = (inst_16437 < inst_16436);var inst_16440 = inst_16439;var state_16498__$1 = state_16498;if(cljs.core.truth_(inst_16440))
{var statearr_16541_16611 = state_16498__$1;(statearr_16541_16611[(1)] = (27));
} else
{var statearr_16542_16612 = state_16498__$1;(statearr_16542_16612[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (34)))
{var state_16498__$1 = state_16498;var statearr_16543_16613 = state_16498__$1;(statearr_16543_16613[(2)] = null);
(statearr_16543_16613[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (17)))
{var state_16498__$1 = state_16498;var statearr_16544_16614 = state_16498__$1;(statearr_16544_16614[(2)] = null);
(statearr_16544_16614[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (3)))
{var inst_16496 = (state_16498[(2)]);var state_16498__$1 = state_16498;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16498__$1,inst_16496);
} else
{if((state_val_16499 === (12)))
{var inst_16421 = (state_16498[(2)]);var state_16498__$1 = state_16498;var statearr_16545_16615 = state_16498__$1;(statearr_16545_16615[(2)] = inst_16421);
(statearr_16545_16615[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (2)))
{var state_16498__$1 = state_16498;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16498__$1,(4),ch);
} else
{if((state_val_16499 === (23)))
{var state_16498__$1 = state_16498;var statearr_16546_16616 = state_16498__$1;(statearr_16546_16616[(2)] = null);
(statearr_16546_16616[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (35)))
{var inst_16480 = (state_16498[(2)]);var state_16498__$1 = state_16498;var statearr_16547_16617 = state_16498__$1;(statearr_16547_16617[(2)] = inst_16480);
(statearr_16547_16617[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (19)))
{var inst_16395 = (state_16498[(7)]);var inst_16399 = cljs.core.chunk_first.call(null,inst_16395);var inst_16400 = cljs.core.chunk_rest.call(null,inst_16395);var inst_16401 = cljs.core.count.call(null,inst_16399);var inst_16375 = inst_16400;var inst_16376 = inst_16399;var inst_16377 = inst_16401;var inst_16378 = (0);var state_16498__$1 = (function (){var statearr_16548 = state_16498;(statearr_16548[(12)] = inst_16377);
(statearr_16548[(14)] = inst_16376);
(statearr_16548[(15)] = inst_16375);
(statearr_16548[(16)] = inst_16378);
return statearr_16548;
})();var statearr_16549_16618 = state_16498__$1;(statearr_16549_16618[(2)] = null);
(statearr_16549_16618[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (11)))
{var inst_16395 = (state_16498[(7)]);var inst_16375 = (state_16498[(15)]);var inst_16395__$1 = cljs.core.seq.call(null,inst_16375);var state_16498__$1 = (function (){var statearr_16550 = state_16498;(statearr_16550[(7)] = inst_16395__$1);
return statearr_16550;
})();if(inst_16395__$1)
{var statearr_16551_16619 = state_16498__$1;(statearr_16551_16619[(1)] = (16));
} else
{var statearr_16552_16620 = state_16498__$1;(statearr_16552_16620[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (9)))
{var inst_16423 = (state_16498[(2)]);var state_16498__$1 = state_16498;var statearr_16553_16621 = state_16498__$1;(statearr_16553_16621[(2)] = inst_16423);
(statearr_16553_16621[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (5)))
{var inst_16373 = cljs.core.deref.call(null,cs);var inst_16374 = cljs.core.seq.call(null,inst_16373);var inst_16375 = inst_16374;var inst_16376 = null;var inst_16377 = (0);var inst_16378 = (0);var state_16498__$1 = (function (){var statearr_16554 = state_16498;(statearr_16554[(12)] = inst_16377);
(statearr_16554[(14)] = inst_16376);
(statearr_16554[(15)] = inst_16375);
(statearr_16554[(16)] = inst_16378);
return statearr_16554;
})();var statearr_16555_16622 = state_16498__$1;(statearr_16555_16622[(2)] = null);
(statearr_16555_16622[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (14)))
{var state_16498__$1 = state_16498;var statearr_16556_16623 = state_16498__$1;(statearr_16556_16623[(2)] = null);
(statearr_16556_16623[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (45)))
{var inst_16488 = (state_16498[(2)]);var state_16498__$1 = state_16498;var statearr_16557_16624 = state_16498__$1;(statearr_16557_16624[(2)] = inst_16488);
(statearr_16557_16624[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (26)))
{var inst_16426 = (state_16498[(30)]);var inst_16484 = (state_16498[(2)]);var inst_16485 = cljs.core.seq.call(null,inst_16426);var state_16498__$1 = (function (){var statearr_16558 = state_16498;(statearr_16558[(32)] = inst_16484);
return statearr_16558;
})();if(inst_16485)
{var statearr_16559_16625 = state_16498__$1;(statearr_16559_16625[(1)] = (42));
} else
{var statearr_16560_16626 = state_16498__$1;(statearr_16560_16626[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (16)))
{var inst_16395 = (state_16498[(7)]);var inst_16397 = cljs.core.chunked_seq_QMARK_.call(null,inst_16395);var state_16498__$1 = state_16498;if(inst_16397)
{var statearr_16564_16627 = state_16498__$1;(statearr_16564_16627[(1)] = (19));
} else
{var statearr_16565_16628 = state_16498__$1;(statearr_16565_16628[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (38)))
{var inst_16477 = (state_16498[(2)]);var state_16498__$1 = state_16498;var statearr_16566_16629 = state_16498__$1;(statearr_16566_16629[(2)] = inst_16477);
(statearr_16566_16629[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (30)))
{var inst_16435 = (state_16498[(9)]);var inst_16437 = (state_16498[(10)]);var inst_16436 = (state_16498[(19)]);var inst_16434 = (state_16498[(20)]);var inst_16451 = (state_16498[(2)]);var inst_16452 = (inst_16437 + (1));var tmp16561 = inst_16435;var tmp16562 = inst_16436;var tmp16563 = inst_16434;var inst_16434__$1 = tmp16563;var inst_16435__$1 = tmp16561;var inst_16436__$1 = tmp16562;var inst_16437__$1 = inst_16452;var state_16498__$1 = (function (){var statearr_16567 = state_16498;(statearr_16567[(9)] = inst_16435__$1);
(statearr_16567[(33)] = inst_16451);
(statearr_16567[(10)] = inst_16437__$1);
(statearr_16567[(19)] = inst_16436__$1);
(statearr_16567[(20)] = inst_16434__$1);
return statearr_16567;
})();var statearr_16568_16630 = state_16498__$1;(statearr_16568_16630[(2)] = null);
(statearr_16568_16630[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (10)))
{var inst_16376 = (state_16498[(14)]);var inst_16378 = (state_16498[(16)]);var inst_16384 = cljs.core._nth.call(null,inst_16376,inst_16378);var inst_16385 = cljs.core.nth.call(null,inst_16384,(0),null);var inst_16386 = cljs.core.nth.call(null,inst_16384,(1),null);var state_16498__$1 = (function (){var statearr_16569 = state_16498;(statearr_16569[(28)] = inst_16385);
return statearr_16569;
})();if(cljs.core.truth_(inst_16386))
{var statearr_16570_16631 = state_16498__$1;(statearr_16570_16631[(1)] = (13));
} else
{var statearr_16571_16632 = state_16498__$1;(statearr_16571_16632[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (18)))
{var inst_16419 = (state_16498[(2)]);var state_16498__$1 = state_16498;var statearr_16572_16633 = state_16498__$1;(statearr_16572_16633[(2)] = inst_16419);
(statearr_16572_16633[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (42)))
{var state_16498__$1 = state_16498;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16498__$1,(45),dchan);
} else
{if((state_val_16499 === (37)))
{var inst_16455 = (state_16498[(17)]);var inst_16464 = cljs.core.first.call(null,inst_16455);var state_16498__$1 = (function (){var statearr_16573 = state_16498;(statearr_16573[(25)] = inst_16464);
return statearr_16573;
})();var statearr_16574_16634 = state_16498__$1;(statearr_16574_16634[(2)] = null);
(statearr_16574_16634[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16499 === (8)))
{var inst_16377 = (state_16498[(12)]);var inst_16378 = (state_16498[(16)]);var inst_16380 = (inst_16378 < inst_16377);var inst_16381 = inst_16380;var state_16498__$1 = state_16498;if(cljs.core.truth_(inst_16381))
{var statearr_16575_16635 = state_16498__$1;(statearr_16575_16635[(1)] = (10));
} else
{var statearr_16576_16636 = state_16498__$1;(statearr_16576_16636[(1)] = (11));
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
}
}
}
}
}
}
});})(c__8977__auto___16584,cs,m,dchan,dctr,done))
;return ((function (switch__8962__auto__,c__8977__auto___16584,cs,m,dchan,dctr,done){
return (function() {
var state_machine__8963__auto__ = null;
var state_machine__8963__auto____0 = (function (){var statearr_16580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16580[(0)] = state_machine__8963__auto__);
(statearr_16580[(1)] = (1));
return statearr_16580;
});
var state_machine__8963__auto____1 = (function (state_16498){while(true){
var ret_value__8964__auto__ = (function (){try{while(true){
var result__8965__auto__ = switch__8962__auto__.call(null,state_16498);if(cljs.core.keyword_identical_QMARK_.call(null,result__8965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8965__auto__;
}
break;
}
}catch (e16581){if((e16581 instanceof Object))
{var ex__8966__auto__ = e16581;var statearr_16582_16637 = state_16498;(statearr_16582_16637[(5)] = ex__8966__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16498);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16581;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16638 = state_16498;
state_16498 = G__16638;
continue;
}
} else
{return ret_value__8964__auto__;
}
break;
}
});
state_machine__8963__auto__ = function(state_16498){
switch(arguments.length){
case 0:
return state_machine__8963__auto____0.call(this);
case 1:
return state_machine__8963__auto____1.call(this,state_16498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8963__auto____0;
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8963__auto____1;
return state_machine__8963__auto__;
})()
;})(switch__8962__auto__,c__8977__auto___16584,cs,m,dchan,dctr,done))
})();var state__8979__auto__ = (function (){var statearr_16583 = f__8978__auto__.call(null);(statearr_16583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8977__auto___16584);
return statearr_16583;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8979__auto__);
});})(c__8977__auto___16584,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj16640 = {};return obj16640;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3530__auto__ = m;if(and__3530__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3530__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4169__auto__ = (((m == null))?null:m);return (function (){var or__3542__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3530__auto__ = m;if(and__3530__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3530__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4169__auto__ = (((m == null))?null:m);return (function (){var or__3542__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3530__auto__ = m;if(and__3530__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3530__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4169__auto__ = (((m == null))?null:m);return (function (){var or__3542__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3530__auto__ = m;if(and__3530__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3530__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4169__auto__ = (((m == null))?null:m);return (function (){var or__3542__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3530__auto__ = m;if(and__3530__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3530__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4169__auto__ = (((m == null))?null:m);return (function (){var or__3542__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t16750 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16750 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16751){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16751 = meta16751;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16750.cljs$lang$type = true;
cljs.core.async.t16750.cljs$lang$ctorStr = "cljs.core.async/t16750";
cljs.core.async.t16750.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t16750");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16750.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16750.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16750.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16750.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16750.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16750.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16750.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16750.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16752){var self__ = this;
var _16752__$1 = this;return self__.meta16751;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16752,meta16751__$1){var self__ = this;
var _16752__$1 = this;return (new cljs.core.async.t16750(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16751__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16750 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16750(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16751){return (new cljs.core.async.t16750(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16751));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16750(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__8977__auto___16859 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8977__auto___16859,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__8978__auto__ = (function (){var switch__8962__auto__ = ((function (c__8977__auto___16859,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16817){var state_val_16818 = (state_16817[(1)]);if((state_val_16818 === (7)))
{var inst_16766 = (state_16817[(7)]);var inst_16771 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16766);var state_16817__$1 = state_16817;var statearr_16819_16860 = state_16817__$1;(statearr_16819_16860[(2)] = inst_16771);
(statearr_16819_16860[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16818 === (20)))
{var inst_16781 = (state_16817[(8)]);var state_16817__$1 = state_16817;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16817__$1,(23),out,inst_16781);
} else
{if((state_val_16818 === (1)))
{var inst_16756 = (state_16817[(9)]);var inst_16756__$1 = calc_state.call(null);var inst_16757 = cljs.core.seq_QMARK_.call(null,inst_16756__$1);var state_16817__$1 = (function (){var statearr_16820 = state_16817;(statearr_16820[(9)] = inst_16756__$1);
return statearr_16820;
})();if(inst_16757)
{var statearr_16821_16861 = state_16817__$1;(statearr_16821_16861[(1)] = (2));
} else
{var statearr_16822_16862 = state_16817__$1;(statearr_16822_16862[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16818 === (4)))
{var inst_16756 = (state_16817[(9)]);var inst_16762 = (state_16817[(2)]);var inst_16763 = cljs.core.get.call(null,inst_16762,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16764 = cljs.core.get.call(null,inst_16762,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16765 = cljs.core.get.call(null,inst_16762,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_16766 = inst_16756;var state_16817__$1 = (function (){var statearr_16823 = state_16817;(statearr_16823[(10)] = inst_16765);
(statearr_16823[(7)] = inst_16766);
(statearr_16823[(11)] = inst_16764);
(statearr_16823[(12)] = inst_16763);
return statearr_16823;
})();var statearr_16824_16863 = state_16817__$1;(statearr_16824_16863[(2)] = null);
(statearr_16824_16863[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16818 === (15)))
{var state_16817__$1 = state_16817;var statearr_16825_16864 = state_16817__$1;(statearr_16825_16864[(2)] = null);
(statearr_16825_16864[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16818 === (21)))
{var state_16817__$1 = state_16817;var statearr_16826_16865 = state_16817__$1;(statearr_16826_16865[(2)] = null);
(statearr_16826_16865[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16818 === (13)))
{var inst_16813 = (state_16817[(2)]);var state_16817__$1 = state_16817;var statearr_16827_16866 = state_16817__$1;(statearr_16827_16866[(2)] = inst_16813);
(statearr_16827_16866[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16818 === (22)))
{var inst_16774 = (state_16817[(13)]);var inst_16810 = (state_16817[(2)]);var inst_16766 = inst_16774;var state_16817__$1 = (function (){var statearr_16828 = state_16817;(statearr_16828[(7)] = inst_16766);
(statearr_16828[(14)] = inst_16810);
return statearr_16828;
})();var statearr_16829_16867 = state_16817__$1;(statearr_16829_16867[(2)] = null);
(statearr_16829_16867[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16818 === (6)))
{var inst_16815 = (state_16817[(2)]);var state_16817__$1 = state_16817;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16817__$1,inst_16815);
} else
{if((state_val_16818 === (17)))
{var inst_16796 = (state_16817[(15)]);var state_16817__$1 = state_16817;var statearr_16830_16868 = state_16817__$1;(statearr_16830_16868[(2)] = inst_16796);
(statearr_16830_16868[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16818 === (3)))
{var inst_16756 = (state_16817[(9)]);var state_16817__$1 = state_16817;var statearr_16831_16869 = state_16817__$1;(statearr_16831_16869[(2)] = inst_16756);
(statearr_16831_16869[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16818 === (12)))
{var inst_16777 = (state_16817[(16)]);var inst_16782 = (state_16817[(17)]);var inst_16796 = (state_16817[(15)]);var inst_16796__$1 = inst_16777.call(null,inst_16782);var state_16817__$1 = (function (){var statearr_16832 = state_16817;(statearr_16832[(15)] = inst_16796__$1);
return statearr_16832;
})();if(cljs.core.truth_(inst_16796__$1))
{var statearr_16833_16870 = state_16817__$1;(statearr_16833_16870[(1)] = (17));
} else
{var statearr_16834_16871 = state_16817__$1;(statearr_16834_16871[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16818 === (2)))
{var inst_16756 = (state_16817[(9)]);var inst_16759 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16756);var state_16817__$1 = state_16817;var statearr_16835_16872 = state_16817__$1;(statearr_16835_16872[(2)] = inst_16759);
(statearr_16835_16872[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16818 === (23)))
{var inst_16807 = (state_16817[(2)]);var state_16817__$1 = state_16817;var statearr_16836_16873 = state_16817__$1;(statearr_16836_16873[(2)] = inst_16807);
(statearr_16836_16873[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16818 === (19)))
{var inst_16804 = (state_16817[(2)]);var state_16817__$1 = state_16817;if(cljs.core.truth_(inst_16804))
{var statearr_16837_16874 = state_16817__$1;(statearr_16837_16874[(1)] = (20));
} else
{var statearr_16838_16875 = state_16817__$1;(statearr_16838_16875[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16818 === (11)))
{var inst_16781 = (state_16817[(8)]);var inst_16787 = (inst_16781 == null);var state_16817__$1 = state_16817;if(cljs.core.truth_(inst_16787))
{var statearr_16839_16876 = state_16817__$1;(statearr_16839_16876[(1)] = (14));
} else
{var statearr_16840_16877 = state_16817__$1;(statearr_16840_16877[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16818 === (9)))
{var inst_16774 = (state_16817[(13)]);var inst_16774__$1 = (state_16817[(2)]);var inst_16775 = cljs.core.get.call(null,inst_16774__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16776 = cljs.core.get.call(null,inst_16774__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16777 = cljs.core.get.call(null,inst_16774__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_16817__$1 = (function (){var statearr_16841 = state_16817;(statearr_16841[(13)] = inst_16774__$1);
(statearr_16841[(16)] = inst_16777);
(statearr_16841[(18)] = inst_16776);
return statearr_16841;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16817__$1,(10),inst_16775);
} else
{if((state_val_16818 === (5)))
{var inst_16766 = (state_16817[(7)]);var inst_16769 = cljs.core.seq_QMARK_.call(null,inst_16766);var state_16817__$1 = state_16817;if(inst_16769)
{var statearr_16842_16878 = state_16817__$1;(statearr_16842_16878[(1)] = (7));
} else
{var statearr_16843_16879 = state_16817__$1;(statearr_16843_16879[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16818 === (14)))
{var inst_16782 = (state_16817[(17)]);var inst_16789 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16782);var state_16817__$1 = state_16817;var statearr_16844_16880 = state_16817__$1;(statearr_16844_16880[(2)] = inst_16789);
(statearr_16844_16880[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16818 === (16)))
{var inst_16792 = (state_16817[(2)]);var inst_16793 = calc_state.call(null);var inst_16766 = inst_16793;var state_16817__$1 = (function (){var statearr_16845 = state_16817;(statearr_16845[(19)] = inst_16792);
(statearr_16845[(7)] = inst_16766);
return statearr_16845;
})();var statearr_16846_16881 = state_16817__$1;(statearr_16846_16881[(2)] = null);
(statearr_16846_16881[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16818 === (10)))
{var inst_16782 = (state_16817[(17)]);var inst_16781 = (state_16817[(8)]);var inst_16780 = (state_16817[(2)]);var inst_16781__$1 = cljs.core.nth.call(null,inst_16780,(0),null);var inst_16782__$1 = cljs.core.nth.call(null,inst_16780,(1),null);var inst_16783 = (inst_16781__$1 == null);var inst_16784 = cljs.core._EQ_.call(null,inst_16782__$1,change);var inst_16785 = (inst_16783) || (inst_16784);var state_16817__$1 = (function (){var statearr_16847 = state_16817;(statearr_16847[(17)] = inst_16782__$1);
(statearr_16847[(8)] = inst_16781__$1);
return statearr_16847;
})();if(cljs.core.truth_(inst_16785))
{var statearr_16848_16882 = state_16817__$1;(statearr_16848_16882[(1)] = (11));
} else
{var statearr_16849_16883 = state_16817__$1;(statearr_16849_16883[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16818 === (18)))
{var inst_16777 = (state_16817[(16)]);var inst_16782 = (state_16817[(17)]);var inst_16776 = (state_16817[(18)]);var inst_16799 = cljs.core.empty_QMARK_.call(null,inst_16777);var inst_16800 = inst_16776.call(null,inst_16782);var inst_16801 = cljs.core.not.call(null,inst_16800);var inst_16802 = (inst_16799) && (inst_16801);var state_16817__$1 = state_16817;var statearr_16850_16884 = state_16817__$1;(statearr_16850_16884[(2)] = inst_16802);
(statearr_16850_16884[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16818 === (8)))
{var inst_16766 = (state_16817[(7)]);var state_16817__$1 = state_16817;var statearr_16851_16885 = state_16817__$1;(statearr_16851_16885[(2)] = inst_16766);
(statearr_16851_16885[(1)] = (9));
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
});})(c__8977__auto___16859,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__8962__auto__,c__8977__auto___16859,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__8963__auto__ = null;
var state_machine__8963__auto____0 = (function (){var statearr_16855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16855[(0)] = state_machine__8963__auto__);
(statearr_16855[(1)] = (1));
return statearr_16855;
});
var state_machine__8963__auto____1 = (function (state_16817){while(true){
var ret_value__8964__auto__ = (function (){try{while(true){
var result__8965__auto__ = switch__8962__auto__.call(null,state_16817);if(cljs.core.keyword_identical_QMARK_.call(null,result__8965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8965__auto__;
}
break;
}
}catch (e16856){if((e16856 instanceof Object))
{var ex__8966__auto__ = e16856;var statearr_16857_16886 = state_16817;(statearr_16857_16886[(5)] = ex__8966__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16817);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16856;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16887 = state_16817;
state_16817 = G__16887;
continue;
}
} else
{return ret_value__8964__auto__;
}
break;
}
});
state_machine__8963__auto__ = function(state_16817){
switch(arguments.length){
case 0:
return state_machine__8963__auto____0.call(this);
case 1:
return state_machine__8963__auto____1.call(this,state_16817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8963__auto____0;
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8963__auto____1;
return state_machine__8963__auto__;
})()
;})(switch__8962__auto__,c__8977__auto___16859,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__8979__auto__ = (function (){var statearr_16858 = f__8978__auto__.call(null);(statearr_16858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8977__auto___16859);
return statearr_16858;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8979__auto__);
});})(c__8977__auto___16859,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj16889 = {};return obj16889;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3530__auto__ = p;if(and__3530__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3530__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4169__auto__ = (((p == null))?null:p);return (function (){var or__3542__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3530__auto__ = p;if(and__3530__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3530__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4169__auto__ = (((p == null))?null:p);return (function (){var or__3542__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3530__auto__ = p;if(and__3530__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3530__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4169__auto__ = (((p == null))?null:p);return (function (){var or__3542__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3530__auto__ = p;if(and__3530__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3530__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4169__auto__ = (((p == null))?null:p);return (function (){var or__3542__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4169__auto__)]);if(or__3542__auto__)
{return or__3542__auto__;
} else
{var or__3542__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3542__auto____$1)
{return or__3542__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3542__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3542__auto__))
{return or__3542__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3542__auto__,mults){
return (function (p1__16890_SHARP_){if(cljs.core.truth_(p1__16890_SHARP_.call(null,topic)))
{return p1__16890_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16890_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3542__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17015 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17015 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17016){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17016 = meta17016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17015.cljs$lang$type = true;
cljs.core.async.t17015.cljs$lang$ctorStr = "cljs.core.async/t17015";
cljs.core.async.t17015.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4109__auto__,writer__4110__auto__,opt__4111__auto__){return cljs.core._write.call(null,writer__4110__auto__,"cljs.core.async/t17015");
});})(mults,ensure_mult))
;
cljs.core.async.t17015.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17015.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17015.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17015.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17015.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17015.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17015.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17017){var self__ = this;
var _17017__$1 = this;return self__.meta17016;
});})(mults,ensure_mult))
;
cljs.core.async.t17015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17017,meta17016__$1){var self__ = this;
var _17017__$1 = this;return (new cljs.core.async.t17015(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17016__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17015 = ((function (mults,ensure_mult){
return (function __GT_t17015(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17016){return (new cljs.core.async.t17015(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17016));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17015(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__8977__auto___17139 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8977__auto___17139,mults,ensure_mult,p){
return (function (){var f__8978__auto__ = (function (){var switch__8962__auto__ = ((function (c__8977__auto___17139,mults,ensure_mult,p){
return (function (state_17091){var state_val_17092 = (state_17091[(1)]);if((state_val_17092 === (7)))
{var inst_17087 = (state_17091[(2)]);var state_17091__$1 = state_17091;var statearr_17093_17140 = state_17091__$1;(statearr_17093_17140[(2)] = inst_17087);
(statearr_17093_17140[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17092 === (20)))
{var state_17091__$1 = state_17091;var statearr_17094_17141 = state_17091__$1;(statearr_17094_17141[(2)] = null);
(statearr_17094_17141[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17092 === (1)))
{var state_17091__$1 = state_17091;var statearr_17095_17142 = state_17091__$1;(statearr_17095_17142[(2)] = null);
(statearr_17095_17142[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17092 === (24)))
{var inst_17020 = (state_17091[(7)]);var inst_17070 = (state_17091[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17091,(23),Object,null,(22));var inst_17077 = cljs.core.async.muxch_STAR_.call(null,inst_17070);var state_17091__$1 = state_17091;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17091__$1,(25),inst_17077,inst_17020);
} else
{if((state_val_17092 === (4)))
{var inst_17020 = (state_17091[(7)]);var inst_17020__$1 = (state_17091[(2)]);var inst_17021 = (inst_17020__$1 == null);var state_17091__$1 = (function (){var statearr_17096 = state_17091;(statearr_17096[(7)] = inst_17020__$1);
return statearr_17096;
})();if(cljs.core.truth_(inst_17021))
{var statearr_17097_17143 = state_17091__$1;(statearr_17097_17143[(1)] = (5));
} else
{var statearr_17098_17144 = state_17091__$1;(statearr_17098_17144[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17092 === (15)))
{var inst_17062 = (state_17091[(2)]);var state_17091__$1 = state_17091;var statearr_17099_17145 = state_17091__$1;(statearr_17099_17145[(2)] = inst_17062);
(statearr_17099_17145[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17092 === (21)))
{var inst_17084 = (state_17091[(2)]);var state_17091__$1 = (function (){var statearr_17100 = state_17091;(statearr_17100[(9)] = inst_17084);
return statearr_17100;
})();var statearr_17101_17146 = state_17091__$1;(statearr_17101_17146[(2)] = null);
(statearr_17101_17146[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17092 === (13)))
{var inst_17044 = (state_17091[(10)]);var inst_17046 = cljs.core.chunked_seq_QMARK_.call(null,inst_17044);var state_17091__$1 = state_17091;if(inst_17046)
{var statearr_17102_17147 = state_17091__$1;(statearr_17102_17147[(1)] = (16));
} else
{var statearr_17103_17148 = state_17091__$1;(statearr_17103_17148[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17092 === (22)))
{var inst_17081 = (state_17091[(2)]);var state_17091__$1 = state_17091;var statearr_17104_17149 = state_17091__$1;(statearr_17104_17149[(2)] = inst_17081);
(statearr_17104_17149[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17092 === (6)))
{var inst_17068 = (state_17091[(11)]);var inst_17020 = (state_17091[(7)]);var inst_17070 = (state_17091[(8)]);var inst_17068__$1 = topic_fn.call(null,inst_17020);var inst_17069 = cljs.core.deref.call(null,mults);var inst_17070__$1 = cljs.core.get.call(null,inst_17069,inst_17068__$1);var state_17091__$1 = (function (){var statearr_17105 = state_17091;(statearr_17105[(11)] = inst_17068__$1);
(statearr_17105[(8)] = inst_17070__$1);
return statearr_17105;
})();if(cljs.core.truth_(inst_17070__$1))
{var statearr_17106_17150 = state_17091__$1;(statearr_17106_17150[(1)] = (19));
} else
{var statearr_17107_17151 = state_17091__$1;(statearr_17107_17151[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17092 === (25)))
{var inst_17079 = (state_17091[(2)]);var state_17091__$1 = state_17091;var statearr_17108_17152 = state_17091__$1;(statearr_17108_17152[(2)] = inst_17079);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17091__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17092 === (17)))
{var inst_17044 = (state_17091[(10)]);var inst_17053 = cljs.core.first.call(null,inst_17044);var inst_17054 = cljs.core.async.muxch_STAR_.call(null,inst_17053);var inst_17055 = cljs.core.async.close_BANG_.call(null,inst_17054);var inst_17056 = cljs.core.next.call(null,inst_17044);var inst_17030 = inst_17056;var inst_17031 = null;var inst_17032 = (0);var inst_17033 = (0);var state_17091__$1 = (function (){var statearr_17109 = state_17091;(statearr_17109[(12)] = inst_17032);
(statearr_17109[(13)] = inst_17031);
(statearr_17109[(14)] = inst_17030);
(statearr_17109[(15)] = inst_17055);
(statearr_17109[(16)] = inst_17033);
return statearr_17109;
})();var statearr_17110_17153 = state_17091__$1;(statearr_17110_17153[(2)] = null);
(statearr_17110_17153[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17092 === (3)))
{var inst_17089 = (state_17091[(2)]);var state_17091__$1 = state_17091;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17091__$1,inst_17089);
} else
{if((state_val_17092 === (12)))
{var inst_17064 = (state_17091[(2)]);var state_17091__$1 = state_17091;var statearr_17111_17154 = state_17091__$1;(statearr_17111_17154[(2)] = inst_17064);
(statearr_17111_17154[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17092 === (2)))
{var state_17091__$1 = state_17091;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17091__$1,(4),ch);
} else
{if((state_val_17092 === (23)))
{var inst_17068 = (state_17091[(11)]);var inst_17072 = (state_17091[(2)]);var inst_17073 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17068);var state_17091__$1 = (function (){var statearr_17112 = state_17091;(statearr_17112[(17)] = inst_17072);
return statearr_17112;
})();var statearr_17113_17155 = state_17091__$1;(statearr_17113_17155[(2)] = inst_17073);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17091__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17092 === (19)))
{var state_17091__$1 = state_17091;var statearr_17114_17156 = state_17091__$1;(statearr_17114_17156[(2)] = null);
(statearr_17114_17156[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17092 === (11)))
{var inst_17030 = (state_17091[(14)]);var inst_17044 = (state_17091[(10)]);var inst_17044__$1 = cljs.core.seq.call(null,inst_17030);var state_17091__$1 = (function (){var statearr_17115 = state_17091;(statearr_17115[(10)] = inst_17044__$1);
return statearr_17115;
})();if(inst_17044__$1)
{var statearr_17116_17157 = state_17091__$1;(statearr_17116_17157[(1)] = (13));
} else
{var statearr_17117_17158 = state_17091__$1;(statearr_17117_17158[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17092 === (9)))
{var inst_17066 = (state_17091[(2)]);var state_17091__$1 = state_17091;var statearr_17118_17159 = state_17091__$1;(statearr_17118_17159[(2)] = inst_17066);
(statearr_17118_17159[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17092 === (5)))
{var inst_17027 = cljs.core.deref.call(null,mults);var inst_17028 = cljs.core.vals.call(null,inst_17027);var inst_17029 = cljs.core.seq.call(null,inst_17028);var inst_17030 = inst_17029;var inst_17031 = null;var inst_17032 = (0);var inst_17033 = (0);var state_17091__$1 = (function (){var statearr_17119 = state_17091;(statearr_17119[(12)] = inst_17032);
(statearr_17119[(13)] = inst_17031);
(statearr_17119[(14)] = inst_17030);
(statearr_17119[(16)] = inst_17033);
return statearr_17119;
})();var statearr_17120_17160 = state_17091__$1;(statearr_17120_17160[(2)] = null);
(statearr_17120_17160[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17092 === (14)))
{var state_17091__$1 = state_17091;var statearr_17124_17161 = state_17091__$1;(statearr_17124_17161[(2)] = null);
(statearr_17124_17161[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17092 === (16)))
{var inst_17044 = (state_17091[(10)]);var inst_17048 = cljs.core.chunk_first.call(null,inst_17044);var inst_17049 = cljs.core.chunk_rest.call(null,inst_17044);var inst_17050 = cljs.core.count.call(null,inst_17048);var inst_17030 = inst_17049;var inst_17031 = inst_17048;var inst_17032 = inst_17050;var inst_17033 = (0);var state_17091__$1 = (function (){var statearr_17125 = state_17091;(statearr_17125[(12)] = inst_17032);
(statearr_17125[(13)] = inst_17031);
(statearr_17125[(14)] = inst_17030);
(statearr_17125[(16)] = inst_17033);
return statearr_17125;
})();var statearr_17126_17162 = state_17091__$1;(statearr_17126_17162[(2)] = null);
(statearr_17126_17162[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17092 === (10)))
{var inst_17032 = (state_17091[(12)]);var inst_17031 = (state_17091[(13)]);var inst_17030 = (state_17091[(14)]);var inst_17033 = (state_17091[(16)]);var inst_17038 = cljs.core._nth.call(null,inst_17031,inst_17033);var inst_17039 = cljs.core.async.muxch_STAR_.call(null,inst_17038);var inst_17040 = cljs.core.async.close_BANG_.call(null,inst_17039);var inst_17041 = (inst_17033 + (1));var tmp17121 = inst_17032;var tmp17122 = inst_17031;var tmp17123 = inst_17030;var inst_17030__$1 = tmp17123;var inst_17031__$1 = tmp17122;var inst_17032__$1 = tmp17121;var inst_17033__$1 = inst_17041;var state_17091__$1 = (function (){var statearr_17127 = state_17091;(statearr_17127[(12)] = inst_17032__$1);
(statearr_17127[(13)] = inst_17031__$1);
(statearr_17127[(14)] = inst_17030__$1);
(statearr_17127[(18)] = inst_17040);
(statearr_17127[(16)] = inst_17033__$1);
return statearr_17127;
})();var statearr_17128_17163 = state_17091__$1;(statearr_17128_17163[(2)] = null);
(statearr_17128_17163[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17092 === (18)))
{var inst_17059 = (state_17091[(2)]);var state_17091__$1 = state_17091;var statearr_17129_17164 = state_17091__$1;(statearr_17129_17164[(2)] = inst_17059);
(statearr_17129_17164[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17092 === (8)))
{var inst_17032 = (state_17091[(12)]);var inst_17033 = (state_17091[(16)]);var inst_17035 = (inst_17033 < inst_17032);var inst_17036 = inst_17035;var state_17091__$1 = state_17091;if(cljs.core.truth_(inst_17036))
{var statearr_17130_17165 = state_17091__$1;(statearr_17130_17165[(1)] = (10));
} else
{var statearr_17131_17166 = state_17091__$1;(statearr_17131_17166[(1)] = (11));
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
});})(c__8977__auto___17139,mults,ensure_mult,p))
;return ((function (switch__8962__auto__,c__8977__auto___17139,mults,ensure_mult,p){
return (function() {
var state_machine__8963__auto__ = null;
var state_machine__8963__auto____0 = (function (){var statearr_17135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17135[(0)] = state_machine__8963__auto__);
(statearr_17135[(1)] = (1));
return statearr_17135;
});
var state_machine__8963__auto____1 = (function (state_17091){while(true){
var ret_value__8964__auto__ = (function (){try{while(true){
var result__8965__auto__ = switch__8962__auto__.call(null,state_17091);if(cljs.core.keyword_identical_QMARK_.call(null,result__8965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8965__auto__;
}
break;
}
}catch (e17136){if((e17136 instanceof Object))
{var ex__8966__auto__ = e17136;var statearr_17137_17167 = state_17091;(statearr_17137_17167[(5)] = ex__8966__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17091);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17136;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17168 = state_17091;
state_17091 = G__17168;
continue;
}
} else
{return ret_value__8964__auto__;
}
break;
}
});
state_machine__8963__auto__ = function(state_17091){
switch(arguments.length){
case 0:
return state_machine__8963__auto____0.call(this);
case 1:
return state_machine__8963__auto____1.call(this,state_17091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8963__auto____0;
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8963__auto____1;
return state_machine__8963__auto__;
})()
;})(switch__8962__auto__,c__8977__auto___17139,mults,ensure_mult,p))
})();var state__8979__auto__ = (function (){var statearr_17138 = f__8978__auto__.call(null);(statearr_17138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8977__auto___17139);
return statearr_17138;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8979__auto__);
});})(c__8977__auto___17139,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__8977__auto___17305 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8977__auto___17305,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__8978__auto__ = (function (){var switch__8962__auto__ = ((function (c__8977__auto___17305,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17275){var state_val_17276 = (state_17275[(1)]);if((state_val_17276 === (7)))
{var state_17275__$1 = state_17275;var statearr_17277_17306 = state_17275__$1;(statearr_17277_17306[(2)] = null);
(statearr_17277_17306[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (1)))
{var state_17275__$1 = state_17275;var statearr_17278_17307 = state_17275__$1;(statearr_17278_17307[(2)] = null);
(statearr_17278_17307[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (4)))
{var inst_17239 = (state_17275[(7)]);var inst_17241 = (inst_17239 < cnt);var state_17275__$1 = state_17275;if(cljs.core.truth_(inst_17241))
{var statearr_17279_17308 = state_17275__$1;(statearr_17279_17308[(1)] = (6));
} else
{var statearr_17280_17309 = state_17275__$1;(statearr_17280_17309[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (15)))
{var inst_17271 = (state_17275[(2)]);var state_17275__$1 = state_17275;var statearr_17281_17310 = state_17275__$1;(statearr_17281_17310[(2)] = inst_17271);
(statearr_17281_17310[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (13)))
{var inst_17264 = cljs.core.async.close_BANG_.call(null,out);var state_17275__$1 = state_17275;var statearr_17282_17311 = state_17275__$1;(statearr_17282_17311[(2)] = inst_17264);
(statearr_17282_17311[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (6)))
{var state_17275__$1 = state_17275;var statearr_17283_17312 = state_17275__$1;(statearr_17283_17312[(2)] = null);
(statearr_17283_17312[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (3)))
{var inst_17273 = (state_17275[(2)]);var state_17275__$1 = state_17275;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17275__$1,inst_17273);
} else
{if((state_val_17276 === (12)))
{var inst_17261 = (state_17275[(8)]);var inst_17261__$1 = (state_17275[(2)]);var inst_17262 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17261__$1);var state_17275__$1 = (function (){var statearr_17284 = state_17275;(statearr_17284[(8)] = inst_17261__$1);
return statearr_17284;
})();if(cljs.core.truth_(inst_17262))
{var statearr_17285_17313 = state_17275__$1;(statearr_17285_17313[(1)] = (13));
} else
{var statearr_17286_17314 = state_17275__$1;(statearr_17286_17314[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (2)))
{var inst_17238 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17239 = (0);var state_17275__$1 = (function (){var statearr_17287 = state_17275;(statearr_17287[(9)] = inst_17238);
(statearr_17287[(7)] = inst_17239);
return statearr_17287;
})();var statearr_17288_17315 = state_17275__$1;(statearr_17288_17315[(2)] = null);
(statearr_17288_17315[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (11)))
{var inst_17239 = (state_17275[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17275,(10),Object,null,(9));var inst_17248 = chs__$1.call(null,inst_17239);var inst_17249 = done.call(null,inst_17239);var inst_17250 = cljs.core.async.take_BANG_.call(null,inst_17248,inst_17249);var state_17275__$1 = state_17275;var statearr_17289_17316 = state_17275__$1;(statearr_17289_17316[(2)] = inst_17250);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17275__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (9)))
{var inst_17239 = (state_17275[(7)]);var inst_17252 = (state_17275[(2)]);var inst_17253 = (inst_17239 + (1));var inst_17239__$1 = inst_17253;var state_17275__$1 = (function (){var statearr_17290 = state_17275;(statearr_17290[(10)] = inst_17252);
(statearr_17290[(7)] = inst_17239__$1);
return statearr_17290;
})();var statearr_17291_17317 = state_17275__$1;(statearr_17291_17317[(2)] = null);
(statearr_17291_17317[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (5)))
{var inst_17259 = (state_17275[(2)]);var state_17275__$1 = (function (){var statearr_17292 = state_17275;(statearr_17292[(11)] = inst_17259);
return statearr_17292;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17275__$1,(12),dchan);
} else
{if((state_val_17276 === (14)))
{var inst_17261 = (state_17275[(8)]);var inst_17266 = cljs.core.apply.call(null,f,inst_17261);var state_17275__$1 = state_17275;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17275__$1,(16),out,inst_17266);
} else
{if((state_val_17276 === (16)))
{var inst_17268 = (state_17275[(2)]);var state_17275__$1 = (function (){var statearr_17293 = state_17275;(statearr_17293[(12)] = inst_17268);
return statearr_17293;
})();var statearr_17294_17318 = state_17275__$1;(statearr_17294_17318[(2)] = null);
(statearr_17294_17318[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (10)))
{var inst_17243 = (state_17275[(2)]);var inst_17244 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17275__$1 = (function (){var statearr_17295 = state_17275;(statearr_17295[(13)] = inst_17243);
return statearr_17295;
})();var statearr_17296_17319 = state_17275__$1;(statearr_17296_17319[(2)] = inst_17244);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17275__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17276 === (8)))
{var inst_17257 = (state_17275[(2)]);var state_17275__$1 = state_17275;var statearr_17297_17320 = state_17275__$1;(statearr_17297_17320[(2)] = inst_17257);
(statearr_17297_17320[(1)] = (5));
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
}
}
}
});})(c__8977__auto___17305,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__8962__auto__,c__8977__auto___17305,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__8963__auto__ = null;
var state_machine__8963__auto____0 = (function (){var statearr_17301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17301[(0)] = state_machine__8963__auto__);
(statearr_17301[(1)] = (1));
return statearr_17301;
});
var state_machine__8963__auto____1 = (function (state_17275){while(true){
var ret_value__8964__auto__ = (function (){try{while(true){
var result__8965__auto__ = switch__8962__auto__.call(null,state_17275);if(cljs.core.keyword_identical_QMARK_.call(null,result__8965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8965__auto__;
}
break;
}
}catch (e17302){if((e17302 instanceof Object))
{var ex__8966__auto__ = e17302;var statearr_17303_17321 = state_17275;(statearr_17303_17321[(5)] = ex__8966__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17275);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17302;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17322 = state_17275;
state_17275 = G__17322;
continue;
}
} else
{return ret_value__8964__auto__;
}
break;
}
});
state_machine__8963__auto__ = function(state_17275){
switch(arguments.length){
case 0:
return state_machine__8963__auto____0.call(this);
case 1:
return state_machine__8963__auto____1.call(this,state_17275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8963__auto____0;
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8963__auto____1;
return state_machine__8963__auto__;
})()
;})(switch__8962__auto__,c__8977__auto___17305,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__8979__auto__ = (function (){var statearr_17304 = f__8978__auto__.call(null);(statearr_17304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8977__auto___17305);
return statearr_17304;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8979__auto__);
});})(c__8977__auto___17305,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8977__auto___17430 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8977__auto___17430,out){
return (function (){var f__8978__auto__ = (function (){var switch__8962__auto__ = ((function (c__8977__auto___17430,out){
return (function (state_17406){var state_val_17407 = (state_17406[(1)]);if((state_val_17407 === (7)))
{var inst_17385 = (state_17406[(7)]);var inst_17386 = (state_17406[(8)]);var inst_17385__$1 = (state_17406[(2)]);var inst_17386__$1 = cljs.core.nth.call(null,inst_17385__$1,(0),null);var inst_17387 = cljs.core.nth.call(null,inst_17385__$1,(1),null);var inst_17388 = (inst_17386__$1 == null);var state_17406__$1 = (function (){var statearr_17408 = state_17406;(statearr_17408[(7)] = inst_17385__$1);
(statearr_17408[(9)] = inst_17387);
(statearr_17408[(8)] = inst_17386__$1);
return statearr_17408;
})();if(cljs.core.truth_(inst_17388))
{var statearr_17409_17431 = state_17406__$1;(statearr_17409_17431[(1)] = (8));
} else
{var statearr_17410_17432 = state_17406__$1;(statearr_17410_17432[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17407 === (1)))
{var inst_17377 = cljs.core.vec.call(null,chs);var inst_17378 = inst_17377;var state_17406__$1 = (function (){var statearr_17411 = state_17406;(statearr_17411[(10)] = inst_17378);
return statearr_17411;
})();var statearr_17412_17433 = state_17406__$1;(statearr_17412_17433[(2)] = null);
(statearr_17412_17433[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17407 === (4)))
{var inst_17378 = (state_17406[(10)]);var state_17406__$1 = state_17406;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17406__$1,(7),inst_17378);
} else
{if((state_val_17407 === (6)))
{var inst_17402 = (state_17406[(2)]);var state_17406__$1 = state_17406;var statearr_17413_17434 = state_17406__$1;(statearr_17413_17434[(2)] = inst_17402);
(statearr_17413_17434[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17407 === (3)))
{var inst_17404 = (state_17406[(2)]);var state_17406__$1 = state_17406;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17406__$1,inst_17404);
} else
{if((state_val_17407 === (2)))
{var inst_17378 = (state_17406[(10)]);var inst_17380 = cljs.core.count.call(null,inst_17378);var inst_17381 = (inst_17380 > (0));var state_17406__$1 = state_17406;if(cljs.core.truth_(inst_17381))
{var statearr_17415_17435 = state_17406__$1;(statearr_17415_17435[(1)] = (4));
} else
{var statearr_17416_17436 = state_17406__$1;(statearr_17416_17436[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17407 === (11)))
{var inst_17378 = (state_17406[(10)]);var inst_17395 = (state_17406[(2)]);var tmp17414 = inst_17378;var inst_17378__$1 = tmp17414;var state_17406__$1 = (function (){var statearr_17417 = state_17406;(statearr_17417[(10)] = inst_17378__$1);
(statearr_17417[(11)] = inst_17395);
return statearr_17417;
})();var statearr_17418_17437 = state_17406__$1;(statearr_17418_17437[(2)] = null);
(statearr_17418_17437[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17407 === (9)))
{var inst_17386 = (state_17406[(8)]);var state_17406__$1 = state_17406;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17406__$1,(11),out,inst_17386);
} else
{if((state_val_17407 === (5)))
{var inst_17400 = cljs.core.async.close_BANG_.call(null,out);var state_17406__$1 = state_17406;var statearr_17419_17438 = state_17406__$1;(statearr_17419_17438[(2)] = inst_17400);
(statearr_17419_17438[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17407 === (10)))
{var inst_17398 = (state_17406[(2)]);var state_17406__$1 = state_17406;var statearr_17420_17439 = state_17406__$1;(statearr_17420_17439[(2)] = inst_17398);
(statearr_17420_17439[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17407 === (8)))
{var inst_17385 = (state_17406[(7)]);var inst_17387 = (state_17406[(9)]);var inst_17378 = (state_17406[(10)]);var inst_17386 = (state_17406[(8)]);var inst_17390 = (function (){var c = inst_17387;var v = inst_17386;var vec__17383 = inst_17385;var cs = inst_17378;return ((function (c,v,vec__17383,cs,inst_17385,inst_17387,inst_17378,inst_17386,state_val_17407,c__8977__auto___17430,out){
return (function (p1__17323_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17323_SHARP_);
});
;})(c,v,vec__17383,cs,inst_17385,inst_17387,inst_17378,inst_17386,state_val_17407,c__8977__auto___17430,out))
})();var inst_17391 = cljs.core.filterv.call(null,inst_17390,inst_17378);var inst_17378__$1 = inst_17391;var state_17406__$1 = (function (){var statearr_17421 = state_17406;(statearr_17421[(10)] = inst_17378__$1);
return statearr_17421;
})();var statearr_17422_17440 = state_17406__$1;(statearr_17422_17440[(2)] = null);
(statearr_17422_17440[(1)] = (2));
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
});})(c__8977__auto___17430,out))
;return ((function (switch__8962__auto__,c__8977__auto___17430,out){
return (function() {
var state_machine__8963__auto__ = null;
var state_machine__8963__auto____0 = (function (){var statearr_17426 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17426[(0)] = state_machine__8963__auto__);
(statearr_17426[(1)] = (1));
return statearr_17426;
});
var state_machine__8963__auto____1 = (function (state_17406){while(true){
var ret_value__8964__auto__ = (function (){try{while(true){
var result__8965__auto__ = switch__8962__auto__.call(null,state_17406);if(cljs.core.keyword_identical_QMARK_.call(null,result__8965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8965__auto__;
}
break;
}
}catch (e17427){if((e17427 instanceof Object))
{var ex__8966__auto__ = e17427;var statearr_17428_17441 = state_17406;(statearr_17428_17441[(5)] = ex__8966__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17406);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17427;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17442 = state_17406;
state_17406 = G__17442;
continue;
}
} else
{return ret_value__8964__auto__;
}
break;
}
});
state_machine__8963__auto__ = function(state_17406){
switch(arguments.length){
case 0:
return state_machine__8963__auto____0.call(this);
case 1:
return state_machine__8963__auto____1.call(this,state_17406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8963__auto____0;
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8963__auto____1;
return state_machine__8963__auto__;
})()
;})(switch__8962__auto__,c__8977__auto___17430,out))
})();var state__8979__auto__ = (function (){var statearr_17429 = f__8978__auto__.call(null);(statearr_17429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8977__auto___17430);
return statearr_17429;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8979__auto__);
});})(c__8977__auto___17430,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8977__auto___17535 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8977__auto___17535,out){
return (function (){var f__8978__auto__ = (function (){var switch__8962__auto__ = ((function (c__8977__auto___17535,out){
return (function (state_17512){var state_val_17513 = (state_17512[(1)]);if((state_val_17513 === (7)))
{var inst_17494 = (state_17512[(7)]);var inst_17494__$1 = (state_17512[(2)]);var inst_17495 = (inst_17494__$1 == null);var inst_17496 = cljs.core.not.call(null,inst_17495);var state_17512__$1 = (function (){var statearr_17514 = state_17512;(statearr_17514[(7)] = inst_17494__$1);
return statearr_17514;
})();if(inst_17496)
{var statearr_17515_17536 = state_17512__$1;(statearr_17515_17536[(1)] = (8));
} else
{var statearr_17516_17537 = state_17512__$1;(statearr_17516_17537[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17513 === (1)))
{var inst_17489 = (0);var state_17512__$1 = (function (){var statearr_17517 = state_17512;(statearr_17517[(8)] = inst_17489);
return statearr_17517;
})();var statearr_17518_17538 = state_17512__$1;(statearr_17518_17538[(2)] = null);
(statearr_17518_17538[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17513 === (4)))
{var state_17512__$1 = state_17512;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17512__$1,(7),ch);
} else
{if((state_val_17513 === (6)))
{var inst_17507 = (state_17512[(2)]);var state_17512__$1 = state_17512;var statearr_17519_17539 = state_17512__$1;(statearr_17519_17539[(2)] = inst_17507);
(statearr_17519_17539[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17513 === (3)))
{var inst_17509 = (state_17512[(2)]);var inst_17510 = cljs.core.async.close_BANG_.call(null,out);var state_17512__$1 = (function (){var statearr_17520 = state_17512;(statearr_17520[(9)] = inst_17509);
return statearr_17520;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17512__$1,inst_17510);
} else
{if((state_val_17513 === (2)))
{var inst_17489 = (state_17512[(8)]);var inst_17491 = (inst_17489 < n);var state_17512__$1 = state_17512;if(cljs.core.truth_(inst_17491))
{var statearr_17521_17540 = state_17512__$1;(statearr_17521_17540[(1)] = (4));
} else
{var statearr_17522_17541 = state_17512__$1;(statearr_17522_17541[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17513 === (11)))
{var inst_17489 = (state_17512[(8)]);var inst_17499 = (state_17512[(2)]);var inst_17500 = (inst_17489 + (1));var inst_17489__$1 = inst_17500;var state_17512__$1 = (function (){var statearr_17523 = state_17512;(statearr_17523[(10)] = inst_17499);
(statearr_17523[(8)] = inst_17489__$1);
return statearr_17523;
})();var statearr_17524_17542 = state_17512__$1;(statearr_17524_17542[(2)] = null);
(statearr_17524_17542[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17513 === (9)))
{var state_17512__$1 = state_17512;var statearr_17525_17543 = state_17512__$1;(statearr_17525_17543[(2)] = null);
(statearr_17525_17543[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17513 === (5)))
{var state_17512__$1 = state_17512;var statearr_17526_17544 = state_17512__$1;(statearr_17526_17544[(2)] = null);
(statearr_17526_17544[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17513 === (10)))
{var inst_17504 = (state_17512[(2)]);var state_17512__$1 = state_17512;var statearr_17527_17545 = state_17512__$1;(statearr_17527_17545[(2)] = inst_17504);
(statearr_17527_17545[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17513 === (8)))
{var inst_17494 = (state_17512[(7)]);var state_17512__$1 = state_17512;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17512__$1,(11),out,inst_17494);
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
});})(c__8977__auto___17535,out))
;return ((function (switch__8962__auto__,c__8977__auto___17535,out){
return (function() {
var state_machine__8963__auto__ = null;
var state_machine__8963__auto____0 = (function (){var statearr_17531 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17531[(0)] = state_machine__8963__auto__);
(statearr_17531[(1)] = (1));
return statearr_17531;
});
var state_machine__8963__auto____1 = (function (state_17512){while(true){
var ret_value__8964__auto__ = (function (){try{while(true){
var result__8965__auto__ = switch__8962__auto__.call(null,state_17512);if(cljs.core.keyword_identical_QMARK_.call(null,result__8965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8965__auto__;
}
break;
}
}catch (e17532){if((e17532 instanceof Object))
{var ex__8966__auto__ = e17532;var statearr_17533_17546 = state_17512;(statearr_17533_17546[(5)] = ex__8966__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17512);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17532;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17547 = state_17512;
state_17512 = G__17547;
continue;
}
} else
{return ret_value__8964__auto__;
}
break;
}
});
state_machine__8963__auto__ = function(state_17512){
switch(arguments.length){
case 0:
return state_machine__8963__auto____0.call(this);
case 1:
return state_machine__8963__auto____1.call(this,state_17512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8963__auto____0;
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8963__auto____1;
return state_machine__8963__auto__;
})()
;})(switch__8962__auto__,c__8977__auto___17535,out))
})();var state__8979__auto__ = (function (){var statearr_17534 = f__8978__auto__.call(null);(statearr_17534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8977__auto___17535);
return statearr_17534;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8979__auto__);
});})(c__8977__auto___17535,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8977__auto___17644 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8977__auto___17644,out){
return (function (){var f__8978__auto__ = (function (){var switch__8962__auto__ = ((function (c__8977__auto___17644,out){
return (function (state_17619){var state_val_17620 = (state_17619[(1)]);if((state_val_17620 === (7)))
{var inst_17614 = (state_17619[(2)]);var state_17619__$1 = state_17619;var statearr_17621_17645 = state_17619__$1;(statearr_17621_17645[(2)] = inst_17614);
(statearr_17621_17645[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17620 === (1)))
{var inst_17596 = null;var state_17619__$1 = (function (){var statearr_17622 = state_17619;(statearr_17622[(7)] = inst_17596);
return statearr_17622;
})();var statearr_17623_17646 = state_17619__$1;(statearr_17623_17646[(2)] = null);
(statearr_17623_17646[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17620 === (4)))
{var inst_17599 = (state_17619[(8)]);var inst_17599__$1 = (state_17619[(2)]);var inst_17600 = (inst_17599__$1 == null);var inst_17601 = cljs.core.not.call(null,inst_17600);var state_17619__$1 = (function (){var statearr_17624 = state_17619;(statearr_17624[(8)] = inst_17599__$1);
return statearr_17624;
})();if(inst_17601)
{var statearr_17625_17647 = state_17619__$1;(statearr_17625_17647[(1)] = (5));
} else
{var statearr_17626_17648 = state_17619__$1;(statearr_17626_17648[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17620 === (6)))
{var state_17619__$1 = state_17619;var statearr_17627_17649 = state_17619__$1;(statearr_17627_17649[(2)] = null);
(statearr_17627_17649[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17620 === (3)))
{var inst_17616 = (state_17619[(2)]);var inst_17617 = cljs.core.async.close_BANG_.call(null,out);var state_17619__$1 = (function (){var statearr_17628 = state_17619;(statearr_17628[(9)] = inst_17616);
return statearr_17628;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17619__$1,inst_17617);
} else
{if((state_val_17620 === (2)))
{var state_17619__$1 = state_17619;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17619__$1,(4),ch);
} else
{if((state_val_17620 === (11)))
{var inst_17599 = (state_17619[(8)]);var inst_17608 = (state_17619[(2)]);var inst_17596 = inst_17599;var state_17619__$1 = (function (){var statearr_17629 = state_17619;(statearr_17629[(7)] = inst_17596);
(statearr_17629[(10)] = inst_17608);
return statearr_17629;
})();var statearr_17630_17650 = state_17619__$1;(statearr_17630_17650[(2)] = null);
(statearr_17630_17650[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17620 === (9)))
{var inst_17599 = (state_17619[(8)]);var state_17619__$1 = state_17619;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17619__$1,(11),out,inst_17599);
} else
{if((state_val_17620 === (5)))
{var inst_17596 = (state_17619[(7)]);var inst_17599 = (state_17619[(8)]);var inst_17603 = cljs.core._EQ_.call(null,inst_17599,inst_17596);var state_17619__$1 = state_17619;if(inst_17603)
{var statearr_17632_17651 = state_17619__$1;(statearr_17632_17651[(1)] = (8));
} else
{var statearr_17633_17652 = state_17619__$1;(statearr_17633_17652[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17620 === (10)))
{var inst_17611 = (state_17619[(2)]);var state_17619__$1 = state_17619;var statearr_17634_17653 = state_17619__$1;(statearr_17634_17653[(2)] = inst_17611);
(statearr_17634_17653[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17620 === (8)))
{var inst_17596 = (state_17619[(7)]);var tmp17631 = inst_17596;var inst_17596__$1 = tmp17631;var state_17619__$1 = (function (){var statearr_17635 = state_17619;(statearr_17635[(7)] = inst_17596__$1);
return statearr_17635;
})();var statearr_17636_17654 = state_17619__$1;(statearr_17636_17654[(2)] = null);
(statearr_17636_17654[(1)] = (2));
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
});})(c__8977__auto___17644,out))
;return ((function (switch__8962__auto__,c__8977__auto___17644,out){
return (function() {
var state_machine__8963__auto__ = null;
var state_machine__8963__auto____0 = (function (){var statearr_17640 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17640[(0)] = state_machine__8963__auto__);
(statearr_17640[(1)] = (1));
return statearr_17640;
});
var state_machine__8963__auto____1 = (function (state_17619){while(true){
var ret_value__8964__auto__ = (function (){try{while(true){
var result__8965__auto__ = switch__8962__auto__.call(null,state_17619);if(cljs.core.keyword_identical_QMARK_.call(null,result__8965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8965__auto__;
}
break;
}
}catch (e17641){if((e17641 instanceof Object))
{var ex__8966__auto__ = e17641;var statearr_17642_17655 = state_17619;(statearr_17642_17655[(5)] = ex__8966__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17619);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17641;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17656 = state_17619;
state_17619 = G__17656;
continue;
}
} else
{return ret_value__8964__auto__;
}
break;
}
});
state_machine__8963__auto__ = function(state_17619){
switch(arguments.length){
case 0:
return state_machine__8963__auto____0.call(this);
case 1:
return state_machine__8963__auto____1.call(this,state_17619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8963__auto____0;
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8963__auto____1;
return state_machine__8963__auto__;
})()
;})(switch__8962__auto__,c__8977__auto___17644,out))
})();var state__8979__auto__ = (function (){var statearr_17643 = f__8978__auto__.call(null);(statearr_17643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8977__auto___17644);
return statearr_17643;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8979__auto__);
});})(c__8977__auto___17644,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8977__auto___17791 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8977__auto___17791,out){
return (function (){var f__8978__auto__ = (function (){var switch__8962__auto__ = ((function (c__8977__auto___17791,out){
return (function (state_17761){var state_val_17762 = (state_17761[(1)]);if((state_val_17762 === (7)))
{var inst_17757 = (state_17761[(2)]);var state_17761__$1 = state_17761;var statearr_17763_17792 = state_17761__$1;(statearr_17763_17792[(2)] = inst_17757);
(statearr_17763_17792[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17762 === (1)))
{var inst_17724 = (new Array(n));var inst_17725 = inst_17724;var inst_17726 = (0);var state_17761__$1 = (function (){var statearr_17764 = state_17761;(statearr_17764[(7)] = inst_17726);
(statearr_17764[(8)] = inst_17725);
return statearr_17764;
})();var statearr_17765_17793 = state_17761__$1;(statearr_17765_17793[(2)] = null);
(statearr_17765_17793[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17762 === (4)))
{var inst_17729 = (state_17761[(9)]);var inst_17729__$1 = (state_17761[(2)]);var inst_17730 = (inst_17729__$1 == null);var inst_17731 = cljs.core.not.call(null,inst_17730);var state_17761__$1 = (function (){var statearr_17766 = state_17761;(statearr_17766[(9)] = inst_17729__$1);
return statearr_17766;
})();if(inst_17731)
{var statearr_17767_17794 = state_17761__$1;(statearr_17767_17794[(1)] = (5));
} else
{var statearr_17768_17795 = state_17761__$1;(statearr_17768_17795[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17762 === (15)))
{var inst_17751 = (state_17761[(2)]);var state_17761__$1 = state_17761;var statearr_17769_17796 = state_17761__$1;(statearr_17769_17796[(2)] = inst_17751);
(statearr_17769_17796[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17762 === (13)))
{var state_17761__$1 = state_17761;var statearr_17770_17797 = state_17761__$1;(statearr_17770_17797[(2)] = null);
(statearr_17770_17797[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17762 === (6)))
{var inst_17726 = (state_17761[(7)]);var inst_17747 = (inst_17726 > (0));var state_17761__$1 = state_17761;if(cljs.core.truth_(inst_17747))
{var statearr_17771_17798 = state_17761__$1;(statearr_17771_17798[(1)] = (12));
} else
{var statearr_17772_17799 = state_17761__$1;(statearr_17772_17799[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17762 === (3)))
{var inst_17759 = (state_17761[(2)]);var state_17761__$1 = state_17761;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17761__$1,inst_17759);
} else
{if((state_val_17762 === (12)))
{var inst_17725 = (state_17761[(8)]);var inst_17749 = cljs.core.vec.call(null,inst_17725);var state_17761__$1 = state_17761;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17761__$1,(15),out,inst_17749);
} else
{if((state_val_17762 === (2)))
{var state_17761__$1 = state_17761;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17761__$1,(4),ch);
} else
{if((state_val_17762 === (11)))
{var inst_17741 = (state_17761[(2)]);var inst_17742 = (new Array(n));var inst_17725 = inst_17742;var inst_17726 = (0);var state_17761__$1 = (function (){var statearr_17773 = state_17761;(statearr_17773[(7)] = inst_17726);
(statearr_17773[(10)] = inst_17741);
(statearr_17773[(8)] = inst_17725);
return statearr_17773;
})();var statearr_17774_17800 = state_17761__$1;(statearr_17774_17800[(2)] = null);
(statearr_17774_17800[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17762 === (9)))
{var inst_17725 = (state_17761[(8)]);var inst_17739 = cljs.core.vec.call(null,inst_17725);var state_17761__$1 = state_17761;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17761__$1,(11),out,inst_17739);
} else
{if((state_val_17762 === (5)))
{var inst_17734 = (state_17761[(11)]);var inst_17726 = (state_17761[(7)]);var inst_17729 = (state_17761[(9)]);var inst_17725 = (state_17761[(8)]);var inst_17733 = (inst_17725[inst_17726] = inst_17729);var inst_17734__$1 = (inst_17726 + (1));var inst_17735 = (inst_17734__$1 < n);var state_17761__$1 = (function (){var statearr_17775 = state_17761;(statearr_17775[(11)] = inst_17734__$1);
(statearr_17775[(12)] = inst_17733);
return statearr_17775;
})();if(cljs.core.truth_(inst_17735))
{var statearr_17776_17801 = state_17761__$1;(statearr_17776_17801[(1)] = (8));
} else
{var statearr_17777_17802 = state_17761__$1;(statearr_17777_17802[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17762 === (14)))
{var inst_17754 = (state_17761[(2)]);var inst_17755 = cljs.core.async.close_BANG_.call(null,out);var state_17761__$1 = (function (){var statearr_17779 = state_17761;(statearr_17779[(13)] = inst_17754);
return statearr_17779;
})();var statearr_17780_17803 = state_17761__$1;(statearr_17780_17803[(2)] = inst_17755);
(statearr_17780_17803[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17762 === (10)))
{var inst_17745 = (state_17761[(2)]);var state_17761__$1 = state_17761;var statearr_17781_17804 = state_17761__$1;(statearr_17781_17804[(2)] = inst_17745);
(statearr_17781_17804[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17762 === (8)))
{var inst_17734 = (state_17761[(11)]);var inst_17725 = (state_17761[(8)]);var tmp17778 = inst_17725;var inst_17725__$1 = tmp17778;var inst_17726 = inst_17734;var state_17761__$1 = (function (){var statearr_17782 = state_17761;(statearr_17782[(7)] = inst_17726);
(statearr_17782[(8)] = inst_17725__$1);
return statearr_17782;
})();var statearr_17783_17805 = state_17761__$1;(statearr_17783_17805[(2)] = null);
(statearr_17783_17805[(1)] = (2));
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
}
}
});})(c__8977__auto___17791,out))
;return ((function (switch__8962__auto__,c__8977__auto___17791,out){
return (function() {
var state_machine__8963__auto__ = null;
var state_machine__8963__auto____0 = (function (){var statearr_17787 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17787[(0)] = state_machine__8963__auto__);
(statearr_17787[(1)] = (1));
return statearr_17787;
});
var state_machine__8963__auto____1 = (function (state_17761){while(true){
var ret_value__8964__auto__ = (function (){try{while(true){
var result__8965__auto__ = switch__8962__auto__.call(null,state_17761);if(cljs.core.keyword_identical_QMARK_.call(null,result__8965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8965__auto__;
}
break;
}
}catch (e17788){if((e17788 instanceof Object))
{var ex__8966__auto__ = e17788;var statearr_17789_17806 = state_17761;(statearr_17789_17806[(5)] = ex__8966__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17761);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17788;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17807 = state_17761;
state_17761 = G__17807;
continue;
}
} else
{return ret_value__8964__auto__;
}
break;
}
});
state_machine__8963__auto__ = function(state_17761){
switch(arguments.length){
case 0:
return state_machine__8963__auto____0.call(this);
case 1:
return state_machine__8963__auto____1.call(this,state_17761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8963__auto____0;
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8963__auto____1;
return state_machine__8963__auto__;
})()
;})(switch__8962__auto__,c__8977__auto___17791,out))
})();var state__8979__auto__ = (function (){var statearr_17790 = f__8978__auto__.call(null);(statearr_17790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8977__auto___17791);
return statearr_17790;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8979__auto__);
});})(c__8977__auto___17791,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__8977__auto___17950 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__8977__auto___17950,out){
return (function (){var f__8978__auto__ = (function (){var switch__8962__auto__ = ((function (c__8977__auto___17950,out){
return (function (state_17920){var state_val_17921 = (state_17920[(1)]);if((state_val_17921 === (7)))
{var inst_17916 = (state_17920[(2)]);var state_17920__$1 = state_17920;var statearr_17922_17951 = state_17920__$1;(statearr_17922_17951[(2)] = inst_17916);
(statearr_17922_17951[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (1)))
{var inst_17879 = [];var inst_17880 = inst_17879;var inst_17881 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_17920__$1 = (function (){var statearr_17923 = state_17920;(statearr_17923[(7)] = inst_17881);
(statearr_17923[(8)] = inst_17880);
return statearr_17923;
})();var statearr_17924_17952 = state_17920__$1;(statearr_17924_17952[(2)] = null);
(statearr_17924_17952[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (4)))
{var inst_17884 = (state_17920[(9)]);var inst_17884__$1 = (state_17920[(2)]);var inst_17885 = (inst_17884__$1 == null);var inst_17886 = cljs.core.not.call(null,inst_17885);var state_17920__$1 = (function (){var statearr_17925 = state_17920;(statearr_17925[(9)] = inst_17884__$1);
return statearr_17925;
})();if(inst_17886)
{var statearr_17926_17953 = state_17920__$1;(statearr_17926_17953[(1)] = (5));
} else
{var statearr_17927_17954 = state_17920__$1;(statearr_17927_17954[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (15)))
{var inst_17910 = (state_17920[(2)]);var state_17920__$1 = state_17920;var statearr_17928_17955 = state_17920__$1;(statearr_17928_17955[(2)] = inst_17910);
(statearr_17928_17955[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (13)))
{var state_17920__$1 = state_17920;var statearr_17929_17956 = state_17920__$1;(statearr_17929_17956[(2)] = null);
(statearr_17929_17956[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (6)))
{var inst_17880 = (state_17920[(8)]);var inst_17905 = inst_17880.length;var inst_17906 = (inst_17905 > (0));var state_17920__$1 = state_17920;if(cljs.core.truth_(inst_17906))
{var statearr_17930_17957 = state_17920__$1;(statearr_17930_17957[(1)] = (12));
} else
{var statearr_17931_17958 = state_17920__$1;(statearr_17931_17958[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (3)))
{var inst_17918 = (state_17920[(2)]);var state_17920__$1 = state_17920;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17920__$1,inst_17918);
} else
{if((state_val_17921 === (12)))
{var inst_17880 = (state_17920[(8)]);var inst_17908 = cljs.core.vec.call(null,inst_17880);var state_17920__$1 = state_17920;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17920__$1,(15),out,inst_17908);
} else
{if((state_val_17921 === (2)))
{var state_17920__$1 = state_17920;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17920__$1,(4),ch);
} else
{if((state_val_17921 === (11)))
{var inst_17888 = (state_17920[(10)]);var inst_17884 = (state_17920[(9)]);var inst_17898 = (state_17920[(2)]);var inst_17899 = [];var inst_17900 = inst_17899.push(inst_17884);var inst_17880 = inst_17899;var inst_17881 = inst_17888;var state_17920__$1 = (function (){var statearr_17932 = state_17920;(statearr_17932[(7)] = inst_17881);
(statearr_17932[(11)] = inst_17898);
(statearr_17932[(12)] = inst_17900);
(statearr_17932[(8)] = inst_17880);
return statearr_17932;
})();var statearr_17933_17959 = state_17920__$1;(statearr_17933_17959[(2)] = null);
(statearr_17933_17959[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (9)))
{var inst_17880 = (state_17920[(8)]);var inst_17896 = cljs.core.vec.call(null,inst_17880);var state_17920__$1 = state_17920;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17920__$1,(11),out,inst_17896);
} else
{if((state_val_17921 === (5)))
{var inst_17881 = (state_17920[(7)]);var inst_17888 = (state_17920[(10)]);var inst_17884 = (state_17920[(9)]);var inst_17888__$1 = f.call(null,inst_17884);var inst_17889 = cljs.core._EQ_.call(null,inst_17888__$1,inst_17881);var inst_17890 = cljs.core.keyword_identical_QMARK_.call(null,inst_17881,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_17891 = (inst_17889) || (inst_17890);var state_17920__$1 = (function (){var statearr_17934 = state_17920;(statearr_17934[(10)] = inst_17888__$1);
return statearr_17934;
})();if(cljs.core.truth_(inst_17891))
{var statearr_17935_17960 = state_17920__$1;(statearr_17935_17960[(1)] = (8));
} else
{var statearr_17936_17961 = state_17920__$1;(statearr_17936_17961[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (14)))
{var inst_17913 = (state_17920[(2)]);var inst_17914 = cljs.core.async.close_BANG_.call(null,out);var state_17920__$1 = (function (){var statearr_17938 = state_17920;(statearr_17938[(13)] = inst_17913);
return statearr_17938;
})();var statearr_17939_17962 = state_17920__$1;(statearr_17939_17962[(2)] = inst_17914);
(statearr_17939_17962[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (10)))
{var inst_17903 = (state_17920[(2)]);var state_17920__$1 = state_17920;var statearr_17940_17963 = state_17920__$1;(statearr_17940_17963[(2)] = inst_17903);
(statearr_17940_17963[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17921 === (8)))
{var inst_17880 = (state_17920[(8)]);var inst_17888 = (state_17920[(10)]);var inst_17884 = (state_17920[(9)]);var inst_17893 = inst_17880.push(inst_17884);var tmp17937 = inst_17880;var inst_17880__$1 = tmp17937;var inst_17881 = inst_17888;var state_17920__$1 = (function (){var statearr_17941 = state_17920;(statearr_17941[(7)] = inst_17881);
(statearr_17941[(14)] = inst_17893);
(statearr_17941[(8)] = inst_17880__$1);
return statearr_17941;
})();var statearr_17942_17964 = state_17920__$1;(statearr_17942_17964[(2)] = null);
(statearr_17942_17964[(1)] = (2));
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
}
}
});})(c__8977__auto___17950,out))
;return ((function (switch__8962__auto__,c__8977__auto___17950,out){
return (function() {
var state_machine__8963__auto__ = null;
var state_machine__8963__auto____0 = (function (){var statearr_17946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17946[(0)] = state_machine__8963__auto__);
(statearr_17946[(1)] = (1));
return statearr_17946;
});
var state_machine__8963__auto____1 = (function (state_17920){while(true){
var ret_value__8964__auto__ = (function (){try{while(true){
var result__8965__auto__ = switch__8962__auto__.call(null,state_17920);if(cljs.core.keyword_identical_QMARK_.call(null,result__8965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__8965__auto__;
}
break;
}
}catch (e17947){if((e17947 instanceof Object))
{var ex__8966__auto__ = e17947;var statearr_17948_17965 = state_17920;(statearr_17948_17965[(5)] = ex__8966__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17920);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17947;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17966 = state_17920;
state_17920 = G__17966;
continue;
}
} else
{return ret_value__8964__auto__;
}
break;
}
});
state_machine__8963__auto__ = function(state_17920){
switch(arguments.length){
case 0:
return state_machine__8963__auto____0.call(this);
case 1:
return state_machine__8963__auto____1.call(this,state_17920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__8963__auto____0;
state_machine__8963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__8963__auto____1;
return state_machine__8963__auto__;
})()
;})(switch__8962__auto__,c__8977__auto___17950,out))
})();var state__8979__auto__ = (function (){var statearr_17949 = f__8978__auto__.call(null);(statearr_17949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8977__auto___17950);
return statearr_17949;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8979__auto__);
});})(c__8977__auto___17950,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map