<div class="mainBody">

    <p class="descripStart">The Zodiac system is comprised of several <i>subsystems</i> which represent groups of alters that are related to each other for whatever reason.</p>
    <p>Usually, the relation is source, but not always.</p>

    <div class="subsystems">

        <a class="sysLink" href="/#"><div class="subsysLeft">

            <div class="subIcon1"></div>

            <div class="subText">
                <h2 class="titleTextLeft">20XX</h2>
                <p>The current <i>hosting</i> subsystem. Contains mostly alters sourced from TANKMEN.</p>
                <p>Home to our system host, Wright, as well as cohost Wyatt.</p>
            </div>

        </div></a>
    
        <a class="sysLink" href="/#"><div class="subsysRight">

            <div class="subText">

                <h2 class="titleTextRight">BLACKROCK</h2>
                <p>Has the second largest quantity of alters, could be considered a "cohosting" sys.</p>
                <p>Phighting! sourced individuals and more live here, more broody than the rest.</p>

            </div>
    
            <div class="subIcon2"></div>
            
        </div></a>
        
        <a class="sysLink" href="/avdid"><div class="subsysLeft">

            <div class="subIcon3"></div>

            <div class="subText">
                
                <h2 class="titleTextLeft">AvDID</h2>
                <p>Animation vs. DID - where did all these stick figures come from!?</p>
                <p>Contains AvA/AvM sourced individuals, trends more positive-minded.</p>

            </div>

        </div></a>
    
        <div class="subsysFlex">

            <a class="sysLink1" href="/#"><div class="minorSubsys1">

                <div class="subIcon4"></div>

                <div class="minorSubText">
                    
                    <h3 class="titleTextLittle">GENESIS</h3>
                    <p class="smallText">The "original" subsystem - full of OLD old alters who rarely front these days.</p>

                </div>
    
            </div></a>
    
            <a class="sysLink" href="/#"><div class="minorSubsys2">
    
                <div class="subIcon5"></div>
    
                <div class="minorSubText">
                    
                    <h3 class="titleTextLittle">UNKNOWN/OTHER</h3>
                    <p class="smallText">A random assortment of other alters that aren't sure where they belong in here.</p>

                </div>
    
            </div></a>

        </div>

    </div>

</div>


<style>

    /* Main CSS Start */

    h2 {
        margin: 0px;
    }

    h3 {
        margin: 0px;
    }

    p {
        margin: 0px;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 5px;
        font-size: large;
        text-align: center;
    }

    .sysLink, .sysLink:visited, .sysLink1, .sysLink1:visited  {
        text-decoration: none;
        color: #1c170c;
        width: 39%;
    }

    .sysLink1 {
        margin-right: 2%;
    }

    .descripStart {
        padding-top: 30px;
    }

    .mainBody {
        height: 100%;
        width: 100%;
        background-color: #e7e2d1;
        border-radius: 10px;
        box-shadow: 5px 5px #00000090;
        overflow: scroll;
    }

    .subsystems {
        margin-top: 20px;
    }

    .subsysLeft, .subsysRight {
        background-color: #fbbe4b;
        margin-bottom: 10px;
        display: flex;
        margin-left: auto;
        margin-right: auto;
        height: 125px;
        width: 80%;
        border-radius: 10px;
        overflow: auto;
        box-shadow: 4px 4px #00000090;
    }

    .subsysFlex {
        display: flex;
        justify-content: center;
    }

    .minorSubsys1, .minorSubsys2 {
        background-color: #fbbe4b;
        margin-bottom: 10px;
        display: flex;
        height: 125px;
        width: 100%;
        border-radius: 10px;
        overflow: auto;
        box-shadow: 4px 4px #00000090;
    }

    .titleTextLeft {
        margin-top: 10px;
        margin-left: 10px;
    }

    .titleTextRight {
        text-align: right;
        margin-top: 10px;
        margin-right: 10px;
    }

    .titleTextLittle {
        margin-top: 5px;
        margin-left: 5px;
    }

    .smallText {
        font-size: 16px;
        margin: 5px;
    }

    .subText {
        background-color: #ffecc9;
        height: 115px;
        width: 83%;
        margin: 5px;
        border-radius: 5px;
    }

    .minorSubText {
        background-color: #ffecc9;
        height: 115px;
        width: 65%;
        margin: 5px;
        border-radius: 5px;
    }

    .subIcon1, .subIcon2, .subIcon3, .subIcon4, .subIcon5 {
        background-color: white;
        background-size: contain;
        background-position: center;
        border-radius: 5px;
        height: 115px;
        width: 115px;
        margin: 5px;
    }

    .subIcon1 {
        background-image: url("/img/page_main/subsys_icons/tankmen_enjoyers_icon01.png");
    }

    .subIcon2 {
        background-image: url("/img/page_main/subsys_icons/blackrock.png");
    }

    .subIcon3 {
        background-image: url("/img/page_main/subsys_icons/avam.png");
    }

    .subIcon4 {
        background-image: url("/img/page_main/subsys_icons/genesis.png");
    }

    .subIcon5 {
        background-image: url("/img/page_main/subsys_icons/uk.png");
    }

    /* End main CSS - Start PHONE media query */

    @media (max-width: 500px) {

        p {
            font-size: small;
        }

        h2 {
            font-size: 18px;
        }

        h3 {
            font-size: 16px;
        }

        .descripStart {
            padding-top: 15px;
        }

        .mainBody {
            box-shadow: none;
            height: 78dvh;
        }

        .subsystems {
            margin-top: 10px;
        }

        .subsysLeft, .subsysRight {
            height: 115px;
            width: 90%;
            box-shadow: 3px 3px #00000090;
        }

        .sysLink1, .sysLink {
            width: 44%;
        }

        .minorSubsys1, .minorSubsys2 {
            height: auto;
            box-shadow: 3px 3px #00000090;
        }

        .titleTextLeft, .titleTextRight {
            margin-top: 5px;
        }

        .subText {
            height: auto;
            font-size: 14px;
        }

        .minorSubText {
            display: none;
        }

        .subIcon4, .subIcon5 {
            width: 100%;
            height: 180px;
        }

        .subIcon1, .subIcon2, .subIcon3 {
            height: 105px;
            min-width: 105px;
        }

    }

    /* End PHONE CSS - Start TABLET media query */
    
    @media (max-width: 1024px) and (min-width: 501px) {

        p {
            font-size: medium;
        }

        h2 {
            font-size: 20px;
        }

        h3 {
            font-size: 18px;
        }

        .descripStart {
            padding-top: 15px;
        }

        .mainBody {
            box-shadow: none;
            height: 78dvh;
        }

        .subsystems {
            margin-top: 10px;
        }

        .subsysLeft, .subsysRight {
            height: 115px;
            width: 90%;
            box-shadow: 3px 3px #00000090;
        }

        .sysLink1, .sysLink {
            width: 44%;
        }

        .minorSubsys1, .minorSubsys2 {
            height: auto;
            box-shadow: 3px 3px #00000090;
        }

        .titleTextLeft, .titleTextRight {
            margin-top: 5px;
        }

        .subText {
            height: auto;
            font-size: 14px;
        }

        .minorSubText {
            width: auto;
        }

        .subIcon4, .subIcon5 {
            max-height: 115px;
            min-width: 115px;
        }

        .subIcon1, .subIcon2, .subIcon3 {
            height: 105px;
            max-width: 105px;
        }

    }

</style>