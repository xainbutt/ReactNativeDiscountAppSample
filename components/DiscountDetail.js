import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Animated} from 'react-native';

import Header from './Header';
import ListItem from './ListItem';
import Card from './Card';

export default class DiscountDetail extends Component {
  constructor(props){
    super(props);
    this.cardPositionY = new Animated.Value(120)
  }

    static navigationOptions = ({ navigation }) => ({
        header: null
    });

    componentWillMount = () => {
        Animated.timing(this.cardPositionY,{
            duration: 800,
            toValue: -90,
        }).start();
    }

    render() {
        return (
                <ScrollView style={styles.container}>
                    <Header onBackButtonPress={ this.props.navigation.goBack } navKey={this.props.navigation.state.key} />
                    <Animated.View style={[styles.listItem, {transform: [{translateY: this.cardPositionY}]}]} >
                        <ListItem 
                            clickable={false}
                            title={' My Title '}
                        />
                    </Animated.View>

                    <Card height={250} cardStyle={{borderTopColor: 'black', borderTopWidth: 2, marginTop: -70}}>
                        <Text>
                            Some text
                        </Text>

                    </Card>

                </ScrollView>
            
      
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopColor: 'black',
        borderTopWidth: 2,
        // backgroundColor: '#FFF'
    },
    listItem: {
        marginBottom: 0

    }
})
