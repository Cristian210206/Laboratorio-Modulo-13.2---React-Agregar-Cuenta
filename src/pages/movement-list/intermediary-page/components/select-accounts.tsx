import { AccountVm } from "@/pages/account-list/account-list.vm";
import { OptionAccounts } from "./option-accounts";
import { generatePath, useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";
import classes from "./select-accounts.module.css"

interface Props {
      accountList: AccountVm[];
}

export const SelectAccounts : React.FC<Props> = (props) => {
    const { accountList } = props;
    const navigate = useNavigate();

    const handleSelectedOptionChange = (
        e: React.ChangeEvent<HTMLSelectElement>
      ): void => {
        if(Number(e.target.value) > 0) {
            navigate(
              generatePath(appRoutes.movements, {
                id: e.target.value,
              })
            )
        }
      };
    
    return (
        <select className={`${classes.selectContainer} ${classes.select}`} onChange={handleSelectedOptionChange}>
            <option value={0}>Seleccionar</option>
            {accountList.map((account) => (
                <OptionAccounts account={account} />
            ))}
        </select>
    )
}