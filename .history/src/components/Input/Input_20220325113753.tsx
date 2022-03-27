import styles from './Input.module.css';

export const Input = ({ name, onChange, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        id={name}
        name={name}
        value={name}
        type="text"
        onChange={e => onChange(e)}
        {...props}
      />
      <label className={styles.label} htmlFor={name}>
        {name.replace(/\w/, m => m.toUpperCase())}
      </label>
    </div>
  );
};
