import {
  BrowserModule
} from "./chunk-IF374YAS.js";
import {
  DomRendererFactory2
} from "./chunk-S5VB3BJU.js";
import "./chunk-WDMUDEB6.js";

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
import * as i0 from "@angular/core";
import { ANIMATION_MODULE_TYPE, NgZone, RendererFactory2, Inject, Injectable, \u0275performanceMarkFeature as _performanceMarkFeature, NgModule } from "@angular/core";
import { ANIMATION_MODULE_TYPE as ANIMATION_MODULE_TYPE2 } from "@angular/core";
import * as i1 from "@angular/animations/browser";
import { NoopAnimationDriver, AnimationDriver as AnimationDriver2, \u0275AnimationStyleNormalizer as _AnimationStyleNormalizer, \u0275AnimationEngine as _AnimationEngine, \u0275WebAnimationsDriver as _WebAnimationsDriver, \u0275WebAnimationsStyleNormalizer as _WebAnimationsStyleNormalizer, \u0275AnimationRendererFactory as _AnimationRendererFactory } from "@angular/animations/browser";
import { DOCUMENT } from "@angular/common";
var InjectableAnimationEngine = class _InjectableAnimationEngine extends _AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static \u0275fac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InjectableAnimationEngine)(i0.\u0275\u0275inject(DOCUMENT), i0.\u0275\u0275inject(i1.AnimationDriver), i0.\u0275\u0275inject(i1.\u0275AnimationStyleNormalizer));
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({
    token: _InjectableAnimationEngine,
    factory: _InjectableAnimationEngine.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: i1.AnimationDriver
  }, {
    type: i1.\u0275AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new _WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new _AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: _AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: _AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, _AnimationEngine, NgZone]
}];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver2,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_ANIMATIONS_PROVIDERS = [
  // Note: the `ngServerMode` happen inside factories to give the variable time to initialize.
  {
    provide: AnimationDriver2,
    useFactory: () => typeof ngServerMode !== "undefined" && ngServerMode ? new NoopAnimationDriver() : new _WebAnimationsDriver()
  },
  {
    provide: ANIMATION_MODULE_TYPE,
    useFactory: () => typeof ngServerMode !== "undefined" && ngServerMode ? "NoopAnimations" : "BrowserAnimations"
  },
  ...SHARED_ANIMATION_PROVIDERS
];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```ts
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static \u0275fac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
    type: _BrowserAnimationsModule
  });
  static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({
    providers: BROWSER_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  _performanceMarkFeature("NgEagerAnimations");
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var NoopAnimationsModule = class _NoopAnimationsModule {
  static \u0275fac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({
    type: _NoopAnimationsModule
  });
  static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({
    providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideNoopAnimations() {
  return [...BROWSER_NOOP_ANIMATIONS_PROVIDERS];
}
export {
  ANIMATION_MODULE_TYPE2 as ANIMATION_MODULE_TYPE,
  BrowserAnimationsModule,
  NoopAnimationsModule,
  provideAnimations,
  provideNoopAnimations,
  InjectableAnimationEngine as \u0275InjectableAnimationEngine
};
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v19.2.9
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=_angular_platform_browser_animations.9L-zOh7nnE-dev.js.map
