<script setup>
defineProps({
  title: String,
})
</script>

<template>
    <h1 class="article-title">{{ title }}</h1>
        <p class="article-text">
            <slot></slot>
        </p>
</template>

<style>

.article-title {
    width: 70%;
    text-align: left;
    font-size: 30px;
}

.article-text {
    margin-top: 5px;
    font-weight: 200;
    font-size: 20px;
    width: 60%;
    text-align: left;
}
</style>
