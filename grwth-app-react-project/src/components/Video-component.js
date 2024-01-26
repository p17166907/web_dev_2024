import video from '../images/video-preview.png'; // Adjust the path as necessary

export function Video() {
    return (
        <section className="video bg-black">
            <div className="container-sm">
                <h2 className='video-heading text-xl text-center'>See how it works and get started in less than 2
                    minutes</h2>
                <div className="video-content">
                    <a href="/video-preview"><img src={video} alt="" className="video-preview" /></a>
                    <a href="get-started" className='btn btn-primary'>Get Started</a>
                </div>
            </div>
        </section>
    )
}