import { AppLayout } from "@/layouts";
import React, { useState } from "react";
import classes from "./account.page.module.css"
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { saveAccount } from "./api/account-list.api";
import { validateAccount } from "./account.page.validator";

export interface Account {
  type: string;
  name: string;
}

export interface Errors {
  succeed: boolean;
  typeError: string;
  nameError: string;
}

export const AccountPage: React.FC = () => {
  const [account, setAccount] = useState<Account>({type:"",name:""})
  const [errors, setErrors] = useState<Errors>({succeed: true, typeError: "", nameError: ""})
  const navigate = useNavigate()
  const handleOnSaveClick = () => {
    const errorsTemp:Errors = validateAccount(account);
    if (errorsTemp.succeed) {
      saveAccount(account)
      navigate(appRoutes.accountList)
    } else {
      setErrors(errorsTemp)
    }
  }

  return (
    <AppLayout>
      <div className={classes.root}>
        <h1 className={classes.title}>Cuenta Bancaria</h1>
        <form className={classes.selects}>
          <div>
            <div>
              <label htmlFor="type">Tipo de cuenta:</label>
              <select name="type" onChange={(e) => setAccount({...account, type: e.target.value})}>
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
              <label htmlFor="name">Alias:</label>
              <input type="text" name="name" onChange={(e) => setAccount({...account, name: e.target.value})}/>
            </div>
            {errors.nameError !== "" && <p>{errors.nameError}</p>}
          </div>
        </form>
        <button className={classes.boton} onClick={handleOnSaveClick}>GUARDAR</button>
      </div>
    </AppLayout>
  );
};
