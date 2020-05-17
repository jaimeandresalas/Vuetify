import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import ar from 'vuetify/es5/locale/ar';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
    lang: {
      locales: { ar },
      current: 'ar',
    },
  icons: {
    iconfont: 'fa4',
  },
});
