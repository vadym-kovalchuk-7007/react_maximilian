import React from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = React.createContext({
  addItemToCart: () => {},
  items: [],
  updateItemQuantity: () => {},
});

function shoppingCartReducer(state, action) {
  const updatedItems = [...state.items];
  switch (action.type) {
    case "ADD_ITEM":
      const id = action.payload;

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id,
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        // ...state,
        items: updatedItems,
      };
    case "UPDATE_ITEM":
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId,
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
  }
  return state;
}

export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = React.useReducer(
    shoppingCartReducer,
    { items: [] },
  );

  function handleAddItemToCart(id) {
    shoppingCartDispatch({ type: "ADD_ITEM", payload: id });

    // setShoppingCart((prevShoppingCart) => {
    //   const updatedItems = [...prevShoppingCart.items];

    //   const existingCartItemIndex = updatedItems.findIndex(
    //     (cartItem) => cartItem.id === id,
    //   );
    //   const existingCartItem = updatedItems[existingCartItemIndex];

    //   if (existingCartItem) {
    //     const updatedItem = {
    //       ...existingCartItem,
    //       quantity: existingCartItem.quantity + 1,
    //     };
    //     updatedItems[existingCartItemIndex] = updatedItem;
    //   } else {
    //     const product = DUMMY_PRODUCTS.find((product) => product.id === id);
    //     updatedItems.push({
    //       id: id,
    //       name: product.title,
    //       price: product.price,
    //       quantity: 1,
    //     });
    //   }

    //   return {
    //     items: updatedItems,
    //   };
    // });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: { productId, amount },
    });
    // setShoppingCart((prevShoppingCart) => {
    //   const updatedItems = [...prevShoppingCart.items];
    //   const updatedItemIndex = updatedItems.findIndex(
    //     (item) => item.id === productId,
    //   );
    //   const updatedItem = {
    //     ...updatedItems[updatedItemIndex],
    //   };
    //   updatedItem.quantity += amount;
    //   if (updatedItem.quantity <= 0) {
    //     updatedItems.splice(updatedItemIndex, 1);
    //   } else {
    //     updatedItems[updatedItemIndex] = updatedItem;
    //   }
    //   return {
    //     items: updatedItems,
    //   };
    // });
  }

  const ctxValue = {
    addItemToCart: handleAddItemToCart,
    items: shoppingCartState.items,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
