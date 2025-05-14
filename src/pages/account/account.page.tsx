import { AppLayout } from "@/layouts";
import React, { useState } from "react";
import classes from "./account.page.module.css"
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { saveAccount } from "./api/account-list.api";

export interface Account {
  type: string;
  name: string;
}

export interface Errors {
  numberErrors: number;
  typeError: string;
  nameError: string;
}

export const AccountPage: React.FC = () => {
  const [account, setAccount] = useState<Account>({type:"",name:""})
  const [errors, setErrors] = useState<Errors>({numberErrors: 0, typeError: "", nameError: ""})
  const navigate = useNavigate()
  const handleOnSaveClick = () => {
    const errorsTemp:Errors = {numberErrors: 0, typeError: "", nameError: ""}

    if (account.type === "") {
      errorsTemp.numberErrors++,
      errorsTemp.typeError = "Se debe introducir el tipo de cuenta";
    }

    if (account.name === "") {
      errorsTemp.numberErrors++,
      errorsTemp.nameError = "Se debe introducir nombre para la cuenta";
    }

    setErrors(errorsTemp)
    if (errorsTemp.numberErrors === 0) {
      saveAccount(account)
      navigate(appRoutes.accountList)
    }
  }

  return (
    <AppLayout>
      <div className={classes.root}>
        <h1 className={classes.title}>Cuenta Bancaria</h1>
        <div className={classes.selects}>
          <div>
            <div>
              <h3>Tipo de cuenta:</h3>
              <select onChange={(e) => setAccount({...account, type: e.target.value})}>
                <option value="">Seleccionar</option>
                <option value="1">Cuenta corriente</option>
                <option value="2">Ahorro</option>
                <option value="3">Cuenta nomina</option>
              </select>
            </div>
            {errors.typeError !== "" && <p>{errors.typeError}</p>}
          </div>
          <div>
            <div>
              <h3>Alias:</h3>
              <input type="text" onChange={(e) => setAccount({...account, name: e.target.value})}/>
            </div>
            {errors.nameError !== "" && <p>{errors.nameError}</p>}
          </div>
        </div>
        <button className={classes.boton} onClick={handleOnSaveClick}>GUARDAR</button>
      </div>
    </AppLayout>
  );
};
