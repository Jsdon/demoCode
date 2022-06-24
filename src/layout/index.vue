<!-- 布局页 -->
<template>
    <Layout></Layout>
</template>

<script lang="ts" setup>
import { Layout } from '../components'
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

onMounted(() => {
    // 获取当前路由信息
    // console.log(router.currentRoute)
})

</script>

<style lang="less" scoped>
.el-main {
    height: 0;
    flex-grow: 1;
}

.el-header {
    border-bottom: 1px solid #efefef;
}
</style>
