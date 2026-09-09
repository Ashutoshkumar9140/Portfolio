function ProjectVideo({ video }) {
  return (
    <div className="aspect-video rounded-xl overflow-hidden bg-black">
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