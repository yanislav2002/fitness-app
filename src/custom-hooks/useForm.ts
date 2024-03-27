import { useState, ChangeEvent, FormEvent } from 'react';

type FormValues = {
    [key: string]: string;
};

type SubmitHandler = (values: FormValues) => void;

export default function useForm(submitHandler: SubmitHandler, initialValues: FormValues) {
    const [values, setValues] = useState<FormValues>(initialValues);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValues((prevValues) => ({
            ...prevValues,
            [event.target.name]: event.target.value,
        }));
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        submitHandler(values);
    };

    return {
        values,
        onChange,
        onSubmit,
    };
}
