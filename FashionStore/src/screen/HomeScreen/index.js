import { StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import data from './data.json'
import { useSelector,useDispatch } from "react-redux";
import {addToCart,changeQuantity} from '../../action/CartAction'
import Icon from 'react-native-vector-icons/FontAwesome'

const { width, height } = Dimensions.get('window')
export default function Home({navigation}) {

    const dataCart = useSelector((state) => state.cart.dataCarts);
    const dispatch = useDispatch()

    const onPress = (item)=>{
        const check = dataCart.some(data=>data.id == item.id)
        if(check == false){
            dispatch(addToCart(item))
        }
        else{
            dispatch(changeQuantity('plus',item.id))
        }
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
                    <Text numberOfLines={1} style={styles.price}>{`Price: ${item.price}$`}</Text>
                    <View style={{flexDirection:'row'}}>
                    <TouchableOpacity
                        onPress={()=>onPress(item)}
                    >
                        <Text style={styles.button}>Add Cart</Text>
                    </TouchableOpacity>
                    </View>
                    
                </View>

            </View>
        )
    }
    return (
        <View style={{flex:1}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={styles.title}>Products Lists</Text>
              <View>
              <Icon onPress={()=>navigation.navigate('Cart')} size={30} style={{marginRight:10}} name='shopping-cart'/>
              <Text style={{color:'white',backgroundColor:'red',paddingVertical:5,paddingHorizontal:7,position:'absolute',borderRadius:15,bottom:15}}>{dataCart?dataCart.length:0}</Text>
              </View>
              
            </View>
            <FlatList
                style={{flex:1}}
                data={data}
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
        flex:1,
        marginLeft:10
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
        fontSize: 18
    },
    des: {
        color: 'rgba(1,1,1,0.3)',
        width: width / 2.3,
        marginVertical: 5
    },
    button: {
        color: 'white',
        backgroundColor: 'green',
        flexWrap:"wrap",
        padding:5,
        borderRadius:5,
        marginTop:10
    }
});
