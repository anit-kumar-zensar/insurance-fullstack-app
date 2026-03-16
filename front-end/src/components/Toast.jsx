import { useEffect } from "react";
import "./Toast.css";

const ToastNotification = ({ setShow, show, title = "Success" }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setShow(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [show, setShow]);

  return show ? (
    <div className="custom-toast">
      <div className="toast-content">
        <strong className="toast-title">{title}</strong>
      </div>
    </div>
  ) : null;
};

export default ToastNotification;
