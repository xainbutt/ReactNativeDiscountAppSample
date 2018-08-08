import React, {Component} from 'react'
import {View, Text, Animated, TouchableOpacity, StyleSheet} from 'react-native'


export default class Button extends Component{
    constructor(props){
        super(props);
        this.state = {
            friction: this.props.friction,
            tension: this.props.tension,
            velocity: this.props.velocity,
            finalHeight: this.props.finalHeight,
            btnText: this.props.title,
            bounceVal: new Animated.Value(this.props.initialHeight)
        }
    }

    componentDidMount = () => {
          this.bounce();
    }

    bounce = () => {
        // Animated.spring(                  
        //     this.state.bounceVal,           
        //     {
        //       toValue: this.state.finalHeight,
        //       tension: this.state.tension,
        //       friction: this.state.friction          
        //     }
        //   ).start();

        Animated.timing(
            this.state.bounceVal, 
            {
                toValue: 10,
                duration: 10000
            }
        ).start();
    }

    render = () => {
        let { bounceVal } = this.state;
        let scaleVal = bounceVal.interpolate({
            inputRange: [0, 10],
            outputRange: [0, 200]
          })
        return (
            <Animated.View
            style={{
                // transform: [{scale: bounceVal}]
                marginLeft: scaleVal
              }}
            >
                <TouchableOpacity style={styles.btnStyle}>
                    <Text style={styles.btnTextStyle}  >
                        {this.state.btnText}
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }
    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    btnStyle: {
      textAlign: 'center',
      margin: 10,
      height: 40,
      width: 50,
      backgroundColor: '#55c3b0'
    },
    btnTextStyle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });