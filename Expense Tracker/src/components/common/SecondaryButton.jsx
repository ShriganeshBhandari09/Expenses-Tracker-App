
const SecondaryButton = (props) => {
  return (
    <button className="secondary-btn">
      <img src={props.image} alt="" />
      {props.buttonname}
    </button>
  );
};
SecondaryButton.propTypes;

export default SecondaryButton;
