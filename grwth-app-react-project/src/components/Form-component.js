import logo from '../images/logo-white.png'

export function Form() {
    return (<div>
        <a href="/home"> <img src={logo} alt="logo" /> </a>
        <div className='card'>
            <h4>Subscribe Our Newsletter</h4>
            <p className="text-sm">Subscribe now to receive tips on how to take your business to the next
                level.</p>
            <form>
                <input type="email" placeholder="Enter email...." />
                <button type="submit" className="btn btn-primary btn-block">Subscriibe</button>
            </form>
            <i class=" social-icons fab fa-linkedin" />
            <i class="social-icons  fab fa-twitter" />
            <i class="social-icons  fab fa-instagram" />
        </div>
    </div>)
}