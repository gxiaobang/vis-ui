export default (vm, name, loop = Infinity) => {
  let parent = vm.$parent || null;
  let num = 1;
  while (parent) {
    if (parent.$options._componentTag == name || ++num > loop) {
      break;
    }
    parent = parent.$parent;
  }

  return parent;
}
