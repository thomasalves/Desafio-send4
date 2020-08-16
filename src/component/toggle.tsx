
import React, {useState} from 'react';
import * as S from './styled';




//  const Text = styled.div`
//  color: ${(props)} => props.color || 'white'};
//  `;

const Toggle: React.FC = () => {



    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    return (
        <S.Janela className="janela" style={{
        background: isToggled ? 'yellow' : 'white'
        }}>

        <S.a onClick={toggleTrueFalse} />
        </S.Janela>
    );
};

export default Toggle;