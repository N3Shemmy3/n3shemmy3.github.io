<template>
	<div class="w-full sm:max-w-md space-y-4 p-4">
		<div class="">
			<h6 class="text-2xl">Send me an email</h6>
			<p class="text-sm">I'll get back to you as soon as possible</p>
		</div>
		<form
			ref="form"
			class="space-y-2"
			accept-charset="UTF-8"
			v-on:submit.prevent="onSubmit()"
			method="POST && dialog"
		>
			<div class="flex flex-col">
				<label>Your Email</label>
				<input
					class="form-control bg-colorSurfaceLight dark:bg-colorSurfaceDark text-colorOnBackgroundLight dark:text-colorOnBackgroundDark focus:border-colorSecondaryLight dark:focus:border-colorSecondaryDark"
					type="email"
					v-model="email"
					required="true"
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
				<label class="mt-1 text-sm opacity-40">Enter atleast 20 characters</label>

				<button
					:disabled="name.length + message.length <= 21 || loading"
					v-Ripple
					class="text-base mt-4 w-full outline-none px-4 py-2 rounded-lg bg-colorPrimaryLight text-colorOnPrimaryLight disabled:opacity-25"
					type="submit"
				>Submit</button>
			</div>
		</form>
	</div>
</template>

<script lang="ts" setup>
import axios from "axios";

const emit = defineEmits(["OnSubmit", "onEmailSent"]);
const form = ref();

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
	if (!isEmail(email.value)) {
		loading.value = false;
		return;
	}
	emit("OnSubmit");
	loading.value = true;
	let data = {
		name: name.value,
		email: email.value,
		message: message.value,
	};
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
			(response) => { }
		);

	loading.value = false;
	email.value = "";
	name.value = "";
	message.value = "";
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
