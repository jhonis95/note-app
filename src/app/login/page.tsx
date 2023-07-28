"use client"
import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

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
        console.log(values)
    }
    return(
        <>
            <Box maw={300} mx="auto" h={500}>
                <img src="" alt="" />
                <h1>welcome to <br />our app</h1>
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
        </>
    )
}
