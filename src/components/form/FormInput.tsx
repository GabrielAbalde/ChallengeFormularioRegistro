import { InputAdornment, TextField } from "@mui/material";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

// propiedades que se le pasan al componente
export type FormInputProps = {
    label: string
    type?: string
    register: UseFormRegisterReturn
    error?: FieldError
    adornment?: React.ReactNode
    inputRef?: any
}


const FormInput = ({label, type="text", register, error, adornment, inputRef}: FormInputProps) => {

    //si el input es del tipo numero, solo permite entrada de números
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (
            type === "number" && 
            !/[0-9.,]/.test(e.key) && 
            e.key !== "Backspace" && 
            e.key !== "Tab" && 
            e.key !== "ArrowUp" && 
            e.key !== "ArrowDown" && 
            e.key !== "ArrowLeft" && 
            e.key !== "ArrowRight"
        ) {
            e.preventDefault();
        }
    };

    return (
        // devuelve el input con todas sus propiedades definidas
        <TextField
            variant="outlined"
            label={label}
            {...register}
            error={!!error}
            helperText={error?.message}
            fullWidth
            margin="normal"
            type={type}
            onKeyDown={handleKeyDown}
            color="secondary"
            slotProps={{
                input: {
                  startAdornment: adornment ? <InputAdornment position="start">{adornment}</InputAdornment> : null
                }
            }}
            inputRef={inputRef}
        />
    )
}

export default FormInput;