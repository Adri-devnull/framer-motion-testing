import { useState } from 'react';
import { StyledBox } from './box.styles';
const Box = () => {
	const [transformBox, setTransformBox] = useState({ x: 0, y: 0, rotate: 0 });
	console.log(transformBox);
	return (
		<>
			<div>
				<div>
					<label htmlFor='x'>Range X</label>
					<input
						type='range'
						id='x'
						name='x'
						onChange={event =>
							getValuesOfInputs(event.target, transformBox, setTransformBox)
						}
					/>
				</div>
				<div>
					<label htmlFor='x'>Range Y</label>
					<input
						type='range'
						id='y'
						name='y'
						onChange={event =>
							getValuesOfInputs(event.target, transformBox, setTransformBox)
						}
					/>
				</div>
				<div>
					<label htmlFor='x'>Range Z</label>
					<input
						type='range'
						id='z'
						name='rotate'
						onChange={event =>
							getValuesOfInputs(event.target, transformBox, setTransformBox)
						}
					/>
				</div>
			</div>
			<StyledBox
				animate={{
					x: transformBox.x,
					y: transformBox.y,
					rotate: transformBox.rotate
				}}
			></StyledBox>
		</>
	);
};

// FUNCION PARA OBTENER VALORES DE LOS INPUT
const getValuesOfInputs = (input, transformBox, setTransformBox) => {
	const { value, name } = input;
	setTransformBox({ ...transformBox, [name]: Number(value) });
};

export default Box;
