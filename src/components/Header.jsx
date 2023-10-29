import React from "react";

import {Image, Box, Container, Flex, Input, Button} from "@chakra-ui/react"

export default function Header(){
    return(
        <Box bg={"purple.100"} as="header" py={5}>
            <Container maxW={"container.lg"}>
                <Flex alignItems={'center'} justifyContent={'space-between'}>
                    <Image src="https://bit.ly/dan-abramov" boxSize={"100px"} borderRadius={"full"} alt="logo" objectFit={"cover"}/>
                    <Input borderColor={"purple.400"} borderWidth={2} placeholder="Search for anything..." size={'md'} width={'auto'} rounded={'full'}/>
                    <Box display="flex" alignItems={"center"} justifyContent={"center"} gap={"3"}>
                        <Button borderWidth={2} borderColor={"purple.200"} _hover={{bg: "white", color: "#D6BCFA", border:"2px solid #D6BCFA"}} color={"white"} bgColor={"purple.200"} size={"md"}>Log In</Button>
                        <Button borderWidth={2} color={"purple.200"} borderColor={"purple.200"} variant={"outline"}>Sign Up</Button>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}