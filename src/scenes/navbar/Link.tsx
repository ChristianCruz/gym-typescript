import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

// Specifying components through typescript
type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {
    // For passing ids to the href in AnchorLink:
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
            transition duration-500 hover:text-orimary-300
        `}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
    >
        {/* Dynamic page coming from our props */}
        {page}
    </AnchorLink>
  )
}
export default Link