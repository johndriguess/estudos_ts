import React from 'react';

type ItemProps = {
    marca?: string;
    ano_lançamento?: number
}

const Item: React.FC<ItemProps> = ({marca = 'Marca Padrão', ano_lançamento = '0'}) => {
    return(
        <>
            <li>{marca} - {ano_lançamento}</li>
        </>
    );
}

export default Item;