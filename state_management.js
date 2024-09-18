class state_management{
    constructor(){
        this.states_array = [];
    }

    createState(initial_value){
        let state = initial_value;

        const getState = () => state;

        const setState = (newValue) => {
            return new Promise((resolve) => {
                state = newValue;
                resolve(state); // Resolve the promise once the state has been updated
            });
        }

        return [getState, setState]
    }
}