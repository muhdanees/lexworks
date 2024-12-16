import Topbar from "./TopBar";
import Navbar from "./Navbar";
import CarouselSlider from "./CarouselSlider";
function Header() {
    return (
        <>
            <Topbar />
            <Navbar />
            <CarouselSlider />
            <header>My header</header>
        </>
    );
}

export default Header;