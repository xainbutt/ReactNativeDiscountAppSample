
import {createBottomTabNavigator} from 'react-navigation';
import DiscountList from '../components/DiscountList';
import SavedList from '../components/SavedList';
import DiscountNavigator from './DetailStackNavigator';


export default HomeTabNavigator = createBottomTabNavigator(
    {
      "Discount Deals": DiscountNavigator ,
      "Saved Deals": SavedList ,
    },
    {
      navigationOptions: ({ navigation }) => ({
        
      }),
      tabBarOptions: {
        activeTintColor: '#303F9F',
        inactiveTintColor: 'gray',
        showIcon: false,
        // activeBackgroundColor: '#03A9F4',
        labelStyle: {
          fontSize: 17,
        },
        style: {
          borderTopWidth: 2,
          borderTopColor: '#9e74e8'
        }
      },
      
    }
  );