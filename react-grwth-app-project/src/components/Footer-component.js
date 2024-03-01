import { Form } from "./Form-component"
export function Footer() {
    return (
        <footer className="footer bg-black">
            <div className="container">
                <div className="footer-grid">
                    <Form />

                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="/about-us">About Us</a></li>
                            <li><a href="/our-process">Our Process</a></li>
                            <li><a href="/join-our-team">Join Our Team</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="/news">News</a></li>
                            <li><a href="/research">Research</a></li>
                            <li><a href="/recent-projects">Recent Projects</a></li>

                        </ul>
                    </div>
                    <div>
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="/">hello@growthapp.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>
    )
}