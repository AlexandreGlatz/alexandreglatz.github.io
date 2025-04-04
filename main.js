import { createApp } from 'vue';
import '/src/style.css';
import App from './src/App.vue';
import router from './src/router';
import store from './src/store';
createApp(App).use(store).use(router).mount('#app');
