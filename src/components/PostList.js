

import "./PostList.css"


function PostList ({posts , deleteItems } ) {

    return (
        <div className="container">
            {posts.map ((e) => <div className="block_task" key={e.id} > {e.task}
                <span className="data_span">{e.data}</span>
                <button onClick={ () => deleteItems(e.id)} className="but_delete"><p>x</p></button>
            </div>
            )}
        </div>
    )
}

export  default PostList