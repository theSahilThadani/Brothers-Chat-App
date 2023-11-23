import { ClassValue,clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs:ClassValue[]){
    return twMerge(clsx(inputs))
}

export function toPusherKey(key: string) {
    return key.replace(/:/g, '__')
  }

export function chatHrefConstructor(id1:string,id2:string){
    const sortIds=[id1,id2].sort()
    return `${sortIds[0]}--${sortIds[1]}`
}