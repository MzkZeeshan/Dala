import React, { Component } from 'react'
import { Text, View ,ScrollView} from 'react-native'
import { Icon } from 'native-base'

export default class Recommend extends Component {

    render() {
        return (
            <View style={{ backgroundColor: "red", width: "90%", alignSelf: "center", borderRadius: 12 }}>

                <View style={{ backgroundColor: "green", marginTop: 10, borderRadius: 12, padding: 10 }}>
                    <View style={{ alignItems: "flex-end", padding: 12 }}>

                        <Icon name="close" style={{ color: 'white', fontSize: 20 }} />
                    </View>

                    <Text style={{ color: 'black', fontSize: 16, width: "90%", fontWeight: '400' }}>How likely are you to recommend Dala3 to your friends?</Text>

                    <View style={{ flexDirection: "row", justifyContent: 'space-around', marginTop: 20 }}>

                        <ScrollView horizontal={true} >
                            <View style={{ backgroundColor: 'red', padding: 10, marginRight: 5 }}>
                                <Text>1</Text>
                            </View>
                            <View style={{ backgroundColor: 'red', padding: 10, marginRight: 5 }}>
                                <Text>1</Text>
                            </View>
                            <View style={{ backgroundColor: 'red', padding: 10, marginRight: 5 }}>
                                <Text>1</Text>
                            </View>
                            <View style={{ backgroundColor: 'red', padding: 10, marginRight: 5 }}>
                                <Text>1</Text>
                            </View>
                            <View style={{ backgroundColor: 'red', padding: 10, marginRight: 5 }}>
                                <Text>1</Text>
                            </View>
                            <View style={{ backgroundColor: 'red', padding: 10, marginRight: 5 }}>
                                <Text>1</Text>
                            </View>
                            <View style={{ backgroundColor: 'red', padding: 10, marginRight: 5 }}>
                                <Text>1</Text>
                            </View>
                            <View style={{ backgroundColor: 'red', padding: 10, marginRight: 5 }}>
                                <Text>1</Text>
                            </View>
                            <View style={{ backgroundColor: 'red', padding: 10, marginRight: 5 }}>
                                <Text>1</Text>
                            </View>
                            <View style={{ backgroundColor: 'red', padding: 10, marginRight: 5 }}>
                                <Text>1</Text>
                            </View>
                            <View style={{ backgroundColor: 'red', padding: 10, marginRight: 5 }}>
                                <Text>1</Text>
                            </View>
                            <View style={{ backgroundColor: 'red', padding: 10, marginRight: 5 }}>
                                <Text>1</Text>
                            </View>
                            <View style={{ backgroundColor: 'red', padding: 10, marginRight: 5 }}>
                                <Text>1</Text>
                            </View>



                        </ScrollView>

                    </View>

                </View>


            </View>
        )
    }

}
