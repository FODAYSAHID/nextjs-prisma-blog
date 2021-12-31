import Link from "next/link";


const NavBar = () => {

    return(

        <div data-role="appbar" data-expand-point="md">
            <a href="#" className="brand no-hover">
                <span className="p-2 border bd-dark border-radius">
                    Blog
                </span>
            </a>
            <ul className="app-bar-menu">
                <li><Link href="/"><a>Home</a></Link></li>
            </ul>
        </div>
    )
}

export default NavBar;