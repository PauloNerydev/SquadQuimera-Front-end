import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";

import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { RiAddLine, RiDeleteBinLine, RiPencilLine } from "react-icons/ri";
import Link from "next/link";

import axios from "../../config/axios";
import SideBar from "../../components/SideBar/index";
import { getUsers, deleteUser } from "../../services/userService";
export default function FeedbackList(props) {
  const [feedbacks, setFeedbacks] = useState(props.feedbacks);

  //breakpoint de responsividade
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const handleDelete = async (id) => {
    await deleteFeedback(id);
    setFeedbacks(await getFeedbacks());
  };

  return (
    <Box>
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <Box
          width="1010px"
          //  height="700px"
          marginLeft="50px"
          flex="1"
          borderRadius={8}
          bg="#F2F1F1"
          p="8"
        >
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Feedbacks
            </Heading>
            <Link href="/feedbacks/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                bg="#6FBE5E"
                colorScheme="#FFFFFF"
                cursor="pointer"
                _hover={{ bg: "green.400" }}
                leftIcon={<Icon as={RiAddLine} />}
              >
                Adicionar
              </Button>
            </Link>
          </Flex>
          <Divider my="6" borderColor="gray.700" />
          <Table>
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray" width="32px">
                  <Checkbox colorScheme="green" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Permission</Th>}
                <Th>ID</Th>
                <Th width="1px"></Th>
                <Th width="1px"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* {feedbacks.map((user) => (
                <Tr key={'#'}>
                  <Td px={["4", "4", "6"]}> 
                    <Checkbox colorScheme="green" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontSize="sm">{'#'}</Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>{'#'}</Td>}
                  <Td>{'#'}</Td>

                  <Td>
                    <Link href={`/feedbacks/edit/${'#'}`}>
                      <Button
                        as="a"
                        left="10px"
                        size="sm"
                        fontSize="sm"
                        bg="#6FBE5E"
                        colorScheme="#FFFFFF"
                        cursor="pointer"
                        _hover={{ bg: "green.400" }}
                        leftIcon={<Icon as={RiPencilLine} />}
                      >
                        Editar
                      </Button>
                    </Link>
                  </Td>
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      bg="#6FBE5E"
                      colorScheme="#FFFFFF"
                      cursor="pointer"
                      _hover={{ bg: "green.400" }}
                      onClick={() => handleDelete(feedbacks.id)}
                      leftIcon={<Icon as={RiDeleteBinLine} />}
                    >
                      Excluir
                    </Button>
                  </Td>
                </Tr>
              ))} */
}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}
//método executado no lado do servidor, quando o user acessar a página;
//nesse caso o next faz um get na minha api antes de rendezirar a pagina, ou seja
//antes de aparecer qualquer tipo de interface
/*export async function getServerSideProps(context) {
  const cookies = parseCookies(context);
 
  const token = cookies["nextauth.token"];
  //se não existir o token, ele redireciona para a pag index.
  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const response = await axios.get("/feedbacks");
  return {
    props: {
      feedbacks: response.data,
    }, // will be passed to the page component as props
    //sempre tem que passar o componente props, mesmo que seja vazio.
  }; 
} */
