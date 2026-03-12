# Agent Control Docs

Documentation site for Agent Control, powered by [Mintlify](https://mintlify.com/).

## Key Google ADK Docs

These are the main entry points to keep in sync for the Google ADK feature set:

- `integrations/google-adk.mdx` - integration guide covering plugin, callbacks, and decorator patterns
- `examples/google-adk-plugin.mdx` - recommended packaged ADK integration example
- `examples/google-adk-callbacks.mdx` - lower-level manual callback example
- `examples/google-adk-decorator.mdx` - tool-only decorator example

## Local development

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm (comes with Node.js)

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

This starts the Mintlify dev server at [http://localhost:3000](http://localhost:3000).

### Check for broken links

```bash
npm run broken-links
```

## Deployment

This site is designed to be connected to its own Mintlify project for deployment.
See [Mintlify deployment docs](https://mintlify.com/docs/quickstart) for setup instructions.
