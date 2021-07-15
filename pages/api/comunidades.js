import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST') {
            const TOKEN = '7a7f86884178d2d1be6eb5de1bb514';
        const client = new SiteClient(TOKEN)

        // Validar os dados, antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "967768", // ID do Model de "Communities" criado pelo Dato
            ...request.body,
            // title: "Comunidade de Teste",
            // imageUrl: "https://github.com/filipefdm.png",
            // creatorSlug: "filipefdm"
        });

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}