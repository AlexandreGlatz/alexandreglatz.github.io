<template>
    <div class="project-display" :style="cssProps">
        <div class="project-summary">
            <div class="project-title">
                <h2><slot></slot></h2>
                <h3>{{ desc }}</h3>
            </div>
            <MyRouterLink name="See More" :link=url icon-class="fa-solid fa-magnifying-glass"/>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import MyRouterLink from './RouterLink.vue'
const props = defineProps({
  desc: String,
  src: String,
  url: String,
});

const cssProps = computed(() => ({
  '--bg-image': `url("${props.src}")`,
}));
</script>

<style >
    .thumb
    {
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    .project-display
    {
        scroll-snap-align: start;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: end;
        justify-content: space-between;
        gap: 50px;
        color: #fff;
        background-image: var(--bg-image);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .project-summary
    {
        margin-left: 50px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 20px;
    }
    .project-title
    {
        text-shadow: -2px -2px 0 #000, 2px -2px 0 #000,
          -2px 2px 0 #000, 2px 2px 0 #000; 
        color: white;
        z-index: 10;
        font-size: 20px;
    }
    .scroll-buttons
    {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-right: 20px;
        button {
            font-size : 30px;
            background: transparent;
            border: none;
        }
        button:hover {
            cursor: pointer;
        }
    }

</style>
