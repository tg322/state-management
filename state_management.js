class state_management{
    constructor(){
        this.states_array = [];
    }

    createState(initial_value){
        let state = initial_value;

        const getState = () => state;

        const setState = (newValue) => {
            state = newValue;
        }

        return [getState, setState]
    }
}

export default state_management;

if (typeof window !== 'undefined') {
    window.state_management = new state_management();
}