import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.scss';
import cn from 'classnames';

export const Textarea = ({
  className,
  error,
  ...props
}: TextareaProps): JSX.Element => {
  return (
    <div className={cn(styles.textareaWrapper, className)}>
      <div
        className={cn(styles.textarea, {
          [styles.error]: error,
        })}
        contentEditable="true"
        {...props}
      ></div>
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};
