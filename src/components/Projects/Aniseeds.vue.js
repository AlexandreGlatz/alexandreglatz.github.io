import Category from '../baseComponents/Category.vue';
import Copyright from '../baseComponents/Copyright.vue';
import MyLink from '../baseComponents/Link.vue';
import ProjectInformation from '../baseComponents/ProjectInformation.vue';
const languages = ["C#"];
const engine = ["Unity"];
const tags = ["Unity", "2D", "farm", "game", "project", "C#", "UnityEngine"];
export default (await import('vue')).defineComponent({
    name: 'Aniseeds',
    components: {
        Category,
        ProjectInformation,
        MyLink,
        Copyright
    },
    data() {
        return {
            engine,
            tags,
            languages
        };
    }
});
const __VLS_ctx = {};
const __VLS_componentsOption = {
    Category,
    ProjectInformation,
    MyLink,
    Copyright
};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "project-page" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "project-details" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "details-text" },
});
const __VLS_0 = {}.ProjectInformation;
/** @type {[typeof __VLS_components.ProjectInformation, typeof __VLS_components.ProjectInformation, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    title: "Aniseeds",
}));
const __VLS_2 = __VLS_1({
    title: "Aniseeds",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "details-media" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "../../assets/Projects/Aniseeds/aniseeds1.png",
    alt: "details-image",
    ...{ class: "details-img" },
    width: "350",
    height: "197",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "../../assets/Projects/Aniseeds/aniseeds4.png",
    alt: "details-image",
    ...{ class: "details-img" },
    width: "350",
    height: "197",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "bottom" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "link-pres" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "link-container" },
});
const __VLS_4 = {}.MyLink;
/** @type {[typeof __VLS_components.MyLink, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    name: "Itch.io",
    link: "https://strickster.itch.io/aniseeds",
    iconClass: "fa-brands fa-itch-io",
}));
const __VLS_6 = __VLS_5({
    name: "Itch.io",
    link: "https://strickster.itch.io/aniseeds",
    iconClass: "fa-brands fa-itch-io",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_8 = {}.MyLink;
/** @type {[typeof __VLS_components.MyLink, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    name: "Github",
    link: "https://github.com/AlexandreGlatz/GC_Unity",
    iconClass: "fa-brands fa-github",
}));
const __VLS_10 = __VLS_9({
    name: "Github",
    link: "https://github.com/AlexandreGlatz/GC_Unity",
    iconClass: "fa-brands fa-github",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
const __VLS_12 = {}.Category;
/** @type {[typeof __VLS_components.Category, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    categoryName: "Languages",
    tagName: (__VLS_ctx.languages),
}));
const __VLS_14 = __VLS_13({
    categoryName: "Languages",
    tagName: (__VLS_ctx.languages),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
const __VLS_16 = {}.Category;
/** @type {[typeof __VLS_components.Category, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    categoryName: "Engine",
    tagName: (__VLS_ctx.engine),
}));
const __VLS_18 = __VLS_17({
    categoryName: "Engine",
    tagName: (__VLS_ctx.engine),
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
const __VLS_20 = {}.Category;
/** @type {[typeof __VLS_components.Category, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    categoryName: "Tags",
    tagName: (__VLS_ctx.tags),
}));
const __VLS_22 = __VLS_21({
    categoryName: "Tags",
    tagName: (__VLS_ctx.tags),
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
const __VLS_24 = {}.Copyright;
/** @type {[typeof __VLS_components.Copyright, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
/** @type {__VLS_StyleScopedClasses['project-page']} */ ;
/** @type {__VLS_StyleScopedClasses['project-details']} */ ;
/** @type {__VLS_StyleScopedClasses['details-text']} */ ;
/** @type {__VLS_StyleScopedClasses['details-media']} */ ;
/** @type {__VLS_StyleScopedClasses['details-img']} */ ;
/** @type {__VLS_StyleScopedClasses['details-img']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom']} */ ;
/** @type {__VLS_StyleScopedClasses['link-pres']} */ ;
/** @type {__VLS_StyleScopedClasses['link-container']} */ ;
var __VLS_dollars;
let __VLS_self;
