
import React from 'react';
import {PulldownType} from './types';

//Common pulldown component
const Pulldown: React.FC<PulldownType> = ({onChange, name, label, defautValue = '1'}) => {

    const onChangePulldown = (event: any) => {
        //get value from event change
        const value = event && event.target && event.target.value;

        onChange(value);
    }
    
    return (
        <select defaultValue={defautValue} onChange={onChangePulldown}>
            {name.map((item: string, index: number) => {
                return (
                    <option 
                        key={`pulldown${index}`}
                        value={item}
                    >
                         {label ? label[index] : item}
                    </option>
                )
            })}
           
        </select>
      );
}

export default React.memo(Pulldown);
