// src/components/AdminFooter.js
import { Col, Container, Row } from 'react-bootstrap';

const AdminFooter = () => (
    <footer className="bg-danger text-white text-center py-3">
        <Container>
            <Row>
                <Col>
                    <p>&copy; {new Date().getFullYear()} ChampionsArena. All Rights Reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default AdminFooter;
