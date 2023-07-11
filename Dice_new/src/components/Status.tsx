interface Prop {
  onClick?: () => void;
}

function Status({ onClick }: Prop) {
  const style = { height: 50 };
  return (
    <>
      <div className="col-xs-12" style={style}></div>
      <h2 className="text-center">
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={onClick}
        >
          Roll
        </button>{" "}
        to play
      </h2>

      <div className="col-xs-12" style={style}></div>
    </>
  );
}
export default Status;
