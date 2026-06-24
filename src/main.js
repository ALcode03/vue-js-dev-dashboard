// import the main function to create the vue application 
import { createApp } from 'vue';
// import the main App component
import App from './App.vue';
//import the vue application router
import router from  "./router/index.js";
// import router from "./router"; is the shortcut of import router from  "./router/index.js";
import "./styles/App.css";

/* Create the vue application inside the HTML element 
*with  the Id 'app' and use the vue.js router
*/

// createApp(App).use(router.mount('#app')

createApp(App)
    .use(router)
    .mount('#app');
