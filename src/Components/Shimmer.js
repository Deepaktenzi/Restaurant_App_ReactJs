const Shimmer = () => {
  let card = 8;

  return (
    <div className="shimmer-list">
      {Array(12)
        .fill('')
        .map((e, idx) => (
          <div key={idx} className="shimmer-card"></div>
        ))}
      {/* <img />
          <h2></h2>
          <h3></h3>
          <h4></h4> */}
    </div>
  );
};

export default Shimmer;
