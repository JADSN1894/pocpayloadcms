import { Payload } from 'payload'

export async function seedLaboraties(payload: Payload) {
  try {
    const responseLab212 = await payload.create({
      collection: 'laboratories',
      data: {
        laboratory: 'Mecanica - 212',
      },
    })
    console.log('Laboratory created:', responseLab212)

    const responseLab206 = await payload.create({
      collection: 'laboratories',
      data: {
        laboratory: 'Fluidos Calor e Ondas - 206',
      },
    })

    console.log('Laboratory created:', responseLab206)

    const responseLab210 = await payload.create({
      collection: 'laboratories',
      data: {
        laboratory: 'Eletricidade e Magnetismo - 210',
      },
    })

    console.log('Laboratory created:', responseLab210)

    const responseLab208 = await payload.create({
      collection: 'laboratories',
      data: {
        laboratory: 'Fisica Moderna e Fisica Eletrônica - 208',
      },
    })

    console.log('Laboratory created:', responseLab208)

    const responseLab204 = await payload.create({
      collection: 'laboratories',
      data: {
        laboratory: 'Instrumentação ao Ensino de Física - 204',
      },
    })

    console.log('Laboratory created:', responseLab204)

    const responseLab999 = await payload.create({
      collection: 'laboratories',
      data: {
        laboratory: 'Desconhecido - 999',
      },
    })
    console.log('Laboratory created:', responseLab999)
  } catch (error) {
    console.error('Error seeding labortatories:', JSON.stringify(error, null, 2))
  }
}
