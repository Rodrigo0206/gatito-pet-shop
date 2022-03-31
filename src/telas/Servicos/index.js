import React from 'react';

import { SafeAreaView, StatusBar, Text } from 'react-native';

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "NÃO DE BANHO NO SEU GATO! Mas se você quiser nós damos."
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Uma dose da vacina V4.Seu gato precisa de duas."   
    },
    {
        id: 3,
        nome: "Vacina Antirrabica",
        preco: 99.9,
        descricao: "Uma dose da vacina antirrabica. Seu gato precisa de uma por ano."   
    }
];

export default function Servicos(){
    return<SafeAreaView>
        <StatusBar/>
        <Text>Servicos!</Text>
    </SafeAreaView>
}