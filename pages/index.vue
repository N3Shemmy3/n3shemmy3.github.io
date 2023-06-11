<template>
	<div
		id="content"
		class="select-none min-h-screen noSelect overflow-auto flex flex-col mx-auto max-w-screen-lg bg-colorBackgroundLight text-colorOnBackgroundLight dark:bg-colorBackgroundDark dark:text-colorOnBackgroundDark"
	>
		<div class="h-14 mt-4"> </div>

		<About />
		<Projects />
	</div>
</template>

<style scoped>
	.noSelect {
		-webkit-tap-highdark-color: transparent;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.noSelect:focus {
		outline: none !important;
	}
</style>
