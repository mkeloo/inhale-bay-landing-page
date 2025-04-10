"use client";
import React, { useEffect, useRef } from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  preload?: "auto" | "metadata" | "none";
  poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  className = "",
  controls = false, // Controls disabled by default
  autoPlay = true, // Auto-play enabled by default
  muted = true, // Muted by default
  loop = true, // Loop enabled by default
  playsInline = true,
  preload = "auto",
  poster
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (videoRef.current) {
        if (document.hidden) {
          videoRef.current.pause();
        } else {
          videoRef.current.play().catch((error) => {
            console.warn("Video play was prevented:", error);
          });
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      width="auto"
      height="auto"
      className={className}
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop} // Enable looping
      playsInline={playsInline}
      preload={preload}
      poster={poster}
      onContextMenu={(e) => e.preventDefault()} // Disable right-click context menu
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
