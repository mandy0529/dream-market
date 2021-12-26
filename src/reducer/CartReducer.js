import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTAL,
  HANDLE_CART_ITEM_AMOUNT,
  REMOVE_ITEM,
} from '../utils/action';

export const CART_LOCAL = 'cart';
const getLocalStorage = () => {
  const cart = localStorage.getItem(CART_LOCAL);
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

export const cartInitialState = {
  cart: getLocalStorage(),
  total_amount: 0,
  total_price: 0,
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const {id, amount, data} = action.payload;
      const tempCart = state.cart.find((item) => {
        return item.id === id;
      });

      if (tempCart) {
        const sameItemAddedCart = state.cart.map((item) => {
          if (item.id === id) {
            let newAmount = Number(item.amount) + Number(amount);
            if (newAmount > Number(item.stock)) {
              newAmount = Number(item.stock);
            }

            return {...item, amount: newAmount};
          } else {
            return item;
          }
        });
        return {...state, cart: sameItemAddedCart};
      } else {
        const {title, category, price, image, stock} = data;
        const img = image[0].url;
        const addedCartItem = {
          id,
          amount,
          title,
          category,
          price,
          img,
          stock,
        };
        return {...state, cart: [...state.cart, addedCartItem]};
      }

    case HANDLE_CART_ITEM_AMOUNT:
      const amountedItem = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.type === 'plus') {
              if (item.amount > Number(item.stock)) {
                item.amount = Number(item.stock);
              }
            }
            return action.payload.type === 'plus'
              ? {...item, amount: item.amount + 1}
              : {...item, amount: item.amount - 1};
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return {...state, cart: amountedItem};

    case CLEAR_CART:
      return {...state, cart: []};

    case REMOVE_ITEM:
      const removedItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {...state, cart: removedItem};

    case COUNT_CART_TOTAL:
      const allPrice = state.cart.reduce(
        (total, item) => {
          const {price, amount} = item;
          total.amount += amount;
          total.price += amount * price;
          return total;
        },
        {
          price: 0,
          amount: 0,
        }
      );
      return {
        ...state,
        total_price: allPrice.price,
        total_amount: allPrice.amount,
      };
    default:
      return {...state};
  }
};

export default CartReducer;
