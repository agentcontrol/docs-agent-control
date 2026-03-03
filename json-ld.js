// JSON-LD structured data for SEO
// Mintlify automatically includes .js files on every page.
// This script injects JSON-LD structured data into the <head> for search engine rich results.

(function () {
  var SITE_URL = "https://docs.agentcontrol.dev";
  var REPO_URL = "https://github.com/agentcontrol/agent-control";

  // -- Organization schema --
  var organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Agent Control",
    url: SITE_URL,
    logo: SITE_URL + "/logo/dark.svg",
    sameAs: [REPO_URL],
    description:
      "Runtime guardrails for AI agents — configurable, extensible, and production-ready.",
  };

  // -- WebSite schema (enables sitelinks search box in Google) --
  var website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Agent Control Docs",
    url: SITE_URL,
    description:
      "Documentation for Agent Control — policy-based runtime guardrails for AI agents.",
    publisher: {
      "@type": "Organization",
      name: "Agent Control",
      url: SITE_URL,
    },
  };

  // -- SoftwareApplication schema (describes the product) --
  var software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Agent Control",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    description:
      "A policy-based control layer that sits between your AI agents and the outside world. Evaluates inputs and outputs against configurable rules to block harmful content, prompt injections, PII leakage, and other risks.",
    url: SITE_URL,
    downloadUrl: REPO_URL,
    license: "https://opensource.org/licenses/MIT",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    isAccessibleForFree: true,
  };

  // -- TechArticle schema (per-page, uses page metadata) --
  var title = document.title || "Agent Control Docs";
  var description =
    document.querySelector('meta[name="description"]')?.content || "";
  var canonicalEl = document.querySelector('link[rel="canonical"]');
  var pageUrl = canonicalEl ? canonicalEl.href : window.location.href;

  var article = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description: description,
    url: pageUrl,
    publisher: {
      "@type": "Organization",
      name: "Agent Control",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };

  // Inject all schemas into <head>
  var schemas = [organization, website, software, article];

  schemas.forEach(function (schema) {
    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
})();
