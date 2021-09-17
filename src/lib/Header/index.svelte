<script>
    import detailsStore from "src/Store/details.store";

    let isNavOpen = false;

</script>

<header class="header">
    <nav class="navbar flex justify-between items-center pt-[1rem] pl-[1rem]">
        <a href="#topper" class="nav-logo flex">
            <img class="w-10 object-contain" src={$detailsStore.logo.linux} alt="logo"/>
        <h1 class="text-yellow-600 primary-font font-semibold "> {$detailsStore.name}</h1>
        </a>
        <ul
            class="nav-menu flex justify-between items-center"
            class:active={isNavOpen}
        >
            {#each $detailsStore.navitems as { href, name }, i (i)}
                <li class="nav-item" on:click={() => (isNavOpen = false)}>
                    <a {href} class="nav-link">{name}</a>
                </li>
            {/each}
        </ul>
        <div
            on:click={() => (isNavOpen = !isNavOpen)}
            class="hamburger"
            class:active={isNavOpen}
        >
            <span class="bar" />
            <span class="bar" />
            <span class="bar" />
        </div>
    </nav>
</header>

<style global>
    .header {
        border-bottom: 1px solid #e2e8f0;
    }
    .nav-item {
        margin-left: 2rem;
    }
    .nav-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav-item {
        margin-left: 5rem;
    }

    .nav-link {
        font-size: 1rem;
        font-weight: 400;
        color: #475569;
    }

    .nav-link:hover {
        color: #482ff7;
    }

    .nav-logo {
        font-size: 1.4rem;
        font-weight: 500;
        color: #482ff7;
    }
    .hamburger {
        display: none;
    }

    .bar {
        display: block;
        width : 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: #101010;
    }

    @media only screen and (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 3rem;
            flex-direction: column;
            background-color: #fff;
            width: 50%;
            border-radius: 10px;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
        }

        .nav-menu.active {
            left: 0;
            background-color: white;
        }

        .nav-item {
            margin: 0.5rem 0;
        }

        .hamburger {
            display: block;
            cursor: pointer;
        }
    }

    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }

</style>
