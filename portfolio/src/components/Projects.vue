<template>
    <div id="projects">
        <ProjectDisplay desc="Unity game made in 2 weeks, with famring and economy" url="/projects/aniseeds" src="/src/assets/Projects/Aniseeds/aniseeds3.png">Aniseeds</ProjectDisplay>
        <ProjectDisplay desc="DirectX12 Engine made in school, encapsulation from scratch" url="/projects/engine" src="/src/assets/Projects/Engine/Engine.png">DirectX12 Engine</ProjectDisplay>
        <ProjectDisplay desc="Jam game made in 2 days for Chill Game Jam 2023" url="/projects/read" src="/src/assets/Projects/Read/read.png">Read</ProjectDisplay>
    </div>
</template>

<script setup>
    import ProjectDisplay from './ProjectDisplay.vue'
</script>

<style>
    #projects
    {
        width: 100%;
        height: 100vh;
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
    }
</style>
