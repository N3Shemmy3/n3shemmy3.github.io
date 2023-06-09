<template>
	<div class="space-y-4">
		<div class="">
			<h6 class="text-2xl">Send me an email</h6>
			<p class="text-sm">I'll get back to you as soon as possible</p>
		</div>
		<form
			class="space-y-2"
			accept-charset="UTF-8"
			v-on:submit.prevent="onSubmit()"
			method="POST"
		>
			<div class="flex flex-col">
				<label>Your Email</label>
				<input
					class="form-control bg-colorSurfaceLight dark:bg-colorSurfaceDark text-colorOnBackgroundLight dark:text-colorOnBackgroundDark focus:border-colorSecondaryLight dark:focus:border-colorSecondaryDark"
					type="email"
					v-model="email"
					placeholder="username@domain.com"
				/>
			</div>
			<div class="flex flex-col">
				<label class="text-lg">Subject</label>
				<input
					class="form-control bg-colorSurfaceLight dark:bg-colorSurfaceDark text-colorOnBackgroundLight dark:text-colorOnBackgroundDark focus:border-colorSecondaryLight dark:focus:border-colorSecondaryDark"
					type="text"
					v-model="name"
					placeholder="Subject"
					required="true"
				/>
			</div>
			<div class="flex flex-col">
				<label class="text-lg">Body</label>
				<textarea
					class="form-control bg-colorSurfaceLight dark:bg-colorSurfaceDark text-colorOnBackgroundLight dark:text-colorOnBackgroundDark focus:border-colorSecondaryLight dark:focus:border-colorSecondaryDark"
					type="text"
					v-model="message"
					placeholder="Hi, ..."
					required="true"
				></textarea>

				<button
					:disabled="loading"
					v-if="name.length + message.length > 50"
					v-Ripple
					class="text-base mt-4 w-full outline-none px-4 py-2 rounded-lg bg-colorPrimaryLight text-colorOnPrimaryLight disabled:opacity-25"
					type="submit"
					>Submit</button
				>
			</div>
		</form>
	</div>
</template>

<script lang="ts" setup>
	import axios from "axios";

	const emit = defineEmits(["OnSubmit", "onEmailSent"]);

	const loading = ref(false);
	const name = ref("");
	const email = ref("");
	const message = ref("");
	const isSuccess = ref(false);

	function isEmail(mail: string) {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
			return true;
		}
		alert("You have entered an invalid email address!");
		return false;
	}
	function onSubmit() {
		emit("OnSubmit");
		loading.value = true;
		let data = {
			name: name.value,
			email: email.value,
			message: message.value,
		};
		if (!isEmail(email.value)) {
			alert("please enter a valid email");
			return;
		}
		axios
			.post("https://getform.io/f/762a8fe3-5bc4-418f-ad93-b244cf828f79", data, {
				headers: {
					Accept: "application/json",
				},
			})
			.then(
				(response) => {
					isSuccess.value = response.data.success ? true : false;
					if (isSuccess.value) alert("Email sent successfully");
					else alert("An error ocurred");
				},
				(response) => {}
			);
		loading.value = false;
	}
</script>
<style scoped>
	input {
		@apply h-12 my-1 p-2;
		@apply rounded-md outline-none;
		@apply border border-gray-300;
	}

	textarea {
		@apply min-h-[100px] p-2;
		@apply rounded-md outline-none;
		@apply border border-gray-300;
	}
</style>
