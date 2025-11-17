import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Alumno } from '../../entities/Alumno'
import { Proyecto } from '../../entities/Proyecto'

interface Props {
    item: Alumno | Proyecto;
    call: (id: String) => void
}

const ListaItem = (props: Props) => {
    return (
        <View>
            <Text>{props.item.nombre}</Text>
            <Button
                onPress={() => props.call(props.item.id)}
                title="Delete"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
  )
}

export default ListaItem

const styles = StyleSheet.create({})