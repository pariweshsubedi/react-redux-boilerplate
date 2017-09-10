import React from "react";

import Post from "./Post";

export default class PostList extends React.Component {
	render(){
		if (this.props.posts){
			if(Object.getOwnPropertyNames(this.props.posts).length === 0){
				return (<div></div>)
			}
			var postNodes = this.props.posts.map(function(post){
				return (
					<Post id={post.id} slug={post.slug} title={post.title.rendered}>
						{post.title}
					</Post>
				)
			})
			return (
				<div>
					<h1>Posts</h1>
					{postNodes}
				</div>
			)
		}else{
			return(
				<div>
					<h1>
					Loading posts ....
					</h1>
				</div>)
		}
	}
}