<template>
	<div class="card">
		<h2>User Profile</h2>
		<div class="header-box">
			<div>
				<p>Welcome, {{ username }}!</p>
			</div>
			<div>
				<button @click="toggleModal" class="flip-card__btn">编辑资料</button>
			</div>
		</div>
		<div class="flip-card__back" v-if="showModal">
			<div class="modal">
				<div class="title">User Profile Modification</div>
				<form class="flip-card__form" @submit.prevent="register">
					<!-- 增加label提高表单的可访问性 -->
					<label for="nickname"></label>
					<input id="nickname" class="flip-card__input" placeholder="Nickname" type="text" v-model="nickname">
					<label for="password"></label>
					<input id="password" class="flip-card__input" placeholder="Password" type="password"
						v-model="password">
					<label for="password-repeat"></label>
					<input id="password-repeat" class="flip-card__input" placeholder="Repeat Password" type="password"
						v-model="twice">
					<label for="interest-select"></label>
					<select class="flip-card__input" name="interestDomain" id="interest-select" style="color:GREY"
						v-model="interestDomain">
						<option value="--Please select your interest--"></option>
						<option value="1">Medical</option>
						<option value="2">Technology</option>
						<option value="3">History</option>
						<option value="4">Literature</option>
					</select>
					<div class="button-container">
						<button type="button" @click="toggleModal" class="flip-card__btn">取消更改</button>
						<button type="submit" class="flip-card__btn">确认更改</button>
					</div>
				</form>
			</div>
			<div class="modal-overlay" @click="toggleModal"></div>
		</div>
		<div class="section">
			<h3>User's Notebook</h3>
			<div class="notes">
				<div v-for="note in notes" :key="note.title" class="note">
					<h4>{{ note.title }}</h4>
					<p>{{ note.content }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			username: 'John Doe',
			showModal: false,
			nicknameHolder: 'Nickname',
			passwordHolder: 'Password',
			twiceHolder: 'Repeat Password',
			interestDomain: '',
			nickname: '',
			password: '',
			twice: '',
			notes: [
				{ title: 'Note 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
				{ title: 'Note 2', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' }
			],
		};
	},
	methods: {
		toggleModal() {
			this.showModal = !this.showModal;
		},
		register() {
			// Registration logic here
		},
		updateInterestDomain(event) {
			this.interestDomain = event.target.value;
		}
	}
};
</script>

<style>
.header-box{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
}

.card {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	max-width: 600px;
	background: #ffffff;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	border-radius: 12px;
	overflow: hidden;
	transition: transform 0.3s ease;
}

.section {
	background: #fff;
	padding: 30px 40px;
	border-radius: 10px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	width: 100%;
	max-width: 400px;
	text-align: center;
	margin-bottom: 20px;
}

.section h3 {
	margin-bottom: 30px;
	color: #333;
	font-size: 1.5em;
	cursor: pointer;
}

.form {
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.input-field {
	padding: 15px;
	border: 2px solid #ddd;
	border-radius: 8px;
	font-size: 1em;
	transition: border-color 0.3s ease-in-out;
}

.input-field:focus {
	border-color: #FF3951;
	outline: none;
}

.notes {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px;
}

.note {
	background-color: #f8f9fa;
	padding: 16px;
	border-radius: 8px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.note:hover {
	transform: translateY(-5px);
	box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.note h4 {
	margin: 0 0 8px;
	font-size: 18px;
	color: #007bff;
}

.note p {
	margin: 0;
	color: #666;
}

.flip-card__back {
	width: 80%;
	height: 80%;
	display: flex;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: center;
	flex-direction: column;
	z-index: 1000;
}

.modal {
	background: #fff;
	padding: 40px;
	border-radius: 12px;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	max-width: 500px;
	width: 100%;
	z-index: 1000;
}

.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 999;
}

.flip-card__form {
	display: flex;
	flex-direction: column;
	width: 100%;
}

.title {
	color: #FF3951;
	margin: 20px 0;
	font-size: 30px;
	font-weight: 900;
	text-align: center;
}

.flip-card__input {
	width: 250px;
	height: 40px;
	border-radius: 13px;
	border: 2px solid #FF3951;
	background-color: #fff;
	box-shadow: 4px 4px #FF3951;
	font-size: 15px;
	font-weight: 600;
	padding: 5px 10px;
	outline: none;
}

.flip-card__input::placeholder {
	color: #ffffff;
	opacity: 0.8;
}

.flip-card__input:focus {
	border: 2px solid #2d8cf0;
}

.flip-card__btn {
	margin: 10px;
	padding: 10px 20px;
	border: none;
	background-color: #FF3951;
	color: white;
	font-size: 1em;
	cursor: pointer;
	border-radius: 8px;
	transition: background 0.3s ease-in-out;
}

.flip-card__btn:active {
	box-shadow: 0px 0px #FF3951;
	transform: translate(3px, 3px);
}

.toggle-flip-btn {
	padding: 10px 15px;
	border-radius: 13px;
	color: #fff;
	cursor: pointer;
}

.flip-card__btn {
	margin: 20px 0;
	width: 120px;
	height: 40px;
	border-radius: 13px;
	border: #FF3951;
	background-color: #FF3951;
	box-shadow: 4px 4px #FF3951;
	color: #ffffff;
	font-size: 17px;
	font-weight: 600;
	cursor: pointer;
}
</style>
