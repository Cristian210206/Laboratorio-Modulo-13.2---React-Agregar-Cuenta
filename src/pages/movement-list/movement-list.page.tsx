import { AppLayout } from "@/layouts";
import React, { useState } from "react";
import { MovementListTableComponent } from "./components/movement-list-table.component";
import { MovementVm } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
import { useParams } from "react-router-dom";
import { AccountVm } from "../account-list/account-list.vm";
import { getMovementList } from "./api/movement-list.api";
import { getAccountList } from "../account-list/api";
import { mapAccountListFromApiToVm } from "../account-list/account-list.mapper";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";

export const MovementListPage: React.FC = () => {
  const { id } = useParams();
  const [movementList, setMovementList] = useState<MovementVm[]>([]);
  const [accountList, setAccountList] = useState<AccountVm[]>();
  
  React.useEffect(() => {
    getMovementList().then((results) => setMovementList(mapMovementListFromApiToVm((results.filter((result) => result.accountId === id)))))
  }, []);

  React.useEffect(() => {
    getAccountList().then((results) => setAccountList(mapAccountListFromApiToVm(results)))
  }, []);

  const account = accountList?.find((result) => result.id === id)

  console.log(movementList)
  return (
  <AppLayout>
    <div className={classes.root}>
      <div className={classes.headerContainer}>
        <h1>Saldos y Últimos movimientos</h1>
        <div>
          <p className={classes.saldoDisponibleText}>SALDO DISPONIBLE</p>
          <p className={classes.saldoDisponible}>{account?.balance} €</p>
        </div>
      </div>
      <div className={classes.subHeader}>
          <p>Alias: {account?.name}</p>
          <p>IBAN: {account?.iban}</p>
      </div>
      <MovementListTableComponent movementList={movementList}/>
    </div>
  </AppLayout>
);
};
