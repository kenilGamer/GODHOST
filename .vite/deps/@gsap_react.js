import {
  gsapWithCSS
} from "./chunk-GXJD5IH3.js";
import {
  require_react
} from "./chunk-UM3JHGVO.js";
import {
  __toESM
} from "./chunk-CEQRFMJQ.js";

// node_modules/@gsap/react/src/index.js
var import_react = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
var isConfig = (value) => value && !Array.isArray(value) && typeof value === "object";
var emptyArray = [];
var defaultConfig = {};
var _gsap = gsapWithCSS;
var useGSAP = (callback, dependencies = emptyArray) => {
  let config = defaultConfig;
  if (isConfig(callback)) {
    config = callback;
    callback = null;
    dependencies = "dependencies" in config ? config.dependencies : emptyArray;
  } else if (isConfig(dependencies)) {
    config = dependencies;
    dependencies = "dependencies" in config ? config.dependencies : emptyArray;
  }
  let { scope, revertOnUpdate } = config, [mounted, setMounted] = (0, import_react.useState)(false);
  callback && typeof callback !== "function" && console.warn("First parameter must be a function or config object");
  const context = _gsap.context(() => {
  }, scope), contextSafe = (func) => context.add(null, func), cleanup = () => context.revert(), deferCleanup = dependencies && dependencies.length && !revertOnUpdate;
  useIsomorphicLayoutEffect(() => {
    callback && context.add(callback, scope);
    if (!deferCleanup || !mounted) {
      return cleanup;
    }
  }, dependencies);
  deferCleanup && useIsomorphicLayoutEffect(() => {
    setMounted(true);
    return cleanup;
  }, emptyArray);
  return { context, contextSafe };
};
useGSAP.register = (core) => {
  _gsap = core;
};
useGSAP.headless = true;
export {
  useGSAP
};
/*! Bundled license information:

@gsap/react/src/index.js:
  (*!
   * @gsap/react 2.1.0
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
//# sourceMappingURL=@gsap_react.js.map
