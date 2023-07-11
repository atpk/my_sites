interface Prop {
  player: number;
}

function Winner({ player }: Prop) {
  return player === 0 ? (
    <h2 className="text-danger">Oops! You both are unlucky!!!</h2>
  ) : (
    <h2 className="text-primary">
      Player {player} is lucky to win the game!!!
    </h2>
  );
}
export default Winner;
