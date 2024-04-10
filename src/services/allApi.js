import commonApi from "./commonApi"
import { BASE_URL } from './base_url'



export const createStudent = async(data)=>{
    return await commonApi("POST",`${BASE_URL}/student`,data)
}


export const getStudent = async()=>{
    return await commonApi("GET",`${BASE_URL}/student`,'')
}



export const updateStudent = async(id,data)=>{
    return await commonApi("PUT",`${BASE_URL}/student/${id}`,data)
}

export const deleteStudent = async(id)=>{   
    return await commonApi("DELETE",`${BASE_URL}/student/${id}`,{})
}

export const getStudentOne = async(id)=>{
    return await commonApi("GET",`${BASE_URL}/student/${id}`,{})
}

