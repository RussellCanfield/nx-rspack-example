import styles from './app.module.css';
import { NxWelcome } from './nx-welcome';
import test from 'my-lib';

export function App() {
  test();
  return (
    <div className={styles['container']} data-testid="welcome">
      <NxWelcome title="my-app" />
    </div>
  );
}
