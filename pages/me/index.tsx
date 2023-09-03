import Link from 'next/link';
import React from 'react';

interface indexProps {
    
}

const Home: React.FC<indexProps> = () => {
    return (
        <div>
            <center>
                <h1>ME/Index</h1>
                <Link href="/me/profil" >profile</Link>
            </center>
        </div>
    );
};

export default Home;