import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Order {
  orderId: string;
  start: {
    latitude: number;
    longitude: number;
  };
  end: {
    latitude: number;
    longitude: number;
  };
  price: number;
}

interface InitialState {
  orders: Order[];
  deliveries: Order[];
}

const initialState: InitialState = {
  orders: [],
  deliveries: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<Order>) {
      state.orders.push(action.payload);
    },
    acceptOrder(state, action: PayloadAction<string>) {
      const acceptedOrderId = action.payload;
      const index = state.orders.findIndex(v => v.orderId == acceptedOrderId);
      if (index > -1) {
        state.deliveries.push(state.orders[index]);
        state.orders.splice(index, 1);
      }
    },
    rejectOrder(state, action: PayloadAction<string>) {
      const rejectedOrderId = action.payload;
      const index = state.orders.findIndex(v => v.orderId == rejectedOrderId);
      if (index > -1) {
        state.orders.splice(index, 1);
      }

      const deliveryIndex = state.deliveries.findIndex(
        v => v.orderId == rejectedOrderId,
      );
      if (deliveryIndex > -1) {
        state.deliveries.splice(deliveryIndex, 1);
      }
    },
  },
  extraReducers: {},
});

export default orderSlice;
