var TextInput = {
  oninit: function(vnode) {
    vnode.state.focused = false;
  },

  view: function(vnode) {
    return m('div', {class: 'component text_input' + (vnode.state.focused ? ' active' : '')}, [
      m('div', {class: 'inset'}, [
        m('input', {
                     onfocus: this.on_focus.bind(this, vnode),
                     onfocusout: this.on_focus_out.bind(this, vnode),
                     value: vnode.attrs.placeholder
                   })
      ])
    ]);
  },

  on_focus: function(vnode) {
    vnode.state.focused = true;
  },

  on_focus_out: function(vnode) {
    vnode.state.focused = false;
  }
}
