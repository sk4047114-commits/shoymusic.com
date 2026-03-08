import { GoogleGenAI } from "@google/genai";

async function getArtistDetails() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "The user is asking 'where are my names and pictures?' after I built a DJ website for them. They previously pointed to dj-gallery.preview.emergentagent.com. Can you find out who the artist 'DJ Gallery' is or what name is associated with that URL? Also, provide some high-quality image URLs for DJ Kara and Timmy Trumpet that I can use as placeholders if I can't find the user's specific ones.",
    config: {
      tools: [{ googleSearch: {} }],
    },
  });
  console.log(response.text);
}

getArtistDetails();
