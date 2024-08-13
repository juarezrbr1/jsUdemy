import { call, put, all, takeLatest } from "redux-saga/effects";
import { get } from 'lodash';
import * as actions from "./actions";
import * as types from "../types";
import axios from "../../../services/axios";
import history from "../../../services/history";
import { toast } from "react-toastify";

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, "/tokens", payload);
    yield put(actions.loginSuccess({ ...response.data }));

    toast.success("Login efetuado com sucesso");

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push(payload.prevPath);
  } catch (e) {
    toast.error("Usuário ou senha inválidos");
    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, "auth.token", "");
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;

  // yield put(actions.loginSuccess({ token }));
}

function* registerRequest({ payload }) {
  const { id, nome, email, password } = payload;

  try {
    if(id) {
      yield call(axios.put, '/users', {
        email,
        nome,
        password: password || undefined,
      })
      toast.success("Usuário atualizado com sucesso");
      yield put(actions.registerSuccess({ nome, email, password}));
    }

  } catch (e) {
    const errors = get((e, 'response.data.error', []));
    // const status = get((e, 'response.status', 0));

    if(errors.length > 0) {
      errors.map(error => toast.error(error))
    } else {
      toast.error("Ocorreu um erro");
    }
    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
