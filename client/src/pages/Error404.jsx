import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Error404() {
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>Not Found | EquiSports</title>
                <meta name="Error 404" content="EquiSports | Error 404" />
            </Helmet>

            <div className='relative bg-white h-screen'>
                <DotLottieReact
                    src="https://lottie.host/ae64fc92-fc85-4f19-862a-21cb2bc24963/GOpDdmrQr8.lottie"
                    loop
                    autoplay
                />

                <div className='flex justify-center'>
                    <button
                        onClick={() => navigate('/')}
                        className='bg-blue-500 p-4 text-black font-bold text-center absolute bottom-10 rounded-xl hover:cursor-pointer'>
                        Goto Home
                    </button>
                </div>
            </div>
        </>
    );
}
