const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute aspect-video bg-gradient-to-r from-black">
      <div className="pt-20 md:pt-36 px-5 md:px-12 text-white ">
      <h2 className="font-bold text-xl md:text-3xl">{title}</h2>
      <p className="py-6 text-lg w-1/4 hidden md:inline-block">{overview}</p>
      <div className="">
        <button className="bg-white text-black md:px-6 px-2 md:py-2 rounded-md mr-4 hover:bg-opacity-50">▶ Play</button>
        <button className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-opacity-50 hidden md:inline-block">More Info</button>
      </div>
      </div>
    </div>
  );
}

export default VideoTitle;