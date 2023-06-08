<template>
	<div>
		<div>
			<form
				accept-charset="UTF-8"
				v-on:submit.prevent="onSubmit()"
				method="POST"
			>
				<div>
					<label>Email address</label>
					<input
						type="email"
						v-model="email"
						class="form-control"
						placeholder="Email"
					/>
				</div>
				<div>
					<label>Name</label>
					<input
						type="text"
						v-model="name"
						class="form-control"
						placeholder="Name"
						required="true"
					/>
				</div>
				<div>
					<label>Message</label>
					<textarea
						type="text"
						v-model="message"
						class="form-control"
						placeholder="Message"
						required="true"
					></textarea>
				</div>
				<hr />
				<div class="success" v-if="isSuccess"
					>We received your submission, thank you!</div
				>
				<button type="submit">Submit</button>
			</form>
		</div>
	</div>
</template>

<script lang="ts">
	import axios from "axios";

	export default {
		name: "Contact",
		props: {
			msg: String,
		},
		data() {
			return {
				loading: true,
				name: "",
				email: "",
				message: "",
				isSuccess: false,
			};
		},
		methods: {
			isEmail(mail: string) {
				if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
					return true;
				}
				alert("You have entered an invalid email address!");
				return false;
			},
			onSubmit() {
				let data = {
					name: this.name,
					email: this.email,
					message: this.message,
				};
				if (!this.isEmail(this.email)) return;
				axios
					.post(
						"https://getform.io/f/02aaa32c-5952-4093-86f6-e0369c0981b4",
						data,
						{
							headers: {
								Accept: "application/json",
							},
						}
					)
					.then(
						(response) => {
							this.isSuccess = response.data.success ? true : false;
						},
						(response) => {
							// Error
						}
					);
			},
		},
	};
</script>
