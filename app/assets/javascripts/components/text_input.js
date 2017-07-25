var TextInput = {

  _stored_values: {},

  oninit: function(vnode) {
    vnode.state.focused = false;
  },

  oncreate: function(vnode) {
    if (TextInput._stored_values[vnode.attrs.name]) vnode.state.input.dom.value = TextInput._stored_values[vnode.attrs.name];
  },

  view: function(vnode) {
    return m('div', {class: 'component text_input' + (vnode.state.focused ? ' active' : '')}, [
      m('div', {class: 'label'}, [
        m('label', {}, vnode.attrs.label)
      ]),
      m('div', {class: 'inset'}, [
        vnode.state.input = m('input', {
                     onfocus: this.on_focus.bind(this, vnode),
                     onfocusout: this.on_focus_out.bind(this, vnode),
                     placeholder: vnode.attrs.placeholder,
                     name: vnode.attrs.name
                   })
      ])
    ]);
  },

  onremove: function(vnode) {
    TextInput._stored_values[vnode.attrs.name] = vnode.state.input.dom.value;
  },

  on_focus: function(vnode) {
    vnode.state.focused = true;
  },

  on_focus_out: function(vnode) {
    vnode.state.focused = false;
  }
}
