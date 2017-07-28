var Checkout = {
  view: function(vnode) {
    return [
      m('div', {class: 'checkout_form'}, [

        m(TextInput, {label: 'Email Address', name: 'customer[email]'}),

        m(TabbedPane, {tabs: {
          'Delivery': m('div', {class: 'delivery'}, [
            m(TextInput, {label: 'First Name', name: 'customer[first_name]'}),
            m(TextInput, {label: 'Last Name', name: 'customer[last_name]'}),
            m(TextInput, {label: 'Mobile Number', name: 'customer[mobile]'}),
            m(TextInput, {label: 'Delivery Address', name: 'delivery_address'})
          ]),

          'Click & Collect': m('div', {class: 'click_collect'}, [
            m(TextInput, {label: 'First Name', name: 'customer[first_name]'}),
            m(TextInput, {label: 'Last Name', name: 'customer[last_name]'}),
            m(TextInput, {label: 'Mobile Number', name: 'customer[mobile]'}),
            m(TextInput, {label: 'Postcode', name: 'postcode'})
          ])
        }})
      ])
    ];
  }
}
