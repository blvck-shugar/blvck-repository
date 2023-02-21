import React from 'react'

export function Skills({theme, tab}) {
  return (
    <div className='skill-gall' style={{
        display: tab===0? 'flex': 'none'
    }}>
          <div className='box'>
      <img src="images/skills/typescript.png" alt="typescript" />
      <div className='overlay'>
      </div>
    </div>
    <div className='box'>
      <img src="images/skills/next.png" alt="next" />
      <div className='overlay'>
      </div>
    </div>
    <div className='box'>
      <img src="images/skills/react.png" alt="react" />
      <div className='overlay'>
      </div>
    </div>
    <div className='box'>
      <img src="images/skills/javascript.png" alt="javascript" />
      <div className='overlay'></div>
    </div>
    <div className='box'>
      <img src="images/skills/node.png" alt="node" />
      <div className='overlay'></div>
    </div>
    <div className='box'>
      <img src="images/skills/express.png" alt="express" />
      <div className='overlay'></div>
    </div>
    <div className='box'>
      <img src="images/skills/mongo.png" alt="mongo db" />
      <div className='overlay'></div>
    </div>
    <div className='box'>
      <img src="images/skills/python.png" alt="python" />
      <div className='overlay'></div>
    </div>
    <div className='box'>
      <img src="images/skills/html.png" alt="html" />
      <div className='overlay'></div>
    </div>
    <div className='box'>
      <img src="images/skills/css.png" alt="css" />
      <div className='overlay'></div>
    </div>
</div>
  )
}
