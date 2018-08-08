
import {createStackNavigator} from 'react-navigation';
import DiscountDetail from '../components/DiscountDetail';
import DiscountList from '../components/DiscountList';
import {Animated, Easing} from 'react-native';


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
        headerMode: 'float'
      }),
      transitionConfig: () => ({
        transitionSpec: {
          duration: 600,
          easing: Easing.out(Easing.poly(4)),
          timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
          const { layout, position, scene } = sceneProps;
          const { index } = scene;
  
        //   const height = layout.initHeight;
          
        //   const translateY = position.interpolate({
        //     inputRange: [index - 1, index, index + 1],
        //     outputRange: [height, 0, 0],
        //   });
  
          const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 0.4, 1],
          });
  
        //   return { opacity, transform: [{ translateY }] };
        return { opacity };
        },
      }),
    
      
    }
  );