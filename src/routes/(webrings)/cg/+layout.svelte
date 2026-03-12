<div class="pageContent">

    <div class="headerBox">
        <h1 class="titleName">The Color Gang Webring!</h1>
    </div>

    <div class="mainContent">
        <slot />
    </div>

</div>



<style>

    :global(body) {
        background-color: #eae4d4;
        color: #292723;
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

    .titleName {
        margin-left: 1.5vw;
    }

    .headerBox {
        background-color: #d0c8b4;
        display: flex;
        justify-content: left;
        align-items: center;
        height: 8vh;
        border-radius: 15px;
        margin-top: 2vh;
    }

    .mainContent {
        background-color: #d0c8b4;
        display: flex;
        min-height: 82vh;
        max-height: max-content;
        border-radius: 15px;
        margin-top: 2vh;
        padding-left: 1.5em;
        padding-right: 1.5em;
    }

</style>