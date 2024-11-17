
const PrimaryButton = (props) => {
  return (
    <button className="primary-btn">
    <img src={props.image} alt="" />
    {props.buttonname}
  </button>
  )
}
PrimaryButton.propTypes;


export default PrimaryButton