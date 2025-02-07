import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Post from "@/components/Post";

import Link from "next/link";

const Homepage = () => {
  return (
    <div className="">
      Homepage
      <div className="p-4 flex justify-between text-textGray font-bold border-b-[1px] border-borderGray">
        <Link
          className="pb-3 flex items-center border-b-4 border-iconBlue "
          href="/"
        >
          For you
        </Link>

        <Link className="pb-3 flex items-center" href="/">
          Following
        </Link>

        <Link className="pb-3 flex items-center" href="/">
          Next.js
        </Link>
        <Link className="pb-3 flex items-center" href="/">
          React.js
        </Link>
        <Link className="pb-3 flex items-center" href="/">
          JavaScript
        </Link>
      </div>
      <Share />
      <Post />
      <Feed />
    </div>
  );
};

export default Homepage;
