<script>
    import '../avdid/app.css'
    import '@fontsource/atkinson-hyperlegible';
</script>

<head>
    <title>Animation vs DID</title>
</head>


    <div class="stupidFlex">
        <div class="scrolling">

            <!-- svelte-ignore a11y_distracting_elements -->
            <marquee width="100%" height="100%"><p class="scrollText">Welcome to Animation vs DID, a subsystem within Zodiac! We hope you enjoy your stay!</p></marquee>

        </div>
    </div>

    <div class="stupidFlex">
        <div class="containerMain">

            <div class="theMeat">

                <div class="block">
                    <div class="title">
                        <img class="AvDID" src="/img/avdidTitle.png" alt="AvDID">
                    </div>
                    
                    <div class="sideBar">
                        
                        <a class="sideLink" href="/avdid"><div class="sideBarBtn1"><h1>AvDID HOME</h1></div></a>

                        <a class="sideLink" href="/avdid/m"><div class="sideBarBtn2"><h1>MEMBERS</h1></div></a>

                        <a class="sideLink" href="https://pk.mt/g/aozjoz"><div class="sideBarBtn3"><h1>PK GROUP</h1></div></a>

                        <a class="sideLink" href="/avdid/etc"><div class="sideBarBtn4"><h1>ETC</h1></div></a>

                        <a class="sideLink" href="/#"><div class="sideBarBtn5"><h1>MAIN SYSTEM</h1></div></a>

                    </div>

                    <div class="sideImg">
                        <img src="/img/pagedoll_all.png" alt="five colorful stick figures">
                    </div>
                </div>

                <div class="mainContent"><slot /></div>

            </div>

        </div>
    </div>

<style>

.stupidFlex {
    display: flex;
    justify-content: center;
}

.scrolling {
    background-color: black;
    width: 80vw;
    height: 60px;
    position: relative;
    top: 45px;
    border: 4px solid white;
    border-radius: 4px;
    z-index: 2;
    overflow: hidden;
    align-items: center;
}

.scrollText {
    font-size: 18px;
}

.containerMain {
    background-color: black;
    width: 78vw;
    height: 90vh;
    position: relative;
    top: -40px;
    border: 4px solid white;
    border-radius: 4px;
}

.block {
    display: block;
}

.theMeat {
    height: 86%;
    position: relative;
    top: 80px;
    margin: 15px;
    display: flex;
}

.title {
    height: 80px;
    width: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.AvDID {
    height: 130px;
}

.sideBar {
    height: 520px;
    width: 280px;
    margin-top: 15px;
    display: grid;
    align-items: center;
}

.sideLink, .sideLink:visited {
    text-decoration: none;
    color: white;
}

.sideBarBtn1, .sideBarBtn2, .sideBarBtn3, .sideBarBtn4, .sideBarBtn5 {
    width: 100%;
    height: 80px;
    margin-bottom: 10px;
    text-align: center;
    margin: auto;
    border-radius: 5px;
}

.sideBarBtn1 {
    border: 3px solid #FF6600;
}

.sideBarBtn2 {
    border: 3px solid #66CC00;
}

.sideBarBtn3 {
    border: 3px solid #CC0000;
}

.sideBarBtn4 {
    border: 3px solid #33CCFF;
}

.sideBarBtn5 {
    border: 3px solid #FFCC00;
}

.sideImg {
    height: 80px;
    width: 280px;
    margin-top: 15px;
}

.mainContent {
    height: 80%;
    width: 100%;
    margin: 25px;
    margin-left: 35px;
    position: relative;
    top: -15px;
}



</style>