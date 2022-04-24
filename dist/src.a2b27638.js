// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/dom-json-tree/dist/index.js":[function(require,module,exports) {
var define;
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).DomJsonTree=t()}(this,function(){"use strict";function _(e,t){var r={};for(var n in e)r[n]=e[n];for(var n in t)r[n]=t[n];return r}function a(e){return e.currentTarget.events[e.type](e)}function j(e,t,r,n,o){if("key"===t);else if("style"===t)for(var l in _(r,n)){var i=null==n||null==n[l]?"":n[l];"-"===l[0]?e[t].setProperty(l,i):e[t][l]=i}else if("o"===t[0]&&"n"===t[1])e.events||(e.events={}),null==(e.events[t=t.slice(2)]=n)?e.removeEventListener(t,a):null==r&&e.addEventListener(t,a);else{var p=null==n||!1===n;if(t in e&&"list"!==t&&"draggable"!==t&&"spellcheck"!==t&&"translate"!==t&&!o)e[t]=null==n?"":n,p&&e.removeAttribute(t);else o&&t!==(t=t.replace(/^xlink:?/,""))?p?e.removeAttributeNS(s,t):e.setAttributeNS(s,t,n):p?e.removeAttribute(t):e.setAttribute(t,n)}}function P(e,t){function r(){e.removeChild(o(t))}var n=t.props&&t.props.onremove;null!=n?n(t.element,r):r()}function T(e){return null==e?null:e.key}function p(e,t,r,n,o,l){return{name:e,props:t,children:r,element:n,key:o,type:l}}function l(e,t){for(var r,n=arguments,o=[],l=[],i=arguments.length;2<i--;)o.push(n[i]);for(null!=(t=null==t?{}:t).children&&(o.length<=0&&o.push(t.children),delete t.children);0<o.length;)if(y(r=o.pop()))for(i=r.length;0<i--;)o.push(r[i]);else!1===r||!0===r||null==r||l.push("object"==typeof r?r:p(r,d,u,void 0,null,2));return"function"==typeof e?e(t,t.children=l):p(e,t,l,null,t.key,0)}function e(e,t,r){if(void 0===r&&(r={}),this.json=e,this.container=t,this.node,r.colors){var n=r.colors;n.key&&(i.Property_Key.color=n.key),n.type&&(i.Property_Type.color=n.type),n.typeNumber&&(i["Property_Type-number"].color=n.typeNumber),n.typeString&&(i["Property_Type-string"].color=n.typeString),n.typeBoolean&&(i["Property_Type-boolean"].color=n.typeBoolean)}}var s="http://www.w3.org/1999/xlink",d={},u=[],y=Array.isArray,x=function(e,t,r){var n=2===e.type?document.createTextNode(e.name):(r=r||"svg"===e.name)?document.createElementNS("http://www.w3.org/2000/svg",e.name):document.createElement(e.name),o=e.props;o.oncreate&&t.push(function(){o.oncreate(n)});for(var l=0,i=e.children.length;l<i;l++)n.appendChild(x(e.children[l],t,r));for(var p in o)j(n,p,null,o[p],r);return e.element=n},o=function(e){for(var t=0,r=e.children.length;t<r;t++)o(e.children[t]);var n=e.props.ondestroy;return null!=n&&n(e.element),e.element},S=function(e,t,r,n,o,l){if(n===r);else if(null!=r&&2===r.type&&2===n.type)r.name!==n.name&&(t.nodeValue=n.name);else if(null==r||r.name!==n.name){var i=e.insertBefore(x(n,o,l),t);null!=r&&P(e,r),t=i}else{var p,a,s;!function(e,t,r,n,o,l){for(var i in _(t,r))("value"===i||"checked"===i?e[i]:t[i])!==r[i]&&j(e,i,t[i],r[i],o);var p=l?r.oncreate:r.onupdate;null!=p&&n.push(function(){p(e,t)})}(t,r.props,n.props,o,l=l||"svg"===n.name,1===r.type);for(var d,u=r.children,y=0,c=u.length-1,g=n.children,f=0,m=g.length-1;f<=m&&y<=c&&(s=T(u[y]),d=T(g[f]),null!=s&&s===d);)S(t,u[y].element,u[y],g[f],o,l),y++,f++;for(;f<=m&&y<=c&&(s=T(u[c]),d=T(g[m]),null!=s&&s===d);)S(t,u[c].element,u[c],g[m],o,l),c--,m--;if(c<y)for(;f<=m;)t.insertBefore(x(g[f++],o,l),(a=u[y])&&a.element);else if(m<f)for(;y<=c;)P(t,u[y++]);else{for(var b=function(e,t,r){for(var n,o,l={};t<=r;t++)null!=(n=(o=e[t]).key)&&(l[n]=o);return l}(u,y,c),h={};f<=m;)s=T(a=u[y]),d=T(g[f]),h[s]||null!=d&&d===T(u[y+1])?(null==s&&P(t,a),y++):null==d||1===r.type?(null==s&&(S(t,a&&a.element,a,g[f],o,l),f++),y++):(s===d?(S(t,a.element,a,g[f],o,l),h[d]=!0,y++):null!=(p=b[d])?(S(t,t.insertBefore(p.element,a&&a.element),p,g[f],o,l),h[d]=!0):S(t,a&&a.element,null,g[f],o,l),f++);for(;y<=c;)null==T(a=u[y++])&&P(t,a);for(var v in b)null==h[v]&&P(t,b[v])}}return n.element=t},i={Object:{margin:0,padding:0,boxSizing:"border-box",lineHeight:"1",paddingLeft:"1em",position:"relative"},Arrow:{margin:0,padding:0,boxSizing:"border-box",display:"block",width:".5em",height:".3em",position:"absolute",top:".2em",left:0,borderLeft:".5em solid #555",borderTop:".3em solid transparent",borderBottom:".3em solid transparent",transform:"rotate(90deg)"},Content:{margin:0,padding:0,boxSizing:"border-box",width:"100%"},Value:{margin:0,padding:0,boxSizing:"border-box",paddingLeft:"1em"},Property:{margin:0,padding:0,boxSizing:"border-box",marginBottom:".5em",cursor:"pointer"},Property_Key:{margin:0,padding:0,boxSizing:"border-box",color:"#708"},Property_Colon:{margin:0,padding:0,boxSizing:"border-box",color:"#555"},Property_Type:{margin:0,padding:0,boxSizing:"border-box",color:"#997"},"Property_Type-number":{margin:0,padding:0,boxSizing:"border-box",color:"rgb(50, 0, 255)"},"Property_Type-string":{margin:0,padding:0,boxSizing:"border-box",color:"#a11"},"Property_Type-boolean":{margin:0,padding:0,boxSizing:"border-box",color:"rgb(50, 0, 255)"}};return e.prototype.render=function(){this._update()},e.prototype._update=function(){this.node=function(e,t,r){var n=[];for(S(r,r.children[0],e,t,n);0<n.length;)n.pop()();return t}(this.node,this._view(),this.container)},e.prototype._view=function(){var t=this,r=[];return Object.keys(this.json).forEach(function(e){r.push(t._getObjectTemplate(e,t.json[e]))}),l("div",{class:"djt-Content",style:i.Content},r)},e.prototype._getKeyTemplate=function(e,t){if(this._isPrimitiveType(t)){var r=typeof t,n="string"==r?'"'+t+'"':t.toString();return l("div",{class:"djt-Property",style:i.Property},[l("span",{class:"djt-Property_Key",style:i.Property_Key},e),l("span",{class:"djt-Property_Colon",style:i.Property_Colon},": "),l("span",{class:"djt-Property_Type",style:i["Property_Type-"+r]},n)])}var o="number"==typeof t.length?"Array["+t.length+"]":"Object";return l("div",{class:"djt-Property",style:i.Property,"data-djt-toggle":"open",onclick:function(e){var t=e.target.classList.contains("djt-Property")?e.target:e.target.parentNode;"open"==t.dataset.djtToggle?(t.dataset.djtToggle="close",t.nextElementSibling.style.display="none",t.parentNode.querySelector(".djt-Arrow").style.transform="none"):(t.dataset.djtToggle="open",t.nextElementSibling.style.display="block",t.parentNode.querySelector(".djt-Arrow").style.transform="rotate(90deg)")}},[l("span",{class:"djt-Property_Key",style:i.Property_Key},e),l("span",{class:"djt-Property_Colon",style:i.Property_Colon},": "),l("span",{class:"djt-Property_Type",style:i.Property_Type},o)])},e.prototype._getValueTemplate=function(t){var r=this,n=[];return Object.keys(t).forEach(function(e){n.push(r._getObjectTemplate(e,t[e]))}),l("div",{class:"djt-Value",style:i.Value},n)},e.prototype._getObjectTemplate=function(e,t){var r=[];return this._isPrimitiveType(t)?r.push(this._getKeyTemplate(e,t)):(r.push(l("span",{class:"djt-Arrow",style:i.Arrow},"")),r.push(this._getKeyTemplate(e,t)),r.push(this._getValueTemplate(t))),l("div",{key:e,class:"djt-object",style:i.Object},r)},e.prototype._isPrimitiveType=function(e){return!e||"object"!=typeof e},e});

},{}],"src/sample.json":[function(require,module,exports) {
module.exports = {
  "children": [{
    "children": [{
      "type": "int"
    }, {
      "id": "CalcGreatestCommonDivisor"
    }, {
      "children": [{
        "children": [{
          "type": "int"
        }, {
          "id": "lhs"
        }],
        "node_type": "Param"
      }, {
        "children": [{
          "type": "int"
        }, {
          "id": "rhs"
        }],
        "node_type": "Param"
      }],
      "node_type": "ParamList"
    }, {
      "children": [{
        "node_type": "LocalVariableDecl"
      }, {
        "children": [{
          "children": [{
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "children": [{
                      "id": "rhs"
                    }],
                    "node_type": "Variable"
                  }],
                  "node_type": "Term"
                }],
                "node_type": "AddExpr"
              }, {
                "operator": "=="
              }, {
                "children": [{
                  "children": [{
                    "literal": "0"
                  }],
                  "node_type": "Term"
                }],
                "node_type": "AddExpr"
              }],
              "node_type": "SimpleExpr"
            }],
            "node_type": "Expr"
          }, {
            "children": [{
              "node_type": "LocalVariableDecl"
            }, {
              "children": [{
                "children": [{
                  "children": [{
                    "children": [{
                      "children": [{
                        "children": [{
                          "children": [{
                            "id": "lhs"
                          }],
                          "node_type": "Variable"
                        }],
                        "node_type": "Term"
                      }],
                      "node_type": "AddExpr"
                    }],
                    "node_type": "SimpleExpr"
                  }],
                  "node_type": "Expr"
                }],
                "node_type": "ReturnStmt"
              }],
              "node_type": "StmtList"
            }],
            "node_type": "CompoundStmt"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "children": [{
                      "children": [{
                        "id": "CalcGreatestCommonDivisor"
                      }, {
                        "children": [{
                          "children": [{
                            "children": [{
                              "children": [{
                                "children": [{
                                  "children": [{
                                    "id": "rhs"
                                  }],
                                  "node_type": "Variable"
                                }],
                                "node_type": "Term"
                              }],
                              "node_type": "AddExpr"
                            }],
                            "node_type": "SimpleExpr"
                          }],
                          "node_type": "Expr"
                        }, {
                          "children": [{
                            "children": [{
                              "children": [{
                                "children": [{
                                  "children": [{
                                    "id": "lhs"
                                  }],
                                  "node_type": "Variable"
                                }],
                                "node_type": "Term"
                              }, {
                                "operator": "-"
                              }, {
                                "children": [{
                                  "children": [{
                                    "id": "lhs"
                                  }],
                                  "node_type": "Variable"
                                }, {
                                  "operator": "/"
                                }, {
                                  "children": [{
                                    "id": "rhs"
                                  }],
                                  "node_type": "Variable"
                                }, {
                                  "operator": "*"
                                }, {
                                  "children": [{
                                    "id": "rhs"
                                  }],
                                  "node_type": "Variable"
                                }],
                                "node_type": "Term"
                              }],
                              "node_type": "AddExpr"
                            }],
                            "node_type": "SimpleExpr"
                          }],
                          "node_type": "Expr"
                        }],
                        "node_type": "ArgList"
                      }],
                      "node_type": "Call"
                    }],
                    "node_type": "Term"
                  }],
                  "node_type": "AddExpr"
                }],
                "node_type": "SimpleExpr"
              }],
              "node_type": "Expr"
            }],
            "node_type": "ReturnStmt"
          }],
          "node_type": "IfStmt"
        }],
        "node_type": "StmtList"
      }],
      "node_type": "CompoundStmt"
    }],
    "node_type": "FuncDecl"
  }, {
    "children": [{
      "type": "int"
    }, {
      "id": "main"
    }, {
      "children": [{
        "children": [{
          "children": [{
            "type": "int"
          }, {
            "id": "lhs"
          }],
          "node_type": "VariableDecl"
        }, {
          "children": [{
            "type": "int"
          }, {
            "id": "rhs"
          }],
          "node_type": "VariableDecl"
        }],
        "node_type": "LocalVariableDecl"
      }, {
        "children": [{
          "children": [{
            "children": [{
              "id": "lhs"
            }],
            "node_type": "Variable"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "children": [{
                      "id": "input"
                    }],
                    "node_type": "Call"
                  }],
                  "node_type": "Term"
                }],
                "node_type": "AddExpr"
              }],
              "node_type": "SimpleExpr"
            }],
            "node_type": "Expr"
          }],
          "node_type": "Expr"
        }, {
          "children": [{
            "children": [{
              "id": "rhs"
            }],
            "node_type": "Variable"
          }, {
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "children": [{
                      "id": "input"
                    }],
                    "node_type": "Call"
                  }],
                  "node_type": "Term"
                }],
                "node_type": "AddExpr"
              }],
              "node_type": "SimpleExpr"
            }],
            "node_type": "Expr"
          }],
          "node_type": "Expr"
        }, {
          "children": [{
            "children": [{
              "children": [{
                "children": [{
                  "children": [{
                    "id": "output"
                  }, {
                    "children": [{
                      "children": [{
                        "children": [{
                          "children": [{
                            "children": [{
                              "children": [{
                                "id": "CalcGreatestCommonDivisor"
                              }, {
                                "children": [{
                                  "children": [{
                                    "children": [{
                                      "children": [{
                                        "children": [{
                                          "children": [{
                                            "id": "lhs"
                                          }],
                                          "node_type": "Variable"
                                        }],
                                        "node_type": "Term"
                                      }],
                                      "node_type": "AddExpr"
                                    }],
                                    "node_type": "SimpleExpr"
                                  }],
                                  "node_type": "Expr"
                                }, {
                                  "children": [{
                                    "children": [{
                                      "children": [{
                                        "children": [{
                                          "children": [{
                                            "id": "rhs"
                                          }],
                                          "node_type": "Variable"
                                        }],
                                        "node_type": "Term"
                                      }],
                                      "node_type": "AddExpr"
                                    }],
                                    "node_type": "SimpleExpr"
                                  }],
                                  "node_type": "Expr"
                                }],
                                "node_type": "ArgList"
                              }],
                              "node_type": "Call"
                            }],
                            "node_type": "Term"
                          }],
                          "node_type": "AddExpr"
                        }],
                        "node_type": "SimpleExpr"
                      }],
                      "node_type": "Expr"
                    }],
                    "node_type": "ArgList"
                  }],
                  "node_type": "Call"
                }],
                "node_type": "Term"
              }],
              "node_type": "AddExpr"
            }],
            "node_type": "SimpleExpr"
          }],
          "node_type": "Expr"
        }],
        "node_type": "StmtList"
      }],
      "node_type": "CompoundStmt"
    }],
    "node_type": "FuncDecl"
  }],
  "node_type": "DeclList"
};
},{}],"src/index.js":[function(require,module,exports) {
"use strict";

var _domJsonTree = _interopRequireDefault(require("dom-json-tree"));

var _sample = _interopRequireDefault(require("./sample.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import module
var app = document.getElementById("app");
var vis = new _domJsonTree.default(_sample.default, app, {
  colors: {
    key: "#008080",
    type: "#546778",
    typeNumber: "#000080",
    typeString: "#dd1144",
    typeBoolean: "#000080"
  }
});
vis.render();
},{"dom-json-tree":"node_modules/dom-json-tree/dist/index.js","./sample.json":"src/sample.json"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37517" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map