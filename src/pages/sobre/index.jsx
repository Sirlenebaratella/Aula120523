import { Container, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Sobre = () => {
    return (
        <Container>
            <h1>Sobre</h1>
            <hr />
            <Link to='/'>
                <Button type="button" colorScheme='blue'>
                    Página Inicial
                </Button>
            </Link>
        </Container>

    )
}
export default Sobre