import Dice from "./Dice";
import Winner from "./Winner";

interface Prop {
  status: boolean;
  onClick: () => void;
}

function Roll({ status, onClick }: Prop) {
  var p1 = 1 + Math.floor(6 * Math.random());
  var p2 = 1 + Math.floor(6 * Math.random());
  var w = p1 === p2 ? 0 : p1 > p2 ? 1 : 2;

  return (
    <>
      {status && (
        <div className="alert alert-warning alert-dismissible">
          <Winner player={w} />
          <button
            type="button"
            className="btn-close btn-secondary"
            onClick={onClick}
          />
        </div>
      )}
      <div className="row justify-content-center">
        <div className="col">
          <Dice randomNumber={p1} />
          <h4>Player 1</h4>
        </div>
        <div className="col">
          <Dice randomNumber={p2} />
          <h3>Player 2</h3>
        </div>
      </div>
    </>
  );
}

export default Roll;
