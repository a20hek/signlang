import React, { useState } from 'react';
import axios from 'axios';
import { Input, Image, Flex, Text, Heading, Box, Button } from '@chakra-ui/react';

export default function Home() {
	const [image, setImage] = useState('');
	const [result, setResult] = useState('');

	const handleChange = (e) => {
		console.log(e.target.files);
		setImage(e.target.files[0]);
	};

	const setImageAction = async (e) => {
		setResult('loading...')
		e.preventDefault();
		const formData = new FormData();
		formData.append('file', image);
		await axios
			.post('http://localhost:5000/predict', formData)
			// .then((res)=>console.log(res.data.prediction))
			.then((res) => setResult(res?.data.prediction))
			// .then(() => console.log(result))
			.catch((err) => console.warn(err));
	};

	return (
		<>
			<Box
				backgroundImage="url('hero.jpg')"
				minH='100vh'
				bgPosition='center'
				bgRepeat='no-repeat'
				bgSize='cover'
				px='20%'>
				<br />
				<br />
				<Heading fontSize='3em' textAlign='center' color='#fff'>
					SIGN LANGUAGE DETECTION
				</Heading>
				<br />
				<br />
				<br />
				<Heading textAlign='center' color='#fff'>
					Upload image to decode sign
				</Heading>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<form onSubmit={setImageAction}>
					<Input type='file' name='image' onChange={handleChange} />
					<Button type='submit' name='upload' mx='auto' width='100%' mt='8px'>
						Upload Image
					</Button>
				</form>
				<br/>
				<Flex justifyContent='center' p='16px'>
				<Heading color='#fff' fontSize='2em' textAlign='center' bgColor='#000' p='16px'>Result:{result}</Heading>
				</Flex>
			</Box>
		</>
	);
}
