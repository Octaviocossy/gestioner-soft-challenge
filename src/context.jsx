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

  const textFormatter = (text) => {
    const textArr = [];

    for (let i = 0; i <= text.trim().length - 1; i++) {
      textArr[i] = text.trim().toLowerCase()[i];
    }

    const formattedText = [];

    for (let i = 0; i <= textArr.length - 1; i++) {
      let letter = '';

      if (textArr[i - 1] === ' ') {
        letter = textArr[i].toUpperCase();
        formattedText.splice(i, 1, letter);
      } else {
        if (i === 0) {
          letter = textArr[i].toUpperCase();
        } else {
          letter = textArr[i];
        }

        formattedText[i] = letter;
      }
    }

    return formattedText.join('');
  };

  const turnoFormatter = (tasks) => {
    const fixed = [];

    tasks.forEach((task) => {
      const copy = { ...task };

      copy.Descripcion = copy.Descripcion.toUpperCase()
        .replace('\nBUNGE | BUNGE', '')
        .trim();

      fixed.push(copy);
    });

    return fixed;
  };

  const getTasksParameters = () => {
    const nombres = [];
    const tipoCarga = [];
    const turno = [];

    if (datastatus) {
      tasks.map((task) => {
        nombres.push(textFormatter(task.Tarea.Nombre));
        tipoCarga.push(textFormatter(task.Tarea.TipoCargaDescripcion));
        turno.push(textFormatter(task.Descripcion));
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
      textFormatter(task.Tarea.Nombre),
      textFormatter(task.Tarea.TipoCargaDescripcion),
    ].concat(textFormatter(task.Descripcion));
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

    setTasks(turnoFormatter(data.TareaTurnoList));
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
    textFormatter,
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
