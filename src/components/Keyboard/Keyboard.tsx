import styles from './Keyboard.module.scss'
import classnames from "@/utils/classnames";
import { CProps } from "@/types/CProps";

export type KeyboardProps = CProps<{}>

const KEYS_COUNT = 108

const Keyboard = (props: KeyboardProps) => {
  return (
    <div className={classnames(styles.keyboard, props.className)}>

    </div>
  )
}

export default Keyboard
