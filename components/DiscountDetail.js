import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Animated} from 'react-native';

import Header from './Header';
import ListItem from './ListItem';


export default class DiscountDetail extends Component {
  constructor(props){
    super(props);
    this.cardPositionY = new Animated.Value(-70)
  }

    static navigationOptions = ({ navigation }) => ({
       
        // headerTitle: navigation.state.params ? `${navigation.state.params.customer.name}` : '',
        // header: (
        //     <Header onBackButtonPress={ navigation.goBack } navKey={navigation.state.key} />
        // ),
        header: null
    });

    componentWillMount = () => {
        Animated.timing(this.cardPositionY,{
            duration: 800,
            toValue: -220,
            // speed: 1,
            // bounciness: 9,
        }).start();
    }

    render() {
        return (
                <View style={styles.container}>
                <Header onBackButtonPress={ this.props.navigation.goBack } navKey={this.props.navigation.state.key} />
                    <Animated.View style={[styles.listItem, {transform: [{translateY: this.cardPositionY}]}]} >
                        <ListItem 
                            clickable={false}
                            title={' My Title '}
                        />
                    </Animated.View>
                </View>
            
      
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopColor: 'black',
        borderTopWidth: 2,
        backgroundColor: '#FFF'
    },
    listItem: {
        marginTop: 140,
        

    }
})
