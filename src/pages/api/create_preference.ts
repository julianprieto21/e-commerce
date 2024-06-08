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
    if (!request.body) return new Response(JSON.stringify({ error: 'No body' }), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await request.json()
    console.log(data)
    try {
      body = {
        items: data.map((product: any) => ({
          id: product.id,
          title: product.title,
          quantity: product.quantity,
          unit_price: product.unit_price,
          currency_id: product.currency_id,
          picture_url: "https://raw.githubusercontent.com/julianprieto21/e-commerce/master/public/images/bundesliga/bay-1.webp",
        })),
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