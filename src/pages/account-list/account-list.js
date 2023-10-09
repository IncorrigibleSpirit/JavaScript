import { getAccountList } from './account-list.api';
import { addAccountRows } from './account-list.helpers';
import { mapAccountListApiToViewModel } from './account-list.mappers';
import { onUpdateField } from '../../common/helpers';
import { history } from '../../core/router';

const setEvents = accountList => {
    accountList.forEach(account => {
        onUpdateField(`select-${account.id}`, event => {
        const route = event.target.value;
        history.push(route);
        });
    });
};


getAccountList().then(accountList => {
    const vmAccountList = mapAccountListApiToViewModel(accountList);
    addAccountRows(vmAccountList);
    setEvents(vmAccountList);
})



