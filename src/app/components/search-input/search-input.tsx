"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { MagnifyingGlassIcon } from "@/ui/icons";

import * as styles from "./search-input.css";

export type SearchInputProps = React.ComponentPropsWithoutRef<"input">;

export default function SearchInput(props: SearchInputProps) {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const search = new FormData(event.target as HTMLFormElement).get("search") as string;
    router.push(`?q=${search}`);
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <input className={styles.input} id="search" name="search" {...props} autoComplete="off" />
      <button className={styles.iconButton} type="submit">
        <MagnifyingGlassIcon className={styles.icon} />
      </button>
    </form>
  );
}
