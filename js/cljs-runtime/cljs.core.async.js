goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33450 = arguments.length;
switch (G__33450) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33451 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33451 = (function (f,blockable,meta33452){
this.f = f;
this.blockable = blockable;
this.meta33452 = meta33452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33453,meta33452__$1){
var self__ = this;
var _33453__$1 = this;
return (new cljs.core.async.t_cljs$core$async33451(self__.f,self__.blockable,meta33452__$1));
});

cljs.core.async.t_cljs$core$async33451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33453){
var self__ = this;
var _33453__$1 = this;
return self__.meta33452;
});

cljs.core.async.t_cljs$core$async33451.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33451.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33451.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33451.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33452","meta33452",1994136447,null)], null);
});

cljs.core.async.t_cljs$core$async33451.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33451.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33451";

cljs.core.async.t_cljs$core$async33451.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33451");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33451.
 */
cljs.core.async.__GT_t_cljs$core$async33451 = (function cljs$core$async$__GT_t_cljs$core$async33451(f__$1,blockable__$1,meta33452){
return (new cljs.core.async.t_cljs$core$async33451(f__$1,blockable__$1,meta33452));
});

}

return (new cljs.core.async.t_cljs$core$async33451(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33456 = arguments.length;
switch (G__33456) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33458 = arguments.length;
switch (G__33458) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33460 = arguments.length;
switch (G__33460) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34900 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34900) : fn1.call(null,val_34900));
} else {
cljs.core.async.impl.dispatch.run(((function (val_34900,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34900) : fn1.call(null,val_34900));
});})(val_34900,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33462 = arguments.length;
switch (G__33462) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___34907 = n;
var x_34908 = (0);
while(true){
if((x_34908 < n__4607__auto___34907)){
(a[x_34908] = x_34908);

var G__34910 = (x_34908 + (1));
x_34908 = G__34910;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33463 = (function (flag,meta33464){
this.flag = flag;
this.meta33464 = meta33464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33465,meta33464__$1){
var self__ = this;
var _33465__$1 = this;
return (new cljs.core.async.t_cljs$core$async33463(self__.flag,meta33464__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33465){
var self__ = this;
var _33465__$1 = this;
return self__.meta33464;
});})(flag))
;

cljs.core.async.t_cljs$core$async33463.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33463.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33463.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33463.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33463.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33464","meta33464",215826190,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33463";

cljs.core.async.t_cljs$core$async33463.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33463");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33463.
 */
cljs.core.async.__GT_t_cljs$core$async33463 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33463(flag__$1,meta33464){
return (new cljs.core.async.t_cljs$core$async33463(flag__$1,meta33464));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33463(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33466 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33466 = (function (flag,cb,meta33467){
this.flag = flag;
this.cb = cb;
this.meta33467 = meta33467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33468,meta33467__$1){
var self__ = this;
var _33468__$1 = this;
return (new cljs.core.async.t_cljs$core$async33466(self__.flag,self__.cb,meta33467__$1));
});

cljs.core.async.t_cljs$core$async33466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33468){
var self__ = this;
var _33468__$1 = this;
return self__.meta33467;
});

cljs.core.async.t_cljs$core$async33466.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33466.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async33466.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33466.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33467","meta33467",2139457490,null)], null);
});

cljs.core.async.t_cljs$core$async33466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33466";

cljs.core.async.t_cljs$core$async33466.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33466");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33466.
 */
cljs.core.async.__GT_t_cljs$core$async33466 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33466(flag__$1,cb__$1,meta33467){
return (new cljs.core.async.t_cljs$core$async33466(flag__$1,cb__$1,meta33467));
});

}

return (new cljs.core.async.t_cljs$core$async33466(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33469_SHARP_){
var G__33471 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33469_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33471) : fret.call(null,G__33471));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33470_SHARP_){
var G__33472 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33470_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33472) : fret.call(null,G__33472));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34912 = (i + (1));
i = G__34912;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34915 = arguments.length;
var i__4731__auto___34916 = (0);
while(true){
if((i__4731__auto___34916 < len__4730__auto___34915)){
args__4736__auto__.push((arguments[i__4731__auto___34916]));

var G__34917 = (i__4731__auto___34916 + (1));
i__4731__auto___34916 = G__34917;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33475){
var map__33476 = p__33475;
var map__33476__$1 = (((((!((map__33476 == null))))?(((((map__33476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33476):map__33476);
var opts = map__33476__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33473){
var G__33474 = cljs.core.first(seq33473);
var seq33473__$1 = cljs.core.next(seq33473);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33474,seq33473__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33479 = arguments.length;
switch (G__33479) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33377__auto___34919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33377__auto___34919){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (c__33377__auto___34919){
return (function (state_33503){
var state_val_33504 = (state_33503[(1)]);
if((state_val_33504 === (7))){
var inst_33499 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
var statearr_33505_34921 = state_33503__$1;
(statearr_33505_34921[(2)] = inst_33499);

(statearr_33505_34921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (1))){
var state_33503__$1 = state_33503;
var statearr_33506_34923 = state_33503__$1;
(statearr_33506_34923[(2)] = null);

(statearr_33506_34923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (4))){
var inst_33482 = (state_33503[(7)]);
var inst_33482__$1 = (state_33503[(2)]);
var inst_33483 = (inst_33482__$1 == null);
var state_33503__$1 = (function (){var statearr_33507 = state_33503;
(statearr_33507[(7)] = inst_33482__$1);

return statearr_33507;
})();
if(cljs.core.truth_(inst_33483)){
var statearr_33508_34926 = state_33503__$1;
(statearr_33508_34926[(1)] = (5));

} else {
var statearr_33509_34927 = state_33503__$1;
(statearr_33509_34927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (13))){
var state_33503__$1 = state_33503;
var statearr_33510_34929 = state_33503__$1;
(statearr_33510_34929[(2)] = null);

(statearr_33510_34929[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (6))){
var inst_33482 = (state_33503[(7)]);
var state_33503__$1 = state_33503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33503__$1,(11),to,inst_33482);
} else {
if((state_val_33504 === (3))){
var inst_33501 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33503__$1,inst_33501);
} else {
if((state_val_33504 === (12))){
var state_33503__$1 = state_33503;
var statearr_33511_34931 = state_33503__$1;
(statearr_33511_34931[(2)] = null);

(statearr_33511_34931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (2))){
var state_33503__$1 = state_33503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33503__$1,(4),from);
} else {
if((state_val_33504 === (11))){
var inst_33492 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
if(cljs.core.truth_(inst_33492)){
var statearr_33512_34932 = state_33503__$1;
(statearr_33512_34932[(1)] = (12));

} else {
var statearr_33513_34933 = state_33503__$1;
(statearr_33513_34933[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (9))){
var state_33503__$1 = state_33503;
var statearr_33514_34934 = state_33503__$1;
(statearr_33514_34934[(2)] = null);

(statearr_33514_34934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (5))){
var state_33503__$1 = state_33503;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33515_34936 = state_33503__$1;
(statearr_33515_34936[(1)] = (8));

} else {
var statearr_33516_34937 = state_33503__$1;
(statearr_33516_34937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (14))){
var inst_33497 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
var statearr_33517_34939 = state_33503__$1;
(statearr_33517_34939[(2)] = inst_33497);

(statearr_33517_34939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (10))){
var inst_33489 = (state_33503[(2)]);
var state_33503__$1 = state_33503;
var statearr_33518_34940 = state_33503__$1;
(statearr_33518_34940[(2)] = inst_33489);

(statearr_33518_34940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33504 === (8))){
var inst_33486 = cljs.core.async.close_BANG_(to);
var state_33503__$1 = state_33503;
var statearr_33519_34941 = state_33503__$1;
(statearr_33519_34941[(2)] = inst_33486);

(statearr_33519_34941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__33377__auto___34919))
;
return ((function (switch__33289__auto__,c__33377__auto___34919){
return (function() {
var cljs$core$async$state_machine__33290__auto__ = null;
var cljs$core$async$state_machine__33290__auto____0 = (function (){
var statearr_33520 = [null,null,null,null,null,null,null,null];
(statearr_33520[(0)] = cljs$core$async$state_machine__33290__auto__);

(statearr_33520[(1)] = (1));

return statearr_33520;
});
var cljs$core$async$state_machine__33290__auto____1 = (function (state_33503){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_33503);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e33521){if((e33521 instanceof Object)){
var ex__33293__auto__ = e33521;
var statearr_33522_34943 = state_33503;
(statearr_33522_34943[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33521;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34944 = state_33503;
state_33503 = G__34944;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
cljs$core$async$state_machine__33290__auto__ = function(state_33503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33290__auto____1.call(this,state_33503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33290__auto____0;
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33290__auto____1;
return cljs$core$async$state_machine__33290__auto__;
})()
;})(switch__33289__auto__,c__33377__auto___34919))
})();
var state__33379__auto__ = (function (){var statearr_33523 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_33523[(6)] = c__33377__auto___34919);

return statearr_33523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(c__33377__auto___34919))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__33524){
var vec__33525 = p__33524;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33525,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33525,(1),null);
var job = vec__33525;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33377__auto___34946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33377__auto___34946,res,vec__33525,v,p,job,jobs,results){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (c__33377__auto___34946,res,vec__33525,v,p,job,jobs,results){
return (function (state_33532){
var state_val_33533 = (state_33532[(1)]);
if((state_val_33533 === (1))){
var state_33532__$1 = state_33532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33532__$1,(2),res,v);
} else {
if((state_val_33533 === (2))){
var inst_33529 = (state_33532[(2)]);
var inst_33530 = cljs.core.async.close_BANG_(res);
var state_33532__$1 = (function (){var statearr_33534 = state_33532;
(statearr_33534[(7)] = inst_33529);

return statearr_33534;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33532__$1,inst_33530);
} else {
return null;
}
}
});})(c__33377__auto___34946,res,vec__33525,v,p,job,jobs,results))
;
return ((function (switch__33289__auto__,c__33377__auto___34946,res,vec__33525,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____0 = (function (){
var statearr_33535 = [null,null,null,null,null,null,null,null];
(statearr_33535[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__);

(statearr_33535[(1)] = (1));

return statearr_33535;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____1 = (function (state_33532){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_33532);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e33536){if((e33536 instanceof Object)){
var ex__33293__auto__ = e33536;
var statearr_33537_34960 = state_33532;
(statearr_33537_34960[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33536;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34961 = state_33532;
state_33532 = G__34961;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__ = function(state_33532){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____1.call(this,state_33532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__;
})()
;})(switch__33289__auto__,c__33377__auto___34946,res,vec__33525,v,p,job,jobs,results))
})();
var state__33379__auto__ = (function (){var statearr_33538 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_33538[(6)] = c__33377__auto___34946);

return statearr_33538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(c__33377__auto___34946,res,vec__33525,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33539){
var vec__33540 = p__33539;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33540,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33540,(1),null);
var job = vec__33540;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___34962 = n;
var __34963 = (0);
while(true){
if((__34963 < n__4607__auto___34962)){
var G__33543_34964 = type;
var G__33543_34965__$1 = (((G__33543_34964 instanceof cljs.core.Keyword))?G__33543_34964.fqn:null);
switch (G__33543_34965__$1) {
case "compute":
var c__33377__auto___34967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34963,c__33377__auto___34967,G__33543_34964,G__33543_34965__$1,n__4607__auto___34962,jobs,results,process,async){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (__34963,c__33377__auto___34967,G__33543_34964,G__33543_34965__$1,n__4607__auto___34962,jobs,results,process,async){
return (function (state_33556){
var state_val_33557 = (state_33556[(1)]);
if((state_val_33557 === (1))){
var state_33556__$1 = state_33556;
var statearr_33558_34968 = state_33556__$1;
(statearr_33558_34968[(2)] = null);

(statearr_33558_34968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (2))){
var state_33556__$1 = state_33556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33556__$1,(4),jobs);
} else {
if((state_val_33557 === (3))){
var inst_33554 = (state_33556[(2)]);
var state_33556__$1 = state_33556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33556__$1,inst_33554);
} else {
if((state_val_33557 === (4))){
var inst_33546 = (state_33556[(2)]);
var inst_33547 = process(inst_33546);
var state_33556__$1 = state_33556;
if(cljs.core.truth_(inst_33547)){
var statearr_33559_34972 = state_33556__$1;
(statearr_33559_34972[(1)] = (5));

} else {
var statearr_33560_34973 = state_33556__$1;
(statearr_33560_34973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (5))){
var state_33556__$1 = state_33556;
var statearr_33561_34974 = state_33556__$1;
(statearr_33561_34974[(2)] = null);

(statearr_33561_34974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (6))){
var state_33556__$1 = state_33556;
var statearr_33562_34975 = state_33556__$1;
(statearr_33562_34975[(2)] = null);

(statearr_33562_34975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (7))){
var inst_33552 = (state_33556[(2)]);
var state_33556__$1 = state_33556;
var statearr_33563_34977 = state_33556__$1;
(statearr_33563_34977[(2)] = inst_33552);

(statearr_33563_34977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34963,c__33377__auto___34967,G__33543_34964,G__33543_34965__$1,n__4607__auto___34962,jobs,results,process,async))
;
return ((function (__34963,switch__33289__auto__,c__33377__auto___34967,G__33543_34964,G__33543_34965__$1,n__4607__auto___34962,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____0 = (function (){
var statearr_33564 = [null,null,null,null,null,null,null];
(statearr_33564[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__);

(statearr_33564[(1)] = (1));

return statearr_33564;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____1 = (function (state_33556){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_33556);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e33565){if((e33565 instanceof Object)){
var ex__33293__auto__ = e33565;
var statearr_33566_34979 = state_33556;
(statearr_33566_34979[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33565;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34980 = state_33556;
state_33556 = G__34980;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__ = function(state_33556){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____1.call(this,state_33556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__;
})()
;})(__34963,switch__33289__auto__,c__33377__auto___34967,G__33543_34964,G__33543_34965__$1,n__4607__auto___34962,jobs,results,process,async))
})();
var state__33379__auto__ = (function (){var statearr_33567 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_33567[(6)] = c__33377__auto___34967);

return statearr_33567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(__34963,c__33377__auto___34967,G__33543_34964,G__33543_34965__$1,n__4607__auto___34962,jobs,results,process,async))
);


break;
case "async":
var c__33377__auto___34985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34963,c__33377__auto___34985,G__33543_34964,G__33543_34965__$1,n__4607__auto___34962,jobs,results,process,async){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (__34963,c__33377__auto___34985,G__33543_34964,G__33543_34965__$1,n__4607__auto___34962,jobs,results,process,async){
return (function (state_33580){
var state_val_33581 = (state_33580[(1)]);
if((state_val_33581 === (1))){
var state_33580__$1 = state_33580;
var statearr_33582_34987 = state_33580__$1;
(statearr_33582_34987[(2)] = null);

(statearr_33582_34987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33581 === (2))){
var state_33580__$1 = state_33580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33580__$1,(4),jobs);
} else {
if((state_val_33581 === (3))){
var inst_33578 = (state_33580[(2)]);
var state_33580__$1 = state_33580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33580__$1,inst_33578);
} else {
if((state_val_33581 === (4))){
var inst_33570 = (state_33580[(2)]);
var inst_33571 = async(inst_33570);
var state_33580__$1 = state_33580;
if(cljs.core.truth_(inst_33571)){
var statearr_33583_34988 = state_33580__$1;
(statearr_33583_34988[(1)] = (5));

} else {
var statearr_33584_34989 = state_33580__$1;
(statearr_33584_34989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33581 === (5))){
var state_33580__$1 = state_33580;
var statearr_33585_34990 = state_33580__$1;
(statearr_33585_34990[(2)] = null);

(statearr_33585_34990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33581 === (6))){
var state_33580__$1 = state_33580;
var statearr_33586_34991 = state_33580__$1;
(statearr_33586_34991[(2)] = null);

(statearr_33586_34991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33581 === (7))){
var inst_33576 = (state_33580[(2)]);
var state_33580__$1 = state_33580;
var statearr_33587_34992 = state_33580__$1;
(statearr_33587_34992[(2)] = inst_33576);

(statearr_33587_34992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34963,c__33377__auto___34985,G__33543_34964,G__33543_34965__$1,n__4607__auto___34962,jobs,results,process,async))
;
return ((function (__34963,switch__33289__auto__,c__33377__auto___34985,G__33543_34964,G__33543_34965__$1,n__4607__auto___34962,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____0 = (function (){
var statearr_33588 = [null,null,null,null,null,null,null];
(statearr_33588[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__);

(statearr_33588[(1)] = (1));

return statearr_33588;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____1 = (function (state_33580){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_33580);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e33589){if((e33589 instanceof Object)){
var ex__33293__auto__ = e33589;
var statearr_33590_34993 = state_33580;
(statearr_33590_34993[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34994 = state_33580;
state_33580 = G__34994;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__ = function(state_33580){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____1.call(this,state_33580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__;
})()
;})(__34963,switch__33289__auto__,c__33377__auto___34985,G__33543_34964,G__33543_34965__$1,n__4607__auto___34962,jobs,results,process,async))
})();
var state__33379__auto__ = (function (){var statearr_33591 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_33591[(6)] = c__33377__auto___34985);

return statearr_33591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(__34963,c__33377__auto___34985,G__33543_34964,G__33543_34965__$1,n__4607__auto___34962,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33543_34965__$1)].join('')));

}

var G__34995 = (__34963 + (1));
__34963 = G__34995;
continue;
} else {
}
break;
}

var c__33377__auto___34996 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33377__auto___34996,jobs,results,process,async){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (c__33377__auto___34996,jobs,results,process,async){
return (function (state_33613){
var state_val_33614 = (state_33613[(1)]);
if((state_val_33614 === (7))){
var inst_33609 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33615_34997 = state_33613__$1;
(statearr_33615_34997[(2)] = inst_33609);

(statearr_33615_34997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (1))){
var state_33613__$1 = state_33613;
var statearr_33616_34998 = state_33613__$1;
(statearr_33616_34998[(2)] = null);

(statearr_33616_34998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (4))){
var inst_33594 = (state_33613[(7)]);
var inst_33594__$1 = (state_33613[(2)]);
var inst_33595 = (inst_33594__$1 == null);
var state_33613__$1 = (function (){var statearr_33617 = state_33613;
(statearr_33617[(7)] = inst_33594__$1);

return statearr_33617;
})();
if(cljs.core.truth_(inst_33595)){
var statearr_33618_34999 = state_33613__$1;
(statearr_33618_34999[(1)] = (5));

} else {
var statearr_33619_35000 = state_33613__$1;
(statearr_33619_35000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (6))){
var inst_33594 = (state_33613[(7)]);
var inst_33599 = (state_33613[(8)]);
var inst_33599__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33600 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33601 = [inst_33594,inst_33599__$1];
var inst_33602 = (new cljs.core.PersistentVector(null,2,(5),inst_33600,inst_33601,null));
var state_33613__$1 = (function (){var statearr_33620 = state_33613;
(statearr_33620[(8)] = inst_33599__$1);

return statearr_33620;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33613__$1,(8),jobs,inst_33602);
} else {
if((state_val_33614 === (3))){
var inst_33611 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33613__$1,inst_33611);
} else {
if((state_val_33614 === (2))){
var state_33613__$1 = state_33613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33613__$1,(4),from);
} else {
if((state_val_33614 === (9))){
var inst_33606 = (state_33613[(2)]);
var state_33613__$1 = (function (){var statearr_33621 = state_33613;
(statearr_33621[(9)] = inst_33606);

return statearr_33621;
})();
var statearr_33622_35003 = state_33613__$1;
(statearr_33622_35003[(2)] = null);

(statearr_33622_35003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (5))){
var inst_33597 = cljs.core.async.close_BANG_(jobs);
var state_33613__$1 = state_33613;
var statearr_33623_35004 = state_33613__$1;
(statearr_33623_35004[(2)] = inst_33597);

(statearr_33623_35004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (8))){
var inst_33599 = (state_33613[(8)]);
var inst_33604 = (state_33613[(2)]);
var state_33613__$1 = (function (){var statearr_33624 = state_33613;
(statearr_33624[(10)] = inst_33604);

return statearr_33624;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33613__$1,(9),results,inst_33599);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__33377__auto___34996,jobs,results,process,async))
;
return ((function (switch__33289__auto__,c__33377__auto___34996,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____0 = (function (){
var statearr_33625 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33625[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__);

(statearr_33625[(1)] = (1));

return statearr_33625;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____1 = (function (state_33613){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_33613);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e33626){if((e33626 instanceof Object)){
var ex__33293__auto__ = e33626;
var statearr_33627_35008 = state_33613;
(statearr_33627_35008[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33626;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35009 = state_33613;
state_33613 = G__35009;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__ = function(state_33613){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____1.call(this,state_33613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__;
})()
;})(switch__33289__auto__,c__33377__auto___34996,jobs,results,process,async))
})();
var state__33379__auto__ = (function (){var statearr_33628 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_33628[(6)] = c__33377__auto___34996);

return statearr_33628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(c__33377__auto___34996,jobs,results,process,async))
);


var c__33377__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33377__auto__,jobs,results,process,async){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (c__33377__auto__,jobs,results,process,async){
return (function (state_33666){
var state_val_33667 = (state_33666[(1)]);
if((state_val_33667 === (7))){
var inst_33662 = (state_33666[(2)]);
var state_33666__$1 = state_33666;
var statearr_33668_35012 = state_33666__$1;
(statearr_33668_35012[(2)] = inst_33662);

(statearr_33668_35012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33667 === (20))){
var state_33666__$1 = state_33666;
var statearr_33669_35013 = state_33666__$1;
(statearr_33669_35013[(2)] = null);

(statearr_33669_35013[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33667 === (1))){
var state_33666__$1 = state_33666;
var statearr_33670_35014 = state_33666__$1;
(statearr_33670_35014[(2)] = null);

(statearr_33670_35014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33667 === (4))){
var inst_33631 = (state_33666[(7)]);
var inst_33631__$1 = (state_33666[(2)]);
var inst_33632 = (inst_33631__$1 == null);
var state_33666__$1 = (function (){var statearr_33671 = state_33666;
(statearr_33671[(7)] = inst_33631__$1);

return statearr_33671;
})();
if(cljs.core.truth_(inst_33632)){
var statearr_33672_35015 = state_33666__$1;
(statearr_33672_35015[(1)] = (5));

} else {
var statearr_33673_35016 = state_33666__$1;
(statearr_33673_35016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33667 === (15))){
var inst_33644 = (state_33666[(8)]);
var state_33666__$1 = state_33666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33666__$1,(18),to,inst_33644);
} else {
if((state_val_33667 === (21))){
var inst_33657 = (state_33666[(2)]);
var state_33666__$1 = state_33666;
var statearr_33674_35017 = state_33666__$1;
(statearr_33674_35017[(2)] = inst_33657);

(statearr_33674_35017[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33667 === (13))){
var inst_33659 = (state_33666[(2)]);
var state_33666__$1 = (function (){var statearr_33675 = state_33666;
(statearr_33675[(9)] = inst_33659);

return statearr_33675;
})();
var statearr_33676_35018 = state_33666__$1;
(statearr_33676_35018[(2)] = null);

(statearr_33676_35018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33667 === (6))){
var inst_33631 = (state_33666[(7)]);
var state_33666__$1 = state_33666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33666__$1,(11),inst_33631);
} else {
if((state_val_33667 === (17))){
var inst_33652 = (state_33666[(2)]);
var state_33666__$1 = state_33666;
if(cljs.core.truth_(inst_33652)){
var statearr_33677_35023 = state_33666__$1;
(statearr_33677_35023[(1)] = (19));

} else {
var statearr_33678_35025 = state_33666__$1;
(statearr_33678_35025[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33667 === (3))){
var inst_33664 = (state_33666[(2)]);
var state_33666__$1 = state_33666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33666__$1,inst_33664);
} else {
if((state_val_33667 === (12))){
var inst_33641 = (state_33666[(10)]);
var state_33666__$1 = state_33666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33666__$1,(14),inst_33641);
} else {
if((state_val_33667 === (2))){
var state_33666__$1 = state_33666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33666__$1,(4),results);
} else {
if((state_val_33667 === (19))){
var state_33666__$1 = state_33666;
var statearr_33679_35028 = state_33666__$1;
(statearr_33679_35028[(2)] = null);

(statearr_33679_35028[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33667 === (11))){
var inst_33641 = (state_33666[(2)]);
var state_33666__$1 = (function (){var statearr_33680 = state_33666;
(statearr_33680[(10)] = inst_33641);

return statearr_33680;
})();
var statearr_33681_35031 = state_33666__$1;
(statearr_33681_35031[(2)] = null);

(statearr_33681_35031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33667 === (9))){
var state_33666__$1 = state_33666;
var statearr_33682_35032 = state_33666__$1;
(statearr_33682_35032[(2)] = null);

(statearr_33682_35032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33667 === (5))){
var state_33666__$1 = state_33666;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33683_35033 = state_33666__$1;
(statearr_33683_35033[(1)] = (8));

} else {
var statearr_33684_35034 = state_33666__$1;
(statearr_33684_35034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33667 === (14))){
var inst_33646 = (state_33666[(11)]);
var inst_33644 = (state_33666[(8)]);
var inst_33644__$1 = (state_33666[(2)]);
var inst_33645 = (inst_33644__$1 == null);
var inst_33646__$1 = cljs.core.not(inst_33645);
var state_33666__$1 = (function (){var statearr_33685 = state_33666;
(statearr_33685[(11)] = inst_33646__$1);

(statearr_33685[(8)] = inst_33644__$1);

return statearr_33685;
})();
if(inst_33646__$1){
var statearr_33686_35035 = state_33666__$1;
(statearr_33686_35035[(1)] = (15));

} else {
var statearr_33687_35036 = state_33666__$1;
(statearr_33687_35036[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33667 === (16))){
var inst_33646 = (state_33666[(11)]);
var state_33666__$1 = state_33666;
var statearr_33688_35037 = state_33666__$1;
(statearr_33688_35037[(2)] = inst_33646);

(statearr_33688_35037[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33667 === (10))){
var inst_33638 = (state_33666[(2)]);
var state_33666__$1 = state_33666;
var statearr_33689_35038 = state_33666__$1;
(statearr_33689_35038[(2)] = inst_33638);

(statearr_33689_35038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33667 === (18))){
var inst_33649 = (state_33666[(2)]);
var state_33666__$1 = state_33666;
var statearr_33690_35039 = state_33666__$1;
(statearr_33690_35039[(2)] = inst_33649);

(statearr_33690_35039[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33667 === (8))){
var inst_33635 = cljs.core.async.close_BANG_(to);
var state_33666__$1 = state_33666;
var statearr_33691_35040 = state_33666__$1;
(statearr_33691_35040[(2)] = inst_33635);

(statearr_33691_35040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__33377__auto__,jobs,results,process,async))
;
return ((function (switch__33289__auto__,c__33377__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____0 = (function (){
var statearr_33692 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33692[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__);

(statearr_33692[(1)] = (1));

return statearr_33692;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____1 = (function (state_33666){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_33666);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e33693){if((e33693 instanceof Object)){
var ex__33293__auto__ = e33693;
var statearr_33694_35044 = state_33666;
(statearr_33694_35044[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33693;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35045 = state_33666;
state_33666 = G__35045;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__ = function(state_33666){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____1.call(this,state_33666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33290__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33290__auto__;
})()
;})(switch__33289__auto__,c__33377__auto__,jobs,results,process,async))
})();
var state__33379__auto__ = (function (){var statearr_33695 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_33695[(6)] = c__33377__auto__);

return statearr_33695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(c__33377__auto__,jobs,results,process,async))
);

return c__33377__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33697 = arguments.length;
switch (G__33697) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33699 = arguments.length;
switch (G__33699) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33701 = arguments.length;
switch (G__33701) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33377__auto___35054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33377__auto___35054,tc,fc){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (c__33377__auto___35054,tc,fc){
return (function (state_33727){
var state_val_33728 = (state_33727[(1)]);
if((state_val_33728 === (7))){
var inst_33723 = (state_33727[(2)]);
var state_33727__$1 = state_33727;
var statearr_33729_35055 = state_33727__$1;
(statearr_33729_35055[(2)] = inst_33723);

(statearr_33729_35055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (1))){
var state_33727__$1 = state_33727;
var statearr_33730_35056 = state_33727__$1;
(statearr_33730_35056[(2)] = null);

(statearr_33730_35056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (4))){
var inst_33704 = (state_33727[(7)]);
var inst_33704__$1 = (state_33727[(2)]);
var inst_33705 = (inst_33704__$1 == null);
var state_33727__$1 = (function (){var statearr_33731 = state_33727;
(statearr_33731[(7)] = inst_33704__$1);

return statearr_33731;
})();
if(cljs.core.truth_(inst_33705)){
var statearr_33732_35057 = state_33727__$1;
(statearr_33732_35057[(1)] = (5));

} else {
var statearr_33733_35058 = state_33727__$1;
(statearr_33733_35058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (13))){
var state_33727__$1 = state_33727;
var statearr_33734_35059 = state_33727__$1;
(statearr_33734_35059[(2)] = null);

(statearr_33734_35059[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (6))){
var inst_33704 = (state_33727[(7)]);
var inst_33710 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33704) : p.call(null,inst_33704));
var state_33727__$1 = state_33727;
if(cljs.core.truth_(inst_33710)){
var statearr_33735_35060 = state_33727__$1;
(statearr_33735_35060[(1)] = (9));

} else {
var statearr_33736_35062 = state_33727__$1;
(statearr_33736_35062[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (3))){
var inst_33725 = (state_33727[(2)]);
var state_33727__$1 = state_33727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33727__$1,inst_33725);
} else {
if((state_val_33728 === (12))){
var state_33727__$1 = state_33727;
var statearr_33737_35063 = state_33727__$1;
(statearr_33737_35063[(2)] = null);

(statearr_33737_35063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (2))){
var state_33727__$1 = state_33727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33727__$1,(4),ch);
} else {
if((state_val_33728 === (11))){
var inst_33704 = (state_33727[(7)]);
var inst_33714 = (state_33727[(2)]);
var state_33727__$1 = state_33727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33727__$1,(8),inst_33714,inst_33704);
} else {
if((state_val_33728 === (9))){
var state_33727__$1 = state_33727;
var statearr_33738_35064 = state_33727__$1;
(statearr_33738_35064[(2)] = tc);

(statearr_33738_35064[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (5))){
var inst_33707 = cljs.core.async.close_BANG_(tc);
var inst_33708 = cljs.core.async.close_BANG_(fc);
var state_33727__$1 = (function (){var statearr_33739 = state_33727;
(statearr_33739[(8)] = inst_33707);

return statearr_33739;
})();
var statearr_33740_35065 = state_33727__$1;
(statearr_33740_35065[(2)] = inst_33708);

(statearr_33740_35065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (14))){
var inst_33721 = (state_33727[(2)]);
var state_33727__$1 = state_33727;
var statearr_33741_35066 = state_33727__$1;
(statearr_33741_35066[(2)] = inst_33721);

(statearr_33741_35066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (10))){
var state_33727__$1 = state_33727;
var statearr_33742_35067 = state_33727__$1;
(statearr_33742_35067[(2)] = fc);

(statearr_33742_35067[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33728 === (8))){
var inst_33716 = (state_33727[(2)]);
var state_33727__$1 = state_33727;
if(cljs.core.truth_(inst_33716)){
var statearr_33743_35068 = state_33727__$1;
(statearr_33743_35068[(1)] = (12));

} else {
var statearr_33744_35069 = state_33727__$1;
(statearr_33744_35069[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__33377__auto___35054,tc,fc))
;
return ((function (switch__33289__auto__,c__33377__auto___35054,tc,fc){
return (function() {
var cljs$core$async$state_machine__33290__auto__ = null;
var cljs$core$async$state_machine__33290__auto____0 = (function (){
var statearr_33745 = [null,null,null,null,null,null,null,null,null];
(statearr_33745[(0)] = cljs$core$async$state_machine__33290__auto__);

(statearr_33745[(1)] = (1));

return statearr_33745;
});
var cljs$core$async$state_machine__33290__auto____1 = (function (state_33727){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_33727);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e33746){if((e33746 instanceof Object)){
var ex__33293__auto__ = e33746;
var statearr_33747_35072 = state_33727;
(statearr_33747_35072[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33746;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35073 = state_33727;
state_33727 = G__35073;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
cljs$core$async$state_machine__33290__auto__ = function(state_33727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33290__auto____1.call(this,state_33727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33290__auto____0;
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33290__auto____1;
return cljs$core$async$state_machine__33290__auto__;
})()
;})(switch__33289__auto__,c__33377__auto___35054,tc,fc))
})();
var state__33379__auto__ = (function (){var statearr_33748 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_33748[(6)] = c__33377__auto___35054);

return statearr_33748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(c__33377__auto___35054,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33377__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33377__auto__){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (c__33377__auto__){
return (function (state_33769){
var state_val_33770 = (state_33769[(1)]);
if((state_val_33770 === (7))){
var inst_33765 = (state_33769[(2)]);
var state_33769__$1 = state_33769;
var statearr_33771_35074 = state_33769__$1;
(statearr_33771_35074[(2)] = inst_33765);

(statearr_33771_35074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (1))){
var inst_33749 = init;
var state_33769__$1 = (function (){var statearr_33772 = state_33769;
(statearr_33772[(7)] = inst_33749);

return statearr_33772;
})();
var statearr_33773_35075 = state_33769__$1;
(statearr_33773_35075[(2)] = null);

(statearr_33773_35075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (4))){
var inst_33752 = (state_33769[(8)]);
var inst_33752__$1 = (state_33769[(2)]);
var inst_33753 = (inst_33752__$1 == null);
var state_33769__$1 = (function (){var statearr_33774 = state_33769;
(statearr_33774[(8)] = inst_33752__$1);

return statearr_33774;
})();
if(cljs.core.truth_(inst_33753)){
var statearr_33775_35076 = state_33769__$1;
(statearr_33775_35076[(1)] = (5));

} else {
var statearr_33776_35077 = state_33769__$1;
(statearr_33776_35077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (6))){
var inst_33756 = (state_33769[(9)]);
var inst_33749 = (state_33769[(7)]);
var inst_33752 = (state_33769[(8)]);
var inst_33756__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33749,inst_33752) : f.call(null,inst_33749,inst_33752));
var inst_33757 = cljs.core.reduced_QMARK_(inst_33756__$1);
var state_33769__$1 = (function (){var statearr_33777 = state_33769;
(statearr_33777[(9)] = inst_33756__$1);

return statearr_33777;
})();
if(inst_33757){
var statearr_33778_35079 = state_33769__$1;
(statearr_33778_35079[(1)] = (8));

} else {
var statearr_33779_35081 = state_33769__$1;
(statearr_33779_35081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (3))){
var inst_33767 = (state_33769[(2)]);
var state_33769__$1 = state_33769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33769__$1,inst_33767);
} else {
if((state_val_33770 === (2))){
var state_33769__$1 = state_33769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33769__$1,(4),ch);
} else {
if((state_val_33770 === (9))){
var inst_33756 = (state_33769[(9)]);
var inst_33749 = inst_33756;
var state_33769__$1 = (function (){var statearr_33780 = state_33769;
(statearr_33780[(7)] = inst_33749);

return statearr_33780;
})();
var statearr_33781_35082 = state_33769__$1;
(statearr_33781_35082[(2)] = null);

(statearr_33781_35082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (5))){
var inst_33749 = (state_33769[(7)]);
var state_33769__$1 = state_33769;
var statearr_33782_35083 = state_33769__$1;
(statearr_33782_35083[(2)] = inst_33749);

(statearr_33782_35083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (10))){
var inst_33763 = (state_33769[(2)]);
var state_33769__$1 = state_33769;
var statearr_33783_35084 = state_33769__$1;
(statearr_33783_35084[(2)] = inst_33763);

(statearr_33783_35084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (8))){
var inst_33756 = (state_33769[(9)]);
var inst_33759 = cljs.core.deref(inst_33756);
var state_33769__$1 = state_33769;
var statearr_33784_35085 = state_33769__$1;
(statearr_33784_35085[(2)] = inst_33759);

(statearr_33784_35085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__33377__auto__))
;
return ((function (switch__33289__auto__,c__33377__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33290__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33290__auto____0 = (function (){
var statearr_33785 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33785[(0)] = cljs$core$async$reduce_$_state_machine__33290__auto__);

(statearr_33785[(1)] = (1));

return statearr_33785;
});
var cljs$core$async$reduce_$_state_machine__33290__auto____1 = (function (state_33769){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_33769);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e33786){if((e33786 instanceof Object)){
var ex__33293__auto__ = e33786;
var statearr_33787_35095 = state_33769;
(statearr_33787_35095[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33786;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35096 = state_33769;
state_33769 = G__35096;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33290__auto__ = function(state_33769){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33290__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33290__auto____1.call(this,state_33769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33290__auto____0;
cljs$core$async$reduce_$_state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33290__auto____1;
return cljs$core$async$reduce_$_state_machine__33290__auto__;
})()
;})(switch__33289__auto__,c__33377__auto__))
})();
var state__33379__auto__ = (function (){var statearr_33788 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_33788[(6)] = c__33377__auto__);

return statearr_33788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(c__33377__auto__))
);

return c__33377__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33377__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33377__auto__,f__$1){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (c__33377__auto__,f__$1){
return (function (state_33794){
var state_val_33795 = (state_33794[(1)]);
if((state_val_33795 === (1))){
var inst_33789 = cljs.core.async.reduce(f__$1,init,ch);
var state_33794__$1 = state_33794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33794__$1,(2),inst_33789);
} else {
if((state_val_33795 === (2))){
var inst_33791 = (state_33794[(2)]);
var inst_33792 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33791) : f__$1.call(null,inst_33791));
var state_33794__$1 = state_33794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33794__$1,inst_33792);
} else {
return null;
}
}
});})(c__33377__auto__,f__$1))
;
return ((function (switch__33289__auto__,c__33377__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33290__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33290__auto____0 = (function (){
var statearr_33796 = [null,null,null,null,null,null,null];
(statearr_33796[(0)] = cljs$core$async$transduce_$_state_machine__33290__auto__);

(statearr_33796[(1)] = (1));

return statearr_33796;
});
var cljs$core$async$transduce_$_state_machine__33290__auto____1 = (function (state_33794){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_33794);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e33797){if((e33797 instanceof Object)){
var ex__33293__auto__ = e33797;
var statearr_33798_35101 = state_33794;
(statearr_33798_35101[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33797;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35102 = state_33794;
state_33794 = G__35102;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33290__auto__ = function(state_33794){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33290__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33290__auto____1.call(this,state_33794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33290__auto____0;
cljs$core$async$transduce_$_state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33290__auto____1;
return cljs$core$async$transduce_$_state_machine__33290__auto__;
})()
;})(switch__33289__auto__,c__33377__auto__,f__$1))
})();
var state__33379__auto__ = (function (){var statearr_33799 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_33799[(6)] = c__33377__auto__);

return statearr_33799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(c__33377__auto__,f__$1))
);

return c__33377__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33801 = arguments.length;
switch (G__33801) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33377__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33377__auto__){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (c__33377__auto__){
return (function (state_33826){
var state_val_33827 = (state_33826[(1)]);
if((state_val_33827 === (7))){
var inst_33808 = (state_33826[(2)]);
var state_33826__$1 = state_33826;
var statearr_33828_35106 = state_33826__$1;
(statearr_33828_35106[(2)] = inst_33808);

(statearr_33828_35106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (1))){
var inst_33802 = cljs.core.seq(coll);
var inst_33803 = inst_33802;
var state_33826__$1 = (function (){var statearr_33829 = state_33826;
(statearr_33829[(7)] = inst_33803);

return statearr_33829;
})();
var statearr_33830_35107 = state_33826__$1;
(statearr_33830_35107[(2)] = null);

(statearr_33830_35107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (4))){
var inst_33803 = (state_33826[(7)]);
var inst_33806 = cljs.core.first(inst_33803);
var state_33826__$1 = state_33826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33826__$1,(7),ch,inst_33806);
} else {
if((state_val_33827 === (13))){
var inst_33820 = (state_33826[(2)]);
var state_33826__$1 = state_33826;
var statearr_33831_35108 = state_33826__$1;
(statearr_33831_35108[(2)] = inst_33820);

(statearr_33831_35108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (6))){
var inst_33811 = (state_33826[(2)]);
var state_33826__$1 = state_33826;
if(cljs.core.truth_(inst_33811)){
var statearr_33832_35109 = state_33826__$1;
(statearr_33832_35109[(1)] = (8));

} else {
var statearr_33833_35110 = state_33826__$1;
(statearr_33833_35110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (3))){
var inst_33824 = (state_33826[(2)]);
var state_33826__$1 = state_33826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33826__$1,inst_33824);
} else {
if((state_val_33827 === (12))){
var state_33826__$1 = state_33826;
var statearr_33834_35111 = state_33826__$1;
(statearr_33834_35111[(2)] = null);

(statearr_33834_35111[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (2))){
var inst_33803 = (state_33826[(7)]);
var state_33826__$1 = state_33826;
if(cljs.core.truth_(inst_33803)){
var statearr_33835_35135 = state_33826__$1;
(statearr_33835_35135[(1)] = (4));

} else {
var statearr_33836_35136 = state_33826__$1;
(statearr_33836_35136[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (11))){
var inst_33817 = cljs.core.async.close_BANG_(ch);
var state_33826__$1 = state_33826;
var statearr_33837_35137 = state_33826__$1;
(statearr_33837_35137[(2)] = inst_33817);

(statearr_33837_35137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (9))){
var state_33826__$1 = state_33826;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33838_35140 = state_33826__$1;
(statearr_33838_35140[(1)] = (11));

} else {
var statearr_33839_35141 = state_33826__$1;
(statearr_33839_35141[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (5))){
var inst_33803 = (state_33826[(7)]);
var state_33826__$1 = state_33826;
var statearr_33840_35145 = state_33826__$1;
(statearr_33840_35145[(2)] = inst_33803);

(statearr_33840_35145[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (10))){
var inst_33822 = (state_33826[(2)]);
var state_33826__$1 = state_33826;
var statearr_33841_35146 = state_33826__$1;
(statearr_33841_35146[(2)] = inst_33822);

(statearr_33841_35146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (8))){
var inst_33803 = (state_33826[(7)]);
var inst_33813 = cljs.core.next(inst_33803);
var inst_33803__$1 = inst_33813;
var state_33826__$1 = (function (){var statearr_33842 = state_33826;
(statearr_33842[(7)] = inst_33803__$1);

return statearr_33842;
})();
var statearr_33843_35147 = state_33826__$1;
(statearr_33843_35147[(2)] = null);

(statearr_33843_35147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__33377__auto__))
;
return ((function (switch__33289__auto__,c__33377__auto__){
return (function() {
var cljs$core$async$state_machine__33290__auto__ = null;
var cljs$core$async$state_machine__33290__auto____0 = (function (){
var statearr_33844 = [null,null,null,null,null,null,null,null];
(statearr_33844[(0)] = cljs$core$async$state_machine__33290__auto__);

(statearr_33844[(1)] = (1));

return statearr_33844;
});
var cljs$core$async$state_machine__33290__auto____1 = (function (state_33826){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_33826);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e33845){if((e33845 instanceof Object)){
var ex__33293__auto__ = e33845;
var statearr_33846_35148 = state_33826;
(statearr_33846_35148[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33845;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35149 = state_33826;
state_33826 = G__35149;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
cljs$core$async$state_machine__33290__auto__ = function(state_33826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33290__auto____1.call(this,state_33826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33290__auto____0;
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33290__auto____1;
return cljs$core$async$state_machine__33290__auto__;
})()
;})(switch__33289__auto__,c__33377__auto__))
})();
var state__33379__auto__ = (function (){var statearr_33847 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_33847[(6)] = c__33377__auto__);

return statearr_33847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(c__33377__auto__))
);

return c__33377__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33848 = (function (ch,cs,meta33849){
this.ch = ch;
this.cs = cs;
this.meta33849 = meta33849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33850,meta33849__$1){
var self__ = this;
var _33850__$1 = this;
return (new cljs.core.async.t_cljs$core$async33848(self__.ch,self__.cs,meta33849__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33848.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33850){
var self__ = this;
var _33850__$1 = this;
return self__.meta33849;
});})(cs))
;

cljs.core.async.t_cljs$core$async33848.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33848.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33848.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33848.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33848.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33848.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33848.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33849","meta33849",975871176,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33848.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33848";

cljs.core.async.t_cljs$core$async33848.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33848");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33848.
 */
cljs.core.async.__GT_t_cljs$core$async33848 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33848(ch__$1,cs__$1,meta33849){
return (new cljs.core.async.t_cljs$core$async33848(ch__$1,cs__$1,meta33849));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33848(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33377__auto___35152 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33377__auto___35152,cs,m,dchan,dctr,done){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (c__33377__auto___35152,cs,m,dchan,dctr,done){
return (function (state_33985){
var state_val_33986 = (state_33985[(1)]);
if((state_val_33986 === (7))){
var inst_33981 = (state_33985[(2)]);
var state_33985__$1 = state_33985;
var statearr_33987_35153 = state_33985__$1;
(statearr_33987_35153[(2)] = inst_33981);

(statearr_33987_35153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (20))){
var inst_33884 = (state_33985[(7)]);
var inst_33896 = cljs.core.first(inst_33884);
var inst_33897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33896,(0),null);
var inst_33898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33896,(1),null);
var state_33985__$1 = (function (){var statearr_33988 = state_33985;
(statearr_33988[(8)] = inst_33897);

return statearr_33988;
})();
if(cljs.core.truth_(inst_33898)){
var statearr_33989_35157 = state_33985__$1;
(statearr_33989_35157[(1)] = (22));

} else {
var statearr_33990_35158 = state_33985__$1;
(statearr_33990_35158[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (27))){
var inst_33853 = (state_33985[(9)]);
var inst_33926 = (state_33985[(10)]);
var inst_33933 = (state_33985[(11)]);
var inst_33928 = (state_33985[(12)]);
var inst_33933__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33926,inst_33928);
var inst_33934 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33933__$1,inst_33853,done);
var state_33985__$1 = (function (){var statearr_33991 = state_33985;
(statearr_33991[(11)] = inst_33933__$1);

return statearr_33991;
})();
if(cljs.core.truth_(inst_33934)){
var statearr_33992_35162 = state_33985__$1;
(statearr_33992_35162[(1)] = (30));

} else {
var statearr_33993_35163 = state_33985__$1;
(statearr_33993_35163[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (1))){
var state_33985__$1 = state_33985;
var statearr_33994_35164 = state_33985__$1;
(statearr_33994_35164[(2)] = null);

(statearr_33994_35164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (24))){
var inst_33884 = (state_33985[(7)]);
var inst_33903 = (state_33985[(2)]);
var inst_33904 = cljs.core.next(inst_33884);
var inst_33862 = inst_33904;
var inst_33863 = null;
var inst_33864 = (0);
var inst_33865 = (0);
var state_33985__$1 = (function (){var statearr_33995 = state_33985;
(statearr_33995[(13)] = inst_33865);

(statearr_33995[(14)] = inst_33864);

(statearr_33995[(15)] = inst_33862);

(statearr_33995[(16)] = inst_33863);

(statearr_33995[(17)] = inst_33903);

return statearr_33995;
})();
var statearr_33996_35168 = state_33985__$1;
(statearr_33996_35168[(2)] = null);

(statearr_33996_35168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (39))){
var state_33985__$1 = state_33985;
var statearr_34000_35169 = state_33985__$1;
(statearr_34000_35169[(2)] = null);

(statearr_34000_35169[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (4))){
var inst_33853 = (state_33985[(9)]);
var inst_33853__$1 = (state_33985[(2)]);
var inst_33854 = (inst_33853__$1 == null);
var state_33985__$1 = (function (){var statearr_34001 = state_33985;
(statearr_34001[(9)] = inst_33853__$1);

return statearr_34001;
})();
if(cljs.core.truth_(inst_33854)){
var statearr_34002_35173 = state_33985__$1;
(statearr_34002_35173[(1)] = (5));

} else {
var statearr_34003_35174 = state_33985__$1;
(statearr_34003_35174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (15))){
var inst_33865 = (state_33985[(13)]);
var inst_33864 = (state_33985[(14)]);
var inst_33862 = (state_33985[(15)]);
var inst_33863 = (state_33985[(16)]);
var inst_33880 = (state_33985[(2)]);
var inst_33881 = (inst_33865 + (1));
var tmp33997 = inst_33864;
var tmp33998 = inst_33862;
var tmp33999 = inst_33863;
var inst_33862__$1 = tmp33998;
var inst_33863__$1 = tmp33999;
var inst_33864__$1 = tmp33997;
var inst_33865__$1 = inst_33881;
var state_33985__$1 = (function (){var statearr_34004 = state_33985;
(statearr_34004[(18)] = inst_33880);

(statearr_34004[(13)] = inst_33865__$1);

(statearr_34004[(14)] = inst_33864__$1);

(statearr_34004[(15)] = inst_33862__$1);

(statearr_34004[(16)] = inst_33863__$1);

return statearr_34004;
})();
var statearr_34005_35178 = state_33985__$1;
(statearr_34005_35178[(2)] = null);

(statearr_34005_35178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (21))){
var inst_33907 = (state_33985[(2)]);
var state_33985__$1 = state_33985;
var statearr_34009_35179 = state_33985__$1;
(statearr_34009_35179[(2)] = inst_33907);

(statearr_34009_35179[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (31))){
var inst_33933 = (state_33985[(11)]);
var inst_33937 = done(null);
var inst_33938 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33933);
var state_33985__$1 = (function (){var statearr_34010 = state_33985;
(statearr_34010[(19)] = inst_33937);

return statearr_34010;
})();
var statearr_34011_35182 = state_33985__$1;
(statearr_34011_35182[(2)] = inst_33938);

(statearr_34011_35182[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (32))){
var inst_33927 = (state_33985[(20)]);
var inst_33926 = (state_33985[(10)]);
var inst_33925 = (state_33985[(21)]);
var inst_33928 = (state_33985[(12)]);
var inst_33940 = (state_33985[(2)]);
var inst_33941 = (inst_33928 + (1));
var tmp34006 = inst_33927;
var tmp34007 = inst_33926;
var tmp34008 = inst_33925;
var inst_33925__$1 = tmp34008;
var inst_33926__$1 = tmp34007;
var inst_33927__$1 = tmp34006;
var inst_33928__$1 = inst_33941;
var state_33985__$1 = (function (){var statearr_34012 = state_33985;
(statearr_34012[(20)] = inst_33927__$1);

(statearr_34012[(10)] = inst_33926__$1);

(statearr_34012[(22)] = inst_33940);

(statearr_34012[(21)] = inst_33925__$1);

(statearr_34012[(12)] = inst_33928__$1);

return statearr_34012;
})();
var statearr_34013_35183 = state_33985__$1;
(statearr_34013_35183[(2)] = null);

(statearr_34013_35183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (40))){
var inst_33953 = (state_33985[(23)]);
var inst_33957 = done(null);
var inst_33958 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33953);
var state_33985__$1 = (function (){var statearr_34014 = state_33985;
(statearr_34014[(24)] = inst_33957);

return statearr_34014;
})();
var statearr_34015_35184 = state_33985__$1;
(statearr_34015_35184[(2)] = inst_33958);

(statearr_34015_35184[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (33))){
var inst_33944 = (state_33985[(25)]);
var inst_33946 = cljs.core.chunked_seq_QMARK_(inst_33944);
var state_33985__$1 = state_33985;
if(inst_33946){
var statearr_34016_35185 = state_33985__$1;
(statearr_34016_35185[(1)] = (36));

} else {
var statearr_34017_35186 = state_33985__$1;
(statearr_34017_35186[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (13))){
var inst_33874 = (state_33985[(26)]);
var inst_33877 = cljs.core.async.close_BANG_(inst_33874);
var state_33985__$1 = state_33985;
var statearr_34018_35187 = state_33985__$1;
(statearr_34018_35187[(2)] = inst_33877);

(statearr_34018_35187[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (22))){
var inst_33897 = (state_33985[(8)]);
var inst_33900 = cljs.core.async.close_BANG_(inst_33897);
var state_33985__$1 = state_33985;
var statearr_34019_35188 = state_33985__$1;
(statearr_34019_35188[(2)] = inst_33900);

(statearr_34019_35188[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (36))){
var inst_33944 = (state_33985[(25)]);
var inst_33948 = cljs.core.chunk_first(inst_33944);
var inst_33949 = cljs.core.chunk_rest(inst_33944);
var inst_33950 = cljs.core.count(inst_33948);
var inst_33925 = inst_33949;
var inst_33926 = inst_33948;
var inst_33927 = inst_33950;
var inst_33928 = (0);
var state_33985__$1 = (function (){var statearr_34020 = state_33985;
(statearr_34020[(20)] = inst_33927);

(statearr_34020[(10)] = inst_33926);

(statearr_34020[(21)] = inst_33925);

(statearr_34020[(12)] = inst_33928);

return statearr_34020;
})();
var statearr_34021_35189 = state_33985__$1;
(statearr_34021_35189[(2)] = null);

(statearr_34021_35189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (41))){
var inst_33944 = (state_33985[(25)]);
var inst_33960 = (state_33985[(2)]);
var inst_33961 = cljs.core.next(inst_33944);
var inst_33925 = inst_33961;
var inst_33926 = null;
var inst_33927 = (0);
var inst_33928 = (0);
var state_33985__$1 = (function (){var statearr_34022 = state_33985;
(statearr_34022[(27)] = inst_33960);

(statearr_34022[(20)] = inst_33927);

(statearr_34022[(10)] = inst_33926);

(statearr_34022[(21)] = inst_33925);

(statearr_34022[(12)] = inst_33928);

return statearr_34022;
})();
var statearr_34023_35190 = state_33985__$1;
(statearr_34023_35190[(2)] = null);

(statearr_34023_35190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (43))){
var state_33985__$1 = state_33985;
var statearr_34024_35191 = state_33985__$1;
(statearr_34024_35191[(2)] = null);

(statearr_34024_35191[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (29))){
var inst_33969 = (state_33985[(2)]);
var state_33985__$1 = state_33985;
var statearr_34025_35192 = state_33985__$1;
(statearr_34025_35192[(2)] = inst_33969);

(statearr_34025_35192[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (44))){
var inst_33978 = (state_33985[(2)]);
var state_33985__$1 = (function (){var statearr_34026 = state_33985;
(statearr_34026[(28)] = inst_33978);

return statearr_34026;
})();
var statearr_34027_35193 = state_33985__$1;
(statearr_34027_35193[(2)] = null);

(statearr_34027_35193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (6))){
var inst_33917 = (state_33985[(29)]);
var inst_33916 = cljs.core.deref(cs);
var inst_33917__$1 = cljs.core.keys(inst_33916);
var inst_33918 = cljs.core.count(inst_33917__$1);
var inst_33919 = cljs.core.reset_BANG_(dctr,inst_33918);
var inst_33924 = cljs.core.seq(inst_33917__$1);
var inst_33925 = inst_33924;
var inst_33926 = null;
var inst_33927 = (0);
var inst_33928 = (0);
var state_33985__$1 = (function (){var statearr_34028 = state_33985;
(statearr_34028[(30)] = inst_33919);

(statearr_34028[(20)] = inst_33927);

(statearr_34028[(10)] = inst_33926);

(statearr_34028[(29)] = inst_33917__$1);

(statearr_34028[(21)] = inst_33925);

(statearr_34028[(12)] = inst_33928);

return statearr_34028;
})();
var statearr_34029_35197 = state_33985__$1;
(statearr_34029_35197[(2)] = null);

(statearr_34029_35197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (28))){
var inst_33944 = (state_33985[(25)]);
var inst_33925 = (state_33985[(21)]);
var inst_33944__$1 = cljs.core.seq(inst_33925);
var state_33985__$1 = (function (){var statearr_34030 = state_33985;
(statearr_34030[(25)] = inst_33944__$1);

return statearr_34030;
})();
if(inst_33944__$1){
var statearr_34031_35198 = state_33985__$1;
(statearr_34031_35198[(1)] = (33));

} else {
var statearr_34032_35199 = state_33985__$1;
(statearr_34032_35199[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (25))){
var inst_33927 = (state_33985[(20)]);
var inst_33928 = (state_33985[(12)]);
var inst_33930 = (inst_33928 < inst_33927);
var inst_33931 = inst_33930;
var state_33985__$1 = state_33985;
if(cljs.core.truth_(inst_33931)){
var statearr_34033_35203 = state_33985__$1;
(statearr_34033_35203[(1)] = (27));

} else {
var statearr_34034_35204 = state_33985__$1;
(statearr_34034_35204[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (34))){
var state_33985__$1 = state_33985;
var statearr_34035_35205 = state_33985__$1;
(statearr_34035_35205[(2)] = null);

(statearr_34035_35205[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (17))){
var state_33985__$1 = state_33985;
var statearr_34036_35210 = state_33985__$1;
(statearr_34036_35210[(2)] = null);

(statearr_34036_35210[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (3))){
var inst_33983 = (state_33985[(2)]);
var state_33985__$1 = state_33985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33985__$1,inst_33983);
} else {
if((state_val_33986 === (12))){
var inst_33912 = (state_33985[(2)]);
var state_33985__$1 = state_33985;
var statearr_34037_35214 = state_33985__$1;
(statearr_34037_35214[(2)] = inst_33912);

(statearr_34037_35214[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (2))){
var state_33985__$1 = state_33985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33985__$1,(4),ch);
} else {
if((state_val_33986 === (23))){
var state_33985__$1 = state_33985;
var statearr_34038_35215 = state_33985__$1;
(statearr_34038_35215[(2)] = null);

(statearr_34038_35215[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (35))){
var inst_33967 = (state_33985[(2)]);
var state_33985__$1 = state_33985;
var statearr_34039_35219 = state_33985__$1;
(statearr_34039_35219[(2)] = inst_33967);

(statearr_34039_35219[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (19))){
var inst_33884 = (state_33985[(7)]);
var inst_33888 = cljs.core.chunk_first(inst_33884);
var inst_33889 = cljs.core.chunk_rest(inst_33884);
var inst_33890 = cljs.core.count(inst_33888);
var inst_33862 = inst_33889;
var inst_33863 = inst_33888;
var inst_33864 = inst_33890;
var inst_33865 = (0);
var state_33985__$1 = (function (){var statearr_34040 = state_33985;
(statearr_34040[(13)] = inst_33865);

(statearr_34040[(14)] = inst_33864);

(statearr_34040[(15)] = inst_33862);

(statearr_34040[(16)] = inst_33863);

return statearr_34040;
})();
var statearr_34041_35223 = state_33985__$1;
(statearr_34041_35223[(2)] = null);

(statearr_34041_35223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (11))){
var inst_33862 = (state_33985[(15)]);
var inst_33884 = (state_33985[(7)]);
var inst_33884__$1 = cljs.core.seq(inst_33862);
var state_33985__$1 = (function (){var statearr_34042 = state_33985;
(statearr_34042[(7)] = inst_33884__$1);

return statearr_34042;
})();
if(inst_33884__$1){
var statearr_34043_35224 = state_33985__$1;
(statearr_34043_35224[(1)] = (16));

} else {
var statearr_34044_35225 = state_33985__$1;
(statearr_34044_35225[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (9))){
var inst_33914 = (state_33985[(2)]);
var state_33985__$1 = state_33985;
var statearr_34045_35229 = state_33985__$1;
(statearr_34045_35229[(2)] = inst_33914);

(statearr_34045_35229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (5))){
var inst_33860 = cljs.core.deref(cs);
var inst_33861 = cljs.core.seq(inst_33860);
var inst_33862 = inst_33861;
var inst_33863 = null;
var inst_33864 = (0);
var inst_33865 = (0);
var state_33985__$1 = (function (){var statearr_34046 = state_33985;
(statearr_34046[(13)] = inst_33865);

(statearr_34046[(14)] = inst_33864);

(statearr_34046[(15)] = inst_33862);

(statearr_34046[(16)] = inst_33863);

return statearr_34046;
})();
var statearr_34047_35230 = state_33985__$1;
(statearr_34047_35230[(2)] = null);

(statearr_34047_35230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (14))){
var state_33985__$1 = state_33985;
var statearr_34048_35231 = state_33985__$1;
(statearr_34048_35231[(2)] = null);

(statearr_34048_35231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (45))){
var inst_33975 = (state_33985[(2)]);
var state_33985__$1 = state_33985;
var statearr_34049_35232 = state_33985__$1;
(statearr_34049_35232[(2)] = inst_33975);

(statearr_34049_35232[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (26))){
var inst_33917 = (state_33985[(29)]);
var inst_33971 = (state_33985[(2)]);
var inst_33972 = cljs.core.seq(inst_33917);
var state_33985__$1 = (function (){var statearr_34050 = state_33985;
(statearr_34050[(31)] = inst_33971);

return statearr_34050;
})();
if(inst_33972){
var statearr_34051_35237 = state_33985__$1;
(statearr_34051_35237[(1)] = (42));

} else {
var statearr_34052_35241 = state_33985__$1;
(statearr_34052_35241[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (16))){
var inst_33884 = (state_33985[(7)]);
var inst_33886 = cljs.core.chunked_seq_QMARK_(inst_33884);
var state_33985__$1 = state_33985;
if(inst_33886){
var statearr_34053_35245 = state_33985__$1;
(statearr_34053_35245[(1)] = (19));

} else {
var statearr_34054_35246 = state_33985__$1;
(statearr_34054_35246[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (38))){
var inst_33964 = (state_33985[(2)]);
var state_33985__$1 = state_33985;
var statearr_34055_35247 = state_33985__$1;
(statearr_34055_35247[(2)] = inst_33964);

(statearr_34055_35247[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (30))){
var state_33985__$1 = state_33985;
var statearr_34056_35248 = state_33985__$1;
(statearr_34056_35248[(2)] = null);

(statearr_34056_35248[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (10))){
var inst_33865 = (state_33985[(13)]);
var inst_33863 = (state_33985[(16)]);
var inst_33873 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33863,inst_33865);
var inst_33874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33873,(0),null);
var inst_33875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33873,(1),null);
var state_33985__$1 = (function (){var statearr_34057 = state_33985;
(statearr_34057[(26)] = inst_33874);

return statearr_34057;
})();
if(cljs.core.truth_(inst_33875)){
var statearr_34058_35261 = state_33985__$1;
(statearr_34058_35261[(1)] = (13));

} else {
var statearr_34059_35262 = state_33985__$1;
(statearr_34059_35262[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (18))){
var inst_33910 = (state_33985[(2)]);
var state_33985__$1 = state_33985;
var statearr_34060_35263 = state_33985__$1;
(statearr_34060_35263[(2)] = inst_33910);

(statearr_34060_35263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (42))){
var state_33985__$1 = state_33985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33985__$1,(45),dchan);
} else {
if((state_val_33986 === (37))){
var inst_33853 = (state_33985[(9)]);
var inst_33944 = (state_33985[(25)]);
var inst_33953 = (state_33985[(23)]);
var inst_33953__$1 = cljs.core.first(inst_33944);
var inst_33954 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33953__$1,inst_33853,done);
var state_33985__$1 = (function (){var statearr_34061 = state_33985;
(statearr_34061[(23)] = inst_33953__$1);

return statearr_34061;
})();
if(cljs.core.truth_(inst_33954)){
var statearr_34062_35270 = state_33985__$1;
(statearr_34062_35270[(1)] = (39));

} else {
var statearr_34063_35271 = state_33985__$1;
(statearr_34063_35271[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33986 === (8))){
var inst_33865 = (state_33985[(13)]);
var inst_33864 = (state_33985[(14)]);
var inst_33867 = (inst_33865 < inst_33864);
var inst_33868 = inst_33867;
var state_33985__$1 = state_33985;
if(cljs.core.truth_(inst_33868)){
var statearr_34064_35272 = state_33985__$1;
(statearr_34064_35272[(1)] = (10));

} else {
var statearr_34065_35273 = state_33985__$1;
(statearr_34065_35273[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__33377__auto___35152,cs,m,dchan,dctr,done))
;
return ((function (switch__33289__auto__,c__33377__auto___35152,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33290__auto__ = null;
var cljs$core$async$mult_$_state_machine__33290__auto____0 = (function (){
var statearr_34066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34066[(0)] = cljs$core$async$mult_$_state_machine__33290__auto__);

(statearr_34066[(1)] = (1));

return statearr_34066;
});
var cljs$core$async$mult_$_state_machine__33290__auto____1 = (function (state_33985){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_33985);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e34067){if((e34067 instanceof Object)){
var ex__33293__auto__ = e34067;
var statearr_34068_35275 = state_33985;
(statearr_34068_35275[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34067;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35276 = state_33985;
state_33985 = G__35276;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33290__auto__ = function(state_33985){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33290__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33290__auto____1.call(this,state_33985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33290__auto____0;
cljs$core$async$mult_$_state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33290__auto____1;
return cljs$core$async$mult_$_state_machine__33290__auto__;
})()
;})(switch__33289__auto__,c__33377__auto___35152,cs,m,dchan,dctr,done))
})();
var state__33379__auto__ = (function (){var statearr_34069 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_34069[(6)] = c__33377__auto___35152);

return statearr_34069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(c__33377__auto___35152,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34071 = arguments.length;
switch (G__34071) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35310 = arguments.length;
var i__4731__auto___35311 = (0);
while(true){
if((i__4731__auto___35311 < len__4730__auto___35310)){
args__4736__auto__.push((arguments[i__4731__auto___35311]));

var G__35312 = (i__4731__auto___35311 + (1));
i__4731__auto___35311 = G__35312;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34076){
var map__34077 = p__34076;
var map__34077__$1 = (((((!((map__34077 == null))))?(((((map__34077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34077):map__34077);
var opts = map__34077__$1;
var statearr_34079_35319 = state;
(statearr_34079_35319[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__34077,map__34077__$1,opts){
return (function (val){
var statearr_34080_35320 = state;
(statearr_34080_35320[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__34077,map__34077__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34081_35327 = state;
(statearr_34081_35327[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34072){
var G__34073 = cljs.core.first(seq34072);
var seq34072__$1 = cljs.core.next(seq34072);
var G__34074 = cljs.core.first(seq34072__$1);
var seq34072__$2 = cljs.core.next(seq34072__$1);
var G__34075 = cljs.core.first(seq34072__$2);
var seq34072__$3 = cljs.core.next(seq34072__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34073,G__34074,G__34075,seq34072__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34082 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34082 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34083){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34083 = meta34083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34084,meta34083__$1){
var self__ = this;
var _34084__$1 = this;
return (new cljs.core.async.t_cljs$core$async34082(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34083__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34084){
var self__ = this;
var _34084__$1 = this;
return self__.meta34083;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34082.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34083","meta34083",641288084,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34082.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34082";

cljs.core.async.t_cljs$core$async34082.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34082");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34082.
 */
cljs.core.async.__GT_t_cljs$core$async34082 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34082(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34083){
return (new cljs.core.async.t_cljs$core$async34082(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34083));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34082(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33377__auto___35340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33377__auto___35340,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (c__33377__auto___35340,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34186){
var state_val_34187 = (state_34186[(1)]);
if((state_val_34187 === (7))){
var inst_34101 = (state_34186[(2)]);
var state_34186__$1 = state_34186;
var statearr_34188_35345 = state_34186__$1;
(statearr_34188_35345[(2)] = inst_34101);

(statearr_34188_35345[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (20))){
var inst_34113 = (state_34186[(7)]);
var state_34186__$1 = state_34186;
var statearr_34189_35346 = state_34186__$1;
(statearr_34189_35346[(2)] = inst_34113);

(statearr_34189_35346[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (27))){
var state_34186__$1 = state_34186;
var statearr_34190_35347 = state_34186__$1;
(statearr_34190_35347[(2)] = null);

(statearr_34190_35347[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (1))){
var inst_34088 = (state_34186[(8)]);
var inst_34088__$1 = calc_state();
var inst_34090 = (inst_34088__$1 == null);
var inst_34091 = cljs.core.not(inst_34090);
var state_34186__$1 = (function (){var statearr_34191 = state_34186;
(statearr_34191[(8)] = inst_34088__$1);

return statearr_34191;
})();
if(inst_34091){
var statearr_34192_35348 = state_34186__$1;
(statearr_34192_35348[(1)] = (2));

} else {
var statearr_34193_35349 = state_34186__$1;
(statearr_34193_35349[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (24))){
var inst_34160 = (state_34186[(9)]);
var inst_34146 = (state_34186[(10)]);
var inst_34137 = (state_34186[(11)]);
var inst_34160__$1 = (inst_34137.cljs$core$IFn$_invoke$arity$1 ? inst_34137.cljs$core$IFn$_invoke$arity$1(inst_34146) : inst_34137.call(null,inst_34146));
var state_34186__$1 = (function (){var statearr_34194 = state_34186;
(statearr_34194[(9)] = inst_34160__$1);

return statearr_34194;
})();
if(cljs.core.truth_(inst_34160__$1)){
var statearr_34195_35352 = state_34186__$1;
(statearr_34195_35352[(1)] = (29));

} else {
var statearr_34196_35353 = state_34186__$1;
(statearr_34196_35353[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (4))){
var inst_34104 = (state_34186[(2)]);
var state_34186__$1 = state_34186;
if(cljs.core.truth_(inst_34104)){
var statearr_34197_35354 = state_34186__$1;
(statearr_34197_35354[(1)] = (8));

} else {
var statearr_34198_35355 = state_34186__$1;
(statearr_34198_35355[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (15))){
var inst_34131 = (state_34186[(2)]);
var state_34186__$1 = state_34186;
if(cljs.core.truth_(inst_34131)){
var statearr_34199_35356 = state_34186__$1;
(statearr_34199_35356[(1)] = (19));

} else {
var statearr_34200_35357 = state_34186__$1;
(statearr_34200_35357[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (21))){
var inst_34136 = (state_34186[(12)]);
var inst_34136__$1 = (state_34186[(2)]);
var inst_34137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34136__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34136__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34136__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34186__$1 = (function (){var statearr_34201 = state_34186;
(statearr_34201[(12)] = inst_34136__$1);

(statearr_34201[(11)] = inst_34137);

(statearr_34201[(13)] = inst_34138);

return statearr_34201;
})();
return cljs.core.async.ioc_alts_BANG_(state_34186__$1,(22),inst_34139);
} else {
if((state_val_34187 === (31))){
var inst_34168 = (state_34186[(2)]);
var state_34186__$1 = state_34186;
if(cljs.core.truth_(inst_34168)){
var statearr_34202_35360 = state_34186__$1;
(statearr_34202_35360[(1)] = (32));

} else {
var statearr_34203_35361 = state_34186__$1;
(statearr_34203_35361[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (32))){
var inst_34145 = (state_34186[(14)]);
var state_34186__$1 = state_34186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34186__$1,(35),out,inst_34145);
} else {
if((state_val_34187 === (33))){
var inst_34136 = (state_34186[(12)]);
var inst_34113 = inst_34136;
var state_34186__$1 = (function (){var statearr_34204 = state_34186;
(statearr_34204[(7)] = inst_34113);

return statearr_34204;
})();
var statearr_34205_35362 = state_34186__$1;
(statearr_34205_35362[(2)] = null);

(statearr_34205_35362[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (13))){
var inst_34113 = (state_34186[(7)]);
var inst_34120 = inst_34113.cljs$lang$protocol_mask$partition0$;
var inst_34121 = (inst_34120 & (64));
var inst_34122 = inst_34113.cljs$core$ISeq$;
var inst_34123 = (cljs.core.PROTOCOL_SENTINEL === inst_34122);
var inst_34124 = ((inst_34121) || (inst_34123));
var state_34186__$1 = state_34186;
if(cljs.core.truth_(inst_34124)){
var statearr_34206_35363 = state_34186__$1;
(statearr_34206_35363[(1)] = (16));

} else {
var statearr_34207_35364 = state_34186__$1;
(statearr_34207_35364[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (22))){
var inst_34145 = (state_34186[(14)]);
var inst_34146 = (state_34186[(10)]);
var inst_34144 = (state_34186[(2)]);
var inst_34145__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34144,(0),null);
var inst_34146__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34144,(1),null);
var inst_34147 = (inst_34145__$1 == null);
var inst_34148 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34146__$1,change);
var inst_34149 = ((inst_34147) || (inst_34148));
var state_34186__$1 = (function (){var statearr_34208 = state_34186;
(statearr_34208[(14)] = inst_34145__$1);

(statearr_34208[(10)] = inst_34146__$1);

return statearr_34208;
})();
if(cljs.core.truth_(inst_34149)){
var statearr_34209_35365 = state_34186__$1;
(statearr_34209_35365[(1)] = (23));

} else {
var statearr_34210_35366 = state_34186__$1;
(statearr_34210_35366[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (36))){
var inst_34136 = (state_34186[(12)]);
var inst_34113 = inst_34136;
var state_34186__$1 = (function (){var statearr_34211 = state_34186;
(statearr_34211[(7)] = inst_34113);

return statearr_34211;
})();
var statearr_34212_35367 = state_34186__$1;
(statearr_34212_35367[(2)] = null);

(statearr_34212_35367[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (29))){
var inst_34160 = (state_34186[(9)]);
var state_34186__$1 = state_34186;
var statearr_34213_35368 = state_34186__$1;
(statearr_34213_35368[(2)] = inst_34160);

(statearr_34213_35368[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (6))){
var state_34186__$1 = state_34186;
var statearr_34214_35369 = state_34186__$1;
(statearr_34214_35369[(2)] = false);

(statearr_34214_35369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (28))){
var inst_34156 = (state_34186[(2)]);
var inst_34157 = calc_state();
var inst_34113 = inst_34157;
var state_34186__$1 = (function (){var statearr_34215 = state_34186;
(statearr_34215[(15)] = inst_34156);

(statearr_34215[(7)] = inst_34113);

return statearr_34215;
})();
var statearr_34216_35371 = state_34186__$1;
(statearr_34216_35371[(2)] = null);

(statearr_34216_35371[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (25))){
var inst_34182 = (state_34186[(2)]);
var state_34186__$1 = state_34186;
var statearr_34217_35376 = state_34186__$1;
(statearr_34217_35376[(2)] = inst_34182);

(statearr_34217_35376[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (34))){
var inst_34180 = (state_34186[(2)]);
var state_34186__$1 = state_34186;
var statearr_34218_35377 = state_34186__$1;
(statearr_34218_35377[(2)] = inst_34180);

(statearr_34218_35377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (17))){
var state_34186__$1 = state_34186;
var statearr_34219_35378 = state_34186__$1;
(statearr_34219_35378[(2)] = false);

(statearr_34219_35378[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (3))){
var state_34186__$1 = state_34186;
var statearr_34220_35379 = state_34186__$1;
(statearr_34220_35379[(2)] = false);

(statearr_34220_35379[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (12))){
var inst_34184 = (state_34186[(2)]);
var state_34186__$1 = state_34186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34186__$1,inst_34184);
} else {
if((state_val_34187 === (2))){
var inst_34088 = (state_34186[(8)]);
var inst_34093 = inst_34088.cljs$lang$protocol_mask$partition0$;
var inst_34094 = (inst_34093 & (64));
var inst_34095 = inst_34088.cljs$core$ISeq$;
var inst_34096 = (cljs.core.PROTOCOL_SENTINEL === inst_34095);
var inst_34097 = ((inst_34094) || (inst_34096));
var state_34186__$1 = state_34186;
if(cljs.core.truth_(inst_34097)){
var statearr_34221_35390 = state_34186__$1;
(statearr_34221_35390[(1)] = (5));

} else {
var statearr_34222_35391 = state_34186__$1;
(statearr_34222_35391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (23))){
var inst_34145 = (state_34186[(14)]);
var inst_34151 = (inst_34145 == null);
var state_34186__$1 = state_34186;
if(cljs.core.truth_(inst_34151)){
var statearr_34223_35395 = state_34186__$1;
(statearr_34223_35395[(1)] = (26));

} else {
var statearr_34224_35396 = state_34186__$1;
(statearr_34224_35396[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (35))){
var inst_34171 = (state_34186[(2)]);
var state_34186__$1 = state_34186;
if(cljs.core.truth_(inst_34171)){
var statearr_34225_35397 = state_34186__$1;
(statearr_34225_35397[(1)] = (36));

} else {
var statearr_34226_35398 = state_34186__$1;
(statearr_34226_35398[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (19))){
var inst_34113 = (state_34186[(7)]);
var inst_34133 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34113);
var state_34186__$1 = state_34186;
var statearr_34227_35402 = state_34186__$1;
(statearr_34227_35402[(2)] = inst_34133);

(statearr_34227_35402[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (11))){
var inst_34113 = (state_34186[(7)]);
var inst_34117 = (inst_34113 == null);
var inst_34118 = cljs.core.not(inst_34117);
var state_34186__$1 = state_34186;
if(inst_34118){
var statearr_34228_35407 = state_34186__$1;
(statearr_34228_35407[(1)] = (13));

} else {
var statearr_34229_35408 = state_34186__$1;
(statearr_34229_35408[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (9))){
var inst_34088 = (state_34186[(8)]);
var state_34186__$1 = state_34186;
var statearr_34230_35409 = state_34186__$1;
(statearr_34230_35409[(2)] = inst_34088);

(statearr_34230_35409[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (5))){
var state_34186__$1 = state_34186;
var statearr_34231_35410 = state_34186__$1;
(statearr_34231_35410[(2)] = true);

(statearr_34231_35410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (14))){
var state_34186__$1 = state_34186;
var statearr_34232_35411 = state_34186__$1;
(statearr_34232_35411[(2)] = false);

(statearr_34232_35411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (26))){
var inst_34146 = (state_34186[(10)]);
var inst_34153 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34146);
var state_34186__$1 = state_34186;
var statearr_34233_35412 = state_34186__$1;
(statearr_34233_35412[(2)] = inst_34153);

(statearr_34233_35412[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (16))){
var state_34186__$1 = state_34186;
var statearr_34234_35413 = state_34186__$1;
(statearr_34234_35413[(2)] = true);

(statearr_34234_35413[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (38))){
var inst_34176 = (state_34186[(2)]);
var state_34186__$1 = state_34186;
var statearr_34235_35420 = state_34186__$1;
(statearr_34235_35420[(2)] = inst_34176);

(statearr_34235_35420[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (30))){
var inst_34146 = (state_34186[(10)]);
var inst_34137 = (state_34186[(11)]);
var inst_34138 = (state_34186[(13)]);
var inst_34163 = cljs.core.empty_QMARK_(inst_34137);
var inst_34164 = (inst_34138.cljs$core$IFn$_invoke$arity$1 ? inst_34138.cljs$core$IFn$_invoke$arity$1(inst_34146) : inst_34138.call(null,inst_34146));
var inst_34165 = cljs.core.not(inst_34164);
var inst_34166 = ((inst_34163) && (inst_34165));
var state_34186__$1 = state_34186;
var statearr_34236_35425 = state_34186__$1;
(statearr_34236_35425[(2)] = inst_34166);

(statearr_34236_35425[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (10))){
var inst_34088 = (state_34186[(8)]);
var inst_34109 = (state_34186[(2)]);
var inst_34110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34109,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34109,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34109,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34113 = inst_34088;
var state_34186__$1 = (function (){var statearr_34237 = state_34186;
(statearr_34237[(16)] = inst_34111);

(statearr_34237[(17)] = inst_34110);

(statearr_34237[(7)] = inst_34113);

(statearr_34237[(18)] = inst_34112);

return statearr_34237;
})();
var statearr_34238_35428 = state_34186__$1;
(statearr_34238_35428[(2)] = null);

(statearr_34238_35428[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (18))){
var inst_34128 = (state_34186[(2)]);
var state_34186__$1 = state_34186;
var statearr_34239_35429 = state_34186__$1;
(statearr_34239_35429[(2)] = inst_34128);

(statearr_34239_35429[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (37))){
var state_34186__$1 = state_34186;
var statearr_34240_35430 = state_34186__$1;
(statearr_34240_35430[(2)] = null);

(statearr_34240_35430[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34187 === (8))){
var inst_34088 = (state_34186[(8)]);
var inst_34106 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34088);
var state_34186__$1 = state_34186;
var statearr_34241_35431 = state_34186__$1;
(statearr_34241_35431[(2)] = inst_34106);

(statearr_34241_35431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__33377__auto___35340,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33289__auto__,c__33377__auto___35340,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33290__auto__ = null;
var cljs$core$async$mix_$_state_machine__33290__auto____0 = (function (){
var statearr_34242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34242[(0)] = cljs$core$async$mix_$_state_machine__33290__auto__);

(statearr_34242[(1)] = (1));

return statearr_34242;
});
var cljs$core$async$mix_$_state_machine__33290__auto____1 = (function (state_34186){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_34186);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e34243){if((e34243 instanceof Object)){
var ex__33293__auto__ = e34243;
var statearr_34244_35436 = state_34186;
(statearr_34244_35436[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34243;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35437 = state_34186;
state_34186 = G__35437;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33290__auto__ = function(state_34186){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33290__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33290__auto____1.call(this,state_34186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33290__auto____0;
cljs$core$async$mix_$_state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33290__auto____1;
return cljs$core$async$mix_$_state_machine__33290__auto__;
})()
;})(switch__33289__auto__,c__33377__auto___35340,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33379__auto__ = (function (){var statearr_34245 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_34245[(6)] = c__33377__auto___35340);

return statearr_34245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(c__33377__auto___35340,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34247 = arguments.length;
switch (G__34247) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34250 = arguments.length;
switch (G__34250) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__34248_SHARP_){
if(cljs.core.truth_((p1__34248_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34248_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34248_SHARP_.call(null,topic)))){
return p1__34248_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34248_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34251 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34251 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34252){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34252 = meta34252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34253,meta34252__$1){
var self__ = this;
var _34253__$1 = this;
return (new cljs.core.async.t_cljs$core$async34251(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34252__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34253){
var self__ = this;
var _34253__$1 = this;
return self__.meta34252;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34251.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34251.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34252","meta34252",334368649,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34251.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34251";

cljs.core.async.t_cljs$core$async34251.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34251");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34251.
 */
cljs.core.async.__GT_t_cljs$core$async34251 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34251(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34252){
return (new cljs.core.async.t_cljs$core$async34251(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34252));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34251(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33377__auto___35468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33377__auto___35468,mults,ensure_mult,p){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (c__33377__auto___35468,mults,ensure_mult,p){
return (function (state_34325){
var state_val_34326 = (state_34325[(1)]);
if((state_val_34326 === (7))){
var inst_34321 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34327_35473 = state_34325__$1;
(statearr_34327_35473[(2)] = inst_34321);

(statearr_34327_35473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (20))){
var state_34325__$1 = state_34325;
var statearr_34328_35474 = state_34325__$1;
(statearr_34328_35474[(2)] = null);

(statearr_34328_35474[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (1))){
var state_34325__$1 = state_34325;
var statearr_34329_35475 = state_34325__$1;
(statearr_34329_35475[(2)] = null);

(statearr_34329_35475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (24))){
var inst_34304 = (state_34325[(7)]);
var inst_34313 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34304);
var state_34325__$1 = state_34325;
var statearr_34330_35476 = state_34325__$1;
(statearr_34330_35476[(2)] = inst_34313);

(statearr_34330_35476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (4))){
var inst_34256 = (state_34325[(8)]);
var inst_34256__$1 = (state_34325[(2)]);
var inst_34257 = (inst_34256__$1 == null);
var state_34325__$1 = (function (){var statearr_34331 = state_34325;
(statearr_34331[(8)] = inst_34256__$1);

return statearr_34331;
})();
if(cljs.core.truth_(inst_34257)){
var statearr_34332_35477 = state_34325__$1;
(statearr_34332_35477[(1)] = (5));

} else {
var statearr_34333_35478 = state_34325__$1;
(statearr_34333_35478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (15))){
var inst_34298 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34334_35479 = state_34325__$1;
(statearr_34334_35479[(2)] = inst_34298);

(statearr_34334_35479[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (21))){
var inst_34318 = (state_34325[(2)]);
var state_34325__$1 = (function (){var statearr_34335 = state_34325;
(statearr_34335[(9)] = inst_34318);

return statearr_34335;
})();
var statearr_34336_35480 = state_34325__$1;
(statearr_34336_35480[(2)] = null);

(statearr_34336_35480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (13))){
var inst_34280 = (state_34325[(10)]);
var inst_34282 = cljs.core.chunked_seq_QMARK_(inst_34280);
var state_34325__$1 = state_34325;
if(inst_34282){
var statearr_34337_35481 = state_34325__$1;
(statearr_34337_35481[(1)] = (16));

} else {
var statearr_34338_35482 = state_34325__$1;
(statearr_34338_35482[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (22))){
var inst_34310 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
if(cljs.core.truth_(inst_34310)){
var statearr_34339_35483 = state_34325__$1;
(statearr_34339_35483[(1)] = (23));

} else {
var statearr_34340_35484 = state_34325__$1;
(statearr_34340_35484[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (6))){
var inst_34306 = (state_34325[(11)]);
var inst_34256 = (state_34325[(8)]);
var inst_34304 = (state_34325[(7)]);
var inst_34304__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34256) : topic_fn.call(null,inst_34256));
var inst_34305 = cljs.core.deref(mults);
var inst_34306__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34305,inst_34304__$1);
var state_34325__$1 = (function (){var statearr_34341 = state_34325;
(statearr_34341[(11)] = inst_34306__$1);

(statearr_34341[(7)] = inst_34304__$1);

return statearr_34341;
})();
if(cljs.core.truth_(inst_34306__$1)){
var statearr_34342_35485 = state_34325__$1;
(statearr_34342_35485[(1)] = (19));

} else {
var statearr_34343_35486 = state_34325__$1;
(statearr_34343_35486[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (25))){
var inst_34315 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34344_35487 = state_34325__$1;
(statearr_34344_35487[(2)] = inst_34315);

(statearr_34344_35487[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (17))){
var inst_34280 = (state_34325[(10)]);
var inst_34289 = cljs.core.first(inst_34280);
var inst_34290 = cljs.core.async.muxch_STAR_(inst_34289);
var inst_34291 = cljs.core.async.close_BANG_(inst_34290);
var inst_34292 = cljs.core.next(inst_34280);
var inst_34266 = inst_34292;
var inst_34267 = null;
var inst_34268 = (0);
var inst_34269 = (0);
var state_34325__$1 = (function (){var statearr_34345 = state_34325;
(statearr_34345[(12)] = inst_34269);

(statearr_34345[(13)] = inst_34268);

(statearr_34345[(14)] = inst_34266);

(statearr_34345[(15)] = inst_34291);

(statearr_34345[(16)] = inst_34267);

return statearr_34345;
})();
var statearr_34346_35496 = state_34325__$1;
(statearr_34346_35496[(2)] = null);

(statearr_34346_35496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (3))){
var inst_34323 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34325__$1,inst_34323);
} else {
if((state_val_34326 === (12))){
var inst_34300 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34347_35497 = state_34325__$1;
(statearr_34347_35497[(2)] = inst_34300);

(statearr_34347_35497[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (2))){
var state_34325__$1 = state_34325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34325__$1,(4),ch);
} else {
if((state_val_34326 === (23))){
var state_34325__$1 = state_34325;
var statearr_34348_35498 = state_34325__$1;
(statearr_34348_35498[(2)] = null);

(statearr_34348_35498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (19))){
var inst_34306 = (state_34325[(11)]);
var inst_34256 = (state_34325[(8)]);
var inst_34308 = cljs.core.async.muxch_STAR_(inst_34306);
var state_34325__$1 = state_34325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34325__$1,(22),inst_34308,inst_34256);
} else {
if((state_val_34326 === (11))){
var inst_34266 = (state_34325[(14)]);
var inst_34280 = (state_34325[(10)]);
var inst_34280__$1 = cljs.core.seq(inst_34266);
var state_34325__$1 = (function (){var statearr_34349 = state_34325;
(statearr_34349[(10)] = inst_34280__$1);

return statearr_34349;
})();
if(inst_34280__$1){
var statearr_34350_35500 = state_34325__$1;
(statearr_34350_35500[(1)] = (13));

} else {
var statearr_34351_35501 = state_34325__$1;
(statearr_34351_35501[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (9))){
var inst_34302 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34352_35502 = state_34325__$1;
(statearr_34352_35502[(2)] = inst_34302);

(statearr_34352_35502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (5))){
var inst_34263 = cljs.core.deref(mults);
var inst_34264 = cljs.core.vals(inst_34263);
var inst_34265 = cljs.core.seq(inst_34264);
var inst_34266 = inst_34265;
var inst_34267 = null;
var inst_34268 = (0);
var inst_34269 = (0);
var state_34325__$1 = (function (){var statearr_34353 = state_34325;
(statearr_34353[(12)] = inst_34269);

(statearr_34353[(13)] = inst_34268);

(statearr_34353[(14)] = inst_34266);

(statearr_34353[(16)] = inst_34267);

return statearr_34353;
})();
var statearr_34354_35504 = state_34325__$1;
(statearr_34354_35504[(2)] = null);

(statearr_34354_35504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (14))){
var state_34325__$1 = state_34325;
var statearr_34358_35505 = state_34325__$1;
(statearr_34358_35505[(2)] = null);

(statearr_34358_35505[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (16))){
var inst_34280 = (state_34325[(10)]);
var inst_34284 = cljs.core.chunk_first(inst_34280);
var inst_34285 = cljs.core.chunk_rest(inst_34280);
var inst_34286 = cljs.core.count(inst_34284);
var inst_34266 = inst_34285;
var inst_34267 = inst_34284;
var inst_34268 = inst_34286;
var inst_34269 = (0);
var state_34325__$1 = (function (){var statearr_34359 = state_34325;
(statearr_34359[(12)] = inst_34269);

(statearr_34359[(13)] = inst_34268);

(statearr_34359[(14)] = inst_34266);

(statearr_34359[(16)] = inst_34267);

return statearr_34359;
})();
var statearr_34360_35506 = state_34325__$1;
(statearr_34360_35506[(2)] = null);

(statearr_34360_35506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (10))){
var inst_34269 = (state_34325[(12)]);
var inst_34268 = (state_34325[(13)]);
var inst_34266 = (state_34325[(14)]);
var inst_34267 = (state_34325[(16)]);
var inst_34274 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34267,inst_34269);
var inst_34275 = cljs.core.async.muxch_STAR_(inst_34274);
var inst_34276 = cljs.core.async.close_BANG_(inst_34275);
var inst_34277 = (inst_34269 + (1));
var tmp34355 = inst_34268;
var tmp34356 = inst_34266;
var tmp34357 = inst_34267;
var inst_34266__$1 = tmp34356;
var inst_34267__$1 = tmp34357;
var inst_34268__$1 = tmp34355;
var inst_34269__$1 = inst_34277;
var state_34325__$1 = (function (){var statearr_34361 = state_34325;
(statearr_34361[(12)] = inst_34269__$1);

(statearr_34361[(13)] = inst_34268__$1);

(statearr_34361[(14)] = inst_34266__$1);

(statearr_34361[(16)] = inst_34267__$1);

(statearr_34361[(17)] = inst_34276);

return statearr_34361;
})();
var statearr_34362_35507 = state_34325__$1;
(statearr_34362_35507[(2)] = null);

(statearr_34362_35507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (18))){
var inst_34295 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34363_35518 = state_34325__$1;
(statearr_34363_35518[(2)] = inst_34295);

(statearr_34363_35518[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (8))){
var inst_34269 = (state_34325[(12)]);
var inst_34268 = (state_34325[(13)]);
var inst_34271 = (inst_34269 < inst_34268);
var inst_34272 = inst_34271;
var state_34325__$1 = state_34325;
if(cljs.core.truth_(inst_34272)){
var statearr_34364_35523 = state_34325__$1;
(statearr_34364_35523[(1)] = (10));

} else {
var statearr_34365_35524 = state_34325__$1;
(statearr_34365_35524[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__33377__auto___35468,mults,ensure_mult,p))
;
return ((function (switch__33289__auto__,c__33377__auto___35468,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33290__auto__ = null;
var cljs$core$async$state_machine__33290__auto____0 = (function (){
var statearr_34366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34366[(0)] = cljs$core$async$state_machine__33290__auto__);

(statearr_34366[(1)] = (1));

return statearr_34366;
});
var cljs$core$async$state_machine__33290__auto____1 = (function (state_34325){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_34325);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e34367){if((e34367 instanceof Object)){
var ex__33293__auto__ = e34367;
var statearr_34368_35525 = state_34325;
(statearr_34368_35525[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34367;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35526 = state_34325;
state_34325 = G__35526;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
cljs$core$async$state_machine__33290__auto__ = function(state_34325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33290__auto____1.call(this,state_34325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33290__auto____0;
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33290__auto____1;
return cljs$core$async$state_machine__33290__auto__;
})()
;})(switch__33289__auto__,c__33377__auto___35468,mults,ensure_mult,p))
})();
var state__33379__auto__ = (function (){var statearr_34369 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_34369[(6)] = c__33377__auto___35468);

return statearr_34369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(c__33377__auto___35468,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34371 = arguments.length;
switch (G__34371) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34373 = arguments.length;
switch (G__34373) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34375 = arguments.length;
switch (G__34375) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33377__auto___35531 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33377__auto___35531,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (c__33377__auto___35531,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34414){
var state_val_34415 = (state_34414[(1)]);
if((state_val_34415 === (7))){
var state_34414__$1 = state_34414;
var statearr_34416_35532 = state_34414__$1;
(statearr_34416_35532[(2)] = null);

(statearr_34416_35532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (1))){
var state_34414__$1 = state_34414;
var statearr_34417_35533 = state_34414__$1;
(statearr_34417_35533[(2)] = null);

(statearr_34417_35533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (4))){
var inst_34378 = (state_34414[(7)]);
var inst_34380 = (inst_34378 < cnt);
var state_34414__$1 = state_34414;
if(cljs.core.truth_(inst_34380)){
var statearr_34418_35534 = state_34414__$1;
(statearr_34418_35534[(1)] = (6));

} else {
var statearr_34419_35535 = state_34414__$1;
(statearr_34419_35535[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (15))){
var inst_34410 = (state_34414[(2)]);
var state_34414__$1 = state_34414;
var statearr_34420_35536 = state_34414__$1;
(statearr_34420_35536[(2)] = inst_34410);

(statearr_34420_35536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (13))){
var inst_34403 = cljs.core.async.close_BANG_(out);
var state_34414__$1 = state_34414;
var statearr_34421_35537 = state_34414__$1;
(statearr_34421_35537[(2)] = inst_34403);

(statearr_34421_35537[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (6))){
var state_34414__$1 = state_34414;
var statearr_34422_35539 = state_34414__$1;
(statearr_34422_35539[(2)] = null);

(statearr_34422_35539[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (3))){
var inst_34412 = (state_34414[(2)]);
var state_34414__$1 = state_34414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34414__$1,inst_34412);
} else {
if((state_val_34415 === (12))){
var inst_34400 = (state_34414[(8)]);
var inst_34400__$1 = (state_34414[(2)]);
var inst_34401 = cljs.core.some(cljs.core.nil_QMARK_,inst_34400__$1);
var state_34414__$1 = (function (){var statearr_34423 = state_34414;
(statearr_34423[(8)] = inst_34400__$1);

return statearr_34423;
})();
if(cljs.core.truth_(inst_34401)){
var statearr_34424_35540 = state_34414__$1;
(statearr_34424_35540[(1)] = (13));

} else {
var statearr_34425_35541 = state_34414__$1;
(statearr_34425_35541[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (2))){
var inst_34377 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34378 = (0);
var state_34414__$1 = (function (){var statearr_34426 = state_34414;
(statearr_34426[(9)] = inst_34377);

(statearr_34426[(7)] = inst_34378);

return statearr_34426;
})();
var statearr_34427_35542 = state_34414__$1;
(statearr_34427_35542[(2)] = null);

(statearr_34427_35542[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (11))){
var inst_34378 = (state_34414[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_34414,(10),Object,null,(9));
var inst_34387 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34378) : chs__$1.call(null,inst_34378));
var inst_34388 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34378) : done.call(null,inst_34378));
var inst_34389 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34387,inst_34388);
var state_34414__$1 = state_34414;
var statearr_34428_35544 = state_34414__$1;
(statearr_34428_35544[(2)] = inst_34389);


cljs.core.async.impl.ioc_helpers.process_exception(state_34414__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (9))){
var inst_34378 = (state_34414[(7)]);
var inst_34391 = (state_34414[(2)]);
var inst_34392 = (inst_34378 + (1));
var inst_34378__$1 = inst_34392;
var state_34414__$1 = (function (){var statearr_34429 = state_34414;
(statearr_34429[(10)] = inst_34391);

(statearr_34429[(7)] = inst_34378__$1);

return statearr_34429;
})();
var statearr_34430_35545 = state_34414__$1;
(statearr_34430_35545[(2)] = null);

(statearr_34430_35545[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (5))){
var inst_34398 = (state_34414[(2)]);
var state_34414__$1 = (function (){var statearr_34431 = state_34414;
(statearr_34431[(11)] = inst_34398);

return statearr_34431;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34414__$1,(12),dchan);
} else {
if((state_val_34415 === (14))){
var inst_34400 = (state_34414[(8)]);
var inst_34405 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34400);
var state_34414__$1 = state_34414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34414__$1,(16),out,inst_34405);
} else {
if((state_val_34415 === (16))){
var inst_34407 = (state_34414[(2)]);
var state_34414__$1 = (function (){var statearr_34432 = state_34414;
(statearr_34432[(12)] = inst_34407);

return statearr_34432;
})();
var statearr_34433_35556 = state_34414__$1;
(statearr_34433_35556[(2)] = null);

(statearr_34433_35556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (10))){
var inst_34382 = (state_34414[(2)]);
var inst_34383 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34414__$1 = (function (){var statearr_34434 = state_34414;
(statearr_34434[(13)] = inst_34382);

return statearr_34434;
})();
var statearr_34435_35557 = state_34414__$1;
(statearr_34435_35557[(2)] = inst_34383);


cljs.core.async.impl.ioc_helpers.process_exception(state_34414__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (8))){
var inst_34396 = (state_34414[(2)]);
var state_34414__$1 = state_34414;
var statearr_34436_35561 = state_34414__$1;
(statearr_34436_35561[(2)] = inst_34396);

(statearr_34436_35561[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__33377__auto___35531,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33289__auto__,c__33377__auto___35531,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33290__auto__ = null;
var cljs$core$async$state_machine__33290__auto____0 = (function (){
var statearr_34437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34437[(0)] = cljs$core$async$state_machine__33290__auto__);

(statearr_34437[(1)] = (1));

return statearr_34437;
});
var cljs$core$async$state_machine__33290__auto____1 = (function (state_34414){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_34414);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e34438){if((e34438 instanceof Object)){
var ex__33293__auto__ = e34438;
var statearr_34439_35568 = state_34414;
(statearr_34439_35568[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34438;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35569 = state_34414;
state_34414 = G__35569;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
cljs$core$async$state_machine__33290__auto__ = function(state_34414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33290__auto____1.call(this,state_34414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33290__auto____0;
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33290__auto____1;
return cljs$core$async$state_machine__33290__auto__;
})()
;})(switch__33289__auto__,c__33377__auto___35531,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33379__auto__ = (function (){var statearr_34440 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_34440[(6)] = c__33377__auto___35531);

return statearr_34440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(c__33377__auto___35531,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34443 = arguments.length;
switch (G__34443) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33377__auto___35581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33377__auto___35581,out){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (c__33377__auto___35581,out){
return (function (state_34475){
var state_val_34476 = (state_34475[(1)]);
if((state_val_34476 === (7))){
var inst_34454 = (state_34475[(7)]);
var inst_34455 = (state_34475[(8)]);
var inst_34454__$1 = (state_34475[(2)]);
var inst_34455__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34454__$1,(0),null);
var inst_34456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34454__$1,(1),null);
var inst_34457 = (inst_34455__$1 == null);
var state_34475__$1 = (function (){var statearr_34477 = state_34475;
(statearr_34477[(7)] = inst_34454__$1);

(statearr_34477[(8)] = inst_34455__$1);

(statearr_34477[(9)] = inst_34456);

return statearr_34477;
})();
if(cljs.core.truth_(inst_34457)){
var statearr_34478_35588 = state_34475__$1;
(statearr_34478_35588[(1)] = (8));

} else {
var statearr_34479_35589 = state_34475__$1;
(statearr_34479_35589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (1))){
var inst_34444 = cljs.core.vec(chs);
var inst_34445 = inst_34444;
var state_34475__$1 = (function (){var statearr_34480 = state_34475;
(statearr_34480[(10)] = inst_34445);

return statearr_34480;
})();
var statearr_34481_35590 = state_34475__$1;
(statearr_34481_35590[(2)] = null);

(statearr_34481_35590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (4))){
var inst_34445 = (state_34475[(10)]);
var state_34475__$1 = state_34475;
return cljs.core.async.ioc_alts_BANG_(state_34475__$1,(7),inst_34445);
} else {
if((state_val_34476 === (6))){
var inst_34471 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
var statearr_34482_35591 = state_34475__$1;
(statearr_34482_35591[(2)] = inst_34471);

(statearr_34482_35591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (3))){
var inst_34473 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34475__$1,inst_34473);
} else {
if((state_val_34476 === (2))){
var inst_34445 = (state_34475[(10)]);
var inst_34447 = cljs.core.count(inst_34445);
var inst_34448 = (inst_34447 > (0));
var state_34475__$1 = state_34475;
if(cljs.core.truth_(inst_34448)){
var statearr_34484_35592 = state_34475__$1;
(statearr_34484_35592[(1)] = (4));

} else {
var statearr_34485_35593 = state_34475__$1;
(statearr_34485_35593[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (11))){
var inst_34445 = (state_34475[(10)]);
var inst_34464 = (state_34475[(2)]);
var tmp34483 = inst_34445;
var inst_34445__$1 = tmp34483;
var state_34475__$1 = (function (){var statearr_34486 = state_34475;
(statearr_34486[(11)] = inst_34464);

(statearr_34486[(10)] = inst_34445__$1);

return statearr_34486;
})();
var statearr_34487_35594 = state_34475__$1;
(statearr_34487_35594[(2)] = null);

(statearr_34487_35594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (9))){
var inst_34455 = (state_34475[(8)]);
var state_34475__$1 = state_34475;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34475__$1,(11),out,inst_34455);
} else {
if((state_val_34476 === (5))){
var inst_34469 = cljs.core.async.close_BANG_(out);
var state_34475__$1 = state_34475;
var statearr_34488_35601 = state_34475__$1;
(statearr_34488_35601[(2)] = inst_34469);

(statearr_34488_35601[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (10))){
var inst_34467 = (state_34475[(2)]);
var state_34475__$1 = state_34475;
var statearr_34489_35602 = state_34475__$1;
(statearr_34489_35602[(2)] = inst_34467);

(statearr_34489_35602[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34476 === (8))){
var inst_34454 = (state_34475[(7)]);
var inst_34455 = (state_34475[(8)]);
var inst_34456 = (state_34475[(9)]);
var inst_34445 = (state_34475[(10)]);
var inst_34459 = (function (){var cs = inst_34445;
var vec__34450 = inst_34454;
var v = inst_34455;
var c = inst_34456;
return ((function (cs,vec__34450,v,c,inst_34454,inst_34455,inst_34456,inst_34445,state_val_34476,c__33377__auto___35581,out){
return (function (p1__34441_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34441_SHARP_);
});
;})(cs,vec__34450,v,c,inst_34454,inst_34455,inst_34456,inst_34445,state_val_34476,c__33377__auto___35581,out))
})();
var inst_34460 = cljs.core.filterv(inst_34459,inst_34445);
var inst_34445__$1 = inst_34460;
var state_34475__$1 = (function (){var statearr_34490 = state_34475;
(statearr_34490[(10)] = inst_34445__$1);

return statearr_34490;
})();
var statearr_34491_35603 = state_34475__$1;
(statearr_34491_35603[(2)] = null);

(statearr_34491_35603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__33377__auto___35581,out))
;
return ((function (switch__33289__auto__,c__33377__auto___35581,out){
return (function() {
var cljs$core$async$state_machine__33290__auto__ = null;
var cljs$core$async$state_machine__33290__auto____0 = (function (){
var statearr_34492 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34492[(0)] = cljs$core$async$state_machine__33290__auto__);

(statearr_34492[(1)] = (1));

return statearr_34492;
});
var cljs$core$async$state_machine__33290__auto____1 = (function (state_34475){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_34475);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e34493){if((e34493 instanceof Object)){
var ex__33293__auto__ = e34493;
var statearr_34494_35610 = state_34475;
(statearr_34494_35610[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34493;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35611 = state_34475;
state_34475 = G__35611;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
cljs$core$async$state_machine__33290__auto__ = function(state_34475){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33290__auto____1.call(this,state_34475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33290__auto____0;
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33290__auto____1;
return cljs$core$async$state_machine__33290__auto__;
})()
;})(switch__33289__auto__,c__33377__auto___35581,out))
})();
var state__33379__auto__ = (function (){var statearr_34495 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_34495[(6)] = c__33377__auto___35581);

return statearr_34495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(c__33377__auto___35581,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34497 = arguments.length;
switch (G__34497) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33377__auto___35613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33377__auto___35613,out){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (c__33377__auto___35613,out){
return (function (state_34521){
var state_val_34522 = (state_34521[(1)]);
if((state_val_34522 === (7))){
var inst_34503 = (state_34521[(7)]);
var inst_34503__$1 = (state_34521[(2)]);
var inst_34504 = (inst_34503__$1 == null);
var inst_34505 = cljs.core.not(inst_34504);
var state_34521__$1 = (function (){var statearr_34523 = state_34521;
(statearr_34523[(7)] = inst_34503__$1);

return statearr_34523;
})();
if(inst_34505){
var statearr_34524_35614 = state_34521__$1;
(statearr_34524_35614[(1)] = (8));

} else {
var statearr_34525_35615 = state_34521__$1;
(statearr_34525_35615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34522 === (1))){
var inst_34498 = (0);
var state_34521__$1 = (function (){var statearr_34526 = state_34521;
(statearr_34526[(8)] = inst_34498);

return statearr_34526;
})();
var statearr_34527_35616 = state_34521__$1;
(statearr_34527_35616[(2)] = null);

(statearr_34527_35616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34522 === (4))){
var state_34521__$1 = state_34521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34521__$1,(7),ch);
} else {
if((state_val_34522 === (6))){
var inst_34516 = (state_34521[(2)]);
var state_34521__$1 = state_34521;
var statearr_34528_35623 = state_34521__$1;
(statearr_34528_35623[(2)] = inst_34516);

(statearr_34528_35623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34522 === (3))){
var inst_34518 = (state_34521[(2)]);
var inst_34519 = cljs.core.async.close_BANG_(out);
var state_34521__$1 = (function (){var statearr_34529 = state_34521;
(statearr_34529[(9)] = inst_34518);

return statearr_34529;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34521__$1,inst_34519);
} else {
if((state_val_34522 === (2))){
var inst_34498 = (state_34521[(8)]);
var inst_34500 = (inst_34498 < n);
var state_34521__$1 = state_34521;
if(cljs.core.truth_(inst_34500)){
var statearr_34530_35624 = state_34521__$1;
(statearr_34530_35624[(1)] = (4));

} else {
var statearr_34531_35625 = state_34521__$1;
(statearr_34531_35625[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34522 === (11))){
var inst_34498 = (state_34521[(8)]);
var inst_34508 = (state_34521[(2)]);
var inst_34509 = (inst_34498 + (1));
var inst_34498__$1 = inst_34509;
var state_34521__$1 = (function (){var statearr_34532 = state_34521;
(statearr_34532[(8)] = inst_34498__$1);

(statearr_34532[(10)] = inst_34508);

return statearr_34532;
})();
var statearr_34533_35626 = state_34521__$1;
(statearr_34533_35626[(2)] = null);

(statearr_34533_35626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34522 === (9))){
var state_34521__$1 = state_34521;
var statearr_34534_35630 = state_34521__$1;
(statearr_34534_35630[(2)] = null);

(statearr_34534_35630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34522 === (5))){
var state_34521__$1 = state_34521;
var statearr_34535_35631 = state_34521__$1;
(statearr_34535_35631[(2)] = null);

(statearr_34535_35631[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34522 === (10))){
var inst_34513 = (state_34521[(2)]);
var state_34521__$1 = state_34521;
var statearr_34536_35632 = state_34521__$1;
(statearr_34536_35632[(2)] = inst_34513);

(statearr_34536_35632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34522 === (8))){
var inst_34503 = (state_34521[(7)]);
var state_34521__$1 = state_34521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34521__$1,(11),out,inst_34503);
} else {
return null;
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
});})(c__33377__auto___35613,out))
;
return ((function (switch__33289__auto__,c__33377__auto___35613,out){
return (function() {
var cljs$core$async$state_machine__33290__auto__ = null;
var cljs$core$async$state_machine__33290__auto____0 = (function (){
var statearr_34537 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34537[(0)] = cljs$core$async$state_machine__33290__auto__);

(statearr_34537[(1)] = (1));

return statearr_34537;
});
var cljs$core$async$state_machine__33290__auto____1 = (function (state_34521){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_34521);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e34538){if((e34538 instanceof Object)){
var ex__33293__auto__ = e34538;
var statearr_34539_35633 = state_34521;
(statearr_34539_35633[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34538;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35634 = state_34521;
state_34521 = G__35634;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
cljs$core$async$state_machine__33290__auto__ = function(state_34521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33290__auto____1.call(this,state_34521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33290__auto____0;
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33290__auto____1;
return cljs$core$async$state_machine__33290__auto__;
})()
;})(switch__33289__auto__,c__33377__auto___35613,out))
})();
var state__33379__auto__ = (function (){var statearr_34540 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_34540[(6)] = c__33377__auto___35613);

return statearr_34540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(c__33377__auto___35613,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34542 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34542 = (function (f,ch,meta34543){
this.f = f;
this.ch = ch;
this.meta34543 = meta34543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34544,meta34543__$1){
var self__ = this;
var _34544__$1 = this;
return (new cljs.core.async.t_cljs$core$async34542(self__.f,self__.ch,meta34543__$1));
});

cljs.core.async.t_cljs$core$async34542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34544){
var self__ = this;
var _34544__$1 = this;
return self__.meta34543;
});

cljs.core.async.t_cljs$core$async34542.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34542.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34542.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34542.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34542.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34545 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34545 = (function (f,ch,meta34543,_,fn1,meta34546){
this.f = f;
this.ch = ch;
this.meta34543 = meta34543;
this._ = _;
this.fn1 = fn1;
this.meta34546 = meta34546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34547,meta34546__$1){
var self__ = this;
var _34547__$1 = this;
return (new cljs.core.async.t_cljs$core$async34545(self__.f,self__.ch,self__.meta34543,self__._,self__.fn1,meta34546__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34545.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34547){
var self__ = this;
var _34547__$1 = this;
return self__.meta34546;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34545.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34545.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34545.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34545.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34541_SHARP_){
var G__34548 = (((p1__34541_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34541_SHARP_) : self__.f.call(null,p1__34541_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34548) : f1.call(null,G__34548));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34545.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34543","meta34543",978882012,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34542","cljs.core.async/t_cljs$core$async34542",-248069707,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34546","meta34546",-9742122,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34545.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34545";

cljs.core.async.t_cljs$core$async34545.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34545");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34545.
 */
cljs.core.async.__GT_t_cljs$core$async34545 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34545(f__$1,ch__$1,meta34543__$1,___$2,fn1__$1,meta34546){
return (new cljs.core.async.t_cljs$core$async34545(f__$1,ch__$1,meta34543__$1,___$2,fn1__$1,meta34546));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34545(self__.f,self__.ch,self__.meta34543,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34549 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34549) : self__.f.call(null,G__34549));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34542.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34542.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34542.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34543","meta34543",978882012,null)], null);
});

cljs.core.async.t_cljs$core$async34542.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34542.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34542";

cljs.core.async.t_cljs$core$async34542.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34542");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34542.
 */
cljs.core.async.__GT_t_cljs$core$async34542 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34542(f__$1,ch__$1,meta34543){
return (new cljs.core.async.t_cljs$core$async34542(f__$1,ch__$1,meta34543));
});

}

return (new cljs.core.async.t_cljs$core$async34542(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34550 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34550 = (function (f,ch,meta34551){
this.f = f;
this.ch = ch;
this.meta34551 = meta34551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34552,meta34551__$1){
var self__ = this;
var _34552__$1 = this;
return (new cljs.core.async.t_cljs$core$async34550(self__.f,self__.ch,meta34551__$1));
});

cljs.core.async.t_cljs$core$async34550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34552){
var self__ = this;
var _34552__$1 = this;
return self__.meta34551;
});

cljs.core.async.t_cljs$core$async34550.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34550.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34550.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34550.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34550.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34550.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async34550.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34551","meta34551",1588382772,null)], null);
});

cljs.core.async.t_cljs$core$async34550.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34550.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34550";

cljs.core.async.t_cljs$core$async34550.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34550");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34550.
 */
cljs.core.async.__GT_t_cljs$core$async34550 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34550(f__$1,ch__$1,meta34551){
return (new cljs.core.async.t_cljs$core$async34550(f__$1,ch__$1,meta34551));
});

}

return (new cljs.core.async.t_cljs$core$async34550(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34553 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34553 = (function (p,ch,meta34554){
this.p = p;
this.ch = ch;
this.meta34554 = meta34554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34555,meta34554__$1){
var self__ = this;
var _34555__$1 = this;
return (new cljs.core.async.t_cljs$core$async34553(self__.p,self__.ch,meta34554__$1));
});

cljs.core.async.t_cljs$core$async34553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34555){
var self__ = this;
var _34555__$1 = this;
return self__.meta34554;
});

cljs.core.async.t_cljs$core$async34553.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34553.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34553.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34553.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34553.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34553.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34553.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34554","meta34554",198107121,null)], null);
});

cljs.core.async.t_cljs$core$async34553.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34553";

cljs.core.async.t_cljs$core$async34553.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34553");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34553.
 */
cljs.core.async.__GT_t_cljs$core$async34553 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34553(p__$1,ch__$1,meta34554){
return (new cljs.core.async.t_cljs$core$async34553(p__$1,ch__$1,meta34554));
});

}

return (new cljs.core.async.t_cljs$core$async34553(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34557 = arguments.length;
switch (G__34557) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33377__auto___35658 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33377__auto___35658,out){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (c__33377__auto___35658,out){
return (function (state_34578){
var state_val_34579 = (state_34578[(1)]);
if((state_val_34579 === (7))){
var inst_34574 = (state_34578[(2)]);
var state_34578__$1 = state_34578;
var statearr_34580_35660 = state_34578__$1;
(statearr_34580_35660[(2)] = inst_34574);

(statearr_34580_35660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34579 === (1))){
var state_34578__$1 = state_34578;
var statearr_34581_35661 = state_34578__$1;
(statearr_34581_35661[(2)] = null);

(statearr_34581_35661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34579 === (4))){
var inst_34560 = (state_34578[(7)]);
var inst_34560__$1 = (state_34578[(2)]);
var inst_34561 = (inst_34560__$1 == null);
var state_34578__$1 = (function (){var statearr_34582 = state_34578;
(statearr_34582[(7)] = inst_34560__$1);

return statearr_34582;
})();
if(cljs.core.truth_(inst_34561)){
var statearr_34583_35663 = state_34578__$1;
(statearr_34583_35663[(1)] = (5));

} else {
var statearr_34584_35664 = state_34578__$1;
(statearr_34584_35664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34579 === (6))){
var inst_34560 = (state_34578[(7)]);
var inst_34565 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34560) : p.call(null,inst_34560));
var state_34578__$1 = state_34578;
if(cljs.core.truth_(inst_34565)){
var statearr_34585_35666 = state_34578__$1;
(statearr_34585_35666[(1)] = (8));

} else {
var statearr_34586_35667 = state_34578__$1;
(statearr_34586_35667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34579 === (3))){
var inst_34576 = (state_34578[(2)]);
var state_34578__$1 = state_34578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34578__$1,inst_34576);
} else {
if((state_val_34579 === (2))){
var state_34578__$1 = state_34578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34578__$1,(4),ch);
} else {
if((state_val_34579 === (11))){
var inst_34568 = (state_34578[(2)]);
var state_34578__$1 = state_34578;
var statearr_34587_35668 = state_34578__$1;
(statearr_34587_35668[(2)] = inst_34568);

(statearr_34587_35668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34579 === (9))){
var state_34578__$1 = state_34578;
var statearr_34588_35669 = state_34578__$1;
(statearr_34588_35669[(2)] = null);

(statearr_34588_35669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34579 === (5))){
var inst_34563 = cljs.core.async.close_BANG_(out);
var state_34578__$1 = state_34578;
var statearr_34589_35670 = state_34578__$1;
(statearr_34589_35670[(2)] = inst_34563);

(statearr_34589_35670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34579 === (10))){
var inst_34571 = (state_34578[(2)]);
var state_34578__$1 = (function (){var statearr_34590 = state_34578;
(statearr_34590[(8)] = inst_34571);

return statearr_34590;
})();
var statearr_34591_35672 = state_34578__$1;
(statearr_34591_35672[(2)] = null);

(statearr_34591_35672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34579 === (8))){
var inst_34560 = (state_34578[(7)]);
var state_34578__$1 = state_34578;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34578__$1,(11),out,inst_34560);
} else {
return null;
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
});})(c__33377__auto___35658,out))
;
return ((function (switch__33289__auto__,c__33377__auto___35658,out){
return (function() {
var cljs$core$async$state_machine__33290__auto__ = null;
var cljs$core$async$state_machine__33290__auto____0 = (function (){
var statearr_34592 = [null,null,null,null,null,null,null,null,null];
(statearr_34592[(0)] = cljs$core$async$state_machine__33290__auto__);

(statearr_34592[(1)] = (1));

return statearr_34592;
});
var cljs$core$async$state_machine__33290__auto____1 = (function (state_34578){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_34578);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e34593){if((e34593 instanceof Object)){
var ex__33293__auto__ = e34593;
var statearr_34594_35674 = state_34578;
(statearr_34594_35674[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34593;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35675 = state_34578;
state_34578 = G__35675;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
cljs$core$async$state_machine__33290__auto__ = function(state_34578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33290__auto____1.call(this,state_34578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33290__auto____0;
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33290__auto____1;
return cljs$core$async$state_machine__33290__auto__;
})()
;})(switch__33289__auto__,c__33377__auto___35658,out))
})();
var state__33379__auto__ = (function (){var statearr_34595 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_34595[(6)] = c__33377__auto___35658);

return statearr_34595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(c__33377__auto___35658,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34597 = arguments.length;
switch (G__34597) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33377__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33377__auto__){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (c__33377__auto__){
return (function (state_34659){
var state_val_34660 = (state_34659[(1)]);
if((state_val_34660 === (7))){
var inst_34655 = (state_34659[(2)]);
var state_34659__$1 = state_34659;
var statearr_34661_35690 = state_34659__$1;
(statearr_34661_35690[(2)] = inst_34655);

(statearr_34661_35690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (20))){
var inst_34625 = (state_34659[(7)]);
var inst_34636 = (state_34659[(2)]);
var inst_34637 = cljs.core.next(inst_34625);
var inst_34611 = inst_34637;
var inst_34612 = null;
var inst_34613 = (0);
var inst_34614 = (0);
var state_34659__$1 = (function (){var statearr_34662 = state_34659;
(statearr_34662[(8)] = inst_34636);

(statearr_34662[(9)] = inst_34614);

(statearr_34662[(10)] = inst_34613);

(statearr_34662[(11)] = inst_34611);

(statearr_34662[(12)] = inst_34612);

return statearr_34662;
})();
var statearr_34663_35699 = state_34659__$1;
(statearr_34663_35699[(2)] = null);

(statearr_34663_35699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (1))){
var state_34659__$1 = state_34659;
var statearr_34664_35700 = state_34659__$1;
(statearr_34664_35700[(2)] = null);

(statearr_34664_35700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (4))){
var inst_34600 = (state_34659[(13)]);
var inst_34600__$1 = (state_34659[(2)]);
var inst_34601 = (inst_34600__$1 == null);
var state_34659__$1 = (function (){var statearr_34665 = state_34659;
(statearr_34665[(13)] = inst_34600__$1);

return statearr_34665;
})();
if(cljs.core.truth_(inst_34601)){
var statearr_34666_35701 = state_34659__$1;
(statearr_34666_35701[(1)] = (5));

} else {
var statearr_34667_35702 = state_34659__$1;
(statearr_34667_35702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (15))){
var state_34659__$1 = state_34659;
var statearr_34671_35703 = state_34659__$1;
(statearr_34671_35703[(2)] = null);

(statearr_34671_35703[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (21))){
var state_34659__$1 = state_34659;
var statearr_34672_35704 = state_34659__$1;
(statearr_34672_35704[(2)] = null);

(statearr_34672_35704[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (13))){
var inst_34614 = (state_34659[(9)]);
var inst_34613 = (state_34659[(10)]);
var inst_34611 = (state_34659[(11)]);
var inst_34612 = (state_34659[(12)]);
var inst_34621 = (state_34659[(2)]);
var inst_34622 = (inst_34614 + (1));
var tmp34668 = inst_34613;
var tmp34669 = inst_34611;
var tmp34670 = inst_34612;
var inst_34611__$1 = tmp34669;
var inst_34612__$1 = tmp34670;
var inst_34613__$1 = tmp34668;
var inst_34614__$1 = inst_34622;
var state_34659__$1 = (function (){var statearr_34673 = state_34659;
(statearr_34673[(14)] = inst_34621);

(statearr_34673[(9)] = inst_34614__$1);

(statearr_34673[(10)] = inst_34613__$1);

(statearr_34673[(11)] = inst_34611__$1);

(statearr_34673[(12)] = inst_34612__$1);

return statearr_34673;
})();
var statearr_34674_35713 = state_34659__$1;
(statearr_34674_35713[(2)] = null);

(statearr_34674_35713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (22))){
var state_34659__$1 = state_34659;
var statearr_34675_35718 = state_34659__$1;
(statearr_34675_35718[(2)] = null);

(statearr_34675_35718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (6))){
var inst_34600 = (state_34659[(13)]);
var inst_34609 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34600) : f.call(null,inst_34600));
var inst_34610 = cljs.core.seq(inst_34609);
var inst_34611 = inst_34610;
var inst_34612 = null;
var inst_34613 = (0);
var inst_34614 = (0);
var state_34659__$1 = (function (){var statearr_34676 = state_34659;
(statearr_34676[(9)] = inst_34614);

(statearr_34676[(10)] = inst_34613);

(statearr_34676[(11)] = inst_34611);

(statearr_34676[(12)] = inst_34612);

return statearr_34676;
})();
var statearr_34677_35726 = state_34659__$1;
(statearr_34677_35726[(2)] = null);

(statearr_34677_35726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (17))){
var inst_34625 = (state_34659[(7)]);
var inst_34629 = cljs.core.chunk_first(inst_34625);
var inst_34630 = cljs.core.chunk_rest(inst_34625);
var inst_34631 = cljs.core.count(inst_34629);
var inst_34611 = inst_34630;
var inst_34612 = inst_34629;
var inst_34613 = inst_34631;
var inst_34614 = (0);
var state_34659__$1 = (function (){var statearr_34678 = state_34659;
(statearr_34678[(9)] = inst_34614);

(statearr_34678[(10)] = inst_34613);

(statearr_34678[(11)] = inst_34611);

(statearr_34678[(12)] = inst_34612);

return statearr_34678;
})();
var statearr_34679_35734 = state_34659__$1;
(statearr_34679_35734[(2)] = null);

(statearr_34679_35734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (3))){
var inst_34657 = (state_34659[(2)]);
var state_34659__$1 = state_34659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34659__$1,inst_34657);
} else {
if((state_val_34660 === (12))){
var inst_34645 = (state_34659[(2)]);
var state_34659__$1 = state_34659;
var statearr_34680_35742 = state_34659__$1;
(statearr_34680_35742[(2)] = inst_34645);

(statearr_34680_35742[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (2))){
var state_34659__$1 = state_34659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34659__$1,(4),in$);
} else {
if((state_val_34660 === (23))){
var inst_34653 = (state_34659[(2)]);
var state_34659__$1 = state_34659;
var statearr_34681_35743 = state_34659__$1;
(statearr_34681_35743[(2)] = inst_34653);

(statearr_34681_35743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (19))){
var inst_34640 = (state_34659[(2)]);
var state_34659__$1 = state_34659;
var statearr_34682_35744 = state_34659__$1;
(statearr_34682_35744[(2)] = inst_34640);

(statearr_34682_35744[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (11))){
var inst_34625 = (state_34659[(7)]);
var inst_34611 = (state_34659[(11)]);
var inst_34625__$1 = cljs.core.seq(inst_34611);
var state_34659__$1 = (function (){var statearr_34683 = state_34659;
(statearr_34683[(7)] = inst_34625__$1);

return statearr_34683;
})();
if(inst_34625__$1){
var statearr_34684_35746 = state_34659__$1;
(statearr_34684_35746[(1)] = (14));

} else {
var statearr_34685_35747 = state_34659__$1;
(statearr_34685_35747[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (9))){
var inst_34647 = (state_34659[(2)]);
var inst_34648 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34659__$1 = (function (){var statearr_34686 = state_34659;
(statearr_34686[(15)] = inst_34647);

return statearr_34686;
})();
if(cljs.core.truth_(inst_34648)){
var statearr_34687_35748 = state_34659__$1;
(statearr_34687_35748[(1)] = (21));

} else {
var statearr_34688_35749 = state_34659__$1;
(statearr_34688_35749[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (5))){
var inst_34603 = cljs.core.async.close_BANG_(out);
var state_34659__$1 = state_34659;
var statearr_34689_35750 = state_34659__$1;
(statearr_34689_35750[(2)] = inst_34603);

(statearr_34689_35750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (14))){
var inst_34625 = (state_34659[(7)]);
var inst_34627 = cljs.core.chunked_seq_QMARK_(inst_34625);
var state_34659__$1 = state_34659;
if(inst_34627){
var statearr_34690_35751 = state_34659__$1;
(statearr_34690_35751[(1)] = (17));

} else {
var statearr_34691_35752 = state_34659__$1;
(statearr_34691_35752[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (16))){
var inst_34643 = (state_34659[(2)]);
var state_34659__$1 = state_34659;
var statearr_34692_35753 = state_34659__$1;
(statearr_34692_35753[(2)] = inst_34643);

(statearr_34692_35753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34660 === (10))){
var inst_34614 = (state_34659[(9)]);
var inst_34612 = (state_34659[(12)]);
var inst_34619 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34612,inst_34614);
var state_34659__$1 = state_34659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34659__$1,(13),out,inst_34619);
} else {
if((state_val_34660 === (18))){
var inst_34625 = (state_34659[(7)]);
var inst_34634 = cljs.core.first(inst_34625);
var state_34659__$1 = state_34659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34659__$1,(20),out,inst_34634);
} else {
if((state_val_34660 === (8))){
var inst_34614 = (state_34659[(9)]);
var inst_34613 = (state_34659[(10)]);
var inst_34616 = (inst_34614 < inst_34613);
var inst_34617 = inst_34616;
var state_34659__$1 = state_34659;
if(cljs.core.truth_(inst_34617)){
var statearr_34693_35754 = state_34659__$1;
(statearr_34693_35754[(1)] = (10));

} else {
var statearr_34694_35755 = state_34659__$1;
(statearr_34694_35755[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__33377__auto__))
;
return ((function (switch__33289__auto__,c__33377__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33290__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33290__auto____0 = (function (){
var statearr_34695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34695[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33290__auto__);

(statearr_34695[(1)] = (1));

return statearr_34695;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33290__auto____1 = (function (state_34659){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_34659);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e34696){if((e34696 instanceof Object)){
var ex__33293__auto__ = e34696;
var statearr_34697_35757 = state_34659;
(statearr_34697_35757[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34696;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35758 = state_34659;
state_34659 = G__35758;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33290__auto__ = function(state_34659){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33290__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33290__auto____1.call(this,state_34659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33290__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33290__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33290__auto__;
})()
;})(switch__33289__auto__,c__33377__auto__))
})();
var state__33379__auto__ = (function (){var statearr_34698 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_34698[(6)] = c__33377__auto__);

return statearr_34698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(c__33377__auto__))
);

return c__33377__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34700 = arguments.length;
switch (G__34700) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34702 = arguments.length;
switch (G__34702) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34704 = arguments.length;
switch (G__34704) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33377__auto___35791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33377__auto___35791,out){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (c__33377__auto___35791,out){
return (function (state_34728){
var state_val_34729 = (state_34728[(1)]);
if((state_val_34729 === (7))){
var inst_34723 = (state_34728[(2)]);
var state_34728__$1 = state_34728;
var statearr_34730_35800 = state_34728__$1;
(statearr_34730_35800[(2)] = inst_34723);

(statearr_34730_35800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (1))){
var inst_34705 = null;
var state_34728__$1 = (function (){var statearr_34731 = state_34728;
(statearr_34731[(7)] = inst_34705);

return statearr_34731;
})();
var statearr_34732_35807 = state_34728__$1;
(statearr_34732_35807[(2)] = null);

(statearr_34732_35807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (4))){
var inst_34708 = (state_34728[(8)]);
var inst_34708__$1 = (state_34728[(2)]);
var inst_34709 = (inst_34708__$1 == null);
var inst_34710 = cljs.core.not(inst_34709);
var state_34728__$1 = (function (){var statearr_34733 = state_34728;
(statearr_34733[(8)] = inst_34708__$1);

return statearr_34733;
})();
if(inst_34710){
var statearr_34734_35819 = state_34728__$1;
(statearr_34734_35819[(1)] = (5));

} else {
var statearr_34735_35820 = state_34728__$1;
(statearr_34735_35820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (6))){
var state_34728__$1 = state_34728;
var statearr_34736_35822 = state_34728__$1;
(statearr_34736_35822[(2)] = null);

(statearr_34736_35822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (3))){
var inst_34725 = (state_34728[(2)]);
var inst_34726 = cljs.core.async.close_BANG_(out);
var state_34728__$1 = (function (){var statearr_34737 = state_34728;
(statearr_34737[(9)] = inst_34725);

return statearr_34737;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34728__$1,inst_34726);
} else {
if((state_val_34729 === (2))){
var state_34728__$1 = state_34728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34728__$1,(4),ch);
} else {
if((state_val_34729 === (11))){
var inst_34708 = (state_34728[(8)]);
var inst_34717 = (state_34728[(2)]);
var inst_34705 = inst_34708;
var state_34728__$1 = (function (){var statearr_34738 = state_34728;
(statearr_34738[(10)] = inst_34717);

(statearr_34738[(7)] = inst_34705);

return statearr_34738;
})();
var statearr_34739_35841 = state_34728__$1;
(statearr_34739_35841[(2)] = null);

(statearr_34739_35841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (9))){
var inst_34708 = (state_34728[(8)]);
var state_34728__$1 = state_34728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34728__$1,(11),out,inst_34708);
} else {
if((state_val_34729 === (5))){
var inst_34708 = (state_34728[(8)]);
var inst_34705 = (state_34728[(7)]);
var inst_34712 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34708,inst_34705);
var state_34728__$1 = state_34728;
if(inst_34712){
var statearr_34741_35854 = state_34728__$1;
(statearr_34741_35854[(1)] = (8));

} else {
var statearr_34742_35855 = state_34728__$1;
(statearr_34742_35855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (10))){
var inst_34720 = (state_34728[(2)]);
var state_34728__$1 = state_34728;
var statearr_34743_35856 = state_34728__$1;
(statearr_34743_35856[(2)] = inst_34720);

(statearr_34743_35856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34729 === (8))){
var inst_34705 = (state_34728[(7)]);
var tmp34740 = inst_34705;
var inst_34705__$1 = tmp34740;
var state_34728__$1 = (function (){var statearr_34744 = state_34728;
(statearr_34744[(7)] = inst_34705__$1);

return statearr_34744;
})();
var statearr_34745_35858 = state_34728__$1;
(statearr_34745_35858[(2)] = null);

(statearr_34745_35858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__33377__auto___35791,out))
;
return ((function (switch__33289__auto__,c__33377__auto___35791,out){
return (function() {
var cljs$core$async$state_machine__33290__auto__ = null;
var cljs$core$async$state_machine__33290__auto____0 = (function (){
var statearr_34746 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34746[(0)] = cljs$core$async$state_machine__33290__auto__);

(statearr_34746[(1)] = (1));

return statearr_34746;
});
var cljs$core$async$state_machine__33290__auto____1 = (function (state_34728){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_34728);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e34747){if((e34747 instanceof Object)){
var ex__33293__auto__ = e34747;
var statearr_34748_35860 = state_34728;
(statearr_34748_35860[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34747;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35861 = state_34728;
state_34728 = G__35861;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
cljs$core$async$state_machine__33290__auto__ = function(state_34728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33290__auto____1.call(this,state_34728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33290__auto____0;
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33290__auto____1;
return cljs$core$async$state_machine__33290__auto__;
})()
;})(switch__33289__auto__,c__33377__auto___35791,out))
})();
var state__33379__auto__ = (function (){var statearr_34749 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_34749[(6)] = c__33377__auto___35791);

return statearr_34749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(c__33377__auto___35791,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34751 = arguments.length;
switch (G__34751) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33377__auto___35864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33377__auto___35864,out){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (c__33377__auto___35864,out){
return (function (state_34789){
var state_val_34790 = (state_34789[(1)]);
if((state_val_34790 === (7))){
var inst_34785 = (state_34789[(2)]);
var state_34789__$1 = state_34789;
var statearr_34791_35865 = state_34789__$1;
(statearr_34791_35865[(2)] = inst_34785);

(statearr_34791_35865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (1))){
var inst_34752 = (new Array(n));
var inst_34753 = inst_34752;
var inst_34754 = (0);
var state_34789__$1 = (function (){var statearr_34792 = state_34789;
(statearr_34792[(7)] = inst_34753);

(statearr_34792[(8)] = inst_34754);

return statearr_34792;
})();
var statearr_34793_35868 = state_34789__$1;
(statearr_34793_35868[(2)] = null);

(statearr_34793_35868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (4))){
var inst_34757 = (state_34789[(9)]);
var inst_34757__$1 = (state_34789[(2)]);
var inst_34758 = (inst_34757__$1 == null);
var inst_34759 = cljs.core.not(inst_34758);
var state_34789__$1 = (function (){var statearr_34794 = state_34789;
(statearr_34794[(9)] = inst_34757__$1);

return statearr_34794;
})();
if(inst_34759){
var statearr_34795_35870 = state_34789__$1;
(statearr_34795_35870[(1)] = (5));

} else {
var statearr_34796_35871 = state_34789__$1;
(statearr_34796_35871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (15))){
var inst_34779 = (state_34789[(2)]);
var state_34789__$1 = state_34789;
var statearr_34797_35872 = state_34789__$1;
(statearr_34797_35872[(2)] = inst_34779);

(statearr_34797_35872[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (13))){
var state_34789__$1 = state_34789;
var statearr_34798_35877 = state_34789__$1;
(statearr_34798_35877[(2)] = null);

(statearr_34798_35877[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (6))){
var inst_34754 = (state_34789[(8)]);
var inst_34775 = (inst_34754 > (0));
var state_34789__$1 = state_34789;
if(cljs.core.truth_(inst_34775)){
var statearr_34799_35882 = state_34789__$1;
(statearr_34799_35882[(1)] = (12));

} else {
var statearr_34800_35883 = state_34789__$1;
(statearr_34800_35883[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (3))){
var inst_34787 = (state_34789[(2)]);
var state_34789__$1 = state_34789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34789__$1,inst_34787);
} else {
if((state_val_34790 === (12))){
var inst_34753 = (state_34789[(7)]);
var inst_34777 = cljs.core.vec(inst_34753);
var state_34789__$1 = state_34789;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34789__$1,(15),out,inst_34777);
} else {
if((state_val_34790 === (2))){
var state_34789__$1 = state_34789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34789__$1,(4),ch);
} else {
if((state_val_34790 === (11))){
var inst_34769 = (state_34789[(2)]);
var inst_34770 = (new Array(n));
var inst_34753 = inst_34770;
var inst_34754 = (0);
var state_34789__$1 = (function (){var statearr_34801 = state_34789;
(statearr_34801[(10)] = inst_34769);

(statearr_34801[(7)] = inst_34753);

(statearr_34801[(8)] = inst_34754);

return statearr_34801;
})();
var statearr_34802_35889 = state_34789__$1;
(statearr_34802_35889[(2)] = null);

(statearr_34802_35889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (9))){
var inst_34753 = (state_34789[(7)]);
var inst_34767 = cljs.core.vec(inst_34753);
var state_34789__$1 = state_34789;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34789__$1,(11),out,inst_34767);
} else {
if((state_val_34790 === (5))){
var inst_34753 = (state_34789[(7)]);
var inst_34757 = (state_34789[(9)]);
var inst_34754 = (state_34789[(8)]);
var inst_34762 = (state_34789[(11)]);
var inst_34761 = (inst_34753[inst_34754] = inst_34757);
var inst_34762__$1 = (inst_34754 + (1));
var inst_34763 = (inst_34762__$1 < n);
var state_34789__$1 = (function (){var statearr_34803 = state_34789;
(statearr_34803[(12)] = inst_34761);

(statearr_34803[(11)] = inst_34762__$1);

return statearr_34803;
})();
if(cljs.core.truth_(inst_34763)){
var statearr_34804_35898 = state_34789__$1;
(statearr_34804_35898[(1)] = (8));

} else {
var statearr_34805_35899 = state_34789__$1;
(statearr_34805_35899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (14))){
var inst_34782 = (state_34789[(2)]);
var inst_34783 = cljs.core.async.close_BANG_(out);
var state_34789__$1 = (function (){var statearr_34807 = state_34789;
(statearr_34807[(13)] = inst_34782);

return statearr_34807;
})();
var statearr_34808_35900 = state_34789__$1;
(statearr_34808_35900[(2)] = inst_34783);

(statearr_34808_35900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (10))){
var inst_34773 = (state_34789[(2)]);
var state_34789__$1 = state_34789;
var statearr_34809_35901 = state_34789__$1;
(statearr_34809_35901[(2)] = inst_34773);

(statearr_34809_35901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (8))){
var inst_34753 = (state_34789[(7)]);
var inst_34762 = (state_34789[(11)]);
var tmp34806 = inst_34753;
var inst_34753__$1 = tmp34806;
var inst_34754 = inst_34762;
var state_34789__$1 = (function (){var statearr_34810 = state_34789;
(statearr_34810[(7)] = inst_34753__$1);

(statearr_34810[(8)] = inst_34754);

return statearr_34810;
})();
var statearr_34811_35902 = state_34789__$1;
(statearr_34811_35902[(2)] = null);

(statearr_34811_35902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__33377__auto___35864,out))
;
return ((function (switch__33289__auto__,c__33377__auto___35864,out){
return (function() {
var cljs$core$async$state_machine__33290__auto__ = null;
var cljs$core$async$state_machine__33290__auto____0 = (function (){
var statearr_34812 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34812[(0)] = cljs$core$async$state_machine__33290__auto__);

(statearr_34812[(1)] = (1));

return statearr_34812;
});
var cljs$core$async$state_machine__33290__auto____1 = (function (state_34789){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_34789);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e34813){if((e34813 instanceof Object)){
var ex__33293__auto__ = e34813;
var statearr_34814_35906 = state_34789;
(statearr_34814_35906[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34813;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35912 = state_34789;
state_34789 = G__35912;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
cljs$core$async$state_machine__33290__auto__ = function(state_34789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33290__auto____1.call(this,state_34789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33290__auto____0;
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33290__auto____1;
return cljs$core$async$state_machine__33290__auto__;
})()
;})(switch__33289__auto__,c__33377__auto___35864,out))
})();
var state__33379__auto__ = (function (){var statearr_34815 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_34815[(6)] = c__33377__auto___35864);

return statearr_34815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(c__33377__auto___35864,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34817 = arguments.length;
switch (G__34817) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33377__auto___35962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33377__auto___35962,out){
return (function (){
var f__33378__auto__ = (function (){var switch__33289__auto__ = ((function (c__33377__auto___35962,out){
return (function (state_34859){
var state_val_34860 = (state_34859[(1)]);
if((state_val_34860 === (7))){
var inst_34855 = (state_34859[(2)]);
var state_34859__$1 = state_34859;
var statearr_34861_35963 = state_34859__$1;
(statearr_34861_35963[(2)] = inst_34855);

(statearr_34861_35963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (1))){
var inst_34818 = [];
var inst_34819 = inst_34818;
var inst_34820 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34859__$1 = (function (){var statearr_34862 = state_34859;
(statearr_34862[(7)] = inst_34819);

(statearr_34862[(8)] = inst_34820);

return statearr_34862;
})();
var statearr_34863_35964 = state_34859__$1;
(statearr_34863_35964[(2)] = null);

(statearr_34863_35964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (4))){
var inst_34823 = (state_34859[(9)]);
var inst_34823__$1 = (state_34859[(2)]);
var inst_34824 = (inst_34823__$1 == null);
var inst_34825 = cljs.core.not(inst_34824);
var state_34859__$1 = (function (){var statearr_34864 = state_34859;
(statearr_34864[(9)] = inst_34823__$1);

return statearr_34864;
})();
if(inst_34825){
var statearr_34865_35965 = state_34859__$1;
(statearr_34865_35965[(1)] = (5));

} else {
var statearr_34866_35966 = state_34859__$1;
(statearr_34866_35966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (15))){
var inst_34849 = (state_34859[(2)]);
var state_34859__$1 = state_34859;
var statearr_34867_35967 = state_34859__$1;
(statearr_34867_35967[(2)] = inst_34849);

(statearr_34867_35967[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (13))){
var state_34859__$1 = state_34859;
var statearr_34868_35968 = state_34859__$1;
(statearr_34868_35968[(2)] = null);

(statearr_34868_35968[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (6))){
var inst_34819 = (state_34859[(7)]);
var inst_34844 = inst_34819.length;
var inst_34845 = (inst_34844 > (0));
var state_34859__$1 = state_34859;
if(cljs.core.truth_(inst_34845)){
var statearr_34869_35969 = state_34859__$1;
(statearr_34869_35969[(1)] = (12));

} else {
var statearr_34870_35970 = state_34859__$1;
(statearr_34870_35970[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (3))){
var inst_34857 = (state_34859[(2)]);
var state_34859__$1 = state_34859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34859__$1,inst_34857);
} else {
if((state_val_34860 === (12))){
var inst_34819 = (state_34859[(7)]);
var inst_34847 = cljs.core.vec(inst_34819);
var state_34859__$1 = state_34859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34859__$1,(15),out,inst_34847);
} else {
if((state_val_34860 === (2))){
var state_34859__$1 = state_34859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34859__$1,(4),ch);
} else {
if((state_val_34860 === (11))){
var inst_34823 = (state_34859[(9)]);
var inst_34827 = (state_34859[(10)]);
var inst_34837 = (state_34859[(2)]);
var inst_34838 = [];
var inst_34839 = inst_34838.push(inst_34823);
var inst_34819 = inst_34838;
var inst_34820 = inst_34827;
var state_34859__$1 = (function (){var statearr_34871 = state_34859;
(statearr_34871[(7)] = inst_34819);

(statearr_34871[(11)] = inst_34837);

(statearr_34871[(12)] = inst_34839);

(statearr_34871[(8)] = inst_34820);

return statearr_34871;
})();
var statearr_34872_35972 = state_34859__$1;
(statearr_34872_35972[(2)] = null);

(statearr_34872_35972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (9))){
var inst_34819 = (state_34859[(7)]);
var inst_34835 = cljs.core.vec(inst_34819);
var state_34859__$1 = state_34859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34859__$1,(11),out,inst_34835);
} else {
if((state_val_34860 === (5))){
var inst_34823 = (state_34859[(9)]);
var inst_34827 = (state_34859[(10)]);
var inst_34820 = (state_34859[(8)]);
var inst_34827__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34823) : f.call(null,inst_34823));
var inst_34828 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34827__$1,inst_34820);
var inst_34829 = cljs.core.keyword_identical_QMARK_(inst_34820,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34830 = ((inst_34828) || (inst_34829));
var state_34859__$1 = (function (){var statearr_34873 = state_34859;
(statearr_34873[(10)] = inst_34827__$1);

return statearr_34873;
})();
if(cljs.core.truth_(inst_34830)){
var statearr_34874_35973 = state_34859__$1;
(statearr_34874_35973[(1)] = (8));

} else {
var statearr_34875_35974 = state_34859__$1;
(statearr_34875_35974[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (14))){
var inst_34852 = (state_34859[(2)]);
var inst_34853 = cljs.core.async.close_BANG_(out);
var state_34859__$1 = (function (){var statearr_34877 = state_34859;
(statearr_34877[(13)] = inst_34852);

return statearr_34877;
})();
var statearr_34878_35975 = state_34859__$1;
(statearr_34878_35975[(2)] = inst_34853);

(statearr_34878_35975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (10))){
var inst_34842 = (state_34859[(2)]);
var state_34859__$1 = state_34859;
var statearr_34879_35976 = state_34859__$1;
(statearr_34879_35976[(2)] = inst_34842);

(statearr_34879_35976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34860 === (8))){
var inst_34819 = (state_34859[(7)]);
var inst_34823 = (state_34859[(9)]);
var inst_34827 = (state_34859[(10)]);
var inst_34832 = inst_34819.push(inst_34823);
var tmp34876 = inst_34819;
var inst_34819__$1 = tmp34876;
var inst_34820 = inst_34827;
var state_34859__$1 = (function (){var statearr_34880 = state_34859;
(statearr_34880[(7)] = inst_34819__$1);

(statearr_34880[(14)] = inst_34832);

(statearr_34880[(8)] = inst_34820);

return statearr_34880;
})();
var statearr_34881_35977 = state_34859__$1;
(statearr_34881_35977[(2)] = null);

(statearr_34881_35977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__33377__auto___35962,out))
;
return ((function (switch__33289__auto__,c__33377__auto___35962,out){
return (function() {
var cljs$core$async$state_machine__33290__auto__ = null;
var cljs$core$async$state_machine__33290__auto____0 = (function (){
var statearr_34882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34882[(0)] = cljs$core$async$state_machine__33290__auto__);

(statearr_34882[(1)] = (1));

return statearr_34882;
});
var cljs$core$async$state_machine__33290__auto____1 = (function (state_34859){
while(true){
var ret_value__33291__auto__ = (function (){try{while(true){
var result__33292__auto__ = switch__33289__auto__(state_34859);
if(cljs.core.keyword_identical_QMARK_(result__33292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33292__auto__;
}
break;
}
}catch (e34883){if((e34883 instanceof Object)){
var ex__33293__auto__ = e34883;
var statearr_34884_35998 = state_34859;
(statearr_34884_35998[(5)] = ex__33293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34883;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35999 = state_34859;
state_34859 = G__35999;
continue;
} else {
return ret_value__33291__auto__;
}
break;
}
});
cljs$core$async$state_machine__33290__auto__ = function(state_34859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33290__auto____1.call(this,state_34859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33290__auto____0;
cljs$core$async$state_machine__33290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33290__auto____1;
return cljs$core$async$state_machine__33290__auto__;
})()
;})(switch__33289__auto__,c__33377__auto___35962,out))
})();
var state__33379__auto__ = (function (){var statearr_34885 = (f__33378__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33378__auto__.cljs$core$IFn$_invoke$arity$0() : f__33378__auto__.call(null));
(statearr_34885[(6)] = c__33377__auto___35962);

return statearr_34885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33379__auto__);
});})(c__33377__auto___35962,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
