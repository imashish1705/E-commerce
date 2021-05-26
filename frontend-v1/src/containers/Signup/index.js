import React from 'react'
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
export default function index() {
  return (
  
    <>
    <Layout>
      <Container>
        {/* {user.message} */}
        <Row style={{ marginTop: "100px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form >
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    // value={firstName}
                    type="text"
                    // onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    // value={lastName}
                    type="text"
                    // onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>

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
