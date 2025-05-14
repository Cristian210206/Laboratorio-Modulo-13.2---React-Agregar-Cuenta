import { mapAccountListFromApiToVm } from "@/pages/account-list/account-list.mapper";
import { AccountVm } from "@/pages/account-list/account-list.vm";
import { getAccountList } from "@/pages/account-list/api";
import React from "react";
import { useState } from "react";
import { SelectAccounts } from "./components/select-accounts";
import { AppLayout } from "@/layouts";
import classes from "./intermediary-page.module.css";

export const IntermediaryMovementAccount: React.FC = () => {
    const [accountList, setAccountList] = useState<AccountVm[]>([])
    React.useEffect(() => {
        getAccountList().then((results) => setAccountList(mapAccountListFromApiToVm(results)))
      }, []);
    
    return (
    <AppLayout>
        <div className={classes.box}>
            <h1>Selecciona la cuenta de la cual quieres ver los movimientos</h1>
            <SelectAccounts accountList={accountList}/>
        </div>
    </AppLayout>
    );
}