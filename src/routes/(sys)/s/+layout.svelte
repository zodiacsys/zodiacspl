<script>
    import '../../../app.css'
</script>

<div class="pageContent">

    <slot />

</div>

<style>

    :global(body) {
        background-color: #191c1f;
        color: #c7cdd6;
        font-family: "Atkinson Hyperlegible", sans-serif;
        font-size: 1.25em;
    }

    h1, h2, h3, p {
        margin: 0;
    }

    .pageContent {
        width: 65vw;
        margin: auto;
    }

</style>