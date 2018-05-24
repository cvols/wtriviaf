/**
 * @flow
 *
 * The Logged In Home screen is a simple screen indicating that the user has logged in.
 */
import React from 'react'
import { View, Text } from 'react-native'

import Screen from '../../ui/components/Screen'

export default class FindLeague extends React.Component<*> {
    render() {
        return (
            <Screen>
                <View>
                    <Text>Find a Leauge</Text>
                </View>
            </Screen>
        )
    }
}