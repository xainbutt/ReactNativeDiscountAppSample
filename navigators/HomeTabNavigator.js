import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import SavedList from '../components/SavedList';
import DiscountNavigator from './DetailStackNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from '../helpers/colors';

export default HomeTabNavigator = createBottomTabNavigator(
    {
      "Discount Deals": DiscountNavigator ,
      "Saved Deals": SavedList ,
    },
    {
      navigationOptions: ({ navigation }) => ({
        
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          // console.warn(routeName);
          if (routeName === 'Discount Deals') {
            iconName ='cart-plus';
            // tintColor = Color.blue
          } else if (routeName === 'Saved Deals') {
            iconName = 'heart';
            // tintColor = 'red'
          }
          return <Icon size={25} name={iconName} backgroundColor='transparent' color={tintColor} />;
        }
      }),
      tabBarOptions: {
        activeTintColor: 'gray',
        inactiveTintColor: 'gray',
        showIcon: true,
        // tabBarButtonComponent: (<Icon name='facebook'/>),
        // activeBackgroundColor: '#03A9F4',
        labelStyle: {
          fontSize: 16,
        },
        style: {
          // borderTopWidth: 2,
          // borderTopColor: '#9e74e8'
        }
      },
      
    }
  );