const Navbar = () => {
    return (<>
        <header class="d-flex flex-wrap justify-content-center py-3 px-3 px-lg-5 mb-4 border-bottom w-100">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span class="fs-4">DocDock</span>
            </a>

            <ul class="nav nav-pills">
                <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Prescriptions</a></li>
                <li class="nav-item"><a href="#" class="nav-link">AI Assistant</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Contact Us</a></li>
            </ul>
        </header>
    </>);
}

export default Navbar;