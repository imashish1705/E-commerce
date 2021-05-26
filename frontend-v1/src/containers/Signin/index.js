import React from 'react'
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";
import {Container , Form , Row , Col , Button} from "react-bootstrap";
import { login } from "../../actions/";
import {useDispatch} from "react-redux";
export default function Signin() {
    const UserLogin = (e) =>{
        const dispatch = useDispatch();

        
        e.preventDefault();
        const user ={
            email : "ashish@gmail.com",
            password : "123456"
        }
        dispatch(login(user));
    }
    return (
        <>
         <Layout>
            <Container>
                <Row style={{ marginTop: '100px' }}>
                    <Col md={{span: 6, offset: 3}}>
                        <Form onSubmit ={UserLogin}>
                            <Input 
                                label="Email"
                                placeholder="Email"
                                // value={email}
                                type="email"
                                // onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input 
                                label="Password"
                                placeholder="Password"
                                // value={password}
                                type="password"
                                // onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
                
            </Container>
        </Layout>
        </>
    )
}
