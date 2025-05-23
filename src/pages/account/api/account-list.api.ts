import Axios from "axios";
import { Account } from "../account.page";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const saveAccount = (account: Account): Promise<Account> =>
  Axios.post<Account>(url, account).then(({ data }) => data);