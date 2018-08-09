import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Animated, Image, ScrollView, FlatList} from 'react-native';
import ListItem from './ListItem';
import Color from '../helpers/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

data = [
  'Title1 is long', 'Title2 is long', 'Title3', 'Title4', 'Title5'
]
export default class DiscountList extends Component {
  constructor(props){
    super(props);
  }

  // static navigationOptions = ({ navigation }) => ({
  //   header: null
  // });

  handleItemPress = (item) => {
    this.props.navigation.navigate('Deal Detail', {item: item});
  }

  render() {
    return (
      <View style={styles.container}>
        <View 
          style={
            {flexDirection: 'row',
            padding: 10, justifyContent: 'space-between', backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 10,
            shadowRadius: 4, 

            }}>
          <View>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#333'}}>
              Discount Offers
            </Text>
          </View>
          <View>
            <Icon.Button size={25} name="facebook-square" backgroundColor='transparent' color="#385899" />
          </View>

        </View>
        <FlatList

                data={data}
                renderItem={({item, index}) => (
                    <ListItem 
                      clickable={true}
                      title={item}
                      onPress={() => this.handleItemPress(item) }
                    />
                    
                )}
                keyExtractor={i => i}

        />
      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    // backgroundColor: Color.blue
  },
});
