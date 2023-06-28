import styles from './Timer.module.scss';
import { useEffect, useState } from 'react';

import { Button } from '../Button';
import { Clock } from './Clock';
import { ITarefa } from '../../types/ITarefa';
import { tempoParaSegundos } from '../../common/utils/time';

interface TimerProps {
  selecionado: ITarefa | undefined;
  finalizarTarefa: () => void;
}

export const Timer = ({ selecionado, finalizarTarefa }: TimerProps) => {
  const [tempo, setTempo] = useState<number>();

  function countDown(initialTime: number = 0) {
    //recursive function
    setTimeout(() => {
      if (initialTime > 0) {
        setTempo(initialTime - 1);
        return countDown(initialTime - 1); //recursive function call
      }
      finalizarTarefa();
    }, 1000);
  }

  useEffect(() => {
    if (selecionado?.tempo) setTempo(tempoParaSegundos(selecionado.tempo));
  }, [selecionado]);

  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o timer</p>
      <div className={styles.relogioWrapper}>
        <Clock tempo={tempo} />
      </div>
      <Button onClick={() => countDown(tempo)}>Começar</Button>
    </div>
  );
};
