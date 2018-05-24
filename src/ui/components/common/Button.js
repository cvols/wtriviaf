import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends React.Component {
    render() {
        const { onPress, children, text } = this.props

        const { buttonStyle, textStyle } = styles

        return (
            <TouchableOpacity onPress={onPress} style={buttonStyle}>
                <Text style={textStyle}>{text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        padding: 10,
    },
    buttonStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#2196f3',
        borderRadius: 53,
        borderWidth: 1,
        borderColor: '#2196f3',
        marginLeft: 5,
        marginRight: 5,
        height: 67.5,
        width: 160,
    },
};

export { Button };