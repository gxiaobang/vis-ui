import Component from './main';

/* istanbul ignore next */
Component.install = function(Vue) {
  Vue.component(Component.name, Component);
};

Component.alert = () => {

}
// console.log(Component)

export default Component;
