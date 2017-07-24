var TextInput = {
  view: function(vnode) {
    return m('div', {class: 'component text_input'}, [
      m('input', {onfocus: m.withAttr("value", this.on_focus), value: 'derp'})
    ]);
  },

  on_focus: function(e, d) {
    console.log(e);
    console.log(d);
  }
}
