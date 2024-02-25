import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PaymentPage.module.scss";
import NavigationBar from "../components/NavigationBar";
import { CartContext } from "../components/CartContext";
import DatePickerCustom from "../components/CustomSign/DatePicker"; // Update import

function PaymentPage() {
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expirationDate: null, // Change expirationDate to null
    cvv: "",
    billingAddress: "",
  });
  const [paymentStatus, setPaymentStatus] = useState("");
  const navigate = useNavigate();
  // const location = useLocation();
  const { cart, clearCart } = useContext(CartContext);

  const [totalPrice, setTotalPrice] = useState(0);

  // Individual focus state for each input field
  const [isCardNumberFocused, setIsCardNumberFocused] = useState(false);
  const [isCvvFocused, setIsCvvFocused] = useState(false);
  const [isBillingAddressFocused, setIsBillingAddressFocused] = useState(false);
  // const [isExpirationDateFocused, setIsExpirationDateFocused] = useState(false);

  useEffect(() => {
    // Calculate total price when cart changes
    const calculateTotalPrice = () => {
      let totalPrice = 0;
      cart.forEach((product) => {
        totalPrice += product.price * product.quantity; // Multiply price by quantity
      });
      return totalPrice;
    };

    setTotalPrice(calculateTotalPrice()); // Update total price
  }, [cart]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleInputFocus = (inputName) => {
    switch (inputName) {
      case "cardNumber":
        setIsCardNumberFocused(true);
        break;
      case "cvv":
        setIsCvvFocused(true);
        break;
      case "billingAddress":
        setIsBillingAddressFocused(true);
        break;
      // case "expirationDate":
      //   setIsExpirationDateFocused(true);
      //   break;
      default:
        break;
    }
  };

  const handleInputBlur = (inputName) => {
    switch (inputName) {
      case "cardNumber":
        setIsCardNumberFocused(false);
        break;
      case "cvv":
        setIsCvvFocused(false);
        break;
      case "billingAddress":
        setIsBillingAddressFocused(false);
        break;
      // case "expirationDate":
      //   setIsExpirationDateFocused(false);
      //   break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for letters in cardNumber and cvv fields
    const cardNumberValid = /^\d+$/.test(paymentData.cardNumber);
    const cvvValid = /^\d+$/.test(paymentData.cvv);

    if (!cardNumberValid || !cvvValid) {
      setPaymentStatus("error");
      return;
    }

    // Simulate payment submission process
    const isValid = Object.values(paymentData).every(Boolean);

    if (isValid) {
      setPaymentData({
        cardNumber: "",
        expirationDate: null,
        cvv: "",
        billingAddress: "",
      });

      clearCart();

      sessionStorage.setItem("paymentSuccessDisplayed", "true");
      setPaymentStatus("success");
      navigate("/home", { state: { paymentStatus: "success" } });
    } else {
      setPaymentStatus("error");
    }
  };

  // const handleDateChange = (date) => {
  //   setPaymentData({ ...paymentData, expirationDate: date });
  // };

  const handleDateChange = (name, date) => {
    setPaymentData({ ...paymentData, [name]: date });
  };

  return (
    <>
      <NavigationBar
        showNavBar={true}
        setStatus={setPaymentStatus}
        status={paymentStatus}
        errorMessage={
          "Payment failed. Please check your information and try again."
        }
        successMessage={"Payment successful! Thank you for your purchase."}
      />

      <div className={styles["paymentPage"]}>
        <h2>Payment Information</h2>
        <p className={styles["totalPrice"]}>
          {" "}
          Total Price to Pay: ${totalPrice}
        </p>
        <form onSubmit={handleSubmit} className={styles["paymentForm"]}>
          <label>
            Card Number:
            <div
              className={`${styles.inputContainer} ${
                isCardNumberFocused ? styles.focus : ""
              }`}>
              <input
                type="text"
                name="cardNumber"
                value={paymentData.cardNumber}
                onChange={handleInputChange}
                className={styles["input"]}
                onFocus={() => handleInputFocus("cardNumber")}
                onBlur={() => handleInputBlur("cardNumber")}
              />
            </div>
          </label>
          <label>
            Expiration Date:
            <div className={styles["inputDate"]}>
              {/* className={` ${isExpirationDateFocused ? styles["focus"] : ""}`} */}
              <DatePickerCustom
                name="expirationDate"
                selected={paymentData.expirationDate}
                onChange={handleDateChange}
                popperPlacement="top"
              />
            </div>
          </label>
          <label>
            CVV:
            <div
              className={`${styles["inputContainer"]} ${
                isCvvFocused ? styles["focus"] : ""
              } ${styles["inputCVV"]}`}>
              <input
                type="text"
                name="cvv"
                value={paymentData.cvv}
                onChange={handleInputChange}
                className={`${styles["input"]} ${styles["cvv"]}`}
                maxLength={3}
                onFocus={() => handleInputFocus("cvv")}
                onBlur={() => handleInputBlur("cvv")}
              />
            </div>
          </label>
          <label>
            Billing Address:
            <div
              className={`${styles.inputContainer} ${
                isBillingAddressFocused ? styles.focus : ""
              }`}>
              <input
                type="text"
                name="billingAddress"
                value={paymentData.billingAddress}
                onChange={handleInputChange}
                className={styles["input"]}
                onFocus={() => handleInputFocus("billingAddress")}
                onBlur={() => handleInputBlur("billingAddress")}
              />
            </div>
          </label>
          <button type="submit">Submit Payment</button>
        </form>
      </div>
    </>
  );
}

export default PaymentPage;
