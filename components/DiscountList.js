import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Animated, Image, ScrollView, FlatList} from 'react-native';
import ListItem from './ListItem';
import Color from '../helpers/colors';


data = [
  'Title1 is long', 'Title2 is long', 'Title3', 'Title4', 'Title5'
]
export default class DiscountList extends Component {
  constructor(props){
    super(props);
  }

  handleItemPress = (item) => {
    this.props.navigation.navigate('Deal Detail', {item: item});
  }

  render() {
    return (
      <View style={styles.container}>
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
    flex: 1,
    backgroundColor: Color.blue
  },
});
