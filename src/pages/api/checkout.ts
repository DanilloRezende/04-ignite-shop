import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const {priceId} = req.body; 

    if (req.method != "POST") {
    return res.status(405).json({error: 'Method not allowed.'})
    }
    
    if (!priceId) {
        return res.status(400).json({ error: 'Price not found.'})
    }

    const succsselUrl = `${process.env.NEXT_URL}/success`
    const cancellUrl = `${process.env.NEXT_URL}/`

    const checkoutSessions = await stripe.checkout.sessions.create({
        success_url: succsselUrl,
        cancel_url: cancellUrl,
        mode: 'payment',
        line_items: [
            {
                price: priceId,
                quantity: 1,
            }
        ],
    }) 

    return res.status(201).json({
        checkoutUrl: checkoutSessions.url,
    });
}