var Checkout = {
  view: function(vnode) {
    return [
      window.derp = m(TabbedPane, {tabs: {
        tab1: m('div', {class: 'tab1'}, [
          m(TextInput, {label: 'Address', placeholder: '52 Plough Way', name: 'address[line1]'}),
          m(TextInput, {label: 'City', placeholder: 'London'}),
          m(TextInput, {label: 'Postcode', placeholder: 'SE16 2LT'})
        ]),

        tab2: m('div', {class: 'tab2'}, [
          m(TextInput, {label: 'Label1', placeholder: '52 Plough Way'}),
          m(TextInput, {label: 'Label2', placeholder: 'London'}),
          m(TextInput, {label: 'Label3', placeholder: 'SE16 2LT'})
        ])
      }})
    ];
  }
}
