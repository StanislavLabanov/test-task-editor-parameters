import React from "react";
import { ParametersPropsType } from "../types/type";

const Parameters: React.FC<ParametersPropsType> = ({ massParamAndParamValue }) => {
   return (
      <>
         {
            massParamAndParamValue.params.map(element =>
               massParamAndParamValue.model.map(item =>
                  element.id == item.paramId && <div key={element.id}>{element.name} {item.value}</div>
               )
            )
         }
      </>
   );
}

export default Parameters;