import { AccountVm } from "@/pages/account-list/account-list.vm";

interface Props {
      account: AccountVm;
}

export const OptionAccounts : React.FC<Props> = (props) => {
    const { account } = props;
    
    return (
        <option value={account.id}>
            {account.name}
        </option>
    )
}