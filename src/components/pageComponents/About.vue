<script lang="ts">
import Article from "../baseComponents/Article.vue";
import Copyright from "../baseComponents/Copyright.vue";
import MyLink from "../baseComponents/Link.vue"
import Presentation from "../baseComponents/Presentation.vue";
  export default {
    name: 'About',
    components: {
        MyLink,
        Copyright,
        Article,
        Presentation
    }
  };
</script>
<template>
    <div class="about">
        <div class="info">
            <Presentation>Welcome, I am a Technical Artist and Game Developer</Presentation>
            <div class="job-header">
                <h1 class="job-title">Alexandre Glatz Technical Artist</h1>
                <div class="pic-quote">
                    <div class="profile-pic">
                        <img class="pic" src="../../assets/GLATZ Alexandre -2.png" alt="Profile Picture" width="150" height="150"/>
                    </div>
                    <q class="quote">We can't see details but we notice them missing</q>
                </div>
            </div>
            <Article title="Description">I specialize in artistic creation and in mastering I.T. development and mathematics.
                My skills include shaders, VFX creation and graphics libraries encapsulation like DirectX.
                My goal is to upgrade perfomances while keeping good visuals.<br>
                I am based in Lyon, France and I have been studying in I.T. and more specifically video games for 
                two years. I have then developed a passion for technical art as it is a perfect match between
                technics, mathematics and (of course) artistic creation.
            </Article>
            <h1 class="article-title">Timeline</h1>
            <p class="article-text">2023 - Today | <b>I.T. Student</b></p>
            <div class="side">
                <p class="desc">I am now working on a Bachelor's degree, I have project-based classes and I discovered and learned low-level coding. 
                </p>
            </div>
            <p class="article-text">2019 | <b>Internship Infographics</b></p>
            <div class="side">
                <p class="desc">Now that was it. my first experience in the video game industry. It is probably the best week I had and I discovered a lot of technologies.
                </p>
            </div>
            <p class="article-text">2012 - 2019 | <b>Middle-school</b></p>
            <div class="side">
                <p class="desc">In class I got along quite well with algorithmics and started to learn python and began being curious
                    about mainstream engines and loved creating my little games
                </p>
            </div>
            <div class="link-container">
                <p class="article-title">My links</p>
                <MyLink name="LinkedIn" link="https://www.linkedin.com/in/alexandre-glatz/" icon-class="fa-brands fa-linkedin"/>
                <MyLink name="Artstation" link="https://alexandreglatz.artstation.com/" icon-class="fa-brands fa-artstation"/>
                <MyLink name="Itch.io" link="https://strickster.itch.io/" icon-class="fa-brands fa-itch-io"/>
                <MyLink name="ShaderToy" link="https://www.shadertoy.com/user/ATTA" icon-class="fa-solid fa-cube"/>
                <MyLink name="Github" link="https://github.com/AlexandreGlatz" icon-class="fa-brands fa-github"/>
                <MyLink name="Instagram" link="https://www.instagram.com/alexandre_the_tech_artist/" icon-class="fa-brands fa-instagram"/>
            </div>
        </div>
    </div>
    <Copyright></Copyright>
</template>



<style>
.about{
    position: relative;
    display: block;
    transition: .5s ease all;
    width: 100%;
    font-size: 20px;
    font-weight: 700;
    margin: 0 auto;
    margin-bottom: 50px;
    margin-top: 200px;
    @media (min-width: 1000px) {
        max-width: 1000px;
        font-size: 17px;
    }
}
.info {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.presentation:hover {
    outline: solid 1px #2E328E;
    outline-color: rgba(0, 149, 255, 0.5);
    box-shadow: 0 0 15px rgba(0, 149, 255, 0.5);
}

.job-header {
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    width:60%;
    @media (min-width: 1000px) {
        max-width: 1000px;
        flex-direction: row;
    }
}

.job-title {
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 30px;
    font-style: italic;
    text-align: center;
    transition: .3s ease all;
    @media (min-width: 1000px) {
        font-size: 23px;
        margin-bottom: 80px;
        max-width: 1000px;
        flex-direction: row;
        text-align: left;
    }
}

.pic-quote {
    display: flexbox;
    align-items: center;
}
.profile-pic {
    margin-left: 50px;
    margin-top:   10px;
    margin-bottom: 20px;
    width: 150px;
    height : 150px;
    border-radius: 100%;
    border: solid 3px;
    border-color: aliceblue;
    transition: all 0.3s ease 0s;
    overflow: hidden;
    @media (min-width: 1000px) {
        margin-top:   40px;
        max-width: 1000px;
        flex-direction: row;
        text-align: left;
    }
}
.profile-pic:hover {
    outline: solid 1px #2E328E;
    outline-color: rgba(0, 149, 255, 0.5);
    box-shadow: 0 0 15px rgba(0, 149, 255, 0.5);
}
.pic {
    object-fit: cover;
    margin-top: 0px;
    margin-left: 0px;
}

.quote {
    right: 10px;
    float: right;
    text-align: center;
    font-weight: 400;
    font-style: italic;
    width: 250px;
}

.side {
    width:60%;
    border-left: 3px solid #2E328E;
    margin-left: 0px;
    margin-top: -10px;
    margin-bottom: 10px;
    .desc {
        font-size: 20px;
        font-weight: 100;
        margin-left: 50px;
        margin-top: 10px;
    }
    @media (min-width: 1000px) {
        max-width: 1000px;
    }
}


</style>
  