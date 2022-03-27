import { Card, Button } from '..';
import styles from './Main.module.scss';

export const Main = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <Card color="gray" className={styles.sort}>
        <span>Сортировка</span>
        <Button appearance="primary" text="по городу" />
        <Button appearance="primary" text="по компании" />
      </Card>
      <Card>
        <Button appearance="green" text="по компании" />
        <Button appearance="ghost" text="по компании" />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatum error animi velit
        quasi laudantium similique ex debitis atque saepe, dolor necessitatibus quo adipisci
        asperiores molestias unde! A, ipsum
      </Card>
    </main>
  );
};
