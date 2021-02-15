export { DEFAULT_BASEURL, DEFAULT_TIMEOUT };

const DEFAULT_TIMEOUT = 1000 * 60 * 10;
const port = "8081";

function baseUrl() {
  // 环境的切换
  switch (process.env.NODE_ENV) {
    case "development":
      return `https://localhost:${port}/cloud/`;
    case "test":
      return `https://localhost:${port}/cloud/`;
    case "production":
      return `https://localhost:${port}/cloud/`;
    default:
      break;
  }
}

const DEFAULT_BASEURL = baseUrl();
