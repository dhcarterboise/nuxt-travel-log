<script lang="ts" setup>
const authStore = useAuthStore();
</script>

<template>
	<button
		:disabled="authStore.loading"
		class="btn btn-accent"
		@click="authStore.signIn"
	>
		Sign In with Github
		<span v-if="authStore.loading" class="loading loading-spinner text-primary" />
		<Icon
			v-else
			name="tabler:brand-github"
			size="large"
		/>
	</button>
</template>
