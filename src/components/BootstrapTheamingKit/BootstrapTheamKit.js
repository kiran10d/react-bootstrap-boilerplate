import React from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Alert,
  Badge,
  Breadcrumb,
  Button,
  Accordion,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import "./BootstrapTheamKit.scss";

export default function BootstrapTheam() {
  const themecolor = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ];
  return (
    <>
      <Container fluid className="bg">
        <Row>
          <Col className="text-center">
            <h1>Kiran</h1>
          </Col>
        </Row>
      </Container>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

      <Container>
        <Row style={{ minHeight: "60vh" }}>
          <Col>
            <div className="d-flex justify-content-around align-items-center flex-wrap">
              {themecolor.map((variant, idx) => (
                <Card
                  bg={variant}
                  key={idx}
                  text={variant === "light" ? "dark" : "white"}
                  style={{ width: "18rem" }}
                  className="mb-2"
                >
                  <Card.Header>Header</Card.Header>
                  <Card.Body>
                    <Card.Title>{variant} Card Title </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {themecolor.map((variant, idx) => (
              <Alert key={idx} variant={variant}>
                This is a {variant} alert—check it out!
              </Alert>
            ))}
          </Col>
          <Col>
            <div>
              <Badge bg="primary">Primary</Badge>
              <Badge bg="secondary">Secondary</Badge>
              <Badge bg="success">Success</Badge>
              <Badge bg="danger">Danger</Badge>
              <Badge bg="warning" text="dark">
                Warning
              </Badge>
              <Badge bg="info">Info</Badge>{" "}
              <Badge bg="light" text="dark">
                Light
              </Badge>
              <Badge bg="dark">Dark</Badge>
            </div>
            <br />
            <div>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <br />
            <div>
              <Button variant="primary">Primary</Button>{" "}
              <Button variant="secondary">Secondary</Button>{" "}
              <Button variant="success">Success</Button>{" "}
              <Button variant="warning">Warning</Button>{" "}
              <Button variant="danger">Danger</Button>{" "}
              <Button variant="info">Info</Button>{" "}
              <Button variant="light">Light</Button>{" "}
              <Button variant="dark">Dark</Button>{" "}
              <Button variant="link">Link</Button>
            </div>
            <br />
            <div>
              <Button variant="outline-primary">Primary</Button>{" "}
              <Button variant="outline-secondary">Secondary</Button>{" "}
              <Button variant="outline-success">Success</Button>{" "}
              <Button variant="outline-warning">Warning</Button>{" "}
              <Button variant="outline-danger">Danger</Button>{" "}
              <Button variant="outline-info">Info</Button>{" "}
              <Button variant="outline-light">Light</Button>{" "}
              <Button variant="outline-dark">Dark</Button>
            </div>
            <br />
            <div className="d-flex justify-content-around">
              {["top", "right", "bottom", "left"].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      Tooltip on <strong>{placement}</strong>.
                    </Tooltip>
                  }
                >
                  <Button variant="secondary">Tooltip on {placement}</Button>
                </OverlayTrigger>
              ))}
            </div>
            <br />
            <div>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
