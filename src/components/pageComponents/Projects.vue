<script lang="ts">
import Copyright from "../baseComponents/Copyright.vue";
import MyProject from "../baseComponents/Project.vue";
import engine from "@/assets/Projects/Engine/Engine.png";
import read from "@/assets/Projects/Read/read.png";
import aniseeds from "@/assets/Projects/Aniseeds/aniseedIcon1.png";
import icf from "@/assets/Projects/ICF/ICF.webp";
  export default {
    name:'Project',
    components: {
        MyProject,
        Copyright
    },
    data() {
        return {
            engine,read,aniseeds,icf
        }
    }
  };
</script>

<template>
    <div class="projects">
        <MyProject project-name="Engine" :img-link="engine" project-title="DirectX12 Engine" project-desc="DirectX12 Engine and encapuslation from scratch"/>
        <MyProject project-name="ICF" :img-link="icf" project-title="I cast fireball (WIP)" project-desc="Unreal Engine VR project based on RPG adventures and shooting"/>
        <MyProject project-name="Read" :img-link="read" project-title="Read" project-desc="TIC-80 Project for Chill fall Game Jam 2023"/>
        <MyProject project-name="Aniseeds" :img-link="aniseeds" project-title="Aniseeds" project-desc="Unity 2D Projects with farming and economy"/>
    </div>
    <Copyright/>
</template>

<style lang="scss">
html {
    overflow-y: scroll;
}
.projects{
    position: relative;
    flex-wrap: wrap;
    transition: .5s ease all;
    display: flex;
    flex-direction: column;
    width: 90%;
    font-size: 20px;
    font-weight: 700;
    margin: 0 auto;
    margin-top: 200px;
    margin-bottom: 50px;
    align-items: center;
    @media (min-width: 1000px) {
        max-width: 1000px;
        font-size: 17px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 60%;
    }
}

footer {
    margin-top: 200px;
}
</style>