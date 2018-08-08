import React, {Component} from 'react'
import {View, Text, Animated} from 'react-native'


export default class FadingText extends Component{
    constructor(props){
        super(props);
        this.state = {
            fadingVal: Animated.Value('red')
        }
    }

    componentDidMount = () => {
        // Animated.timing(                  // Animate over time
        //     this.state.fadingVal,            // The animated value to drive
        //     {
        //       toValue: 'green',                   // Animate to opacity: 1 (opaque)
        //       duration: 5000,
        //       useNativeDriver: true,              // Make it take a while
        //     }
        //   ).start(); 

          Animated.spring(                  // Animate over time
            this.state.fadingVal,            // The animated value to drive
            {
              toValue: 3,                   // Animate to opacity: 1 (opaque)
              duration: 5000,
              useNativeDriver: true,              // Make it take a while
            }
          ).start();
    }

    render = () => {
        let { fadingVal } = this.state;
        return (
            <Animated.View
            style={{
                ...this.props.style,
                color: fadingVal,         // Bind opacity to animated value
              }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
    
}