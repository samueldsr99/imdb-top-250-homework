import styles from "./button.css";
import { clsx } from "@/ui/utils";

export interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "primary" | "secondary";
}

const Button = ({ variant = "primary", className, ...props }: ButtonProps) => {
  return (
    <button className={clsx(styles.button[variant], className)} {...props} />
  );
};

export default Button;
