<template>
    <nav>
        <div id="nav-links">
            <div id="logo">
                Velogs
            </div>
            <button class="search-button">
                d
            </button>
            <button class="login-button">
                d
            </button>
            <styled-button @btc="buttonClicked">
                안녕하세요123
            </styled-button >
        </div>
    </nav>

</template>

<script>
import StyledButton from './Button/StyledButton.vue'

export default {
    components: {
        StyledButton
    },
    methods: {
        buttonClicked () {
            alert('hey');
        }
    }

}

</script>

<style scope>
    nav {
        width: 100%;
        height:50px;
        background: red;
    }

    #nav-links {
        display: flex;
        align-items: center;
        height:100%;
        max-width:1200px;
        margin: 0 auto;
        background:blue;
        padding: 0 1rem;
    }

    #logo {
        margin-right: auto;
        font-size: 1.4rem;
        font-weight: bold;
    }
</style>