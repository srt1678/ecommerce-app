import React from "react";
import "./FAQ.css";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";

export const FAQ = () => {
    return (
        <Container className="mt-3 mb-5">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link
                                    eventKey="first"
                                    style={{ color: "black" }}
                                >
                                    Online Returns & Exchanges
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    eventKey="second"
                                    style={{ color: "black" }}
                                >
                                    In Store Returns & Exchanges
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            What is your return policy for
                                            online orders?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            To receive your refund to your
                                            original payment method, returns in
                                            resalable condition must be
                                            delivered to, and processed at, our
                                            Distribution Center within 30 days
                                            from the date of the last shipment.
                                            Please note that we cannot accept
                                            returns without your receipt,
                                            invoice, or order confirmation.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            What is your exchange policy for
                                            online orders?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            You can make an exchange at any
                                            time, free of charge! If the
                                            size/color you want is no longer
                                            in-stock, you may return for a
                                            refund. Please note that we cannot
                                            accept exchanges without your
                                            receipt, invoice, or order
                                            confirmation.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            How can I return/exchange my items?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            A return service is offered to our
                                            customers which helps confirm the
                                            status of your return and track its
                                            delivery progress for added
                                            security. Please note, for using
                                            this service, a fee of $7 will be
                                            deducted from your refund. Exchanges
                                            are free of charge.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                            What is your Holiday return policy?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            With your original receipt, invoice,
                                            or order confirmation, merchandise
                                            purchased between November 1 and
                                            December 31 may be returned for a
                                            full refund of the purchase price to
                                            your original form of payment
                                            through January 31 the following
                                            year.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>
                                            Are there return
                                            exclusions/exceptions?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            If an invoice was not included in
                                            your package, and you do not submit
                                            your return online, please print
                                            your order confirmation email that
                                            was sent to you at order placement
                                            and include it in the return
                                            package.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>
                                            Can I return items from multiple
                                            orders in one package?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Yes – you can return items from
                                            multiple orders in one return
                                            package. You will only be charged
                                            the $7 return service fee once.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>
                                            When will my exchange order ship out
                                            to me?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Please allow approximately three
                                            weeks for your return to be
                                            delivered, processed at our
                                            Distribution Center, and for your
                                            exchange order to ship out to you.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            What is your return policy for
                                            in-store purchases?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            To receive your refund to your
                                            original payment method, merchandise
                                            in its original condition must be
                                            returned to any of our stores in the
                                            US within 30 days of purchase.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            What is your exchange policy for
                                            in-store purchases?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            You can make an exchange at any
                                            time, free of charge! If the
                                            size/color you want is no longer
                                            in-stock, you may return for a
                                            refund. Please note that we do not
                                            accept exchanges without your
                                            receipt, invoice, or order
                                            confirmation.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            How can I return/exchange my items?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            For easy and free returns/exchanges,
                                            bring your item(s) and receipt,
                                            invoice, or order confirmation to
                                            any store in the US.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>
                                            Are there return
                                            exclusions/exceptions?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Previously exchanged merchandise can
                                            only be returned for merchandise
                                            credit in the form of a gift card.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>
                                            What is the price adjustment policy
                                            for in-store purchases?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            The price of the merchandise is
                                            subsequently reduced within 7 days
                                            of the date of your in-store
                                            purchase.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>
                                            What is your Holiday return policy?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            With your original receipt, invoice,
                                            or order confirmation, merchandise
                                            purchased between November 1 and
                                            December 31 may be returned for a
                                            full refund of the purchase price to
                                            your original form of payment
                                            through January 31 the following
                                            year.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};
