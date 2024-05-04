import OpenAI from "openai"
import { appConfig }  from "../config/config"

const apiKey: string = appConfig.OPENAI.apiKey

const OpenAIClient = new OpenAI({
    apiKey
})



const getChatCompletion = async (prompt: string) => {
    try{
        const completion = await OpenAIClient.chat.completions.create({
            messages: [{
                role: "system",
                content: prompt
            }],
            model: "gpt-4-turbo-preview",
            response_format: { type: "json_object" }
        })
        return completion.choices[0].message.content;
    }catch (e: any){
        throw e;
    }
}

const getTextEmbeddings = async (text: string) => {
    try{
        const response = await OpenAIClient.embeddings.create({
            model: "text-embedding-3-small",
            input: text,
            encoding_format: "float",
        });
        return response.data[0].embedding;
    }catch (e: any){
        throw e;
    }
}

export default {
    getChatCompletion,
    getTextEmbeddings
}