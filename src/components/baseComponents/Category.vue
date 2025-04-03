<script setup lang="ts">
const props = defineProps<{categoryName:string, tagName:Array<string>}>();
</script>

<script lang="ts">
export default {}
</script>

<template>
    <div class="category">
        <p class="category-name">{{categoryName}} : </p>
        <div class="label">
            <p class="label-text" v-for="item in tagName">{{ item }}</p>
        </div>
    </div>
</template>

<style lang="scss">
.category-name {
    margin-right: 10px;
}
.label {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    width: 50%

}

.label-text {   
    outline: 1px solid #00eeff;
    border-radius: 5px;
    padding: 5px;
    text-transform: uppercase;
    font-size: 10px;
    margin-right: 5px;
}

.category{
    display: flex;
    flex-direction: row;
}
</style>