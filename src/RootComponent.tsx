import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

type Props = {

}

export const RootComponent: React.FC<Props> = props =>
    <View style={styles.container}>
        <Text>Expo Typescript Starter</Text>
    </View>
