// import profileReducer from "./profilePageReducer";
// import dialogsReducer from "./dialogsPageReducer";
// import navBarReducer from "./navBarReducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 {id: 1, post: "Hi, how r u?", likesCount: 12},
//                 {id: 2, post: "How are you?", likesCount: 24},
//                 {id: 3, post: "Yo", likesCount: 3},
//                 {id: 4, post: "Privet", likesCount: 33}
//             ],
//             curInputText: ""
//         },
//         dialogsPage: {
//             chatData: [
//                 {id: 1, name: "Sveta"},
//                 {id: 2, name: "Sasha"},
//                 {id: 3, name: "Artem"},
//                 {id: 4, name: "Kolya"},
//                 {id: 5, name: "Masha"},
//                 {id: 6, name: "Jenya"},
//                 {id: 7, name: "Artur"}
//             ],
//
//             messageData: [
//                 {id: 1, message: "Hi"},
//                 {id: 2, message: "How are you?"},
//                 {id: 3, message: "Yo"},
//                 {id: 4, message: "Priveet"}
//             ],
//
//             newMessageBody: ""
//         },
//
//         navBar: {
//             friendsData: [
//                 {
//                     name: "Tanya",
//                     avatar:
//                         "https://png.pngtree.com/png-clipart/20190906/original/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-png-image_4561296.jpg"
//                 },
//                 {
//                     name: "Misha",
//                     avatar:
//                         "https://png.pngtree.com/png-clipart/20190906/original/pngtree-couple-avatar-boy-png-image_4573724.jpg"
//                 },
//                 {
//                     name: "Andrey",
//                     avatar:
//                         "https://png.pngtree.com/png-clipart/20190516/original/pngtree-chibi-boy-hearing-png-image_3782208.jpg"
//                 }
//             ]
//         }
//     },
//     _callSubscriber() {
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.Navbar = navBarReducer(this._state.Navbar, action);
//         this._callSubscriber(this._state);
//     }
// };
//
//
// export default store;
