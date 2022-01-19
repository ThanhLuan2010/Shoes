import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  FlatList
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome'
const { width, height } = Dimensions.get('window')
import { deleteItem, changeQuantity } from '../../action/CartAction'

export default function Cart({ navigation }) {
  const dispatch = useDispatch()

  const dataCart = useSelector((state) => state.cart.dataCarts);

  const [random, setrandom] = useState(0)

  const onDelete = (item) => {
    dispatch(deleteItem(item))
  }

  const onChangeQuantity = (item, type) => {
    dispatch(changeQuantity(type, item.id))
    setrandom(Math.random())
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemwraper}>
        <Image
          source={{ uri: item.image }}
          style={styles.img}
        />
        <View style={{ paddingHorizontal: 10 }}>
          <Text numberOfLines={2} style={styles.itemname}>{item.name}</Text>
          <Text numberOfLines={3} style={styles.des}>{item.description}</Text>
          <Text numberOfLines={1} style={styles.price}>{`Price: ${item.price*item.quantity}$`}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <TouchableOpacity
                onPress={() => onChangeQuantity(item, 'minus')} >
                <Text style={{ fontSize: 50 }}>-</Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 20, marginHorizontal: 10 }}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => onChangeQuantity(item, 'plus')}
              >
                <Text style={{ fontSize: 50 }}>+</Text>
              </TouchableOpacity>

            </View>

            <Icon style={{ marginRight: 10 }} onPress={() => onDelete(item)} name="trash" size={20} />

          </View>

        </View>

      </View>
    )
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon onPress={() => navigation.goBack()} size={30} style={{ marginLeft: 10, flex: 1 }} name='chevron-left' />
        <Text style={styles.title}>Cart</Text>
        <View style={{ flex: 1 }} />
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={dataCart}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
    flex: 1,
    marginLeft: 10,
    textAlign: 'center'
  },
  itemwraper: {
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomWidth: 5,
    borderColor: 'rgba(1,1,1,0.1)',

  },
  img: {
    width: width / 2,
    height: width / 2
  },
  itemname: { marginRight: 8, width: width / 2.3, fontSize: 15 },
  price: {
    color: 'red',
    fontSize: 18,
    width:width/2.3
  },
  des: {
    color: 'rgba(1,1,1,0.3)',
    width: width / 2.3,
    marginVertical: 5
  },
  button: {
    color: 'white',
    backgroundColor: 'green',
    flexWrap: "wrap",
    padding: 5,
    borderRadius: 5,
    marginTop: 10
  }
});
