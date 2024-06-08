export const baseUrl ='http://localhost:3333';


const categoriesAll ='http://localhost:3333/categories/all'

const productsAll ='http://localhost:3333/products/all'

const product_img = 'baseUrl+/product_img/3.jpeg'



//написать все редюсеры

// filterDeducer = (state, action) => {
//     switch (action.type) {
//         case 'filter':
//             return {
//                 ...state,
//                 filter: action.payload
//             }
//         default:
//             return state
//     }
// }  -фильтрует товары по цене


// discountReducer = (state, action) => {
//     switch (action.type) {
//         case 'discount':
//             return {
//                 ...state,
//                 discount: action.payload
//             }
//         default:
//             return state
//     }
// } - фильтрует товары по скидке


// sortReducer = (state, action) => {
//     switch (action.type) {
//         case 'sort':
//             return {
//                 ...state,
//                 sort: action.payload
//             }
//         default:
//             return state
//     }
// } - товары по категориям


// fivoriteReducer = (state, action) => {
//     switch (action.type) {
//         case 'fivorite':
//             return {
//                 ...state,
//                 fivorite: action.payload
//             }
//         default:
//             return state
//     }
// } -фаворитные товары

// bascetReducer = (state, action) => {
//     switch (action.type) {
//         case 'bascet':
//             return {
//                 ...state,
//                 bascet: action.payload
//             }
//         default:
//             return state
//     }
// }- корзина

export default baseUrl