import React, { useState } from "react";
import PasswordLength from "./components/PasswordLength";
import IncludeUppercase from "./components/IncludeUppercase";
import IncludeLowercase from "./components/IncludeLowercase";
import IncludeNumbers from "./components/IncludeNumbers";

export default function () {
  const [password, setPassword] = useState<string | null>(null);
  const [passwordLength, setPasswordLength] = useState<number>(4);
  const [includeUppercase, setIncludeUppercase] = useState<boolean | null>( null);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  return (
    <div
      className="font-Firacode flex justify-center items-center min-h-screen bg-black
    text-white"
    >
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
        setIncludeLowercase={setIncludeLowercase }
        />
        <IncludeNumbers
        includeNumbers={includeNumbers}
        setIncludeNumbers={setIncludeNumbers}
        />

      </div>
    </div>
  );
}
