var Tab = {
  view: function(vnode) {
    return m('div', {class: 'component tab'},
      vnode.children
    );
  },

  onbeforeremove: function(vnode) {
    return new Promise(function(resolve) {
      setTimeout(resolve, 1000)
    });
  },
}
