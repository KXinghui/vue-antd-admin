<template>
  <div class="error-page">
    <a-result
      status="404"
      title="404"
      sub-title="Not Found Sorry, the page you visited does not exist."
    >
      <template #extra>
        <a-button type="primary">
          Back Home
        </a-button>
      </template>
    </a-result>

    <a-result
      status="500"
      title="500"
      sub-title="Internal Server Error Sorry, the server is wrong."
    >
      <template #extra>
        <a-button type="primary">
          Back Home
        </a-button>
      </template>
    </a-result>
    <a-result
      status="403"
      title="403"
      sub-title="Forbidden Sorry, you are not authorized to access this page."
    >
      <template #extra>
        <a-button type="primary">
          Back Home
        </a-button>
      </template>
    </a-result>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
