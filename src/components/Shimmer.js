const Shimmer = () => {
  return (
    <div className=" mt-20 flex flex-wrap justify-center" data-testid="shimmer">
      {Array(12)
        .fill("")
        .map((shim, index) => {
          return (
            <div key={index} className="w-72 h-80 p-5 m-3 animate-pulse">
              <div className="w-[254px] h-40 bg-gray-200"></div>
              <div className="w-[200px] h-4 my-4 bg-gray-200"></div>
              <div className="w-[150px] h-4 my-4 bg-gray-200"></div>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
