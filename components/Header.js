import React, {Component} from 'react';
import {View, Text, Animated, TouchableOpacity, StyleSheet} from 'react-native';
import Color from '../helpers/colors';


export default class Header extends Component{
    constructor(props){
        super(props);
        this.positionY = new Animated.Value(-140);
        // this.opacity = new Animated.Value(0);
    }

    componentWillMount = () => {
        Animated.timing(this.positionY,{
            duration: 400,
            toValue: 0
        }).start();

        // Animated.timing(this.opacity,{
        //     duration: 1000,
        //     toValue: 1
        // }).start();


    }

    backButtonPressHandler = () => {
        Animated.timing(this.positionY,{
            duration: 400,
            toValue: -140
        }).start();

        this.props.onBackButtonPress(this.props.navKey)
    }

    render = () => {
        return (
            <Animated.View
                style={[styles.container, {transform: [{translateY: this.positionY}]}]}

            >
                <TouchableOpacity style={styles.backBtn} onPress={this.backButtonPressHandler } >
                    <Text style={styles.backBtnText} >
                        Back
                    </Text>
                    <View>
                        {this.props.children ? this.props.children : null}
                    </View>
                </TouchableOpacity>
            </Animated.View>
        );
    }

    componentWillUnmount = () => {
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: 140,
        backgroundColor: Color.blue,
    },
    backBtn: {        
        width: 50,
        height: 30,        
        marginTop: 20,
        marginLeft: 10
    },
    backBtnText: {
        fontSize: 18,
        color: 'white',
    }
})