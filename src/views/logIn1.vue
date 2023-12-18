<template>
  <div class="loginPage">
    <!-- 上下动的球 -->
    <div class="ball"></div>
    <!-- 球的阴影 -->
    <div class="shadow"></div>

    <!-- 登录注册的卡片 -->
    <div class="login-card">
      <div class="change-btn">
        <img src="@/assets/login1/guanlizhe.svg" alt="" width="355">
        <p>已经有账号了?</p>
        <el-button @click="show=ShowCase.login" link size="large">登 录</el-button>
      </div>
      <div class="change-btn">
        <img src="@/assets/login1/guanlizhe2.svg" alt="" width="355">
        <p>还没有账号?</p>
        <el-button @click="show=ShowCase.register" link size="large">注 册</el-button>
      </div>

      <!-- 显示的表单 -->
      <div class="wrapper" :class="{move:show==ShowCase.register}">
        <!-- 登录表单 -->
        <el-form v-show="show === ShowCase.login" ref="loginFormRef" :model="loginForm" :rules="loginRules"
          label-width="80px" status-icon>
          <h3 class="header">登 录</h3>
          <el-form-item label="账号" prop="name">
            <el-input placeholder="输入账号/姓名/电话" v-model="loginForm.name" />
          </el-form-item>
          <el-form-item label="密码" prop="passworld">
            <el-input type="password" placeholder="输入密码" v-model="loginForm.passworld" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submit(loginFormRef)">登 录</el-button>
            <el-button @click="resetForm(loginFormRef)">重 置</el-button>
          </el-form-item>
        </el-form>
        <!-- 注册 表单-->
        <el-form v-show="show === ShowCase.register" ref="registerFormRef" :model="registerForm" :rules="registerRules"
          label-width="100px" class="ruleForm">
          <h3 class="header">注册</h3>
          <el-form-item label="账号" prop="name">
            <el-input placeholder="输入账号/姓名/电话" v-model="registerForm.name" />
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input placeholder="输入邮箱" v-model="registerForm.email" />
          </el-form-item>
          <el-form-item label="密码" prop="passworld">
            <el-input type="password" placeholder="输入密码" v-model="registerForm.passworld" />
          </el-form-item>
          <el-form-item label="再次确认" prop="checkPass">
            <el-input type="password" placeholder="再次输入密码" v-model="registerForm.checkPass" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit(registerFormRef)">注 册</el-button>
            <el-button @click="resetForm(registerFormRef)">重 置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    reactive,
    ref
  } from 'vue';
  const ShowCase = {
    login: 'login',
    register: 'register'
  }

  const show = ref(ShowCase.login)

  // 登录start

  const loginFormRef = ref();
  const loginForm = reactive({
    name: '',
    passworld: '',
  });
  const loginRules = reactive({
    name: [{
        required: true,
        message: '请输入账号',
        trigger: 'blur'
      },
      {
        max: 11,
        message: '账号长度不超过11位',
        trigger: 'blur'
      },
    ],
    passworld: [{
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }],
  });
  const resetForm = (formEl) => {
    if (!formEl) return;
    formEl.resetFields();
  };
  const submit = (formEl) => {
    if (!formEl) return;
    formEl.validate((valid) => {
      if (valid) {
        console.log('成功');
      } else {
        console.log('error submit!');
        return false;
      }
    });
  };
  // 登录end

  // 注册start


  const registerFormRef = ref();
  const registerForm = reactive({
    name: '',
    email: '',
    passworld: '',
    checkPass: '',
  });
  const validatePass = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('Please input the password'));
    } else {
      if (registerForm.checkPass !== '') {
        if (!registerFormRef.value) return;
        registerFormRef.value.validateField('checkPass', () => null);
      }
      callback();
    }
  };
  const validatePass2 = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('Please input the password again'));
    } else if (value !== registerForm.passworld) {
      callback(new Error("Two inputs don't match!"));
    } else {
      callback();
    }
  };
  const registerRules = reactive({
    name: [{
        required: true,
        message: '请输入账号',
        trigger: 'blur'
      },
      {
        max: 11,
        message: '账号长度不超过11位',
        trigger: 'blur'
      },
    ],
    email: [{
        required: true,
        message: '请输入邮箱',
        trigger: 'blur',
      },
      {
        type: 'email',
        message: '请输入正确的邮箱',
        trigger: ['blur', 'change'],
      },
    ],
    passworld: [{
        required: true,
        message: '请输入密码',
        trigger: 'blur'
      },
      {
        validator: validatePass,
        trigger: 'blur'
      },
    ],
    checkPass: [{
        required: true,
        message: '请输入确认密码',
        trigger: 'blur'
      },
      {
        validator: validatePass2,
        trigger: 'blur'
      },
    ],
  });
  // 注册end
</script>

<style scoped lang="scss">
  .loginPage {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: relative;
    padding: 1rem;
    font-family: Avenir, sans-serif;
    font-size: 112.5%;
    color: #124;
    background-image: radial-gradient(rgba(255, 0, 0, 0.3),
        rgba(255, 0, 0, 0) 40vw),
      radial-gradient(rgb(64 158 255 / 43%), rgba(0, 128, 0, 0) 40vw),
      radial-gradient(rgba(0, 0, 255, 0.3), rgba(0, 0, 255, 0) 40vw),
      radial-gradient(rgba(255, 255, 0, 0.3), rgba(255, 255, 0, 0) 40vw),
      radial-gradient(rgba(255, 0, 0, 0.3), rgba(255, 0, 0, 0) 40vw);
    background-position: -40vw 14rem, 50% 10rem, 60vw 14rem,
      -10vw calc(14rem + 20vw), 30vw calc(14rem + 20vw);
    background-size: 80vw 80vw;
    background-repeat: no-repeat;
  }


  .login-card {
    box-shadow: 0 0 4px rgb(0 0 0 / 14%), 0 4px 8px rgb(0 0 0 / 28%);
    background-color: rgba(255, 255, 255, 0.5);
    position: relative;
    min-height: 400px;
    min-width: 400px;
    width: 60%;
    border-radius: 1%;
    // border: 1px solid red;
    display: flex;

    .change-btn {
      width: 50%;
      vertical-align: middle;
      text-align: center;
    }

    .wrapper {
      width: 50%;
      height: 120%;
      position: absolute;
      top: -10%;
      left: 5%;
      background: #fff;
      border-radius: 2%;
      box-shadow: 0 0 4px rgb(0 0 0 / 14%), 0 4px 8px rgb(0 0 0 / 28%);
      color: #303030;
      overflow: hidden;
      transition: all 0.5s;

      .el-input {
        width: 90%;
      }

      h3 {
        padding: 90px 20px 20px 32px;
        margin-bottom: 30px;
        background-image: linear-gradient(#fff3f3, #fff);
        color: #606266;
      }
    }

    .wrapper.move {
      left: 45%;
      h3 {
        background-image: linear-gradient(#daddf5, #fff);

      }
    }
  }

  .ball {
    width: 200px;
    height: 200px;
    position: absolute;
    right: 0;
    bottom: 50px;
    border-radius: 50%;

    background: radial-gradient(circle at 75% 30%,
        white 5px,
        aqua 8%,
        darkblue 60%,
        aqua 100%);
    box-shadow: inset 0 0 20px #fff, inset 10px 0 46px #eaf5fc,
      inset 88px 0px 60px #c2d8fe, inset -20px -60px 100px #fde9ea,
      inset 0 50px 140px #fde9ea, 0 0 90px #fff;
    animation: float 4s ease-in-out infinite;

  }

  .shadow {
    position: absolute;
    right: 20px;
    bottom: 0;
    background-color: #b490b2;
    width: 150px;
    height: 40px;
    border-radius: 50%;
    animation: expand 4.5s infinite;
  }

  @keyframes float {

    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-80px);
    }
  }

  @keyframes expand {

    0%,
    100% {
      transform: scale(0.5);
    }

    50% {
      transform: scale(1);
    }
  }
</style>