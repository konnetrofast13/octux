import React, {useEffect, useState} from "react";

export type InputProps = {
    value: string | number,
}

export default function Index({value}: InputProps) {

    const [_value,setValue]= useState<unknown>();

    useEffect(()=> {
        setValue(value);
    }, [value]);

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>)=> {
        console.log("event",e);
        setValue(e.currentTarget.value);
    }

    return (<div className="input">
        <input type="text" value={value} onChange={handleOnChange}/>
    </div>);
}