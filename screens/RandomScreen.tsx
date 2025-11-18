import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Context';
import Lista from './components/Lista';
import { Alumno } from '../entities/Alumno';
import { AlumnosProyecto } from '../entities/AlumnosProyecto';
import { v4 as uuidv4 } from 'uuid';

const RandomScreen = () => {
    const { state, dispatch } = useContext(AppContext);
    const [alumnosProyecto, setAlumnosProyecto] = useState<AlumnosProyecto[]>([]); //estado para lista de alumnos por proyecto
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

        //una vez ya mezclados los alumnos creamos los objetos AlumnosProyectos
        state.proyectos.forEach(proyecto => {
            const alumnosList: Alumno[] = [];
            while(alumnosList.length<5){
                alumnos.forEach(alumno => {
                    if(!alumno.usado){
                        alumnosList.push(alumno.alumno);
                        alumno.usado= true;
                    }
                });
            }
            alumnosProyecto.push({id: proyecto.id, nombre: proyecto.nombre, alumnos: alumnosList});
        });

        console.log(alumnos);
    }

    return (
        <View>
            <View>
            <Button
                onPress={() => buildGroups()}
                title="Repartir"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />            
            </View>
            <View>
                {alumnosProyecto.map(proyecto => (
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                    {proyecto.nombre}
                    </Text>

                    {proyecto.alumnos.map(alumno => (
                    <Text key={alumno.id}>
                        {alumno.nombre}
                    </Text>
                    ))}

                </View>
                ))}
            </View>
        </View>        
    )
}

export default RandomScreen

const styles = StyleSheet.create({})