import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.scss';
import cn from 'classnames';
import { ChangeEvent } from 'react';

export const Textarea = ({
  className,
  error,
  onKeyDown,
  onChange,
  readOnly,
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
        readOnly={readOnly}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e)}
        onKeyDown={(e: KeyboardEvent) => onKeyDown(e)}
      />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};
