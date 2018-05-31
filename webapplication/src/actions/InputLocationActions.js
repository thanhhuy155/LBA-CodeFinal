import * as Types from '../constraints/InputLocationCST'
export const actHandleInputLocation = (address, district, lat, lng) => {
    return {
        type: Types.HANDLE_INPUT_LOCATION,
        address,
        district,
        lat,
        lng
    }
}
