import { Params } from "astro";
import { MercadoPagoConfig, Preference } from "mercadopago";

const ACCESS_TOKEN = import.meta.env.ACCESS_TOKEN;
const client = new MercadoPagoConfig({ accessToken: ACCESS_TOKEN });

export async function GET({params, request}: { params: Params, request: Request }) {
    return new Response(
      JSON.stringify({
        message: 'Hello World',
      })
    )
  }

export async function POST({params, request}: { params: Params, request: Request }) {
    let body
    try {
      body = {
        items: [
          {
            id: "",
            title: "Camiseta de la Casa",
            quantity: 1,
            unit_price: 100,
            currency_id: 'ARS'
          }
        ],
        back_urls: {
          success: 'https://e-commerce-unab.vercel.app/',
          failure: 'https://e-commerce-unab.vercel.app/',
          pending: 'https://e-commerce-unab.vercel.app/',
        },
        auto_return: "approved",
      }
      const preference = new Preference(client)
      const result = await preference.create({ body })
      return new Response(JSON.stringify(result.id), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } catch (error) {
      console.log(error)
      return new Response(JSON.stringify({ error }), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
  }