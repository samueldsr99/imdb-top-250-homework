import Link from "next/link";

import { ExternalLinkIcon } from "@/ui/icons";

import * as styles from "./people-links-section.css";

export interface PeopleLinksSectionProps {
  title: string;
  people: string[];
}

const getGoogleSearchUrl = (person: string) => `https://www.google.com/search?q=${encodeURIComponent(person)}`;

export default function PeopleLinksSection({ title, people }: PeopleLinksSectionProps) {
  return (
    <div className={styles.personLinksContainer}>
      <span>{title}:</span>
      {people.map((person) => (
        <Link key={person} href={getGoogleSearchUrl(person)} target="_blank" className={styles.personLink}>
          <span dangerouslySetInnerHTML={{ __html: person }} />
          <ExternalLinkIcon />
        </Link>
      ))}
    </div>
  );
}
