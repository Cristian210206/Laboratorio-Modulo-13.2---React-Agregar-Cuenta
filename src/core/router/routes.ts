export const routesPrefixes = {
  accountList: "/account",
  account: "account",
  transfer: "/transfer",
  movement: "/movement",
};

export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.accountList,
  createAccount: "/create-account",
  movements: "/movements/:id",
  intermediaryMovementAccount: "/movements",
  transfer: routesPrefixes.transfer,
  transferFromAccount: `${routesPrefixes.transfer}/:id`,
};
