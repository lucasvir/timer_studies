import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export const Button = ({ children, onClick, type = 'button' }: ButtonProps) => {
  return (
    <button className={styles.botao} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
