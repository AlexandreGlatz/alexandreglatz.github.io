<script setup lang="ts">
</script>
<script lang="ts">
    export default {}
</script>

<template>
    <div class="presentation"><slot></slot></div>
</template>

<style lang="scss">
.presentation {
    background-color: #2E328E;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 70%;
    transition: all 0.3s ease 0s;
    outline: transparent 1px ;
    outline-color: rgba(0, 149, 255, 0.5);
}
</style>