import { useNavigate } from 'wiscore/router';
import { Page } from 'example/page';

import styles from './Index.module.scss';

export default function Index() {
  const navigate = useNavigate();

  return (
    <Page title="Welcome to wis example">
      <div className={styles.list}>
        <a
          className={styles.item}
          href="none"
          target="__blank"
          onClick={(event) => {
            event.preventDefault();
            navigate('/todo');
          }}
        >
          Todo List
        </a>
      </div>
    </Page>
  );
}
