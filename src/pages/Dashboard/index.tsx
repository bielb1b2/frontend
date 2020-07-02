import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logoMackenzie from '../../assets/LogoComNomePequeno.png'
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoMackenzie} alt="mackenzie" />
            <Title>Busca de funcionário</Title>

            <Form>
                <input placeholder="Nome do professsor"/>
                <button type="submit" >Pesquisar</button>
            </Form>

            <Repositories>
                <a href="lala">
                    <img src="https://avatars0.githubusercontent.com/u/3316478?s=400&u=7677b1e37d22e4268e1bdf6de0e8d347fc2d3603&v=4" alt="Mackenzie"/>

                    <div>
                        <strong>Ana claudia</strong>
                        <p>123456</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="lala">
                    <img src="https://avatars1.githubusercontent.com/u/47531526?s=400&u=83711607212ec7912e0ecacb3745d47a12bfa66c&v=4" alt="Mackenzie"/>

                    <div>
                        <strong>Marcelo Takayama</strong>
                        <p>7654321</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="lala">
                    <img src="https://avatars2.githubusercontent.com/u/50115877?s=400&u=629c96e478d98eb62b35ec91bc1142113ad35cf8&v=4" alt="Mackenzie"/>

                    <div>
                        <strong>Alan Ricardo </strong>
                        <p>5587112</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
}

export default Dashboard