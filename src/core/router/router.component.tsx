import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoutes } from "@/core/router";
import {
  LoginPage,
  AccountListPage,
  AccountPage,
  TransferPage,
  MovementListPage,
} from "@/pages";
import { IntermediaryMovementAccount } from "@/pages/movement-list/intermediary-page/intermediary-page";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.root} element={<LoginPage />} />
        <Route path={appRoutes.accountList} element={<AccountListPage />} />
        <Route path={appRoutes.createAccount} element={<AccountPage />} />
        <Route path={appRoutes.intermediaryMovementAccount} element={<IntermediaryMovementAccount />} />
        <Route path={appRoutes.movements} element={<MovementListPage />} />
        <Route path={appRoutes.transfer} element={<TransferPage />} />
        <Route
          path={appRoutes.transferFromAccount}
          element={<TransferPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
