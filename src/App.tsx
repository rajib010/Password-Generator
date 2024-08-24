import { useEffect, useState } from "react"

import CheckBox from "./components/CheckBox"
import Buttons from "./components/Buttons"
import useGeneratePassword from "./hooks/useGeneratePassword"
import Strength from "./components/Strength"

type passwordCharactersType = {
  title: string,
  state: boolean
}

function App() {

  const { generatePassword, generatedPassword } = useGeneratePassword()

  const [length, setLength] = useState<number>(0)
  const [checkedCharacters, setCheckedCharacters] = useState<passwordCharactersType[]>([
    { title: 'Include UpperCaseLetters', state: false },
    { title: 'Include LowerCaseLetters', state: false },
    { title: 'Include SpecialCharacters', state: false },
    { title: 'Include Numbers', state: false },
  ])

  const [password, setPassword] = useState<string>("")
  const [copiedPassword, setCopiedPassword] = useState<boolean>(false)

  useEffect(() => {
    setPassword(generatedPassword)
  }, [generatedPassword])

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLength(Number(e.target.value))
  }

  const handleCheckBoxClick = (index: number) => {
    const updatedCharacters = checkedCharacters.map((box, i) =>
      i === index ? { ...box, state: !box.state } : box
    )
    setCheckedCharacters(updatedCharacters)
  }


  const handlePasswordGeneration = (e: React.FormEvent) => {
    e.preventDefault()
    generatePassword(length, checkedCharacters)
  }

  const handleCopyBtn = () => {
    setCopiedPassword(true)
    if (password) window.navigator.clipboard.writeText(password);
    setTimeout(() => {
      setCopiedPassword(false)
    }, 2000);
  }

  return (
    <div className="flex flex-col gap-5 max-w-md m-auto items-center justify-center text-white mt-[4vw] max-h-screen bg-slate-900 rounded-lg">
      <h1>Welcome to Password Generator</h1>
      <div className="w-full flex flex-row justify-between px-5">
        <h1>{password ? password : "passWord"}</h1>
        <Buttons title={copiedPassword ? "copied" : "copy"} type="button" className="max-w-sm p-4" btnClick={handleCopyBtn} />
      </div>
      <form onSubmit={handlePasswordGeneration} >
        <div className="flex flex-col items-center min-w-[30vw]">

          <input type="range"
            className="max-w-full "
            min={0}
            max={20}
            value={length}
            onChange={handleLengthChange} />
          <div className="max-w-full flex flex-row justify-between gap-[9vw]">
            <p>0</p>
            <p>20</p>
          </div>
        </div>
        <div className=" ml-5 flex flex-row flex-wrap gap-x-7 gap-y-4">
          {checkedCharacters.map((box, index) => (
            <CheckBox key={index} title={box.title} state={box.state}
              handleClick={() => handleCheckBoxClick(index)} />
          ))}
        </div>

        {password && <Strength password={password} />}
          
        <Buttons title="Generate Password" type="submit" className="max-w-md flex items-center my-5" btnClick={() => null} />

      </form>

    </div>
  )
}

export default App