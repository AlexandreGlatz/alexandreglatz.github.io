<script lang="ts">
import Category from '../baseComponents/Category.vue';
import MyLink from '../baseComponents/Link.vue';
import ProjectInformation from '../baseComponents/ProjectInformation.vue';

const engine:Array<string> = ["Unity"]
const tags:Array<string> = ["Unity", "2D", "farm", "game", "project"]
export default{
    name:'Aniseeds',
    components: {
        Category,
        ProjectInformation,
        MyLink
    },
    data() {
        return {
            engine,
            tags
        }
    }
}
</script>

<template>
    <div class="project-page">
        <div class="project-details">
            <div class="details-text">
                <ProjectInformation title="Aniseeds">lorem jiegfg jifjez h uhru iui hrui hui hr uihrui hrui huir huih rui ruih rui hrui rui rhui rui rui uir uir hiur huir uir huir h</ProjectInformation>
            </div>
            <div class="details-media">
                <iframe class="trailer" width="350" height="197" src="https://www.youtube.com/embed/tgbNymZ7vqY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <img src="../../assets/Placeholder.png" alt="details-image" class="details-img" width="350" height="197"> 
                <img src="../../assets/Placeholder.png" alt="details-image" class="details-img" width="350" height="197"> 
            </div>
        </div>
        <div class="bottom">
            <p class="link-pres">Also on :</p>
            <div class="link-container">
                <MyLink name="Itch.io" link="https://strickster.itch.io/aniseeds" icon-class="fa-brands fa-itch-io"/>
                <MyLink name="Github" link="https://github.com/AlexandreGlatz/GC_Unity" icon-class="fa-brands fa-github"/>
            </div>
            <Category category-name="Engine" :tag-name="engine"/>
            <Category category-name="Tags" :tag-name="tags"/> 
        </div>
    </div>
</template>

<style lang="scss">
.project-page {
    position: relative;
    display: block;
    font-size: 20px;
    font-weight: 700;
    width: 90%;
    margin: 0 auto;
    margin-bottom: -50px;
    margin-top: 200px;
    border-radius: 10px;
    background-color: rgba(0.0,0.0,0.0,0.3);
    padding: 20px;
    padding-left: 15px;
    transition: .5s ease all;
    @media (min-width: 1000px) {
        max-width: 1000px;
        font-size: 17px;
        width: 70%;

    }
}

.bottom {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
}

.project-details {
    display: flex;
    flex-direction: column;
    @media (min-width: 1000px) {
        max-width: 1000px;
        font-size: 17px;
        display: flex;
        flex-direction: row;
    }
}
.details-text {
    margin-left: -20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.details-media {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    align-items: center;
    @media (min-width: 1000px) {
        max-width: 1000px;
        font-size: 17px;
        display: flex;
        flex-direction: column;
    }
}

.details-img {
    margin-top: 50px;
}

.trailer {
    margin-top: 20px;
}

.link-pres {
    margin-bottom: 30px;
}

.article-text {
    text-align: center;
    @media (min-width: 1000px) {
        max-width: 1000px;
        text-align: left;
    }
}
.article-title {
    text-align: center;
    @media (min-width: 1000px) {
        max-width: 1000px;
        text-align: left;
    }
}

</style>