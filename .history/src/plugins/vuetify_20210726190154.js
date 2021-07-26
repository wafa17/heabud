import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#65D1AA",
                secondary: "#1A2E35",
                accent: "#93EACA"
            }
        }
    }
});
