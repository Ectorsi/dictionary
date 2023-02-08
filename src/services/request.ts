import {api} from './api';

export const reqGet = async (palavra: string) => {
    await api.get(palavra)
    .then((res) => {
        return res.data;
    })
    
}