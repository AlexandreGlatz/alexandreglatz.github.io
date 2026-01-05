<script setup>
import Navigation from './components/Navigation.vue';
</script>

<template>
    <Navigation />
    <main>
        <router-view v-slot="{ Component }">
            <transition name="slide-fade">
                <component :is="Component" />
            </transition>
        </router-view>
    </main>
</template>

