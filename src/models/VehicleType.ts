import { useState } from "react";

interface TipoVeiculo {
    id: number,
    content: string,
    value: string,
}

export const listaTipos = <TipoVeiculo[]>([
    {id: 0, content: "Carro", value: "carros"},
    {id: 1, content: "Moto", value: "motos"},
    {id: 2, content: "Caminhāo", value: "caminhoes"},
])