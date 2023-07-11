interface Props {
  randomNumber: number;
}

function Dice({ randomNumber }: Props) {
  var imgg = "/images/dice" + randomNumber + ".png";
  return (
    <img src={imgg} alt="Logo" className="d-inline-block align-text-top" />
  );
}
export default Dice;
