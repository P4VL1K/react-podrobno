import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test('collapsed shoild be true', () => {

    const state: StateType = {
        collapsed: false
    }

    let newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true)
    expect(newState).not.toBe(state)
})