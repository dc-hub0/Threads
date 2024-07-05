import { Avatar } from '@chakra-ui/react'
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Link } from 'react-router-dom'

const UserPost = () => {
  return (
    <Link to={"/markzuckerberg/post/1"}> 
        <Flex gap={3} mb={4} py={5}>
				<Flex flexDirection={"column"} alignItems={"center"}>
					<Avatar size='md' name='Mark Zuckerberg' src='/zuck-avatar.png' />
					<Box w='1px' h={"full"} bg='gray.light' my={2}></Box>
					<Box position={"relative"} w={"full"}>
						<Avatar
							size='xs'
							name='John doe'
							src='https://bit.ly/dan-abramov'
							position={"absolute"}
							top={"0px"}
							left='15px'
							padding={"2px"}
						/>
						<Avatar
							size='xs'
							name='John doe'
							src='https://bit.ly/sage-adebayo'
							position={"absolute"}
							bottom={"0px"}
							right='-5px'
							padding={"2px"}
						/>
						<Avatar
							size='xs'
							name='John doe'
							src='https://bit.ly/prosper-baba'
							position={"absolute"}
							bottom={"0px"}
							left='4px'
							padding={"2px"}
						/>
					</Box>
				</Flex>
				</Flex>
    </Link>
  ) 
}

export default UserPost