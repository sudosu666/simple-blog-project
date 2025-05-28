/// <reference types="node" />/
//  pages/api/testimonials.ts
import type { NextApiRequest, NextApiResponse } from "next";

const YELP_API_KEY = process.env.YELP_API_KEY!;
const YELP_BUSINESS_ID = "kalin-and-po-moving-and-storage-san-francisco-3";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const yelpRes = await fetch(
      `https://api.yelp.com/v3/businesses/${YELP_BUSINESS_ID}/reviews`,
      {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
      }
    );

    if (!yelpRes.ok) {
      return res.status(500).json({ error: "Failed to fetch from Yelp" });
    }

    const data = await yelpRes.json();

    const testimonials = data.reviews.map((review: any) => ({
      name: review.user.name,
      comment: review.text,
    }));

    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
