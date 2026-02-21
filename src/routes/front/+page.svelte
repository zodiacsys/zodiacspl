<script lang="ts">
    import { onMount } from 'svelte'
    import pkfronters from "irys-webby/dist/iryscc/fronters/pkfronters.js";
    onMount(() => {
        pkfronters.renderAll();
    });
</script>

<div class="stupidflex02"><div data-pkfronters-system="zodiac" data-pkfronters-type="card" data-pkfronters-options="dn"></div></div>

<style>

.stupidflex02 {
    display: flex;
    justify-content: center;
}

:global {
    /* this is the default pkfronters.css */
    .pkfronters--member-list--pronouns,
    .pkfronters--member-card--pronouns
    {
        word-break: break-word;
    }

    .pkfronters--member-card--pronouns
    {
        text-align: center;
    }

    .pkfronters--member-list--pronouns::before,
    .pkfronters--member-card--pronouns::before
    {
        content: '\0020(';
    }

    .pkfronters--member-list--pronouns::after,
    .pkfronters--member-card--pronouns::after
    {
        content: ')\0020';
    }

    .pkfronters--member-card-container
    {
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;
    }

    .pkfronters--member-card
    {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        max-width: 8em;
        background: #ffcc4b;
        color: #2b2b2b;
        padding: 1rem;
        border-radius: 4px;
        border: 4px solid transparent;
        margin: 1em;
    }

    .pkfronters--member-card--avatar
    {
        min-width: 6rem;
        width: 6rem;
        min-height: 6rem;
        height: 6rem;
        margin: 0 0 0.5rem 0;
        border-radius: 4px;
        border: 4px solid transparent;
    }

    .pkfronters--member-card--name
    {
        text-align: center;
    }
}
</style>