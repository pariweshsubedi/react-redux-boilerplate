import React from "react";

import Post from "./Post";

class PostList extends React.Component {

	renderPosts(){
		return this.props.posts.map(function(post){
			return (
				<Post id={post.id} slug={post.slug} title={post.title.rendered}>
					{post.title}
				</Post>
			)
		})
	}

	render(){
		if(this.props.posts.length === 0){
			return (<div>
						<h1>
						Loading posts ... 
						</h1>
					</div>)
		}else{
			return (
				<div>
					<h1>Posts</h1>
					{this.renderPosts()}
				</div>
			)
		}
	}
}

export default PostList