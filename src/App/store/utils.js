// @flow

import { take, select } from 'redux-saga/effects'
import { REHYDRATE } from 'redux-persist/lib/constants'

//
export function* waitRehydrate(): Generator<any, any, any> {
    // wait for redux-persist rehydration

    let {_persist:{ rehydrated }} = yield select();

    while (!rehydrated) {
        yield take(REHYDRATE);
        ({_persist:{ rehydrated }} = yield select());
    }
}
