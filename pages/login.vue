<template>
	<view class="container">
		<div class="wrapper">
			<div class="card-switch">
				<div class="flip-card__inner" :class="{ flipped: isFlipped }">
					<div class="flip-card__front">
						<div class="title">Log in</div>
						<form class="flip-card__form" action="">
							<input class="flip-card__input" :placeholder="nicknameHolder" type="text"
								v-model="nickname">
							<input class="flip-card__input" :placeholder="passwordHolder" type="password"
								v-model="password">
							<div class="button-container">
								<button @click="toggleFlip" class="flip-card__btn">去注册</button>
								<button @click="login('Home')" class="flip-card__btn">登入账号</button>
							</div>
						</form>
					</div>
					<div class="flip-card__back">
						<div class="title">Register</div>
						<form class="flip-card__form" action="">
							<input class="flip-card__input" :placeholder="nicknameHolder" type="text"
								v-model="nickname">
							<input class="flip-card__input" :placeholder="passwordHolder" type="password"
								v-model="password">
							<input class="flip-card__input" :placeholder="twiceHolder" type="password" v-model="twice">
							<select class="flip-card__input" name="interestDomain" id="interest-select"
								style="color:GREY" :value="interestDomain" @change="updateInterestDomain">
								<option value="">--请选择你感兴趣的领域--</option>
								<option value="1">医疗</option>
								<option value="2">科技</option>
								<option value="3">历史</option>
								<option value="4">文学</option>
							</select>
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
import service from '../utils/axios';

export default {
	data() {
		return {
			nickname: 'admin',
			password: 'admin',
			twice: '',//二次确认密码
			nicknameHolder: '昵称',
			passwordHolder: '密码',
			twiceHolder: '确认密码',
			isFlipped: false,
			interestDomain: ''
		};
	},
	onLoad() {

	},
	onShow() {
		// uni.hideTabBar();
	},
	methods: {
		updateInterestDomain(event) {
			this.interestDomain = event.target.value;
		},
		login() {
			this.validateFields();
			if (this.formIsValid()) {
				service.post('/auth/login', {
					username: this.nickname,
					password: this.password
				})
					.then(response => {
						// console.log('Login successful', response.data);
						localStorage.setItem('token', response.data.token);
						uni.switchTab({
							url: '/pages/home'
						});
					})
					.catch(error => {
						if (error.response && error.response.status === 401) {
							// console.log('Auth failed:', error.response.data);
							uni.showToast({
								title: '登录失败，请检查您的凭证',
								icon: 'none',
								duration: 2000
							});
						} else {
							console.error('Login failed:', error);
						}
					});
			} else {
				console.log('Validation failed. Login form not submitted.');
			}
		},
		register() {
			this.validateFields();
			this.checkPasswordTwice();
			if (this.formIsValid() && !this.twiceError()) {
				service.post('/auth/register', {
					username: this.nickname,
					password: this.password,
					interestDomain: this.interestDomain
				})
					.then(response => {
						if (response.data === 0) {
							// console.log('Registration faild:', response.data);
							uni.showToast({
								title: 'Registration faild:用户名已存在',
								icon: 'none',
								duration: 2000
							});
							this.nickname = '';
							this.twice = '';
						} else {
							uni.showToast({
								title: 'Registration Successful',
								icon: 'none',
								duration: 2000
							});
							uni.navigateTo({
								url: '/pages/index'
							});
						}
					})
					.catch(error => {
						console.error('Registration failed:', error);
					})
			} else {
				console.log('Validation failed. Registration form not submitted.');
				uni.showToast({
					title: 'Validation failed. Registration form not submitted.',
					icon: 'none',
					duration: 2000
				});
			}
		},
		validateFields() {
			const specialChars = /[^a-zA-Z0-9]/g;
			this.nicknameHolder = '昵称';
			if (this.nickname.length < 5 || this.nickname.length > 10 || specialChars.test(this.nickname)) {
				this.nickname = '';
				this.nicknameHolder = '昵称: 5-10个字符，不能包含特殊符号';
			}
			this.passwordHolder = '密码';
			if (this.password.length < 5 || this.password.length > 20 || specialChars.test(this.password)) {
				this.password = '';
				this.passwordHolder = '密码: 5-20个字符，不能包含特殊符号';
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
			this.twiceHolder = '确认密码';
			this.isFlipped = !this.isFlipped;
		},
		formIsValid() {
			return this.nicknameHolder === '昵称' && this.passwordHolder === '密码' && this.twiceHolder === '确认密码';
		},
		twiceError() {
			return this.twiceHolder !== '确认密码';
		}
	}
};
</script>

<style lang="scss">
@import url("../static/css/index.css");
</style>