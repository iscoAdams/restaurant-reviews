export default class customErr extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}
export const handleErr = (message:string, statusCode:number) => {
    return new customErr(message, statusCode);
} 
