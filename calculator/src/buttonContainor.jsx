const ButtonContainor = () => {
  const buttons = [
    "c",
    "x",
    "+/-",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "%",
    "0",
    ".",
    "=",
  ];
  return (
    <>
      <div id="button-containor">{buttons.map(buttonName=><button className="buttons">{buttonName}</button>)}
      </div>
    </>
  );
};
export default ButtonContainor;
