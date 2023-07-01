<script>
import { defineComponent } from 'vue';
import SwaggerUI from 'swagger-ui';

import 'swagger-ui/dist/swagger-ui.css';

export default defineComponent({
  mounted() {
    SwaggerUI({
      dom_id: '#swagger-ui',
      queryConfigEnabled: true
    });
  }
});
</script>

<template>
  <div id="swagger-ui"></div>
</template>
