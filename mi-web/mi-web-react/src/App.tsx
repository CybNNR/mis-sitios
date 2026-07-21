import './index.css';

function App() {
  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#55aaaa' }}>
      
      <div className="window" style={{ width: '400px' }}>
        
        <div className="title-bar">
          <button aria-label="Close" className="close"></button>
          <h1 className="title" style={{ color: 'black' }}>Status.exe</h1>
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
            ¡Hola Mundo!
          </div>
          
          <div style={{ 
            fontFamily: 'Geneva, sans-serif',
            fontSize: '16px', 
            color: 'black', 
            lineHeight: '1.6' 
          }}>
            Mi servidor privado está funcionando con React, TypeScript y System.css.
          </div>
          
          <section className="field-row" style={{ justifyContent: 'center', marginTop: '30px' }}>
            <button className="btn">Explorar Servicios</button>
          </section>
        </div>
        
      </div>
    </main>
  );
}

export default App;