import { createContext, useContext, useEffect, useState } from 'react';

import api from './api';

const Context = createContext();

export const Provider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [datastatus, setDataStatus] = useState(false);
  const [tasksFiltered, setTasksFiltered] = useState([]);
  const [userfilteringparameters, setUserFilteringParameters] = useState([]);
  const [tasksparameters, setTasksParameters] = useState({
    nombres: [],
    tipoCarga: [],
    turno: [],
  });

  const formatTurnos = (tasks) => {
    const fixed = [];

    tasks.forEach((task) => {
      const copy = { ...task };

      copy.Descripcion = copy.Descripcion.toUpperCase()
        .replace('\nBUNGE | BUNGE', '')
        .trim();

      fixed.push(copy);
    });
    setTasks(fixed);
  };

  const getTasksParameters = () => {
    const nombres = [];
    const tipoCarga = [];
    const turno = [];

    if (datastatus) {
      tasks.map((task) => {
        nombres.push(task.Tarea.Nombre.trim().toUpperCase());
        tipoCarga.push(task.Tarea.TipoCargaDescripcion.trim().toUpperCase());
        turno.push(task.Descripcion.trim().toUpperCase());
      });
      setTasksParameters({
        nombres: [...new Set(nombres)],
        tipoCarga: [...new Set(tipoCarga)],
        turno: [...new Set(turno)],
      });
    }
  };

  const saveUserParameters = (param) => {
    const filtered = [];

    for (const i in param) {
      if (param[i] !== '-') {
        filtered.push(param[i]);
      }
    }

    setUserFilteringParameters(filtered);
  };

  const getParametersOfTasks = (task) => {
    return [
      task.Tarea.Nombre.trim().toUpperCase(),
      task.Tarea.TipoCargaDescripcion.trim().toUpperCase(),
    ].concat(task.Descripcion.trim().toUpperCase());
  };

  const filterTasksByUserParams = (userParameters, allTasks) => {
    return allTasks.filter((task) => {
      return userParameters.every((parameter) => {
        return getParametersOfTasks(task).includes(parameter);
      });
    });
  };

  const getData = async () => {
    const data = await api.getMock();

    formatTurnos(data.TareaTurnoList);
    setDataStatus(true);
  };

  useEffect(() => {
    setTasksFiltered(filterTasksByUserParams(userfilteringparameters, tasks));
  }, [userfilteringparameters]);

  const state = {
    tasks,
    tasksparameters,
    tasksFiltered,
  };
  const actions = {
    getData,
    getTasksParameters,
    saveUserParameters,
  };

  return (
    <Context.Provider value={{ actions, state }}>{children}</Context.Provider>
  );
};

export const useAppContext = () => {
  const { state, actions } = useContext(Context);

  return {
    state,
    actions,
  };
};
