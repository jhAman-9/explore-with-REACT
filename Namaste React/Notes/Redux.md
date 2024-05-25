# How to create and use Redux Store

- Step 1st : Create AppStore where all stores are stored


        import {configureStore} from '@reduxjs/toolkit'
        import cartReducer from './cartSlice'

        const appStore = configureStore({
            reducer: {
                cart: cartReducer,
            }
        });

        export default appStore



- Step 2nd : Create Cart Slice and reducers

        
        import {createSlice} from '@reduxjs/toolkit'

        const cartSlice = createSlice({
            name: 'cart',
            initialState: {
                items : []
            },

            reducers: {
                addItem: (state, action) => {

                    // Vanilla(Older) Redux => Don't Mutate State and returning was mendatory
                    // const newState = [...state]
                    // newState.items.push(action.payload);
                    // return newState

                    // we have to mutating the state here
                    state.items.push(action.payload);
                },
                removeItem: (state) => {
                    state.items.pop();
                },
                clearCart: (state) => {
                    state.items = [];
                } 
            }
        })
        

        export const {addItem, removeItem, clearCart} = cartSlice.actions;
        export default cartSlice.reducer;


- Step 4th : Rape the App with Redux Provider

        <Provider store={appStore}>
        <>
          <Header />
          <Outlet />
        </>
        </Provider>


- Step 5th : To access the store value we have to subscribe the store
- For that, use useSelector hook of redux

        const cartItems = useSelector((store) => store.cart.items);

        <li className="p-2 m-2">
            <Link to="/cart"> Cart - ({cartItems.length}) </Link>
          </li>


- Step 6th : To update the store value, use useDispatch hook of redux

          const dispatch = useDispatch();

          const handleClearCart = () => {
              dispatch(clearCart());
          };



        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>


# Notes
- Redux Use Immur Behind The Screen
- RTK says mutate the existing state or return a empty state

    - state.items.length = 0       
    - return {items : []};

- not mutating the state and creating copy of state into empty form
    - state.items = [];    
- will replace original state empty
    - return {items : []};      