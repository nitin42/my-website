!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(window,function(){return function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/",n(n.s=5)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getMeasuresByComponentName=n.registerObserver=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=t(4),i=t(2),u=function(e,n){var t=e.port,r=e.components;r?void 0!==(void 0===r?"undefined":o(r))&&Array.isArray(r)&&p(t,a(r,n)):p(t,n)},p=function(e,n){n.forEach(function(n){var t=n.componentName,o=n.mount,r=n.render,i=n.update,u=n.unmount,p=n.totalTimeSpent,a=n.percentTimeSpent,c=n.numberOfInstances,l=n.componentWillMount,d=n.componentDidMount,s=n.componentWillReceiveProps,f=n.shouldComponentUpdate,v=n.componentWillUpdate,S=n.componentDidUpdate,y=n.componentWillUnmount;m({component:t,mount:o,render:r,update:i,unmount:u,totalTimeSpent:p,percentTimeSpent:a,numberOfInstances:c,componentWillMount:l,componentDidMount:d,componentWillReceiveProps:s,shouldComponentUpdate:f,componentWillUpdate:v,componentDidUpdate:S,componentWillUnmount:y},e)})},m=function(e,n){window.navigator.sendBeacon("http://127.0.0.1:"+(void 0!==n&&"number"==typeof n?n:8080),JSON.stringify(e,null,2))},a=function(e,n){return n.filter(function(n){return e.includes(n.componentName)})};n.registerObserver=function(e,n){if(e=e||{},window.PerformanceObserver){var t=e,o=t.shouldLog,p=(t.port,t.components,t.timeout),m=void 0===p?2e3:p;new window.PerformanceObserver(function(t){var p=(0,i.generateDataFromMeasures)((0,r.getReactPerformanceData)(t.getEntries()));n&&"function"==typeof n&&n(p),window.__REACT_PERF_DEVTOOL_GLOBAL_STORE__={measures:p,timeout:m,length:t.getEntries().length,rawMeasures:t.getEntries()},o&&u(e,p)}).observe({entryTypes:["measure"]})}},n.getMeasuresByComponentName=a},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.add=function(e){return Number(e.reduce(function(e,n){return e+n},0).toFixed(2))},n.average=function(e){return 0===e.length?"-":(e.reduce(function(e,n){return e+n},0)/e.length).toFixed(2)},n.percent=function(e){return Math.round(100*e)+"%"}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.generateDataFromMeasures=void 0;var o=t(1),r=function(e){return{averageTimeSpentMs:(0,o.average)(e),numberOfTimes:e.length,totalTimeSpentMs:(0,o.add)(e)}};n.generateDataFromMeasures=function(e){var n=Object.keys(e).map(function(n){return{name:n,totalTime:function(e){return["mount","unmount","update","render","componentWillMount","componentDidMount","componentWillReceiveProps","shouldComponentUpdate","componentWillUpdate","componentDidUpdate","componentWillUnmount"].reduce(function(n,t){return n+(0,o.add)(e[t].timeSpent)},0)}(e[n])}}),t=n.reduce(function(e,n){return e+n.totalTime},0);return n.map(function(n){return function(e,n,t){return{componentName:n.name,totalTimeSpent:n.totalTime,numberOfInstances:e[n.name].mount.timeSpent.length-e[n.name].unmount.timeSpent.length,percentTimeSpent:(0,o.percent)(n.totalTime/t),render:r(e[n.name].render.timeSpent),mount:r(e[n.name].mount.timeSpent),update:r(e[n.name].update.timeSpent),unmount:r(e[n.name].unmount.timeSpent),componentWillMount:r(e[n.name].componentWillMount.timeSpent),componentDidMount:r(e[n.name].componentDidMount.timeSpent),componentWillReceiveProps:r(e[n.name].componentWillReceiveProps.timeSpent),shouldComponentUpdate:r(e[n.name].shouldComponentUpdate.timeSpent),componentWillUpdate:r(e[n.name].componentWillUpdate.timeSpent),componentDidUpdate:r(e[n.name].componentDidUpdate.timeSpent),componentWillUnmount:r(e[n.name].componentWillUnmount.timeSpent)}}(e,n,t)}).sort(function(e,n){return n.totalTimeSpent-e.totalTimeSpent})}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],o=!0,r=!1,i=void 0;try{for(var u,p=e[Symbol.iterator]();!(o=(u=p.next()).done)&&(t.push(u.value),!n||t.length!==n);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&p.return&&p.return()}finally{if(r)throw i}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")};n.getComponentAndPhaseName=function(e){if(e.name.includes("⚛")){var n=e.name.split("⚛ ").join("");if(/\[\w+\]/.test(n)){var t=n.split(" "),r=o(t,2);return{componentName:r[0],phase:r[1]}}if(/\w+\.\w+/.test(n)){var i=n.split("."),u=o(i,2);return{componentName:u[0],phase:u[1]}}return null}if(e.name.includes("⛔")){var p=e.name.split("⛔ ").join("");return/\w+\.\w+/.test(p)?{componentName:p.split(".")[0],phase:p.split(".")[1].split(" Warning:")[0]}:null}return null}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getReactPerformanceData=void 0;var o=t(3);n.getReactPerformanceData=function(e){var n={};return e.filter(function(e){return null!==(0,o.getComponentAndPhaseName)(e)}).forEach(function(e){var t=(0,o.getComponentAndPhaseName)(e),r=t.componentName,i=t.phase;n[r]||(n[r]={mount:{timeSpent:[]},unmount:{timeSpent:[]},update:{timeSpent:[]},render:{timeSpent:[]},componentWillMount:{timeSpent:[]},componentDidMount:{timeSpent:[]},componentWillReceiveProps:{timeSpent:[]},shouldComponentUpdate:{timeSpent:[]},componentWillUpdate:{timeSpent:[]},componentDidUpdate:{timeSpent:[]},componentWillUnmount:{timeSpent:[]}}),function(e,n,t,o){"[mount]"===t&&e[n].mount.timeSpent.push(o.duration),"[unmount]"===t&&e[n].unmount.timeSpent.push(o.duration),"[update]"===t&&e[n].update.timeSpent.push(o.duration),"[render]"===t&&e[n].render.timeSpent.push(o.duration),"componentWillMount"===t&&e[n].componentWillMount.timeSpent.push(o.duration),"componentWillUnmount"===t&&e[n].componentWillUnmount.timeSpent.push(o.duration),"componentDidMount"===t&&e[n].componentDidMount.timeSpent.push(o.duration),"componentWillReceiveProps"===t&&e[n].componentWillReceiveProps.timeSpent.push(o.duration),"shouldComponentUpdate"===t&&e[n].shouldComponentUpdate.timeSpent.push(o.duration),"componentWillUpdate"===t&&e[n].componentWillUpdate.timeSpent.push(o.duration),"componentDidUpdate"===t&&e[n].componentDidUpdate.timeSpent.push(o.duration)}(n,r,i,e)}),n}},function(e,n,t){"use strict";t.r(n);var o=t(0);t.d(n,"registerObserver",function(){return o.registerObserver})}])});