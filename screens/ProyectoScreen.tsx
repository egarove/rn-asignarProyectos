import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../context/Context';
import Lista from './components/Lista';
import Raul from './components/Raul';
import Insert from './components/Insert';
import uuid from 'react-native-uuid';

const ProyectoScreen = () => {
  const { state, dispatch } = useContext(AppContext);
  console.log(state.proyectos);
  const insertProject = (gato: String) => {
    dispatch({
      type: "addProyect", payload: {
        id: uuid.v4(),
        nombre: gato
      }
    })
  }

  const deleteProyect = (id:String) => {
        dispatch({ type: "deleteProyect", payload: id })
  }

  return (
    <View>

      <Insert action={insertProject} />

      <View>
        <Lista header={"gato"} state={state.proyectos} delete={deleteProyect} />
      </View>
    </View>
  )
}

export default ProyectoScreen

const styles = StyleSheet.create({})