<template>
	<ClientOnly>
		<div
			class="h-screen w-full select-none text-colorOnBackgroundLight dark:text-colorOnBackgroundDark bg-colorBackgroundLight dark:bg-colorBackgroundDark"
		>
			<Head>
				<link
					rel="icon"
					href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PHBhdGggZmlsbD0iIzg4ODg4OCIgZD0iTTEyOCAxMjhhOCA4IDAgMCAxLTMgNi4yNWwtNDAgMzJhOCA4IDAgMSAxLTEwLTEyLjVMMTA3LjE5IDEyOEw3NSAxMDIuMjVhOCA4IDAgMSAxIDEwLTEyLjVsNDAgMzJhOCA4IDAgMCAxIDMgNi4yNVptNDggMjRoLTQwYTggOCAwIDAgMCAwIDE2aDQwYTggOCAwIDAgMCAwLTE2Wm01Ni05NnYxNDRhMTYgMTYgMCAwIDEtMTYgMTZINDBhMTYgMTYgMCAwIDEtMTYtMTZWNTZhMTYgMTYgMCAwIDEgMTYtMTZoMTc2YTE2IDE2IDAgMCAxIDE2IDE2Wm0tMTYgMTQ0VjU2SDQwdjE0NGgxNzZaIi8+PC9zdmc+"
				/>
				<Title>Shemmy Nyirenda</Title>
				<Meta
					name="description"
					content="A website i built with nuxt.js to showcase My skills and passions"
				/>
				<meta name="theme-color" content="bg-colorBackgroundLight" />
				<Style
					type="text/css"
					children="body { @apply bg-colorBackgroundLight dark:bg-colorBackgroundDark;  }"
				/>
			</Head>

			<div class="max-w-screen-md">
				<Navbar />
				<div class="justify-center pt-14 px-4 pb-4 sm:pt-28 sm:px-6">
					<NuxtPage />
				</div>
				<FooterBar />
			</div>
		</div>
	</ClientOnly>
</template>

<script setup></script>
