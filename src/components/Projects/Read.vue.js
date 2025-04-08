import Category from '../baseComponents/Category.vue';
import MyLink from '../baseComponents/Link.vue';
import ProjectInformation from '../baseComponents/ProjectInformation.vue';
const engine = ["Unity"];
const tags = ["Unity", "2D", "farm", "game", "project"];
export default (await import('vue')).defineComponent({
    name: 'Aniseeds',
    components: {
        Category,
        ProjectInformation,
        MyLink
    },
    data() {
        return {
            engine,
            tags
        };
    }
});
const __VLS_ctx = {};
const __VLS_componentsOption = {
    Category,
    ProjectInformation,
    MyLink
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
    title: "Read",
}));
const __VLS_2 = __VLS_1({
    title: "Read",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.q, __VLS_intrinsicElements.q)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.br, __VLS_intrinsicElements.br)({});
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "details-media" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.iframe, __VLS_intrinsicElements.iframe)({
    ...{ class: "trailer" },
    width: "350",
    height: "197",
    src: "https://www.youtube.com/embed/tgbNymZ7vqY",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true,
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "../../assets/Projects/Read/read1.png",
    alt: "details-image",
    ...{ class: "details-img" },
    width: "350",
    height: "197",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "../../assets/Projects/Read/read2.png",
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
    link: "https://strickster.itch.io/read",
    iconClass: "fa-brands fa-itch-io",
}));
const __VLS_6 = __VLS_5({
    name: "Itch.io",
    link: "https://strickster.itch.io/read",
    iconClass: "fa-brands fa-itch-io",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_8 = {}.Category;
/** @type {[typeof __VLS_components.Category, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    categoryName: "Engine",
    tagName: (__VLS_ctx.engine),
}));
const __VLS_10 = __VLS_9({
    categoryName: "Engine",
    tagName: (__VLS_ctx.engine),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
const __VLS_12 = {}.Category;
/** @type {[typeof __VLS_components.Category, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    categoryName: "Tags",
    tagName: (__VLS_ctx.tags),
}));
const __VLS_14 = __VLS_13({
    categoryName: "Tags",
    tagName: (__VLS_ctx.tags),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
/** @type {__VLS_StyleScopedClasses['project-page']} */ ;
/** @type {__VLS_StyleScopedClasses['project-details']} */ ;
/** @type {__VLS_StyleScopedClasses['details-text']} */ ;
/** @type {__VLS_StyleScopedClasses['details-media']} */ ;
/** @type {__VLS_StyleScopedClasses['trailer']} */ ;
/** @type {__VLS_StyleScopedClasses['details-img']} */ ;
/** @type {__VLS_StyleScopedClasses['details-img']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom']} */ ;
/** @type {__VLS_StyleScopedClasses['link-pres']} */ ;
/** @type {__VLS_StyleScopedClasses['link-container']} */ ;
var __VLS_dollars;
let __VLS_self;
