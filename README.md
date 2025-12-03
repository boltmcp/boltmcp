<div align="center">
  <a href="https://boltmcp.io">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/f4caff82-5084-45ea-8a12-103a1f2c811d">
      <img alt="BoltMCP logo" src="https://github.com/user-attachments/assets/a812fc1c-831b-4047-8fc2-547ffb97dda6" height="128">
    </picture>
  </a>
  <h1>BoltMCP</h1>
</div>

BoltMCP is an enterprise-grade MCP orchestration platform to create, deploy, and manage custom MCP servers on-premises.

<!-- ## Demo

Video demo of creating and using an MCP server -->

## Installation

There are two ways to install and run BoltMCP:

### [Testing locally with Docker Compose](./docker-compose/)

To take a quick spin on your laptop, install BoltMCP with Docker Compose. This isn’t suitable for production.

### [Deploying to production with Helm](./helm-chart)

To deploy to a Kubernetes cluster, install BoltMCP with Helm. This is suitable for enterprise production environments.

## For followers of OpenMCP

OpenMCP was an early exploration of techniques in token-management for MCP servers. Since then we’ve spent a lot of time building secure servers and learning from the process, which has evolved the project into what is now called BoltMCP. Thank you for your support and experimentation with OpenMCP, we hope this enthusiasm continues with all the developments we’ve made for this iteration.

### What has changed

**Hosting**

- All software is now self-hosted on-premises
- Enterprise-grade cloud native infrastructure and integrations

**Transport & authorization**

- All servers are Streamable HTTP by default
- All servers are secured with OAuth 2 by default
- Each server can now interact with multiple upstream APIs with different auth requirements

**Rich customization**

- You can spin up custom MCP servers on-the-fly with a subset of tools tailored for your specific use-case
- Tools can now be fully customized with rich transformation of inputs/outputs, and composition of multiple API operations within a single tool, all backed by a declarative json/yaml spec.
- Tools can be registered up-front, retrieved on demand, or partially registered and lazy-loaded on demand

**MCP client playground**

- The application now bundles with an MCP client playground which you can use to chat with your servers
- The official MCP Inspector is also bundled with the application

**Bring your own LLM**

- Configure an LLM of your choice, self-hosted or cloud, to use for the AI-powered features within the application, including the playground
