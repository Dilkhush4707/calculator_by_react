const ButtonContainor = ({ buttonOnClick }) => {
  const buttons = [
    "C",
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
      <div id="button-containor">
        {buttons.map((buttonName) => (
          <button
           key={buttonName}
            className="buttons"
            onClick={() => buttonOnClick( buttonName )}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
};
export default ButtonContainor;
