import styles from './App.module.scss';
import { useState } from 'react';

import { Form } from '../components/Form';
import { List } from '../components/List';
import { Timer } from '../components/Timer';
import { ITarefa } from '../types/ITarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);

    setTarefas((prevState) =>
      prevState.map((tarefa) => {
        const tarefaMatched = tarefa.id === tarefaSelecionada.id;
        return {
          ...tarefa,
          selecionado: tarefaMatched ? true : false,
        };
      })
    );
  }

  function finalizarTarefa() {
    if (selecionado) {
      setTarefas((prevState) =>
        prevState.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }
          return tarefa;
        })
      );
    }
  }

  return (
    <div className={styles.AppStyle}>
      <Form setTarefas={setTarefas} />
      <Timer selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
      <List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
    </div>
  );
}

export default App;
