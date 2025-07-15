function Footer() {
return (
    <footer className="custom-footer">
        <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} MBJ. All rights reserved. Follow me on{' '}
                <a href="https://instagram.com/mibiji224" className="text-blue-400 hover:underline">
                    Instagram
                </a>{' '}
                and{' '}
                <a href="https://github.com/mibiji224" className="text-blue-400 hover:underline">
                    GitHub
                </a>.
            </p>
        </div>
    </footer>
);
}

export default Footer;
// This code defines a functional component named 'Footer' that returns a footer element.   