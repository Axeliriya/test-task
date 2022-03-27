import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.scss';
import cn from 'classnames';
import { ChangeEvent } from 'react';

export const Textarea = ({
  className,
  error,
  onChange,
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
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e)}
      ></div>
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};
