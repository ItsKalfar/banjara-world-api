import { supabase } from "../../database/Supabase"

const getUsers = async () => {
    return await supabase.from("users").select();
}

const addUsers = async (userData: any) => {
    return await supabase.from("users").insert([userData])
}

const getUserByEmail = async (email: string) => {
    return await supabase.from("users").select().eq("email", email);
}

const deleteUser = async (userData: any, id: any) => {
    return await supabase.from("users").update(userData).eq("id", id)
}