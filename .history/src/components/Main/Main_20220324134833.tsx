import { Card, Button } from '..';
import styles from './Main.module.scss';

export const Main = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <Card color="gray">
        <span>Сортировка</span>
        <Button appearance="primary" text="по городу" />
        <Button appearance="primary" text="по компании" />
      </Card>
      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatum error animi velit
        quasi laudantium similique ex debitis atque saepe, dolor necessitatibus quo adipisci
        asperiores molestias unde! A, ipsum
      </Card>
    </main>
  );
};
