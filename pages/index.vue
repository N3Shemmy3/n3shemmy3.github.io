<template>
	<div
		id="content"
		class="select-none overflow-auto flex flex-col m-auto max-w-3xl justify-center"
	>
		<About />
		<Projects />
		<div class="h-[1px]"></div>
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
