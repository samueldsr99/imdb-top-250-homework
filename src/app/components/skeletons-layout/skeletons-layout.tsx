import * as styles from "./skeletons-layout.css";

const Skeleton = () => <div className={styles.skeleton} />;

export default function SkeletonsLayout() {
  return (
    <div className={styles.root}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}
