import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Alert, Card } from 'react-bootstrap';

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/forgot-password', { email });
            setMessage('Check your email for a password reset link');
        } catch (err) {
            setError('Failed to send reset link');
        }
    };

    return (
        <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 bg-gradient py-5">
            <Card className="p-4 shadow-lg w-100" style={{ maxWidth: '400px', backgroundColor: '#1a1a2e', color: '#e94560' }}>
                <Card.Body>
                    <h2 className="text-center mb-4" style={{ color: '#e94560' }}>Forgot Password</h2>
                    {message && <Alert variant="success">{message}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{ backgroundColor: '#0f3460', borderColor: '#e94560', color: '#fff' }}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100" style={{ backgroundColor: '#e94560', borderColor: '#e94560' }}>
                            Send Reset Link
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ForgotPasswordPage;
