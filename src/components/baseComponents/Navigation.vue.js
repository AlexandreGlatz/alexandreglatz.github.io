export default (await import('vue')).defineComponent({
    name: "navigation",
    data() {
        return {
            mobile: true,
            mobileNav: true,
            windowWidth: 1440,
        };
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    },
    methods: {
        toggleMobileNavFunc() {
            this.mobileNav = !this.mobileNav;
        },
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        }
    }
});
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "header-bg" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "branding" },
});
const __VLS_0 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    to: ({ name: 'About' }),
}));
const __VLS_2 = __VLS_1({
    to: ({ name: 'About' }),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
    src: "../../assets/logox64.png",
    alt: "main logo",
    width: "64",
    height: "64",
});
var __VLS_3;
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "navigation" },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (!__VLS_ctx.mobile) }, null, null);
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_4 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    ...{ class: "link" },
    to: ({ name: 'About' }),
}));
const __VLS_6 = __VLS_5({
    ...{ class: "link" },
    to: ({ name: 'About' }),
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
var __VLS_7;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_8 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    ...{ class: "link" },
    to: ({ name: 'Projects' }),
}));
const __VLS_10 = __VLS_9({
    ...{ class: "link" },
    to: ({ name: 'Projects' }),
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
var __VLS_11;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_12 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
    ...{ class: "link" },
    to: ({ name: '' }),
}));
const __VLS_14 = __VLS_13({
    ...{ class: "link" },
    to: ({ name: '' }),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
var __VLS_15;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_16 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    ...{ class: "link-contact" },
    to: ({ name: 'Contact' }),
}));
const __VLS_18 = __VLS_17({
    ...{ class: "link-contact" },
    to: ({ name: 'Contact' }),
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
var __VLS_19;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "icon" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
    ...{ onClick: (__VLS_ctx.toggleMobileNavFunc) },
    ...{ class: "fa-solid fa-bars" },
    ...{ class: ({ 'icon-active fa-solid fa-bars-staggered': __VLS_ctx.mobileNav }) },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.mobile) }, null, null);
const __VLS_20 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    name: "mobile-nav",
    persisted: true,
}));
const __VLS_22 = __VLS_21({
    name: "mobile-nav",
    persisted: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
__VLS_23.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
    ...{ class: "dropdown-nav" },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.mobileNav) }, null, null);
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_24 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    ...{ class: "link" },
    to: ({ name: 'About' }),
}));
const __VLS_26 = __VLS_25({
    ...{ class: "link" },
    to: ({ name: 'About' }),
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_27.slots.default;
var __VLS_27;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_28 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    ...{ class: "link" },
    to: ({ name: 'Projects' }),
}));
const __VLS_30 = __VLS_29({
    ...{ class: "link" },
    to: ({ name: 'Projects' }),
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_31.slots.default;
var __VLS_31;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_32 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    ...{ class: "link" },
    to: ({ name: '' }),
}));
const __VLS_34 = __VLS_33({
    ...{ class: "link" },
    to: ({ name: '' }),
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
__VLS_35.slots.default;
var __VLS_35;
__VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
const __VLS_36 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    ...{ class: "link-contact" },
    to: ({ name: 'Contact' }),
}));
const __VLS_38 = __VLS_37({
    ...{ class: "link-contact" },
    to: ({ name: 'Contact' }),
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
__VLS_39.slots.default;
var __VLS_39;
var __VLS_23;
/** @type {__VLS_StyleScopedClasses['header-bg']} */ ;
/** @type {__VLS_StyleScopedClasses['branding']} */ ;
/** @type {__VLS_StyleScopedClasses['navigation']} */ ;
/** @type {__VLS_StyleScopedClasses['link']} */ ;
/** @type {__VLS_StyleScopedClasses['link']} */ ;
/** @type {__VLS_StyleScopedClasses['link']} */ ;
/** @type {__VLS_StyleScopedClasses['link-contact']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-bars']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-active']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-bars-staggered']} */ ;
/** @type {__VLS_StyleScopedClasses['dropdown-nav']} */ ;
/** @type {__VLS_StyleScopedClasses['link']} */ ;
/** @type {__VLS_StyleScopedClasses['link']} */ ;
/** @type {__VLS_StyleScopedClasses['link']} */ ;
/** @type {__VLS_StyleScopedClasses['link-contact']} */ ;
var __VLS_dollars;
let __VLS_self;
