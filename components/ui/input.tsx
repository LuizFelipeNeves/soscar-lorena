import { useState, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [error, setError] = useState("");

    const handleInvalid = (e: React.InvalidEvent<HTMLInputElement>) => {
      e.preventDefault();
      const target = e.target as HTMLInputElement;

      if (target.validity.valueMissing) {
        setError("Este campo é obrigatório");
      } else if (target.validity.typeMismatch) {
        if(target.type === "email") {
          setError("O email inserido não é válido");
        }
        else {
          setError("Por favor, insira um valor válido");
        }
      } else if (target.validity.patternMismatch) {
        setError("O valor inserido não corresponde ao padrão esperado");
      } else if (target.validity.tooShort) {
        setError(`O valor deve ter pelo menos ${target.minLength} caracteres`);
      } else if (target.validity.tooLong) {
        setError(`O valor deve ter no máximo ${target.maxLength} caracteres`);
      } else if (target.validity.rangeUnderflow) {
        setError(`O valor deve ser maior ou igual a ${target.min}`);
      } else if (target.validity.rangeOverflow) {
        setError(`O valor deve ser menor ou igual a ${target.max}`);
      } else {
        setError("Valor inválido");
      }
    };

    return (
      <div>
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
          required
          onInvalid={handleInvalid}
          onInput={(e) => {
            setError("");
            (e.target as HTMLInputElement).setCustomValidity("");
          }}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }