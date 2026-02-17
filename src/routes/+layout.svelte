<script>
    import '../app.css'
</script>

<svelte:head>
    <title>The Zodiacs</title>
    <link rel="icon" type="image/x-icon" href="">

</svelte:head>
<div class="stupidflex">

    <div class="contentFull">

        <div class="header">help1</div>

        <div class="divFlex">
            <div class="div01">

                <a href="/#"><div class="links">HOME</div></a>
                <a href="/front"><div class="links">FRONTERS</div></a>

            </div>

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
        width: 100%;
        height: 100vh;
        background-image: linear-gradient(rgba(255, 255, 255, 0) 10%, rgba(255, 228, 110, 0.758) 100%), url("https://zodiacs.b-cdn.net/misc/zodiacspl/rams250.png");
        background-repeat: repeat;
        font-family: "Atkinson Hyperlegible", sans-serif;
    }

    a {
        text-decoration: none;
    }

    .stupidflex {
        display: flex;
        justify-content: center;
    }

    .contentFull {
        width: 80vw;
        display: block;
    }

    .contentFull, .header, .footer, .div01, .div02, .div03 {
        border-radius: 1rem;
    }

    .header, .footer {
        border: 8px solid #73473f;
        background-color: #ac8265;
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
        border: 8px solid #73473f;
        background-color: #ac8265;
        width: 250px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .div02 {
        border: 8px solid #73473f;
        background-color: #f2e3bd;
        width: 80%;
        margin-left: 1rem;
        margin-right: 1rem;
    }

    .links {
        background-color: #fbb910;
        color: #2b2b2b;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 5px;
        border: 4px solid #73473f;
        border-radius: 0.5rem;
        text-align: center;
        font-size: 2em;
    }

    #pluring {
        padding: 0.8rem;
    }

</style>