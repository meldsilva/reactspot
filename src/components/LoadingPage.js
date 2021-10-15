import React from 'react'
import { Alert } from "react-bootstrap";
import { CircularProgress } from '@material-ui/core';

function LoadingPage() {
    return (
        <div>
        <Alert variant='primary'>
        <CircularProgress color="success" />
        </Alert>
        </div>
    )
}

export default LoadingPage
