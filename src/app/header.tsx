import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="wrapper">
            <div className="container">
            <div id="navbar">
                <div className="logo"><Image src="/img/logo.png" alt="Logo" width={200} height={100} /></div>
                <div className="topmenu">
                    <ul className="topcenter">
                        <li><Link href="#">Home</Link></li>
                        <li><Link href="#">Shop</Link></li>
                        <li><Link href="#">Blog</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </ul>
                </div>
                <div className="topbaricons">
                <ul className="topright">
                    <li><Link href="#"><Image src="/img/alert-outline.png" alt={"Images"} width={28} height={28} /></Link></li>
                    <li><Link href="#"><Image src="/img/search.png" alt={"Images"} width={28} height={28} /></Link></li>
                    <li><Link href="#"><Image src="/img/heart.png" alt={"Images"} width={28} height={28} /></Link></li>
                    <li><Link href="#"><Image src="/img/shopping-cart.png" alt={"Images"} width={28} height={28} /></Link></li>                    
                </ul>
                </div>
            </div>
        </div>
        </div>
    );
}
