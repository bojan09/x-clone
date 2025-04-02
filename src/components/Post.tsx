import Image from "@/components/Image";
import PostInfo from "@/components/PostInfo";
import PostInteractions from "@/components/PostInteractions";

const Post = () => {
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* Post type */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        icon
        <span>Batman reposted</span>
      </div>
      {/* Post content */}
      <div className="flex gap-4">
        {/* Avatar */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            path="general/avatar.jpg"
            alt="post_image"
            width={100}
            height={100}
            transformation={true}
          />
        </div>
        {/* Content */}
        <div className="flex-1 flex-col gap-2">
          {/* Top Section */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-md font-bold">Batman</h1>
              <span className="text-textGray">@notbatman</span>
              <span className="text-textGray">1 hour ago </span>
            </div>
            <PostInfo />
          </div>
          {/* Text & Media */}
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            doloribus rerum eos, sint ab repellat excepturi dicta nobis non
            corporis deserunt facilis voluptatem temporibus? Vitae!
          </p>
          <Image
            path="general/post.jpeg"
            alt="post_image"
            width={600}
            height={600}
          />
          <PostInteractions />
        </div>
      </div>
    </div>
  );
};

export default Post;
