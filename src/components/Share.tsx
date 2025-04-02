"use client";
import Image from "@/components/Image";
import ImageNext from "next/image";
import { useState } from "react";

import { shareAction } from "../app/actions";
import ImageEditor from "./ImageEditor";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const previewURL = media ? URL.createObjectURL(media) : null;

  return (
    // Upload Form
    <form action={shareAction} className="p-4 flex gap-4">
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
        <input
          type="text"
          name="description"
          placeholder="What is happening?"
          className="bg-transparent outline-none placeholder-textGray text-xl"
        />

        {/* Preview Image */}
        {previewURL && (
          <div className="relative rounded-xl overflow-hidden">
            <ImageNext
              src={previewURL}
              alt="preview image"
              width={600}
              height={600}
            />
            <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-whitep py-1 px-4 rounded-full font-bold text-sm cursor-pointer">
              Edit
            </div>
          </div>
        )}
        {isEditorOpen && previewURL && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )}

        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input
              type="file"
              onChange={handleMediaChange}
              className="hidden"
              name="file"
              id="file"
            />
            <label htmlFor="file">
              <Image
                path="icons/image.svg"
                alt="icon"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </label>

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
    </form>
  );
};

export default Share;
