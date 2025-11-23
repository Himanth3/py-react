import MotivationHero from '../components/MotivationHero';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <MotivationHero />

            <section className="code-preview-section">
                <div className="container">
                    <h3>✨ Your First Python Code:</h3>
                    <div className="code-block">
                        <pre><code>print("Hello, Coder!")</code></pre>
                    </div>
                </div>
            </section>

            <section className="benefits-section">
                <div className="container">
                    <h2>🌟 Why Learn Python?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <span className="icon">🔥</span>
                            <h3>High Demand</h3>
                            <p>One of the most sought-after skills in the tech industry.</p>
                        </div>
                        <div className="benefit-card">
                            <span className="icon">🤖</span>
                            <h3>AI & ML</h3>
                            <p>The primary language for Artificial Intelligence and Machine Learning.</p>
                        </div>
                        <div className="benefit-card">
                            <span className="icon">🎯</span>
                            <h3>Simple Syntax</h3>
                            <p>Read and write code almost like plain English.</p>
                        </div>
                        <div className="benefit-card">
                            <span className="icon">💡</span>
                            <h3>Versatile</h3>
                            <p>Build web apps, scripts, data analysis tools, and more.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
