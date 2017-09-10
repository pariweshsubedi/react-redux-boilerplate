import axios from "axios";

export function fetchPosts(){
	return function(dispatch){
		axios.get('http://top5nepal.com/wp-json/wp/v2/posts?page=1&per_page=2')
			.then((response) => {
				dispatch({type:'FETCH_POSTS_FULFILLED', payload:response.data});
			})
			.catch((err) => {
				dispatch({type:'FETCH_POSTS_REJECTED', payload:err});
			})

		// dispactch with mock data for testing
		// dispatch({type:'FETCH_POSTS_FULFILLED', 
		// 	payload:[
		// 		{id:1,"slug":"title-slug", "title":{"rendered":"Title of the post"}}
		// 		]
		// });
	}
}