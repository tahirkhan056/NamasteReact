const Shimmer = () => {
  return (
    <div className="content">
      {Array(12)
        .fill("")
        .map((shim, index) => {
          return <div key={index} className="shimmer-card"></div>;
        })}
    </div>
  );
};

export default Shimmer;
