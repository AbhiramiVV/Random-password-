import { useState } from "react";
import PasswordLength from "./components/PasswordLength";
import IncludeUppercase from "./components/IncludeUppercase";
import IncludeLowercase from "./components/IncludeLowercase";
import IncludeNumbers from "./components/IncludeNumbers";
import IncludeSymbols from "./components/IncludeSymbols";
import { generatePassword } from "./utils/generatePassword";

export default function () {
  const [password, setPassword] = useState<string | null>(null);
  const [passwordLength, setPasswordLength] = useState<number>(4);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  function handleGeneratePassword(){
    const newPassword = generatePassword({
      length:passwordLength,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols,
    });

    setPassword(newPassword)
  }
  
  
  return (
    <div
      className="font-Firacode flex flex-col justify-center items-center min-h-screen bg-black
    text-white"
    >
      {password && (
        <div className="bg-BalticSea text-white px-4 py-2 break-all
        flex justify-between items-center w-[20rem] mb-4">
          <div className="text-xl">
            {password}
            </div>
          </div>          
      )}
      <div className="w-[20rem] bg-BalticSea p-4">
        <PasswordLength
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        />
        <IncludeUppercase
          includeUppercase={includeUppercase}
          setIncludeUppercase={setIncludeUppercase}
        />
        <IncludeLowercase
          includeLowercase={includeLowercase}
          setIncludeLowercase={setIncludeLowercase}
        />
        <IncludeNumbers
          includeNumbers={includeNumbers}
          setIncludeNumbers={setIncludeNumbers}
        />
        <IncludeSymbols
          includeSymbols={includeSymbols}
          setIncludeSymbols={setIncludeSymbols}
        />
    <button onClick={handleGeneratePassword}  className="px-4 py-2 bg-PastelGreen rounded-md shadow-md w-full border border-solid hover:border-PastelGreen hover:text-PastelGreen hover:bg-BaltiSea transition-all duration-300 uppercase">
  Generate
</button>

      </div>
    </div>
  );
}
