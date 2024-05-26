import { StarFilledIcon, StarIcon } from "@/ui/icons";

import * as styles from "./stars-rating.css";

export interface StarsRatingProps {
  rating: number;
  maxRating: number;
}

export default function StarsRating({ rating, maxRating }: StarsRatingProps) {
  const flooredRating = Math.floor(rating);

  return (
    <div className={styles.root}>
      {Array.from({ length: maxRating }, (_, index) => (
        <span key={index}>{index < flooredRating ? <StarFilledIcon /> : <StarIcon />}</span>
      ))}
    </div>
  );
}
