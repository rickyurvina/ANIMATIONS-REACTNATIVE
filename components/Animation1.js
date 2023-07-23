import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useState, useEffect } from 'react'

const Animation1 = () => {

    const [animation] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(
            animation, {
            toValue: 1,//valor que llega
            duration: 500, //tiempo que tarda en llegar
            useNativeDriver: true
        }
        ).start()

    }, [])

    return (
        <Animated.View style={{ opacity: animation }}>
            <Text style={[styles.txt]}>Animation1</Text>
        </Animated.View>
    )
}

export default Animation1

const styles = StyleSheet.create({
    txt: {
        fontSize: 30,
        textAlign: 'center',
    }

})