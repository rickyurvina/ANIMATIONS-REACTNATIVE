import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'


const Animation6 = () => {

    const [animation] = useState(new Animated.Value(0))
    const [animation2] = useState(new Animated.Value(-50))

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animation2, {
                    toValue: -30,
                    duration: 0,
                    useNativeDriver: false
    
                }),//first animation
                Animated.timing(animation, {
                    toValue: 60,
                    duration: 500,
                    useNativeDriver: false
                }),//second animation
                Animated.timing(animation2, {
                    toValue: 30,
                    duration: 500,
                    useNativeDriver: false
    
                }),//first animation
                Animated.timing(animation, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: false
                }),
                Animated.timing(animation2, {
                    toValue: -30,
                    duration: 500,
                    useNativeDriver: false
                }),
            ])
        ).start()
    }, [])

    const animationStyle = {
        transform: [
            { translateY: animation },
            { translateX: animation2 }
        ]
    }

  return (
    <View style={{alignItems:'center'}}>
        <Animated.View style={[styles.box, animationStyle]}>

        </Animated.View>
    </View>
  )
}

export default Animation6

const styles = StyleSheet.create({
    box:{
        width:10,
        height:10,
        backgroundColor:'cornflowerblue'
    },
})