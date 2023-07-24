import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated } from 'react-native'
import React, { useState, useEffect } from 'react'

const Animation5 = () => {

    const [animation] = useState(new Animated.Value(1))

    const pressButton = () => {
        Animated.spring(animation, {
            toValue: .8,//value to reach
            useNativeDriver: false
        }).start()
    }

    const releaseButton = () => {
        Animated.spring(animation, {
            toValue: 1,//value to reach
            friction: 1,//how fast it will return to its original state
            useNativeDriver: false,
            tension: 10//how fast it will reach the value
        }).start()
    }

    const animationStyle = {
        transform: [{ scale: animation }]
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPressIn={() => pressButton()}
                onPressOut={() => releaseButton()}
            >
                <Animated.View style={[styles.btn, animationStyle]}>
                    <Text style={styles.txt}>Login</Text>

                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Animation5

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    btn: {
        backgroundColor: 'cornflowerblue',
        width: 280,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 28,
        textTransform: 'uppercase'
    }

})