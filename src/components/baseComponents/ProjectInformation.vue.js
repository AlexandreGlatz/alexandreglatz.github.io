import Presentation from './Presentation.vue';
export default await (async () => {
    const props = defineProps();
    debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
    const __VLS_ctx = {};
    const __VLS_componentsOption = {
        Presentation
    };
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    /** @type {[typeof Presentation, typeof Presentation, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Presentation, new Presentation({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_2.slots.default;
    (__VLS_ctx.title);
    var __VLS_2;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "article-text" },
    });
    var __VLS_3 = {};
    /** @type {__VLS_StyleScopedClasses['article-text']} */ ;
    // @ts-ignore
    var __VLS_4 = __VLS_3;
    var __VLS_dollars;
    const __VLS_self = (await import('vue')).defineComponent({
        setup() {
            return {
                Presentation: Presentation,
            };
        },
        __typeProps: {},
        name: "ProjectInformation",
        components: {
            Presentation
        }
    });
    const __VLS_component = (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        __typeProps: {},
        name: "ProjectInformation",
        components: {
            Presentation
        }
    });
    return {};
})(); /* PartiallyEnd: #4569/main.vue */
