<template>
    <header :class="{'scrolled-nav': scrollPosition}">
        <nav>
            <div class="branding">
                <img src="../assets/logox32.png" alt="main logo">
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><router-link class="link" :to="{name: 'Home'}">Home</router-link></li>
                <li><router-link class="link" :to="{name: ''}">About</router-link></li>
                <li><router-link class="link" :to="{name: ''}">Projects</router-link></li>
                <li><router-link class="link" :to="{name: ''}">Contact</router-link></li>
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active' : mobileNav}"></i>
            </div>
            <Transition name="mobile-nav">
                <ul v-show="!mobile" class="dropdown-nav">
                    <li><router-link class="link" :to="{name: 'Home'}">Home</router-link></li>
                    <li><router-link class="link" :to="{name: ''}">About</router-link></li>
                    <li><router-link class="link" :to="{name: ''}">Projects</router-link></li>
                    <li><router-link class="link" :to="{name: ''}">Contact</router-link></li>
                </ul>
            </Transition>
        </nav>
    </header>
</template>

<script>
export default {}
</script>

<style lang="scss"></style>