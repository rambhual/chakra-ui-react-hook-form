import React from "react";
import { MdEmail, MdVisibilityOff } from "react-icons/md";

import {
  Grid,
  Box,
  Stack,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  Button
} from "@chakra-ui/core";
const Authentication = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <form>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement
              children={<Icon as={MdEmail} color="gray.300" />}
            />
            <Input type="text" placeholder="User Name" />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              color="gray.300"
              fontSize="1.2em"
              children={<Icon as={MdVisibilityOff} color="gray.300" />}
            />
            <Input placeholder="Enter Password" />
          </InputGroup>
          <InputGroup>
            <Button>Login</Button>
          </InputGroup>
        </Stack>
      </form>
      <Box w="100%">
        ControlBox provides style props to change it's styles based on a sibling
        checkbox or radio input. It relies on a common CSS technique for styling
        custom controls.
      </Box>
    </Grid>
  );
};

export default Authentication;
