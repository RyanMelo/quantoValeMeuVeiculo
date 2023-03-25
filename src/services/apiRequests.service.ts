import axios from 'axios';


const api = axios.create({
    baseURL : "https://parallelum.com.br/fipe/api/v1"
});

export async function GetMarcas(selectTipo: any) {
    const response = await api.get(`/${selectTipo}/marcas`)
    return response.data; 
}

export async function GetModelos(selectTipo: any, selectMarca: any) {
    const response = await api.get(`/${selectTipo}/marcas/${selectMarca}/modelos`)
    return response.data.modelos;
}

export async function GetAnos(selectTipo: any, selectMarca: any, selectModelo: any) {
    const response = await api.get(`/${selectTipo}/marcas/${selectMarca}/modelos/${selectModelo}/anos`)
    return response.data;
}

export async function GetResult(selectTipo: any, selectMarca: any, selectModelo: any, selectAno: any) {
    const response = await api.get(`/${selectTipo}/marcas/${selectMarca}/modelos/${selectModelo}/anos/${selectAno}`);
    return response.data;
}