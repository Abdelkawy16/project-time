import Link from "next/link";

import classes from "./button.module.css";

export default function Button(props: any) {
  return (
    <Link href={props.link}>
      <button className={classes.btn}>{props.children}</button>
    </Link>
  );
}
