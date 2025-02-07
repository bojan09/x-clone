import Image from "@/components/Image";

const Share = () => {
  return (
    <div className="p-4 flex gap-4">
      {/* Avatar */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image
          path="general/avatar.jpg"
          alt="avatar"
          width={100}
          height={100}
          transformation={true}
        />
      </div>
      {/* Others */}
      <div className="flex-1 flex flex-col gap-4">
        <input type="text" placeholder="What is happening?" />
        <div className="">
          <div className="flex gap-4 flex-wrap">
            <Image
              path="icons/image.svg"
              alt="icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />

            <Image
              path="icons/gif.svg"
              alt="icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />

            <Image
              path="icons/poll.svg"
              alt="icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />

            <Image
              path="icons/emoji.svg"
              alt="icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />

            <Image
              path="icons/schedule.svg"
              alt="icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />

            <Image
              path="icons/location.svg"
              alt="icon"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>

          <button className="bg-white text-black font-bold rounded-full py-2 px-4">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
