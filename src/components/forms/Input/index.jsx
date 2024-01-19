import { forwardRef } from "react";
import styles from "./style.module.scss"

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
    return (
        <div className={styles.loginInput}>
            <label>
                {label}
            </label>
            <input ref={ref} {...rest} />
                {error ? <p className={styles.teste}>{error.message}</p> : null}
        </div>
    )
});