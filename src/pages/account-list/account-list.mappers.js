export const mapAccountListApiToViewModel = accountList =>
Array.isArray(accountList) ? accountList.map(account => mapAccountApiToViewModel(account))
: [];


const mapAccountApiToViewModel = account => ({
id: account.id,
iban: account.iban,
name: account.name,
balance: `${account.balance} €`,
lastTransaction: new Date(account.lastTransaction).toLocaleDateString(),
});