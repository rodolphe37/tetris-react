import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
    <StyledCell type={'L'} color={TETROMINOS[type].color}/>
)

export default React.memo(Cell);