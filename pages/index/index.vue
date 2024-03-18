<template>
  <view class="container">
    <div class="wrapper">
      <div class="card-switch">
        <div class="flip-card__inner" :class="{ flipped: isFlipped }">
          <div class="flip-card__front">
            <div class="title">Log in</div>
            <form class="flip-card__form" action="">
            	<input class="flip-card__input" :placeholder="nicknameHolder" type="text" v-model="nickname">
				<input class="flip-card__input" :placeholder="passwordHolder" type="password" v-model="password">
            	<div class="button-container">
					<button @click="toggleFlip" class="flip-card__btn">去注册</button>
					<button @click="login" class="flip-card__btn">登入账号</button>
				</div>
            </form>
          </div>
          <div class="flip-card__back">
            <div class="title">Register</div>
            <form class="flip-card__form" action="">
            	<input class="flip-card__input" :placeholder="nicknameHolder" type="text" v-model="nickname">
				<input class="flip-card__input" :placeholder="passwordHolder" type="password" v-model="password">
				<input class="flip-card__input" :placeholder="twiceHolder" type="password" v-model="twice">
            	<div class="button-container">
					<button @click="toggleFlip" class="flip-card__btn">已有账号</button>
            		<button @click="register" class="flip-card__btn">注册</button>
            	</div>
            </form>
          </div>
        </div>
      </div>   
    </div>
  </view>
</template>

<script>
	import axios from 'axios';
	import {loginRequest} from "@/api/loginAndRegister";
	export default {
	  data() {
		return {
		  nickname: '',
		  password: '',
		  twice: '',
		  nicknameHolder: '昵称',
		  passwordHolder: '密码',
		  twiceHolder: '确认密码',
		  isFlipped: false,
		};
	  },
	  methods: {
		login() {
		  this.validateFields();
		  if (this.formIsValid()) {
			axios.post('/api/auth/login', {
			    username: this.nickname,
			    password: this.password
			})
			.then(response => {
			    console.log('Login successful:', response);
			})
		  } else {
			console.log('Validation failed. Login form not submitted.');
		  }
		},
		register() {
		  this.validateFields();
		  this.checkPasswordTwice();
		  if (this.formIsValid() && !this.twiceError()) {
			axios.post('/api/auth/register', {
				username: this.nickname,
				password: this.password
			})
			.then(response => {
				console.log('Registration successful:', response);
				// 处理注册成功逻辑，例如跳转或状态更新
			})
		  } else {
			console.log('Validation failed. Registration form not submitted.');
		  }
		},
		validateFields() {
		  const specialChars = /[^a-zA-Z0-9]/g;

		  // 验证昵称
		  this.nicknameHolder = '昵称';
		  if (this.nickname.length < 5 || this.nickname.length > 10 || specialChars.test(this.nickname)) {
			this.nickname = '';
			this.nicknameHolder = '昵称: 5-10个字符，不能包含特殊符号';
		  }
		  
		  // 验证密码
		  this.passwordHolder = '密码';
		  if (this.password.length < 6 || this.password.length > 20 || specialChars.test(this.password)) {
			this.password = '';
			this.passwordHolder = '密码: 6-20个字符，不能包含特殊符号';
		  }
		},

		checkPasswordTwice() {
		  this.twiceHolder = '确认密码';
		  if (this.twice !== this.password) {
			this.twice = '';
			this.twiceHolder = '两次输入的密码不匹配';
		  }
		},
		toggleFlip() {
			this.nickname = '';
			this.password = '';
			this.twice = '';
			this.nicknameHolder = '昵称';
			this.passwordHolder = '密码';
			this.twiceHolder= '确认密码';
		  this.isFlipped = !this.isFlipped;
		},
		formIsValid() {
		  // 确保 placeholder 没有显示错误信息
		  return this.nicknameHolder === '昵称' && this.passwordHolder === '密码' && this.twiceHolder === '确认密码';
		},
		twiceError() {
		  // 验证确认密码是否有错误
		  return this.twiceHolder !== '确认密码';
		}
	  },
	};
</script>

<style>
	@import url("../../static/css/index.css");
</style>