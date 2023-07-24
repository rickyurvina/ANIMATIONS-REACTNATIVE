import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'

const Animation3 = () => {

    const [animation] = useState(new Animated.Value(14))

    useEffect(() => {
        Animated.timing(
            animation, {
            toValue: 40,//valor que llega
            duration: 1000,
            useNativeDriver: false
     
        }
        ).start()

    }, [])
    return (
        <View>
            <Animated.Text style={[styles.txt, { fontSize: animation }]}>Animation33</Animated.Text>
        </View>
    )
}

export default Animation3

const styles = StyleSheet.create({

    txt: {
        fontSize: 30,
        textAlign: 'center',
    }
})