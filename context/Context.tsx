import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, ReactNode, useReducer } from 'react'
import { Alumno } from '../entities/Alumno';
import { Proyecto } from '../entities/Proyecto';

type State = {
  alumnos: Alumno[],
  proyectos: Proyecto[]
};



export type Action =
    | { type: "addAlumn" ; payload: Alumno }
    | { type: "deleteAlumn" ; payload: String }
    | { type: "addProyect" ; payload: Proyecto }
    | { type: "deleteProyect" ; payload: String }

const initialState: State = {
    alumnos: [],
    proyectos: []
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "addAlumn":
            return { ...state, alumnos: [...state.alumnos, action.payload]};
        case "deleteAlumn":
            return { ...state, alumnos: state.alumnos.filter((item) => item.id != action.payload)};
        case "addProyect":
            return { ...state, proyectos: [...state.proyectos, action.payload]};
        case "deleteProyect":
            return { ...state, proyectos: state.proyectos.filter((item) => item.id != action.payload)};
        default:
            return state;
    }
}

type AppContextProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const AppContext = createContext<AppContextProps>({
  state: initialState,
  dispatch: () => null,
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

