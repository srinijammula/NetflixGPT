const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute aspect-video bg-gradient-to-r from-black">
      <div className="pt-36 px-12 text-white ">
      <h2 className="font-bold text-3xl">{title}</h2>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black px-6 py-2 rounded-md mr-4 hover:bg-opacity-50">▶ Play Now</button>
        <button className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-opacity-50">More Info</button>
      </div>
      </div>
    </div>
  );
}

export default VideoTitle;