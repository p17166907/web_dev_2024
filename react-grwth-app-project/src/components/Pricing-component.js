export function Pricing() {
    return (
        <section className="pricing">
            <div className="container-sm">
                <h3 className="pricing-heading text-xl text-center">Pricing</h3>
                <p className="pricing-subheading text-md text-center">Start free and scale while you grow. No hidden fees.
                    Unlimited users for free.</p>
                <div className="pricing-grid">
                    {/* Pricing Card 1 */}
                    <div className="card bg-light">
                        <div className="pricing-card-header">
                            <h4 className="pricing-heading text-xl">Simple</h4>
                            <p className="pricing-card-subheading">Keep track of your contacts, gain valuable insights,
                                analyse live data and performance metrics</p>
                            <p className="pricing-card-price"><span className="text-xl">Free</span>*No credit card needed</p>
                        </div>
                        <div className="pricing-card-body">
                            <ul>
                                <li><i class="fas fa-check" />Real Time Monitoring</li>
                                <li><i class="fas fa-check" />Track Key</li>
                                <li><i class="fas fa-check" />Schedule Appointments</li>
                                <li><i class="fas fa-check" />Organize, delegate and keep track of tasks</li>
                            </ul>
                            <a href="/get-started" className="btn btn-primary">Get Started</a>
                        </div>
                    </div>
                    {/* Pricing Card 2 */}
                    <div className="card bg-black">
                        <div className="pricing-card-header">
                            <h4 className="pricing-heading text-xl">Simple</h4>
                            <p className="pricing-card-subheading">Keep track of your contacts, gain valuable insights,
                                analyse live data and performance metrics</p>

                            <p className="pricing-card-price"><span className="text-xl">$49</span> /month</p>
                        </div>
                        <div className="pricing-card-body">
                            <ul>
                                <li><i className="fas fa-check" />Data Driven Decisions</li>
                                <li><i className="fas fa-check" />Data Visualization</li>
                                <li><i className="fas fa-check" />Schedule Appointments</li>
                            </ul>
                            <a href="/get-started" className="btn btn-primary">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}