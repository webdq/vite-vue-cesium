<template>
  <a-modal v-model:visible="visible" title="查看" :footer="null" width="1200px">
    <div class="preview-wrapper">
      <vc-viewer :showCredit="false">
        <vc-layer-imagery
          :alpha="1"
          :brightness="1.1"
          :contrast="1.1"
          :saturation="1.1"
          :sort-order="10"
        >
          <vc-imagery-provider-amap
            :minimumLevel="0"
            :maximumLevel="18"
            ref="provider"
          ></vc-imagery-provider-amap>
        </vc-layer-imagery>
      </vc-viewer>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { ref } from "vue";

const visible = ref(false);

const showModal = () => {
  visible.value = true;
};

defineExpose({
  showModal,
});
</script>

<style lang="less" scoped>
.preview-wrapper {
  height: 500px;
}
</style>
