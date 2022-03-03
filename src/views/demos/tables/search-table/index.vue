<template>
  <div>
    <!-- <Alert message="查询表格" type="info" show-icon>
      <template #description> 查询表格-查询表单使用示例 </template>
    </Alert> -->
    <Card title="站点信息查询">
      <dynamic-table
        ref="dynamicTableRef"
        size="small"
        bordered
        :data-request="loadData"
        :columns="columns"
        rowKey="heroid"
        @toggle-advanced="toggleAdvanced"
      />
    </Card>
  </div>
</template>

<script lang="ts" setup>
  // import { Card } from 'ant-design-vue';
  import { DynamicTable, type DynamicTableInstance } from '@/components/core/dynamic-table';
  import { columns } from './columns';
  import { ref } from 'vue';
  import { getSiteList } from '@/api/takeOut';
  const dynamicTableRef = ref<DynamicTableInstance>();

  // 展开搜索表单时更新英雄皮肤选项值
  const toggleAdvanced = () => {
    // if (e) {
    //   // 手动设置搜索表单的搜索项
    //   dynamicTableRef.value?.getQueryFormRef().updateSchema([
    //     {
    //       field: 'price',
    //       componentProps: {
    //         options: [
    //           {
    //             label: '6-7',
    //             value: '6-7',
    //           },
    //           {
    //             label: '6.5-7.5',
    //             value: '6.5-7.5',
    //           },
    //           {
    //             label: '7-8',
    //             value: '7-8',
    //           },
    //           {
    //             label: '7.5-8.5',
    //             value: '7.5-8.5',
    //           },
    //         ],
    //       },
    //     },
    //   ]);
    // }
  };

  const loadData = async (params) => {
    params.region ? (params.region = params.region[1]) : '';
    let result = await getSiteList(params);
    const pars = result.data;
    return {
      list: pars,
      ...params,
    };
    // return new Promise((resolve) => {
    //   let result = await getSiteList(params);
    //   console.log(result);
    //   const pars = result.data;
    //   setTimeout(() => {
    //     resolve({
    //       list: pars,
    //       ...params,
    //     });
    //   }, 500);
    // });
  };
</script>

<style lang="less" scoped></style>
