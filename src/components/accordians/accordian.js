import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
export default class Accordian extends Component {



    constructor() {
        super()
        this.state = {
            isShowAccordian: false,
            accordianData: [
                { title: "Hair", img: "", id: 1, detail: ["Ladies' Waxing", "Bikni Waxing", "Hollywood Waxing"] }
            ]
        }
    }




    openAccordian() {
        this.setState({ isShowAccordian: !this.state.isShowAccordian })
    }

    render() {
        return (
            <View style={{marginTop:"9%"}}>

                <View style={style.mainView}>
                    <TouchableOpacity activeOpacity={1} onPress={this.openAccordian.bind(this)}>
                        <LinearGradient colors={['#84e3dd', '#84e3dc', '#22b7ad']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={style.parentGradient}>
                            <Text style={style.headText}>Hair</Text>
                            <Image source={require('../../assets/faltu/larki.png')} resizeMode="cover" style={style.imageIcon} />
                        </LinearGradient>
                    </TouchableOpacity>
                    {
                        this.state.isShowAccordian == true ?
                            (
                                <View
                                    style={style.detailHead}>
                                    <Text style={style.detailText}>Ladies' Waxing</Text>
                                    <Text style={style.detailText}>Ladies' Waxing</Text>
                                    <Text style={style.detailText}>Ladies' Waxing</Text>
                                    <Text style={style.detailText}>Ladies' Waxing</Text>
                                    <Text style={style.detailText}>Ladies' Waxing</Text>
                                </View>
                            ) : null
                    }
                </View>
            </View >
        )
    }
}


const style = {
    detailText: {
        borderLeftWidth: 2,
        paddingLeft: "5%",
        marginBottom: 3,
        color: "white",
        fontSize: 16,
        borderLeftColor: "#84e3dd"
    },
    imageIcon: {
        height: 100,
        width: 130
    },
    parentGradient: {
        flexDirection: "row",
        backgroundColor: "blue",
        width: "100%",
        marginRight: -25,
        marginTop: -15,
        marginBottom: -10,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "space-between",
        borderRadius: 14
    },
    mainView: {
        backgroundColor: "#28afa5",
        // margin: '5%',
        borderRadius: 14,
        width:"85%",
        alignSelf:"center"
    },
    headText: {
        width: "50%",
        paddingLeft: "5%",
        color: "white",
        fontSize: 22,
        fontWeight: 'bold'
    },
    detailHead: {
        width: "85%",
        alignSelf: "center",
        paddingVertical: '4%'
    }
}