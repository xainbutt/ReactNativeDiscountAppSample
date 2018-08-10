import React from 'react';
import {createStackNavigator} from 'react-navigation';
import DiscountDetail from '../components/DiscountDetail';
import DiscountList from '../components/DiscountList';
import {Animated, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default DiscountNavigator = createStackNavigator(
    {
      "Discount Deals": {
        screen : DiscountList,
        navigationOptions:{
              headerTitle: 'Discount Deals',
              headerBackTitle: 'back'
          }
      } ,
      "Deal Detail": {
        screen: DiscountDetail,
        navigationOptions:{            
        }
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
        // screenInterpolator: sceneProps => {
        //   const { layout, position, scene } = sceneProps;
        //   const { index } = scene;
  
        //   const height = layout.initHeight;
          
          // const scale = position.interpolate({
          //   inputRange: [0, 1],
          //   outputRange: [0, 1],
          // });
          // console.warn(position)
        //   const opacity = position.interpolate({
        //     inputRange: [index - 1, index - 0.99, index],
        //     outputRange: [0, 0.4, 1],
        //   });
  
        //   // return { opacity, transform: [{ scale }] };
        // return { opacity };
        // },
      }),
    
      
    }
  );