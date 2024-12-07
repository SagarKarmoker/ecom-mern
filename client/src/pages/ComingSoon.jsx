import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Helmet } from 'react-helmet';

export default function ComingSoon() {
    return (
        <>
            <Helmet>
                <title> Coming Soon | EquiSports</title>
                <meta name="Coming Soon" content="EquiSports | Coming Soon" />
            </Helmet>

            <DotLottieReact
                src="https://lottie.host/4dee1fb4-552c-44ff-adc2-6d866666cc5c/dQ73A9W1Fu.lottie"
                loop
                autoplay
            />

        </>
    )
}
