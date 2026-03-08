import { GoogleGenAI } from "@google/genai";

async function searchForArtistInfo() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "The user wants a DJ website like Timmy Trumpet, DjKara, and 'From our minds' combined. They also provided a link dj-gallery.preview.emergentagent.com which is inaccessible. Can you find the real name and typical visual style/images associated with 'DjKara' and 'Timmy Trumpet' and 'From our minds' (Richie Hawtin)? Also, check if 'dj-gallery' refers to a specific artist.",
    config: {
      tools: [{ googleSearch: {} }],
    },
  });

  console.log(response.text);
}

searchForArtistInfo();
