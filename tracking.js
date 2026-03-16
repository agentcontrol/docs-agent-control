// Global tracking scripts for Agent Control docs
// Mintlify automatically includes .js files in the content directory on every page.

(function () {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  // --- Helper to inject external scripts safely ---
  function loadScriptOnce(id, src, options) {
    if (id && document.getElementById(id)) return;
    var script = document.createElement("script");
    if (id) script.id = id;
    script.src = src;
    script.async = options && options.async !== false; // default true
    if (options && options.defer) script.defer = true;
    document.head.appendChild(script);
  }

  // --- Google Analytics 4 (G-RN0NJCYSCQ) ---
  (function setupGA4() {
    // Load gtag.js
    loadScriptOnce(
      "ga4-gtag",
      "https://www.googletagmanager.com/gtag/js?id=G-RN0NJCYSCQ",
      { async: true }
    );

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    // Expose globally to match GA expectations
    window.gtag = window.gtag || gtag;

    gtag("js", new Date());
    gtag("config", "G-RN0NJCYSCQ");
  })();

  // --- Primer analytics ---
  loadScriptOnce(
    "primer-analytics",
    "https://analytics.sayprimer.com/primerAnalytics.js?clientId=661c794c-5933-4bd6-8ba3-db405ece255a",
    { async: true }
  );

  // --- HubSpot tracking ---
  loadScriptOnce(
    "hs-script-loader",
    "https://js-na2.hs-scripts.com/23114811.js",
    { async: true, defer: true }
  );

  // --- Signals script (cr-relay) ---
  (function () {
    if (typeof window === "undefined") return;
    if (typeof window.signals !== "undefined") return;

    var script = document.createElement("script");
    script.src =
      "https://cdn.cr-relay.com/v1/site/e9a1e4dd-e943-4f5f-9626-88d3ca665192/signals.js";
    script.async = true;

    var methods = ["page", "identify", "form"];
    var signalsStub = [];
    signalsStub._opts = { apiHost: "https://api.cr-relay.com" };
    methods.forEach(function (method) {
      signalsStub[method] = function () {
        signalsStub.push([method, arguments]);
        return signalsStub;
      };
    });

    window.signals = signalsStub;
    document.head.appendChild(script);
  })();
})();

