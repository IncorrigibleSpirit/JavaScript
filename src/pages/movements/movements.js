import { getMovements, getAccount } from './movements.api';
import { movementsApiToVm } from './movements.mappers';
import { addMovementRows } from './movements.helpers';
import { history } from '../../core/router';
import { onSetValues } from '../../common/helpers';

// obtenemos el ID de la URL
const params = history.getParams();
const isMovementsMode = Boolean(params.id);

// Si es True...
if (isMovementsMode) {
  //console.log(params.id);

  // Recuperar movimientos
  getMovements(params.id)
    .then((apiAccount) => {
      const viewModelMovements = movementsApiToVm(apiAccount);
      console.log({ viewModelMovements });
      addMovementRows(viewModelMovements); // Genera tabla dinámicamente según data recuperada

      // Recuperar subtitulos de la interface
      getAccount(params.id)
        .then((apiAccount) => {
            console.log(apiAccount);
            onSetValues(apiAccount);
        });
    });
}
















