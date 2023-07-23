import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useState, useEffect } from 'react'

const Animation2 = () => {

    const [animation] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            animation, {
            toValue: 450,//valor que llega
            duration: 1000, //tiempo que tarda en llegar
            useNativeDriver: true
        }
        ).start()

    }, [])


    return (
        <Animated.View style={[styles.box, ]}>
        </Animated.View>
    )
}

export default Animation2

const styles = StyleSheet.create({
    box:{
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }

})