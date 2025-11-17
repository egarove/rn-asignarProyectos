import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
    saludo: String;
    action: () => void;
}
const Raul = (props: Props) => {
    return (
        <View>
            <Text>{props.saludo}</Text>
            <Button
                onPress={() => props.action()}
                title="botonRaul"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />

        </View>

    )
}

export default Raul

const styles = StyleSheet.create({})