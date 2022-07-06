export interface Param {
   id: number;
   name: string;
   type: string;
}

export interface ParamValue {
   paramId: number;
   value: string;
}

interface Props {
   params: Param[];
   model: ParamValue[];
}

export interface ParametersPropsType {
   massParamAndParamValue: Props
}