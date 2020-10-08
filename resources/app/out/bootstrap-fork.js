/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";const bootstrap=require("./bootstrap"),bootstrapNode=require("./bootstrap-node");function pipeLoggingToParent(){const e=1e5;function o(o){const n=[],t=[];if(o.length)for(let e=0;e<o.length;e++){if(void 0===o[e])o[e]="undefined";else if(o[e]instanceof Error){const n=o[e];n.stack?o[e]=n.stack:o[e]=n.toString()}t.push(o[e])}if("true"===process.env.VSCODE_LOG_STACK){const e=(new Error).stack;t.push({__$stack:e.split("\n").slice(3).join("\n")})}try{const o=JSON.stringify(t,(function(e,o){if(!("object"!=typeof(t=o)||null===t||Array.isArray(t)||t instanceof RegExp||t instanceof Date)||Array.isArray(o)){if(-1!==n.indexOf(o))return"[Circular]";n.push(o)}var t;return o}));return o.length>e?"Output omitted for a large object that exceeds the limits":o}catch(e){return`Output omitted for an object that cannot be inspected ('${e.toString()}')`}}function n(e){try{process.send(e)}catch(e){}}"true"===process.env.VERBOSE_LOGGING?(console.log=function(){n({type:"__$console",severity:"log",arguments:o(arguments)})},
console.info=function(){n({type:"__$console",severity:"log",arguments:o(arguments)})},console.warn=function(){n({type:"__$console",severity:"warn",arguments:o(arguments)})}):(console.log=function(){},console.warn=function(){},console.info=function(){}),console.error=function(){n({type:"__$console",severity:"error",arguments:o(arguments)})}}function handleExceptions(){process.on("uncaughtException",(function(e){console.error("Uncaught Exception: ",e)})),process.on("unhandledRejection",(function(e){console.error("Unhandled Promise Rejection: ",e)}))}function terminateWhenParentTerminates(){const e=Number(process.env.VSCODE_PARENT_PID);"number"!=typeof e||isNaN(e)||setInterval((function(){try{process.kill(e,0)}catch(e){process.exit()}}),5e3)}function configureCrashReporter(){const e=process.env.CRASH_REPORTER_START_OPTIONS;if("string"==typeof e)try{const o=JSON.parse(e);o&&process.crashReporter.start(o)}catch(e){console.error(e)}}bootstrapNode.removeGlobalNodeModuleLookupPaths(),bootstrap.enableASARSupport(),
process.env.VSCODE_INJECT_NODE_MODULE_LOOKUP_PATH&&bootstrapNode.injectNodeModuleLookupPath(process.env.VSCODE_INJECT_NODE_MODULE_LOOKUP_PATH),process.send&&"true"===process.env.PIPE_LOGGING&&pipeLoggingToParent(),process.env.VSCODE_HANDLES_UNCAUGHT_ERRORS||handleExceptions(),process.env.VSCODE_PARENT_PID&&terminateWhenParentTerminates(),configureCrashReporter(),require("./bootstrap-amd").load(process.env.AMD_ENTRYPOINT);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/93c2f0fbf16c5a4b10e4d5f89737d9c2c25488a3/core/bootstrap-fork.js.map
