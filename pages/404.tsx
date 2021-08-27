import React from 'react';
import Link from 'next/link';

const NotFount = () => {
    return (
        <div>
            <h1>Sorry !</h1>
            <p>That page can not be found.</p>
            <p>Go back to the <Link href="/"><a>HomPage</a></Link>.</p>
        </div>
    );
}

export default NotFount;
