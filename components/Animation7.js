import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'


const Animation7 = () => {

    const [animation] = useState(new Animated.Value(0))
    const [animation2] = useState(new Animated.Value(1))

    useEffect(() => {
        Animated.sequence([
            Animated.timing(animation, {
                toValue: 300,
                duration: 1000,
                useNativeDriver: false
            }),//first animation
            Animated.spring(animation2, {
                toValue: 10,
                useNativeDriver: false
            }),
            Animated.spring(animation2, {
                toValue: 1,
                useNativeDriver: false
            }),
            Animated.timing(animation, {
                toValue: 600,
                duration: 1000,
                useNativeDriver: false
            }),//first animation
        ]).start()

    }, [])

    const animationStyle = {
        transform: [
            { translateY: animation },
            { scale: animation2 }
        ]

    }

    return (
        <View>
            <Animated.View style={[styles.box, animationStyle]}>
            </Animated.View>
        </View>
    )
}

export default Animation7

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})