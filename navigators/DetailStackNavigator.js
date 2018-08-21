import React from 'react';
import {createStackNavigator} from 'react-navigation';
import DiscountDetail from '../components/DiscountDetail';
import DiscountList from '../components/DiscountList';
import {Animated, Easing} from 'react-native';


export default DiscountNavigator = createStackNavigator(
    {
      "Discount Deals": {
        screen : DiscountList,
      } ,
      "Deal Detail": {
        screen: DiscountDetail,
      } ,
    },
    {
      navigationOptions: ({ navigation }) => ({
        mode: 'card',
        headerMode: 'float',
        header: null
      }),
      transitionConfig: () => ({
        transitionSpec: {
          duration: 700,
          easing: Easing.out(Easing.poly(4)),
          timing: Animated.timing,
        },
      }),
    
      
    }
  );