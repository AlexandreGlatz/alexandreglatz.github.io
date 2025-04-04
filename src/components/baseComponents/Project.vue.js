export default await (async () => {
    const props = defineProps();
    debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "project-container" },
    });
    const __VLS_0 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        to: ({ name: __VLS_ctx.projectName }),
        ...{ class: "project-link" },
    }));
    const __VLS_2 = __VLS_1({
        to: ({ name: __VLS_ctx.projectName }),
        ...{ class: "project-link" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_3.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: (props.imgLink),
        alt: "project thumbnail",
        ...{ class: "thumb" },
        width: "250",
        height: "150",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "project-title" },
    });
    (props.projectTitle);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "project-desc" },
    });
    (props.projectDesc);
    var __VLS_3;
    /** @type {__VLS_StyleScopedClasses['project-container']} */ ;
    /** @type {__VLS_StyleScopedClasses['project-link']} */ ;
    /** @type {__VLS_StyleScopedClasses['thumb']} */ ;
    /** @type {__VLS_StyleScopedClasses['project-title']} */ ;
    /** @type {__VLS_StyleScopedClasses['project-desc']} */ ;
    var __VLS_dollars;
    const __VLS_self = (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        __typeProps: {},
    });
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        __typeProps: {},
    });
})(); /* PartiallyEnd: #4569/main.vue */
