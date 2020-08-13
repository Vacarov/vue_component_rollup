<template>
	<div>
		Hello World from my component
		{{myProp}}
	</div>
</template>

<script>
	export default {
		name: "MyComponent",
		props: {
			myProp: {
				type: String,
				default: ""
			}
		}
	}
</script>

<style scoped>

</style>
