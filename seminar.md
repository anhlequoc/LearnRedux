## REDUX:
    Khi có 1 thay đổi ở view -> dispatch ra 1 action
    action = {
        type: "log in" (string),
        payload: [username, password] (payload là chứa data)
    }
    state: là plain object lưu trạng thái của app
    reducer: 
        - để xử lý action
        - function trong reducer tuyệt đối không được xử lý async (gọi lên server...)
        - trả về 1 state mới update state cũ, state mới là 1 object mới (ko phải update object cũ)

    *note: để xử lý bất đồng bộ, dùng "effect"*
    effect: nhận action và phải bắn ra (nhiều) action khác
        - nhận action -> xử lý trên server -> bắn ra action
        ví dụ
        - nhận action pullData -> xử lý trên server -> bắn ra action: pullProduct xong rồi (action 1), pull Customer xong rồi (action 2)