import {acordReducer, StateType, TOGGLE_COLLAPSED} from "./2UncontrolledAccordion";

test('collapsed should be true', () => {
    //data
    //action
    //expect

    const state: StateType = {
        collapsed: false
    }

    const newState = acordReducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true)
})