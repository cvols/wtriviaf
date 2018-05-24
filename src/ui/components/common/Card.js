import React from 'react'
import { View } from 'react-native'

const Card = (props) => {
    return (
        <View style={styles.card}>{props.children}</View>
    )
}

const styles = {
    card: {
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 20,
        minHeight: 333,
    }
}

export { Card }