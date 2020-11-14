export { DEFAULT_BASEURL, DEFAULT_TIMEOUT };

const DEFAULT_TIMEOUT = 1000;

function baseUrl() {
  // 环境的切换
  switch (process.env.NODE_ENV) {
    case "development":
      return "http://localhost/pvtnote/";
    case "test":
      return "http://localhost/pvtnote/";
    case "production":
      return "http://localhost/pvtnote/";
    default:
      break;
  }
}

const DEFAULT_BASEURL = baseUrl();
