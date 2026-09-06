function ProjectVideo({ video }) {
  return (
    <div className="aspect-video overflow-hidden rounded-xl bg-black">
      <video
        className="h-full w-full object-contain"
        src={video}
        controls
        autoPlay
        playsInline
      >
        Your browser does not support the video player.
      </video>
    </div>
  );
}

export default ProjectVideo;