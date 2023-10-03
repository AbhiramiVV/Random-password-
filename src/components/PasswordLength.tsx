import  { ChangeEvent } from "react";
type PasswordLengthProps = {
  passwordLength: number;
  setPasswordLength: (length: number) => void;
};
export default function PasswordLength({
  passwordLength,
  setPasswordLength,}:
   PasswordLengthProps) {
  function handlePasswordLengthChange(event:ChangeEvent<HTMLInputElement>) {
    setPasswordLength(parseInt(event.target.value, 10))
  }
  return (
    <div className="mb-2">
      <label className="flex item-center  justify-between font-medium">
        <div>Password Length</div>
        <div className="text-2xl text-PastelGreen">{passwordLength}</div>
      </label>
      <input
        type="range"
        id="passwordLength"
        min="4"
        max="20"
        value={passwordLength}
        className="w-full appearance-none h-1"
        onChange={handlePasswordLengthChange}
      />
    </div>
  );
}
