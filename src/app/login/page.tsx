"use client"
import { TextInput, Button, Group, Box, Title, MantineProvider } from '@mantine/core';
import { useForm } from '@mantine/form';
import Image from 'next/image'
import logo from '../../../public/logo.png'

export default function login(){
    const form=useForm({ //form hook from mantine UI
        initialValues: {
          email: '',
          termsOfService: false,
          password:''
        },
    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
          password:(value)=>(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(value)?null:'Invalid password'),
        },
      });
    const henderSubmit=(values: { email: string; termsOfService: boolean; password: string; })=>{
        fetch('localhost:3001/login',{
            method: "GET",
            headers: new Headers(),
            mode: "cors",
            body: JSON.stringify(values),
            cache: "default",
          }).then((res)=>{})
    }
    return(
        <MantineProvider
            theme={{
                colors:{
                    'primari':['#D6D9D8','#A4ADAA','#7D8F89','#586457'],
                    'base':['#FFFFFF','#43463D']
                }
            }}
        >
            <Box maw={300} mx="auto" h={500}>
                <Image src="/logo.png" alt="dev logo" width={500} height={500} />
                <Title ta="center">welcome to <br />our app</Title>
                <form action="" method="get" onSubmit={form.onSubmit((value)=>{henderSubmit(value)})}>
                    <TextInput
                        withAsterisk
                        label="Email"
                        placeholder="your@email.com"
                        {...form.getInputProps('email')}
                    />
                    <TextInput
                        withAsterisk
                        label="Password"
                        placeholder="myPassWord123"
                        {...form.getInputProps('password')}
                    />
                    <Group position="center" mt="md">
                        <Button type="submit">Submit</Button>
                    </Group>
                </form>
            </Box>
        </MantineProvider>
    )
}
