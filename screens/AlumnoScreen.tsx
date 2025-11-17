import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../context/Context';
import Lista from './components/Lista';
import Insert from './components/Insert';
import uuid from 'react-native-uuid';

const AlumnoScreen = () => {
    const { state, dispatch } = useContext(AppContext);
    const insertAlumn = (nombre: String) => {
        dispatch({ type: "addAlumn", payload: {
            id: uuid.v4(),
            nombre: nombre
        } })
    }

    const deleteAlumn = (id:String) => {
        dispatch({ type: "deleteAlumn", payload: id })
    }

    return (
        <View>

            <Insert action={insertAlumn} />

            <View>
                <Lista header={"gato"} state={state.alumnos} delete={deleteAlumn} />
            </View>
        </View>
    )
}

export default AlumnoScreen

const styles = StyleSheet.create({})