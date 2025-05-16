import { Account, Errors } from "./account.page";

const isStringEmpty = (value :string) => value === "";

export const validateAccount = (account : Account) =>  {
    const errors :Errors = {succeed: true, typeError: "", nameError: ""}
    if(isStringEmpty(account.type)) {
        if(errors.succeed) errors.succeed = false;
        errors.typeError = "Se debe introducir el tipo de cuenta";
    }
    if(isStringEmpty(account.name)) {
        if(errors.succeed) errors.succeed = false;
        errors.nameError = "Se debe introducir nombre para la cuenta";
    }
    return errors
}