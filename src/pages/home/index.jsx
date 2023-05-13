import { Container, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useUsers } from "../../hooks/Users"

const Home = () => {
    const { users, isLoading, isError, error } = useUsers()

    return (
        <Container>
            <h1>Página Inicial</h1>
            <hr />
            <Link to='/sobre'>
                <Button type="button" colorScheme='blue'>
                    Sobre
                </Button>
            </Link>
            <hr />
            {
                isLoading && <p>Carregando ...</p>
            }
            {
                users?.map((user) => (
            <p key={user.id}>{user.name}</p>
            ))
                }
    
        </Container>

}



export default Home