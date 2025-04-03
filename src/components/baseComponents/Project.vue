<script setup lang="ts">
const props = defineProps<{projectName: string, imgLink: string, projectTitle:string, projectDesc:string}>()
</script>

<script lang="ts">
export default {
}
</script>

<template>
    <div class="project-container">
        <router-link :to="{name: projectName}" class="project-link">
            <img :src="props.imgLink" alt="project thumbnail" class="thumb" width="250" height="150">
            <p class="project-title">{{ props.projectTitle }}</p>
            <p class="project-desc">{{ props.projectDesc }}</p>
        </router-link>
    </div>
</template>

<style lang="scss">
.project-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 260px;
    border-radius: 20px;
    padding: 10px;
    outline: 3px solid #2E328E;
    background-color: rgba(0.0,0.0,0.0,0.3);
    transition: 0.5s ease all;
    margin-top: 30px;
}

.project-link {
    color: #fff;
    border-radius: 20px;
    text-decoration: none;   
    transition: 0.5s ease all;
}

.project-container:hover {
    outline: 1px solid #fff;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
}

.thumb {
    border-radius: 20px;    
    transition: .5s ease all;
}

.thumb:hover {
    outline: 1px solid #00eeff;
    box-shadow: 0 0 15px rgba(0, 149, 255, 0.5);
}

.project-title {
    font-weight: 700;
    color: #00eeff;
}

.project-desc{
    font-weight: 100;
}
</style>