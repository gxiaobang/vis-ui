/**
 * 国际化
 */

import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

export default {
  locale: 'zh-cn',
  messages: {
    'zh-cn': {
      common: require('./common/zh-cn')
    },
    'en': {
      common: require('./common/en')
    }
  }
}
