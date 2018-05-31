import * as Types from '../constraints/InputLocationCST'

var initialState = {
    address: '',
    district: '',
    lat: '',
    lng: ''
};

export const handleInputLocation =  (state= initialState,action)=>{
    switch (action.type)
    {
        case Types.HANDLE_INPUT_LOCATION:
            state = {
                address: action.address,
                district: action.district,
                lat: action.lat,
                lng: action.lng
            }
            return {...state,state}
        default: return null;
    }
}