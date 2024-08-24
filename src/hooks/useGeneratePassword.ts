import { useState } from "react";

const useGeneratePassword = () => {

    const [generatedPassword, setGeneratedPassword] = useState<string>("")

    const generatePassword: {} = (len: number, checkChars: { title: string, state: boolean }[]) => {
        let allowedChars = "";
        let tempPassword = ""

        checkChars.forEach((char) => {
            if (char.state) {
                switch (char.title) {
                    case "Include UpperCaseLetters":
                        allowedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                        break;
                    case "Include LowerCaseLetters":
                        allowedChars += 'abcdefghijklmnopqrstuvwxyz'
                        break;
                    case "Include SpecialCharacters":
                        allowedChars += "!@#$%^&*()"
                        break;
                    case "Include Numbers":
                        allowedChars += "1234567890"
                        break;
                    default:
                        allowedChars = ""
                        break;
                }
            }
        })


        for (let i = 0; i < len; i++) {
            tempPassword += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length))
        }

        setGeneratedPassword(tempPassword)
    }

    return { generatePassword, generatedPassword }
}


export default useGeneratePassword