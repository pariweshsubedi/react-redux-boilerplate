import React from "react";
import {connect} from "react-redux";

import PostList from "./PostList";

import {fetchPosts} from "../actions/postActions";

@connect((store) => {
	return {
		posts: store.posts.posts
	}
})

export default class App extends React.Component {
	componentWillMount(){
		this.props.dispatch(fetchPosts());
	}

	render(){
		return (
			<div>
				Posts from top5nepal.com
				<PostList posts = {this.props.posts} />
			</div>
		)
	}
}