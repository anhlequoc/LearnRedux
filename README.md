### Redux
- state của app được manage trong 1 object
```javascript
  var reduxState = {
    searchText: '',
    showCompleted: false,
    todos: [
      {
        id: 123,
        text: 'sample'
      }
    ]
  }
```

- để update state, redux cần dispatch các actions, action cũng được lưu trong các object
```javascript
  var action = {
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'something else'
  }
```

- Trong react app, các individual component có thể dispatch ra các actions
- reducer: nhận vào các tham số là state và action để compute và return ra state mới. Chú ý là reducer cần phải là pure function (không thay đổi state và action truyền vào)

-> action -> reducer
