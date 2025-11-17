import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from '../context/Context';
import Lista from './components/Lista';

const RandomScreen = () => {
    const { state, dispatch } = useContext(AppContext);
    const buildGroups = ()=> {
        let groups = null;
        let alumnosMapper = Array.from( { length: state.alumnos.length }, (_,i) => {
            return {
                alumno: state.alumnos[i],
                orden: Math.floor(Math.random()*state.alumnos.length),
                usado: false
            }
        });

        let alumnos = alumnosMapper.map( (item,i) => {
            
            let elemento = alumnosMapper.find((e) => e.orden < item.orden && e.usado == false);
            console.log(elemento);
            if (elemento !== undefined) {
                const j = alumnosMapper.indexOf(elemento);
                alumnosMapper[j] = item;
                elemento.usado = true;
                item.usado = true;
                return elemento;
            }
            return item;
        });

        console.log(alumnos);
    }

    return (
        <View>
            <Button
                onPress={() => buildGroups()}
                title="Repartir"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            
        </View>
    )
}

export default RandomScreen

const styles = StyleSheet.create({})