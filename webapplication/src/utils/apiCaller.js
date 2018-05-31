import axios, {post} from 'axios'
import * as Config from '../constraints/Config'

const callAPI=  (endpoint, method='GET',body) =>{
    return  axios({
    headers:{
        Authorization: localStorage.getItem ('User')?JSON.parse (localStorage.getItem('User')).data.token:null
    },
    method: method,
    url: `${Config.API_URL}${endpoint}`,
    data: body
      }).then ( reg=> {return reg.data}).catch(err=>{
        console.log ('Error from Webservice: ', err)
        return {
                data:{},
                message:{
                    success: false,
                    error: 'Something was wrong with Webservice '
                }
            }
    });
}

export const callAPIForFormData = async(endpoint, formData) =>{
    try
    {
        const url= `${Config.API_URL}${endpoint}`
        const config = {
            headers: {
                Authorization: localStorage.getItem ('User')?JSON.parse (localStorage.getItem('User')).data.token:null,
                'content-type': 'multipart/form-data',
            }
        }
    const result = await post(url, formData,config)
    return result.data
    }
    catch (err) {
        console.log ('Loi anh', err)
        return {
            data:{},
            message:{
                success: false,
                error: 'Something was wrong with Webservice Upload Image'
                }
        }
    }
}

export default callAPI;