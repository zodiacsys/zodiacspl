

<div class="mainBody">

    <div class="out">
        <p class="outText">If this page is blank, we're probably switched out! Check again later.</p>
    </div>

    <div data-pkfronters-system="zodiac" data-pkfronters-type="card" data-pkfronters-options="dn"></div>
    <script src="https://irys.cc/fronters/pkfronters.js" async></script>

</div>


<style>

    p {
        margin: 0;
    }

    .mainBody {
        height: 100%;
        width: 100%;
        background-color: #e7e2d1;
        border-radius: 10px;
        box-shadow: 5px 5px #00000090;
        overflow: scroll;
    }

    .out {
        padding-top: 35px;
        padding-bottom: 20px;
        font-size: 25px;
    }

    .outText {
        text-align: center;
    }

    :global {

        .pkfronters--member-list--pronouns, .pkfronters--member-card--pronouns
        {
            word-break: break-word;
        }

        .pkfronters--member-list--pronouns::before, .pkfronters--member-card--pronouns::before
        {
            content: '\0020(';
        }

        .pkfronters--member-list--pronouns::after, .pkfronters--member-card--pronouns::after
        {
            content: ')\0020';
        }

        .pkfronters--member-card-container
        {
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            gap: 1rem;
            margin: 10px;
        }

        .pkfronters--member-card
        {
            display: flex;
            flex-flow: column wrap;
            align-items: center;
            max-width: 8em;
            color: black;
        }

        .pkfronters--member-card--avatar
        {
            min-width: 8rem;
            width: 8rem;
            min-height: 8rem;
            height: 8rem;
            margin: 0 0 0.5rem 0;
            border-radius: 4px;
            border: 4px solid transparent;
        }

        .pkfronters--member-card--name
        {
            text-align: center;
            color: black;
        }


    }
    
    
</style>