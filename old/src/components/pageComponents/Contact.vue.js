import axios from "axios";
import Copyright from "../baseComponents/Copyright.vue";
export default (await import('vue')).defineComponent({
    data() {
        return {
            name: '',
            email: '',
            subject: '',
            message: '',
            info: '',
            infoClass: '',
            infoStyle: {}
        };
    },
    methods: {
        async sendEmail() {
            try {
                const response = await axios.post('Contact.php', {
                    name: this.name,
                    email: this.email,
                    subject: this.subject,
                    message: this.message
                });
                if (response.data.status === 'success') {
                    this.info = response.data.message;
                    this.infoClass = 'request_message success';
                    this.infoStyle = {
                        backgroundColor: '#0088a9',
                        boxShadow: '0 0 8px rgba(5, 167, 208, 0.5)'
                    };
                }
                else {
                    this.info = response.data.message;
                    this.infoClass = 'request_message error';
                    this.infoStyle = {
                        backgroundColor: '#a90000',
                        boxShadow: '0 0 8px rgba(208, 5, 5, 0.5)'
                    };
                }
            }
            catch (error) {
                this.info = 'An error occurred while sending the message.';
                this.infoClass = 'request_message error';
                this.infoStyle = {
                    backgroundColor: '#a90000',
                    boxShadow: '0 0 8px rgba(208, 5, 5, 0.5)'
                };
            }
        }
    },
    components: {
        Copyright
    }
});
const __VLS_ctx = {};
const __VLS_componentsOption = {
    Copyright
};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    id: "contact_form",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
    ...{ onSubmit: (__VLS_ctx.sendEmail) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
    type: "text",
    value: (__VLS_ctx.name),
    placeholder: "John",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
    type: "email",
    placeholder: "example@domain.tld",
});
(__VLS_ctx.email);
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({
    type: "text",
    value: (__VLS_ctx.subject),
    placeholder: "About",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
    value: (__VLS_ctx.message),
    cols: "30",
    rows: "10",
    placeholder: "Message here",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    id: "send_btn",
    type: "submit",
});
if (__VLS_ctx.info) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: (__VLS_ctx.infoClass) },
        ...{ style: (__VLS_ctx.infoStyle) },
    });
    (__VLS_ctx.info);
}
const __VLS_0 = {}.Copyright;
/** @type {[typeof __VLS_components.Copyright, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_dollars;
let __VLS_self;
