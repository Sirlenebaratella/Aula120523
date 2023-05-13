import { Button, Container, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react"
import { useForm } from "react-hook-form"

const Create = () => {
    const {
         reset, 
         register, 
         handleSumit
        } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
<Container>
    <form>
        <Stack>
        <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input type='text' placeholder="Digite o Nome" />
        </FormControl>
        <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input type='email' placeholder="Digite o E-mail" />
        </FormControl>
        <Button colorScheme='blue'>Cadastrar</Button>
        <Button type='buttom' onClick={() => reset()}  colorScheme='red'>Limpar</Button>

        </Stack>
    </form>
</Container>
    )
    
}
export default Create