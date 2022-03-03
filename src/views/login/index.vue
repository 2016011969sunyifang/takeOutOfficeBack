<template>
  <div class="login-box">
    <div class="login-logo">
      <svg-icon name="logo" :size="45" />
      <!--      <img src="~@/assets/images/logo.png" alt="">-->
      <h1 class="mb-0 ml-2 text-3xl font-bold">Antd Admin</h1>
      <a-button @click="handleTabRegister" class="register-button" type="link"
        >{{ state.register == false ? '我要注册' : '登录' }}
      </a-button>
    </div>
    <a-form
      v-if="state.register == false"
      layout="horizontal"
      :model="state.formInline"
      @submit.prevent="handleSubmit"
    >
      <a-form-item>
        <a-input v-model:value="state.formInline.username" size="large" placeholder="请输入账号">
          <template #prefix><user-outlined type="user" /></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-model:value="state.formInline.password"
          size="large"
          type="password"
          placeholder="请输入密码"
          autocomplete="new-password"
        >
          <template #prefix><lock-outlined type="user" /></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-model:value="state.formInline.verifyCode"
          placeholder="验证码"
          :maxlength="4"
          size="large"
        >
          <template #prefix><SafetyOutlined /></template>
          <template #suffix>
            <div class="login-code" @click="refreshCode">
              <s-identify :identifyCode="state.identifyCode" />
            </div>
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" size="large" :loading="state.loading" block>
          登录
        </a-button>
      </a-form-item>
    </a-form>
    <a-form v-else layout="horizontal" :model="state.formInline" @submit.prevent="handleSubmit">
      <a-form-item>
        <a-input v-model:value="state.formInline.username" size="large" placeholder="请输入账号">
          <template #prefix><user-outlined type="user" /></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-model:value="state.formInline.password"
          size="large"
          type="password"
          placeholder="请输入密码"
          autocomplete="new-password"
        >
          <template #prefix><lock-outlined type="user" /></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-model:value="state.formInline.verifyCode"
          placeholder="验证码"
          :maxlength="4"
          size="large"
        >
          <template #prefix><SafetyOutlined /></template>
          <template #suffix>
            <div class="login-code" @click="refreshCode">
              <s-identify :identifyCode="state.identifyCode" />
            </div>
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" size="large" :loading="state.loading" block>
          注册
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
  import { message, Modal } from 'ant-design-vue';
  import { UserOutlined, LockOutlined, SafetyOutlined } from '@ant-design/icons-vue';
  import { useUserStore } from '@/store/modules/user';
  // import { getImageCaptcha } from '@/api/login';
  import { SvgIcon } from '@/components/basic/svg-icon';
  import { useRoute, useRouter } from 'vue-router';
  import SIdentify from '@/components/basic/SIdentify/index.vue'; // Secondary package based on el-pagination
  const state = reactive({
    loading: false,
    captcha: '',
    formInline: {
      username: '',
      password: '',
      verifyCode: '',
      captchaId: '',
    },
    identifyCode: '',
    register: false,
    identifyCodes: '1234567890',
  });

  const route = useRoute();
  const router = useRouter();

  const userStore = useUserStore();

  // const setCaptcha = async () => {
  //   const { id, img } = await getImageCaptcha({ width: 100, height: 50 });
  //   state.captcha = img;
  //   state.formInline.captchaId = id;
  // };
  // setCaptcha();

  const handleSubmit = async () => {
    const { username, password, verifyCode } = state.formInline;
    if (username.trim() == '' || password.trim() == '') {
      return message.warning('用户名或密码不能为空！');
    }
    if (!verifyCode || verifyCode !== state.identifyCode) {
      message.warning('请输入正确的验证码！');
      return;
    }
    message.loading('加载中...', 0);
    state.loading = true;
    console.log(state.formInline);
    // params.password = md5(password)
    try {
      if (state.register) {
        await userStore.register(state.formInline).finally(() => {
          state.loading = false;
          message.destroy();
          message.success('注册成功！');
        });
      } else {
        await userStore.login(state.formInline).finally(() => {
          state.loading = false;
          message.destroy();
          message.success('登录成功！');
        });
      }
      setTimeout(() => router.replace((route.query.redirect as string) ?? '/'));
    } catch (error: any) {
      console.log(error);
      console.log('=================');

      Modal.error({
        title: () => '提示',
        content: () => error.message,
      });
    }
  };
  const handleTabRegister = () => {
    state.register = !state.register;
  };
  //====================// 验证码相关代码
  //验证码
  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const refreshCode = () => {
    state.identifyCode = '';
    makeCode(state.identifyCodes, 4);
  };
  const makeCode = (o: string, l) => {
    console.log(o);

    for (let i = 0; i < l; i++) {
      state.identifyCode += state.identifyCodes[randomNum(0, state.identifyCodes.length)];
    }
  };

  refreshCode();
</script>

<style lang="less" scoped>
  .login-box {
    display: flex;
    width: 100vw;
    height: 100vh;
    padding-top: 240px;
    background: url('~@/assets/login.svg');
    background-size: 100%;
    flex-direction: column;
    align-items: center;
    .login-code {
      cursor: pointer;
    }
    .register-button {
      margin-top: 13px;
      margin-left: 69px;
    }
    .login-logo {
      display: flex;
      margin-bottom: 30px;
      align-items: center;
      justify-content: space-evenly;
      .svg-icon {
        font-size: 48px;
      }
    }

    :deep(.ant-form) {
      width: 400px;

      .ant-col {
        width: 100%;
      }

      .ant-form-item-label {
        padding-right: 6px;
      }
    }
  }
</style>
