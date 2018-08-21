import React, {Component} from 'react'
import {View,
    Text,
    Animated,
    TouchableOpacity,
    StyleSheet,
    Image,
    
    
} from 'react-native';
import Card from './Card';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class ListItem extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: this.props.title,
            saveIcon: this.props.icon,
            imageSource: this.props.imageSource
        }

        this.opacity = new Animated.Value(0);
        this.scale = new Animated.Value(0);
    }

    componentWillMount = () => {
        Animated.parallel([
            Animated.spring(this.scale,{
                toValue: 1,
                friction: 7,
                tension: 10
            }),
            Animated.timing(this.opacity, {
                toValue: 1,
                duration: 700
            })
        ]).start();
    }

    listItemPressHandler = () => {
        if (this.props.clickable){
            this.props.onPress();
        }      
    }

    iconPressHandler = () => {
        if (this.props.onIconPressed){
            this.setState({
                saveIcon: this.state.saveIcon === this.props.icon ? this.props.iconPressed : this.props.icon
            });
            
            this.props.onIconPressed();
        }
        
    }


    render = () => {
        return (
            
            
            <Animated.View style={{opacity: this.opacity, transform: [{scale: this.scale}]}} >
                <TouchableOpacity 
                    activeOpacity={0.9} 
                    onPress={this.listItemPressHandler} 
                    >
                    <Card cardStyle={{paddingTop: 20}}>
                        <View>
                            {/* upper row */}
                            <View style={styles.itemUpperRow}>
                                <View style={{ justifyConent: 'space-between', alignItems: 'center', flex: 1, flexDirection: 'row' }}>
                            
                                    <Image source={this.props.imageSource || {uri: 'https://via.placeholder.com/150/92c952'}}
                                    style={styles.itemImage}
                                    />
                                
                                    <Text style={{flex: 5, marginLeft: 10, marginTop: -30, fontSize: 18, fontWeight: 'bold', color: '#333'}} >
                                        {this.state.title}
                                    </Text>


                                    {
                                        this.props.showIcon && 
                                            <View style={{marginTop: -30, marginLeft: 0, alignContent: 'flex-end', flex: 1}} >
                                                <Icon.Button size={25} name={this.state.saveIcon} backgroundColor='transparent' color={this.props.iconColor} onPress={this.iconPressHandler} />
                                            </View>

                                    }
                                    
                                    
                                </View>
                    
                            </View>

                            {/* lower row */}
                            <View style={{marginLeft: 20, marginRight: 20, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between'}} >
                                
                                <View style={styles.optionContainer} >
                                    <Text style={styles.optionTitle}>
                                        Subtitle 1
                                    </Text>
                                    <Text style={styles.optionContent}>
                                        Value
                                    </Text>
                                </View>

                                <View style={styles.optionContainer} >
                                    <Text style={styles.optionTitle}>
                                        Subtitle 1
                                    </Text>
                                    <Text style={styles.optionContent}>
                                        Value
                                    </Text>
                                </View>

                                <View style={styles.optionContainer } >
                                    <Text style={styles.optionTitle}>
                                        Subtitle 1
                                    </Text>
                                    <Text style={styles.optionContent}>
                                        Value
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </Card>
                </TouchableOpacity>
            </Animated.View>
            
            
            
            
            
        );
    }
    
}

  
const styles = StyleSheet.create({
    itemContainer: {
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
    itemUpperRow: {
        flex: 1,
        marginBottom: 25
    },
    itemImage: {
        width: 60, 
        height: 60, 
        borderRadius: 30,
        marginLeft: 10,
        // flex: 1
    },
    optionContainer: {
        flexDirection: 'column',
    },
    optionTitle: {
        color: '#ccc',
    },
    optionContent: {
        color: '#333',
        fontSize: 16,
    }
  });