import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Animated} from 'react-native';

import Header from './Header';
import ListItem from './ListItem';
import Card from './Card';

export default class DiscountDetail extends Component {
  constructor(props){
    super(props);
    this.headerCardPositionY = new Animated.Value(120)
    this.detailCardPositionY = new Animated.Value(420)
  }

    static navigationOptions = ({ navigation }) => ({
        header: null
    });

    componentWillMount = () => {
        Animated.parallel([
            Animated.timing(this.headerCardPositionY,{
                duration: 800,
                toValue: -90,
            }),

            Animated.timing(this.detailCardPositionY,{
                duration: 800,
                toValue: -50,
            })
        ]).start();
        
    }

    render() {
        return (
                <ScrollView style={styles.container}>
                    <Header onBackButtonPress={ this.props.navigation.goBack } navKey={this.props.navigation.state.key} />
                    <Animated.View style={[styles.listItem, {transform: [{translateY: this.headerCardPositionY}]}]} >
                        <ListItem 
                            clickable={false}
                            title={'My Title'}
                            onItemSaved={this.saveListItem}
                        />
                    </Animated.View>

                    <Animated.View style={{justifyContent: 'space-between', flex: 1, paddingTop: 150, transform: [{translateY: this.detailCardPositionY}]}}>
                        <Card cardStyle={{marginTop: -150, }}>
                            <Text style={{fontSize: 16, padding: 20, lineHeight: 25}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged. It was popularised in the 1960s with the release of 
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                                software like Aldus PageMaker including versions of Lorem Ipsu
                            </Text>
                        </Card>
                    </Animated.View>
                    

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
