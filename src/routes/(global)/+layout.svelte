<script>
    import '../../app.css'
    import '@fontsource/atkinson-hyperlegible/400.css';
    import '@fontsource/atkinson-hyperlegible/700.css';
</script>

<svelte:head>
    <title>The Zodiacs</title>
    <link rel="icon" type="image/x-icon" href="/img/page_main/ram.ico">
</svelte:head>

<div class="flexBox">

    <div class="navBar">
        <div class="navTopImgs">
            <img class="zodiWheel" src="/img/page_main/signs of the zodiac_cs.png" alt="A purple wheel featuring the signs of the Zodiac and their constellations">
    
            <div class="stars01">
                <img src="/img/page_main/starsCluster01S.png" alt="A cluster of three yellow stars">
            </div>
        </div>

        <div class="navContent">

            <div class="navLinks">

                <a class="btnLink" href="/#"><div class="button"><h2>HOME</h2></div></a>
                
                <a class="btnLink" href="/sys"><div class="button"><h2>SYSTEM</h2></div></a>
                
                <a class="btnLink" href="/front"><div class="button"><h2>FRONTERS</h2></div></a>

                <a class="btnLink" href="/links"><div class="button"><h2>LINKS</h2></div></a>

                <a class="btnLink" href="/extra"><div class="button"><h2>ETC</h2></div></a>

            </div>

            <div class="pluringDiv">
                <div id='pluring'>
                    <script type="text/javascript" src="https://testtubesterone.nekoweb.org/pages/pluring/onionring-variables.js"></script>
                    <script type="text/javascript" src="https://testtubesterone.nekoweb.org/pages/pluring/onionring-widget.js"></script>
                </div>
            </div>

            <div class="stars02">
                <img src="/img/page_main/starsCluster02S.png" alt="A cluster of three yellow stars">
            </div>

        </div>
    
    </div>
    
    <div class="mainContent">

        <h1 class="siteTitle">ZODIACS.PL</h1>
    
        <slot />
    
    </div>

</div>

<style>

    h2 {
        font-size: 30px;
        margin: 15px;
        font-weight: bold;
    }

    .navTopImgs {
        display: flex;
        position: relative;

    }
    
    .zodiWheel {
        width: 260px;
        position: relative;
        top: -130px;
        left: -130px;
    }

    .stars01 {
        width: 160px;
        height: 160px;
        position: relative;
        top: -80px;
        right: 35px;
    }

    .flexBox {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .navBar, .mainContent {
        margin: 10px;
        margin-top: 65px;
    }

    .navBar {
        background-color: #e7e2d1;
        color: black;
        border-radius: 10px;
        box-shadow: 8px 8px #00000090;
        width: 350px;
        height: 530px;
        margin-right: 35px;
    }

    .navContent {
        margin: 10px;
    }

    .navLinks {
        position: relative;
        top: -150px;
    }

    .button {
        border-radius: 5px;
        background-color: #6d6a9a;
        box-shadow: 5px 5px #00000090;
        margin-bottom: -5px;
        margin-left: 10px;
        margin-right: 10px;
        height: 45px;
        text-align: center;
        line-height: 45px;
    }

    .btnLink, .btnLink:visited {
        text-decoration: none;
        color: #1f1f27;
    }

    .btnLink:hover {
        color: white;
    }
    
    .mainContent {
        width: 1000px;
        height: 750px;
    }

    .siteTitle {
        position: fixed;
        margin-top: -20px;
        margin-left: 38%;
        font-weight: bold;
        font-size: 40px;
        color: #fbbe4b;
        text-shadow: 5px 5px #00000090;
    }

    .pluringDiv {
        margin-left: 30px;
        margin-right: 30px;
        position: relative;
        margin-top: -130px;
    }

    #pluring {
        height: 100px;
    }

    .stars02 {
        position: relative;
        margin-top: -60px;
        margin-left: -60px;
    }

</style>