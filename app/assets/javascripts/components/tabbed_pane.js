var TabbedPane = {
  oninit: function(vnode) {
    vnode.state.tab_index = 0;
    vnode.state.disabled = false;
  },

  view: function(vnode) {
    var tab_names = Object.keys(vnode.attrs.tabs);
    var tabs = tab_names.map(function(tab_name) { return vnode.attrs.tabs[tab_name]; });

    return m('div', {class: 'component tabbed_pane'}, [
      m('div', {class: 'header'}, this.render_tab_buttons(this, vnode, tab_names)),
      m('div', {class: 'slider_container'}, this.render_tabs(vnode, tabs))
    ]);
  },

  render_tab_buttons: function(self, vnode, tab_names) {
    return tab_names.map(function(tab_name, index) {
      return m('div', {class: 'tab_button', onclick: self.set_tab_index.bind(self, vnode, index)},
        m('div', {class: 'tab_button_text'}, tab_name)
      )
    });
  },

  render_tabs: function(vnode, tabs) {
    return [
      m('div', {class: 'slider', style: {'left': -(vnode.state.tab_index * 100) + '%'}},
        tabs.map(function(tab, index) {
          return m('div', {class: 'tab_container'}, vnode.state.tab_index == index ? m(Tab, {}, tab) : [] );
        })
      )
    ];
  },

  set_tab_index: function(vnode, index) {
    if (!vnode.state.disabled) {
      vnode.state.disabled = true;
      vnode.state.tab_index = index;
      setTimeout(function() { vnode.state.disabled = false; }, 1000);
    }
  }
}
