import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Animated, Image, ScrollView, FlatList} from 'react-native';
import ListItem from './ListItem';


data = [
  'Title1', 'Title2', 'Title3', 'Title4', 'Title5'
]
export default class SavedList extends Component {
  constructor(props){
    super(props);
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

        </View>

           <FlatList

                    data={data}
                    renderItem={({item, index}) => (
                        <ListItem title={item}></ListItem>
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
    backgroundColor: '#eee'
  },
});
