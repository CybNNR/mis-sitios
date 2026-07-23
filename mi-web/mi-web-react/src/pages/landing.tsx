//import { Link } from 'react-router-dom';

function Landing() {
    return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#55aaaa' }}>
      
      <div className="window" style={{ width: '400px' }}>
        
        <div className="title-bar">
          <button aria-label="Close" className="close"></button>
          <h1 className="title" style={{ color: 'black' }}>index.txt</h1>
          <button aria-label="Resize" className="resize"></button>
        </div>
        
        <div className="separator"></div>
        
        <div className="window-pane" style={{ padding: '30px 20px', textAlign: 'center' }}>
          
          <div style={{ 
            fontFamily: 'Chicago, sans-serif', 
            fontSize: '28px', 
            fontWeight: 'normal', 
            marginBottom: '20px',
            textShadow: '1px 1px 0px white' 
          }}>
            Welcome!
          </div>
          
          <div style={{ 
            fontFamily: 'Geneva, sans-serif',
            fontSize: '16px', 
            color: 'black', 
            lineHeight: '1.6' 
          }}>
            Hey there! I'm currently building my site  feel free to explore! 

            -Frenetic Fox
          </div>
          
          <section className="field-row" style={{ justifyContent: 'center', marginTop: '30px' }}>
            <button className="btn">Explore Services</button>
          </section>
        </div>
        
      </div>
    </main>

    )
}

export default Landing;