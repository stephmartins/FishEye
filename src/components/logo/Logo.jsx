import styles from "./Logo.module.css"
import Link from "next/link"

export default function Logo () {
       return (
<Link href="/">
<img className={styles.logo} src="/images/logo.png" alt="Logo Fisheye"/>

</Link>
    )
}