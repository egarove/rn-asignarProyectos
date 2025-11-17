import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useId } from 'react'
import { Alumno } from '../../entities/Alumno'
import { Proyecto } from '../../entities/Proyecto'
import ListaItem from './ListaItem'


interface Props {
    header: String,
    state: Alumno[] | Proyecto[],
    delete: (id: String) => void,
}

const Lista = (props: Props) => {
    return (
        <View>
            <FlatList
                data={props.state}
                renderItem={({ item }) => <ListaItem item={item} call={props.delete}/>}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default Lista

const styles = StyleSheet.create({})