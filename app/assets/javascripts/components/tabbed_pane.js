var TabbedPane = {
  oninit: function(vnode) {
    vnode.state.tab_index = 0;
  },

  view: function(vnode) {
    var tab_names = Object.keys(vnode.attrs.tabs);
    var tabs = tab_names.map(function(tab_name) { return vnode.attrs.tabs[tab_name]; });

    return m('div', {class: 'component tabbed_pane'}, [
      m('div', {class: 'header'}, this.render_tab_buttons(vnode, tab_names)),
      m('div', {class: 'slider_container'}, this.render_tabs(vnode, tabs))
    ]);
  },

  render_tab_buttons: function(vnode, tab_names) {
    return tab_names.map(function(tab_name, index) {
      return m('div', {class: 'tab_button', onclick: function() { vnode.state.tab_index = index; }},
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
  }
}
