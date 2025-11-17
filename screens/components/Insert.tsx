import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

interface Props{
    action: (gato: String) => void 
}
const Insert = (props: Props) => {
    const [item, onChangeItem] = React.useState('');
    return (
        <View>
            <Text>Insert</Text>
            <TextInput
                onChangeText={onChangeItem}
                value={item}
                placeholder="guitarra"
            />

            <Button
                onPress={() => props.action(item.toString())}
                title="Add"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}

export default Insert

const styles = StyleSheet.create({})