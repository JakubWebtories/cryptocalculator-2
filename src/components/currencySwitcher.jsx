import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../redux/action";

export const CurrencySwitcher = () => {
  const currency = useSelector((state) => state.currency.currency);
  const dispatch = useDispatch();

  const handleCurrencySwitch = (e) => {
    const newCurrency = e.target.value;
    dispatch(setCurrency(newCurrency));
  };

  return (
    <div>
      <div>currencySwitcher</div>
      <select
        name="currencySwitcher"
        value={currency}
        onChange={handleCurrencySwitch}
      >
        <option value="czk">CZK</option>
        <option value="usd">USD</option>
      </select>
    </div>
  );
};

// export const CurrencySwitcher = () => {
//   const handleCurrencySwitch = (e) => {
//     let newCurrency = e.target.value;
//     console.log(newCurrency);
//   };

//   return (
//     <div>
//       <div>currencySwitcher</div>
//       <select name="currencySwitcher" onChange={handleCurrencySwitch}>
//         <option value="czk">czk</option>
//         <option value="usd">usd</option>
//       </select>
//     </div>
//   );
// };
