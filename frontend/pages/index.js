import React, { useState } from 'react';
import axios from 'axios';
import { Input, Image, Flex, Text, Heading, Box, Button } from '@chakra-ui/react';

export default function Home() {
	const [image, setImage] = useState('');

	const handleChange = (e) => {
		console.log(e.target.files);
		setImage(e.target.files[0]);
	};

	const setImageAction = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('file', image);
		// const data = await fetch('http://localhost:5000/predict', {
		// 	method: 'post',
		// 	headers: { 'Content-Type': 'multipart/form-data' },
		// 	body: formData,
		// });
		// // .then((res) => {
		// // 	console.log(res);
		// // });
		// const uploadedImage = await data.json;
		// if (uploadedImage) {
		// 	console.log('success');
		// } else {
		// 	console.log('error');
		// }
		axios
			.post('http://localhost:5000/predict', formData)
			.then((res) => console.log(res))
			.catch((err) => console.warn(err));
	};

	return (
		<>
			{/* <Box
				backgroundImage="url('hero.jpg')"
				minH='100vh'
				bgPosition='center'
				bgRepeat='no-repeat'
				bgSize='cover'
				px='10%'> */}
			<Heading textAlign='center'>Sign Language Detection</Heading>
			<form onSubmit={setImageAction}>
				<Input type='file' name='image' onChange={handleChange} />
				<Button type='submit' name='upload'>
					Upload
				</Button>
			</form>
			{/* </Box> */}
		</>
	);
}
