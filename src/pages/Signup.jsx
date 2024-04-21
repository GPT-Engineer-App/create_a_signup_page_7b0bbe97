import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Container } from '@chakra-ui/react';

const Signup = () => {
  return (
    <Container centerContent>
      <Box padding='4' bg='white' maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <form>
          <FormControl isRequired>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input id='email' type='email' />
          </FormControl>
          <FormControl isRequired mt='4'>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input id='password' type='password' />
          </FormControl>
          <Button width='full' mt='4' type='submit'>Sign Up</Button>
        </form>
      </Box>
    </Container>
  );
};

export default Signup;