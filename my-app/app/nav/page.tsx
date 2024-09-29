import Link from 'next/link';
export default function nav() {
    return (
      
        <body>
          <nav>
            <Link href="/home"><h1>Home</h1></Link>
            <Link href="/about"><h1>About</h1></Link>
            <Link href="/contact"><h1>Contact</h1></Link>
            <Link href="/models"><h1>Models</h1></Link>
            <Link href="/services"><h1>Services</h1></Link>
            <Link href="/reviews"><h1>Reviews</h1></Link>
          </nav>
          
        </body>
  
      
    );
  }
  