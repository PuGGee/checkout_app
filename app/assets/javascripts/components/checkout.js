var Checkout = {
  view: function(vnode) {
    return [
      m(TextInput, {placeholder: '52 Plough Way'}),
      m(TextInput, {placeholder: 'London'}),
      m(TextInput, {placeholder: 'SE16 2LT'})
    ];
  }
}
