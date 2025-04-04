import Article from "../baseComponents/Article.vue";
import Copyright from "../baseComponents/Copyright.vue";
import MyLink from "../baseComponents/Link.vue";
import Presentation from "../baseComponents/Presentation.vue";
export default (await import('vue')).defineComponent({
    name: 'About',
    components: {
        MyLink,
        Copyright,
        Article,
        Presentation
    }
});
const __VLS_ctx = {};
const __VLS_componentsOption = {
    MyLink,
    Copyright,
    Article,
    Presentation
};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "about" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "info" },
});
const __VLS_0 = {}.Presentation;
/** @type {[typeof __VLS_components.Presentation, typeof __VLS_components.Presentation, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "job-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "job-title" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "pic-quote" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "profile-pic" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    ...{ class: "pic" },
    src: "../../assets/GLATZ Alexandre -2.png",
    alt: "Profile Picture",
    width: "150",
    height: "150",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.q, __VLS_intrinsicElements.q)({
    ...{ class: "quote" },
});
const __VLS_4 = {}.Article;
/** @type {[typeof __VLS_components.Article, typeof __VLS_components.Article, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    title: "Description",
}));
const __VLS_6 = __VLS_5({
    title: "Description",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
var __VLS_7;
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "article-title" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "article-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "side" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "desc" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "article-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "side" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "desc" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "article-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "side" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "desc" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "link-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "article-title" },
});
const __VLS_8 = {}.MyLink;
/** @type {[typeof __VLS_components.MyLink, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/alexandre-glatz/",
    iconClass: "fa-brands fa-linkedin",
}));
const __VLS_10 = __VLS_9({
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/alexandre-glatz/",
    iconClass: "fa-brands fa-linkedin",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
const __VLS_12 = {}.MyLink;
/** @type {[typeof __VLS_components.MyLink, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    name: "Artstation",
    link: "https://alexandreglatz.artstation.com/",
    iconClass: "fa-brands fa-artstation",
}));
const __VLS_14 = __VLS_13({
    name: "Artstation",
    link: "https://alexandreglatz.artstation.com/",
    iconClass: "fa-brands fa-artstation",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
const __VLS_16 = {}.MyLink;
/** @type {[typeof __VLS_components.MyLink, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    name: "Itch.io",
    link: "https://strickster.itch.io/",
    iconClass: "fa-brands fa-itch-io",
}));
const __VLS_18 = __VLS_17({
    name: "Itch.io",
    link: "https://strickster.itch.io/",
    iconClass: "fa-brands fa-itch-io",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
const __VLS_20 = {}.MyLink;
/** @type {[typeof __VLS_components.MyLink, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    name: "ShaderToy",
    link: "https://www.shadertoy.com/user/ATTA",
    iconClass: "fa-solid fa-cube",
}));
const __VLS_22 = __VLS_21({
    name: "ShaderToy",
    link: "https://www.shadertoy.com/user/ATTA",
    iconClass: "fa-solid fa-cube",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
const __VLS_24 = {}.MyLink;
/** @type {[typeof __VLS_components.MyLink, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    name: "Github",
    link: "https://github.com/AlexandreGlatz",
    iconClass: "fa-brands fa-github",
}));
const __VLS_26 = __VLS_25({
    name: "Github",
    link: "https://github.com/AlexandreGlatz",
    iconClass: "fa-brands fa-github",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
const __VLS_28 = {}.MyLink;
/** @type {[typeof __VLS_components.MyLink, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    name: "Instagram",
    link: "https://www.instagram.com/alexandre_the_tech_artist/",
    iconClass: "fa-brands fa-instagram",
}));
const __VLS_30 = __VLS_29({
    name: "Instagram",
    link: "https://www.instagram.com/alexandre_the_tech_artist/",
    iconClass: "fa-brands fa-instagram",
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
const __VLS_32 = {}.Copyright;
/** @type {[typeof __VLS_components.Copyright, typeof __VLS_components.Copyright, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({}));
const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
/** @type {__VLS_StyleScopedClasses['about']} */ ;
/** @type {__VLS_StyleScopedClasses['info']} */ ;
/** @type {__VLS_StyleScopedClasses['job-header']} */ ;
/** @type {__VLS_StyleScopedClasses['job-title']} */ ;
/** @type {__VLS_StyleScopedClasses['pic-quote']} */ ;
/** @type {__VLS_StyleScopedClasses['profile-pic']} */ ;
/** @type {__VLS_StyleScopedClasses['pic']} */ ;
/** @type {__VLS_StyleScopedClasses['quote']} */ ;
/** @type {__VLS_StyleScopedClasses['article-title']} */ ;
/** @type {__VLS_StyleScopedClasses['article-text']} */ ;
/** @type {__VLS_StyleScopedClasses['side']} */ ;
/** @type {__VLS_StyleScopedClasses['desc']} */ ;
/** @type {__VLS_StyleScopedClasses['article-text']} */ ;
/** @type {__VLS_StyleScopedClasses['side']} */ ;
/** @type {__VLS_StyleScopedClasses['desc']} */ ;
/** @type {__VLS_StyleScopedClasses['article-text']} */ ;
/** @type {__VLS_StyleScopedClasses['side']} */ ;
/** @type {__VLS_StyleScopedClasses['desc']} */ ;
/** @type {__VLS_StyleScopedClasses['link-container']} */ ;
/** @type {__VLS_StyleScopedClasses['article-title']} */ ;
var __VLS_dollars;
let __VLS_self;
