import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.scss';
import cn from 'classnames';
import { ChangeEvent } from 'react';

export const Textarea = ({
  className,
  error,
  onChange,
  name,
  ...props
}: TextareaProps): JSX.Element => {
  return (
    <div className={cn(styles.textareaWrapper, className)}>
      <textarea
        className={cn(styles.textarea, {
          [styles.error]: error,
        })}
        {...props}
        name={name}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e)}
        readOnly={readOnly}
      ></textarea>
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};
