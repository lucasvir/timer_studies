import styles from './Form.module.scss';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Button } from '../Button';
import { ITarefa } from '../../types/ITarefa';

interface FormProps {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[] | []>>;
}

export const Form = ({ setTarefas }: FormProps) => {
  const [tempo, setTempo] = useState('01:00');
  const [tarefa, setTarefa] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTarefas((prevState) => [
      ...prevState,
      { id: uuid(), tarefa, tempo, selecionado: false, completado: false },
    ]);
    setTarefa('');
    setTempo('01:00');
  }

  return (
    <form className={styles.novaTarefa} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          id="tarefa"
          type="text"
          name="tarefa"
          placeholder="O que você quer estudar?"
          required
          onChange={(e) => setTarefa(e.target.value)}
          value={tarefa}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
          onChange={(e) => setTempo(e.target.value)}
          value={tempo}
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
};
