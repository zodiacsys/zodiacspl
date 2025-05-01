

<div class="contentFull">

    <div class="zodiTitle">

        <p class="titleText">Hello and Welcome! We are <b>The Zodiacs.</b></p>
        <p class="titleText">We are a 25 year old PF-DID system of an unknown alter count. We try to give everyone a zodiac sign... as a treat!</p>

        <p class="signGrab">☼ ♈︎ ☾ ♋︎ ↑ ♐︎</p>

    </div>

    <div class="homeIcon"></div>

    <div class="mainContent">

        

    </div>

    <img class="steveSmoke" src="/img/page_main/stevesmoking.png" alt="Steve from Tankmen smoking a cigarette">

</div>

<style>

    /* Start main CSS */
    
    p {
        margin: 0px;
    }

    .contentFull {
        height: 100%;
        width: 100%;
    }

    .zodiTitle, .mainContent {
        background-color: #e7e2d1;
        border-radius: 10px;
        box-shadow: 5px 5px #00000090;
    }

    .zodiTitle {
        width: 100%;
        height: 175px;
    }

    .titleText {
        padding-top: 20px;
        padding-left: 15px;
        padding-right: 15px;
        font-size: 19px;
    }

    .signGrab {
        text-align: center;
        font-size: 30px;
        padding-top: 15px;
    }

    .homeIcon {
        background-image: url("/img/page_main/ram_icon.png");
        background-size: contain;
        background-position: center;
        width: 120px;
        height: 120px;
        margin-top: 25px;
        border-radius: 5px 50px;
        box-shadow: 5px 5px #00000090;
        position: relative;
        left: -25px;
    }

    .mainContent {
        height: 520px;
        width: 100%;
        position: relative;
        margin-top: -90px;
        z-index: -1;
    }

    .steveSmoke {
        width: 180px;
        position: relative;
        right: -860px;
        margin-top: -170px;
    }

    /* End main CSS - Start PHONE media query */

    @media (max-width: 500px) {

        .zodiTitle, .mainContent {
            box-shadow: none;
        }

        .titleText {
            font-size: 18px;
        }

        .signGrab {
            font-size: 15px;
        }

        .homeIcon {
            width: 100px;
            height: 100px;
            margin-left: 0%;
            margin-top: 5px;
            left: 0;
        }

        .steveSmoke {
            display: none;
        }

    }

    /* End of PHONE CSS - start VERTICAL TABLET query */

    @media (max-width: 1024px) and (min-width: 501px) {

        .homeIcon {
            margin-left: 0%;
            left: 0;
        }

        .steveSmoke {
            display: none;
        }

    }

</style>