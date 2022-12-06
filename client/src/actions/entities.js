import { REGISTER_ENTITY } from "./types";

export const registerEntity =
  (currentTile, entityId, entityType) => (dispatch) => {
    dispatch({
      type: REGISTER_ENTITY,
      payload: {
        currentTile: currentTile,
        entityId: entityId,
        type: entityType,
      },
    });
  };
