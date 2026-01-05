<script setup>
const props = defineProps({name: String, link:String, iconClass: String});
</script>

<template>
    <RouterLink :to=link>
        <div class="web-link">
            <i :class="iconClass"></i>
            <p class="link-text">{{ name }}</p>
        </div>
    </RouterLink>
</template>

<style>
.link-container {
    width: 60%;
}
.web-link {
    padding-left: 30px;
    padding-right: 30px;
    width: 150px;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    color: #00eeff;
    font-size: 20px;
    margin-top: -30px;
    border-radius: 20px;
    transition: .3s ease all;
    margin-bottom: 30px;
    .link-text {
        margin-left: 20px;
    }

}

.web-link:hover {
    background-color: rgba(0,238,255,0.1);
    outline: 1px solid #00eeff;
    cursor: pointer;
    box-shadow: 0 0 15px rgba(0, 149, 255, 0.5);
}
</style>
