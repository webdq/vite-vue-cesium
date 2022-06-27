<template>
  <hello-world msg="HelloWorld"></hello-world>
  <div>
    <a-space>
      <a-button type="primary" @click="openModal1"
        >弹窗显示viewer，关闭弹窗后报错</a-button
      >
      <a-button type="primary" @click="openModal2"
        >弹窗显示viewer，关闭弹窗后并销毁，外部引入的js和css被删除</a-button
      >
    </a-space>
  </div>

  <VueCesiumModal1 ref="VueCesiumModalRef1"></VueCesiumModal1>
  <VueCesiumModal2 ref="VueCesiumModalRef2"></VueCesiumModal2>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import VueCesiumModal1 from "@/components/VueCesiumModal1.vue";
import VueCesiumModal2 from "@/components/VueCesiumModal2.vue";
import { ref } from "vue";

const VueCesiumModalRef1 = ref<InstanceType<typeof VueCesiumModal1>>();
const VueCesiumModalRef2 = ref<InstanceType<typeof VueCesiumModal2>>();

const openModal1 = () => {
  VueCesiumModalRef1.value?.showModal();
};
const openModal2 = () => {
  VueCesiumModalRef2.value?.showModal();
};
</script>

<style scoped></style>
