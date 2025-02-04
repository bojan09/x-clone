"use client";

import { IKImage } from "imagekitio-next";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type ImageType = {
  path?: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
  transformation?: boolean;
};

const Image = ({
  path,
  width,
  height,
  alt,
  className,
  transformation,
}: ImageType) => {
  return (
    <div>
      <IKImage
        urlEndpoint={urlEndpoint}
        path={path}
        alt={alt}
        className={className}
        {...(transformation
          ? { transformation: [{ width: `${width}`, height: `${height}` }] }
          : { width: width, height: height })}
      />
    </div>
  );
};

export default Image;
