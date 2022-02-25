<template>
  <div>
    <Alert
      message="验证表单"
      description="动态验证表单"
      type="info"
      show-icon
      style="margin-bottom: 12px"
    />
    <a-card>
      <schema-form ref="dynamicForm" :form-schema="formSchema">
        <template #operate-button>
          <div class="set-button">
            <a-button size="large" @click="reset"> 重置 </a-button>
            <a-button size="large" type="primary" @click="confirm"> 确定 </a-button>
          </div>
        </template>
      </schema-form>
    </a-card>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'DemosFormRuleForm',
  };
</script>

<script lang="ts" setup>
  import { ref } from 'vue';
  import {
    // Alert,
    message,
  } from 'ant-design-vue';
  import { SchemaForm } from '@/components/core/schema-form';
  import { schemas } from './form-schema';

  /**
   * @description 验证表单
   */
  const dynamicForm = ref<InstanceType<typeof SchemaForm>>();
  const formSchema = { schemas, labelWidth: 120 };

  // 点击提交
  function confirm() {
    console.log('dynamicForm.value', dynamicForm.value?.formModel);

    dynamicForm.value?.validate().then(() => message.success('验证通过！'));
  }
  //重置选项
  function reset() {
    //@ts-ignore
    dynamicForm.value.resetFields();
  }
</script>

<style lang="less" scoped>
  .btn-rows {
    button {
      margin-right: 12px;
    }
  }
  .set-button {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  /deep/.operate-button {
    margin-left: 150px;
    width: 300px;
  }
</style>
