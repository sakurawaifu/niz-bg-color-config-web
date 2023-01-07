import styles from './Home.module.scss'
import classnames from '@/utils/classnames'
import { CProps } from '@/types/CProps'

export type HomeProps = CProps<{}>

const Home = (props: HomeProps) => {
  return (
    <div className={classnames(styles.home, props.className)}>
      <header className={styles.header}>NIZ Background Color Config Web</header>
      <main className={styles.main}>
        main
      </main>
    </div>
  )
}

export default Home
