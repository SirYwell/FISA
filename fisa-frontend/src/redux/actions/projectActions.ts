// A collections of actions to change the Project Store

import { ValueType, BackendFisaProjectI } from '../interfaces';
import * as actionTypes from '../actionTypes';

export const addObjectByObjectDefinition = (definitionName: string) => ({
  type: actionTypes.NEW_OBJECT_FROM_OBJECT_DEFINITION,
  payload: { definitionName },
});

export const changeObjectProperty = (
  objectId: number,
  key: string,
  value: ValueType
) => ({
  type: actionTypes.CHANGE_OBJECT_VALUE,
  payload: {
    objectId,
    key,
    value,
  },
});

export const removeObject = (objectId: number) => ({
  type: actionTypes.REMOVE_OBJECT,
  payload: { objectId },
});

export const addObjectByExisting = (objectId: number) => ({
  type: actionTypes.ADD_OBJECT_FROM_EXISTING,
  payload: { objectId },
});

export const linkObject = (objectId: number) => ({
  type: actionTypes.LINK_OBJECT,
  payload: { objectId },
});

export const setFetchProjectName = (name: string) => ({
  type: actionTypes.SET_FETCH_PROJECT_NAME,
  payload: {
    name,
  },
});

export const loadAutoSave = () => ({
  type: actionTypes.LOAD_AUTO_SAVE,
  payload: undefined,
});

export const loadSavedProject = (project: BackendFisaProjectI) => ({
  type: actionTypes.LOAD_SAVED_PROJECT,
  payload: {
    project,
  },
});

export const extractFromCSV = (csv: string, definitionName: string) => ({
  type: actionTypes.EXTRACT_FROM_CSV,
  payload: {
    csv,
    definitionName,
  },
});

export const setFromBackend = () => ({
  type: actionTypes.SET_FROM_BACKEND_TRUE,
  payload: undefined,
});

export const changeProjectName = (newName: string) => ({
  type: actionTypes.CHANGE_PROJECT_NAME,
  payload: { newName },
});
