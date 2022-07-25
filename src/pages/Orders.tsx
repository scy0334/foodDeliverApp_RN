import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import EachOrder from '../components/EachOrder';
import {Order} from '../slices/order';
import {RootState} from '../store/reducer';

function Orders() {
  const orders = useSelector((state: RootState) => state.order.orders);
  const renderItem = useCallback(({item}: {item: Order}) => {
    return <EachOrder item={item} />;
  }, []);
  return (
    <FlatList
      data={orders}
      keyExtractor={(item: Order) => item.orderId}
      renderItem={renderItem}
    />
  );
}

export default Orders;
