import styles from './List.module.scss';

import { Item } from './Item';
import { ITarefa } from '../../types/ITarefa';

interface ListProps {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export const List = ({ tarefas, selecionaTarefa }: ListProps) => {
  return (
    <aside className={styles.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa) => (
          <Item key={tarefa.id} selecionaTarefa={selecionaTarefa} {...tarefa} />
        ))}
      </ul>
    </aside>
  );
};
