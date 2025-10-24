<script lang="ts" setup>
const route = useRoute();
const error = route.query.erro;
</script>

<template>
	<div class="card bg-base-300 container m-4 min-h-72 text-center mx-auto flex felx-col justify-center items-center gap-4">
		<div role="alert" class="alert alert-error min-w-1/2 text-center">
			<span>Error! {{ error }}</span>
		</div>
		<NuxtLink to="/" class="btn btn-primary">
			Back
			<icon name="tabler:arrow-back" size="32" />
		</NuxtLink>
	</div>
</template>
