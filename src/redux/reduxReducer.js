import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    size: [],
    wishList: []
};

export const reduxSlice = createSlice({
    name: "redux",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find(
                (item) => item.id === action.payload.id
            );
            if (item) {
                item.quantity += action.payload.quantity;
                let notFindSize = true;
                state.size.map((obj) => {
                    if (obj.id === action.payload.id) {
                        obj.listSize.map((singleSize) => {
                            if (singleSize.size === action.payload.selectSize) {
                                singleSize.count += action.payload.quantity;
                                notFindSize = false;
                            }
                        });
                        if (notFindSize) {
                            obj.listSize.push({
                                size: action.payload.selectSize,
                                count: action.payload.quantity,
                            });
                        }
                    }
                });
            } else {
                state.products.push(action.payload);
                let tempArray = [
                    {
                        size: action.payload.selectSize,
                        count: action.payload.quantity,
                    },
                ];
                state.size.push({ id: action.payload.id, listSize: tempArray });
            }
        },
        deleteItem: (state, action) => {
            state.products = state.products.filter(
                (singleItem) => singleItem.id !== action.payload
            );
            state.size = state.size.filter(
                (singleItem) => singleItem.id !== action.payload
            )
        },
        resetCart: (state) => {
            state.products = [];
            state.size = [];
        },
        addToWishList: (state, action) => {
            const item = state.wishList.find(
                (item) => item.id === action.payload.id
            );
            if (!item) {
                state.wishList.push(action.payload);
            }
        },
        deleteWishList: (state, action) => {
            state.wishList = state.wishList.filter(
                (singleItem) => singleItem.id !== action.payload
            );
        },
        emptyAll: (state, action) => {
            state.products = [];
            state.size = [];
            state.wishList = [];
        }
    },
});

export const { addToCart, deleteItem, resetCart, addToWishList, deleteWishList, emptyAll } = reduxSlice.actions;
export default reduxSlice.reducer;
