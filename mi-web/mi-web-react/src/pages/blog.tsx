import { Link } from 'react-router-dom';
import { useState } from 'react';

function Blog() {

  const [activewindow, setactivewindow]= useState('posts');
  const [authentication, setauthentication]= useState(false);
  const [password, setpassword]= useState('');

  const [posts, setposts] = useState([
    {id: 1, dates: '2026-07-23', texts: 'System online building infraestructure'}
  ]);

  const [newtext, setnewtext] = useState('');

  const trylogin = () => {
    if(password === 'terrenaitor'){
      setauthentication(true);
    }else{
      alert('Access Denied, Fuck Off');
    }
  };

  const publishupdate = () => {
    if(newtext.trim() === '') return;

    const newPost = {
      id: posts.length + 1,
      dates: new Date().toISOString().split('T')[0], 
      texts: newtext
    };
    
    setposts([newPost, ...posts]);
    setnewtext('');
    setactivewindow('posts')

  };

    return (
          <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '100vh', backgroundColor: '#55aaaa', paddingTop: '100px', paddingBottom: '50px' }}>
            <div className="window" style={{ maxWidth: '600px', width: '100%', margin: '0 auto' }}>              
              <div className="title-bar">
                <h1 className="title" style={{ color: 'black' }}>Blog.exe</h1>
              </div>
              
              <div style={{ fontFamily: 'Chicago, sans-serif', fontSize: '35px', fontWeight: 'normal', marginBottom: '20px',textShadow: '1px 1px 0px white' }}>
                Welcome!
              </div>

              <div className="window-pane">
                <menu role="tablist" style={{ marginBottom: '20px' }}>
                  <button 
                    role="tab" 
                    aria-selected={activewindow === 'posts'} 
                    onClick={() => setactivewindow('posts')}
                  >
                    Posts
                  </button>
                  <button 
                    role="tab" 
                    aria-selected={activewindow === 'postear'} 
                    onClick={() => setactivewindow('postear')}
                  >
                    Postear (Admin)
                  </button>
                </menu>

                {activewindow === 'posts' && (
                  <article>
                    {posts.map((post) => (
                      <div key={post.id} style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px dotted gray' }}>
                        <div style={{ fontFamily: 'Chicago, sans-serif', fontSize: '14px', marginBottom: '5px' }}>
                          [{post.dates}]
                        </div>
                        <div style={{ fontFamily: 'Geneva, sans-serif' }}>
                          {post.texts}
                        </div>
                      </div>
                    ))}
                  </article>
                )}
                {activewindow === 'postear' && (
                  <article>
                    {!authentication ? (
                      <div className="field-row" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                        <label htmlFor="pass" style={{ marginBottom: '10px' }}>Verify your identity:</label>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <input id="pass" type="password" value={password} onChange={(e) => setpassword(e.target.value)}/>
                          <button className="btn" onClick={trylogin}>Verify</button>
                        </div>
                      </div>
                    ) : (
                      <div className="field-row" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                        <label style={{ marginBottom: '10px' }}>Nuevo Update:</label>
                        <textarea 
                          rows={5} 
                          style={{ width: '100%', marginBottom: '10px', fontFamily: 'Geneva, sans-serif' }}
                          value={newtext}
                          onChange={(e) => setnewtext(e.target.value)}
                        />
                        <button className="btn" onClick={publishupdate}>Publish</button>
                      </div>
                    )}
                  </article>
                )}

                <div style={{ marginTop: '30px' }}>
                  <Link to="/"><button className="btn">{'<'} Close window</button></Link>
                </div>
                
              </div>
            </div>
          </main>    
      )
}

export default Blog;