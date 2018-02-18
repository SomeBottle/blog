(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"村民交易生成器_atlas_", frames: [[0,1081,301,600],[303,602,301,600],[606,602,301,600],[486,0,301,600],[0,479,301,600],[303,1530,600,134],[0,0,484,477],[303,1204,400,324]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._301pxBlacksmith = function() {
	this.spriteSheet = ss["村民交易生成器_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._301pxButcher = function() {
	this.spriteSheet = ss["村民交易生成器_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._301pxFarmer = function() {
	this.spriteSheet = ss["村民交易生成器_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._301pxLibrarian = function() {
	this.spriteSheet = ss["村民交易生成器_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._301pxPriest = function() {
	this.spriteSheet = ss["村民交易生成器_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.DealWithItGlasses1 = function() {
	this.spriteSheet = ss["村民交易生成器_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.e8cf2e4803efdd2455ea722c31d155e13ab9811d = function() {
	this.spriteSheet = ss["村民交易生成器_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Spliff = function() {
	this.spriteSheet = ss["村民交易生成器_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.whitemask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg+fAjKMAAAhGTMB8/AAAMAAABGTg");
	this.shape.setTransform(400,225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.whitemask, new cjs.Rectangle(0,0,800,450), null);


(lib.vc0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["村民交易生成器_atlas_"],2), null, new cjs.Matrix2D(0.535,0,0,0.535,-80.5,-160.5)).s().p("AskZFMAAAgyJIZJAAMAAAAyJg");
	this.shape.setTransform(80.5,160.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.vc0, new cjs.Rectangle(0,0,161.1,321.1), null);


(lib.v4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["村民交易生成器_atlas_"],1), null, new cjs.Matrix2D(0.535,0,0,0.535,-80.5,-160.5)).s().p("AskZFMAAAgyJIZJAAMAAAAyJg");
	this.shape.setTransform(80.5,160.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.v4, new cjs.Rectangle(0,0,161.1,321.1), null);


(lib.v3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["村民交易生成器_atlas_"],0), null, new cjs.Matrix2D(0.535,0,0,0.535,-80.5,-160.5)).s().p("AskZFMAAAgyJIZJAAMAAAAyJg");
	this.shape.setTransform(80.5,160.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.v3, new cjs.Rectangle(0,0,161.1,321.1), null);


(lib.v2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["村民交易生成器_atlas_"],4), null, new cjs.Matrix2D(0.535,0,0,0.535,-80.5,-160.5)).s().p("AskZFMAAAgyJIZJAAMAAAAyJg");
	this.shape.setTransform(80.5,160.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.v2, new cjs.Rectangle(0,0,161.1,321.1), null);


(lib.v001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["村民交易生成器_atlas_"],3), null, new cjs.Matrix2D(0.535,0,0,0.535,-80.5,-160.5)).s().p("AskZFMAAAgyJIZJAAMAAAAyJg");
	this.shape.setTransform(80.5,160.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.v001, new cjs.Rectangle(0,0,161.1,321.1), null);


(lib.v1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["村民交易生成器_atlas_"],3), null, new cjs.Matrix2D(0.535,0,0,0.535,-80.5,-160.5)).s().p("AskZFMAAAgyJIZJAAMAAAAyJg");
	this.shape.setTransform(80.5,160.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.v1, new cjs.Rectangle(0,0,161.1,321.1), null);


(lib.v0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["村民交易生成器_atlas_"],2), null, new cjs.Matrix2D(0.535,0,0,0.535,-80.5,-160.5)).s().p("AskZFMAAAgyJIZJAAMAAAAyJg");
	this.shape.setTransform(80.5,160.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.v0, new cjs.Rectangle(0,0,161.1,321.1), null);


(lib.tuotuo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("ABpAAQAAAsgfAeQgeAfgsAAQgrAAgegfQgfgeAAgsQAAgrAfgeQAegfArAAQAsAAAeAfQAfAeAAArg");
	this.shape.setTransform(10.5,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhJBKQgegfgBgrQABgrAegeQAegeArgBQArABAfAeQAfAegBArQABArgfAfQgfAfgrgBQgrABgegfg");
	this.shape_1.setTransform(10.5,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tuotuo, new cjs.Rectangle(-1.5,-1.5,23.9,23.9), null);


(lib.titleauthor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqGB9IAAgMQAFABAGABQAPAAAJgWIAMgdIgxh/IANAAIAnBpIACAEIABAFIABAAIAthyIAMAAIg/CbQgHARgIAJQgJAIgOAAQgFAAgFgBgAKkAzQgPgTAAggQAAgcAQgTQAQgTAaAAQAYAAANAQQANASAAAdIAAAEIhgAAQAAAbAMAPQAMAPAWAAQAWAAAVgQIAAAMQgVAPgYAAQgZAAgQgSgAKwgsQgMANgDAWIBUAAQgBgWgKgMQgKgMgSAAQgSgBgMAMgAFFAyQgRgTAAgeQAAgfARgSQASgSAcAAQAcAAAQASQAQASAAAfQAAAegRATQgQASgcABQgdgBgQgSgAFOgoQgOAPAAAbQAAAZAOAQQANAPAXAAQAXAAANgPQANgQAAgbQAAgagNgPQgNgPgXABQgXAAgNAPgAA0AzQgQgTAAggQAAgcAQgTQAQgTAaAAQAYAAANAQQANASAAAdIAAAEIhgAAQAAAbANAPQAMAPAVAAQAWAAAVgQIAAAMQgUAPgZAAQgZAAgPgSgABAgsQgMANgDAWIBTAAQgBgWgKgMQgKgMgRAAQgTgBgLAMgAkxAyQgQgTAAgeQAAgfARgSQARgSAcAAQAcAAAQASQAQASAAAfQAAAegQATQgQASgdABQgcgBgRgSgAkogoQgNAPAAAbQAAAZANAQQANAPAXAAQAYAAAMgPQANgQAAgbQAAgagMgPQgNgPgXABQgXAAgOAPgAmpBBQgNgCgGgEIAAgOQATAMAUAAQAWAAALgJQALgIAAgQQAAgOgIgJQgHgHgZgOQgbgQgIgLQgHgLAAgOQAAgTAPgOQAPgNAZAAQAQAAAQAFIAAAOQgQgIgSAAQgSAAgLAKQgLAJAAAPQAAAOAHAHQAIAJAYAOQAaAOAIAMQAJAKAAAOQAAAVgPANQgOAOgbAAQgJAAgMgEgAIiAiIAAhXIgYAAIAAgKIAYAAIAAgiIAFgBIAGgCIAAAlIAiAAIAAAKIgiAAIAABVQAAANAEAHQAFAFAKAAQAHABAIgFIAAAKQgJAFgIAAQgcAAAAgigAHVAiIAAhXIgYAAIAAgKIAYAAIAAgiIAFgBIAGgCIAAAlIAiAAIAAAKIgiAAIAABVQAAANAEAHQAFAFAKAAQAHABAIgFIAAAKQgJAFgIAAQgcAAAAgigAJpBBIAAi/IAMAAIAAC/gACzBBIAAi0IAwAAQAVAAANALQAMAMAAATQAAAQgIAMQgIALgPAFIAAABQASABALAMQALALAAASQAAAWgPAPQgOAOgZAAgADAA2IAhAAQAWAAALgKQALgKAAgTQAAglgzAAIgaAAgADAghIAZAAQAUAAAMgLQALgKAAgRQAAghgmAAIgeAAgAgEBBIAAhMQAAgZgIgKQgHgJgRAAQgPgBgLANQgLANAAAVIAABKIgMAAIAAhNQAAgsghABQgQgBgKANQgLAOAAAVIAABJIgMAAIAAiAIAMAAIAAAVIABAAQANgZAaABQAOgBALAJQAKAIADAOQAGgOAMgJQALgHANAAQAqAAAAA0IAABPgAsABBIAAi0IAwAAQAVAAANALQAMAMAAATQAAAQgIAMQgIALgPAFIAAABQASABALAMQALALAAASQAAAWgPAPQgOAOgZAAgArzA2IAhAAQAWAAALgKQALgKAAgTQAAglgzAAIgaAAgArzghIAZAAQAUAAAMgLQALgKAAgRQAAghgmAAIgeAAg");
	this.shape.setTransform(76.9,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.titleauthor, new cjs.Rectangle(0,0,153.8,25.3), null);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.versi.text=window.mainroo.version;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Part 1
	this.versi = new cjs.Text("Ver", "24px 'Microsoft YaHei Light'", "#FFFFFF");
	this.versi.name = "versi";
	this.versi.lineHeight = 33;
	this.versi.lineWidth = 177;
	this.versi.parent = this;
	this.versi.setTransform(257.3,-2.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHhDYIAAgLQAGAFAIACQAIADAFAAQAaAAAAgVQAAgHgGgFQgGgFgMgFQgQgHgGgHQgGgIAAgKQAAgNAKgIQAKgIAPAAQAOAAAKAFIAAALQgMgIgNAAQgLAAgGAGQgHAGAAAIQAAAIAEAFQAEAFAOAGQARAIAHAGQAGAGAAALQAAANgKAIQgJAJgRAAQgQAAgLgIgAF/DRQgNgPAAgbQAAgYAOgQQANgQAWAAQAUAAALAOQAKAOAAAYIAAAFIhQAAQAAAWALANQAKAMASAAQASAAARgNIAAAKQgQAMgVAAQgVAAgNgPgAGJCCQgKAKgCATIBFAAQAAgTgJgKQgIgLgPAAQgPAAgKALgACeDRQgNgPAAgbQAAgYAOgQQANgQAWAAQAUAAALAOQAKAOAAAYIAAAFIhQAAQAAAWALANQAKAMASAAQASAAARgNIAAAKQgQAMgVAAQgVAAgNgPgACoCCQgKAKgCATIBFAAQAAgTgJgKQgIgLgPAAQgPAAgKALgAA7DdQgLgCgFgDIAAgMQAQAKARAAQASAAAJgHQAJgHAAgOQAAgLgGgHQgGgHgVgMQgXgNgGgJQgGgJAAgMQAAgQAMgLQANgMAUAAQAOAAANAFIAAALQgNgGgPAAQgPAAgJAIQgJAIAAAMQAAALAGAHQAGAHAUAMQAWAMAHAJQAHAJAAANQAAARgMALQgNALgWAAQgHAAgKgDgAh0DRQgNgPAAgbQAAgYAOgQQANgQAWAAQAUAAALAOQAKAOAAAYIAAAFIhQAAQAAAWALANQAKAMASAAQASAAARgNIAAAKQgQAMgVAAQgVAAgNgPgAhqCCQgKAKgCATIBFAAQAAgTgJgKQgIgLgPAAQgPAAgKALgAmZDQQgNgPAAgZQAAgbAOgPQAPgPAXAAQAXAAAOAPQANAPAAAaQAAAagOAPQgNAQgYAAQgYAAgOgQgAmRCEQgLANAAAXQAAAVALANQALANATAAQAUAAAKgNQALgMAAgXQAAgXgLgMQgKgNgTAAQgTAAgMANgAp7DRQgNgPAAgbQAAgYANgQQAOgQAVAAQAUAAALAOQALAOAAAYIAAAFIhQAAQAAAWAKANQAKAMASAAQATAAARgNIAAAKQgRAMgVAAQgUAAgNgPgApxCCQgKAKgDATIBGAAQgBgTgIgKQgJgLgOAAQgPAAgKALgAulDQQgOgPAAgZQAAgbAPgPQAOgPAYAAQAXAAANAPQANAPAAAaQAAAagNAPQgOAQgYAAQgXAAgOgQgAudCEQgMANAAAXQAAAVAMANQALANATAAQATAAALgNQAKgMAAgXQAAgXgKgMQgLgNgTAAQgTAAgLANgAwJDdQgLgCgFgDIAAgMQAQAKARAAQASAAAJgHQAJgHAAgOQAAgLgGgHQgGgHgVgMQgXgNgGgJQgGgJAAgMQAAgQAMgLQANgMAUAAQAOAAANAFIAAALQgNgGgPAAQgPAAgJAIQgJAIAAAMQAAALAGAHQAGAHAUAMQAWAMAHAJQAHAJAAANQAAARgMALQgNALgWAAQgHAAgKgDgAjhDDIAAhJIgTAAIAAgJIATAAIAAgcIAFgBIAFgCIAAAfIAcAAIAAAJIgcAAIAABHQAAAMADAFQAEAFAIAAQAGAAAHgEIAAAJQgHADgHAAQgYAAAAgcgAkhDDIAAhJIgTAAIAAgJIATAAIAAgcIAFgBIAFgCIAAAfIAcAAIAAAJIgcAAIAABHQAAAMADAFQAEAFAIAAQAGAAAHgEIAAAJQgHADgHAAQgYAAAAgcgAFODdIAAhsIAJAAIAABsgAEGDdIAAhsIAKAAIAAAYQAEgMAIgHQAIgHAKAAQAGAAAFACIAAAKQgFgDgGAAQgNAAgJANQgIANAAAZIAAAygAilDdIAAigIAJAAIAACggAoRDdIAAiXIAnAAQASAAALAKQAKAJAAAQQAAANgHAKQgHAJgMAFQAPABAKAKQAJAKAAAPQAAATgNAMQgMAMgVAAgAoHDUIAcAAQASAAAJgJQAKgIAAgQQAAgfgrAAIgWAAgAoHCKIAVAAQARAAAKgIQAJgJAAgOQAAgbggAAIgZAAgAqrDdIAAhBQAAgUgGgIQgGgJgOAAQgNAAgJALQgJALAAARIAAA/IgKAAIAAhBQAAglgcAAQgNAAgJAMQgIALAAARIAAA+IgKAAIAAhsIAKAAIAAASIAAAAQALgUAWAAQAMAAAIAGQAJAHADALQAFgLAJgHQAKgGALAAQAjAAAAArIAABDgAFNBUQgDgDAAgDQAAgEADgCQACgCADAAQAEAAACACQADACAAAEQAAADgDADQgCACgEAAQgDAAgCgCgADJAOQgIgCgHgEQgHgEgFgFQgGgFgEgHQgFgHgCgIQgCgIAAgJQAAgNAFgLIAGgLIABgCIAGgHQAJgIALgFQALgFANAAIAJABIAKACIAphYIg+AeIgDgHIBJgkIAEACIAUBPIgIACIgQhDIgpBYQAIAFAHAGQAGAGAFAHQAEAHACAIQACAJAAAIQAAAMgEALQgFALgIAJQgIAHgMAGQgLAFgNAAQgJAAgHgCgADEhfQgJAEgIAHQgHAHgFAJIAAABQgDAGgBAGIgBAKQAAALAEAKQAFAKAHAIQAIAGAKAEQAJAFAMAAQALAAAKgFQAKgEAHgGQAHgIAFgKQAEgKAAgLQAAgLgEgJQgEgKgHgIQgIgHgKgFQgKgEgLAAQgLAAgKAEgAwBgGQAGgGAAgJIAAi/IC2AAIAABGIhIAAQACAaAFAVIBUAAIAAAMIhRAAQAKAlASAVQANAOAJgBQAJABAEgOQADgOAEgVIAMAEIgIAkQgGAUgRABQgRABgPgRQgWgagKgqIheAAIAABEIA7gWIAAAIIAAAGQgbAJgcALQgJADgGAEgAvuhfIBbAAQgEgVgDgaIhUAAgAvuiaICcAAIAAguIicAAgAGVgGQBCgfAMg1IgoAAQgWA0hMAcIgIgKQBIgbAUgrIgqAAQgRASgXAOIgIgKQAlgXAXghIAMAFIgOASICWAAIgCA2QgCAwgsgBIgdAAIgCgNIAeABIAEAAQAdAAABgjQACgaAAgRIgmAAQgNA9hGAgIgIgJgAMwgFQARgbAEgVQAEgUAAg0IAAgyIBqAAIgBgvIANAAIABAvIBSAAIAAALIhRAAQADA8ALAkQAUgbATgqIAMAFQgXAxgYAeQAPAqARAAQAKABAFgQQAEgPACgPQAFADAHABQgDAUgEALQgHAWgTAAQgZABgRgsQgSAVgaAUIgKgKQAdgVAVgYQgNgngEhFIheAAIAAApIBDAAIgCBAQgBAigfgBIgVABIgCgOIAJABIAFAAIAIAAQATABABgVIACg2Ig2AAQAAAtgGAWQgFAWgRAaIgKgIgAhQgKQBJgTAbgXQgVgVgUgoIAMgGQARAlAWAVQAVgTATgpIAMAGQgTApgXAWQAgAZBDAPIgHANQhGgSgggaQgeAZhIAVgAoygHQAngkAGg+IAOABQgEAXgFARQAaAqAkAEIAAhtIhsAAIAAgMIDaAAIAAAMIhhAAIAAAsIBSAAIAAALIhSAAIAAA3QAWABAdgBIAxAAIgDAOQg7AAgrgBQgvgCgcgsQgMAdgYAYIgJgKgApmADIAAgOIiWAAIAAAOIgNAAIAAjCIBAAAIAIgfIAPACIgKAdIBjAAIAADCgAr8gYICWAAIAAgrIiWAAgAr8hPICWAAIAAgsIiWAAgAr8iHICWAAIAAgrIiWAAgAzYADIAAiKQgOAsgWAgIgGgPQAagkAQg0IgmAAIAAgMIAmAAIAAgwIANAAIAAAwIAjAAIAAAMIgjAAIAAArIAIgHIAjAiIgLAJIgggjIAAB5gATjACIAAgKIg3AAIAAAKIgLAAIAAhFIBOAAIAABFgASsgTIA3AAIAAgmIg3AAgAR3ACIAAgKIg3AAIAAAKIgLAAIAAhFIBNAAIAABFgARAgTIA3AAIAAgmIg3AAgAlBgLQBGgVAggdQgvgvgXhdIANgEQAVBYAuAtQAzg0AOhRIAOACQgSBZgyA0QAkAfBAARIgJAOQhFgWghgeQgfAehIAYIgJgNgAyEgPIAhABQAXABgBgYIAAh8IhOAAIAAgMIBOAAIAAgxIANAAIAAAxIAhAAIAAAMIghAAIAAB9QABAighABIghAAIgDgOgAJBgKIAAgMIBuAAIAAhCIhUAAIAAgMIBUAAIAAg8IhEAAQgNAZgTAWIgKgJQAgglATgzIANADIgPAjIA9AAIAAgzIAOAAIAAAzIBaAAIAAAMIhaAAIAAA8IBTAAIAAAMIhTAAIAABCIBnAAIAAAMgAClglIgCgKIAEgMIAAgBIAAAdIgCgGgAQlhNIgEgIQBXgJAKgXIhaAAIAAgKIBfAAQACgGACgOIAMAAIgEAUIAwAAIgJgRIALgEIAAACIALATIAuAAIAAAKIhcAAQAWAdBLABQgEAGgCAGQhUgEgUgmIgFAAQgKAghfAMIgCgEgAyWh9IALgGQAQAYAPAaIgMAHIgegzgAhLhtQAkgWAhgeIAJALQgfAbgnAaIgIgMgAA5iXIAJgJIBHAvIgKALQgfgXgngagAFxh/IAAhVICnAAIAABVgAF9iKICPAAIAAgaIiPAAgAF9ivICPAAIAAgaIiPAAgASgiYIAAg5IBOAAIAAA5gASsiiIA2AAIAAglIg2AAgAQ1iYIAAg5IBMAAIAAA5gARAiiIA2AAIAAglIg2AAgAloiaIAAgcIixAAIAAAcIgMAAIAAgoIBiAAIgHgZIAOgDIAHAcIBaAAIAAAogAjmjZIAMgFIAZA0IgMAGQgNgdgMgYgAhOivIAAgMIBtAAQgGgOgLgPIANgGIARAdIgLAGIBrAAIAAAMgAPTjPIAHgIQATALARAMIgIAJIgjgYg");
	this.shape.setTransform(128.3,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.versi}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(0,-4.8,436,49.6), null);


(lib.tagbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AC8hLIhnAAIANCaIA5AAIAKg6AAgAhIANAuAiFhMIgBCRAi7hLIA2gBIA2gCAg+BHIAYgyIAphbIAdBnAgmAVIBGAM");
	this.shape.setTransform(18.8,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiOiLIEdAAQBQAAAABQIAAB3QAABQhQAAIkdAAQhQAAAAhQIAAh3QAAhQBQAAg");
	this.shape_1.setTransform(19.3,8.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3399CC").s().p("AiNCMQhQAAAAhQIAAh3QAAhQBQAAIEbAAQBQAAAABQIAAB3QAABQhQAAg");
	this.shape_2.setTransform(19.3,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,39.5,17.8);


(lib.shape1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AC8hLIhnAAIANCaIA5AAIAKg6AAgAhIANAuAiFhMIgBCRAi7hLIA2gBIA2gCAg+BHIAYgyIAphbIAdBnAgmAVIBGAM");
	this.shape.setTransform(18.8,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shape1, new cjs.Rectangle(-1,-1,39.5,17.8), null);


(lib.Sell = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6666FF").ss(4,1,1).p("AumxLIdNAAQBaAAAABaIAAfjQAABahaAAI9NAAQhaAAAAhaIAA/jQAAhaBaAAg");
	this.shape.setTransform(102.5,110);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699FF").s().p("AumRMQhaAAAAhaIAA/jQAAhaBaAAIdNAAQBaAAAABaIAAfjQAABahaAAg");
	this.shape_1.setTransform(102.5,110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sell, new cjs.Rectangle(-2,-2,209,224), null);


(lib.refreshbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("ABzAAQAAAwgiAhQghAigwAAQgvAAgigiQghghAAgwQAAgvAhgiQAighAvAAQAwAAAhAhQAiAiAAAvg");
	this.shape.setTransform(11.5,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhRBRQghgiAAgvQAAgvAhgiQAighAvAAQAvAAAiAhQAiAiAAAvQAAAvgiAiQgiAigvAAQgvAAgigig");
	this.shape_1.setTransform(11.5,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,26,26);


(lib.newstopbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,51,51,0.427)").ss(3,1,1).p("AgCAMIiWCwAinidIClCpICgCmACoi7IiqDH");
	this.shape.setTransform(29.3,30.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,0,0,0.427)").ss(3,1,1).p("AjylCIHlAAQA/AAANAyQAEANAAARIAAHlQAABQhQAAInlAAQhQAAAAhQIAAnlQAAgRAEgNQANgyA/AAg");
	this.shape_1.setTransform(32.3,32.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,51,51,0.008)").s().p("AjxFDQhRAAAAhQIAAnkQABgRADgNQANgzBAAAIHkAAQA+AAAOAzQAEANAAARIAAHkQAABQhQAAgAi1CsICViuICgCkIigikICpjIIipDIIikiqICkCqgAgggCg");
	this.shape_2.setTransform(32.3,32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,67.5,67.5);


(lib.mlg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["村民交易生成器_atlas_"],7), null, new cjs.Matrix2D(0.355,0,0,0.355,-71,-57.5)).s().p("ArFI/IAAx9IWLAAIAAR9g");
	this.shape.setTransform(71,57.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mlg2, new cjs.Rectangle(0,0,142,115), null);


(lib.mlg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["村民交易生成器_atlas_"],5), null, new cjs.Matrix2D(-0.3,0,0,0.325,90,-21.8)).s().p("AuDDaIAAmzIcHAAIAAGzg");
	this.shape.setTransform(90,21.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mlg1, new cjs.Rectangle(0,0,180.1,43.6), null);


(lib.magicbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("AhIkwICbAAIAAGeIC+CvIohAUIDIi+g");
	this.shape.setTransform(132.8,62);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,153,0,0.459)").ss(5,1,1).p("AsVobIYrAAQBaAAAABaIAAODQAABahaAAI4rAAQhaAAAAhaIAAuDQAAhaBaAAg");
	this.shape_1.setTransform(88,54);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AByBwQAtgeATgbQgUghgJg2IgKAQIgJgKQAbgpANg2IAOADQgIAagIAUIBQAAIAAAMIgTAAQgJBNgZAnQASAaAnAaIgKAMQgkgagTgaQgUAbgqAcIgLgLgACgg1IgBACQAKA+ASAfQAVgiAHhEIg0AAIgDAHgAF+B6IAAhVIgBAAQgjAvhIAeIgJgNQA+gXAngpIhhAAIAAgNIBxAAIAAgdIhXAAIAAhmIC7AAIAABmIhXAAIAAAdIBxAAIAAANIhhAAQAmApA+ARIgIAOQhFgXgmgxIgBAAIAABVgAGLgRIBKAAIAAghIhKAAgAE1gRIBJAAIAAghIhJAAgAGLg+IBKAAIAAghIhKAAgAE1g+IBJAAIAAghIhJAAgAAEBuQAqgdAWgdIgagbIgNgOIALgIIAOAOIAWAXQALgRANgaIANAEQgOAfgNASIAQARIAVAVIgLAKIgPgPIgUgVQgWAegpAeIgKgMgAixB2IgLAAIgDgPIAfABQAXAAgBgVIAAjMIAOAAIAAAnQAOAkANAYQAcgXAdggIAMAKQgfAfggAaQAhA2AzAjIgMANQhJg6gghUIAACGQABAhgiABIgOAAIgGAAgAlyB0QgBgHgCgIIApABQAgACAAggQACgrAAg1IhPAAQgNAYgPAUIgMgIQAaggARgpIANAFIgHAPIgDAFIBYAAQgBAygCA7QABArguAAIgRAAIgJAAIgNAAgAn9BgIBggNIgBAOQgxAGgsAHgAj/BVQA6g5ARhJIhCAAIAAgNIBQAAIAAANQgSBQg6A9IgNgLgAn4AwQAHgDAFgEQATgRARgVQgjABgNACIgEgMQAHgDAEgGQAUgXAPgaIAMAGQgSAbgUAYIAEAAIAmgCQAJgKALgRIAMAIQgeAngjAkIA8gGIgCANQgdACggAEIgQACgAmDAQIALgIQATATAUAVIgLAJQgSgVgVgUgAAHgDQAWgVAVgcIALAIQgUAbgXAWgABTgtIAKgIQAZAcAOARIgKAIQgPgSgYgbgAm1hAIAAgTIhJAAIAAgNIBJAAIAAgaIANAAIAAAaIBEAAIAAgaIANAAIAAAaIBJAAIAAANIhJAAIAAASIgNAAIAAgSIhEAAIAAATgAAMhEIAAgMIB5AAIAAAMgAA5h0IALgGIATAgIABACIgMAGIgTgig");
	this.shape_2.setTransform(61.7,25.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6699FF").s().p("AsVIcQhaAAAAhaIAAuDQAAhaBaAAIYrAAQBaAAAABaIAAODQAABahaAAgACvGAIIhgUIi+iuIAAmfIibAAICbAAIAAGfIC+CuIohAUIDIi+IAAmjIAAGjIjIC+gAhUjhQgTAcgtAeIALAKQApgcAVgbQATAaAkAaIAJgMQgngZgRgbQAZgnAIhNIAUAAIAAgNIhQAAQAIgUAHgaIgNgDQgNA2gcApIAKAKIAKgPQAJA3AUAggAB2jzIAABWIAOAAIAAhWIABAAQAmAyBFAWIAIgOQg/gRglgpIBgAAIAAgMIhwAAIAAgeIBXAAIAAhnIi7AAIAABnIBWAAIAAAeIhwAAIAAAMIBhAAQgnApg/AXIAJANQBIgeAjgvgAjqkMIAOANIAaAbQgWAdgrAeIAKALQApgeAXgeIAUAVIAOAPIAMgKIgWgVIgPgQQANgTANgfIgNgEQgMAagMASIgWgYIgOgOgAnEiiIALAAIAHAAIAOAAQAhgBgBggIAAiIQAhBVBJA7IALgOQgzgjggg3QAfgZAgggIgMgJQgeAggcAWQgNgYgOgkIAAgmIgNAAIAADNQAAAUgXAAIgeAAIACAOgAp5ikIAMAAIAJAAIARAAQAvAAgCgrQADg7AAgzIhXAAIACgFIAIgPIgOgFQgQApgaAhIAMAIQAOgVAOgXIBPAAQgBA2gBAqQgBAggfgCIgqgBQADAJABAGgAsFi4IADAPQAsgIAxgGIAAgNIhgAMgAn9lGIBCAAQgRBKg6A6IAMAKQA7g9AShRIAAgNIhQAAgAr0jvQgFAEgGAEIAGANIAPgCQAhgEAcgCIACgNIg7AGQAigkAfgoIgMgIQgMARgJAKIgmACIgDAAQATgYATgbIgNgGQgPAagTAXQgFAGgHADIAFANQANgCAiAAQgRAUgTARgAqKkIQAUAUASAWIALgJQgUgWgTgTgAj/kbIALAJQAWgYAVgbIgLgIQgVAcgWAWgAi0lGQAYAbAQATIAKgJQgOgRgagcgAsGlsIBJAAIAAATIAOAAIAAgTIBDAAIAAASIAOAAIAAgSIBJAAIAAgMIhJAAIAAgaIgOAAIAAAaIhDAAIAAgaIgOAAIAAAaIhJAAgAj7lcIB6AAIAAgNIh6AAgAjOmNIATAiIANgGIgBgCIgTgfgACvGAgAhnlLIABgDIACgGIA1AAQgHBEgVAiQgTgfgJg+gACEkqIAAghIBJAAIAAAhgAAtkqIAAghIBJAAIAAAhgACElXIAAghIBJAAIAAAhgAAtlXIAAghIBJAAIAAAhg");
	this.shape_3.setTransform(88,54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,181,113);


(lib.LoadingTZXT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADoB5IAAgMQAWAMATAAQA4AAAAg7IAAgSIAAAAQgRAcghAAQgYAAgQgTQgQgSAAggQABgfARgVQAQgUAcAAQAeAAAOAZIAAAAIAAgWIAMAAIAAB8QAAAmgRASQgQASgjAAQgUAAgVgLgAD6gpQgOARAAAaQAAAcANAPQAMAPAUAAQAWAAANgOQANgOAAgUIAAgaQAAgSgMgNQgMgNgTAAQgXAAgNARgAhvA1QgQgSAAggQABggARgUQARgUAbAAQAfAAANAZIAAAAIAAhXIAMAAIAADHIgMAAIAAgYIAAAAQgHANgNAHQgNAIgRAAQgYAAgQgTgAhkgqQgOARAAAbQAAAcANAPQAMAPATAAQAXAAANgOQANgOAAgVIAAgYQAAgTgMgNQgMgNgUAAQgVAAgOAQgAj3A9QgLgLAAgRQAAgiAvgHIApgGQAAgsggAAQgWAAgWASIAAgPQAIgGAMgEQANgEAMAAQAVAAALANQAMANAAAYIAABXIgNAAIAAgbIAAAAQgHAOgMAIQgMAJgPAAQgTAAgMgLgAjPABQgVADgIAHQgKAHABAPQAAAMAIAIQAIAHAOAAQATAAAOgOQANgOgBgXIAAgMgAmLA0QgRgTAAgfQAAghASgTQATgTAdAAQAcAAASATQAQATAAAgQAAAfgRAUQgRAUgeAAQgdAAgSgUgAmBgqQgOAQAAAcQAAAaAOAQQAOAQAXAAQAZAAAOgPQANgQgBgcQABgcgNgPQgOgQgXAAQgYAAgPAQgAH5BEQgDgEAAgEQAAgFADgDQADgDAEAAQAFAAADADQAEADgBAFQABAEgEAEQgDADgFAAQgEAAgDgDgAG9BEQgDgEAAgEQAAgFADgDQADgDAEAAQAFAAADADQAEADAAAFQAAAEgEAEQgDADgFAAQgEAAgDgDgAGBBEQgDgEAAgEQAAgFADgDQADgDAFAAQAEAAADADQADADAAAFQAAAEgDAEQgDADgEAAQgFAAgDgDgAC0BEIAAhNQABgxgkAAQgTAAgMAOQgOAPAAAVIAABMIgLAAIAAiGIALAAIAAAZIABAAQAPgcAgAAQAVAAAMAPQAMAOAAAbIAABRgAAhBEIAAiGIAMAAIAACGgAoLBEIAAi8IANAAIAACwIBMAAIAAAMgAAghnQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQAEACAAAFQAAAEgEADQgDADgEAAQgEAAgDgDg");
	this.shape.setTransform(52.4,13.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.LoadingTZXT, new cjs.Rectangle(0,0,104.7,26.4), null);


(lib.groupswich = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("Am3jWINvAAQBaAAAABaIAAD5QAABahaAAItvAAQhaAAAAhaIAAj5QAAhaBaAAg");
	this.shape.setTransform(53,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah/BwIAAgMIAdAAIAAjEIBwAAIAADEIAUAAIAAAMgAhUBkIBUAAIAAg2IhUAAgAhUAjIBUAAIAAg1IhUAAgAhUgeIBUAAIAAg2IhUAAgAjJBXQAkgFAugIIgBAGIAAAHQgnAGgoAHgAC4BdQgDgDAAgFQAAgEADgDQADgDAFAAQAEAAADADQADADABAEQgBAFgDADQgDADgEAAQgFAAgDgDgAB8BdQgDgDAAgFQAAgEADgDQADgDAFAAQAEAAADADQADADAAAEQAAAFgDADQgDADgEAAQgFAAgDgDgABABdQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDgAjIAiQAIgEAGgIQAPgSARgYIgrACIgEgNQAGgEAEgHQAUgbAXgqIANAGQgZApgYAiIAIgBIAfgBIARgaIANAGQgfAugiAnIA6gGIgCANQgvAEgYAEg");
	this.shape_1.setTransform(39.9,21.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Am3DXQhaAAAAhaIAAj5QAAhaBaAAINvAAQBaAAAABaIAAD5QAABahaAAg");
	this.shape_2.setTransform(53,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,109,46);


(lib.grouploadb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0.769)").s().p("EhAtAlzQieAAAAiIMAAAhHUQAAiJCeAAMCBcAAAQCdAAAACJMAAABHUQAACIidAAg");
	this.shape.setTransform(430,241.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,860,483.8);


(lib.generatebtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,51,255,0.376)").ss(5,1,1).p("AoMj+IQZAAQBaAAAABaIAAFJQAABahaAAIwZAAQhaAAAAhaIAAlJQAAhaBaAAg");
	this.shape.setTransform(61.5,25.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGBxQASgdAEgXQAGgWAAg2IAAg3IBzAAIgCgzIAOAAIACAzIBYAAIAAAMIhYAAQAEBAALAnQAWgdAVgtIAMAFQgYA0gaAhQAQAuASAAQAMABAEgSQAFgQACgRQAGAEAHABQgEAWgEAMQgHAZgVAAQgaABgTgxQgTAXgdAVIgKgLQAfgWAXgaQgOgrgEhJIhnAAIAAAsIBJAAIgDBEQAAAlgiAAIgWAAIgDgPIAKABIAGAAIAHAAQAWABABgXQACgfAAgZIg7AAQAAAvgGAYQgFAXgSAeIgMgKgAj8BsIAAgNIB4AAIAAhHIhbAAIAAgOIBbAAIAAg/IhKAAQgPAbgUAYIgLgLQAjgoAUg3IAPAEIgRAlIBDAAIAAg3IAPAAIAAA3IBhAAIAAAOIhhAAIAAA/IBaAAIAAAOIhaAAIAABHIBvAAIAAANgAC2hoIAIgKQAVANASANIgIAKIgngag");
	this.shape_1.setTransform(59,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6699FF").s().p("AoMD/QhaAAAAhaIAAlJQAAhaBaAAIQZAAQBaAAAABaIAAFJQAABahaAAgAAJgWQAAA3gGAWQgDAXgSAdIALAKQASgeAFgXQAGgZAAguIA7AAQAAAYgCAgQgBAXgWgBIgHAAIgGAAIgKgBIADAOIAWAAQAiABAAglIADhFIhJAAIAAgrIBnAAQAEBJAOArQgXAagfAWIAKALQAdgWATgWQATAwAaAAQAVAAAHgZQAEgMAEgWQgHgCgGgDQgCARgFAQQgEARgMgBQgSABgQguQAaghAYg0IgMgFQgVAsgWAeQgLgngEhAIBYAAIAAgNIhYAAIgCgyIgOAAIACAyIhzAAgAkVBmID2AAIAAgNIhvAAIAAhHIBaAAIAAgOIhaAAIAAhAIBhAAIAAgNIhhAAIAAg3IgPAAIAAA3IhDAAIARgmIgPgEQgUA4gjAoIALALQAUgZAPgbIBKAAIAABAIhbAAIAAAOIBbAAIAABHIh4AAgACdhvIAnAaIAIgKQgSgNgVgMg");
	this.shape_2.setTransform(61.5,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,128,56);


(lib.exbbtn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,204,0,0.427)").ss(3,1,1).p("ADVARIh4AAAC3g5IAeBKAjylCIHlAAQA/AAANAyQAEANAAARIAAHlQAABQhQAAInlAAQgbAAgSgJQgjgSAAg1IAAnlQAAhQBQAAgAjngWIAABtAjngWIB9AAAjngWIFsDbAjnjjIG8D0");
	this.shape.setTransform(32.3,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.008)").s().p("AjxFDQgcgBgRgIQgkgTAAg0IAAnkQAAhRBRAAIHkAAQA+AAAOAzQAEANAAARIAAHkQAABQhQAAgACFDFIlsjbIB9AAIh9AAIAABtIAAhtgADUARIgehKIAeBKIm7j0IG7D0Ih3AAIB3AAgADUARg");
	this.shape_1.setTransform(32.3,32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,67.5,67.5);


(lib.ETBTN2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,153,255,0.427)").ss(3,1,1).p("AlWAAIAAkGQAAhQBQAAIINAAQBQAAAABQIAAINQAABQhQAAIoNAAQhQAAAAhQIAAkHIHWAAIjmCeACAAAIjciE");
	this.shape.setTransform(34.3,34.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AkFFWQhRAAAAhQIAAkGIHVAAIjkCeIDkieIjaiEIDaCEInVAAIAAkFQAAhRBRAAIILAAQBQAAAABRIAAILQAABQhQAAgAB/AAg");
	this.shape_1.setTransform(34.3,34.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,71.5,71.5);


(lib.EnterBTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,153,255,0.427)").ss(3,1,1).p("AlWAAIAAkGQAAhQBQAAIINAAQBQAAAABQIAAINQAABQhQAAIoNAAQhQAAAAhQIAAkHIHWAAIjciEACAAAIjmCe");
	this.shape.setTransform(34.3,34.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AkFFWQhRAAAAhQIAAkGIHVAAIjaiEIDaCEInVAAIAAkFQAAhRBRAAIILAAQBQAAAABRIAAILQAABQhQAAgAhlCeIDkieg");
	this.shape_1.setTransform(34.3,34.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,71.5,71.5);


(lib.enchantbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("Ai6B7IAoBGIB9hLIB2ClICMhuIh9h9IClhVIhQhBIiBBBIj5j1IhfAKIAFBGIC+Dmg");
	this.shape.setTransform(122.2,62.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,102,102,0.459)").ss(5,1,1).p("Ar3oWIXvAAQBaAAAABaIAAN5QAABahaAAI3vAAQhaAAAAhaIAAt5QAAhaBaAAg");
	this.shape_1.setTransform(85,53.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAoBvQBCgTAQgeIg7AAIAAhCIA5AAIAFgQIALABIAAACIgFANIBUAAIAABCIgfAAIAIAEIgRATIAagBIgHgIIAHgGIAWAVIgIAHIgBgCIgEgFQgmACgJACIgDgJQAJgFANgTIgvAAQgOAnhJAWIgIgMgACLA0IA/AAIAAgTIg6AAIgFATgABMA0IAyAAQADgHACgMIg3AAgACRAYIA5AAIAAgTIg4AAIgBATgABMAYIA5AAIABgTIg6AAgAj2B7IAAjoIBEAAIAAAPIgXBHQAYAdAAAkQABAigeABIgHAAIgEAAIgFAAIgDgOIARAAQASACgBgYQABgggZgdIAXhNIgpAAIAADcgAiWB7IAAikQgLAUgKANIgIgMQAigwAOgzIAOADQgJAbgLAWIAAC+gAAABxQAOgaAFgYQAEgWAAgxIAAhZIBuAAIgJgVIAMgEIADAFIAIAUIBgAAIAAALIjPAAIAABIQAAA3gFAbQgFAagQAcIgKgJgAhMB2IgNAAIgGAAIgJAAIgDgPIAdABQAMAAAFgFQAEgFAAgNIAAiBIhAAAIAAgOIBAAAIAAg5IAOAAIAAA5IAgAAIAAAOIggAAIAACCQACAlghAAIgCgBgAChB2QgZAAAAgZIAAgYIAMAAIAAAXQAAAQAPgBIAyAAQAQABADgPIADgVIAMAEIgEAXQgFATgXAAgAh0gSIALgEQAPAcAKAYIgMAFQgLgagNgbgAAsgWQAZgMARgTIglAAIAAgKIAnAAIAAgQIAMAAIAAAQIAhAAIAAAKIghAAIAAAMIAFgGIAYAQIgHAIIgWgPIAAAWIgMAAIAAgdQgLARgaAQIgHgKgADDgtIAAAdIgMAAIAAgdQgNATgXALIgHgJQAagMAQgRIgiAAIAAgKIAjAAIAAgQIAMAAIAAAQIAnAAIAAAKIgmAAQASATAbAKIgHAKQgbgNgMgSg");
	this.shape_2.setTransform(42.5,25.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6699FF").s().p("Ar3IXQhaAAAAhaIAAt5QAAhaBaAAIXvAAQBaAAAABaIAAN5QAABahaAAgAHWF3ICMhvIh9h9IClhUIhQhAIiCBAIj6j0IhfAKIAFBGIC+DkIhpBgIAoBGIB9hMgAlojVIA6AAQgPAehCATIAHAMQBJgWAPgnIAuAAQgNATgJAFIAEAJQAJgCAlgCIAEAFIACACIAHgHIgWgVIgHAGIAIAIIgbABIASgTIgIgEIAeAAIAAhDIhUAAIAFgNIABgCIgLgBIgGAQIg4AAgAqfiYIAOAAIAAjdIApAAIgXBNQAYAeAAAgQABAYgSgCIgSAAIADAOIAFAAIAEAAIAHAAQAegBAAgiQAAgkgYgeIAXhHIAAgPIhFAAgAo/iYIAOAAIAAi/QAKgWAJgbIgNgDQgOAzgiAwIAIAMQAJgNALgUgAmQkcQAAAygFAWQgEAYgPAaIALAJQAQgcAEgaQAGgbgBg4IAAhIIDQAAIAAgLIhhAAIgIgUIgCgFIgMAEIAIAVIhtAAgAoRidIAJAAIAHAAIANAAQAiACgCgmIAAiDIAgAAIAAgOIggAAIAAg5IgOAAIAAA5IhAAAIAAAOIBAAAIAACCQABANgFAFQgEAFgNAAIgcgBIACAPgAkgi2QAAAZAZAAIA2AAQAYAAAEgTIAFgXIgMgEIgEAVQgDAPgPgBIgyAAQgQABABgQIAAgXIgNAAgAockmQANAcALAaIAMgFQgLgYgPgdgAl2lJIAkAAQgQATgaAMIAIAKQAZgQAMgRIAAAdIALAAIAAgWIAXAPIAHgIIgZgQIgFAGIAAgMIAhAAIAAgKIghAAIAAgQIgLAAIAAAQIgnAAgAi9kiIAHgKQgcgKgRgTIAlAAIAAgKIgnAAIAAgQIgLAAIAAAQIgjAAIAAAKIAhAAQgQARgZAMIAHAJQAWgLAOgTIAAAdIALAAIAAgdQANASAbANgAFeDRIh9BMIgohGIBphgIi+jkIgFhGIBfgKID6D0ICChAIBQBAIilBUIB9B9IiMBvgAC5DXgAkcjfIAEgTIA7AAIAAATgAlcjfIAAgTIA4AAQgCAMgDAHgAkXj7IACgTIA4AAIAAATgAlcj7IAAgTIA6AAIgBATg");
	this.shape_3.setTransform(85,53.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,175,112);


(lib.EEXbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,204,0,0.427)").ss(3,1,1).p("ADVARIh4AAAC3g5IAeBKAjylCIHlAAQA/AAANAyQAEANAAARIAAHlQAABQhQAAInlAAQgbAAgSgJQgjgSAAg1IAAnlQAAhQBQAAgAjngWIAABtAjngWIB9AAAjngWIFsDbAjnjjIG8D0");
	this.shape.setTransform(32.3,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.008)").s().p("AjxFDQgcgBgRgIQgkgTAAg0IAAnkQAAhRBRAAIHkAAQA+AAAOAzQAEANAAARIAAHkQAABQhQAAgACFDFIlsjbIB9AAIh9AAIAABtIAAhtgADUARIgehKIAeBKIm7j0IG7D0Ih3AAIB3AAgADUARg");
	this.shape_1.setTransform(32.3,32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,67.5,67.5);


(lib.EAbtn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,204,0,0.427)").ss(3,1,1).p("AjylCIHlAAQBQAAAABQIAAHlQAABQhQAAInlAAQhQAAAAhQIAAnlQAAhQBQAAgAgWggIAAC0AgWjeIAAC+AiiggICMAAIC0AA");
	this.shape.setTransform(32.3,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.008)").s().p("AjxFDQhRAAAAhQIAAnkQAAhRBRAAIHkAAQBQAAAABRIAAHkQAABQhQAAgAgWCTIAAizICzAAIizAAIAAi+IAAC+IiLAAICLAAgAgWggg");
	this.shape_1.setTransform(32.3,32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,67.5,67.5);


(lib.EAbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,204,0,0.427)").ss(3,1,1).p("AjylCIHlAAQBQAAAABQIAAHlQAABQhQAAInlAAQhQAAAAhQIAAnlQAAhQBQAAgAiiggICMAAIC0AAAgWjeIAAC+IAAC0");
	this.shape.setTransform(32.3,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.008)").s().p("AjxFDQhRAAAAhQIAAnkQAAhRBRAAIHkAAQBQAAAABRIAAHkQAABQhQAAgAgWggIAACzIAAizICzAAIizAAIAAi+IAAC+IiLAAICLAAgAgWggg");
	this.shape_1.setTransform(32.3,32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,67.5,67.5);


(lib.Detailbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMtBfIAAgKQAQAJAOAAQAqAAABgtIAAgNQgNAVgYAAQgUAAgMgOQgLgOgBgYQABgYANgPQANgQAUAAQAXAAALATIAAgQIAJAAIAABeQAAAdgMANQgNANgbAAQgPAAgPgHgAM5gdQgKANAAAUQAAAVAJAMQAKALAPAAQARAAAKgKQAKgLAAgQIAAgTQAAgOgKgJQgJgKgPAAQgQAAgLAMgAowBEQAqgMAWgOQgWgSgMggIgLAAIAAgKIBlAAIAAALQgSAfgVASQAUAOAlAJIgGAKQgngMgVgOQgYAQgqANIgGgKgAnoAkQAWgQAPgcIhFAAQANAbATARgArdBOIAAhhIgvAAIAAgKICVAAIgDAwQgBAhghgBIgYAAIgCgLIAZABQAOAAAEgFQAGgEABgMQACgRAAgWIhQAAIAABhgAszBLIAAgQIhSAAIAAAQIgKAAIAAigIBmAAIAACggAtXAyIAkAAIAAg6IgkAAgAuFAyIAkAAIAAg6IgkAAgAtXgRIAkAAIAAg6IgkAAgAuFgRIAkAAIAAg6IgkAAgAmaBHIAAgIIAaAAIAAhVIA6AAIAAgNIhRAAIAAgIIBRAAIAAgLIAKAAIAAALIBRAAIAAAIIhRAAIAAANIA7AAIAABVIAaAAIAAAIgAl2A/IBrAAIAAgNIhrAAgAl2AqIBrAAIAAgOIhrAAgAl2AUIBrAAIAAgNIhrAAgAl2AAIBrAAIAAgOIhrAAgAvUA1IA7gLIgBAKIg4ALgApFA4QACgGAAgGIAAhJIgVAAIAAgJIAfAAIAABOIAWgYQADAHACACIgaAcIgGAJgAOaAyIAAgLQAGAEAIADQAGACAGAAQAYAAAAgTQAAgHgFgFQgGgFgMgFQgOgGgGgGQgGgHAAgKQAAgMAJgIQAKgIAOAAQANAAAKAGIAAAKQgMgHgMAAQgKAAgGAFQgGAFgBAJQAAAHAFAEQADAFAOAGQAQAGAGAGQAGAGAAALQAAAMgJAIQgKAIgPAAQgPAAgLgHgAG4ArQgMgPAAgaQAAgVANgPQAMgQAVAAQATAAALAOQAJANABAXIAAADIhNAAQABAVAJAMQAKAMARAAQARAAARgMIAAAJQgQAMgUAAQgTAAgNgOgAHCggQgKAKgCASIBCAAQgBgSgHgKQgJgJgOAAQgOAAgJAJgAFaA2QgKgCgFgDIAAgLQAPAKAQAAQARAAAJgHQAJgHAAgNQgBgLgFgGQgGgGgUgLQgVgNgHgJQgFgIAAgLQAAgQAMgKQALgLAUAAQANAAANAEIAAALQgNgGgOAAQgPAAgIAIQgJAHAAALQAAALAGAHQAFAHAUALQAUALAHAJQAGAIABALQAAARgMAKQgLALgVAAQgIAAgJgDgACXAxQgJgJAAgMQAAgbAkgFIAggEQgBghgYAAQgRAAgQANIAAgLQAFgEAKgEQAKgDAJAAQAPAAAJAKQAJAKAAATIAABBIgJAAIAAgUQgGAKgJAHQgJAGgLAAQgPAAgJgIgAC2ADQgRACgGAGQgHAFABALQAAAKAFAFQAHAGAKAAQAPAAAKgLQAKgLAAgRIAAgJgAgLArQgMgPAAgaQAAgVANgPQAMgQAUAAQAUAAAKAOQAKANAAAXIAAADIhLAAQAAAVAKAMQAIAMARAAQASAAARgMIAAAJQgQAMgUAAQgUAAgMgOgAgBggQgKAKgCASIBBAAQAAgSgIgKQgIgJgOAAQgPAAgIAJgAJdAdIAAhEIgTAAIAAgIIATAAIAAgbIAEgCIAFgBIAAAeIAbAAIAAAIIgbAAIAABDQgBAKAEAFQADAFAIAAQAGAAAHgEIAAAJQgIADgGAAQgXAAABgbgAIgAdIAAhEIgTAAIAAgIIATAAIAAgbIAEgCIAEgBIAAAeIAbAAIAAAIIgbAAIAABDQABAKADAFQADAFAIAAQAGAAAGgEIAAAJQgHADgGAAQgXAAABgbgABcAdIAAhEIgSAAIAAgIIASAAIAAgbIAEgCIAFgBIAAAeIAbAAIAAAIIgbAAIAABDQAAAKADAFQADAFAIAAQAHAAAGgEIAAAJQgHADgHAAQgWAAAAgbgAMEA2IAAg6QAAglgaAAQgPAAgJAKQgKALAAAQIAAA6IgJAAIAAhlIAJAAIAAASIABAAQALgVAYAAQAQAAAJALQAJALAAAVIAAA9gAKVA2IAAhlIAJAAIAABlgAEjA2IAAiXIAKAAIAACXgAD5A2IAAhlIAJAAIAABlgAiXA2IAAiOIAkAAQAjAAAUARQASASAAAiQAAAggUAVQgUAUgjAAgAiNAtIAWAAQAhAAARgQQARgRAAgeQgBg9g/AAIgZAAgAvSAMQAEgCAEgFQAKgMAOgWIgfACIgEgJQAFgDACgFQAQgaAPgfIAKADQgSAjgQAaIAIAAIASgBIANgWIALAFQgXAkgXAeIAogGIAAAKQgkAEgQAEgAolgjQAQgHAFgIQAGgIgBgQIAAgRIBKAAIAAAjQgBALAMAAIASAAIgCAJIgSAAQgUABAAgRIAAgeIg0AAIAAAIIAAAFQgBAdgdANIgHgIgAqhgtIAAgVIg3AAIAAAVIgKAAIAAgVIgzAAIAAgJIAzAAIAAgZIAKAAIAAAZIA3AAIAAgZIAKAAIAAAZIA0AAIAAAJIg0AAIAAAVgAmKg7IAAgiICTAAIAAAigAklhDIAlAAIAAgSIglAAgAlThDIAlAAIAAgSIglAAgAmAhDIAkAAIAAgSIgkAAgApLhZIAIgGIAcAcIgIAIIgcgegAKUhLQgCgDAAgDQAAgDACgCQADgCADAAQACAAADACQACACAAADQAAADgCADQgDACgCAAQgDAAgDgCgAD4hLQgCgDAAgDQAAgDACgCQADgCADAAQADAAACACQADACAAADQAAADgDADQgCACgDAAQgDAAgDgCg");
	this.shape.setTransform(98.2,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:true},1).wait(2));

	// Part 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("Au5CgQhaAAAAhaIAAiLQAAhbBaABId0AAQBZgBABBbIAACLQgBBahZAAg");
	this.shape_1.setTransform(97.4,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-4.2,208.9,32.1);


(lib.delbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,51,51,0.427)").ss(3,1,1).p("AinidIClCpIiWCwACoi7IiqDHICgCm");
	this.shape.setTransform(29.3,30.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,0,0,0.427)").ss(3,1,1).p("AjylCIHlAAQA/AAANAyQAEANAAARIAAHlQAABQhQAAInlAAQhQAAAAhQIAAnlQAAgRAEgNQANgyA/AAg");
	this.shape_1.setTransform(32.3,32.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,51,51,0.008)").s().p("AjxFDQhRAAAAhQIAAnkQABgRADgNQANgzBAAAIHkAAQA+AAAOAzQAEANAAARIAAHkQAABQhQAAgAi1CsICViuIikiqICkCqgAgggCICgCkIigikICpjIIipDIg");
	this.shape_2.setTransform(32.3,32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,67.5,67.5);


(lib.copybtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,51,255,0.376)").ss(5,1,1).p("AoWjvIQtAAQBaAAAABaIAAErQAABahaAAIwtAAQhaAAAAhaIAAkrQAAhaBaAAg");
	this.shape.setTransform(62.5,24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjmBvQA2gIAtgPQgdgNgYgVQgWAUgeAQIgIgLQAwgYAfgmIAOADIgOARICIAAIAAANQgcAWgnARQAlALA6AHIgHANQhBgKgpgPQgtARhAAMQgDgIgEgFgAhyBSQAkgOAegTIh8AAQAbAVAfAMgABYB7IAAheIgqAAIAABLIgNAAIAAhXIA3AAIAAghIhKAAIAAgMIBKAAIAAgoIgrAAIgPAcQgEgDgHgDQATgfAHggIANACIAAACIgIAZIAmAAIAAgnIANAAIAAAnIA3AAIAAAMIg3AAIAAAoIBCAAIAAAMIhCAAIAAAhIA4AAIAAA7QABAYgYAAIgIAAIgEAAIgHAAIgCgMIASAAQAIAAACgCQADgEAAgHIAAguIgrAAIAABegADMB2IgHAAIgKAAIgEgOIAfABQALAAAEgFQAEgDAAgKIAAjOIANAAIAADOQABAggdgBIgOAAgAC4A3IAAiWIANAAIAACWgAjPAOIAAhQICyAAIAABQgAjCABICYAAIAAgWIiYAAgAjCghICYAAIAAgWIiYAAgAj1g0QAlgcAYgrIAOAEIgMASICzAAIAAALIi7AAQgUAbgaAXIgJgMg");
	this.shape_1.setTransform(61.8,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6699FF").s().p("AoWDwQhaAAAAhaIAAkrQAAhaBaAAIQtAAQBaAAAABaIAAErQAABahaAAgAiKBhQgsAPg2AIQAEAFACAIQBAgMAtgRQApAPBBAKIAHgNQg6gHglgLQAngRAdgWIAAgNIiJAAIAOgRIgNgDQggAmgwAYIAJALQAdgQAXgUQAXAVAdANgABRAmIAABeIANAAIAAheIArAAIAAAuQAAAHgCAEQgDACgHAAIgTAAIACAMIAHAAIAEAAIAIAAQAYAAgBgYIAAg7Ig4AAIAAghIBDAAIAAgMIhDAAIAAgoIA4AAIAAgMIg4AAIAAgnIgNAAIAAAnIgmAAIAIgZIABgCIgOgCQgHAggTAfQAHADAFADIAOgcIArAAIAAAoIhKAAIAAAMIBKAAIAAAhIg2AAIAABXIAMAAIAAhLgAC0B/IAKAAIAHAAIAOAAQAeABgBggIAAjOIgOAAIAADOQAAAKgEADQgEAFgKAAIgfgBIADAOgACxBAIANAAIAAiWIgNAAgAjWAXICzAAIAAhQIizAAgAj8grIAJAMQAbgXATgbIC7AAIAAgLIiyAAIALgSIgOgEQgYArglAcgAizA6IB8AAQgdATglAOQgfgMgbgVgAjIAKIAAgWICXAAIAAAWgAjIgYIAAgWICXAAIAAAWg");
	this.shape_2.setTransform(62.5,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,130,53);


(lib.closebtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("AASgRIi7CxAhtifIB/COICOCdACqifIiYCO");
	this.shape.setTransform(17,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCCCCC").ss(3,1,1).p("AAXgXIC7DPAAXgXIj1DpAiQjRICnC6ADfjRIjIC6");
	this.shape_1.setTransform(16.4,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(2));

	// Part 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(69,69,69,0.008)").s().p("AinEdQiXAAAAiXIAAkLQAAiXCXAAIFPAAQCXAAAACXIAAELQAACXiXAAg");
	this.shape_2.setTransform(18,15.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-13.4,63.8,57);


(lib.choosered = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		window["cr"+window.crjs]=this;
		window.crjs=Number(window.crjs)+1;
		this.stop();
	}
	this.frame_12 = function() {
		if(localStorage["morechoose" + this.num] !== "yes"){
			this.play();
		}else{
			this.gotoAndPlay(11);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(8));

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,51,51,0)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape.setTransform(29.5,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,51,51,0.071)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_1.setTransform(29.5,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,51,51,0.133)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_2.setTransform(29.5,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,51,51,0.188)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_3.setTransform(29.5,29.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,51,51,0.235)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_4.setTransform(29.5,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,51,51,0.278)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_5.setTransform(29.5,29.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,51,51,0.31)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_6.setTransform(29.5,29.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,51,51,0.337)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_7.setTransform(29.5,29.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,51,51,0.353)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_8.setTransform(29.5,29.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,51,51,0.365)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_9.setTransform(29.5,29.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,51,51,0.369)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_10.setTransform(29.5,29.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,51,51,0.314)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_11.setTransform(29.5,29.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,51,51,0.259)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_12.setTransform(29.5,29.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,51,51,0.208)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_13.setTransform(29.5,29.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,51,51,0.157)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_14.setTransform(29.5,29.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,51,51,0.106)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_15.setTransform(29.5,29.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,51,51,0.051)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_16.setTransform(29.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.buyB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6666FF").ss(4,1,1).p("ArtmeIXbAAQBaAAAABaIAAKJQAABahaAAI3bAAQhaAAAAhaIAAqJQAAhaBaAAg");
	this.shape.setTransform(84,41.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699FF").s().p("ArtGfQhaAAAAhaIAAqJQAAhaBaAAIXbAAQBaAAAABaIAAKJQAABahaAAg");
	this.shape_1.setTransform(84,41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.buyB, new cjs.Rectangle(-2,-2,172,87), null);


(lib.buyA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6666FF").ss(4,1,1).p("Ar8mAIX5AAQBaAAAABaIAAJNQAABahaAAI35AAQhaAAAAhaIAApNQAAhaBaAAg");
	this.shape.setTransform(85.5,38.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699FF").s().p("Ar8GBQhaAAAAhaIAApNQAAhaBaAAIX5AAQBaAAAABaIAAJNQAABahaAAg");
	this.shape_1.setTransform(85.5,38.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.buyA, new cjs.Rectangle(-2,-2,175,81), null);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ar8GBQhaAAAAhaIAApNQAAhaBaAAIX5AAQBaAAAABaIAAJNQAABahaAAg");
	this.shape.setTransform(85.5,38.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171,77);


(lib.bluefadeout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,204,255,0.439)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape.setTransform(29.5,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,204,255,0.435)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_1.setTransform(29.5,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,204,255,0.431)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_2.setTransform(29.5,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(102,204,255,0.42)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_3.setTransform(29.5,29.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,204,255,0.404)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_4.setTransform(29.5,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(102,204,255,0.384)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_5.setTransform(29.5,29.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(102,204,255,0.357)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_6.setTransform(29.5,29.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(102,204,255,0.329)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_7.setTransform(29.5,29.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(102,204,255,0.294)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_8.setTransform(29.5,29.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(102,204,255,0.259)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_9.setTransform(29.5,29.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(102,204,255,0.216)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_10.setTransform(29.5,29.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(102,204,255,0.169)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_11.setTransform(29.5,29.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(102,204,255,0.118)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_12.setTransform(29.5,29.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(102,204,255,0.059)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_13.setTransform(29.5,29.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(102,204,255,0)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_14.setTransform(29.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.bluefadein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,204,255,0)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape.setTransform(29.5,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,204,255,0.059)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_1.setTransform(29.5,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,204,255,0.118)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_2.setTransform(29.5,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(102,204,255,0.169)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_3.setTransform(29.5,29.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,204,255,0.216)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_4.setTransform(29.5,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(102,204,255,0.259)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_5.setTransform(29.5,29.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(102,204,255,0.294)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_6.setTransform(29.5,29.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(102,204,255,0.329)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_7.setTransform(29.5,29.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(102,204,255,0.357)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_8.setTransform(29.5,29.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(102,204,255,0.384)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_9.setTransform(29.5,29.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(102,204,255,0.404)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_10.setTransform(29.5,29.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(102,204,255,0.42)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_11.setTransform(29.5,29.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(102,204,255,0.431)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_12.setTransform(29.5,29.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(102,204,255,0.435)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_13.setTransform(29.5,29.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(102,204,255,0.439)").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_14.setTransform(29.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,59);


(lib.blackmark2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("AhnBXIAAgPIB6AAIAAAPgAkZBLIAAggIA5AAIAAAggAhnARIAAgNIBzAAIAAANgAkZALIAAgeIA5AAIAAAegAECgNIAAgYIAZAAIAAAYgADLgNIAAgYIAYAAIAAAYgAkZgyIAAggIA5AAIAAAggAiSg5QAPgMAMgPIARAAIgKAIIAOATgAECg+IAAgXIAZAAIAAAXgADLg+IAAgXIAYAAIAAAXg");
	this.shape.setTransform(567.7,34.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABCB5IAAgIIh6AAIAAAIIgiAAIAAiGIC0AAIAAA5IiSAAIAAALICaAAIAABCgAg4BcIB6AAIAAgPIh6AAgAg4AWIBzAAIAAgNIhzAAgADNBwIAAgZQghAIglANIgHgjIAdgGIAAg9IgXAAIAAgdIAXAAIAAgzIgYAAIAAgfIBQAAIAAAfIgZAAIAAAzIAXAAIAAAdIgXAAIAAA0IAagHIAAAiIA8AAIAAgVIg4AAIAAgcIA4AAIAAgSIg3AAIAAh9ICNAAIAAB9Ig3AAIAAASIA4AAIAAAcIg4AAIAAAVIBDAAIAAAbgAExgIIAZAAIAAgYIgZAAgAD6gIIAYAAIAAgYIgYAAgAExg5IAZAAIAAgXIgZAAgAD6g5IAYAAIAAgXIgYAAgAkeBwIAAgNIhPALIgFghIBagLIgBAOIAMAAIAAiKQgbAsgZAjIArgGIgCAeQg/AGgMAFIgMgeQAMgHAZglQgXABgIADIgKgcQANgJAghGIAfAMQgUAkgSAdIAVgCIAQgcIAbANIAAgwIB+AAIAAC9IAQAAIAAAggAjqBQIA5AAIAAggIg5AAgAjqAQIA5AAIAAgeIg5AAgAjqgtIA5AAIAAggIg5AAgABRgRIAAgLIihAAIAAALIghAAIAAgjIANAAQgFgIgOgPQAagUAMgZIAiAAIgIARIA+AAIAAAYIguAAIAOAQIgOALIAXAAIgEgOIAbgEIAFASIA4AAIgRgWIAHgFIgLAAQgIANgKAKIgagSQASgTALgbIAiAAIgGARIA4AAIAAAYIglAAIANAOIgRANIAoAAIAAAjgAhjg0IAwAAIgOgTIAKgIIgRAAQgMAPgPAMg");
	this.shape_1.setTransform(563,34.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.467)").s().p("Eg+fAjKMAAAhGTMB8/AAAMAAABGTgAag8BIAAAIIAgAAIAAhCIibAAIAAgLICTAAIAAg6Ii1AAIAACHIAiAAIAAgIgAcr8CICnAAIAAgcIhDAAIAAgUIA4AAIAAgcIg4AAIAAgSIA3AAIAAh+IiNAAIAAB+IA3AAIAAASIg4AAIAAAcIA4AAIAAAUIg8AAIAAghIgaAHIAAg0IAXAAIAAgeIgXAAIAAgzIAZAAIAAgfIhQAAIAAAfIAYAAIAAAzIgXAAIAAAeIAXAAIAAA9IgdAGIAHAjQAlgNAhgIgAU/8CICfAAIAAggIgQAAIAAi+Ih+AAIAAAwIgbgNIgQAcIgVACQASgdAUgkIgfgMQggBGgNAJIAKAcQAIgDAXgBQgZAmgMAHIAMAeQAMgFA/gGIACgeIgrAGQAZgkAbgsIAACLIgMAAIABgOIhaALIAFAhIBPgLgAav+PIAAALIAiAAIAAgjIgoAAIARgNIgNgOIAlAAIAAgYIg4AAIAGgRIgiAAQgLAbgSATIAaASQAKgKAIgNIALAAIgHAFIARAWIg4AAIgFgSIgcAEIAEAOIgXAAIAOgLIgOgQIAvAAIAAgYIg/AAIAIgRIgiAAQgMAZgaAUQAOAPAFAIIgNAAIAAAjIAhAAIAAgLg");
	this.shape_2.setTransform(400,225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackmark2, new cjs.Rectangle(0,0,800,450), null);


(lib.blackmark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.31)").s().p("EhEgAkVQhaAAAAhaMAAAhF1QAAhaBaAAMCJBAAAQBaAAAABaMAAABF1QAABahaAAg");
	this.shape.setTransform(447.5,232.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,895,465);


(lib.bg6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3399CC").s().p("AifGLQhQAAAAhQIAAp1QAAhQBQAAIE/AAQBQAAAABQIAAJ1QAABQhQAAg");
	this.shape.setTransform(24,39.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg6, new cjs.Rectangle(0,0,48,79.1), null);


(lib.bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHlCFIAAiQIhHAAIAAgOIDcAAQgBAogDAfQgCAxgwgBIgjAAIgDgRIAkABQAUAAAHgGQAIgHACgSQADgYABgiIh2AAIAACQgADfCCIAAjtICVAAIAADsIgOAAIAAgYIh5AAIAAAZgAExBcIA1AAIAAhXIg1AAgADtBcIA1AAIAAhXIg1AAgAExgHIA1AAIAAhWIg1AAgADtgHIA1AAIAAhWIg1AAgAB3BhIBYgRIAAAPQgkAGgwAKgAjXBaQgNgMAAgTQAAgnA0gJIAvgHQAAgvglAAQgYAAgYAUIAAgRQAIgGAPgFQAOgFANAAQAXAAANAPQANAOAAAbIAABiIgOAAIAAgeIgBAAQgGAPgPAKQgOAJgQAAQgWAAgMgMgAiqAXQgZADgJAIQgKAIAAARQAAANAJAJQAKAJAQAAQAVAAAPgRQAOgQAAgZIAAgPgAnHBRQgSgVAAgmQABggASgXQATgXAeAAQAcAAAQAUQAOAUAAAhIAAAGIhvAAQAAAfAOASQAOASAaAAQAZAAAYgTIAAAOQgYARgcAAQgeAAgSgVgAm4gdQgOAOgEAaIBhAAQgBgZgMgPQgLgOgUAAQgWAAgNAOgAkvA9IAAhlIgbAAIAAgMIAbAAIAAgnIAHgDIAHgCIAAAsIAnAAIAAAMIgnAAIAABjQAAAQAEAHQAGAHALAAQAIAAAKgGIAAANQgKAFgJAAQgiAAAAgogAgIBiIAAjfIAMAAIAADfgAhGBiIAAiWIAOAAIAACWgAqXBiIAAjTIA1AAQA2AAAbAbQAcAagBAyQABAwgeAeQgdAeg0AAgAqHBVIAhAAQAuAAAagYQAZgZAAgtQAAhaheAAIgkAAgAB7AlQAGgEAGgHQAQgUATgeQgfABgPACIgFgOQAHgFADgGQAXgoAWguIAPAGQgaAygYAoIANgBIAbgBIATggIAOAGQghA1giAuIA8gJIgBAOQg1AHgXAFgAI9gxIAAgeIhRAAIAAAeIgPAAIAAgeIhNAAIAAgOIBNAAIAAgkIAPAAIAAAkIBRAAIAAgkIAOAAIAAAkIBNAAIAAAOIhNAAIAAAegAhHhdQgDgEAAgFQAAgEADgDQAEgEAEAAQAFAAADADQADADAAAFQAAAFgDAEQgDADgFAAQgEAAgEgDg");
	this.shape.setTransform(153,26.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6666CC").s().p("EgWaAjPQhaAAAAhaMAAAhDpQAAhaBaAAMAs1AAAQBaAAAABaMAAABDpQAABahaAAgAGj/SIBGAAIAACRIAQAAIAAiRIB2AAQgBAjgCAYQgCASgIAHQgHAGgUAAIgkgBIACARIAkgBQAwACABgxQAEgfABgpIjcAAgADj9FIAPAAIAAgYIB4AAIAAAYIAPAAIAAjtIiWAAgAB89lIADAOQAxgLAjgFIAAgPIhXARgAh9/CIguAHQg1AIABAoQgBASANANQANAMAVgBQARABAOgKQAOgJAHgPIAAAAIAAAeIAOAAIAAhiQAAgcgNgPQgMgOgYAAQgMAAgPAFQgPAEgHAHIAAAQQAXgTAZAAQAlgBgBAxgAnB/oQgTAWAAAhQAAAnASAVQASAVAdgBQAdAAAYgQIAAgOQgYASgaABQgaAAgOgSQgOgSAAgfIBwAAIAAgGQAAgigPgUQgPgUgdAAQgeAAgSAXgAlF/vIAbAAIAABmQgBAoAiAAQAKAAAKgFIAAgNQgKAGgIAAQgMgBgFgGQgFgIAAgPIAAhkIAoAAIAAgMIgoAAIAAgsIgHACIgGADIAAAnIgbAAgAgE9kIANAAIAAjgIgNAAgAhB9kIANAAIAAiXIgNAAgAqS9kIAyAAQA0AAAdgeQAegeAAgxQAAgygbgbQgcgag1AAIg1AAgACL+sQgGAHgGAEIAGAPQAXgGA0gGIABgOIg7AJQAigvAgg1IgOgGIgTAgIgbABIgMABQAYgoAZgyIgOgGQgWAugXAoQgEAGgGAFIAEANQAPgCAfAAQgTAfgQAUgEAJBggWIAAAeIAPAAIAAgeIBMAAIAAgOIhMAAIAAglIgPAAIAAAlIhRAAIAAglIgPAAIAAAlIhMAAIAAAOIBMAAIAAAeIAPAAIAAgegEgBDgg0QgDADAAAEQAAAFADADQAEAEAEAAQAFAAADgEQAEgDAAgFQAAgFgEgDQgDgDgFAAQgEAAgEAEgAE19rIAAhWIA1AAIAABWgADy9rIAAhWIA1AAIAABWgAjI91QgJgJAAgOQAAgRAKgHQAJgIAYgEIApgFIAAAOQAAAagOAQQgPARgVAAQgQgBgJgIgAqD9yIAAi4IAkAAQBfAAAABaQAAAugaAZQgZAXgvAAgAnG+8QAEgaAOgOQANgOAWAAQAUAAAMAOQAMAOAAAagAE1/OIAAhWIA1AAIAABWgADy/OIAAhWIA1AAIAABWg");
	this.shape_1.setTransform(152.5,225.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(0,0,305,451), null);


(lib.beiduofenhair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["村民交易生成器_atlas_"],6), null, new cjs.Matrix2D(1,0,0,1,-283.4,-109.8)).s().p("A06MsQhvihAuiuQCPh3COAxQjGkcCZloQAKglA2hGQA1hGAigJQAhgJADhcQAChbBRh/QBQh/ByglQBygkBSALQIti3GmEKQGFEuA4GsIEnAFIDDBuQkehLBWDbQDzg5grEuIiRgoIgPBuIg3hGIg8AAQhpASgKCEIgohzIhkCgIgoh4IhaBGIgPhpIhpBBIh4AeIhfh9IgtiWIiWgoIhVibIjgAPIlUhBIAFg2IhGgKIhkBKIi+C0IhkAFIBGHvIg8AAIgUBfIAoC5QhcglhdBJQizgeh5ilg");
	this.shape.setTransform(141.7,100.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.beiduofenhair, new cjs.Rectangle(0,0,283.5,201.4), null);


(lib.wudiswich = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var that=this;
		this.btn1.addEventListener("click", fl_ClickToHide_6.bind(this));
		
		function fl_ClickToHide_6()
		{
			localStorage.ifwudi="yes";
			that.play();
		}
		var that=this;
		if(localStorage.ifwudi=="yes"){
			that.play();
		}else{
			that.stop();
		}
	}
	this.frame_15 = function() {
		var that=this;
		this.btn1.addEventListener("click", fl_ClickToHide_6.bind(this));
		
		function fl_ClickToHide_6()
		{
			localStorage.ifwudi="no";
			that.play();
		}
		var that=this;
		
		if(localStorage.ifwudi=="no"){
			that.play();
		}else{
			that.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(15));

	// btn
	this.btn1 = new lib.button();
	this.btn1.parent = this;
	this.btn1.setTransform(87.5,-2.4,0.389,0.389);
	new cjs.ButtonHelper(this.btn1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn1).to({_off:true},29).wait(1));

	// name
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEiBVQAggUARgYQgSgbgGgsQgIAQgIAMIgHgIQAYglALgvIAKACQgFATgGAQIBEAAIAAAKIgQAAQgGA4gUAgQAQAWAcATIgIAJQgdgVgOgTQgQAVgfAWIgIgJgAFZAfQASgcAEgyIgsAAQAEAwASAegAAKBZIgEgEQBDgiAMg6IhNAAIAAgLIBPAAQAFgUABgeIhGAAIAAgKICaAAIAAAKIhKAAQgBAfgDATIBdAAIAAALIhMAAIAABCQAAAKAEAEQADAEALgBIAcAAQASABABgRIACgXIAKAEIgCAZQgCAWgagCIggAAQgbABABgbIAAhDIgJAAQgMA/hGAmIgEgFgAmKBWQAhgXAFgqIALACIgEARQAQAfAgADIAAg9IhaAAIAAgJIC5AAIAAAJIhUAAIAAAZIBFAAIAAAJIhFAAIAAAcIACAAIABAAIAiABIAxAAIgEAKIhPgBQgvABgTgkQgIAYgaAUIgHgIgAioBeIAAhUICJAAIAABTIgLAAIAAgOIhzAAIAAAPgAidBGIBzAAIAAgyIhzAAgADXBcIAAhSIAgAAIAAgkIgpAAIAAgKIApAAIAAgkIgkACIgCgKQAqgBAogDIACAJIgUABIgQABIAAAlIAmAAIAAAKIgmAAIAAAkIAhAAIAABEIhBAAIAAAOgADhBFIA2AAIAAgxIg2AAgAhoAAIAAgzQgeAcg0AXIgHgKQA9gZAlgnIhbAAIAAgJICuAAIAAAJIhFAAQgIAKgMAKIAIAAIAAA2gAhTgrIAGgIQAjATAkAUIgHAKQgjgWgjgTgAlrgPIAAhFICAAAIAABFgAlhgYIBrAAIAAgWIhrAAgAlhg3IBrAAIAAgVIhrAAg");
	this.shape.setTransform(35.8,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	// t
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("ABpAAQAAAsgfAeQgfAfgrAAQgqAAgfgfQgfgeAAgsQAAgrAfgeQAfgfAqAAQArAAAfAfQAfAeAAArg");
	this.shape_1.setTransform(100,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AhJBKQgegegBgsQABgrAegeQAegeArgBQArABAfAeQAfAegBArQABAsgfAeQgfAegrAAQgrAAgegeg");
	this.shape_2.setTransform(100,12);

	this.instance = new lib.tuotuo();
	this.instance.parent = this;
	this.instance.setTransform(100.1,12.1,1,1,0,0,0,10.5,10.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},13).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},13).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:142.6},13,cjs.Ease.get(1)).wait(2).to({x:100.1},13,cjs.Ease.get(1)).wait(1));

	// green
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66CC00").s().p("AhJBKQgegfgBgrQABgrAegeQAegeArgBQArABAfAeQAfAegBArQABArgfAfQgfAfgrgBQgrABgegfg");
	this.shape_3.setTransform(100,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66CC00").s().p("AhcBNIgIgFQgOgKgJgQQgJgRgBgTIAAgIIAAgCQgBgUAIgQQAIgRANgKIASgOQAngaAyAAQAyAAApAaIAIAGQAOAKAJARQAJAQABAUIAAAIIAAACQAAASgGAQQgJARgNALQgHAHgLAGQgnAagyAAQgyAAgpgag");
	this.shape_4.setTransform(103.1,11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66CC00").s().p("AhsBRIgKgFQgTgJgLgSQgMgRgBgXIAAgJIAAgBQAAgWALgTQAKgSARgJIAWgLQAwgVA4AAQA6AAAxAVIAKAFQARAJAMARQANATAAAWIABAJIAAACQgBAWgKARQgKASgSAKIgWALQgwAVg4AAQg6AAgwgVg");
	this.shape_5.setTransform(105.9,11.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66CC00").s().p("Ah8BUIgLgEQgWgHgOgTQgPgUAAgZIgBgJIAAgCQAAgZAOgUQANgTAUgIIAbgJQA3gSA+AAQBAAAA5ASIALAEQAWAIAOATQAPATAAAaIABAJIAAADQgBAYgNASQgNAUgUAHIgcAKQg3ASg+AAQhAAAg4gSg");
	this.shape_6.setTransform(108.4,11.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66CC00").s().p("AiKBWIgNgDQgYgGgRgUQgRgVAAgbIAAgLIAAgBQAAgcAPgUQAQgVAYgGIAdgIQA/gOBDAAQBGAABAAOIANAEQAZAGAQAUQARAVAAAbIAAALIAAADQgBAagOAUQgQAUgYAHIgeAHQg/APhDAAQhFAAhAgPg");
	this.shape_7.setTransform(110.8,11.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66CC00").s().p("AiWBZIgPgDQgbgFgTgVQgSgWgBgdIAAgMIAAgBQAAgeASgWQASgWAagEIAigGQBEgMBJABQBKgBBHAMIAOACQAcAFARAWQAUAWAAAeIAAALIAAAEQAAAbgRAVQgTAWgaAFIgiAGQhFAMhIAAQhLAAhFgMg");
	this.shape_8.setTransform(112.8,11.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66CC00").s().p("AiiBbIgPgCQgegEgVgXQgTgWgBggIAAgMIAAAAQAAggAUgXQATgXAegDIAkgFQBKgJBMAAQBQAABMAJIAPACQAeADAUAXQAVAXAAAfIAAANIAAADQgBAegTAWQgTAXgeAEIgmAEQhJAJhMAAQhPAAhMgJg");
	this.shape_9.setTransform(114.7,11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66CC00").s().p("AirBdIgRgCQgfgCgXgYQgVgYgBggIAAgOIAAgBQAAggAWgYQAVgYAggCIAngEQBOgGBQAAQBUAABRAGIAQACQAgACAVAYQAXAXAAAiIAAANIAAAEQgBAegVAXQgVAYggADIgoADQhOAGhQABQhTgBhQgGg");
	this.shape_10.setTransform(116.2,11.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66CC00").s().p("AizBfIgSgBQghgCgYgZQgXgYAAgjIAAgNIAAgBQAAgiAXgZQAXgYAhgCIApgCQBTgFBTAAQBXAABVAFIARAAQAhACAXAZQAYAYAAAjIAAANIAAAEQgBAggWAYQgXAYghACIgrADQhSAEhTAAQhWAAhUgEg");
	this.shape_11.setTransform(117.6,11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66CC00").s().p("Ai6BgIgSgBQgjgBgZgZQgYgZAAgkIAAgOIAAAAQAAgkAYgZQAYgZAjgBIArgCQBWgDBVAAQBaAABYADIASABQAjABAYAZQAZAZAAAkIAAAOIAAAEQgBAhgXAYQgYAZgjABIgsACQhWADhVAAQhZAAhYgDg");
	this.shape_12.setTransform(118.7,11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#66CC00").s().p("Ai/BhIgTgBQgkAAgZgaQgZgaAAgkIAAgPQAAgkAYgaQAagZAkgBIAsgBQBYgBBYAAQBcAABbABIASABQAkAAAZAaQAZAZAAAlIAAAOIAAAEQgBAigYAYQgZAagkABIgtABQhYABhYAAQhaAAhbgBg");
	this.shape_13.setTransform(119.5,11.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66CC00").s().p("AjCBiIgUgBQglAAgagaQgagaABglIAAgPQgBglAagaQAagaAlAAIAtAAICzgBIC6ABIATAAQAlAAAZAaQAbAagBAlIAAAPIAAAEQgBAigZAZQgZAaglAAIgvABIiyAAIi4AAg");
	this.shape_14.setTransform(120.2,11.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66CC00").s().p("AgKBiIi7AAIgUAAQglgBgagaQgagZAAgmIAAgPQAAgmAagaQAagaAlAAIAuAAIC1AAIC8AAIAUAAQAlAAAaAaQAaAaAAAmIAAAPIAAAEQgCAjgYAYQgaAaglAAIgwABIi0AAg");
	this.shape_15.setTransform(120.5,11.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#66CC00").s().p("AjZBiQgmAAgagbQgagZAAgmIAAgPQAAgmAagaQAagaAmAAIGzAAQAmAAAaAaQAaAaAAAmIAAAPQAAAmgaAZQgaAbgmAAg");
	this.shape_16.setTransform(120.6,11.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#66CC00").s().p("AiiBbIgQgCQgegDgVgXQgUgXAAggIAAgMIAAAAQAAghATgWQAVgXAdgEIAlgEQBKgJBMAAQBQAABNAJIAPABQAeAEAUAXQAVAXAAAfIAAANIAAADQgBAegTAWQgUAXgdAEIgmAEQhKAJhMAAQhPAAhMgJg");
	this.shape_17.setTransform(114.8,11.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#66CC00").s().p("AiSBYIgPgDQgagFgTgVQgRgVgBgdIAAgMIAAgBQAAgdARgVQARgWAbgFIAggGQBDgNBGAAQBKAABEANIAOACQAaAFASAWQATAVAAAdIAAAMIAAADQgBAbgQAUQgSAWgaAGIggAGQhDANhHAAQhIAAhEgNg");
	this.shape_18.setTransform(112.2,11.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#66CC00").s().p("AiEBWIgNgEQgYgGgPgUQgQgUgBgbIAAgKIAAgCQAAgaAPgVQAPgUAWgGIAdgIQA8gQBBAAQBEAAA9AQIAMADQAYAGAPAVQAQAUABAbIAAAKIAAADQAAAZgPATQgOAVgXAGIgeAJQg7APhBAAQhEAAg8gPg");
	this.shape_19.setTransform(109.9,11.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#66CC00").s().p("Ah4BTIgLgEQgVgHgOgUQgOgSAAgYIgBgKIAAgCQAAgYANgUQANgSATgJIAagJQA1gTA9AAQA/AAA2ATIALAEQAVAIAOATQAOATAAAZIABAJIAAACQgBAYgMASQgNATgTAJIgbAJQg1ATg8AAQg/AAg2gTg");
	this.shape_20.setTransform(107.8,11.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#66CC00").s().p("AhtBRIgKgFQgSgIgMgSQgMgSgBgXIgBgJIAAgBQAAgXALgSQALgSARgJIAXgLQAwgVA4AAQA6AAAxAVIAKAEQASAKAMARQANATAAAWIABAJIAAACQgBAWgKARQgLASgRAKIgXALQgwAVg4AAQg6AAgxgVg");
	this.shape_21.setTransform(106,11.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#66CC00").s().p("AhkBPIgJgFQgQgKgKgQQgLgSgBgVIAAgJIAAgBQAAgUAJgSQAJgRAPgKIAUgMQAsgYA0AAQA2AAAtAYIAJAFQAPAKALARQALARABAVIAAAIIAAADQgBATgIARQgJASgPAKIgVAMQgrAYg1AAQg1AAgtgYg");
	this.shape_22.setTransform(104.4,11.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#66CC00").s().p("AhUBMIgIgGQgNgLgIgPQgIgQgBgSIgBgIIAAgCQAAgSAHgQQAGgQALgLIAQgOQAlgcAvAAQAwAAAlAcIAHAGQANALAIAPQAJAQAAATIABAIIAAABQAAASgHAPQgGAQgMAMQgGAHgKAHQgkAcgvAAQgxAAgjgcg");
	this.shape_23.setTransform(102,11.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#66CC00").s().p("AhPBLIgIgGQgLgMgIgOQgHgPgBgSIgBgHIAAgDQAAgRAHgPQAFgQAKgLQAGgIAJgHQAhgdAuAAQAtAAAjAdIAHAGQALAMAIAPQAHAPABASIABAIIAAABQAAARgGAOQgFAQgLAMQgHAIgIAHQghAdguAAQguAAghgdg");
	this.shape_24.setTransform(101.1,11);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#66CC00").s().p("AhMBKIgGgGQgLgMgHgOQgGgPgCgRIAAgHIAAgDQAAgQAFgPQAFgPAJgNQAGgHAIgIQAggdArAAQAtAAAgAdIAGAHQAMAMAGAPQAHAOABASIAAAHIAAABQAAARgEAOQgFAPgKANQgGAIgIAHQggAegsAAQgsAAgggeg");
	this.shape_25.setTransform(100.5,11);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#66CC00").s().p("AhKBKIgGgHQgLgMgGgOQgGgOgBgRIgBgHIAAgDQAAgPAFgPQAFgPAIgNQAGgHAHgIQAfgeArgBQAsABAfAeIAGAGQAKANAHAOQAGAPABARIABAHIAAABQAAAQgEAOQgFAPgJANQgGAJgHAHQgfAfgsgBQgrABgfgfg");
	this.shape_26.setTransform(100.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// b
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(3,1,1).p("AjlhyIHLAAQAmAAAaAaQAaAaAAAmIAAAxQAAAmgaAaQgaAagmAAInLAAQglAAgbgaQgagaAAgmIAAgxQAAgmAagaQAbgaAlAAg");
	this.shape_27.setTransform(121,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-2.4,158.3,30);


(lib.villagerchosen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{jiaoyi:144});

	// timeline functions:
	this.frame_0 = function() {
		this.gr = function (Min, Max) {
			var Range = Max - Min;
			var Rand = Math.random();
			var num = Min + Math.round(Rand * Range); //四舍五入
			return num;
		}
		
		this.changename.addEventListener("click", fl_ClickToHide_2.bind(this));
		var that = this;
		function fl_ClickToHide_2() {
			function cn() {
				var newname = prompt("请输入村民的名字", localStorage.villagername);
				if (newname !== null) {
					if (newname.length >= 14 || newname.length <= 0) {
						alert("名字太短或者太长了！要在1~14个字内");
						return cn();
					} else {
						localStorage.villagername = newname;
						that.names.text = localStorage.villagername;
					}
				}
			}
			cn();
		}
		this.names.text=localStorage.villagername;
		var that=this;
		if(localStorage.villagerchosen=="yes"){
			that.gotoAndStop(Number(localStorage.villagerchosenum)+1);
		}else{
			localStorage.villagerchosen="yes";
			localStorage.villagerchosenum=0;
			that.gotoAndStop(Number(localStorage.villagerchosenum)+1);
		}
	}
	this.frame_1 = function() {
		this.v00.addEventListener("click", fl_ClickToGoToWebPage_6);
		
		function fl_ClickToGoToWebPage_6() {
			window.root.vc.gotoAndPlay(7);
		}
	}
	this.frame_2 = function() {
		this.v01.addEventListener("click", fl_ClickToGoToWebPage_6);
		
		function fl_ClickToGoToWebPage_6() {
			window.root.vc.gotoAndPlay(7);
		}
	}
	this.frame_3 = function() {
		this.v02.addEventListener("click", fl_ClickToGoToWebPage_6);
		
		function fl_ClickToGoToWebPage_6() {
			window.root.vc.gotoAndPlay(7);
		}
	}
	this.frame_4 = function() {
		this.v03.addEventListener("click", fl_ClickToGoToWebPage_6);
		
		function fl_ClickToGoToWebPage_6() {
			window.root.vc.gotoAndPlay(7);
		}
	}
	this.frame_5 = function() {
		this.v04.addEventListener("click", fl_ClickToGoToWebPage_6);
		
		function fl_ClickToGoToWebPage_6() {
			window.root.vc.gotoAndPlay(7);
		}
	}
	this.frame_7 = function() {
		playSound("haggle1");
	}
	this.frame_42 = function() {
		var that=this;
		this.v0.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.root.cv = 0;
			localStorage.villagerchosenum=window.root.cv;
			that.play();
		}
		
		
		
		
		function fl_ClickToGoToWebPage_2() {
			window.root.cv = 1;
			localStorage.villagerchosenum=window.root.cv;
			that.play();
		}
		this.v2.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.root.cv = 2;
			localStorage.villagerchosenum=window.root.cv;
			that.play();
		}
		this.v3.addEventListener("click", fl_ClickToGoToWebPage_4);
		
		function fl_ClickToGoToWebPage_4() {
			window.root.cv = 3;
			localStorage.villagerchosenum=window.root.cv;
			that.play();
		}
		
		this.v4.addEventListener("click", fl_ClickToGoToWebPage_5);
		
		function fl_ClickToGoToWebPage_5() {
			window.root.cv = 4;
			localStorage.villagerchosenum=window.root.cv;
			that.play();
		}
		this.v1.addEventListener("click", fl_ClickToHide.bind(this));
		
		function fl_ClickToHide()
		{
				window.root.cv = 1;
			localStorage.villagerchosenum=window.root.cv;
			that.play();
		}
		this.stop();
	}
	this.frame_43 = function() {
		playSound("yes1");
	}
	this.frame_65 = function() {
		var randoma=this.gr(1,20);
		if(randoma==14){
			this.play();
		}else{
			this.gotoAndPlay(0);
		}
		console.log("Hidden:"+randoma);
	}
	this.frame_66 = function() {
		playSound("JohnCena");
	}
	this.frame_144 = function() {
		playSound("thankyou");
	}
	this.frame_161 = function() {
		playSound("yessir");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(2).call(this.frame_7).wait(35).call(this.frame_42).wait(1).call(this.frame_43).wait(22).call(this.frame_65).wait(1).call(this.frame_66).wait(78).call(this.frame_144).wait(17).call(this.frame_161).wait(35));

	// btn
	this.changename = new lib.button();
	this.changename.parent = this;
	this.changename.setTransform(-41.9,-43.4,1.368,0.493);
	new cjs.ButtonHelper(this.changename, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.changename).to({_off:true},144).wait(52));

	// name
	this.names = new cjs.Text("", "bold 24px 'Microsoft YaHei'", "#FFFFFF");
	this.names.name = "names";
	this.names.textAlign = "center";
	this.names.lineHeight = 34;
	this.names.lineWidth = 230;
	this.names.parent = this;
	this.names.setTransform(75.1,-40.3);

	this.timeline.addTween(cjs.Tween.get(this.names).wait(196));

	// Part 7
	this.instance = new lib.mlg1();
	this.instance.parent = this;
	this.instance.setTransform(309,100,1,1,0,0,0,90,21.8);
	this.instance._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(3,1,1).p("Ah7gLQgBgBABgBQgCgpAAgCQgDgWgRAAQgRAAgLAPQgEAGgMAaQgUAtgrAAQgPAAgTgOQgZgUAAgcQAAgEAIgbQAHgbACgEIAEACQAFAEAGAGAkogoQAKgeALgSQABgCACgCIAAAAQAQgXAegcIAPgMQAOgPAQgFQAJgEARgIQAPgGALAAQAwAAAgAoQAhApAAA+QAAAKgBAKQgCAXgFARQAAABAAABIAAAAQgCAHgDAHQgNAhgYAAQgoAAgMgkQgBgDgBgEQgEgIAAgMQAAgDABgEQAAgBAAgBQACgQAMgJQANgKARAAQAWAAANANQACABABACQAFAGADAIQABACAAADQABADAAAEQAAAHgDAHQgCAGgDAFQgBABgBABQgLANgPAAQgDAAgCgBQgFgBgFgCQgJgFgIgLQgKgOgCgJQAAgDAAgCQAAgGAHgFQAIgFAJAAQARAAAOAKQAFAEADAEQABABABABQACAEAAAFQAAAKgHAHQgHAIgMAAQgFAAgFgDQgEgCgFgFQgHgIAAgFQAAgCABgDQACgDAEgDQAHgFAGAAQAEAAAHADQAHACACACIAAAJIgIAAIgKAAQgCgBgBAAIgHAAIgFgFQAAgFAFAAQABAAABAAIAAAAQAJACAEADIAAAEQACABADABAh4AQQgDgLAAgOQgBgBABgBAg9ApQgHgBgGgBQgFgBgFgCQgXgGgJgIQgCgDgCgDAhFgBIAAABIgIAAQgGgEgBgBIAAgFQABAAABAAQADACAKAHgAAmB0QASh3A9gyQAjgeAoAAQAvAAAiAhQAoAmAABEQAABDgXAhQgFAIgHAGQgZAYgsAAQgiAAgDg2QAAgEAAgDQgBgCABgCQgBgDABgDQABgpgBgIQgDgXgPAAQgQAAgOAxQgOAxggAAQgFAAgHgJQgIgLgKgFQAAgBAAgBQABgEAJgCAEJCfQgwAQgUgOQgEgCgCgDQgGgHgCgLQAAgCAAgDQAAgCAAgDQAAgCAAgCQACgjArAAQATAAAQAMQAPAMAAAPQAAAkgxAAQgSAAgLgIQgKgHAAgLQAAgDABgCQABgFAEgEQACgDAFgDQAAAAABgBQAAAAAAAAQABAAAAgBQAIgEAIgCQAEgBAFAAQAMAAAIAHQAIAHAAAHQAAAKgNAJQgLAHgJAAQgRAAgIgKQgEgFgBgFIAAgBQAAgBAAgBQAAgEADgEQACgDAEgCQAAgBABAAQAAAAABAAQAAgBABAAQAHgEAIAAQAOAAAJAKQAIAIAAAGQAAAFgFADQgEADgEAAQgDAAgEgDQgFgDgDgCQAAgCgCgDQABgCACgBQgDAAgDgBQgEgBgCgCQgBAAAAAAIAAgDIAHAAQgCACgBABQgBAAgBAAIAFADADiCFQACgCACAAIADADQgEAAgDgBg");
	this.shape.setTransform(60.4,94.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AEJCqQgwARgUgOIADgFQALAIASAAQAxgBAAgjQgBgPgPgMQgPgNgUAAQgqAAgDAkIgLgCQACgpgBgHQgDgXgPAAQgRAAgNAxQgOAxgggBQgGABgGgKQgJgKgKgGIABgBIgLgGQATh5A9gxQAjgdAnAAQAwAAAhAhQAoAmABBEQgBBDgWAhQgFAIgHAGgAAwCGQABgEAIgCQgIACgBAEgAkfAKQgZgSAAgcQABgEAHgbIAKggIAEADIALAKIAHAGIgDAEQgLARgKAfQAKgfALgRIADgEIAAgBQAQgWAegcIAOgNQAPgOAQgFIAagMQAPgGALAAQAwAAAgAoQAgAoAAA/IgYASIgDgEQgNgMgWAAQgSAAgMAKQgMAJgCAPIgBAAIgBgrQgDgVgRAAQgRAAgLAOQgEAHgMAaQgUAsgrAAQgPAAgUgPg");
	this.shape_1.setTransform(60.4,93.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},66).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},12).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66).to({_off:false},0).to({rotation:15,x:81.6,y:102},10,cjs.Ease.get(1)).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).wait(1).to({x:84.6,y:104},0).wait(1).to({x:82.6,y:102},0).to({_off:true},12).wait(52));

	// mlg
	this.instance_1 = new lib.mlg2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(376.1,131.2,1.059,1.059,0,0,0,71.1,57.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.beiduofenhair();
	this.instance_2.parent = this;
	this.instance_2.setTransform(97.8,57.8,0.579,0.579,15,0,0,141.8,100.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(81).to({_off:false},0).to({regX:71,regY:57.4,scaleX:0.62,scaleY:0.62,rotation:105,x:23.1,y:144.1},9,cjs.Ease.get(1)).to({_off:true},54).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(144).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).wait(44));

	// Part 1
	this.v0 = new lib.v0();
	this.v0.parent = this;
	this.v0.setTransform(69.6,165.1,1,1,0,0,0,80.5,160.5);
	this.v0._off = true;

	this.timeline.addTween(cjs.Tween.get(this.v0).wait(7).to({_off:false},0).to({x:-526.4},16,cjs.Ease.get(1)).wait(20).to({x:69.6},22,cjs.Ease.get(1)).wait(131));

	// Part 6
	this.v4 = new lib.v4();
	this.v4.parent = this;
	this.v4.setTransform(69.6,165.1,1,1,0,0,0,80.5,160.5);
	this.v4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.v4).wait(7).to({_off:false},0).wait(12).to({x:116.6},18,cjs.Ease.get(1)).wait(6).to({x:69.6},22,cjs.Ease.get(1)).to({_off:true},1).wait(130));

	// Part 5
	this.v3 = new lib.v3();
	this.v3.parent = this;
	this.v3.setTransform(69.6,165.1,1,1,0,0,0,80.5,160.5);
	this.v3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.v3).wait(7).to({_off:false},0).wait(9).to({x:-44.3},17,cjs.Ease.get(1)).wait(10).to({x:69.6},22,cjs.Ease.get(1)).to({_off:true},1).wait(130));

	// Part 4
	this.v2 = new lib.v2();
	this.v2.parent = this;
	this.v2.setTransform(69.6,165.1,1,1,0,0,0,80.5,160.5);
	this.v2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.v2).wait(7).to({_off:false},0).wait(6).to({x:-205.4},16,cjs.Ease.get(1)).wait(14).to({x:69.6},22,cjs.Ease.get(1)).to({_off:true},1).wait(130));

	// Part 3
	this.v00 = new lib.vc0();
	this.v00.parent = this;
	this.v00.setTransform(69.6,165.1,1,1,0,0,0,80.5,160.5);

	this.v01 = new lib.v1();
	this.v01.parent = this;
	this.v01.setTransform(69.6,165.1,1,1,0,0,0,80.5,160.5);
	this.v01._off = true;

	this.v02 = new lib.v2();
	this.v02.parent = this;
	this.v02.setTransform(69.6,165.1,1,1,0,0,0,80.5,160.5);

	this.v03 = new lib.v3();
	this.v03.parent = this;
	this.v03.setTransform(69.6,165.1,1,1,0,0,0,80.5,160.5);

	this.v04 = new lib.v4();
	this.v04.parent = this;
	this.v04.setTransform(69.6,165.1,1,1,0,0,0,80.5,160.5);

	this.v1 = new lib.v001();
	this.v1.parent = this;
	this.v1.setTransform(69.6,165.1,1,1,0,0,0,80.5,160.5);
	this.v1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.v00}]},1).to({state:[{t:this.v01}]},1).to({state:[{t:this.v02}]},1).to({state:[{t:this.v03}]},1).to({state:[{t:this.v04}]},1).to({state:[]},1).to({state:[{t:this.v1}]},1).to({state:[{t:this.v1}]},3).to({state:[{t:this.v1}]},15).to({state:[{t:this.v01}]},18).to({state:[{t:this.v01}]},22).to({state:[]},1).wait(130));
	this.timeline.addTween(cjs.Tween.get(this.v01).wait(2).to({_off:false},0).to({_off:true},1).wait(40).to({_off:false,x:-366.4},0).to({x:69.6},22,cjs.Ease.get(1)).to({_off:true},1).wait(130));
	this.timeline.addTween(cjs.Tween.get(this.v1).wait(7).to({_off:false},0).wait(3).to({x:-366.4},15,cjs.Ease.get(1)).to({_off:true},18).wait(153));

	// bg
	this.instance_3 = new lib.whitemask();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-204.9,162,1,1,0,0,0,400,225);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({alpha:0.301},26).wait(7).to({alpha:0},25).to({_off:true},1).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.9,-43.4,234,38);


(lib.trademax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btnt.addEventListener("click", fl_ClickToHide_9.bind(this));
		var that = this;
		function fl_ClickToHide_9() {
			function cn() {
				if (localStorage.choosemore == 1) {
				var newnum = prompt("请输入数字", localStorage.trmax);
				}else{
					var newnum = prompt("请输入数字", localStorage["tr" + localStorage.choosemore + "max"]);
				}
				if (isNaN(newnum)) {
					alert("不是数字！");
					return cn();
				} else {
					if (newnum !== null) {
						if (newnum <= 99999 && newnum >= 0) {
							if (localStorage.choosemore == 1) {
								localStorage.trmax = newnum;
								that.trmax.text = localStorage.trmax;
							} else {
								localStorage["tr" + localStorage.choosemore + "max"] = newnum;
								that.trmax.text = localStorage["tr" + localStorage.choosemore + "max"];
							}
						} else {
							alert("值不能太大或太小！");
							return cn();
						}
					}
				}
			}
			cn();
		}
	}
	this.frame_1 = function() {
		if (localStorage.choosemore == 1) {
			this.trmax.text = localStorage.trmax;
		} else {
			this.trmax.text = localStorage["tr" + localStorage.choosemore + "max"];
		}
	}
	this.frame_7 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(1));

	// btn
	this.btnt = new lib.button();
	this.btnt.parent = this;
	this.btnt.setTransform(-8.5,31.2,1.284,0.384);
	new cjs.ButtonHelper(this.btnt, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnt).wait(8));

	// bg
	this.trmax = new cjs.Text("", "20px 'Microsoft YaHei Light'", "#FFFFFF");
	this.trmax.name = "trmax";
	this.trmax.textAlign = "center";
	this.trmax.lineHeight = 28;
	this.trmax.lineWidth = 207;
	this.trmax.parent = this;
	this.trmax.setTransform(105.5,33.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlBXQAggXAMgUQgOgagGgqIgCADIgIAOIgIgHQAWghAMgvIALABQgFASgHARIA6AAIAAAKIgQAAQgGA+gSAeQANAUAdAUIgIAJQgbgVgNgSQgOAUgdAVIgIgIgABFgnQAFAwAOAZQAQgbAEg3IgkAAIgDAJgAjWBVQBDgkAEg/IABgVIAMAAIgBAUQANBDA2AeIgIAKQg2gjgKg3QgHA3g/AmIgIgKgAmLBWQA3gaAKgsIghAAQgSArg/AYIgHgJQA8gWAQgkIgjAAQgOAPgTAMIgHgJQAfgSATgbIAKAEIgMAOIB+AAIgDAtQgBApglgCIgXABIgCgMIAZABIADAAQAYAAABgdQACgVAAgPIggAAQgLAzg6AcIgHgJgAFlBeIAAixIA2AAIAAAKIgSA3QATAWAAAaQAAAcgVABIgGABIgDAAIgGAAIgCgLIAOABQAOAAAAgUQAAgZgUgVIATg6IgiAAIAACogAg0BVQAigJASgMIglgRIANgUIgZAAIAAgIIAfAAIAJgOIAAgBIAJADIgGAMIAvAAQgEAbgSAQIAWAKIgHAJIgYgMQgUAQgkAJIgGgJgAgYArIAhAPQAPgMAFgTIgpAAIgMAQgAqJBTQA8gQAXgTQgRgRgRghIAJgFQAQAeASARQARgQAQggIAKAEQgQAhgTATQAbAVA4AMIgGAMQg7gQgagWQgZAVg9ASgAGmBVQADgDACgEQABgDAAgFIAAiZIBYAAIAABXIgvAAQAHAXAJAOQATgLAVgOIAGAIIgoAZQANARAhAQIgHAJQg6gbgNg8IgVAAIAABIIAigRIABALIgiARQgFADgEAEgAG2gEIBEAAIAAgeIhEAAgAG2grIBEAAIAAgfIhEAAgACVBTIAAgLIBOAAIAAihIAMAAIAAA7IBRAAIAAALIhRAAIAABbIBgAAIAAALgAj7BCQAVgiATgpIAKAHIgoBLgAJ8BGQgCgDAAgDQAAgEACgCQADgDADAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgDAAgDgCgAqGAAQAegRAcgZIAJAJQgbAXghAUIgHgKgAoWghIAGgIIA8AnIgIAIQgagSgggVgAgzgEQAcgMATgXIgsAAIAAgIIAuAAIAAgsIAJAAIAAAsIAoAAIAAAIIgoAAIAAARIAFgFIAfAUIgHAHIgdgUIAAAUIgJAAIAAgdQgOAUgcANIgHgIgAhkgKIARglIhQAAQgIARgNAVIgKgGQAYgjALgqIALADIgLAfIBXAAIAAALIgSApIgKgEgAmpgOIAAhGICLAAIAABGgAmfgXIB3AAIAAgWIh3AAgAmfg2IB3AAIAAgVIh3AAgAJ8gYQgCgDAAgDQAAgEACgCQADgDADAAQADAAADADQACACAAAEQAAADgCADQgDACgDAAQgDAAgDgCgAj1hKIAIgGIAiAqIgJAHIghgrgAqIg1IAAgLIBbAAIgNgYIAKgFIAOAZIgJAEIBZAAIAAALgAAQg8IAXgXIAIAGIgXAXgAgqhNIAHgGIAXAXIgIAGIgWgXg");
	this.shape.setTransform(70.8,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.trmax}]}).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-1.5,219.5,62.3);


(lib.namevisibleswich = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var that=this;
		this.btn1.addEventListener("click", fl_ClickToHide_6.bind(this));
		
		function fl_ClickToHide_6()
		{
			localStorage.ifshowname="yes";
			that.play();
		}
		var that=this;
		if(localStorage.ifshowname=="yes"){
			that.play();
		}else{
			that.stop();
		}
	}
	this.frame_15 = function() {
		var that=this;
		this.btn1.addEventListener("click", fl_ClickToHide_6.bind(this));
		
		function fl_ClickToHide_6()
		{
			localStorage.ifshowname="no";
			that.play();
		}
		var that=this;
		
		if(localStorage.ifshowname=="no"){
			that.play();
		}else{
			that.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(15));

	// btn
	this.btn1 = new lib.button();
	this.btn1.parent = this;
	this.btn1.setTransform(87.5,-2.4,0.389,0.389);
	new cjs.ButtonHelper(this.btn1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn1).to({_off:true},29).wait(1));

	// name
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrBSIALABIAGAAIAIAAQAJAAADgEQAEgDAAgJIAAgiIhbAAIAAgKIBbAAIAAgOIArgZIhjAAIAAgKIBxAAIAAALIgwAdIAAAJIBXAAIAAAKIhXAAIAAAkQACAXgYABIgaABIgCgMgABMgbIAAgZIiYAAIAAAZIgLAAIAAgjICuAAIAAAjgAgJhZIAKgEIALAbIgKAEQgFgQgGgLg");
	this.shape.setTransform(65.8,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABKBeIAAgMIhsAAIAAAMIgKAAIAAhKIgiALIgGgKQBkgZA4g5IhbAAIgLAKIAYAWIAGAFIgJAHQgSgRgLgKQgQAMgUANIgHgJQAwgbAdgnIAKAFQgHAKgHAIIBdAAIAAALQgpAuhAAYIBpAAIAABUgAgiBIIBsAAIAAg0IhsAAg");
	this.shape_1.setTransform(44.8,11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYBWIgGAAIgKAAIgCgMIAZABQAIAAAEgEQADgCAAgJIAAhPIhcAAIAAgLIC9AAIAAALIhXAAIAABQQABAZgWAAIgLAAgAhdBBQAWgdATgiIALAFQgWAlgUAcIgKgHgAApAIIAJgGIAsA6IgKAHQgVgfgWgcgAhIhLIAAgKICRAAIAAAKg");
	this.shape_2.setTransform(25.7,11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhcBWIAAgKIBBAAIAAhKIALAAIAABKIAgAAIAAhKIAKAAIAABKIBDAAIAAAKgAAsAzQARgVANgUIAJAFIgdApgAhRAPIAJgFQAPAUAOAVIgKAFQgLgTgRgWgAhFgGIAAhPICLAAIAABPgAg7gQIB2AAIAAgZIh2AAgAg7gzIB2AAIAAgYIh2AAg");
	this.shape_3.setTransform(5.8,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(30));

	// t
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3,1,1).p("ABpAAQAAAsgfAeQgfAfgrAAQgqAAgfgfQgfgeAAgsQAAgrAfgeQAfgfAqAAQArAAAfAfQAfAeAAArg");
	this.shape_4.setTransform(100,12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AhJBKQgegegBgsQABgrAegeQAegeArgBQArABAfAeQAfAegBArQABAsgfAeQgfAegrAAQgrAAgegeg");
	this.shape_5.setTransform(100,12);

	this.instance = new lib.tuotuo();
	this.instance.parent = this;
	this.instance.setTransform(100.1,12.1,1,1,0,0,0,10.5,10.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},13).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},13).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:142.6},13,cjs.Ease.get(1)).wait(2).to({x:100.1},13,cjs.Ease.get(1)).wait(1));

	// green
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66CC00").s().p("AhJBKQgegfgBgrQABgrAegeQAegeArgBQArABAfAeQAfAegBArQABArgfAfQgfAfgrgBQgrABgegfg");
	this.shape_6.setTransform(100,11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66CC00").s().p("AhcBNIgIgFQgOgKgJgQQgJgRgBgTIAAgIIAAgCQgBgUAIgQQAIgRANgKIASgOQAngaAyAAQAyAAApAaIAIAGQAOAKAJARQAJAQABAUIAAAIIAAACQAAASgGAQQgJARgNALQgHAHgLAGQgnAagyAAQgyAAgpgag");
	this.shape_7.setTransform(103.1,11.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66CC00").s().p("AhsBRIgKgFQgTgJgLgSQgMgRgBgXIAAgJIAAgBQAAgWALgTQAKgSARgJIAWgLQAwgVA4AAQA6AAAxAVIAKAFQARAJAMARQANATAAAWIABAJIAAACQgBAWgKARQgKASgSAKIgWALQgwAVg4AAQg6AAgwgVg");
	this.shape_8.setTransform(105.9,11.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66CC00").s().p("Ah8BUIgLgEQgWgHgOgTQgPgUAAgZIgBgJIAAgCQAAgZAOgUQANgTAUgIIAbgJQA3gSA+AAQBAAAA5ASIALAEQAWAIAOATQAPATAAAaIABAJIAAADQgBAYgNASQgNAUgUAHIgcAKQg3ASg+AAQhAAAg4gSg");
	this.shape_9.setTransform(108.4,11.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66CC00").s().p("AiKBWIgNgDQgYgGgRgUQgRgVAAgbIAAgLIAAgBQAAgcAPgUQAQgVAYgGIAdgIQA/gOBDAAQBGAABAAOIANAEQAZAGAQAUQARAVAAAbIAAALIAAADQgBAagOAUQgQAUgYAHIgeAHQg/APhDAAQhFAAhAgPg");
	this.shape_10.setTransform(110.8,11.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66CC00").s().p("AiWBZIgPgDQgbgFgTgVQgSgWgBgdIAAgMIAAgBQAAgeASgWQASgWAagEIAigGQBEgMBJABQBKgBBHAMIAOACQAcAFARAWQAUAWAAAeIAAALIAAAEQAAAbgRAVQgTAWgaAFIgiAGQhFAMhIAAQhLAAhFgMg");
	this.shape_11.setTransform(112.8,11.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66CC00").s().p("AiiBbIgPgCQgegEgVgXQgTgWgBggIAAgMIAAAAQAAggAUgXQATgXAegDIAkgFQBKgJBMAAQBQAABMAJIAPACQAeADAUAXQAVAXAAAfIAAANIAAADQgBAegTAWQgTAXgeAEIgmAEQhJAJhMAAQhPAAhMgJg");
	this.shape_12.setTransform(114.7,11.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#66CC00").s().p("AirBdIgRgCQgfgCgXgYQgVgYgBggIAAgOIAAgBQAAggAWgYQAVgYAggCIAngEQBOgGBQAAQBUAABRAGIAQACQAgACAVAYQAXAXAAAiIAAANIAAAEQgBAegVAXQgVAYggADIgoADQhOAGhQABQhTgBhQgGg");
	this.shape_13.setTransform(116.2,11.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66CC00").s().p("AizBfIgSgBQghgCgYgZQgXgYAAgjIAAgNIAAgBQAAgiAXgZQAXgYAhgCIApgCQBTgFBTAAQBXAABVAFIARAAQAhACAXAZQAYAYAAAjIAAANIAAAEQgBAggWAYQgXAYghACIgrADQhSAEhTAAQhWAAhUgEg");
	this.shape_14.setTransform(117.6,11.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66CC00").s().p("Ai6BgIgSgBQgjgBgZgZQgYgZAAgkIAAgOIAAAAQAAgkAYgZQAYgZAjgBIArgCQBWgDBVAAQBaAABYADIASABQAjABAYAZQAZAZAAAkIAAAOIAAAEQgBAhgXAYQgYAZgjABIgsACQhWADhVAAQhZAAhYgDg");
	this.shape_15.setTransform(118.7,11.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#66CC00").s().p("Ai/BhIgTgBQgkAAgZgaQgZgaAAgkIAAgPQAAgkAYgaQAagZAkgBIAsgBQBYgBBYAAQBcAABbABIASABQAkAAAZAaQAZAZAAAlIAAAOIAAAEQgBAigYAYQgZAagkABIgtABQhYABhYAAQhaAAhbgBg");
	this.shape_16.setTransform(119.5,11.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#66CC00").s().p("AjCBiIgUgBQglAAgagaQgagaABglIAAgPQgBglAagaQAagaAlAAIAtAAICzgBIC6ABIATAAQAlAAAZAaQAbAagBAlIAAAPIAAAEQgBAigZAZQgZAaglAAIgvABIiyAAIi4AAg");
	this.shape_17.setTransform(120.2,11.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#66CC00").s().p("AgKBiIi7AAIgUAAQglgBgagaQgagZAAgmIAAgPQAAgmAagaQAagaAlAAIAuAAIC1AAIC8AAIAUAAQAlAAAaAaQAaAaAAAmIAAAPIAAAEQgCAjgYAYQgaAaglAAIgwABIi0AAg");
	this.shape_18.setTransform(120.5,11.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#66CC00").s().p("AjZBiQgmAAgagbQgagZAAgmIAAgPQAAgmAagaQAagaAmAAIGzAAQAmAAAaAaQAaAaAAAmIAAAPQAAAmgaAZQgaAbgmAAg");
	this.shape_19.setTransform(120.6,11.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#66CC00").s().p("AiiBbIgQgCQgegDgVgXQgUgXAAggIAAgMIAAAAQAAghATgWQAVgXAdgEIAlgEQBKgJBMAAQBQAABNAJIAPABQAeAEAUAXQAVAXAAAfIAAANIAAADQgBAegTAWQgUAXgdAEIgmAEQhKAJhMAAQhPAAhMgJg");
	this.shape_20.setTransform(114.8,11.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#66CC00").s().p("AiSBYIgPgDQgagFgTgVQgRgVgBgdIAAgMIAAgBQAAgdARgVQARgWAbgFIAggGQBDgNBGAAQBKAABEANIAOACQAaAFASAWQATAVAAAdIAAAMIAAADQgBAbgQAUQgSAWgaAGIggAGQhDANhHAAQhIAAhEgNg");
	this.shape_21.setTransform(112.2,11.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#66CC00").s().p("AiEBWIgNgEQgYgGgPgUQgQgUgBgbIAAgKIAAgCQAAgaAPgVQAPgUAWgGIAdgIQA8gQBBAAQBEAAA9AQIAMADQAYAGAPAVQAQAUABAbIAAAKIAAADQAAAZgPATQgOAVgXAGIgeAJQg7APhBAAQhEAAg8gPg");
	this.shape_22.setTransform(109.9,11.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#66CC00").s().p("Ah4BTIgLgEQgVgHgOgUQgOgSAAgYIgBgKIAAgCQAAgYANgUQANgSATgJIAagJQA1gTA9AAQA/AAA2ATIALAEQAVAIAOATQAOATAAAZIABAJIAAACQgBAYgMASQgNATgTAJIgbAJQg1ATg8AAQg/AAg2gTg");
	this.shape_23.setTransform(107.8,11.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#66CC00").s().p("AhtBRIgKgFQgSgIgMgSQgMgSgBgXIgBgJIAAgBQAAgXALgSQALgSARgJIAXgLQAwgVA4AAQA6AAAxAVIAKAEQASAKAMARQANATAAAWIABAJIAAACQgBAWgKARQgLASgRAKIgXALQgwAVg4AAQg6AAgxgVg");
	this.shape_24.setTransform(106,11.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#66CC00").s().p("AhkBPIgJgFQgQgKgKgQQgLgSgBgVIAAgJIAAgBQAAgUAJgSQAJgRAPgKIAUgMQAsgYA0AAQA2AAAtAYIAJAFQAPAKALARQALARABAVIAAAIIAAADQgBATgIARQgJASgPAKIgVAMQgrAYg1AAQg1AAgtgYg");
	this.shape_25.setTransform(104.4,11.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#66CC00").s().p("AhUBMIgIgGQgNgLgIgPQgIgQgBgSIgBgIIAAgCQAAgSAHgQQAGgQALgLIAQgOQAlgcAvAAQAwAAAlAcIAHAGQANALAIAPQAJAQAAATIABAIIAAABQAAASgHAPQgGAQgMAMQgGAHgKAHQgkAcgvAAQgxAAgjgcg");
	this.shape_26.setTransform(102,11.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#66CC00").s().p("AhPBLIgIgGQgLgMgIgOQgHgPgBgSIgBgHIAAgDQAAgRAHgPQAFgQAKgLQAGgIAJgHQAhgdAuAAQAtAAAjAdIAHAGQALAMAIAPQAHAPABASIABAIIAAABQAAARgGAOQgFAQgLAMQgHAIgIAHQghAdguAAQguAAghgdg");
	this.shape_27.setTransform(101.1,11);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#66CC00").s().p("AhMBKIgGgGQgLgMgHgOQgGgPgCgRIAAgHIAAgDQAAgQAFgPQAFgPAJgNQAGgHAIgIQAggdArAAQAtAAAgAdIAGAHQAMAMAGAPQAHAOABASIAAAHIAAABQAAARgEAOQgFAPgKANQgGAIgIAHQggAegsAAQgsAAgggeg");
	this.shape_28.setTransform(100.5,11);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#66CC00").s().p("AhKBKIgGgHQgLgMgGgOQgGgOgBgRIgBgHIAAgDQAAgPAFgPQAFgPAIgNQAGgHAHgIQAfgeArgBQAsABAfAeIAGAGQAKANAHAOQAGAPABARIABAHIAAABQAAAQgEAOQgFAPgJANQgGAJgHAHQgfAfgsgBQgrABgfgfg");
	this.shape_29.setTransform(100.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

	// b
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(3,1,1).p("AjlhyIHLAAQAmAAAaAaQAaAaAAAmIAAAxQAAAmgaAaQgaAagmAAInLAAQglAAgbgaQgagaAAgmIAAgxQAAgmAagaQAbgaAlAAg");
	this.shape_30.setTransform(121,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.9,-4.1,186.4,31.6);


(lib.movespeed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btnt.addEventListener("click", fl_ClickToHide_9.bind(this));
		var that = this;
		function fl_ClickToHide_9() {
			function cn() {
				var newnum = prompt("请输入数字", localStorage.mvsp);
				if (isNaN(newnum)) {
					alert("不是数字！");
					return cn();
				} else {
					if (newnum !== null) {
						if (newnum <= 99999 && newnum >= 0) {
							localStorage.mvsp = newnum;
							that.mvsp.text = localStorage.mvsp;
						} else {
							alert("值不能太大或太小！");
							return cn();
						}
					}
				}
			}
			cn();
		}
		this.mvsp.text = localStorage.mvsp;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnt = new lib.button();
	this.btnt.parent = this;
	this.btnt.setTransform(-8.5,31.2,1.284,0.384);
	new cjs.ButtonHelper(this.btnt, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnt).wait(1));

	// bg
	this.mvsp = new cjs.Text("", "20px 'Microsoft YaHei Light'", "#FFFFFF");
	this.mvsp.name = "mvsp";
	this.mvsp.textAlign = "center";
	this.mvsp.lineHeight = 28;
	this.mvsp.lineWidth = 207;
	this.mvsp.parent = this;
	this.mvsp.setTransform(105.5,33.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADHBVQAkgGAYgKQgRgKgPgSIgLAAIAAgJIBnAAIAAAKQgQARgVAKQATAIAjAGIgFAJQgngGgWgLQgZALgoAIIgGgJgAEOBBQATgJASgPIhEAAQAPAQAQAIgAirBWQAognAAhGIABgJIAAgKIgeAAIAAgKIAeAAIABgqIALAAIgBAqIA0AAQgBBOgCAgQgCAfgagBIgKAAIgGAAIgIAAIgEgMIAaABQASAAABgTQADg9AAgnIgpAAIgBAUQAABHgqAtIgJgIgAgBBVQAxggAHgoIgwAAIAAgKIAxAAQACgQABgjIglAAIAAgKIAlAAIAAgOIAAgJIAAgMIALAAIAAAVIAAAOIAvAAIAAA9IAUAAIAAAKIhBAAQASAuAvAVIgHALQg0gcgOgwQgHArgyAkIgIgJgABEADIAnAAIAAgzIglAAIgCAzgAgVBeIAAi7IALAAIAAAnIAGgEIAVAcIgIAHIgTgcIAACRgACwBcIAAi6IAKAAIAAC6gAnDBVQANgRAPgRIAAhCIgZAAIAAgKIAkAAIAABLQATAaAjAAIAYAAIAcAAIAtAAQgDAFgCAFIheAAQglAAgVgaQgNAPgLARgAG2BFQgDgDAAgDQAAgEADgCQACgCAEAAQADAAADACQACACAAAEQAAADgCADQgDACgDAAQgEAAgCgCgAitBDIgCgGIg5AFIgMACIgFgKQAGgEAEgKQAMgXAMggIgiAAIAAgLIBaAAIAAALIgsAAQgQAmgPAeIA3gFIgQghIAKgFIAYA0IgKAEIgCgDgAkcAxIgFgHIhSADQgKAAgFACIgFgLQAFgCAGgHQARgTARgdIgvAAIAAgJICAAAIAAAJIhEAAQgVAggUAYIBPgDIgLgPIgNgRIAJgEIAoA2IgJAHIgFgIgADRATIAAgmIB6AAIAAAmgAElALIAdAAIAAgWIgdAAgAEAALIAcAAIAAgWIgcAAgADbALIAcAAIAAgWIgcAAgACWgDIgBAAQAEgTAEgbIAKABQgFAegEARIgIgCgAgygDQAFgaADgTIAKACIgIAtIgKgCgAG2gZQgDgCAAgEQAAgEADgCQACgCAEgBQADABADACQACACAAAEQAAAEgCACQgDACgDABQgEgBgCgCgAC9gzIAIgGIASAXIgIAFIgSgWgADbggIAAg1IBmAAIAAA1gADlgoIBSAAIAAgPIhSAAgADlg/IBSAAIAAgOIhSAAgAm1hVIAJgGIAaAiIgKAHIgZgjgAjwhDIAAgJIBJAAIAAAJgAl8hGIAAgLIBnAAIAAALg");
	this.shape.setTransform(49.1,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.mvsp}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.movespeed, new cjs.Rectangle(-8.5,4.5,219.5,56.2), null);


(lib.moretoolboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		if (localStorage["tagt" + this.id] == "no") {
			localStorage["tagt" + this.id] = "yes";
			this.tbtn.addEventListener("click", changetag);
			var ids = this.id;
			var that = this;
			function changetag() {
				var type1, type2;
				if (localStorage.choosemore == 1) {
					type1 = prompt("请输入物品自定义名字(DisplayName)", localStorage["S" + ids + "tag"]);
					type2 = prompt("请输入物品自定义描述(DisplayLore)，没有请留none", localStorage["S" + ids + "lore"]);
				} else {
					type1 = prompt("请输入物品自定义名字(DisplayName)", localStorage["S" + localStorage.choosemore + ids + "tag"]);
					type2 = prompt("请输入物品自定义描述(DisplayLore)，没有请留none", localStorage["S" + localStorage.choosemore + ids + "lore"]);
				}
				if (type1 == "" || type1 == null || type1.length > 10 || type2 == "" || type2 == null || type2.length > 10) {
					alert("请输入长度在1~10的内容，不要点取消！");
					return changetag();
				} else {
					if (localStorage.choosemore == 1) {
						localStorage["S" + ids + "tag"] = type1;
						localStorage["S" + ids + "lore"] = type2;
					} else {
						localStorage["S" + localStorage.choosemore + ids + "tag"] = type1;
						localStorage["S" + localStorage.choosemore + ids + "lore"] = type2;
					}
				}
			}
		}
		this.cs.addEventListener("click", fl_MouseClickHandler_14.bind(this));
		
		function fl_MouseClickHandler_14() {
			that.gotoAndPlay(22);
		}
		this.stop();
	}
	this.frame_20 = function() {
		var that=this;
	}
	this.frame_21 = function() {
		this.gotoAndPlay(20);
		var that=this;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(13));

	// Part 5
	this.cs = new lib.closebtn();
	this.cs.parent = this;
	this.cs.setTransform(5.5,40.1);
	this.cs._off = true;
	new cjs.ButtonHelper(this.cs, 0, 1, 2, false, new lib.closebtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cs).wait(19).to({_off:false},0).to({_off:true},3).wait(12));

	// Part 4
	this.instance = new lib.shape1();
	this.instance.parent = this;
	this.instance.setTransform(23.5,18.8,1,1,0,0,0,18.8,7.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.tbtn = new lib.tagbtn();
	this.tbtn.parent = this;
	this.tbtn.setTransform(23.5,18.8,1,1,0,0,0,18.8,7.9);
	new cjs.ButtonHelper(this.tbtn, 0, 1, 2, false, new lib.tagbtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance}]},7).to({state:[{t:this.tbtn}]},1).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},5).to({state:[]},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({alpha:1},7).to({_off:true},1).wait(3).to({_off:false},0).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(6));

	// Part 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AifGLQhQAAAAhQIAAp1QAAhQBQAAIE/AAQBQAAAABQIAAJ1QAABQhQAAg");
	mask.setTransform(24,39.5);

	// Part 1
	this.instance_1 = new lib.bg6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-26,39.5,1,1,0,0,0,24,39.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:24},11,cjs.Ease.get(1)).wait(10).to({x:-26},12,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.maxhp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btnt.addEventListener("click", fl_ClickToHide_9.bind(this));
		var that = this;
		function fl_ClickToHide_9() {
			function cn() {
				var newnum = prompt("请输入数字", localStorage.maxhp);
				if (isNaN(newnum)) {
					alert("不是数字！");
					return cn();
				} else {
					if (newnum !== null) {
						if (newnum <= 99999 && newnum >= 0) {
							localStorage.maxhp = newnum;
							that.maxhp.text = localStorage.maxhp;
						} else {
							alert("值不能太大或太小！");
							return cn();
						}
					}
				}
			}
			cn();
		}
		this.maxhp.text = localStorage.maxhp;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnt = new lib.button();
	this.btnt.parent = this;
	this.btnt.setTransform(-8.5,31.2,1.284,0.384);
	new cjs.ButtonHelper(this.btnt, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnt).wait(1));

	// bg
	this.maxhp = new cjs.Text("", "20px 'Microsoft YaHei Light'", "#FFFFFF");
	this.maxhp.name = "maxhp";
	this.maxhp.textAlign = "center";
	this.maxhp.lineHeight = 28;
	this.maxhp.lineWidth = 207;
	this.maxhp.parent = this;
	this.maxhp.setTransform(105.5,33.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACdBeIAAixIA2AAIAAAKIgRA3QATAWAAAaQgBAcgUABIgHABIgDAAIgFAAIgCgLIANABQAOAAABgUQgBgZgTgVIASg6IghAAIAACogADfBVQADgDABgEQABgDABgFIAAiZIBYAAIAABXIgvAAQAGAXAKAOQASgLAWgOIAGAIIgoAZQANARAgAQIgHAJQg5gbgOg8IgUAAIAABIIAhgRIABALIgiARQgEADgFAEgADvgEIBDAAIAAgeIhDAAgADvgrIBDAAIAAgfIhDAAgAj7BYIAAgIIBZAAIAAgNIhKAAIAAgIIBKAAIAAgNIhCAAIAAgzICPAAIAAAzIhDAAIAAANIBLAAIAAAIIhLAAIAAANIBZAAIAAAIgAiYAmIA5AAIAAgOIg5AAgAjaAmIA4AAIAAgOIg4AAgAiYAQIA5AAIAAgOIg5AAgAjaAQIA4AAIAAgOIg4AAgAgxBTIAAgLIBMAAIAAihIAMAAIAAA7IBRAAIAAALIhRAAIAABbIBgAAIAAALgAnCBQIAAgKIAWAAIAAiDIAzAAIAJggIALACIgHAaIgCAEIBRAAIAACDIAWAAIAAAKgAlJBGIAhAAIAAh5IghAAgAl1BGIAhAAIAAh5IghAAgAmiBGIAiAAIAAh5IgiAAgAG1BGQgDgDAAgDQAAgEADgCQACgDAEAAQADAAACADQADACAAAEQAAADgDADQgCACgDAAQgEAAgCgCgAj5gRIAAgHIC6AAIAAAHgAG1gYQgDgDAAgDQAAgEADgCQACgDAEAAQADAAACADQADACAAAEQAAADgDADQgCACgDAAQgEAAgCgCgAjlglIAAgvICRAAIAAAvgAjbgsIB9AAIAAgNIh9AAgAjbhAIB9AAIAAgMIh9AAg");
	this.shape.setTransform(50.8,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.maxhp}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.maxhp, new cjs.Rectangle(-8.5,0,219.5,60.7), null);


(lib.itemselecter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var that = this;
		this.nabtn.addEventListener("click", fl_MouseClickHandler, false);
		function fl_MouseClickHandler() {
			function cn() {
				var newnum = prompt("请输入数字", "默认1");
				if (isNaN(newnum)) {
					alert("不是数字！");
					return cn();
				} else {
					if (newnum !== null) {
						if (newnum <= 64 && newnum >= 1) {
							if (localStorage.choosemore == 1) {
								localStorage.Sanum = newnum;
								that.anum.text = "数量:" + localStorage.Sanum;
							} else {
								localStorage["S" + localStorage.choosemore + "anum"] = newnum;
								that.anum.text = "数量:" + localStorage["S" + localStorage.choosemore + "anum"];
							}
						} else {
							alert("值不能太大或太小！");
							return cn();
						}
					}
				}
			}
			cn();
		}
		
		this.nbbtn.addEventListener("click", fl_MouseClickHandler_2, false);
		
		function fl_MouseClickHandler_2() {
			function cn() {
				var newnum = prompt("请输入数字", "默认1");
				if (isNaN(newnum)) {
					alert("不是数字！");
					return cn();
				} else {
					if (newnum !== null) {
						if (newnum <= 64 && newnum >= 1) {
							if (localStorage.choosemore == 1) {
								localStorage.Sbnum = newnum;
								that.bnum.text = "数量:" + localStorage.Sbnum;
							} else {
								localStorage["S" + localStorage.choosemore + "bnum"] = newnum;
								that.bnum.text = "数量:" + localStorage["S" + localStorage.choosemore + "bnum"];
							}
						} else {
							alert("值不能太大或太小！");
							return cn();
						}
					}
				}
			}
			cn();
		}
		this.ncbtn.addEventListener("click", fl_MouseClickHandler_3, false);
		
		function fl_MouseClickHandler_3() {
			function cn() {
				var newnum = prompt("请输入数字", "默认1");
				if (isNaN(newnum)) {
					alert("不是数字！");
					return cn();
				} else {
					if (newnum !== null) {
						if (newnum <= 64 && newnum >= 1) {
							if (localStorage.choosemore == 1) {
								localStorage.Scnum = newnum;
								that.cnum.text = "数量:" + localStorage.Scnum;
							} else {
								localStorage["S" + localStorage.choosemore + "cnum"] = newnum;
								that.cnum.text = "数量:" + localStorage["S" + localStorage.choosemore + "cnum"];
							}
						} else {
							alert("值不能太大或太小！");
							return cn();
						}
					}
				}
			}
			cn();
		}
		this.refabtn.addEventListener("click", fl_MouseClickHandler_5);
		
		function fl_MouseClickHandler_5() {
			if (localStorage.choosemore == 1) {
				localStorage.SAid = "none";
				localStorage.SAname = "none";
				localStorage.SAmeta = "none";
				localStorage.SAtag = "none";
				localStorage.SAlore = "none";
				localStorage.Sanum = 1;
			} else {
				localStorage["S" + localStorage.choosemore + "Aid"] = "none";
				localStorage["S" + localStorage.choosemore + "Aname"] = "none";
				localStorage["S" + localStorage.choosemore + "Ameta"] = "none";
				localStorage["S" + localStorage.choosemore + "anum"] = 1;
				localStorage["S" + localStorage.choosemore + "Atag"] = "none";
				localStorage["S" + localStorage.choosemore + "Alore"] = "none";
			}
		}
		this.refbbtn.addEventListener("click", fl_MouseClickHandler_6);
		
		function fl_MouseClickHandler_6() {
			if (localStorage.choosemore == 1) {
				localStorage.SBid = "none";
				localStorage.SBname = "none";
				localStorage.SBmeta = "none";
				localStorage.Sbnum = 1;
				localStorage.SBtag = "none";
				localStorage.SBlore = "none";
			} else {
				localStorage["S" + localStorage.choosemore + "Bid"] = "none";
				localStorage["S" + localStorage.choosemore + "Bname"] = "none";
				localStorage["S" + localStorage.choosemore + "Bmeta"] = "none";
				localStorage["S" + localStorage.choosemore + "bnum"] = 1;
				localStorage["S" + localStorage.choosemore + "Btag"] = "none";
				localStorage["S" + localStorage.choosemore + "Blore"] = "none";
			}
		}
		this.refcbtn.addEventListener("click", fl_MouseClickHandler_7);
		
		function fl_MouseClickHandler_7() {
			if (localStorage.choosemore == 1) {
				localStorage.SCid = "none";
				localStorage.SCname = "none";
				localStorage.SCmeta = "none";
				localStorage.Scnum = 1;
				localStorage.SCtag = "none";
				localStorage.SClore = "none";
			} else {
				localStorage["S" + localStorage.choosemore + "Cid"] = "none";
				localStorage["S" + localStorage.choosemore + "Cname"] = "none";
				localStorage["S" + localStorage.choosemore + "Cmeta"] = "none";
				localStorage["S" + localStorage.choosemore + "cnum"] = 1;
				localStorage["S" + localStorage.choosemore + "Ctag"] = "none";
				localStorage["S" + localStorage.choosemore + "Clore"] = "none";
			}
		}
	}
	this.frame_1 = function() {
		var those = this;
		this.mtba.id = "A";
		this.mtbb.id = "B";
		this.mtbc.id = "C";
		function gqn(key) {
			// 获取参数
			var url = window.location.search;
			// 正则筛选地址栏
			var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
			// 匹配目标参数
			var result = url.substr(1).match(reg);
			//返回参数值
			return result ? decodeURIComponent(result[2]) : null;
		}
		if (gqn("n") !== null) {
		
			those.gtext = gqn("n");
			those.gname = gqn("t");
			those.gmeta = gqn("m");
			localStorage.minecraftsomebottleitemgettext = those.gtext;
			localStorage.minecraftsomebottleitemgetname = those.gname;
			localStorage.minecraftsomebottleitemgetmeta = those.gmeta;
		}
		
		those.abtn.addEventListener("click", fl_ClickToGoToWebPage_7);
		function fl_ClickToGoToWebPage_7() {
			localStorage.receivemode = "no";
			localStorage.csiturn = "on";
			localStorage.itemchoosetarget = "A";
			window.open("http://lab.imbottle.com/list/?t=5ed4b065a971bd808d86160cb91c93b3", "_self");
		}
		
		
		those.bbtn.addEventListener("click", fl_ClickToGoToWebPage_8);
		
		function fl_ClickToGoToWebPage_8() {
			localStorage.receivemode = "no";
			localStorage.csiturn = "on";
			localStorage.itemchoosetarget = "B";
			window.open("http://lab.imbottle.com/list/?t=5ed4b065a971bd808d86160cb91c93b3", "_self");
		
		}
		
		those.cbtn.addEventListener("click", fl_ClickToGoToWebPage_9);
		
		function fl_ClickToGoToWebPage_9() {
			localStorage.receivemode = "no";
			localStorage.csiturn = "on";
			localStorage.itemchoosetarget = "C";
			window.open("http://lab.imbottle.com/list/?t=5ed4b065a971bd808d86160cb91c93b3", "_self");
		
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.abtn.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler() {
			those.mtba.play();
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.bbtn.addEventListener("mouseover", fl_MouseOverHandler_2);
		
		function fl_MouseOverHandler_2() {
			those.mtbb.play();
		}
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.cbtn.addEventListener("mouseover", fl_MouseOverHandler_3);
		
		function fl_MouseOverHandler_3() {
			those.mtbc.play();
		}
	}
	this.frame_2 = function() {
		var that = this;
		if (localStorage.receivemode == "yes") {
			if (localStorage.csiturn == "on") {
				if (localStorage.itemchoosetarget == "A") {
					localStorage.csiturn = "off";
					window.root.buyAitemid = localStorage.minecraftsomebottleitemgettext;
					window.root.buyAitemname = localStorage.minecraftsomebottleitemgetname;
					window.root.buyAitemmeta = localStorage.minecraftsomebottleitemgetmeta;
					if (localStorage.choosemore == 1) {
						localStorage.SAid = localStorage.minecraftsomebottleitemgettext;
						localStorage.SAname = localStorage.minecraftsomebottleitemgetname;
						localStorage.SAmeta = localStorage.minecraftsomebottleitemgetmeta;
					} else {
						localStorage["S" + localStorage.choosemore + "Aid"] = localStorage.minecraftsomebottleitemgettext;
						localStorage["S" + localStorage.choosemore + "Aname"] = localStorage.minecraftsomebottleitemgetname;
						localStorage["S" + localStorage.choosemore + "Ameta"] = localStorage.minecraftsomebottleitemgetmeta;
					}
				} else if (localStorage.itemchoosetarget == "B") {
					localStorage.csiturn = "off";
					window.root.buyBitemid = localStorage.minecraftsomebottleitemgettext;
					window.root.buyBitemname = localStorage.minecraftsomebottleitemgetname;
					window.root.buyBitemmeta = localStorage.minecraftsomebottleitemgetmeta;
					if (localStorage.choosemore == 1) {
						localStorage.SBid = localStorage.minecraftsomebottleitemgettext;
						localStorage.SBname = localStorage.minecraftsomebottleitemgetname;
						localStorage.SBmeta = localStorage.minecraftsomebottleitemgetmeta;
					} else {
						localStorage["S" + localStorage.choosemore + "Bid"] = localStorage.minecraftsomebottleitemgettext;
						localStorage["S" + localStorage.choosemore + "Bname"] = localStorage.minecraftsomebottleitemgetname;
						localStorage["S" + localStorage.choosemore + "Bmeta"] = localStorage.minecraftsomebottleitemgetmeta;
					}
				} else if (localStorage.itemchoosetarget == "C") {
					localStorage.csiturn = "off";
					window.root.buyCitemid = localStorage.minecraftsomebottleitemgettext;
					window.root.buyCitemname = localStorage.minecraftsomebottleitemgetname;
					window.root.buyCitemmeta = localStorage.minecraftsomebottleitemgetmeta;
					if (localStorage.choosemore == 1) {
						localStorage.SCid = localStorage.minecraftsomebottleitemgettext;
						localStorage.SCname = localStorage.minecraftsomebottleitemgetname;
						localStorage.SCmeta = localStorage.minecraftsomebottleitemgetmeta;
					} else {
						localStorage["S" + localStorage.choosemore + "Cid"] = localStorage.minecraftsomebottleitemgettext;
						localStorage["S" + localStorage.choosemore + "Cname"] = localStorage.minecraftsomebottleitemgetname;
						localStorage["S" + localStorage.choosemore + "Cmeta"] = localStorage.minecraftsomebottleitemgetmeta;
					}
				}
			}
		}
	}
	this.frame_4 = function() {
		this.batxt.text = "请选择";
		this.bbtxt.text = "请选择";
		this.sctxt.text = "请选择";
		window.root.groupload="ok";
		var those=this;
		if (localStorage.choosemore == 1) {
			if (localStorage.SAid !== "none") {
				those.batxt.text = localStorage.SAid + "\n" + localStorage.SAname + ":" + localStorage.SAmeta+"\n"+"D:"+localStorage.SAtag+"|L:"+localStorage.SAlore;
			}
			if (localStorage.SBid !== "none") {
				those.bbtxt.text = localStorage.SBid + "\n" + localStorage.SBname + ":" + localStorage.SBmeta+"\n"+"D:"+localStorage.SBtag+"|L:"+localStorage.SBlore;
			}
			if (localStorage.SCid !== "none") {
				those.sctxt.text = localStorage.SCid + "\n" + localStorage.SCname + ":" + localStorage.SCmeta+"\n"+"D:"+localStorage.SCtag+"|L:"+localStorage.SClore;
			}
			those.anum.text = "数量:" + localStorage.Sanum;
			those.bnum.text = "数量:" + localStorage.Sbnum;
			those.cnum.text = "数量:" + localStorage.Scnum;
		} else {
			if (localStorage["S" + localStorage.choosemore + "Aid"] !== "none") {
				those.batxt.text = localStorage["S" + localStorage.choosemore + "Aid"] + "\n" + localStorage["S" + localStorage.choosemore + "Aname"] + ":" + localStorage["S" + localStorage.choosemore + "Ameta"]+"\n"+"D:"+localStorage["S" + localStorage.choosemore + "Atag"]+"|L:"+localStorage["S" + localStorage.choosemore + "Alore"];
			}
			if (localStorage["S" + localStorage.choosemore + "Bid"] !== "none") {
				those.bbtxt.text = localStorage["S" + localStorage.choosemore + "Bid"] + "\n" + localStorage["S" + localStorage.choosemore + "Bname"] + ":" + localStorage["S" + localStorage.choosemore + "Bmeta"]+"\n"+"D:"+localStorage["S" + localStorage.choosemore + "Btag"]+"|L:"+localStorage["S" + localStorage.choosemore + "Blore"];
			}
			if (localStorage["S" + localStorage.choosemore + "Cid"] !== "none") {
				those.sctxt.text = localStorage["S" + localStorage.choosemore + "Cid"] + "\n" + localStorage["S" + localStorage.choosemore + "Cname"] + ":" + localStorage["S" + localStorage.choosemore + "Cmeta"]+"\n"+"D:"+localStorage["S" + localStorage.choosemore + "Ctag"]+"|L:"+localStorage["S" + localStorage.choosemore + "Clore"];
			}
			those.anum.text = "数量:" + localStorage["S" + localStorage.choosemore + "anum"];
			those.bnum.text = "数量:" + localStorage["S" + localStorage.choosemore + "bnum"];
			those.cnum.text = "数量:" + localStorage["S" + localStorage.choosemore + "cnum"];
		}
	}
	this.frame_26 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(2).call(this.frame_4).wait(22).call(this.frame_26).wait(1));

	// numbtn
	this.ncbtn = new lib.button();
	this.ncbtn.parent = this;
	this.ncbtn.setTransform(293,186,0.737,0.351);
	new cjs.ButtonHelper(this.ncbtn, 0, 1, 1);

	this.nbbtn = new lib.button();
	this.nbbtn.parent = this;
	this.nbbtn.setTransform(9,220,0.608,0.351,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.nbbtn, 0, 1, 1);

	this.nabtn = new lib.button();
	this.nabtn.parent = this;
	this.nabtn.setTransform(9.1,80.8,0.608,0.351,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.nabtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.nabtn},{t:this.nbbtn},{t:this.ncbtn}]},1).wait(26));

	// refresh
	this.refcbtn = new lib.refreshbtn();
	this.refcbtn.parent = this;
	this.refcbtn.setTransform(440.5,200.5,1,1,0,0,0,11.5,11.5);
	new cjs.ButtonHelper(this.refcbtn, 0, 1, 2, false, new lib.refreshbtn(), 3);

	this.refbbtn = new lib.refreshbtn();
	this.refbbtn.parent = this;
	this.refbbtn.setTransform(135.5,234.5,1,1,0,0,0,11.5,11.5);
	new cjs.ButtonHelper(this.refbbtn, 0, 1, 2, false, new lib.refreshbtn(), 3);

	this.refabtn = new lib.refreshbtn();
	this.refabtn.parent = this;
	this.refabtn.setTransform(134.5,95.5,1,1,0,0,0,11.5,11.5);
	new cjs.ButtonHelper(this.refabtn, 0, 1, 2, false, new lib.refreshbtn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.refabtn},{t:this.refbbtn},{t:this.refcbtn}]}).wait(27));

	// num
	this.cnum = new cjs.Text("", "18px 'Microsoft YaHei Light'", "#FFFFFF");
	this.cnum.name = "cnum";
	this.cnum.lineHeight = 25;
	this.cnum.lineWidth = 122;
	this.cnum.parent = this;
	this.cnum.setTransform(295,188);

	this.bnum = new cjs.Text("", "18px 'Microsoft YaHei Light'", "#FFFFFF");
	this.bnum.name = "bnum";
	this.bnum.lineHeight = 25;
	this.bnum.lineWidth = 100;
	this.bnum.parent = this;
	this.bnum.setTransform(11,222);

	this.anum = new cjs.Text("", "18px 'Microsoft YaHei Light'", "#FFFFFF");
	this.anum.name = "anum";
	this.anum.lineHeight = 25;
	this.anum.lineWidth = 100;
	this.anum.parent = this;
	this.anum.setTransform(11.1,82.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.anum},{t:this.bnum},{t:this.cnum}]},1).wait(26));

	// btn
	this.mtbc = new lib.moretoolboard();
	this.mtbc.parent = this;
	this.mtbc.setTransform(513,40.5,1,1,0,0,0,24,39.5);

	this.mtbb = new lib.moretoolboard();
	this.mtbb.parent = this;
	this.mtbb.setTransform(195,172.5,1,1,0,0,0,24,39.5);

	this.mtba = new lib.moretoolboard();
	this.mtba.parent = this;
	this.mtba.setTransform(195,39.5,1,1,0,0,0,24,39.5);

	this.cbtn = new lib.button();
	this.cbtn.parent = this;
	this.cbtn.setTransform(387.5,109.7,1.105,2.869,0,0,0,85.5,38.5);
	new cjs.ButtonHelper(this.cbtn, 0, 1, 1);

	this.bbtn = new lib.button();
	this.bbtn.parent = this;
	this.bbtn.setTransform(85.5,170.5,1,1,0,0,0,85.5,38.5);
	new cjs.ButtonHelper(this.bbtn, 0, 1, 1);

	this.abtn = new lib.button();
	this.abtn.parent = this;
	this.abtn.setTransform(85.5,39.5,1,1,0,0,0,85.5,38.5);
	new cjs.ButtonHelper(this.abtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.abtn},{t:this.bbtn},{t:this.cbtn},{t:this.mtba},{t:this.mtbb},{t:this.mtbc}]},1).wait(26));

	// Part 3
	this.sctxt = new cjs.Text("", "18px 'Microsoft YaHei Light'", "#FFFFFF");
	this.sctxt.name = "sctxt";
	this.sctxt.lineHeight = 25;
	this.sctxt.lineWidth = 182;
	this.sctxt.parent = this;
	this.sctxt.setTransform(298,4.7);

	this.bbtxt = new cjs.Text("", "18px 'Microsoft YaHei Light'", "#FFFFFF");
	this.bbtxt.name = "bbtxt";
	this.bbtxt.lineHeight = 25;
	this.bbtxt.lineWidth = 182;
	this.bbtxt.parent = this;
	this.bbtxt.setTransform(11,139.8);

	this.batxt = new cjs.Text("", "18px 'Microsoft YaHei Light'", "#FFFFFF");
	this.batxt.name = "batxt";
	this.batxt.lineHeight = 25;
	this.batxt.lineWidth = 182;
	this.batxt.parent = this;
	this.batxt.setTransform(11,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.batxt},{t:this.bbtxt},{t:this.sctxt}]},1).wait(26));

	// Part 1
	this.instance = new lib.Sell();
	this.instance.parent = this;
	this.instance.setTransform(386.5,110,1,1,0,0,0,102.5,110);

	this.instance_1 = new lib.buyB();
	this.instance_1.parent = this;
	this.instance_1.setTransform(87,173.5,1,1,0,0,0,84,41.5);

	this.instance_2 = new lib.buyA();
	this.instance_2.parent = this;
	this.instance_2.setTransform(85.5,39.5,1,1,0,0,0,85.5,38.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6666FF").ss(4,1,1).p("AlOhKIAACVIGFAAIAACCIEYjIIkOjRIAACMg");
	this.shape.setTransform(231.5,98.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6699FF").s().p("AA3BLImFAAIAAiVIGPAKIAAiMIEODRIkYDIg");
	this.shape_1.setTransform(231.5,98.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(121.5,82.5,332,165);


(lib.grouploading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		if(window.root.groupload=="ok"){
			this.gotoAndStop(0);
		}else{
			this.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// Part 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjdBhIAAgKQARAKAPAAQAtAAAAgwIAAgOIAAAAQgNAWgaAAQgUAAgNgOQgMgPAAgZQAAgZANgQQAOgRAWAAQAYAAALAUIAAAAIAAgRIAKAAIAABjQAAAegNAOQgOAOgcAAQgPAAgRgIgAjPghQgLAOAAAVQAAAWAKAMQAKANAQAAQASAAAKgMQAKgLAAgQIAAgVQAAgOgJgLQgKgKgQAAQgRAAgLANgAnxArQgMgPAAgZQAAgZANgRQAOgQAWAAQAYAAALAUIAAAAIAAhFIAKAAIAACfIgKAAIAAgUIAAAAQgFAKgLAGQgKAGgNAAQgUAAgNgOgAnoghQgLANAAAWQAAAWAKAMQAKANAQAAQASAAAKgMQAKgLAAgRIAAgTQAAgPgJgKQgKgLgQAAQgRAAgLANgApdAxQgJgJAAgNQAAgbAlgGIAigFQAAgjgbAAQgRAAgRAOIAAgLQAGgFAKgDQAKgEAJAAQARAAAJAKQAJALAAAUIAABFIgJAAIAAgWIgBAAQgFALgKAHQgKAGgMAAQgPAAgJgIgAo9ABQgRACgHAGQgHAFAAANQAAAJAHAGQAGAHALAAQAQAAAKgMQALgMAAgSIAAgJgArTAqQgOgQAAgZQAAgaAPgPQAOgPAYAAQAXAAANAPQANAPAAAaQAAAZgNAQQgOAPgYAAQgXAAgOgPgArLghQgMANAAAWQAAAVAMANQALANATAAQATAAALgNQAKgNAAgWQAAgWgKgNQgLgMgTAAQgTAAgLANgAMsA2QgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgAL8A2QgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgALMA2QgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgAKcA2QgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgAJsA2QgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgAI8A2QgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgAIMA2QgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgAHcA2QgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgAGsA2QgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgAF8A2QgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgAFMA2QgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgAEcA2QgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgADsA2QgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgAC8A2QgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgACMA2QgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgABcA2QgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgAAsA2QgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgAgDA2QgCgCAAgEQAAgEACgCQADgCACAAQAEAAACACQADACAAAEQAAAEgDACQgCADgEAAQgCAAgDgDgAgzA2QgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgAhjA2QgCgCAAgEQAAgEACgCQADgCADAAQAEAAACACQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDgAkHA3IAAg+QAAgngcAAQgPAAgKALQgKAMAAARIAAA9IgKAAIAAhrIAKAAIAAATIAAAAQAMgWAZAAQASAAAJAMQAJALAAAWIAABBgAl8A3IAAhrIAJAAIAABrgAs6A3IAAiXIALAAIAACNIA8AAIAAAKgAl9hSQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACAAADQAAAEgDACQgCACgEAAQgDAAgCgCg");
	this.shape.setTransform(424.7,236.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(2));

	// Part 1
	this.instance = new lib.grouploadb();
	this.instance.parent = this;
	this.instance.setTransform(430,241.8,1,1,0,0,0,430,241.8);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.gpbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Part 2
	this.instance = new lib.bluefadein();
	this.instance.parent = this;
	this.instance.setTransform(29.5,29.5,1,1,0,0,0,29.5,29.5);

	this.instance_1 = new lib.bluefadeout();
	this.instance_1.parent = this;
	this.instance_1.setTransform(29.5,29.5,1,1,0,0,0,29.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},2).wait(1));

	// Part 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(3,1,1).p("AjWkmIGtAAQBQAAAABQIAAGtQAABQhQAAImtAAQhQAAAAhQIAAmtQAAhQBQAAg");
	this.shape.setTransform(29.5,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AjWEnQhQAAAAhQIAAmtQAAhQBQAAIGtAAQBQAAAABQIAAGtQAABQhQAAg");
	this.shape_1.setTransform(29.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,62,62);


(lib.gpblock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (window.root.cshbsm !== "yes") {
			this.gp.addEventListener("click", fl_MouseClickHandler_9.bind(this));
			if (this.tnum == 8) {
				window.root.cshbsm = "yes";
			}
			var that = this;
			this.namet.text = this.tnum;
			if (this.tnum > localStorage.morexx) {
				that.visible = 0;
			}
			function fl_MouseClickHandler_9() {
				if (localStorage["morechoose" + that.tnum] !== "yes") {
					localStorage["morechoose" + that.tnum] = "yes";
					localStorage.choosetotalnum = Number(localStorage.choosetotalnum) + 1;
					that.cr.play();
				} else {
					localStorage["morechoose" + that.tnum] = "no";
					if(localStorage.choosetotalnum>0){
					localStorage.choosetotalnum = Number(localStorage.choosetotalnum) - 1;
					}
					that.cr.play();
				}
				console.log(localStorage.choosetotalnum + ":" + localStorage["morechoose" + that.tnum]);
			}
		}
		this.cr.num=this.tnum;
	}
	this.frame_2 = function() {
		var that = this;
		this.namet.text = this.tnum;
		if (Number(this.tnum) > Number(localStorage.morexx)) {
			that.visible = 0;
		}else{
			window.root.gman["b"+that.tnum].visible=100;
		}
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// layer
	this.gp = new lib.gpbtn();
	this.gp.parent = this;
	this.gp.setTransform(29.5,29.5,1,1,0,0,0,29.5,29.5);
	new cjs.ButtonHelper(this.gp, 0, 1, 2, false, new lib.gpbtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.gp).wait(3));

	// blue
	this.cr = new lib.choosered();
	this.cr.parent = this;
	this.cr.setTransform(29.5,29.5,1,1,0,0,0,29.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.cr).wait(3));

	// txt
	this.namet = new cjs.Text("1", "25px 'Microsoft YaHei Light'", "#FFFFFF");
	this.namet.name = "namet";
	this.namet.textAlign = "center";
	this.namet.lineHeight = 34;
	this.namet.lineWidth = 27;
	this.namet.parent = this;
	this.namet.setTransform(29.5,13.6);

	this.timeline.addTween(cjs.Tween.get(this.namet).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,62,62);


(lib.EnterEDIT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		if(localStorage.choosetotalnum==1){
			this.play();
		}else{
			this.gotoAndPlay(0);
		}
	}
	this.frame_20 = function() {
		if(window.root.cshenter=="no"){
		this.etb2.addEventListener("click", fl_MouseClickHandler_12);
		window.root.cshenter="yes";
		function fl_MouseClickHandler_12() {
			var founded=0;
			var find = 0;
			while (find <= 8) {
		
				if (localStorage["morechoose" + find] == "yes") {
		            break;
				}
				find+=1;
			}
			localStorage.choosemore=find;
			window.root.gman.play();
			window.root.loading.play();
		}
		}
		if(localStorage.choosetotalnum==1){
			this.gotoAndPlay(19);
		}else{
			this.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(19).call(this.frame_20).wait(14));

	// Part 1
	this.instance = new lib.EnterBTN();
	this.instance.parent = this;
	this.instance.setTransform(34.3,34.3,1,1,0,0,0,34.3,34.3);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.EnterBTN(), 3);

	this.etb2 = new lib.ETBTN2();
	this.etb2.parent = this;
	this.etb2.setTransform(34.3,34.3,1,1,0,0,0,34.3,34.3);
	new cjs.ButtonHelper(this.etb2, 0, 1, 2, false, new lib.ETBTN2(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},17).to({state:[{t:this.etb2}]},1).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},17).to({_off:true},1).wait(2).to({_off:false},0).to({alpha:0},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,71.5,71.5);


(lib.EditExchange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		if(localStorage.choosetotalnum==2){
			this.play();
		}else{
			this.gotoAndPlay(0);
		}
	}
	this.frame_19 = function() {
		if (window.root.cshexc == "no") {
			window.root.cshexc = "yes";
			this.etbtn.addEventListener("click", finda);
			function finda() {
				var founded = new Array();
				founded[1] = "no";
				founded[2] = "no";
				var find = 0;
				while (find <= 8) {
		
					if (localStorage["morechoose" + find] == "yes") {
						if (founded[1] == "no") {
							founded[1] = find;
						} else if (founded[2] == "no") {
							founded[2] = find;
						}
					}
					find += 1;
				}
				var num1 = founded[1];
				var num2 = founded[2];
				if (Number(num1) !== 1) {
					var linshiAid = localStorage["S" + num1 + "Aid"];
					var linshiAname = localStorage["S" + num1 + "Aname"];
					var linshiAmeta = localStorage["S" + num1 + "Ameta"];
					var linshiBid = localStorage["S" + num1 + "Bid"];
					var linshiBname = localStorage["S" + num1 + "Bname"];
					var linshiBmeta = localStorage["S" + num1 + "Bmeta"];
					var linshiCid = localStorage["S" + num1 + "Cid"];
					var linshiCname = localStorage["S" + num1 + "Cname"];
					var linshiCmeta = localStorage["S" + num1 + "Cmeta"];
					var linshianum = localStorage["S" + num1 + "anum"];
					var linshibnum = localStorage["S" + num1 + "bnum"];
					var linshicnum = localStorage["S" + num1 + "cnum"];
					var linshitr = localStorage["tr" + num1 + "max"];
					var linshiAtag = localStorage["S" + num1 + "Atag"];
					var linshiBtag = localStorage["S" + num1 + "Btag"];
					var linshiCtag = localStorage["S" + num1 + "Ctag"];
					var linshiAlore = localStorage["S" + num1 + "Alore"];
					var linshiBlore = localStorage["S" + num1 + "Blore"];
					var linshiClore = localStorage["S" + num1 + "Clore"];
				} else {
					var linshiAid = localStorage.SAid;
					var linshiAname = localStorage.SAname;
					var linshiAmeta = localStorage.SAmeta;
					var linshiBid = localStorage.SBid;
					var linshiBname = localStorage.SBname;
					var linshiBmeta = localStorage.SBmeta;
					var linshiCid = localStorage.SCid;
					var linshiCname = localStorage.SCname;
					var linshiCmeta = localStorage.SCmeta;
					var linshianum = localStorage.Sanum;
					var linshibnum = localStorage.Sbnum;
					var linshicnum = localStorage.Scnum;
					var linshitr = localStorage.trmax
					var linshiAtag = localStorage.SAtag;
					var linshiBtag = localStorage.SBtag;
					var linshiCtag = localStorage.SCtag;
					var linshiAlore = localStorage.SAlore;
					var linshiBlore = localStorage.SBlore;
					var linshiClore = localStorage.SClore;
				}
				if (Number(num1) !== 1) {
					localStorage["S" + num1 + "Aid"] = localStorage["S" + num2 + "Aid"];
					localStorage["S" + num1 + "Aname"] = localStorage["S" + num2 + "Aname"];
					localStorage["S" + num1 + "Ameta"] = localStorage["S" + num2 + "Ameta"];
					localStorage["S" + num1 + "Bid"] = localStorage["S" + num2 + "Bid"];
					localStorage["S" + num1 + "Bname"] = localStorage["S" + num2 + "Bname"];
					localStorage["S" + num1 + "Bmeta"] = localStorage["S" + num2 + "Bmeta"];
					localStorage["S" + num1 + "Cid"] = localStorage["S" + num2 + "Cid"];
					localStorage["S" + num1 + "Cname"] = localStorage["S" + num2 + "Cname"];
					localStorage["S" + num1 + "Cmeta"] = localStorage["S" + num2 + "Cmeta"];
					localStorage["S" + num1 + "anum"] = localStorage["S" + num2 + "anum"];
					localStorage["S" + num1 + "bnum"] = localStorage["S" + num2 + "bnum"];
					localStorage["S" + num1 + "cnum"] = localStorage["S" + num2 + "cnum"];
					localStorage["tr" + num1 + "max"] = localStorage["tr" + num2 + "max"];
					localStorage["S" + num1 + "Atag"] = localStorage["S" + num2 + "Atag"];
					localStorage["S" + num1 + "Btag"] = localStorage["S" + num2 + "Btag"];
					localStorage["S" + num1 + "Ctag"] = localStorage["S" + num2 + "Ctag"];
					localStorage["S" + num1 + "Alore"] = localStorage["S" + num2 + "Alore"];
					localStorage["S" + num1 + "Blore"] = localStorage["S" + num2 + "Blore"];
					localStorage["S" + num1 + "Clore"] = localStorage["S" + num2 + "Clore"];
				} else {
					localStorage.SAid = localStorage["S" + num2 + "Aid"];
					localStorage.SAname = localStorage["S" + num2 + "Aname"];
					localStorage.SAmeta = localStorage["S" + num2 + "Ameta"];
					localStorage.SBid = localStorage["S" + num2 + "Bid"];
					localStorage.SBname = localStorage["S" + num2 + "Bname"];
					localStorage.SBmeta = localStorage["S" + num2 + "Bmeta"];
					localStorage.SCid = localStorage["S" + num2 + "Cid"];
					localStorage.SCname = localStorage["S" + num2 + "Cname"];
					localStorage.SCmeta = localStorage["S" + num2 + "Cmeta"];
					localStorage.Sanum = localStorage["S" + num2 + "anum"];
					localStorage.Sbnum = localStorage["S" + num2 + "bnum"];
					localStorage.Scnum = localStorage["S" + num2 + "cnum"];
					localStorage.trmax = localStorage["tr" + num2 + "max"];
					localStorage.SAtag = localStorage["S" + num2 + "Atag"];
					localStorage.SBtag = localStorage["S" + num2 + "Btag"];
					localStorage.SCtag = localStorage["S" + num2 + "Ctag"];
					localStorage.SAlore = localStorage["S" + num2 + "Alore"];
					localStorage.SBlore = localStorage["S" + num2 + "Blore"];
					localStorage.SClore = localStorage["S" + num2 + "Clore"];
				}
				//-----------------------------
				localStorage["S" + num2 + "Aid"] = linshiAid;
				localStorage["S" + num2 + "Aname"] = linshiAname;
				localStorage["S" + num2 + "Ameta"] = linshiAmeta;
				localStorage["S" + num2 + "Bid"] = linshiBid;
				localStorage["S" + num2 + "Bname"] = linshiBname;
				localStorage["S" + num2 + "Bmeta"] = linshiBmeta;
				localStorage["S" + num2 + "Cid"] = linshiCid;
				localStorage["S" + num2 + "Cname"] = linshiCname;
				localStorage["S" + num2 + "Cmeta"] = linshiCmeta;
				localStorage["S" + num2 + "anum"] = linshianum;
				localStorage["S" + num2 + "bnum"] = linshibnum;
				localStorage["S" + num2 + "cnum"] = linshicnum;
				localStorage["tr" + num2 + "max"] = linshitr;
				localStorage["S" + num2 + "Atag"] = linshiAtag;
				localStorage["S" + num2 + "Btag"] = linshiBtag;
				localStorage["S" + num2 + "Ctag"] = linshiCtag;
				localStorage["S" + num2 + "Alore"] = linshiAlore;
				localStorage["S" + num2 + "Blore"] = linshiBlore;
				localStorage["S" + num2 + "Clore"] = linshiClore;
				alert("您所选的两组已经互相♂调换");
			}
		}
	}
	this.frame_21 = function() {
		if(localStorage.choosetotalnum==2){
			this.gotoAndPlay(20);
		}else{
			this.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(18).call(this.frame_19).wait(2).call(this.frame_21).wait(14));

	// Part 1
	this.instance = new lib.EEXbtn();
	this.instance.parent = this;
	this.instance.setTransform(32.3,32.3,1,1,0,0,0,32.3,32.3);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.etbtn = new lib.exbbtn2();
	this.etbtn.parent = this;
	this.etbtn.setTransform(32.3,32.3,1,1,0,0,0,32.3,32.3);
	new cjs.ButtonHelper(this.etbtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},17).to({state:[{t:this.etbtn}]},1).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},17).to({_off:true},1).wait(3).to({_off:false,alpha:0.922},0).to({alpha:0},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,67.5,67.5);


(lib.EditDel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		if(localStorage.choosetotalnum>=1){
			this.play();
		}else{
			this.gotoAndPlay(0);
		}
	}
	this.frame_19 = function() {
		if (window.root.cshdel == "no") {
			this.nsbtn.addEventListener("click", ruckdel);
			window.root.cshdel = "yes";
			function ruckdel() {
				if (confirm("你真的要删掉选中的组嘛♂")) {
					var find = 0;
					while (find <= 9) {
		
						if (localStorage["morechoose" + find] == "yes") {
							localStorage["morechoose" + find] == "no";
							if (find !== 1) {
								localStorage["S" + find + "Aid"] = "none";
								localStorage["S" + find + "Aname"] = "none";
								localStorage["S" + find + "Ameta"] = "none";
								localStorage["S" + find + "Bid"] = "none";
								localStorage["S" + find + "Bname"] = "none";
								localStorage["S" + find + "Bmeta"] = "none";
								localStorage["S" + find + "Cid"] = "none";
								localStorage["S" + find + "Cname"] = "none";
								localStorage["S" + find + "Cmeta"] = "none";
								localStorage["S" + find + "Atag"] = "none";
								localStorage["S" + find + "Btag"] = "none";
								localStorage["S" + find + "Ctag"] = "none";
								localStorage["S" + find + "Alore"] = "none";
								localStorage["S" + find + "Blore"] = "none";
								localStorage["S" + find + "Clore"] = "none";
								localStorage["S" + find + "anum"] = 1;
								localStorage["S" + find + "bnum"] = 1;
								localStorage["S" + find + "cnum"] = 1;
								localStorage["tr" + find + "max"] = 99999;
								if (localStorage.morexx > 0) {
									localStorage.morexx = Number(localStorage.morexx) - 1;
								}
								var autob = Number(find) + 1;
								while (Number(autob) <= 9) { //自动调整组
									var ab = Number(autob) - 1;
									if (Number(autob) !== 9) {
										localStorage["S" + ab + "Aid"] = localStorage["S" + autob + "Aid"];
										localStorage["S" + ab + "Aname"] = localStorage["S" + autob + "Aname"];
										localStorage["S" + ab + "Ameta"] = localStorage["S" + autob + "Ameta"];
										localStorage["S" + ab + "Bid"] = localStorage["S" + autob + "Bid"];
										localStorage["S" + ab + "Bname"] = localStorage["S" + autob + "Bname"];
										localStorage["S" + ab + "Bmeta"] = localStorage["S" + autob + "Bmeta"];
										localStorage["S" + ab + "Cid"] = localStorage["S" + autob + "Cid"];
										localStorage["S" + ab + "Cname"] = localStorage["S" + autob + "Cname"];
										localStorage["S" + ab + "Cmeta"] = localStorage["S" + autob + "Cmeta"];
										localStorage["S" + ab + "anum"] = localStorage["S" + autob + "anum"];
										localStorage["S" + ab + "bnum"] = localStorage["S" + autob + "bnum"];
										localStorage["S" + ab + "cnum"] = localStorage["S" + autob + "cnum"];
										localStorage["tr" + ab + "max"] = localStorage["tr" + autob + "max"];
										localStorage["S" + ab + "Atag"] = localStorage["S" + autob + "Atag"];
										localStorage["S" + ab + "Btag"] = localStorage["S" + autob + "Btag"];
										localStorage["S" + ab + "Ctag"] = localStorage["S" + autob + "Ctag"];
										localStorage["S" + ab + "Alore"] = localStorage["S" + autob + "Alore"];
										localStorage["S" + ab + "Blore"] = localStorage["S" + autob + "Blore"];
										localStorage["S" + ab + "Clore"] = localStorage["S" + autob + "Clore"];
									}
									console.log("Group:" + autob + "  Change to:" + ab);
									autob += 1;
								}
							} else {
								alert("第一组不可被删除！");
								break;
							}
						}
						find += 1;
					}
					localStorage.choosetotalnum = 0;
					alert("所有你选中的组已经被删除，剩余的组自动向前排列");
				} else {
					alert("Cancelled");
				}
			}
		}
	}
	this.frame_21 = function() {
		if (localStorage.choosetotalnum>0) {
			this.gotoAndPlay(20);
		} else {
			this.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(18).call(this.frame_19).wait(2).call(this.frame_21).wait(15));

	// Part 1
	this.instance = new lib.delbtn();
	this.instance.parent = this;
	this.instance.setTransform(32.3,32.3,1,1,0,0,0,32.3,32.3);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.nsbtn = new lib.newstopbtn();
	this.nsbtn.parent = this;
	this.nsbtn.setTransform(32.3,32.3,1,1,0,0,0,32.3,32.3);
	new cjs.ButtonHelper(this.nsbtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},17).to({state:[{t:this.nsbtn}]},1).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},13).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},17,cjs.Ease.get(-1)).to({_off:true},1).wait(3).to({_off:false},0).to({alpha:0},13,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,67.5,67.5);


(lib.EditAdd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		if (window.root.cshadd == "no") {
			this.btn.addEventListener("click", fl_MouseClickHandler_11);
			window.root.cshadd = "yes";
			function fl_MouseClickHandler_11() {
				if (localStorage.morexx < 8) {
					var a = localStorage.morexx;
					var b = Number(a) + 1;
					localStorage.morexx = b;
					localStorage["S" + localStorage.morexx + "Aid"] = "none";
					localStorage["S" + localStorage.morexx + "Aname"] = "none";
					localStorage["S" + localStorage.morexx + "Ameta"] = "none";
					localStorage["S" + localStorage.morexx + "Bid"] = "none";
					localStorage["S" + localStorage.morexx + "Bname"] = "none";
					localStorage["S" + localStorage.morexx + "Bmeta"] = "none";
					localStorage["S" + localStorage.morexx + "Cid"] = "none";
					localStorage["S" + localStorage.morexx + "Cname"] = "none";
					localStorage["S" + localStorage.morexx + "Cmeta"] = "none";
					localStorage["S" + localStorage.morexx + "anum"] = 1;
					localStorage["S" + localStorage.morexx + "bnum"] = 1;
					localStorage["S" + localStorage.morexx + "cnum"] = 1;
					localStorage["tr" + localStorage.morexx + "max"] = 99999;
					localStorage["S" + localStorage.morexx + "Atag"] = "none";
					localStorage["S" + localStorage.morexx + "Alore"] = "none";
					localStorage["S" + localStorage.morexx + "Btag"] = "none";
					localStorage["S" + localStorage.morexx + "Blore"] = "none";
					localStorage["S" + localStorage.morexx + "Ctag"] = "none";
					localStorage["S" + localStorage.morexx + "Clore"] = "none";
					console.log("Add Group:" + localStorage.morexx);
				} else {
					alert("目前最多只支持八组交易♂哦~");
				}
			}
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Part 1
	this.instance = new lib.EAbtn();
	this.instance.parent = this;
	this.instance.setTransform(32.3,32.3,1,1,0,0,0,32.3,32.3);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.btn = new lib.EAbtn2();
	this.btn.parent = this;
	new cjs.ButtonHelper(this.btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.btn}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,67.5,67.5);


(lib.detailboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_64 = function() {
		this.close.addEventListener("click", fl_ClickToHide_8.bind(this));
		var that=this;
		function fl_ClickToHide_8()
		{
			that.play();
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(64).call(this.frame_64).wait(40));

	// closebtn
	this.close = new lib.closebtn();
	this.close.parent = this;
	this.close.setTransform(14,25.1,1,1,0,0,0,17,16);
	this.close.alpha = 0;
	this.close._off = true;
	new cjs.ButtonHelper(this.close, 0, 1, 2, false, new lib.closebtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.close).wait(28).to({_off:false},0).to({alpha:1},36).wait(1).to({alpha:0},25).to({_off:true},1).wait(13));

	// trademax
	this.instance = new lib.trademax();
	this.instance.parent = this;
	this.instance.setTransform(142.3,373,1,1,0,0,0,101.3,32.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).to({y:345,alpha:1},6,cjs.Ease.get(1)).wait(32).to({x:196.1,alpha:0},6,cjs.Ease.get(-1)).wait(19));

	// movespeed
	this.instance_1 = new lib.movespeed();
	this.instance_1.parent = this;
	this.instance_1.setTransform(143.1,292.1,1,1,0,0,0,101.3,30.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).to({y:270.1,alpha:1},6,cjs.Ease.get(1)).wait(32).to({x:196.1,alpha:0},6,cjs.Ease.get(-1)).wait(22));

	// maxhp
	this.instance_2 = new lib.maxhp();
	this.instance_2.parent = this;
	this.instance_2.setTransform(146.5,234,1,1,0,0,0,105.5,30.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).to({y:197,alpha:1},6,cjs.Ease.get(1)).wait(31).to({x:212.5,alpha:0},7,cjs.Ease.get(-1)).wait(25));

	// namevisible
	this.instance_3 = new lib.namevisibleswich();
	this.instance_3.parent = this;
	this.instance_3.setTransform(82,121.6,1,1,0,0,0,32,11.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({y:82.6,alpha:1},7,cjs.Ease.get(1)).wait(32).to({x:224,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(31));

	// wudiswich
	this.instance_4 = new lib.wudiswich();
	this.instance_4.parent = this;
	this.instance_4.setTransform(110.3,184.1,1,1,0,0,0,61.3,11.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(31).to({_off:false},0).to({y:124.1,alpha:1},6,cjs.Ease.get(1)).wait(32).to({x:231.3,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(27));

	// bg
	this.instance_5 = new lib.bg1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(457.5,225.5,1,1,0,0,0,152.5,225.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:368},11,cjs.Ease.get(-1)).to({x:142.5},13,cjs.Ease.get(1)).wait(65).to({x:457.5},13,cjs.Ease.get(-1)).wait(1));

	// mark
	this.instance_6 = new lib.blackmark();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-63.5,229.6,1,1,0,0,0,447.4,232.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;
	new cjs.ButtonHelper(this.instance_6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({alpha:1},24,cjs.Ease.get(1)).wait(65).to({alpha:0},13,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(305,0,305,451);


(lib.copybutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		if(window.root.generateresult!==""){
			this.play();
		}else{
			this.gotoAndPlay(11);
		}
	}
	this.frame_51 = function() {
		this.cpbtn.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
		var a=prompt("请复制QwQ",window.root.generateresult);
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(39).call(this.frame_51).wait(1));

	// Part 1
	this.cpbtn = new lib.copybtn();
	this.cpbtn.parent = this;
	this.cpbtn.setTransform(62.5,24,1,1,0,0,0,62.5,24);
	new cjs.ButtonHelper(this.cpbtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.cpbtn).to({alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({_off:false},0).to({alpha:1},37).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,130,53);


(lib.groupmanage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		window.root.groupload="notok";
		window.root.loading.play();
	}
	this.frame_15 = function() {
		window.crjs=1;
	}
	this.frame_19 = function() {
		this.b1.tnum=1;
		this.b2.tnum=2;
		this.b3.tnum=3;
		this.b4.tnum=4;
		this.b5.tnum=5;
		this.b6.tnum=6;
		this.b7.tnum=7;
		this.b8.tnum=8;
	}
	this.frame_22 = function() {
		this.b1.tnum=1;
		this.b2.tnum=2;
		this.b3.tnum=3;
		this.b4.tnum=4;
		this.b5.tnum=5;
		this.b6.tnum=6;
		this.b7.tnum=7;
		this.b8.tnum=8;
	}
	this.frame_26 = function() {
		this.b1.tnum=1;
		this.b2.tnum=2;
		this.b3.tnum=3;
		this.b4.tnum=4;
		this.b5.tnum=5;
		this.b6.tnum=6;
		this.b7.tnum=7;
		this.b8.tnum=8;
	}
	this.frame_30 = function() {
		this.b1.tnum=1;
		this.b2.tnum=2;
		this.b3.tnum=3;
		this.b4.tnum=4;
		this.b5.tnum=5;
		this.b6.tnum=6;
		this.b7.tnum=7;
		this.b8.tnum=8;
	}
	this.frame_34 = function() {
		this.b1.tnum=1;
		this.b2.tnum=2;
		this.b3.tnum=3;
		this.b4.tnum=4;
		this.b5.tnum=5;
		this.b6.tnum=6;
		this.b7.tnum=7;
		this.b8.tnum=8;
	}
	this.frame_38 = function() {
		this.b1.tnum=1;
		this.b2.tnum=2;
		this.b3.tnum=3;
		this.b4.tnum=4;
		this.b5.tnum=5;
		this.b6.tnum=6;
		this.b7.tnum=7;
		this.b8.tnum=8;
	}
	this.frame_42 = function() {
		this.b1.tnum=1;
		this.b2.tnum=2;
		this.b3.tnum=3;
		this.b4.tnum=4;
		this.b5.tnum=5;
		this.b6.tnum=6;
		this.b7.tnum=7;
		this.b8.tnum=8;
	}
	this.frame_46 = function() {
		this.b1.tnum=1;
		this.b2.tnum=2;
		this.b3.tnum=3;
		this.b4.tnum=4;
		this.b5.tnum=5;
		this.b6.tnum=6;
		this.b7.tnum=7;
		this.b8.tnum=8;
	}
	this.frame_63 = function() {
		window.root.groupload="ok";
	}
	this.frame_69 = function() {
		var that = this;
		this.csb.addEventListener("click", fl_MouseClickHandler_10);
		
		function fl_MouseClickHandler_10() {
			that.play();
		}
		this.stop();
	}
	this.frame_99 = function() {
		localStorage.choosetotalnum=0;
		var csh=0;
		while(csh<=8){
			localStorage["morechoose" + csh]="no";
			csh+=1;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(14).call(this.frame_15).wait(4).call(this.frame_19).wait(3).call(this.frame_22).wait(4).call(this.frame_26).wait(4).call(this.frame_30).wait(4).call(this.frame_34).wait(4).call(this.frame_38).wait(4).call(this.frame_42).wait(4).call(this.frame_46).wait(17).call(this.frame_63).wait(6).call(this.frame_69).wait(30).call(this.frame_99).wait(13));

	// loading
	this.instance = new lib.LoadingTZXT();
	this.instance.parent = this;
	this.instance.setTransform(563.9,68.2,1,1,0,0,0,52.4,13.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).to({alpha:1},5).wait(34).to({alpha:0},5).to({_off:true},1).wait(49));

	// 8
	this.b8 = new lib.gpblock();
	this.b8.parent = this;
	this.b8.setTransform(121.5,245.6,1,1,0,0,0,29.5,29.5);
	this.b8.alpha = 0;
	this.b8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.b8).wait(46).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(18).to({y:465.5,alpha:0},11,cjs.Ease.get(1)).to({_off:true},15).wait(8));

	// 7
	this.b7 = new lib.gpblock();
	this.b7.parent = this;
	this.b7.setTransform(676.5,153.6,1,1,0,0,0,29.5,29.5);
	this.b7.alpha = 0;
	this.b7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.b7).wait(42).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(22).to({y:373.5,alpha:0},11,cjs.Ease.get(1)).to({_off:true},15).wait(8));

	// 6
	this.b6 = new lib.gpblock();
	this.b6.parent = this;
	this.b6.setTransform(580.5,153.6,1,1,0,0,0,29.5,29.5);
	this.b6.alpha = 0;
	this.b6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.b6).wait(38).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(26).to({y:373.5,alpha:0},11,cjs.Ease.get(1)).to({_off:true},15).wait(8));

	// 5
	this.b5 = new lib.gpblock();
	this.b5.parent = this;
	this.b5.setTransform(488.5,153.6,1,1,0,0,0,29.5,29.5);
	this.b5.alpha = 0;
	this.b5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.b5).wait(34).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(30).to({y:373.5,alpha:0},11,cjs.Ease.get(1)).to({_off:true},15).wait(8));

	// 4
	this.b4 = new lib.gpblock();
	this.b4.parent = this;
	this.b4.setTransform(394.5,153.6,1,1,0,0,0,29.5,29.5);
	this.b4.alpha = 0;
	this.b4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.b4).wait(30).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(34).to({y:373.5,alpha:0},11,cjs.Ease.get(1)).to({_off:true},15).wait(8));

	// 3
	this.b3 = new lib.gpblock();
	this.b3.parent = this;
	this.b3.setTransform(303.5,153.6,1,1,0,0,0,29.5,29.5);
	this.b3.alpha = 0;
	this.b3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.b3).wait(26).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(38).to({y:373.5,alpha:0},11,cjs.Ease.get(1)).to({_off:true},15).wait(8));

	// 2
	this.b2 = new lib.gpblock();
	this.b2.parent = this;
	this.b2.setTransform(212.5,153.6,1,1,0,0,0,29.5,29.5);
	this.b2.alpha = 0;
	this.b2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.b2).wait(23).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(41).to({y:373.5,alpha:0},11,cjs.Ease.get(1)).to({_off:true},15).wait(8));

	// 1
	this.b1 = new lib.gpblock();
	this.b1.parent = this;
	this.b1.setTransform(121.5,153.6,1,1,0,0,0,29.5,29.5);
	this.b1.alpha = 0;
	this.b1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.b1).wait(19).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(45).to({y:373.5,alpha:0},11,cjs.Ease.get(1)).to({_off:true},15).wait(8));

	// Edit-Enter
	this.eet = new lib.EnterEDIT();
	this.eet.parent = this;
	this.eet.setTransform(471.3,360.3,1,1,0,0,0,34.3,34.3);
	this.eet.alpha = 0;
	this.eet._off = true;

	this.timeline.addTween(cjs.Tween.get(this.eet).wait(52).to({_off:false},0).to({alpha:1},10).wait(1).to({regX:0,regY:0,x:437,y:326},0).wait(15).to({regX:34.3,regY:34.3,x:471.3,y:360.3},0).to({y:551.3,alpha:0},11,cjs.Ease.get(1)).to({_off:true},15).wait(8));

	// Edit-Del
	this.edb = new lib.EditDel();
	this.edb.parent = this;
	this.edb.setTransform(364.8,360.3,1,1,0,0,0,32.3,32.3);
	this.edb.alpha = 0;
	this.edb._off = true;

	this.timeline.addTween(cjs.Tween.get(this.edb).wait(52).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(-1)).wait(16).to({y:580.3,alpha:0},11,cjs.Ease.get(1)).to({_off:true},15).wait(8));

	// Edit-Exchange
	this.eeb = new lib.EditExchange();
	this.eeb.parent = this;
	this.eeb.setTransform(248.8,360.3,1,1,0,0,0,32.3,32.3);
	this.eeb.alpha = 0;
	this.eeb._off = true;

	this.timeline.addTween(cjs.Tween.get(this.eeb).wait(52).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(-1)).wait(16).to({y:580.3,alpha:0},11,cjs.Ease.get(1)).to({_off:true},15).wait(8));

	// Edit-Add
	this.eab = new lib.EditAdd();
	this.eab.parent = this;
	this.eab.setTransform(128.3,360.3,1,1,0,0,0,32.3,32.3);
	this.eab.alpha = 0;
	this.eab._off = true;

	this.timeline.addTween(cjs.Tween.get(this.eab).wait(52).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(-1)).wait(16).to({y:580.3,alpha:0},11,cjs.Ease.get(1)).to({_off:true},15).wait(8));

	// closebtn
	this.csb = new lib.closebtn();
	this.csb.parent = this;
	this.csb.setTransform(13.9,-99.9);
	this.csb._off = true;
	new cjs.ButtonHelper(this.csb, 0, 1, 2, false, new lib.closebtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.csb).wait(9).to({_off:false},0).to({y:20.1},8,cjs.Ease.get(1)).wait(75).to({y:475},18,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// btnmark
	this.instance_1 = new lib.button();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,4.678,5.848);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},91).wait(20));

	// bg
	this.instance_2 = new lib.blackmark2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(400,-229.9,1,1,0,0,0,400,225);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:225},16,cjs.Ease.get(1)).wait(75).to({y:680},18,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-454.9,800,450);


// stage content:
(lib.村民交易生成器 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Version:1,"refresh alll":11,"help manual":15});

	// timeline functions:
	this.frame_0 = function() {
		window.mainroo=this;
	}
	this.frame_1 = function() {
		this.version="Beta.V0.9";
	}
	this.frame_3 = function() {
		var that=this;
		window.root=this;
		window.root.generateresult="";
		if(localStorage.csiturn=="on"){
				localStorage.receivemode="yes";
			that.vc.gotoAndPlay(0);
			that.its.gotoAndPlay(0);
			that.gotoAndPlay(45);
		}
		var csh=1;
		while(csh<=8){
			localStorage["morechoose" + csh]="no";
			csh+=1;
		}
		window.root.cshbsm="no";//防止重复addListener
		window.root.cshadd="no";
		window.root.cshenter="no";
		window.root.cshdel="no";
		window.root.cshexc="no";
		localStorage.tagtA="no";
		localStorage.tagtB="no";
		localStorage.tagtC="no";
	}
	this.frame_11 = function() {
		window.root = this;
		this.cv = 0;
		
		localStorage.csiturn = "off";
		window.root.buyAitemid="";
		window.root.buyAitemname="";
		window.root.buyAitemmeta="";
		window.root.buyBitemid="";
		window.root.buyBitemname="";
		window.root.buyBitemmeta="";
		window.root.buyCitemid="";
		window.root.buyCitemname="";
		window.root.buyCitemmeta="";
		localStorage.morexx=1;
		localStorage.choosemore=1;
		//对8组的ID和name进行初始化
		localStorage.SAid="none";
		localStorage.SAname="none";
		localStorage.SAmeta="none";
		localStorage.SBid="none";
		localStorage.SBname="none";
		localStorage.SBmeta="none";
		localStorage.SCid="none";
		localStorage.SCname="none";
		localStorage.SCmeta="none";
		localStorage.Sanum=1;
		localStorage.Sbnum=1;
		localStorage.Scnum=1;
		//---------------2--------------
		localStorage.S2Aid="none";
		localStorage.S2Aname="none";
		localStorage.S2Ameta="none";
		localStorage.S2Bid="none";
		localStorage.S2Bname="none";
		localStorage.S2Bmeta="none";
		localStorage.S2Cid="none";
		localStorage.S2Cname="none";
		localStorage.S2Cmeta="none";
		localStorage.S2anum=1;
		localStorage.S2bnum=1;
		localStorage.S2cnum=1;
		//---------------3---------------
		localStorage.S3Aid="none";
		localStorage.S3Aname="none";
		localStorage.S3Ameta="none";
		localStorage.S3Bid="none";
		localStorage.S3Bname="none";
		localStorage.S3Bmeta="none";
		localStorage.S3Cid="none";
		localStorage.S3Cname="none";
		localStorage.S3Cmeta="none";
		localStorage.S3anum=1;
		localStorage.S3bnum=1;
		localStorage.S3cnum=1;
		//---------------4----------------
		localStorage.S4Aid="none";
		localStorage.S4Aname="none";
		localStorage.S4Ameta="none";
		localStorage.S4Bid="none";
		localStorage.S4Bname="none";
		localStorage.S4Bmeta="none";
		localStorage.S4Cid="none";
		localStorage.S4Cname="none";
		localStorage.S4Cmeta="none";
		localStorage.S4anum=1;
		localStorage.S4bnum=1;
		localStorage.S4cnum=1;
		//----------------5-----------------
		localStorage.S5Aid="none";
		localStorage.S5Aname="none";
		localStorage.S5Ameta="none";
		localStorage.S5Bid="none";
		localStorage.S5Bname="none";
		localStorage.S5Bmeta="none";
		localStorage.S5Cid="none";
		localStorage.S5Cname="none";
		localStorage.S5Cmeta="none";
		localStorage.S5anum=1;
		localStorage.S5bnum=1;
		localStorage.S5cnum=1;
		//----------------6------------------
		localStorage.S6Aid="none";
		localStorage.S6Aname="none";
		localStorage.S6Ameta="none";
		localStorage.S6Bid="none";
		localStorage.S6Bname="none";
		localStorage.S6Bmeta="none";
		localStorage.S6Cid="none";
		localStorage.S6Cname="none";
		localStorage.S6Cmeta="none";
		localStorage.S6anum=1;
		localStorage.S6bnum=1;
		localStorage.S6cnum=1;
		//-----------------7-------------------
		localStorage.S7Aid="none";
		localStorage.S7Aname="none";
		localStorage.S7Ameta="none";
		localStorage.S7Bid="none";
		localStorage.S7Bname="none";
		localStorage.S7Bmeta="none";
		localStorage.S7Cid="none";
		localStorage.S7Cname="none";
		localStorage.S7Cmeta="none";
		localStorage.S7anum=1;
		localStorage.S7bnum=1;
		localStorage.S7cnum=1;
		//------------------8--------------------
		localStorage.S8Aid="none";
		localStorage.S8Aname="none";
		localStorage.S8Ameta="none";
		localStorage.S8Bid="none";
		localStorage.S8Bname="none";
		localStorage.S8Bmeta="none";
		localStorage.S8Cid="none";
		localStorage.S8Cname="none";
		localStorage.S8Cmeta="none";
		localStorage.S8anum=1;
		localStorage.S8bnum=1;
		localStorage.S8cnum=1;
		localStorage.trmax=99999;
		localStorage.tr2max=99999;
		localStorage.tr3max=99999;
		localStorage.tr4max=99999;
		localStorage.tr5max=99999;
		localStorage.tr6max=99999;
		localStorage.tr7max=99999;
		localStorage.tr8max=99999;
		//-----------Diaplay&LoreSection----------------
		//A
		localStorage.SAtag="none";
		localStorage.S2Atag="none";
		localStorage.S3Atag="none";
		localStorage.S4Atag="none";
		localStorage.S5Atag="none";
		localStorage.S6Atag="none";
		localStorage.S7Atag="none";
		localStorage.S8Atag="none";
		localStorage.SAlore="none";
		localStorage.S2Alore="none";
		localStorage.S3Alore="none";
		localStorage.S4Alore="none";
		localStorage.S5Alore="none";
		localStorage.S6Alore="none";
		localStorage.S7Alore="none";
		localStorage.S8Alore="none";
		//B
		localStorage.SBtag="none";
		localStorage.S2Btag="none";
		localStorage.S3Btag="none";
		localStorage.S4Btag="none";
		localStorage.S5Btag="none";
		localStorage.S6Btag="none";
		localStorage.S7Btag="none";
		localStorage.S8Btag="none";
		localStorage.SBlore="none";
		localStorage.S2Blore="none";
		localStorage.S3Blore="none";
		localStorage.S4Blore="none";
		localStorage.S5Blore="none";
		localStorage.S6Blore="none";
		localStorage.S7Blore="none";
		localStorage.S8Blore="none";
		//C
		localStorage.SCtag="none";
		localStorage.S2Ctag="none";
		localStorage.S3Ctag="none";
		localStorage.S4Ctag="none";
		localStorage.S5Ctag="none";
		localStorage.S6Ctag="none";
		localStorage.S7Ctag="none";
		localStorage.S8Ctag="none";
		localStorage.SClore="none";
		localStorage.S2Clore="none";
		localStorage.S3Clore="none";
		localStorage.S4Clore="none";
		localStorage.S5Clore="none";
		localStorage.S6Clore="none";
		localStorage.S7Clore="none";
		localStorage.S8Clore="none";
		//----------------------------------------
		localStorage.villagername="Trader";
		localStorage.ifshowname="yes";
		localStorage.ifwudi="no";
		localStorage.maxhp=20;
		localStorage.mvsp=1;
		localStorage.choosetotalnum=0;
	}
	this.frame_15 = function() {
		if(confirm("需要使用帮助吗？")){
		alert("帮助手册");
		alert("Beta.V0.5版本\n1.先点击物品框进行物品的选择\n2.点击村民上方的名字进行改名，点击村民衣服更改类型.\n3.点击下方的细节设置进行设置\n4.按下生成，然后复制按钮会弹出来，复制就搞定了哈哈~");
		alert("Beta.V0.8版本\n其他选项和Beta0.5相同，Beta0.8新加入了组管理，可以同时添加多组交易。\n1.点开组..按钮，进入组管理面板.\n2.组管理会加载一会，出现“+”号，点击加号可以添加交易\n3.添加交易后，点击需要修改的交易（只能选择一个！）会弹出带有“→”号的按钮，点击即可编辑选中的组中的物品.\n\nPS：每个组不同的内容：META,ID,NAME,数值，交易次数..\n4.回到组面板，选中一个选项，红色按钮“X”会显现出来，可以进行删除（本人不建议多选删除，这样可能会导致把后面几组的物品移动或者损坏的BUG）\n5.选中两组时，可以进行对调操作，这个时候绿色按钮会显现出来，点击可以直接对调~");
		alert("Beta.V0.9版本\n其他选项和以前版本相同\n\nBetaV0.9版本修复了组管理中相互调换时出现的未定义错误！\n添加了自定义物品名字和描述！\n1.将鼠标移至物品框，右方会弹出带有TAG字样的选项.\n2.点击TAG，会弹出输入框，第一次输入的是物品的自定义名字，第二次输入的是物品的描述.\n3.当你不需要哪一项的时候，留着none就行.\n4.按下确定，其他步骤同以前版本~");
		alert("祝你使用愉♂悦\n            ------SomeBottle");
		}
	}
	this.frame_111 = function() {
		var that = this;
		this.encb.addEventListener("click", fl_ClickToHide_3.bind(this));
		
		function fl_ClickToHide_3() {
			alert("附魔功能暂未开放，请期待下个版本");
		}
		
		this.mgcb.addEventListener("click", fl_ClickToHide_4.bind(this));
		
		function fl_ClickToHide_4() {
			alert("药水效果功能暂未开放，请期待下个版本");
		}
		
		this.dtsbtn.addEventListener("click", fl_ClickToHide_5.bind(this));
		
		function fl_ClickToHide_5() {
			window.root.detailboard.play();
		}
		//生成代码
		function generate() {
			var basica = "/summon Villager ~ ~1 ~ {";
			basica += "Profession:" + localStorage.villagerchosenum + ",";
			basica += "CustomName:" + '"' + localStorage.villagername + '",';
			if (localStorage.ifshowname == "yes") {
				basica += "CustomNameVisible:1,";
			} else {
				basica += "CustomNameVisible:0,";
			}
			if (localStorage.ifwudi == "yes") {
				basica += "Invulnerable:1b,";
			}
			if (localStorage.maxhp !== 20 || localStorage.mvsp !== 1) {
				basica += "Attributes:[";
				if (localStorage.maxhp !== 20) {
					basica += "{Name:generic.maxHealth,Base:" + localStorage.maxhp + "}";
					if (localStorage.mvsp !== 1) {
						basica += ",";
					}
				}
				if (localStorage.mvsp !== 1) {
					basica += "{Name:generic.movementSpeed,Base:" + localStorage.mvsp + "}";
				}
				basica += "],";
			}
			if (localStorage.SAid == "none" || localStorage.SCid == "none") {
				alert("Generate Failed! Reason:A项和C项必不可少！");
				return false;
			} //基础ABC判断
			basica += "Offers:{Recipes:[{";
			basica += "maxUses:" + localStorage.trmax + ",";
			basica += "buy:{id:" + localStorage.SAname + ",Count:" + localStorage.Sanum + ",Damage:" + localStorage.SAmeta;
			if (localStorage.SAtag !== "none") {
				basica += ",";
				basica += "tag:{display:{Name:" + '"' + localStorage.SAtag + '"';
				if (localStorage.SAlore !== "none") {
					basica += ",Lore:[" + '"' + localStorage.SAlore + '"' + "]";
				}
				basica += "}}";
			}
			basica += "},";
			if (localStorage.SBid !== "none") {
				basica += "buyB:{id:" + localStorage.SBname + ",Count:" + localStorage.Sbnum + ",Damage:" + localStorage.SBmeta;
				if (localStorage.SBtag !== "none") {
					basica += ",";
					basica += "tag:{display:{Name:" + '"' + localStorage.SBtag + '"';
					if (localStorage.SBlore !== "none") {
						basica += ",Lore:[" + '"' + localStorage.SBlore + '"' + "]";
					}
					basica += "}}";
				}
				basica += "},";
			}
			basica += "sell:{id:" + localStorage.SCname + ",Count:" + localStorage.Scnum + ",Damage:" + localStorage.SCmeta;
			if (localStorage.SCtag !== "none") {
				basica += ",";
				basica += "tag:{display:{Name:" + '"' + localStorage.SCtag + '"';
				if (localStorage.SClore !== "none") {
					basica += ",Lore:[" + '"' + localStorage.SClore + '"' + "]";
				}
				basica += "}}";
			}
			basica += "}}";
			if (localStorage.morexx !== 1) { //进阶ABC
				var count = 2;
				while (Number(count) <= Number(localStorage.morexx)) {
					if (localStorage["S" + count + "Aname"] !== "none") {
						basica += ",{maxUses:" + localStorage["tr" + count + "max"] + ",";
						basica += "buy:{id:" + localStorage["S" + count + "Aname"] + ",Count:" + localStorage["S" + count + "anum"] + ",Damage:" + localStorage["S" + count + "Ameta"];
						if (localStorage["S" + count + "Atag"] !== "none") { //自定义物品模式是否开启
							basica += ",";
							basica += "tag:{display:{Name:" + '"' + localStorage["S" + count + "Atag"] + '"';
							if (localStorage["S" + count + "Alore"] !== "none") {
								basica += ",Lore:[" + '"' + localStorage["S" + count + "Alore"] + '"' + "]";
							}
							basica += "}}";
						} //AEND
						basica += "},";
						if (localStorage["S" + count + "Bid"] !== "none") {
							basica += "buyB:{id:" + localStorage["S" + count + "Bname"] + ",Count:" + localStorage["S" + count + "bnum"] + ",Damage:" + localStorage["S" + count + "Bmeta"];
							if (localStorage["S" + count + "Btag"] !== "none") { //BSTART
								basica += ",";
								basica += "tag:{display:{Name:" + '"' + localStorage["S" + count + "Btag"] + '"';
								if (localStorage["S" + count + "Blore"] !== "none") {
									basica += ",Lore:[" + '"' + localStorage["S" + count + "Blore"] + '"' + "]";
								}
								basica += "}}";
							} //BEND
							basica += "},";
						} //CSTART
						basica += "sell:{id:" + localStorage["S" + count + "Cname"] + ",Count:" + localStorage["S" + count + "cnum"] + ",Damage:" + localStorage["S" + count + "Cmeta"];
						if (localStorage["S" + count + "Ctag"] !== "none") {
							basica += ",";
							basica += "tag:{display:{Name:" + '"' + localStorage["S" + count + "Ctag"] + '"';
							if (localStorage["S" + count + "Clore"] !== "none") {
								basica += ",Lore:[" + '"' + localStorage["S" + count + "Clore"] + '"' + "]";
							}
							basica += "}}";
						}
						basica += "}}";
					} //CEND
					count = Number(count) + 1;
				}
			}
			basica += "]}}";
			window.root.generateresult = basica;
		}
		//参考	this.batxt.text=localStorage.Aid+"\n"+localStorage.Aname+":"+localStorage.Ameta;
		this.gnbtn.addEventListener("click", fl_ClickToHide_10.bind(this));
		
		function fl_ClickToHide_10() {
			generate();
			that.vc.gotoAndPlay("jiaoyi");
		}
		this.grobtn.addEventListener("click", fl_MouseClickHandler_8.bind(this));
		
		function fl_MouseClickHandler_8() {
			that.gman.play();
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(8).call(this.frame_11).wait(4).call(this.frame_15).wait(96).call(this.frame_111).wait(1));

	// loading
	this.loading = new lib.grouploading();
	this.loading.parent = this;
	this.loading.setTransform(400.1,225,1,1,0,0,0,430,241.8);
	this.loading._off = true;

	this.timeline.addTween(cjs.Tween.get(this.loading).wait(105).to({_off:false},0).wait(7));

	// groupmanage
	this.gman = new lib.groupmanage();
	this.gman.parent = this;
	this.gman.setTransform(400,225,1,1,0,0,0,400,225);
	this.gman._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gman).wait(105).to({_off:false},0).wait(7));

	// detailboard
	this.detailboard = new lib.detailboard();
	this.detailboard.parent = this;
	this.detailboard.setTransform(661.5,225.5,1,1,0,0,0,152.5,225.5);
	this.detailboard._off = true;

	this.timeline.addTween(cjs.Tween.get(this.detailboard).wait(100).to({_off:false},0).wait(12));

	// villager
	this.instance = new lib.v0();
	this.instance.parent = this;
	this.instance.setTransform(686.6,616,0.811,1.049,0,0,0,81.5,162.5);
	this.instance._off = true;

	this.vc = new lib.villagerchosen();
	this.vc.parent = this;
	this.vc.setTransform(686.6,227.1,1,1,0,0,0,81.5,162.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},64).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},3).to({state:[{t:this.instance}]},3).to({state:[{t:this.vc}]},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).to({scaleX:1.28,scaleY:0.93,y:191.1},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,y:257.1},3,cjs.Ease.get(1)).to({regX:80.5,regY:160.5,x:674.6,y:229.6},3,cjs.Ease.get(-1)).to({_off:true},1).wait(32));

	// group
	this.grobtn = new lib.groupswich();
	this.grobtn.parent = this;
	this.grobtn.setTransform(440.1,-24.3,0.755,0.755,0,0,0,53,21.6);
	this.grobtn._off = true;
	new cjs.ButtonHelper(this.grobtn, 0, 1, 2, false, new lib.groupswich(), 3);

	this.timeline.addTween(cjs.Tween.get(this.grobtn).wait(92).to({_off:false},0).to({y:29.7},7,cjs.Ease.get(1)).wait(13));

	// detailsettings
	this.dtsbtn = new lib.Detailbtn();
	this.dtsbtn.parent = this;
	this.dtsbtn.setTransform(918.2,432.4,1,1,0,0,0,98.2,10.2);
	this.dtsbtn._off = true;
	new cjs.ButtonHelper(this.dtsbtn, 0, 1, 2, false, new lib.Detailbtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.dtsbtn).wait(84).to({_off:false},0).to({x:694.3,y:429.5},11,cjs.Ease.get(1)).wait(17));

	// item
	this.its = new lib.itemselecter();
	this.its.parent = this;
	this.its.setTransform(272.5,169.1,1,1,0,0,0,244.5,110);
	this.its.alpha = 0;
	this.its._off = true;

	this.timeline.addTween(cjs.Tween.get(this.its).wait(66).to({_off:false},0).to({alpha:1},9,cjs.Ease.get(-1)).wait(37));

	// magic
	this.mgcb = new lib.magicbtn();
	this.mgcb.parent = this;
	this.mgcb.setTransform(319,534,1,1,0,0,0,88,54);
	this.mgcb._off = true;
	new cjs.ButtonHelper(this.mgcb, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.mgcb).wait(69).to({_off:false},0).to({y:382},8,cjs.Ease.get(1)).wait(35));

	// copy
	this.cpbtn = new lib.copybtn();
	this.cpbtn.parent = this;
	this.cpbtn.setTransform(511.5,572,1,1,0,0,0,62.5,24);
	this.cpbtn._off = true;
	new cjs.ButtonHelper(this.cpbtn, 0, 1, 1);

	this.instance_1 = new lib.copybutton();
	this.instance_1.parent = this;
	this.instance_1.setTransform(511.5,403,1,1,0,0,0,62.5,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.cpbtn}]},79).to({state:[{t:this.instance_1}]},11).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.cpbtn).wait(79).to({_off:false},0).to({_off:true,y:403},11,cjs.Ease.get(1)).wait(22));

	// generate
	this.gnbtn = new lib.generatebtn();
	this.gnbtn.parent = this;
	this.gnbtn.setTransform(511.5,575.5,1,1,0,0,0,61.5,25.5);
	this.gnbtn._off = true;
	new cjs.ButtonHelper(this.gnbtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.gnbtn).wait(84).to({_off:false},0).to({y:329.5},10,cjs.Ease.get(1)).wait(18));

	// enchant
	this.encb = new lib.enchantbtn();
	this.encb.parent = this;
	this.encb.setTransform(118.1,534.5,1,1,0,0,0,85,53.5);
	this.encb._off = true;
	new cjs.ButtonHelper(this.encb, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.encb).wait(74).to({_off:false},0).to({y:382.5},7,cjs.Ease.get(1)).wait(31));

	// Author
	this.instance_2 = new lib.titleauthor();
	this.instance_2.parent = this;
	this.instance_2.setTransform(395.3,222.2,1,1,0,0,0,76.9,12.7);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.title();
	this.instance_3.parent = this;
	this.instance_3.setTransform(399.3,230.9,1,1,0,0,0,151.6,11.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},15).wait(9).to({alpha:0},5,cjs.Ease.get(-1)).to({_off:true},2).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).to({x:362.3,y:217.9,alpha:1},6,cjs.Ease.get(1)).wait(2).to({scaleX:0.93,scaleY:0.93,x:306.1,y:155.3},6,cjs.Ease.get(-1)).to({regX:151.7,scaleX:0.8,scaleY:0.8,x:140.4,y:21},9,cjs.Ease.get(1)).wait(50));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0095FF","#3F54FF"],[0,1],-203.5,18.5,569.2,-188.5).s().p("Eg+fAjKMAAAhGTMB8/AAAMAAABGTg");
	this.shape.setTransform(400,225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(112));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,225,800,450.1);
// library properties:
lib.properties = {
	width: 800,
	height: 450,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/村民交易生成器_atlas_.png", id:"村民交易生成器_atlas_"},
		{src:"sounds/haggle1.mp3", id:"haggle1"},
		{src:"sounds/JohnCena.mp3", id:"JohnCena"},
		{src:"sounds/thankyou.mp3", id:"thankyou"},
		{src:"sounds/yes1.mp3", id:"yes1"},
		{src:"sounds/yessir.mp3", id:"yessir"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;