"use client";
import React from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  preload?: "auto" | "metadata" | "none";
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  className = "",
  controls = false, // Controls disabled by default
  autoPlay = true, // Auto-play enabled by default
  muted = true, // Muted by default
  loop = true, // Loop enabled by default
  preload = "auto",
}) => {
  return (
    <video
      width="auto"
      height="auto"
      className={className}
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop} // Enable looping
      preload={preload}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
