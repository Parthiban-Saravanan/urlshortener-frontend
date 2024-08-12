import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button, Container, Alert, Card } from 'react-bootstrap';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            await axios.post('/api/auth/register', { email, password });
            navigate('/');
        } catch (err) {
            setError('Registration failed');
        }
    };

    return (
        <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 bg-gradient">
            <Card className="p-4 shadow-lg" style={{ maxWidth: '400px', backgroundColor: '#1a1a2e', color: '#e94560' }}>
                <Card.Body>
                    <h2 className="text-center mb-4">Register</h2>
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
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{ backgroundColor: '#0f3460', borderColor: '#e94560', color: '#fff' }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                style={{ backgroundColor: '#0f3460', borderColor: '#e94560', color: '#fff' }}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100" style={{ backgroundColor: '#e94560', borderColor: '#e94560' }}>
                            Register
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default RegisterPage;
