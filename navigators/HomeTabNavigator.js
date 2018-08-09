
import {createBottomTabNavigator} from 'react-navigation';
import SavedList from '../components/SavedList';
import DiscountNavigator from './DetailStackNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';

export default HomeTabNavigator = createBottomTabNavigator(
    {
      "Discount Deals": DiscountNavigator ,
      "Saved Deals": SavedList ,
    },
    {
      navigationOptions: ({ navigation }) => ({
        // tabBarIcon: ({ focused, tintColor }) => {
        //   const { routeName } = navigation.state;
        //   let iconName;
        //   console.warn(routeName);
        //   if (routeName === 'Discount Deals') {
        //     iconName = `ios-navigate${focused ? '' : '-outline'}`;
        //   } else if (routeName === 'Profile') {
        //     iconName = `ios-contact${focused ? '' : '-outline'}`;
        //   }
  
        //   // You can return any component that you like here! We usually use an
        //   // icon component from react-native-vector-icons
        //   return <Icon name={iconName} size={25} color={tintColor} />;
        // }
      }),
      tabBarOptions: {
        activeTintColor: '#303F9F',
        inactiveTintColor: 'gray',
        showIcon: true,
        // activeBackgroundColor: '#03A9F4',
        labelStyle: {
          fontSize: 17,
        },
        style: {
          borderTopWidth: 2,
          // borderTopColor: '#9e74e8'
        }
      },
      
    }
  );