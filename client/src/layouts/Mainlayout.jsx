import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Mainlayout({ children }) {
    return (
        <>
            <header className='container mx-auto'>
                <Navbar />
            </header>
            <main className='container mx-auto min-h-screen'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
