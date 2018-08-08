import React, {Component} from 'react';
import {View, Text, Animated, TouchableOpacity, StyleSheet} from 'react-native';
import Color from '../helpers/colors';


export default class Card extends Component{
    constructor(props){
        super(props);
    }


    render = () => {
        return (
            <View style={styles.container} >
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ddd',
        borderBottomWidth: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4, 
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        paddingTop: 50,
        height: 150
    },
})