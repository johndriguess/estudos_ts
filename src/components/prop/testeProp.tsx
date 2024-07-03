import React from 'react';

interface TestePropProps {
    name: string;
}

const TesteProp: React.FC<TestePropProps> = (props) => {
    return (
        <div>
            <p>
                Teste de prop {props.name}
            </p>
        </div>
    );
}

export default TesteProp;
