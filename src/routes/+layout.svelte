<script>
    import '../app.css'
    import '@fontsource/atkinson-hyperlegible/400.css';
    import '@fontsource/atkinson-hyperlegible/700.css';
</script>

<svelte:head>
    <title>The Zodiacs</title>
    <link rel="icon" type="image/x-icon" href="">
</svelte:head>
<div class="stupidflex">

    <div class="contentFull">

        <div class="header">help1</div>

        <div class="divFlex">
            <div class="div01">help1</div>

            <div class="div02"><slot /></div>

            <div class="div03">help3</div>
        </div>

        <div class="footer">
            
            <div id='pluring'>
                <script type="text/javascript" src="https://testtubesterone.nekoweb.org/pages/pluring/onionring-variables.js"></script>
                <script type="text/javascript" src="https://testtubesterone.nekoweb.org/pages/pluring/onionring-widget.js"></script>
            </div>
    

        </div>

    </div>

</div>

<style>

    :global(body) {
        background-image: url("https://zodiacs.b-cdn.net/misc/zodiacspl/noiseTexture.png");
        background-repeat: repeat;
        background-blend-mode: overlay;
        background-color: antiquewhite;
    }

    .stupidflex {
        display: flex;
        justify-content: center;
    }

    .contentFull {
        background-color: lightgrey;
        width: 80vw;
        display: block;
    }

    .contentFull, .header, .footer, .div01, .div02, .div03 {
        border-radius: 1rem;
    }

    .header, .footer {
        background-color: red;
        width: 80vw;
        height: 12vh;
    }

    .header {
        margin-bottom: 0.5rem;
    }

    .footer {
        margin-top: 0.5rem;
    }

    .divFlex {
        display: flex;
        justify-content: center;
        height: 70vh;
    }

    .div01, .div03 {
        background-color: green;
        width: 230px;
    }

    .div02 {
        width: 80%;
        margin-left: 1rem;
        margin-right: 1rem;
    }

    #pluring {
        
    }

</style>