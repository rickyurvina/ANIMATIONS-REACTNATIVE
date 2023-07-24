import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'

const Animation4 = () => {

    const [animation] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            animation, {
            toValue: 360,
            duration: 1000,
            useNativeDriver: false
        }
        ).start()

    }, [])

    //Interpoloation

    const interpolation = animation.interpolate({
        inputRange: [0, 360],//from zero to 360 degrees
        outputRange: ['0deg', '360deg']//from 0 to 360 degrees
    })

    const styleAnimation = {
        transform: [{ rotate: interpolation }]
    }

    return (
        <View>
            <Animated.View style={[styles.box, styleAnimation]}>
            </Animated.View>
        </View>
    )
}

export default Animation4

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})