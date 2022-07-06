import React, { ChangeEvent, FormEvent, useState } from "react";
import { Param, ParamValue } from "../types/type";
import Parameters from "./Parameters";

const Inputs: React.FC = () => {

   const massInputs: Param[] = [
      { id: 1, name: 'Назначение:', type: 'text' },
      { id: 2, name: 'Длинна:', type: 'text' }
   ]

   const [massValue, setMassValue] = useState<[] | ParamValue[]>([])
   const [nazvalue, setNazValue] = useState('')
   const [longValue, setLongValue] = useState('')


   const changeHendler = (e: ChangeEvent<HTMLInputElement>, id: number) => {
      id === 1 ? setNazValue(e.target.value) : setLongValue(e.target.value)
   }

   const submitHendler = (e: FormEvent<HTMLFormElement>) => {
      setMassValue([
         { paramId: 1, value: nazvalue },
         { paramId: 2, value: longValue }
      ])
      e.preventDefault()
      setNazValue('')
      setLongValue('')
   }

   return (
      <>
         <form onSubmit={(e) => submitHendler(e)}>
            {
               massInputs.map(el =>
                  <div key={el.id}>
                     {el.name}
                     <input type={el.type} className="form-control mb-2" value={el.id === 1 ? nazvalue : longValue} onChange={(e) => changeHendler(e, el.id)} />
                  </div>
               )
            }
            <button type="submit" className="btn btn-primary">Отправить</button>
         </form>
         <Parameters
            massParamAndParamValue={
               {
                  params: massInputs,
                  model: massValue
               }
            }
         />
      </>
   );
}

export default Inputs;