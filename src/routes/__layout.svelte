<script lang="ts">
    import "../app.css";
    import Header from '$lib/header/Header.svelte';
    // import '../lib/styles/app.scss';
</script>

<!-- <Header /> -->

<main>
    <slot>
</slot></main>

<footer>
    <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<slot></slot>