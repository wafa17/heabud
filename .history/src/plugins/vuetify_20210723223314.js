import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#00A86B",
                secondary: "#171b34",
                accent: "#93EACA"
            }
        }
    }
});
