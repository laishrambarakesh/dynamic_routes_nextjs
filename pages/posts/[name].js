
export const getStaticPaths = async () => {
    const res = await fetch('http://localhost/api/posts');
    const data = await res.json();

    const paths = data.map(post => {

        const postName = post.name.replace(/\s+/g, '-').toLowerCase();
        const name = postName.toString();

        return {
            params: { name: name }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {

    const name = context.params.name;

    const response = await fetch('http://localhost/api/posts/' + name);

    const postDetail = await response.json();

    return {
        props: { postDetail: postDetail }
    }
}

const Post = ({ postDetail }) => {

    return (
      
        <div>
            <h1>{postDetail.amount}</h1>
        </div>
        
    );
};

export default Post;