import React from 'react'

export default function Footer() {
    return (
        <div className="bg-base-200 px-4">
            <div className='footer container mx-auto text-base-content py-10'>
                <aside>
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current">
                        <path
                            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
                    <p>
                        EquiSports - Your Sports Equipment Store
                        <br />
                        Providing top-notch gear for every sport since 2024
                    </p>
                </aside>

                <nav>
                    <h6 className="footer-title">Shop by Category</h6>
                    <a className="link link-hover">Sports Gear</a>
                    <a className="link link-hover">Apparel</a>
                    <a className="link link-hover">Accessories</a>
                    <a className="link link-hover">Footwear</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Customer Service</h6>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">Shipping & Returns</a>
                    <a className="link link-hover">Order Tracking</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press</a>
                    <a className="link link-hover">Blog</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Use</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>

                <div className="footer-bottom mt-10">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} EquiSports. All Rights Reserved.
                    </p>
                    <p className="text-sm">
                        Contact: support@equipsports.com | Phone: (123) 456-7890
                    </p>
                    <div className="social-media-links mt-4">
                        <a href="https://facebook.com" className="link link-hover mr-4">
                            <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a href="https://twitter.com" className="link link-hover mr-4">
                            <i className="fab fa-twitter"></i> Twitter
                        </a>
                        <a href="https://instagram.com" className="link link-hover mr-4">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                        <a href="https://linkedin.com" className="link link-hover">
                            <i className="fab fa-linkedin-in"></i> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
