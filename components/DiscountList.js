import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Animated, Image, ScrollView, FlatList} from 'react-native';
import ListItem from './ListItem';
import Color from '../helpers/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

data = [
  'Title', 'Title', 'Title3', 'Title4', 'Title5'
]
export default class DiscountList extends Component {
  constructor(props){
    super(props);
  }

  

  handleItemPress = (item) => {
    this.props.navigation.navigate('Deal Detail', {item: item});
  }

  saveListItem = () => {
    
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
          
            <View style={{flex: 3}}>
              <Text style={{fontSize: 25, fontWeight: 'bold', color: '#333'}}>
                Discount Offers
              </Text>
            </View>

            <View style={{flexDirection: 'row', flex: 1}} >
              <Icon.Button size={25} name="facebook-square" backgroundColor='transparent' color="#385899" />
              <Icon.Button size={25} name="instagram" backgroundColor='transparent' color="#d74f8d" />
            </View>

        </View>

        <FlatList

                data={data}
                renderItem={({item, index}) => (
                    <ListItem 
                      clickable={true}
                      imageSource={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                      title={item}
                      icon={'heart-o'}
                      iconPressed={'heart'}
                      showIcon={true}
                      iconColor={'red'}
                      onIconPressed={this.saveListItem}
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
