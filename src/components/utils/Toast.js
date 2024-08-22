import "react-toastify/dist/ReactToastify.css";
const Toast = ({ image, name, text }) => {
    return (
        <div className="addToast dfAc">
            <div className="img">
                <img src={image} alt={name} />
            </div>
            <p>{text}</p>
        </div>
    )
}
export default Toast;